// src/app/parking/caroline-street/page.tsx
// Caroline Street Car Park — detail guide (server-only, CWV-first, local images only)
// - Parent hub: /parking
// - Child siblings: /parking/exhibition-road, /parking/free
// - Purpose: Be the canonical resource for "Caroline Street Car Park Saltaire" and related long-tail intents
// - No invented tariffs; signage-first language throughout
// - Vintage aesthetic: uses site-wide .btn / .badge / .card utilities
// - SEO: WebPage + BreadcrumbList + ParkingFacility + ItemList + multiple HowTo + FAQ + Speakable
//
// Images (local only; see /public/images):
// - /images/parking-saltaire.png      (hero/parking themed)
// - /images/saltaire-canal.png        (orientation)
// - /images/salts-mill.png            (salts mill ref)
// - /images/roberts-park.png          (park ref)
// - /images/plan-your-visit.png       (CTA)
//
// NOTE: Add photo updates later (entrance shot, meter, plate, approach arrow, landmarks).
//       Keep filenames predictable to swap in later without code changes.

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Caroline Street Car Park, Saltaire (2025): map, step-free, best route & busy-day tips',
  description:
    'Local, practical guide to Caroline Street Car Park in Saltaire: map links, step-free routes to Salts Mill and Roberts Park, busy-day playbook, Blue Badge notes, FAQs and ticket-proof tips.',
  alternates: { canonical: `${site.url}/parking/caroline-street` },
  openGraph: {
    title: 'Caroline Street Car Park — the practical local guide',
    description:
      'How to use Caroline Street Car Park without stress: entrances, step-free notes, best walking routes, common signage gotchas and when to switch to Exhibition Road.',
    url: `${site.url}/parking/caroline-street`,
    type: 'article',
    images: [{ url: `${site.url}/images/parking-saltaire.png`, width: 1600, height: 1066 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-14'

type QuickFact = { k: string; v: string }
type MicroRoute = {
  id: string
  from: string
  to: string
  time: string
  surface: string
  notes: string
  anchors?: Array<{ label: string; href: string }>
}
type Nearby = { label: string; href: string; note?: string }

const IMG = {
  hero: { src: '/images/parking-saltaire.png', alt: 'Car park signage and stone terraces in Saltaire', w: 1600, h: 1066 },
  orient: { src: '/images/saltaire-canal.png', alt: 'Saltaire canal and mill for orientation', w: 1600, h: 1066 },
  mill: { src: '/images/salts-mill.png', alt: 'Salts Mill tower and facade', w: 1200, h: 800 },
  park: { src: '/images/roberts-park.png', alt: 'Roberts Park lawns and bandstand', w: 1200, h: 800 },
  plan: { src: '/images/plan-your-visit.png', alt: 'Train arriving at platform — plan your visit', w: 1200, h: 800 },
}

function mapsLink(name: string, satnav: string) {
  const q = `${name}, ${satnav}, Saltaire`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

// We stay evergreen: no hard tariffs, no “guaranteed” rules.
const CAR_PARK = {
  slug: 'caroline-street',
  name: 'Caroline Street Car Park',
  satnav: 'Caroline Street, BD18',
  area: 'Village centre (5–7 min nearly level to Salts Mill)',
  hours: 'Typically 24/7 (check signs on the day)',
  height: 'Open air (no stated barrier)',
  payment: 'Pay & display / contactless where available',
  costNote: 'Council-run pricing; varies by day/season. Signs override any online info.',
  stepFree: true,
  tags: ['reliable', 'step-free', 'central'],
  mapHref: mapsLink('Caroline Street Car Park', 'Caroline Street, BD18'),
}

const QUICK_FACTS: QuickFact[] = [
  { k: 'Best for', v: 'Salts Mill + village streets + Roberts Park (short, simple walks)' },
  { k: 'Walk to Mill', v: '≈ 5–7 min · mostly level' },
  { k: 'Walk to Park footbridge', v: '≈ 6–8 min · level to canal crossing' },
  { k: 'Surface', v: 'Open-air bays, typical tarmac/marked lines' },
  { k: 'Blue Badge', v: 'Concessions/time limits vary by bay — always read the plate' },
  { k: 'Gotcha', v: 'Max-stay may apply even if you pay again — signage first' },
]

const ROUTES: MicroRoute[] = [
  {
    id: 'to-salts-mill',
    from: 'Caroline Street Car Park',
    to: 'Salts Mill main entrance',
    time: '≈ 5–7 min',
    surface: 'Mostly level pavements',
    notes:
      'Follow the simplest, flattest streets into the village and down to Victoria Road. Avoid cobbled side lanes if on wheels.',
    anchors: [{ label: 'Salts Mill guide', href: '/salts-mill' }],
  },
  {
    id: 'to-park',
    from: 'Caroline Street Car Park',
    to: 'Roberts Park footbridge',
    time: '≈ 6–8 min',
    surface: 'Level to canal; short pinch points near bridge',
    notes:
      'Benches on the park side. On sunny weekends the bridge is busy — keep dogs close and give way to buggies.',
    anchors: [{ label: 'Roberts Park', href: '/roberts-park' }],
  },
  {
    id: 'to-village',
    from: 'Caroline Street Car Park',
    to: 'Village centre streets',
    time: '≈ 3–5 min',
    surface: 'Short, level grid',
    notes:
      'Italianate terraces in a compact grid; easy to browse shops and cafés before/after the Mill.',
    anchors: [
      { label: 'Cafés & pubs', href: '/food-drink' },
      { label: 'Shops', href: '/shops' },
    ],
  },
]

const NEARBY_LINKS: Nearby[] = [
  { label: 'Parking hub', href: '/parking', note: 'Compare all options' },
  { label: 'Exhibition Road (fallback)', href: '/parking/exhibition-road', note: 'Often has space when centre is full' },
  { label: 'Free options nearby', href: '/parking/free', note: 'Street bays with restrictions — read plates' },
  { label: 'Getting here by train', href: '/plan/getting-here', note: 'Easiest on event days' },
  { label: 'What’s on', href: '/events', note: 'Crowd patterns affect parking' },
  { label: 'Accessibility basics', href: '/plan/accessibility', note: 'Step-free routes & surface notes' },
]

const SIGNAGE_BULLETS = [
  { k: 'Bay type', v: 'Short-stay, permit, loading and disabled bays can sit side-by-side; check posts and lines.' },
  { k: 'Max stay', v: 'Applies even if you buy a new ticket; the limit is about duration, not payment count.' },
  { k: 'Blue Badge', v: 'Concessions/time vary by bay and council. Don’t assume Sundays/evenings are free.' },
  { k: 'Machines', v: 'Note machine ID/app zone; keep proof. If in doubt, pick a clearly signed bay.' },
  { k: 'Corners/kerbs', v: 'Keep clear of junctions, driveways and dropped kerbs. Park within marked lines.' },
]

const BUSYDAY_PLANS = [
  {
    id: 'festival',
    name: 'Festival or market day',
    steps: [
      'Arrive before 10:00 or take the train to Saltaire station.',
      'Try Caroline Street first; if full, pivot to Exhibition Road.',
      'Add a 10-minute buffer for walking with crowds.',
      'Use the park footbridge to spread foot traffic.',
    ],
    links: [{ label: 'Events hub', href: '/events' }, { label: 'Getting here', href: '/plan/getting-here' }],
  },
  {
    id: 'sunny',
    name: 'Sunny weekend',
    steps: [
      'Aim before 10:30 or after 15:00.',
      'Caroline Street → Exhibition Road as fallback.',
      'Bring water; pick shaded streets on the walk.',
    ],
    links: [{ label: 'Roberts Park', href: '/roberts-park' }, { label: 'Short walks', href: '/walks' }],
  },
  {
    id: 'rain',
    name: 'Rainy day, quick visit',
    steps: ['Start inside at Salts Mill.', 'Coffee/brunch under a roof.', 'Short towpath window if the rain eases.'],
    links: [{ label: 'Salts Mill', href: '/salts-mill' }, { label: 'Brunch', href: '/brunch' }],
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is Caroline Street the closest car park for Salts Mill?',
    a: 'It’s a short, mostly level ~5–7 minute walk and a reliable choice. The absolute closest bays are around Victoria Road beside the Mill, but they fill fast and rules vary by bay.',
  },
  {
    q: 'Is there a height barrier?',
    a: 'It’s open air with no stated barrier at time of writing. Spaces are standard size and streets are tight — longer vehicles should take care and always check signs.',
  },
  {
    q: 'Are there Blue Badge concessions?',
    a: 'Concessions/time limits vary by bay and council; the plate by your bay is the authority. Do not assume that Sundays/evenings are free.',
  },
  {
    q: 'Can I rely on on-street free parking nearby?',
    a: 'There are limited street bays with changing restrictions. For a smooth visit, use Caroline Street or switch to Exhibition Road if the centre is saturated.',
  },
  {
    q: 'Is it step-free to the Mill and park?',
    a: 'Yes, you can make mainly level routes from Caroline Street to both Salts Mill and Roberts Park. Some side streets have cobbles; pick the smoother streets listed below.',
  },
  {
    q: 'What are the busiest times?',
    a: 'Sunny weekends, school holidays and festival days. Arrive before 10:30 or after 15:00, or take the train to avoid parking entirely.',
  },
]

/* ------------------------------ Small helpers ----------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">{children}</h2>
}
function Small({ children }: { children: React.ReactNode }) {
  return <span className="text-xs text-gray-500">{children}</span>
}

/* -------------------------------- Components ------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li><Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link></li>
        <span className="sep">›</span>
        <li><Link href="/parking" className="underline underline-offset-4 hover:text-black">Parking</Link></li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Caroline Street</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Caroline Street Car Park</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The reliable all-round base for Saltaire: short, simple walks to Salts Mill, the canal and Roberts Park.
            Below you’ll find step-free micro-routes, signage decoding, busy-day playbooks and links to backups if it’s full.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated {UPDATED}</li>
            <li className="badge">Step-free routes</li>
            <li className="badge">Ticket-proof tips</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CAR_PARK.mapHref} className="btn btn-primary" target="_blank" rel="noopener">Open in Maps</a>
            <Link href="/parking/exhibition-road" className="btn btn-outline">Fallback: Exhibition Road</Link>
            <Link href="/parking/free" className="btn btn-ghost">Free options nearby</Link>
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
    { href: '#essentials', label: 'Essentials' },
    { href: '#map', label: 'Orientation map' },
    { href: '#routes', label: 'Step-free micro-routes' },
    { href: '#signage', label: 'Signage decoder' },
    { href: '#busy', label: 'Busy-day playbooks' },
    { href: '#compare', label: 'Compare with other options' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#cta', label: 'Plan your visit' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href={i.href}>{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function Essentials() {
  return (
    <section id="essentials" aria-labelledby="essentials-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="essentials-title">Essentials</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Treat everything here as practical guidance. Rules and prices change — the <strong>sign by your bay</strong> is definitive.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">{CAR_PARK.name}</h3>
            <ul className="mt-2 text-sm text-gray-700">
              <li><strong>Satnav:</strong> {CAR_PARK.satnav}</li>
              <li><strong>Area:</strong> {CAR_PARK.area}</li>
              <li><strong>Hours:</strong> {CAR_PARK.hours}</li>
              <li><strong>Height:</strong> {CAR_PARK.height}</li>
              <li><strong>Payment:</strong> {CAR_PARK.payment}</li>
              <li><strong>Notes:</strong> {CAR_PARK.costNote}</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {CAR_PARK.tags.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={CAR_PARK.mapHref} className="btn btn-primary btn-sm" target="_blank" rel="noopener">Open in Maps</a>
              <a href="#routes" className="btn btn-ghost btn-sm">See step-free routes</a>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Quick facts</h3>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-700">
              {QUICK_FACTS.map((f) => (
                <li key={f.k}><span className="font-medium">{f.k}:</span> {f.v}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Nearby & useful</h3>
            <ul className="mt-2 grid grid-cols-1 gap-2 text-sm">
              {NEARBY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href as any} className="underline underline-offset-4">{l.label}</Link>
                  {l.note ? <Small> — {l.note}</Small> : null}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

function Orientation() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Orientation map & landmarks</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The car park sits a short, near-level walk from the village grid, Salts Mill and the park footbridge. Use this
        visual to get your bearings, then tap “Open in Maps” for live directions.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src={IMG.orient.src}
          alt={IMG.orient.alt}
          width={IMG.orient.w}
          height={IMG.orient.h}
          className="object-cover"
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
        <li><strong>Salts Mill</strong> (books, galleries, cafés) — shortest routes are mostly level.</li>
        <li><strong>Roberts Park</strong> — cross the canal via the footbridge; expect pinch points on busy days.</li>
      </ul>
    </section>
  )
}

function MicroRoutes() {
  return (
    <section id="routes" aria-labelledby="routes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="routes-title">Step-free micro-routes</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These are practical walking times and surface notes from Caroline Street. Surfaces change with weather — slow
        down if it’s wet or icy and skip cobbled lanes if on small wheels.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {ROUTES.map((r) => (
          <article key={r.id} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{r.from} → {r.to}</h3>
              <ul className="mt-2 text-sm text-gray-700">
                <li>⏱ {r.time}</li>
                <li>🛣 {r.surface}</li>
                <li>📝 {r.notes}</li>
              </ul>
              {r.anchors && (
                <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                  {r.anchors.map((a) => (
                    <li key={a.href}><Link href={a.href} className="underline underline-offset-4">{a.label}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">Smooth streets to favour</h3>
          <p className="mt-2">Pick the broader, smoother streets between Caroline Street and Victoria Road; avoid cobbled side lanes.</p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">Benches & pause points</h3>
          <p className="mt-2">Benches near the park entrance and along the canal; shade varies with time of day.</p>
        </article>
      </div>
    </section>
  )
}

function Signage() {
  return (
    <section id="signage" aria-labelledby="signage-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signage-title">Signage decoder (avoid a ticket)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Read before you pay</h3>
            <ul className="mt-2 list-disc pl-5">
              {SIGNAGE_BULLETS.map((b) => (
                <li key={b.k}><span className="font-medium">{b.k}:</span> {b.v}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">If a plate looks odd/damaged, pick another clearly marked bay.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Common gotchas</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Assuming all bays share rules (they don’t).</li>
              <li>Missing the “max stay” line on small print.</li>
              <li>Parking across dropped kerbs or too close to corners.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function BusyDayPlaybooks() {
  return (
    <section id="busy" aria-labelledby="busy-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="busy-title">Busy-day playbooks</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {BUSYDAY_PLANS.map((p) => (
          <article key={p.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <ol className="mt-2 list-decimal pl-5 text-gray-700">
                {p.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {p.links.map((l) => (
                  <li key={l.href}><Link href={l.href as any} className="underline underline-offset-4">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        Tip: if Caroline Street is saturated, <Link className="underline underline-offset-4" href="/parking/exhibition-road">switch to Exhibition Road</Link> rather than circling.
      </div>
    </section>
  )
}

function Compare() {
  const peers = [
    { name: 'Exhibition Road Car Park', href: '/parking/exhibition-road', pros: ['Often has spaces at peak'], cons: ['Gentle uphill on return'] },
    { name: 'Salts Mill / Victoria Road', href: '/parking', pros: ['Shortest for Mill'], cons: ['Mixed bays; rules vary; fills very fast'] },
    { name: 'Free options nearby (street bays)', href: '/parking/free', pros: ['Potentially free'], cons: ['Restrictions vary; enforcement active'] },
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="compare-title">Compare with other options</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Caroline Street is the reliable all-rounder. If it’s full, these are your next best options:
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[780px]">
          <thead>
            <tr>
              <th>Option</th>
              <th>Pros</th>
              <th>Trade-offs</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {peers.map((p) => (
              <tr key={p.href}>
                <td className="font-medium">{p.name}</td>
                <td>
                  <ul className="list-disc pl-4">{p.pros.map((x) => <li key={x}>{x}</li>)}</ul>
                </td>
                <td>
                  <ul className="list-disc pl-4">{p.cons.map((x) => <li key={x}>{x}</li>)}</ul>
                </td>
                <td><Link href={p.href} className="underline underline-offset-4">Read guide →</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>{f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
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

function CTA() {
  return (
    <section id="cta" aria-label="Plan your visit" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan the perfect Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Parking sorted? Pick a walk, choose a café or pub, and check what’s on. Our guides stay practical and up to date.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/walks" className="btn btn-primary">Best walks</Link>
              <Link href="/food-drink" className="btn btn-outline">Cafés & pubs</Link>
              <Link href="/events" className="btn btn-ghost">What’s on</Link>
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
  const parkingFacility = {
    '@context': 'https://schema.org',
    '@type': 'ParkingFacility',
    name: CAR_PARK.name,
    url: `${base}/parking/caroline-street`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      addressCountry: 'GB',
      postalCode: CAR_PARK.satnav,
      streetAddress: 'Caroline Street',
    },
    openingHours: CAR_PARK.hours,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Open air', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Step-free route nearby', value: CAR_PARK.stepFree },
    ],
    description:
      'Reliable central car park for Saltaire. Short, mostly level walks to Salts Mill, village streets and Roberts Park. Always check signage by your bay.',
    isAccessibleForFree: false,
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nearby Saltaire highlights from Caroline Street',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Salts Mill',
        url: `${base}/salts-mill`,
        image: `${base}/images/salts-mill.png`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Roberts Park',
        url: `${base}/roberts-park`,
        image: `${base}/images/roberts-park.png`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'What’s on',
        url: `${base}/events`,
        image: `${base}/images/whats-on.png`, // falls back if present; else omit image
      },
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Caroline Street Car Park, Saltaire',
    url: `${base}/parking/caroline-street`,
    description:
      'Practical guide to Caroline Street Car Park in Saltaire: map links, step-free micro-routes, signage decoder, busy-day playbooks and FAQs.',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#essentials-title', '#routes-title', '#signage-title'] },
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'Parking', item: `${base}/parking` },
        { '@type': 'ListItem', position: 3, name: 'Caroline Street', item: `${base}/parking/caroline-street` },
      ],
    },
  }

  const howToTicketProof = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to use Caroline Street Car Park without a ticket',
    totalTime: 'PT10M',
    supply: [{ '@type': 'HowToSupply', name: 'Payment method (card/app/cash where applicable)' }],
    step: [
      { '@type': 'HowToStep', text: 'Park within marked lines and read the plate at your exact bay.' },
      { '@type': 'HowToStep', text: 'Check max-stay and Blue Badge info — rules differ by bay.' },
      { '@type': 'HowToStep', text: 'Pay/validate as required and keep proof. Note machine/app zone ID.' },
      { '@type': 'HowToStep', text: 'Plan your route: smoother streets to Salts Mill or Roberts Park.' },
    ],
  }

  const howToBusy = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to handle busy days from Caroline Street',
    totalTime: 'PT15M',
    step: [
      { '@type': 'HowToStep', text: 'Arrive before 10:30 or after 15:00 on sunny weekends.' },
      { '@type': 'HowToStep', text: 'If full, switch to Exhibition Road rather than circling.' },
      { '@type': 'HowToStep', text: 'Allow buffer time for walking through crowds to the Mill or park.' },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parkingFacility) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToTicketProof) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBusy) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function CarolineStreetPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Essentials />
      <Orientation />
      <MicroRoutes />
      <Signage />
      <BusyDayPlaybooks />
      <Compare />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
