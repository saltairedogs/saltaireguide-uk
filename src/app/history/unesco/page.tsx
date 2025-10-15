// src/app/history/unesco/page.tsx
// UNESCO World Heritage: Saltaire — why it’s listed, criteria, OUV, management (cornerstone v1.1)
// - Server component only (no client JS), static HTML for excellent CWV
// - SEO: deep internal linking, rich headings, table data, FAQ, speakable, JSON-LD
// - All inline citation placeholders removed; normal links + Sources section used instead

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
    'Understand Saltaire’s UNESCO inscription (2001): Outstanding Universal Value, criteria (ii) and (iv), integrity & authenticity, boundaries & buffer zone, protection and management, and what it means for visitors and residents.',
  alternates: { canonical: `${site.url}/history/unesco` },
  openGraph: {
    title: 'UNESCO World Heritage: Saltaire',
    description:
      'Criteria, Outstanding Universal Value, buffer zone and how protection & management work in practice—clear, local guidance.',
    url: `${site.url}/history/unesco`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

// UNESCO core facts (as summarised from primary sources)
const CORE = [
  { label: 'Inscription year', value: '2001' },
  { label: 'Criteria', value: '(ii) and (iv)' },
  { label: 'Property area', value: '20 ha' },
  { label: 'Buffer zone', value: '1,078 ha' },
  { label: 'Coordinates (centroid)', value: '53.839° N, 1.788° W (approx.)' },
]

const CRITERIA = [
  {
    id: 'ii',
    title: 'Criterion (ii): Interchange of human values',
    text:
      'Saltaire’s planning and social ideas influenced later urban movements, especially the British garden city tradition and planned industrial communities.',
  },
  {
    id: 'iv',
    title: 'Criterion (iv): Outstanding example of a type',
    text:
      'An exceptionally complete mid-19th-century industrial village: mills, hierarchical housing and civic institutions laid out as a unified model of philanthropic industrial management.',
  },
]

const INTEGRITY = [
  'The ensemble—mill(s), housing, church, institute, park—survives as a legible, coherent plan.',
  'Only a very small proportion of original buildings have been lost; plan form remains intact.',
  'Adaptive re-use (e.g. Salts Mill) sustains the site as a living place without erasing significance.',
]

const AUTHENTICITY = [
  'Form, design, materials and urban layout remain strongly expressed.',
  'Setting has evolved; the buffer zone helps manage views and landscape context.',
  'Ongoing conservation aligns with the Statement of Outstanding Universal Value.',
]

const PROTECTION = [
  'World Heritage is a key material consideration in UK planning decisions (NPPF).',
  'Nearly every building is listed; the whole site is a Conservation Area.',
  'Bradford Council leads on the Management Plan; guidance covers buildings and open spaces.',
]

const INTERNAL_NAV = [
  { href: '/history', label: 'History overview' },
  { href: '/history/architecture', label: 'Architecture highlights' },
  { href: '/history/titus-salt', label: 'Titus Salt (biography)' },
  { href: '/roberts-park', label: 'Roberts Park' },
  { href: '/salts-mill', label: 'Salts Mill today' },
  { href: '/plan/getting-here', label: 'Getting here' },
  { href: '/parking', label: 'Parking' },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Which UNESCO criteria does Saltaire meet?',
    a: 'Criteria (ii) and (iv): interchange of human values, and an outstanding example of a model industrial village with unified architecture and planning.',
  },
  {
    q: 'What is the buffer zone and why does it matter?',
    a: 'A planning layer around the core property to protect key views and setting. For Saltaire the buffer zone is large relative to the 20 ha core and helps manage development in the wider valley.',
  },
  {
    q: 'Who manages the site?',
    a: 'City of Bradford Metropolitan District Council leads management, with a formal Management Plan and conservation policies that guide decisions and projects.',
  },
  {
    q: 'Does UNESCO status stop development?',
    a: 'Not by default. It sets a high bar: proposals must avoid harm to Outstanding Universal Value or show overwhelming public benefit. Most change is small-scale, sensitive conservation or reuse.',
  },
  {
    q: 'How is Roberts Park part of the designation?',
    a: 'Roberts Park is a designed landscape within the property and was restored using guidance in open-space management plans after inscription.',
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
            <li className="badge">Clear, local guidance</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Saltaire mill and village fabric seen from the Aire valley"
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
            unified plan that remains legible today. The listing text emphasises architectural
            quality, intact planning and the philanthropy-inflected approach to industrial
            management.
          </p>
          <p>
            In practical terms, the World Heritage property is the compact historic village and key
            structures; the wider <em>buffer zone</em> helps manage setting, views and landscape
            change across the Aire valley.
          </p>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">Why it matters</div>
          <p className="mt-2 text-gray-700">
            UNESCO status brings international recognition and a conservation framework. It doesn’t
            freeze the village in time; it guides sensitive change so the reasons for inscription are
            not eroded.
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
          UNESCO inscribed Saltaire under criteria <strong>(ii)</strong> and <strong>(iv)</strong>.
          In brief, the village demonstrates an interchange of planning and social ideas influential
          on later urbanism, and it stands as an outstanding, complete example of the model
          industrial settlement type.
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
            The OUV statement highlights the architectural and engineering quality across the
            ensemble—<em>Salt’s Mill and New Mill; hierarchical housing; the Dining Room,
            Congregational Church, Almshouses, Hospital, School, Institute, and Roberts Park</em>—
            and notes its influence on later garden-city development.
          </p>
          <p>
            This completeness is unusual: the plan, massing and civic provision are readable at
            street level, and adaptive reuse since the 1980s has preserved significance while
            keeping the place alive for visitors and residents.
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Plain-English OUV</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>One of the best-preserved model industrial villages anywhere.</li>
              <li>Unified architecture and town planning, not a scattered relic.</li>
              <li>Social infrastructure (education, health, recreation) baked in.</li>
              <li>Later movements (garden city) took cues from places like this.</li>
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
            understand the original plan and purpose.
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
        The core property covers around <strong>20 hectares</strong>; the buffer zone extends across
        approximately <strong>1,078 hectares</strong> of the Aire valley to protect the village’s
        setting and significant views, as described in the UNESCO entry and related documentation.
      </p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/history-unesco.png"
          width={1600}
          height={900}
          alt="Aire valley placeholder map area for Saltaire WHS buffer concept"
        />
      </div>

      <p className="mt-2 text-xs text-gray-500">
        Indicative visual only—consult official UNESCO/Bradford Council sources for extents and maps.
      </p>
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
            Bradford Council leads on the World Heritage Site’s Management Plan (revised 2014) and
            related guidance. Nearly all structures are statutorily listed and the whole site is a
            conservation area. In UK planning, World Heritage status is a key material consideration
            alongside national and local policy.
          </p>
          <p>
            For day-to-day decision-making, World Heritage considerations sit alongside normal
            controls (e.g. Conservation Area and Listed Building Consent). The open-spaces plan
            helped guide the restoration of Roberts Park after inscription.
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Planning pointers (plain English)</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Small like-for-like repairs may still need listed building consent—check first.</li>
              <li>
                Replacement doors/windows should match original proportions and profiles; consult
                Council guidance and the Conservation Area Appraisal.
              </li>
              <li>Public-realm and signage changes should respect historic character.</li>
              <li>Major development in the buffer zone must protect key views and setting.</li>
              <li>Use accredited contractors; keep photographic records of works.</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              Summary only—always consult the Council and, where needed, heritage professionals.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        See also local policy links (NPPF, local core strategy) via the Council’s World Heritage
        pages.
      </p>
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
                <li>Photograph respectfully; residents live here year-round.</li>
                <li>Use marked paths; keep dogs on leads where signed.</li>
                <li>Support local cafés/shops that keep the village lively.</li>
                <li>Use public transport or designated car parks when busy.</li>
              </ul>
            </div>
          </div>
          <div className="callout callout-warn">
            <div className="text-lg font-semibold">Don’t</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Climb on monuments, boundary walls or railings.</li>
              <li>Block narrow streets with parking—use official car parks.</li>
              <li>Fly drones without permissions (CAA + landowner + Council rules).</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          Plan your visit with our practical guides:{' '}
          <Link className="underline underline-offset-4" href="/plan/getting-here">
            Getting here
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
      note: 'Local context and plain-English overview.',
    },
    {
      title: 'Saltaire WHS Management Plan (2014, PDF)',
      href: 'https://www.bradford.gov.uk/media/3341/saltaire-world-heritage-site-management-plan2014-v2.pdf',
      note: 'Management framework guiding decisions and projects.',
    },
    {
      title: 'Historic England: Saltaire entry',
      href: 'https://historicengland.org.uk/listing/the-list/list-entry/1000099',
      note: 'National perspective on protection, setting and guidance.',
    },
  ]
  return (
    <section id="read-more" aria-labelledby="rm-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="rm-title" className="text-2xl font-bold tracking-tight md:text-3xl">Sources</h2>
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
      <FAQ />
      <ReadMore />
      <JsonLd />
    </>
  )
}
