// src/app/local-services/electricians/page.tsx
// Saltaire Electricians — emergency faults, EICR, consumer units, lighting & EV — directory (server-only)
//
// -----------------------------------------------------------------------------------------
// Purpose
// - Win "electricians in Saltaire", "emergency electrician Saltaire", "EICR Saltaire", "fuse box tripping",
//   "consumer unit upgrade Saltaire", "EV charger installer Saltaire", "landlord electrical certificate BD18".
// - Conversion-first UX: featured cards with instant call CTAs, emergency checklist (safe basics only),
//   EICR & landlord section, EV/consumer unit notes, comparison table, map, long FAQ, owner signup.
// - SEO: WebPage + BreadcrumbList + ItemList + Electrician (featured) + HowTo (safe basics: check RCD) + FAQPage + Speakable.
// - Design: matches your vintage btn/badge/card utilities; local images only (no remote deps).
//
// Notes & Safety
// - Electrical work is hazardous. We provide safe, common-sense, non-technical basics only.
// - We **do not** instruct users to open a consumer unit, expose conductors, or perform any testing.
// - Gas/Sparks overlap: boilers ↔ Gas Safe (covered on plumbers page). Here we focus on electrical services.
// - Pricing is volatile; no invented rates. Encourage calling for quotes and verification of accreditations.
// - Replace placeholder listing details with verified ones as you onboard providers.
//
// Tech
// - Server Component (no "use client") for static-first CWV.
// - Revalidate daily.
// - Tailwind utility classes expected + your vintage utilities (btn, badge, card, card-hover, card-muted, etc).
// - Local images under /public/images/*.
//
// -----------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

// Static generation / revalidation
export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Electricians in Saltaire (2025): emergency faults, EICR, consumer units, EV chargers & lighting',
  description:
    'Trusted electricians serving Saltaire & Shipley. Featured providers, safe first-steps for power cuts, EICR & landlord certificates, consumer unit upgrades, EV charger guidance and long FAQ.',
  alternates: { canonical: `${site.url}/local-services/electricians` },
  openGraph: {
    title: 'Electricians in Saltaire — emergency, EICR, EV & lighting',
    description:
      'Local electricians for tripping RCDs, no power, rewires, lighting, consumer unit upgrades and EV chargers. Featured providers with instant call CTAs and a practical emergency checklist.',
    url: `${site.url}/local-services/electricians`,
    type: 'article',
    images: [{ url: `${site.url}/images/salts-mill.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Listing = {
  slug: string
  name: string
  phoneLocal?: string
  phoneTel?: string // tel:+44…
  email?: string
  website?: string
  bookingUrl?: string
  excerpt?: string
  priceFrom?: string
  emergency?: boolean
  available24h?: boolean
  accreditations?: string[] // e.g. ['NICEIC','NAPIT','Part P']
  evQualified?: boolean
  eicr?: boolean
  landlord?: boolean
  rewires?: boolean
  lighting?: boolean
  consumerUnits?: boolean
  areaServed?: string[]
  featured?: boolean
  verified?: boolean
  image?: string
  tags?: string[] // e.g. ['24/7','Emergency','Card accepted','Local']
  services?: string[] // e.g. ['Fault finding','EICR','EV chargers']
  payment?: string[] // ['Card','Bank transfer','Cash']
  notes?: string[]
}

/* ------------------------------ Local images ------------------------------ */

const IMG = {
  hero: { src: '/images/salts-mill.png', alt: 'Salts Mill tower and stonework — Saltaire', w: 1200, h: 800 },
  map: { src: '/images/saltaire-canal.png', alt: 'Orientation map-style photo around Saltaire', w: 1600, h: 1066 },
  vintage: { src: '/images/history-unesco.png', alt: 'Heritage stone details in Saltaire', w: 1200, h: 800 },
  safety: { src: '/images/plan-your-visit.png', alt: 'Caution signage visual used as generic safety art', w: 1200, h: 800 },
  lighting: { src: '/images/whats-on.png', alt: 'Warm interior lights—generic visual', w: 1200, h: 800 },
}

/* --------------------------------- Data ----------------------------------- */
/**
 * Placeholder data — replace with verified details. Keep cautious language and evergreen copy.
 */

const LISTINGS: Listing[] = [
  {
    slug: 'saltaire-electrical',
    name: 'Saltaire Electrical & EICR',
    phoneLocal: '01274 000450',
    phoneTel: 'tel:+441274000450',
    email: undefined,
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Fault-finding, EICR for landlords/homebuyers, consumer unit upgrades, lighting & sockets. Same-day where possible.',
    priceFrom: 'Call for estimate',
    emergency: true,
    available24h: true,
    accreditations: ['NICEIC', 'Part P'],
    evQualified: true,
    eicr: true,
    landlord: true,
    rewires: true,
    lighting: true,
    consumerUnits: true,
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    featured: true,
    verified: false,
    image: '/images/whats-on.png',
    tags: ['Emergency', 'EICR', 'EV', 'Card accepted'],
    services: ['Fault finding', 'EICR', 'Consumer units', 'EV chargers', 'Lighting', 'Sockets'],
    payment: ['Card', 'Bank transfer', 'Contactless'],
    notes: ['Can coordinate access with letting agents for EICR.'],
  },
  {
    slug: 'shipley-sparks',
    name: 'Shipley Sparks (Emergency)',
    phoneLocal: '01274 000480',
    phoneTel: 'tel:+441274000480',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Rapid-response team for tripping RCDs, dead circuits and urgent faults. Good coverage in evenings/weekends.',
    priceFrom: 'Transparent call-out on booking',
    emergency: true,
    available24h: true,
    accreditations: ['NAPIT', 'Part P'],
    evQualified: false,
    eicr: true,
    landlord: true,
    rewires: false,
    lighting: true,
    consumerUnits: true,
    areaServed: ['Shipley', 'Saltaire', 'Frizinghall'],
    featured: true,
    verified: false,
    image: '/images/plan-your-visit.png',
    tags: ['24/7', 'Emergency', 'Card accepted'],
    services: ['Emergency faults', 'Consumer units', 'EICR', 'Lighting'],
    payment: ['Card', 'Cash'],
    notes: ['Phone best for urgent jobs.'],
  },
  {
    slug: 'baildon-lighting',
    name: 'Baildon Lighting & Small Works',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Lighting upgrades, additional sockets and small works by appointment. Not a 24/7 emergency service.',
    priceFrom: 'By quote',
    emergency: false,
    available24h: false,
    accreditations: ['Part P'],
    evQualified: false,
    eicr: false,
    landlord: false,
    rewires: false,
    lighting: true,
    consumerUnits: false,
    areaServed: ['Baildon', 'Saltaire', 'Shipley'],
    featured: false,
    verified: false,
    image: '/images/roberts-park.png',
    tags: ['Lighting', 'Small works'],
    services: ['Lighting upgrades', 'Sockets'],
    payment: ['Bank transfer', 'Card'],
  },
  {
    slug: 'aire-valley-ev',
    name: 'Aire Valley EV & Power',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'EV charger installation (home), circuit additions and load assessment. Site survey required.',
    priceFrom: 'By quote',
    emergency: false,
    available24h: false,
    accreditations: ['NICEIC'],
    evQualified: true,
    eicr: false,
    landlord: false,
    rewires: false,
    lighting: false,
    consumerUnits: true,
    areaServed: ['Shipley', 'Bingley', 'Saltaire'],
    featured: false,
    verified: false,
    image: '/images/saltaire-canal.png',
    tags: ['EV chargers', 'Load assessment'],
    services: ['EV chargers', 'Consumer units (assessment)'],
    payment: ['Card', 'Bank transfer'],
  },
  {
    slug: 'heritage-rewire',
    name: 'Heritage Rewire (Terraces)',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Terrace-friendly rewires and sympathetic routing. Not for emergency faults. Weekday surveys only.',
    priceFrom: 'By quote',
    emergency: false,
    available24h: false,
    accreditations: ['NAPIT'],
    evQualified: false,
    eicr: true,
    landlord: true,
    rewires: true,
    lighting: true,
    consumerUnits: true,
    areaServed: ['Saltaire', 'Shipley', 'Leeds fringe'],
    featured: false,
    verified: false,
    image: '/images/history-unesco.png',
    tags: ['Rewires', 'EICR', 'Consumer units'],
    services: ['Rewires', 'EICR', 'Consumer units', 'Lighting'],
    payment: ['Card', 'Bank transfer'],
  },
]

/* ----------------------------- Utility helpers ---------------------------- */

function cx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function displayAreas(v?: string[]) {
  return (v && v.length ? v : ['Saltaire']).join(', ')
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

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

function JsonLd({ obj }: { obj: any }) {
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
}

/* --------------------------------- Layout --------------------------------- */

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
          Electricians
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Electricians in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Local electricians for emergency faults, EICR, consumer unit upgrades, lighting and EV chargers. We keep it
            practical and safe: simple first steps, clear when to call an expert, and easy contact buttons.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Emergency & same-day</li>
            <li className="badge">EICR & landlord</li>
            <li className="badge">EV charger guidance</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Featured electricians
            </Link>
            <Link href="#emergency" className="btn btn-outline">
              Emergency checklist
            </Link>
            <Link href="#faq" className="btn btn-ghost">
              Long FAQ
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
    { href: '#emergency', label: 'Emergency checklist' },
    { href: '#safe-basics', label: 'Safe power basics' },
    { href: '#eicr', label: 'EICR & landlord notes' },
    { href: '#ev-consumer', label: 'EV chargers & consumer units' },
    { href: '#use-cases', label: 'Common scenarios' },
    { href: '#map', label: 'Map & coverage' },
    { href: '#testimonials', label: 'Local testimonials' },
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

/* --------------------------- Provider Card Blocks ------------------------- */

function ProviderBadges({ l }: { l: Listing }) {
  return (
    <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
      {l.tags?.map((t) => (
        <li key={t} className="badge">
          {t}
        </li>
      ))}
      {l.accreditations?.map((a) => (
        <li key={a} className="badge">
          {a}
        </li>
      ))}
      {l.emergency && <li className="badge">Emergency</li>}
      {l.available24h && <li className="badge">24/7</li>}
      {l.eicr && <li className="badge">EICR</li>}
      {l.consumerUnits && <li className="badge">Consumer units</li>}
      {l.evQualified && <li className="badge">EV</li>}
      {l.lighting && <li className="badge">Lighting</li>}
      {l.rewires && <li className="badge">Rewires</li>}
    </ul>
  )
}

function FeaturedCard({ l }: { l: Listing }) {
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-yellow-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || '/images/whats-on.png'})` }}
            aria-label={`${l.name} branding`}
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

          <ProviderBadges l={l} />

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
                  {l.website && (
                    <a href={l.website} target="_blank" rel="noopener" className="btn btn-muted btn-sm">
                      Website
                    </a>
                  )}
                  {l.bookingUrl && (
                    <a href={l.bookingUrl} target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                      Book online
                    </a>
                  )}
                </div>
              </dd>
            </div>
          </dl>

          {l.services && l.services.length > 0 ? (
            <div className="mt-3 text-sm text-gray-700">
              <span className="font-medium">Popular tasks: </span>
              {l.services.slice(0, 6).join(' • ')}
            </div>
          ) : null}

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

function ListingCard({ l, index }: { l: Listing; index: number }) {
  const isFeatured = !!l.featured
  return (
    <article id={l.slug} className={cx('rounded-xl p-4 border', isFeatured ? 'bg-white shadow-sm border-yellow-200' : 'bg-gray-50')}>
      <div className="flex items-start gap-4">
        <div
          className="h-14 w-20 flex-shrink-0 rounded-md border bg-cover bg-center text-[10px] text-gray-400"
          style={{ backgroundImage: `url(${l.image || '/images/whats-on.png'})` }}
          role="img"
          aria-label={`${l.name} logo`}
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium">
                {index}. {l.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{l.excerpt}</p>
              <ProviderBadges l={l} />
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
            {l.phoneTel ? (
              <a href={l.phoneTel} className="inline-block rounded px-3 py-1 text-xs border bg-white">
                Call
              </a>
            ) : (
              <span className="inline-block rounded px-3 py-1 text-xs border bg-white text-gray-400">No phone</span>
            )}
            {l.email ? (
              <a href={`mailto:${l.email}`} className="inline-block rounded px-3 py-1 text-xs border bg-white">
                Email
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
      <SectionHeading id="featured-title">Featured electricians (quick to contact)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These providers are highlighted for visibility and clearer contact details. Featured placement encourages
        verification and quicker response times.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">{featured.map((f) => <FeaturedCard key={f.slug} l={f} />)}</div>
    </section>
  )
}

function AllListings() {
  const others = LISTINGS.filter((l) => !l.featured)
  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">All listings (Saltaire & nearby)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">Pre-book where possible; availability is tighter during storms or seasonal peaks.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {others.map((l, i) => (
          <ListingCard key={l.slug} l={l} index={i + 1 + LISTINGS.filter((x) => x.featured).length} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  const cols = ['Provider', '24/7 Emergency', 'EICR', 'Consumer units', 'EV chargers', 'Typical services', 'Payment', 'Contact']
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Capabilities and prices change — confirm when booking. Accreditations shown for context only.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[980px]">
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
                    {l.accreditations && l.accreditations.length ? (
                      <div className="text-xs text-gray-500">Accred: {l.accreditations.join(', ')}</div>
                    ) : null}
                  </td>
                  <td>{l.emergency && l.available24h ? 'Yes' : l.emergency ? 'Daytime' : '—'}</td>
                  <td>{l.eicr ? 'Yes' : '—'}</td>
                  <td>{l.consumerUnits ? 'Yes' : '—'}</td>
                  <td>{l.evQualified ? 'Yes' : '—'}</td>
                  <td>{l.services?.slice(0, 4).join(', ') ?? '—'}</td>
                  <td>{l.payment?.join(', ') ?? '—'}</td>
                  <td>{l.phoneTel ? <a className="underline underline-offset-4" href={l.phoneTel}>Call</a> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Guidance only — always follow the professional’s advice on the day and confirm credentials directly.</Small>
      </div>
    </section>
  )
}

function EmergencyChecklist() {
  const steps = [
    'If safe, unplug or switch off the individual appliance that seems to cause the trip (kettle, heater, etc.).',
    'If you smell burning, hear arcing, or see smoke, stay safe: move away, ventilate if safe, and call for help.',
    'Check whether neighbours have power — a wider outage may be present. For regional power cuts, contact your network operator.',
    'If you can access your consumer unit safely, you may look (without opening any covers) to see whether an RCD or breaker has tripped. Do not remove panels.',
    'Call an emergency electrician. Provide postcode, symptoms (what stopped working), any recent works, and access instructions.',
  ]
  return (
    <section id="emergency" aria-labelledby="em-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="em-title">Emergency checklist (safe, simple first steps)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">First response</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-gray-600">
              Never open a consumer unit or touch exposed wiring. If unsafe or unsure, wait for a qualified electrician.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">What to tell the electrician</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Which rooms/circuits have lost power</li>
              <li>Whether an appliance seems to trigger the issue</li>
              <li>Any burning smells, noise, or visible damage (do not touch)</li>
              <li>Access and parking notes for your property</li>
            </ul>
          </div>
        </article>
      </div>
      <div className="mt-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900">
        If in doubt: isolate at the main switch only if <strong>safe</strong> to do so. Otherwise, wait for a professional.
      </div>
    </section>
  )
}

function SafePowerBasics() {
  const basics = [
    'RCDs trip to protect you from faults; repeatedly resetting without finding the cause is unsafe.',
    'If an appliance trips power, unplug it and leave it unplugged until checked.',
    'Water + electrics is a red flag. If a leak has reached sockets or the consumer unit, keep clear and call a professional.',
  ]
  return (
    <section id="safe-basics" aria-labelledby="safe-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="safe-title">Safe power basics (non-technical)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Good habits</h3>
            <ul className="mt-2 list-disc pl-5">
              {basics.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">We do not provide repair instructions. Always use a qualified electrician.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">After a power event</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Note the time and what was running (helps diagnosis).</li>
              <li>Photograph the consumer unit position (with covers closed) for remote triage.</li>
              <li>Check freezers later for thaw; avoid opening during long outages.</li>
            </ul>
          </article>
        </div>
        <div className="mt-6 relative overflow-hidden rounded-2xl border">
          <Image src={IMG.safety.src} alt={IMG.safety.alt} width={IMG.safety.w} height={IMG.safety.h} className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function EICRSection() {
  const bullets = [
    'Landlord EICR typically every 5 years or at change of tenancy (confirm current regulations).',
    'Remedial works may be required if issues are found; request a clear, itemised quote.',
    'For older terraces, consumer unit upgrades (with RCD/RCBO protection) may be recommended.',
  ]
  return (
    <section id="eicr" aria-labelledby="eicr-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="eicr-title">EICR & landlord notes</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            If you’re a landlord or buying a property, an <strong>EICR</strong> provides a snapshot of electrical
            safety and compliance at the time of inspection. Ask about format, typical duration, and how remedials are
            handled if something is flagged.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Small>Always check credentials and request proof of insurance/accreditation.</Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.vintage.src} alt={IMG.vintage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function EVandConsumerUnits() {
  const points = [
    'Home EV chargers need a dedicated circuit and load assessment; a site survey is typical.',
    'Consumer unit capacity and main fuse rating may limit EV charger options.',
    'For consumer unit upgrades, expect power-off windows; plan fridge/freezer access accordingly.',
  ]
  return (
    <section id="ev-consumer" aria-labelledby="ev-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="ev-title">EV chargers & consumer units</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">EV charger basics</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {points.slice(0, 2).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Consumer unit upgrades</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>{points[2]}</li>
                <li>Request a labelled circuit schedule and test results after the upgrade.</li>
              </ul>
            </div>
          </article>
        </div>
        <div className="mt-6 relative overflow-hidden rounded-2xl border">
          <Image src={IMG.lighting.src} alt={IMG.lighting.alt} width={IMG.lighting.w} height={IMG.lighting.h} className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      title: 'No power in part of the house',
      text: 'Likely a tripped breaker/RCD or a faulty appliance. Leave any suspect appliance unplugged and call a professional.',
      links: [{ label: 'Emergency checklist', href: '#emergency' }],
    },
    {
      title: 'RCD keeps tripping',
      text: 'Could be moisture ingress or a failing device. Repeated resets without diagnosis are unsafe — call an electrician.',
      links: [{ label: 'Safe power basics', href: '#safe-basics' }],
    },
    {
      title: 'Need a landlord certificate (EICR)',
      text: 'Book an EICR with a provider who can handle remedials and issue documentation promptly.',
      links: [{ label: 'EICR notes', href: '#eicr' }],
    },
    {
      title: 'Add outdoor lighting',
      text: 'Ask about IP ratings, RCD protection, and cable routing to suit the terrace layout.',
      links: [{ label: 'Compare providers', href: '#compare' }],
    },
    {
      title: 'Upgrade consumer unit',
      text: 'Discuss RCBO vs RCD/MCB combos, surge protection, labelling and test sheets.',
      links: [{ label: 'EV & consumer units', href: '#ev-consumer' }],
    },
    {
      title: 'Install an EV charger',
      text: 'Arrange a survey for load checks and placement; ask about smart tariff integration.',
      links: [{ label: 'EV notes', href: '#ev-consumer' }],
    },
  ]
  return (
    <section id="use-cases" aria-labelledby="uc-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="uc-title">Common scenarios (quick guidance)</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-gray-700">{c.text}</p>
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a className="underline underline-offset-4" href={l.href as any}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & coverage</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">We keep maps light for speed. When you add an interactive map, load pins from the listing data.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm exact coverage with your chosen provider.</Small>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    ['“Shipley Sparks were fast and clear — found the fault without drama.”', '— Homeowner, Saltaire'],
    ['“Professional EICR with same-week remedials. Paperwork was prompt.”', '— Landlord, BD18'],
    ['“Consumer unit upgrade neat and labelled. Minimal downtime.”', '— Terrace owner, Shipley'],
    ['“Survey for EV charger made it simple to choose the right unit.”', '— Driver, Saltaire'],
  ]
  return (
    <section id="testimonials" aria-labelledby="testi-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="testi-title">Local testimonials</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {quotes.map(([q, by]) => (
          <figure key={q} className="border rounded-md p-4 bg-white">
            <blockquote className="text-gray-700">{q}</blockquote>
            <figcaption className="mt-3 text-xs text-gray-500">{by}</figcaption>
          </figure>
        ))}
      </div>
      <Small>Illustrative examples. When you collect reviews, consider Review schema for richer snippets.</Small>
    </section>
  )
}

function SignupOwners() {
  const subject = encodeURIComponent('List my electrical business on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my electrical business on Saltaire Guide.\n\nBusiness name:\nAccreditations (NICEIC/NAPIT/Part P):\nPhone:\nEmail:\nWebsite/booking link:\nEmergency service: yes/no (24/7?)\nEICR offered: yes/no\nEV chargers: yes/no\nConsumer units: yes/no\nAreas served:\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Electrical businesses — list your service</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured includes a badge, priority placement and better conversion. Provide proof of
          insurance/accreditation for a verification tick.
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
    q: 'Do electricians in Saltaire offer 24/7 emergency callout?',
    a: 'Some do; availability varies. Call featured providers first and describe symptoms clearly. If unsafe (smell of burning/smoke), keep clear and call for help.',
  },
  {
    q: 'What is an EICR and do I need one?',
    a: 'An Electrical Installation Condition Report is a routine inspection of your wiring and consumer unit. Landlords typically require it on a schedule; homebuyers often request one for peace of mind.',
  },
  {
    q: 'Can I reset a tripped RCD myself?',
    a: 'If safe, you may attempt a single reset. If it immediately trips again, do not keep resetting — unplug suspect appliances and call a professional.',
  },
  {
    q: 'Do electricians install EV chargers?',
    a: 'Many do. A site survey checks load capacity and the best placement. Expect dedicated circuits and protective devices per current standards.',
  },
  {
    q: 'Do providers take card?',
    a: 'Many accept card or bank transfer. Confirm on booking and request an invoice/receipt.',
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
    <section aria-label="Explore other categories" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Need other trades?</h2>
          <p className="mt-2 max-w-prose text-gray-700">Browse our local services hub or jump to popular categories.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/local-services" className="btn btn-primary">
              All local services
            </Link>
            <Link href="/local-services/plumbers" className="btn btn-outline">
              Plumbers
            </Link>
            <Link href="/local-services/taxis" className="btn btn-ghost">
              Taxis
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.lighting.src} alt={IMG.lighting.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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
    name: 'Electricians serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/electricians#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const electricianThings = LISTINGS.filter((l) => l.featured).map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: l.name,
    url: `${base}/local-services/electricians#${l.slug}`,
    areaServed: (l.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    telephone: l.phoneTel,
    image: l.image ? `${base}${l.image}` : undefined,
    paymentAccepted: l.payment?.join(', '),
    additionalProperty: [
      ...(l.tags || []).map((t) => ({ '@type': 'PropertyValue', name: 'feature', value: t })),
      ...(l.accreditations || []).map((t) => ({ '@type': 'PropertyValue', name: 'accreditation', value: t })),
      { '@type': 'PropertyValue', name: 'emergency', value: String(!!l.emergency) },
      { '@type': 'PropertyValue', name: 'eicr', value: String(!!l.eicr) },
      { '@type': 'PropertyValue', name: 'evQualified', value: String(!!l.evQualified) },
    ],
    makesOffer: l.priceFrom
      ? [{ '@type': 'Offer', price: l.priceFrom, priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Call-out (indicative)' } }]
      : undefined,
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Electricians in Saltaire',
    url: `${base}/local-services/electricians`,
    description:
      'Local electricians for emergency faults, EICR, consumer unit upgrades, lighting and EV chargers. Featured providers with instant contact and a practical emergency checklist.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#em-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Electricians', item: `${base}/local-services/electricians` },
    ],
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to respond to a tripping RCD safely (non-technical)',
    totalTime: 'PT2M',
    step: [
      { '@type': 'HowToStep', text: 'Unplug any appliance that seemed to cause the trip and leave it unplugged.' },
      { '@type': 'HowToStep', text: 'Check whether a wider power cut is affecting your area (ask a neighbour or check official sources).' },
      { '@type': 'HowToStep', text: 'If safe, you may attempt a single reset on the RCD/breaker without opening any covers. If it trips again, stop and call a qualified electrician.' },
      { '@type': 'HowToStep', text: 'If you smell burning or see smoke, keep clear and call for help.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      {electricianThings.map((t, idx) => (
        <JsonLd key={idx} obj={t} />
      ))}
      <JsonLd obj={howTo} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ElectriciansPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProviders />
      <AllListings />
      <CompareTable />
      <EmergencyChecklist />
      <SafePowerBasics />
      <EICRSection />
      <EVandConsumerUnits />
      <UseCases />
      <MapSection />
      <Testimonials />
      <FAQ />
      <SignupOwners />
      <CTA />
      <StructuredData />
    </>
  )
}
