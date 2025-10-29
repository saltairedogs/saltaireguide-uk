import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Sitting / Holiday Care in Saltaire & Shipley — Saltaire Dogs",
  description:
    "In-home dog sitting so routines stay familiar while you’re away. Daytime and overnight options in Saltaire, Shipley & Baildon.",
  alternates: { canonical: "/saltairedogs/sitting" },
};

const steps = [
  { title: "1) Quick intro", text: "Tell us dates, your area, and anything we should know." },
  { title: "2) Meet & greet", text: "We visit your home and meet your dog before any booking." },
  {
    title: "3) Confirm & relax",
    text: "We send a simple summary. On the day, we handle walks, meals, cuddles, and updates.",
  },
];

const inclusions = [
  "Your dog stays at home — no kennels",
  "Familiar local walks",
  "Meals as directed; meds if needed",
  "Photo + short message updates",
  "House bits: bring mail in, water plants, lights/curtains",
];

const faqs = [
  {
    q: "Do you offer overnights?",
    a: "Yes, we do overnight in-home sitting. Limited availability — please check dates early.",
  },
  {
    q: "Can you do just daytime visits?",
    a: "Yes. We can schedule 2–4 visits per day around your dog’s routine.",
  },
  {
    q: "What areas do you cover for sitting?",
    a: "Primarily Saltaire, Shipley, Baildon and nearby BD18. For further afield, ask.",
  },
  {
    q: "Will you keep us updated?",
    a: "Of course. You’ll get daily photos and a short note so you can relax.",
  },
];

export default function Page() {
  return (
    <article className="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-6">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-3">
        <Link href="/saltairedogs" className="underline">
          Saltaire Dogs
        </Link>{" "}
        / <span className="text-gray-600">Dog Sitting / Holiday Care</span>
      </nav>

      <h1>Dog Sitting / Holiday Care (In-home)</h1>
      <p className="lead">
        Keep routines steady while you’re away — your dog sleeps at home, we stick to familiar
        walks, meals, and cuddles, with photo updates.
      </p>

      <section>
        <h2>What’s included</h2>
        <ul>
          {inclusions.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>How booking works</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border p-4">
              <p className="m-0 text-sm font-semibold">{s.title}</p>
              <p className="m-0 mt-1 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-xl border p-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="not-prose mt-6">
        <div className="rounded-2xl border p-4">
          <h3>Check dates</h3>
          <p className="text-sm">
            Email is quickest — tell us the dates, your area, and your dog’s routine.
          </p>
          <a
            href="mailto:hello@saltairedogs.uk?subject=Dog%20Sitting%20dates&body=Tell%20us%3A%0A-%20Dates%20needed%0A-%20Dog%20name%2C%20age%2C%20breed%0A-%20Area%20(road%2Fpostcode)%0A-%20Routine%20notes"
            className="inline-block mt-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Email hello@saltairedogs.uk →
          </a>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="not-prose mt-6 flex items-center justify-between gap-3">
        <Link
          href="/saltairedogs/walking"
          className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
        >
          ← Previous page
        </Link>
        <Link
          href="/saltairedogs/prices"
          className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
        >
          Next page → Prices
        </Link>
      </div>
    </article>
  );
}
