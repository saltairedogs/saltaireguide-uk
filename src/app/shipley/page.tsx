// src/app/shipley/page.tsx
// Shipley hub — saltaireguide.uk/shipley
// Simple static hub for Shipley centre & station
// - No client components (fast, CWV-friendly)
// - Sections: intro, at a glance, getting here, around the centre, cafés & pubs, walk Shipley ↔ Saltaire, FAQ
// - JSON-LD: WebPage + Place + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Shipley centre & station — trains, buses, cafés and walk to Saltaire',
  description:
    'How to use Shipley as a base for visiting Saltaire: trains and buses, walking route between Shipley and Saltaire, cafés near the station and practical tips.',
  alternates: { canonical: `${site.url}/shipley` },
  openGraph: {
    title: 'Shipley centre & station — Saltaire & Shipley Guide',
    description:
      'Trains, buses, market square and cafés in Shipley, plus an easy canal walk to Saltaire.',
    url: `${site.url}/shipley`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------ Helpers ----------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* ------------------------------ Components -------------------------------- */

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
        <li aria-current="page" className="text-gray-800">
          Shipley
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Shipley centre &amp; station
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Shipley is the small town that sits just above Saltaire. It has the main train and
            bus connections, a busy junction station and a compact centre that&apos;s a few
            minutes&apos; walk from the Leeds–Liverpool Canal and Saltaire.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Trains to Leeds, Bradford &amp; Skipton</li>
            <li className="badge">10–20 mins walk to Saltaire</li>
            <li className="badge">Cafés &amp; pubs near the station</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shipley/station" className="btn btn-primary">
              Station basics
            </Link>
            <Link href="/walks/shipley-saltaire" className="btn btn-outline">
              Walk to Saltaire
            </Link>
            <Link href="/food-drink/coffee" className="btn btn-ghost">
              Coffee nearby
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Canal and stone buildings between Shipley and Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function AtAGlance() {
  const items = [
    { label: 'Trains', value: 'Leeds, Bradford Forster Sq & Interchange, Skipton & Carlisle line' },
    { label: 'Walk to Saltaire', value: 'Around 15–20 minutes along the canal or main road' },
    { label: 'Buses', value: 'Frequent services along the A657 / Otley Road & Saltaire Road' },
    { label: 'Parking', value: 'Mixed on-street & small car parks – see Parking guide' },
    { label: 'Good for', value: 'Meeting point, quick coffee, supermarket stop, onward travel' },
  ]

  return (
    <section
      id="at-a-glance"
      aria-labelledby="glance-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="glance-title">Shipley at a glance</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Think of Shipley as the transport hub and everyday town that pairs with Saltaire&apos;s
        Victorian model village. Lots of visitors arrive at Shipley station, grab a coffee, then
        walk or bus down to Saltaire.
      </p>
      <div className="mt-4 grid gap-4 rounded-2xl border border-gray-200 bg-white p-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3 text-sm text-gray-700">
            <div className="mt-1 h-2 w-2 rounded-full bg-gray-400" aria-hidden="true" />
            <div>
              <div className="font-semibold">{item.label}</div>
              <div className="mt-0.5 text-gray-700">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        For full parking details, see the{' '}
        <Link href="/parking" className="underline underline-offset-4">
          Saltaire parking guide
        </Link>
        .
      </p>
    </section>
  )
}

function GettingHere() {
  return (
    <section
      id="getting-here"
      aria-labelledby="getting-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="getting-title">Getting to Shipley</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">By train</h3>
            <p className="mt-2 text-gray-700">
              Shipley has a busy junction station with direct services from Leeds, Bradford Forster
              Square, Bradford Interchange (via short walk/connection) and towards Skipton, Ilkley
              and Carlisle. From the station it&apos;s around 15–20 minutes&apos; walk to Saltaire
              along the canal or main road.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Our upcoming{' '}
              <Link href="/shipley/station" className="underline underline-offset-4">
                Shipley station guide
              </Link>{' '}
              will cover platforms, step-free access and toilets in more detail.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">By bus or car</h3>
            <p className="mt-2 text-gray-700">
              Buses run along Saltaire Road and Otley Road between Shipley, Saltaire, Bradford and
              Bingley. If you&apos;re driving, many visitors prefer to park near Saltaire itself and
              walk up into Shipley when needed.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              See{' '}
              <Link href="/plan/getting-here" className="underline underline-offset-4">
                Plan your visit
              </Link>{' '}
              and the{' '}
              <Link href="/parking" className="underline underline-offset-4">
                parking guide
              </Link>{' '}
              for current options and any height limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AroundCentre() {
  return (
    <section
      id="around"
      aria-labelledby="around-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="around-title">Around the centre</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Market square &amp; everyday shops</h3>
          <p className="mt-2 text-gray-700">
            Shipley has supermarkets, pharmacies, takeaways and a small market area – useful if you
            need snacks, cash or last-minute bits before heading down to Saltaire or into the
            valley for a walk.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            It&apos;s not a polished tourist centre, but it&apos;s practical. Think of it as your
            supply stop.
          </p>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Cafés &amp; pubs</h3>
          <p className="mt-2 text-gray-700">
            There are a handful of cafés and pubs within a short walk of the station and market
            square. Over time we&apos;ll highlight the ones that work well as meet-up spots or quick
            pre/ post-train coffees.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            For now, browse our{' '}
            <Link href="/food-drink/coffee" className="underline underline-offset-4">
              coffee &amp; cafés guide
            </Link>{' '}
            and{' '}
            <Link href="/food-drink/pubs" className="underline underline-offset-4">
              pubs list
            </Link>{' '}
            – we&apos;ll tag places that are closer to Shipley as we add them.
          </p>
        </div>
      </div>
    </section>
  )
}

function WalkToSaltaire() {
  return (
    <section
      id="walk"
      aria-labelledby="walk-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="walk-title">Walking between Shipley &amp; Saltaire</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Canal towpath route</h3>
            <p className="mt-2 text-gray-700">
              The nicest way to move between Shipley and Saltaire is along the Leeds–Liverpool
              Canal. From the town centre it&apos;s a short drop down to the towpath, then a mostly
              flat walk past mills and locks into the village.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Our upcoming{' '}
              <Link href="/walks/shipley-saltaire" className="underline underline-offset-4">
                Shipley ↔ Saltaire walk
              </Link>{' '}
              will include simple step-by-step directions, GPX download and accessibility notes.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Main road route</h3>
            <p className="mt-2 text-gray-700">
              If you prefer street lighting or direct access to shops, you can walk along Saltaire
              Road / Bingley Road. It&apos;s less scenic but straightforward and better if the
              towpath is muddy or flooded.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              For longer ideas starting or ending in Shipley, see{' '}
              <Link href="/walks" className="underline underline-offset-4">
                all walks
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Is Shipley worth a visit on its own?',
      a: 'Shipley is more of an everyday town and transport hub than a “day out” in itself. Most visitors pair it with Saltaire – arriving by train, grabbing supplies or a coffee in Shipley, then heading down to the village and Roberts Park.',
    },
    {
      q: 'How long does it take to walk between Shipley and Saltaire?',
      a: 'Roughly 15–20 minutes at a relaxed pace, either along the canal towpath or via Saltaire Road. Add extra time if you’re stopping for photos or travelling with kids.',
    },
    {
      q: 'Is the route between Shipley and Saltaire step-free?',
      a: 'It can be. There are step-free options via the towpath and main roads, but surfaces and gradients vary and can be rough or muddy in places. Our dedicated walk guide will map the smoothest paths when it’s live.',
    },
  ]

  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {it.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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

/* ------------------------------- JSON-LD ---------------------------------- */

function JsonLd() {
  const base = site.url

  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Shipley centre & station',
    url: `${base}/shipley`,
    description:
      'How to use Shipley as a base for visiting Saltaire: trains and buses, walking route between Shipley and Saltaire, cafés near the station and practical tips.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const place = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Shipley',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Shipley',
      addressRegion: 'West Yorkshire',
      addressCountry: 'GB',
    },
    url: `${base}/shipley`,
    description:
      'A small town in West Yorkshire, England, just north of Saltaire, with a junction railway station and buses serving the Aire Valley.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Shipley', item: `${base}/shipley` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ShipleyPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <AtAGlance />
      <GettingHere />
      <AroundCentre />
      <WalkToSaltaire />
      <FAQ />
      <JsonLd />
    </>
  )
}
