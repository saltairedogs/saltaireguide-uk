import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Walking & Sitting Prices — Saltaire Dogs",
  description:
    "Clear local pricing for dog walking, puppy visits, daytime and overnight sitting in Saltaire, Shipley & Baildon.",
  alternates: { canonical: "/saltairedogs/prices" },
};

const rows = [
  { name: "Group walk (45–60 min)", price: "from £14", note: "Tiny groups, calm routes" },
  { name: "Solo walk (30–45 min)", price: "from £16", note: "Great for puppies & nervous dogs" },
  { name: "Puppy visit (20–30 min)", price: "from £12", note: "Toilet, play, reinforce cues" },
  { name: "In-home sitting — day", price: "from £45", note: "Walks + routine care" },
  { name: "In-home sitting — overnight", price: "from £65", note: "Evening, night, morning care" },
];

const tips = [
  "Regular bookings get friendly rates — tell us your ideal schedule.",
  "Two dogs from the same household are quoted fairly.",
  "Bank holidays and late evenings may carry a small supplement.",
];

export default function Page() {
  return (
    <article className="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-6">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-3">
        <Link href="/saltairedogs" className="underline">
          Saltaire Dogs
        </Link>{" "}
        / <span className="text-gray-600">Prices & Availability</span>
      </nav>

      <h1>Prices & Availability</h1>
      <p className="lead">
        Straightforward pricing for walks, puppy visits, and in-home sitting. Tell us your dates and
        we’ll reply today with availability.
      </p>

      <section>
        <h2>Price guide</h2>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2">Service</th>
              <th className="text-left py-2">Price</th>
              <th className="text-left py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="py-2 font-medium">{r.name}</td>
                <td className="py-2">{r.price}</td>
                <td className="py-2">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-sm text-gray-600">
          Final quote depends on location, timings, and dog needs. Multi-day and regular bookings
          are discounted fairly.
        </p>
      </section>

      <section>
        <h2>How to book</h2>
        <ol>
          <li>Email your dates and a few details about your dog.</li>
          <li>We reply with availability and a simple next step.</li>
          <li>Optional meet & greet before any booking.</li>
        </ol>
      </section>

      <section>
        <h2>Helpful tips</h2>
        <ul>
          {tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </section>

      {/* Enquiry CTA */}
      <section id="enquire" className="not-prose mt-6">
        <div className="rounded-2xl border p-4">
          <h3>Check dates now</h3>
          <p className="text-sm">
            Email is quickest — include your road/postcode, dog’s name/age/breed, and anything we
            should know.
          </p>
          <a
            href="mailto:hello@saltairedogs.uk?subject=Saltaire%20Dogs%20prices%20and%20availability&body=Tell%20us%3A%0A-%20Dates%20needed%0A-%20Walks%20or%20sitting%0A-%20Dog%20name%2C%20age%2C%20breed%0A-%20Area%20(road%2Fpostcode)%0A-%20Anything%20we%20should%20know"
            className="inline-block mt-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Email hello@saltairedogs.uk →
          </a>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="not-prose mt-6 flex items-center justify-between gap-3">
        <Link
          href="/saltairedogs/sitting"
          className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
        >
          ← Previous page
        </Link>
        <Link
          href="/saltairedogs"
          className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50"
        >
          Back to overview
        </Link>
      </div>
    </article>
  );
}
