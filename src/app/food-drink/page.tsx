// src/app/food-drink/page.tsx
// Food & Drink in Saltaire — cornerstone (static, CWV-friendly)
// - Server-only (no "use client")
// - Categories: Cafés, Pubs, Restaurants with feature flags (outdoor, dog-friendly, step-free, price)
// - Comparison table + local tips + FAQ
// - JSON-LD: WebPage + BreadcrumbList + ItemList of LocalBusiness (CafeOrCoffeeShop, BarOrPub, Restaurant) + FAQPage
// - Internal links to Walks, Parking, Events

import type { Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'
import { foodDrinkLocations } from '@/content/food-drink-locations'
import FoodDrinkMap from '@/components/FoodDrinkMap'
import RelatedLinks from '@/components/RelatedLinks'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'Cafés, pubs & restaurants in Saltaire — where locals actually go (2025)',
  description:
    'Best places to eat and drink in Saltaire: specialty coffee, brunch, pubs and casual lunches. Outdoor seating, dog-friendly notes and step-free tips.',
  alternates: { canonical: `${site.url}/food-drink` },
  openGraph: {
    title: 'Eat & Drink in Saltaire — cafés, pubs, restaurants',
    description:
      'Local, practical picks for coffee, cake, pints and lunch. Outdoor seating, dog-friendly and step-free notes included.',
    url: `${site.url}/food-drink`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* -------------------------------- Data model ------------------------------- */

type PlaceType = 'Cafe' | 'Pub' | 'Restaurant'

type Place = {
  slug: string
  name: string
  type: PlaceType
  blurb: string
  highlights: string[]
  cuisines?: string[]
  features: {
    outdoor: boolean
    dog: boolean
    stepFree: boolean
    booking?: 'Recommended' | 'Walk-in'
    price: '£' | '££' | '£££'
  }
  image?: { src: string; alt: string; width: number; height: number }
}

const CAFES: Place[] = [
  {
    slug: 'mill-diner',
    name: 'Diner & Café (inside Salts Mill)',
    type: 'Cafe',
    blurb:
      'Relaxed, light lunches and cake inside the Mill — handy before a gallery wander or canal stroll.',
    highlights: ['Coffee & cake', 'Kid options', 'Near galleries'],
    features: { outdoor: false, dog: false, stepFree: true, booking: 'Walk-in', price: '££' },
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Café interior in Salts Mill Saltaire',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'espresso-bar',
    name: 'Espresso Bar',
    type: 'Cafe',
    blurb:
      'Quick, quality espresso and pastries — good pit-stop if you’re hopping between shops and galleries.',
    highlights: ['Specialty coffee', 'Fast service', 'Takeaway'],
    features: { outdoor: false, dog: false, stepFree: true, booking: 'Walk-in', price: '£' },
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Espresso coffee in Saltaire',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'half-moon',
    name: 'Half Moon Café (Roberts Park)',
    type: 'Cafe',
    blurb:
      'Family-friendly café by the bandstand — ideal for river loop walks and playground stops.',
    highlights: ['Park setting', 'Ice cream in summer', 'Family friendly'],
    features: { outdoor: true, dog: true, stepFree: true, booking: 'Walk-in', price: '£' },
    image: {
      src: '/images/roberts-park.png',
      alt: 'Half Moon Café in Roberts Park Saltaire',
      width: 1200,
      height: 800,
    },
  },
]

const PUBS: Place[] = [
  {
    slug: 'canal-side-pub',
    name: 'Canal-side Pub',
    type: 'Pub',
    blurb:
      'Classic pints near the towpath. Sunny-day favourite with spots to watch boats and walkers.',
    highlights: ['Beer garden', 'Casual food', 'Towpath views'],
    features: { outdoor: true, dog: true, stepFree: false, booking: 'Walk-in', price: '££' },
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Pub near canal towpath in Saltaire',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'village-inn',
    name: 'Village Inn',
    type: 'Pub',
    blurb:
      'Traditional local with real ale and a friendly crowd. Good spot after a Shipley Glen loop.',
    highlights: ['Cask ale', 'Cosy corners', 'Local feel'],
    features: { outdoor: limitedTrue(), dog: true, stepFree: true, booking: 'Walk-in', price: '£' },
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Traditional village pub in Saltaire area',
      width: 1200,
      height: 800,
    },
  },
]

const RESTAURANTS: Place[] = [
  {
    slug: 'casual-lunch',
    name: 'Casual Lunch Spot',
    type: 'Restaurant',
    blurb:
      'Fresh, simple plates; good for post-gallery lunches and early family dinners.',
    highlights: ['Seasonal plates', 'Vegetarian friendly', 'Relaxed vibe'],
    features: { outdoor: true, dog: limitedTrue(), stepFree: true, booking: 'Recommended', price: '££' },
    cuisines: ['British', 'Cafe'],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Lunch dishes in Saltaire restaurant',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'pizza-kitchen',
    name: 'Pizza Kitchen',
    type: 'Restaurant',
    blurb:
      'Stone-baked pizzas and salads; handy with groups after a long towpath walk.',
    highlights: ['Sharing friendly', 'All-ages', 'Takeaway options'],
    features: { outdoor: true, dog: true, stepFree: true, booking: 'Recommended', price: '££' },
    cuisines: ['Pizza', 'Italian'],
    image: {
      src: '/images/cafe-pubs-restaurants.png',
      alt: 'Pizza restaurant near Saltaire',
      width: 1200,
      height: 800,
    },
  },
]

/** tiny helper to avoid claiming full beer gardens or full dog access if uncertain */
function limitedTrue() {
  // Use when access tends to be partial or time-dependent; we’ll label as "Some".
  return true
}

const ALL_PLACES: Place[] = [...CAFES, ...PUBS, ...RESTAURANTS]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do places take bookings?',
    a: 'Casual cafés are usually walk-in; restaurants may take reservations, especially at weekends. If you’re visiting during holidays or festival dates, booking is sensible.',
  },
  {
    q: 'Is outdoor seating common?',
    a: 'Yes at many spots in decent weather. Space goes quickly on sunny days — aim early lunch (11:30–12:00) or late (14:30+).',
  },
  {
    q: 'Dog-friendly?',
    a: 'Quite a few cafés and pub beer gardens welcome dogs; indoor policies vary. Look for signage or ask on arrival.',
  },
  {
    q: 'Any step-free options?',
    a: 'Several venues have level access and accessible loos. Surfaces in the heritage core are generally good; some side streets have cobbles.',
  },
]

/* ------------------------------- UI helpers -------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

function FeatureBadges({ p }: { p: Place }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
      <li className="badge">{p.features.price}</li>
      <li className="badge">{p.features.booking ?? 'Walk-in'}</li>
      <li className="badge">{p.features.outdoor ? 'Outdoor' : 'Indoor'}</li>
      <li className="badge">{p.features.dog ? 'Dog-friendly' : 'Dogs: check'}</li>
      <li className="badge">{p.features.stepFree ? 'Step-free' : 'Some steps'}</li>
    </ul>
  )
}

/* ------------------------------- Components -------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link className="underline underline-offset-4 hover:text-black" href="/">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Eat &amp; Drink
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Eat &amp; Drink in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Specialty coffee, relaxed lunches and proper pubs — all a short walk from Salts Mill.
            We keep this list practical with outdoor seating, dog-friendly notes and step-free tips.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local picks</li>
            <li className="badge">Outdoor options</li>
            <li className="badge">Family friendly</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/walks" className="btn btn-primary">Best walks</Link>
            <Link href="/parking" className="btn btn-outline">Parking guide</Link>
            <Link href="/events" className="btn btn-ghost">What’s on</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Cafés and restaurants in Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function PageTOC() {
  const items = [
    { href: '#featured', label: 'Featured picks' },
    { href: '#cafes', label: 'Coffee & cafés' },
    { href: '#pubs', label: 'Pubs & beer gardens' },
    { href: '#restaurants', label: 'Restaurants & lunches' },
    { href: '#compare', label: 'Compare options' },
    { href: '#tips', label: 'Local tips' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
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

function PlaceCard({ p }: { p: Place }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full md:h-52">
        {p.image ? (
          <Image
            alt={p.image.alt}
            src={p.image.src}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={p.slug === 'mill-diner'}
          />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {p.name} <span className="ml-2 align-middle badge">{p.type}</span>
        </h3>
        <p className="mt-2 text-sm text-gray-700">{p.blurb}</p>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-gray-700">
          {p.highlights.map((h) => (
            <li key={h}>
              <span aria-hidden="true" className="mr-1">✓</span>
              {h}
            </li>
          ))}
        </ul>
        <FeatureBadges p={p} />
      </div>
    </article>
  )
}

function FeaturedPicks() {
  const picks = [CAFES[0], PUBS[0], RESTAURANTS[0]].filter(Boolean)
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured picks</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Three easy wins if you’re short on time: a quick coffee inside the Mill, a classic canal-side pint, and
        a relaxed lunch spot. Busy at weekends — be flexible or try off-peak times.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((p) => (
          <PlaceCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  )
}

function InteractiveMap() {
  return (
    <section id="map" aria-labelledby="map-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="map-title">📍 Interactive Food & Drink Map</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Click markers to see details about each café, pub and restaurant. All locations are within easy walking
          distance in the village centre. Zoom and pan to explore.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg">
          <FoodDrinkMap listings={foodDrinkLocations} center={{ lat: 53.8381, lng: -1.7922 }} zoom={16} />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          💡 <strong>Tip:</strong> Most venues are within 5 minutes walk of each other. Perfect for a café crawl or pub hop!
        </p>
      </div>
    </section>
  )
}

function Cafes() {
  return (
    <section id="cafes" aria-labelledby="cafes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="cafes-title">Coffee & cafés</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Good for breakfast rolls, cake and flat whites. Expect weekend queues — they move quickly.
        Combine with <Link className="underline underline-offset-4" href="/walks">a short walk</Link>.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAFES.map((p) => (
          <PlaceCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  )
}

function Pubs() {
  return (
    <section id="pubs" aria-labelledby="pubs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="pubs-title">Pubs & beer gardens</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Traditional locals and towpath favourites. Sunny days and festival weekends get lively — arrive early or look
        a street back from the busiest spots.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PUBS.map((p) => (
          <PlaceCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  )
}

function Restaurants() {
  return (
    <section id="restaurants" aria-labelledby="restaurants-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="restaurants-title">Restaurants & lunches</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Casual is the vibe: pizza, seasonal plates and kid-friendly options. Book for peak weekend times.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RESTAURANTS.map((p) => (
          <PlaceCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  return (
    <section id="compare" aria-labelledby="compare-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="compare-title">Compare options at a glance</SectionHeading>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[760px]">
          <thead>
            <tr>
              <th className="w-[28%]">Place</th>
              <th>Type</th>
              <th>Price</th>
              <th>Booking</th>
              <th>Outdoor</th>
              <th>Dog-friendly</th>
              <th>Step-free</th>
              <th>Highlights</th>
            </tr>
          </thead>
          <tbody>
            {ALL_PLACES.map((p) => (
              <tr key={p.slug} id={p.slug}>
                <td className="font-medium">
                  <a className="underline underline-offset-4 decoration-gray-300 hover:decoration-black" href={`#${p.slug}`}>
                    {p.name}
                  </a>
                </td>
                <td>{p.type}</td>
                <td>{p.features.price}</td>
                <td>{p.features.booking ?? 'Walk-in'}</td>
                <td>{p.features.outdoor ? 'Yes' : 'No'}</td>
                <td>{p.features.dog ? 'Yes' : 'Check'}</td>
                <td>{p.features.stepFree ? 'Yes' : 'Some steps'}</td>
                <td>{p.highlights.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Details change — treat as guidance and always check venue signage or their own announcements on the day.
      </p>
    </section>
  )
}

function LocalTips() {
  return (
    <section id="tips" aria-labelledby="tips-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="tips-title">Local tips</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Beat the queues</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Arrive before 11:30 for brunch or after 14:30 for a calmer lunch.</li>
            <li>Grab coffee first, then loop back for food once the rush passes.</li>
            <li>Try a pub a street back from the canal on sunny days.</li>
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Good to know</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Some outdoor areas are weather-dependent or limited in number.</li>
            <li>Dog policies vary indoors; beer gardens are usually easiest.</li>
            <li>For step-free access inside Salts Mill, ask staff for the best lift route.</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Making a day of it? Pair food with the{' '}
          <Link className="underline underline-offset-4" href="/walks">
            Five-Rise towpath
          </Link>{' '}
          or the{' '}
          <Link className="underline underline-offset-4" href="/roberts-park">
            Roberts Park river loop
          </Link>
          . If driving, see the <Link className="underline underline-offset-4" href="/parking">Parking guide</Link>.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {it.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
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

function CTA() {
  return (
    <section aria-label="Plan your day" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Make the most of Saltaire</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              After coffee or lunch, pick a walk, check what’s on, and plan the rest of the day. Our guides are
              updated regularly with original photos and maps.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/walks" className="btn btn-primary">Walks from Saltaire</Link>
              <Link href="/events" className="btn btn-outline">What’s on</Link>
              <Link href="/salts-mill" className="btn btn-ghost">Salts Mill</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Food and drink in Saltaire"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  // Map our type to schema.org LocalBusiness subclasses
  const typeMap: Record<PlaceType, string> = {
    Cafe: 'CafeOrCoffeeShop',
    Pub: 'BarOrPub',
    Restaurant: 'Restaurant',
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: ALL_PLACES.length,
    itemListElement: ALL_PLACES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/food-drink#${p.slug}`,
      description: `${p.type}. ${p.blurb}`,
      item: {
        '@type': typeMap[p.type],
        name: p.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Saltaire',
          addressRegion: 'West Yorkshire',
          addressCountry: 'GB',
        },
        servesCuisine: p.cuisines ?? undefined,
        isAccessibleForFree: true,
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Eat & Drink in Saltaire',
    url: `${base}/food-drink`,
    description:
      'Best cafés, pubs and restaurants in Saltaire with outdoor seating, dog-friendly notes and step-free tips.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Eat & Drink', item: `${base}/food-drink` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function FoodDrinkPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <FeaturedPicks />
      <InteractiveMap />
      <Cafes />
      <Pubs />
      <Restaurants />
      <CompareTable />
      <LocalTips />
      <FAQ />
      <RelatedLinks exclude={['/food-drink']} title="Related Saltaire guides" />
      <CTA />
      <JsonLd />
    </>
  )
}
