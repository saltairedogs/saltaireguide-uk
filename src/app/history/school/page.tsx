// src/app/history/school/page.tsx
// Saltaire Schools — Factory School (1868), Salt High Schools (1876), Albert Road (1878), Titus Salt School
// Cornerstone history page: static, accessible, SEO-rich, CWV-friendly
// - Server component only (no client handlers)
// - Strong internal linking to History hub, Architecture, Timeline, Church, Almshouses
// - JSON-LD: WebPage + BreadcrumbList + ItemList (school highlights) + FAQPage + Speakable
// - References section links to authoritative sources (Historic England, Saltaire Collection, Victorian Web, etc.)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Saltaire schools: Factory School (1868), Salt High Schools (1876), Albert Road (1878) & Titus Salt School',
  description:
    'How education in Saltaire evolved: the 1868 Factory School by Lockwood & Mawson (now Shipley College Salts Building), Salt’s High Schools (1876), the 1878 move to Albert Road, and today’s Titus Salt School — with what to look for and how to visit.',
  alternates: { canonical: `${site.url}/history/school` },
  openGraph: {
    title:
      'Saltaire schools — Factory School, Salt High Schools & Titus Salt School (history & visiting)',
    description:
      'Timeline and architecture of Saltaire’s education: Factory School (1868), High Schools (1876), Albert Road (1878), and modern Titus Salt School.',
    url: `${site.url}/history/school`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Highlight = {
  id: string
  title: string
  summary: string
  href?: string
}

const HIGHLIGHTS: Highlight[] = [
  {
    id: 'factory-school',
    title: 'Factory School (1868) — Lockwood & Mawson',
    summary:
      'Purpose-built school on Victoria Road with sculpted lions; now Shipley College (Salts Building).',
    href: '#factory-school',
  },
  {
    id: 'salt-high-schools',
    title: 'Salt’s High Schools (from 1876)',
    summary:
      'Middle-class high schools began in temporary rooms (Institute/Factory School) before reorganisation.',
    href: '#high-schools',
  },
  {
    id: 'albert-road',
    title: 'Move to Albert Road (1878)',
    summary:
      'Pupils transferred from Factory School to new buildings in Albert Road as provision expanded.',
    href: '#albert-road',
  },
  {
    id: 'titus-salt-school',
    title: 'Titus Salt School (Baildon, modern)',
    summary:
      'Comprehensive secondary school serving the area today; origins trace to Salt High Schools.',
    href: '#titus-salt-school',
  },
]

const QUICK_FACTS: Array<{ label: string; value: string | React.ReactNode }> = [
  { label: 'Architects (Factory School)', value: 'Lockwood & Mawson' },
  { label: 'Factory School opened', value: '1868 (Victoria Road)' },
  { label: 'Salt’s High Schools founded', value: '1876 (initially in temporary rooms)' },
  { label: 'Transfer to Albert Road', value: 'January 1878' },
  { label: 'Listing (Saltaire School, Victoria Road)', value: 'Grade II* (NHLE 1300666)' },
  { label: 'Today', value: 'Shipley College (Salts Building) & Titus Salt School (Baildon)' },
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
          Schools
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Saltaire schools</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            From the 1868 Factory School to Salt’s High Schools (1876) and the 1878 move to Albert
            Road, education in Saltaire was ambitious, disciplined and closely tied to the model
            village’s ideals. Today, the legacy continues through Shipley College and Titus Salt
            School.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Lockwood &amp; Mawson</li>
            <li className="badge">Grade II* school building</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Victorian school façade detail in stone (illustrative)"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
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
    { href: '#factory-school', label: 'Factory School (1868)' },
    { href: '#high-schools', label: 'Salt’s High Schools (1876)' },
    { href: '#albert-road', label: 'Albert Road move (1878)' },
    { href: '#later-20c', label: '20th-century developments' },
    { href: '#titus-salt-school', label: 'Titus Salt School (today)' },
    { href: '#visit', label: 'What to see today' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#sources', label: 'Sources' },
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
        A model village with model schooling
      </h2>
      <div className="prose mt-2 text-gray-700">
        <p>
          Education was central to Saltaire’s social project. The <strong>Factory School</strong> on
          Victoria Road opened in <strong>1868</strong> and is one of the village’s most distinctive
          public buildings. In <strong>1876</strong>, Sir Titus Salt helped establish <em>Salt’s High
          Schools</em> in temporary accommodation, before a reorganisation and the{' '}
          <strong>January 1878</strong> move of pupils into new premises at{' '}
          <strong>Albert Road</strong>. In the 20th century the schools evolved, and today the
          educational thread continues via <strong>Shipley College</strong> (using the former
          Factory School as the Salts Building) and <strong>Titus Salt School</strong> in Baildon.
        </p>
        <p className="smallprint">
          This summary draws on Historic England listings, Saltaire Collection research, and standard
          references on Lockwood &amp; Mawson.
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
      <p className="mt-3 text-xs text-gray-500">
        Listing names and dates are based on the National Heritage List for England; educational
        chronology is summarised from Saltaire Collection and related sources.
      </p>
    </section>
  )
}

function FactorySchool() {
  return (
    <section id="factory-school" aria-labelledby="fs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="fs-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Factory School (1868) — Lockwood &amp; Mawson
      </h2>

      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="prose text-gray-700">
          <p>
            The Factory School on Victoria Road opened in <strong>1868</strong>, designed by{' '}
            <strong>Lockwood &amp; Mawson</strong>. Its disciplined stone elevations and sculptural
            detailing fit the village’s classical language. The building is listed at{' '}
            <strong>Grade II*</strong> and features <em>sculpted lions</em> at the front area —
            emblematic of Saltaire’s iconography and often photographed alongside Victoria Hall’s
            better-known lions.
          </p>
          <p>
            Inside, classrooms were well lit and equipped by the standards of the day — contemporary
            accounts highlight <em>central heating</em>, <em>gas lighting</em>, fitted cupboards and
            covered play areas at the rear — all signalling the village’s investment in education.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Stone school façade detail with classical gable (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        <p>
          Today the building is part of <strong>Shipley College</strong> (Salts Building). From
          Victoria Road you can appreciate the front composition and sculptural details; interior
          access varies by College use.
        </p>
      </div>
    </section>
  )
}

function SaltHighSchools() {
  return (
    <section id="high-schools" aria-labelledby="hs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="hs-title" className="text-2xl font-bold tracking-tight md:text-3xl">Salt’s High Schools (from 1876)</h2>
      <div className="prose text-gray-700">
        <p>
          In <strong>1876</strong> Sir Titus Salt supported the establishment of{' '}
          <em>Salt’s High Schools</em>. The early classes used temporary accommodation — parts of the
          <Link className="underline underline-offset-4" href="/history/architecture#civic">
            {' '}
            Saltaire Club &amp; Institute (Victoria Hall)
          </Link>{' '}
          and the Factory School — while purpose arrangements were made. Historically the High Schools
          included boys’ and girls’ divisions and offered an advanced syllabus for the period.
        </p>
      </div>
    </section>
  )
}

function AlbertRoad() {
  return (
    <section id="albert-road" aria-labelledby="ar-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ar-title" className="text-2xl font-bold tracking-tight md:text-3xl">Move to Albert Road (1878)</h2>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="prose text-gray-700">
          <p>
            In <strong>January 1878</strong> pupils moved from the Factory School into new buildings
            at <strong>Albert Road</strong>, reflecting the growth and reorganisation of schooling in
            the area. Press coverage at the time emphasised the scale of provision and the continued
            investment in facilities for children and young people.
          </p>
          <p>
            The educational estate in and around Saltaire continued to evolve through the 20th
            century, with changes in governance and curriculum mirroring national reforms.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Historic school corridor with light from tall windows (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function Later20C() {
  return (
    <section id="later-20c" aria-labelledby="l20-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="l20-title" className="text-2xl font-bold tracking-tight md:text-3xl">20th-century developments</h2>
      <div className="prose text-gray-700">
        <p>
          Through the 1900s, Saltaire’s schooling landscape adapted to new educational standards, the
          rise of secondary education for all, and the post-war era’s changing demographics. By the
          later 20th century, the historic High Schools’ lineage was reflected in the comprehensive
          <strong> Titus Salt School</strong>, while further education and adult learning found a home
          in the village via <strong>Shipley College</strong>.
        </p>
      </div>
    </section>
  )
}

function TitusSaltSchool() {
  return (
    <section id="titus-salt-school" aria-labelledby="tss-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="tss-title" className="text-2xl font-bold tracking-tight md:text-3xl">Titus Salt School (today)</h2>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="prose text-gray-700">
          <p>
            <strong>Titus Salt School</strong> in Baildon serves the wider Shipley/Saltaire area as a
            mixed comprehensive, with roots traced to the historic Salt High Schools. The current site
            opened in the 2000s, continuing the educational mission associated with the Saltaire name.
          </p>
          <p className="smallprint">
            For admissions, Ofsted and curriculum information, see the official school website.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Contemporary secondary school exterior (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function VisitToday() {
  const gmFactory = `https://www.google.com/maps?q=${encodeURIComponent(
    'Salts Building, Shipley College, Victoria Road, Saltaire',
  )}`
  const gmTSS = `https://www.google.com/maps?q=${encodeURIComponent(
    'Titus Salt School, Higher Coach Road, Baildon',
  )}`

  return (
    <section id="visit" aria-labelledby="visit-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="visit-title" className="text-2xl font-bold tracking-tight md:text-3xl">What to see today</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Salts Building (Shipley College)</h3>
            <p className="mt-2 text-gray-700">
              View the <strong>Factory School</strong> frontage from Victoria Road — note the gable,
              bell-turret and the sculpted lions in the front area. Interior access is by College
              arrangement only.
            </p>
            <p className="mt-2 text-sm">
              Map:{' '}
              <a className="underline underline-offset-4" href={gmFactory}>
                Google Maps
              </a>
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Titus Salt School (Baildon)</h3>
            <p className="mt-2 text-gray-700">
              Modern comprehensive school carrying Saltaire’s educational legacy. For visits,
              open events or enquiries, check the school’s website directly.
            </p>
            <p className="mt-2 text-sm">
              Map:{' '}
              <a className="underline underline-offset-4" href={gmTSS}>
                Google Maps
              </a>
            </p>
          </div>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Combine this with our <Link href="/history/architecture" className="underline underline-offset-4">architecture guide</Link> and a short{' '}
          <Link href="/walks" className="underline underline-offset-4">canal-side walk</Link>.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'When did the Factory School open?',
      a: 'In 1868, on Victoria Road, designed by Lockwood & Mawson.',
    },
    {
      q: 'What are the “lions” at the school?',
      a: 'Sculpted lions stand in the front area of the school, part of Saltaire’s characteristic iconography.',
    },
    {
      q: 'When did pupils move to Albert Road?',
      a: 'January 1878, reflecting a reorganisation and expansion of facilities.',
    },
    {
      q: 'Is the school building listed?',
      a: 'Yes. “Saltaire School (including wall, gate piers and sculpted lions…)”, Grade II* on the National Heritage List for England.',
    },
    {
      q: 'What’s the link to Titus Salt School?',
      a: 'Titus Salt School is the modern comprehensive that inherits the Saltaire educational lineage established by Salt’s High Schools.',
    },
  ]
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((f, i) => (
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

function Sources() {
  const items = [
    {
      title: 'Historic England — “Saltaire School including wall, gate piers and sculpted lions” (NHLE 1300666)',
      href: 'https://historicengland.org.uk/listing/the-list/list-entry/1300666',
      note: 'Official listing entry for the Victoria Road school building.',
    }, // HE entry
    {
      title: 'Victorian Web — Former Factory School (now Shipley College Salts Building)',
      href: 'https://victorianweb.org/art/architecture/lockwood/6.html',
      note: 'Architects, date (opened 1868), and sculptural details (Thomas Milnes).',
    }, // Victorian Web
    {
      title: 'Saltaire Collection — Education (and Foundation) pages',
      href: 'https://www.saltairecollection.org/story-of-saltaire/education/',
      note: 'Context on the Schools (1876) and local educational provision.',
    }, // Saltaire Collection (Education)
    {
      title: 'Saltaire Collection — Foundation of Saltaire',
      href: 'https://www.saltairecollection.org/story-of-saltaire/foundation-of-saltaire/',
      note: 'Purpose-built Factory Schools opened in 1868; facilities overview.',
    }, // Saltaire Collection (Foundation)
    {
      title: 'Richard Coomber (2006) — Elementary education in Shipley (PDF)',
      href: 'https://saltairevillage.info/acrobat/0007_Richard_Coomber_Essay_Ed_1833-1880.pdf',
      note: 'Move from Factory School to Albert Road in Jan 1878, with press coverage.',
    }, // Coomber PDF
    {
      title: 'Wikipedia — Titus Salt School',
      href: 'https://en.wikipedia.org/wiki/Titus_Salt_School',
      note: 'Modern school background and historical lineage to Salt’s High Schools.',
    }, // TSS summary
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
      url: h.href?.startsWith('http') ? h.href : `${base}/history/school${h.href ?? ''}`,
      description: h.summary,
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire schools',
    url: `${base}/history/school`,
    description:
      'History of schooling in Saltaire: Factory School (1868), Salt’s High Schools (1876), move to Albert Road (1878), and modern Titus Salt School.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Schools', item: `${base}/history/school` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When did the Factory School open?',
        acceptedAnswer: { '@type': 'Answer', text: '1868, on Victoria Road, designed by Lockwood & Mawson.' },
      },
      {
        '@type': 'Question',
        name: 'When did pupils move to Albert Road?',
        acceptedAnswer: { '@type': 'Answer', text: 'January 1878.' },
      },
      {
        '@type': 'Question',
        name: 'Is the Victoria Road school building listed?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, Grade II* on the NHLE (entry 1300666).' },
      },
    ],
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/history/school`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#overview-title', '#fs-title', '#tss-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function SchoolsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Overview />
      <QuickFacts />
      <FactorySchool />
      <SaltHighSchools />
      <AlbertRoad />
      <Later20C />
      <TitusSaltSchool />
      <VisitToday />
      <FAQ />
      <Sources />
      <JsonLd />
    </>
  )
}
