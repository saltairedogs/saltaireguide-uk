// src/app/things-to-do/page.tsx
// Things to do in Saltaire — master hub (cornerstone v2.5, server-only, CWV-focused)
// - No client handlers; fully static-first (dynamic='error') for top CWV
// - Deep internal linking to cornerstone clusters & spokes (+ new Ultimate Guide pillar)
// - On-page ToC, accessible markup, print-friendly, minimal LCP cost (all local images)
// - Rich JSON-LD: WebPage + BreadcrumbList + ItemList (Top things) + multiple HowTo blocks
//   + FAQPage + Speakable + (optional) CollectionPage ImageObjects for richer image search
// - Evergreen copy; venue hours/prices live on dedicated subpages
// - Vintage-film vibe preserved (use your existing CSS utilities / btn / badge / card styles)
//
// NOTE: All images are local from /public/images/* per your new image set.

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Things to do in Saltaire (2025): Salts Mill, Roberts Park, walks, cafés, shops, photo spots & family ideas',
  description:
    'The independent master list of the best things to do in Saltaire: Salts Mill, Roberts Park, canal walks, cafés, pubs, shops, parking tips, itineraries, seasonal highlights and our new Ultimate Guide.',
  alternates: { canonical: `${site.url}/things-to-do` },
  openGraph: {
    title: 'Things to do in Saltaire — the independent master guide',
    description:
      'What to see and do in Saltaire: Hockney at Salts Mill, Roberts Park strolls, canal walks, cafés, pubs, shops, photo spots, family ideas, practical tips — all mapped.',
    url: `${site.url}/things-to-do`,
    type: 'article',
    images: [
      { url: `${site.url}/images/saltaire-canal.png`, width: 1600, height: 1066, alt: 'Saltaire canal and Salts Mill at golden hour' },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-14'

// Keep images local only:
const IMG = {
  hero: { src: '/images/saltaire-canal.png', alt: 'Saltaire canal and Salts Mill at golden hour', w: 1600, h: 1066 },
  mill: { src: '/images/salts-mill.png', alt: 'Salts Mill and chimney', w: 1200, h: 800 },
  park: { src: '/images/roberts-park.png', alt: 'Roberts Park bandstand and lawns', w: 1200, h: 800 },
  walks: { src: '/images/walks-from-saltaire.png', alt: 'Tree-lined canal towpath near Saltaire', w: 1200, h: 800 },
  food: { src: '/images/cafe-pubs-restaurants.png', alt: 'Coffee and pastries on a wooden table', w: 1200, h: 800 },
  parking: { src: '/images/parking-saltaire.png', alt: 'Car park sign beside stone terraces', w: 1200, h: 800 },
  plan: { src: '/images/plan-your-visit.png', alt: 'Train arriving at Saltaire platform', w: 1200, h: 800 },
  history: { src: '/images/history-unesco.png', alt: 'Stone terraces and chimneys in Saltaire', w: 1200, h: 800 },
  events: { src: '/images/whats-on.png', alt: 'Crowd at an outdoor event in Saltaire', w: 1200, h: 800 },
  canalAlt: { src: '/images/saltaire-canal.png', alt: 'Canal bend reflecting the mill tower', w: 1600, h: 1066 },
}

type Thing = {
  slug: string
  href: string
  title: string
  category:
    | 'Salts Mill'
    | 'Park & Nature'
    | 'Walks'
    | 'Food & Drink'
    | 'History & Architecture'
    | 'Family'
    | 'Shopping'
    | 'Photography'
    | 'Events'
    | 'Practical'
  estTime: string // e.g. "60–120 min"
  stepFree?: boolean
  family?: boolean
  dog?: boolean
  image?: { src: string; alt: string; width: number; height: number }
  summary: string
  links?: Array<{ label: string; href: string }>
  tags?: string[]
}

const THINGS: Thing[] = [
  {
    slug: 'salts-mill',
    href: '/salts-mill',
    title: 'Explore Salts Mill: Hockney, bookshops & cafés',
    category: 'Salts Mill',
    estTime: '60–120 min',
    stepFree: true,
    family: true,
    image: { src: IMG.mill.src, alt: IMG.mill.alt, width: IMG.mill.w, height: IMG.mill.h },
    summary:
      'Browse the 1853 Gallery, lose time in the book & poster shop, then refuel. Pair with the canal and village streets.',
    links: [
      { label: 'Mill visitor guide', href: '/salts-mill' },
      { label: 'Parking nearby', href: '/parking' },
    ],
    tags: ['art', 'indoor', 'bookshop'],
  },
  {
    slug: 'roberts-park',
    href: '/roberts-park',
    title: 'Stroll Roberts Park: lawns, bandstand & riverside',
    category: 'Park & Nature',
    estTime: '30–90 min',
    stepFree: true,
    family: true,
    dog: true,
    image: { src: IMG.park.src, alt: IMG.park.alt, width: IMG.park.w, height: IMG.park.h },
    summary:
      'Riverside lawns and a classic bandstand just over the footbridge. Perfect for picnics and event days.',
    links: [
      { label: 'Park guide', href: '/roberts-park' },
      { label: 'What’s on', href: '/events' },
    ],
    tags: ['outdoors', 'riverside', 'events'],
  },
  {
    slug: 'towpath-five-rise',
    href: '/walks/five-rise',
    title: 'Walk the canal to Bingley Five-Rise (part or full)',
    category: 'Walks',
    estTime: '90–180 min',
    stepFree: true,
    family: true,
    dog: true,
    image: { src: IMG.walks.src, alt: IMG.walks.alt, width: IMG.walks.w, height: IMG.walks.h },
    summary:
      'Classic towpath route with locks, bridges and boats. Do a short leg to Hirst Lock or the full stretch to Five-Rise.',
    links: [
      { label: 'Route guide', href: '/walks/five-rise' },
      { label: 'Dog-friendly tips', href: '/walks/dog-friendly' },
    ],
    tags: ['flat', 'photogenic', 'canal'],
  },
  {
    slug: 'hirst-wood',
    href: '/walks/hirst-wood',
    title: 'Hirst Wood & Hirst Lock loop',
    category: 'Walks',
    estTime: '60–90 min',
    stepFree: true,
    family: true,
    dog: true,
    image: { src: IMG.walks.src, alt: 'Towpath near Hirst Lock with trees', width: IMG.walks.w, height: IMG.walks.h },
    summary:
      'Level towpath out-and-back or add a gentle woodland loop by the River Aire. Great for photos and benches.',
    links: [
      { label: 'Walk details', href: '/walks/hirst-wood' },
      { label: 'Parking guide', href: '/parking' },
    ],
    tags: ['nature', 'family', 'benches'],
  },
  {
    slug: 'shipley-glen',
    href: '/walks/shipley-glen',
    title: 'Climb to Shipley Glen & moorland edges',
    category: 'Walks',
    estTime: '90–150 min',
    family: true,
    dog: true,
    image: { src: IMG.walks.src, alt: 'Upland edges above the valley (illustrative)', width: IMG.walks.w, height: IMG.walks.h },
    summary:
      'A little elevation for bigger views. Mix woods, gritstone and open edges; add the tramway museum when open.',
    links: [{ label: 'Walk guide', href: '/walks/shipley-glen' }],
    tags: ['views', 'mixed-terrain'],
  },
  {
    slug: 'cafes',
    href: '/food-drink/coffee',
    title: 'Coffee & cake (with outdoor spots)',
    category: 'Food & Drink',
    estTime: '30–60 min',
    family: true,
    image: { src: IMG.food.src, alt: IMG.food.alt, width: IMG.food.w, height: IMG.food.h },
    summary:
      'Calm, independent coffee and slices; vegan options and outdoor tables noted.',
    links: [
      { label: 'Coffee guide', href: '/food-drink/coffee' },
      { label: 'Desserts', href: '/food-drink/desserts' },
    ],
    tags: ['indie', 'vegan-options', 'outdoor-seating'],
  },
  {
    slug: 'pubs',
    href: '/food-drink/pubs',
    title: 'Pubs & beer gardens',
    category: 'Food & Drink',
    estTime: '60–120 min',
    dog: true,
    image: { src: IMG.food.src, alt: 'A pint on a wooden table (illustrative)', width: IMG.food.w, height: IMG.food.h },
    summary:
      'Character pubs and a riverside terrace. Many dog-friendly; ideal after a walk.',
    links: [{ label: 'Pubs guide', href: '/food-drink/pubs' }],
    tags: ['cask', 'riverside', 'dog-friendly'],
  },
  {
    slug: 'bakeries',
    href: '/food-drink/bakeries',
    title: 'Bakeries & trays for picnics',
    category: 'Food & Drink',
    estTime: '15–30 min',
    family: true,
    image: { src: IMG.food.src, alt: 'Cakes and pastries on a tray (illustrative)', width: IMG.food.w, height: IMG.food.h },
    summary:
      'Brownies, flapjacks and buns that travel. Perfect canal or park fuel.',
    links: [
      { label: 'Bakeries', href: '/food-drink/bakeries' },
      { label: 'Desserts hub', href: '/food-drink/desserts' },
    ],
    tags: ['takeaway', 'family'],
  },
  {
    slug: 'ice-cream',
    href: '/food-drink/ice-cream',
    title: 'Ice cream (dairy-free tips)',
    category: 'Food & Drink',
    estTime: '15–30 min',
    family: true,
    dog: true,
    image: { src: IMG.food.src, alt: 'Ice-cream tubs and cones (illustrative)', width: IMG.food.w, height: IMG.food.h },
    summary:
      'Classics and sorbets; see our dairy-free page for allergens and clean-scoop tips.',
    links: [{ label: 'Dairy-free ice-cream', href: '/food-drink/ice-cream/dairy-free' }],
    tags: ['treats', 'dairy-free'],
  },
  {
    slug: 'parking',
    href: '/parking',
    title: 'Sort the parking, then relax',
    category: 'Practical',
    estTime: '5–10 min',
    stepFree: true,
    image: { src: IMG.parking.src, alt: IMG.parking.alt, width: IMG.parking.w, height: IMG.parking.h },
    summary:
      'Car parks, postcodes, height limits and free options nearby — updated when prices change.',
    links: [
      { label: 'Parking guide', href: '/parking' },
      { label: 'Getting here by train', href: '/plan/getting-here' },
    ],
    tags: ['logistics', 'prices'],
  },
  {
    slug: 'history',
    href: '/history',
    title: 'Walk the model village streets',
    category: 'History & Architecture',
    estTime: '30–60 min',
    stepFree: true,
    image: { src: IMG.history.src, alt: IMG.history.alt, width: IMG.history.w, height: IMG.history.h },
    summary:
      'Italianate terraces, institute buildings and tidy planning — the reason UNESCO listed Saltaire.',
    links: [
      { label: 'History hub', href: '/history' },
      { label: 'Who was Titus Salt?', href: '/history/titus-salt' },
      { label: 'UNESCO criteria', href: '/history/unesco' },
    ],
    tags: ['unesco', 'architecture'],
  },
  {
    slug: 'with-kids',
    href: '/plan/family',
    title: 'Easy with kids: parks, paths & treats',
    category: 'Family',
    estTime: '60–120 min',
    family: true,
    image: { src: IMG.park.src, alt: 'Family strolling past Roberts Park bandstand', width: IMG.park.w, height: IMG.park.h },
    summary:
      'Low-stress paths, playgrounds and short treat breaks. We mark benches and toilets.',
    links: [
      { label: 'Family planning', href: '/plan/family' },
      { label: 'Dog-friendly walks', href: '/walks/dog-friendly' },
    ],
    tags: ['buggy-friendly', 'playground'],
  },
  {
    slug: 'shops',
    href: '/shops',
    title: 'Independent shops & browsing',
    category: 'Shopping',
    estTime: '45–90 min',
    image: { src: IMG.history.src, alt: 'Heritage shopfronts (illustrative)', width: IMG.history.w, height: IMG.history.h },
    summary:
      'Books, art, homeware and gifts; compact distances and rainy-day friendly.',
    links: [{ label: 'Shops (guide)', href: '/shops' }],
    tags: ['indie', 'gifts'],
  },
  {
    slug: 'photo-spots',
    href: '/things-to-do/ultimate-guide#photo-spots',
    title: 'Best photo spots (quick list)',
    category: 'Photography',
    estTime: '30–90 min',
    image: { src: IMG.canalAlt.src, alt: IMG.canalAlt.alt, width: IMG.canalAlt.w, height: IMG.canalAlt.h },
    summary:
      'Chimney reflections, bridges, rooflines and riverside at golden hour. Mind the splash at the weir.',
    links: [{ label: 'Photo spots (full)', href: '/things-to-do/ultimate-guide#photo-spots' }],
    tags: ['golden-hour', 'reflections'],
  },
  {
    slug: 'events',
    href: '/events',
    title: 'What’s on: markets, exhibitions & music',
    category: 'Events',
    estTime: 'Varies',
    image: { src: IMG.events.src, alt: IMG.events.alt, width: IMG.events.w, height: IMG.events.h },
    summary:
      'Monthly roundup of exhibitions, markets and bandstand sets. Pair with our parking and getting-here pages.',
    links: [
      { label: 'This month', href: '/events/this-month' },
      { label: 'Saltaire Festival', href: '/events/saltaire-festival' },
    ],
    tags: ['calendar', 'seasonal'],
  },
]

// Long-tail “do” ideas to thicken topical authority and internal links
const MORE_THINGS: Thing[] = [
  {
    slug: 'canal-short',
    href: '/walks',
    title: 'Short canal leg & bench break',
    category: 'Walks',
    estTime: '25–45 min',
    stepFree: true,
    family: true,
    dog: true,
    image: { src: IMG.walks.src, alt: 'Calm towpath section with benches', width: IMG.walks.w, height: IMG.walks.h },
    summary:
      'A simple out-and-back for fresh air and easy photos; good with a takeaway coffee.',
    tags: ['flat', 'benches', 'coffee'],
  },
  {
    slug: 'village-architecture',
    href: '/history/architecture',
    title: 'Architecture highlights loop',
    category: 'History & Architecture',
    estTime: '45–75 min',
    stepFree: true,
    image: { src: IMG.history.src, alt: 'Terraces and chimneys in soft light', width: IMG.history.w, height: IMG.history.h },
    summary:
      'Spot parades, towers and neat terrace details; read our quick glossary and then see it in the stone.',
    tags: ['unesco', 'glossary'],
  },
  {
    slug: 'river-picnic',
    href: '/walks/dog-friendly',
    title: 'Riverside picnic (calm corners)',
    category: 'Family',
    estTime: '45–90 min',
    family: true,
    dog: true,
    image: { src: IMG.park.src, alt: 'Shady park edge and river glint', width: IMG.park.w, height: IMG.park.h },
    summary:
      'Pick a sheltered spot away from pinch points; pack brownies from a bakery and leave no trace.',
    tags: ['picnic', 'family', 'leave-no-trace'],
  },
  {
    slug: 'brunch',
    href: '/food-drink/brunch',
    title: 'Brunch before the Mill',
    category: 'Food & Drink',
    estTime: '45–90 min',
    image: { src: IMG.food.src, alt: 'Brunch spread (illustrative)', width: IMG.food.w, height: IMG.food.h },
    summary:
      'Fuel up before galleries; we note outdoor tables and veggie/vegan choices.',
    tags: ['brunch', 'veggie', 'outdoor'],
  },
  {
    slug: 'dessert-stroll',
    href: '/food-drink/desserts',
    title: 'Dessert & short stroll',
    category: 'Food & Drink',
    estTime: '30–60 min',
    family: true,
    image: { src: IMG.food.src, alt: 'Dessert on a plate (illustrative)', width: IMG.food.w, height: IMG.food.h },
    summary:
      'Share a slice and wander to a quiet bench. Rigid boxes help if you’re roaming.',
    tags: ['dessert', 'benches'],
  },
]

// Micro-guides (internal link teasers) to thicken hub authority
const MICROGUIDES: Array<{ title: string; href: string; blurb: string; icon?: string }> = [
  { title: 'Ultimate Guide (one page)', href: '/things-to-do/ultimate-guide', blurb: 'Our pillar page: Top 10, itineraries, local picks, photo spots — everything.' },
  { title: 'Step-free routes', href: '/plan/accessibility', blurb: 'Flattest paths, accessible toilets, and park loops.' },
  { title: 'Dog-friendly loop', href: '/walks/dog-friendly', blurb: 'Towpath manners, water stops, lead rules and pub patios.' },
  { title: 'Family with kids', href: '/plan/family', blurb: 'Playgrounds, benches, toilets and treat strategy.' },
  { title: 'Getting here (train/car)', href: '/plan/getting-here', blurb: 'Trains from Leeds/Bradford/Ilkley/Skipton; car park postcodes and tips.' },
  { title: 'Saltaire Festival', href: '/events/saltaire-festival', blurb: 'Annual highlight; markets, music, art — and logistics.' },
]

/* ------------------------------ UI Components ------------------------------ */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li><Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link></li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Things to do</li>
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
            Things to do in Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The essentials — Hockney at Salts Mill, Roberts Park lawns, canal walks, cafés, pubs, shops, photo spots and family ideas.
            Start with a couple of hours or build a full day. Updated: <span className="whitespace-nowrap">{UPDATED}</span>.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Step-free ideas</li>
            <li className="badge">Family &amp; dog-friendly</li>
            <li className="badge">Original photos &amp; maps</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/things-to-do/ultimate-guide" className="btn btn-primary">Ultimate Guide</Link>
            <Link href="/parking" className="btn btn-outline">Parking &amp; postcodes</Link>
            <Link href="/walks" className="btn btn-ghost">Walks</Link>
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
    { href: '#micro', label: 'Start here' },
    { href: '#top', label: 'Top things to do' },
    { href: '#quick-picks', label: 'Quick picks' },
    { href: '#categories', label: 'By category' },
    { href: '#itineraries', label: 'Mini itineraries' },
    { href: '#seasonal', label: 'Seasonal notes' },
    { href: '#map', label: 'Map & orientation' },
    { href: '#access', label: 'Accessibility & etiquette' },
    { href: '#downloads', label: 'Downloads' },
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

function MicroGuides() {
  return (
    <section id="micro" aria-labelledby="micro-title" className="container mx-auto max-w-7xl px-4 py-8">
      <h2 id="micro-title" className="text-2xl font-bold tracking-tight md:text-3xl">Start here</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Shortcuts to the most requested guides. Bookmark the Ultimate Guide for a single-page plan.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MICROGUIDES.map((m) => (
          <article key={m.href} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">
                <Link href={m.href} className="underline decoration-transparent underline-offset-4 hover:decoration-black">
                  {m.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-700">{m.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Card({ t }: { t: Thing }) {
  return (
    <article id={t.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={t.href} className="block">
        <div className="relative h-44 w-full md:h-52">
          {t.image ? (
            <Image
              alt={t.image.alt}
              src={t.image.src}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={t.slug === 'salts-mill'}
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gray-100" />
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
            <span className="badge">{t.category}</span>
          </div>
          <p className="mt-2 line-clamp-3 text-sm text-gray-700">{t.summary}</p>
          <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
            <li>⏱ {t.estTime}</li>
            {t.stepFree && <li className="badge">Step-free</li>}
            {t.family && <li className="badge">Family</li>}
            {t.dog && <li className="badge">Dog-friendly</li>}
            {t.tags?.map((tag) => <li key={tag} className="badge">{tag}</li>)}
          </ul>
        </div>
      </Link>
      {t.links && t.links.length > 0 && (
        <div className="px-5 pb-5">
          <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {t.links.map((l) => (
              <li key={l.href}>
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
      )}
    </article>
  )
}

function TopThings() {
  const list = [...THINGS, ...MORE_THINGS]
  return (
    <section id="top" aria-labelledby="top-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="top-title" className="text-2xl font-bold tracking-tight md:text-3xl">Top things to do</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Start here. Short distances, simple decisions. Every item links to deeper guides with step-free notes, family tips and practical details.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => <Card key={t.slug} t={t} />)}
      </div>
    </section>
  )
}

function QuickPicks() {
  const picks = [
    {
      title: 'Only 2 hours?',
      text: 'Salts Mill → short canal leg → coffee. Park once or come by train; keep it simple.',
      links: [
        { label: 'Salts Mill', href: '/salts-mill' },
        { label: 'Short walks', href: '/walks' },
        { label: 'Coffee', href: '/food-drink/coffee' },
      ],
    },
    {
      title: 'Half-day classic',
      text: 'Mill → Roberts Park → towpath to Hirst Lock → late lunch/dessert.',
      links: [
        { label: 'Roberts Park', href: '/roberts-park' },
        { label: 'Hirst Wood loop', href: '/walks/hirst-wood' },
        { label: 'Desserts', href: '/food-drink/desserts' },
      ],
    },
    {
      title: 'With kids',
      text: 'Park lawns + playground + share a slice. Keep benches and toilets in mind.',
      links: [
        { label: 'Family tips', href: '/plan/family' },
        { label: 'Park guide', href: '/roberts-park' },
        { label: 'Desserts', href: '/food-drink/desserts' },
      ],
    },
    {
      title: 'Easy step-free',
      text: 'Level towpath out-and-back; cafés at the start/end.',
      links: [
        { label: 'Accessibility', href: '/plan/accessibility' },
        { label: 'Walks hub', href: '/walks' },
      ],
    },
    {
      title: 'Photo-first',
      text: 'Canal bend reflections → bridge → park bandstand at golden hour.',
      links: [
        { label: 'Photo spots', href: '/things-to-do/ultimate-guide#photo-spots' },
        { label: 'Mill guide', href: '/salts-mill' },
      ],
    },
    {
      title: 'Rainy-day',
      text: 'Mill galleries/shops → long coffee → quick canal window if it clears.',
      links: [
        { label: 'Salts Mill', href: '/salts-mill' },
        { label: 'Brunch', href: '/food-drink/brunch' },
      ],
    },
  ]
  return (
    <section id="quick-picks" aria-labelledby="qp-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="qp-title" className="text-2xl font-bold md:text-3xl">Quick picks</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {picks.map((p) => (
            <article key={p.title} className="card card-hover">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-gray-700">{p.text}</p>
                <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                  {p.links.map((l) => (
                    <li key={l.href}>
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
          Tip: arriving by car? Sort <Link className="underline underline-offset-4" href="/parking">parking</Link> first.
          By train? See <Link className="underline underline-offset-4" href="/plan/getting-here">getting here</Link>.
        </div>
      </div>
    </section>
  )
}

function Categories() {
  const cats: Array<{ key: Thing['category']; title: string; blurb: string; links: Array<{ label: string; href: string }> }> = [
    {
      key: 'Salts Mill',
      title: 'Salts Mill',
      blurb: 'Art, books, cafés and the village axis — start or end here.',
      links: [
        { label: 'Visitor guide', href: '/salts-mill' },
        { label: 'Parking near the Mill', href: '/parking' },
        { label: 'Photo spots inside/nearby', href: '/things-to-do/ultimate-guide#photo-spots' },
      ],
    },
    {
      key: 'Park & Nature',
      title: 'Parks & nature',
      blurb: 'Riverside lawns over the footbridge; towpath reflections at golden hour.',
      links: [
        { label: 'Roberts Park', href: '/roberts-park' },
        { label: 'Hirst Wood loop', href: '/walks/hirst-wood' },
        { label: 'Dog-friendly', href: '/walks/dog-friendly' },
      ],
    },
    {
      key: 'Walks',
      title: 'Walks',
      blurb: 'From level towpaths to moorland edges, keep routes short and photogenic.',
      links: [
        { label: 'Walks hub', href: '/walks' },
        { label: 'Towpath to Five-Rise', href: '/walks/five-rise' },
        { label: 'Shipley Glen', href: '/walks/shipley-glen' },
        { label: 'Dog-friendly', href: '/walks/dog-friendly' },
      ],
    },
    {
      key: 'Food & Drink',
      title: 'Food & drink',
      blurb: 'Coffee first or dessert after — outdoor seating and calm corners listed.',
      links: [
        { label: 'Coffee', href: '/food-drink/coffee' },
        { label: 'Pubs', href: '/food-drink/pubs' },
        { label: 'Bakeries', href: '/food-drink/bakeries' },
        { label: 'Desserts', href: '/food-drink/desserts' },
        { label: 'Ice-cream', href: '/food-drink/ice-cream' },
      ],
    },
    {
      key: 'History & Architecture',
      title: 'History & architecture',
      blurb: 'Understand the model village, then hunt details in the stone.',
      links: [
        { label: 'History hub', href: '/history' },
        { label: 'Titus Salt', href: '/history/titus-salt' },
        { label: 'UNESCO listing', href: '/history/unesco' },
        { label: 'Architecture highlights', href: '/history/architecture' },
        { label: 'Timeline', href: '/history/timeline' },
      ],
    },
    {
      key: 'Family',
      title: 'Families',
      blurb: 'Short walks, benches and treats; avoid pinch points at peak times.',
      links: [
        { label: 'Family planning', href: '/plan/family' },
        { label: 'Step-free routes', href: '/plan/accessibility' },
      ],
    },
    {
      key: 'Shopping',
      title: 'Shops',
      blurb: 'Indies within a compact grid. Great rainy-day browsing.',
      links: [{ label: 'Shops (guide)', href: '/shops' }],
    },
    {
      key: 'Events',
      title: 'Events',
      blurb: 'Monthly “What’s on” and the Saltaire Festival each year.',
      links: [
        { label: 'This month', href: '/events/this-month' },
        { label: 'Saltaire Festival', href: '/events/saltaire-festival' },
      ],
    },
    {
      key: 'Practical',
      title: 'Practical',
      blurb: 'Parking, getting here and step-free notes — plan once, relax more.',
      links: [
        { label: 'Parking', href: '/parking' },
        { label: 'Getting here', href: '/plan/getting-here' },
        { label: 'Accessibility', href: '/plan/accessibility' },
      ],
    },
  ]

  return (
    <section id="categories" aria-labelledby="cat-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="cat-title" className="text-2xl font-bold tracking-tight md:text-3xl">By category</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Prefer to plan by theme? Jump in here, then branch into deeper guides or the Ultimate Guide.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {cats.map((c) => (
          <article key={c.key} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-gray-700">{c.blurb}</p>
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
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
    </section>
  )
}

function Itineraries() {
  const plans = [
    {
      id: 'two-hours',
      name: '2 hours: Saltaire taster',
      steps: [
        'Salts Mill galleries & bookshop (40–60 min)',
        'Short canal out-and-back (20–30 min)',
        'Coffee & cake (15–20 min)',
      ],
      links: [
        { label: 'Salts Mill', href: '/salts-mill' },
        { label: 'Short walks', href: '/walks' },
        { label: 'Coffee', href: '/food-drink/coffee' },
      ],
    },
    {
      id: 'half-day',
      name: 'Half-day: Mill + park + towpath',
      steps: [
        'Salts Mill early (60–90 min)',
        'Roberts Park lawns (30–45 min)',
        'Towpath towards Hirst Lock (30–45 min)',
        'Late lunch or dessert (30–45 min)',
      ],
      links: [
        { label: 'Roberts Park', href: '/roberts-park' },
        { label: 'Hirst Wood loop', href: '/walks/hirst-wood' },
        { label: 'Desserts', href: '/food-drink/desserts' },
      ],
    },
    {
      id: 'full-day',
      name: 'Full day: classic Saltaire',
      steps: [
        'Morning: Salts Mill & village streets',
        'Midday: Bakery picnic in the park',
        'Afternoon: Towpath to Shipley or towards Five-Rise',
        'Golden hour: photo loop & a pub garden',
      ],
      links: [
        { label: 'Architecture', href: '/history/architecture' },
        { label: 'Five-Rise route', href: '/walks/five-rise' },
        { label: 'Pubs', href: '/food-drink/pubs' },
      ],
    },
    {
      id: 'rainy',
      name: 'Rainy-day: inside first',
      steps: [
        'Salts Mill galleries & shops',
        'Brunch/coffee under a roof',
        'Short towpath window if it clears',
        'Back to the Mill for a final browse',
      ],
      links: [
        { label: 'Salts Mill', href: '/salts-mill' },
        { label: 'Brunch', href: '/food-drink/brunch' },
        { label: 'Coffee', href: '/food-drink/coffee' },
      ],
    },
  ]

  return (
    <section id="itineraries" aria-labelledby="it-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="it-title" className="text-2xl font-bold md:text-3xl">Mini itineraries</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <article key={p.id} className="card card-hover">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <ol className="mt-2 list-decimal pl-5 text-gray-700">
                  {p.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ol>
                <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <Link className="underline underline-offset-4" href={l.href as any}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-gray-500">Prefer a single-page plan? Try the <Link className="underline" href="/things-to-do/ultimate-guide">Ultimate Guide</Link>.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Seasonal() {
  const seasons = [
    {
      title: 'Spring',
      bullets: [
        'Blossom and soft greens; light layers and optimism.',
        'Towpath dries out; ducks renegotiate bread policy (peas only please).',
      ],
    },
    {
      title: 'Summer',
      bullets: [
        'Festivals and late light; beer gardens and lawns.',
        'Arrive early or go golden-hour on busy weekends.',
      ],
    },
    {
      title: 'Autumn',
      bullets: [
        'Gold/amber canal lines; best for reflections.',
        'Soups return to menus with conviction.',
      ],
    },
    {
      title: 'Winter',
      bullets: [
        'Mill galleries + long coffee; short daylight windows.',
        'Towpath may be slick — bring grip.',
      ],
    },
  ]
  return (
    <section id="seasonal" aria-labelledby="seasonal-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="seasonal-title" className="text-2xl font-bold tracking-tight md:text-3xl">Seasonal notes</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {seasons.map((s) => (
          <article key={s.title} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function MapPreview() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Map & orientation</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire is compact: the Mill, the village grid, the canal and Roberts Park are minutes apart. Use our guide pages for simple routes and your map app for turn-by-turn.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src={IMG.canalAlt.src}
          alt="Orientation: canal beside Salts Mill and the village grid"
          width={IMG.canalAlt.w}
          height={IMG.canalAlt.h}
          className="object-cover"
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>Parking near the edge keeps the model village calmer — see the parking guide.</li>
        <li>Busy days? Start earlier, then pivot to a short towpath leg and loop back later.</li>
      </ul>
    </section>
  )
}

function AccessAndEtiquette() {
  const tips = [
    { title: 'Step-free surfaces', detail: 'Main streets and most canal stretches are level; avoid cobbled side strays if pushing a buggy.' },
    { title: 'Dogs', detail: 'Short leads on the towpath and in Roberts Park where signed. Water bowls at some pubs/cafés.' },
    { title: 'Toilets', detail: 'Roberts Park pavilion, Salts Mill and selected venues. Event days add facilities.' },
    { title: 'Bins & noise', detail: 'This is a lived-in village — leave no trace, keep voices low at night.' },
    { title: 'Cyclists', detail: 'Share the towpath; bells are friendly not bossy. Step aside at pinch points.' },
  ]
  const commandments = [
    'Photograph the Mill from the canal bend, then check the shot once more (for luck).',
    'Peas or proper duck food, not bread. The ducks run a tight union here.',
    'Chimneys are handsome; houses are homes — stay respectful when framing.',
  ]
  return (
    <section id="access" aria-labelledby="access-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <h2 id="access-title" className="text-2xl font-bold md:text-3xl">Accessibility & etiquette</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Quick accessibility notes</h3>
            <ul className="mt-2 list-disc pl-5">
              {tips.map((t) => <li key={t.title}><span className="font-medium">{t.title}:</span> {t.detail}</li>)}
            </ul>
            <p className="mt-2 text-sm">
              Full detail: <Link href="/plan/accessibility" className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">step-free routes &rarr;</Link>
            </p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Friendly commandments</h3>
            <ul className="mt-2 list-disc pl-5">
              {commandments.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function Downloads() {
  const items = [
    { label: 'GPX: Saltaire → Hirst Lock (flat)', href: '/downloads/saltaire-hirst-lock.gpx' },
    { label: 'GPX: Saltaire → Five-Rise (one-way)', href: '/downloads/saltaire-five-rise.gpx' },
    { label: 'Printable: Half-day plan (A4)', href: '/downloads/halfdaysaltaire.pdf' },
  ]
  return (
    <section id="downloads" aria-labelledby="dl-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="dl-title" className="text-2xl font-bold tracking-tight md:text-3xl">Downloads</h2>
      <p className="mt-2 max-w-prose text-gray-700">Simple takeaways for offline days. (If a link 404s, it’s queued — nudge us!)</p>
      <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((x) => (
          <li key={x.href} className="rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-sm">
            <Link href={x.href} className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">{x.label}</Link>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-gray-500">Want a custom route? Tell us your time, distance and accessibility needs via the <Link className="underline" href="/contact">contact form</Link>.</p>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Plan your Saltaire day" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan your Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Keep it simple: sort parking or hop off the train, take an easy walk, and pick a café or pub to unwind.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/things-to-do/ultimate-guide" className="btn btn-primary">Ultimate Guide</Link>
              <Link href="/parking" className="btn btn-outline">Parking</Link>
              <Link href="/plan/getting-here" className="btn btn-ghost">Getting here</Link>
              <Link href="/food-drink" className="btn btn-muted">Food &amp; drink</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.hero.src}
              alt="Canal and village scene with warm light"
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

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    { q: 'What are the must-dos on a first visit?', a: 'Salts Mill, a short canal out-and-back, and a stroll across Roberts Park. Add coffee or a slice if time allows.' },
    { q: 'Is Saltaire walkable and step-free?', a: 'Yes. The core is compact with level routes; towpath and main streets are mostly step-free. Some side streets have cobbles.' },
    { q: 'Where should I park?', a: 'Use Caroline Street or Exhibition Road and walk in; always read signs on the day. Our parking guide has current prices and height limits.' },
    { q: 'What about dogs?', a: 'Towpaths and many outdoor café tables are dog-friendly. Keep a short lead near bridges and water; follow park signage.' },
    { q: 'How long should I spend?', a: 'Two hours covers highlights; half a day is comfortable; a full day if you’re adding a longer walk and a sit-down meal.' },
    { q: 'If it rains…?', a: 'Put Salts Mill first, then fit a short towpath window if the weather eases. Brunch and bakeries are reliable morale.' },
  ]

  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>{f.q}
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
  const all = [...THINGS, ...MORE_THINGS]

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Things to do in Saltaire',
    url: `${base}/things-to-do`,
    description:
      'Best things to do in Saltaire: Salts Mill, Roberts Park, canal walks, cafés, pubs, shops, photo spots, itineraries, seasonal tips and our Ultimate Guide.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Things to do', item: `${base}/things-to-do` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top things to do in Saltaire',
    numberOfItems: all.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: all.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.title,
      url: `${base}${t.href}`,
      description: t.summary,
    })),
  }

  const howToHalfDay = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to spend a half-day in Saltaire',
    description: 'A practical sequence to enjoy art, park time and a short canal walk with minimal backtracking.',
    totalTime: 'PT4H',
    step: [
      { '@type': 'HowToStep', text: 'Start at Salts Mill for galleries and bookshops (60–90 min).' },
      { '@type': 'HowToStep', text: 'Walk to Roberts Park for lawns and riverside (30–45 min).' },
      { '@type': 'HowToStep', text: 'Take a short towpath leg towards Hirst Lock (30–45 min).' },
      { '@type': 'HowToStep', text: 'Finish with coffee/dessert back in the village (30–45 min).' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Comfortable shoes' }],
    supply: [{ '@type': 'HowToSupply', name: 'Water and light layer' }],
    estimatedCost: '0',
  }

  const howToTwoHours = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to do Saltaire in 2 hours',
    totalTime: 'PT2H',
    step: [
      { '@type': 'HowToStep', text: 'Salts Mill galleries & bookshop (40–60 min).' },
      { '@type': 'HowToStep', text: 'Short canal out-and-back (20–30 min).' },
      { '@type': 'HowToStep', text: 'Coffee & cake (15–20 min).' },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the must-dos on a first visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Salts Mill, a short canal out-and-back, and a stroll across Roberts Park. Add coffee or a slice if time allows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Saltaire walkable and step-free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The core is compact with level routes; the towpath and main streets are mostly step-free. Some side streets have cobbles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where should I park?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use Caroline Street or Exhibition Road and walk in; always read signs on the day. Our parking guide has details and current prices.',
        },
      },
    ],
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/things-to-do`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#intro-title', '#top-title', '#it-title'] },
  }

  // Image objects to strengthen rich results (local-only)
  const images = [
    { url: `${base}/images/saltaire-canal.png`, caption: 'Saltaire canal and Salts Mill at golden hour', width: 1600, height: 1066 },
    { url: `${base}/images/salts-mill.png`, caption: 'Salts Mill tower and facade', width: 1200, height: 800 },
    { url: `${base}/images/roberts-park.png`, caption: 'Roberts Park bandstand and lawns', width: 1200, height: 800 },
  ].map((i) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: i.url,
    caption: i.caption,
    width: i.width,
    height: i.height,
  }))

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToHalfDay) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToTwoHours) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      {images.map((img, i) => (
        <script key={`img-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(img) }} />
      ))}
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ThingsToDoPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <MicroGuides />
      <TopThings />
      <QuickPicks />
      <Categories />
      <Itineraries />
      <Seasonal />
      <MapPreview />
      <AccessAndEtiquette />
      <Downloads />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
