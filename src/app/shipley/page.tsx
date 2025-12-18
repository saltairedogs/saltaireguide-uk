// src/app/shipley/page.tsx
// Shipley hub — saltaireguide.uk/shipley
// Upgraded: Shipley-first positioning + stronger internal linking + business profiles CTA
// - No client components (fast, CWV-friendly)
// - Sections: intro, quick links, at a glance, things to do, getting here, around the centre,
//            Shipley ↔ Saltaire walk, business profiles, FAQ
// - JSON-LD: WebPage + Place + BreadcrumbList + ItemList + FAQPage

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

const UPDATED = '2025-12-18'
const PATH = '/shipley'

export const metadata: Metadata = {
  title: 'Visit Shipley (BD18) — station, town centre, walks, food & local tips',
  description:
    'A practical local guide to Shipley (BD18): station basics, town centre, easy walks, cafés, and how to walk between Shipley and Saltaire along the canal.',
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: 'Visit Shipley (BD18) — station, walks, cafés & local tips',
    description:
      'Shipley guide: trains, town centre essentials, easy walks, cafés, and the canal route to Saltaire.',
    url: `${site.url}${PATH}`,
    type: 'website',
    images: [
      {
        url: `${site.url}/images/walks-from-saltaire.png`,
        width: 2400,
        height: 1800,
        alt: 'Canal and stone buildings between Shipley and Saltaire',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
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
          <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-600">
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Updated: {UPDATED}</span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Shipley • BD18</span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1">Canal walks • station hub</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Visit Shipley: centre &amp; station guide
          </h1>

          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Shipley is the practical, everyday town next to Saltaire — and the main transport hub for the area.
            If you’re arriving by train, meeting someone, grabbing supplies, or starting a canal walk, this is the
            page you want.
          </p>

          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Trains to Leeds, Bradford &amp; Skipton</li>
            <li className="badge">Easy canal route to Saltaire</li>
            <li className="badge">Quick coffee + food nearby</li>
          </ul>

          {/* Neutral buttons (no blue backgrounds) */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#quick-links"
              className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Start here ↓
            </a>
            <Link
              href="/shipley/station"
              className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Shipley station basics →
            </Link>
            <Link
              href="/walks/shipley-saltaire"
              className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Walk Shipley ↔ Saltaire →
            </Link>
          </div>

          <p className="mt-3 text-xs text-gray-600">
            Shipley is not “touristy” — it’s useful. The goal: make your trip smoother and your route obvious.
          </p>
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

function QuickLinks() {
  const links = [
    { label: 'Shipley at a glance', href: '#at-a-glance' },
    { label: 'Things to do (simple ideas)', href: '#things-to-do' },
    { label: 'Getting here (train/bus/car)', href: '#getting-here' },
    { label: 'Around the centre', href: '#around' },
    { label: 'Walk Shipley ↔ Saltaire', href: '#walk' },
    { label: 'Business profiles', href: '#business-profiles' },
    { label: 'FAQ', href: '#faqs' },
  ] as const

  return (
    <section id="quick-links" className="container mx-auto max-w-7xl px-4 py-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-3 text-sm font-semibold text-gray-800">Quick links</div>
        <div className="flex flex-wrap gap-2 text-sm">
          {links.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-medium text-gray-800 hover:bg-white"
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function AtAGlance() {
  const items = [
    { label: 'Trains', value: 'Leeds • Bradford Forster Sq • Skipton/Ilkley lines (junction station)' },
    { label: 'Walk to Saltaire', value: 'About 15–20 mins (canal towpath or main road)' },
    { label: 'Buses', value: 'Frequent routes up/down the Aire Valley corridor' },
    { label: 'Best for', value: 'Arriving by train, meet-ups, quick coffee, supplies, starting walks' },
    { label: 'Vibe', value: 'Everyday town centre (practical, not polished)' },
  ]

  return (
    <section id="at-a-glance" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="at-a-glance-title">Shipley at a glance</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Shipley and Saltaire work as a pair. Many people arrive at Shipley, do the practical bits (train, coffee, supplies),
        then walk down to the canal and into Saltaire.
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
        If you’re driving, you might also want the wider{' '}
        <Link href="/parking" className="underline underline-offset-4">
          parking guide
        </Link>{' '}
        (covers nearby options and typical visitor patterns).
      </p>
    </section>
  )
}

function ThingsToDo() {
  const ideas = [
    {
      title: 'Do the canal walk (Shipley → Saltaire)',
      desc: 'The easiest “good decision” here. Flat, calm, and feels like you escaped without needing a plan.',
      href: '/walks/shipley-saltaire',
    },
    {
      title: 'Use Shipley station as your meet-up point',
      desc: 'If you’re coordinating with friends, Shipley is the simplest hub before you head anywhere else.',
      href: '/shipley/station',
    },
    {
      title: 'Quick coffee before your walk or train',
      desc: 'Shipley is practical: grab something fast, then move. (We’ll keep tagging closer-to-Shipley spots.)',
      href: '/food-drink/coffee',
    },
    {
      title: 'Start a longer Aire Valley day',
      desc: 'Shipley is a good base if you’re chaining transport + walking + food across the valley.',
      href: '/walks',
    },
  ] as const

  return (
    <section id="things-to-do" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="things-to-do-title">Simple things to do in Shipley</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        This isn’t a “10 hidden gems” page. It’s the real stuff people actually do: arrive, orient, get moving, enjoy the walk.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {ideas.map((i) => (
          <div key={i.title} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-gray-700">{i.desc}</p>
              <div className="mt-3">
                <Link href={i.href} className="underline underline-offset-4">
                  Open →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <div className="text-sm font-semibold text-gray-800">Local tip</div>
        <p className="mt-1 text-sm text-gray-700">
          If you’re stressed, do the smallest version: 10 minutes on the towpath. Your brain treats it like a reset,
          even if your calendar says it was “nothing”.
        </p>
      </div>
    </section>
  )
}

function GettingHere() {
  return (
    <section id="getting-here" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="getting-here-title">Getting to Shipley</SectionHeading>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">By train</h3>
            <p className="mt-2 text-gray-700">
              Shipley is a junction station with direct services to Leeds, Bradford Forster Square, and up the Aire Valley towards
              Ilkley/Skipton lines. From the station it’s a straightforward 15–20 minute walk to Saltaire depending on route and pace.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              See the{' '}
              <Link href="/shipley/station" className="underline underline-offset-4">
                Shipley station guide
              </Link>{' '}
              for step-free notes and basics.
            </p>
          </div>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">By bus or car</h3>
            <p className="mt-2 text-gray-700">
              Buses run up/down the corridor between Shipley, Saltaire and nearby towns. If you’re driving, you’ll usually be choosing
              between “park nearer the station for transport” vs “park nearer Saltaire for the village”.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Use{' '}
              <Link href="/plan/getting-here" className="underline underline-offset-4">
                Plan your visit
              </Link>{' '}
              and the{' '}
              <Link href="/parking" className="underline underline-offset-4">
                parking guide
              </Link>{' '}
              for the wider area.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AroundCentre() {
  return (
    <section id="around" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="around-title">Around the centre</SectionHeading>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Town centre: useful, not fancy</h3>
          <p className="mt-2 text-gray-700">
            Shipley is where you do the practical bits: supermarkets, pharmacies, cash, quick food, and meeting points.
            If you’re visiting Saltaire, Shipley is often the “before and after” town.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            That’s a feature, not a flaw: it makes your day easier.
          </p>
        </div>

        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Cafés &amp; pubs</h3>
          <p className="mt-2 text-gray-700">
            There are solid options within walking distance of the station and centre. We’ll keep tagging the most “good meet-up”
            spots as we build more Shipley-specific business pages.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Browse our{' '}
            <Link href="/food-drink/coffee" className="underline underline-offset-4">
              coffee &amp; cafés guide
            </Link>{' '}
            and{' '}
            <Link href="/food-drink/pubs" className="underline underline-offset-4">
              pubs list
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function WalkToSaltaire() {
  return (
    <section id="walk" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="walk-title">Walking between Shipley &amp; Saltaire</SectionHeading>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Canal towpath route</h3>
            <p className="mt-2 text-gray-700">
              The nicest way between Shipley and Saltaire is the Leeds–Liverpool Canal towpath: mostly flat, calmer than roads,
              and it feels like you’ve “left the day” even though you’re still central.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Use the{' '}
              <Link href="/walks/shipley-saltaire" className="underline underline-offset-4">
                Shipley ↔ Saltaire walk guide
              </Link>{' '}
              for step-by-step directions (and GPX when added).
            </p>
          </div>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Main road route</h3>
            <p className="mt-2 text-gray-700">
              Prefer street lighting and direct access to shops? The main road route is straightforward but less scenic.
              It’s useful if the towpath is muddy, flooded, or you want the simplest “just get there” option.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              For more start points, see{' '}
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

function BusinessProfiles() {
  return (
    <section id="business-profiles" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="business-profiles-title">Shipley business pages (free value → trust)</SectionHeading>

      <p className="mt-2 max-w-prose text-gray-700">
        We’re starting factual business pages so locals and visitors can quickly answer: “where is it, how do I get there,
        what should I know, is it dog-friendly, is it accessible, what’s nearby?”
      </p>

      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <div className="text-sm font-semibold text-gray-800">What a business page includes</div>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Location + how to get there (train/walk/parking notes)</li>
          <li>What it is (plain English, no fluff)</li>
          <li>Accessibility and dog-friendly notes (if applicable)</li>
          <li>Quick FAQs people actually ask</li>
          <li>“Claim / update this page” for owners</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Request / claim a Shipley business page →
          </Link>
          <Link
            href="/local-services"
            className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Browse local services →
          </Link>
        </div>

        <p className="mt-3 text-xs text-gray-600">
          We keep these pages clean: no fake reviews, no “best in Shipley” claims — just accurate info + updates.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Is Shipley worth a visit on its own?',
      a: 'Shipley is more of an everyday town and transport hub than a “tourist day out”. Most visitors pair it with Saltaire — arriving by train, grabbing supplies or a coffee in Shipley, then walking down to the village and canal.',
    },
    {
      q: 'How long does it take to walk between Shipley and Saltaire?',
      a: 'Roughly 15–20 minutes at a relaxed pace, either along the canal towpath or via the main road. Add time if you’re stopping for photos or travelling with kids.',
    },
    {
      q: 'Is the route between Shipley and Saltaire step-free?',
      a: 'It can be, depending on your exact approach. There are step-free options via the towpath and main roads, but surfaces can be rough or muddy in places. Our walk guide is where we’ll keep the most practical route notes.',
    },
  ]

  return (
    <section id="faqs" className="container mx-auto max-w-7xl px-4 py-10">
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
    name: 'Visit Shipley (BD18) — centre & station guide',
    url: `${base}${PATH}`,
    description: metadata.description,
    inLanguage: 'en-GB',
    dateModified: UPDATED,
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
    url: `${base}${PATH}`,
    description:
      'Shipley is a town in West Yorkshire near Saltaire, with a junction railway station and easy access to canal walks and the Aire Valley.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Shipley', item: `${base}${PATH}` },
    ],
  }

  // Only include links that exist today (avoid broken internal linking)
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Shipley guide links',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Shipley station', url: `${base}/shipley/station` },
      { '@type': 'ListItem', position: 2, name: 'Shipley ↔ Saltaire walk', url: `${base}/walks/shipley-saltaire` },
      { '@type': 'ListItem', position: 3, name: 'Coffee & cafés', url: `${base}/food-drink/coffee` },
      { '@type': 'ListItem', position: 4, name: 'Pubs', url: `${base}/food-drink/pubs` },
      { '@type': 'ListItem', position: 5, name: 'Walks & routes', url: `${base}/walks` },
      { '@type': 'ListItem', position: 6, name: 'Visit Saltaire', url: `${base}/visit-saltaire` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ShipleyPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <QuickLinks />
      <AtAGlance />
      <ThingsToDo />
      <GettingHere />
      <AroundCentre />
      <WalkToSaltaire />
      <BusinessProfiles />
      <FAQ />
      <JsonLd />
    </>
  )
}
