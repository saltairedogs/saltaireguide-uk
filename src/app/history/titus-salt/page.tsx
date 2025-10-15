// src/app/history/titus-salt/page.tsx
// Sir Titus Salt — founder of Saltaire (cornerstone v1; server-only; static)
// - CWV-first (no client components), deep internal linking, long-form structure
// - JSON-LD: Person + Place (Saltaire snippet) + BreadcrumbList + FAQPage + Speakable
// - Content strategy: biography, timeline, model-village programme, myths, legacy, visiting
// - All links are plain <Link> / <a>; no event handlers, no client JS

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Titus Salt (1803–1876): founder of Saltaire — biography, timeline, legacy',
  description:
    'The definitive local guide to Sir Titus Salt: early life, Salts Mill (1853), the model village of Saltaire, church (1858–59), almshouses & hospital (1868), baronetcy (1869), politics and legacy.',
  alternates: { canonical: `${site.url}/history/titus-salt` },
  openGraph: {
    title: 'Titus Salt — founder of Saltaire',
    description:
      'Biography, timeline and impact of the industrialist who built Saltaire and Salts Mill, with original guidance for visitors today.',
    url: `${site.url}/history/titus-salt`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Fact = { label: string; value: string; hint?: string }
type Timeline = { year: string; title: string; text: string }
type LinkItem = { label: string; href: string; desc?: string }

const QUICK_FACTS: Fact[] = [
  { label: 'Born', value: '20 Sept 1803 · Morley, Yorkshire' },
  { label: 'Died', value: '29 Dec 1876 · Lightcliffe, Yorkshire' },
  { label: 'Role', value: 'Manufacturer, philanthropist, Liberal politician' },
  { label: 'Mill opened', value: '20 Sept 1853 (50th birthday)' },
  { label: 'Model village', value: 'Saltaire, built c.1851–1876' },
  { label: 'Church', value: 'Congregational → URC, 1858–59' },
  { label: 'Almshouses & hospital', value: 'Opened Sept 1868' },
  { label: 'MP for Bradford', value: '1859–1861' },
  { label: 'Baronetcy', value: '30 Oct 1869 (of Saltaire & Crow Nest)' },
  { label: 'Resting place', value: 'Saltaire URC mausoleum' },
]

const TIMELINE: Timeline[] = [
  {
    year: '1803',
    title: 'Birth & early education',
    text:
      'Born in Morley, near Leeds. Educated first at a local dame school, then at Batley Grammar School, before commercial training. Early career in the family’s wool business in Bradford.',
  },
  {
    year: '1830s–1840s',
    title: 'Bradford manufacturer & civic figure',
    text:
      'Builds a leading worsted enterprise; serves as Chief Constable (1847), Bradford’s second mayor (1848–49) and later Deputy Lieutenant of the West Riding.',
  },
  {
    year: '1851–1853',
    title: 'Salts Mill and the move from Bradford',
    text:
      'Construction starts 1851 beside canal and railway; the vast, efficient mill opens 20 Sept 1853 with a major celebration. The decision anchors a new industrial community outside Bradford’s worst slums.',
  },
  {
    year: '1854–1876',
    title: 'Saltaire: housing & institutions',
    text:
      'Streets of well-built houses (many named after family members) rise in phases, with wash-houses, baths, institute, schools and shops. A planned community intended to improve health and productivity.',
  },
  {
    year: '1858–1859',
    title: 'Church for the new village',
    text:
      'The richly detailed Italianate Congregational Church (now the United Reformed Church) is completed opposite Salts Mill. The Salt family mausoleum lies within.',
  },
  {
    year: '1859–1861',
    title: 'Member of Parliament',
    text:
      'Elected Liberal MP for Bradford (with Henry Wickham). Retires in 1861 owing to health.',
  },
  {
    year: '1868',
    title: 'Almshouses & hospital',
    text:
      'Sir Titus’s almshouses and an infirmary (hospital) open in September 1868, expanding social provision beyond housing, education and recreation.',
  },
  {
    year: '1869',
    title: 'Baronetcy',
    text:
      'Created Baronet Salt of Saltaire and Crow Nest on 30 October 1869 in recognition of civic and industrial service.',
  },
  {
    year: '1876',
    title: 'Death & funeral',
    text:
      'Dies 29 December 1876 at Crow Nest, Lightcliffe. Funeral cortege draws very large crowds; interred at the Saltaire church mausoleum.',
  },
  {
    year: '2001',
    title: 'UNESCO inscription (legacy)',
    text:
      'Saltaire designated a UNESCO World Heritage Site for its outstanding model-village planning and preservation.',
  },
]

const INTERNAL_NAV: LinkItem[] = [
  { label: 'Salts Mill', href: '/salts-mill', desc: 'What to see today' },
  { label: 'Roberts Park', href: '/roberts-park', desc: 'Café, bandstand & lawns' },
  { label: 'History home', href: '/history', desc: 'Cluster overview' },
  { label: 'UNESCO', href: '/history/unesco', desc: 'Why it’s listed' },
  { label: 'Architecture', href: '/history/architecture', desc: 'Italianate & planning' },
  { label: 'Timeline', href: '/history/timeline', desc: 'Dates at a glance' },
  { label: 'Almshouses', href: '/history/almshouses', desc: 'Care & retirement' },
  { label: 'Church', href: '/history/church', desc: 'URC & mausoleum' },
  { label: 'School', href: '/history/school', desc: 'Education & institute' },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'When did Salts Mill open?',
    a: 'On 20 September 1853—Titus Salt’s 50th birthday. Construction had begun in 1851 beside the canal and railway.',
  },
  {
    q: 'Was the church part of the original plan?',
    a: 'Yes. The Congregational Church (now URC) was one of the earliest major public buildings, built 1858–59, funded personally by Salt.',
  },
  {
    q: 'What social facilities did Salt provide?',
    a: 'Decent stone housing with water supply, wash-houses, baths, institute, schools, a hospital (infirmary) and almshouses opened in 1868.',
  },
  {
    q: 'Was Titus Salt teetotal?',
    a: 'No. Although he forbade beershops in Saltaire, contemporary evidence suggests he was not personally teetotal.',
  },
  {
    q: 'Why is Saltaire a World Heritage Site?',
    a: 'It is an exceptionally complete Victorian model village, integrating industry, housing and civic buildings in a planned landscape.',
  },
]

/* ------------------------------- Components -------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li>
          <Link href="/history" className="underline underline-offset-4 hover:text-black">History</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Titus Salt</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Sir Titus Salt (1803–1876)</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Industrialist, philanthropist and founder of Saltaire — the model village anchored by the vast Salts Mill.
            This page distils the essential story with dates, context and how to explore the legacy on foot today.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">UNESCO context</li>
            <li className="badge">Local &amp; practical</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Saltaire stone terraces and mill chimney"
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
      <h2 id="qf-title" className="sr-only">Quick facts</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {QUICK_FACTS.map((f) => (
          <div key={f.label} className="card">
            <div className="card-body">
              <div className="text-sm font-medium text-gray-600">{f.label}</div>
              <div className="text-lg font-semibold">{f.value}</div>
              {f.hint ? <div className="mt-1 text-xs text-gray-500">{f.hint}</div> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function OnThisPage() {
  const items = [
    { href: '#biography', label: 'Biography' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#village', label: 'Building Saltaire' },
    { href: '#church-health', label: 'Church, almshouses & hospital' },
    { href: '#politics', label: 'Politics & honours' },
    { href: '#myths', label: 'Myths & misconceptions' },
    { href: '#legacy', label: 'Legacy & UNESCO' },
    { href: '#visit', label: 'Visiting the legacy' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#more', label: 'More in this series' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
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

function Biography() {
  return (
    <section id="biography" aria-labelledby="bio-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="bio-title" className="text-2xl font-bold tracking-tight md:text-3xl">Biography</h2>
      <div className="mt-3 grid gap-6 md:grid-cols-3">
        <div className="prose prose-wide md:col-span-2">
          <p>
            Titus Salt was born in Morley on 20 September 1803 and entered the wool trade in Bradford, building a major
            worsted business in the 1830s–40s. Concerned by urban conditions and seeking scale and efficiency, he moved
            operations to a greenfield site by the River Aire, the Leeds–Liverpool Canal and the railway — creating a
            new mill-and-village complex named Saltaire.
          </p>
          <p>
            The mill opened in 1853; house-building and civic amenities followed through the 1850s–70s: water
            infrastructure, wash-houses and baths, an institute for education and culture, schools, a church, a hospital
            and almshouses. The design intent blended industrial logic with social provision, characteristic of Victorian
            model villages. Salt served as Bradford’s Liberal MP (1859–61) and, in 1869, was created a baronet.
          </p>
          <p>
            He died in 1876 and is interred at the Saltaire church mausoleum. Today the village’s completeness and
            preservation underpin its recognition as a World Heritage Site, and the mill has a lively second life of
            galleries and shops.
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">At a glance</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Manufacturer in the Yorkshire worsted trade.</li>
              <li>Founder and planner of a model industrial village.</li>
              <li>Committed civic figure and employer with strict standards.</li>
              <li>Legacy visible in stone housing, church, institute and parks.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function YearTimeline() {
  return (
    <section id="timeline" aria-labelledby="tl-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="tl-title" className="text-2xl font-bold tracking-tight md:text-3xl">Timeline</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Key dates in Salt’s life and the build-out of Saltaire. Use this alongside our{' '}
        <Link className="underline underline-offset-4" href="/history/timeline">History timeline</Link>.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {TIMELINE.map((t) => (
          <article key={t.year} className="card card-hover">
            <div className="card-body">
              <div className="text-sm font-medium text-gray-600">{t.year}</div>
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-gray-700">{t.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">Dates compiled from primary/local sources and standard references.</p>
    </section>
  )
}

function BuildingTheVillage() {
  const bullets = [
    'Strategic siting by river, canal and railway for logistics and power.',
    'Phased housing with water supply and better sanitation than Bradford slums.',
    'Amenities: baths, wash-houses, institute (education & recreation), schools, shops.',
    'Public realm: planned streets, ordered vistas, robust stone architecture.',
    'Civic/faith centrepiece: the Italianate church opposite the mill.',
  ]
  return (
    <section id="village" aria-labelledby="vlg-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="vlg-title" className="text-2xl font-bold tracking-tight md:text-3xl">Building Saltaire</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose">
          <p>
            Work began in 1851. The mill opened on 20 September 1853, followed by rapid village construction from 1854.
            Much of the housing bears the names of Salt family members, a fabric of streets that still reads clearly
            today. The programme integrated work, home and culture — an industrial “new town” before the term existed.
          </p>
          <ul className="mt-2">
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Ordered terraces and mill massing typical of Saltaire’s plan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-4 callout">
        <div className="text-lg font-semibold">Streets named for family</div>
        <p className="mt-2 text-gray-700">
          Examples include William Henry, George, Amelia, Edward, Herbert, Fanny, Titus, Whitlam, Mary, Helen and Ada —
          reflecting the names of Salt’s children and family circle.
        </p>
      </div>
    </section>
  )
}

function ChurchAndHealth() {
  return (
    <section id="church-health" aria-labelledby="ch-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ch-title" className="text-2xl font-bold tracking-tight md:text-3xl">Church, almshouses & hospital</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">Congregational Church (now URC), 1858–59</div>
            <p className="mt-2 text-gray-700">
              An Italianate landmark opposite the mill with a dome and portico, funded by Salt. The Salt family
              mausoleum is within. Today it is Grade I listed and central to the World Heritage streetscape.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              See our dedicated page: <Link className="underline underline-offset-4" href="/history/church">Saltaire Church</Link>.
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">Almshouses & hospital (opened 1868)</div>
          <p className="mt-2 text-gray-700">
            Provision for the elderly and for medical care strengthened the social safety net around work and housing.
            The 1868 opening is carved above the hospital doorway; the ensemble stands by Alexandra Square.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Explore: <Link className="underline underline-offset-4" href="/history/almshouses">Almshouses</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}

function PoliticsHonours() {
  return (
    <section id="politics" aria-labelledby="pol-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pol-title" className="text-2xl font-bold tracking-tight md:text-3xl">Politics & honours</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">MP for Bradford (1859–61)</div>
            <p className="mt-2 text-gray-700">
              Elected Liberal MP for the industrial borough; he retired after two years, citing health. His civic roles
              also included mayor and chamber leadership in Bradford.
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">Baronet of Saltaire & Crow Nest (1869)</div>
          <p className="mt-2 text-gray-700">
            On 30 October 1869 he was created a baronet in recognition of his industrial and civic contribution. The
            title passed within the Salt family afterward.
          </p>
        </div>
      </div>
    </section>
  )
}

function Myths() {
  return (
    <section id="myths" aria-labelledby="my-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="my-title" className="text-2xl font-bold tracking-tight md:text-3xl">Myths & misconceptions</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">“Salt was teetotal”</div>
            <p className="mt-2 text-gray-700">
              He prohibited beershops in Saltaire, but evidence suggests he was not personally teetotal. The policy was
              about order and productivity rather than personal abstinence.
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">“It was pure philanthropy”</div>
          <p className="mt-2 text-gray-700">
            Motives were mixed: economic rationality (efficiency, labour stability), Nonconformist duty and paternal
            control — a typical Victorian model-village blend.
          </p>
        </div>
      </div>
    </section>
  )
}

function LegacyUnesco() {
  return (
    <section id="legacy" aria-labelledby="lg-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="lg-title" className="text-2xl font-bold tracking-tight md:text-3xl">Legacy & UNESCO status</h2>
      <div className="prose">
        <p>
          Saltaire remains one of the most complete Victorian model villages. The survival of mill, church, institute,
          streets and park led to UNESCO inscription in 2001, and the village is protected through conservation policy.
          The mill’s adaptive reuse (galleries, shops, studios) keeps the site alive for visitors today.
        </p>
      </div>
    </section>
  )
}

function VisitToday() {
  return (
    <section id="visit" aria-labelledby="vt-title" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <h2 id="vt-title" className="text-2xl font-bold tracking-tight md:text-3xl">Visiting the legacy</h2>
        <p className="mt-2 max-w-prose text-gray-700">
          Start at <Link className="underline underline-offset-4" href="/salts-mill">Salts Mill</Link> (galleries & shops),
          walk across to <Link className="underline underline-offset-4" href="/roberts-park">Roberts Park</Link>, then
          explore the church exterior and the ordered grid of streets. Our practical guides cover parking, trains and
          step-free routes.
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm md:grid-cols-2 lg:grid-cols-3">
          {INTERNAL_NAV.map((n) => (
            <li key={n.href} className="rounded-xl border border-gray-200 bg-white p-4">
              <Link className="font-medium underline-offset-4 hover:underline" href={n.href}>
                {n.label}
              </Link>
              {n.desc ? <p className="mt-1 text-gray-600">{n.desc}</p> : null}
            </li>
          ))}
        </ul>
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

function MoreSeries() {
  return (
    <section id="more" aria-labelledby="ms-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="ms-title" className="text-2xl font-bold tracking-tight md:text-3xl">More in this series</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <article className="card"><div className="card-body">
          <div className="text-lg font-semibold">UNESCO & planning</div>
          <p className="mt-1 text-gray-700">Why Saltaire is listed and how the plan works as a living place.</p>
          <Link className="underline underline-offset-4" href="/history/unesco">Read the UNESCO guide</Link>
        </div></article>
        <article className="card"><div className="card-body">
          <div className="text-lg font-semibold">Architecture</div>
          <p className="mt-1 text-gray-700">Italianate massing, stonework and street hierarchy across the village.</p>
          <Link className="underline underline-offset-4" href="/history/architecture">See the highlights</Link>
        </div></article>
        <article className="card"><div className="card-body">
          <div className="text-lg font-semibold">Timeline</div>
          <p className="mt-1 text-gray-700">Pin the dates from mill opening to later additions and restoration.</p>
          <Link className="underline underline-offset-4" href="/history/timeline">Browse the timeline</Link>
        </div></article>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sir Titus Salt',
    alternateName: ['Titus Salt', 'Sir Titus Salt, 1st Baronet'],
    birthDate: '1803-09-20',
    deathDate: '1876-12-29',
    birthPlace: { '@type': 'Place', name: 'Morley, Yorkshire, England' },
    deathPlace: { '@type': 'Place', name: 'Lightcliffe, Yorkshire, England' },
    jobTitle: 'Manufacturer and politician',
    nationality: 'British',
    url: `${base}/history/titus-salt`,
    sameAs: [
      'https://en.wikipedia.org/wiki/Titus_Salt',
      'https://bradfordlocalstudies.com/titus-salt/',
    ],
    affiliation: [
      { '@type': 'Organization', name: "Salt's Mill" },
      { '@type': 'Organization', name: 'Saltaire (model village)' },
    ],
    knowsAbout: [
      'Victorian model villages',
      'Worsted industry',
      'Bradford civic history',
      'Urban sanitation and housing in 19th century England',
    ],
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Titus Salt', item: `${base}/history/titus-salt` },
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
    url: `${base}/history/titus-salt`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#bio-title', '#tl-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function TitusSaltPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <QuickFacts />
      <OnThisPage />
      <Biography />
      <YearTimeline />
      <BuildingTheVillage />
      <ChurchAndHealth />
      <PoliticsHonours />
      <Myths />
      <LegacyUnesco />
      <VisitToday />
      <FAQ />
      <MoreSeries />
      <JsonLd />
    </>
  )
}
