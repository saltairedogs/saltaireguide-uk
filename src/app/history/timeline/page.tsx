// src/app/history/timeline/page.tsx
// Saltaire History Timeline — cornerstone (static, CWV-friendly)
// - Server component only (no client JS / no event handlers)
// - Deep internal linking; rich headings; semantic <time>; accessible markup
// - JSON-LD: WebPage + BreadcrumbList + ItemList (Events) + Speakable + FAQ
// - Sources section with reputable primary/official pages
// - Facts cross-checked (UNESCO, Bradford Council, Saltaire Collection, etc.)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Saltaire history timeline (1803–present): key dates, people & milestones',
  description:
    'From Sir Titus Salt’s birth (1803), the founding of Salts Mill and model village (1851–1876), through Roberts Park (1871), James Roberts’ era, 20th-century change, the 1980s regeneration, and UNESCO inscription (2001).',
  alternates: { canonical: `${site.url}/history/timeline` },
  openGraph: {
    title: 'Saltaire history timeline — 1803 to today',
    description:
      'All the key dates: mills, housing, church, institute, park, ownership, decline, revival and UNESCO World Heritage status.',
    url: `${site.url}/history/timeline`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

type TL = {
  id: string
  date: string // ISO or year
  title: string
  summary: string
  links?: Array<{ label: string; href: string }>
  anchor?: string
}

const UPDATED = '2025-10-12'

/** Pre-Salt context & early life */
const ERA_PRE: TL[] = [
  {
    id: '1803',
    date: '1803-09-20',
    title: 'Birth of Titus Salt',
    summary:
      'Titus Salt is born in Morley, Yorkshire. He later becomes a leading worsted manufacturer, politician and philanthropist, best known for founding Saltaire.',
    links: [
      { label: 'Biography: Titus Salt', href: '/history/titus-salt' },
      { label: 'Wikipedia — Titus Salt', href: 'https://en.wikipedia.org/wiki/Titus_Salt' }, // :contentReference[oaicite:0]{index=0}
    ],
  },
  {
    id: '1848-mayor',
    date: '1848',
    title: 'Mayor of Bradford (1848–1849)',
    summary:
      'Salt serves as the second Mayor of Bradford, pushing for civic improvement and cleaner industry. He remains deeply engaged in local public life.',
    links: [
      { label: 'Local studies note', href: 'https://bradfordlocalstudies.com/titus-salt/' }, // :contentReference[oaicite:1]{index=1}
      { label: 'List of Bradford mayors', href: 'https://en.wikipedia.org/wiki/List_of_mayors_of_Bradford' }, // :contentReference[oaicite:2]{index=2}
    ],
  },
  {
    id: '1859-mp',
    date: '1859',
    title: 'Member of Parliament for Bradford (1859–1861)',
    summary:
      'Salt is elected Liberal MP for Bradford, resigning in 1861 due to health. His public service complements his industrial leadership.',
    links: [{ label: 'Wikipedia — Titus Salt', href: 'https://en.wikipedia.org/wiki/Titus_Salt' }], // :contentReference[oaicite:3]{index=3}
  },
]

/** Founding & building of Saltaire under Salt */
const ERA_SALT: TL[] = [
  {
    id: '1851-site',
    date: '1851',
    title: 'Site chosen on the River Aire',
    summary:
      'Salt selects land by the Aire, railway and canal to consolidate production away from polluted Bradford and to build new worker housing and civic amenities.',
    links: [{ label: 'UNESCO brief synthesis', href: 'https://whc.unesco.org/en/list/1028/' }], // :contentReference[oaicite:4]{index=4}
  },
  {
    id: '1853-opening',
    date: '1853-09-20',
    title: 'Opening of Salts Mill (first phase)',
    summary:
      'Salts Mill opens on Salt’s 50th birthday. The vast mill anchors a planned village that grows in stages across the 1850s–60s.',
    links: [
      { label: 'Saltaire overview', href: 'https://en.wikipedia.org/wiki/Saltaire' }, // :contentReference[oaicite:5]{index=5}
      { label: 'About Salts Mill', href: 'https://saltsmillshop.co.uk/pages/about-salts-mill' }, // :contentReference[oaicite:6]{index=6}
    ],
  },
  {
    id: '1858-59-church',
    date: '1859',
    title: 'Saltaire Congregational Church completed',
    summary:
      'A landmark Italianate church (now URC) with mausoleum; among the most significant individual buildings in the village’s unified plan.',
    links: [{ label: 'UNESCO entry', href: 'https://whc.unesco.org/en/list/1028/' }], // :contentReference[oaicite:7]{index=7}
  },
  {
    id: '1868-almshouses',
    date: '1868-09-23',
    title: 'Almshouses & hospital opened',
    summary:
      'Sir Titus Salt’s Almshouses and Infirmary open on Victoria Road, expanding the social provision of the model village.',
    links: [
      { label: 'Saltaire Collection note', href: 'https://www.saltairecollection.org/story-of-saltaire/hopital-and-almshouses/' }, // :contentReference[oaicite:8]{index=8}
      { label: 'Village info — Almshouses', href: 'https://saltairevillage.info/Saltaire_WHS_Almshouses.html' }, // :contentReference[oaicite:9]{index=9}
      { label: 'Village info — Hospital', href: 'https://saltairevillage.info/Saltaire_WHS_Hospital.html' }, // :contentReference[oaicite:10]{index=10}
    ],
  },
  {
    id: '1871-institute',
    date: '1871',
    title: 'Saltaire Institute (now Victoria Hall)',
    summary:
      'The Saltaire Club & Institute opens as a centre for education and recreation, later known as Victoria Hall.',
    links: [
      { label: 'Victoria Hall (about)', href: 'https://victoriahallsaltaire.co.uk/about' }, // :contentReference[oaicite:11]{index=11}
      { label: 'Wikipedia — Victoria Hall', href: 'https://en.wikipedia.org/wiki/Victoria_Hall,_Saltaire' }, // :contentReference[oaicite:12]{index=12}
    ],
  },
  {
    id: '1871-park',
    date: '1871-07-25',
    title: 'Saltaire Park (now Roberts Park) opens',
    summary:
      'Designed by William Gay, the 14-acre park opens to the public across the river Aire; later renamed Roberts Park.',
    links: [
      { label: 'Roberts Park (Wikipedia)', href: 'https://en.wikipedia.org/wiki/Roberts_Park,_Saltaire' }, // :contentReference[oaicite:13]{index=13}
      { label: 'Victorian Web — opening day', href: 'https://victorianweb.org/art/parks/20.html' }, // :contentReference[oaicite:14]{index=14}
      { label: 'Saltaire Collection — park note', href: 'https://explore.saltairecollection.org/s/p/item/8016?page=5' }, // :contentReference[oaicite:15]{index=15}
    ],
  },
  {
    id: '1869-baronet',
    date: '1869-10-30',
    title: 'Salt made a Baronet',
    summary:
      'Titus Salt is created a baronet “of Saltaire and Crow Nest”, formalising national recognition of his achievements.',
    links: [
      { label: 'Salt baronetcy (record)', href: 'https://en.wikipedia.org/wiki/Salt_baronets' }, // :contentReference[oaicite:16]{index=16}
      { label: 'Peerage note', href: 'https://www.thepeerage.com/p57081.htm' }, // :contentReference[oaicite:17]{index=17}
    ],
  },
  {
    id: '1876-death',
    date: '1876-12-29',
    title: 'Death of Sir Titus Salt',
    summary:
      'Salt dies aged 73. Leadership of the company passes to his sons; the built village is essentially complete.',
    links: [{ label: 'UNESCO nomination PDF (history excerpt)', href: 'https://whc.unesco.org/document/151571' }], // :contentReference[oaicite:18]{index=18}
  },
]

/** After Salt: ownership changes, Roberts era, park renaming */
const ERA_POSTSALT: TL[] = [
  {
    id: '1892-wound-up',
    date: '1892',
    title: 'Original firm wound up; sale of assets follows',
    summary:
      'Sir Titus Salt, Sons & Co. goes into voluntary liquidation; a consortium acquires the business the following year.',
    links: [{ label: 'UNESCO nomination (history)', href: 'https://whc.unesco.org/document/151571' }], // :contentReference[oaicite:19]{index=19}
  },
  {
    id: '1893-consortium',
    date: '1893',
    title: 'Consortium purchase including James Roberts',
    summary:
      'Four Bradford businessmen buy the mill and village; James Roberts later becomes sole owner (1899/1902 accounts vary by source).',
    links: [
      { label: 'Village history note', href: 'https://saltairevillage.info/Saltaire_WHS_After_Titus_Salt.html' }, // :contentReference[oaicite:20]{index=20}
      { label: 'Saltaire Collection — owners & managers', href: 'https://www.saltairecollection.org/story-of-saltaire/owners-and-managers/' }, // :contentReference[oaicite:21]{index=21}
      { label: 'Wikipedia — Sir James Roberts', href: 'https://en.wikipedia.org/wiki/Sir_James_Roberts,_1st_Baronet' }, // :contentReference[oaicite:22]{index=22}
    ],
  },
  {
    id: '1903-statue',
    date: '1903',
    title: 'Titus Salt statue added in the park',
    summary:
      'A bronze statue of Sir Titus Salt is erected on the main promenade (commissioned by Sir James Roberts).',
    links: [{ label: 'Roberts Park (Wikipedia)', href: 'https://en.wikipedia.org/wiki/Roberts_Park,_Saltaire' }], // :contentReference[oaicite:23]{index=23}
  },
  {
    id: '1920-park-gift',
    date: '1920-08-01',
    title: 'Park renamed & gifted to Bradford',
    summary:
      'After earlier disputes, Sir James Roberts gifts the park to Bradford Corporation and names it Roberts Park in memory of his son Bertram Foster Roberts.',
    links: [
      { label: 'Roberts Park (Wikipedia)', href: 'https://en.wikipedia.org/wiki/Roberts_Park,_Saltaire' }, // :contentReference[oaicite:24]{index=24}
      { label: 'Saltaire Collection note', href: 'https://www.saltairecollection.org/story-of-saltaire/foundation-of-saltaire/' }, // :contentReference[oaicite:25]{index=25}
      { label: 'Local diary 1920', href: 'https://saltairevillage.info/Saltaire_diary_1920.html' }, // :contentReference[oaicite:26]{index=26}
    ],
  },
]

/** Late 20th c. decline & 1980s revival */
const ERA_20C: TL[] = [
  {
    id: '1918-sale',
    date: '1918',
    title: 'Sale of company by Sir James Roberts',
    summary:
      'Roberts sells the Salts business for £2 million to a new consortium; later floated as Salts (Saltaire) Ltd (1923).',
    links: [{ label: 'Wikipedia — Sir James Roberts', href: 'https://en.wikipedia.org/wiki/Sir_James_Roberts,_1st_Baronet' }], // :contentReference[oaicite:27]{index=27}
  },
  {
    id: '1933-sale-village',
    date: '1933',
    title: 'Village sold to Bradford Property Trust',
    summary:
      'Private ownership changes reflect evolving industrial and housing economics in the interwar years.',
    links: [{ label: 'Wikipedia — Sir James Roberts (business timeline)', href: 'https://en.wikipedia.org/wiki/Sir_James_Roberts,_1st_Baronet' }], // :contentReference[oaicite:28]{index=28}
  },
  {
    id: '1986-closure',
    date: '1986',
    title: 'Textile production ceases at Salts Mill',
    summary:
      'Manufacturing ends; the huge mill complex stands largely vacant before a new era of adaptive reuse begins.',
    links: [
      { label: 'Industrial archaeology blog note', href: 'https://johndewhirst.blog/2021/01/22/industrial-archaeology/' }, // :contentReference[oaicite:29]{index=29}
      { label: 'Salts Mill — official “About”', href: 'https://saltsmillshop.co.uk/pages/about-salts-mill' }, // :contentReference[oaicite:30]{index=30}
    ],
  },
  {
    id: '1987-silver',
    date: '1987',
    title: 'Jonathan Silver buys Salts Mill',
    summary:
      'Entrepreneur Jonathan Silver purchases the derelict complex and begins a pioneering regeneration, opening the 1853 Gallery dedicated to David Hockney.',
    links: [
      { label: 'Wikipedia — Jonathan Silver', href: 'https://en.wikipedia.org/wiki/Jonathan_Silver' }, // :contentReference[oaicite:31]{index=31}
      { label: 'Salts Mill — official page', href: 'https://saltsmillshop.co.uk/pages/about-salts-mill' }, // :contentReference[oaicite:32]{index=32}
    ],
  },
]

/** UNESCO inscription & recent decades */
const ERA_UNESCO: TL[] = [
  {
    id: '2001-unesco',
    date: '2001-12-13',
    title: 'UNESCO World Heritage inscription',
    summary:
      'Saltaire is inscribed under criteria (ii) and (iv) as an exceptionally complete model industrial village of the later 19th century.',
    links: [
      { label: 'UNESCO official entry', href: 'https://whc.unesco.org/en/list/1028/' }, // :contentReference[oaicite:33]{index=33}
      {
        label: 'Bradford Council — WHS info',
        href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      }, // :contentReference[oaicite:34]{index=34}
    ],
  },
  {
    id: '2009-10-park-restore',
    date: '2010',
    title: 'Roberts Park restoration',
    summary:
      'Major restoration works deliver long-term conservation and public realm improvements, supported by lottery funding.',
    links: [{ label: 'Roberts Park (Wikipedia)', href: 'https://en.wikipedia.org/wiki/Roberts_Park,_Saltaire' }], // :contentReference[oaicite:35]{index=35}
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
          Timeline
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Saltaire history timeline</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The definitive chronology of Saltaire: from Titus Salt’s early life and the founding of the
            mill and model village to 20th-century change, 1980s revival and UNESCO World Heritage status.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Criteria (ii) &amp; (iv)</li>
            <li className="badge">Original maps &amp; sources</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Salts Mill with its chimney on the Aire valley"
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
    { href: '#pre', label: 'Before the village (to 1850s)' },
    { href: '#salt-era', label: 'Building Saltaire (1851–1876)' },
    { href: '#after-salt', label: 'After Salt (1877–1918)' },
    { href: '#20c', label: '20th century (1918–1986)' },
    { href: '#revival', label: 'Revival & UNESCO (1987–today)' },
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

function Era({ id, title, intro, items }: { id: string; title: string; intro: string; items: TL[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">{intro}</p>

      <ol className="mt-6 space-y-4">
        {items.map((e) => (
          <li key={e.id} id={e.anchor ?? e.id} className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
              <time className="shrink-0 text-sm text-gray-500" dateTime={e.date}>
                {e.date.length > 4 ? new Date(e.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }) : e.date}
              </time>
            </div>
            <p className="mt-2 text-gray-700">{e.summary}</p>
            {e.links && e.links.length > 0 ? (
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {e.links.map((l) => (
                  <li key={l.href}>
                    <a className="underline underline-offset-4 decoration-gray-300 hover:decoration-black" href={l.href as any}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'When did Saltaire become a UNESCO World Heritage Site?',
      a: 'December 2001. It is inscribed under cultural criteria (ii) and (iv) for its completeness as a model industrial village and influence on planning.',
    },
    {
      q: 'Who owned Saltaire after Titus Salt?',
      a: 'A four-man consortium bought the mill and village in 1893; James Roberts became sole owner by 1899/1902 (sources vary). He sold the company in 1918.',
    },
    {
      q: 'When did Roberts Park get its current name?',
      a: 'In 1920, when Sir James Roberts gifted the park to Bradford and renamed it to commemorate his son, Bertram Foster Roberts.',
    },
    {
      q: 'When did textile production end at Salts Mill?',
      a: '1986. The mill was then bought by Jonathan Silver in 1987 and reinvented as a cultural and commercial hub with the 1853 Gallery.',
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
      title: 'UNESCO World Heritage Centre — Saltaire (Official)',
      href: 'https://whc.unesco.org/en/list/1028/',
      note: 'Criteria, brief synthesis and official status.',
    }, // :contentReference[oaicite:36]{index=36}
    {
      title: 'UNESCO Nomination File (PDF excerpt)',
      href: 'https://whc.unesco.org/document/151571',
      note: 'Historical summary: ownership changes, dates, significance.',
    }, // :contentReference[oaicite:37]{index=37}
    {
      title: 'Bradford Council — WHS information & history',
      href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      note: 'Local authority overview and links to policy/management.',
    }, // :contentReference[oaicite:38]{index=38}
    {
      title: 'Saltaire Collection (official local archive)',
      href: 'https://www.saltairecollection.org/',
      note: 'Biographies, owners/managers timeline, buildings.',
    }, // :contentReference[oaicite:39]{index=39}
    {
      title: 'Roberts Park — history and opening date',
      href: 'https://en.wikipedia.org/wiki/Roberts_Park,_Saltaire',
      note: 'Designer, 1871 opening, later restoration.',
    }, // :contentReference[oaicite:40]{index=40}
    {
      title: 'Victoria Hall / Saltaire Institute',
      href: 'https://en.wikipedia.org/wiki/Victoria_Hall,_Saltaire',
      note: 'Design, purpose and opening.',
    }, // :contentReference[oaicite:41]{index=41}
    {
      title: 'About Salts Mill (official)',
      href: 'https://saltsmillshop.co.uk/pages/about-salts-mill',
      note: '1986 closure; 1987 purchase & 1853 Gallery.',
    }, // :contentReference[oaicite:42]{index=42}
  ]
  return (
    <section id="sources" aria-labelledby="sources-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="sources-title" className="text-2xl font-bold tracking-tight md:text-3xl">Sources</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        We prioritise primary and official sources. For full architectural detail, also see Historic
        England entries and Bradford’s Conservation Area guidance.
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

  const allEvents: TL[] = [...ERA_PRE, ...ERA_SALT, ...ERA_POSTSALT, ...ERA_20C, ...ERA_UNESCO]

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: allEvents.length,
    itemListElement: allEvents.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.title,
      url: `${base}/history/timeline#${e.anchor ?? e.id}`,
      item: {
        '@type': 'Event',
        name: e.title,
        startDate: e.date,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: { '@type': 'Place', name: 'Saltaire, West Yorkshire, UK' },
        description: e.summary,
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire history timeline',
    url: `${base}/history/timeline`,
    description:
      'Chronology of Saltaire from the early 19th century to the present: founding of the model village, civic buildings, park, ownership, decline, revival and UNESCO inscription.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Timeline', item: `${base}/history/timeline` },
    ],
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/history/timeline`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#pre-title', '#salt-era-title', '#faqs'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function TimelinePage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />

      <Era
        id="pre"
        title="Before the village & early public life (to the 1850s)"
        intro="Context for Saltaire’s creation: the explosive growth of Bradford’s wool industry, Salt’s early innovations and public roles, and the decision to build a healthier, planned community alongside a consolidated mill."
        items={ERA_PRE}
      />

      <Era
        id="salt-era"
        title="Building Saltaire under Sir Titus Salt (1851–1876)"
        intro="The founding decades: mill construction, hierarchical housing, church, institute, hospital and almshouses, and the creation of a riverside park — a unified plan of work, welfare and culture."
        items={ERA_SALT}
      />

      <Era
        id="after-salt"
        title="After Salt: ownership, philanthropy & park renaming (1877–1918)"
        intro="The Salt family era ends; a consortium including James Roberts acquires the enterprise, commissioning the statue of Salt and gifting the park (with its present name) to Bradford in 1920."
        items={ERA_POSTSALT}
      />

      <Era
        id="20c"
        title="20th century industry, change and closure (1918–1986)"
        intro="From interwar adjustments and ownership changes to the end of large-scale textile manufacture in 1986 — setting the stage for a new kind of life for the buildings."
        items={ERA_20C}
      />

      <Era
        id="revival"
        title="Revival, culture and UNESCO World Heritage (1987–today)"
        intro="Jonathan Silver’s 1987 purchase sparks a celebrated regeneration; by 2001, UNESCO inscription recognises the village’s completeness and influence. Conservation and lively reuse continue."
        items={ERA_UNESCO}
      />

      <FAQ />
      <Sources />
      <JsonLd />
    </>
  )
}
