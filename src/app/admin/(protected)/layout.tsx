// src/app/admin/(protected)/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import { requireAdmin } from "@/lib/auth/require-admin";
import AdminSignOutButton from "./signout-button";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function NavItem({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition hover:bg-stone-50"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-stone-900 group-hover:text-stone-950">
            {title}
          </div>
          <div className="mt-0.5 text-[12px] text-stone-600">{desc}</div>
        </div>
        <div className="mt-[2px] text-[12px] font-semibold text-stone-500 group-hover:text-stone-800">
          →
        </div>
      </div>
    </Link>
  );
}

export default async function AdminProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const admin = await requireAdmin("/admin");
  const env = process.env.NODE_ENV === "production" ? "PRODUCTION" : "DEVELOPMENT";

  return (
    <section className="relative">
      {/* Background wash to separate admin from public pages */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_480px_at_10%_0%,rgba(253,230,138,0.25),transparent_60%),radial-gradient(900px_480px_at_90%_0%,rgba(251,146,60,0.18),transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="space-y-4 lg:sticky lg:top-4">
              <div className="rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
                      Admin
                    </div>
                    <div className="mt-1 text-[16px] font-semibold text-stone-900">
                      Saltaire Guide Console
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-stone-700">
                    {env}
                  </span>
                </div>

                <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
                    Signed in as
                  </div>
                  <div className="mt-1 break-words text-[13px] font-semibold text-stone-900">
                    {admin.email ?? admin.userId}
                  </div>
                </div>

                <div className="mt-4">
                  <AdminSignOutButton />
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
                  Navigation
                </div>

                <div className="space-y-2">
                  <NavItem href="/admin" title="Overview" desc="Counts + recent activity" />
                  <NavItem
                    href="/admin/submissions?status=pending"
                    title="Submissions"
                    desc="Approve / deny queue"
                  />
                  <NavItem href="/" title="Back to site" desc="Public pages" />
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-4">
                <div className="text-[12px] font-semibold text-stone-800">
                  Security contract
                </div>
                <div className="mt-1 text-[12px] text-stone-700">
                  This console must be protected by Supabase Auth + RLS. If a non-admin can
                  read anything here, your policies/privileges are wrong.
                </div>
              </div>
            </div>
          </aside>

          {/* Main work area */}
          <main className="lg:col-span-9">
            <div className="rounded-3xl border border-stone-200 bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600">
                    Protected area
                  </div>
                  <div className="mt-1 text-[13px] text-stone-700">
                    Admin-only. Every query must be RLS-enforced.
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href="/admin/submissions?status=pending"
                    className="rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:opacity-95"
                  >
                    Review queue
                  </Link>
                  <Link
                    href="/admin"
                    className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 hover:bg-stone-50"
                  >
                    Overview
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6">{children}</div>
          </main>
        </div>
      </div>
    </section>
  );
}
