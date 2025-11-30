// src/app/walks/shipley-saltaire/page.tsx
// Walk: Shipley ↔ Saltaire canal & road options
// - Static, CWV-friendly
// - Sections: overview, essentials, route (canal + road), accessibility, FAQs
// - JSON-LD: WebPage + BreadcrumbList + FAQPage-lite via schema

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Shipley to Saltaire walk — canal towpath & road route',
  description:
    'Easy walk between Shipley and Saltaire via the Leeds–Liverpool Canal or Saltaire Road. Approx 15–20 minutes each way, mostly flat, with tips for families and step-free options.',
  alternates: { canonical: `${site.url}/walks/shipley-saltaire` },
  openGraph: {
    title: 'Shipley ↔ Saltaire walk (towpath & road)',
    description:
      'How to walk between Shipley and Saltaire: simple directions along the canal towpath or main road, with notes on time, surfaces and step-free options.',
    url: `${site.url}/walks/shipley-saltaire`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* ---------------------------- Helpers ------------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* --------------------------- Components ----------------------------------- */

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
        <li>
          <Link href="/walks" className="underline underline-offset-4 hover:text-black">
            Walks
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Shipley ↔ Saltaire
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
            Shipley ↔ Saltaire walk
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A simple link-up walk between Shipley town centre and the model village of Saltaire.
            Follow the Leeds–Liverpool Canal for the scenic option, or use Saltaire Road for a
            quicker, better-lit route when the towpath&apos;s muddy.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">≈ 1.5–3 km depending on start point</li>
            <li className="badge">15–20 mins each way</li>
            <li className="badge">Mostly flat</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shipley" className="btn btn-primary">
              Start from Shipley
            </Link>
            <Link href="/walks" className="btn btn-outline">
              More walks
            </Link>
            <Link href="/plan/accessibility" className="btn btn-ghost">
              Accessibility notes
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Canal towpath between Shipley and Saltaire"
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

function Essentials() {
  const items = [
    { label: 'Distance', value: 'Roughly 1.5–3 km one way, depending on where you start in each town.' },
    { label: 'Time', value: 'Around 15–20 minutes at a relaxed pace; longer with young kids or photo stops.' },
    { label: 'Terrain', value: 'Canal towpath (gravel / compacted earth, some puddles) or pavements along the main road.' },
    { label: 'Grade', value: 'Easy. Essentially flat, with short ramps or inclines at bridges and road crossings.' },
    { label: 'Good for', value: 'Linking trains at Shipley with a visit to Salts Mill, Roberts Park or the canal.' },
  ]
  return (
    <section
      id="essentials"
      aria-labelledby="essentials-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="essentials-title">Essentials</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        This isn&apos;t a big hike, more a handy connector between the transport hub at Shipley and
        the village of Saltaire. You can easily bolt it onto longer canal or valley walks.
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
        For parking, see the{' '}
        <Link href="/parking" className="underline underline-offset-4">
          Saltaire parking guide
        </Link>
        .
      </p>
    </section>
  )
}

function RouteCanal() {
  return (
    <section
      id="canal"
      aria-labelledby="canal-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="canal-title">Route 1: Canal towpath (most scenic)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The canal route is the nicest way to link Shipley and Saltaire. The outline below is
        deliberately simple so it&apos;s easy to follow alongside a map app.
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-700">
        <li>
          From <strong>Shipley station</strong> or the town centre, drop down towards the
          Leeds–Liverpool Canal (signposted in several places). Aim for the towpath on the same side
          as Saltaire.
        </li>
        <li>
          Once on the towpath, turn so that you&apos;re heading in the direction of{' '}
          <strong>Saltaire / Bingley</strong>. You&apos;ll pass a mix of old mills, housing and
          moorings.
        </li>
        <li>
          Stay on the towpath as it curves gently. You&apos;ll cross under or past a few road
          bridges; keep following the firmest obvious path.
        </li>
        <li>
          As you approach <strong>Saltaire</strong>, look out for the tall Salts Mill chimney on
          your right. There are several access points up into the village and towards the station,
          Salts Mill and Roberts Park.
        </li>
        <li>
          For Roberts Park, stay on the towpath until you reach the bridge by Half Moon Café, then
          cross the river into the park.
        </li>
      </ol>
      <p className="mt-3 text-sm text-gray-700">
        This is a there-and-back route: you can simply reverse it to return to Shipley. In winter,
        sections can be muddy and puddled; sturdy shoes help.
      </p>
    </section>
  )
}

function RouteRoad() {
  return (
    <section
      id="road"
      aria-labelledby="road-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="road-title">Route 2: Saltaire Road / main road</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        If the canal is muddy, icy or dark, you might prefer the main road. It&apos;s less pretty
        but has pavements, lighting and more direct access to shops and buses.
      </p>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-700">
        <li>
          From <strong>Shipley centre or station</strong>, head towards Saltaire Road / the A657.
        </li>
        <li>
          Follow Saltaire Road downhill, keeping to the pavements. You&apos;ll pass a mix of houses,
          small shops and side streets.
        </li>
        <li>
          Continue until you reach the crossroads and traffic lights at the edge of{' '}
          <strong>Saltaire village</strong>. From here you can turn towards Salts Mill and the
          station, or continue straight for Roberts Park.
        </li>
      </ol>
      <p className="mt-3 text-sm text-gray-700">
        Traffic can be busy at peak times, but there are controlled crossings at key junctions.
        This route is also handy for catching buses between Shipley, Saltaire and Bradford / Bingley.
      </p>
    </section>
  )
}

function Accessibility() {
  return (
    <section
      id="accessibility"
      aria-labelledby="access-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="access-title">Accessibility notes</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Towpath</h3>
          <p className="mt-2 text-gray-700">
            Surfaces vary from compacted gravel to rougher patches with puddles and occasional tree
            roots. Gradients are gentle but there are short ramps at bridges and access points.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            In dry summer conditions some wheelchair users and sturdy prams may find sections
            manageable; after rain it can be muddy and uneven. If in doubt, the road route is more
            predictable.
          </p>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Road route</h3>
          <p className="mt-2 text-gray-700">
            Pavements are generally paved and step-free, though dropped kerbs and surface quality
            can vary. There are some cambers and gradients, but nothing severe for most people.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            For more detail on step-free access around Saltaire, see the{' '}
            <Link href="/plan/accessibility" className="underline underline-offset-4">
              accessibility guide
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Is the walk waymarked?',
      a: 'No – it follows existing towpath and pavements rather than a branded trail. Using a phone map alongside these notes makes it very easy to follow.',
    },
    {
      q: 'Can I do it with a buggy or wheelchair?',
      a: 'Many people use the main road route with buggies and some wheelchairs. The towpath can work in dry conditions for sturdy wheels but is more variable. Choose what feels safest for you on the day.',
    },
    {
      q: 'Are there cafés or toilets on the route?',
      a: 'Shipley and Saltaire both have cafés and loos nearby, but there are no facilities directly on the towpath. Plan to use facilities at either end.',
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

/* ----------------------------- JSON-LD ------------------------------------ */

function JsonLd() {
  const base = site.url

  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Shipley to Saltaire walk',
    url: `${base}/walks/shipley-saltaire`,
    description:
      'Easy walk between Shipley and Saltaire via the Leeds–Liverpool Canal or Saltaire Road, with notes on time, terrain and accessibility.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'Walks', item: `${base}/walks` },
        { '@type': 'ListItem', position: 3, name: 'Shipley ↔ Saltaire', item: `${base}/walks/shipley-saltaire` },
      ],
    },
  }

  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
}

/* -------------------------------- Page ------------------------------------ */

export default function ShipleySaltaireWalkPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <Essentials />
      <RouteCanal />
      <RouteRoad />
      <Accessibility />
      <FAQ />
      <JsonLd />
    </>
  )
}
