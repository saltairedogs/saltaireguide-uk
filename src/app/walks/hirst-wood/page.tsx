// src/app/walks/hirst-wood/page.tsx
// Hirst Wood & Hirst Lock Walk — Saltaire Guide (v1, server-only)
// - Static HTML for CWV (no client handlers)
// - Clear, evidence-based guidance without over-claiming specifics
// - Internal links across the Walks cluster and Plan/Accessibility
// - JSON-LD: WebPage + BreadcrumbList + ItemList (POIs) + HowTo (route) + FAQPage + Speakable
// - Print-friendly via globals.css; accessible, keyboard-friendly markup

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'           // pre-render for performance

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Hirst Wood & Hirst Lock walk (Saltaire): riverside & canal loop with nature reserve',
  description:
    'A calm loop from Saltaire to Hirst Wood and Hirst Lock: canal towpath, woodland and riverside. Family-friendly options, step-free variants, benches and seasonal notes.',
  alternates: { canonical: `${site.url}/walks/hirst-wood` },
  openGraph: {
    title: 'Hirst Wood & Hirst Lock walk — Saltaire',
    description:
      'Easy loop via canal towpath and woodland. Step-free options, family tips, wildlife and add-ons to Roberts Park.',
    url: `${site.url}/walks/hirst-wood`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-13' // update when you refresh this page

type Poi = {
  id: string
  title: string
  blurb: string
  coords?: { lat: number; lon: number } // indicative only (no maps loaded)
}

const POIS: Poi[] = [
  {
    id: 'hirst-lock',
    title: 'Hirst Lock',
    blurb:
      'Picturesque lock on the Leeds & Liverpool Canal; good spot for boat watching and photos.',
  },
  {
    id: 'hirst-wood',
    title: 'Hirst Wood (nature reserve)',
    blurb:
      'Mixed woodland beside the River Aire with birds, wildflowers and seasonal colour.',
  },
  {
    id: 'swing-bridge',
    title: 'Hirst Lock swing bridge',
    blurb:
      'Traditional swing bridge near the lock; occasional short waits while boats pass.',
  },
  {
    id: 'river-path',
    title: 'Riverside path',
    blurb:
      'Calmer alternative to the towpath; look for herons and dippers on quieter days.',
  },
  {
    id: 'towpath',
    title: 'Canal towpath (Saltaire stretch)',
    blurb:
      'Flat, popular and scenic; shared with cyclists and buggies — keep left and be considerate.',
  },
]

type Segment = {
  id: string
  name: string
  approxKm: string
  surface: string
  gradient: string
  notes: string
}

const SEGMENTS: Segment[] = [
  {
    id: 'station-to-canal',
    name: 'Saltaire station → Canal towpath',
    approxKm: '0.3–0.5',
    surface: 'Paved streets, short cobbles near the model village',
    gradient: 'Mostly level',
    notes:
      'From the station or Victoria Road, head to the canal at the top of the village.',
  },
  {
    id: 'towpath-to-lock',
    name: 'Towpath → Hirst Lock',
    approxKm: '1.0–1.3',
    surface: 'Compacted path, occasional puddles after rain',
    gradient: 'Level',
    notes:
      'Follow the towpath west (away from Salts Mill chimney) to reach the lock and swing bridge.',
  },
  {
    id: 'lock-to-wood',
    name: 'Hirst Lock → Hirst Wood loop',
    approxKm: '0.8–1.2',
    surface: 'Woodland path; roots and mud in places',
    gradient: 'Gentle undulations',
    notes:
      'Optional nature reserve loop. Stick to obvious paths and avoid riverside edges after wet weather.',
  },
  {
    id: 'return-options',
    name: 'Return options',
    approxKm: '1.3–2.0',
    surface: 'Towpath (level) or riverside path (varied)',
    gradient: 'Level / gentle',
    notes:
      'Return to Saltaire via the same towpath or vary using the riverside path where signed and suitable.',
  },
]

const KIT_TIPS = [
  'Trainers or light walking shoes (towpath is firm; woodland can be muddy after rain).',
  'Water and a light layer — canal can feel breezy.',
  'Small first-aid/plasters and tissues; wipes for little hands.',
  'Phone for photos and train times.',
]

const SAFETY_TIPS = [
  'Towpaths are shared — keep to one side, listen for bikes and give way at pinch points.',
  'After rain, expect puddles and slippery roots in the wood.',
  'Keep children and dogs away from the river edge; flows can be fast in spate.',
  'Respect closures, conservation signs and private property.',
]

const SEASONAL: Array<{ title: string; points: string[] }> = [
  {
    title: 'Spring',
    points: [
      'Bluebells and wild garlic scent parts of the wood.',
      'Towpath wakes up: expect more bikes on sunny weekends.',
    ],
  },
  {
    title: 'Summer',
    points: [
      'Shaded sections through trees offer cool relief.',
      'Carry water; benches fill near the lock on event days.',
    ],
  },
  {
    title: 'Autumn',
    points: [
      'Best leaf colour in the wood and along the Aire.',
      'Wind can ripple the canal — mind drips if you’re carrying ice cream.',
    ],
  },
  {
    title: 'Winter',
    points: [
      'Short daylight: consider an out-and-back to the lock only.',
      'Paths may be icy; choose the towpath for a surer surface.',
    ],
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How long is the Hirst Wood walk?',
    a: 'The classic loop is roughly 3–5 km depending on variants. Allow 60–90 minutes at an easy pace, plus time for photos and a bench by the lock.',
  },
  {
    q: 'Is it step-free?',
    a: 'A step-free out-and-back along the canal to Hirst Lock is common. The woodland loop has uneven ground and occasional roots; choose according to your needs.',
  },
  {
    q: 'Are there toilets or cafés?',
    a: 'Facilities are in Saltaire village and near busy hubs; hours vary. Plan ahead or pair the walk with a café visit before/after.',
  },
  {
    q: 'Is it suitable for kids or dogs?',
    a: 'Yes with care. Keep close near water and bridges, and use short leads on shared paths. The towpath is the simplest family option.',
  },
  {
    q: 'Can I extend the walk?',
    a: 'Continue west along the canal or combine with Roberts Park and the riverside for a longer outing.',
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
          Hirst Wood
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
          <h1 id="intro-title" className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Hirst Wood & Hirst Lock: canal, woodland and riverside loop
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            An easy, photogenic loop from Saltaire to Hirst Lock and through Hirst Wood. Choose a
            fully level towpath out-and-back or add a gentle woodland section for birds and river
            views.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Family-friendly</li>
            <li className="badge">Step-free variant</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Tree-lined canal towpath with golden light"
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
    { href: '#quick-facts', label: 'Quick facts' },
    { href: '#route', label: 'Route overview' },
    { href: '#map', label: 'Map preview' },
    { href: '#turn-by-turn', label: 'Turn-by-turn' },
    { href: '#access', label: 'Accessibility' },
    { href: '#transport', label: 'Transport & parking' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#nature', label: 'Nature & seasons' },
    { href: '#safety', label: 'Safety & etiquette' },
    { href: '#nearby', label: 'Nearby add-ons' },
    { href: '#faqs', label: 'FAQs' },
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

function QuickFacts() {
  return (
    <section id="quick-facts" aria-labelledby="facts-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="facts-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick facts</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ul className="grid grid-cols-1 gap-2 text-sm text-gray-700">
            <li><strong>Distance:</strong> ~3–5 km depending on variants</li>
            <li><strong>Time:</strong> 60–90 minutes at easy pace</li>
            <li><strong>Terrain:</strong> Level towpath; optional woodland paths with roots</li>
            <li><strong>Start:</strong> Saltaire station / Victoria Road</li>
            <li><strong>Highlights:</strong> Lock, swing bridge, river views, birds, seasonal colour</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Good to know</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Step-free out-and-back to Hirst Lock works well for buggies.</li>
            <li>Woodland loop adds variety; expect uneven sections after rain.</li>
            <li>Towpaths are shared — keep left and pass with care.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function RouteOverview() {
  return (
    <section id="route" aria-labelledby="route-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="route-title" className="text-2xl font-bold tracking-tight md:text-3xl">Route overview</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        From Saltaire, join the canal towpath and head west to Hirst Lock and its swing bridge. Take
        a short woodland loop beside the River Aire, then rejoin the towpath to return. For a
        fully-level variant, simply walk to the lock and back on the towpath.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="table min-w-[880px]">
          <thead>
            <tr>
              <th className="w-[28%]">Segment</th>
              <th className="w-[14%]">Approx. km</th>
              <th className="w-[18%]">Surface</th>
              <th className="w-[14%]">Gradient</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {SEGMENTS.map((s) => (
              <tr key={s.id}>
                <td className="font-medium">{s.name}</td>
                <td>{s.approxKm}</td>
                <td>{s.surface}</td>
                <td>{s.gradient}</td>
                <td>{s.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Distances are approximate and for general planning only. Always follow local signs and
        current conditions.
      </p>
    </section>
  )
}

function QuickMap() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Map preview</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        We use a static preview to keep the page fast. Open your maps app from your current location
        for turn-by-turn directions to Hirst Lock, then follow signed paths.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/walks-from-saltaire.png"
          alt="Orientation graphic of Saltaire, canal and Hirst Wood area"
          width={1600}
          height={900}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">Illustrative only; paths and access can change.</p>
    </section>
  )
}

function TurnByTurn() {
  const steps = [
    'From Saltaire station/Victoria Road, head to the canal at the village top.',
    'Turn left (west) along the towpath, keeping the canal on your right.',
    'Continue straight to Hirst Lock; pause by the swing bridge for boats.',
    'For the woodland loop, cross carefully where signed and follow obvious paths near the river.',
    'Rejoin the towpath and return to Saltaire the same way.',
  ]
  return (
    <section id="turn-by-turn" aria-labelledby="tbt-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="tbt-title" className="text-2xl font-bold tracking-tight md:text-3xl">Turn-by-turn</h2>
      <ol className="mt-4 grid list-decimal gap-2 pl-6 text-gray-700 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Prefer a fully level route? Skip the woodland loop and return the way you came on the
          towpath. If you collect GPX files, you can trace this loop easily — we’ll add downloads
          alongside our other routes as the site grows.
        </p>
      </div>
    </section>
  )
}

function Accessibility() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="access-title" className="text-2xl font-bold tracking-tight md:text-3xl">Accessibility</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Step-free variant</h3>
          <p className="mt-1 text-gray-700">
            The towpath to Hirst Lock and back is the simplest option for buggies and wheels. Some
            entrances have narrow pinch points; pass single-file where needed and give way at bridges.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Surfaces & crossings</h3>
          <p className="mt-1 text-gray-700">
            Towpath is generally firm with occasional puddles. Woodland paths vary and can include
            roots, mud and short gradients. Use caution after rain and avoid close approaches to the
            river edge.
          </p>
        </div>
      </div>
      <p className="mt-2 text-sm">
        For broader step-free planning across the village, see our{' '}
        <Link className="underline underline-offset-4" href="/plan/accessibility">
          accessibility guide
        </Link>
        .
      </p>
    </section>
  )
}

function TransportParking() {
  return (
    <section id="transport" aria-labelledby="tp-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="tp-title" className="text-2xl font-bold md:text-3xl">Transport & parking</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">By train</h3>
            <p className="mt-1 text-gray-700">
              Start/finish at <strong>Saltaire station</strong>; the canal is a short, mostly level
              walk from the platforms.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">By car</h3>
            <p className="mt-1 text-gray-700">
              Use village car parks and walk in. See our{' '}
              <Link className="underline underline-offset-4" href="/parking">
                parking guide
              </Link>{' '}
              for options and busy-time tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FacilitiesSection() {
  return (
    <section id="facilities" aria-labelledby="fac-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="fac-title" className="text-2xl font-bold tracking-tight md:text-3xl">Facilities</h2>
      <ul className="mt-2 list-disc pl-5 text-gray-700">
        <li>Cafés and toilets are available in Saltaire village; hours vary by season/day.</li>
        <li>Benches near locks and bridges are popular; move on once you’ve eaten to share space.</li>
        <li>Carry a small bag for litter and take everything home if bins are full.</li>
      </ul>
    </section>
  )
}

function NatureSeasons() {
  return (
    <section id="nature" aria-labelledby="nature-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="nature-title" className="text-2xl font-bold tracking-tight md:text-3xl">Nature & seasons</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {SEASONAL.map((s) => (
          <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-700">
        Listen for woodpeckers in spring and watch for herons and wagtails near the river all year.
        Please keep to paths to protect habitats.
      </p>
    </section>
  )
}

function SafetyEtiquette() {
  return (
    <section id="safety" aria-labelledby="safety-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="safety-title" className="text-2xl font-bold md:text-3xl">Safety & etiquette</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              {SAFETY_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">What to bring</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {KIT_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function NearbyAddOns() {
  return (
    <section id="nearby" aria-labelledby="nearby-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="nearby-title" className="text-2xl font-bold tracking-tight md:text-3xl">Nearby add-ons</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Roberts Park loop</h3>
            <p className="mt-1 text-gray-700">
              Extend with riverside paths and the bandstand. Step-free variants available.
            </p>
            <p className="mt-2 text-sm">
              Guide:{' '}
              <Link className="underline underline-offset-4" href="/roberts-park">
                Roberts Park
              </Link>
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Five Rise leg</h3>
            <p className="mt-1 text-gray-700">
              Head further along the canal towards the famous lock staircase.
            </p>
            <p className="mt-2 text-sm">
              Guide:{' '}
              <Link className="underline underline-offset-4" href="/walks/five-rise">
                Towpath to Five-Rise
              </Link>
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Coffee & cake</h3>
            <p className="mt-1 text-gray-700">
              Reward the loop with something sweet in the village.
            </p>
            <p className="mt-2 text-sm">
              See:{' '}
              <Link className="underline underline-offset-4" href="/food-drink/coffee">
                coffee
              </Link>{' '}
              ·{' '}
              <Link className="underline underline-offset-4" href="/food-drink/desserts">
                desserts
              </Link>
            </p>
          </div>
        </article>
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
      <p className="mt-3 text-xs text-gray-500">
        Paths, access and facilities change. Treat this guide as local advice and follow onsite
        signs and staff directions.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hirst Wood & Hirst Lock walk — Saltaire',
    url: `${base}/walks/hirst-wood`,
    description:
      'Easy loop from Saltaire to Hirst Lock and Hirst Wood with a level towpath variant, seasonal tips and accessible options.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Walks', item: `${base}/walks` },
      { '@type': 'ListItem', position: 3, name: 'Hirst Wood', item: `${base}/walks/hirst-wood` },
    ],
  }

  const itemListPois = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Points of interest on the Hirst Wood walk',
    numberOfItems: POIS.length,
    itemListElement: POIS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${base}/walks/hirst-wood#${p.id}`,
      description: p.blurb,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to walk from Saltaire to Hirst Wood & Hirst Lock',
    totalTime: 'PT1H30M',
    estimatedCost: '0',
    step: [
      { '@type': 'HowToStep', text: 'From Saltaire, join the canal towpath at the top of the village.' },
      { '@type': 'HowToStep', text: 'Head west along the towpath to Hirst Lock and swing bridge.' },
      { '@type': 'HowToStep', text: 'Optional: take a short loop through Hirst Wood on obvious paths.' },
      { '@type': 'HowToStep', text: 'Rejoin the towpath and return to Saltaire the same way.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Comfortable footwear' }],
    supply: [{ '@type': 'HowToSupply', name: 'Water and light layer' }],
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
    url: `${base}/walks/hirst-wood`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#intro-title', '#route-title', '#faq-title'] },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListPois) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function HirstWoodPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickFacts />
      <RouteOverview />
      <QuickMap />
      <TurnByTurn />
      <Accessibility />
      <TransportParking />
      <FacilitiesSection />
      <NatureSeasons />
      <SafetyEtiquette />
      <NearbyAddOns />
      <FAQ />
      <JsonLd />
    </>
  )
}
