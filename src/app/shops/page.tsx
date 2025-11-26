// src/app/shops/page.tsx
// Saltaire Shops — cornerstone v2 (server only / static, aligned to src/content/shops.ts)
// - Uses SHOPS with fields: area, summary, whatToBuy[], bestTime, accessibility, website/instagram/map
// - Groups by area (Salts Mill, Victoria Road, Bingley Road, Saltaire Road, Dockfield)
// - Strong internal linking + JSON-LD (ItemList of LocalBusiness/Store)
// - No client interactivity (excellent CWV)

// IMPORTANT: This page expects data from src/content/shops.ts exporting:
//   export type Shop = {...}; export const SHOPS: Shop[]; export default SHOPS;

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { site } from '@/config/site'
import type { Shop } from '@/content/shops'
import SHOPS from '@/content/shops'

// ---------- Static settings (SSG) ----------
export const dynamic = 'error'

// ---------- Metadata ----------
export const metadata: Metadata = {
  title: 'Shops in Saltaire — best places to buy books, gifts, homeware & local beer (2025)',
  description:
    'Hand-picked shops in and around Saltaire: Salts Mill book/gift/home stores, Victoria Road independents, Bingley Road essentials, craft studios and Saltaire Brewery taproom. Practical notes: what to buy, best times, and accessibility.',
  alternates: { canonical: `${site.url}/shops` },
  openGraph: {
    title: 'Shops in Saltaire — practical local directory',
    description:
      'Where locals actually shop: books/posters, design gifts, eco refills, yarn & craft, pottery painting, wines and the brewery taproom. With accessibility notes and best time tips.',
    url: `${site.url}/shops`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

// ---------- Helpers ----------
type AreaID = Shop['area']
type Group = { id: AreaID; label: string; blurb: string }

const GROUPS: Group[] = [
  {
    id: 'Salts Mill',
    label: 'Salts Mill',
    blurb:
      'A destination in its own right — book & poster shop, design/homeware and specialist music instruments.',
  },
  {
    id: 'Victoria Road',
    label: 'Victoria Road',
    blurb:
      'Independent high-street vibe beside the UNESCO village core: gifts, refill shop, makers.',
  },
  {
    id: 'Bingley Road',
    label: 'Bingley Road',
    blurb:
      'Useful neighbourhood parade with family craft studio, gifts and services.',
  },
  {
    id: 'Saltaire Road',
    label: 'Saltaire Road',
    blurb:
      'Connector between the village and Shipley — yarn & haberdashery workshops and more.',
  },
  {
    id: 'Dockfield',
    label: 'Dockfield',
    blurb:
      'Riverside industrial heritage area: Saltaire Brewery’s taproom & shop.',
  },
]

// Minor utility for external links
function ExtLink({
  href,
  children,
  className,
}: {
  href?: string
  children: React.ReactNode
  className?: string
}) {
  if (!href) return null
  return (
    <a
      href={href}
      className={className ?? 'underline underline-offset-4'}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

// ---------- UI primitives ----------
function SectionHeading({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset"
    >
      {children}
    </h2>
  )
}

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 py-3 text-sm text-gray-600"
    >
      <ol className="breadcrumbs">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-black"
          >
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Shops
        </li>
      </ol>
    </nav>
  )
}

// ---------- Page sections ----------
function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Shops in Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Hand-picked independent shops and useful stops around the model
            village — from the famous Salts Mill book & poster store to
            design-led gifts, eco refills, yarn & craft, pottery painting and
            the Saltaire Brewery taproom. We include what to buy, the best times
            to go and accessibility notes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/food-drink" className="btn btn-primary">
              Cafés & pubs nearby
            </Link>
            <Link href="/salts-mill" className="btn btn-outline">
              Salts Mill guide
            </Link>
            <Link href="/parking" className="btn btn-ghost">
              Parking
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local & unbiased</li>
            <li className="badge">Accessibility notes</li>
            <li className="badge">Updated regularly</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/salts-mill.png"
            alt="Bookshop shelves and gifts on a table"
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
  return (
    <aside className="container mx-auto px-4">
      <nav
        aria-label="On this page"
        className="mt-6 rounded-xl border border-gray-200 bg-white p-4"
      >
        <div className="text-sm font-semibold text-gray-800">Areas</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {GROUPS.map((g) => (
            <li key={g.id}>
              <a
                href={`#group-${g.id.replace(/\s+/g, '-').toLowerCase()}`}
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                {g.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function ShopCard({ s }: { s: Shop }) {
  return (
    <article className="card card-hover">
      <div className="card-body">
        <header className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold">{s.name}</h3>
          <span className="badge">{s.area}</span>
        </header>
        <p className="mt-2 text-gray-700">{s.summary}</p>
        {!!s.whatToBuy?.length && (
          <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-gray-700 sm:grid-cols-2">
            {s.whatToBuy.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        )}
        <div className="mt-3 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
          <p>
            <strong>Best time:</strong> {s.bestTime}
          </p>
          <p>
            <strong>Accessibility:</strong> {s.accessibility}
          </p>
          {s.address && (
            <p className="sm:col-span-2">
              <strong>Address:</strong> {s.address}
            </p>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {s.website && (
            <ExtLink href={s.website} className="btn btn-outline btn-sm">
              Website
            </ExtLink>
          )}
          {s.instagram && (
            <ExtLink href={s.instagram} className="btn btn-ghost btn-sm">
              Instagram
            </ExtLink>
          )}
          {s.map && (
            <ExtLink href={s.map} className="btn btn-muted btn-sm">
              Map
            </ExtLink>
          )}
        </div>
      </div>
    </article>
  )
}

function Directory() {
  // Sort shops alpha inside each area for stable UX
  const sorted = [...SHOPS].sort((a, b) =>
    a.name.localeCompare(b.name, 'en'),
  )

  return (
    <section
      aria-labelledby="directory-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="directory-title">The shops</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We focus on places you can actually buy things in/around the village.
        Opening times vary — check links before a special trip.
      </p>

      {GROUPS.map((g) => {
        const items = sorted.filter((s) => s.area === g.id)
        if (!items.length) return null

        const anchor = `group-${g.id.replace(/\s+/g, '-').toLowerCase()}`

        return (
          <section
            key={g.id}
            id={anchor}
            aria-labelledby={`h-${g.id}`}
            className="mt-8"
          >
            <h3
              id={`h-${g.id}`}
              className="text-xl font-semibold tracking-tight"
            >
              {g.label}
            </h3>
            <p className="mt-1 text-gray-700">{g.blurb}</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <ShopCard key={s.slug} s={s} />
              ))}
            </div>
          </section>
        )
      })}
    </section>
  )
}

function NearbyTips() {
  return (
    <section
      aria-labelledby="tips-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <h2 id="tips-title" className="text-2xl font-bold md:text-3xl">
          Make a day of it
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="callout">
            <h3 className="text-lg font-semibold">Pair with Salts Mill</h3>
            <p className="mt-2 text-gray-700">
              The book & poster shop and The Home are inside Salts Mill. Add a
              coffee stop and a quick look at the Hockney galleries.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href="/salts-mill" className="btn btn-primary btn-sm">
                Salts Mill guide
              </Link>
              <Link href="/parking" className="btn btn-outline btn-sm">
                Parking
              </Link>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Walk + shop loop</h3>
              <p className="mt-2 text-gray-700">
                Start at Salts Mill, browse, then stroll up Victoria Road for
                independents and over to Roberts Park for a riverside break.
              </p>
              <div className="mt-3">
                <Link href="/walks" className="btn btn-ghost btn-sm">
                  Best walks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- JSON-LD ----------
function JsonLd() {
  const base = site.url

  // ItemList of LocalBusiness entries with the info we have
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: SHOPS.length,
    itemListElement: SHOPS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${base}/shops#${s.slug}`,
      item: {
        '@type': 'LocalBusiness',
        name: s.name,
        areaServed: 'Saltaire',
        address: {
          '@type': 'PostalAddress',
          streetAddress: s.address,
          addressLocality: 'Saltaire',
          addressRegion: 'West Yorkshire',
          addressCountry: 'GB',
        },
        url: s.website ?? undefined,
        sameAs: s.instagram ? [s.instagram] : undefined,
        description: s.summary,
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Shops in Saltaire',
    url: `${base}/shops`,
    description:
      'Independent shops and useful stops in Saltaire with practical notes on what to buy, best time to visit and accessibility.',
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  )
}

// ---------- Page ----------
export default function ShopsPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <Directory />
      <NearbyTips />
      <section
        id="faqs"
        aria-labelledby="shops-faq-title"
        className="container mx-auto max-w-5xl px-4 pb-16"
      >
        <h2
          id="shops-faq-title"
          className="mb-4 text-2xl font-bold tracking-tight md:text-3xl"
        >
          Shops in Saltaire – quick answers
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-gray-800">
          <div>
            <h3 className="font-semibold">
              What time do most Saltaire shops open and close?
            </h3>
            <p>
              Independent shops typically open around 10am and close between
              4–5.30pm, with shorter hours on Sundays. Always check individual
              listings for exact opening times, especially in winter.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Are Saltaire shops open every day?
            </h3>
            <p>
              Many are open Wednesday–Sunday only. Mondays and Tuesdays can be
              very quiet, so if you&apos;re planning a big browse, aim for
              Friday–Sunday.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Can I bring my dog into Saltaire shops?
            </h3>
            <p>
              A good number of shops are dog friendly, but it&apos;s not
              universal. Look for signs on the door or ask staff when you
              arrive. Our listings flag especially dog-welcoming spots.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Do Saltaire shops take card payments?
            </h3>
            <p>
              Almost all take cards and contactless, but a few very small
              traders may be cash-only for low-value items. Carrying a little
              cash is still handy for markets and pop-ups.
            </p>
          </div>
        </div>
      </section>
      <JsonLd />
    </>
  )
}
