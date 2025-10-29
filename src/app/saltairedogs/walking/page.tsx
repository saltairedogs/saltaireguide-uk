import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dog Walker in Saltaire, Shipley & Baildon — Saltaire Dogs",
  description:
    "Small-group and solo dog walking in Saltaire, Shipley & Baildon. Calm routes, reliable pick-ups, and photo updates after every walk.",
  alternates: { canonical: "/saltairedogs/walking" },
};

const bullets = [
  "Small groups (max four) for safety and focus",
  "Solo walks for puppies, rescues, or dogs building confidence",
  "Familiar, calm routes: canal towpath, Roberts Park, back streets",
  "Paw wipe + fresh water on return",
  "Photo + short message after each walk",
];

const faqs = [
  {
    q: "How long are the walks?",
    a: "Group walks are 45–60 minutes door-to-door. Solo walks are 30–45 minutes depending on needs.",
  },
  {
    q: "Do you collect from home?",
    a: "Yes. We pick up and drop off at your door in Saltaire, Shipley, or Baildon.",
  },
  {
    q: "Can my dog do a trial?",
    a: "Absolutely. We start with a short meet & greet, then a trial walk to make sure everyone’s happy.",
  },
  {
    q: "Do you walk in bad weather?",
    a: "Yes — with sensible adjustments for safety. Towels ready for paw wipes on return!",
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
        / <span className="text-gray-600">Dog Walking</span>
      </nav>

      <h1>Dog Walker in Saltaire, Shipley & Baildon</h1>
      <p className="lead">
        Calm, reliable walks with tiny groups and photo updates after every outing. Solo options for
        puppies and nervous dogs.
      </p>

      {/* Hero image */}
      <div className="not-prose overflow-hidden rounded-2xl">
        <Image
          src="/saltairedogs/saltaire-canal-retriever-on-lead-cobbles.jpg"
          alt="Retriever on the canal cobbles during a Saltaire walk"
          width={1600}
          height={900}
        />
      </div>

      <section>
        <h2>What we do on a typical walk</h2>
        <ul>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <p>
          We keep to familiar loops so dogs relax and enjoy themselves — canal towpath, Roberts
          Park, Hirst Wood, and quiet back streets away from traffic.
        </p>
      </section>

      <section>
        <h2>Where we cover</h2>
        <p>Saltaire, Shipley, Baildon and nearby BD18. A little outside? Ask — we often can help.</p>
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

      {/* Prev / Next */}
      <div className="not-prose mt-6 flex items-center justify-between gap-3">
        <Link href="/saltairedogs" className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50">
          ← Back to overview
        </Link>
        <Link
          href="/saltairedogs/sitting"
          className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
        >
          Next page → Sitting
        </Link>
      </div>
    </article>
  );
}
