import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saltaire Dogs — Dog Walking & Sitting in Saltaire, Shipley, Baildon",
  description:
    "Local, kind dog walkers and sitters in Saltaire, Shipley, and Baildon. Small groups, calm routes, and photo updates. DBS-checked and insured.",
  alternates: { canonical: "/saltairedogs" },
  openGraph: {
    title: "Saltaire Dogs — Dog Walking & Sitting",
    description:
      "Local, kind dog walkers and sitters in Saltaire, Shipley, and Baildon. Small groups, calm routes, and photo updates.",
    images: ["/saltairedogs/saltaire-dog-river.png"],
    type: "article",
  },
};

const biz = {
  slug: "saltairedogs",
  name: "Saltaire Dogs",
  claimed: true,
  tagline: "Kind, local dog walking & sitting in Saltaire · Shipley · Baildon",
  short:
    "Tiny groups, calm routes, and a photo after every walk or visit. We’re local, DBS-checked, insured, and canine first-aid trained.",
  about: [
    "We live and work in Saltaire: Roberts Park, the canal towpath, Hirst Wood, and the quieter back streets are our daily loops.",
    "Small groups (max 4) or solo walks for puppies and nervous dogs.",
    "For holidays and long days, we offer in-home sitting so routines stay familiar.",
  ],
  areas: ["Saltaire", "Shipley", "Baildon", "Hirst Wood", "BD18 (nearby)"],
  features: [
    "Small-group & solo walks",
    "Puppy drop-ins",
    "Holiday dog sitting (in-home)",
    "Photo + message after each walk/visit",
    "DBS-checked, insured, first-aid trained",
  ],
  photos: [
    "/saltairedogs/saltaire-dog-river.png",
    "/saltairedogs/saltaire-canal-retriever-on-lead-cobbles.jpg",
    "/saltairedogs/saltaire-victoria-road-schnauzer-on-lead.jpg",
    "/saltairedogs/walks-from-saltaire.png",
  ],
  contact: {
    email:
      "mailto:hello@saltairedogs.uk?subject=Saltaire%20Dogs%20enquiry&body=Tell%20us%3A%0A-%20Dates%20needed%0A-%20Walks%20or%20sitting%0A-%20Dog%20name%2C%20age%2C%20breed%0A-%20Address%20(road%2Fpostcode)%0A-%20Anything%20we%20should%20know",
    emailText: "hello@saltairedogs.uk",
    phone: "", // add if you want public
  },
  lastVerified: "2025-10-21",
};

export default function Page() {
  return (
    <article className="prose prose-neutral mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-6">
      {/* Banner (sitewide CTA for other owners) */}
      <div className="mb-5 rounded-2xl border p-4 text-sm">
        📣 Run a business in Saltaire?{" "}
        <Link href="/for-business/free-audit" className="font-semibold underline">
          Claim your free listing & mini-audit
        </Link>
        .
      </div>

      {/* Hero */}
      <header className="not-prose">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={biz.photos[0]}
            alt="Dog at Saltaire riverside at sunrise"
            width={1600}
            height={900}
            priority
          />
        </div>
        <h1 className="mt-4 flex items-center gap-2">
          {biz.name}
          {biz.claimed && (
            <span className="text-xs rounded-full border border-green-200 bg-green-100 px-2 py-1 font-medium text-green-700">
              ✅ Claimed
            </span>
          )}
        </h1>
        <p className="mt-2 text-base text-gray-700">{biz.tagline}</p>
      </header>

      {/* Intro / Why us */}
      <section>
        <h2>Local, calm & reliable</h2>
        <p className="lead">{biz.short}</p>
        <ul>
          {biz.about.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      {/* Services preview → deep pages */}
      <section className="not-prose grid gap-3 sm:grid-cols-2">
        <Link href="/saltairedogs/walking" className="rounded-2xl border p-4 hover:bg-gray-50">
          <h3 className="mb-2">Dog Walking (Saltaire · Shipley · Baildon)</h3>
          <p className="text-sm">
            Tiny groups, familiar routes, solo options for puppies and nervous dogs, and photo
            updates after every walk.
          </p>
          <span className="mt-2 inline-block text-sm font-medium underline">
            Learn about walking →
          </span>
        </Link>
        <Link href="/saltairedogs/sitting" className="rounded-2xl border p-4 hover:bg-gray-50">
          <h3 className="mb-2">Dog Sitting / Holiday Care (In-home)</h3>
          <p className="text-sm">
            Keep routines steady while you’re away — your dog stays at home, we handle walks, meals,
            cuddles, and updates.
          </p>
          <span className="mt-2 inline-block text-sm font-medium underline">
            Learn about sitting →
          </span>
        </Link>
        <Link href="/saltairedogs/prices" className="rounded-2xl border p-4 hover:bg-gray-50 sm:col-span-2">
          <h3 className="mb-2">Prices & Availability</h3>
          <p className="text-sm">
            Straightforward pricing for group & solo walks, puppy visits, and in-home sitting —
            plus how to check dates.
          </p>
          <span className="mt-2 inline-block text-sm font-medium underline">See prices →</span>
        </Link>
      </section>

      {/* Feature list */}
      <section>
        <h2>What you can expect</h2>
        <ul>
          {biz.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Areas */}
      <section>
        <h2>Areas we cover</h2>
        <p>{biz.areas.join(" · ")} — if you’re just outside BD18, ask and we’ll try to help.</p>
      </section>

      {/* Gallery */}
      <section>
        <h2>Gallery</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {biz.photos.slice(1).map((src, i) => (
            <Image
              key={i}
              src={src}
              width={900}
              height={700}
              alt={
                i === 0
                  ? "Retriever on canal cobbles, Saltaire"
                  : i === 1
                  ? "Schnauzer on Victoria Road, Saltaire"
                  : "Canal walks from Saltaire"
              }
              className="rounded-xl"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="not-prose mt-6">
        <div className="rounded-2xl border p-4">
          <h3>Check dates & tell us about your dog</h3>
          <p className="text-sm">
            Email is fastest — we’ll reply today with availability and a simple next step.
          </p>
          <a
            href={biz.contact.email}
            className="inline-block mt-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-gray-50"
          >
            Email {biz.contact.emailText} →
          </a>
          <div className="mt-3 text-xs text-gray-600">
            Tip: tell us dates, walk or sitting, your area, and anything we should know.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 rounded-2xl bg-gray-50 p-4">
        <p className="m-0 text-sm">✅ Owner-verified listing.</p>
        <p className="m-0 mt-2 text-xs text-gray-500">Last verified: {biz.lastVerified}</p>
      </footer>
    </article>
  );
}
