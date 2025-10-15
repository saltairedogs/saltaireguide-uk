// src/app/local-services/locksmiths/page.tsx
// Saltaire Locksmiths — emergency lockouts, uPVC multipoint, BS3621/TS007 upgrades, burglary repairs — directory (server-only)
//
// -----------------------------------------------------------------------------------------
// Purpose
// - Win searches like: "locksmith Saltaire", "24/7 locksmith BD18", "locked out Saltaire",
//   "uPVC door won’t lock Saltaire", "anti-snap cylinder BD18", "burglary repair Saltaire",
//   "change locks Shipley", "lost keys Saltaire", "key snapped in lock Saltaire", "BS3621 locks Saltaire".
// - Monetisable design: Featured providers with instant call/email CTAs, comparison table,
//   safe lockout checklist (no circumvention tips), upgrade guidance (standards, not techniques),
//   testimonials, map, and strong owner signup flow.
// - SEO: WebPage + BreadcrumbList + ItemList + Locksmith (featured) + HowTo (safe, non-intrusive) + FAQPage + Speakable.
// - UX: matches your vintage card/badge/btn utilities; local images only (no remote deps).
//
// Safety & Scope
// - We NEVER provide instructions to bypass locks, duplicate keys without authorization, or break into property.
// - For children/vulnerable persons locked in, call emergency services (UK: 999) if there’s risk.
// - Ownership/tenancy verification is essential; locksmiths should request proof before entry.
// - Prices/standards change; avoid fixed tariffs and guarantee language — confirm on the day.
//
// Tech
// - Server Component (no "use client") for static-first CWV.
// - Revalidate daily.
// - Tailwind utilities + your vintage utilities (btn, badge, card, card-hover, card-muted, table, etc.).
// - Local images under /public/images/*.
//
// -----------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Locksmiths in Saltaire (2025): 24/7 emergency lockouts, uPVC multipoint, anti-snap upgrades & burglary repairs',
  description:
    'Trusted locksmiths serving Saltaire & Shipley. Featured providers with quick call buttons. Safe lockout checklist (no bypass tips), BS3621/TS007 upgrade notes, burglary repairs and long FAQ.',
  alternates: { canonical: `${site.url}/local-services/locksmiths` },
  openGraph: {
    title: 'Locksmiths in Saltaire — emergency, uPVC, anti-snap, upgrades & repairs',
    description:
      'Local locksmiths for emergency lockouts, uPVC multipoint issues, anti-snap cylinder upgrades (BS3621/TS007), burglary repairs and security checks. Featured providers with fast contact.',
    url: `${site.url}/local-services/locksmiths`,
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
  phoneTel?: string
  email?: string
  website?: string
  bookingUrl?: string
  excerpt?: string
  priceFrom?: string

  // Capabilities
  emergency?: boolean
  available24h?: boolean
  nondestructiveFirst?: boolean
  upvcMultipoint?: boolean
  cylinderUpgrade?: boolean // BS3621 / TS007 knowledge
  boardingUp?: boolean
  burglaryRepair?: boolean
  keyCutting?: boolean
  auto?: boolean // vehicle locksmith (ownership proof required)
  commercial?: boolean

  areaServed?: string[]
  featured?: boolean
  verified?: boolean
  image?: string
  tags?: string[]
  services?: string[]
  payment?: string[]
  notes?: string[]
}

/* ------------------------------ Local images ------------------------------ */

const IMG = {
  hero: { src: '/images/salts-mill.png', alt: 'Saltaire mills and rooftops — local context', w: 1200, h: 800 },
  map: { src: '/images/saltaire-canal.png', alt: 'Orientation visual around Saltaire', w: 1600, h: 1066 },
  safety: { src: '/images/plan-your-visit.png', alt: 'Safety-first visual placeholder', w: 1200, h: 800 },
  upgrade: { src: '/images/history-unesco.png', alt: 'Heritage texture — security upgrades vibe', w: 1200, h: 800 },
  park: { src: '/images/roberts-park.png', alt: 'Roberts Park lawns and river — local vibe', w: 1200, h: 800 },
  card: { src: '/images/whats-on.png', alt: 'Card-style local ambience', w: 1200, h: 800 },
}

/* --------------------------------- Data ----------------------------------- */
/**
 * Placeholder demo data — replace with verified provider details as you onboard businesses.
 * Keep careful language; avoid invented prices. Encourage direct quotes.
 */

const LISTINGS: Listing[] = [
  {
    slug: 'saltaire-locksmiths',
    name: 'Saltaire Locksmiths (24/7, Non-destructive First)',
    phoneLocal: '01274 000410',
    phoneTel: 'tel:+441274000410',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Emergency lockouts, uPVC multipoint faults, anti-snap cylinder upgrades (BS3621/TS007), burglary repairs and boarding-up.',
    priceFrom: 'Call for estimate',
    emergency: true,
    available24h: true,
    nondestructiveFirst: true,
    upvcMultipoint: true,
    cylinderUpgrade: true,
    boardingUp: true,
    burglaryRepair: true,
    keyCutting: false,
    auto: false,
    commercial: true,
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    featured: true,
    verified: false,
    image: IMG.card.src,
    tags: ['24/7', 'Non-destructive first', 'uPVC', 'BS3621/TS007'],
    services: ['Emergency entry (ID & proof required)', 'uPVC gearboxes', 'Cylinder upgrades', 'Burglary repairs', 'Boarding-up'],
    payment: ['Card', 'Bank transfer', 'Contactless'],
    notes: ['Proof of right-to-enter required for lockouts (ID + address).'],
  },
  {
    slug: 'shipley-rapid-locksmith',
    name: 'Shipley Rapid Locksmith (Emergency)',
    phoneLocal: '01274 000420',
    phoneTel: 'tel:+441274000420',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Fast response for lockouts and failed uPVC doors. Transparent call-out at booking; receipts provided.',
    priceFrom: 'Transparent call-out on booking',
    emergency: true,
    available24h: true,
    nondestructiveFirst: true,
    upvcMultipoint: true,
    cylinderUpgrade: true,
    boardingUp: false,
    burglaryRepair: true,
    keyCutting: false,
    auto: false,
    commercial: false,
    areaServed: ['Shipley', 'Saltaire', 'Frizinghall'],
    featured: true,
    verified: false,
    image: IMG.hero.src,
    tags: ['24/7', 'uPVC'],
    services: ['Emergency entry', 'uPVC mechanisms', 'Cylinder replacements'],
    payment: ['Card', 'Cash'],
    notes: ['Phone is fastest; web booking after-hours is limited.'],
  },
  {
    slug: 'aire-valley-security',
    name: 'Aire Valley Security & Locksmith',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Security checks, cylinder upgrades to BS3621/TS007, and tidy refits for heritage doors.',
    priceFrom: 'By quote',
    emergency: false,
    available24h: false,
    nondestructiveFirst: true,
    upvcMultipoint: true,
    cylinderUpgrade: true,
    boardingUp: false,
    burglaryRepair: true,
    keyCutting: false,
    auto: false,
    commercial: true,
    areaServed: ['Saltaire', 'Shipley', 'Bingley'],
    featured: false,
    verified: false,
    image: IMG.upgrade.src,
    tags: ['Upgrades', 'Commercial'],
    services: ['Security survey', 'Cylinder/handle upgrades', 'Commercial door hardware'],
    payment: ['Card', 'Bank transfer'],
  },
  {
    slug: 'bd18-boardup-repair',
    name: 'BD18 Boarding-Up & Repair',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Post-incident temporary secure, replacement glazing coordination, and lock refit scheduling.',
    priceFrom: 'By quote',
    emergency: true,
    available24h: false,
    nondestructiveFirst: false,
    upvcMultipoint: false,
    cylinderUpgrade: false,
    boardingUp: true,
    burglaryRepair: true,
    keyCutting: false,
    auto: false,
    commercial: true,
    areaServed: ['Saltaire', 'Shipley'],
    featured: false,
    verified: false,
    image: IMG.safety.src,
    tags: ['Boarding-up', 'Burglary repair'],
    services: ['Boarding-up', 'Temporary secure', 'Lock refit coordination'],
    payment: ['Card', 'Bank transfer'],
  },
  {
    slug: 'lock-lab-keycut',
    name: 'Lock Lab (Key-cut & Bench Service)',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Key cutting in-store, bench-serviced cylinders, and hardware advice for terraces.',
    priceFrom: 'By quote',
    emergency: false,
    available24h: false,
    nondestructiveFirst: true,
    upvcMultipoint: false,
    cylinderUpgrade: true,
    boardingUp: false,
    burglaryRepair: false,
    keyCutting: true,
    auto: false,
    commercial: false,
    areaServed: ['Shipley', 'Saltaire'],
    featured: false,
    verified: false,
    image: IMG.card.src,
    tags: ['Key-cut', 'Bench service'],
    services: ['Key cutting', 'Cylinder servicing', 'Hardware advice'],
    payment: ['Card', 'Bank transfer'],
  },
  {
    slug: 'auto-locksmith-fringe',
    name: 'Auto Locksmith (Ownership Proof Required)',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Vehicle lockouts and spare keys (where supported). Strict ownership checks apply.',
    priceFrom: 'By quote',
    emergency: true,
    available24h: false,
    nondestructiveFirst: true,
    upvcMultipoint: false,
    cylinderUpgrade: false,
    boardingUp: false,
    burglaryRepair: false,
    keyCutting: true,
    auto: true,
    commercial: false,
    areaServed: ['Saltaire', 'Shipley', 'Baildon fringe'],
    featured: false,
    verified: false,
    image: IMG.map.src,
    tags: ['Auto', 'Ownership proof'],
    services: ['Vehicle entry (ID check)', 'Spare key (where supported)'],
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
          Locksmiths
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Locksmiths in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            24/7 emergency lockouts (ID checks), uPVC multipoint faults, anti-snap cylinder upgrades (BS3621/TS007),
            burglary repairs and boarding-up. Safe, practical guidance — no lock-bypass tips here.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Emergency</li>
            <li className="badge">uPVC multipoint</li>
            <li className="badge">BS3621/TS007 upgrades</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Featured locksmiths
            </Link>
            <Link href="#lockout-checklist" className="btn btn-outline">
              Locked out? Safe steps
            </Link>
            <Link href="#faq" className="btn btn-ghost">
              Long FAQ
            </Link>
          </div>
          <Small>
            Children or vulnerable person locked in and at risk? Call <strong>999</strong> (UK emergency). We never advise
            forced entry by the public.
          </Small>
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
    { href: '#lockout-checklist', label: 'Safe lockout checklist' },
    { href: '#upgrades', label: 'Upgrades (BS3621/TS007)' },
    { href: '#use-cases', label: 'Common scenarios' },
    { href: '#service-area', label: 'Service area (BD18 & nearby)' },
    { href: '#pricing', label: 'Pricing & quotes' },
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
      {l.emergency && <Badge>Emergency</Badge>}
      {l.available24h && <Badge>24/7</Badge>}
      {l.nondestructiveFirst && <Badge>Non-destructive first</Badge>}
      {l.upvcMultipoint && <Badge>uPVC multipoint</Badge>}
      {l.cylinderUpgrade && <Badge>BS3621/TS007</Badge>}
      {l.boardingUp && <Badge>Boarding-up</Badge>}
      {l.burglaryRepair && <Badge>Burglary repair</Badge>}
      {l.keyCutting && <Badge>Key-cut</Badge>}
      {l.auto && <Badge>Auto</Badge>}
      {l.commercial && <Badge>Commercial</Badge>}
    </ul>
  )
}

function FeaturedCard({ l }: { l: Listing }) {
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-sky-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || IMG.card.src})` }}
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
    <article id={l.slug} className={cx('rounded-xl p-4 border', isFeatured ? 'bg-white shadow-sm border-sky-200' : 'bg-gray-50')}>
      <div className="flex items-start gap-4">
        <div
          className="h-14 w-20 flex-shrink-0 rounded-md border bg-cover bg-center text-[10px] text-gray-400"
          style={{ backgroundImage: `url(${l.image || IMG.card.src})` }}
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
      <SectionHeading id="featured-title">Featured locksmiths (quick to contact)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These providers are highlighted for visibility and clear contact details. We promote non-destructive-first
        approaches and proper ID checks for lawful entry.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">{featured.map((f) => <FeaturedCard key={f.slug} l={f} />)}</div>
      <Small>Providers should verify your right-to-enter (ID + address/tenancy). Be ready with documents.</Small>
    </section>
  )
}

function AllListings() {
  const others = LISTINGS.filter((l) => !l.featured)
  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">All listings (Saltaire & nearby)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">Availability can tighten evenings/weekends. Call for the fastest response.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {others.map((l, i) => (
          <ListingCard key={l.slug} l={l} index={i + 1 + LISTINGS.filter((x) => x.featured).length} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  const cols = [
    'Provider',
    '24/7',
    'Non-destructive first',
    'uPVC multipoint',
    'BS3621/TS007',
    'Boarding-up',
    'Burglary repair',
    'Key-cut',
    'Auto',
    'Commercial',
    'Payment',
    'Contact',
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Capabilities and prices change — confirm when booking. Receipts help with insurance.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[1100px]">
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
                    {l.featured ? <div className="text-xs text-sky-700">Featured</div> : null}
                  </td>
                  <td>{l.available24h ? 'Yes' : l.emergency ? 'Daytime' : '—'}</td>
                  <td>{l.nondestructiveFirst ? 'Yes' : '—'}</td>
                  <td>{l.upvcMultipoint ? 'Yes' : '—'}</td>
                  <td>{l.cylinderUpgrade ? 'Yes' : '—'}</td>
                  <td>{l.boardingUp ? 'Yes' : '—'}</td>
                  <td>{l.burglaryRepair ? 'Yes' : '—'}</td>
                  <td>{l.keyCutting ? 'Yes' : '—'}</td>
                  <td>{l.auto ? 'Yes' : '—'}</td>
                  <td>{l.commercial ? 'Yes' : '—'}</td>
                  <td>{l.payment?.join(', ') ?? '—'}</td>
                  <td>{l.phoneTel ? <a className="underline underline-offset-4" href={l.phoneTel}>Call</a> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Guidance only — always confirm credentials and scope with your chosen professional.</Small>
      </div>
    </section>
  )
}

function LockoutChecklist() {
  const steps = [
    'Stay calm and check whether anyone you trust has a spare key (housemate, neighbour, local contact).',
    'If a child or vulnerable person is inside and at risk, call 999 (UK). Your safety comes first.',
    'Do not attempt DIY bypass methods or force entry; this can cause damage and personal risk.',
    'Call a local locksmith that uses a non-destructive-first approach. Ask for an estimate and ETA.',
    'Have proof of your right-to-enter ready (photo ID + address/tenancy evidence).',
    'Keep receipts and any photos of damage for insurers/landlords.',
  ]
  return (
    <section id="lockout-checklist" aria-labelledby="lockout-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="lockout-title">Locked out? Safe checklist (no bypass tips)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Immediate, safe steps</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-gray-600">
              Locksmiths should verify your right-to-enter before opening. This is normal and protects residents.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Avoid common pitfalls</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Don’t share codes/keys with unknown callers claiming to be from your building.</li>
              <li>Beware of unusually low quotes upfront followed by large on-site fees. Ask for a clear range.</li>
              <li>Confirm the payment methods and ask for an itemised receipt.</li>
            </ul>
          </div>
        </article>
      </div>
      <div className="mt-6 relative overflow-hidden rounded-2xl border">
        <Image src={IMG.safety.src} alt={IMG.safety.alt} width={IMG.safety.w} height={IMG.safety.h} className="object-cover" />
      </div>
    </section>
  )
}

function Upgrades() {
  const bullets = [
    'Cylinders: ask about meeting British Standard BS3621 for mortice locks and TS007 (star-rated) for euro cylinders.',
    'uPVC doors: multipoint mechanisms and aligned keeps improve reliability; handles and cylinders can be upgraded together.',
    'Post-incident: consider replacing cylinders/keys and reviewing access control. Keep documentation for insurance.',
  ]
  return (
    <section id="upgrades" aria-labelledby="up-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="up-title">Security upgrades (standards & options)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div>
            <p className="max-w-prose text-gray-700">
              We focus on standards and outcomes (e.g., BS3621/TS007) rather than techniques. Your locksmith can advise
              on compatible hardware for heritage doors and uPVC systems.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Small>Ask for itemised quotes and keep paperwork for warranties and insurance.</Small>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image src={IMG.upgrade.src} alt={IMG.upgrade.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  const cases = [
    {
      title: 'Lost keys',
      text: 'Schedule a cylinder change and re-key; keep new keys secure and consider a simple key log.',
      links: [{ label: 'Compare providers', href: '#compare' }],
    },
    {
      title: 'Bag stolen',
      text: 'Treat as a security risk. Replace cylinders/keys promptly and inform your landlord/insurer as needed.',
      links: [{ label: 'Upgrades', href: '#upgrades' }],
    },
    {
      title: 'uPVC door won’t lock',
      text: 'Likely alignment or multipoint mechanism issue. Non-destructive diagnostics advised.',
      links: [{ label: 'Featured locksmiths', href: '#featured' }],
    },
    {
      title: 'Burglary repair',
      text: 'Boarding-up and lock replacement, then consider upgraded cylinders/plates and documentation.',
      links: [{ label: 'Boarding-up options', href: '#compare' }],
    },
    {
      title: 'Snapped key in lock',
      text: 'Avoid forcing extra pieces in. A locksmith can extract and assess the cylinder.',
      links: [{ label: 'All listings', href: '#listings' }],
    },
    {
      title: 'Tenancy change',
      text: 'Re-key and document. Confirm with your agreement and keep receipts for records.',
      links: [{ label: 'Pricing & quotes', href: '#pricing' }],
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

function ServiceArea() {
  const areas = ['Saltaire (BD18)', 'Shipley', 'Baildon', 'Frizinghall', 'Bingley fringe']
  return (
    <section id="service-area" aria-labelledby="sa-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="sa-title">Service area (BD18 & nearby)</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Most providers cover Saltaire & Shipley, with flexible travel for urgent jobs.</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {areas.map((a) => (
            <li key={a} className="badge">
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-6 relative overflow-hidden rounded-2xl border">
          <Image src={IMG.park.src} alt={IMG.park.alt} width={IMG.park.w} height={IMG.park.h} className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function PricingQuotes() {
  const notes = [
    'Emergency call-outs vary by time/day; ask for an estimate and what the first hour includes.',
    'uPVC mechanism repairs depend on the exact hardware model and alignment work.',
    'Cylinder upgrade pricing depends on brand, star-rating and keys supplied (ask about BS3621/TS007).',
    'Burglary repair/boarding-up can involve multiple trades — request an itemised plan.',
  ]
  return (
    <section id="pricing" aria-labelledby="pr-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="pr-title">Pricing & quotes (practical notes)</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
        <ul className="list-disc pl-5">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <Small>We don’t publish prices here — they change. Ask for a written quote and keep your receipt.</Small>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & coverage</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">We keep maps lightweight for speed. When adding interactivity, load pins from listing data.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm exact coverage with your chosen provider.</Small>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    ['“Locked out late evening — calm, ID checked properly, and door opened without damage.”', '— Resident, Saltaire'],
    ['“uPVC gearbox replaced neatly; door now closes smoothly.”', '— Homeowner, Shipley'],
    ['“Rapid board-up after a break-in, with next-day lock replacements.”', '— Landlord, BD18'],
    ['“Clear advice on BS3621 upgrades and tidy finish for a terrace door.”', '— Owner, Saltaire'],
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

/* ----------------------------------- FAQ ---------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do Saltaire locksmiths offer 24/7 cover?',
    a: 'Some do — see the 24/7 badge. Availability varies by day/time; featured providers are quickest to call.',
  },
  {
    q: 'Can you help me break in?',
    a: 'We never provide bypass methods. Locksmiths should verify your right-to-enter and use non-destructive approaches wherever possible.',
  },
  {
    q: 'What proof do I need for a lockout?',
    a: 'Bring photo ID and something linking you to the address (tenancy letter, utility in your name, agent confirmation). Policies vary; ask when booking.',
  },
  {
    q: 'What are BS3621 and TS007?',
    a: 'They are UK standards relating to lock performance and cylinders. Ask your locksmith which ratings fit your door and insurer requirements.',
  },
  {
    q: 'Should I replace locks after losing my keys?',
    a: 'Often yes — especially if your address could be linked to the keys. A cylinder change with new keys removes the risk.',
  },
  {
    q: 'Will an upgrade damage my heritage door?',
    a: 'A tidy locksmith will specify compatible hardware and finishes. Request a neat finish and itemised quote.',
  },
  {
    q: 'Do you list auto locksmiths?',
    a: 'Yes — strict ownership checks apply for vehicles. Expect to show documents before any work.',
  },
  {
    q: 'How fast can someone attend?',
    a: 'Emergency ETAs depend on distance and workload. Clear location info and access notes help.',
  },
  {
    q: 'Are quotes free?',
    a: 'Policies vary. Many provide a free or low-cost survey for non-emergency work — confirm up front.',
  },
  {
    q: 'Can you duplicate restricted keys?',
    a: 'Only through the proper scheme with proof of authorization. Ask the locksmith for the process.',
  },
  // Long-tail additions
  {
    q: 'My uPVC door locks but the handle is stiff — what now?',
    a: 'This can indicate alignment or mechanism wear. A locksmith can assess and adjust/repair non-destructively.',
  },
  {
    q: 'Post-burglary: what should I do?',
    a: 'Ensure safety, contact authorities/insurer, arrange boarding-up if needed, and plan a lock upgrade with documentation.',
  },
  {
    q: 'Will a locksmith keep my key details?',
    a: 'They may record invoice details for warranty and proof of work. Ask about their data practices.',
  },
  {
    q: 'Do locksmiths accept card?',
    a: 'Many do — see the payment column in our comparison table or confirm on booking.',
  },
  {
    q: 'Do you publish prices?',
    a: 'No — they change frequently. We focus on safety, standards and clear expectations. Ask for a written quote.',
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

function SignupOwners() {
  const subject = encodeURIComponent('List my locksmith business on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my locksmith business on Saltaire Guide.\n\nBusiness name:\n24/7 emergency: yes/no\nNon-destructive-first policy: yes/no\nuPVC multipoint experienced: yes/no\nBS3621/TS007 upgrades: yes/no\nBoarding-up/burglary repair: yes/no\nAuto locksmith: yes/no (ownership checks)\nCommercial work: yes/no\nAreas served:\nPhone:\nEmail:\nWebsite/booking:\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Locksmiths — list your service</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured includes a badge, priority placement and better conversion. Provide proof of
          insurance/ID policy for verification.
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
            <Link href="/local-services/electricians" className="btn btn-ghost">
              Electricians
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.hero.src} alt={IMG.hero.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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
    name: 'Locksmiths serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/locksmiths#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const locksmithThings = LISTINGS.filter((l) => l.featured).map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: l.name,
    url: `${base}/local-services/locksmiths#${l.slug}`,
    areaServed: (l.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    telephone: l.phoneTel,
    image: l.image ? `${base}${l.image}` : undefined,
    paymentAccepted: l.payment?.join(', '),
    additionalProperty: [
      ...(l.tags || []).map((t) => ({ '@type': 'PropertyValue', name: 'feature', value: t })),
      { '@type': 'PropertyValue', name: 'nondestructiveFirst', value: String(!!l.nondestructiveFirst) },
      { '@type': 'PropertyValue', name: 'upvcMultipoint', value: String(!!l.upvcMultipoint) },
      { '@type': 'PropertyValue', name: 'cylinderUpgrade', value: String(!!l.cylinderUpgrade) },
      { '@type': 'PropertyValue', name: 'boardingUp', value: String(!!l.boardingUp) },
    ],
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Locksmiths in Saltaire',
    url: `${base}/local-services/locksmiths`,
    description:
      'Local locksmiths for emergency lockouts, uPVC multipoint faults, anti-snap cylinder upgrades (BS3621/TS007), burglary repairs and boarding-up.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#lockout-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Locksmiths', item: `${base}/local-services/locksmiths` },
    ],
  }

  const howToLockout = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to handle a home lockout safely (no bypass instructions)',
    totalTime: 'PT3M',
    step: [
      { '@type': 'HowToStep', text: 'Check if a trusted person has a spare key.' },
      { '@type': 'HowToStep', text: 'If there is immediate risk (child/vulnerable person), call 999 (UK emergency).' },
      { '@type': 'HowToStep', text: 'Contact a locksmith with a non-destructive-first policy and ask for an ETA/estimate.' },
      { '@type': 'HowToStep', text: 'Prepare ID and proof of address/tenancy for lawful entry verification.' },
      { '@type': 'HowToStep', text: 'Keep receipts and any photos for insurance or landlord records.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      {locksmithThings.map((t, idx) => (
        <JsonLd key={idx} obj={t} />
      ))}
      <JsonLd obj={howToLockout} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function LocksmithsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProviders />
      <AllListings />
      <CompareTable />
      <LockoutChecklist />
      <Upgrades />
      <UseCases />
      <ServiceArea />
      <PricingQuotes />
      <MapSection />
      <Testimonials />
      <FAQ />
      <SignupOwners />
      <CTA />
      <StructuredData />
    </>
  )
}
