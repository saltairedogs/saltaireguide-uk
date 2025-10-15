// src/app/parking/exhibition-road/page.tsx
// Exhibition Road Car Park — detail guide (server-only, CWV-first, local images only)
// - Parent hub: /parking
// - Siblings: /parking/caroline-street, /parking/free
// - Purpose: Win long-tail searches like “Exhibition Road Car Park Saltaire” with careful, evergreen guidance
// - No invented tariffs; signage-first language throughout
// - Vintage aesthetic (btn / badge / card) consistent with the site
// - SEO: WebPage + BreadcrumbList + ParkingFacility + ItemList + multiple HowTo + FAQ + Speakable
//
// Local images referenced (already in /public/images):
// - /images/parking-saltaire.png
// - /images/saltaire-canal.png
// - /images/salts-mill.png
// - /images/roberts-park.png
// - /images/plan-your-visit.png
//
// Notes:
// - We avoid specific prices and fixed Blue Badge claims. “Signage first” to stay evergreen.
// - Gentle uphill on return from village → Exhibition Road is a known trade-off, called out clearly.

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Exhibition Road Car Park, Saltaire (2025): map, walking routes, fallback strategy & tips',
  description:
    'Local guide to Exhibition Road Car Park in Saltaire: orientation, walking routes to Salts Mill and Roberts Park, signage decoder, busy-day playbooks, FAQs and how to pivot if full.',
  alternates: { canonical: `${site.url}/parking/exhibition-road` },
  openGraph: {
    title: 'Exhibition Road Car Park — practical local guide',
    description:
      'Overflow-friendly option with a gentle uphill on return. Step-free routes vary. See walking notes, signage decoder, and when to switch plan.',
    url: `${site.url}/parking/exhibition-road`,
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
  hero: { src: '/images/parking-saltaire.png', alt: 'Saltaire car park signage with stone terraces', w: 1600, h: 1066 },
  orient: { src: '/images/saltaire-canal.png', alt: 'Canal and mill area for orientation', w: 1600, h: 1066 },
  mill: { src: '/images/salts-mill.png', alt: 'Salts Mill tower and facade', w: 1200, h: 800 },
  park: { src: '/images/roberts-park.png', alt: 'Roberts Park lawns and bandstand', w: 1200, h: 800 },
  plan: { src: '/images/plan-your-visit.png', alt: 'Train arriving at platform — plan your visit', w: 1200, h: 800 },
}

function mapsLink(name: string, satnav: string) {
  const q = `${name}, ${satnav}, Saltaire`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

const CAR_PARK = {
  slug: 'exhibition-road',
  name: 'Exhibition Road Car Park',
  satnav: 'Exhibition Road, BD18',
  area: 'North of village (≈ 8–10 min to centre; gentle uphill on return)',
  hours: 'Typically 24/7 (check signs on the day)',
  height: 'Open air (no stated barrier)',
  payment: 'Pay & display / contactless where available',
  costNote: 'Council-run pricing; varies by day/season. Signs override online info.',
  stepFree: false, // routes vary; many manage with wheels but allow extra time and pick smoother streets
  tags: ['overflow', 'often-spaces', 'quieter'],
  mapHref: mapsLink('Exhibition Road Car Park', 'Exhibition Road, BD18'),
}

const QUICK_FACTS: QuickFact[] = [
  { k: 'Best for', v: 'Fallback when village core is full; calmer at peak times' },
  { k: 'Walk to village centre', v: '≈ 8–10 min · gentle uphill on the way back' },
  { k: 'Walk to Salts Mill', v: '≈ 10–12 min · allow buffer time' },
  { k: 'Walk to Roberts Park footbridge', v: '≈ 12–15 min · crowd pinch points at bridge' },
  { k: 'Surface', v: 'Open-air bays, typical tarmac/marked lines' },
  { k: 'Step-free', v: 'Routes vary; many visitors with wheels manage but allow extra time' },
]

const ROUTES: MicroRoute[] = [
  {
    id: 'to-centre',
    from: 'Exhibition Road Car Park',
    to: 'Village centre grid',
    time: '≈ 8–10 min',
    surface: 'Pavements; some sections slightly uneven',
    notes:
      'A straightforward walk into the grid. Returning to the car is a gentle uphill — pace yourself if carrying bags.',
    anchors: [{ label: 'Things to do', href: '/things-to-do' }],
  },
  {
    id: 'to-mill',
    from: 'Exhibition Road Car Park',
    to: 'Salts Mill entrance',
    time: '≈ 10–12 min',
    surface: 'Pavements; best to favour broader streets',
    notes:
      'Add a few minutes buffer in crowds. If mobility is a concern, consider Caroline Street for a shorter, flatter route.',
    anchors: [{ label: 'Salts Mill guide', href: '/salts-mill' }],
  },
  {
    id: 'to-park',
    from: 'Exhibition Road Car Park',
    to: 'Roberts Park footbridge',
    time: '≈ 12–15 min',
    surface: 'Pavements + canal area; pinch points near bridge',
    notes:
      'The bridge can be busy on sunny weekends — keep dogs close and be patient with buggies and bikes.',
    anchors: [{ label: 'Roberts Park', href: '/roberts-park' }],
  },
]

const NEARBY_LINKS: Nearby[] = [
  { label: 'Parking hub', href: '/parking', note: 'Compare all options' },
  { label: 'Caroline Street (flatter)', href: '/parking/caroline-street', note: 'Shorter, near-level walks' },
  { label: 'Free options nearby', href: '/parking/free', note: 'Street bays; restrictions vary' },
  { label: 'Getting here by train', href: '/plan/getting-here', note: 'Best on event days' },
  { label: 'Accessibility basics', href: '/plan/accessibility', note: 'Step-free strategies & surfaces' },
]

const SIGNAGE_BULLETS = [
  { k: 'Bay type', v: 'Short-stay, permit, loading and disabled bays may sit side-by-side; read posts and lines.' },
  { k: 'Max stay', v: 'Limits can apply regardless of buying another ticket — the sign is definitive.' },
  { k: 'Blue Badge', v: 'Concessions/time vary by bay/council; never assume Sundays/evenings are free.' },
  { k: 'Machines', v: 'Note machine ID/app zone; keep proof. If signage is unclear, choose a clearly marked bay.' },
  { k: 'Corners/kerbs', v: 'Keep junctions and dropped kerbs clear; park fully within marked lines.' },
]

const BUSYDAY_PLANS = [
  {
    id: 'peak',
    name: 'Village is heaving (peak weekend)',
    steps: [
      'Head straight to Exhibition Road — it often has spaces when the centre is full.',
      'Add 5–10 minutes extra for walking compared with Caroline Street.',
      'Plan a return buffer for the gentle uphill back to the car.',
    ],
    links: [{ label: 'Things to do', href: '/things-to-do' }, { label: 'Walks (short)', href: '/walks' }],
  },
  {
    id: 'event',
    name: 'Festival/market day (event traffic)',
    steps: [
      'Prefer the train to Saltaire station if possible.',
      'If driving, try Exhibition Road early; switch to Caroline Street only if signage/space looks better.',
      'Build a 10-minute crowd buffer into your timing.',
    ],
    links: [{ label: 'Events hub', href: '/events' }, { label: 'Getting here', href: '/plan/getting-here' }],
  },
  {
    id: 'rain',
    name: 'Rainy day, short visit',
    steps: ['Mill first (indoors).', 'Coffee/brunch under a roof.', 'If the weather lifts, add a short towpath window.'],
    links: [{ label: 'Salts Mill', href: '/salts-mill' }, { label: 'Brunch', href: '/brunch' }],
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is Exhibition Road a good fallback when central car parks are full?',
    a: 'Yes. It often has space when Caroline Street or the Salts Mill vicinity are saturated. Expect a gentle uphill on the way back to the car.',
  },
  {
    q: 'How long is the walk to Salts Mill?',
    a: 'Roughly 10–12 minutes depending on pace and crowds. If you want the shortest/flat route, use Caroline Street when possible.',
  },
  {
    q: 'Is there step-free access?',
    a: 'Routes vary. Many visitors with wheels manage from Exhibition Road but allow extra time and choose the broader, smoother streets. For flatter routes, consider Caroline Street.',
  },
  {
    q: 'Are there Blue Badge concessions?',
    a: 'Concessions/time limits vary by bay and council. Always read the plate by your exact bay; don’t assume Sundays/evenings are free.',
  },
  {
    q: 'Is there a height barrier?',
    a: 'Open air with no stated barrier at time of writing. Spaces are standard size; take care with longer vehicles and always check signs on the day.',
  },
]

/* ------------------------------ Tiny helpers ------------------------------ */

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
        <li aria-current="page" className="text-gray-800">Exhibition Road</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Exhibition Road Car Park</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The calmer, overflow-friendly option when the centre is busy. Expect a gentle uphill on return. Below:
            walking notes to Salts Mill and Roberts Park, signage decoding, busy-day playbooks and when to pivot.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated {UPDATED}</li>
            <li className="badge">Often has spaces</li>
            <li className="badge">Gentle uphill on return</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CAR_PARK.mapHref} className="btn btn-primary" target="_blank" rel="noopener">Open in Maps</a>
            <Link href="/parking/caroline-street" className="btn btn-outline">Flatter: Caroline Street</Link>
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
    { href: '#routes', label: 'Walking & step-free notes' },
    { href: '#signage', label: 'Signage decoder' },
    { href: '#busy', label: 'Busy-day playbooks' },
    { href: '#compare', label: 'Compare options' },
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
        Use this as practical guidance. Rules and prices change — the <strong>sign by your bay</strong> is always
        definitive on the day.
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
              <a href="#routes" className="btn btn-ghost btn-sm">See walking notes</a>
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
        Exhibition Road sits just north of the compact village grid. Walk times below assume a steady pace; add a buffer
        in crowds or with small wheels.
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
        <li><strong>Village centre</strong> — compact grid, cafés and shops.</li>
        <li><strong>Salts Mill</strong> — galleries, bookshops, cafés; shortest from Caroline Street if you prefer flatter routes.</li>
        <li><strong>Roberts Park</strong> — lawns and riverside paths across the canal footbridge.</li>
      </ul>
    </section>
  )
}

function Routes() {
  return (
    <section id="routes" aria-labelledby="routes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="routes-title">Walking & step-free notes</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Routes vary from Exhibition Road. Many visitors using wheels manage fine but allow extra time and pick the
        broader, smoother streets. Returning to the car is a gentle uphill.
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
          <h3 className="text-lg font-semibold">Streets to favour</h3>
          <p className="mt-2">Choose the wider, smoother pavements towards the grid; avoid narrow cobbled lanes if on small wheels.</p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="text-lg font-semibold">Benches & pauses</h3>
          <p className="mt-2">Benches near the park, canal and village squares; shade depends on time of day.</p>
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
            <p className="mt-2 text-xs text-gray-500">If a plate looks odd/damaged, choose a clearly marked bay instead.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Common gotchas</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Assuming all bays have identical rules (they don’t).</li>
              <li>Overlooking “max stay” even after buying a second ticket.</li>
              <li>Stopping too close to corners or across dropped kerbs.</li>
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
        Tip: if mobility is a concern, consider <Link className="underline underline-offset-4" href="/parking/caroline-street">Caroline Street</Link> for flatter, shorter walks.
      </div>
    </section>
  )
}

function Compare() {
  const peers = [
    { name: 'Caroline Street Car Park', href: '/parking/caroline-street', pros: ['Shorter, near-level walks'], cons: ['Fills earlier at peak'] },
    { name: 'Salts Mill / Victoria Road (mixed bays)', href: '/parking', pros: ['Shortest for Mill'], cons: ['Mixed rules; fills very fast'] },
    { name: 'Free options nearby (street bays)', href: '/parking/free', pros: ['Potentially free'], cons: ['Restrictions vary; enforcement active'] },
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="compare-title">Compare options</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Exhibition Road shines when the centre is busy. If you prefer flatter routes, try Caroline Street; if you need the
        absolute closest for the Mill, check the mixed bays near Victoria Road (signage varies).
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
              Parking sorted? Choose a walk, pick a café or pub, and check what’s on. Our guides stay practical and up to date.
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
    url: `${base}/parking/exhibition-road`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      addressCountry: 'GB',
      postalCode: CAR_PARK.satnav,
      streetAddress: 'Exhibition Road',
    },
    openingHours: CAR_PARK.hours,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Open air', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Step-free route nearby', value: CAR_PARK.stepFree },
    ],
    description:
      'Overflow-friendly option north of Saltaire’s village grid. Gentle uphill on return; routes vary for wheels. Always follow on-site signage.',
    isAccessibleForFree: false,
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nearby Saltaire highlights from Exhibition Road',
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
        name: 'Things to do',
        url: `${base}/things-to-do`,
        image: `${base}/images/saltaire-canal.png`,
      },
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Exhibition Road Car Park, Saltaire',
    url: `${base}/parking/exhibition-road`,
    description:
      'Practical guide to Exhibition Road Car Park: orientation, walking notes, signage decoder, busy-day playbooks and FAQs. Overflow-friendly with a gentle uphill on return.',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#essentials-title', '#routes-title', '#signage-title'] },
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'Parking', item: `${base}/parking` },
        { '@type': 'ListItem', position: 3, name: 'Exhibition Road', item: `${base}/parking/exhibition-road` },
      ],
    },
  }

  const howToNoTicket = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to use Exhibition Road without a ticket',
    totalTime: 'PT10M',
    step: [
      { '@type': 'HowToStep', text: 'Park within marked lines and read the plate at your exact bay.' },
      { '@type': 'HowToStep', text: 'Check “max stay” and any Blue Badge details — rules vary by bay.' },
      { '@type': 'HowToStep', text: 'Pay/validate as required; keep proof and note machine/app zone ID.' },
      { '@type': 'HowToStep', text: 'Plan the walk and allow time for the gentle uphill return.' },
    ],
    supply: [{ '@type': 'HowToSupply', name: 'Payment method (card/app/cash where applicable)' }],
  }

  const howToPivot = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to pivot if Exhibition Road is full',
    totalTime: 'PT8M',
    step: [
      { '@type': 'HowToStep', text: 'Check Caroline Street; it has shorter, near-level walks to the core sights.' },
      { '@type': 'HowToStep', text: 'If both are full, consider the train/park-and-ride style approach where possible.' },
      { '@type': 'HowToStep', text: 'Avoid circling narrow residential streets — pick the next clear option and walk.' },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(parkingFacility) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToNoTicket) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToPivot) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ExhibitionRoadPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Essentials />
      <Orientation />
      <Routes />
      <Signage />
      <BusyDayPlaybooks />
      <Compare />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
