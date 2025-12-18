// src/app/local-services/dog-walkers/saltaire-dogs-pets/page.tsx
// Saltaire Dogs + Pets — landing page (server-rendered, CWV-friendly)
// Goals:
// - Convert high-intent traffic (call/WhatsApp above the fold + sticky mobile CTA)
// - Rank for long-tail local services (dog walker saltaire/shipley, pet sitting BD18, home visits, etc.)
// - Structured data: WebPage + BreadcrumbList + LocalBusiness + FAQPage + OfferCatalog

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

const PATH = '/local-services/dog-walkers/saltaire-dogs-pets'
const UPDATED = '2025-12-18'

const HERO_IMAGE = '/images/local-services/saltaire-river-saltaire-dogs-dog-walker-img.jpg'
const BRAND_IMAGE = '/images/local-services/saltaire-river-saltaire-dogs-dog-walker-img.jpg'

const BRAND = {
  name: 'Saltaire Dogs + Pets',
  shortName: 'SaltaireDogs',
  phoneDisplay: '07305 367941',
  phoneTel: 'tel:+447305367941',
  whatsappE164: '+447424208127',
  website: 'https://saltairedogs.uk',
  priceFrom: '£10',
  areas: ['Saltaire (BD18)', 'Shipley', 'Roberts Park', 'Canal / Towpath'],
  blurb:
    'Dog walking, pet sitting and home visits in Saltaire & Shipley — calm, structured care with fast WhatsApp booking.',
  trust: [
    'DBS checked (ask to see proof)',
    'Insured (ask for details if needed)',
    'Meet & greet before first booking',
    '1:1 walks available for nervous/reactive dogs',
    'Optional photo updates (and GPS route snapshots for regulars)',
  ],
} as const

type Service = { title: string; desc: string }

const SERVICES: Service[] = [
  {
    title: 'Dog walking (Saltaire & Shipley)',
    desc: 'Calm local routes around Roberts Park, riverside paths and the canal towpath — tailored to your dog’s pace and needs.',
  },
  {
    title: 'Pet sitting & home visits',
    desc: 'Holiday cover or long-day support: feeding, water, comfort checks, routine support and optional quick updates.',
  },
  {
    title: 'Puppy visits',
    desc: 'Short visits for toilet breaks, play and building calm habits — ideal if you’re working or in meetings.',
  },
  {
    title: 'Cat visits',
    desc: 'Feeding, litter routine and quiet check-ins — especially useful for shy cats who prefer staying at home.',
  },
  {
    title: 'Small pets / birds / parrots',
    desc: 'Routine-based care for small pets and birds — confirm diet, handling preferences and enrichment needs in advance.',
  },
  {
    title: 'Fish feeding',
    desc: 'Simple feeding support with clear instructions — best done with pre-portioned food to avoid overfeeding.',
  },
]

const FAQS = [
  {
    q: 'What areas do you cover?',
    a: 'Saltaire (BD18) and Shipley, plus Roberts Park and nearby canal/riverside routes. If you’re just outside the area, message and we’ll confirm availability.',
  },
  {
    q: 'How quickly can I book?',
    a: 'Fastest option is WhatsApp. Include your area, your pet details (breed/age/temperament), what you need, and preferred days. You’ll get a clear yes/no and next steps.',
  },
  {
    q: 'Do you do 1:1 walks for nervous or reactive dogs?',
    a: 'Yes — 1:1 walks are available. We’ll do a meet & greet first and plan calmer routes to reduce stress and triggers.',
  },
  {
    q: 'Do you offer photo updates or GPS route snapshots?',
    a: 'Optional photo updates are available, and GPS route snapshots can be provided for regular clients where helpful.',
  },
  {
    q: 'Do you look after pets beyond dogs?',
    a: 'Yes — home visits can include cats, small pets, birds/parrots, and fish feeding. Always confirm routine details and any medication needs in advance.',
  },
] as const

export const metadata: Metadata = {
  title: 'Saltaire Dogs + Pets — dog walker & pet sitting in Saltaire & Shipley (BD18)',
  description:
    'Dog walking, pet sitting and home visits in Saltaire & Shipley (BD18). Calm, reliable care with optional photo updates, 1:1 walks for nervous dogs, and fast WhatsApp booking.',
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: 'Saltaire Dogs + Pets — dog walking & pet sitting (BD18)',
    description:
      'Local dog walking, pet sitting and home visits in Saltaire & Shipley — fast WhatsApp booking, calm care, optional updates.',
    url: `${site.url}${PATH}`,
    type: 'website',
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 2400,
        height: 1800,
        alt: 'Dog walking in Saltaire near Roberts Park and canal-side routes',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: [`${site.url}${HERO_IMAGE}`] },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
}

function waMeLink(e164: string, text?: string) {
  const n = e164.replace(/[^\d+]/g, '').replace('+', '')
  const base = `https://wa.me/${n}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

function analyticsAttrs(action: string) {
  return {
    'data-analytics': 'saltaire-guide',
    'data-analytics-action': action,
  } as any
}

function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  )
}

function buildLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire Dogs + Pets — dog walker & pet sitting in Saltaire & Shipley (BD18)',
    url: `${base}${PATH}`,
    description: metadata.description,
    inLanguage: 'en-GB',
    dateModified: UPDATED,
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Dog walkers & pet sitters', item: `${base}/local-services/dog-walkers` },
      { '@type': 'ListItem', position: 4, name: BRAND.name, item: `${base}${PATH}` },
    ],
  }

  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: 'Pet care services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
    })),
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    url: BRAND.website,
    image: `${base}${BRAND_IMAGE}`,
    telephone: '+447305367941',
    priceRange: BRAND.priceFrom,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      postalCode: 'BD18',
      addressCountry: 'GB',
    },
    areaServed: BRAND.areas.map((s) => ({ '@type': 'Place', name: s })),
    description: BRAND.blurb,
    serviceType: SERVICES.map((s) => s.title),
    hasOfferCatalog: offerCatalog,
    sameAs: [waMeLink(BRAND.whatsappE164)],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return { webpage, breadcrumbs, localBusiness, faqLd }
}

export default function SaltaireDogsLandingPage() {
  const waPrefill = waMeLink(
    BRAND.whatsappE164,
    `Hi ${BRAND.shortName} — enquiry via SaltaireGuide.uk.
Area: (Saltaire/Shipley)
Service: (dog walking / pet sitting / home visits / cats / birds / fish)
Pet: (breed/age/temperament)
Days needed:
Anything we should know (reactive/nervous/meds):`
  )

  const { webpage, breadcrumbs, localBusiness, faqLd } = buildLd()

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={localBusiness} />
      <JsonLd obj={faqLd} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline underline-offset-4 hover:text-slate-900">
              Home
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li>
            <Link href="/local-services" className="underline underline-offset-4 hover:text-slate-900">
              Local services
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li>
            <Link href="/local-services/dog-walkers" className="underline underline-offset-4 hover:text-slate-900">
              Dog walkers &amp; pet sitters
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li aria-current="page" className="text-slate-800">
            {BRAND.name}
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <header className="bg-[#f7f1e7] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Updated: {UPDATED}</span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                  Saltaire • Shipley • BD18
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                  Roberts Park • canal towpath
                </span>
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                {BRAND.name}
              </h1>

              <p className="mt-3 max-w-prose text-lg text-slate-700">{BRAND.blurb}</p>

              {/* Buttons (remove blue/dark fills) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BRAND.phoneTel}
                  className="rounded-2xl border border-black/10 bg-[#fbf7ef] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                  {...analyticsAttrs('landing_hero_call')}
                >
                  Call {BRAND.phoneDisplay}
                </a>
                <a
                  href={waPrefill}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80"
                  {...analyticsAttrs('landing_hero_whatsapp')}
                >
                  WhatsApp (preferred) →
                </a>
                <a
                  href={BRAND.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  {...analyticsAttrs('landing_hero_visit')}
                >
                  Book on website →
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-600">
                Fast booking: WhatsApp your area + what you need + your pet details.
              </p>

              <div className="mt-4 text-sm text-slate-700">
                <b>Areas:</b> {BRAND.areas.join(', ')}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={HERO_IMAGE}
                  alt="Dog walking in Saltaire near Roberts Park and canal-side routes"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900">Starting from</div>
                  <div className="text-xs text-slate-600">Depends on walk length & needs</div>
                </div>
                <div className="text-xl font-bold text-slate-900">{BRAND.priceFrom}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Main card */}
        <section className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={BRAND_IMAGE}
                alt="Saltaire Dogs + Pets — local dog walking and pet care"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="text-sm text-slate-700">
                <b>Local coverage:</b> BD18 + Shipley
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['DBS checked', 'Insured', 'Meet & greet', '1:1 available', 'Optional updates'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">What you get</h2>
            <p className="mt-2 max-w-prose text-slate-700">
              Calm, reliable care built around real-life pet owners: clear comms, predictable routines, and a simple booking flow.
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {BRAND.trust.map((t) => (
                <li key={t} className="rounded-2xl border border-black/10 bg-[#fbf7ef] p-4 text-sm text-slate-800">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">Book in 60 seconds</div>
              <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
                <li>Tap WhatsApp and paste your area + what you need.</li>
                <li>Share your pet details (breed/age/temperament + any meds).</li>
                <li>Get confirmation + next steps (meet &amp; greet if needed).</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Services */}
        <section aria-labelledby="services">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="services" className="text-3xl font-bold tracking-tight text-slate-900">
                Services (Saltaire &amp; Shipley)
              </h2>
              <p className="mt-2 max-w-prose text-slate-700">
                Dog walking, pet sitting and home visits — including cats, small pets, birds/parrots, and fish feeding.
              </p>
            </div>
            <div className="text-xs text-slate-600">
              <span className="rounded-full border border-black/10 bg-white px-3 py-1">Local: BD18 • Roberts Park • canal towpath</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-3xl font-bold tracking-tight text-slate-900">
            FAQs
          </h2>
          <div className="mt-4 divide-y divide-black/10 rounded-3xl border border-black/10 bg-white">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back to directory */}
        <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Looking for options?</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Browse the Saltaire &amp; Shipley directory and booking checklist.
          </p>

          {/* Button (remove blue/dark fill) */}
          <div className="mt-4">
            <Link
              href="/local-services/dog-walkers"
              className="inline-flex rounded-2xl border border-black/10 bg-[#fbf7ef] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
              {...analyticsAttrs('landing_back_to_directory')}
            >
              Back to directory →
            </Link>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA (remove blue/dark fill) */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <div className="rounded-3xl border border-black/10 bg-white/95 backdrop-blur shadow-lg p-3 flex gap-2">
          <a
            href={BRAND.phoneTel}
            className="flex-1 rounded-2xl border border-black/10 bg-[#fbf7ef] px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-white"
            {...analyticsAttrs('landing_sticky_call')}
          >
            Call
          </a>
          <a
            href={waPrefill}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
            {...analyticsAttrs('landing_sticky_whatsapp')}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
