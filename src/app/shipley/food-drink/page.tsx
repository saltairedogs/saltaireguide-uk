// src/app/shipley/food-drink/page.tsx
// Food & drink in Shipley — hub page (server-rendered, CWV-friendly)
// Goals:
// - Rank for “food and drink in Shipley”, “cafes in Shipley”, “Shipley bakery”, “BD18 coffee”, “House of Bread Shipley”
// - Give practical value (where to start, areas, featured pick, links to station/walks/parking)
// - No fake competitors: keep listings factual + allow submissions
// - JSON-LD: WebPage + BreadcrumbList + ItemList + FAQPage

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

const PATH = '/shipley/food-drink'
const UPDATED = '2025-12-18'

// You can swap this later for a real Shipley food photo you take.
const HERO_IMAGE = '/images/walks-from-saltaire.png'

const BTN = {
  primary:
    'inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
  secondary:
    'inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
  ghost:
    'inline-flex items-center justify-center rounded-2xl border border-black/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20',
} as const

const FEATURED = {
  name: 'House of Bread',
  href: '/shipley/house-of-bread',
  type: 'Polish bakery + specialty coffee',
  area: 'Bradford Road (BD18 / Frizinghall)',
  ratingText: '4.8★ (181 Google reviews)',
  address: '253 Bradford Rd, Frizinghall, Bradford, Shipley BD18 3AB',
  instagram: 'https://www.instagram.com/houseofbreadltd/',
  facebook: 'https://www.facebook.com/houseofbreadltd/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=House%20of%20Bread%20253%20Bradford%20Rd%20BD18%203AB',
  bullets: ['Fresh bread', 'Doughnuts + pastries', 'Cakes', 'Good coffee stop'],
} as const

const FAQS = [
  {
    q: 'Is Shipley good for food and drink?',
    a: 'Yes — Shipley is an everyday town with plenty of practical options around the station, market area and Bradford Road. It’s also a convenient base if you’re visiting Saltaire.',
  },
  {
    q: 'Where should I start if I’m arriving by train?',
    a: 'Start near Shipley station for quick coffee or a bite, then decide whether you’re heading into the centre or walking down to the canal and Saltaire.',
  },
  {
    q: 'Do you list every restaurant and café in Shipley?',
    a: 'Not yet. This page is a growing guide — we add places carefully and keep wording factual (no fake reviews, no “best” claims). You can suggest a place via the contact page.',
  },
  {
    q: 'Can I trust the star ratings mentioned?',
    a: 'We only reference ratings when they’re visible on major platforms (like Google). Ratings and review counts can change, so always double-check on the live listing.',
  },
] as const

export const metadata: Metadata = {
  title: 'Food & drink in Shipley (BD18) — cafés, bakeries, pubs and quick stops',
  description:
    'A practical guide to food and drink in Shipley (BD18): where to start near the station, key areas to explore, and featured local spots like House of Bread.',
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: 'Food & drink in Shipley (BD18) — Saltaire & Shipley Guide',
    description:
      'Cafés, bakeries, pubs and quick stops in Shipley — plus how Shipley connects to Saltaire and the canal walk.',
    url: `${site.url}${PATH}`,
    type: 'article',
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 1600,
        height: 1200,
        alt: 'Shipley and the canal route towards Saltaire',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: [`${site.url}${HERO_IMAGE}`] },
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
    name: 'Food & drink in Shipley (BD18)',
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
      { '@type': 'ListItem', position: 3, name: 'Food & drink', item: `${base}${PATH}` },
    ],
  }

  // Keep ItemList conservative: only include places you have an actual page for.
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Food & drink in Shipley',
    numberOfItems: 1,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: FEATURED.name,
        url: `${base}${FEATURED.href}`,
      },
    ],
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

  return { webpage, breadcrumbs, itemList, faqLd }
}

export default function ShipleyFoodDrinkPage() {
  const { webpage, breadcrumbs, itemList, faqLd } = buildLd()

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
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
            Food &amp; drink
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
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Shipley • BD18</span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                  Cafés • bakeries • pubs • quick stops
                </span>
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Food &amp; drink in Shipley
              </h1>

              <p className="mt-3 max-w-prose text-lg text-slate-700">
                A practical Shipley guide: where to start near the station, which areas to explore, and a growing set
                of specific pages for local businesses (so visitors can actually trust the info).
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#featured" className={BTN.primary}>
                  Featured pick ↓
                </Link>
                <Link href="/shipley/station" className={BTN.secondary}>
                  Shipley station basics →
                </Link>
                <Link href="/walks/shipley-saltaire" className={BTN.ghost}>
                  Walk Shipley ↔ Saltaire
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-600">
                Note: We keep wording factual (no fake reviews, no “best” claims). If a rating is mentioned, it’s only
                because it’s visible on the live listing and can change over time.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={HERO_IMAGE}
                  alt="Shipley and the canal route towards Saltaire"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-slate-900">Quick plan</div>
                <p className="mt-1 text-sm text-slate-700">
                  Arrive at Shipley → grab coffee/bread → decide: town centre, Bradford Road spots, or the canal walk to
                  Saltaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Areas */}
        <section className="rounded-3xl border border-black/10 bg-white shadow-sm p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Where to look in Shipley</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Shipley’s food options tend to cluster around a few practical zones. Use these to narrow your search fast.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-5">
              <h3 className="text-lg font-semibold text-slate-900">Station &amp; centre</h3>
              <p className="mt-2 text-sm text-slate-700">
                Best for quick coffee, meet-up spots and grabbing something before a train.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-5">
              <h3 className="text-lg font-semibold text-slate-900">Bradford Road (BD18)</h3>
              <p className="mt-2 text-sm text-slate-700">
                A strong stretch for practical local stops — including bakeries and takeaway-style options.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-5">
              <h3 className="text-lg font-semibold text-slate-900">Canal side → Saltaire</h3>
              <p className="mt-2 text-sm text-slate-700">
                Ideal if you want to eat/drink as part of a walk day. Shipley links straight into the towpath.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/shipley" className={BTN.secondary}>
              Shipley hub →
            </Link>
            <Link href="/parking" className={BTN.secondary}>
              Parking guide →
            </Link>
            <Link href="/plan/getting-here" className={BTN.secondary}>
              Plan your visit →
            </Link>
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured in Shipley</h2>
              <p className="mt-2 max-w-prose text-slate-700">
                A proper business page with the basics: what it is, where it is, what to try, and links.
              </p>
            </div>
            <div className="text-xs text-slate-600 flex gap-2">
              <span className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1">Shipley (BD18)</span>
              <span className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1">Bakery</span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
            <div className="p-6 pt-0 lg:pt-6">
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/shipley/house-of-bread/hero.jpg"
                    alt="House of Bread — Shipley bakery on Bradford Road"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 lg:p-6 lg:pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{FEATURED.name}</h3>
                  <p className="mt-2 text-sm text-slate-700">
                    {FEATURED.type} — {FEATURED.area}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">Rating</div>
                  <div className="text-sm font-semibold text-slate-900">{FEATURED.ratingText}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {FEATURED.bullets.map((t) => (
                  <span key={t} className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1 text-xs text-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-slate-700">
                <b>Address:</b> {FEATURED.address}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={FEATURED.href} className={BTN.primary}>
                  Read the full guide →
                </Link>
                <a href={FEATURED.mapsUrl} target="_blank" rel="noreferrer" className={BTN.secondary}>
                  Directions →
                </a>
                <a href={FEATURED.instagram} target="_blank" rel="noreferrer" className={BTN.secondary}>
                  Instagram →
                </a>
                <a href={FEATURED.facebook} target="_blank" rel="noreferrer" className={BTN.secondary}>
                  Facebook →
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-600">
                Review numbers change — always check the live Google listing if you’re deciding based on ratings.
              </p>
            </div>
          </div>
        </section>

        {/* Build trust / submissions */}
        <section className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Want your Shipley business featured?</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            We’re building specific pages for Shipley places (not just generic lists). If you run a café, bakery, pub or
            takeaway in BD18, send details and we’ll add a factual page with links and practical info.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className={BTN.secondary}>
              Suggest a place / request a page →
            </Link>
            <Link href="/shipley" className={BTN.secondary}>
              Back to Shipley hub →
            </Link>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            Policy: no fake competitors, no made-up awards, no “best in town” claims. Just real details people can use.
          </p>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" className="space-y-4">
          <h2 id="faq" className="text-3xl font-bold tracking-tight text-slate-900">
            FAQs
          </h2>
          <div className="divide-y divide-black/10 rounded-3xl border border-black/10 bg-white">
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
      </main>
    </>
  )
}
