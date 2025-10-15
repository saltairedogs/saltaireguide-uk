// src/app/food-drink/pubs/page.tsx
// Pubs in Saltaire — calm, practical guide (cornerstone v1)
// - Server component (no client code), static rendering for CWV
// - Evergreen, venue-agnostic guidance to avoid staleness; invite updates via /contact
// - Strong internal linking to /food-drink, /walks, /events, /plan/family, /food-drink/dog-friendly
// - On-page ToC; accessible markup; print-friendly via globals.css
// - JSON-LD: WebPage + BreadcrumbList + ItemList (categories & examples) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Pubs in Saltaire (2025): beer gardens, cask ale basics, Sunday lunch, family & dog notes',
  description:
    'Local, practical pub guide to Saltaire: beer gardens, cask ale vs keg, Sunday lunch timings, family and dog tips, and calm pairings with canal or park walks.',
  alternates: { canonical: `${site.url}/food-drink/pubs` },
  openGraph: {
    title: 'Pubs in Saltaire — beer gardens, cask & calm tips',
    description:
      'Where beer gardens shine, how to order cask with confidence, Sunday lunch planning, and relaxed walk pairings.',
    url: `${site.url}/food-drink/pubs`,
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
  bullets: string[]
}

const CATEGORIES: Category[] = [
  {
    id: 'beer-gardens',
    title: 'Beer gardens & sunny corners',
    summary:
      'Best for post-walk pints and relaxed conversation. Shade and wind shelter vary by street and courtyard.',
    bullets: [
      'Arrive early on sunny weekends; outdoor tables go first.',
      'Pick edges over walkways; avoid blocking server routes.',
      'Bring a layer after sunset — stone cools quickly.',
    ],
  },
  {
    id: 'cask-forward',
    title: 'Cask-forward, traditional rooms',
    summary:
      'Short-draw handpulls, calmer sound levels and conversation-first spaces. Great for trying local bitters.',
    bullets: [
      'Ask what’s “drinking well” today; staff will guide you.',
      'Thirds or halves are perfect for sampling a few.',
      'Let the beer settle; clarity improves with a patient pour.',
    ],
  },
  {
    id: 'food-led',
    title: 'Food-led & Sunday lunch',
    summary:
      'Comforting roasts, seasonal menus and bookable tables. Weekends fill fast — plan ahead.',
    bullets: [
      'Check roast service windows (often 12:00–15:00).',
      'Smaller parties get flexibility at the bar area.',
      'Allergens and kids’ portions: ask early, avoid rushes.',
    ],
  },
]

type ExamplePub = {
  id: string
  name: string
  area: 'Village core' | 'Near Salts Mill' | 'Roberts Park edge'
  vibe: 'beer-garden' | 'cask' | 'food' | 'mixed'
  summary: string
  notes: string
  internalHint?: string
}

const EXAMPLES: ExamplePub[] = [
  {
    id: 'village-courtyard',
    name: 'Village courtyard tables',
    area: 'Village core',
    vibe: 'beer-garden',
    summary:
      'Sheltered nooks catch afternoon light; handy after a canal stroll. Outdoor heaters vary seasonally.',
    notes:
      'Queue politely at the bar; keep prams and dogs tucked to the side. Card/contactless common.',
  },
  {
    id: 'cask-room',
    name: 'Traditional cask room',
    area: 'Village core',
    vibe: 'cask',
    summary:
      'Handpulls, low music and chatty locals. Expect rotating bitters, pale ales, and the odd mild.',
    notes:
      'Ask for a sample before you choose; thirds/halves welcome. Let staff top up after head settles.',
  },
  {
    id: 'park-garden',
    name: 'Park-adjacent garden',
    area: 'Roberts Park edge',
    vibe: 'mixed',
    summary:
      'Easy for families after the bandstand loop. Expect peak surges on sunny school-holiday afternoons.',
    notes:
      'Pick tables away from play routes; bin rubbish promptly. Dogs on short leads near gates.',
    internalHint: '/walks/dog-friendly',
  },
  {
    id: 'roast-house',
    name: 'Roasts & comfort plates',
    area: 'Near Salts Mill',
    vibe: 'food',
    summary:
      'Hearty Sunday roasts and seasonal specials near the Mill. Book early for prime slots.',
    notes:
      'Share plates work well for mixed appetites. Check service windows and allergen cards.',
    internalHint: '/salts-mill',
  },
]

const CASK_BASICS = [
  '“Cask” (real ale) is conditioned in the cellar and served by handpull, typically 10–13°C — cooler than a room-warm pint, warmer than keg.',
  'Bitters, pale ales and milds are common styles on cask. Ask what’s freshest or “drinking well” today.',
  'A good pour shows a tight head and bright body (unless the beer style is intentionally hazy).',
  'Don’t rush the top-up: letting it settle keeps the measure honest and the pint balanced.',
]

const ORDERING_ETIQUETTE = [
  'Decide before the bar — menus and chalkboards help queues flow.',
  'Move aside with your drinks so the next person can order.',
  'Return glasses and wipe small spills if you can — it helps staff.',
  'If you’re roaming between indoors and garden, carry trays steadily on steps.',
]

const FAMILY_TIPS = [
  'Quieter tables are usually at edges, corners or side rooms.',
  'High chairs vary; consider a compact travel seat for flexibility.',
  'Split orders: one adult orders while the other settles the table.',
  'Bring quiet activities for waits during Sunday roasts.',
]

const DOG_TIPS = [
  'Short lead; pick a corner away from walkways and the bar.',
  'Bring a small mat/towel for a calm settle under the table.',
  'Ask where dogs are happiest (garden or side room).',
  'Avoid busy doorway pinch points; be mindful around food service.',
]

const RESPONSIBLE = [
  'Designated driver? Choose alcohol-free beers, small pours or softs — lots of good options exist.',
  'Hydrate between rounds and pace yourself on warm days.',
  'Use the station for linear walks — trains make one-way pub walks simple.',
]

const PAIRINGS = [
  {
    title: 'Canal to Hirst Lock → village pint',
    text: 'A 45–60-minute towpath there-and-back; finish at a calm courtyard table.',
    link: '/walks/five-rise',
  },
  {
    title: 'Roberts Park loop → garden corner',
    text: 'Riverside wander then a shaded garden seat; perfect for families.',
    link: '/walks/dog-friendly',
  },
  {
    title: 'Salts Mill browse → food-led pub',
    text: 'Art, books, then a comforting plate nearby. Book Sunday roasts ahead.',
    link: '/salts-mill',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do Saltaire pubs have beer gardens?',
    a: 'Yes — several offer outdoor seating or courtyards. Sunshine tables fill first on weekends; arrive early or try off-peak.',
  },
  {
    q: 'How do I order cask ale with confidence?',
    a: 'Ask what’s freshest, take a small sample, and choose halves/thirds to explore. Allow time for the top-up after the head settles.',
  },
  {
    q: 'Are pubs family-friendly?',
    a: 'Many are at certain hours. Pick edge tables, avoid narrow service routes, and bring a quiet activity for roasts.',
  },
  {
    q: 'What about dogs?',
    a: 'Policies vary. Outdoor areas are usually easiest; short leads, a settle mat, and corners away from busy paths help.',
  },
  {
    q: 'Can I combine a walk and a pub?',
    a: 'Absolutely — canal or park loops pair perfectly. Use the station for linear routes and responsible travel.',
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
          Pubs
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
            Pubs in Saltaire: beer gardens, cask & Sunday lunch
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Calm, local guidance for an easy pub day: outdoor tables, cask basics, food windows,
            and how to pair a pint with a short walk.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Beer gardens</li>
            <li className="badge">Cask basics</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Sunlit beer garden tables with stone buildings in the background"
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
    { href: '#categories', label: 'Where to sit' },
    { href: '#examples', label: 'Example setups' },
    { href: '#cask', label: 'Cask ale basics' },
    { href: '#ordering', label: 'Ordering etiquette' },
    { href: '#family-dogs', label: 'Family & dogs' },
    { href: '#pairings', label: 'Walk pairings' },
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
            <h3 className="text-lg font-semibold">Sun on stone</h3>
            <p className="mt-1 text-gray-700">
              Courtyard or front benches catch afternoon light — ideal after a canal loop. Arrive
              early on sunny days.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Proper pint (cask)</h3>
            <p className="mt-1 text-gray-700">
              Try a local bitter pulled on handpump. Ask what’s “drinking well” and consider halves
              to explore styles.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Sunday lunch</h3>
            <p className="mt-1 text-gray-700">
              Book ahead for roasts; bar seating can be more flexible for walk-ins. Check service
              windows before you set out.
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
      <h2 id="categories-title" className="text-2xl font-bold tracking-tight md:text-3xl">Where to sit</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick the setup that matches your group and the weather. Policies and layouts change; follow
        on-site guidance.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {CATEGORIES.map((c) => (
          <article key={c.id} id={c.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-gray-700">{c.summary}</p>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExampleSetups() {
  return (
    <section id="examples" aria-labelledby="examples-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="examples-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Example setups (evergreen guidance)
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        These common setups describe what you’ll typically find around Saltaire. If you operate a
        venue and want to add detail,{' '}
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
                <span className="badge">{p.vibe}</span>
              </div>
              <p className="mt-1 text-gray-700">{p.summary}</p>
              <ul className="mt-2 text-sm text-gray-700">
                <li>
                  <strong>Area:</strong> {p.area}
                </li>
                <li>
                  <strong>Notes:</strong> {p.notes}
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
        Details change; treat this as local guidance and follow staff instructions on the day.
      </p>
    </section>
  )
}

function CaskBasics() {
  return (
    <section id="cask" aria-labelledby="cask-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="cask-title" className="text-2xl font-bold md:text-3xl">Cask ale basics</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              {CASK_BASICS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Close-up of a pint being pulled on a handpump at a traditional bar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function OrderingEtiquette() {
  return (
    <section id="ordering" aria-labelledby="ordering-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ordering-title" className="text-2xl font-bold tracking-tight md:text-3xl">Ordering etiquette</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">At the bar</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ORDERING_ETIQUETTE.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Carrying rounds</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Use trays; mind steps and narrow doorways.</li>
            <li>Keep hot plates level; announce through busy paths.</li>
            <li>Return trays and glasses — it speeds turnarounds.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function FamilyDogs() {
  return (
    <section id="family-dogs" aria-labelledby="fd-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="fd-title" className="text-2xl font-bold tracking-tight md:text-3xl">Family & dogs</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">With children</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {FAMILY_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">
            For more family ideas see{' '}
            <Link className="underline underline-offset-4" href="/plan/family">
              plan/family
            </Link>
            .
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">With dogs</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {DOG_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">
            Full guidance in our{' '}
            <Link className="underline underline-offset-4" href="/food-drink/dog-friendly">
              dog-friendly food &amp; drink guide
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function Pairings() {
  return (
    <section id="pairings" aria-labelledby="pairings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pairings-title" className="text-2xl font-bold tracking-tight md:text-3xl">Walk pairings</h2>
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
              Pubs cluster around the village core, with options near Salts Mill and Roberts Park
              edges. Everything sits within easy walking distance — perfect for short loops.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Summer: shade and sun shift quickly; bring layers for later.</li>
              <li>Autumn: leaf-fall can make stone flags slick; step carefully.</li>
              <li>Winter: choose sheltered nooks; check earlier kitchen closes.</li>
              <li>Spring: event days spike demand; arrive early or book food tables.</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Simple aerial-style orientation graphic of the village, canal and park"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Illustrative orientation; follow on-site signage and staff guidance.</p>
      </div>
    </section>
  )
}

function Responsible() {
  return (
    <section aria-labelledby="resp-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="resp-title" className="text-2xl font-bold tracking-tight md:text-3xl">Responsible choices</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Designated driver & AF picks</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {RESPONSIBLE.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Trains make it easy</h3>
          <p className="mt-2 text-gray-700">
            Saltaire station is in the heart of the village with frequent Airedale Line services.
            Consider linear walks that finish near your chosen pub.
          </p>
        </div>
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
        Policies and menus change. Treat this as local guidance and follow staff instructions.
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
    name: 'Pub categories in Saltaire',
    numberOfItems: CATEGORIES.length,
    itemListElement: CATEGORIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: `${base}/food-drink/pubs#${c.id}`,
      description: c.summary,
    })),
  }

  const itemListExamples = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Example pub setups in Saltaire',
    numberOfItems: EXAMPLES.length,
    itemListElement: EXAMPLES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/food-drink/pubs#${p.id}`,
      description: `${p.area}; ${p.vibe}; ${p.notes}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to plan a relaxed pub visit in Saltaire',
    description:
      'Choose the right setting (garden, cask room or food-led), time it around walks and trains, and order considerately.',
    step: [
      { '@type': 'HowToStep', text: 'Pick your setting (sunny garden, cask room or food-led) based on your group and weather.' },
      { '@type': 'HowToStep', text: 'Plan a short walk first (canal or park) so you arrive ready to settle.' },
      { '@type': 'HowToStep', text: 'Order considerately: decide at the bar, move aside with drinks, return trays/glasses.' },
      { '@type': 'HowToStep', text: 'If driving, choose AF options or use the train for linear routes.' },
    ],
    totalTime: 'PT120M',
    tool: [{ '@type': 'HowToTool', name: 'Contactless payment' }],
    supply: [{ '@type': 'HowToSupply', name: 'Layers for evening' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pubs in Saltaire — beer gardens, cask & Sunday lunch',
    url: `${base}/food-drink/pubs`,
    description:
      'Evergreen guidance on Saltaire pubs: beer gardens, cask ale basics, Sunday lunch planning, family & dog tips, and walk pairings.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Pubs', item: `${base}/food-drink/pubs` },
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
    url: `${base}/food-drink/pubs`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro-title', '#cask-title', '#faq-title'],
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

export default function PubsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickPicks />
      <Categories />
      <ExampleSetups />
      <CaskBasics />
      <OrderingEtiquette />
      <FamilyDogs />
      <Pairings />
      <MapSeasons />
      <Responsible />
      <FAQ />
      <JsonLd />
    </>
  )
}
