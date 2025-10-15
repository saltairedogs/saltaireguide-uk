// src/app/history/reading-list/page.tsx
// Saltaire Reading List — books, archives, maps & authoritative web sources (cornerstone v1)
// - Server component only (no client handlers; static for CWV)
// - Strong internal linking to History hub, Architecture, Church, Timeline, UNESCO
// - SEO: deep headings, accessible sections, curated annotations, speakable + FAQ + ItemList JSON-LD
// - Cautious, verifiable linking: prioritise official, archival and scholarly sources

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Saltaire reading list: best books, archives, maps & official sources',
  description:
    'A curated, annotated reading list for Saltaire: foundational books, archives, historic maps, conservation and planning documents, and authoritative web sources — with tips for research and citation.',
  alternates: { canonical: `${site.url}/history/reading-list` },
  openGraph: {
    title: 'Saltaire reading list — books, archives, maps & official sources',
    description:
      'Where to start if you want to learn Saltaire properly: essential titles, archives, maps and primary sources, plus reputable websites and how to cite them.',
    url: `${site.url}/history/reading-list`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

// Helper types
type Item = {
  title: string
  href: string
  note: string
}

type Section = {
  id: string
  title: string
  intro?: string
  items: Item[]
}

// Authoritative online sources (official first)
const ONLINE_AUTHORITATIVE: Section = {
  id: 'authoritative',
  title: 'Authoritative online sources (start here)',
  intro:
    'Begin with official listings and the local authority pages, then use community collections for depth and images.',
  items: [
    {
      title: 'UNESCO World Heritage Centre — Saltaire',
      href: 'https://whc.unesco.org/en/list/1028/',
      note: 'Official entry with Outstanding Universal Value, criteria (ii) & (iv), and boundary information.',
    },
    {
      title: 'Bradford Council — Saltaire World Heritage Site',
      href: 'https://www.bradford.gov.uk/environment/saltaire/saltaire-world-heritage-site-information-and-history/',
      note: 'Local authority overview, policy context and practical guidance.',
    },
    {
      title: 'Historic England — National Heritage List (Saltaire results)',
      href: 'https://historicengland.org.uk/listing/the-list/results/?search=Saltaire',
      note: 'Individual listing entries for buildings across the village.',
    },
    {
      title: 'Saltaire Collection',
      href: 'https://www.saltairecollection.org/',
      note: 'Community-led archive and interpretation with articles, photographs and resources.',
    },
    {
      title: 'Saltaire Village (community site)',
      href: 'https://www.saltairevillage.info/',
      note: 'Long-running local resource with histories, news and event information.',
    },
    {
      title: 'Victoria Hall (Saltaire Club & Institute)',
      href: 'https://victoriahallsaltaire.co.uk/',
      note: 'Background on the Institute; useful for civic/architectural context.',
    },
    {
      title: 'Saltaire URC (church)',
      href: 'https://www.saltaireurc.org.uk/',
      note: 'Official church site with visiting and community information.',
    },
  ],
}

// Historic maps & plans
const MAPS_PLANS: Section = {
  id: 'maps',
  title: 'Historic maps & plans',
  intro:
    'Overlay historic Ordnance Survey mapping against modern aerials to understand fabric change, plot patterns and routes.',
  items: [
    {
      title: 'National Library of Scotland — Explore georeferenced OS maps',
      href: 'https://maps.nls.uk/geo/explore/',
      note: 'Select Yorkshire sheets and compare historic OS with modern satellite for Saltaire.',
    },
    {
      title: 'West Yorkshire Archive Service (WYAS) — Bradford',
      href: 'https://www.wyjs.org.uk/archives/west-yorkshire-archive-service-bradford/',
      note: 'Manuscripts, plans and local government records (search catalogues for Saltaire).',
    },
    {
      title: 'The National Archives — Discovery catalogue',
      href: 'https://discovery.nationalarchives.gov.uk/',
      note: 'Search shipley/saltaire for deeds, company records and public inquiries.',
    },
  ],
}

// Archives, newspapers & photo libraries
const ARCHIVES_NEWS: Section = {
  id: 'archives',
  title: 'Archives, newspapers & photo libraries',
  intro:
    'Contemporary newspaper reports and official records illuminate events like school openings, building work and festivals.',
  items: [
    {
      title: 'British Newspaper Archive',
      href: 'https://www.britishnewspaperarchive.co.uk/',
      note: 'Search “Saltaire” + date range for 19th-century press coverage.',
    },
    {
      title: 'Bradford Libraries — Local Studies',
      href: 'https://www.bradford.gov.uk/libraries/archives-and-local-studies/local-studies-library/',
      note: 'Local Studies collections for Shipley & Saltaire; photographs and ephemera.',
    },
    {
      title: 'Historic England Archive',
      href: 'https://historicengland.org.uk/images-books/archive/',
      note: 'National photographic/archive holdings; search Saltaire streets and landmarks.',
    },
  ],
}

// Architecture & planning background (web)
const ARCHITECTURE_WEB: Section = {
  id: 'architecture-web',
  title: 'Architecture & planning (web overviews)',
  items: [
    {
      title: 'Victorian Web — Lockwood & Mawson pages',
      href: 'https://victorianweb.org/art/architecture/lockwood/index.html',
      note: 'Practice background; includes entries for Saltaire buildings.',
    },
    {
      title: 'Historic England — Conservation Principles',
      href: 'https://historicengland.org.uk/advice/constructive-conservation/conservation-principles/',
      note: 'Useful framework for understanding fabric, significance and change.',
    },
    {
      title: 'Canal & River Trust — Leeds & Liverpool Canal',
      href: 'https://canalrivertrust.org.uk/enjoy-the-waterways/canal-and-river-network/leeds-and-liverpool-canal',
      note: 'Context for the canal corridor through Saltaire and Shipley.',
    },
  ],
}

// Books & monographs (use catalogues/search to acquire)
const BOOKS_MONOGRAPHS: Section = {
  id: 'books',
  title: 'Books & monographs (find via WorldCat/Google Books/Library)',
  intro:
    'Use library catalogues to locate editions. Start with overviews of Saltaire, Titus Salt and Bradford’s Victorian architecture, then drill into specialist studies.',
  items: [
    {
      title: 'WorldCat — Subject search: Saltaire (England) — History',
      href: 'https://www.worldcat.org/search?q=su%3ASaltaire+%28England%29+History',
      note: 'Aggregate catalogue results across libraries near you.',
    },
    {
      title: 'Google Books — “Saltaire” full view & preview',
      href: 'https://www.google.com/search?tbm=bks&q=Saltaire',
      note: 'Find digitised or previewable titles; check publication dates and editions.',
    },
    {
      title: 'Lockwood & Mawson — architecture searches',
      href: 'https://www.google.com/search?tbm=bks&q=%22Lockwood+%26+Mawson%22+Saltaire',
      note: 'Narrow down to practice histories and case studies featuring Saltaire.',
    },
  ],
}

// Academic articles & theses (discovery)
const ACADEMIC_DISCOVERY: Section = {
  id: 'academic',
  title: 'Academic articles & theses',
  items: [
    {
      title: 'JSTOR — Search “Saltaire”',
      href: 'https://www.jstor.org/action/doBasicSearch?Query=Saltaire',
      note: 'Peer-reviewed articles; filter by history/architecture.',
    },
    {
      title: 'EThOS (British Library) — UK theses',
      href: 'https://ethos.bl.uk/',
      note: 'Doctoral theses referencing Saltaire, Lockwood & Mawson, Bradford industry.',
    },
    {
      title: 'CORE — Open access research',
      href: 'https://core.ac.uk/search?q=Saltaire',
      note: 'OA copies of papers and theses mentioning the village.',
    },
  ],
}

// Local practicals & visitor context (web)
const LOCAL_VISITOR: Section = {
  id: 'local',
  title: 'Local practicals & visitor context',
  items: [
    {
      title: 'Visit Bradford — Saltaire',
      href: 'https://www.visitbradford.com/explore/saltaire/',
      note: 'Tourism context, opening information and seasonal event listings.',
    },
    {
      title: 'Shipley College',
      href: 'https://www.shipley.ac.uk/',
      note: 'College using several historic buildings (including the Salts Building).',
    },
    {
      title: 'Titus Salt School',
      href: 'https://www.titussaltschool.co.uk/',
      note: 'Modern school with Saltaire lineage; useful for education history context.',
    },
  ],
}

// How to research (guidance)
const RESEARCH_TIPS: string[] = [
  'Keep dates straight. Use contemporary newspapers and official listings to verify openings, architects and names.',
  'Prefer primary sources (official listings, maps, minutes, advertisements) when facts conflict.',
  'Record exact URLs, catalogue IDs and access dates in your notes for later citation.',
  'Note variant spellings and historical names when searching catalogues.',
  'Photograph inscriptions, plaques and boundary stones on site; transcribe text accurately.',
]

// Example citations (copyable)
const CITE_EXAMPLES = {
  harvard: [
    'UNESCO World Heritage Centre (n.d.) Saltaire. Available at: https://whc.unesco.org/en/list/1028/ (Accessed: 12 October 2025).',
    'Historic England (n.d.) National Heritage List for England: Saltaire results. Available at: https://historicengland.org.uk/listing/the-list/results/?search=Saltaire (Accessed: 12 October 2025).',
  ],
  chicago: [
    'UNESCO World Heritage Centre. “Saltaire.” Accessed October 12, 2025. https://whc.unesco.org/en/list/1028/.',
    'Historic England. “The List—Saltaire results.” Accessed October 12, 2025. https://historicengland.org.uk/listing/the-list/results/?search=Saltaire.',
  ],
  bibtex: `@misc{unesco_saltaire,
  title   = {Saltaire},
  author  = {{UNESCO World Heritage Centre}},
  howpublished = {\\url{https://whc.unesco.org/en/list/1028/}},
  note    = {Accessed 2025-10-12}
}

@misc{he_list_saltaire,
  title   = {National Heritage List for England: Saltaire results},
  author  = {{Historic England}},
  howpublished = {\\url{https://historicengland.org.uk/listing/the-list/results/?search=Saltaire}},
  note    = {Accessed 2025-10-12}
}`,
}

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
          Reading list
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Saltaire reading list
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The best places to learn Saltaire properly — from official listings and historic maps to
            archives, scholarly articles and the most useful web resources. Curated by locals and
            kept practical, with tips on how to cite and where to find copies.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Authoritative first</li>
            <li className="badge">Researcher-friendly</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h2 className="text-lg font-semibold">Quick links</h2>
            <ul className="mt-2 list-disc pl-5 text-sm">
              <li>
                <a className="underline underline-offset-4" href="#authoritative">
                  Official sources
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#maps">
                  Historic maps
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#books">
                  Books & monographs
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#academic">
                  Academic articles
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#how-to-cite">
                  How to cite
                </a>
              </li>
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              See also:{' '}
              <Link className="underline underline-offset-4" href="/history/unesco">
                UNESCO guide
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/history/architecture">
                architecture
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/history/timeline">
                timeline
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/history/church">
                church
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/history/almshouses">
                almshouses
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function SectionList({ section }: { section: Section }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id={`${section.id}-title`} className="text-2xl font-bold tracking-tight md:text-3xl">
        {section.title}
      </h2>
      {section.intro ? (
        <p className="mt-2 max-w-prose text-gray-700">{section.intro}</p>
      ) : null}
      <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {section.items.map((it) => (
          <li key={it.href} className="rounded-xl border border-gray-200 bg-white p-4">
            <a className="font-medium underline-offset-4 hover:underline" href={it.href}>
              {it.title}
            </a>
            <p className="mt-1 text-sm text-gray-700">{it.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ResearchTips() {
  return (
    <section id="how-to-research" aria-labelledby="research-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="research-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        How to research Saltaire (quick method)
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Method</h3>
            <ol className="mt-2 list-decimal pl-6 text-gray-700">
              <li>Read the UNESCO and Bradford Council pages to set context and boundaries.</li>
              <li>Check individual building entries on the National Heritage List.</li>
              <li>Open historic OS maps (NLS) and compare to modern aerials.</li>
              <li>Search newspapers for openings, auctions, accidents and public meetings.</li>
              <li>Cross-check names/dates with Saltaire Collection articles and images.</li>
            </ol>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Tips</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {RESEARCH_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowToCite() {
  return (
    <section id="how-to-cite" aria-labelledby="cite-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="cite-title" className="text-2xl font-bold tracking-tight md:text-3xl">How to cite sources</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Harvard</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              {CITE_EXAMPLES.harvard.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3 className="mt-4 text-lg font-semibold">Chicago (notes/bibliography)</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              {CITE_EXAMPLES.chicago.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">BibTeX</h3>
            <pre className="prose mt-2 whitespace-pre-wrap text-sm">{CITE_EXAMPLES.bibtex}</pre>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Always include an access date for web pages and a stable identifier (catalogue ID, DOI, NHLE
        entry number) where available.
      </p>
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
            UNESCO &amp; OUV (why Saltaire is listed)
          </Link>
          <p className="mt-1 text-sm text-gray-700">Criteria, integrity/authenticity and boundaries.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/architecture" className="font-medium underline-offset-4 hover:underline">
            Architecture &amp; urban plan
          </Link>
          <p className="mt-1 text-sm text-gray-700">Italianate language, housing types and civic set pieces.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/church" className="font-medium underline-offset-4 hover:underline">
            Church (URC)
          </Link>
          <p className="mt-1 text-sm text-gray-700">Portico, tower and dome; Salt family mausoleum.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/history/timeline" className="font-medium underline-offset-4 hover:underline">
            Timeline
          </Link>
          <p className="mt-1 text-sm text-gray-700">Key dates from planning to present day.</p>
        </li>
      </ul>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Where should a beginner start?',
      a: 'Read the UNESCO entry for scope and values, then the Bradford Council WHS pages. After that, check Historic England listings for buildings you’re interested in.',
    },
    {
      q: 'What’s the most reliable source for building facts?',
      a: 'Historic England’s National Heritage List entries, complemented by council conservation documents and contemporary newspapers for event dates.',
    },
    {
      q: 'Can I use Wikipedia?',
      a: 'Yes, as a lead-in and for links, but verify details with primary/official sources before citing.',
    },
    {
      q: 'How do I find photos I can reuse?',
      a: 'Use archives with clear licences (e.g., Historic England Archive) or images released under Creative Commons on reputable platforms. Always credit correctly.',
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

  // Build a flattened list for ItemList
  const allItems: Item[] = [
    ...ONLINE_AUTHORITATIVE.items,
    ...MAPS_PLANS.items,
    ...ARCHIVES_NEWS.items,
    ...ARCHITECTURE_WEB.items,
    ...BOOKS_MONOGRAPHS.items,
    ...ACADEMIC_DISCOVERY.items,
    ...LOCAL_VISITOR.items,
  ]

  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Saltaire reading list',
    url: `${base}/history/reading-list`,
    description:
      'Curated bibliography and webography for Saltaire: official listings, maps, archives, books and scholarly resources.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: allItems.length,
    itemListElement: allItems.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.title,
      url: it.href.startsWith('http') ? it.href : `${base}${it.href}`,
      description: it.note,
    })),
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'History', item: `${base}/history` },
      { '@type': 'ListItem', position: 3, name: 'Reading list', item: `${base}/history/reading-list` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where should a beginner start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the UNESCO entry and Bradford Council WHS pages, then check Historic England listings.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the most reliable source for building facts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Historic England NHLE entries, complemented by council documents and contemporary newspapers.',
        },
      },
    ],
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/history/reading-list`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#authoritative-title', '#maps-title', '#books-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ReadingListPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <SectionList section={ONLINE_AUTHORITATIVE} />
      <SectionList section={MAPS_PLANS} />
      <SectionList section={ARCHIVES_NEWS} />
      <SectionList section={ARCHITECTURE_WEB} />
      <SectionList section={BOOKS_MONOGRAPHS} />
      <SectionList section={ACADEMIC_DISCOVERY} />
      <SectionList section={LOCAL_VISITOR} />
      <ResearchTips />
      <HowToCite />
      <Related />
      <FAQ />
      <JsonLd />
    </>
  )
}
