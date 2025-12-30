// src/app/admin/layout.tsx
import type { ReactNode } from "react";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function AdminLayout({ children }: { children: ReactNode }) {
  /**
   * IMPORTANT:
   * - Do NOT use fixed/inset overlay here, otherwise you hide the global Header/Footer.
   * - This layout should style the admin area, but remain inside the normal route tree.
   */
  return (
    <section className="relative isolate my-6 sm:my-8">
      {/* Light admin canvas (keeps admin readable inside the site's darker theme) */}
      <div className="relative overflow-hidden rounded-3xl border border-stone-300/80 bg-[#f6efe6] text-stone-900 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(194,65,12,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_10%,rgba(15,61,46,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_100%,rgba(0,0,0,0.10),transparent_55%)]" />
        </div>

        {/* Content */}
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          {children}
        </div>
      </div>
    </section>
  );
}
