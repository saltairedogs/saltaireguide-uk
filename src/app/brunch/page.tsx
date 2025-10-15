// src/app/brunch/page.tsx
// Brunch in Saltaire — cornerstone guide (server-only, CWV-first)
// - No client code/handlers; static prerender for reliable CWV
// - Evergreen value: what to look for, dietary notes, outdoor seating, family/dog options
// - Deep internal links to Coffee, Desserts, Pubs, Bakeries, Parking, Getting-here, Walks
// - Rich JSON-LD: WebPage + BreadcrumbList + ItemList (brunch styles) + HowTo (plan a brunch) + FAQPage + Speakable
// - Accessible ToC, print-friendly prose, fast images with proper sizes

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'           // static HTML for speed

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Brunch in Saltaire (2025): best ways to do it — coffee, outdoor seating, family & dog-friendly',
  description:
    'How to do brunch in Saltaire like a local: coffee first, outdoor seating, family & dog-friendly tips, dietary notes, and routes to pair with walks, Salts Mill and Roberts Park.',
  alternates: { canonical: `${site.url}/brunch` },
  openGraph: {
    title: 'Brunch in Saltaire — calm, local, practical',
    description:
      'Plan the perfect Saltaire brunch: coffee options, outdoor tables, dietary notes, family/dog tips, add-on walks and dessert stops.',
    url: `${site.url}/brunch`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-13'

type BrunchStyle = {
  id: string
  title: string
  blurb: string
  estTime: string
  outdoor?: boolean
  family?: boolean
  dog?: boolean
  links: Array<{ label: string; href: string }>
  image?: { src: string; alt: string; width: number; height: number }
}

const BRUNCH_STYLES: BrunchStyle[] = [
  {
    id: 'coffee-first',
    title: 'Coffee-first, then short stroll',
    blurb:
      'Grab coffee and something sweet, then take a calm 20–30 minute towpath leg before the crowds. Great if you’re on a tight schedule.',
    estTime: '45–70 min',
    outdoor: true,
    family: true,
    dog: true,
    links: [
      { label: 'Coffee guide', href: '/food-drink/coffee' },
      { label: 'Short towpath ideas', href: '/walks' },
      { label: 'Parking tips', href: '/parking' },
    ],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Coffee and pastries on a wooden table',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'brunch-then-park',
    title: 'Sit-down brunch, then Roberts Park',
    blurb:
      'Book or arrive early, enjoy a relaxed sit-down, then stroll lawns and riverside paths. Benches and playground nearby.',
    estTime: '90–120 min',
    outdoor: true,
    family: true,
    dog: true,
    links: [
      { label: 'Roberts Park guide', href: '/roberts-park' },
      { label: 'Family planning', href: '/plan/family' },
      { label: 'Dessert ideas', href: '/food-drink/desserts' },
    ],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Brunch plates on an outdoor table',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'bakery-picnic',
    title: 'Bakery picnic by the canal',
    blurb:
      'Pick up trays and slices that travel well, then find a quiet bench near bridges or calm towpath corners. Leave no trace.',
    estTime: '60–90 min',
    outdoor: true,
    family: true,
    dog: true,
    links: [
      { label: 'Bakeries guide', href: '/food-drink/bakeries' },
      { label: 'Hirst Wood loop', href: '/walks/hirst-wood' },
      { label: 'Dog-friendly walks', href: '/walks/dog-friendly' },
    ],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Pastries and a hot drink near water',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'mill-then-brunch',
    title: 'Salts Mill first, brunch second',
    blurb:
      'Beat the mid-morning rush by browsing galleries and bookshops first. Brunch after, then a short canal leg or park sit-down.',
    estTime: '120–150 min',
    outdoor: true,
    family: true,
    links: [
      { label: 'Salts Mill guide', href: '/salts-mill' },
      { label: 'Parking near the Mill', href: '/parking' },
      { label: 'Short walks', href: '/walks' },
    ],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Historic mill building with tall chimney',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'rain-window',
    title: 'Rain-window strategy',
    blurb:
      'Eat under a roof while showers pass. When it eases, take a 15–20 minute photo loop by the canal and village streets.',
    estTime: '60–100 min',
    family: true,
    links: [
      { label: 'Coffee & indoor ideas', href: '/food-drink/coffee' },
      { label: 'Architecture highlights', href: '/history/architecture' },
      { label: 'Desserts nearby', href: '/food-drink/desserts' },
    ],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Cup of coffee by a window with rain droplets',
      width: 1200,
      height: 800,
    },
  },
]

type Tip = { title: string; points: string[] }

const WHAT_TO_LOOK_FOR: Tip[] = [
  {
    title: 'Food & drink quality',
    points: [
      'Beans roasted within 4–6 weeks and dialled in that morning for espresso.',
      'Eggs poached to order, pan heat under control (no rubbery whites).',
      'Sourdough toasted lightly so it stays tender, not roof-of-mouth sharp.',
      'Seasonal small plates or specials to share rather than massive mains at peak times.',
    ],
  },
  {
    title: 'Seating & atmosphere',
    points: [
      'Outdoor tables with some shelter from canal breezes.',
      'Inside: steady noise floor, spaced tables, pram-friendly routes if needed.',
      'Benches within a short walk for takeaway overflow at weekend peaks.',
    ],
  },
  {
    title: 'Flow & service',
    points: [
      'Clear queue system and menu board visible from the line.',
      'Table numbers for food runners; tap water without fuss.',
      'Pay-at-counter for speed, with optional table service at quieter times.',
    ],
  },
]

const DIETARY: Tip[] = [
  {
    title: 'Vegetarian/vegan',
    points: [
      'Look for soy-, oat- or almond-based milk; confirm surcharges before ordering.',
      'Ask about separate pans for halloumi/eggs if you want to avoid cross-contact.',
      'Vegan pastry or banana bread travels well for park benches.',
    ],
  },
  {
    title: 'Gluten-free/coeliac cautious',
    points: [
      'Cross-contact is the real risk: grills, toasters and shared prep surfaces.',
      'Favour dishes plated away from bread: eggs, hash, salads without croutons.',
      'Ask for sealed sachets (butter/jam) if you’re being careful on benches.',
    ],
  },
  {
    title: 'Dairy-free',
    points: [
      'Check if steam wands are wiped and purged between milks.',
      'Sorbets and dark-choc brownies often help for dessert stops (see desserts hub).',
      'Carry a small card stating your requirements for busy counters.',
    ],
  },
  {
    title: 'Nut & sesame',
    points: [
      'Pastry counters may have airborne dust; ask about storage and tongs.',
      'If sensitive, avoid open seed toppings; choose wrapped items for picnics.',
    ],
  },
]

const WITH_KIDS: Tip[] = [
  {
    title: 'Keep it short and happy',
    points: [
      'Order something to nibble quickly (toast soldiers, fruit bowl) while mains cook.',
      'Pick tables with space to move without clipping other chairs.',
      'Rotate: brunch → playground → dessert to break up sitting time.',
    ],
  },
  {
    title: 'Kit',
    points: [
      'Wet wipes, spare tissues, and a small rubbish bag for benches.',
      'Layers: canal shade can feel colder than village streets.',
      'Compact crayons/paper; headphone story for a breather.',
    ],
  },
]

const WITH_DOGS: Tip[] = [
  {
    title: 'Before you sit',
    points: [
      'Aim for outdoor tables or corners indoors; avoid pinch points and doorways.',
      'Short leads near bridges and water; watch tails around mugs and plates.',
    ],
  },
  {
    title: 'Etiquette',
    points: [
      'Bring your own mat and collapsible bowl.',
      'Keep barks low; walk a few minutes first to take the edge off.',
      'Pack treats that don’t crumble over the floor.',
    ],
  },
]

const SEASONAL: Tip[] = [
  {
    title: 'Spring',
    points: [
      'Unstable showers — prioritise indoor seats and quick ordering.',
      'Bluebells/garlic nearby: add a short Hirst Wood leg after brunch.',
    ],
  },
  {
    title: 'Summer',
    points: [
      'Peak outside seating: arrive earlier/later to avoid the noon crush.',
      'Tubs beat cones when moving between benches and bridges.',
    ],
  },
  {
    title: 'Autumn',
    points: [
      'Leaf colour along the river pairs perfectly with a warm pastry.',
      'Wind funnels at bridges — pick tables with partial shelter.',
    ],
  },
  {
    title: 'Winter',
    points: [
      'Short daylight — eat first, then a compact photo loop.',
      'Carry gloves; benches can be cold even in sun.',
    ],
  },
]

const PRICE_VALUE: Tip[] = [
  {
    title: 'Value without compromise',
    points: [
      'Share one sweet + one savoury between two and add sides if still hungry.',
      'Filter coffee + pastry is often faster and cheaper than two full plates.',
      'Weekdays offer calmer rooms and better table choice than Sat late-morning.',
    ],
  },
]

const ITINERARIES = [
  {
    id: 'two-hour',
    name: '2-hour taster',
    steps: [
      'Coffee & pastry (15–20 min)',
      'Short canal out-and-back (20–30 min)',
      'Village streets & quick photo loop (20–30 min)',
      'Dessert stop or bakery takeaway (10–15 min)',
    ],
    links: [
      { label: 'Coffee', href: '/food-drink/coffee' },
      { label: 'Walks hub', href: '/walks' },
      { label: 'Desserts', href: '/food-drink/desserts' },
    ],
  },
  {
    id: 'half-day',
    name: 'Half-day classic',
    steps: [
      'Sit-down brunch (45–60 min)',
      'Roberts Park lawns & riverside (30–45 min)',
      'Salts Mill galleries & bookshops (45–60 min)',
      'Short towpath leg at golden hour (15–25 min)',
    ],
    links: [
      { label: 'Roberts Park', href: '/roberts-park' },
      { label: 'Salts Mill', href: '/salts-mill' },
      { label: 'Parking', href: '/parking' },
    ],
  },
  {
    id: 'family',
    name: 'Family flow',
    steps: [
      'Quick order + kids nibble (10–15 min)',
      'Main plates (20–30 min)',
      'Playground/park run-around (20–30 min)',
      'Ice-cream or dessert share (10–15 min)',
    ],
    links: [
      { label: 'Family planning', href: '/plan/family' },
      { label: 'Desserts', href: '/food-drink/desserts' },
      { label: 'Dog-friendly walks', href: '/walks/dog-friendly' },
    ],
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do I need to book for brunch in Saltaire?',
    a: 'At peak weekend times, booking helps for sit-down rooms. Otherwise, arrive earlier (before 10:30) or later (after 12:30).',
  },
  {
    q: 'Is outdoor seating easy to find?',
    a: 'On calm days, outside tables go quickly. Have a bench backup plan and consider takeaway to a park or canal spot.',
  },
  {
    q: 'Any step-free options?',
    a: 'Yes. Many routes between village streets, Salts Mill and the towpath are level; check our accessibility notes across guides.',
  },
  {
    q: 'What about dietary requirements?',
    a: 'Most spots can adapt but cross-contact varies. Ask about prep surfaces and separate kit. We list general strategies in this guide.',
  },
  {
    q: 'Best way to combine brunch with sightseeing?',
    a: 'Pair with Roberts Park or a short towpath leg, then browse Salts Mill. Keep walking distances short to avoid backtracking.',
  },
]

/* ------------------------------ UI Components ------------------------------ */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Brunch</li>
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
            Brunch in Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Calm, local and practical. This guide shows how to do brunch well — coffee-first or
            sit-down, outdoor seating and benches, family & dog tips, dietary strategies, and easy
            add-on walks. Keep it simple and enjoy the village.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Outdoor ideas</li>
            <li className="badge">Family &amp; dog-friendly</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Brunch plates, coffee and juice on a sunny table"
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
    { href: '#top-ways', label: 'Best ways to do it' },
    { href: '#what-to-look-for', label: 'What to look for' },
    { href: '#dietary', label: 'Dietary & allergens' },
    { href: '#family', label: 'With kids' },
    { href: '#dogs', label: 'With dogs' },
    { href: '#seasonal', label: 'Seasonal notes' },
    { href: '#value', label: 'Price & value' },
    { href: '#itineraries', label: 'Mini itineraries' },
    { href: '#map', label: 'Map preview' },
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

function StyleCard({ s }: { s: BrunchStyle }) {
  return (
    <article id={s.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="block">
        <div className="relative h-44 w-full md:h-52">
          {s.image ? (
            <Image
              alt={s.image.alt}
              src={s.image.src}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={s.id === 'coffee-first'}
            />
          ) : (
            <div className="h-full w-full bg-gray-100" />
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
            <span className="badge">⏱ {s.estTime}</span>
          </div>
          <p className="mt-2 line-clamp-4 text-sm text-gray-700">{s.blurb}</p>
          <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
            {s.outdoor && <li className="badge">Outdoor</li>}
            {s.family && <li className="badge">Family</li>}
            {s.dog && <li className="badge">Dog-friendly</li>}
          </ul>
        </div>
      </div>
      <div className="px-5 pb-5">
        <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {s.links.map((l) => (
            <li key={l.href}>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Link
                href={l.href as any}
                className="text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function TopWays() {
  return (
    <section id="top-ways" aria-labelledby="ways-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ways-title" className="text-2xl font-bold tracking-tight md:text-3xl">Best ways to do brunch in Saltaire</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Choose your flow — coffee-first or sit-down — then add a short walk or a park bench. Keep distances
        small and decisions simple; the village is compact.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BRUNCH_STYLES.map((s) => (
          <StyleCard key={s.id} s={s} />
        ))}
      </div>
    </section>
  )
}

function TipsBlock({ title, points }: Tip) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-2 list-disc pl-5 text-gray-700">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  )
}

function WhatToLookFor() {
  return (
    <section id="what-to-look-for" aria-labelledby="look-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="look-title" className="text-2xl font-bold tracking-tight md:text-3xl">What to look for</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        A good brunch is as much about flow and seats as it is about plates. Use these cues to pick a spot and keep the day calm.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {WHAT_TO_LOOK_FOR.map((t) => (
          <TipsBlock key={t.title} title={t.title} points={t.points} />
        ))}
      </div>
    </section>
  )
}

function Dietary() {
  return (
    <section id="dietary" aria-labelledby="diet-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="diet-title" className="text-2xl font-bold md:text-3xl">Dietary & allergens</h2>
        <p className="mt-2 max-w-prose text-gray-700">
          Kitchens vary. Cross-contact is the main risk — grills, toasters and shared boards. Use these strategies and
          ask specific questions at the counter.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {DIETARY.map((t) => (
            <TipsBlock key={t.title} title={t.title} points={t.points} />
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Disclaimer: Always confirm ingredients and preparation on the day. If in doubt, choose wrapped bakery items for benches and keep
          toppings separate until seated.
        </p>
      </div>
    </section>
  )
}

function WithKids() {
  return (
    <section id="family" aria-labelledby="kids-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="kids-title" className="text-2xl font-bold tracking-tight md:text-3xl">Brunch with kids</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {WITH_KIDS.map((t) => (
          <TipsBlock key={t.title} title={t.title} points={t.points} />
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-700">
        Break up sitting time with Roberts Park or a short towpath window. See{' '}
        <Link className="underline underline-offset-4" href="/plan/family">family planning</Link> for toilets, benches and buggy notes.
      </p>
    </section>
  )
}

function WithDogs() {
  return (
    <section id="dogs" aria-labelledby="dogs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="dogs-title" className="text-2xl font-bold tracking-tight md:text-3xl">Brunch with dogs</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {WITH_DOGS.map((t) => (
          <TipsBlock key={t.title} title={t.title} points={t.points} />
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-700">
        After you eat, try a short{' '}
        <Link className="underline underline-offset-4" href="/walks/dog-friendly">dog-friendly walk</Link> or a calm corner of Roberts Park.
      </p>
    </section>
  )
}

function Seasonal() {
  return (
    <section id="seasonal" aria-labelledby="seasonal-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="seasonal-title" className="text-2xl font-bold tracking-tight md:text-3xl">Seasonal notes</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {SEASONAL.map((t) => (
          <TipsBlock key={t.title} title={t.title} points={t.points} />
        ))}
      </div>
    </section>
  )
}

function PriceValue() {
  return (
    <section id="value" aria-labelledby="value-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="value-title" className="text-2xl font-bold md:text-3xl">Price & value without stress</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {PRICE_VALUE.map((t) => (
            <TipsBlock key={t.title} title={t.title} points={t.points} />
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-700">
          Parking sorted first saves time and money. See the{' '}
          <Link className="underline underline-offset-4" href="/parking">parking guide</Link> or come by train via{' '}
          <Link className="underline underline-offset-4" href="/plan/getting-here">getting here</Link>.
        </p>
      </div>
    </section>
  )
}

function Itineraries() {
  return (
    <section id="itineraries" aria-labelledby="it-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="it-title" className="text-2xl font-bold tracking-tight md:text-3xl">Mini itineraries</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {ITINERARIES.map((p) => (
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
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
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
        Tip: pair brunch with a short walk and a dessert stop to spread decisions and avoid queues bunching at one time.
      </div>
    </section>
  )
}

function MapPreview() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Map & orientation</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        The village, canal and park sit within minutes of each other. We keep this page light — use your maps app for
        turn-by-turn and pick routes from our Walks hub.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/cafe-pubs-restaurants.png"
          alt="Orientation graphic of Saltaire, canal and park"
          width={1600}
          height={900}
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>Outdoor tables fill quickly in good weather — benches are close by if you go takeaway.</li>
        <li>Keep to the left on towpaths and step aside at bridge pinch points.</li>
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Plan your visit" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Make a simple Saltaire plan</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Sort parking or hop off the train, eat without rush, then stroll a short canal or park loop. Keep it calm.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/parking" className="btn btn-primary">Parking</Link>
              <Link href="/plan/getting-here" className="btn btn-outline">Getting here</Link>
              <Link href="/walks" className="btn btn-ghost">Walks</Link>
              <Link href="/food-drink/desserts" className="btn btn-muted">Desserts</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Canal bridge and quiet water with morning light"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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
        Information changes. Treat this as local guidance and follow on-site instructions, menus and allergen notices.
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
    name: 'Brunch in Saltaire',
    url: `${base}/brunch`,
    description:
      'How to plan a Saltaire brunch: coffee, outdoor seating, family & dog tips, dietary strategies, and the best add-on walks.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Brunch', item: `${base}/brunch` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Popular ways to do brunch in Saltaire',
    numberOfItems: BRUNCH_STYLES.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: BRUNCH_STYLES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${base}/brunch#${s.id}`,
      description: s.blurb,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to plan a Saltaire brunch without stress',
    totalTime: 'PT90M',
    estimatedCost: '0',
    step: [
      { '@type': 'HowToStep', text: 'Choose your flow: coffee-first takeaway + bench, or sit-down inside.' },
      { '@type': 'HowToStep', text: 'Pick outdoor seating or calmer indoor corners; consider prams and dogs.' },
      { '@type': 'HowToStep', text: 'Confirm dietary needs at the counter (cross-contact, separate kit).' },
      { '@type': 'HowToStep', text: 'Add a short park or canal leg to spread crowds and keep the pace relaxed.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Comfortable shoes' }],
    supply: [{ '@type': 'HowToSupply', name: 'Water and light layer in changeable weather' }],
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
    url: `${base}/brunch`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#intro-title', '#ways-title', '#faq-title'] },
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

export default function BrunchPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <TopWays />
      <WhatToLookFor />
      <Dietary />
      <WithKids />
      <WithDogs />
      <Seasonal />
      <PriceValue />
      <Itineraries />
      <MapPreview />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
