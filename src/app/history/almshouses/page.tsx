// src/app/history/almshouses/page.tsx
// Saltaire Almshouses & Hospital — philanthropy, architecture & visiting (cornerstone v1)
// - Server component only (no client handlers; static for CWV)
// - Strong internal linking to History hub, Church, Architecture, School, Timeline
// - JSON-LD: WebPage + BreadcrumbList + ItemList (highlights) + Place/Residence + FAQPage + Speakable
// - Content written conservatively with pointers to official sources for grades/hours

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Saltaire Almshouses & Hospital: history, architecture and how to visit (Victorian philanthropy)',
  description:
    'A clear guide to Saltaire’s almshouses and former hospital: why they were built, how they look, who lived there, and what to notice today — with nearby highlights to combine on a short walk.',
  alternates: { canonical: `${site.url}/history/almshouses` },
  openGraph: {
    title:
      'Saltaire Almshouses & Hospital — Victorian philanthropy in stone (history & architecture)',
    description:
      'Background, plan and distinctive details of the almshouses near the church, plus the former Saltaire hospital. With visiting etiquette, accessibility notes and sources.',
    url: `${site.url}/history/almshouses`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

const PLACES = {
  almshouses: {
    name: 'Saltaire Almshouses',
    summary:
      'Dignified model dwellings set near the church on Victoria Road, with landscaped setting and careful classical detail.',
    address: 'Victoria Road area, Saltaire, West Yorkshire, BD18',
    // Approximate pin centred on church/almshouses cluster (illustrative only)
    geo: { lat: 53.8389, lng: -1.7908 },
  },
  hospital: {
    name: 'Saltaire Hospital (former)',
    summary:
      'Philanthropic medical provision historically associated with the village; the buildings and sites evolved through the 20th century.',
    address: 'Near Saltaire/Shipley (historical location and successors varied)',
    geo: { lat: 53.84, lng: -1.78 },
  },
}

type Highlight = {
  id: string
  title: string
  summary: string
  href?: string
}

const HIGHLIGHTS: Highlight[] = [
  {
    id: 'context',
    title: 'Why almshouses?',
    summary:
      'A philanthropic safety net for older or vulnerable residents — respectable accommodation, close to worship and welfare.',
    href: '#overview',
  },
  {
    id: 'site-plan',
    title: 'Setting & plan',
    summary:
      'Modest, well-detailed stone ranges with garden plots and ordered elevations, composed to read as a civic ensemble.',
    href: '#architecture',
  },
  {
    id: 'hospital',
    title: 'Hospital (former)',
    summary:
      'Complementary healthcare provision; its form and location changed over time in line with public health reforms.',
    href: '#hospital',
  },
  {
    id: 'visit',
    title: 'Visiting etiquette',
    summary:
      'These are homes: be discreet, stay on public paths, and do not intrude on residents’ privacy.',
    href: '#visit',
  },
]

const QUICK_FACTS: Array<{ label: string; value: string | React.ReactNode }> = [
  { label: 'Purpose', value: 'Model almshouse dwellings (welfare provision) near Saltaire church' },
  { label: 'Architectural language', value: 'Classical/Italianate discipline, local sandstone, slate roofs' },
  { label: 'Setting', value: 'Formal relationship with Victoria Road and church; landscaped plots' },
  {
    label: 'Historic status',
    value:
      'Within the Saltaire World Heritage Site; individual structures are listed on the National Heritage List for England',
  },
  {
    label: 'Today',
    value:
      'Residential; please visit respectfully from public routes. Combine with church and Victoria Hall on a short walk.',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What were almshouses in Saltaire for?',
    a: 'They provided rent-free or subsidised accommodation for older or vulnerable residents in dignified surroundings close to the church and village centre.',
  },
  {
    q: 'Can I go inside?',
    a: 'No — these are people’s homes. You are welcome to view the façades from public streets and footways. Please be quiet and respectful.',
  },
  {
    q: 'Is there still a hospital in Saltaire?',
    a: 'The historic hospital provision evolved through the 20th century. Modern healthcare for the area is provided by NHS services beyond the village.',
  },
  {
    q: 'Are the buildings listed?',
    a: 'Yes, various components in this part of Saltaire are listed. For exact gradings and descriptions, consult the National Heritage List for England.',
  },
]

/* ------------------------------ UI Components ------------------------------ */

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
          Almshouses
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
            Saltaire Almshouses &amp; Hospital
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Philanthropic housing and care were central to the model village. The almshouses near the
            church provide dignified accommodation in a composed, garden setting — part of the civic
            ensemble along Victoria Road — while the historic hospital reflects changing approaches
            to public health.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Model village welfare</li>
            <li className="badge">Respectful visiting</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Stone almshouse-style cottages with planted front gardens (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#overview', label: 'Overview' },
    { href: '#quick-facts', label: 'Quick facts' },
    { href: '#architecture', label: 'Architecture & setting' },
    { href: '#residents', label: 'Residents & welfare' },
    { href: '#hospital', label: 'Hospital (former)' },
    { href: '#visit', label: 'Visiting & etiquette' },
    { href: '#nearby', label: 'Nearby highlights' },
    { href: '#sources', label: 'Sources' },
    { href: '#faqs', label: 'FAQs' },
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

/* -------------------------------- Sections -------------------------------- */

function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="overview-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Dignity, proximity and care
      </h2>
      <div className="prose mt-2 text-gray-700">
        <p>
          The <strong>almshouses</strong> at Saltaire continue a long English tradition of providing
          secure, affordable accommodation for older or vulnerable residents. Their siting near the{' '}
          <Link href="/history/church" className="underline underline-offset-4">
            Congregational Church (URC)
          </Link>{' '}
          and the civic cluster on Victoria Road expresses the model village’s balance of{' '}
          <em>work, welfare and worship</em>.
        </p>
        <p>
          Modest in scale but rich in craft, the ranges use the same disciplined stone palette as the
          rest of the village. Front gardens and boundary walls soften the street and create a calm,
          domestic setting — part of Saltaire’s distinctive character.
        </p>
        <p className="smallprint">
          This page summarises well-established references and official listings; it avoids quoting
          prices/eligibility or giving access details for private homes.
        </p>
      </div>
    </section>
  )
}

function QuickFacts() {
  return (
    <section id="quick-facts" aria-labelledby="facts-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="facts-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick facts</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <dl className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
          {QUICK_FACTS.map((f) => (
            <div key={f.label} className="p-4">
              <dt className="text-sm font-semibold text-gray-600">{f.label}</dt>
              <dd className="mt-1 text-gray-800">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function ArchitectureSetting() {
  return (
    <section id="architecture" aria-labelledby="arch-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="arch-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Architecture &amp; setting (what to notice)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Unified materials</h3>
            <p className="mt-2 text-gray-700">
              Local sandstone with simple classical detail, slate roofs and original-style
              rainwater goods tie the ranges back to the village palette.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Ordered fronts</h3>
            <p className="mt-2 text-gray-700">
              Regular bay rhythms, low garden walls and ironwork contribute to a quiet, dignified
              frontage. Door surrounds and name tablets may vary by range.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Relationship to church</h3>
            <p className="mt-2 text-gray-700">
              Proximity to the{' '}
              <Link href="/history/church" className="underline underline-offset-4">
                church
              </Link>{' '}
              underlines the philanthropic intent: practical welfare within a moral and community
              framework.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Landscaped calm</h3>
            <p className="mt-2 text-gray-700">
              Planting and small greens create privacy and neighbourly shared space without losing
              the disciplined classical order.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        <p>
          Conservation tip for owners: match stone and pointing with breathable lime mortars where
          appropriate; avoid plastic window/door replacements on principal façades. See our{' '}
          <Link href="/history/architecture#maintenance" className="underline underline-offset-4">
            maintenance guidance
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

function ResidentsWelfare() {
  return (
    <section id="residents" aria-labelledby="res-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="res-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Residents &amp; welfare (historical context)
      </h2>
      <div className="prose text-gray-700">
        <p>
          Almshouses were intended to offer security and dignity — typically for older residents,
          widows or those with limited means. In Saltaire, they were part of a wider programme that
          included schooling, recreation and religious life.
        </p>
        <p>
          The model was neither ostentatious nor mean: modest accommodation with careful detailing,
          healthy outlook and easy access to the village’s civic facilities.
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>Close to church for pastoral support and community connection.</li>
          <li>Domestic scale with good daylight and small garden plots.</li>
          <li>Rules and eligibility evolved with charitable administration over time.</li>
        </ul>
      </div>
    </section>
  )
}

function HospitalSection() {
  return (
    <section id="hospital" aria-labelledby="hosp-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="hosp-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Saltaire Hospital (former) — evolution of care
      </h2>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="prose text-gray-700">
          <p>
            The village’s historic health provision changed through the late 19th and 20th centuries
            in step with national reforms. While the specific buildings and names altered, the
            principle of accessible care for local people remained constant.
          </p>
          <p className="smallprint">
            If you are researching family history or historic admissions, consult local archives,
            newspapers and health authority records. Modern NHS services are provided beyond the
            World Heritage Site footprint.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Historic hospital corridor with light (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function Visiting() {
  const gmAlms = `https://www.google.com/maps?q=${encodeURIComponent(
    `${PLACES.almshouses.name}, ${PLACES.almshouses.address}`,
  )}`

  return (
    <section id="visit" aria-labelledby="visit-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="visit-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Visiting & etiquette (please read)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Be respectful — these are homes</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>View façades from public streets and footways only.</li>
              <li>Keep voices low; avoid photographing residents or private gardens.</li>
              <li>Do not block gateways, driveways or emergency access.</li>
              <li>Dogs on short leads; clean up after pets.</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Map & route</h3>
            <p className="mt-2 text-gray-700">
              A short loop from Saltaire station takes in the church, almshouses and Victoria Hall.
              Use your maps app to navigate.
            </p>
            <p className="mt-2 text-sm">
              Map:{' '}
              <a className="underline underline-offset-4" href={gmAlms}>
                Google Maps (search: {PLACES.almshouses.name})
              </a>
            </p>
            <p className="mt-2 text-sm">
              Combine with{' '}
              <Link href="/history/church" className="underline underline-offset-4">
                the church
              </Link>
              ,{' '}
              <Link href="/history/architecture#civic" className="underline underline-offset-4">
                Victoria Hall
              </Link>{' '}
              and a stroll to{' '}
              <Link href="/roberts-park" className="underline underline-offset-4">
                Roberts Park
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Nearby() {
  return (
    <section id="nearby" aria-labelledby="nearby-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="nearby-title" className="text-2xl font-bold tracking-tight md:text-3xl">Nearby highlights</h2>
      <ul className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2">
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/church" className="font-medium underline-offset-4 hover:underline">
            Congregational Church (URC)
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            Italianate portico, tower and dome; Salt family mausoleum.
          </p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/architecture#civic" className="font-medium underline-offset-4 hover:underline">
            Victoria Hall (Institute)
          </Link>
          <p className="mt-1 text-sm text-gray-700">Civic classical set piece on Victoria Road.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/school#factory-school" className="font-medium underline-offset-4 hover:underline">
            Factory School (Salts Building)
          </Link>
          <p className="mt-1 text-sm text-gray-700">Opened 1868; now part of Shipley College.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/walks" className="font-medium underline-offset-4 hover:underline">
            Canal & river walks
          </Link>
          <p className="mt-1 text-sm text-gray-700">Gentle loops with step-free options.</p>
        </li>
      </ul>
    </section>
  )
}

function Sources() {
  const items = [
    {
      title: 'UNESCO World Heritage Centre — Saltaire',
      href: 'https://whc.unesco.org/en/list/1028/',
      note: 'Official overview of the World Heritage Site (criteria, OUV, boundaries).',
    },
    {
      title: 'Bradford Council — Saltaire World Heritage Site information',
      href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      note: 'Local authority context and guidance.',
    },
    {
      title: 'Historic England — Saltaire (NHLE search)',
      href: 'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire',
      note: 'Listing entries for buildings in and around the almshouse cluster.',
    },
    {
      title: 'Saltaire Collection — community history resources',
      href: 'https://www.saltairecollection.org/',
      note: 'Background on village institutions, philanthropy and social history.',
    },
  ]
  return (
    <section id="sources" aria-labelledby="sources-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="sources-title" className="text-2xl font-bold tracking-tight md:text-3xl">Sources</h2>
      <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.href} className="rounded-xl border border-gray-200 bg-white p-4">
            <a className="font-medium underline-offset-4 hover:underline" href={it.href}>
              {it.title}
            </a>
            <p className="mt-1 text-sm text-gray-600">{it.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-gray-500">
        We prioritise official and primary references and keep this page updated.
      </p>
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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: HIGHLIGHTS.length,
    itemListElement: HIGHLIGHTS.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: h.title,
      url: h.href?.startsWith('http') ? h.href : `${base}/history/almshouses${h.href ?? ''}`,
      description: h.summary,
    })),
  }

  const place = {
    '@context': 'https://schema.org',
    '@type': ['Residence', 'Place', 'TouristAttraction'],
    name: PLACES.almshouses.name,
    description:
      'Model almshouse dwellings near Saltaire church, part of the World Heritage Site’s civic ensemble.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Victoria Road (vicinity)',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      postalCode: 'BD18',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PLACES.almshouses.geo.lat,
      longitude: PLACES.almshouses.geo.lng,
    },
    isAccessibleForFree: true,
    url: `${base}/history/almshouses`,
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire Almshouses & Hospital',
    url: `${base}/history/almshouses`,
    description:
      'History and architecture of Saltaire’s almshouses and former hospital, with respectful visiting guidance and nearby highlights.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Almshouses', item: `${base}/history/almshouses` },
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
    url: `${base}/history/almshouses`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#overview-title', '#arch-title', '#visit-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function AlmshousesPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Overview />
      <QuickFacts />
      <ArchitectureSetting />
      <ResidentsWelfare />
      <HospitalSection />
      <Visiting />
      <Nearby />
      <Sources />
      <FAQ />
      <JsonLd />
    </>
  )
}
