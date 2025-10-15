// src/app/walks/shipley-glen/page.tsx
// Shipley Glen & Baildon Moor Walks — Saltaire Guide (fixed v1.1)
// - Server component only (no client JS). Removed onClick handler that caused the runtime error.
// - When GPX is missing we render a non-interactive <span> styled like a disabled button.

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Shipley Glen Walks (2025): Shipley Glen Tramway, Baildon Moor, step-free options & maps',
  description:
    'The definitive local guide to walking Shipley Glen from Saltaire: easy circulars, Baildon Moor extension, step-free where possible, maps, waypoints, transport, parking, and FAQs.',
  alternates: { canonical: `${site.url}/walks/shipley-glen` },
  openGraph: {
    title:
      'Shipley Glen Walks — easy circulars, Baildon Moor extension, maps & tips',
    description:
      'Route choices from Saltaire with waypoints, accessibility notes, transport/parking, and local tips. Family-friendly options & photo spots.',
    url: `${site.url}/walks/shipley-glen`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Stat = { label: string; value: string; hint?: string }
type Waypoint = { id: string; name: string; desc: string }
type Segment = { title: string; steps: string[] }
type RouteVariant = {
  slug: string
  name: string
  duration: string
  distance: string
  ascent: string
  grade: 'Easy' | 'Leisurely' | 'Moderate'
  summary: string
  bestFor: string[]
  waypoints: Waypoint[]
  segments: Segment[]
  gpx?: string // e.g. '/routes/shipley-glen-easy.gpx'
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

const PAGE_INTRO = {
  title: 'Shipley Glen & Baildon Moor walks',
  tagline:
    'Classic Yorkshire gritstone, woodland edges and wide moor views — all a short hop from Saltaire.',
  bullets: [
    'Three route options: easy circular, moor extension, canal link.',
    'Waypoints & turn-by-turn directions you can follow offline.',
    'Accessibility notes and step-free suggestions where practical.',
  ],
}

const STATS: Stat[] = [
  { label: 'Start', value: 'Saltaire (Victoria Rd / Roberts Park)' },
  { label: 'OS Map', value: 'OL21 / Explorer 288' },
  { label: 'Terrain', value: 'Towpath, woodland paths, rocky edges, moor tracks' },
  { label: 'Dogs', value: 'Yes, on leads near livestock & tramway' },
  { label: 'Best months', value: 'April–October', hint: 'Winter is fine with care' },
]

const ROUTES: RouteVariant[] = [
  {
    slug: 'glen-easy',
    name: 'Shipley Glen Easy Circular',
    duration: '60–90 min',
    distance: '3.5–4.0 km',
    ascent: '100–140 m',
    grade: 'Leisurely',
    summary:
      'Family-friendly circuit taking in woodland edges, gritstone outcrops and the historic Shipley Glen Tramway area. Several short slopes; mostly firm paths with occasional rocky steps.',
    bestFor: ['Families', 'Short daylight windows', 'Photo scouting'],
    waypoints: [
      {
        id: 'saltaire-station',
        name: 'Saltaire Station / Victoria Road',
        desc:
          'Rail arrival, cafés and Salts Mill. Cross Victoria Rd to Roberts Park footbridge for a scenic start.',
      },
      {
        id: 'roberts-park',
        name: 'Roberts Park (river & bandstand)',
        desc:
          'Level riverside paths and the Half Moon Café. Toilets when open. Head towards the Higher Coach Rd side.',
      },
      {
        id: 'glen-road',
        name: 'Glen Road entrance',
        desc:
          'Woodland edge with paths leading up to Shipley Glen. Look for waymarks and keep left of the steeper tracks.',
      },
      {
        id: 'tramway-lower',
        name: 'Shipley Glen Tramway (lower)',
        desc:
          'Historic funicular (volunteer-run). Operating mainly weekend afternoons in season — check times before you go.',
      },
      {
        id: 'bracken-hall',
        name: 'Bracken Hall Countryside Centre',
        desc:
          'Small nature centre and garden near the glen top. Friendly team at weekends; seasonal displays & kids activities.',
      },
      {
        id: 'glen-top',
        name: 'Glen top rocks & views',
        desc: 'Gritstone edges with short scrambles nearby — keep dogs/children close.',
      },
    ],
    segments: [
      {
        title: 'Saltaire to Roberts Park',
        steps: [
          'From Saltaire Station, walk down Victoria Rd towards Salts Mill.',
          'Cross the footbridge into Roberts Park (river Aire on your right).',
          'Keep to the broad riverside path, passing the bandstand and play areas.',
        ],
      },
      {
        title: 'Park to Glen Road entrance',
        steps: [
          'Exit Roberts Park over the footbridge towards Higher Coach Rd.',
          'Turn left and follow signs towards Shipley Glen via Glen Road.',
          'Ignore steeper shortcuts; bear left on the main path up through the trees.',
        ],
      },
      {
        title: 'Tramway & Bracken Hall',
        steps: [
          'At the base area, locate the Shipley Glen Tramway lower station.',
          'Optional: ride the Tramway when running; otherwise continue up on the path to the top.',
          'Visit Bracken Hall Countryside Centre (weekends) for displays and a short rest.',
        ],
      },
      {
        title: 'Glen top loop & return',
        steps: [
          'Skirt the gritstone edges on clear desire paths (watch footing in wet weather).',
          'Loop back via the woodland track parallel to Glen Road.',
          'Descend the same way to Roberts Park and return to Saltaire.',
        ],
      },
    ],
  },
  {
    slug: 'moor-extension',
    name: 'Glen + Baildon Moor Extension',
    duration: '2–2.5 hr',
    distance: '6.5–7.5 km',
    ascent: '220–280 m',
    grade: 'Moderate',
    summary:
      'Adds Baildon Moor for big-sky views and heather edges. Rougher paths in places and short steeper pitches.',
    bestFor: ['Views', 'Training loop', 'Photography sunset/golden hour'],
    waypoints: [
      { id: 'glen-top', name: 'Glen top', desc: 'Edge paths above Shipley Glen.' },
      {
        id: 'moor-edge',
        name: 'Baildon Moor edge',
        desc: 'Open moor with heather; keep to paths to protect habitats.',
      },
      {
        id: 'trig',
        name: 'Moor high point / trig vicinity',
        desc: 'Broad views towards Airedale; windy on exposed days.',
      },
      {
        id: 'return-glen',
        name: 'Return via Glen',
        desc: 'Retrace to the glen top and descend to Saltaire.',
      },
    ],
    segments: [
      {
        title: 'Glen top to Moor edge',
        steps: [
          'From the glen top rocks, head north-east onto the moor via clear tracks.',
          'Keep right at forks to stay close to the moor edge for views.',
          'Beware peaty patches after rain; step around to avoid widening paths.',
        ],
      },
      {
        title: 'Moor high ground loop',
        steps: [
          'Follow the broad track to the high ground near the trig point.',
          'Optional: short detours to viewpoints; return to the main track after.',
        ],
      },
      {
        title: 'Return',
        steps: [
          'Drop back to the glen top via your ascent line.',
          'Descend to Bracken Hall, then Glen Road and Roberts Park.',
        ],
      },
    ],
  },
  {
    slug: 'canal-link',
    name: 'Glen + Canal Link (via Hirst Wood)',
    duration: '2–3 hr',
    distance: '8–10 km',
    ascent: '160–220 m',
    grade: 'Leisurely',
    summary:
      'Combine woodland and water: Shipley Glen, Hirst Wood and the Leeds–Liverpool Canal towpath to Roberts Park.',
    bestFor: ['Longer but gentle', 'Birdwatching', 'Family with older kids'],
    waypoints: [
      { id: 'hirst-wood', name: 'Hirst Wood', desc: 'Woodland and river meadows.' },
      {
        id: 'canal-towpath',
        name: 'Canal towpath',
        desc: 'Level walking with heritage locks and bridges.',
      },
    ],
    segments: [
      {
        title: 'Glen to Hirst Wood',
        steps: [
          'From glen top, contour to pick up paths towards Hirst Wood.',
          'Drop gently to the river corridor; expect muddy patches after rain.',
        ],
      },
      {
        title: 'Towpath to Roberts Park',
        steps: [
          'Join the Leeds–Liverpool Canal towpath heading back towards Saltaire.',
          'Enjoy level, easy walking with occasional bikes — keep left and listen out.',
        ],
      },
      {
        title: 'Return to Saltaire',
        steps: [
          'Re-enter Roberts Park by the canal bridge.',
          'Finish at Victoria Rd / Salts Mill for cafés and trains.',
        ],
      },
    ],
  },
]

const ACCESSIBILITY_NOTES = [
  'Roberts Park and the canal towpath are broadly level and suitable for robust wheelchairs/buggies in fair weather.',
  'Glen paths include short steeper slopes, occasional rocky steps and exposed tree roots.',
  'The Tramway (when operating) provides an alternative to one uphill section between lower and upper glen.',
  'After rain, expect slippery gritstone and muddy sections near the moor edge.',
]

const SAFETY_NOTES = [
  'Keep children and dogs close near gritstone edges and steep drops.',
  'Weather changes quickly on the moor — carry an extra layer and check forecasts.',
  'Paths can be slippery in winter; avoid rock edges in ice.',
  'Respect closures and diversions; stick to paths across sensitive habitats.',
]

const FACILITIES = [
  { name: 'Toilets (Roberts Park pavilion) — when open', note: 'Seasonal/event-dependent' },
  { name: 'Half Moon Café (Roberts Park)', note: 'Hours vary' },
  { name: 'Salts Mill cafés & shops', note: 'Independent businesses; check times' },
  { name: 'Bracken Hall Countryside Centre', note: 'Typically weekends; small displays' },
]

const FAQS = [
  {
    q: 'How long is the Shipley Glen walk from Saltaire?',
    a: 'The easy circular is around 3.5–4.0 km (60–90 min). Add Baildon Moor for 6.5–7.5 km (2–2.5 hr) with more ascent. The canal link runs 8–10 km (2–3 hr) at a gentler grade.',
  },
  {
    q: 'Is the route suitable for families?',
    a: 'Yes — the easy circular is popular. Take care near gritstone edges and on short rocky steps. The canal section is very family-friendly.',
  },
  {
    q: 'Can I ride the Shipley Glen Tramway as part of the walk?',
    a: 'Often, yes at weekends in season. Operating days/times vary; check the Tramway’s official info before you go.',
  },
  {
    q: 'Where should I park?',
    a: 'Use our dedicated Parking guide for up-to-date options around Salts Mill, Caroline Street and Exhibition Road, plus step-free notes.',
  },
  {
    q: 'Are dogs allowed?',
    a: 'Yes, but keep on leads near livestock and by the Tramway/stations. Please pick up and stick to paths across the moor.',
  },
]

/* ------------------------------- Components -------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li>
          <Link href="/walks" className="underline underline-offset-4 hover:text-black">Walks</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Shipley Glen</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            {PAGE_INTRO.title}
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">{PAGE_INTRO.tagline}</p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Reviewed: {UPDATED}</li>
            <li className="badge">Multiple route options</li>
            <li className="badge">Local &amp; practical</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Gritstone edges and woodland above a valley near Saltaire"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </header>
  )
}

function Stats() {
  return (
    <section aria-labelledby="stats-title" className="container mx-auto max-w-7xl px-4 py-8">
      <h2 id="stats-title" className="sr-only">Quick stats</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STATS.map((s) => (
          <div key={s.label} className="card">
            <div className="card-body">
              <div className="text-sm font-medium text-gray-600">{s.label}</div>
              <div className="text-lg font-semibold">{s.value}</div>
              {s.hint ? <div className="mt-1 text-xs text-gray-500">{s.hint}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TOC() {
  const items = [
    { href: '#routes', label: 'Route options' },
    { href: '#map', label: 'Quick map & waypoints' },
    { href: '#directions', label: 'Turn-by-turn directions' },
    { href: '#accessibility', label: 'Accessibility notes' },
    { href: '#transport-parking', label: 'Transport & parking' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#safety', label: 'Safety & seasons' },
    { href: '#wildlife', label: 'Wildlife & geology' },
    { href: '#photos', label: 'Photography spots' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#nearby', label: 'Nearby & related guides' },
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

function RoutesOverview() {
  return (
    <section id="routes" aria-labelledby="routes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="routes-title" className="text-2xl font-bold tracking-tight md:text-3xl">Route options</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick the loop that fits your time and energy. All variants start/finish in Saltaire and pass through the
        Shipley Glen area; one extends onto Baildon Moor for bigger views, another links with the canal and Hirst Wood.
        You can combine sections to create your own perfect day out.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ROUTES.map((r) => (
          <article key={r.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="card-body">
              <div className="text-lg font-semibold">{r.name}</div>
              <ul className="mt-2 text-sm text-gray-700">
                <li><strong>Distance:</strong> {r.distance}</li>
                <li><strong>Time:</strong> {r.duration}</li>
                <li><strong>Ascent:</strong> {r.ascent} · <strong>Grade:</strong> {r.grade}</li>
              </ul>
              <p className="mt-2 text-gray-700">{r.summary}</p>
              <p className="mt-2 text-sm text-gray-600">
                Best for: {r.bestFor.join(' · ')}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Distances and times are approximate and depend on conditions and pace.
      </p>
    </section>
  )
}

function QuickMap() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick map & waypoints</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        To keep this page fast, we use a static preview. Tap waypoints in the lists to orient yourself, then open your
        maps app for live directions if needed. If you prefer a GPX, see the route cards (we’ll add downloads soon).
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/walks-from-saltaire.png"
          width={1600}
          height={900}
          alt="Static overview map placeholder of Saltaire, Shipley Glen and Baildon Moor"
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {ROUTES.map((r) => (
          <div key={r.slug} className="card">
            <div className="card-body">
              <div className="text-lg font-semibold">{r.name}</div>
              <ul className="mt-2 space-y-2">
                {r.waypoints.map((w) => (
                  <li key={w.id}>
                    <div className="font-medium">{w.name}</div>
                    <p className="text-sm text-gray-700">{w.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TurnByTurn() {
  return (
    <section id="directions" aria-labelledby="dir-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="dir-title" className="text-2xl font-bold tracking-tight md:text-3xl">Turn-by-turn directions</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Keep these handy screenshots or copy the steps to a notes app. Paths are obvious in good weather; after rain,
        take extra care on rock and roots.
      </p>

      <div className="mt-6 space-y-8">
        {ROUTES.map((r) => (
          <article key={r.slug} className="rounded-2xl border border-gray-200 bg-white">
            <div className="card-body">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{r.name}</h3>
                <div className="text-sm text-gray-600">
                  {r.distance} · {r.duration} · {r.ascent} · {r.grade}
                </div>
              </div>

              {r.segments.map((s) => (
                <div key={s.title} className="mt-4">
                  <div className="font-medium">{s.title}</div>
                  <ol className="mt-2 list-decimal pl-6 text-gray-700">
                    {s.steps.map((st, i) => (
                      <li key={i} className="mt-1">{st}</li>
                    ))}
                  </ol>
                </div>
              ))}

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {r.gpx ? (
                  <a className="btn btn-outline" href={r.gpx} download>
                    Download GPX
                  </a>
                ) : (
                  <span
                    className="btn btn-outline opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                    title="GPX coming soon"
                  >
                    GPX coming soon
                  </span>
                )}
                <Link href="/parking" className="btn btn-ghost">Parking guide</Link>
                <Link href="/plan/getting-here" className="btn btn-ghost">Getting here</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Accessibility() {
  return (
    <section id="accessibility" aria-labelledby="acc-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="acc-title" className="text-2xl font-bold tracking-tight md:text-3xl">Accessibility notes</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <div className="text-lg font-semibold">Step-free where possible</div>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ACCESSIBILITY_NOTES.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Surface & gradient quick look</div>
            <ul className="mt-2 text-gray-700 list-disc pl-5">
              <li>Roberts Park: broad, mostly level paths.</li>
              <li>Glen Road: compacted path with short steeper ramps (~6–10%).</li>
              <li>Gritstone edges: uneven rock steps; avoid in ice.</li>
              <li>Canal towpath: level; occasional puddles after heavy rain.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Conditions vary; choose the route that suits your needs on the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TransportParking() {
  return (
    <section id="transport-parking" aria-labelledby="tp-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="tp-title" className="text-2xl font-bold tracking-tight md:text-3xl">Transport & parking</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">By train</div>
            <p className="mt-2 text-gray-700">
              <strong>Saltaire Station</strong> sits at the route start. Trains run on the Airedale Line with frequent
              services. From the station, it’s a short walk to Victoria Road, Roberts Park and the glen approach.
            </p>
            <p className="mt-2 text-sm text-gray-600">Check live times before travel.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">By car</div>
            <p className="mt-2 text-gray-700">
              Use our dedicated <Link className="underline underline-offset-4" href="/parking">Parking guide</Link> for
              the latest on Salts Mill/Victoria Rd areas, Caroline Street and Exhibition Road, including step-free routes
              and busy-time tips.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 callout">
        <div className="text-lg font-semibold">Shipley Glen Tramway</div>
        <p className="mt-2 text-gray-700">
          The volunteer-run historic Tramway often operates on weekend afternoons in season. It’s a fun optional leg and
          can remove one uphill section. Always check official information before you go.
        </p>
      </div>
    </section>
  )
}

function FacilitiesSection() {
  return (
    <section id="facilities" aria-labelledby="fac-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="fac-title" className="text-2xl font-bold tracking-tight md:text-3xl">Facilities</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {FACILITIES.map((f) => (
          <div key={f.name} className="card">
            <div className="card-body">
              <div className="text-lg font-semibold">{f.name}</div>
              <p className="mt-2 text-gray-700">{f.note}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Hours vary seasonally; independent venues may change opening times at short notice.
      </p>
    </section>
  )
}

function SafetySeasons() {
  return (
    <section id="safety" aria-labelledby="safety-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="safety-title" className="text-2xl font-bold tracking-tight md:text-3xl">Safety & seasons</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout callout-warn">
          <div className="text-lg font-semibold">Key cautions</div>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {SAFETY_NOTES.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Seasonal notes</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li><strong>Spring:</strong> Bluebells and bird song; watch for wet rock.</li>
              <li><strong>Summer:</strong> Heather on the moor; carry water and sun protection.</li>
              <li><strong>Autumn:</strong> Leaf fall can hide roots; stunning colours.</li>
              <li><strong>Winter:</strong> Ice possible on gritstone; consider the canal link for an easier day.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function WildlifeGeology() {
  return (
    <section id="wildlife" aria-labelledby="wild-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="wild-title" className="text-2xl font-bold tracking-tight md:text-3xl">Wildlife & geology</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">Gritstone & glen</div>
            <p className="mt-2 text-gray-700">
              The glen’s character comes from Millstone Grit — weathered blocks, edges and boulders wrapped in birch,
              oak and pine. Shallow soils and exposed rock create micro-habitats; please keep to established paths to
              protect vegetation.
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">Birdlife & flora</div>
          <p className="mt-2 text-gray-700">
            Expect garden and woodland species in the lower glen, with moorland birds higher up. Heather and bilberry
            patchwork the moor in late summer.
          </p>
        </div>
      </div>
    </section>
  )
}

function Photography() {
  const spots = [
    'Glen top edges at golden hour (west-facing light).',
    'Roberts Park bandstand with Salts Mill chimney.',
    'Canal towpath reflections near Hirst Wood.',
    'Heather and boulder foregrounds on Baildon Moor.',
  ]
  return (
    <section id="photos" aria-labelledby="photo-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="photo-title" className="text-2xl font-bold tracking-tight md:text-3xl">Photography spots</h2>
      <ul className="mt-2 list-disc pl-5 text-gray-700">
        {spots.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <p className="mt-2 text-sm text-gray-600">
        Drones: follow local regulations and be considerate of wildlife and other visitors.
      </p>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
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
    </section>
  )
}

function NearbyRelated() {
  const items = [
    { href: '/salts-mill', label: 'Salts Mill' },
    { href: '/roberts-park', label: 'Roberts Park' },
    { href: '/walks/shipley-glen', label: 'This walk (refresh for updates)' },
    { href: '/walks/five-rise', label: 'Towpath to Bingley Five-Rise (coming soon)' },
    { href: '/food-drink', label: 'Cafés & pubs' },
    { href: '/plan/getting-here', label: 'Getting here' },
    { href: '/parking', label: 'Parking in Saltaire' },
  ]
  return (
    <section id="nearby" aria-labelledby="nearby-title" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <h2 id="nearby-title" className="text-2xl font-bold tracking-tight md:text-3xl">Nearby & related guides</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-3 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.href}>
              <Link className="underline underline-offset-4" href={it.href}>{it.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const hikingTrail = {
    '@context': 'https://schema.org',
    '@type': 'HikingTrail',
    name: 'Shipley Glen & Baildon Moor Walks',
    url: `${base}/walks/shipley-glen`,
    areaServed: 'GB',
    isAccessibleForFree: true,
    keywords: [
      'Shipley Glen walk',
      'Baildon Moor walk',
      'Saltaire walks',
      'Roberts Park',
      'Hirst Wood',
      'Leeds–Liverpool Canal',
    ],
    trailDifficulty: 'Easier to Moderate',
    length: '8 km',
    description:
      'Route options from Saltaire through Shipley Glen with extensions to Baildon Moor and the Leeds–Liverpool Canal.',
    image: [`${base}/images/og/saltaire-walks-shipley-glen.jpg`].filter(Boolean),
  }

  const trips = ROUTES.map((r) => ({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: r.name,
    itinerary: r.segments.map((seg, i) => ({
      '@type': 'ItemList',
      name: seg.title,
      position: i + 1,
      itemListElement: seg.steps.map((st, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: st,
      })),
    })),
    description: r.summary,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      url: `${base}/walks/shipley-glen#${r.slug}`,
      availability: 'https://schema.org/InStock',
    },
  }))

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Walks', item: `${base}/walks` },
      { '@type': 'ListItem', position: 3, name: 'Shipley Glen', item: `${base}/walks/shipley-glen` },
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

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/walks/shipley-glen`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#routes-title', '#dir-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hikingTrail) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trips) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ShipleyGlenPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <Stats />
      <TOC />
      <RoutesOverview />
      <QuickMap />
      <TurnByTurn />
      <Accessibility />
      <TransportParking />
      <FacilitiesSection />
      <SafetySeasons />
      <WildlifeGeology />
      <Photography />
      <FAQ />
      <NearbyRelated />
      <JsonLd />
    </>
  )
}
