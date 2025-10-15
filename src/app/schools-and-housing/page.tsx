// src/app/schools-and-housing/page.tsx
// Schools & Housing in/around Saltaire — cornerstone v1 (server-only, static, SEO/E-E-A-T)
// - No client components or event handlers (great CWV)
// - Practical, evergreen copy + internal links to your deeper guides
// - Outbound links only to trusted first-party sources (Ofsted, Bradford Council, National Rail)
// - JSON-LD: WebPage + ItemList (resources) + FAQPage + BreadcrumbList
// - Avoids volatile numbers (house prices, council tax) in prose; links to live sources instead

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'Schools & Housing in Saltaire — catchments, Ofsted links, conservation area, buying & renting (local guide)',
  description:
    'A practical local overview of schools and housing in/around Saltaire: Ofsted links, Bradford admissions, conservation area basics, house-hunting tips, council tax and commuting.',
  alternates: { canonical: `${site.url}/schools-and-housing` },
  openGraph: {
    title: 'Schools & Housing in Saltaire — local guide',
    description:
      'Catchments and Ofsted links for nearby schools, plus housing types, conservation rules, where to look for listings, council tax info and commuting from Saltaire.',
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
    note: 'Official catchment/priority area guidance and how places are allocated.',
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
    note: 'Nearby option; check distance and priority area.',
  },
  {
    name: 'Bradford Council – Saltaire Conservation Area',
    href: 'https://www.bradford.gov.uk/environment/conservation-areas/saltaire-conservation-area/',
    note: 'Character appraisal + what the designation means for changes to homes.',
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
    note: 'Facilities & accessibility; trains via Airedale Line.',
  },
]

/* ----------------------------- Schools list ------------------------------- */
/** We list a couple of nearby primaries + how to check secondaries.
    Avoid definitive “catchment” promises; always link to council. */
const SCHOOLS: School[] = [
  {
    name: 'Saltaire Primary School',
    phase: 'Primary',
    distanceNote: 'Central Saltaire (Albert Road; minutes from Victoria Road)',
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
    distanceNote: 'Nearby (check distance/priority area from your address)',
    ofstedUrl: 'https://reports.ofsted.gov.uk/provider/21/146536',
    website: 'https://www.shipleyceprimary.org.uk/',
    admissionsUrl:
      'https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/',
    notes: [
      'Ofsted “Good” at last published inspection; see the Ofsted profile.',
      'Admissions via Bradford Council; faith criteria may apply.',
    ],
  },
]

/* ------------------------------- FAQ data --------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How do school places work in Saltaire?',
    a: 'Bradford Council manages allocations for local primaries and secondaries. Use their priority area maps and admissions pages to understand how places are offered. See our links below.',
  },
  {
    q: 'Which secondary school catchment is Saltaire in?',
    a: 'Catchments/priority areas vary by address and change over time. Always check the latest Bradford Council admissions guidance and each school’s oversubscription criteria before applying.',
  },
  {
    q: 'Is Saltaire good for families?',
    a: 'It’s compact, with the station, Salts Mill, canal towpath and Roberts Park all minutes apart. The park has two play areas and a step-free riverside loop.',
  },
  {
    q: 'What types of homes are common in Saltaire?',
    a: 'Mainly mid-19th-century stone terraces and some apartments in converted mill buildings. The village is a conservation area and a UNESCO World Heritage Site, which shapes alterations and materials.',
  },
  {
    q: 'Can I change windows/doors or add a dormer?',
    a: 'In the Saltaire Conservation Area there are additional controls to protect character. Always read the conservation guidance and speak to the council before works.',
  },
  {
    q: 'How do I check current house prices or rents?',
    a: 'Use the big portals’ sold-price pages for trend context, then watch current listings filters for your budget. Sold-price data lags the market by a few months.',
  },
  {
    q: 'What’s Council Tax in Saltaire?',
    a: 'It depends on the property’s band and the district’s annual rates. Use Bradford Council’s live “bands & amounts” page for the current year.',
  },
  {
    q: 'Is commuting easy?',
    a: 'Yes. Saltaire station is on the Airedale Line for Bradford/Leeds and up to Skipton/Ilkley. Many residents walk or cycle along the canal for local trips.',
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

/* -------------------------------- Components ------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Schools &amp; Housing</li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Schools &amp; Housing in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A practical local overview: how to check catchments and Ofsted reports, what conservation area status means
            for homes, where to watch market trends, and commuting basics from Saltaire station.
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
              <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/" target="_blank" rel="noopener noreferrer">
                Bradford Council admissions &amp; maps
              </a>{' '}
              and the Ofsted profiles linked below. Then short-list homes after you understand likely allocations.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function SchoolsOverview() {
  return (
    <section id="schools" aria-labelledby="schools-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="schools-title">Schools overview</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire sits within the City of Bradford district. Primary allocations and secondary admissions are managed by
        the council, and priority areas may change. Always check the latest official guidance before you apply.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {SCHOOLS.map((s) => (
          <article key={s.name} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{s.name} <span className="ml-2 text-sm font-normal text-gray-500">({s.phase})</span></h3>
              <p className="mt-1 text-gray-700">{s.distanceNote}</p>
              <ul className="mt-2 flex flex-wrap gap-3 text-sm">
                {s.website && (
                  <li>
                    <a className="underline underline-offset-4" href={s.website} target="_blank" rel="noopener noreferrer">School website</a>
                  </li>
                )}
                {s.ofstedUrl && (
                  <li>
                    <a className="underline underline-offset-4" href={s.ofstedUrl} target="_blank" rel="noopener noreferrer">Ofsted profile</a>
                  </li>
                )}
                {s.admissionsUrl && (
                  <li>
                    <a className="underline underline-offset-4" href={s.admissionsUrl} target="_blank" rel="noopener noreferrer">Admissions</a>
                  </li>
                )}
              </ul>
              <ul className="mt-3 list-disc pl-5 text-gray-700">
                {s.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </article>
        ))}
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Secondaries &amp; how to check</h3>
            <p className="mt-2 text-gray-700">
              Secondary places depend on distance, priority criteria and availability. Use Bradford’s official pages to
              check current priority areas and each school’s oversubscription policy. Consider travel to Beckfoot,
              Bingley/Shipley and other nearby options and confirm transport.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/" target="_blank" rel="noopener noreferrer">
                  Bradford Council – secondary admissions
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/" target="_blank" rel="noopener noreferrer">
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

function HousingOverview() {
  return (
    <section id="housing" aria-labelledby="housing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="housing-title">Housing overview</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The core village is a mid-19th-century model settlement with Italianate stone terraces, purpose-built civic
        buildings and converted mill spaces. It is a designated Conservation Area and part of a UNESCO World Heritage
        Site, so external alterations are more controlled than in typical suburbs.
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
                <a className="underline underline-offset-4" href="https://www.rightmove.co.uk/house-prices/saltaire.html" target="_blank" rel="noopener noreferrer">
                  Rightmove – sold prices (Saltaire)
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="https://www.zoopla.co.uk/house-prices/saltaire/" target="_blank" rel="noopener noreferrer">
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
              walls. Check whether Article 4 Directions or guidance apply and get advice before planning works.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/environment/conservation-areas/saltaire-conservation-area/" target="_blank" rel="noopener noreferrer">
                  Bradford – Saltaire Conservation Area
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="https://whc.unesco.org/en/list/1028/" target="_blank" rel="noopener noreferrer">
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
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/council-tax/general-council-tax-information/council-tax-bands-and-amounts/" target="_blank" rel="noopener noreferrer">
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
              Saltaire station is on the Airedale Line for Bradford, Leeds and up the Aire valley. Most of the village
              core is walkable; the canal towpath is popular for local trips. Check live rail accessibility and
              facilities before travelling.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="https://www.nationalrail.co.uk/stations/saltaire/" target="_blank" rel="noopener noreferrer">
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
    <section aria-label="Explore more" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan the rest of your move</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Get a feel for weekends and school-run reality: try our walks, food &amp; drink picks, and practical
              parking notes. Explore with original photos and step-free details.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/walks" className="btn btn-primary">Best walks</Link>
              <Link href="/food-drink" className="btn btn-outline">Eat &amp; Drink</Link>
              <Link href="/parking" className="btn btn-ghost">Parking</Link>
              <Link href="/plan/getting-here" className="btn btn-muted">Getting here</Link>
            </div>
          </div>
          <div className="callout">
            <h3 className="text-lg font-semibold">Local tip</h3>
            <p className="mt-2 text-gray-700">
              Viewing day? Walk the canal and Roberts Park to judge noise, footfall and light. Evenings and sunny
              weekends feel different to weekday mornings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
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
    <section id="resources" aria-labelledby="resources-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="resources-title">Official links &amp; resources</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use these first. They’re authoritative and updated regularly.
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
              {r.note ? <p className="mt-1 text-sm text-gray-700">{r.note}</p> : null}
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
    name: 'Schools & Housing in Saltaire',
    url: `${base}/schools-and-housing`,
    description:
      'How to check school catchments and Ofsted reports, understand conservation area rules, review market context and commuting from Saltaire.',
  }

  const resources = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Official resources for schools and housing in Saltaire',
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
      { '@type': 'ListItem', position: 2, name: 'Schools & Housing', item: `${base}/schools-and-housing` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resources) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function SchoolsAndHousingPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <SchoolsOverview />
      <HousingOverview />
      <FAQ />
      <ResourceDirectory />
      <CTA />
      <JsonLd />
    </>
  )
}
