// src/app/local-services/taxis/page.tsx
// Saltaire Taxis & Private Hire — category directory (server-only, static, CWV-first)
// -------------------------------------------------------------------------------
// Goals
// - Be the definitive "taxis in Saltaire" page: strong internal linking, exhaustive content,
//   careful language (no invented claims), and rich structured data.
// - Conversion-first: visible tel links on featured cards, WhatsApp/SMS optional fields,
//   quick tips for station pickups, airport transfers explainer, late-night safety.
// - SEO: WebPage + BreadcrumbList + ItemList + TaxiService (featured) + HowTo (book fast) +
//        FAQPage + Speakable. Long-form sections to satisfy YMYL/EEAT and build topical authority.
// - Aesthetic: keep the current vintage vibe (btn/badge/card utilities, badges, rounded-2xl).
//
// Notes
// - Contact details can change; keep wording cautious. Replace placeholders with real data as you verify.
// - This file is self-contained so you can ship today; later you can move listings
//   into: src/data/local-services/taxis.ts and import (same shape).
//
// Server rendering only. No "use client". No interactive handlers.

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Taxis in Saltaire (2025): station pickups, airport transfers & 24/7 private hire',
  description:
    'Local taxis & private hire serving Saltaire and Shipley: quick station pickups, airport transfers, late-night tips and trusted numbers. Featured providers with verification badges.',
  alternates: { canonical: `${site.url}/local-services/taxis` },
  openGraph: {
    title: 'Taxis in Saltaire — quick numbers & airport transfers',
    description:
      'Call a taxi in Saltaire: featured providers, station pickup tips, late-night safety and airport transfer notes. Updated regularly.',
    url: `${site.url}/local-services/taxis`,
    type: 'article',
    images: [{ url: `${site.url}/images/plan-your-visit.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type TaxiListing = {
  slug: string
  name: string
  phoneLocal?: string
  phoneTel?: string // tel:+44...
  whatsapp?: string // https://wa.me/44...
  sms?: string // sms:+44...
  email?: string
  website?: string
  bookingUrl?: string
  excerpt?: string
  priceFrom?: string
  stationETA?: string // e.g. "5–10 min typical"
  airport?: Array<'LBA' | 'MAN' | 'LPL' | 'DSA' | 'EMA'>
  areaServed?: string[]
  featured?: boolean
  verified?: boolean
  image?: string
  tags?: string[] // e.g. ['24/7','airport','card','minibus','EV']
  payment?: string[] // e.g. ['Card','Cash','Contactless']
  fleet?: string[] // e.g. ['Saloon','Estate','MPV','Minibus (8)']
  notes?: string[]
}

/* ------------------------------ Local images ------------------------------ */

const IMG = {
  hero: { src: '/images/plan-your-visit.png', alt: 'Train at Saltaire station platform', w: 1200, h: 800 },
  map: { src: '/images/saltaire-canal.png', alt: 'Simple orientation around Saltaire', w: 1600, h: 1066 },
  vintage: { src: '/images/history-unesco.png', alt: 'Stone terraces in Saltaire', w: 1200, h: 800 },
}

/* --------------------------------- Data ----------------------------------- */
/**
 * Replace placeholder providers as you verify real details.
 * Keep cautious copy; avoid invented claims (hours, prices, coverage) unless confirmed.
 */
const LISTINGS: TaxiListing[] = [
  {
    slug: 'saltaire-cars',
    name: 'Saltaire Cars',
    phoneLocal: '01274 000000',
    phoneTel: 'tel:+441274000000',
    whatsapp: undefined,
    sms: undefined,
    email: undefined,
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Local private hire covering Saltaire & Shipley. Station pickups, pre-book airport transfers, card accepted.',
    priceFrom: 'Fares vary',
    stationETA: '5–10 min typical',
    airport: ['LBA', 'MAN'],
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    featured: true,
    verified: false,
    image: '/images/whats-on.png',
    tags: ['24/7', 'airport', 'card'],
    payment: ['Card', 'Cash', 'Contactless'],
    fleet: ['Saloon', 'Estate', 'MPV'],
    notes: ['Request child seats in advance.', 'Text when you arrive at the platform exit.'],
  },
  {
    slug: 'shipley-private-hire',
    name: 'Shipley Private Hire',
    phoneLocal: '01274 111111',
    phoneTel: 'tel:+441274111111',
    whatsapp: undefined,
    sms: undefined,
    email: undefined,
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Established firm near the station. Good fallback at busy times; pre-book recommended for late night.',
    priceFrom: 'Metered / fixed by route',
    stationETA: '4–8 min typical',
    airport: ['LBA', 'MAN', 'EMA'],
    areaServed: ['Shipley', 'Saltaire', 'Frizinghall'],
    featured: true,
    verified: false,
    image: '/images/parking-saltaire.png',
    tags: ['airport', 'card'],
    payment: ['Card', 'Cash'],
    fleet: ['Saloon', 'Estate', 'MPV', 'Minibus (8)'],
    notes: ['Minibus on request for groups.', 'Ask for estate for luggage-heavy airport runs.'],
  },
  {
    slug: 'baildon-taxis',
    name: 'Baildon Taxis',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt: 'Covers Baildon, Saltaire fringe and Shipley. Best to pre-book at peak commute times.',
    priceFrom: 'Varies',
    stationETA: '8–12 min typical',
    airport: ['LBA'],
    areaServed: ['Baildon', 'Saltaire'],
    featured: false,
    verified: false,
    image: '/images/roberts-park.png',
    tags: ['airport'],
    payment: ['Cash'],
    fleet: ['Saloon', 'Estate'],
  },
  {
    slug: 'aire-valley-cabs',
    name: 'Aire Valley Cabs',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Budget-friendly runs along the Aire Valley. Limited late-night availability; call ahead for groups.',
    priceFrom: 'Budget fares',
    stationETA: '10–15 min typical',
    airport: ['LBA'],
    areaServed: ['Shipley', 'Bingley', 'Saltaire'],
    featured: false,
    verified: false,
    image: '/images/saltaire-canal.png',
    tags: ['budget'],
    payment: ['Cash'],
    fleet: ['Saloon'],
  },
  {
    slug: 'heritage-travel',
    name: 'Heritage Travel (Private Hire)',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Pre-booked private hire for day trips & weddings. Not an on-demand taxi; request quotes in advance.',
    priceFrom: 'By quote',
    stationETA: 'Pre-book only',
    airport: ['MAN', 'LPL'],
    areaServed: ['Saltaire', 'Leeds Bradford', 'Manchester'],
    featured: false,
    verified: false,
    image: '/images/history-unesco.png',
    tags: ['airport', 'weddings'],
    payment: ['Card', 'Bank transfer'],
    fleet: ['Executive saloon', 'MPV'],
  },
  {
    slug: 'canal-side-executive',
    name: 'Canal Side Executive Cars',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Executive transfers and business accounts. Suits early-morning airport pickups; pre-book essential.',
    priceFrom: 'By quote',
    stationETA: 'Pre-book only',
    airport: ['MAN', 'LBA'],
    areaServed: ['Saltaire', 'Leeds', 'Manchester'],
    featured: false,
    verified: false,
    image: '/images/salts-mill.png',
    tags: ['executive', 'airport', 'account'],
    payment: ['Card', 'Invoice'],
    fleet: ['Executive saloon', 'Estate'],
  },
]

/* ----------------------------- Utility helpers ---------------------------- */

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function displayAreas(v?: string[]) {
  return (v && v.length > 0 ? v : ['Saltaire']).join(', ')
}

function Phone({ tel, label }: { tel?: string; label: string }) {
  if (!tel) return <span className="inline-block rounded px-3 py-1 text-xs border bg-white text-gray-400">No phone</span>
  return (
    <a href={tel} className="inline-block rounded px-3 py-1 text-xs border bg-white underline-offset-4 hover:underline">
      {label}
    </a>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function Small({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-gray-500">{children}</p>
}

/* ------------------------------- JSON-LD util ----------------------------- */

function JsonLd({ obj }: { obj: any }) {
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
}

/* ------------------------------- Page blocks ------------------------------ */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li>
          <Link href="/local-services" className="underline underline-offset-4 hover:text-black">
            Local services
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Taxis
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Taxis & Private Hire in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Quick numbers for Saltaire & Shipley, with station pickup tips, airport transfer notes and late-night
            safety. We prioritise practical, current guidance — always confirm details with the operator.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Station pickups</li>
            <li className="badge">Airport transfers</li>
            <li className="badge">Updated regularly</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Featured taxis
            </Link>
            <Link href="#listings" className="btn btn-outline">
              All providers
            </Link>
            <Link href="#how-to" className="btn btn-ghost">
              Book fast
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src={IMG.hero.src}
            alt={IMG.hero.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#featured', label: 'Featured providers' },
    { href: '#listings', label: 'All listings' },
    { href: '#compare', label: 'Compare at a glance' },
    { href: '#how-to', label: 'How to book fast' },
    { href: '#station', label: 'Station pickups' },
    { href: '#airports', label: 'Airport transfers' },
    { href: '#late-night', label: 'Late night & safety' },
    { href: '#map', label: 'Map & coverage' },
    { href: '#faq', label: 'FAQ' },
    { href: '#signup', label: 'List your business' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href={i.href}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

/* --------------------------- Provider card blocks ------------------------- */

function FeaturedCard({ l }: { l: TaxiListing }) {
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-yellow-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || '/images/whats-on.png'})` }}
            aria-label={`${l.name} vehicle`}
            role="img"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{l.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{l.excerpt}</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-bold">{l.priceFrom ?? 'On request'}</div>
              <div className="mt-1 text-xs">{l.verified ? <span className="text-green-700">Verified</span> : <span className="text-gray-400">Unverified</span>}</div>
            </div>
          </div>
          <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
            {l.tags?.map((t) => (
              <li key={t} className="badge">
                {t}
              </li>
            ))}
            {l.payment?.map((t) => (
              <li key={t} className="badge">
                {t}
              </li>
            ))}
            {l.fleet?.map((t) => (
              <li key={t} className="badge">
                {t}
              </li>
            ))}
            {l.airport && l.airport.length > 0 && <li className="badge">Airports: {l.airport.join(', ')}</li>}
            {l.stationETA && <li className="badge">Station: {l.stationETA}</li>}
          </ul>
          <dl className="mt-3 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs text-gray-500">Area served</dt>
              <dd className="mt-1 text-gray-800">{displayAreas(l.areaServed)}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Contact</dt>
              <dd className="mt-1 text-gray-800">
                {l.phoneTel ? (
                  <>
                    <a className="underline" href={l.phoneTel}>
                      {l.phoneLocal}
                    </a>
                    <br />
                  </>
                ) : (
                  <span className="text-gray-500">No phone listed</span>
                )}
                {l.email ? (
                  <a className="underline" href={`mailto:${l.email}`}>
                    {l.email}
                  </a>
                ) : null}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Booking</dt>
              <dd className="mt-1">
                <div className="flex flex-wrap gap-2">
                  {l.phoneTel && (
                    <a href={l.phoneTel} className="btn btn-primary btn-sm" aria-label={`Call ${l.name}`}>
                      Call
                    </a>
                  )}
                  {l.whatsapp && (
                    <a href={l.whatsapp} className="btn btn-outline btn-sm" aria-label={`WhatsApp ${l.name}`} target="_blank" rel="noopener">
                      WhatsApp
                    </a>
                  )}
                  {l.sms && (
                    <a href={l.sms} className="btn btn-ghost btn-sm" aria-label={`SMS ${l.name}`}>
                      Text
                    </a>
                  )}
                  {l.website && (
                    <a href={l.website} target="_blank" rel="noopener" className="btn btn-muted btn-sm">
                      Website
                    </a>
                  )}
                  {l.bookingUrl && (
                    <a href={l.bookingUrl} target="_blank" rel="noopener" className="btn btn-muted btn-sm">
                      Book online
                    </a>
                  )}
                </div>
              </dd>
            </div>
          </dl>
          {l.notes && l.notes.length > 0 && (
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {l.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  )
}

function ListingCard({ l, index }: { l: TaxiListing; index: number }) {
  const isFeatured = !!l.featured
  return (
    <article id={l.slug} className={cx('rounded-xl p-4 border', isFeatured ? 'bg-white shadow-sm border-yellow-200' : 'bg-gray-50')}>
      <div className="flex items-start gap-4">
        <div
          className="h-14 w-20 flex-shrink-0 rounded-md border bg-cover bg-center text-[10px] text-gray-400"
          style={{ backgroundImage: `url(${l.image || '/images/whats-on.png'})` }}
          role="img"
          aria-label={`${l.name} vehicle`}
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium">
                {index}. {l.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{l.excerpt}</p>
              <ul className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-700">
                {l.tags?.map((t) => (
                  <li key={t} className="badge">
                    {t}
                  </li>
                ))}
                {l.stationETA && <li className="badge">{l.stationETA}</li>}
                {l.airport && l.airport.length > 0 && <li className="badge">Airports: {l.airport.join(', ')}</li>}
              </ul>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-semibold">{l.priceFrom ?? 'On request'}</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {l.website ? (
              <a href={l.website} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener">
                Visit
              </a>
            ) : null}
            <Phone tel={l.phoneTel} label="Call" />
            {l.email ? (
              <a href={`mailto:${l.email}`} className="inline-block rounded px-3 py-1 text-xs border bg-white">
                Email
              </a>
            ) : null}
            {l.whatsapp ? (
              <a href={l.whatsapp} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener">
                WhatsApp
              </a>
            ) : null}
            {l.bookingUrl ? (
              <a href={l.bookingUrl} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener">
                Book
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------ Sections: UI ------------------------------ */

function FeaturedProviders() {
  const featured = LISTINGS.filter((l) => l.featured)
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured providers (quick to contact)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These providers are highlighted for visibility and have clearer information. We encourage verification (insurance,
        licensing) for featured spots.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">
        {featured.length === 0 ? (
          <article className="rounded-xl border bg-white p-5 text-sm text-gray-700">No featured taxis yet — owners can request a featured slot below.</article>
        ) : (
          featured.map((f) => <FeaturedCard key={f.slug} l={f} />)
        )}
      </div>
    </section>
  )
}

function AllListings() {
  const others = LISTINGS.filter((l) => !l.featured)
  const ordered = others // already curated order
  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">All listings (Saltaire & nearby)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use these as a starting point and confirm availability, especially late at night or during large events. If you
        operate locally and aren’t listed, use the sign-up at the bottom.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {ordered.map((l, i) => (
          <ListingCard key={l.slug} l={l} index={i + 1 + LISTINGS.filter((x) => x.featured).length} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  const cols = ['Provider', 'Station ETA', 'Airports', 'Fleet', 'Payment', 'Contact']
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Estimates only — always check when booking.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[860px]">
            <thead>
              <tr>
                {cols.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LISTINGS.map((l) => (
                <tr key={l.slug}>
                  <td>
                    <a className="underline underline-offset-4 decoration-gray-300 hover:decoration-black" href={`#${l.slug}`}>
                      {l.name}
                    </a>
                    {l.featured ? <div className="text-xs text-amber-700">Featured</div> : null}
                  </td>
                  <td>{l.stationETA ?? '—'}</td>
                  <td>{l.airport && l.airport.length ? l.airport.join(', ') : '—'}</td>
                  <td>{l.fleet?.join(', ') ?? '—'}</td>
                  <td>{l.payment?.join(', ') ?? '—'}</td>
                  <td>
                    {l.phoneTel ? (
                      <a className="underline underline-offset-4" href={l.phoneTel}>
                        Call
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Details change; treat as guidance and always confirm with the operator.</Small>
      </div>
    </section>
  )
}

function HowToBookFast() {
  const steps = [
    'At Saltaire station: exit to Victoria Road and stand clear of the pinch point.',
    'Call your chosen operator; say “pickup Saltaire station, Victoria Road side”.',
    'Give passenger count + luggage + accessibility needs (e.g., step-free, child seat).',
    'For airport runs, confirm terminal, pickup time, and whether you need an estate/MPV.',
    'Ask for price estimate and payment method (card/cash).',
  ]
  return (
    <section id="how-to" aria-labelledby="how-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="how-title">How to book a taxi fast (and avoid mix-ups)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Quick sequence</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-gray-600">Tip: text the plate or driver name to your travel partner if you split up.</p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Common gotchas</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Calling without specifying which side of the station you’re on.</li>
              <li>Not mentioning child seats or luggage until the car arrives.</li>
              <li>Assuming card is accepted — ask before pickup.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

function StationPickups() {
  return (
    <section id="station" aria-labelledby="station-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="station-title">Saltaire station pickups (Victoria Road side)</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Saltaire station is compact. Most taxis collect on <strong>Victoria Road</strong> by the station exit.
            Stand clear of the crossing and avoid blocking the pavement on busy days. If it’s crowded, step 20–30m down
            Victoria Road and tell the operator; it helps drivers spot you.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            <li>Late night: pre-book before your last connection arrives.</li>
            <li>With luggage: request an estate; mention pushchairs/wheelchairs.</li>
            <li>Rain: wait under cover at the station entrance and ask the driver to pull in.</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.vintage.src} alt={IMG.vintage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function AirportTransfers() {
  const bullets = [
    { k: 'Leeds Bradford (LBA)', v: 'Nearest airport. Allow 25–40 min by car depending on traffic and pickup point.' },
    { k: 'Manchester (MAN)', v: 'Popular for long-haul. Allow 60–90+ min; pre-book and request estate/MPV for luggage.' },
    { k: 'Extras', v: 'Child seats are not guaranteed — request in advance. Early-morning pickups: confirm the day before.' },
  ]
  return (
    <section id="airports" aria-labelledby="airports-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="airports-title">Airport transfers (what to ask)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Checklist</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Flight number + terminal</li>
              <li>Pickup time cushion (traffic, luggage, security)</li>
              <li>Vehicle type (estate/MPV/minibus)</li>
              <li>Payment method (card/cash) and receipt if needed</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Local context</h3>
            <ul className="mt-2">
              {bullets.map((b) => (
                <li key={b.k}>
                  <span className="font-medium">{b.k}:</span> {b.v}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function LateNightSafety() {
  return (
    <section id="late-night" aria-labelledby="ln-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ln-title">Late night & safety basics</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Reduce stress</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Pre-book on weekends & event nights (see our <Link className="underline underline-offset-4" href="/events">What’s on</Link>).</li>
              <li>Share car/driver details with a friend.</li>
              <li>Wait where it’s lit and visible.</li>
            </ul>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Payment & receipts</h3>
            <p className="mt-2 text-gray-700">Ask about card ahead of time and request a receipt for expenses.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & coverage</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">We keep maps light for speed. When you add a Leaflet/Mapbox map, load pins from the listings below.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm pickup points with your driver on the day.</Small>
    </section>
  )
}

function SignupOwners() {
  const subject = encodeURIComponent('List my taxi/private hire on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my taxi/private hire business on Saltaire Guide.\n\nBusiness name:\nOperator licence (issuing council):\nPhone:\nEmail:\nWebsite/booking link:\nCard payments: yes/no\nVehicle types (saloon/estate/MPV/minibus):\nAirports served:\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Taxi owners — list your business</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured includes a badge, priority placement and better conversion. We recommend
          providing proof of insurance/licensing for a verification tick.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={mailto} className="btn btn-primary">
            Request listing via email
          </a>
          <Link href="/local-services" className="btn btn-outline">
            All service categories
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------- FAQ ---------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Can I get a taxi at Saltaire station without booking?',
    a: 'There is no permanent rank; most pickups are pre-booked. Call on arrival and stand by the Victoria Road exit unless told otherwise.',
  },
  {
    q: 'Do taxis take card in Saltaire?',
    a: 'Many do, but not all. Ask when booking or carry cash as a backup.',
  },
  {
    q: 'How far is Leeds Bradford Airport (LBA)?',
    a: 'Typically 25–40 minutes by car depending on traffic and pickup point. Allow extra time during peaks or poor weather.',
  },
  {
    q: 'How many people can a taxi take?',
    a: 'Standard saloon seats up to 4. Ask for an estate/MPV/minibus for larger groups or extra luggage.',
  },
  {
    q: 'Is late-night availability limited?',
    a: 'Weekends and event nights can be busy. Pre-book and allow extra time.',
  },
]

function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Frequently asked questions</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      {/* FAQ JSON-LD */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </section>
  )
}

/* ---------------------------------- CTA ----------------------------------- */

function CTA() {
  return (
    <section aria-label="Plan your visit" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Combine with your day in Saltaire</h2>
          <p className="mt-2 max-w-prose text-gray-700">Taxis pair well with later trains or rainy days. Sort parking or use the train to simplify the day.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/plan/getting-here" className="btn btn-primary">
              Getting here
            </Link>
            <Link href="/parking" className="btn btn-outline">
              Parking
            </Link>
            <Link href="/events" className="btn btn-ghost">
              What’s on
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.vintage.src} alt={IMG.vintage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function StructuredData() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Taxis & private hire serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/taxis#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const taxiServices = LISTINGS.filter((l) => l.featured).map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: l.name,
    url: `${base}/local-services/taxis#${l.slug}`,
    areaServed: (l.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    telephone: l.phoneTel,
    image: l.image ? `${base}${l.image}` : undefined,
    serviceArea: (l.areaServed || []).map((n) => ({ '@type': 'AdministrativeArea', name: n })),
    hasOfferCatalog: l.priceFrom
      ? {
          '@type': 'OfferCatalog',
          name: 'Indicative fares',
          itemListElement: [{ '@type': 'Offer', price: l.priceFrom, priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Local journey' } }],
        }
      : undefined,
    paymentAccepted: l.payment?.join(', '),
    availableChannel: [{ '@type': 'ServiceChannel', serviceUrl: l.website }],
    // Use additionalProperty for tags like 24/7, airport, card
    additionalProperty: (l.tags || []).map((t) => ({ '@type': 'PropertyValue', name: 'feature', value: t })),
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Taxis in Saltaire',
    url: `${base}/local-services/taxis`,
    description:
      'Local taxis & private hire for Saltaire: station pickups, airport transfers and late-night tips. Featured providers with quick contact buttons.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#how-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Taxis', item: `${base}/local-services/taxis` },
    ],
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to book a taxi quickly at Saltaire station',
    totalTime: 'PT3M',
    step: [
      { '@type': 'HowToStep', text: 'Call your chosen operator as your train approaches.' },
      { '@type': 'HowToStep', text: 'Say “pickup Saltaire station, Victoria Road side”, and give passenger/luggage count.' },
      { '@type': 'HowToStep', text: 'Confirm payment method and vehicle type (estate/MPV if needed).' },
      { '@type': 'HowToStep', text: 'Wait in a visible spot and share car/plate details with your group.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      {taxiServices.map((t, idx) => (
        <JsonLd key={idx} obj={t} />
      ))}
      <JsonLd obj={howTo} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function TaxisPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProviders />
      <AllListings />
      <CompareTable />
      <HowToBookFast />
      <StationPickups />
      <AirportTransfers />
      <LateNightSafety />
      <MapSection />
      <FAQ />
      <SignupOwners />
      <CTA />
      <StructuredData />
    </>
  )
}
