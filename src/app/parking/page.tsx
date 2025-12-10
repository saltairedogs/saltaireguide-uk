// src/app/parking/page.tsx
// Parking for Saltaire & Shipley — cornerstone v6 (server-only, CWV-first, local images, deep internal links)
//
// Goals
// - Be the definitive parking hub for all “Saltaire parking” and “park for Saltaire from Shipley” queries.
// - Act as parent for child pages: /parking/caroline-street, /parking/exhibition-road, /parking/free.
// - Vintage aesthetic preserved (btn / badge / card / table utilities).
// - Local images only (no remote). Strong internal linking web across Walks, Plan, Events.
// - SEO: WebPage + BreadcrumbList + ItemList(ParkingFacility) + multiple HowTo + FAQ + Speakable.
// - Accessibility-forward: step-free micro-routes, surface notes, realistic walking times.
// - Careful, signage-first language. No fixed tariffs; defer to plates on the day.
//
// Notes
// - Maps links are broad Google Maps searches (less brittle than lat/long).
// - We avoid giving legal advice or asserting concessions; we point to on-street plates.
// - This page is print-friendly (no client JS), so users can bring a simple checklist.
//
// Dependencies
// - Uses your site utilities and Tailwind classes from globals.css for badges/buttons/cards.

import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { site } from '@/config/site'
import RelatedLinks from '@/components/RelatedLinks'

// server-only
export const dynamic = 'error'

/* ------------------------------ Metadata ---------------------------------- */

export const metadata: Metadata = {
  title:
    'Parking for Saltaire & Shipley (2025): maps, car parks, step-free routes, “free” options & park-from-Shipley tips',
  description:
    'Definitive hub for parking when visiting Saltaire and nearby Shipley. Caroline Street, Exhibition Road, Salts Mill vicinity plus careful guidance on street bays, “free” options and parking in Shipley with a short train/walk into Saltaire.',
  alternates: { canonical: `${site.url}/parking` },
  openGraph: {
    title: 'Parking for Saltaire & Shipley — the practical local hub',
    description:
      'Where to park for Salts Mill, Roberts Park and Shipley: car parks, step-free micro-routes, signage decoding, park-in-Shipley strategies and busy-day playbooks.',
    url: `${site.url}/parking`,
    type: 'article',
    images: [{ url: `${site.url}/images/parking-saltaire.png`, width: 1600, height: 1066 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-14'

type CarPark = {
  slug: 'caroline-street' | 'exhibition-road' | 'salts-mill' | 'street-near-park'
  name: string
  near: string
  satnav: string // broad locator only (e.g., "BD18")
  hours: string
  height?: string
  payment: string
  costNote: string
  stepFree: boolean
  walkingNote: string
  childHref?: string
  tags?: string[]
  notes: string[]
}

type QuickLink = { href: string; label: string; sub: string; badge?: string }

const IMG = {
  hero: {
    src: '/images/parking-saltaire.png',
    alt: 'Saltaire parking sign and stone terraces',
    w: 1600,
    h: 1066,
  },
  plan: {
    src: '/images/plan-your-visit.png',
    alt: 'Train arriving at Saltaire station platform',
    w: 1200,
    h: 800,
  },
  canal: {
    src: '/images/saltaire-canal.png',
    alt: 'Canal beside Salts Mill at golden hour',
    w: 1600,
    h: 1066,
  },
  mill: {
    src: '/images/salts-mill.png',
    alt: 'Salts Mill tower and facade',
    w: 1200,
    h: 800,
  },
  park: {
    src: '/images/roberts-park.png',
    alt: 'Roberts Park lawns and bandstand',
    w: 1200,
    h: 800,
  },
}

function mapsLink(name: string, satnav: string) {
  const q = `${name}, ${satnav}, Saltaire`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

const CAR_PARKS: CarPark[] = [
  {
    slug: 'caroline-street',
    name: 'Caroline Street Car Park',
    near: 'Village centre · ~5–7 min nearly level to Salts Mill',
    satnav: 'Caroline Street, BD18',
    hours: 'Typically 24/7 (check signs)',
    height: 'Open air (no stated barrier)',
    payment: 'Pay & display / contactless where available',
    costNote: 'Council-run pricing; varies by day/season',
    stepFree: true,
    walkingNote: 'Flattest into village core; simple to Roberts Park footbridge.',
    childHref: '/parking/caroline-street',
    tags: ['reliable', 'step-free'],
    notes: [
      'Good all-round base for Mill + village + park.',
      'Fills earlier on sunny weekends and during events.',
    ],
  },
  {
    slug: 'exhibition-road',
    name: 'Exhibition Road Car Park',
    near: 'North of village · ~8–10 min gentle walk',
    satnav: 'Exhibition Road, BD18',
    hours: 'Typically 24/7 (check signs)',
    height: 'Open air (no stated barrier)',
    payment: 'Pay & display / contactless where available',
    costNote: 'Often similar to Caroline St; verify at the meter',
    stepFree: false,
    walkingNote: 'Slight uphill on return; often has spaces when central fills.',
    childHref: '/parking/exhibition-road',
    tags: ['overflow', 'quieter'],
    notes: ['Useful fallback when centre is saturated.', 'Expect a gentler uphill back to the car.'],
  },
  {
    slug: 'salts-mill',
    name: 'Salts Mill / Victoria Road (mixed bays)',
    near: 'Closest for Mill shops & galleries · ~2–4 min',
    satnav: 'Victoria Road, BD18',
    hours: 'Varies by area (check bay signage)',
    height: 'Mix of open-air and marked areas',
    payment: 'Mix of short-stay/customer; always read signs',
    costNote: 'Rules differ by bay and area — check carefully',
    stepFree: true,
    walkingNote: 'Shortest walk to the Mill; fills fastest at peak.',
    tags: ['closest', 'short-stay'],
    notes: ['Confirm visitor vs tenant bays before leaving the car.', 'Enforcement is active.'],
  },
  {
    slug: 'street-near-park',
    name: 'Wider area street bays (near Roberts Park)',
    near: 'For park, bandstand & riverside',
    satnav: 'Higher Coach Road / BD18',
    hours: 'Street restrictions vary by zone',
    height: 'Street parking — no barrier',
    payment: 'Mix of free/limited-time · read roadside plates',
    costNote: 'Restrictions change; avoid junctions/dropped kerbs',
    stepFree: true,
    walkingNote: 'Convenient for park/playground; mind residential access.',
    childHref: '/parking/free',
    tags: ['limited', 'variable'],
    notes: ['Expect school-holiday peaks.', 'Check plates carefully; times may change.'],
  },
]

const QUICK_LINKS: QuickLink[] = [
  { href: '/parking/caroline-street', label: 'Caroline Street', sub: 'Reliable & near-level', badge: 'Top pick' },
  { href: '/parking/exhibition-road', label: 'Exhibition Road', sub: 'Overflow & quieter', badge: 'Good fallback' },
  { href: '/parking/free', label: 'Free options nearby', sub: 'Signage-first guidance' },
]

const CHECKLIST = [
  'Read the plate by your exact bay (days/times/max stay).',
  'Keep proof of payment/validation.',
  'Park within lines; leave space at corners & dropped kerbs.',
  'Note return route benches/shade if walking with kids or wheels.',
]

const MYTHS = [
  {
    myth: 'Evenings are always free',
    fact: 'Not guaranteed. Plates can restrict evenings and Sundays.',
  },
  {
    myth: 'Two tickets = double time',
    fact: 'Max stay usually caps total time regardless of repaying.',
  },
  {
    myth: 'Blue Badge works the same everywhere',
    fact: 'Concessions & time vary by bay/council; read the plate.',
  },
]

const ACCESS_TIPS = [
  'Caroline Street → Mill/park is the simplest near-level option.',
  'Some side streets have cobbles; favour main pavements when pushing wheels.',
  'Footbridge pinch points can be busy; allow a buffer on sunny weekends.',
]

/* ------------------------------- UI helpers ------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="anchor-offset text-2xl font-bold tracking-tight md:text-3xl">
      {children}
    </h2>
  )
}

function Small({ children }: { children: React.ReactNode }) {
  return <span className="text-xs text-gray-500">{children}</span>
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
        <li aria-current="page" className="text-gray-800">
          Parking
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Parking for Saltaire &amp; Shipley
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Local, practical guidance for visiting Saltaire&apos;s model village, Salts Mill and Roberts Park — plus how
            to use nearby <strong>Shipley</strong> for parking and hop in by train or a short canal-side walk.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated {UPDATED}</li>
            <li className="badge">Step-free routes</li>
            <li className="badge">Shipley park-&amp;-train tips</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking/caroline-street" className="btn btn-primary">
              Saltaire: Caroline Street
            </Link>
            <Link href="/parking/exhibition-road" className="btn btn-outline">
              Saltaire: Exhibition Road
            </Link>
            <Link href="/plan/getting-here" className="btn btn-ghost">
              Shipley &amp; trains to Saltaire
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

function QuickLinksRail() {
  return (
    <section aria-label="Quick links" className="container mx-auto max-w-7xl px-4 pt-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {QUICK_LINKS.map((q) => (
          <Link
            key={q.href}
            href={q.href}
            className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold tracking-tight">{q.label}</h3>
              {q.badge && <span className="badge">{q.badge}</span>}
            </div>
            <p className="mt-1 text-sm text-gray-700">{q.sub}</p>
            <span className="mt-2 inline-block text-sm underline decoration-gray-300 underline-offset-4 group-hover:decoration-black">
              Open →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

function PageTOC() {
  const items = [
    { href: '#map', label: 'Quick map' },
    { href: '#best', label: 'Best options in Saltaire' },
    { href: '#compare', label: 'Compare Saltaire car parks' },
    { href: '#shipley', label: 'Parking in Shipley & trains' },
    { href: '#routes', label: 'Step-free micro-routes' },
    { href: '#checklist', label: 'On-arrival checklist' },
    { href: '#signage', label: 'Signage decoder' },
    { href: '#myths', label: 'Myths & facts' },
    { href: '#blue-badge', label: 'Blue Badge notes' },
    { href: '#ev-coach', label: 'EV, motorbikes & coaches' },
    { href: '#busy', label: 'Busy-day playbooks' },
    { href: '#itins', label: 'Micro-itineraries' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                href={i.href}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

/* ------------------------------- Sections --------------------------------- */

function QuickMap() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Quick map & orientation</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire is compact: the Mill, canal and Roberts Park sit within a few minutes of each other. Core car parks are
        within ~10 minutes of the village. If everything is saturated, it can be easier to park in{' '}
        <strong>Shipley</strong> and arrive by a 2–3 minute train hop or a canal-side walk.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src={IMG.canal.src}
          alt={IMG.canal.alt}
          width={IMG.canal.w}
          height={IMG.canal.h}
          className="object-cover"
        />
      </div>
      <Small>Illustrative only — for live directions, open your chosen car park or Shipley station in Maps.</Small>
    </section>
  )
}

function BestOptions() {
  return (
    <section id="best" aria-labelledby="best-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="best-title">Best options in Saltaire at a glance</SectionHeading>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Closest for Salts Mill</h3>
            <p className="mt-1 text-gray-700">
              <a href="#salts-mill" className="underline underline-offset-4">
                Salts Mill / Victoria Road
              </a>{' '}
              has the shortest walk. Rules vary by bay — check signage carefully.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Reliable all-rounder</h3>
            <p className="mt-1 text-gray-700">
              <a href="#caroline-street" className="underline underline-offset-4">
                Caroline Street
              </a>{' '}
              balances capacity and location with an easy, almost-flat route into the village.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">When it’s rammed</h3>
            <p className="mt-1 text-gray-700">
              <a href="#exhibition-road" className="underline underline-offset-4">
                Exhibition Road
              </a>{' '}
              often has spaces when the centre is full. If even that&apos;s full, see{' '}
              <a href="#shipley" className="underline underline-offset-4">
                parking in Shipley
              </a>
              .
            </p>
          </div>
        </article>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAR_PARKS.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <span className="badge">Open air</span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{p.near}</p>
              <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
                {p.tags?.map((t) => (
                  <li key={t} className="badge">
                    {t}
                  </li>
                ))}
                {p.height && <li className="badge">Height: {p.height}</li>}
                <li className="badge">Hours: {p.hours}</li>
                <li className="badge">{p.stepFree ? 'Step-free route' : 'Route varies'}</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700">
                {p.payment}. {p.costNote}.
              </p>
              <p className="mt-2 text-sm text-gray-700">{p.walkingNote}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                {p.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={mapsLink(p.name, p.satnav)}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary btn-sm"
                >
                  Open in Maps
                </a>
                {p.childHref && (
                  <Link href={p.childHref} className="btn btn-outline btn-sm">
                    Detail page
                  </Link>
                )}
                <a
                  href={`#${p.slug}`}
                  className="btn btn-ghost btn-sm"
                  aria-label={`Anchor link to ${p.name}`}
                >
                  Link to section
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-600">
        With wheels or buggies, favour <strong>Caroline Street</strong> or the <strong>Salts Mill</strong> vicinity for
        minimal gradients. See{' '}
        <Link className="underline underline-offset-4" href="/plan/accessibility">
          step-free basics
        </Link>
        .
      </p>
    </section>
  )
}

function CompareTable() {
  return (
    <section id="compare" aria-labelledby="compare-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="compare-title">Compare Saltaire car parks</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Pricing and rules change. Treat this as a practical overview and always read the plate beside your bay. For
        Shipley town-centre and station parking, see{' '}
        <a href="#shipley" className="underline underline-offset-4">
          parking in Shipley
        </a>
        .
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[860px]">
          <thead>
            <tr>
              <th className="w-[22%]">Car park</th>
              <th>Near</th>
              <th>Satnav</th>
              <th>Hours</th>
              <th>Height</th>
              <th>Payment</th>
              <th>Notes</th>
              <th>Step-free</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            {CAR_PARKS.map((p) => (
              <tr key={p.slug}>
                <td className="font-medium">
                  {p.childHref ? (
                    <Link href={p.childHref} className="underline underline-offset-4">
                      {p.name}
                    </Link>
                  ) : (
                    <a className="underline underline-offset-4" href={`#${p.slug}`}>
                      {p.name}
                    </a>
                  )}
                </td>
                <td>{p.near}</td>
                <td>
                  <span className="whitespace-nowrap">{p.satnav}</span>
                </td>
                <td>{p.hours}</td>
                <td>{p.height ?? '—'}</td>
                <td>{p.payment}</td>
                <td>
                  <ul className="list-disc pl-4">
                    {p.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </td>
                <td>{p.stepFree ? 'Yes' : 'Varies'}</td>
                <td>
                  <a
                    className="underline underline-offset-4"
                    target="_blank"
                    rel="noopener"
                    href={mapsLink(p.name, p.satnav)}
                  >
                    Open →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Small>Enforcement is active in the heritage core.</Small>
    </section>
  )
}

function ShipleyParking() {
  return (
    <section id="shipley" aria-labelledby="shipley-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="shipley-title">Parking in Shipley &amp; using the train</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          If Saltaire feels gridlocked, a very low-stress option is to park in <strong>Shipley</strong> and treat
          Saltaire as a short onward hop. Shipley has more town-centre car parks and a mainline station with regular
          2–3 minute trains to Saltaire.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold">Shipley town centre &amp; station</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Look for clearly signed public car parks near Shipley town centre and the station.</li>
              <li>Follow on-street plates for max-stay, evenings and Sundays — rules can differ by bay.</li>
              <li>
                From Shipley station it&apos;s typically a{' '}
                <span className="font-semibold">2–3 minute train ride</span> to Saltaire, with level access between
                platforms.
              </li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              Exact tariffs, operators and rules change — use council signage and your parking app on the day.
            </p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold">Walk or wheel from Shipley</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Between Shipley and Saltaire there are pavements and a popular canal-side route.</li>
              <li>Allow roughly 20–25 minutes on foot at a steady pace; a little longer with small legs or wheels.</li>
              <li>Use daylight for the canal; take care near bikes and narrow sections.</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              For full route ideas see{' '}
              <Link href="/plan/getting-here" className="underline underline-offset-4">
                Getting here
              </Link>{' '}
              and{' '}
              <Link href="/walks" className="underline underline-offset-4">
                local walks
              </Link>
              .
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function StepFreeMicroRoutes() {
  const routes = [
    {
      from: 'Caroline Street Car Park',
      to: 'Salts Mill entrance',
      time: '5–7 min',
      surface: 'Mostly level pavement',
      notes: 'Cross with care near Victoria Road; avoid cobbled side streets.',
    },
    {
      from: 'Caroline Street Car Park',
      to: 'Roberts Park footbridge',
      time: '6–8 min',
      surface: 'Level to the canal crossing',
      notes: 'Benches at park side; watch towpath pinch points on sunny days.',
    },
    {
      from: 'Exhibition Road Car Park',
      to: 'Village centre',
      time: '8–10 min',
      surface: 'Gentle incline on return',
      notes: 'Quieter at peak; allow a little extra time going back.',
    },
    {
      from: 'Shipley station / town centre',
      to: 'Saltaire station / village',
      time: 'Train 2–3 min · walk ~20–25 min',
      surface: 'Mixed pavements & canal towpath',
      notes: 'If walking, favour the canal in daylight and be mindful of bikes at pinch points.',
    },
  ]
  return (
    <section id="routes" aria-labelledby="routes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="routes-title">Step-free micro-routes</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Quick, realistic walking times with surface notes. Conditions can vary; slow down in wet/icy weather and allow a
        buffer for crowds at the footbridge and station.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {routes.map((r) => (
          <article key={r.from + r.to} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">
                {r.from} → {r.to}
              </h3>
              <ul className="mt-2 text-sm text-gray-700">
                <li>⏱ {r.time}</li>
                <li>🛣 {r.surface}</li>
                <li>📝 {r.notes}</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Want full accessibility detail? See{' '}
        <Link href="/plan/accessibility" className="underline underline-offset-4">
          step-free routes
        </Link>
        .
      </p>
    </section>
  )
}

function OnArrivalChecklist() {
  return (
    <section
      id="checklist"
      aria-labelledby="checklist-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="checklist-title">On-arrival checklist (ticket-proof basics)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <ul className="list-disc pl-5">
              {CHECKLIST.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              If a sign is unclear/damaged, pick another clearly signed bay — in Saltaire or Shipley.
            </p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Access pointers</h3>
            <ul className="mt-2 list-disc pl-5">
              {ACCESS_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">This is practical guidance, not medical advice.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function SignageDecoder() {
  const bullets = [
    {
      k: 'Time limits',
      v: 'Max stay applies even if you pay again. Don’t assume evenings/Sundays are free.',
    },
    {
      k: 'Blue Badge',
      v: 'Concessions/time limits vary by bay and council. Always read the plate beside your bay.',
    },
    {
      k: 'Bay type',
      v: 'Short-stay, permit, loading and disabled bays sit side-by-side. Check the markings and the post.',
    },
    {
      k: 'Machines',
      v: 'Note location/ID on the ticket/app; keep proof. If in doubt, move to a clearly signed bay.',
    },
    {
      k: 'Lines & corners',
      v: 'Keep clear of junctions, driveways and dropped kerbs. Leave enough space to pass.',
    },
  ]
  return (
    <section id="signage" aria-labelledby="signage-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="signage-title">Signage decoder (avoid a ticket)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="font-semibold">Read before you pay</h3>
          <ul className="mt-2 list-disc pl-5">
            {bullets.map((b) => (
              <li key={b.k}>
                <span className="font-medium">{b.k}:</span> {b.v}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-500">If a sign looks odd or damaged, pick another clearly signed bay.</p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="font-semibold">Common gotchas</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Assuming all bays in one area share rules (they don’t).</li>
            <li>Missing the “max stay” line on small print.</li>
            <li>Parking nose-to-path where the kerb drops for access.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

function Myths() {
  return (
    <section id="myths" aria-labelledby="myths-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="myths-title">Myths &amp; facts (quick reality check)</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {MYTHS.map((m) => (
          <article
            key={m.myth}
            className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm"
          >
            <h3 className="font-semibold">Myth: {m.myth}</h3>
            <p className="mt-1">
              <span className="font-medium">Fact:</span> {m.fact}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">Plate on the day beats memory or hearsay every time.</p>
    </section>
  )
}

function BlueBadge() {
  return (
    <section
      id="blue-badge"
      aria-labelledby="bb-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="bb-title">Blue Badge &amp; step-free notes</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Blue Badge — what varies</h3>
              <p className="mt-2 text-gray-700">
                Concessions and time allowances differ by bay/council in both Saltaire and Shipley. Always read the
                plate by your exact bay; do not assume free evenings or Sundays. If a plate is unclear, choose a
                different bay with crystal-clear rules.
              </p>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Step-free pointers</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Caroline Street → Mill/park: simplest near-level links.</li>
                <li>Towpath pinch points: slow near bridges; short leads for dogs.</li>
                <li>Some side streets are cobbled; favour main pavements.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function EvCoach() {
  return (
    <section id="ev-coach" aria-labelledby="ev-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ev-title">EV charging, motorbikes &amp; coaches</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">EV charging</h3>
            <p className="mt-2 text-gray-700">
              Chargers move/change status. Check your app before travel and avoid relying on a single unit — whether
              you&apos;re aiming for Saltaire or Shipley. Consider a top-up before you arrive for flexibility. Do not
              use EV bays except while actively charging where permitted.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Motorbikes &amp; coaches</h3>
            <p className="mt-2 text-gray-700">
              Motorcycle rules vary by bay. For coaches/minibuses, plan set-down away from narrow streets and follow any
              on-site instructions. If unsure, seek council guidance in advance.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function BusyDayPlaybooks() {
  const plans = [
    {
      id: 'festival',
      name: 'Festival day',
      steps: [
        'Arrive pre-10:00 or take the train to Saltaire station.',
        'Try Caroline Street; if full, pivot to Exhibition Road.',
        'If Saltaire car parks are jammed, park in Shipley and use the 2–3 min train hop to Saltaire.',
        'Build in a 10-minute buffer for the walk with crowds.',
      ],
      links: [
        { label: 'Events hub', href: '/events' },
        { label: 'Getting here (train)', href: '/plan/getting-here' },
      ],
    },
    {
      id: 'sunny-weekend',
      name: 'Sunny weekend',
      steps: [
        'Aim before 10:30 or after 15:00.',
        'Caroline Street first; Exhibition Road as fallback.',
        'If both feel full, consider Shipley town centre parking plus a short train or walk into Saltaire.',
        'Bring water; plan shade/benches on your walking route.',
      ],
      links: [
        { label: 'Roberts Park', href: '/roberts-park' },
        { label: 'Walks (short)', href: '/walks' },
      ],
    },
    {
      id: 'rain',
      name: 'Rainy day (indoors first)',
      steps: [
        'Start at Salts Mill (galleries/shops).',
        'Coffee/brunch under a roof.',
        'Short towpath window if the weather breaks.',
      ],
      links: [
        { label: 'Salts Mill', href: '/salts-mill' },
        { label: 'Brunch', href: '/brunch' },
      ],
    },
  ]
  return (
    <section id="busy" aria-labelledby="busy-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="busy-title">Busy-day playbooks</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <article key={p.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <ol className="mt-2 list-decimal pl-5 text-gray-700">
                {p.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <Link className="underline underline-offset-4" href={l.href as any}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        Tip: on peak days, consider the <strong>train to Saltaire</strong> from Shipley or further along the valley —
        it&apos;s often faster door-to-door than hunting for a bay.
      </div>
    </section>
  )
}

function ItinsByCarPark() {
  const itins = [
    {
      title: 'Caroline Street: classic half-day',
      bullets: [
        'Mill first (60–90 min) — galleries & bookshops.',
        'Cross to Roberts Park lawns (30–45 min).',
        'Short towpath leg towards Hirst Lock (30–45 min).',
        'Coffee/dessert in village (20–30 min).',
      ],
      links: [
        { label: 'Salts Mill', href: '/salts-mill' },
        { label: 'Hirst Wood loop', href: '/walks/hirst-wood' },
      ],
    },
    {
      title: 'Exhibition Road: overflow taster',
      bullets: [
        'Walk in via gentle downhill (8–10 min).',
        'Quick Mill browse (45–60 min).',
        'Short canal out-and-back (20–30 min).',
        'Pub garden or café table (30–60 min).',
      ],
      links: [
        { label: 'Pubs', href: '/food-drink/pubs' },
        { label: 'Coffee', href: '/food-drink/coffee' },
      ],
    },
    {
      title: '“Free nearby”: budget + steps',
      bullets: [
        'Park legally beyond core (read plate).',
        'Fold the longer walk into your plan (10–20 min).',
        'Picnic benches by river/park (30–45 min).',
        'Finish with Mill bookshop (30–45 min).',
      ],
      links: [
        { label: 'Free options (how-to)', href: '/parking/free' },
        { label: 'Family tips', href: '/plan/family' },
      ],
    },
  ]
  return (
    <section id="itins" aria-labelledby="itins-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="itins-title">Micro-itineraries (by car park)</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {itins.map((it) => (
          <article key={it.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {it.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {it.links.map((l) => (
                  <li key={l.href}>
                    <Link className="underline underline-offset-4" href={l.href as any}>
                      {l.label}
                    </Link>
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

/* ---------------------------------- FAQ ----------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is there free parking in or near Saltaire?',
    a: 'Limited street bays exist in the wider area with varying restrictions. For a smooth visit, use Caroline Street or Exhibition Road and walk in, or park in Shipley and finish the journey by train or on foot. Always read roadside plates.',
  },
  {
    q: 'Can I park in Shipley and visit Saltaire?',
    a: 'Yes. Many visitors park in Shipley town centre or near the station, then take the 2–3 minute train hop to Saltaire or walk along the canal. It’s often less stressful than circling Saltaire on busy days.',
  },
  {
    q: 'Where should I park for Salts Mill?',
    a: 'The closest is around Victoria Road by the Mill (mixed bays, check signs). Caroline Street is a reliable alternative with a short, nearly level walk. If those feel full, consider Shipley and arrive by train.',
  },
  {
    q: 'Is parking accessible?',
    a: 'Step-free routes exist from Caroline Street and the Mill vicinity into the village and Roberts Park. Surfaces are generally good; some side streets have cobbles. From Shipley, you can use level access trains between Shipley and Saltaire.',
  },
  {
    q: 'When is it busiest?',
    a: 'Sunny weekends, school holidays and festival days. Arrive before 10:30 or after 15:00, or take the train from Shipley or further along the valley to avoid parking entirely.',
  },
  {
    q: 'Height limits or long vehicles?',
    a: 'Most options in and around Saltaire are open-air without a barrier, but spaces are standard size and streets are tight. Check signage and avoid obstructing access.',
  },
]

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {it.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  )
}

/* ---------------------------------- CTA ----------------------------------- */

function CTA() {
  return (
    <section
      aria-label="Plan your visit"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Next: pick your exact plan</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Choose a Saltaire car park or keep things simple by parking in Shipley and arriving by train. Either way,
              you avoid circles around tight heritage streets.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/parking/caroline-street" className="btn btn-primary">
                Caroline Street (Saltaire)
              </Link>
              <Link href="/parking/exhibition-road" className="btn btn-outline">
                Exhibition Road (Saltaire)
              </Link>
              <Link href="/plan/getting-here" className="btn btn-ghost">
                Shipley parking &amp; trains
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.plan.src}
              alt={IMG.plan.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Saltaire parking options',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: CAR_PARKS.length,
    itemListElement: CAR_PARKS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/parking#${p.slug}`,
      description: `${p.near}. ${p.payment}. ${p.costNote}`,
      item: {
        '@type': 'ParkingFacility',
        name: p.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Saltaire',
          addressRegion: 'West Yorkshire',
          addressCountry: 'GB',
          postalCode: p.satnav,
        },
        openingHours: p.hours,
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Step-free route nearby', value: p.stepFree },
          { '@type': 'LocationFeatureSpecification', name: 'Open air', value: true },
        ],
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Parking for Saltaire & Shipley',
    url: `${base}/parking`,
    description:
      'Where to park for visiting Saltaire and nearby Shipley: Caroline Street, Exhibition Road, Salts Mill vicinity, careful street-bay guidance and strategies for parking in Shipley with a short train or walk to Saltaire.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#best-title', '#compare-title', '#checklist-title'],
    },
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'Parking', item: `${base}/parking` },
      ],
    },
  }

  // HowTo: no-ticket basics
  const howToNoTicket = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to park for Saltaire without a ticket',
    totalTime: 'PT10M',
    step: [
      {
        '@type': 'HowToStep',
        text: 'Choose Caroline Street, Exhibition Road or Salts Mill depending on your plan, or park in Shipley for more space.',
      },
      {
        '@type': 'HowToStep',
        text: 'Read the plate by your exact bay; rules can differ within the same car park or street.',
      },
      {
        '@type': 'HowToStep',
        text: 'Pay/validate as required; keep proof and note any max-stay limits.',
      },
      {
        '@type': 'HowToStep',
        text: 'Leave space at junctions and dropped kerbs; stay within markings.',
      },
    ],
  }

  // HowTo: festival day
  const howToFestival = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to handle Saltaire festival-day parking',
    totalTime: 'PT15M',
    step: [
      { '@type': 'HowToStep', text: 'Arrive before 10:00 or go by train to Saltaire station.' },
      { '@type': 'HowToStep', text: 'Try Caroline Street first; pivot to Exhibition Road if full.' },
      {
        '@type': 'HowToStep',
        text: 'If both feel saturated, park in Shipley and take the short train hop to Saltaire.',
      },
      {
        '@type': 'HowToStep',
        text: 'Add 10 minutes buffer for walking in crowds between car and your first stop.',
      },
    ],
  }

  // HowTo: read the plate
  const howToReadPlate = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to read a parking plate (street bay)',
    totalTime: 'PT3M',
    step: [
      { '@type': 'HowToStep', text: 'Confirm the bay type (short-stay, resident, loading, disabled).' },
      {
        '@type': 'HowToStep',
        text: 'Check day/time ranges and whether they differ on weekends/evenings.',
      },
      {
        '@type': 'HowToStep',
        text: 'Look for a max-stay line — caps total duration regardless of additional payments.',
      },
      {
        '@type': 'HowToStep',
        text: 'Note Blue Badge specifics; concessions and limits vary by bay and council.',
      },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToNoTicket) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToFestival) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToReadPlate) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ParkingPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <QuickLinksRail />
      <PageTOC />
      <QuickMap />
      <BestOptions />
      <CompareTable />
      <ShipleyParking />
      <StepFreeMicroRoutes />
      <OnArrivalChecklist />
      <SignageDecoder />
      <Myths />
      <BlueBadge />
      <EvCoach />
      <BusyDayPlaybooks />
      <ItinsByCarPark />
      <FAQ />
      <RelatedLinks exclude={['/parking']} title="Related Saltaire guides" />
      <CTA />
      <JsonLd />
    </>
  )
}
