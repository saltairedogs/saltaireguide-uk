// src/app/history/architecture/page.tsx
// Saltaire Architecture — fabric, styles, typologies & planning (cornerstone v1)
// - Server component only (static HTML for CWV). No client handlers.
// - Deep internal linking to History hub, Timeline, Church, Institute, Almshouses, School, Park.
// - SEO: rich headings, semantic <section>/<article>/<figure>, accessible tables, glossary.
// - JSON-LD: WebPage + BreadcrumbList + ItemList (highlights) + FAQ + Speakable.
// - Sources are referenced in a dedicated section (official/authoritative where possible).

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Saltaire architecture: Lockwood & Mawson, Italianate planning, housing types & civic set pieces',
  description:
    'A clear guide to Saltaire’s architecture and urban design: Italianate mills, unified stone housing, church and civic buildings, Roberts Park, materials, maintenance tips, and what to look for on a short walk.',
  alternates: { canonical: `${site.url}/history/architecture` },
  openGraph: {
    title:
      'Saltaire architecture — what to look for, how it was planned, and why it matters',
    description:
      'Italianate palazzo mill forms, axial Victoria Road, unified stone terraces, church with tower and dome, institute, almshouses, school, and park. With owner maintenance guidance and a self-guided trail.',
    url: `${site.url}/history/architecture`,
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
  href: string
}

const HIGHLIGHTS: Highlight[] = [
  {
    id: 'mill',
    title: 'Salts Mill & New Mill',
    summary:
      'Monumental Italianate mill blocks with palazzo rhythms, engineered for light, power and fire separation.',
    href: '/salts-mill',
  },
  {
    id: 'church',
    title: 'Congregational Church (URC)',
    summary:
      'Italianate west portico, round tower with clock faces, octagonal colonnade and dome; Salt family mausoleum.',
    href: '/history/church',
  },
  {
    id: 'institute',
    title: 'Saltaire Club & Institute (Victoria Hall)',
    summary:
      'Civic centre for learning and leisure; tonic of education, music and assemblies in a formal classical shell.',
    href: '/history/architecture#civic',
  },
  {
    id: 'almshouses',
    title: 'Almshouses & Hospital',
    summary:
      'Philanthropic model housing and care near the church, set within landscaped grounds on Victoria Road.',
    href: '/history/almshouses',
  },
  {
    id: 'school',
    title: 'Schools',
    summary:
      'Well-lit classrooms, ordered elevations and disciplined fenestration; investment in skills and welfare.',
    href: '/history/school',
  },
  {
    id: 'park',
    title: 'Roberts Park',
    summary:
      'Designed landscape by William Gay (1871): promenade, bandstand, axis and views across the valley.',
    href: '/roberts-park',
  },
]

type Typology = {
  name: string
  description: string
  cues: string[]
}

const TYPOLOGIES: Typology[] = [
  {
    name: 'Back-to-back terrace (limited in Saltaire)',
    description:
      'Rarer within the model village; Saltaire typically avoids the densest back-to-back patterns seen elsewhere in Bradford.',
    cues: ['Shared rear walls in denser blocks', 'Minimal rear yard depth'],
  },
  {
    name: 'Through terrace (standard worker housing)',
    description:
      'Two-storey, front-and-rear access stone terraces, ordered window bays, simple cornice or eaves line.',
    cues: [
      'Regular bay rhythm',
      'Stone lintels and sills',
      'Recessed doorways with plain surrounds',
    ],
  },
  {
    name: 'Superior “overlooker” housing',
    description:
      'Larger dwellings, corner siting, extra storey or bay width; often nearer principal axes and civic buildings.',
    cues: ['Wider frontages', 'More ornate door surrounds', 'Occasional attic dormers'],
  },
  {
    name: 'Civic set pieces',
    description:
      'Church, Institute (Victoria Hall), Schools, Dining Hall, Almshouses/Hospital — all carefully composed and placed.',
    cues: ['Formal classical elements', 'Balanced massing', 'Recognisable public entrances'],
  },
]

const MATERIALS = [
  'Locally quarried sandstone ashlar and coursed masonry',
  'Welsh slate roofing with regular ridge line',
  'Stone lintels, cills and copings; cast-iron or timber rainwater goods',
  'Timber vertically sliding sash windows (historically, thin glazing bars)',
  'Timber panelled doors with plain surrounds; fanlights on some classes',
]

const DO_MAINTAIN = [
  'Match stone type, colour and tooling; avoid hard cement pointing — use lime mortars where appropriate.',
  'Retain/repair timber sash windows; consider slim-profile double glazing only with heritage advice.',
  'Respect original door proportions and panel patterns; avoid uPVC replacements.',
  'Keep chimney stacks, copings and rainwater goods maintained to prevent water ingress.',
  'Document work with photographs and keep approvals/consents with the property.',
]

const DONT_MAINTAIN = [
  'Don’t sandblast or aggressively clean stone; it damages the surface and accelerates decay.',
  'Don’t use impermeable cement mortars or waterproof coatings on historic masonry.',
  'Don’t add out-of-scale dormers, rooflights on principal elevations, or widen openings without consent.',
  'Don’t install plastic gutters/downpipes on principal fronts where cast iron is characteristic.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Who designed most of Saltaire’s architecture?',
    a: 'Lockwood & Mawson of Bradford, working closely with Sir Titus Salt. Their practice delivered a unified classical-Italianate language across civic and domestic buildings.',
  },
  {
    q: 'What architectural style is typical in Saltaire?',
    a: 'Italianate/classical for major set pieces (mill, church, institute) and disciplined, unified stone terraces for housing. The overall effect is ordered, restrained and coherent.',
  },
  {
    q: 'How was the village planned?',
    a: 'A formal grid with axial Victoria Road linking mill offices, church and civic buildings, and a riverside park across the Aire to the north-east.',
  },
  {
    q: 'Can I change windows or doors in Saltaire?',
    a: 'Many properties are listed or within a Conservation Area. Changes often need consent. Matching original proportions and materials is key — seek advice first.',
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
          Architecture
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Saltaire architecture</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            How Lockwood &amp; Mawson and Sir Titus Salt created a complete model village: Italianate
            mill forms, a formal street grid, unified stone terraces and civic set pieces — with a
            designed park across the river.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Unified Italianate language</li>
            <li className="badge">Fabric &amp; maintenance tips</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Saltaire’s Italianate mill and stone terraces"
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
    { href: '#plan', label: 'Urban plan & axes' },
    { href: '#materials', label: 'Materials & details' },
    { href: '#typologies', label: 'Housing typologies' },
    { href: '#civic', label: 'Civic set pieces' },
    { href: '#trail', label: 'Self-guided architecture trail' },
    { href: '#maintenance', label: 'Owner maintenance guidance' },
    { href: '#glossary', label: 'Glossary' },
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

/* -------------------------------- Sections -------------------------------- */

function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="overview-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Why Saltaire’s architecture stands out
      </h2>
      <div className="prose mt-2 text-gray-700">
        <p>
          Saltaire is a <em>complete</em> mid-19th-century model village planned around textile
          production and social welfare. The architecture is unified in material and proportion:
          local sandstone, disciplined fenestration and classical composition, with Italianate
          palazzo language shaping the mills and the grandest civic buildings.
        </p>
        <p>
          The street grid is formal and legible, anchored by <strong>Victoria Road</strong> —
          aligning mill offices with the <Link className="underline underline-offset-4" href="/history/church">church</Link>, institute and other set pieces — and by the 
          relationship with <Link className="underline underline-offset-4" href="/roberts-park">Roberts Park</Link> across the river. Together they create a landscape of
          work, welfare and recreation that remains remarkably intact.
        </p>
      </div>
    </section>
  )
}

function PlanAxes() {
  return (
    <section id="plan" aria-labelledby="plan-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="plan-title" className="text-2xl font-bold tracking-tight md:text-3xl">Urban plan & principal axes</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="prose text-gray-700">
          <p>
            The village is arranged on a rectilinear grid with a clear hierarchy: Victoria Road as
            ceremonial axis; regular cross-streets; and short vistas to civic buildings or mill
            masses. This order delivers easy wayfinding and a calm streetscape.
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Victoria Road axis:</strong> from mill offices to church and civic cluster.
            </li>
            <li>
              <strong>Mill ensemble:</strong> long façades articulated in bays with towers and
              stair-turrets marking corners and fire-breaks.
            </li>
            <li>
              <strong>Park connection:</strong> bridge and footpaths align views to the bandstand and
              river lawns, balancing the density of the mill with open landscape.
            </li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200">
          <Image
            src="/images/history-unesco.png"
            alt="Diagrammatic aerial of a planned grid and axial route (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500">Illustrative view — consult official mapping for boundaries and listings.</p>
    </section>
  )
}

function MaterialsDetails() {
  return (
    <section id="materials" aria-labelledby="materials-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="materials-title" className="text-2xl font-bold tracking-tight md:text-3xl">Materials & characteristic details</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">The toolkit</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {MATERIALS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Reading façades</h3>
            <p className="mt-2 text-gray-700">
              Look for the bay rhythm set by window spacing; string courses and cornice lines unify
              blocks; door surrounds vary subtly by status. Cast-iron rainwater goods, stone boundary
              walls and simple railings complete the streetscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Typologies() {
  return (
    <section id="typologies" aria-labelledby="typo-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="typo-title" className="text-2xl font-bold tracking-tight md:text-3xl">Housing typologies</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Workers’ housing is deliberately regular and healthy by the standards of the day, with
        stepped status cues in plot width, siting and detail. Higher-status dwellings face key routes
        or corners; standard terraces fill the grid.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {TYPOLOGIES.map((t) => (
          <article key={t.name} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-gray-700">{t.description}</p>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {t.cues.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function CivicSetPieces() {
  const cards = [
    {
      title: 'Church (URC)',
      text:
        'Italianate composition with portico, tower and dome; axis with mill offices and Victoria Road.',
      href: '/history/church',
    },
    {
      title: 'Institute (Victoria Hall)',
      text:
        'Club & Institute for education and recreation; a formal classical front anchoring civic life.',
      href: '/history/architecture#trail',
    },
    {
      title: 'Almshouses & Hospital',
      text:
        'Purpose-built care and philanthropy expressed in dignified stone ranges and gardens.',
      href: '/history/almshouses',
    },
    {
      title: 'Schools',
      text:
        'Well-proportioned teaching spaces and orderly façades; investment in skills and welfare.',
      href: '/history/school',
    },
  ]
  return (
    <section id="civic" aria-labelledby="civic-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="civic-title" className="text-2xl font-bold tracking-tight md:text-3xl">Civic set pieces</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Public buildings articulate the moral and social ambitions of the village: worship, learning,
        care and recreation are expressed with confident classical language and high-quality craft.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <article key={c.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <Link href={c.href as any} className="block p-4">
              <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-1 line-clamp-3 text-sm text-gray-700">{c.text}</p>
              <span className="mt-2 inline-block text-sm underline decoration-gray-300 underline-offset-4 group-hover:decoration-black">
                Read more
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function Trail() {
  const stops = [
    {
      n: 1,
      title: 'Mill offices (Victoria Road entrance)',
      what: 'Palazzo composition; entrance hierarchy; relation to mill ranges.',
    },
    {
      n: 2,
      title: 'Victoria Road terraces',
      what: 'Status cues: plot width, door surrounds, ironwork, boundary walls.',
    },
    {
      n: 3,
      title: 'Church (URC)',
      what: 'Portico, tower, clock faces, octagonal colonnade, dome; mausoleum to south.',
    },
    {
      n: 4,
      title: 'Almshouses & Hospital',
      what: 'Set-back ranges and landscaped setting; humane scale in stone.',
    },
    {
      n: 5,
      title: 'Institute (Victoria Hall)',
      what: 'Civic classicism; assembly rooms; composition to Victoria Road.',
    },
    {
      n: 6,
      title: 'Schools cluster',
      what: 'Large windows, ventilation, disciplined fenestration.',
    },
    {
      n: 7,
      title: 'Footbridge to Roberts Park',
      what: 'Axis and views; bandstand and promenade by William Gay (1871).',
    },
  ]
  return (
    <section id="trail" aria-labelledby="trail-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="trail-title" className="text-2xl font-bold tracking-tight md:text-3xl">Self-guided architecture trail (60–90 mins)</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        A short loop that reveals the planning and architectural language. Start at the mill offices
        and follow Victoria Road to the church and civic cluster, then cross to the park.
      </p>
      <ol className="mt-4 space-y-3">
        {stops.map((s) => (
          <li key={s.n} className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold tracking-tight">
                {s.n}. {s.title}
              </h3>
              <span className="text-sm text-gray-500">5–10 min</span>
            </div>
            <p className="mt-2 text-gray-700">{s.what}</p>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-xs text-gray-500">
        Tip: combine with our <Link href="/walks" className="underline underline-offset-4">best walks</Link> for longer routes.
      </p>
    </section>
  )
}

function Maintenance() {
  return (
    <section id="maintenance" aria-labelledby="maint-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="maint-title" className="text-2xl font-bold tracking-tight md:text-3xl">Owner maintenance guidance (plain English)</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Do</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {DO_MAINTAIN.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Don’t</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {DONT_MAINTAIN.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Many works require consent. Always check with the Council’s conservation team and read the
        Conservation Area guidance. See our <Link className="underline underline-offset-4" href="/legal/masthead">masthead</Link> for contacts.
      </p>
    </section>
  )
}

function Glossary() {
  const terms = [
    { term: 'Ashlar', def: 'Finely dressed stone laid in regular courses for crisp façades.' },
    { term: 'String course', def: 'A horizontal band of masonry used to unify or articulate elevations.' },
    { term: 'Fenestration', def: 'The arrangement and proportion of windows on a façade.' },
    { term: 'Palazzo form', def: 'Italianate composition recalling Renaissance urban palaces.' },
    { term: 'Lime mortar', def: 'Breathable, flexible mortar suited to historic masonry.' },
  ]
  return (
    <section id="glossary" aria-labelledby="glossary-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="glossary-title" className="text-2xl font-bold tracking-tight md:text-3xl">Glossary</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <dl className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
          {terms.map((t) => (
            <div key={t.term} className="p-4">
              <dt className="text-sm font-semibold text-gray-600">{t.term}</dt>
              <dd className="mt-1 text-gray-800">{t.def}</dd>
            </div>
          ))}
        </dl>
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

function Sources() {
  const items = [
    {
      title: 'UNESCO World Heritage Centre — Saltaire',
      href: 'https://whc.unesco.org/en/list/1028/',
      note: 'Official synopsis: OUV, criteria, integrity & authenticity.',
    },
    {
      title: 'Bradford Council — World Heritage Site information & history',
      href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      note: 'Local policy context and overview.',
    },
    {
      title: 'Historic England — Saltaire entries (NHLE)',
      href: 'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire',
      note: 'National Heritage List records for individual buildings.',
    },
    {
      title: 'Victoria Hall (Institute) — official site',
      href: 'https://victoriahallsaltaire.co.uk/',
      note: 'Building history and current use of the Institute.',
    },
    {
      title: 'Saltaire URC (church) — official site',
      href: 'https://www.saltaireurc.org.uk/',
      note: 'Background, visiting and community info for the church.',
    },
  ]
  return (
    <section id="sources" aria-labelledby="sources-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="sources-title" className="text-2xl font-bold tracking-tight md:text-3xl">Sources</h2>
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
      <p className="mt-2 text-xs text-gray-500">We prioritise official and primary references.</p>
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
      url: `${base}${h.href}`,
      description: h.summary,
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire architecture',
    url: `${base}/history/architecture`,
    description:
      'Guide to Saltaire’s architecture and urban design: Italianate mills, unified stone terraces, civic buildings, materials and maintenance, and a self-guided trail.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Architecture', item: `${base}/history/architecture` },
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
    url: `${base}/history/architecture`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#overview-title', '#plan-title', '#materials-title'],
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

export default function ArchitecturePage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Overview />
      <PlanAxes />
      <MaterialsDetails />
      <Typologies />
      <CivicSetPieces />
      <Trail />
      <Maintenance />
      <Glossary />
      <FAQ />
      <Sources />
      <JsonLd />
    </>
  )
}
