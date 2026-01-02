// src/app/admin/(protected)/submissions/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/require-admin";

/**
 * Business submissions moderation actions (admin-only).
 *
 * Security posture:
 * - AuthZ: enforced via requireAdmin() + RLS on business_submissions.
 * - Input validation: UUID + status allowlist + normalization.
 * - Concurrency (optional): if caller provides updated_at, we only update if it matches.
 * - Diagnostics: optional, non-secret logging for dev.
 */

const DEBUG =
  process.env.NODE_ENV !== "production" &&
  (process.env.SUPABASE_DEBUG === "1" || process.env.SUPABASE_DEBUG === "true");

function logDebug(message: string, meta?: Record<string, unknown>) {
  if (!DEBUG) return;
  // eslint-disable-next-line no-console
  console.warn(`[admin/actions] ${message}`, meta ?? "");
}

const ALLOWED_STATUSES = new Set(["pending", "approved", "rejected"] as const);
type AllowedStatus = "pending" | "approved" | "rejected";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function requireUuid(id: string) {
  if (!UUID_RE.test(id)) throw new Error("Invalid submission id.");
}

function normalizeStatus(v: string): AllowedStatus {
  const s = String(v || "").trim().toLowerCase();
  if (!ALLOWED_STATUSES.has(s as AllowedStatus)) throw new Error("Invalid status.");
  return s as AllowedStatus;
}

type SupaErr = {
  message?: string;
  code?: string;
  details?: string;
  hint?: string;
} | null;

function describeError(err: SupaErr) {
  if (!err) return "";
  const parts = [err.message, err.details, err.hint, err.code].filter(Boolean);
  return parts.join(" • ");
}

/**
 * FormData contract:
 * - id: uuid (required)
 * - status: "pending" | "approved" | "rejected" (required)
 * - updated_at: ISO timestamp string (optional; optimistic concurrency)
 */
export async function setSubmissionStatus(formData: FormData) {
  // 1) Parse + validate (fail fast)
  const id = String(formData.get("id") || "").trim();
  const status = normalizeStatus(String(formData.get("status") || ""));
  const expectedUpdatedAtRaw = String(formData.get("updated_at") || "").trim();

  if (!id) throw new Error("Missing submission id.");
  requireUuid(id);

  // 2) AuthZ (server-side redirect if not admin)
  await requireAdmin("/admin/submissions");

  const supabase = await createSupabaseServerClient();

  // 3) Optional optimistic concurrency
  // If expectedUpdatedAtRaw is supplied, only update when updated_at matches,
  // preventing accidental overwrites between multiple admin sessions/tabs.
  let q = supabase
    .from("business_submissions")
    .update({ status })
    .eq("id", id)
    .select("id,status,updated_at");

  if (expectedUpdatedAtRaw) {
    // If this doesn't match, update affects 0 rows and we treat it as a conflict.
    q = q.eq("updated_at", expectedUpdatedAtRaw);
  }

  const { data, error } = await q;

  if (error) {
    const e = (error as any) as SupaErr;
    logDebug("setSubmissionStatus update failed", {
      id,
      status,
      error: describeError(e) || "unknown",
    });
    // Avoid leaking internals; admin can inspect logs if needed.
    throw new Error(describeError(e) || "Update failed.");
  }

  // 4) Conflict / not found handling
  // - If expectedUpdatedAtRaw was provided, 0 rows implies "stale write" or "id missing".
  // - If not provided, 0 rows is usually "id missing" (or RLS blocked with no error, depending on policy).
  if (!data || data.length === 0) {
    if (expectedUpdatedAtRaw) {
      throw new Error(
        "Update conflict: the submission changed since you loaded the page. Refresh and try again."
      );
    }
    throw new Error("No rows updated. Check the submission id and RLS policies.");
  }

  // 5) Revalidate admin surfaces that depend on these counts/lists
  revalidatePath("/admin");
  revalidatePath("/admin/submissions");
}
