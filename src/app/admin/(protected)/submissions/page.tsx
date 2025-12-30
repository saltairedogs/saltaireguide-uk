// src/app/admin/(protected)/submissions/page.tsx
import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/require-admin";
import { setSubmissionStatus } from "./actions";

export const dynamic = "force-dynamic";

type SearchParams = {
  status?: string;
  q?: string;
};

type SubmissionRow = {
  id: string;
  created_at: string;
  updated_at: string;
  status: "pending" | "approved" | "denied" | string;
  site_slug: string;
  submitter_name: string | null;
  submitter_email: string | null;
  name: string;
  categories: string[];
  price_range: string | null;
  address: string | null;
  postcode: string | null;
  phone: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  short_desc: string | null;
  long_desc: string | null;
  payload: unknown;
  owner_id: string | null;
};

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

function safeUrl(u: string | null) {
  if (!u) return null;
  const v = u.trim();
  if (!v) return null;
  if (v.startsWith("http://") || v.startsWith("https://")) return v;
  return `https://${v}`;
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

export default async function AdminSubmissionsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  await requireAdmin("/admin/submissions");

  const sp = await searchParams;
  const status = (sp.status || "pending").toLowerCase();
  const q = (sp.q || "").trim();

  const supabase = await createSupabaseServerClient();

  // Core list query (cap to 200 to keep it sane)
  let listQuery = supabase
    .from("business_submissions")
    .select(
      "id,created_at,updated_at,status,site_slug,submitter_name,submitter_email,name,categories,price_range,address,postcode,phone,website,instagram,facebook,short_desc,long_desc,payload,owner_id"
    )
    .order("created_at", { ascending: false })
    .limit(200);

  if (status !== "all") listQuery = listQuery.eq("status", status);
  if (q) listQuery = listQuery.ilike("name", `%${q}%`);

  // Lightweight counts for the header (admin-only via RLS anyway)
  const [pending, approved, denied, list] = await Promise.all([
    supabase
      .from("business_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending"),
    supabase
      .from("business_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved"),
    supabase
      .from("business_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "denied"),
    listQuery,
  ]);

  if (pending.error) throw new Error(pending.error.message);
  if (approved.error) throw new Error(approved.error.message);
  if (denied.error) throw new Error(denied.error.message);
  if (list.error) throw new Error(list.error.message);

  const rows = (list.data || []) as SubmissionRow[];
  const pendingCount = pending.count ?? 0;
  const approvedCount = approved.count ?? 0;
  const deniedCount = denied.count ?? 0;

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
            Moderation
          </div>
          <h1 className="mt-1 text-[22px] font-semibold text-stone-900">
            Business submissions queue
          </h1>
          <p className="mt-1 text-[13px] text-stone-700">
            Fast triage: scan, open details only when needed, and keep actions tight.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/admin"
            className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-[13px] font-semibold text-stone-800 hover:bg-stone-50"
          >
            Overview
          </Link>
          <Link
            href="/admin/submissions?status=pending"
            className="rounded-xl bg-[#c2410c] px-3 py-2 text-[13px] font-semibold text-white hover:opacity-95"
          >
            Pending
          </Link>
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Pending</div>
          <div className="mt-1 text-[26px] font-semibold text-stone-900">{pendingCount}</div>
          <div className="mt-1 text-[12px] text-stone-600">Needs review</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Approved</div>
          <div className="mt-1 text-[26px] font-semibold text-stone-900">{approvedCount}</div>
          <div className="mt-1 text-[12px] text-stone-600">Visible / ready</div>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <div className="text-[12px] font-semibold text-stone-700">Denied</div>
          <div className="mt-1 text-[26px] font-semibold text-stone-900">{deniedCount}</div>
          <div className="mt-1 text-[12px] text-stone-600">Rejected</div>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-stone-200 bg-white p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {[
              ["pending", "Pending"],
              ["approved", "Approved"],
              ["denied", "Denied"],
              ["all", "All"],
            ].map(([k, label]) => {
              const active = status === k;
              return (
                <Link
                  key={k}
                  href={`/admin/submissions?status=${encodeURIComponent(k)}${
                    q ? `&q=${encodeURIComponent(q)}` : ""
                  }`}
                  className={[
                    "rounded-full px-3 py-1.5 text-[12px] font-semibold",
                    active
                      ? "bg-stone-900 text-white"
                      : "bg-stone-50 text-stone-800 ring-1 ring-stone-200 hover:bg-stone-100",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <form method="GET" className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input type="hidden" name="status" value={status} />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search business name…"
              className="h-10 w-full min-w-[240px] rounded-xl border border-stone-300 bg-white px-3 text-[13px] text-stone-900 outline-none focus:ring-2 focus:ring-[#c2410c]/25"
            />
            <button className="h-10 rounded-xl bg-[#c2410c] px-4 text-[13px] font-semibold text-white hover:opacity-95">
              Search
            </button>
          </form>
        </div>

        <div className="mt-3 text-[12px] text-stone-600">
          Showing <span className="font-semibold text-stone-900">{rows.length}</span> results
          {status !== "all" ? (
            <>
              {" "}
              for <span className="font-semibold text-stone-900">{status}</span>
            </>
          ) : null}
          {q ? (
            <>
              {" "}
              matching <span className="font-semibold text-stone-900">“{q}”</span>
            </>
          ) : null}
          .
        </div>
      </div>

      {/* Queue */}
      <div className="space-y-3">
        {rows.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <div className="text-[14px] font-semibold text-stone-900">No results</div>
            <div className="mt-1 text-[13px] text-stone-700">
              Change filters or search query.
            </div>
          </div>
        ) : null}

        {rows.map((row) => {
          const website = safeUrl(row.website);
          const instagram = safeUrl(row.instagram);
          const facebook = safeUrl(row.facebook);

          return (
            <details
              key={row.id}
              className="group rounded-2xl border border-stone-200 bg-white shadow-sm open:shadow"
            >
              <summary className="cursor-pointer list-none p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold",
                          statusBadge(row.status),
                        ].join(" ")}
                      >
                        {row.status.toUpperCase()}
                      </span>

                      <span className="text-[11px] font-semibold text-stone-600">
                        {row.site_slug}
                      </span>

                      <span className="text-[11px] text-stone-500">
                        {fmt(row.created_at)} • {compactId(row.id)}
                      </span>
                    </div>

                    <div className="mt-1 truncate text-[15px] font-semibold text-stone-900">
                      {row.name}
                    </div>

                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-stone-600">
                      <span>
                        Categories:{" "}
                        <span className="font-medium text-stone-800">
                          {(row.categories || []).join(", ") || "—"}
                        </span>
                      </span>
                      <span>
                        Price:{" "}
                        <span className="font-medium text-stone-800">
                          {row.price_range || "—"}
                        </span>
                      </span>
                      <span>
                        Submitter:{" "}
                        <span className="font-medium text-stone-800">
                          {row.submitter_name || "—"}
                        </span>{" "}
                        <span className="text-stone-500">{row.submitter_email || ""}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <form action={setSubmissionStatus}>
                      <input type="hidden" name="id" value={row.id} />
                      <input type="hidden" name="status" value="approved" />
                      <button className="rounded-xl bg-emerald-700 px-3 py-2 text-[12px] font-semibold text-white hover:opacity-95">
                        Approve
                      </button>
                    </form>

                    <form action={setSubmissionStatus}>
                      <input type="hidden" name="id" value={row.id} />
                      <input type="hidden" name="status" value="denied" />
                      <button className="rounded-xl bg-rose-700 px-3 py-2 text-[12px] font-semibold text-white hover:opacity-95">
                        Deny
                      </button>
                    </form>

                    <form action={setSubmissionStatus}>
                      <input type="hidden" name="id" value={row.id} />
                      <input type="hidden" name="status" value="pending" />
                      <button className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-[12px] font-semibold text-stone-800 hover:bg-stone-50">
                        Back to pending
                      </button>
                    </form>

                    <span className="ml-1 inline-flex items-center rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 text-[12px] font-semibold text-stone-700">
                      Details <span className="ml-2 text-stone-400 group-open:hidden">+</span>
                      <span className="ml-2 text-stone-400 hidden group-open:inline">–</span>
                    </span>
                  </div>
                </div>
              </summary>

              <div className="border-t border-stone-200 p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                    <div className="text-[12px] font-semibold text-stone-700">Location</div>
                    <div className="mt-1 text-[13px] text-stone-900">
                      {[row.address, row.postcode].filter(Boolean).join(", ") || "—"}
                    </div>
                    <div className="mt-2 text-[12px] text-stone-600">
                      Phone: <span className="font-medium text-stone-800">{row.phone || "—"}</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                    <div className="text-[12px] font-semibold text-stone-700">Links</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {website ? (
                        <a
                          href={website}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-stone-800 ring-1 ring-stone-200 hover:bg-stone-50"
                        >
                          Website
                        </a>
                      ) : (
                        <span className="text-[12px] text-stone-500">Website: —</span>
                      )}

                      {instagram ? (
                        <a
                          href={instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-stone-800 ring-1 ring-stone-200 hover:bg-stone-50"
                        >
                          Instagram
                        </a>
                      ) : null}

                      {facebook ? (
                        <a
                          href={facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-stone-800 ring-1 ring-stone-200 hover:bg-stone-50"
                        >
                          Facebook
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-3 md:col-span-2">
                    <div className="text-[12px] font-semibold text-stone-700">Descriptions</div>
                    <div className="mt-2 text-[13px] text-stone-900">
                      {row.short_desc || "—"}
                    </div>
                    {row.long_desc ? (
                      <div className="mt-2 text-[13px] text-stone-700">{row.long_desc}</div>
                    ) : null}
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-3 md:col-span-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[12px] font-semibold text-stone-700">Raw payload</div>
                      <div className="text-[11px] text-stone-500">
                        Updated: {fmt(row.updated_at)}
                      </div>
                    </div>
                    <pre className="mt-2 max-h-[360px] overflow-auto rounded-xl border border-stone-200 bg-stone-50 p-3 text-[12px] text-stone-800">
{JSON.stringify(row.payload, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
