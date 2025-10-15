// src/app/history/church/page.tsx
// Saltaire Congregational Church (now Saltaire United Reformed Church)
// Cornerstone history page — static, accessible, SEO-rich, CWV-friendly
// - Server component only (no client JS)
// - Strong internal linking to History hub, Timeline, Architecture
// - JSON-LD: WebPage + BreadcrumbList + Church/Place + FAQPage
// - Facts checked against UNESCO/Historic England/URC/Bradford/major refs

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* ---------------------------------- Meta ---------------------------------- */

export const metadata: Metadata = {
  title:
    'Saltaire Congregational Church (URC): history, architecture & mausoleum (1856–1859)',
  description:
    'The Italianate church at the heart of Saltaire (now URC): Lockwood & Mawson design, 1859 opening, Salt family mausoleum, Grade I listing, and how to visit.',
  alternates: { canonical: `${site.url}/history/church` },
  openGraph: {
    title:
      'Saltaire Congregational Church (United Reformed Church) — history & architecture',
    description:
      'Why the church was the first public building in Saltaire, how it was designed, what to look for (portico, tower, dome), and details of Titus Salt’s mausoleum.',
    url: `${site.url}/history/church`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* ---------------------------------- Data ---------------------------------- */

const UPDATED = '2025-10-12'

// Essentials drawn from reputable sources (UNESCO/Historic England/URC, etc.)
const CHURCH = {
  name: 'Saltaire United Reformed Church',
  original: 'Saltaire Congregational Church',
  address: 'Victoria Road, Saltaire, West Yorkshire, BD18 3LF',
  geo: { lat: 53.83889, lng: -1.79083 }, // Wikipedia coordinates
  built: '1856 (foundation stone) – 1859 (opened)',
  architects: 'Lockwood & Mawson',
  style: 'Italianate Classical',
  status: 'Grade I listed (22 Nov 1966, NHLE 1314229)',
  inside: [
    'Single nave without aisles; large clear windows',
    'Two large chandeliers (originally gas-lit)',
    'Organ added 1890 (Conacher & Co; later rebuilds)',
    'South-side Salt family mausoleum (Titus Salt interred 1877)',
  ],
  outside: [
    'Semi-circular portico at west front',
    'Round tower with clock faces; octagonal colonnade and dome',
    'Ashlar masonry; Welsh slate roof',
  ],
  links: {
    wiki: 'https://en.wikipedia.org/wiki/Saltaire_United_Reformed_Church',
    urc: 'https://www.saltaireurc.org.uk/',
    visiting: 'https://www.saltaireurc.org.uk/visiting-the-church/',
    nct: 'https://www.nationalchurchestrust.org/church/saltaire-united-reformed-church-saltaire',
    he_list_search:
      'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire',
    park: '/roberts-park',
    mill: '/salts-mill',
    history: '/history',
    timeline: '/history/timeline',
    architecture: '/history/architecture',
  },
}

type Fact = { label: string; value: string | React.ReactNode }
const QUICK_FACTS: Fact[] = [
  { label: 'Official name', value: `${CHURCH.name} (originally ${CHURCH.original})` },
  { label: 'Architects', value: CHURCH.architects },
  { label: 'Style', value: CHURCH.style },
  { label: 'Built / opened', value: CHURCH.built },
  { label: 'Listing', value: CHURCH.status },
  { label: 'Address', value: CHURCH.address },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'When was the church built?',
    a: 'The foundation stone was laid in 1856; the church opened in 1859.',
  },
  {
    q: 'Who designed it?',
    a: 'Lockwood & Mawson, the architects behind most of Saltaire’s civic and residential buildings.',
  },
  {
    q: 'What style is it?',
    a: 'Italianate Classical — often described as a “Cathedral of Congregationalism” for its quality and grandeur.',
  },
  {
    q: 'Is Sir Titus Salt buried here?',
    a: 'Yes. The Salt family mausoleum is on the south side of the nave; Titus Salt was interred in 1877.',
  },
  {
    q: 'Can I visit inside?',
    a: 'The church is usually open on Sunday afternoons or during events and tours; check the official URC website for current times.',
  },
]

/* ------------------------------- UI Primitives ----------------------------- */

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
          Church
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
            Saltaire Congregational Church (URC)
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The Italianate church at the heart of Saltaire, commissioned by Sir Titus Salt and opened
            in 1859. A landmark of Nonconformist architecture with a distinctive portico, tower and
            dome — and the Salt family mausoleum inside.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Grade I listed</li>
            <li className="badge">Lockwood &amp; Mawson</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Saltaire church frontage and tower (illustrative)"
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
    { href: '#architecture', label: 'Architecture highlights' },
    { href: '#mausoleum', label: 'Salt family mausoleum' },
    { href: '#visit', label: 'Visiting & services' },
    { href: '#access', label: 'Accessibility' },
    { href: '#photography', label: 'Photography tips' },
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
        Why the church matters
      </h2>
      <div className="prose mt-2 text-gray-700">
        <p>
          When Sir Titus Salt planned Saltaire, he commissioned a <em>Congregational</em> church as
          the first public building. Today it stands as the{' '}
          <strong>{CHURCH.name}</strong>, a centrepiece of the World Heritage Site and one of the
          most admired Nonconformist churches in England. Its Italianate Classical design, the
          dramatic west-front portico and the tower with dome make it instantly recognisable across
          the Aire valley.
        </p>
        <p>
          Inside, the single, aisle-less nave emphasises preaching and congregational worship, while
          the Salt family mausoleum connects the building closely to the village’s founder. The
          church is active, welcoming visitors, worshippers and couples celebrating weddings.
        </p>
        <p className="smallprint">
          Dates and details here summarise respected sources including Historic England, the
          UNESCO/Bradford documentation and the church’s own website.
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

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Exterior snapshot</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {CHURCH.outside.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="callout">
          <h3 className="text-lg font-semibold">Interior snapshot</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {CHURCH.inside.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        <span className="font-medium">Note:</span> Opening hours vary — see the{' '}
        <a className="underline underline-offset-4" href={CHURCH.links.visiting as any}>
          latest visiting information
        </a>
        .
      </p>
    </section>
  )
}

function Architecture() {
  return (
    <section id="architecture" aria-labelledby="arch-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="arch-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Architecture highlights (what to look for)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Portico, tower &amp; dome</h3>
            <p className="mt-2 text-gray-700">
              The west front has a semi-circular portico leading to a round clock tower. Above, an
              octagonal arrangement of columns supports the dome — an unusual silhouette for a
              Nonconformist church and a conscious, confident piece of classicism.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Single nave, clear glazing</h3>
            <p className="mt-2 text-gray-700">
              The aisle-less plan and large plain windows emphasise preaching and clarity. Look up
              to see the pair of grand chandeliers that once ran on gas.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Organ (1890)</h3>
            <p className="mt-2 text-gray-700">
              Installed by Conacher &amp; Co of Huddersfield in 1890 and subsequently rebuilt,
              the instrument contributes to a lively musical life.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Materials &amp; craftsmanship</h3>
            <p className="mt-2 text-gray-700">
              Local ashlar stonework and high-quality joinery reflect the broader Saltaire project’s
              ambition. The roof is Welsh slate; details are crisp and unified with the village.
            </p>
          </div>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        <p>
          In February 2020, part of the ceiling was damaged during Storm Dennis. Repairs and
          conservation have since progressed with recognition for the quality of workmanship. This
          ongoing care is central to the building’s long-term preservation.
        </p>
      </div>
    </section>
  )
}

function Mausoleum() {
  return (
    <section id="mausoleum" aria-labelledby="m-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="m-title" className="text-2xl font-bold tracking-tight md:text-3xl">Salt family mausoleum</h2>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="prose text-gray-700">
          <p>
            On the south side of the nave is the Salt family mausoleum — the resting place of Sir
            Titus Salt. It underlines how closely the church and village were tied to the life of
            their founder. Contemporary accounts describe the vast public turnout at Salt’s funeral
            procession in 1877.
          </p>
          <p>
            The mausoleum is classically detailed and forms part of the church’s carefully composed
            ensemble on Victoria Road, opposite Salts Mill’s main offices — a deliberate alignment
            between work, welfare and worship.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Detail of classical stone architecture (illustrative)"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function Visiting() {
  const googleMaps = `https://www.google.com/maps?q=${encodeURIComponent(
    `${CHURCH.name}, ${CHURCH.address}`,
  )}`

  return (
    <section id="visit" aria-labelledby="visit-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="visit-title" className="text-2xl font-bold tracking-tight md:text-3xl">Visiting & services</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">How to visit</h3>
            <p className="mt-2 text-gray-700">
              The church is often open on Sunday afternoons and for events/tours. Opening times do
              change — please check the{' '}
              <a className="underline underline-offset-4" href={CHURCH.links.visiting as any}>
                official visiting page
              </a>{' '}
              for the latest details.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                Address: <span className="whitespace-nowrap">{CHURCH.address}</span>
              </li>
              <li>
                Map:{' '}
                <a className="underline underline-offset-4" href={googleMaps}>
                  Google Maps
                </a>
              </li>
              <li>
                Combine with{' '}
                <Link className="underline underline-offset-4" href={CHURCH.links.mill as any}>
                  Salts Mill
                </Link>{' '}
                and a stroll to{' '}
                <Link className="underline underline-offset-4" href={CHURCH.links.park as any}>
                  Roberts Park
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Services & ceremonies</h3>
            <p className="mt-2 text-gray-700">
              Sunday worship and community activities run throughout the year, with weddings and
              concerts by arrangement. For current service times, weddings and bookings, see the{' '}
              <a className="underline underline-offset-4" href={CHURCH.links.urc as any}>
                church website
              </a>
              .
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Accessibility and photography policies can vary by event — please confirm with the
              church in advance if needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AccessibilityNotes() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="access-title" className="text-2xl font-bold tracking-tight md:text-3xl">Accessibility</h2>
      <div className="prose text-gray-700">
        <p>
          Surfaces around Victoria Road are generally level and the route from Saltaire station is
          short. Interior access arrangements can change during conservation works or events. If you
          have specific requirements (wheelchair access, step-free routes, quiet seating), contact
          the church team ahead of your visit.
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>Nearest station: <strong>Saltaire</strong> (approx. 3–5 minutes’ walk).</li>
          <li>Bus stops on Saltaire Road (Bingley/Bradford routes) a short walk away.</li>
          <li>See our <Link href="/plan/accessibility" className="underline underline-offset-4">Accessibility guide</Link> for the wider village.</li>
        </ul>
      </div>
    </section>
  )
}

function PhotographyTips() {
  return (
    <section id="photography" aria-labelledby="photo-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="photo-title" className="text-2xl font-bold tracking-tight md:text-3xl">Photography tips</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Outside</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>The west front with the portico and tower photographs best in afternoon light.</li>
              <li>Try a long lens from across Victoria Road to compress the dome and portico.</li>
              <li>Include Salts Mill offices opposite for a classic “work & worship” pairing.</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Inside</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Ask permission; avoid flash during services.</li>
              <li>Look for symmetry along the aisle-less nave and the chandeliers overhead.</li>
              <li>Be respectful near the mausoleum and during worship or private prayer.</li>
            </ul>
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
          <Link href={CHURCH.links.mill as any} className="font-medium underline-offset-4 hover:underline">
            Salts Mill
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            Hockney galleries, bookshops and cafés in the vast 1853 mill buildings.
          </p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href={CHURCH.links.park as any} className="font-medium underline-offset-4 hover:underline">
            Roberts Park
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            1871 riverside park with bandstand and Half Moon Café across the footbridge.
          </p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href={CHURCH.links.history as any} className="font-medium underline-offset-4 hover:underline">
            History hub
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            Start here for the background to the model village and its founder.
          </p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link
            href={CHURCH.links.timeline as any}
            className="font-medium underline-offset-4 hover:underline"
          >
            Saltaire timeline
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            Key dates from 1803 to UNESCO inscription and beyond.
          </p>
        </li>
      </ul>
    </section>
  )
}

function Sources() {
  const items: Array<{ title: string; href: string; note: string }> = [
    {
      title: 'Wikipedia — Saltaire United Reformed Church',
      href: CHURCH.links.wiki,
      note: 'Summary of dates, architects, style, features and listing (with citations).',
    }, // :contentReference[oaicite:0]{index=0}
    {
      title: 'URC — Saltaire (official site): Visiting information',
      href: CHURCH.links.visiting,
      note: 'Opening guidance and contact.',
    }, // :contentReference[oaicite:1]{index=1}
    {
      title: 'National Churches Trust — entry for Saltaire URC',
      href: CHURCH.links.nct,
      note: 'Visitor opening pattern and address.',
    }, // :contentReference[oaicite:2]{index=2}
    {
      title: 'Historic England — Saltaire (list search)',
      href: CHURCH.links.he_list_search,
      note: 'National Heritage List context; church is Grade I (NHLE 1314229).',
    }, // :contentReference[oaicite:3]{index=3}
    {
      title: 'Visit Bradford — church listing',
      href: 'https://www.visitbradford.com/things-to-do/saltaire-united-reformed-church-p1620811',
      note: 'Practical visitor notes and contact route.',
    }, // :contentReference[oaicite:4]{index=4}
    {
      title: 'Victorian Web — Lockwood & Mawson, URC Saltaire',
      href: 'https://victorianweb.org/art/architecture/lockwood/4.html',
      note: 'Architectural commentary and context.',
    }, // :contentReference[oaicite:5]{index=5}
    {
      title: 'Cliveden Conservation — award for repair works (2023)',
      href: 'https://clivedenconservation.com/storm-damaged-saltaire-united-reformed-church-wins-gold-at-the-national-churches-awards/',
      note: 'Recognition for recent conservation after storm damage.',
    }, // :contentReference[oaicite:6]{index=6}
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
        We prioritise primary/official sources and keep this page updated.
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
  const churchPlace = {
    '@context': 'https://schema.org',
    '@type': ['Church', 'TouristAttraction', 'Place'],
    name: CHURCH.name,
    alternateName: CHURCH.original,
    url: `${base}/history/church`,
    image: `${base}/images/og/church.jpg`, // falls back to OG placeholder if not present
    description:
      'Italianate Classical church at the heart of Saltaire (1859), designed by Lockwood & Mawson with a distinctive portico, tower and dome; Grade I listed.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Victoria Road',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      postalCode: 'BD18 3LF',
      addressCountry: 'GB',
    },
    geo: { '@type': 'GeoCoordinates', latitude: CHURCH.geo.lat, longitude: CHURCH.geo.lng },
    isAccessibleForFree: true,
    sameAs: [
      CHURCH.links.wiki,
      'https://www.facebook.com/saltaireurc/',
      CHURCH.links.nct,
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire Congregational Church (URC)',
    url: `${base}/history/church`,
    description:
      'History, architecture and visiting guide to the Italianate church at the centre of Saltaire, including the Salt family mausoleum.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Church', item: `${base}/history/church` },
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(churchPlace) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ChurchPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Overview />
      <QuickFacts />
      <Architecture />
      <Mausoleum />
      <Visiting />
      <AccessibilityNotes />
      <PhotographyTips />
      <Nearby />
      <Sources />
      <FAQ />
      <JsonLd />
    </>
  )
}
