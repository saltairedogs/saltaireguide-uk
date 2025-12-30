// src/lib/auth/require-admin.ts
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminContext = {
  userId: string;
  email: string | null;
};

const DEBUG =
  process.env.NODE_ENV !== "production" &&
  (process.env.SUPABASE_DEBUG === "1" || process.env.SUPABASE_DEBUG === "true");

function safeLog(message: string, meta?: Record<string, unknown>) {
  if (!DEBUG) return;
  // eslint-disable-next-line no-console
  console.warn(`[auth/requireAdmin] ${message}`, meta ?? "");
}

function buildLoginUrl(opts: { nextPath: string; forbidden?: boolean; reason?: string }) {
  const params = new URLSearchParams();
  params.set("next", opts.nextPath || "/admin");
  if (opts.forbidden) params.set("forbidden", "1");
  // reason is only for dev debugging / UX messaging; not security-sensitive
  if (opts.reason) params.set("reason", opts.reason);
  return `/admin/login?${params.toString()}`;
}

/**
 * Hard gate for admin-only pages.
 * - If not authenticated -> redirect to login with `next`
 * - If authenticated but not admin (or profile missing / blocked) -> redirect with forbidden=1
 *
 * NOTE: relies on DB truth (`profiles.role = 'admin'`) and RLS policies.
 */
export async function requireAdmin(nextPath: string): Promise<AdminContext> {
  const safeNext = nextPath && nextPath.startsWith("/") ? nextPath : "/admin";

  // MUST await: createSupabaseServerClient is async
  const supabase = await createSupabaseServerClient();

  // 1) Auth check
  const { data: userData, error: userErr } = await supabase.auth.getUser();
  const user = userData?.user ?? null;

  if (userErr || !user) {
    safeLog("Not authenticated", { hasUser: Boolean(user), error: userErr?.message });
    redirect(buildLoginUrl({ nextPath: safeNext }));
  }

  // 2) Authorization check (DB role)
  // Treat missing/blocked profile as forbidden.
  const { data: profile, error: profileErr } = await supabase
    .from("profiles")
    .select("role,email")
    .eq("id", user.id)
    .maybeSingle();

  if (profileErr) {
    // Most common causes: RLS denies, table missing, schema mismatch.
    safeLog("Profile lookup failed", { error: profileErr.message });
    redirect(buildLoginUrl({ nextPath: safeNext, forbidden: true, reason: "profile_lookup_failed" }));
  }

  if (!profile) {
    // Row does not exist OR RLS returned nothing. Either way: forbidden.
    safeLog("Profile missing or blocked by RLS", { userId: user.id });
    redirect(buildLoginUrl({ nextPath: safeNext, forbidden: true, reason: "profile_missing" }));
  }

  if (profile.role !== "admin") {
    safeLog("User is not admin", { userId: user.id, role: profile.role });
    redirect(buildLoginUrl({ nextPath: safeNext, forbidden: true, reason: "not_admin" }));
  }

  return {
    userId: user.id,
    email: profile.email ?? user.email ?? null,
  };
}
