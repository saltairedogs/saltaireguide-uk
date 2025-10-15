// src/app/housing/page.tsx
// Housing in & around Saltaire — cornerstone v1 (server-only, static, SEO/E-E-A-T)
// - No client components or handlers (great CWV)
// - Sections: Overview, Conservation & planning, Housing types, Buying checklist,
//   Renting checklist, Price-paid & research, Flood & environmental checks,
//   Energy & EPC, Council Tax, Leasehold & service charges, Surveys, Conveyancing,
//   New-build vs conversions, Noise/transport & lifestyle, Moving with schools,
//   Resources directory, FAQs, CTA
// - JSON-LD: WebPage + BreadcrumbList + ItemList (resources) + FAQPage + HowTo (buying)
// - Outbound links: first-party + major data portals only
// - Internal links: Parking, Plan/Getting Here, Schools & Housing, Walks, Food & Drink

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'Housing in Saltaire — conservation rules, buying & renting checklists, EPC, Council Tax, flood checks (local guide)',
  description:
    'A practical, evergreen housing guide for Saltaire: conservation area basics & Article 4, buying/renting checklists, EPC & energy, Council Tax, price-paid data and flood checks — with trusted official links.',
  alternates: { canonical: `${site.url}/housing` },
  openGraph: {
    title: 'Housing in Saltaire — local, practical guide',
    description:
      'Understand the conservation area, plan a purchase or tenancy with checklists, check EPC & Council Tax, review price-paid data and flood info. All links to official sources.',
    url: `${site.url}/housing`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* -------------------------------- Types ----------------------------------- */

type Resource = { name: string; href: string; note?: string }
type Step = { title: string; body: string; tip?: string }
type QA = { q: string; a: string }

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* ------------------------------ Resources --------------------------------- */
/** Authoritative links only; we avoid fragile third-party blogs. */
const RESOURCES: Resource[] = [
  {
    name: 'Bradford Council — Saltaire Conservation Area (official)',
    href: 'https://www.bradford.gov.uk/environment/conservation-areas/saltaire-conservation-area/',
    note: 'Character appraisal/assessment and what conservation status means for alterations.',
  },
  {
    name: 'Saltaire Conservation Area appraisal (PDF)',
    href: 'https://www.bradford.gov.uk/media/qrqn23yy/saltaireappraisal.pdf',
    note: 'Background appraisal document with management proposals.',
  },
  {
    name: 'Bradford Council — Article 4 Directions',
    href: 'https://www.bradford.gov.uk/environment/article-4-directions/article-4-directions/',
    note: 'Where certain permitted development rights are withdrawn (more control on changes).',
  },
  {
    name: 'Do I need planning permission? (Bradford Council)',
    href: 'https://www.bradford.gov.uk/planning-and-building-control/planning-application-and-building-regulations-advice/do-i-need-planning-permission-advice-for-householders/',
    note: 'Check if your intended home works need consent (incl. conservation/World Heritage notes).',
  },
  {
    name: 'Council Tax bands & amounts (Bradford Council)',
    href: 'https://www.bradford.gov.uk/council-tax/general-council-tax-information/council-tax-bands-and-amounts/',
    note: 'Live annual figures and banding information for the district.',
  },
  {
    name: 'Council Tax bills info (2025–26) (Bradford Council)',
    href: 'https://www.bradford.gov.uk/council-tax/council-tax-bills/council-tax-bills/',
    note: 'How to read the bill; where to find yearly amounts and discounts.',
  },
  {
    name: 'GOV.UK — EPC register (find an energy certificate)',
    href: 'https://www.gov.uk/find-energy-certificate',
    note: 'Search EPCs by address for energy performance and recommendations.',
  },
  {
    name: 'HM Land Registry — Price Paid Data (collection)',
    href: 'https://www.gov.uk/government/collections/price-paid-data',
    note: 'Official sold prices; lagged but authoritative.',
  },
  {
    name: 'Land Registry — price paid dataset search (Open Data app)',
    href: 'https://landregistry.data.gov.uk/app/ppd/?relative_url_root=%2Fapp%2Fppd',
    note: 'Query address/streets, export CSV.',
  },
  {
    name: 'Rightmove — Saltaire sold prices (last year view)',
    href: 'https://www.rightmove.co.uk/house-prices/saltaire.html',
    note: 'Aggregated view of Land Registry; helpful for quick comps.',
  },
  {
    name: 'Zoopla — Saltaire house prices',
    href: 'https://www.zoopla.co.uk/house-prices/saltaire/',
    note: 'Alternative sold-price cut; often shows type averages.',
  },
  {
    name: 'Zoopla — properties for sale in Saltaire',
    href: 'https://www.zoopla.co.uk/for-sale/property/saltaire/',
    note: 'Live listings snapshot; trends evolve from month to month.',
  },
  {
    name: 'Environment Agency / GOV.UK — River Aire level at Saltaire (live gauge)',
    href: 'https://check-for-flooding.service.gov.uk/station/8346',
    note: 'Latest level & 5-day trend; use alongside long-term flood risk maps.',
  },
]

/* ------------------------------ Buying steps ------------------------------- */

const BUYING_STEPS: Step[] = [
  {
    title: 'Get finances and solicitor (conveyancer) in place early',
    body:
      'Have a mortgage agreement in principle and appoint a conveyancer before offering. In a conservation area, choose a conveyancer experienced with Article 4 and listed/conservation constraints.',
    tip: 'Ask whether they routinely order local authority CON29 searches and review conservation policies.',
  },
  {
    title: 'Research streets with price-paid data',
    body:
      'Use HM Land Registry’s open data and the big portals’ sold-price pages to see actual transaction history on the exact street.',
    tip: 'Sold datasets lag by weeks/months, so also judge demand by viewing activity and how quickly similar homes go under offer.',
  },
  {
    title: 'Check conservation & planning constraints',
    body:
      'Read Bradford’s Saltaire Conservation Area pages and any Article 4 Directions that withdraw permitted development rights. Plan window/door/roof changes accordingly.',
    tip: 'If you intend to add rooflights/dormers/solar, confirm what’s acceptable before you buy.',
  },
  {
    title: 'Assess flood & environment',
    body:
      'Check the live River Aire gauge and long-term flood risk maps, plus surface water risk where relevant. Ask sellers for any historic flood notes and insurance details.',
    tip: 'Walk the route after heavy rain; note any pooling on the approach streets.',
  },
  {
    title: 'Energy & fabric due diligence',
    body:
      'Pull the EPC from GOV.UK to understand current performance, typical bills and recommended upgrades. In stone terraces/conversions, pay attention to ventilation, glazing and damp management.',
    tip: 'If EPC is missing/expired, ask for a fresh certificate as part of the offer conditions.',
  },
  {
    title: 'Offer & surveys',
    body:
      'Make offers based on evidence (price-paid, condition, time on market). For period fabric, a Level 2 HomeBuyer or Level 3 Building Survey is often sensible.',
    tip: 'Provide your conveyancer’s details with the offer to signal readiness.',
  },
  {
    title: 'Searches & enquiries',
    body:
      'Your conveyancer will order local searches (planning, drainage, environmental) and raise enquiries about boundaries, alterations and any conservation consents.',
    tip: 'Ask specifically about any past window/roof changes and whether they had consent.',
  },
  {
    title: 'Exchange & completion',
    body:
      'When finance and searches are clear and you’re satisfied with survey results, you exchange contracts and later complete. Book removals with flexibility around rail strikes or local events.',
  },
]

/* --------------------------------- FAQs ----------------------------------- */

const FAQS: QA[] = [
  {
    q: 'Can I change windows or doors in Saltaire?',
    a: 'Possibly, but expect tighter controls because of the Conservation Area and potential Article 4 Directions. Always check the council pages and apply for consent where required.',
  },
  {
    q: 'Is flood risk a concern?',
    a: 'Saltaire sits by the River Aire; always check the Environment Agency’s live gauge and the national flood risk tools. Insurance and lender requirements vary by property.',
  },
  {
    q: 'How do I check typical house prices?',
    a: 'Use Land Registry price-paid data for street-level history and cross-check with major portals’ sold-price summaries. Remember there’s a lag versus current market conditions.',
  },
  {
    q: 'Where can I see Council Tax amounts?',
    a: 'Bradford Council publishes live Council Tax bands and amounts for each band. Your exact bill depends on your property band and any discounts.',
  },
  {
    q: 'Are EPCs mandatory for sales and new tenancies?',
    a: 'Yes — an EPC is required for marketed sales and new tenancies (with limited exemptions). Pull the certificate from the GOV.UK EPC register.',
  },
  {
    q: 'Leasehold conversions: what should I watch?',
    a: 'Check lease length, ground rent terms, service charges, reserve funds and building safety information. Your conveyancer should review the lease pack in detail.',
  },
  {
    q: 'Is on-street parking easy?',
    a: 'Streets can be tight at busy times. See our dedicated Parking guide for the most practical options and step-free routes.',
  },
]

/* ------------------------------- Components -------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link className="underline underline-offset-4 hover:text-black" href="/">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Housing
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Housing in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Practical guidance for buying or renting in a UNESCO World Heritage model village. Understand the
            conservation area, plan realistic offers with street-level sold data, check flood and energy, and budget for
            Council Tax — with links only to official sources.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Conservation area</li>
            <li className="badge">Price-paid & EPC</li>
            <li className="badge">Flood & surveys</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <p className="text-sm text-gray-700">
              Moving with kids? Pair this with{' '}
              <Link className="underline underline-offset-4" href="/schools-and-housing">
                Schools &amp; Housing overview
              </Link>{' '}
              and{' '}
              <Link className="underline underline-offset-4" href="/plan/schools">
                Plan → Schools
              </Link>
              .
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Weekend feel matters: see{' '}
              <Link className="underline underline-offset-4" href="/walks">
                Walks
              </Link>{' '}
              and{' '}
              <Link className="underline underline-offset-4" href="/food-drink">
                Eat &amp; Drink
              </Link>{' '}
              to sample the area before you decide.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function HousingTypes() {
  return (
    <section id="types" aria-labelledby="types-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="types-title">Common housing types</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        You’ll mostly see mid-19th-century stone terraces in a grid of short streets, purpose-built civic buildings, and
        sympathetic conversions in and around Salts Mill. Interiors vary widely; pay close attention to insulation,
        ventilation and window/door details when comparing.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Village terraces</h3>
            <p className="mt-2 text-gray-700">
              Character features (stone, chimneys, sash proportions). Conservation rules mean external changes often need
              consent. Survey for damp, ventilation, roof condition and historic alterations.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Mill-side apartments & lofts</h3>
            <p className="mt-2 text-gray-700">
              Converted floors with high ceilings and large windows. Review lease terms, service charges, reserve funds
              and any building safety documentation. Check glazing/ventilation for comfort.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function ConservationAndPlanning() {
  return (
    <section id="conservation" aria-labelledby="conservation-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="conservation-title">Conservation area & planning</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire is a designated Conservation Area within Bradford. Certain permitted development rights may be limited
        (via Article 4) to protect the village’s character. Always read the council pages and check whether your planned
        changes need consent before committing to a purchase.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.bradford.gov.uk/environment/conservation-areas/saltaire-conservation-area/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saltaire Conservation Area — official overview & documents
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.bradford.gov.uk/environment/article-4-directions/article-4-directions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article 4 Directions (where normal PD rights are withdrawn)
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.bradford.gov.uk/planning-and-building-control/planning-application-and-building-regulations-advice/do-i-need-planning-permission-advice-for-householders/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Do I need planning permission? (householders)
          </a>
        </li>
      </ul>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> Ask your conveyancer to check past consents for windows, roof changes and boundary walls.
          If undocumented works exist, discuss indemnity insurance vs. retrospective applications.
        </p>
      </div>
    </section>
  )
}

function BuyingChecklist() {
  return (
    <section id="buying" aria-labelledby="buying-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="buying-title">Buying checklist (Saltaire-specific)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {BUYING_STEPS.map((s, i) => (
          <article key={s.title} className="card">
            <div className="card-body">
              <div className="badge">Step {i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-gray-700">{s.body}</p>
              {s.tip ? <p className="mt-2 text-sm text-gray-700"><strong>Tip:</strong> {s.tip}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function RentingChecklist() {
  const items = [
    'Confirm EPC is available and meets your comfort expectations.',
    'Ask for service charge/ground rent details if renting a leasehold flat (some landlords pass through).',
    'Check water ingress history near weirs or low points; ask for insurance details.',
    'Walk noise at different times (weeknight vs sunny weekend).',
    'Verify permitted parking and any resident-only restrictions.',
  ]
  return (
    <section id="renting" aria-labelledby="renting-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="renting-title">Renting checklist</SectionHeading>
      <div className="card mt-4">
        <div className="card-body">
          <ul className="list-disc pl-5 text-gray-700">
            {items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function PricePaidResearch() {
  return (
    <section id="prices" aria-labelledby="prices-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="prices-title">Price-paid & market research</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Start with official Land Registry price-paid data, then layer in portal summaries for a quick feel. Remember
        these datasets lag; use them for context alongside current viewing activity.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        <li>
          <a
            className="underline underline-offset-4"
            href="https://landregistry.data.gov.uk/app/ppd/?relative_url_root=%2Fapp%2Fppd"
            target="_blank"
            rel="noopener noreferrer"
          >
            HM Land Registry — Price Paid search (Open Data app)
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.gov.uk/government/collections/price-paid-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Price Paid Data collection (about the dataset)
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.rightmove.co.uk/house-prices/saltaire.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rightmove — Saltaire sold prices (summary view)
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.zoopla.co.uk/house-prices/saltaire/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zoopla — Saltaire sold prices (by property type)
          </a>
        </li>
      </ul>
      <p className="mt-3 text-xs text-gray-500">
        For live listings, compare asking prices and time-on-market with: &nbsp;
        <a className="underline underline-offset-4" href="https://www.zoopla.co.uk/for-sale/property/saltaire/" target="_blank" rel="noopener noreferrer">
          Zoopla live search
        </a>
        .
      </p>
    </section>
  )
}

function FloodAndEnvironment() {
  return (
    <section id="flood" aria-labelledby="flood-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="flood-title">Flood & environmental checks</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire sits by the River Aire. Check live river levels and long-term flood risk maps when evaluating specific
        streets and ground-floor/semibasement homes. Lenders and insurers may ask for details.
      </p>
      <div className="mt-3">
        <a
          className="underline underline-offset-4"
          href="https://check-for-flooding.service.gov.uk/station/8346"
          target="_blank"
          rel="noopener noreferrer"
        >
          River Aire level at Saltaire — live gauge (GOV.UK)
        </a>
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          <strong>Tip:</strong> During viewings, look for high-water markers, air-brick heights, signs of tanking or
          recent damp-proof works, and ask sellers for insurance history and any claims.
        </p>
      </div>
    </section>
  )
}

function EnergyAndEpc() {
  return (
    <section id="epc" aria-labelledby="epc-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="epc-title">Energy & EPC</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Pull the EPC for any address to see its current rating, estimated bills and recommended measures. In heritage
        fabric, balance comfort upgrades with conservation guidance and ventilation.
      </p>
      <p className="mt-3">
        <a
          className="underline underline-offset-4"
          href="https://www.gov.uk/find-energy-certificate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find an energy certificate (GOV.UK EPC register)
        </a>
      </p>
    </section>
  )
}

function CouncilTax() {
  return (
    <section id="council-tax" aria-labelledby="ct-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ct-title">Council Tax (Bradford)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Bands and amounts are set by the council and updated yearly. Your specific bill depends on your band, any
        discounts, and parish elements where applicable. Use the official pages below for current figures.
      </p>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.bradford.gov.uk/council-tax/general-council-tax-information/council-tax-bands-and-amounts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Council Tax bands &amp; amounts — live figures
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4"
            href="https://www.bradford.gov.uk/council-tax/council-tax-bills/council-tax-bills/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Understanding your Council Tax bill
          </a>
        </li>
      </ul>
    </section>
  )
}

function LeaseholdAndCharges() {
  const bullets = [
    'Lease length (unexpired term) — impacts mortgageability and resale.',
    'Ground rent clauses — escalation terms and caps.',
    'Service charges — current/forecast, reserve fund, planned major works.',
    'Building safety documentation where applicable.',
    'Rights over common parts, bin/cycle stores, pets policy.',
  ]
  return (
    <section id="leasehold" aria-labelledby="lease-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="lease-title">Leasehold & service charges (for conversions)</SectionHeading>
      <div className="card mt-4">
        <div className="card-body">
          <ul className="list-disc pl-5 text-gray-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700">
        Ask for the Leasehold Information Pack (LPE1/LPE2), building insurance schedule and last three years of service
        charge accounts if possible.
      </p>
    </section>
  )
}

function SurveysAndConveyancing() {
  return (
    <section id="surveys" aria-labelledby="surveys-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="surveys-title">Surveys & conveyancing essentials</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Surveys</h3>
            <p className="mt-2 text-gray-700">
              For period fabric, consider a Level 2 HomeBuyer or Level 3 Building Survey. Ask for comment on roof,
              stonework, ventilation, damp, lintels and window condition. For conversions, also review communal areas.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Conveyancing</h3>
            <p className="mt-2 text-gray-700">
              Choose a conveyancer familiar with conservation and Article 4 contexts. Ensure they order full local
              searches and probe any historic alterations lacking paperwork.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function LifestyleAndTransport() {
  const points = [
    'Saltaire station on the Airedale Line — frequent services.',
    'Canal towpath for walking/cycling to Shipley/Bingley.',
    'Roberts Park and riverside loops for daily green space.',
    'Busy at sunny weekends and event days — note noise/footfall.',
  ]
  return (
    <section id="lifestyle" aria-labelledby="life-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="life-title">Lifestyle, noise & transport</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Visit at different times: an evening, a rainy morning, and a sunny weekend. Listen for road/rail noise and
        crowds near the park and Salts Mill. Try your commute from the station and test the towpath.
      </p>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="mt-3">
        Plan your first weekend with our guides to{' '}
        <Link className="underline underline-offset-4" href="/walks">
          walks
        </Link>
        ,{' '}
        <Link className="underline underline-offset-4" href="/food-drink">
          cafés &amp; pubs
        </Link>{' '}
        and{' '}
        <Link className="underline underline-offset-4" href="/parking">
          parking
        </Link>
        .
      </p>
    </section>
  )
}

function ResourcesDirectory() {
  return (
    <section id="resources" aria-labelledby="resources-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="resources-title">Official links &amp; data sources</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">Start here; these stay current and authoritative.</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className="group card card-hover">
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
      {/* FAQ JSON-LD */}
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

function CTA() {
  return (
    <section aria-label="Plan the move" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Make Saltaire work for you</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Test journeys, note weekend footfall, and shortlist streets with price-paid data. Then bookmark our
              practical guides for your first weeks here.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/plan/getting-here" className="btn btn-primary">
                Getting here
              </Link>
              <Link href="/parking" className="btn btn-outline">
                Parking
              </Link>
              <Link href="/walks" className="btn btn-ghost">
                Best walks
              </Link>
              <Link href="/food-drink" className="btn btn-muted">
                Eat &amp; Drink
              </Link>
            </div>
          </div>
          <div className="callout">
            <h3 className="text-lg font-semibold">Corrections &amp; updates</h3>
            <p className="mt-2 text-gray-700">
              We keep this page evergreen and link to official sources. If something’s out of date,{' '}
              <Link className="underline underline-offset-4" href="/contribute">
                tell us
              </Link>{' '}
              and we’ll fix it promptly.
            </p>
          </div>
        </div>
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
    name: 'Housing in Saltaire',
    url: `${base}/housing`,
    description:
      'Conservation & planning in Saltaire, buying/renting checklists, EPC & energy, Council Tax, price-paid data and flood checks, with official links.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#conservation-title', '#buying-title'],
    },
  }

  const resources = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Official housing resources for Saltaire',
    numberOfItems: RESOURCES.length,
    itemListElement: RESOURCES.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: r.href,
      name: r.name,
      description: r.note,
    })),
  }

  const howto = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Buy a home in Saltaire (checks)',
    step: BUYING_STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body + (s.tip ? ` Tip: ${s.tip}` : ''),
    })),
    supply: [{ '@type': 'HowToSupply', name: 'Conveyancer, surveyor, mortgage AIP, local searches' }],
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Housing', item: `${base}/housing` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resources) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function HousingPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <ConservationAndPlanning />
      <HousingTypes />
      <BuyingChecklist />
      <RentingChecklist />
      <PricePaidResearch />
      <FloodAndEnvironment />
      <EnergyAndEpc />
      <CouncilTax />
      <LeaseholdAndCharges />
      <SurveysAndConveyancing />
      <LifestyleAndTransport />
      <ResourcesDirectory />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
