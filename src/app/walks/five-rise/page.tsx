// src/app/walks/five-rise/page.tsx
// Walk: Saltaire → Bingley Five Rise Locks (cornerstone v1)
// - Server component (no client handlers); static for CWV
// - Evergreen copy; avoids fragile timings while giving distance/grade
// - Strong internal links, on-page ToC, accessible markup
// - JSON-LD: WebPage + BreadcrumbList + HowTo (turn-by-turn) + ItemList (POIs) + FAQPage + Speakable
// - Optional GPX download link (add file later at /public/gpx/walks/five-rise.gpx)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Saltaire to Bingley Five Rise Locks walk: step-by-step canal route, map notes & tips (2025)',
  description:
    'A calm, mostly level canal walk from Saltaire to Bingley Five Rise Locks. Distance 6.5–7.5 miles return with options for train back, step-free notes, photo spots and cafés.',
  alternates: { canonical: `${site.url}/walks/five-rise` },
  openGraph: {
    title: 'Saltaire → Bingley Five Rise Locks: complete walking guide',
    description:
      'Turn-by-turn along the Leeds & Liverpool Canal, distance/time, step-free pointers, food/loo stops, variations and GPX.',
    url: `${site.url}/walks/five-rise`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Poi = {
  id: string
  name: string
  kind: 'view' | 'loo' | 'cafe' | 'lock' | 'bridge' | 'station'
  summary: string
  link?: string
}

const POIS: Poi[] = [
  {
    id: 'salts-mill',
    name: 'Salts Mill (start option)',
    kind: 'view',
    summary:
      'Landmark start with cafés and loos nearby. Good orientation point before joining the canal.',
    link: '/salts-mill',
  },
  {
    id: 'hirst-lock',
    name: 'Hirst Lock',
    kind: 'lock',
    summary:
      'Pretty lock with picnic spots and a short detour to riverside meadows.',
  },
  {
    id: 'dowley-gap',
    name: 'Dowley Gap Aqueduct',
    kind: 'bridge',
    summary:
      'Elegant stone aqueduct over the River Aire; great photo angles upriver.',
  },
  {
    id: 'bing-station',
    name: 'Bingley station (return option)',
    kind: 'station',
    summary:
      'Short walk from the canal; trains back to Saltaire/Shipley/Leeds/Bradford.',
  },
  {
    id: 'five-rise',
    name: 'Bingley Five Rise Locks',
    kind: 'lock',
    summary:
      'Britain’s steepest staircase locks; watch boats ascend/descend in season.',
  },
  {
    id: 'three-rise',
    name: 'Bingley Three Rise Locks',
    kind: 'lock',
    summary: 'Another impressive flight just south of the Five Rise.',
  },
  {
    id: 'cafe-top',
    name: 'Café near top lock',
    kind: 'cafe',
    summary:
      'Handy drinks/ice cream stop in season. Expect queues on sunny weekends.',
  },
  {
    id: 'loo-five',
    name: 'Toilets (seasonal) near locks',
    kind: 'loo',
    summary:
      'Facilities vary by season/event; bring hand gel and a small pack-out bag.',
  },
]

type Segment = {
  no: number
  from: string
  to: string
  distKm: number
  surface: string
  notes: string
}

const SEGMENTS: Segment[] = [
  {
    no: 1,
    from: 'Saltaire (Victoria Road / canal junction)',
    to: 'Hirst Lock',
    distKm: 2.0,
    surface: 'Towpath, compact gravel/stone flags',
    notes:
      'Level walking; mind cyclists. Good warm-up stretch with views back to the mill chimney.',
  },
  {
    no: 2,
    from: 'Hirst Lock',
    to: 'Dowley Gap Aqueduct',
    distKm: 1.2,
    surface: 'Towpath, compact gravel',
    notes:
      'Short but scenic. Detour briefly onto the aqueduct for river views; handrails are solid.',
  },
  {
    no: 3,
    from: 'Dowley Gap Aqueduct',
    to: 'Bingley Three Rise Locks',
    distKm: 1.8,
    surface: 'Towpath, occasional puddles after rain',
    notes:
      'Gentle bends with moorings; watch for narrow sections. Benches appear near bridges.',
  },
  {
    no: 4,
    from: 'Bingley Three Rise Locks',
    to: 'Bingley Five Rise Locks (turn point)',
    distKm: 0.9,
    surface: 'Towpath, stone near the locks',
    notes:
      'Slight gradient near lock approaches. Boat movements are great to watch in boating season.',
  },
]

const SAFETY_TIPS = [
  'Towpaths are shared: give way kindly, keep right at narrowings and signal with a friendly hello if needed.',
  'Water risk: supervise children near edges; towpath edges can be unprotected.',
  'After rain, expect puddles and slippery stone flags; tread carefully.',
  'In summer, carry water and sun protection; shade is intermittent.',
]

const ACCESS_TIPS = [
  'Overall route is mostly level; surface varies from compact gravel to stone flags.',
  'Step-free is broadly possible from Saltaire to near the locks, but occasional narrowings and camber exist.',
  'At busy pinch points by bridges and locks, wait for space and pass single-file.',
]

const VARIATIONS = [
  {
    title: 'Short Out-and-Back (4–5 km)',
    text: 'Walk from Saltaire to Hirst Lock (or Dowley Gap), enjoy the aqueduct, and return the same way.',
  },
  {
    title: 'One-Way with Train Return (~6–8 km)',
    text: 'Walk to Five Rise Locks, then head down to Bingley station and ride back to Saltaire or Shipley.',
  },
  {
    title: 'Family Half-Day',
    text: 'Out to Hirst Lock picnic then back via Roberts Park playground; add an ice cream at the café in season.',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How long is the walk?',
    a: 'Expect 6.5–7.5 miles (10–12 km) if you go out-and-back to the Five Rise. One-way with a train back is roughly 5–6 km depending on your start within Saltaire.',
  },
  {
    q: 'Is it suitable for buggies/wheelchairs?',
    a: 'Much of the towpath is compact and broadly level, but surface quality varies with weather. Step-free is viable in long stretches; consider a shorter out-and-back to Hirst Lock for the smoothest experience.',
  },
  {
    q: 'Are there toilets and cafés?',
    a: 'Cafés at Salts Mill and near the top locks operate seasonally; toilets vary. Bring hand gel and a small pack-out bag just in case.',
  },
  {
    q: 'Can I take the train back?',
    a: 'Yes. Bingley station is a short walk from the canal. Trains typically run toward Saltaire/Shipley/Leeds/Bradford; check live info on the day.',
  },
  {
    q: 'Is the route safe for kids?',
    a: 'The water’s edge is open in places; supervise closely. Choose quieter times and consider the short Hirst Lock variation for little legs.',
  },
]

/* ------------------------------ UI Components ------------------------------ */

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
          <Link href="/walks" className="underline underline-offset-4 hover:text-black">
            Walks
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Saltaire → Five Rise Locks
        </li>
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
            Saltaire to Bingley Five Rise Locks
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A calm, mostly level canal walk along the Leeds &amp; Liverpool Canal with photo
            stops at Hirst Lock and Dowley Gap Aqueduct. End at Britain’s steepest staircase locks,
            then ride the train back or return the same way.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Distance: 10–12 km return</li>
            <li className="badge">Grade: Easy</li>
            <li className="badge">Updated: {UPDATED}</li>
          </ul>
          <p className="mt-4 text-sm">
            Prefer a shorter stroll? See the <Link className="underline underline-offset-4" href="#variations">route variations</Link>.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Tree-lined canal with narrowboat, typical of the Leeds & Liverpool Canal"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#overview', label: 'Overview' },
    { href: '#route', label: 'Route summary' },
    { href: '#turn-by-turn', label: 'Turn-by-turn' },
    { href: '#pois', label: 'POIs & photo spots' },
    { href: '#access', label: 'Accessibility & safety' },
    { href: '#transport', label: 'Trains & parking' },
    { href: '#facilities', label: 'Cafés & facilities' },
    { href: '#variations', label: 'Variations' },
    { href: '#seasonal', label: 'Seasonal notes' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
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

function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="overview-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Overview
      </h2>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ul className="grid gap-2 text-gray-700">
            <li>
              <strong>Distance:</strong> 10–12 km return (6.5–7.5 miles). One-way to Bingley + train back: ~5–6 km.
            </li>
            <li>
              <strong>Time:</strong> 2–3.5 hours walking, plus photo/café stops.
            </li>
            <li>
              <strong>Grade:</strong> Easy; mostly level towpath. Mixed surfaces: compact gravel/stone flags.
            </li>
            <li>
              <strong>Start:</strong> Saltaire canal junction (near Victoria Road) or outside Salts Mill.
            </li>
            <li>
              <strong>Finish:</strong> Bingley Five Rise Locks (continue to Bingley station for train return).
            </li>
            <li>
              <strong>Map/GPX:</strong>{' '}
              <a className="underline underline-offset-4" href="/gpx/walks/five-rise.gpx">
                Download GPX
              </a>{' '}
              (add later; optional).
            </li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="A narrowboat approaching a set of canal locks on a sunny day"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Keep the canal to your left when heading from Saltaire toward Bingley; return with the canal
        on your right. Landmarks and bridges make wayfinding simple.
      </p>
    </section>
  )
}

function RouteSummary() {
  return (
    <section id="route" aria-labelledby="route-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="route-title" className="text-2xl font-bold tracking-tight md:text-3xl">Route summary</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        The walk follows the Leeds &amp; Liverpool Canal northwest from Saltaire. Hirst Lock and
        Dowley Gap Aqueduct make natural milestones before you reach the Three Rise and then the Five
        Rise locks. Return the same way or drop to Bingley station.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[780px]">
          <thead>
            <tr>
              <th className="w-[10%]">#</th>
              <th className="w-[27%]">From</th>
              <th className="w-[27%]">To</th>
              <th className="w-[12%]">Distance</th>
              <th className="w-[24%]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {SEGMENTS.map((s) => (
              <tr key={s.no}>
                <td>{s.no}</td>
                <td>{s.from}</td>
                <td>{s.to}</td>
                <td>{s.distKm.toFixed(1)} km</td>
                <td>{s.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Distances are approximate and can vary with detours/photo stops. Surfaces and conditions
        change with weather — tread carefully around puddles and algae on stone.
      </p>
    </section>
  )
}

function TurnByTurn() {
  const steps = [
    'From Saltaire, join the canal by the junction near Victoria Road. Face upstream (chimney behind you).',
    'Follow the towpath with water on your left. Pass moored boats and occasional benches.',
    'Reach Hirst Lock: pause to watch boats or picnic by the grassy bank.',
    'Continue to Dowley Gap Aqueduct; step onto the aqueduct for river views, then return to the towpath.',
    'Keep ahead toward Bingley. Moorings and bridges mark progress; pass the Three Rise locks.',
    'Climb the short gradient to the Five Rise. Watch a lock cycle if one’s underway (keep clear of paddles/gates).',
    'Option to continue a few minutes to Bingley station for a train back, or retrace your steps to Saltaire.',
  ]
  return (
    <section id="turn-by-turn" aria-labelledby="tbt-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="tbt-title" className="text-2xl font-bold tracking-tight md:text-3xl">Turn-by-turn</h2>
      <ol className="mt-3 list-decimal pl-6 text-gray-700">
        {steps.map((s, i) => (
          <li key={`step-${i}`} className="mb-2">
            {s}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm">
        If you prefer a printed cue sheet, press <kbd>Ctrl/Cmd + P</kbd>. Our{' '}
        <Link className="underline underline-offset-4" href="/plan/accessibility">
          accessibility guide
        </Link>{' '}
        lists step-free notes for pinch points.
      </p>
    </section>
  )
}

function PoiGrid() {
  return (
    <section id="pois" aria-labelledby="pois-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pois-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        POIs & photo spots
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Use these as checkpoints. The canal bends give classic compositions; keep an eye out for
        reflections on calm days and dramatic skies after showers.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {POIS.map((p) => (
          <article key={p.id} id={p.id} className="card card-hover">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="badge">{p.kind}</span>
              </div>
              <p className="mt-1 text-gray-700">{p.summary}</p>
              {p.link ? (
                <p className="mt-2 text-sm">
                  <Link className="underline underline-offset-4" href={p.link as any}>
                    Learn more
                  </Link>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function AccessSafety() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="access-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Accessibility & safety
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Step-free pointers</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ACCESS_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">
            See the{' '}
            <Link className="underline underline-offset-4" href="/plan/accessibility">
              accessibility guide
            </Link>
            .
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Safety notes</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {SAFETY_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TransportParking() {
  return (
    <section id="transport" aria-labelledby="transport-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="transport-title" className="text-2xl font-bold md:text-3xl">Trains & parking</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Rail (recommended)</h3>
            <p className="mt-1 text-gray-700">
              Bingley station is a short stroll from the canal below the locks. Trains typically run
              toward Saltaire/Shipley/Leeds/Bradford. Check live info on the day.
            </p>
            <p className="mt-2 text-sm">
              See: <Link className="underline underline-offset-4" href="/plan/getting-here/rail">Getting here by train</Link>
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Driving</h3>
            <p className="mt-1 text-gray-700">
              If starting in Saltaire, use the public car parks and walk in. Avoid narrow terraces
              around the heritage streets.
            </p>
            <p className="mt-2 text-sm">
              Full details: <Link className="underline underline-offset-4" href="/parking">Parking guide</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Facilities() {
  const items = [
    'Cafés at Salts Mill (start) and near the top locks (in season)',
    'Benches along the towpath and by bridges',
    'Toilets vary; plan ahead and bring a small pack-out kit',
  ]
  return (
    <section id="facilities" aria-labelledby="facilities-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="facilities-title" className="text-2xl font-bold tracking-tight md:text-3xl">Cafés & facilities</h2>
      <ul className="mt-2 list-disc pl-5 text-gray-700">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  )
}

function Variations() {
  return (
    <section id="variations" aria-labelledby="variations-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="variations-title" className="text-2xl font-bold tracking-tight md:text-3xl">Route variations</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {VARIATIONS.map((v) => (
          <article key={v.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-1 text-gray-700">{v.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Seasonal() {
  const notes = [
    'Spring: blossom and fresher towpath surfaces; changeable showers.',
    'Summer: busiest; carry water/sun protection and start earlier for quieter paths.',
    'Autumn: rich colours; leaf-fall can be slippery on stone.',
    'Winter: low light and reflections; expect puddles and mud at access points.',
  ]
  return (
    <section id="seasonal" aria-labelledby="seasonal-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="seasonal-title" className="text-2xl font-bold md:text-3xl">Seasonal notes</h2>
        <ul className="mt-2 list-disc pl-5 text-gray-700">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: POIS.length,
    itemListElement: POIS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/walks/five-rise#${p.id}`,
      description: p.summary,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Walk from Saltaire to Bingley Five Rise Locks',
    description:
      'A mostly level canal-side route with landmarks at Hirst Lock, Dowley Gap Aqueduct and the Bingley lock flights.',
    totalTime: 'PT150M',
    step: [
      { '@type': 'HowToStep', text: 'Join the canal at Saltaire near Victoria Road, facing upstream.' },
      { '@type': 'HowToStep', text: 'Follow the towpath to Hirst Lock and continue to Dowley Gap Aqueduct.' },
      { '@type': 'HowToStep', text: 'Pass Bingley Three Rise and reach the Five Rise Locks.' },
      { '@type': 'HowToStep', text: 'Return the same way or continue to Bingley station for a train back.' },
    ],
    supply: [{ '@type': 'HowToSupply', name: 'Water, snacks, weather layers' }],
    tool: [{ '@type': 'HowToTool', name: 'Phone map or printed cue sheet' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire to Bingley Five Rise Locks walk',
    url: `${base}/walks/five-rise`,
    description:
      'Turn-by-turn canal walk from Saltaire to Bingley Five Rise Locks with distance, access notes, cafés and train return.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Walks', item: `${base}/walks` },
      { '@type': 'ListItem', position: 3, name: 'Saltaire → Five Rise Locks', item: `${base}/walks/five-rise` },
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
    url: `${base}/walks/five-rise`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#overview-title', '#route-title', '#tbt-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function FiveRiseWalkPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Overview />
      <RouteSummary />
      <TurnByTurn />
      <PoiGrid />
      <AccessSafety />
      <TransportParking />
      <Facilities />
      <Variations />
      <Seasonal />
      <FAQ />
      <JsonLd />
    </>
  )
}
