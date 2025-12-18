// src/app/shipley/house-of-bread/page.tsx
// House of Bread — Shipley/BD18 business page (server-rendered, CWV-friendly)
// SEO goals:
// - Rank for “House of Bread Shipley”, “House of Bread Bradford Road”, “Polish bakery Shipley/Bradford”, “BD18 bakery”
// - Provide genuinely useful info (hours, location, what to try, parking notes, links)
// - Structured data: WebPage + BreadcrumbList + Bakery + FAQPage

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

const PATH = '/shipley/house-of-bread'
const UPDATED = '2025-12-18'

// Add your own hero image when you can (front of shop / pastries / coffee).
const HERO_IMAGE = '/images/shipley/house-of-bread/hero.jpg'

const BUSINESS = {
  name: 'House of Bread',
  legalName: 'House of Bread Ltd',
  category: 'Bakery',
  description:
    'A small-batch, family-owned Polish bakery serving Shipley/BD18 and the wider Bradford area — sourdough, doughnuts, cakes and pastries with high-quality ingredients, plus specialty coffee.',
  priceRange: '£1–10',
  ratingText: '4.8★ from 181 Google reviews',
  ratingValue: 4.8,
  reviewCount: 181,
  addressLines: '253 Bradford Rd, Frizinghall, Bradford, Shipley BD18 3AB, United Kingdom',
  streetAddress: '253 Bradford Rd',
  addressLocality: 'Shipley',
  addressRegion: 'West Yorkshire',
  postalCode: 'BD18 3AB',
  addressCountry: 'GB',
  instagram: 'https://www.instagram.com/houseofbreadltd/',
  facebook: 'https://www.facebook.com/houseofbreadltd/',
  // Simple Google Maps link (safe + works everywhere)
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=House%20of%20Bread%20253%20Bradford%20Rd%20BD18%203AB',
  hoursNote: 'Opening hours can change — double-check on Google before a special trip.',
  hours: [
    { day: 'Monday', times: '8:00–19:00' },
    { day: 'Tuesday', times: '8:00–19:00' },
    { day: 'Wednesday', times: '8:00–12:00' },
    { day: 'Thursday', times: '8:00–15:00' },
    { day: 'Friday', times: '8:00–15:00' },
    { day: 'Saturday', times: '8:00–14:00' },
    { day: 'Sunday', times: 'Closed' },
  ],
} as const

const FAQS = [
  {
    q: 'Where is House of Bread in Shipley?',
    a: 'House of Bread is on Bradford Road (BD18 3AB). It’s a handy stop if you’re in Shipley, Frizinghall, or passing through the area for Saltaire and the Aire Valley.',
  },
  {
    q: 'What is House of Bread known for?',
    a: 'It’s known for Polish-style baking done in small batches — especially fresh bread, doughnuts, cakes and pastries — plus specialty coffee.',
  },
  {
    q: 'Is House of Bread good for a quick coffee stop?',
    a: 'Yes — it’s a great “grab-and-go” spot for coffee and something sweet. If you’re heading to Saltaire, it also works as a practical pre-walk stop.',
  },
  {
    q: 'What are the opening hours?',
    a: 'Typical hours are shown on this page, but hours can change seasonally — double-check the latest hours on Google before you travel.',
  },
  {
    q: 'Is it really well-rated?',
    a: `Yes — it’s currently shown as ${BUSINESS.ratingValue}★ with ${BUSINESS.reviewCount} Google reviews (as seen on the Google listing).`,
  },
] as const

export const metadata: Metadata = {
  title: 'House of Bread (Shipley, BD18) — Polish bakery on Bradford Road',
  description:
    'House of Bread in Shipley (BD18 3AB): family-owned Polish bakery for sourdough, doughnuts, cakes, pastries and specialty coffee. Address, opening hours, and how to get there.',
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: 'House of Bread (Shipley, BD18) — Polish bakery on Bradford Road',
    description:
      'A family-owned Polish bakery serving Shipley/BD18 and Bradford: bread, pastries, doughnuts and specialty coffee. Address + hours.',
    url: `${site.url}${PATH}`,
    type: 'article',
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 1600,
        height: 1200,
        alt: 'House of Bread in Shipley — Polish bakery pastries and coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${site.url}${HERO_IMAGE}`],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
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
    name: 'House of Bread (Shipley, BD18) — Polish bakery on Bradford Road',
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
      { '@type': 'ListItem', position: 2, name: 'Shipley', item: `${base}/shipley` },
      { '@type': 'ListItem', position: 3, name: 'House of Bread', item: `${base}${PATH}` },
    ],
  }

  const bakery = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    // We avoid “aggregateRating” schema to stay conservative with review-markup guidelines.
    sameAs: [BUSINESS.instagram, BUSINESS.facebook],
    url: `${base}${PATH}`,
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

  return { webpage, breadcrumbs, bakery, faqLd }
}

const BTN =
  'inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20'

export default function HouseOfBreadPage() {
  const { webpage, breadcrumbs, bakery, faqLd } = buildLd()

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={bakery} />
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
            <Link href="/shipley" className="underline underline-offset-4 hover:text-slate-900">
              Shipley
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li aria-current="page" className="text-slate-800">
            House of Bread
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
                  Shipley • BD18 • Bradford Road
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                  Polish bakery • specialty coffee
                </span>
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                {BUSINESS.name} (Shipley)
              </h1>

              <p className="mt-3 max-w-prose text-lg text-slate-700">{BUSINESS.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-slate-800">
                  {BUSINESS.ratingText}
                </span>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-slate-800">
                  {BUSINESS.priceRange}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer" className={BTN}>
                  Directions →
                </a>
                <a href={BUSINESS.instagram} target="_blank" rel="noreferrer" className={BTN}>
                  Instagram →
                </a>
                <a href={BUSINESS.facebook} target="_blank" rel="noreferrer" className={BTN}>
                  Facebook →
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-600">{BUSINESS.hoursNote}</p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={HERO_IMAGE}
                  alt="House of Bread in Shipley — Polish bakery"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-slate-900">Address</div>
                <p className="mt-1 text-sm text-slate-700">{BUSINESS.addressLines}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Quick info */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Opening hours</h2>
            <div className="mt-4 divide-y divide-black/10 rounded-2xl border border-black/10">
              {BUSINESS.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between px-4 py-3 text-sm">
                  <span className="font-semibold text-slate-900">{h.day}</span>
                  <span className="text-slate-700">{h.times}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-600">{BUSINESS.hoursNote}</p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">What to try</h2>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
              <li>
                <b>Fresh bread</b> (often sourdough-style) — ideal if you’re stocking up for the weekend.
              </li>
              <li>
                <b>Doughnuts + pastries</b> — the “treat” stop that people drive for.
              </li>
              <li>
                <b>Cakes</b> for celebrations or a coffee pairing.
              </li>
              <li>
                <b>Specialty coffee</b> if you want a proper caffeine stop on Bradford Road.
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-black/10 bg-[#fbf7ef] p-5">
              <div className="text-sm font-semibold text-slate-900">Local note</div>
              <p className="mt-1 text-sm text-slate-700">
                If you’re using <Link href="/shipley" className="underline underline-offset-4">Shipley</Link> as your base,
                this is a solid stop before heading to Saltaire, the canal towpath, or a walk day.
              </p>
            </div>
          </div>
        </section>

        {/* SEO helper section */}
        <section className="rounded-3xl border border-black/10 bg-white shadow-sm p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">House of Bread Shipley — quick answers</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            This page is built for people searching <b>“House of Bread Shipley”</b>, <b>“House of Bread BD18”</b>, or
            <b> “Polish bakery Shipley / Bradford”</b> — so you can find the basics fast: what it is, where it is, and when it’s open.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[#fbf7ef] p-5">
              <div className="text-sm font-semibold text-slate-900">Rating</div>
              <p className="mt-1 text-sm text-slate-700">
                Currently shown as <b>{BUSINESS.ratingValue}★</b> with <b>{BUSINESS.reviewCount}</b> Google reviews.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[#fbf7ef] p-5">
              <div className="text-sm font-semibold text-slate-900">Location</div>
              <p className="mt-1 text-sm text-slate-700">
                Bradford Road, Shipley (BD18 3AB) — listed as {BUSINESS.addressLines}.
              </p>
            </div>
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

        {/* Back to Shipley */}
        <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">More Shipley</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Want a broader overview (station, buses, and how Shipley connects to Saltaire)?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/shipley" className={BTN}>
              Shipley hub →
            </Link>
            <Link href="/visit-saltaire" className={BTN}>
              Visit Saltaire →
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
