// src/app/walks/page.tsx
// Saltaire Walks — cornerstone page (static, CWV-friendly)
// - No client components; pure server-render
// - Cards + comparison table + step-free/dog-friendly flags
// - JSON-LD: WebPage + BreadcrumbList + ItemList of HikingTrail + FAQPage
// - GPX links are placeholders you can drop files into later (/public/gpx/*)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'
import RelatedLinks from '@/components/RelatedLinks'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Best walks from Saltaire: canal towpath, Shipley Glen, Five-Rise & family routes',
  description:
    'The best walks from Saltaire: canal towpath to Bingley Five-Rise, Shipley Glen loop, step-free river loop in Roberts Park, and Hirst Wood. Distances, maps, GPX and accessibility.',
  alternates: { canonical: `${site.url}/walks` },
  openGraph: {
    title: 'Walks from Saltaire — maps, distances & GPX',
    description:
      'Practical, local walking routes from Saltaire with distances, time, step-free notes and dog-friendly tips.',
    url: `${site.url}/walks`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* -------------------------------- Data model ------------------------------- */

type Walk = {
  slug: string
  title: string
  distanceKm: number
  timeMin: number
  ascentM: number
  grade: 'Easy' | 'Moderate' | 'Family'
  stepFree: boolean
  dogFriendly: boolean
  start: string // short description
  highlights: string[]
  gpx?: string // path in /gpx
  image?: { src: string; alt: string; width: number; height: number }
}

const WALKS: Walk[] = [
  {
    slug: 'five-rise',
    title: 'Towpath to Bingley Five-Rise (out & back)',
    distanceKm: 10.2,
    timeMin: 150,
    ascentM: 60,
    grade: 'Easy',
    stepFree: true,
    dogFriendly: true,
    start: 'From Saltaire station or Salts Mill, pick up the Leeds–Liverpool Canal westbound.',
    highlights: [
      'Level towpath with historic locks',
      'Tea stops along the way',
      'Iconic Five-Rise lock staircase',
    ],
    gpx: '/gpx/saltaire-to-five-rise.gpx',
    image: {
      src: '/images/saltaire-canal.png',
      alt: 'Canal towpath from Saltaire towards Bingley',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'shipley-glen',
    title: 'Shipley Glen & Trench Wood loop',
    distanceKm: 7.4,
    timeMin: 120,
    ascentM: 180,
    grade: 'Moderate',
    stepFree: false,
    dogFriendly: true,
    start:
      'Cross Roberts Park footbridge, climb via the Glen Tramway path, loop through woodland and return via the moor edge.',
    highlights: ['Millstone grit outcrops', 'Woodland trails', 'Wide views back to the village'],
    gpx: '/gpx/shipley-glen-loop.gpx',
    image: {
      src: '/images/walks-from-saltaire.png',
      alt: 'Shipley Glen woodland and moorland trails',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'river-loop-step-free',
    title: 'Roberts Park river loop (step-free)',
    distanceKm: 2.2,
    timeMin: 40,
    ascentM: 25,
    grade: 'Family',
    stepFree: true,
    dogFriendly: true,
    start: 'Start at Half Moon Café; follow the riverside and return via the bandstand and promenade.',
    highlights: ['Playground & café', 'River Aire views', 'Accessible surfaces'],
    gpx: '/gpx/roberts-park-step-free.gpx',
    image: {
      src: '/images/roberts-park.png',
      alt: 'Roberts Park riverside path in Saltaire',
      width: 1200,
      height: 800,
    },
  },
  {
    slug: 'hirst-wood',
    title: 'Hirst Wood & Nature Reserve',
    distanceKm: 5.1,
    timeMin: 90,
    ascentM: 55,
    grade: 'Easy',
    stepFree: false,
    dogFriendly: true,
    start:
      'Pick up the canal westbound, cross to Hirst Lock, loop through the woods and wetland boardwalks.',
    highlights: ['Birdlife & boardwalk', 'Quiet woodland', 'Lock-side views'],
    gpx: '/gpx/hirst-wood-loop.gpx',
    image: {
      src: '/images/walks-from-saltaire.png',
      alt: 'Hirst Wood nature reserve near Saltaire',
      width: 1200,
      height: 800,
    },
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Are the canal walks step-free?',
    a: 'Yes — the towpath between Saltaire and Bingley is mostly level and suitable for prams and wheelchairs, with occasional narrow sections. Mind cyclists and puddles after rain.',
  },
  {
    q: 'Where can I download GPX files?',
    a: 'Each route card includes a GPX link. Save to your device and open in your preferred app (OS Maps, Komoot, etc.).',
  },
  {
    q: 'Are dogs allowed?',
    a: 'Yes on all the routes here. Keep dogs under control near livestock, cyclists and the canal.',
  },
  {
    q: 'What footwear do I need?',
    a: 'Towpath and step-free loop: sturdy trainers are fine. Shipley Glen and Hirst Wood: lightweight boots recommended in winter.',
  },
]

/* -------------------------------- Utilities -------------------------------- */

function fmtKm(n: number) {
  return `${n.toFixed(1)} km`
}
function fmtTime(min: number) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return h ? `${h} hr ${m ? `${m} min` : ''}`.trim() : `${m} min`
}

/* ------------------------------- Components -------------------------------- */

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
          Walks
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Walks from Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Classic routes on the canal, woodland loops and step-free riverside paths. Distances,
            times and GPX files with practical tips from locals.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Step-free options</li>
            <li className="badge">Dog-friendly</li>
            <li className="badge">Maps & GPX</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/saltaire-canal.png"
            alt="Canal walk from Saltaire"
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
    { href: '#routes', label: 'Featured routes' },
    { href: '#compare', label: 'Compare distances' },
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

function WalkCard({ w }: { w: Walk }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <div className="relative h-48 w-full md:h-56">
        {w.image ? (
          <Image
            alt={w.image.alt}
            src={w.image.src}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={w.slug === 'five-rise'}
          />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
        <p className="mt-2 text-sm text-gray-700">{w.start}</p>
        <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
          <li className="badge">{fmtKm(w.distanceKm)}</li>
          <li className="badge">{fmtTime(w.timeMin)}</li>
          <li className="badge">{w.grade}</li>
          <li className="badge">{w.stepFree ? 'Step-free' : 'Some steps'}</li>
          <li className="badge">{w.dogFriendly ? 'Dog-friendly' : 'Dogs: check'}</li>
        </ul>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {w.highlights.map((h) => (
            <li key={h} className="text-sm text-gray-700">
              <span aria-hidden="true" className="mr-1">✓</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={`/walks/${w.slug}`} className="btn btn-primary btn-sm" aria-label={`Read the ${w.title} guide`}>
            Read guide
          </Link>
          <a
            className="btn btn-outline btn-sm"
            href={w.gpx ?? '#'}
            download
            aria-label={`Download GPX for ${w.title}`}
          >
            Download GPX
          </a>
        </div>
      </div>
    </article>
  )
}

function FeaturedRoutes() {
  return (
    <section id="routes" aria-labelledby="routes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="routes-title" className="text-2xl font-bold tracking-tight md:text-3xl">Featured routes</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        These are the most useful, scenic routes from the village. Start directly from Salts Mill or
        Saltaire station; tap any card to read the full guide or grab the GPX.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WALKS.map((w) => (
          <WalkCard key={w.slug} w={w} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  return (
    <section id="compare" aria-labelledby="compare-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="compare-title" className="text-2xl font-bold tracking-tight md:text-3xl">Compare distances & difficulty</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[720px]">
          <thead>
            <tr>
              <th className="w-[28%]">Route</th>
              <th>Distance</th>
              <th>Time</th>
              <th>Ascent</th>
              <th>Grade</th>
              <th>Step-free</th>
              <th>Dog-friendly</th>
            </tr>
          </thead>
          <tbody>
            {WALKS.map((w) => (
              <tr key={w.slug}>
                <td className="font-medium">
                  <a className="underline underline-offset-4 decoration-gray-300 hover:decoration-black" href={`/walks/${w.slug}`}>
                    {w.title}
                  </a>
                </td>
                <td>{fmtKm(w.distanceKm)}</td>
                <td>{fmtTime(w.timeMin)}</td>
                <td>{w.ascentM} m</td>
                <td>{w.grade}</td>
                <td>{w.stepFree ? 'Yes' : 'No'}</td>
                <td>{w.dogFriendly ? 'Yes' : 'Check'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Times are for steady pace with brief photo stops; add margin for families or café breaks.
      </p>
    </section>
  )
}

function LocalTips() {
  return (
    <section id="tips" aria-labelledby="tips-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="tips-title" className="text-2xl font-bold tracking-tight md:text-3xl">Local tips</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Best first walk</h3>
          <p className="mt-2 text-gray-700">
            The towpath to <strong>Five-Rise</strong> is the classic. Turn around at Three-Rise for a shorter day.
          </p>
          <p className="mt-2 text-gray-700">
            For families, try the <strong>Roberts Park step-free loop</strong> with playground and café.
          </p>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">What to watch</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Towpath edges can be slippy after rain; mind bikes.</li>
            <li>Shipley Glen has rocky steps and mud in winter.</li>
            <li>Keep dogs close near livestock and the canal.</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Travelling by car? Read the <Link className="underline underline-offset-4" href="/parking">Parking guide</Link>.
          Coming by train puts you <em>right</em> in the middle of the action.
        </p>
      </div>
    </section>
  )
}

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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: WALKS.length,
    itemListElement: WALKS.map((w, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: w.title,
      url: `${base}/walks/${w.slug}`,
      item: {
        '@type': 'HikingTrail',
        name: w.title,
        trailLength: {
          '@type': 'QuantitativeValue',
          value: w.distanceKm,
          unitCode: 'KMT',
        },
        estimatedDuration: `PT${Math.round(w.timeMin)}M`,
        isAccessibleForFree: true,
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Walks from Saltaire',
    url: `${base}/walks`,
    description:
      'The best walks from Saltaire: canal towpath to Bingley Five-Rise, Shipley Glen, step-free river loop and Hirst Wood. Distances, maps, GPX and accessibility.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Walks', item: `${base}/walks` },
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

export default function WalksPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <FeaturedRoutes />
      <CompareTable />
      <LocalTips />
      <FAQ />
      <RelatedLinks exclude={['/walks']} title="Related Saltaire guides" />
      <JsonLd />
    </>
  )
}
