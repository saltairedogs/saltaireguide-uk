// src/app/walks/dog-friendly/page.tsx
// Dog-friendly walks in and around Saltaire (cornerstone v1)
// - Server component (no client code), static rendering for CWV
// - Evergreen guidance; avoids fragile, per-venue rules that change often
// - Strong internal linking; “On this page” index; accessible markup
// - JSON-LD: WebPage + BreadcrumbList + ItemList (walks & stops) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Dog-friendly Saltaire: best walks, cafés, towpath tips & park etiquette (2025)',
  description:
    'The calm, practical guide to dog-friendly Saltaire: canal towpath ideas, Roberts Park notes, Shipley Glen options, water stops, cafés/pubs, and etiquette for busy areas.',
  alternates: { canonical: `${site.url}/walks/dog-friendly` },
  openGraph: {
    title: 'Dog-friendly Saltaire — walks, cafés & etiquette',
    description:
      'Towpath and park walk ideas, Shipley Glen options, dog-friendly cafés/pubs, water/loo notes, and safety etiquette for busy routes.',
    url: `${site.url}/walks/dog-friendly`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

// Walk ideas kept evergreen; exact restrictions can change — always follow local signage.
type WalkIdea = {
  id: string
  title: string
  distanceKm: string
  time: string
  grade: 'Easy' | 'Moderate'
  start: string
  summary: string
  href?: string // internal deep link when available
}

const WALKS: WalkIdea[] = [
  {
    id: 'towpath-five-rise',
    title: 'Towpath to Bingley Five Rise (one-way + train back)',
    distanceKm: '5–6 km',
    time: '1.5–2 h',
    grade: 'Easy',
    start: 'Saltaire canal junction (near Victoria Rd)',
    summary:
      'Mostly level towpath with classic canal scenes. Dogs on lead around locks/bridges; wide sections elsewhere.',
    href: '/walks/five-rise',
  },
  {
    id: 'hirst-dowley',
    title: 'Short out-and-back: Hirst Lock & Dowley Gap',
    distanceKm: '3–4 km',
    time: '1–1.5 h',
    grade: 'Easy',
    start: 'Saltaire canal junction',
    summary:
      'Perfect for a gentle wander with water views. Space to step aside at benches; watch edges near the aqueduct.',
  },
  {
    id: 'roberts-loop',
    title: 'Roberts Park river loop (step-light)',
    distanceKm: '2–3 km',
    time: '45–60 min',
    grade: 'Easy',
    start: 'Victoria Rd / Salts Mill footbridge',
    summary:
      'Riverside paths, bandstand, and play area vicinity. Follow on-site dog rules; some lawns request leads.',
  },
  {
    id: 'shipley-glen',
    title: 'Shipley Glen & moor edges (from the village)',
    distanceKm: '4–7 km',
    time: '1.5–2.5 h',
    grade: 'Moderate',
    start: 'Roberts Park or tramway bottom',
    summary:
      'Woodland and open edges with varied gradient. Keep dogs close where livestock or ground-nesting birds are signed.',
    href: '/walks/shipley-glen',
  },
]

// Calm, dog-friendly refresh/stop ideas (evergreen; rules can change — check signs)
type Stop = {
  id: string
  name: string
  kind: 'cafe' | 'pub' | 'shop' | 'green' | 'water'
  summary: string
  link?: string
}

const STOPS: Stop[] = [
  {
    id: 'half-moon',
    name: 'Half Moon Café (Roberts Park)',
    kind: 'cafe',
    summary:
      'Riverside spot popular with walkers. Outdoor seating; dogs should stay clear of play areas and on-lead where posted.',
  },
  {
    id: 'mill-cafe',
    name: 'Salts Mill cafés',
    kind: 'cafe',
    summary:
      'Good first stop to orientate. Follow house rules; keep dogs settled and out of busy aisles.',
    link: '/salts-mill',
  },
  {
    id: 'pub-garden',
    name: 'Village pub beer gardens (seasonal)',
    kind: 'pub',
    summary:
      'Handy after-walk refreshments. Outdoor areas are easiest; towel off muddy paws beforehand.',
  },
  {
    id: 'rob-green',
    name: 'Roberts Park greens (on-site rules)',
    kind: 'green',
    summary:
      'Lovely lawns and riverbanks; respect on-lead zones and sports pitches. Always bag and bin.',
  },
  {
    id: 'canal-water',
    name: 'Water bowls at cafés (varies)',
    kind: 'water',
    summary:
      'Many places put out bowls in warmer months. Carry your own collapsible bowl year-round.',
  },
]

const ETIQUETTE = [
  'Lead at narrowings, bridges, locks, and busy pinch points.',
  'Give fishing pegs, cyclists, runners and buggies polite space.',
  'Bag and bin at the nearest available point; carry spare bags.',
  'Keep paws out of cafés/shops display areas; settle under the table.',
  'In warm weather, avoid hot stone flags midday; rest in shade.',
]

const SAFETY = [
  'Towpaths may have unprotected water edges — keep dogs close near drop-offs.',
  'Algae, ducks and swans are distractions; practice reliable recall before visiting.',
  'Glass or thorns can appear on desire paths; consider paw checks after muddy sections.',
  'Livestock and ground-nesting birds may be signed on moor edges; leads required where indicated.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Are dogs allowed in Roberts Park?',
    a: 'Yes, with sensible on-lead rules in certain areas and near play spaces. Always follow on-site signage.',
  },
  {
    q: 'Is the canal towpath dog-friendly?',
    a: 'Yes, but it’s shared and can be narrow. Keep dogs on lead at bridges, locks and when busy; give way kindly.',
  },
  {
    q: 'Where can I get water for my dog?',
    a: 'Carry a collapsible bowl. Many cafés put out water bowls seasonally; don’t let dogs drink canal water.',
  },
  {
    q: 'Which walk is best for first-timers?',
    a: 'The short out-and-back to Hirst Lock or the Roberts Park loop are calm introductions with easy surfaces.',
  },
  {
    q: 'Any rainy-day tips?',
    a: 'Use the park loop, stick to the smoother towpath sections, and bring a drying towel for post-walk cafés.',
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
          Dog-friendly
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
            Dog-friendly Saltaire: calm routes & good manners
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Towpath wanders, park loops and moor-edge options that work with dogs. We keep it simple,
            respect local rules, and list easy refresh stops for after the walk.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Lead for pinch points</li>
            <li className="badge">Bag &amp; bin</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Dog on a towpath by a canal with stone buildings in the background"
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
    { href: '#ideas', label: 'Best walk ideas' },
    { href: '#map', label: 'Quick map & surfaces' },
    { href: '#etiquette', label: 'Etiquette & safety' },
    { href: '#stops', label: 'Dog-friendly stops' },
    { href: '#seasonal', label: 'Seasonal notes' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav
        aria-label="On this page"
        className="mt-6 rounded-2xl border border-gray-200 bg-white p-4"
      >
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

function WalkIdeas() {
  return (
    <section
      id="ideas"
      aria-labelledby="ideas-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 id="ideas-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Best walk ideas
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Choose an easy towpath there-and-back, a park loop, or a moor-edge wander. Keep dogs on lead
        in posted areas and when paths narrow.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {WALKS.map((w) => (
          <article key={w.id} id={w.id} className="card card-hover">
            <div className="card-body">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <span className="badge">{w.grade}</span>
              </div>
              <ul className="mt-2 text-sm text-gray-700">
                <li>
                  <strong>Distance:</strong> {w.distanceKm} &nbsp;•&nbsp; <strong>Time:</strong>{' '}
                  {w.time}
                </li>
                <li>
                  <strong>Start:</strong> {w.start}
                </li>
              </ul>
              <p className="mt-2 text-gray-700">{w.summary}</p>
              {w.href ? (
                <p className="mt-2 text-sm">
                  <Link className="underline underline-offset-4" href={w.href}>
                    Full route guide
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

function QuickMap() {
  return (
    <section
      id="map"
      aria-labelledby="map-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Quick map & surfaces
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire’s core is compact: the canal, Salts Mill and Roberts Park sit within a few minutes’
        walk. Towpaths are generally compact gravel or stone flags; park paths vary by season. For
        an interactive map, open the specific walk guides.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/walks-from-saltaire.png"
          alt="Aerial-style illustration of canal, river and park layout near Saltaire"
          width={1600}
          height={900}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">Illustrative preview only — check signs on the day.</p>
    </section>
  )
}

function EtiquetteSafety() {
  return (
    <section
      id="etiquette"
      aria-labelledby="etiquette-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 id="etiquette-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Dog etiquette & safety (busy places)
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Good manners</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ETIQUETTE.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Safety notes</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {SAFETY.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm">
        For step-free details and surface notes, see the{' '}
        <Link className="underline underline-offset-4" href="/plan/accessibility">
          accessibility guide
        </Link>
        .
      </p>
    </section>
  )
}

function DogStops() {
  return (
    <section
      id="stops"
      aria-labelledby="stops-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 id="stops-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Dog-friendly stops (evergreen picks)
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        House rules vary by venue and season; outdoor seating is often the safest bet. Please towel
        off muddy paws and keep leads short in queues.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {STOPS.map((s) => (
          <article key={s.id} id={s.id} className="card card-hover">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="badge">{s.kind}</span>
              </div>
              <p className="mt-1 text-gray-700">{s.summary}</p>
              {s.link ? (
                <p className="mt-2 text-sm">
                  <Link className="underline underline-offset-4" href={s.link}>
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

function Seasonal() {
  const notes = [
    'Spring: wetter paths under trees; consider a quick paw-wash after muddy sections.',
    'Summer: busiest; start early, carry water and avoid hot flags at midday.',
    'Autumn: leaf-fall can hide puddles and glass; check paws at breaks.',
    'Winter: short light and slippery stone; keep routes short and steady.',
  ]
  return (
    <section
      id="seasonal"
      aria-labelledby="seasonal-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
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

function CTA() {
  return (
    <section
      aria-label="Plan your dog-friendly day"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Make a full day of it</h3>
          <p className="mt-1 text-gray-700">
            Start with the Roberts Park loop, add a canal section to Hirst Lock, then settle at an
            outdoor table for a calm finish.
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-2 text-sm">
            <li>
              <Link className="underline underline-offset-4" href="/walks/five-rise">
                Five Rise route (one-way + train back)
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/plan/family">
                Family day ideas
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/food-drink/dog-friendly">
                Dog-friendly cafés (coming soon)
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Happy dog resting by a canal bench after a walk"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Quick answers
      </h2>
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
        Guidance changes; treat this as local advice and always follow on-site signage.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemListWalks = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dog-friendly walk ideas in Saltaire',
    numberOfItems: WALKS.length,
    itemListElement: WALKS.map((w, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: w.title,
      url: `${base}/walks/dog-friendly#${w.id}`,
      description: `${w.distanceKm}, ${w.time}, ${w.grade}; start: ${w.start}. ${w.summary}`,
    })),
  }

  const itemListStops = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dog-friendly stops in and around Saltaire',
    numberOfItems: STOPS.length,
    itemListElement: STOPS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${base}/walks/dog-friendly#${s.id}`,
      description: `${s.kind}. ${s.summary}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to enjoy a dog-friendly walk in Saltaire',
    description:
      'Pick a calm route, use a short lead at pinch points, and respect local signage in parks and on towpaths.',
    step: [
      { '@type': 'HowToStep', text: 'Choose a route to match energy levels (park loop, short towpath, or longer canal walk).' },
      { '@type': 'HowToStep', text: 'Carry water, bags and a towel. In summer, avoid hot flags at midday.' },
      { '@type': 'HowToStep', text: 'Lead up at bridges, locks and narrowings; give way kindly.' },
      { '@type': 'HowToStep', text: 'Finish at an outdoor-seating café; check house rules for dogs.' },
    ],
    totalTime: 'PT90M',
    supply: [
      { '@type': 'HowToSupply', name: 'Water & collapsible bowl' },
      { '@type': 'HowToSupply', name: 'Poo bags' },
      { '@type': 'HowToSupply', name: 'Small towel' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Short lead / harness' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dog-friendly Saltaire: walks, cafés & etiquette',
    url: `${base}/walks/dog-friendly`,
    description:
      'Dog-friendly guide to Saltaire with towpath and park routes, Shipley Glen options, stops, and safety etiquette.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Walks', item: `${base}/walks` },
      { '@type': 'ListItem', position: 3, name: 'Dog-friendly', item: `${base}/walks/dog-friendly` },
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
    url: `${base}/walks/dog-friendly`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#ideas-title', '#etiquette-title', '#faqs-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListWalks) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStops) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function DogFriendlyWalksPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <WalkIdeas />
      <QuickMap />
      <EtiquetteSafety />
      <DogStops />
      <Seasonal />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
