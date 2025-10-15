// src/app/salts-mill/hockney/page.tsx
// Hockney at Salts Mill — cornerstone v1 (server-only, static, SEO/E-E-A-T)
// - No client components; strong internal linking to /salts-mill, /shops, /food-drink, /parking
// - Sections: Intro, What to see, How long, Best times, Photo policy, Shops/Books, Eat & drink,
//   Accessibility, FAQs, CTA
// - JSON-LD: WebPage + TouristAttraction (ArtGallery) + BreadcrumbList + ItemList (highlights)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Hockney at Salts Mill — 1853 Gallery, books & what to see (2025)',
  description:
    'A practical guide to the Hockney displays at Salts Mill: what to see in the 1853 Gallery, how long to spend, best times, photography notes, shops and accessibility.',
  alternates: { canonical: `${site.url}/salts-mill/hockney` },
  openGraph: {
    title: 'Hockney at Salts Mill — complete local guide',
    description:
      'What to see in the Hockney galleries, how to plan your visit, when it’s quietest, photo etiquette, and where to get books & posters.',
    url: `${site.url}/salts-mill/hockney`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li>
          <Link href="/salts-mill" className="underline underline-offset-4 hover:text-black">Salts Mill</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Hockney</li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Hockney at Salts Mill</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Salts Mill holds an ever-evolving selection of work by David Hockney in the 1853 Gallery and other
            exhibition spaces. This page keeps it practical: what to look for, how long to allow, when it’s quietest,
            photo etiquette, where to get books & posters, and accessibility notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/salts-mill" className="btn btn-primary">Salts Mill guide</Link>
            <Link href="/shops" className="btn btn-outline">Book & poster shop</Link>
            <Link href="/parking" className="btn btn-ghost">Parking</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Free entry (check hours)</li>
            <li className="badge">Original works & editions</li>
            <li className="badge">Great rainy-day option</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/salts-mill.png"
            alt="Gallery space with framed artwork and visitors"
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
    { href: '#what-to-see', label: 'What to see' },
    { href: '#how-long', label: 'How long to spend' },
    { href: '#best-times', label: 'Best times to visit' },
    { href: '#photo', label: 'Photography & etiquette' },
    { href: '#shops', label: 'Books & posters' },
    { href: '#eat', label: 'Eat & drink nearby' },
    { href: '#access', label: 'Accessibility' },
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

function WhatToSee() {
  const highlights = [
    {
      t: '1853 Gallery highlights',
      d: 'Large-scale prints and drawings that show Hockney’s color and line at their most immediate. Expect poster-friendly images alongside pieces that reward close looking.',
    },
    {
      t: 'Yorkshire landscapes',
      d: 'Vivid seasonal views — hawthorns, lanes and big skies — that connect beautifully with Saltaire’s own setting. Watch for multi-panel works and bold digital compositions.',
    },
    {
      t: 'iPad drawings & new media',
      d: 'Look for sequences and time-based experiments. The technology changes, but the subject — seeing — stays constant.',
    },
    {
      t: 'Portraits & people',
      d: 'Cleaner lines and saturated palettes; you can trace decades of stylistic shifts in a couple of rooms.',
    },
  ]
  return (
    <section id="what-to-see" aria-labelledby="see-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="see-title" className="text-2xl font-bold tracking-tight md:text-3xl">What to see</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Displays change over time, but several threads recur. Treat the 1853 Gallery as a curated overview and don’t
        worry about “seeing everything” — it’s better to slow down and choose a handful of works to stand with.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {highlights.map((h) => (
          <div key={h.t} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{h.t}</h3>
              <p className="mt-2 text-gray-700">{h.d}</p>
            </div>
          </div>
        ))}
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Tip</h3>
            <p className="mt-2 text-gray-700">
              If you’re short on time, pick one room and move deliberately — two minutes of attention beats twenty photos
              you’ll never look at again.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowLong() {
  return (
    <section id="how-long" aria-labelledby="time-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="time-title" className="text-2xl font-bold tracking-tight md:text-3xl">How long to spend</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Allow <strong>60–90 minutes</strong> for a focused visit to the Hockney displays, or up to <strong>2 hours</strong> if
        you pair it with a relaxed browse of the book & poster shop. Add extra time on rainy weekends and during school
        holidays — queues build at peak times.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li><strong>Short stop (45–60 min):</strong> One gallery, three works to linger with, quick poster browse.</li>
        <li><strong>Classic visit (90 min):</strong> 1853 Gallery + books, then coffee downstairs.</li>
        <li><strong>Make a day of it (2–3 hrs):</strong> Galleries, full bookshop loop, lunch, and a village walk.</li>
      </ul>
    </section>
  )
}

function BestTimes() {
  return (
    <section id="best-times" aria-labelledby="times-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="times-title" className="text-2xl font-bold tracking-tight md:text-3xl">Best times to visit</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Quieter windows</h3>
          <p className="mt-2 text-gray-700">
            Weekday mornings and later afternoons are usually calm. If it’s raining, expect more people across the Mill.
          </p>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Busiest</h3>
          <p className="mt-2 text-gray-700">
            Late mornings and early afternoons on weekends and school holidays. Go early or aim after 3pm.
          </p>
        </div>
      </div>
    </section>
  )
}

function PhotoPolicy() {
  return (
    <section id="photo" aria-labelledby="photo-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="photo-title" className="text-2xl font-bold tracking-tight md:text-3xl">Photography & etiquette</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Policies can change, but a safe rule is: <strong>no flash</strong>, keep a respectful distance, and avoid blocking
        sightlines. If staff ask not to photograph a work, please follow their request. Tripods and bulky bags
        aren’t practical in tight spaces.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Want something for the wall? The poster shop has licensed prints and books with excellent reproductions — better
        than a dim phone snap.
      </p>
    </section>
  )
}

function ShopsBooks() {
  return (
    <section id="shops" aria-labelledby="shops-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="shops-title" className="text-2xl font-bold tracking-tight md:text-3xl">Books & posters</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        The <strong>Book & Poster Shop</strong> upstairs is one of the best independent bookshops in the region, with a
        huge Hockney section and archive posters. Downstairs, <strong>The Home</strong> stocks design-led gifts, art books and
        practical homeware. See our <Link href="/shops" className="underline underline-offset-4">Shops guide</Link> for details.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Buying a poster?</h3>
            <p className="mt-2 text-gray-700">
              Check sizes and paper stock; many designs have multiple formats. Ask the team about framing options nearby.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Reading list</h3>
            <p className="mt-2 text-gray-700">
              Start with illustrated overviews, then pick a period you love (LA pools, Yorkshire, iPad drawings). Our{' '}
              <Link href="/history/reading-list" className="underline underline-offset-4">history reading list</Link> has broader Saltaire context too.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function EatDrink() {
  return (
    <section id="eat" aria-labelledby="eat-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="eat-title" className="text-2xl font-bold tracking-tight md:text-3xl">Eat & drink nearby</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        For a quick stop, the mill has cafés; for more choice walk up Victoria Road into the village for coffee, lunch
        or a pint. See our <Link href="/food-drink" className="underline underline-offset-4">Eat & Drink</Link> picks.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        <li><Link href="/brunch" className="underline underline-offset-4">Brunch options</Link> on or near the mill.</li>
        <li><Link href="/food-drink/coffee" className="underline underline-offset-4">Best coffee</Link> in walking distance.</li>
        <li><Link href="/food-drink/pubs" className="underline underline-offset-4">Pubs & beer gardens</Link> close by.</li>
      </ul>
    </section>
  )
}

function Accessibility() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="access-title" className="text-2xl font-bold tracking-tight md:text-3xl">Accessibility</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Entrances are step-free with lifts to upper floors. Aisles vary in width by gallery — mornings are easiest for
        wheelchair users and prams. Accessible loos are signposted. For a smooth approach from parking, see our{' '}
        <Link href="/parking" className="underline underline-offset-4">Parking guide</Link>.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        If you need extra support, speak to staff at the main entrance — they’re used to helping with directions and lift access.
      </p>
    </section>
  )
}

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is entry to the Hockney displays free?',
    a: 'Yes, Salts Mill is free to enter. Some special shows or events may differ; check signs on the day.',
  },
  {
    q: 'Do the displays change?',
    a: 'Yes. Works rotate. Don’t worry if something you’ve seen online isn’t up — there’s always plenty to enjoy.',
  },
  {
    q: 'Can I take photos?',
    a: 'Policies vary by room; avoid flash and follow any posted notices or staff requests.',
  },
  {
    q: 'How do I get there by train?',
    a: 'Saltaire station is a short, level walk from the mill. Our getting here guide covers trains from Leeds and Bradford.',
  },
]

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
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
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Plan your Salts Mill visit" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan the perfect Salts Mill visit</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Pair the galleries with the bookshop, coffee and a short village walk to Roberts Park — all within minutes.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/salts-mill" className="btn btn-primary">Salts Mill guide</Link>
              <Link href="/walks" className="btn btn-outline">Best walks</Link>
              <Link href="/food-drink" className="btn btn-ghost">Eat & drink</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/salts-mill.png"
              alt="Quiet gallery corridor with framed works"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- JSON-LD ----------------------------------- */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hockney at Salts Mill — guide',
    url: `${base}/salts-mill/hockney`,
    description:
      'Practical guide to the Hockney displays at Salts Mill: what to see in the 1853 Gallery, how long to spend, best times, photo etiquette, books and accessibility.',
  }

  const attraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Hockney at Salts Mill',
    url: `${base}/salts-mill/hockney`,
    description:
      'A rotating display of work by David Hockney inside the historic Salts Mill.',
    isPartOf: { '@type': 'Place', name: 'Salts Mill', url: `${base}/salts-mill` },
    touristType: ['Art lovers', 'Rainy-day activity'],
  }

  const items = [
    '1853 Gallery highlights',
    'Yorkshire landscapes',
    'iPad drawings & new media',
    'Portraits & people',
  ]
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: items.length,
    itemListElement: items.map((name, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      url: `${base}/salts-mill/hockney#what-to-see`,
    })),
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attraction) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}

/* -------------------------------- Page ----------------------------------- */

export default function HockneyPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <WhatToSee />
      <HowLong />
      <BestTimes />
      <PhotoPolicy />
      <ShopsBooks />
      <EatDrink />
      <Accessibility />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
