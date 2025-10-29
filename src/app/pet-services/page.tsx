// src/app/pet-services/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pet Services in Saltaire — Dogs, Cats, Rabbits, Fish, Birds & Exotics",
  description:
    "Trusted drop-ins and feeding visits across Saltaire for dogs, cats, rabbits & small pets, fish, birds/parrots, and exotic pets. Custom requests welcome.",
  alternates: { canonical: "/pet-services" },
  openGraph: {
    title: "Saltaire Pet Services — Feeding & Drop-Ins",
    description:
      "Species-specific care: dogs, cats, rabbits, fish, birds/parrots, reptiles & other exotics. Custom requests welcome.",
    url: "/pet-services",
    type: "website",
  },
}

const WA_NUMBER = "447305367941"
const WA_TEXT = encodeURIComponent(
  "Hi Saltaire Dogs + Pets! I'm in Saltaire. My pet is [species], and I'm looking for [feeding/drop-ins/walks/other]. My street is [your street]."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

/* ------------------------------ Utility UI ------------------------------- */

const container = "mx-auto w-full max-w-6xl"
const sectionPad = "px-4 sm:px-6 lg:px-8"
const card =
  "rounded-2xl border border-gray-200 bg-white shadow-sm ring-1 ring-black/5"
const chip =
  "inline-flex items-center rounded-full border px-4 py-2 text-sm hover:shadow-sm transition"
const chipPrimary =
  "inline-flex items-center rounded-full border border-black px-4 py-2 text-sm font-medium hover:shadow-sm transition"

/* --------------------------------- Page ---------------------------------- */

export default function PetServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Hero />
      <Recommendation />
      <Services />
      <HowItWorks />
      <Coverage />
      <Faq />
      <FinalCta />
    </main>
  )
}

/* --------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section className={`${sectionPad} py-14 border-b`}>
      <div className={`${container}`}>
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Pet Services in Saltaire
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Species-specific care for your companions — dogs, cats, rabbits &
            small pets, fish, birds/parrots, reptiles & other exotics. No public
            pricing; we tailor a simple plan for your situation.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------- Recommendation ----------------------------- */
function Recommendation() {
  return (
    <section className={`${sectionPad} py-10`}>
      <div className={`${container}`}>
        <div className={`${card} p-6`}>
          <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
            Recommended local carer
          </p>
          <h2 className="mt-1 text-2xl font-semibold">Saltaire Dogs + Pets</h2>
          <p className="mt-2 text-gray-700">
            Friendly, insured local team offering reliable drop-ins and feeding
            visits every day of the week — including early mornings, evenings and
            weekends. Custom requests welcome.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="https://saltairedogs.uk"
              target="_blank"
              className={chipPrimary}
            >
              Visit saltairedogs.uk
            </Link>
            <Link href={`tel:+${WA_NUMBER}`} className={chip}>
              Call: 07305 367941
            </Link>
            <Link href={WA_LINK} target="_blank" className={chip}>
              WhatsApp: 07305 367941
            </Link>
            <Link
              href="mailto:saltairedogs@proton.me?subject=Saltaire%20pet%20services%20enquiry"
              className={chip}
            >
              Email: saltairedogs@proton.me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- Services ------------------------------- */
function Services() {
  const items: {
    title: string
    bullets: string[]
    tags: string[]
  }[] = [
    {
      title: "Dog feeding & drop-ins",
      bullets: [
        "Meal prep & fresh water",
        "Toilet break in garden",
        "Short enrichment/play",
        "Medication as provided",
      ],
      tags: ["dogs", "feeding", "drop-ins", "medication"],
    },
    {
      title: "Cat feeding & litter care",
      bullets: [
        "Feeding & water refresh",
        "Litter tray clean/replace",
        "Brush, play & photos",
        "Windowsill/door checks",
      ],
      tags: ["cats", "feeding", "litter"],
    },
    {
      title: "Rabbits & small pets",
      bullets: [
        "Rabbits, guinea pigs, hamsters",
        "Hay/veg prep & habitat tidy",
        "Clean water & spot clean",
        "Gentle handling if appropriate",
      ],
      tags: ["rabbits", "small pets", "habitat"],
    },
    {
      title: "Fish tank feeding",
      bullets: [
        "Timed flake/pellet feeding",
        "Light timers & checks",
        "Top-ups as instructed",
        "Photo update after each visit",
      ],
      tags: ["fish", "aquarium", "feeding"],
    },
    {
      title: "Birds & parrots",
      bullets: [
        "Species-appropriate diets",
        "Cage clean & enrichment",
        "Calm handling for tame birds",
        "Window & draft checks",
      ],
      tags: ["birds", "parrots", "enrichment"],
    },
    {
      title: "Reptiles & exotics",
      bullets: [
        "Snakes, geckos, tortoises & more",
        "Heat/UVB & humidity checks",
        "Live/frozen feed handling",
        "Habitat misting & spot clean",
      ],
      tags: ["reptiles", "exotics", "husbandry"],
    },
    {
      title: "Custom requests",
      bullets: [
        "Complex routines & meds (non-injection)",
        "Multi-pet households",
        "Key-holding & house checks",
        "Holiday cover & flexible schedules",
      ],
      tags: ["custom", "house check", "holiday cover"],
    },
  ]

  return (
    <section className={`${sectionPad} pb-6`}>
      <div className={`${container}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s) => (
            <article
              key={s.title}
              className={`${card} p-5 hover:shadow transition-shadow`}
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-1.5">
                {s.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border bg-gray-50 px-2 py-0.5 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ How it works ----------------------------- */
function HowItWorks() {
  return (
    <section className={`${sectionPad} py-10`}>
      <div className={`${container}`}>
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="mt-3 list-decimal pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Message or call</strong> — tell us your pet(s), street and
              dates. Share routines and any meds needed.
            </li>
            <li>
              <strong>Quick plan</strong> — we’ll suggest a simple schedule
              (visit length & frequency). No public price list; you only pay for
              what you need.
            </li>
            <li>
              <strong>Visit updates</strong> — photo + timestamp with notes after
              each drop-in.
            </li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={WA_LINK} target="_blank" className={chipPrimary}>
              WhatsApp: 07305 367941
            </Link>
            <Link href={`tel:+${WA_NUMBER}`} className={chip}>
              Call: 07305 367941
            </Link>
            <Link
              href="mailto:saltairedogs@proton.me?subject=Pet%20services%20enquiry"
              className={chip}
            >
              Email: saltairedogs@proton.me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Coverage area ---------------------------- */
function Coverage() {
  return (
    <section className={`${sectionPad} pb-10`}>
      <div className={`${container}`}>
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold">Coverage area</h2>
          <p className="mt-2 text-gray-700">
            Saltaire, Shipley (BD18) and nearby streets. If you’re just outside,
            message us — we’ll try to help or recommend someone close.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------- FAQ ---------------------------------- */
function Faq() {
  const qas = [
    {
      q: "Do you do one-off visits?",
      a: "Yes. One-offs or regular schedules are fine. We’ll agree simple timings that fit your routine.",
    },
    {
      q: "Can you handle medication?",
      a: "We can administer routine oral meds and topical treatments as instructed (no injections).",
    },
    {
      q: "Are keys safe?",
      a: "Keys are coded without addresses and stored securely. We can collect/return or use a lockbox.",
    },
    {
      q: "Will you water plants / put bins out?",
      a: "Yes — light home care is included during visits if requested.",
    },
  ]
  return (
    <section className={`${sectionPad} pb-6`}>
      <div className={`${container}`}>
        <div className={`${card} p-6`}>
          <h2 className="text-xl font-semibold">FAQs</h2>
          <div className="mt-4 space-y-4">
            {qas.map((i) => (
              <div key={i.q}>
                <h3 className="font-medium">{i.q}</h3>
                <p className="mt-1 text-gray-700">{i.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- Final CTA ------------------------------ */
function FinalCta() {
  return (
    <section className={`${sectionPad} pb-16`}>
      <div className={`${container}`}>
        <div className={`${card} p-6 text-center`}>
          <h2 className="text-xl font-semibold">Ready to sort feeding & visits?</h2>
          <p className="mt-2 text-gray-700">
            Tap below and tell us your street, pet type and dates. We’ll reply
            quickly with a simple plan.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Link href={WA_LINK} target="_blank" className={chipPrimary}>
              WhatsApp: 07305 367941
            </Link>
            <Link href={`tel:+${WA_NUMBER}`} className={chip}>
              Call: 07305 367941
            </Link>
            <Link
              href="mailto:saltairedogs@proton.me?subject=Pet%20services%20enquiry"
              className={chip}
            >
              Email us
            </Link>
            <Link
              href="https://saltairedogs.uk"
              target="_blank"
              className={chip}
            >
              saltairedogs.uk
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
