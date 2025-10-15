// src/app/salts-mill/page.tsx
// Salts Mill — cornerstone page (static, CWV-friendly)
// - No client components; server-rendered only
// - Highlights, planning info, shops & cafés, accessibility, photo tips
// - JSON-LD: WebPage + BreadcrumbList + TouristAttraction + ItemList (venues) + FAQPage
// - Internal links: parking, walks, events

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'
import RelatedLinks from '@/components/RelatedLinks'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'Salts Mill: art, bookshops & cafés — what to see, where to eat, opening notes (2025)',
  description:
    'Local guide to Salts Mill in Saltaire: Hockney art, bookshops, cafés, planning tips, accessibility, photo spots and nearby walks. Written by locals.',
  alternates: { canonical: `${site.url}/salts-mill` },
  openGraph: {
    title: 'Salts Mill — what to see & where to eat',
    description:
      'Hockney art, bookshops and cafés inside a world-famous former mill. Practical planning tips, accessibility notes and nearby walks.',
    url: `${site.url}/salts-mill`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* -------------------------------- Data model ------------------------------- */

type Venue = {
  slug: string
  name: string
  kind: 'Shop' | 'Cafe'
  blurb: string
  highlights: string[]
  url?: string
  image?: { src: string; alt: string; width: number; height: number }
}

const VENUES: Venue[] = [
  {
    slug: 'bookshop',
    name: 'Mill Bookshop',
    kind: 'Shop',
    blurb:
      'Large independent bookshop with art, architecture, travel and plenty of local history titles.',
    highlights: ['Big selection', 'Quiet reading corners', 'Giftable local titles'],
    image: {
      src: '/images/salts-mill.png',
      alt: 'Bookshelves and tables with art books',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'art-supplies',
    name: 'Art Materials & Prints',
    kind: 'Shop',
    blurb:
      'Quality papers, sketchbooks and paints, plus framed and unframed prints inspired by the mill.',
    highlights: ['Great gifts', 'Sketchbooks', 'Local themes'],
    image: {
      src: '/images/salts-mill.png',
      alt: 'Art materials and prints on a wall',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'homewares',
    name: 'Design & Home',
    kind: 'Shop',
    blurb:
      'Curated ceramics, textiles and homewares with a modern, usable feel. Perfect “take-home from Saltaire”.',
    highlights: ['Ceramics', 'Textiles', 'Local makers'],
    image: {
      src: '/images/salts-mill.png',
      alt: 'Ceramics and textiles on display',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'diner',
    name: 'Diner & Café',
    kind: 'Cafe',
    blurb:
      'Light lunches, cakes and coffee with mill-brick views. Good for a warm-up before a canal walk.',
    highlights: ['Coffee & cake', 'Kids options', 'Vegetarian friendly'],
    image: {
      src: '/images/salts-mill.png',
      alt: 'Coffee and sandwich on a wooden table',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'espresso',
    name: 'Espresso Bar',
    kind: 'Cafe',
    blurb:
      'Quick specialty coffee stop with pastries; handy if you’re hopping between galleries.',
    highlights: ['Quick service', 'Pastries', 'Takeaway available'],
    image: {
      src: '/images/salts-mill.png',
      alt: 'Espresso pouring into a cup',
      width: 1200,
      height: 800,
    },
  },
]

const HIGHLIGHTS = [
  'Hockney art spaces and changing exhibitions',
  'Iconic Italianate mill architecture and chimney',
  'Huge bookshop and design/home stores',
  'Good cafés for coffee, cake and simple lunches',
  'Canal and Roberts Park are moments away',
]

const PLANNING = [
  'Allow at least 60–90 minutes for a browse; half a day if adding lunch and a short walk.',
  'Weekends get busy late morning. Arrive for opening or from mid-afternoon.',
  'Combine with a towpath stroll or Roberts Park for an easy full day.',
]

const ACCESS = [
  'Main entrances are step-free; lifts serve upper levels (ask staff for directions).',
  'Toilets available inside the Mill; accessible cubicles signposted.',
  'Surfaces inside are smooth; outside you’ll meet cobbles on some side streets.',
  'Nearest train: Saltaire (3–5 minutes walk). Bus stops on Saltaire Road.',
]

const PHOTO_TIPS = [
  'Best light on the canal frontage is late afternoon on bright days.',
  'Try framing the chimney with the canal bridges for classic shots.',
  'Inside: be respectful around galleries and other visitors; follow signage.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How long do I need at Salts Mill?',
    a: 'A quick browse is 60–90 minutes. With lunch and a village/park walk, plan 3–4 hours.',
  },
  {
    q: 'Do I need to pay to visit?',
    a: 'Galleries and shops are typically free to enter; some exhibitions or events may charge.',
  },
  {
    q: 'Where do I park?',
    a: 'Closest areas are around Victoria Road by the Mill; for a reliable option use Caroline Street or Exhibition Road and walk in. See our parking guide.',
  },
  {
    q: 'Is it suitable for prams and wheelchairs?',
    a: 'Yes: main routes are step-free and there are lifts inside. Surfaces are mostly smooth; staff can advise the best way between levels.',
  },
]

/* ------------------------------ Small helpers ------------------------------ */

function SectionHeading({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
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
          Salts Mill
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Salts Mill</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            World-famous Victorian mill in the heart of Saltaire — now home to galleries, huge
            bookshops, design stores and cafés. Here’s the practical way to see the best bits.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Free to enter</li>
            <li className="badge">Cafés & shops</li>
            <li className="badge">Near canal & park</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking" className="btn btn-primary">
              Parking guide
            </Link>
            <Link href="/walks" className="btn btn-outline">
              Best walks
            </Link>
            <Link href="/events" className="btn btn-ghost">
              What’s on
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/salts-mill.png"
            alt="Iconic mill building with tall chimney and evening light"
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
    { href: '#highlights', label: 'Highlights' },
    { href: '#planning', label: 'Planning & opening notes' },
    { href: '#venues', label: 'Shops & cafés' },
    { href: '#access', label: 'Accessibility' },
    { href: '#photos', label: 'Photo spots' },
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

function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="highlights-title">Highlights</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Inside the Mill you’ll find airy galleries, independent shops and relaxed places to eat and
        drink. The canal and Roberts Park sit on the doorstep, so you can easily turn a browse into
        a full Saltaire day.
      </p>
      <ul className="mt-4 grid list-disc gap-2 pl-5 md:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <li key={h} className="text-gray-800">
            {h}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Planning() {
  return (
    <section id="planning" aria-labelledby="planning-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="planning-title">Planning & opening notes</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">How long to spend</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {PLANNING.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Coming by car? See the <Link className="underline underline-offset-4" href="/parking">Parking guide</Link>.
              By rail, <strong>Saltaire station</strong> is a few minutes level walk.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Opening notes</h3>
            <p className="mt-2 text-gray-700">
              Hours vary by gallery/shop/café and change seasonally or during events. Weekends and
              holidays are busiest late morning. Arrive early or later in the afternoon for a calmer visit.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Always check the signage on the day and the venue’s own notices for current hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Venues() {
  return (
    <section id="venues" aria-labelledby="venues-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="venues-title">Shops & cafés inside the Mill</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Here are the popular spots visitors head for. Treat these as signposts — wander, explore and
        you’ll find more. For lunch on busy days, go early or be flexible on time.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VENUES.map((v) => (
          <article key={v.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative h-44 w-full md:h-52">
              {v.image ? (
                <Image
                  alt={v.image.alt}
                  src={v.image.src}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={v.slug === 'bookshop'}
                />
              ) : (
                <div className="h-full w-full bg-gray-100" />
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold tracking-tight">
                {v.name}{' '}
                <span className="ml-2 align-middle badge">{v.kind}</span>
              </h3>
              <p className="mt-2 text-sm text-gray-700">{v.blurb}</p>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm text-gray-700">
                {v.highlights.map((h) => (
                  <li key={h}>
                    <span aria-hidden="true" className="mr-1">✓</span>
                    {h}
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

function Accessibility() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="access-title">Accessibility</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Good to know</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ACCESS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Things to watch</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Busy pinch-points near entrances and popular cafés at weekends.</li>
            <li>Some exterior streets have cobbles or uneven slabs.</li>
            <li>Lift access routes may change during events — follow signage.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function PhotoSpots() {
  return (
    <section id="photos" aria-labelledby="photos-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="photos-title">Photo spots</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Classic chimney shot</h3>
            <p className="mt-2 text-gray-700">
              From the canal towpath near Victoria Road bridge. Late afternoon light works well; try
              a reflection if the water is still.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Park & river views</h3>
            <p className="mt-2 text-gray-700">
              Cross to <Link className="underline underline-offset-4" href="/roberts-park">Roberts Park</Link> for
              long perspectives of the Mill and the chimney over the Aire.
            </p>
          </div>
        </div>
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
            <h2 className="text-2xl font-bold md:text-3xl">Make a full Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              From the Mill it’s a few minutes to the canal and the park. Pick a walk, check what’s on
              and decide where to eat — we have it covered.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/walks" className="btn btn-primary">Walks from Saltaire</Link>
              <Link href="/food-drink" className="btn btn-outline">Eat & drink</Link>
              <Link href="/events" className="btn btn-ghost">What’s on</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/salts-mill.png"
              alt="Canal and towpath near Salts Mill at golden hour"
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

  const attraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Salts Mill',
    description:
      'Galleries, independent bookshops, design stores and cafés inside a landmark Victorian mill in Saltaire, West Yorkshire.',
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      addressCountry: 'GB',
    },
    url: `${base}/salts-mill`,
    image: '/images/salts-mill.png',
  }

  const venues = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: VENUES.length,
    itemListElement: VENUES.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: v.name,
      url: `${base}/salts-mill#${v.slug}`,
      description: `${v.kind}. ${v.blurb}`,
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Salts Mill — what to see & where to eat',
    url: `${base}/salts-mill`,
    description:
      'Local guide to Salts Mill in Saltaire: Hockney art, bookshops, cafés, planning tips, accessibility, photo spots and nearby walks.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Salts Mill', item: `${base}/salts-mill` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attraction) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venues) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function SaltsMillPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <Highlights />
      <Planning />
      <Venues />
      <Accessibility />
      <PhotoSpots />
      <FAQ />
  <RelatedLinks exclude={['/salts-mill']} title="Related Saltaire guides" />
      <CTA />
      <JsonLd />
    </>
  )
}
