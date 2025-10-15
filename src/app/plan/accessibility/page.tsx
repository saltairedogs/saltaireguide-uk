// src/app/plan/accessibility/page.tsx
// Accessibility in Saltaire — step-free routes, parking, toilets & practical tips (cornerstone v1)
// - Server component only (no client handlers; static for CWV)
// - Strong, conservative guidance: encourages on-the-day checks for signage and changes
// - SEO: clear headings, internal links, JSON-LD (WebPage + BreadcrumbList + FAQPage + ItemList + Speakable)
// - Uses your Tailwind v4 + globals.css primitives; zero client JS; image placeholders kept lightweight

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Accessibility in Saltaire: step-free routes, Blue Badge parking, toilets & practical tips (2025)',
  description:
    'A clear, conservative accessibility guide for Saltaire: step-free ways between Salts Mill, the village and Roberts Park; surfaces & gradients; toilets; parking & drop-off; public transport; sensory tips; and FAQs.',
  alternates: { canonical: `${site.url}/plan/accessibility` },
  openGraph: {
    title:
      'Saltaire accessibility — step-free routes, parking, toilets & tips (local guide)',
    description:
      'Plan an accessible visit to Saltaire with step-free options, surface notes, restroom pointers, Blue Badge parking advice and public transport guidance.',
    url: `${site.url}/plan/accessibility`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type RoutePoint = {
  id: string
  name: string
  approxDistance: string // human-readable ("300 m")
  surface: 'paved' | 'flagstones' | 'gravel' | 'cobbles' | 'mixed'
  gradient: 'level' | 'gentle' | 'varied'
  description: string
  notes?: string[]
}

type StepFreeRoute = {
  slug: string
  title: string
  summary: string
  start: string
  end: string
  estTime: string
  suitability: string[]
  points: RoutePoint[]
}

const ROUTES: StepFreeRoute[] = [
  {
    slug: 'mill-to-village',
    title: 'Salts Mill ⇄ Village core (Victoria Road)',
    summary:
      'A short, mostly level wayfinding between Salts Mill and the main village streets around Victoria Road.',
    start: 'Salts Mill (Victoria Road side)',
    end: 'Village shops & Victoria Road',
    estTime: '6–10 minutes one way',
    suitability: ['Wheelchairs', 'Prams', 'Mobility aids'],
    points: [
      {
        id: 'm1',
        name: 'Mill forecourt / approach',
        approxDistance: '80 m',
        surface: 'paved',
        gradient: 'level',
        description:
          'Wide hardstanding with clear sightlines. Follow signs to Victoria Road; avoid service areas where marked.',
        notes: ['Occasional vehicles in service bays — keep to pedestrian routes.'],
      },
      {
        id: 'm2',
        name: 'Victoria Road pavement',
        approxDistance: '150 m',
        surface: 'flagstones',
        gradient: 'gentle',
        description:
          'Broad footways with occasional crossfall. Kerbs and dropped crossings vary at side streets.',
        notes: ['Watch for uneven joints on older flags in wet weather.'],
      },
      {
        id: 'm3',
        name: 'Village core',
        approxDistance: '70 m',
        surface: 'flagstones',
        gradient: 'level',
        description:
          'Shops and cafés are set in historic frontages; thresholds differ. Many offer portable ramps or side access — ask staff.',
      },
    ],
  },
  {
    slug: 'village-to-park',
    title: 'Village core ⇄ Roberts Park (via footbridge)',
    summary:
      'Popular route toward Roberts Park; surfaces vary near the bridge approaches. Check for seasonal crowding.',
    start: 'Victoria Road area',
    end: 'Roberts Park (bandstand/greens)',
    estTime: '8–14 minutes one way',
    suitability: ['Confident wheelchair users with support', 'Prams', 'Families'],
    points: [
      {
        id: 'p1',
        name: 'Route to riverside',
        approxDistance: '180 m',
        surface: 'mixed',
        gradient: 'gentle',
        description:
          'Signed paths lead toward the river. Expect occasional patched surfaces and crossfalls.',
      },
      {
        id: 'p2',
        name: 'River crossing approach',
        approxDistance: '50 m',
        surface: 'mixed',
        gradient: 'varied',
        description:
          'Approaches may feel narrow at busy times. Rest points available at railings; mind cyclists.',
        notes: ['Yield space on pinch points; let others pass where safe.'],
      },
      {
        id: 'p3',
        name: 'Roberts Park interior paths',
        approxDistance: '200–400 m',
        surface: 'paved',
        gradient: 'level',
        description:
          'Broad paths around the bandstand and greens. Some routes are shared with maintenance vehicles.',
      },
    ],
  },
  {
    slug: 'station-to-mill',
    title: 'Saltaire station ⇄ Salts Mill (cautious, signage-led)',
    summary:
      'An option for rail users. Check current station access arrangements and follow posted wayfinding to avoid steps.',
    start: 'Saltaire railway station (ticket area)',
    end: 'Salts Mill (Victoria Road side)',
    estTime: '6–12 minutes one way',
    suitability: ['Varies — check station information before travel'],
    points: [
      {
        id: 's1',
        name: 'Station forecourt / exits',
        approxDistance: '60 m',
        surface: 'paved',
        gradient: 'level',
        description:
          'Follow local maps/signs. Assistance may be available via the rail operator; arrange in advance if required.',
        notes: ['Footbridge arrangements can change; prefer step-free exits when signed.'],
      },
      {
        id: 's2',
        name: 'Signed route toward Victoria Road',
        approxDistance: '200–300 m',
        surface: 'paved',
        gradient: 'gentle',
        description:
          'Use the signed pedestrian corridors toward the village spine; avoid informal shortcuts with kerbs/steps.',
      },
    ],
  },
]

type Facility = {
  id: string
  title: string
  context: string
  notes: string[]
}

const SURFACES: Facility[] = [
  {
    id: 'flagstones',
    title: 'Historic flagstones & kerbs',
    context:
      'Many central pavements use large stone flags with joints and occasional patch repairs.',
    notes: [
      'Expect minor undulations and crossfalls near drains or junctions.',
      'Wet leaves and rain can make flags slippery — choose footwear with grip.',
    ],
  },
  {
    id: 'cobbles',
    title: 'Cobbles & setts',
    context:
      'Side streets and service areas may feature cobbles or setts typical of Victorian villages.',
    notes: [
      'Avoid where possible with small-wheel mobility devices.',
      'Use parallel footways where provided; do not walk in the carriageway.',
    ],
  },
  {
    id: 'park-paths',
    title: 'Park & riverside paths',
    context:
      'Roberts Park paths are generally paved with broad radii around lawns and the bandstand.',
    notes: [
      'After heavy rain, puddling can occur near edges — take alternate loops.',
      'Shared usage with cyclists or maintenance carts; keep right to allow passing.',
    ],
  },
]

const TOILETS: Facility[] = [
  {
    id: 'mill-facilities',
    title: 'Facilities associated with major attractions',
    context:
      'Visitor-facing venues sometimes provide toilets, including accessible rooms, for patrons.',
    notes: [
      'Provision can change; always follow on-site signage and staff guidance.',
      'Family/baby-change rooms may be available; ask if not clearly signposted.',
    ],
  },
  {
    id: 'park-facilities',
    title: 'Park facilities',
    context:
      'Public parks may offer seasonal or managed facilities near cafés or pavilions.',
    notes: [
      'Check opening hours and local notices — availability varies by season and event.',
      'Carry a radar key if you use accessible toilets that require one (where applicable).',
    ],
  },
]

const PARKING: Facility[] = [
  {
    id: 'blue-badge',
    title: 'Blue Badge & step-free consideration',
    context:
      'Look for signed Blue Badge bays or step-free access bays in public car parks where marked.',
    notes: [
      'Always read meter plates and bay markings — terms differ by location and time.',
      'Leave extra door clearance for transfers; avoid tight corner bays.',
    ],
  },
  {
    id: 'dropoff',
    title: 'Drop-off / pick-up',
    context:
      'Use signed lay-bys or short-stay areas where they exist; avoid blocking narrow terraces or emergency access.',
    notes: [
      'Agree a clear meeting point with your group to reduce dwell time.',
      'Never stop on crossings or in bus stops; fines and hazards apply.',
    ],
  },
]

const TRANSPORT: Facility[] = [
  {
    id: 'rail',
    title: 'Rail (Saltaire station)',
    context:
      'Check the rail operator’s station page for current step-free access arrangements and assistance services.',
    notes: [
      'Book Passenger Assist where needed; specify boarding/alighting help and step-free routing.',
      'Engineering works or staffing changes can alter access — check on the day.',
    ],
  },
  {
    id: 'bus',
    title: 'Local buses',
    context:
      'Most buses in the area are low-floor with kneeling capability; verify ramp operation with the operator.',
    notes: [
      'Stop layouts vary; allow extra time for boarding and securing mobility devices.',
      'Try to avoid peak times if sensory overload is a concern.',
    ],
  },
]

const SENSORY_TIPS: Facility[] = [
  {
    id: 'crowds',
    title: 'Crowds & noise',
    context:
      'The village, park and canal can be busy on sunny weekends, school holidays and festival days.',
    notes: [
      'Visit earlier mornings or later afternoons for calmer periods.',
      'Use quieter parallel streets to bypass pinch points.',
    ],
  },
  {
    id: 'wayfinding',
    title: 'Wayfinding & predictability',
    context:
      'Main axes are linear (Victoria Road, canal, riverside paths) with clear landmarks.',
    notes: [
      'Create a simple route card with 3–5 checkpoints and rest points.',
      'Use tactile cues (boundary walls, kerb lines) on quieter pavements where safe.',
    ],
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is Saltaire generally step-free?',
    a: 'Many key routes are broadly level, especially between Salts Mill, Victoria Road and the main park paths. Surfaces vary with historic flagstones and some cobbles on side streets, so plan conservatively and allow extra time.',
  },
  {
    q: 'Can I visit Roberts Park with a wheelchair or pram?',
    a: 'Yes — the main park paths are broad and typically paved. Approaches and bridge pinch points can be busier and feel narrow; consider quieter times.',
  },
  {
    q: 'Where should Blue Badge holders park?',
    a: 'Use signed bays in public car parks where available and always read local signage. If full, consider a drop-off near your destination and park further away where permitted.',
  },
  {
    q: 'What about toilets and baby-change?',
    a: 'Provision varies by venue and season. Look for facilities at major attractions or within parks where managed. Always follow on-site notices.',
  },
  {
    q: 'Is the canal towpath accessible?',
    a: 'Long stretches are level, but widths, surfaces and usage change. Expect mixed surfaces and shared use with cyclists; choose short sections to suit your needs.',
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
          <Link href="/plan" className="underline underline-offset-4 hover:text-black">
            Plan
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Accessibility
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
            Accessibility in Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Practical, conservative guidance for step-free routes between Salts Mill, the village
            streets and Roberts Park — plus surfaces, toilets, Blue Badge parking, public transport
            considerations and sensory-friendly tips. Always follow on-site signage on the day.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Step-free options</li>
            <li className="badge">Surfaces & gradients</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Level path beside historic stone buildings and trees (illustrative accessibility theme)"
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
    { href: '#map', label: 'Quick orientation map' },
    { href: '#routes', label: 'Step-free routes' },
    { href: '#surfaces', label: 'Surfaces & gradients' },
    { href: '#toilets', label: 'Toilets & baby-change' },
    { href: '#parking', label: 'Blue Badge & drop-off' },
    { href: '#transport', label: 'Public transport' },
    { href: '#sensory', label: 'Sensory-friendly tips' },
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

function QuickMap() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick orientation map</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        To protect page speed, we use a static preview image here. Open your maps app for live
        navigation from the route lists below.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/plan-your-visit.png"
          alt="Aerial-style placeholder overview of a riverside town and park"
          width={1600}
          height={900}
          priority={false}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">Illustrative preview only — follow on-site signs and maps.</p>
    </section>
  )
}

function RouteCard({ r }: { r: StepFreeRoute }) {
  return (
    <article id={r.slug} className="card card-hover">
      <div className="card-body">
        <h3 className="text-lg font-semibold">{r.title}</h3>
        <p className="mt-1 text-gray-700">{r.summary}</p>
        <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
          <li><strong>Start:</strong> {r.start}</li>
          <li><strong>End:</strong> {r.end}</li>
          <li><strong>Time:</strong> {r.estTime}</li>
          <li><strong>Suited to:</strong> {r.suitability.join(', ')}</li>
        </ul>
        <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3">
          <div className="text-sm font-semibold text-gray-800">Waypoints & surface notes</div>
          <ul className="mt-1 grid grid-cols-1 gap-2">
            {r.points.map((p) => (
              <li key={p.id} className="rounded-lg bg-gray-50 p-3">
                <div className="font-medium">{p.name}</div>
                <p className="text-sm text-gray-700">
                  <strong>Distance:</strong> {p.approxDistance} · <strong>Surface:</strong> {p.surface} ·{' '}
                  <strong>Gradient:</strong> {p.gradient}
                </p>
                <p className="mt-1 text-sm text-gray-700">{p.description}</p>
                {p.notes?.length ? (
                  <ul className="mt-1 list-disc pl-5 text-xs text-gray-600">
                    {p.notes.map((n, i) => (
                      <li key={`${p.id}-${i}`}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            Conditions evolve. Treat this as a planning aid; always follow on-site signage and staff advice.
          </p>
        </div>
      </div>
    </article>
  )
}

function StepFreeRoutes() {
  return (
    <section id="routes" aria-labelledby="routes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="routes-title" className="text-2xl font-bold tracking-tight md:text-3xl">Step-free routes</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {ROUTES.map((r) => (
          <RouteCard key={r.slug} r={r} />
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Next, pick <Link href="/parking" className="underline underline-offset-4">parking</Link>{' '}
        near your target and combine with our{' '}
        <Link href="/walks" className="underline underline-offset-4">short walks</Link> that stick to easy surfaces.
      </p>
    </section>
  )
}

function FacilitiesList({ id, title, items }: { id: string; title: string; items: Facility[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((f) => (
          <article key={f.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-700">{f.context}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                {f.notes.map((n, i) => (
                  <li key={`${f.id}-${i}`}>{n}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function AdvisoryNotes() {
  return (
    <section aria-labelledby="advice-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="advice-title" className="text-2xl font-bold tracking-tight md:text-3xl">Safety & practicalities</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Plan conservatively</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Allow extra time between points and add rest stops.</li>
            <li>Carry water, weather protection and any mobility spares.</li>
            <li>After rain or ice, favour main paved routes and avoid cobbles.</li>
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Respect signage & residents</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Stay on public paths; avoid private yards and driveways.</li>
            <li>Keep dogs on short leads; clean up promptly.</li>
            <li>Use crossings where provided; avoid mid-block kerbs.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Related() {
  return (
    <section aria-labelledby="related-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="related-title" className="text-2xl font-bold tracking-tight md:text-3xl">Related guides</h2>
      <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/parking" className="font-medium underline-offset-4 hover:underline">
            Parking in Saltaire
          </Link>
          <p className="mt-1 text-sm text-gray-700">Best car parks, busy times and step-free notes.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/walks" className="font-medium underline-offset-4 hover:underline">
            Walks from Saltaire
          </Link>
          <p className="mt-1 text-sm text-gray-700">Choose short, level options with good surfaces.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history" className="font-medium underline-offset-4 hover:underline">
            History hub
          </Link>
          <p className="mt-1 text-sm text-gray-700">Background to the village plan and civic spaces.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/about" className="font-medium underline-offset-4 hover:underline">
            About & editorial policy
          </Link>
          <p className="mt-1 text-sm text-gray-700">How we keep accessibility advice conservative and honest.</p>
        </li>
      </ul>
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
        Information changes. Treat this as general guidance and always follow local signage and staff advice on the day.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: ROUTES.length,
    itemListElement: ROUTES.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.title,
      url: `${base}/plan/accessibility#${r.slug}`,
      description: r.summary,
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Accessibility in Saltaire',
    url: `${base}/plan/accessibility`,
    description:
      'Step-free route ideas, surface notes, toilets, Blue Badge parking and public transport guidance for visiting Saltaire.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Plan', item: `${base}/plan` },
      { '@type': 'ListItem', position: 3, name: 'Accessibility', item: `${base}/plan/accessibility` },
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
    url: `${base}/plan/accessibility`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#routes-title', '#parking-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function AccessibilityPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickMap />
      <StepFreeRoutes />
      <FacilitiesList id="surfaces" title="Surfaces & gradients" items={SURFACES} />
      <FacilitiesList id="toilets" title="Toilets & baby-change" items={TOILETS} />
      <FacilitiesList id="parking" title="Blue Badge & drop-off" items={PARKING} />
      <FacilitiesList id="transport" title="Public transport" items={TRANSPORT} />
      <FacilitiesList id="sensory" title="Sensory-friendly tips" items={SENSORY_TIPS} />
      <AdvisoryNotes />
      <Related />
      <FAQ />
      <JsonLd />
    </>
  )
}
