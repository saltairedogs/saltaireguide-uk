// src/app/history/myths/page.tsx
// Saltaire Myths & Misconceptions — clear, sourced explanations (cornerstone v1)
// - Server component only (no client handlers; static for CWV)
// - Strong internal linking to History hub, UNESCO, Architecture, Church, Parking, Walks
// - JSON-LD: WebPage + BreadcrumbList + FAQPage + ClaimReview (per-myth) + Speakable
// - Conservative phrasing with pointers to official/authoritative sources

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Saltaire myths & misconceptions — clear answers with sources',
  description:
    'The most common myths about Saltaire — from UNESCO rules to architecture and access — explained simply with links to reliable sources.',
  alternates: { canonical: `${site.url}/history/myths` },
  openGraph: {
    title: 'Saltaire myths & misconceptions — explained with sources',
    description:
      'Is Saltaire a museum? Is the church Anglican? Does UNESCO status freeze change? Your top questions answered with clear references.',
    url: `${site.url}/history/myths`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Myth = {
  id: string
  claim: string
  verdict: 'True' | 'Mostly true' | 'Mixed' | 'Mostly false' | 'False'
  summary: string
  evidence: Array<{
    text: string
    href?: string
  }>
  seeAlso?: Array<{ label: string; href: string }>
}

const MYTHS: Myth[] = [
  {
    id: 'museum-vs-living',
    claim: '“Saltaire is a museum village where people don’t actually live.”',
    verdict: 'False',
    summary:
      'Saltaire is a lived-in community within a World Heritage Site. Homes, shops and civic buildings are in everyday use.',
    evidence: [
      {
        text: 'UNESCO entry describes Saltaire as a living industrial community with Outstanding Universal Value.',
        href: 'https://whc.unesco.org/en/list/1028/',
      },
      {
        text: 'Bradford Council explains management of a living WHS (not an open-air museum).',
        href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      },
    ],
    seeAlso: [
      { label: 'UNESCO & OUV', href: '/history/unesco' },
      { label: 'Architecture overview', href: '/history/architecture' },
    ],
  },
  {
    id: 'unesco-freeze',
    claim: '“UNESCO World Heritage listing means nothing is allowed to change.”',
    verdict: 'False',
    summary:
      'Listing recognises value; it does not freeze a place in time. Change can occur if it sustains the site’s Outstanding Universal Value and follows conservation policy.',
    evidence: [
      {
        text: 'UNESCO site documentation sets out OUV and protection/management requirements.',
        href: 'https://whc.unesco.org/en/list/1028/',
      },
      {
        text: 'Historic England guidance describes managing change in historic places.',
        href: 'https://historicengland.org.uk/advice/constructive-conservation/conservation-principles/',
      },
    ],
    seeAlso: [
      { label: 'UNESCO explainer', href: '/history/unesco' },
      { label: 'Reading list (policy sources)', href: '/history/reading-list' },
    ],
  },
  {
    id: 'church-anglican',
    claim: '“The Saltaire church is Anglican.”',
    verdict: 'False',
    summary:
      'The church was built for the Congregationalists and is now part of the United Reformed Church (URC).',
    evidence: [
      { text: 'Official Saltaire URC site confirms denominational status.', href: 'https://www.saltaireurc.org.uk/' },
      {
        text: 'Listing/official WHS material names the church accordingly.',
        href: 'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire%20Congregational%20Church',
      },
    ],
    seeAlso: [
      { label: 'Church guide', href: '/history/church' },
      { label: 'Architecture — civic set pieces', href: '/history/architecture#civic' },
    ],
  },
  {
    id: 'style-gothic',
    claim: '“Saltaire was built in Victorian Gothic.”',
    verdict: 'False',
    summary:
      'The village’s prevailing language is Italianate/classical order — not High Gothic — as seen in housing, the Mill and civic buildings.',
    evidence: [
      {
        text: 'Architectural overviews of Lockwood & Mawson highlight Italianate/classical discipline at Saltaire.',
        href: 'https://victorianweb.org/art/architecture/lockwood/index.html',
      },
      {
        text: 'Historic England listings describe ashlar/classical forms and details across key buildings.',
        href: 'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire',
      },
    ],
    seeAlso: [{ label: 'Architecture overview', href: '/history/architecture' }],
  },
  {
    id: 'name-origin',
    claim: '“Saltaire is named after salt in the air.”',
    verdict: 'False',
    summary:
      'The name combines the founder’s surname (Salt) with the River Aire: Salt + Aire → Saltaire.',
    evidence: [
      { text: 'UNESCO/BMDC histories state the etymology explicitly.', href: 'https://whc.unesco.org/en/list/1028/' },
      {
        text: 'Local authority and community histories repeat the Salt + Aire derivation.',
        href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      },
    ],
    seeAlso: [
      { label: 'Titus Salt bio', href: '/history/titus-salt' },
      { label: 'Timeline', href: '/history/timeline' },
    ],
  },
  {
    id: 'mill-admission',
    claim: '“Salts Mill charges admission.”',
    verdict: 'Mostly false',
    summary:
      'General entry to the shops and Hockney galleries at Salts Mill is typically free; special exhibitions, events or paid areas can differ. Always check current notices.',
    evidence: [
      {
        text: 'Visitor information has historically indicated free general entry; confirm times/any charges before travel.',
        href: 'https://www.saltsmill.org.uk/',
      },
    ],
    seeAlso: [{ label: 'Salts Mill guide', href: '/salts-mill' }],
  },
  {
    id: 'dogs-park',
    claim: '“Dogs aren’t allowed in Roberts Park.”',
    verdict: 'False',
    summary:
      'Dogs are generally allowed in the park with normal local rules (e.g., leads in signed areas, clean-up).',
    evidence: [
      {
        text: 'Bradford Council/park guidance sets local by-laws and dogs policies; check on-site signage.',
        href: 'https://www.bradford.gov.uk/parks-and-green-spaces/parks/roberts-park/',
      },
    ],
    seeAlso: [{ label: 'Roberts Park guide', href: '/roberts-park' }],
  },
  {
    id: 'canal-name',
    claim: '“The canal through Saltaire is the Aire & Calder.”',
    verdict: 'False',
    summary:
      'It is the Leeds & Liverpool Canal. The River Aire runs nearby; the Aire & Calder Navigation is elsewhere.',
    evidence: [
      {
        text: 'Canal & River Trust page for the Leeds & Liverpool Canal.',
        href: 'https://canalrivertrust.org.uk/enjoy-the-waterways/canal-and-river-network/leeds-and-liverpool-canal',
      },
    ],
    seeAlso: [
      { label: 'Walks from Saltaire', href: '/walks' },
      { label: 'Towpath to Five-Rise', href: '/walks/five-rise' },
    ],
  },
  {
    id: 'parking-free',
    claim: '“You can park anywhere in Saltaire for free.”',
    verdict: 'False',
    summary:
      'Restrictions apply and enforcement is active. Use the main car parks and always read the roadside plates.',
    evidence: [
      {
        text: 'Local authority parking controls apply; our guide summarises practical options.',
        href: '/parking',
      },
    ],
    seeAlso: [{ label: 'Parking guide', href: '/parking' }],
  },
  {
    id: 'towpath-cycling',
    claim: '“Cycling is banned on the towpath.”',
    verdict: 'False',
    summary:
      'Cycling is generally allowed on the Leeds & Liverpool Canal towpath under “Share the Space” guidance — ride considerately and slow near pedestrians.',
    evidence: [
      {
        text: 'Canal & River Trust towpath code / Share the Space advice.',
        href: 'https://canalrivertrust.org.uk/enjoy-the-waterways/cycling',
      },
    ],
    seeAlso: [{ label: 'Walks & routes', href: '/walks' }],
  },
  {
    id: 'no-step-free',
    claim: '“There are no step-free routes around Saltaire.”',
    verdict: 'False',
    summary:
      'Several step-free options exist between Salts Mill, the village streets and Roberts Park; gradients and surfaces vary.',
    evidence: [
      {
        text: 'Local accessibility guidance and our step-free notes map common routes.',
        href: '/plan/accessibility',
      },
    ],
    seeAlso: [
      { label: 'Plan — accessibility', href: '/plan/accessibility' },
      { label: 'Roberts Park step-free loop', href: '/roberts-park/step-free' },
    ],
  },
  {
    id: 'tss-location',
    claim: '“Titus Salt School is inside the Saltaire village core.”',
    verdict: 'False',
    summary:
      'Titus Salt School is in Baildon (Higher Coach Road area), serving the wider district; the historic Factory School/High Schools were within the village.',
    evidence: [
      { text: 'Titus Salt School address and location details.', href: 'https://www.titussaltschool.co.uk/' },
      {
        text: 'Historic Factory School (now Shipley College) is on Victoria Road inside the village.',
        href: '/history/school#factory-school',
      },
    ],
    seeAlso: [{ label: 'Schools history', href: '/history/school' }],
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
          Myths
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Saltaire myths</h1>
        <p className="mt-4 max-w-prose text-lg text-gray-700">
            We’ve collected the most common misconceptions about Saltaire and explained them with
            links to reliable sources. Use this page to fact-check quickly, then dive into the
            detailed guides for deeper context.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Evidence-based</li>
            <li className="badge">Quick to scan</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Open book and magnifying glass on a wooden table (illustrative fact-check theme)"
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
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <li><a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href="#myths">Myths & verdicts</a></li>
          <li><a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href="#faqs">FAQs</a></li>
          <li><a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href="#sources">Sources</a></li>
        </ul>
      </nav>
    </aside>
  )
}

function MythCard({ myth, index }: { myth: Myth; index: number }) {
  const badgeClass =
    myth.verdict === 'True'
      ? 'badge-success'
      : myth.verdict === 'Mostly true'
      ? 'badge-success'
      : myth.verdict === 'Mixed'
      ? 'badge-warn'
      : myth.verdict === 'Mostly false'
      ? 'badge-warn'
      : 'badge-danger' // False

  return (
    <article id={myth.id} className="card card-hover">
      <div className="card-body">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">
            <span className="mr-2 text-gray-400">#{index}</span>
            {myth.claim}
          </h3>
          <span className={`badge ${badgeClass}`} aria-label={`Verdict: ${myth.verdict}`}>
            {myth.verdict}
          </span>
        </div>
        <p className="mt-2 text-gray-700">{myth.summary}</p>

        <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3">
          <div className="text-sm font-semibold text-gray-800">Evidence & references</div>
          <ul className="mt-1 list-disc pl-5 text-sm text-gray-700">
            {myth.evidence.map((e, i) => (
              <li key={`${myth.id}-e-${i}`}>
                {e.href ? (
                  <a className="underline underline-offset-4" href={e.href}>
                    {e.text}
                  </a>
                ) : (
                  e.text
                )}
              </li>
            ))}
          </ul>
          {myth.seeAlso?.length ? (
            <p className="mt-2 text-sm">
              See also:{' '}
              {myth.seeAlso.map((s, i) => (
                <span key={`${myth.id}-s-${i}`}>
                  <Link className="underline underline-offset-4" href={s.href}>
                    {s.label}
                  </Link>
                  {i < myth.seeAlso!.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function MythsGrid() {
  return (
    <section id="myths" aria-labelledby="myths-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="myths-title" className="text-2xl font-bold tracking-tight md:text-3xl">Common myths & verdicts</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Each myth below is paired with a short verdict and links to an official or authoritative
        source. Follow through to the detailed guides for depth.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {MYTHS.map((m, i) => (
          <MythCard key={m.id} myth={m} index={i + 1} />
        ))}
      </div>
    </section>
  )
}

function Related() {
  return (
    <section aria-labelledby="related-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="related-title" className="text-2xl font-bold tracking-tight md:text-3xl">Related guides</h2>
      <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/unesco" className="font-medium underline-offset-4 hover:underline">
            UNESCO & OUV (why Saltaire is listed)
          </Link>
          <p className="mt-1 text-sm text-gray-700">Criteria, integrity/authenticity and management.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/architecture" className="font-medium underline-offset-4 hover:underline">
            Architecture & urban plan
          </Link>
          <p className="mt-1 text-sm text-gray-700">Italianate language, housing types, civic set pieces.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/parking" className="font-medium underline-offset-4 hover:underline">
            Parking guide
          </Link>
          <p className="mt-1 text-sm text-gray-700">Where to park, step-free options and busy times.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/walks" className="font-medium underline-offset-4 hover:underline">
            Walks from Saltaire
          </Link>
          <p className="mt-1 text-sm text-gray-700">Canal towpath, Shipley Glen and family loops.</p>
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
      note: 'Official site entry with OUV and management information.',
    },
    {
      title: 'Bradford Council — Saltaire WHS information',
      href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      note: 'Local authority guidance on a living World Heritage Site.',
    },
    {
      title: 'Historic England — The List (Saltaire results)',
      href: 'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire',
      note: 'Individual listing entries and descriptions.',
    },
    {
      title: 'Canal & River Trust — Leeds & Liverpool Canal / Cycling & Towpath Code',
      href: 'https://canalrivertrust.org.uk/enjoy-the-waterways/cycling',
      note: 'Share the Space guidance for towpath users.',
    },
    {
      title: 'Saltaire URC — official church site',
      href: 'https://www.saltaireurc.org.uk/',
      note: 'Denomination and visiting information.',
    },
    {
      title: 'Salts Mill — official site',
      href: 'https://www.saltsmill.org.uk/',
      note: 'Opening information; confirm any special exhibitions/charges.',
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
            <p className="mt-1 text-sm text-gray-700">{it.note}</p>
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
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Is Saltaire a museum?',
      a: 'No. It is a lived-in village and World Heritage Site with homes, workplaces and civic buildings.',
    },
    {
      q: 'Does UNESCO status ban all change?',
      a: 'No. Change can occur where it sustains Outstanding Universal Value and follows conservation policy.',
    },
    {
      q: 'What style is Saltaire built in?',
      a: 'Predominantly Italianate/classical order, not High Gothic.',
    },
    {
      q: 'Is the church Anglican?',
      a: 'No. It is the United Reformed Church (formerly Congregational).',
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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  // FAQPage from myths
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Saltaire a museum?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. It is a lived-in village and World Heritage Site with homes, workplaces and civic buildings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does UNESCO status ban all change?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Change can occur where it sustains Outstanding Universal Value and follows conservation policy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What style is Saltaire built in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Predominantly Italianate/classical order, not High Gothic.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the church Anglican?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. It is the United Reformed Church (formerly Congregational).',
        },
      },
    ],
  }

  // ClaimReview list: map selected myths into fact-check items
  const claimReviews = MYTHS.map((m) => ({
    '@context': 'https://schema.org',
    '@type': 'ClaimReview',
    url: `${base}/history/myths#${m.id}`,
    datePublished: UPDATED,
    claimReviewed: m.claim,
    author: {
      '@type': 'Organization',
      name: site.name,
      url: base,
    },
    itemReviewed: {
      '@type': 'CreativeWork',
      headline: `Myth check: ${m.claim}`,
      url: `${base}/history/myths#${m.id}`,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue:
        m.verdict === 'True'
          ? 5
          : m.verdict === 'Mostly true'
          ? 4
          : m.verdict === 'Mixed'
          ? 3
          : m.verdict === 'Mostly false'
          ? 2
          : 1,
      bestRating: 5,
      worstRating: 1,
      alternateName: m.verdict,
    },
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire myths & misconceptions',
    url: `${base}/history/myths`,
    description:
      'The most common myths about Saltaire — from UNESCO rules to architecture and access — explained with links to reliable sources.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Myths', item: `${base}/history/myths` },
    ],
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/history/myths`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#myths-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      {claimReviews.map((cr, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cr) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function MythsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <MythsGrid />
      <Related />
      <FAQ />
      <Sources />
      <JsonLd />
    </>
  )
}
