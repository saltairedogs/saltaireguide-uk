// src/app/history/unesco/page.tsx
// UNESCO World Heritage: Saltaire — why it’s listed, criteria, OUV, management (cornerstone v2)
// - Server component only (no client JS), static HTML for excellent CWV
// - SEO: deep internal linking, rich headings, table data, FAQ, speakable, JSON-LD
// - Clear explainer for visitors, residents and owners

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'UNESCO World Heritage: Why Saltaire is listed (criteria, OUV, buffer zone, protection)',
  description:
    'Understand Saltaire’s UNESCO inscription: Outstanding Universal Value, criteria (ii) & (iv), integrity & authenticity, boundaries & buffer zone, protection, and what it means for visitors and residents.',
  alternates: { canonical: `${site.url}/history/unesco` },
  openGraph: {
    title: 'UNESCO World Heritage: Saltaire',
    description:
      'Criteria, Outstanding Universal Value, buffer zone and how protection & management work in practice—clear, local guidance for visitors, residents and owners.',
    url: `${site.url}/history/unesco`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

// UNESCO core facts (summarised from primary sources)
const CORE = [
  { label: 'Inscription year', value: '2001' },
  { label: 'Criteria', value: '(ii) and (iv)' },
  { label: 'Property area', value: 'c. 20 ha' },
  { label: 'Buffer zone', value: 'c. 1,078 ha' },
  { label: 'UNESCO reference no.', value: '1028' },
]

const CRITERIA = [
  {
    id: 'ii',
    title: 'Criterion (ii): Interchange of human values',
    text:
      'Saltaire embodies 19th-century ideas about industrial efficiency, welfare and town planning that influenced later approaches to planned settlements and model communities.',
  },
  {
    id: 'iv',
    title: 'Criterion (iv): Outstanding example of a type',
    text:
      'A remarkably complete mid-19th-century industrial village: mill complex, hierarchical stone housing, church, institute, park and other civic buildings conceived and built as a unified model.',
  },
]

const INTEGRITY = [
  'The core ensemble—mill complex, housing, church, institute, park and related streets—survives as a coherent, legible plan.',
  'Only a small proportion of original buildings have been lost or substantially altered; the street pattern is highly intact.',
  'Adaptive re-use of major structures (notably Salts Mill) sustains the site as a living place without erasing its character.',
]

const AUTHENTICITY = [
  'Form, design and materials—stone façades, roofscape, massing and key public buildings—remain strongly expressed.',
  'The urban layout and relationships between mill, housing, civic buildings and park are still clearly understandable on the ground.',
  'Ongoing conservation work is guided by the Statement of Outstanding Universal Value and local/national policy.',
]

const PROTECTION = [
  'World Heritage status is a key material consideration in planning decisions alongside national and local policies.',
  'Most principal structures are statutorily listed; the village sits within a designated Conservation Area.',
  'City of Bradford MDC leads on the World Heritage Site Management Plan, which guides decisions on buildings, streets and open space.',
]

const INTERNAL_NAV = [
  { href: '/history', label: 'History overview', desc: 'Start here for the full story.' },
  { href: '/history/timeline', label: 'History timeline', desc: 'Key dates from 1803 to today.' },
  { href: '/history/architecture', label: 'Architecture highlights', desc: 'Italianate mills and stone streets.' },
  { href: '/history/titus-salt', label: 'Titus Salt (biography)', desc: 'The industrialist behind Saltaire.' },
  { href: '/salts-mill', label: 'Salts Mill today', desc: 'Galleries, shops and 1853 Gallery.' },
  { href: '/roberts-park', label: 'Roberts Park', desc: 'Bandstand, lawns and river views.' },
  { href: '/plan/getting-here', label: 'Getting here', desc: 'Train, car and step-free options.' },
  { href: '/parking', label: 'Parking', desc: 'Where to leave the car on busy days.' },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Which UNESCO criteria does Saltaire meet?',
    a: 'Saltaire is inscribed under cultural criteria (ii) and (iv). In short, it shows an important 19th-century interchange of planning and social ideas, and it is an exceptionally complete example of a model industrial village.',
  },
  {
    q: 'What is the buffer zone and why does it matter?',
    a: 'The buffer zone is a planning layer around the core World Heritage property that helps protect setting and key views. For Saltaire it is large relative to the 20 ha core and takes in parts of the wider Aire valley so that new development respects the village and landscape.',
  },
  {
    q: 'Who manages the World Heritage Site?',
    a: 'City of Bradford Metropolitan District Council leads on management, working with partners and the community. A formal Management Plan and related guidance support decisions on buildings, streets and open spaces.',
  },
  {
    q: 'Does UNESCO status stop development?',
    a: 'No. It does not mean “no change”, but it does set a high bar. Proposals have to avoid harm to Outstanding Universal Value, or show clear public benefit and strong justification. Most change is small-scale, sensitive repair, adaptation or public-realm work.',
  },
  {
    q: 'How is Roberts Park part of the designation?',
    a: 'Roberts Park is a designed landscape within the World Heritage property. It helps express the planned balance between work, housing and recreation and has been restored using guidance in open-space and conservation plans.',
  },
  {
    q: 'I own a house in Saltaire – where should I start if I want to make changes?',
    a: 'Begin with Bradford Council’s Saltaire World Heritage Site and Conservation Area guidance, then speak to the planning or conservation team before committing to works. Early advice helps you avoid problems and plan repairs or alterations in a way that respects the village.',
  },
]

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
        <li>
          <Link href="/history" className="underline underline-offset-4 hover:text-black">
            History
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          UNESCO World Heritage
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Saltaire: UNESCO World Heritage
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Why the village is on the World Heritage List, what “Outstanding Universal Value” means,
            and how protection and management work in practice—for visitors, residents and local
            businesses.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Criteria (ii) &amp; (iv)</li>
            <li className="badge">Plain-English guidance</li>
          </ul>
          <p className="mt-4 text-sm text-gray-700">
            For the fuller story behind the listing, pair this page with our{' '}
            <Link href="/history" className="underline underline-offset-4">
              History of Saltaire
            </Link>
            ,{' '}
            <Link href="/history/titus-salt" className="underline underline-offset-4">
              Titus Salt biography
            </Link>
            ,{' '}
            <Link href="/history/architecture" className="underline underline-offset-4">
              architecture guide
            </Link>{' '}
            and{' '}
            <Link href="/history/timeline" className="underline underline-offset-4">
              history timeline
            </Link>
            .
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Salts Mill and the stone village fabric in Saltaire’s World Heritage core"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </header>
  )
}

function QuickFacts() {
  return (
    <section aria-labelledby="qf-title" className="container mx-auto max-w-7xl px-4 py-8">
      <h2 id="qf-title" className="sr-only">
        Quick facts
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CORE.map((f) => (
          <div key={f.label} className="card">
            <div className="card-body">
              <div className="text-sm font-medium text-gray-600">{f.label}</div>
              <div className="text-lg font-semibold">{f.value}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Figures summarised from the official UNESCO entry for Saltaire (criteria, area and buffer
        zone). See the “Sources” section below for links.
      </p>
    </section>
  )
}

function OnThisPage() {
  const items = [
    { href: '#what', label: 'What UNESCO covers' },
    { href: '#criteria', label: 'Criteria (ii) & (iv)' },
    { href: '#ouv', label: 'Outstanding Universal Value' },
    { href: '#integrity', label: 'Integrity & Authenticity' },
    { href: '#boundaries', label: 'Boundaries & buffer zone' },
    { href: '#protection', label: 'Protection & management' },
    { href: '#visiting', label: 'Visiting & behaviour' },
    { href: '#explore-more', label: 'Related guides' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#read-more', label: 'Sources' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                href={i.href}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function WhatIsCovered() {
  return (
    <section id="what" aria-labelledby="what-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="what-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        What the World Heritage inscription covers
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose">
          <p>
            The inscription recognises Saltaire as an exceptionally complete model industrial village
            of the later 19th century—its mills, civic buildings and ordered stone housing forming a
            unified plan that remains legible today. The listing text highlights architectural
            quality, coherent planning and the way social welfare and industrial efficiency are built
            into the layout.
          </p>
          <p>
            In practical terms, the World Heritage property is the compact historic village and key
            structures; the wider <em>buffer zone</em> helps manage setting, views and landscape
            change across the Aire valley.
          </p>
          <p className="text-sm text-gray-700">
            For more background, see our{' '}
            <Link href="/history" className="underline underline-offset-4">
              History of Saltaire
            </Link>{' '}
            hub and the{' '}
            <Link href="/history/architecture" className="underline underline-offset-4">
              Saltaire architecture guide
            </Link>
            .
          </p>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">Why it matters</div>
          <p className="mt-2 text-gray-700">
            UNESCO status brings international recognition and a conservation framework. It doesn’t
            freeze the village in time; it guides sensitive change so the reasons for inscription are
            not eroded as people live, work and visit here.
          </p>
        </div>
      </div>
    </section>
  )
}

function Criteria() {
  return (
    <section id="criteria" aria-labelledby="criteria-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="criteria-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Criteria (ii) &amp; (iv): what they mean here
      </h2>
      <div className="mt-2 max-w-prose text-gray-700">
        <p>
          UNESCO inscribed Saltaire under cultural criteria <strong>(ii)</strong> and{' '}
          <strong>(iv)</strong>. In short, the village shows how 19th-century ideas about industry,
          health and town planning were built into one place, and it stands as an outstanding,
          remarkably intact example of a model industrial settlement.
        </p>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {CRITERIA.map((c) => (
          <article key={c.id} className="card card-hover">
            <div className="card-body">
              <div className="text-sm font-medium text-gray-600">Criterion {c.id}</div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-gray-700">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function OutstandingUniversalValue() {
  return (
    <section id="ouv" aria-labelledby="ouv-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ouv-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Outstanding Universal Value (OUV)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose">
          <p>
            The Statement of Outstanding Universal Value highlights the architectural and engineering
            quality across the ensemble—Salts Mill and New Mill; hierarchical housing; Dining Room,
            Congregational Church, Almshouses, Hospital, School, Institute and Roberts Park—and notes
            its influence on later garden-city and planned-community thinking.
          </p>
          <p>
            Saltaire is unusual in how complete it feels on the ground. The plan, massing and civic
            provision are readable at street level, and adaptive reuse since the 1980s has preserved
            significance while keeping the place lively for residents and visitors.
          </p>
          <p className="text-sm text-gray-700">
            To see how this plays out in the buildings, use our{' '}
            <Link href="/history/architecture" className="underline underline-offset-4">
              architecture
            </Link>{' '}
            and{' '}
            <Link href="/salts-mill" className="underline underline-offset-4">
              Salts Mill
            </Link>{' '}
            pages as a companion.
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Plain-English OUV</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>One of the best-preserved model industrial villages anywhere.</li>
              <li>Unified architecture and town planning, not a scattered set of relics.</li>
              <li>Social infrastructure (education, health, recreation) built in from the start.</li>
              <li>Later planners and reformers looked to places like this for inspiration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrityAuthenticity() {
  return (
    <section id="integrity" aria-labelledby="ia-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ia-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Integrity &amp; Authenticity
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">Integrity</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {INTEGRITY.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Integrity is about the wholeness of the place: how much of what makes it significant
              is still present and legible today.
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">Authenticity</div>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {AUTHENTICITY.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            Authenticity touches on design, materials and workmanship, but also on the ability to
            understand the original plan, purpose and relationships between the parts of the village.
          </p>
        </div>
      </div>
    </section>
  )
}

function BoundariesBuffer() {
  return (
    <section id="boundaries" aria-labelledby="bb-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="bb-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Boundaries &amp; buffer zone
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        The core World Heritage property covers around <strong>20 hectares</strong>. It focuses on
        the historic village, Salts Mill and New Mill, Roberts Park and the closely related streets
        and spaces that express the planned model-village layout. The buffer zone extends across
        approximately <strong>1,078 hectares</strong> of the Aire valley to protect the wider setting
        and important views.
      </p>

      <div className="mt-3 grid gap-6 md:grid-cols-2">
        <div className="prose">
          <h3 className="text-lg font-semibold">At a glance</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Core area: compact historic village, mill complex and Roberts Park.</li>
            <li>
              Buffer zone: a wider planning layer that helps manage change in the valley around the
              village.
            </li>
            <li>
              Key idea: new development should respect the character of the core and the way it sits
              in the landscape.
            </li>
          </ul>
          <p className="mt-2 text-sm text-gray-600">
            Exact boundaries and maps are held by UNESCO and Bradford Council. Always use official
            documents when you need precise lines on a plan.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <Image
            src="/images/history-unesco.png"
            width={1600}
            height={900}
            alt="Illustrative Aire valley scene representing Saltaire’s World Heritage setting"
          />
          <p className="px-4 pb-3 pt-2 text-xs text-gray-500">
            Illustrative visual only—consult official UNESCO and Bradford Council sources for exact
            extents and mapping.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProtectionManagement() {
  return (
    <section id="protection" aria-labelledby="pm-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pm-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Protection &amp; management (how it works)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose">
          <p>
            Bradford Council leads on the World Heritage Site’s Management Plan (most recently
            updated in the 2010s) and related guidance. Nearly all principal structures are
            statutorily listed and the whole village sits within a Conservation Area. In UK planning,
            World Heritage status is a key material consideration alongside national and local policy
            documents.
          </p>
          <p>
            Day to day, most decisions run through familiar tools such as Listed Building Consent,
            planning applications and Conservation Area guidance. The open-space plans and management
            strategies also informed the restoration of Roberts Park after inscription.
          </p>
          <p className="text-sm text-gray-700">
            For policy detail and downloads, start with Bradford Council’s{' '}
            <a
              href="https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/"
              className="underline underline-offset-4"
            >
              Saltaire World Heritage Site information pages
            </a>
            .
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Planning pointers (plain English)</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Small like-for-like repairs may still need listed building consent—always check.</li>
              <li>
                Replacement doors and windows should match original proportions and profiles; use
                Council guidance and the Conservation Area Appraisal.
              </li>
              <li>Public-realm and signage changes should respect historic character and materials.</li>
              <li>
                Major development in the buffer zone must protect key views and the wider landscape
                setting.
              </li>
              <li>Use experienced contractors and keep photographic records of works.</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              Summary only—this is not formal advice. Always consult the Council and, where needed,
              heritage professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function VisitingBehaviour() {
  return (
    <section
      id="visiting"
      aria-labelledby="vb-title"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <h2 id="vb-title" className="text-2xl font-bold tracking-tight md:text-3xl">
          Visiting &amp; good behaviour in a World Heritage village
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="card-body">
              <div className="text-lg font-semibold">Do</div>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Photograph respectfully; people live here year-round.</li>
                <li>Use marked paths and keep dogs on leads where signed.</li>
                <li>Support local cafés and shops that keep the village lively.</li>
                <li>Use public transport or designated car parks when it’s busy.</li>
              </ul>
            </div>
          </div>
          <div className="callout callout-warn">
            <div className="text-lg font-semibold">Don’t</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Climb on monuments, walls, railings or the bandstand.</li>
              <li>Block narrow streets with parking—use official car parks.</li>
              <li>Fly drones without the necessary permissions and checks.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          Plan your visit with our practical guides:{' '}
          <Link className="underline underline-offset-4" href="/plan">
            Plan your visit
          </Link>
          ,{' '}
          <Link className="underline underline-offset-4" href="/parking">
            Parking
          </Link>{' '}
          and{' '}
          <Link className="underline underline-offset-4" href="/food-drink">
            Food &amp; Drink
          </Link>
          .
        </div>
      </div>
    </section>
  )
}

function ExploreMore() {
  return (
    <section
      id="explore-more"
      aria-labelledby="explore-more-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <h2 id="explore-more-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Explore more of Saltaire’s World Heritage story
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Use these guides to connect the UNESCO inscription with what you see on the ground: the
        buildings, streets, park and wider valley.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {INTERNAL_NAV.map((item) => (
          <article
            key={item.href}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <Link href={item.href} className="font-semibold underline-offset-4 hover:underline">
              {item.label}
            </Link>
            {item.desc ? <p className="mt-1 text-sm text-gray-600">{item.desc}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function ReadMore() {
  const items = [
    {
      title: 'UNESCO World Heritage Centre: Saltaire (official entry)',
      href: 'https://whc.unesco.org/en/list/1028/',
      note: 'Criteria, Outstanding Universal Value, integrity/authenticity, protection & management.',
    },
    {
      title: 'Bradford Council: World Heritage Site information & history',
      href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      note: 'Local context, policy links and management information.',
    },
    {
      title: 'Saltaire WHS Management Plan (PDF)',
      href: 'https://www.bradford.gov.uk/media/3341/saltaire-world-heritage-site-management-plan2014-v2.pdf',
      note: 'Management framework guiding decisions and projects.',
    },
    {
      title: 'Historic England: Saltaire entry',
      href: 'https://historicengland.org.uk/listing/the-list/list-entry/1000099',
      note: 'National perspective on designation, setting and guidance.',
    },
  ]
  return (
    <section id="read-more" aria-labelledby="rm-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="rm-title" className="text-2xl font-bold tracking-tight md:text-3xl">Sources</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        These links take you to primary and official sources. Use them when you need exact
        boundaries, policy wording or technical detail.
      </p>
      <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.href} className="rounded-xl border border-gray-200 bg-white p-4">
            <a className="font-medium underline-offset-4 hover:underline" href={it.href}>
              {it.title}
            </a>
            <p className="mt-1 text-sm text-gray-600">{it.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url
  // Decimal coords from UNESCO DMS (approx.): N53 50 21, W1 47 18
  const geo = { lat: 53.839, lon: -1.788 }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'UNESCO World Heritage: Saltaire',
    url: `${base}/history/unesco`,
    description:
      'Why Saltaire is a UNESCO World Heritage Site: criteria (ii) & (iv), Outstanding Universal Value, buffer zone, and how protection & management work in practice.',
  }

  const place = {
    '@context': 'https://schema.org',
    '@type': ['Place', 'TouristDestination'],
    name: 'Saltaire World Heritage Site',
    url: `${base}/history/unesco`,
    areaServed: 'GB',
    geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lon },
    tourBookingPage: `${base}/plan/getting-here`,
    isAccessibleForFree: true,
    image: [`${base}/images/og/saltaire-unesco.jpg`].filter(Boolean),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'UNESCO', item: `${base}/history/unesco` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/history/unesco`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#criteria-title', '#ouv-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function UnescoPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <QuickFacts />
      <OnThisPage />
      <WhatIsCovered />
      <Criteria />
      <OutstandingUniversalValue />
      <IntegrityAuthenticity />
      <BoundariesBuffer />
      <ProtectionManagement />
      <VisitingBehaviour />
      <ExploreMore />
      <FAQ />
      <ReadMore />
      <JsonLd />
    </>
  )
}
