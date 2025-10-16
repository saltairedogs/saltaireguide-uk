// src/app/thanks/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "error";

export const metadata: Metadata = {
  title: "Thanks — we’ve got your submission",
  description:
    "Thanks for getting in touch. We’ll review your submission and follow up if needed.",
  robots: { index: false, follow: true }, // keep this out of the index
  openGraph: {
    title: "Thanks — Saltaire Guide",
    description:
      "We’ve received your submission and will follow up if needed.",
    images: [{ url: "/og/thanks.png", width: 1200, height: 630 }],
  },
};

export default function ThanksPage() {
  return (
    <main
      className="min-h-[70vh]"
      // soft paper backdrop; safe if your layout has a white base
      style={{
        background:
          "radial-gradient(70rem 40rem at 50% -10rem, #fbf7ef 10%, #fff 60%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        {/* Success card */}
        <section className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_10px_24px_rgba(34,25,17,.06),0_2px_6px_rgba(34,25,17,.05)]">
          {/* subtle top accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1"
            style={{
              background:
                "linear-gradient(90deg, #16a34a, #22c55e 40%, #a3e635 100%)",
            }}
          />

          <div className="grid gap-6 p-6 md:grid-cols-[auto,1fr] md:gap-8 md:p-10">
            {/* Success icon */}
            <div className="flex items-start justify-center md:justify-start">
              <div className="relative isolate flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-inset ring-emerald-200">
                <svg
                  viewBox="0 0 44 44"
                  className="h-9 w-9 text-emerald-600"
                  role="img"
                  aria-label="Submission received"
                >
                  <circle
                    cx="22"
                    cy="22"
                    r="21"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0"
                    className="text-emerald-100"
                  />
                  <path
                    d="M14 23.5l5 5 11-13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sg-check"
                  />
                </svg>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-full opacity-40"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #16a34a, #59cf85, #d9f99d, #16a34a)",
                    filter: "blur(10px)",
                    mask:
                      "radial-gradient(closest-side, rgba(0,0,0,.9), rgba(0,0,0,0.1))",
                  }}
                />
              </div>
            </div>

            {/* Copy */}
            <div aria-live="polite" role="status">
              <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Thanks — we’ve got it
              </h1>
              <p className="mt-3 max-w-prose text-stone-700">
                We appreciate you taking the time. We’ll review your submission
                and make updates where appropriate. If a reply’s needed, we’ll
                be in touch.
              </p>

              {/* What happens next */}
              <div className="mt-6 grid gap-3 rounded-xl border border-stone-200 bg-stone-50/60 p-4 text-sm text-stone-700 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5">📥</span>
                  <p>
                    <strong>Logged safely:</strong> your details are stored so
                    we don’t miss anything.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5">✉️</span>
                  <p>
                    <strong>Notification sent:</strong> we’ll review and reply
                    if needed.
                  </p>
                </div>
              </div>

              {/* Primary actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-stone-900 bg-stone-900 px-5 py-3 text-white transition hover:opacity-90"
                >
                  Back to home
                </Link>
                <Link
                  href="/plan"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-stone-900 transition hover:-translate-y-0.5"
                >
                  Plan your visit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested next steps */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            href="/parking"
            className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-2 text-2xl">🅿️</div>
            <h2 className="font-semibold">Parking guide</h2>
            <p className="mt-1 text-sm text-stone-600">
              Prices, maps, and free options near the village.
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4 group-hover:text-blue-800">
              View →
            </span>
          </Link>
          <Link
            href="/walks"
            className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-2 text-2xl">🥾</div>
            <h2 className="font-semibold">Walks & trails</h2>
            <p className="mt-1 text-sm text-stone-600">
              Towpath to Five-Rise, Shipley Glen and step-free routes.
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4 group-hover:text-blue-800">
              Explore →
            </span>
          </Link>
          <Link
            href="/food-drink"
            className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-2 text-2xl">🍽️</div>
            <h2 className="font-semibold">Cafés & pubs</h2>
            <p className="mt-1 text-sm text-stone-600">
              Locals’ picks for coffee, lunch and beer gardens.
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-blue-700 underline underline-offset-4 group-hover:text-blue-800">
              See places →
            </span>
          </Link>
        </section>
      </div>

      {/* Minimal CSS for the success stroke animation */}
      <style
        // keep styles local to this page
        dangerouslySetInnerHTML={{
          __html: `
.sg-check{ stroke-dasharray: 54; stroke-dashoffset: 54; }
@keyframes sg-draw { to { stroke-dashoffset: 0; } }
.sg-check { animation: sg-draw .7s cubic-bezier(.2,.7,.2,1) .15s forwards; }
`,
        }}
      />
    </main>
  );
}
