// src/app/food-drink/dog-friendly/page.tsx
// Dog-friendly cafés, pubs & eating in Saltaire (cornerstone v1)
// - Server component (no client code), static rendering for CWV
// - Evergreen guidance with venue-agnostic tips to avoid staleness; link to /contact for updates
// - Strong internal linking to /walks/dog-friendly, /plan/accessibility, /food-drink
// - On-page ToC; accessible markup; print-friendly via globals.css
// - JSON-LD: WebPage + BreadcrumbList + ItemList (categories/examples) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Dog-friendly cafés & pubs in Saltaire: calm spots, outdoor seating, water bowls & etiquette (2025)',
  description:
    'Local, practical guide to dog-friendly places in and around Saltaire: calm cafés and pubs, outdoor seating, water bowls, queue manners, and towpath/park pairing ideas.',
  alternates: { canonical: `${site.url}/food-drink/dog-friendly` },
  openGraph: {
    title: 'Dog-friendly Saltaire — cafés, pubs & calm places to sit',
    description:
      'Outdoor seating, polite lead etiquette, water stops and pairing walks. Evergreen guidance maintained by locals.',
    url: `${site.url}/food-drink/dog-friendly`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Category = {
  id: string
  title: string
  summary: string
  tips: string[]
}

const CATEGORIES: Category[] = [
  {
    id: 'cafes',
    title: 'Cafés with outdoor seating',
    summary:
      'Easiest, lowest-stress option after a towpath loop. Shade varies by street; many put out water bowls in summer.',
    tips: [
      'Aim for quieter mid-mornings or after-lunch lulls.',
      'Keep leads short in queues and by doorways.',
      'Towel off muddy paws before you sit.',
    ],
  },
  {
    id: 'pubs',
    title: 'Pubs & beer gardens',
    summary:
      'Relaxed spaces for post-walk refreshments. Garden access and dog policies vary; check chalkboards and ask nicely.',
    tips: [
      'Choose edges rather than main walkways.',
      'Bring a compact mat for settles.',
      'Evening peaks can be noisy; pick off-peak if your dog is sound-sensitive.',
    ],
  },
  {
    id: 'parkside',
    title: 'Parkside kiosks & riverside spots',
    summary:
      'Handy for quick drinks and ice cream near Roberts Park and the river. Follow onsite signage for on-lead areas.',
    tips: [
      'Give play areas and sports pitches wide berth.',
      'Mind picnic scraps and bins on sunny weekends.',
      'Carry your own water/bowl in cooler months.',
    ],
  },
]

type ExamplePlace = {
  id: string
  name: string
  area: 'Near Salts Mill' | 'Village core' | 'Roberts Park' | 'Canal/Towpath'
  style: 'cafe' | 'pub' | 'kiosk' | 'outdoor'
  summary: string
  dogNotes: string
  // Keep links internal or generic to avoid staleness; venue policies change.
  internalHint?: string
}

const EXAMPLES: ExamplePlace[] = [
  {
    id: 'mill-courtyard',
    name: 'Courtyard/streetside seating near the Mill',
    area: 'Near Salts Mill',
    style: 'outdoor',
    summary:
      'Good orientation zone before or after a Mill browse. Some spots offer shade depending on time of day.',
    dogNotes:
      'Short lead near entrances and display windows; settle under the table to avoid footfall.',
    internalHint: '/salts-mill',
  },
  {
    id: 'park-kiosk',
    name: 'Roberts Park kiosk & greens',
    area: 'Roberts Park',
    style: 'kiosk',
    summary:
      'Simple drinks/snacks by the river. Great for a pit-stop after the park loop.',
    dogNotes:
      'Observe on-lead requests near lawns and bandstand; give families space at busy times.',
  },
  {
    id: 'towpath-picnic',
    name: 'Towpath bench picnic spots',
    area: 'Canal/Towpath',
    style: 'outdoor',
    summary:
      'Benches appear near bridges and quiet stretches; lovely reflections on calmer days.',
    dogNotes:
      'Keep back from the edge; towpaths can be narrow and unprotected by water.',
    internalHint: '/walks/dog-friendly',
  },
  {
    id: 'village-garden',
    name: 'Village beer gardens (seasonal)',
    area: 'Village core',
    style: 'pub',
    summary:
      'Relaxed atmosphere when the sun’s out. Easier for muddy paws than indoor tables.',
    dogNotes:
      'Check blackboards for dog rules; wipe paws and pick a back corner away from server routes.',
  },
]

const ETIQUETTE = [
  'Short lead at doorways, counters, queues and when staff are carrying trays.',
  'Settle on a small mat under the table, not across walkways.',
  'Ask where dogs are happiest (garden, side room, front benches).',
  'Bring a collapsible bowl; accept offered water bowls away from thoroughfares.',
  'Bag & bin; keep paws off seats and low shelves.',
]

const PAIRINGS = [
  {
    title: 'Roberts Park loop → kiosk drink',
    text: 'Riverside loop with bandstand views, then a short queue for a drink. Keep leads short near play areas.',
    link: '/walks/dog-friendly',
  },
  {
    title: 'Towpath to Hirst Lock → village garden',
    text: 'Easy out-and-back toward Hirst Lock; finish at an outdoor table away from server routes.',
    link: '/walks/five-rise',
  },
  {
    title: 'Shipley Glen woodland → quiet café corner',
    text: 'Moor-edge wander then a shaded outside table; towel off muddy paws first.',
    link: '/walks/shipley-glen',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Are dogs allowed inside cafés in Saltaire?',
    a: 'Policies vary by venue and can change. Outdoor seating is the safest default. Ask politely and follow house rules.',
  },
  {
    q: 'Do places provide water bowls?',
    a: 'Many put bowls out in warmer months. Always carry your own collapsible bowl to avoid disappointment.',
  },
  {
    q: 'What’s the best time to visit with a dog?',
    a: 'Mid-morning or late-afternoon lulls are calmer. Avoid narrow interiors at peak brunch or pre-theatre times.',
  },
  {
    q: 'Any etiquette must-dos?',
    a: 'Short lead, settle on a mat, keep paws off furniture, and pick quieter corners away from doorways and the till.',
  },
  {
    q: 'Where should we walk first?',
    a: 'Try the Roberts Park loop or a short towpath section, then sit down once your dog has settled energy and focus.',
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
          <Link href="/food-drink" className="underline underline-offset-4 hover:text-black">
            Food &amp; Drink
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
          <h1 id="intro-title" className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Dog-friendly cafés & pubs in Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Calm places to sit with outdoor seating, water bowls and good etiquette. Pair your visit
            with a short towpath or park loop and choose quieter corners to settle.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Outdoor-first</li>
            <li className="badge">Lead at pinch points</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Dog resting under an outdoor café table on a sunny day"
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
    { href: '#best', label: 'Quick picks' },
    { href: '#categories', label: 'Where to go' },
    { href: '#examples', label: 'Example stops' },
    { href: '#etiquette', label: 'Etiquette & calm setups' },
    { href: '#pairings', label: 'Walk + sit pairings' },
    { href: '#map', label: 'Map & seasons' },
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

function QuickPicks() {
  return (
    <section id="best" aria-labelledby="best-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="best-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick picks</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Outdoor &amp; easy</h3>
            <p className="mt-1 text-gray-700">
              Courtyard/streetside tables near the Mill — lots to watch, shade varies. Start or end
              with a browse.{' '}
              <Link href="/salts-mill" className="underline underline-offset-4">
                Salts Mill
              </Link>
              .
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Parkside pit-stop</h3>
            <p className="mt-1 text-gray-700">
              Kiosk by the river after a Roberts Park loop. On-lead where posted, give family areas
              a wide berth.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Low-key pint (seasonal)</h3>
            <p className="mt-1 text-gray-700">
              Village beer gardens on sunny afternoons. Pick a back corner, short lead, paws wiped.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="categories-title" className="text-2xl font-bold tracking-tight md:text-3xl">Where to go</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Start with outdoor seating and build confidence. Policies and layouts change; ask politely
        and follow house guidance on the day.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {CATEGORIES.map((c) => (
          <article key={c.id} id={c.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-gray-700">{c.summary}</p>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {c.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExampleStops() {
  return (
    <section id="examples" aria-labelledby="examples-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="examples-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Example stops (evergreen guidance)
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        These are typical, low-stress options. Specific house rules vary; outdoor tables are
        generally easiest. If you run a venue and want to add/update details,{' '}
        <Link className="underline underline-offset-4" href="/contact">
          contact us
        </Link>
        .
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {EXAMPLES.map((p) => (
          <article key={p.id} id={p.id} className="card card-hover">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="badge">{p.style}</span>
              </div>
              <p className="mt-1 text-gray-700">{p.summary}</p>
              <ul className="mt-2 text-sm text-gray-700">
                <li>
                  <strong>Area:</strong> {p.area}
                </li>
                <li>
                  <strong>Dog notes:</strong> {p.dogNotes}
                </li>
              </ul>
              {p.internalHint ? (
                <p className="mt-2 text-sm">
                  Related:{' '}
                  <Link className="underline underline-offset-4" href={p.internalHint as any}>
                    see more
                  </Link>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs text-gray-500">
        Policies can change; please follow staff directions and signage on the day.
      </p>
    </section>
  )
}

function Etiquette() {
  return (
    <section id="etiquette" aria-labelledby="etiquette-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="etiquette-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Dog etiquette & calm setups
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Set up for success</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ETIQUETTE.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Towpath & park reminders</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Lead at narrow bridges, locks and queues.</li>
            <li>Supervise near open water edges; towpaths are often unprotected.</li>
            <li>Give runners, cyclists and fishing pegs space and a friendly heads-up.</li>
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm">
        New to the area? See{' '}
        <Link className="underline underline-offset-4" href="/walks/dog-friendly">
          dog-friendly walk ideas
        </Link>
        .
      </p>
    </section>
  )
}

function Pairings() {
  return (
    <section id="pairings" aria-labelledby="pairings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pairings-title" className="text-2xl font-bold tracking-tight md:text-3xl">Walk + sit pairings</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PAIRINGS.map((p) => (
          <article key={p.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-gray-700">{p.text}</p>
              <p className="mt-2 text-sm">
                Route:{' '}
                <Link className="underline underline-offset-4" href={p.link as any}>
                  open guide
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function MapSeasons() {
  return (
    <section id="map" aria-labelledby="map-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="map-title" className="text-2xl font-bold md:text-3xl">Map & seasonal notes</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="text-gray-700">
              Saltaire’s cafés, pubs and kiosks cluster around the village core, Salts Mill and
              Roberts Park, all within a few minutes’ walk. Many have outdoor tables; shade and wind
              shelter vary. Use the walk guides for interactive maps.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Summer: bring water and seek shade at midday.</li>
              <li>Autumn: leaf-fall can make stone flags slippery; wipe paws before you sit.</li>
              <li>Winter: pick sheltered corners and keep routes short in low light.</li>
              <li>Spring: busier weekends around events; arrive early for quieter tables.</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Simple aerial-style map illustration showing canal, park and village cluster"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Illustration for orientation; always follow venue signage and staff guidance.
        </p>
      </div>
    </section>
  )
}

function Contribute() {
  return (
    <section aria-labelledby="contrib-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="contrib-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Know a great dog-friendly spot?
      </h2>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-gray-700">
          We keep this page evergreen and venue-agnostic to avoid out-of-date info. If you run a
          café/pub or have a local tip (water bowls, shade corner, quiet times),{' '}
          <Link className="underline underline-offset-4" href="/contact">
            send us a note
          </Link>
          . We’ll verify and add it.
        </p>
        <ul className="mt-2 list-disc pl-5 text-gray-700">
          <li>Best outdoor tables (shade, wind shelter)</li>
          <li>Clear dog policy (inside vs. garden)</li>
          <li>Lead/settle tips specific to your layout</li>
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
      <p className="mt-3 text-xs text-gray-500">
        Venue policies change. Treat this as local guidance, and always follow staff directions and
        signage.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemListCats = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dog-friendly categories in Saltaire',
    numberOfItems: CATEGORIES.length,
    itemListElement: CATEGORIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: `${base}/food-drink/dog-friendly#${c.id}`,
      description: c.summary,
    })),
  }

  const itemListExamples = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Example dog-friendly stops',
    numberOfItems: EXAMPLES.length,
    itemListElement: EXAMPLES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/food-drink/dog-friendly#${p.id}`,
      description: `${p.area}; ${p.style}; ${p.dogNotes}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to visit Saltaire cafés & pubs with a dog (calmly)',
    description:
      'Pick outdoor seating, set up a short-lead settle on a mat, and choose corners away from walkways.',
    step: [
      { '@type': 'HowToStep', text: 'Walk first (park loop or short towpath) to settle energy.' },
      { '@type': 'HowToStep', text: 'Choose outdoor tables with shade/wind shelter if possible.' },
      { '@type': 'HowToStep', text: 'Use a short lead and a small mat; settle under the table.' },
      { '@type': 'HowToStep', text: 'Offer water from your own bowl; avoid shared bowls if crowded.' },
    ],
    totalTime: 'PT60M',
    supply: [
      { '@type': 'HowToSupply', name: 'Collapsible water bowl' },
      { '@type': 'HowToSupply', name: 'Poo bags' },
      { '@type': 'HowToSupply', name: 'Small settle mat/towel' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Short lead/harness' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dog-friendly cafés & pubs in Saltaire',
    url: `${base}/food-drink/dog-friendly`,
    description:
      'Practical, evergreen guide to dog-friendly cafés, pubs and kiosks in Saltaire, with etiquette and walk pairings.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Dog-friendly', item: `${base}/food-drink/dog-friendly` },
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
    url: `${base}/food-drink/dog-friendly`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro-title', '#etiquette-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListCats) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListExamples) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function DogFriendlyFoodDrinkPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickPicks />
      <Categories />
      <ExampleStops />
      <Etiquette />
      <Pairings />
      <MapSeasons />
      <Contribute />
      <FAQ />
      <JsonLd />
    </>
  )
}
