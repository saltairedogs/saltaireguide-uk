// src/app/local-services/gardeners/page.tsx
// Saltaire Gardeners — directory hub (server-only, SEO-optimised, monetisable, CWV-first)
//
// ---------------------------------------------------------------------------------------------------------------------
// Purpose
// - Win "gardener Saltaire", "lawn mowing BD18", "hedge trimming Shipley", "garden clearance Saltaire",
//   "landscaper Saltaire small jobs", "fence repair BD18", "patio cleaning Saltaire", "green waste removal Shipley".
// - Monetisable UX: featured providers with trust badges (insurance, waste carrier), instant CTA buttons,
//   comparison table, service explainer blocks, seasonal checklists, materials & waste guidance, FAQ, and onboarding CTA.
// - Editorial stance: practical and careful. No fixed tariffs; always defer onsite quotes. Encourage safe & lawful work.
//   For large tree work, recommend qualified arborists (separate category) and checking protections (e.g., TPO, conservation).
// - Structured data: WebPage + BreadcrumbList + ItemList + LocalBusiness (featured) + HowTo (HireSafely, GreenWaste)
//   + FAQPage + Speakable.
//
// Implementation
// - Server Component (no "use client") for static-first performance. Revalidate daily.
// - All imagery local via /public/images/* to avoid remote deps.
// - Tailwind + house utilities (btn, badge, card, table, breadcrumbs).
//
// Safety & legal cautions (evergreen, non-legal advice):
// - Green waste: use licensed carriers; keep receipts. Fly-tipping penalties exist.
// - Wildlife: avoid disturbing nesting birds; check current seasonal advice. Be considerate with hedges & trees.
// - Hard landscaping: small repairs are fine; for major works, drainage & planning rules can apply—seek professional guidance.
// - Tree work: for substantial pruning/felling use qualified arborists; check for Tree Preservation Orders / conservation status.
// - Chemical use: follow labels; avoid runoff into drains/watercourses.
//
// ---------------------------------------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* ------------------------------------------------ Metadata --------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    'Gardeners in Saltaire (2025): lawn care, hedge trimming, garden clearance, planting — trusted local services',
  description:
    'Find trusted gardeners in Saltaire & Shipley: lawn mowing, hedge trimming, tidy-ups, planting, small repairs and green waste removal. Featured providers with insurance & waste-carrier notes, seasonal tips, FAQs.',
  alternates: { canonical: `${site.url}/local-services/gardeners` },
  openGraph: {
    title: 'Gardeners in Saltaire — practical local directory',
    description:
      'Lawn care, hedges, borders, tidy-ups, pressure washing and small fence/patio repairs. Careful guidance on green waste and wildlife season. Featured providers with quick contact.',
    url: `${site.url}/local-services/gardeners`,
    type: 'article',
    images: [{ url: `${site.url}/images/roberts-park.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------------------------ Types ------------------------------------------------------------ */

type Listing = {
  slug: string
  name: string
  phoneLocal?: string
  phoneTel?: string
  email?: string
  website?: string
  bookingUrl?: string
  excerpt?: string
  priceFrom?: string
  areaServed?: string[]
  featured?: boolean
  verified?: boolean
  image?: string
  services?: string[] // lawn, hedge, planting, clearance, jetwash, fence repair, small patios
  wasteCarrier?: boolean
  insured?: boolean
  dbs?: boolean
  eco?: boolean
  acceptsGreenBin?: boolean
  removalIncluded?: boolean
  payment?: string[] // Card, Bank transfer, Cash
  inPerson?: boolean
  notes?: string[]
  tags?: string[]
}

/* ------------------------------------------------ Local Images ----------------------------------------------------- */

const IMG = {
  hero: { src: '/images/roberts-park.png', alt: 'Green lawns near Saltaire — gardeners directory', w: 1200, h: 800 },
  work: { src: '/images/salts-mill.png', alt: 'Stone textures and tidy borders aesthetic', w: 1200, h: 800 },
  map: { src: '/images/saltaire-canal.png', alt: 'Saltaire area context image', w: 1600, h: 1066 },
  hose: { src: '/images/plan-your-visit.png', alt: 'Watering can / hose vibe placeholder', w: 1200, h: 800 },
  patio: { src: '/images/history-unesco.png', alt: 'Paving texture placeholder (local asset)', w: 1200, h: 800 },
  hedge: { src: '/images/whats-on.png', alt: 'Hedge line ambience placeholder', w: 1200, h: 800 },
}

/* ------------------------------------------------ Demo Listings ---------------------------------------------------- */

const LISTINGS: Listing[] = [
  {
    slug: 'saltaire-garden-care',
    name: 'Saltaire Garden Care (insured • licensed waste carrier)',
    phoneLocal: '01274 000610',
    phoneTel: 'tel:+441274000610',
    email: 'hello@saltaire-gardens.example',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Regular lawn cuts, hedge trims, seasonal tidy-ups and border refresh. Licensed green waste removal available.',
    priceFrom: 'Quote on visit',
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    featured: true,
    verified: false,
    image: IMG.hero.src,
    services: ['Lawn mowing', 'Hedge trimming', 'Garden clearance', 'Planting', 'Jet washing (paths)'],
    wasteCarrier: true,
    insured: true,
    dbs: false,
    eco: true,
    acceptsGreenBin: true,
    removalIncluded: false,
    payment: ['Card', 'Bank transfer'],
    inPerson: true,
    notes: ['Before/after photos on request', 'Regular maintenance routes for BD18', 'Receipts provided'],
    tags: ['Featured', 'Waste carrier', 'Insured'],
  },
  {
    slug: 'shipley-green-hands',
    name: 'Shipley Green Hands (regular routes)',
    phoneLocal: '01274 000620',
    phoneTel: 'tel:+441274000620',
    website: '#',
    excerpt:
      'Route-based lawn & hedge service with clear scheduling. Optional border weeding and edging. Green waste by arrangement.',
    priceFrom: 'By quote',
    areaServed: ['Shipley', 'Saltaire'],
    featured: true,
    image: IMG.work.src,
    services: ['Lawn mowing', 'Hedge trimming', 'Edging', 'Weeding', 'Leaf clears (autumn)'],
    wasteCarrier: true,
    insured: true,
    dbs: false,
    eco: false,
    acceptsGreenBin: true,
    removalIncluded: true,
    payment: ['Bank transfer'],
    inPerson: true,
    notes: ['Regular slots only (not one-off clearances in peak months)'],
    tags: ['Featured', 'Routes'],
  },
  {
    slug: 'baildon-hedge-lawn',
    name: 'Baildon Hedge & Lawn',
    website: '#',
    excerpt: 'Hedge shaping, small-tree pruning (light), lawn cuts and strimming. Waste removal by arrangement.',
    priceFrom: 'By quote',
    areaServed: ['Baildon', 'Saltaire fringe'],
    image: IMG.hedge.src,
    services: ['Hedge trimming', 'Small pruning (light)', 'Lawn mowing', 'Strimming'],
    wasteCarrier: true,
    insured: true,
    acceptsGreenBin: true,
    removalIncluded: false,
    payment: ['Card', 'Cash'],
    inPerson: true,
    tags: ['Hedges', 'Light pruning'],
  },
  {
    slug: 'canal-borders-planting',
    name: 'Canal Borders & Planting',
    website: '#',
    excerpt: 'Border refresh, soil prep, mulch, seasonal colour and container planting. Advice on low-maintenance choices.',
    priceFrom: 'By quote',
    areaServed: ['Saltaire', 'Shipley'],
    image: IMG.hose.src,
    services: ['Planting', 'Mulching', 'Weeding', 'Border design (small)'],
    wasteCarrier: false,
    insured: true,
    acceptsGreenBin: true,
    removalIncluded: false,
    payment: ['Bank transfer'],
    inPerson: true,
    tags: ['Planting', 'Borders'],
  },
  {
    slug: 'aire-patio-fence-repair',
    name: 'Aire Patio & Fence Repairs (small jobs)',
    website: '#',
    excerpt:
      'Small fence panel swaps and minor patio relays/pointing. Pressure washing for paths/patios. No major landscaping.',
    priceFrom: 'By quote',
    areaServed: ['BD18'],
    image: IMG.patio.src,
    services: ['Fence repair (small)', 'Patio repoint (small)', 'Pressure washing'],
    wasteCarrier: true,
    insured: true,
    acceptsGreenBin: false,
    removalIncluded: true,
    payment: ['Card'],
    inPerson: true,
    tags: ['Repairs', 'Jet wash'],
  },
]

/* ------------------------------------------------ Utilities -------------------------------------------------------- */

function cx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function Small({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-gray-500">{children}</p>
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

function JsonLd({ obj }: { obj: any }) {
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
}

function displayAreas(v?: string[]) {
  return (v && v.length ? v : ['Saltaire']).join(', ')
}

function displayList(v?: string[]) {
  return v && v.length ? v.join(' • ') : '—'
}

/* ------------------------------------------------ Layout ----------------------------------------------------------- */

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
          <Link href="/local-services" className="underline underline-offset-4 hover:text-black">
            Local services
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Gardeners
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Gardeners in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Lawn care, hedges, tidy-ups and small repairs — from simple maintenance to seasonal refreshes. We highlight
            providers with insurance and licensed waste options, plus practical tips for a calmer, greener garden.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Licensed waste options</li>
            <li className="badge">Wildlife-aware notes</li>
            <li className="badge">Small jobs welcome</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Featured gardeners
            </Link>
            <Link href="#services" className="btn btn-outline">
              Services guide
            </Link>
            <Link href="#faq" className="btn btn-ghost">
              Long FAQ
            </Link>
          </div>
          <Small>
            Keep nature in mind: avoid disturbing nesting wildlife; choose quiet hours; compost where possible; and use
            licensed carriers for removals.
          </Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src={IMG.hero.src}
            alt={IMG.hero.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#featured', label: 'Featured providers' },
    { href: '#services', label: 'What gardeners do' },
    { href: '#listings', label: 'All listings' },
    { href: '#compare', label: 'Compare at a glance' },
    { href: '#hire-safely', label: 'Hire safely' },
    { href: '#seasonal', label: 'Seasonal checklists' },
    { href: '#waste', label: 'Green waste & disposal' },
    { href: '#repairs', label: 'Small repairs & jet wash' },
    { href: '#eco', label: 'Eco-friendly options' },
    { href: '#map', label: 'Map & coverage' },
    { href: '#testimonials', label: 'Local testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#signup', label: 'List your business' },
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

/* ------------------------------------------------ Provider Cards --------------------------------------------------- */

function ProviderBadges({ l }: { l: Listing }) {
  return (
    <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
      {l.tags?.map((t) => (
        <li key={t} className="badge">
          {t}
        </li>
      ))}
      {l.insured && <Badge>Insured</Badge>}
      {l.wasteCarrier && <Badge>Waste carrier</Badge>}
      {l.acceptsGreenBin && <Badge>Uses green bin</Badge>}
      {l.removalIncluded && <Badge>Removal included</Badge>}
      {l.eco && <Badge>Eco options</Badge>}
      {l.dbs && <Badge>DBS (domestic)</Badge>}
    </ul>
  )
}

function FeaturedCard({ l }: { l: Listing }) {
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || IMG.work.src})` }}
            aria-label={`${l.name} branding`}
            role="img"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{l.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{l.excerpt}</p>
              <div className="mt-2 text-xs text-gray-600">
                <span className="font-medium">Services:</span> {displayList(l.services)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-bold">{l.priceFrom ?? 'On request'}</div>
              <div className="mt-1 text-xs">
                {l.verified ? <span className="text-green-700">Verified</span> : <span className="text-gray-400">Unverified</span>}
              </div>
            </div>
          </div>

          <ProviderBadges l={l} />

          <dl className="mt-3 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs text-gray-500">Area served</dt>
              <dd className="mt-1 text-gray-800">{displayAreas(l.areaServed)}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Contact</dt>
              <dd className="mt-1 text-gray-800">
                {l.phoneTel ? (
                  <>
                    <a className="underline" href={l.phoneTel}>
                      {l.phoneLocal}
                    </a>
                    <br />
                  </>
                ) : (
                  <span className="text-gray-500">No phone listed</span>
                )}
                {l.email ? (
                  <a className="underline" href={`mailto:${l.email}`}>
                    {l.email}
                  </a>
                ) : null}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Booking</dt>
              <dd className="mt-1">
                <div className="flex flex-wrap gap-2">
                  {l.phoneTel && (
                    <a href={l.phoneTel} className="btn btn-primary btn-sm" aria-label={`Call ${l.name}`}>
                      Call
                    </a>
                  )}
                  {l.website && (
                    <a href={l.website} target="_blank" rel="noopener" className="btn btn-muted btn-sm">
                      Website
                    </a>
                  )}
                  {l.bookingUrl && (
                    <a href={l.bookingUrl} target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                      Book visit
                    </a>
                  )}
                </div>
              </dd>
            </div>
          </dl>

          {l.notes && l.notes.length > 0 && (
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {l.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  )
}

function ListingCard({ l, index }: { l: Listing; index: number }) {
  const isFeatured = !!l.featured
  return (
    <article id={l.slug} className={cx('rounded-xl p-4 border', isFeatured ? 'bg-white shadow-sm border-emerald-200' : 'bg-gray-50')}>
      <div className="flex items-start gap-4">
        <div
          className="h-14 w-20 flex-shrink-0 rounded-md border bg-cover bg-center text-[10px] text-gray-400"
          style={{ backgroundImage: `url(${l.image || IMG.work.src})` }}
          role="img"
          aria-label={`${l.name} logo`}
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium">
                {index}. {l.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{l.excerpt}</p>
              <div className="mt-2 text-xs text-gray-600">
                <span className="font-medium">Services:</span> {displayList(l.services)}
              </div>
              <ProviderBadges l={l} />
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-semibold">{l.priceFrom ?? 'On request'}</div>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {l.website ? (
              <a href={l.website} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener">
                Visit
              </a>
            ) : null}
            {l.phoneTel ? (
              <a href={l.phoneTel} className="inline-block rounded px-3 py-1 text-xs border bg-white">
                Call
              </a>
            ) : (
              <span className="inline-block rounded px-3 py-1 text-xs border bg-white text-gray-400">No phone</span>
            )}
            {l.email ? (
              <a href={`mailto:${l.email}`} className="inline-block rounded px-3 py-1 text-xs border bg-white">
                Email
              </a>
            ) : null}
            {l.bookingUrl ? (
              <a href={l.bookingUrl} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener">
                Book
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------ Sections --------------------------------------------------------- */

function FeaturedProviders() {
  const featured = LISTINGS.filter((l) => l.featured)
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured gardeners (insured • quick contact)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We highlight providers with clear insurance/waste notes and predictable schedules. Ask for a simple written
        quote and what’s included (e.g., cut height, hedge shape, waste removal, jet wash areas).
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">{featured.map((f) => <FeaturedCard key={f.slug} l={f} />)}</div>
      <Small>Large tree work or complex landscaping? Consider a specialist arborist/landscaper and check protections.</Small>
    </section>
  )
}

function ServicesGuide() {
  const cards = [
    {
      title: 'Lawn care',
      items: [
        'Regular cuts & edging',
        'Seasonal feed (on request)',
        'Strimming awkward edges',
        'Clean-up blow & tidy',
      ],
      img: IMG.work,
    },
    {
      title: 'Hedges & light pruning',
      items: ['Shaping & height control', 'Light pruning of small trees/shrubs', 'Clippings removal (by arrangement)'],
      img: IMG.hedge,
    },
    {
      title: 'Garden clearance',
      items: ['One-off tidy-ups', 'Leaf clears', 'Weed & rake overs', 'Waste management options'],
      img: IMG.hero,
    },
    {
      title: 'Planting & borders',
      items: ['Soil prep & mulch', 'Seasonal colour', 'Low-maintenance choices', 'Container refresh'],
      img: IMG.hose,
    },
    {
      title: 'Small repairs & cleaning',
      items: ['Fence panel swaps (small)', 'Minor patio repoint', 'Pressure washing (paths/patios)'],
      img: IMG.patio,
    },
  ]
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="services-title">What gardeners do (common jobs)</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Agree scope and waste options up front. For wildlife, avoid trimming hedges during peak nesting activity where
          possible and follow current advice.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article key={c.title} className="card">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-36 overflow-hidden rounded-lg border">
                    <Image src={c.img.src} alt={c.img.alt} fill className="object-cover" sizes="144px" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <ul className="mt-2 list-disc pl-5 text-gray-700">
                      {c.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <Small>For bigger structural works, drainage or walls, book a landscaper and check local planning guidance.</Small>
      </div>
    </section>
  )
}

function AllListings() {
  const others = LISTINGS.filter((l) => !l.featured)
  const featuredCount = LISTINGS.filter((l) => l.featured).length
  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">All listings (Saltaire & nearby)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Availability moves with the seasons — book early in spring/summer. Ask about wet-weather reschedules.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {others.map((l, i) => (
          <ListingCard key={l.slug} l={l} index={i + 1 + featuredCount} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  const cols = [
    'Provider',
    'Insured',
    'Waste carrier',
    'Green bin',
    'Removal included',
    'Eco options',
    'Services',
    'Payment',
    'Contact',
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Confirm insurance and waste arrangements before work begins.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[1080px]">
            <thead>
              <tr>
                {cols.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LISTINGS.map((l) => (
                <tr key={l.slug}>
                  <td>
                    <a className="underline underline-offset-4 decoration-gray-300 hover:decoration-black" href={`#${l.slug}`}>
                      {l.name}
                    </a>
                    {l.featured ? <div className="text-xs text-emerald-700">Featured</div> : null}
                  </td>
                  <td>{l.insured ? 'Yes' : '—'}</td>
                  <td>{l.wasteCarrier ? 'Yes' : '—'}</td>
                  <td>{l.acceptsGreenBin ? 'Yes' : '—'}</td>
                  <td>{l.removalIncluded ? 'Yes' : '—'}</td>
                  <td>{l.eco ? 'Yes' : '—'}</td>
                  <td>{(l.services || []).slice(0, 4).join(', ') || '—'}</td>
                  <td>{l.payment?.join(', ') ?? '—'}</td>
                  <td>{l.phoneTel ? <a className="underline underline-offset-4" href={l.phoneTel}>Call</a> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Keep receipts for any waste removal; note the carrier’s details on the invoice.</Small>
      </div>
    </section>
  )
}

function HireSafely() {
  const steps = [
    'Share photos and a short scope (e.g., lawn + hedge trim + tidy).',
    'Ask for insurance status and waste-handling plan (green bin vs licensed removal).',
    'Confirm wildlife-aware practice: avoid peak nesting disturbance; tidy with care.',
    'Agree a day/time window and wet-weather fallback.',
    'Get a simple quote covering what’s included and how waste is handled.',
    'On the day: a quick walk-through, confirm cut heights/hedge shape, and payment method.',
  ]
  const avoid = [
    'No written scope — leads to confusion on what’s included.',
    'Unclear waste plan — can result in extra charges or improper disposal.',
    'Large tree or structural work without suitable qualifications.',
  ]
  return (
    <section id="hire-safely" aria-labelledby="hire-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="hire-title">Hire a gardener safely</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Practical steps</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <Small>Not legal advice — just practical pointers. Check current local guidance if unsure.</Small>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Avoid pitfalls</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {avoid.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <div className="mt-6 relative overflow-hidden rounded-2xl border">
        <Image src={IMG.work.src} alt={IMG.work.alt} width={IMG.work.w} height={IMG.work.h} className="object-cover" />
      </div>
    </section>
  )
}

function Seasonal() {
  const seasons = [
    {
      name: 'Spring',
      notes: ['First tidy & cut (higher setting)', 'Mulch borders', 'New planting & seeds', 'Pressure wash paths (as needed)'],
    },
    {
      name: 'Summer',
      notes: ['Regular cuts & edging', 'Deadhead for continuous colour', 'Light hedge trims (avoid disturbance)'],
    },
    {
      name: 'Autumn',
      notes: ['Leaf clears', 'Final hedge shape', 'Soil prep & bulbs', 'Jet wash before frost (careful drainage)'],
    },
    {
      name: 'Winter',
      notes: ['Hard-stand tidy', 'Fence panel swaps (dry days)', 'Tool maintenance', 'Plan spring works'],
    },
  ]
  return (
    <section id="seasonal" aria-labelledby="seasonal-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="seasonal-title">Seasonal checklists (simple cues)</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {seasons.map((s) => (
          <article key={s.name} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {s.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <Small>Hedge/brush timing: be considerate of wildlife; check current advice for nesting seasons.</Small>
    </section>
  )
}

function WasteAndDisposal() {
  const bullets = [
    'Green bin: clippings, leaves and small prunings where accepted. Check your council info.',
    'Licensed carrier: for larger loads or where bins are full; keep the invoice/receipt.',
    'Reuse/mulch: where suitable, chip and reuse as mulch (agree first).',
    'Avoid contamination: no soil, rubble or plastics mixed with green waste unless arranged.',
  ]
  const howto = [
    'Decide if you’ll use your green bin or need removal.',
    'Get the carrier’s details on the quote/invoice.',
    'Keep a receipt for records; note the date and what was taken.',
  ]
  return (
    <section id="waste" aria-labelledby="waste-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="waste-title">Green waste & disposal (simple, clean)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Options</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Receipt checklist</h3>
              <ol className="mt-2 list-decimal pl-5 text-gray-700">
                {howto.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ol>
              <Small>Fly-tipping harms everyone — use licensed removal where needed and keep records.</Small>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function RepairsAndCleaning() {
  const notes = [
    'Small fence fixes: panel swaps, post-cap replacements. Larger structural work may need a specialist.',
    'Patio pointing: minor re-point or lift-and-lay patches. Avoid blocking drainage.',
    'Jet washing: avoid aggressive settings near mortar; rinse run-off responsibly.',
  ]
  return (
    <section id="repairs" aria-labelledby="repairs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="repairs-title">Small repairs & jet washing</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Many gardeners take on <em>small</em> fixes that keep things neat without major works. Confirm scope and
            avoid drainage issues or damage to neighbouring property.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <Small>Major landscaping? Seek a specialist quote and consider drainage/planning advice.</Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.patio.src} alt={IMG.patio.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function EcoOptions() {
  const ideas = [
    'Leave a small wild corner for pollinators.',
    'Use mulch to reduce watering and suppress weeds.',
    'Choose drought-tolerant plants in sunny spots.',
    'Compost soft green waste where space allows.',
    'Swap petrol tools for battery where practical (quieter).',
  ]
  return (
    <section id="eco" aria-labelledby="eco-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="eco-title">Eco-friendly touches (low effort wins)</SectionHeading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Easy wins</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {ideas.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Discuss with your gardener</h3>
              <p className="mt-2 text-gray-700">
                Ask about mulching, low-maintenance planting, and calmer tool choices. Tiny changes keep gardens tidy
                and kinder to neighbours.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & coverage</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We keep mapping lightweight here for page speed. When you add an interactive map, consider pins per provider
        route to avoid clutter.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm exact routes and service days with your provider.</Small>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    ['“Quick tidy and hedge shape before a family visit — friendly and precise.”', '— Victoria Road, Saltaire'],
    ['“Shipley route kept our lawn neat every fortnight — reliable even in wet spells.”', '— Moorhead area, Shipley'],
    ['“Border refresh with mulch cut the weeds right down. Looks great.”', '— BD18 resident'],
    ['“Fence panel replaced after wind — neat job and no mess left.”', '— Saltaire Village'],
  ]
  return (
    <section id="testimonials" aria-labelledby="testi-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="testi-title">Local testimonials</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {quotes.map(([q, by]) => (
          <figure key={q} className="border rounded-md p-4 bg-white">
            <blockquote className="text-gray-700">{q}</blockquote>
            <figcaption className="mt-3 text-xs text-gray-500">{by}</figcaption>
          </figure>
        ))}
      </div>
      <Small>Illustrative examples. When you collect real reviews, consider Review schema for richer snippets.</Small>
    </section>
  )
}

/* ------------------------------------------------ FAQ -------------------------------------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do gardeners take green waste away?',
    a: 'Some do — either via your green bin or as licensed carriers. Confirm what’s included and keep a receipt for removals.',
  },
  {
    q: 'When is the best time to trim hedges?',
    a: 'Light trims are common outside peak nesting activity. Check current advice and avoid disturbing wildlife.',
  },
  {
    q: 'Do you publish prices?',
    a: 'No. Costs vary with lawn size, hedge height/length, access and waste. Get a short written quote first.',
  },
  {
    q: 'Can they fix fences or patios?',
    a: 'Many handle small repairs and jet washing. Bigger structural or drainage-related work needs a specialist.',
  },
  {
    q: 'Are gardeners insured?',
    a: 'Reputable providers carry public liability insurance — ask for confirmation on request.',
  },
  {
    q: 'Do they work in wet weather?',
    a: 'Light showers, often yes; heavy rain or strong winds, usually rescheduled. Agree a fallback plan.',
  },
  {
    q: 'Can they do tree work?',
    a: 'Light pruning of small shrubs/trees is common. For substantial work, hire a qualified arborist and check protections.',
  },
  {
    q: 'How far ahead should I book?',
    a: 'Spring and summer book early. For route-based services, ask about set day/fortnightly slots.',
  },
  {
    q: 'Do gardeners accept card payments?',
    a: 'Many accept card or bank transfer. We show payment types where provided.',
  },
  {
    q: 'Can I request eco-friendly options?',
    a: 'Yes — ask about mulching, lower-noise tools, and drought-tolerant planting.',
  },
]

function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Frequently asked questions</SectionHeading>
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
      {/* FAQ JSON-LD */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQS.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
    </section>
  )
}

function SignupBusinesses() {
  const subject = encodeURIComponent('List my gardening service on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my gardening service on Saltaire Guide.\n\nBusiness name:\nAreas served:\nServices (lawn/hedge/clearance/planting/repairs/jetwash):\nLicensed waste carrier (yes/no):\nInsurance (yes/no):\nEco options (yes/no):\nPhone:\nEmail:\nWebsite/booking:\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Gardeners — list your business</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured gets a badge, priority placement and better conversion. Add your insurance and
          waste details to build trust.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={mailto} className="btn btn-primary">
            Request listing via email
          </a>
          <Link href="/local-services" className="btn btn-outline">
            All local services
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Explore other categories" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Need other help locally?</h2>
          <p className="mt-2 max-w-prose text-gray-700">
            Compare more categories or jump to related services for home care.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/local-services" className="btn btn-primary">
              All local services
            </Link>
            <Link href="/local-services/locksmiths" className="btn btn-outline">
              Locksmiths
            </Link>
            <Link href="/local-services/electricians" className="btn btn-ghost">
              Electricians
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.hero.src} alt={IMG.hero.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ Structured Data -------------------------------------------------- */

function StructuredData() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Gardeners serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/gardeners#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const featuredThings = LISTINGS.filter((l) => l.featured).map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: l.name,
    url: `${base}/local-services/gardeners#${l.slug}`,
    areaServed: (l.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    telephone: l.phoneTel,
    image: l.image ? `${base}${l.image}` : undefined,
    serviceType: 'Gardening services',
    paymentAccepted: l.payment?.join(', '),
    additionalProperty: [
      ...(l.services || []).map((s) => ({ '@type': 'PropertyValue', name: 'service', value: s })),
      { '@type': 'PropertyValue', name: 'insured', value: String(!!l.insured) },
      { '@type': 'PropertyValue', name: 'wasteCarrier', value: String(!!l.wasteCarrier) },
      { '@type': 'PropertyValue', name: 'eco', value: String(!!l.eco) },
      { '@type': 'PropertyValue', name: 'removalIncluded', value: String(!!l.removalIncluded) },
    ],
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Gardeners in Saltaire',
    url: `${base}/local-services/gardeners`,
    description:
      'Find gardeners for lawn care, hedges, tidy-ups, planting and small repairs. Insurance & waste-carrier notes, seasonal tips, FAQ and quick contact.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#hire-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Gardeners', item: `${base}/local-services/gardeners` },
    ],
  }

  const howToHire = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to hire a gardener safely',
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', text: 'Share photos and a short scope of work.' },
      { '@type': 'HowToStep', text: 'Confirm insurance and waste-handling plan (green bin vs licensed removal).' },
      { '@type': 'HowToStep', text: 'Agree wildlife-aware practice and quiet hours where possible.' },
      { '@type': 'HowToStep', text: 'Get a simple written quote and schedule, plus wet-weather fallback.' },
    ],
  }

  const howToWaste = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to handle green waste from gardening',
    totalTime: 'PT3M',
    step: [
      { '@type': 'HowToStep', text: 'Decide between your green bin or licensed removal based on volume.' },
      { '@type': 'HowToStep', text: 'If removed by a carrier, keep the invoice/receipt with carrier details.' },
      { '@type': 'HowToStep', text: 'Avoid mixing soil/rubble with green waste unless arranged.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      {featuredThings.map((t, idx) => (
        <JsonLd key={idx} obj={t} />
      ))}
      <JsonLd obj={howToHire} />
      <JsonLd obj={howToWaste} />
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function GardenersPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProviders />
      <ServicesGuide />
      <AllListings />
      <CompareTable />
      <HireSafely />
      <Seasonal />
      <WasteAndDisposal />
      <RepairsAndCleaning />
      <EcoOptions />
      <MapSection />
      <Testimonials />
      <FAQ />
      <SignupBusinesses />
      <CTA />
      <StructuredData />
    </>
  )
}
