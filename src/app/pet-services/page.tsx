// src/app/pet-services/page.tsx
// Saltaire Dogs + Pets — primary pet sitting & feeding service
// - Server component only (no client JS), CWV-friendly
// - Strong on-page SEO for: dog sitting, cat sitting, fish feeding,
//   parrot sitting, reptile & exotic pet care in Saltaire & Shipley
// - JSON-LD: WebPage + LocalBusiness (pet sitting) + FAQPage

import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/config/site"

export const dynamic = "error"

const WA_NUMBER = "447424208127"
const WA_DISPLAY = "+44 7424 208127"
const WA_TEXT = encodeURIComponent(
  "Hi Saltaire Dogs + Pets! I'm in Saltaire/Shipley. My pet is [species] and I need help with [feeding / drop-ins / sitting / other]. My street is [your street]."
)
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`

/* ------------------------------ Metadata ---------------------------------- */

export const metadata: Metadata = {
  title:
    "Pet sitting & feeding in Saltaire & Shipley — Saltaire Dogs + Pets (dogs, cats, fish, birds, exotics)",
  description:
    "Saltaire Dogs + Pets is the #1 local pet sitting and feeding service for Saltaire & Shipley (BD18). Drop-ins and home visits for dogs, cats, rabbits, fish, birds/parrots, reptiles and exotic pets — with WhatsApp photo updates after every visit.",
  alternates: { canonical: `${site.url}/pet-services` },
  openGraph: {
    title:
      "Saltaire Dogs + Pets — local pet sitting & feeding in Saltaire & Shipley",
    description:
      "Trusted, insured pet care from locals: dog sitting, cat feeding, fish tank checks, parrot visits and exotic pet care. Daily WhatsApp photo updates.",
    url: `${site.url}/pet-services`,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
}

/* ----------------------------- UI primitives ------------------------------ */

const container = "mx-auto w-full max-w-6xl"
const sectionPad = "px-4 sm:px-6 lg:px-8"
const card =
  "rounded-2xl border border-amber-100/70 bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
const chip =
  "inline-flex items-center rounded-full border border-amber-200/70 bg-white/80 px-4 py-2 text-sm text-stone-800 hover:border-amber-400 hover:bg-amber-50 transition"
const chipPrimary =
  "inline-flex items-center rounded-full border border-amber-500 bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 shadow-sm hover:bg-amber-400 transition"

/* --------------------------------- Page ---------------------------------- */

export default function PetServicesPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fef3c7,_#fff7ed)]">
      <Hero />
      <Recommendation />
      <StoryStrip />
      <Services />
      <HowItWorks />
      <Coverage />
      <Faq />
      <FinalCta />
      <JsonLd />
    </main>
  )
}

/* --------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className={`${sectionPad} pb-12 pt-14 border-b border-amber-100`}>
      <div className={container}>
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Saltaire Dogs + Pets
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Pet sitting & feeding in Saltaire & Shipley
          </h1>
          <p className="text-base text-stone-700 sm:text-lg">
            Going away, long shifts or hospital visits? We’re a small, insured
            local team looking after{" "}
            <strong>dogs, cats, rabbits, small furries, fish, birds/parrots and
            exotic pets</strong> across Saltaire & Shipley (BD18) — with
            WhatsApp photo updates after every visit.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-stone-700 sm:text-sm">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1">
              🏡 Home visits & drop-ins
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1">
              📸 Photo + timestamp each visit
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1">
              🐾 Dogs, cats, fish, birds & exotics
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={WA_LINK} target="_blank" className={chipPrimary}>
              WhatsApp us: {WA_DISPLAY}
            </Link>
            <Link href={`tel:+${WA_NUMBER}`} className={chip}>
              Call: {WA_DISPLAY}
            </Link>
            <Link
              href="mailto:saltairedogs@proton.me?subject=Saltaire%20pet%20sitting%20enquiry"
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

/* ---------------------------- Recommendation ----------------------------- */

function Recommendation() {
  return (
    <section className={`${sectionPad} py-8`}>
      <div className={container}>
        <div className={`${card} p-6 sm:p-7`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            Our #1 local recommendation
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">
            Saltaire Dogs + Pets — trusted pet sitting & feeding service for
            Saltaire & Shipley
          </h2>
          <p className="mt-2 text-sm text-stone-700 sm:text-[0.95rem]">
            We recommend <strong>Saltaire Dogs + Pets</strong> as the primary{" "}
            <strong>
              dog sitting, cat sitting, small pet care, fish feeding, parrot
              sitting and exotic pet care service in Saltaire &amp; Shipley
            </strong>
            . Visits are tailored around your routine — early mornings, evenings
            and weekends included — with clear communication and sensible
            pricing.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
            <div className="flex gap-2">
              <span aria-hidden className="mt-0.5">
                ✅
              </span>
              <p>Insured local carers, familiar with Saltaire &amp; BD18.</p>
            </div>
            <div className="flex gap-2">
              <span aria-hidden className="mt-0.5">
                🐾
              </span>
              <p>
                Dogs, cats, rabbits, fish, birds/parrots, reptiles &amp; other
                exotics.
              </p>
            </div>
            <div className="flex gap-2">
              <span aria-hidden className="mt-0.5">
                💬
              </span>
              <p>WhatsApp photo updates so you can actually relax while away.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="https://saltairedogs.uk"
              target="_blank"
              className={chipPrimary}
            >
              Visit saltairedogs.uk
            </Link>
            <Link href={WA_LINK} target="_blank" className={chip}>
              WhatsApp: {WA_DISPLAY}
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

/* ----------------------------- Story / trust ----------------------------- */

function StoryStrip() {
  return (
    <section className={`${sectionPad} pb-6`}>
      <div className={container}>
        <div className="rounded-2xl border border-amber-100 bg-amber-50/80 px-5 py-5 text-sm text-stone-800 sm:px-6">
          <h2 className="text-base font-semibold text-stone-900 sm:text-lg">
            Local, not a faceless app
          </h2>
          <p className="mt-2">
            Saltaire Dogs + Pets is run by people who actually live in the
            Saltaire/Shipley area. Most bookings are neighbours working long
            shifts, people visiting family, or folk who suddenly need a hospital
            stay and don’t want to stress about their animals. We treat each
            home like it’s our own, and each visit comes with a quick update so
            you’re not left wondering.
          </p>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- Services ------------------------------- */

function Services() {
  const items: {
    title: string
    emoji: string
    bullets: string[]
    tags: string[]
  }[] = [
    {
      title: "Dog feeding, pop-ins & sitting",
      emoji: "🐶",
      bullets: [
        "Meal prep, fresh water & quick garden break",
        "Short play, cuddle or enrichment to break up the day",
        "Medication as provided (no injections)",
        "Perfect for long shifts, nights away or hospital stays",
      ],
      tags: ["dog sitting", "dog feeding", "drop-ins", "Saltaire & Shipley"],
    },
    {
      title: "Cat feeding, litter & house checks",
      emoji: "🐱",
      bullets: [
        "Feeding and water refresh exactly how you do it",
        "Litter tray scooped/changed and small floor clean",
        "Brush, play & window checks so everything feels normal",
        "Lights/blinds/post as agreed so the house looks “lived in”",
      ],
      tags: ["cat sitting", "cat visits", "litter care"],
    },
    {
      title: "Rabbits & small pets",
      emoji: "🐰",
      bullets: [
        "Rabbits, guinea pigs, hamsters, rats & more",
        "Hay, pellets & veg prepared to your routine",
        "Spot-clean hutches, cages & runs as needed",
        "Gentle handling or “quiet company” based on temperament",
      ],
      tags: ["rabbits", "small pets", "holiday cover"],
    },
    {
      title: "Fish tank & aquarium feeding",
      emoji: "🐟",
      bullets: [
        "Flake/pellet/auto-feeder checks for cold-water & tropical fish",
        "Timer & light checks so tanks stay on schedule",
        "Top-ups & basic visual health check (no water-testing service)",
        "Photo or short video so you can see levels while away",
      ],
      tags: ["fish feeding", "aquarium checks", "holiday fish care"],
    },
    {
      title: "Bird & parrot visits",
      emoji: "🦜",
      bullets: [
        "Species-appropriate food offered exactly as instructed",
        "Cage clean, enrichment toys rotated & fresh water",
        "Calm interaction for tame birds; hands-off for nervous ones",
        "Draft, window & temperature checks for comfort",
      ],
      tags: ["parrot sitting", "bird care", "cage cleaning"],
    },
    {
      title: "Reptiles & exotic pets",
      emoji: "🦎",
      bullets: [
        "Snakes, geckos, tortoises, invertebrates & more",
        "Heat/UVB & humidity checks with simple logging",
        "Live/frozen food offered & waste removed as per your routine",
        "Habitat misting & spot-cleaning between deep cleans",
      ],
      tags: ["reptile care", "exotic pet sitting", "humidity checks"],
    },
    {
      title: "Custom routines & multi-pet homes",
      emoji: "✨",
      bullets: [
        "Complex routines and non-injection medication welcome",
        "Multi-species households and key-holding for regulars",
        "Plant watering, bin days & curtain/light rotation during holidays",
        "We’ll build a simple, written plan so everyone’s clear",
      ],
      tags: ["custom plan", "house checks", "holiday cover"],
    },
  ]

  return (
    <section className={`${sectionPad} pb-4 pt-4`}>
      <div className={container}>
        <div className="mb-5 max-w-3xl space-y-2">
          <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
            What we actually do on visits
          </h2>
          <p className="text-sm text-stone-700 sm:text-[0.95rem]">
            Every home is different, but these are the core{" "}
            <strong>
              dog sitting, cat sitting, fish feeding, parrot visits and exotic
              pet care
            </strong>{" "}
            options we’re asked for in Saltaire &amp; Shipley.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article
              key={s.title}
              className={`${card} flex h-full flex-col p-5 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-2">
                <div className="text-xl" aria-hidden>
                  {s.emoji}
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  {s.title}
                </h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-stone-700">
                {s.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-stone-700">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-amber-50 px-2 py-0.5"
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
  const steps = [
    {
      title: "1. Say hello on WhatsApp",
      body: `Tell us your street, pet species, dates and what you need: dog sitting, cat feeding, fish tank checks, parrot visits or something more complex.`,
      icon: "💬",
    },
    {
      title: "2. We agree a simple plan",
      body: `We’ll suggest visit length and frequency, confirm exactly what we’ll do in each visit and give a clear price. You only pay for what you actually need.`,
      icon: "📝",
    },
    {
      title: "3. Visits & photo updates",
      body: `Each visit includes a quick WhatsApp message with a photo, timestamp and short note (“ate well”, “meds given”, “tank level fine”).`,
      icon: "📸",
    },
  ]

  return (
    <section className={`${sectionPad} py-10`}>
      <div className={container}>
        <div className="mb-5 max-w-3xl space-y-2">
          <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
            How booking works
          </h2>
          <p className="text-sm text-stone-700 sm:text-[0.95rem]">
            No app sign-ups or complicated forms — just a quick conversation and
            a written plan so you know what’s happening while you’re away.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="h-full rounded-2xl border border-amber-100 bg-white/90 p-5 text-sm text-stone-800 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span aria-hidden className="text-xl">
                  {step.icon}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="mt-2 leading-relaxed">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={WA_LINK} target="_blank" className={chipPrimary}>
            WhatsApp us about your pet
          </Link>
          <Link href={`tel:+${WA_NUMBER}`} className={chip}>
            Or call: {WA_DISPLAY}
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ Coverage area ---------------------------- */

function Coverage() {
  return (
    <section className={`${sectionPad} pb-10`}>
      <div className={container}>
        <div className="max-w-3xl rounded-2xl border border-amber-100 bg-white/90 p-6 text-sm text-stone-800">
          <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
            Coverage area
          </h2>
          <p className="mt-2">
            Most visits are in <strong>Saltaire</strong> and{" "}
            <strong>Shipley (BD18)</strong>: the village streets, Nab Wood,
            central Shipley, Victoria Road/Bingley Road, Dockfield and nearby
            estates.
          </p>
          <p className="mt-2">
            If you&apos;re just outside this area, send a quick WhatsApp with
            your street and we&apos;ll either try to help or recommend someone
            closer.
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
      q: "Do you offer dog sitting and dog walking in Saltaire & Shipley?",
      a: "We mainly focus on home visits, feeding and drop-ins, but we can sometimes add short local walks as part of a visit. For full-length walks we may recommend one of the local dog walking businesses we trust.",
    },
    {
      q: "Can you look after fish, parrots or exotic pets?",
      a: "Yes. We regularly care for fish tanks, parrots and a range of reptiles and exotics. Before confirming a booking we’ll ask for your exact setup and routine so we’re confident we can follow it safely.",
    },
    {
      q: "Are you insured and DBS-checked?",
      a: "Saltaire Dogs + Pets operates with pet business insurance and carers with DBS checks where appropriate. You can ask to see proof before confirming a booking.",
    },
    {
      q: "Do you do one-off emergency visits?",
      a: "Where possible, yes. If you’ve been delayed travelling or suddenly admitted to hospital, message us and we’ll try to arrange a same-day check on your pets.",
    },
    {
      q: "How are keys handled?",
      a: "Keys are coded without addresses and stored securely between visits. We can collect and return them in person, or use a lockbox if you prefer.",
    },
    {
      q: "Will you water plants, bring bins in or open/close curtains?",
      a: "Yes. Light home-care tasks like plants, post, bins and curtains can be included in your visit plan so your house still feels lived-in while you’re away.",
    },
  ]

  return (
    <section className={`${sectionPad} pb-8`}>
      <div className={container}>
        <div className={`${card} p-6 sm:p-7`}>
          <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
            Pet sitting — quick answers
          </h2>
          <div className="mt-4 space-y-4 text-sm text-stone-800">
            {qas.map((i) => (
              <div key={i.q}>
                <h3 className="font-semibold">{i.q}</h3>
                <p className="mt-1 leading-relaxed">{i.a}</p>
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
      <div className={container}>
        <div className={`${card} p-6 text-center sm:p-7`}>
          <h2 className="text-xl font-semibold text-stone-900 sm:text-2xl">
            Ready to sort feeding & visits?
          </h2>
          <p className="mt-2 text-sm text-stone-800 sm:text-[0.95rem]">
            Send a quick WhatsApp with your{" "}
            <strong>street, pet type and dates</strong>. We&apos;ll reply as
            soon as we can with a simple plan for dog sitting, cat feeds, fish
            checks, parrot visits or exotic pet care in Saltaire &amp; Shipley.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Link href={WA_LINK} target="_blank" className={chipPrimary}>
              WhatsApp: {WA_DISPLAY}
            </Link>
            <Link href={`tel:+${WA_NUMBER}`} className={chip}>
              Call: {WA_DISPLAY}
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
          <p className="mt-3 text-xs text-stone-600">
            Typical response time: same day, often within a few hours.
          </p>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD -------------------------------- */

function JsonLd() {
  const base = site.url

  const business = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saltaire Dogs + Pets",
    url: "https://saltairedogs.uk",
    image: `${base}/og/pet-services.png`,
    telephone: `+${WA_NUMBER}`,
    areaServed: "Saltaire & Shipley (BD18)",
    description:
      "Local pet sitting and feeding service for dogs, cats, rabbits, fish, birds/parrots, reptiles and exotic pets in Saltaire & Shipley. Home visits, drop-ins and holiday cover with WhatsApp photo updates.",
    sameAs: [
      // Add when live:
      // "https://www.instagram.com/saltairedogs",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saltaire & Shipley",
      addressRegion: "West Yorkshire",
      addressCountry: "GB",
    },
    serviceType: [
      "dog sitting",
      "cat sitting",
      "pet feeding",
      "fish feeding",
      "parrot sitting",
      "reptile & exotic pet care",
    ],
  }

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name:
      "Pet sitting & feeding in Saltaire & Shipley — Saltaire Dogs + Pets",
    url: `${base}/pet-services`,
    description:
      "Saltaire Dogs + Pets — trusted local dog sitting, cat sitting, fish feeding, bird/parrot visits and exotic pet care for Saltaire & Shipley.",
  }

  const faqEntities = [
    {
      "@type": "Question",
      name: "Do you offer dog sitting and dog walking in Saltaire & Shipley?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We mainly provide home visits, feeding and drop-ins, with short walks sometimes added as part of a visit. For full-length dog walks we may recommend trusted local dog walkers.",
      },
    },
    {
      "@type": "Question",
      name: "Can you look after fish, parrots or exotic pets while I am away?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We regularly care for fish tanks, parrots and a range of reptiles and exotic pets in Saltaire and Shipley. We confirm your exact routine and setup before accepting the booking.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured and DBS-checked?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Saltaire Dogs + Pets operates with pet business insurance and carers with DBS checks where appropriate. Proof can be provided before you confirm a booking.",
      },
    },
  ]

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities,
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
    </>
  )
}
