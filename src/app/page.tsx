// src/app/page.tsx — Home (v3)

import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import RelatedLinks from '@/components/RelatedLinks'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Saltaire Guide — Walks, Cafés, Shops, Parking, Events (2025)',
  description:
    'Independent, practical guide to Saltaire: history, Salts Mill, Roberts Park, parking, cafés, pubs, walks, family tips, and what’s on.',
}

/* ------------------------------ Data model -------------------------------- */

type Cluster = {
  slug: string
  href: string
  title: string
  description: string
  image?: { src: string; alt: string; width: number; height: number }
  links: Array<{ label: string; href: string }>
}

const FEATURED_CLUSTERS: Cluster[] = [
  {
    slug: 'parking',
    href: '/parking',
    title: 'Parking in Saltaire',
    description:
      'Car parks, prices, height limits and postcodes. Where to avoid tickets + free options near the village.',
    image: {
      src: '/images/parking-saltaire.png',
      alt: 'Saltaire car park sign and stone buildings',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Caroline St Car Park', href: '/parking/caroline-street' },
      { label: 'Exhibition Rd Car Park', href: '/parking/exhibition-road' },
      { label: 'Free options nearby', href: '/parking/free' },
    ],
  },
  {
    slug: 'salts-mill',
    href: '/salts-mill',
    title: 'Salts Mill',
    description:
      'Hockney art, bookshops, cafés and opening hours. What to see, where to eat, and how long to spend.',
    image: {
      src: '/images/salts-mill.png',
      alt: 'Historic mill building with tall chimney',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Hockney at the Mill', href: '/salts-mill/hockney' },
      { label: 'Shops & cafés', href: '/salts-mill/shops' },
      { label: 'Best photo spots', href: '/salts-mill/photo-spots' },
    ],
  },
  {
    slug: 'roberts-park',
    href: '/roberts-park',
    title: 'Roberts Park',
    description:
      'Play areas, bandstand, Half Moon Café and riverside walks. Family-friendly routes and events.',
    image: {
      src: '/images/roberts-park.png',
      alt: 'Green park with bandstand on a sunny day',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Step-free river loop', href: '/roberts-park/step-free' },
      { label: 'Events & bandstand', href: '/roberts-park/events' },
      { label: 'Playgrounds & toilets', href: '/roberts-park/family' },
    ],
  },
  {
    slug: 'walks',
    href: '/walks',
    title: 'Walks from Saltaire',
    description:
      'Canal towpath, Shipley Glen, and Bingley Five-Rise locks. GPX routes + maps for all levels.',
    image: {
      // swapped Unsplash for a local image
      src: '/images/walks-from-saltaire.png',
      alt: 'Tree-lined canal towpath',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Towpath to Five-Rise', href: '/walks/five-rise' },
      { label: 'Shipley Glen loop', href: '/walks/shipley-glen' },
      { label: 'Dog-friendly routes', href: '/walks/dog-friendly' },
    ],
  },
  {
    slug: 'food-drink',
    href: '/food-drink',
    title: 'Cafés, Pubs & Restaurants',
    description:
      'Where locals actually go for coffee, cake, pints and Sunday lunch — with outdoor seating and dog-friendly notes.',
    image: {
      // swapped Unsplash for a local image
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Coffee and pastries on a wooden table',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Best coffee spots', href: '/food-drink/coffee' },
      { label: 'Dog-friendly cafés', href: '/food-drink/dog-friendly' },
      { label: 'Pubs & beer gardens', href: '/food-drink/pubs' },
    ],
  },
  {
    slug: 'history',
    href: '/history',
    title: 'History & UNESCO',
    description:
      'A quick timeline of Titus Salt, the model village and Italianate architecture — with reading list & sources.',
    image: {
      // swapped Unsplash for a local image
      src: '/images/history-unesco.png',
      alt: 'Stone terraced houses with chimneys',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Why UNESCO listed?', href: '/history/unesco' },
      { label: 'Architecture highlights', href: '/history/architecture' },
      { label: 'Who was Titus Salt?', href: '/history/titus-salt' },
    ],
  },
  {
    slug: 'events',
    href: '/events',
    title: 'What’s On',
    description:
      'Festivals, markets, exhibitions and live music — updated every month with maps and travel tips.',
    image: {
      // swapped Unsplash for a local image
      src: '/images/whats-on.png',
      alt: 'Crowd at an outdoor event',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'Saltaire Festival', href: '/events/saltaire-festival' },
      { label: 'Monthly roundup', href: '/events/this-month' },
      { label: 'Markets & fairs', href: '/events/markets' },
    ],
  },
  {
    slug: 'plan',
    href: '/plan',
    title: 'Plan Your Visit',
    description:
      'Getting here by train, bus or car; accessibility, toilets, cash machines, picnic spots and rainy-day ideas.',
    image: {
      // swapped Unsplash for a local image
      src: '/images/plan-your-visit.png',
      alt: 'Train arriving at a station platform',
      width: 1200,
      height: 800,
    },
    links: [
      { label: 'From Leeds/Bradford', href: '/plan/getting-here' },
      { label: 'Accessibility guide', href: '/plan/accessibility' },
      { label: 'Family with kids', href: '/plan/family' },
    ],
  },
]

const LATEST = [
  { title: 'Parking in Saltaire (2025): prices & map', href: '/parking' },
  { title: 'Salts Mill: what to see in 90 minutes', href: '/salts-mill' },
  { title: 'Towpath to Five-Rise: easy 2-hour walk', href: '/walks/five-rise' },
]

/* ------------------------------- UI -------------------------------------- */

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-8 md:grid-cols-2 md:pt-14">
        <div>
          <h1 id="hero-title" className="text-3xl font-extrabold tracking-tight md:text-5xl">
            The independent guide to Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            History, Salts Mill, Roberts Park, cafés, pubs, walks, parking, accessibility and events — written by locals, kept practical and up to date.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking" className="btn btn-primary">Parking guide</Link>
            <Link href="/walks" className="btn btn-outline">Best walks</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <li>Sub-2.5s LCP</li><li>Original photos &amp; maps</li><li>Local &amp; unbiased</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/saltaire-canal.png"
            alt="Historic mill buildings and canal at Saltaire"
            fill 
            sizes="(max-width: 768px) 100vw, 50vw" 
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = ['Locals', 'Accessible', 'Family-friendly', 'Dog-friendly', 'Free maps']
  return (
    <section aria-label="Trust points" className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2"><span aria-hidden="true">✓</span>{it}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ClusterCard({ c }: { c: Cluster }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <Link href={c.href as any} className="block">
        <div className="relative h-44 w-full md:h-52">
          {c.image ? (
            <Image alt={c.image.alt} src={c.image.src} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={c.slug === 'parking'} />
          ) : (
            <div className="h-full w-full bg-gray-100" />
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-gray-600">{c.description}</p>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {c.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href as any} className="text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function FeaturedClusters() {
  return (
    <section aria-labelledby="featured-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <h2 id="featured-title" className="text-2xl font-bold tracking-tight md:text-3xl">Start with these</h2>
      <p className="mt-2 max-w-prose text-gray-700">Practical evergreen guides, each with maps, accessibility notes and FAQs. These are your most-read topics if you’re planning a visit.</p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_CLUSTERS.map((c) => <ClusterCard key={c.slug} c={c} />)}
      </div>
    </section>
  )
}

function LatestPosts() {
  return (
    <section aria-labelledby="latest-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
        <h2 id="latest-title" className="text-2xl font-bold tracking-tight md:text-3xl">Latest guides &amp; updates</h2>
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LATEST.map((p) => (
            <li key={p.href} className="rounded-xl border border-gray-200 bg-white p-4">
              <Link className="font-medium underline-offset-4 hover:underline" href={p.href}>{p.title}</Link>
              <p className="mt-2 text-sm text-gray-600">Fresh, local information. We update pages when prices change, paths close, or new places open.</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/blog" className="inline-block rounded-xl border border-black px-4 py-2 text-sm transition hover:bg-black hover:text-white">Browse all articles</Link>
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section aria-labelledby="nl-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16 newsletter">
      <div className="grid items-center gap-8 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-10">
        <div>
          <h2 id="nl-title" className="text-2xl font-bold md:text-3xl">The Saltaire Weekend (free)</h2>
          <p className="mt-2 max-w-prose text-gray-700">A short Friday email with what’s on, weather, parking notes and a featured walk. No spam, no fluff.</p>
        </div>
        <form className="flex flex-col gap-3 md:flex-row" action="/api/subscribe" method="post" noValidate>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@domain.com" required className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none ring-0 focus:border-black" />
          <button type="submit" className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90" aria-label="Subscribe to The Saltaire Weekend newsletter">Subscribe</button>
          <p className="text-xs text-gray-500">Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    { q: 'Is parking free in Saltaire?', a: 'There are limited free on-street options with restrictions; most visitors use Caroline St or Exhibition Rd car parks. See our full parking guide for current prices and height limits.' },
    { q: 'How long should I spend at Salts Mill?', a: 'Allow 60–120 minutes for a quick browse of the bookshops and Hockney galleries; add a café stop or village walk and you’ll want half a day.' },
    { q: 'Is Saltaire accessible for wheelchairs and prams?', a: 'Main village streets and the canal towpath are mostly step-free; Roberts Park has accessible routes and toilets. Our accessibility guide maps the smoothest paths.' },
    { q: 'Dog-friendly?', a: 'Yes. The canal towpath and several cafés are dog-friendly; Roberts Park has rules for leads in some areas. We list specific dog-friendly spots.' },
  ]
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium"><span className="mr-2 text-gray-400">Q{i + 1}.</span>{it.q}</summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
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

function JsonLd() {
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire Guide — Walks, Cafés, Shops, Parking, Events',
    url: 'https://saltaireguide.uk/',
    description:
      'Independent, practical guide to Saltaire: history, Salts Mill, Roberts Park, parking, cafés, pubs, walks, family tips, and what’s on.',
  }
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saltaireguide.uk/' }],
  }
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: FEATURED_CLUSTERS.length,
    itemListElement: FEATURED_CLUSTERS.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: `https://saltaireguide.uk${c.href}`,
      description: c.description,
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedClusters />
      <LatestPosts />
      {/* Related Links to push key hubs */}
      <RelatedLinks title="Plan your Saltaire day" variant="blue" />
      <Newsletter />
      <FAQ />
      <JsonLd />
    </>
  )
}
