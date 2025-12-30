// src/app/admin/(protected)/page.tsx
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type RecentRow = {
  id: string;
  created_at: string;
  status: "pending" | "approved" | "denied" | string;
  site_slug: string;
  name: string;
  submitter_email: string | null;
};

type SupaErr =
  | {
      message?: string;
      code?: string;
      details?: string;
      hint?: string;
    }
  | null;

function statusBadge(status: string) {
  switch (status) {
    case "pending":
      return "bg-amber-50 text-amber-900 ring-1 ring-amber-200";
    case "approved":
      return "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200";
    case "denied":
      return "bg-rose-50 text-rose-900 ring-1 ring-rose-200";
    default:
      return "bg-stone-50 text-stone-900 ring-1 ring-stone-200";
  }
}

function fmt(ts: string) {
  try {
    return new Date(ts).toLocaleString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return ts;
  }
}

function compactId(id: string) {
  if (!id) return "";
  return `${id.slice(0, 6)}…${id.slice(-4)}`;
}

function describeError(err: SupaErr) {
  if (!err) return "";
  const parts = [err.message, err.details, err.hint, err.code].filter(Boolean);
  return parts.join(" • ");
}

const ui = {
  // Bulletproof pills for <a> tags: enforce readable colours even if global link styles exist.
  pillPrimary:
    "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[12px] font-semibold no-underline shadow-sm " +
    "bg-[#c2410c] !text-white visited:!text-white ring-1 ring-[#c2410c]/25 hover:opacity-95 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  pillNeutral:
    "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[12px] font-semibold no-underline " +
    "bg-white text-stone-800 visited:text-stone-800 ring-1 ring-stone-200 hover:bg-stone-50 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
};

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();

  const [pendingRes, approvedRes, deniedRes, recentRes] = await Promise.all([
    supabase
      .from("business_submissions")
      .select("id", { count: "exact", head: true })
      .eq("status", "pending"),
    supabase
      .from("business_submissions")
      .select("id", { count: "exact", head: true })
      .eq("status", "approved"),
    supabase
      .from("business_submissions")
      .select("id", { count: "exact", head: true })
      .eq("status", "denied"),
    supabase
      .from("business_submissions")
      .select("id,created_at,status,site_slug,name,submitter_email")
      .order("created_at", { ascending: false })
      .limit(12),
  ]);

  const pendingErr = (pendingRes.error as any) as SupaErr;
  const approvedErr = (approvedRes.error as any) as SupaErr;
  const deniedErr = (deniedRes.error as any) as SupaErr;
  const recentErr = (recentRes.error as any) as SupaErr;

  const failures: Array<{ key: string; err: SupaErr }> = [];
  if (pendingErr) failures.push({ key: "pendingCount", err: pendingErr });
  if (approvedErr) failures.push({ key: "approvedCount", err: approvedErr });
  if (deniedErr) failures.push({ key: "deniedCount", err: deniedErr });
  if (recentErr) failures.push({ key: "recentList", err: recentErr });

  const pendingCount = pendingErr ? null : pendingRes.count ?? 0;
  const approvedCount = approvedErr ? null : approvedRes.count ?? 0;
  const deniedCount = deniedErr ? null : deniedRes.count ?? 0;

  const totalCount =
    pendingCount === null || approvedCount === null || deniedCount === null
      ? null
      : pendingCount + approvedCount + deniedCount;

  const recentRows = ((recentErr ? [] : recentRes.data) || []) as RecentRow[];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
            Admin
          </div>
          <h1 className="mt-1 text-[22px] font-semibold text-stone-900">
            Dashboard
          </h1>
          <p className="mt-1 text-[13px] text-stone-700">
            Monitor submission flow, triage pending items, and drill down fast.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin/submissions?status=pending"
            className="rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold !text-white visited:!text-white no-underline shadow-sm hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]/35 focus-visible:ring-offset-2"
          >
            Review pending
          </Link>
          <Link
            href="/admin/submissions?status=all"
            className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300/60 focus-visible:ring-offset-2"
          >
            View all
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300/60 focus-visible:ring-offset-2"
          >
            Back to site
          </Link>
        </div>
      </div>

      {failures.length > 0 ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
          <div className="text-[12px] font-semibold">
            Partial data (Supabase query issues)
          </div>
          <div className="mt-1 text-[13px] text-amber-900">
            The dashboard still loads, but some queries failed. This is almost
            always RLS/GRANT/session configuration.
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-[12px] text-amber-900">
            {failures.map((f) => (
              <li key={f.key}>
                <span className="font-semibold">{f.key}:</span>{" "}
                {describeError(f.err) || "Unknown error (empty message)"}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Pending</div>
          <div className="mt-1 text-[28px] font-semibold text-stone-900">
            {pendingCount ?? "—"}
          </div>
          <div className="mt-1 text-[12px] text-stone-600">Needs review</div>
          <div className="mt-3">
            <Link
              href="/admin/submissions?status=pending"
              className="text-[12px] font-semibold text-[#c2410c] no-underline hover:underline hover:underline-offset-4"
            >
              Open queue →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Approved</div>
          <div className="mt-1 text-[28px] font-semibold text-stone-900">
            {approvedCount ?? "—"}
          </div>
          <div className="mt-1 text-[12px] text-stone-600">Accepted</div>
          <div className="mt-3">
            <Link
              href="/admin/submissions?status=approved"
              className="text-[12px] font-semibold text-stone-700 no-underline hover:underline hover:underline-offset-4"
            >
              View approved →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Denied</div>
          <div className="mt-1 text-[28px] font-semibold text-stone-900">
            {deniedCount ?? "—"}
          </div>
          <div className="mt-1 text-[12px] text-stone-600">Rejected</div>
          <div className="mt-3">
            <Link
              href="/admin/submissions?status=denied"
              className="text-[12px] font-semibold text-stone-700 no-underline hover:underline hover:underline-offset-4"
            >
              View denied →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Total</div>
          <div className="mt-1 text-[28px] font-semibold text-stone-900">
            {totalCount ?? "—"}
          </div>
          <div className="mt-1 text-[12px] text-stone-600">All time in table</div>
          <div className="mt-3">
            <Link
              href="/admin/submissions?status=all"
              className="text-[12px] font-semibold text-stone-700 no-underline hover:underline hover:underline-offset-4"
            >
              Open archive →
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white">
        <div className="flex flex-col gap-2 border-b border-stone-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[12px] font-semibold text-stone-900">
              Recent submissions
            </div>
            <div className="mt-1 text-[12px] text-stone-600">
              Latest 12 events across statuses.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/admin/submissions?status=pending"
              className={ui.pillPrimary}
            >
              Pending
            </Link>
            <Link href="/admin/submissions?status=all" className={ui.pillNeutral}>
              All
            </Link>
          </div>
        </div>

        {recentRows.length === 0 ? (
          <div className="p-6">
            <div className="text-[14px] font-semibold text-stone-900">
              No activity yet
            </div>
            <div className="mt-1 text-[13px] text-stone-700">
              When someone submits a business, it will show up here.
            </div>
          </div>
        ) : (
          <div className="divide-y divide-stone-200">
            {recentRows.map((r) => (
              <div key={r.id} className="p-4 hover:bg-stone-50/70">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
                          statusBadge(r.status),
                        ].join(" ")}
                      >
                        {String(r.status).toUpperCase()}
                      </span>

                      <span className="text-[11px] font-semibold text-stone-600">
                        {r.site_slug}
                      </span>

                      <span className="text-[11px] text-stone-500">
                        {fmt(r.created_at)} • {compactId(r.id)}
                      </span>
                    </div>

                    <div className="mt-1 truncate text-[14px] font-semibold text-stone-900">
                      {r.name}
                    </div>

                    <div className="mt-1 text-[12px] text-stone-600">
                      Submitter:{" "}
                      <span className="font-medium text-stone-800">
                        {r.submitter_email || "—"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/admin/submissions?status=${encodeURIComponent(
                        r.status === "pending" ||
                          r.status === "approved" ||
                          r.status === "denied"
                          ? r.status
                          : "all"
                      )}&q=${encodeURIComponent(r.name)}`}
                      className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-[12px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300/60 focus-visible:ring-offset-2"
                    >
                      Open in queue
                    </Link>
                    <Link
                      href="/admin/submissions?status=pending"
                      className="rounded-xl bg-[#c2410c] px-3 py-2 text-[12px] font-semibold !text-white visited:!text-white no-underline hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2410c]/35 focus-visible:ring-offset-2"
                    >
                      Triage pending
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <div className="text-[12px] font-semibold text-stone-800">
          Operational rule
        </div>
        <div className="mt-1 text-[13px] text-stone-700">
          Optimize for speed and low click-count. If you can’t decide quickly,
          open the submission in the queue and verify details.
        </div>
      </div>
    </div>
  );
}
