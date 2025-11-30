// src/app/schools-and-housing/page.tsx
// Schools & Housing in/around Saltaire & Shipley — cornerstone v2
// - Server-only, static HTML (dynamic='error') for great CWV
// - Practical, evergreen copy + internal links to deeper guides
// - Outbound links only to trusted sources (Ofsted, Bradford Council, National Rail, portals)
// - JSON-LD: WebPage + ItemList (resources) + FAQPage + BreadcrumbList
// - Covers both Saltaire and neighbouring Shipley (schools, housing, commuting)

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Schools & Housing in Saltaire & Shipley — catchments, Ofsted links, conservation area, buying & renting',
  description:
    'Local overview of schools and housing in/around Saltaire & Shipley: primary options, Ofsted and admissions links, conservation area basics, where to watch prices, council tax and commuting.',
  alternates: { canonical: `${site.url}/schools-and-housing` },
  openGraph: {
    title: 'Schools & Housing in Saltaire & Shipley — local guide',
    description:
      'Catchments and Ofsted links for nearby primaries, plus housing types, conservation rules, where to monitor the market, council tax info and commuting from Saltaire & Shipley.',
    url: `${site.url}/schools-and-housing`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* -------------------------------- Types ----------------------------------- */

type Resource = { name: string; href: string; note?: string }

type School = {
  name: string
  phase: 'Primary' | 'Secondary'
  distanceNote: string
  ofstedUrl?: string
  website?: string
  admissionsUrl?: string
  notes: string[]
}

/* ------------------------------ Link data --------------------------------- */
/** Keep links minimal and first-party for trust. */
const RESOURCES: Resource[] = [
  {
    name: 'Bradford Council – school admissions & priority area maps',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/',
    note: 'Official catchment/priority area guidance and how places are allocated across the district.',
  },
  {
    name: 'Ofsted – Saltaire Primary School profile',
    href: 'https://reports.ofsted.gov.uk/provider/21/107270',
    note: 'Latest Ofsted rating & reports for Saltaire Primary (Albert Road).',
  },
  {
    name: 'Saltaire Primary School – admissions (school site)',
    href: 'https://www.saltaireprimaryschool.co.uk/web/admissions/420417',
    note: 'Explains that Bradford Council manages allocation; SEND notes.',
  },
  {
    name: 'Ofsted – Shipley C of E Primary School',
    href: 'https://reports.ofsted.gov.uk/provider/21/146536',
    note: 'Nearby primary; check distance and priority area from your address.',
  },
  {
    name: 'Shipley C of E Primary School – website',
    href: 'https://www.shipleyceprimary.org.uk/',
    note: 'Prospectus, policies and contact details.',
  },
  {
    name: "St Walburga’s Catholic Primary School, A Voluntary Academy – website",
    href: 'https://wal.bcwcat.co.uk',
    note: 'Catholic primary option in Shipley; see site and Ofsted for latest details.',
  },
  {
    name: 'Bradford Council – Saltaire Conservation Area',
    href: 'https://www.bradford.gov.uk/environment/conservation-areas/saltaire-conservation-area/',
    note: 'Character appraisal + what designation means for changes to homes.',
  },
  {
    name: 'UNESCO World Heritage listing – Saltaire',
    href: 'https://whc.unesco.org/en/list/1028/',
    note: 'Background to the site’s Outstanding Universal Value.',
  },
  {
    name: 'Rightmove – Saltaire area / sold prices',
    href: 'https://www.rightmove.co.uk/house-prices/saltaire.html',
    note: 'Indicative sold prices and trends (updates over time).',
  },
  {
    name: 'Zoopla – Saltaire sold prices',
    href: 'https://www.zoopla.co.uk/house-prices/saltaire/',
    note: 'Alternative view on recent sales; pulls HM Land Registry data.',
  },
  {
    name: 'Bradford Council – Council Tax bands & amounts',
    href: 'https://www.bradford.gov.uk/council-tax/general-council-tax-information/council-tax-bands-and-amounts/',
    note: 'Live annual figures for the district (varies by band).',
  },
  {
    name: 'National Rail – Saltaire station',
    href: 'https://www.nationalrail.co.uk/stations/saltaire/',
    note: 'Facilities & accessibility; trains via the Airedale Line.',
  },
]

/* ----------------------------- Schools list ------------------------------- */
/** We list a few nearby primaries + how to check secondaries.
    Avoid definitive “catchment” promises; always link to council. */
const SCHOOLS: School[] = [
  {
    name: 'Saltaire Primary School',
    phase: 'Primary',
    distanceNote: 'Central Saltaire (Albert Road; minutes from Victoria Road).',
    ofstedUrl: 'https://reports.ofsted.gov.uk/provider/21/107270',
    website: 'https://www.saltaireprimaryschool.co.uk/',
    admissionsUrl:
      'https://www.saltaireprimaryschool.co.uk/web/admissions/420417',
    notes: [
      'Oversubscription and allocations handled by Bradford Council.',
      'Step-free approaches via village streets; check current accessibility notes with the school.',
    ],
  },
  {
    name: 'Shipley Church of England Primary School',
    phase: 'Primary',
    distanceNote: 'Nearby in Shipley (check distance/priority area from your address).',
    ofstedUrl: 'https://reports.ofsted.gov.uk/provider/21/146536',
    website: 'https://www.shipleyceprimary.org.uk/',
    admissionsUrl:
      'https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/',
    notes: [
      'Ofsted “Good” at last published inspection; see the Ofsted profile for updates.',
      'Admissions via Bradford Council; faith criteria may apply.',
    ],
  },
  {
    name: 'St Walburga’s Catholic Primary School, A Voluntary Academy',
    phase: 'Primary',
    distanceNote: 'Shipley (Catholic primary option; check transport and priority area).',
    ofstedUrl: 'https://reports.ofsted.gov.uk/provider/21/142947',
    website: 'https://wal.bcwcat.co.uk',
    admissionsUrl:
      'https://wal.bcwcat.co.uk/admissions/',
    notes: [
      'Part of the Blessed Christopher Wharton Catholic Academy Trust.',
      'Check the school’s own admissions policy alongside Bradford Council guidance, especially for faith criteria.',
    ],
  },
]

/* ------------------------------- FAQ data --------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How do school places work in Saltaire & Shipley?',
    a: 'Bradford Council manages allocations for local primaries and secondaries. Use their priority area maps and admissions pages to understand how places are offered from your specific street, then read each school’s oversubscription criteria.',
  },
  {
    q: 'Which secondary catchments cover Saltaire & Shipley?',
    a: 'Catchments and priority areas vary by address and change over time. Use the latest Bradford Council admissions guidance and check individual schools (for example Beckfoot, Titus Salt and others) for current criteria and typical intake patterns.',
  },
  {
    q: 'Is Saltaire & Shipley a good area for families?',
    a: 'Many families like the compact feel: Saltaire has the station, canal and Roberts Park in easy reach, while Shipley adds more shops, services and transport connections. Play areas, sports clubs and classes are available across both.',
  },
  {
    q: 'What types of homes are common in Saltaire & Shipley?',
    a: 'Saltaire is mainly 19th-century stone terraces and mill conversions; Shipley mixes older terraces, post-war semis and apartments. The core village is a Conservation Area and part of a UNESCO World Heritage Site, which shapes alterations and materials.',
  },
  {
    q: 'Can I change windows/doors or add a dormer in Saltaire?',
    a: 'In the Saltaire Conservation Area there are extra controls to protect character. Always read the conservation guidance and speak to the council before works, especially for windows, roofing, boundary walls or roof extensions.',
  },
  {
    q: 'How do I check current house prices or rents?',
    a: 'Use sold-price pages on the big portals for background, then watch current listings and talk to local agents. Sold-price data lags the market by a few months, so treat it as context rather than a quote.',
  },
  {
    q: 'What’s Council Tax in Saltaire & Shipley?',
    a: 'Council Tax depends on the property’s band and the district’s yearly rates. Use Bradford Council’s live “bands & amounts” page for the current year and check your bill for any additional parish or levy items.',
  },
  {
    q: 'Is commuting easy from Saltaire & Shipley?',
    a: 'Yes. Saltaire station is on the Airedale Line for Bradford, Leeds and up the Aire valley. Shipley adds junctions for multiple lines and more bus options. Many residents walk or cycle along the canal for local trips.',
  },
]

/* ------------------------------ UI helpers -------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* -------------------------------- Components ------------------------------ */

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
          Schools &amp; Housing
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700/80">
            Moving to Saltaire or Shipley
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Schools &amp; housing in Saltaire &amp; Shipley
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A practical local overview: how to check catchments and Ofsted reports, what conservation area status means
            for homes in Saltaire, where to watch market trends, and commuting basics from both Saltaire and Shipley stations.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Official links</li>
            <li className="badge">Conservation area</li>
            <li className="badge">Families &amp; commuting</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <p className="text-sm text-gray-700">
              Moving with kids? Start with{' '}
              <a
                className="underline underline-offset-4"
                href="https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bradford Council admissions &amp; maps
              </a>{' '}
              and the Ofsted profiles linked below. Short-list schools first, then compare homes
              in Saltaire and nearby Shipley with that context in mind.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#schools', label: 'Schools overview' },
    { href: '#housing', label: 'Housing overview' },
    { href: '#neighbourhoods', label: 'Saltaire vs Shipley' },
    { href: '#resources', label: 'Official links' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav
        aria-label="On this page"
        className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
      >
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
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

function SchoolsOverview() {
  return (
    <section
      id="schools"
      aria-labelledby="schools-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="schools-title">Schools overview</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire and Shipley sit within the City of Bradford district. Primary allocations and secondary admissions are
        managed by the council, and priority areas may change. Always check the latest official guidance before you apply.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SCHOOLS.map((s) => (
          <article key={s.name} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">
                {s.name}{' '}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({s.phase})
                </span>
              </h3>
              <p className="mt-1 text-gray-700">{s.distanceNote}</p>
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {s.website && (
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      School website
                    </a>
                  </li>
                )}
                {s.ofstedUrl && (
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href={s.ofstedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ofsted profile
                    </a>
                  </li>
                )}
                {s.admissionsUrl && (
                  <li>
                    <a
                      className="underline underline-offset-4"
                      href={s.admissionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admissions
                    </a>
                  </li>
                )}
              </ul>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                {s.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Secondaries &amp; how to check</h3>
            <p className="mt-2 text-gray-700">
              Secondary places depend on distance, priority criteria and availability across the wider Bradford area.
              Use Bradford’s official pages to check current priority areas and each school’s oversubscription policy,
              then consider travel to options such as Beckfoot, Titus Salt and other nearby schools.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.bradford.gov.uk/education-and-skills/school-admissions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bradford Council – secondary admissions
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Priority area maps
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> If school proximity matters, confirm the exact street address on the council’s priority
          area map and review the most recent Ofsted report. For SEND queries, contact the school and council early.
        </p>
      </div>
    </section>
  )
}

function NeighbourhoodSnapshot() {
  return (
    <section
      id="neighbourhoods"
      aria-labelledby="neighbourhoods-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <SectionHeading id="neighbourhoods-title">
          Saltaire vs Shipley – quick feel
        </SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Many people look at both Saltaire and Shipley when they&apos;re moving. Here&apos;s a simple, non-estate-agent view
          of how they feel side-by-side.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Saltaire</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Model village feel with tightly packed stone terraces.</li>
                <li>Immediate access to Salts Mill, Roberts Park and the canal.</li>
                <li>Quieter evenings; busy on sunny weekends and festival days.</li>
                <li>Conservation rules tighter on windows, roofs and external changes.</li>
              </ul>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Shipley</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>More mixed housing: terraces, semis and flats.</li>
                <li>Town-centre services, supermarkets and extra bus/rail links.</li>
                <li>Often a little more choice on budget, size and parking.</li>
                <li>Still walkable to Saltaire, canal and the valley&apos;s green space.</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function HousingOverview() {
  return (
    <section
      id="housing"
      aria-labelledby="housing-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="housing-title">Housing overview</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The core Saltaire village is a mid-19th-century model settlement with Italianate stone terraces, purpose-built
        civic buildings and converted mill spaces. Shipley adds more mixed-age streets, town-centre apartments and
        post-war semis. Saltaire is a designated Conservation Area and part of a UNESCO World Heritage Site, so external
        alterations are more controlled than in typical suburbs.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Buying &amp; renting</h3>
            <p className="mt-2 text-gray-700">
              For an up-to-date sense of value, cross-check sold-price pages with current listings. Mill-side apartments
              and village terraces tend to move quickly when well-presented. Always factor energy performance, sound
              insulation and any service charges in conversions.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.rightmove.co.uk/house-prices/saltaire.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rightmove – sold prices (Saltaire)
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.zoopla.co.uk/house-prices/saltaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zoopla – sold prices (Saltaire)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Conservation area basics</h3>
            <p className="mt-2 text-gray-700">
              Expect tighter rules around windows/doors, roofing materials, stonework and features such as boundary
              walls in the Saltaire Conservation Area. Check whether Article&nbsp;4 Directions or guidance apply and get
              advice before planning works.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.bradford.gov.uk/environment/conservation-areas/saltaire-conservation-area/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bradford – Saltaire Conservation Area
                </a>
              </li>
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://whc.unesco.org/en/list/1028/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UNESCO World Heritage – Saltaire
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Council Tax &amp; running costs</h3>
            <p className="mt-2 text-gray-700">
              Council Tax depends on the property’s band and the district’s yearly rates. Use Bradford’s live calculator
              for current amounts and read your bill carefully for any parish/levy items.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.bradford.gov.uk/council-tax/general-council-tax-information/council-tax-bands-and-amounts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bradford – Council Tax bands &amp; amounts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Commuting &amp; transport</h3>
            <p className="mt-2 text-gray-700">
              Saltaire station is on the Airedale Line for Bradford, Leeds and up the Aire valley. Shipley adds junctions
              for multiple lines and more bus options. Most of the village core is walkable; the canal towpath is popular
              for local trips. Check live rail accessibility and facilities before travelling.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a
                  className="underline underline-offset-4"
                  href="https://www.nationalrail.co.uk/stations/saltaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Rail – Saltaire station
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-700">
        <strong>Heads-up:</strong> House-price commentary in the news can lag what’s happening on a specific street by
        months. Use sold-price data for context, then speak to local agents and check on-the-day viewing activity.
      </p>
    </section>
  )
}

function CTA() {
  return (
    <section
      aria-label="Explore more"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan the rest of your move</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Get a feel for weekends and school-run reality: try our walks, food &amp; drink picks, and practical
              parking notes. Explore with original photos and step-free details around Saltaire and Shipley.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/walks" className="btn btn-primary">
                Best walks
              </Link>
              <Link href="/food-drink" className="btn btn-outline">
                Eat &amp; drink
              </Link>
              <Link href="/parking" className="btn btn-ghost">
                Parking
              </Link>
              <Link href="/plan/getting-here" className="btn btn-muted">
                Getting here
              </Link>
            </div>
          </div>
          <div className="callout">
            <h3 className="text-lg font-semibold">Local tip</h3>
            <p className="mt-2 text-gray-700">
              Viewing day? Walk the canal and Roberts Park to judge noise, footfall and light. Compare how a Saltaire
              terrace and a Shipley side street feel at school-run time vs a quiet weekday morning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
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
      {/* FAQ JSON-LD for this section only */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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

function ResourceDirectory() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="resources-title">
        Official links &amp; resources
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use these first. They&apos;re authoritative and updated regularly.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group card card-hover"
          >
            <div className="card-body">
              <h3 className="text-lg font-semibold underline decoration-gray-300 underline-offset-4 group-hover:decoration-black">
                {r.name}
              </h3>
              {r.note ? (
                <p className="mt-1 text-sm text-gray-700">{r.note}</p>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Schools & Housing in Saltaire & Shipley',
    url: `${base}/schools-and-housing`,
    description:
      'How to check school catchments and Ofsted reports, understand conservation area rules, review market context and commuting from Saltaire & Shipley.',
  }

  const resources = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Official resources for schools and housing in Saltaire & Shipley',
    numberOfItems: RESOURCES.length,
    itemListElement: RESOURCES.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.name,
      url: r.href,
      description: r.note,
    })),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Schools & Housing',
        item: `${base}/schools-and-housing`,
      },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resources) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function SchoolsAndHousingPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <OnThisPage />
      <SchoolsOverview />
      <NeighbourhoodSnapshot />
      <HousingOverview />
      <FAQ />
      <ResourceDirectory />
      <CTA />
      <JsonLd />
    </>
  )
}
