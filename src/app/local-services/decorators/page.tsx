// src/app/local-services/decorators/page.tsx
// Saltaire Decorators & Painters — impartial local guide (server-only, SEO, monetisable-ready, CWV-first)
//
// ---------------------------------------------------------------------------------------------------------------------
// Purpose
// - Be the best page for: "decorators Saltaire", "painter Saltaire", "wallpaper hanger Shipley",
//   "heritage decorating Saltaire", "exterior painting BD18", "low-VOC paint Saltaire", "spray finishing Shipley".
// - Friendly to residents and owners of Grade II properties in/near the Saltaire conservation area.
// - Practical, cautious content: no invented prices. Clear "verify" language. Strong internal linking.
// - Monetisation-ready: clearly labelled "Featured / Sponsored" slot with owner CTA to list/feature a business.
// - Structured data: WebPage, BreadcrumbList, ItemList (listings), FAQPage, HowTo (brief & prep), Speakable.
//
// Implementation
// - Server Component (no "use client"). Daily ISR. Local images only (public/images/*) for fast CWV.
// - Matching visual language: btn / badge / card utilities.
// - Static filters (server-rendered); you can convert to client filtering later.
// ---------------------------------------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* ------------------------------------------------ Metadata --------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    'Decorators & Painters in Saltaire (2025): heritage-safe tips, colour ideas & local listings (verify first)',
  description:
    'Practical local guide to decorators and painters around Saltaire & Shipley: hiring checklist, low-VOC tips, conservation-area notes, wallpapering & exterior care — plus nearby trades to consider (verify details).',
  alternates: { canonical: `${site.url}/local-services/decorators` },
  openGraph: {
    title: 'Decorators in Saltaire — friendly local guide (with listings to verify)',
    description:
      'How to brief a decorator, prep checklists, colour ideas that flatter Saltaire stone, conservation-area pointers, and a shortlist of decorators to consider (verify details).',
    url: `${site.url}/local-services/decorators`,
    type: 'article',
    images: [{ url: `${site.url}/images/whats-on.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------------------------ Types ------------------------------------------------------------ */

type Decorator = {
  slug: string
  name: string
  website?: string
  phoneLocal?: string
  phoneTel?: string
  email?: string
  areaServed?: string[]
  excerpt?: string
  services?: string[]
  tags?: string[]
  image?: string
  verified?: boolean // editorial verification (paperwork, references) — optional
  featured?: boolean // paid/sponsored flag
  heritageNote?: string // e.g., experience with listed buildings
  accessibilityNote?: string // e.g., dust control options, low-VOC options
}

/* ------------------------------------------------ Local Images ----------------------------------------------------- */

const IMG = {
  hero: { src: '/images/whats-on.png', alt: 'Freshly painted interior in Saltaire style (placeholder local image)', w: 1200, h: 800 },
  palette: { src: '/images/history-unesco.png', alt: 'Colour palette inspiration (placeholder local image)', w: 1200, h: 800 },
  prep: { src: '/images/plan-your-visit.png', alt: 'Preparation checklist vibe (placeholder local image)', w: 1200, h: 800 },
  exterior: { src: '/images/salts-mill.png', alt: 'Exterior stonework context (placeholder local image)', w: 1200, h: 800 },
  map: { src: '/images/roberts-park.png', alt: 'Map style placeholder', w: 1600, h: 1066 },
}

/* ------------------------------------------------ Data ------------------------------------------------------------- */
/**
 * Notes:
 * - Names below are illustrative local-style entries. Treat them as placeholders unless you have consent/confirmed details.
 * - Keep language cautious; ask readers to verify on the provider’s own site. You can swap in real providers later.
 * - You can upgrade one to a paid “featured” slot. Make sure it’s labelled Sponsored/Featured.
 */

const FEATURED_SLOT_OPEN = true // toggle to display “your business here” if you haven’t sold the slot yet

const LISTINGS: Decorator[] = [
  {
    slug: 'saltaire-house-painting-co',
    name: 'Saltaire House Painting Co.',
    website: '#',
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    excerpt:
      'Interior & exterior repainting with tidy prep and dust control. Comfortable working around families and pets. Wallpaper removal and lining.',
    services: ['Interior painting', 'Exterior repainting', 'Wallpaper stripping', 'Lining paper', 'Minor plaster repairs'],
    tags: ['interior', 'exterior', 'prep', 'lining'],
    image: '/images/parking-saltaire.png',
    verified: false,
    heritageNote: 'Familiar with stone cottages; always verify product spec per substrate.',
    accessibilityNote: 'Low-odour options available on request.',
  },
  {
    slug: 'shipley-brushworks',
    name: 'Shipley Brushworks',
    website: '#',
    areaServed: ['Shipley', 'Saltaire', 'Bingley'],
    excerpt:
      'Small team offering careful cutting-in, feature walls, and hard-wearing finishes for busy homes. Friendly, tidy, and communicative.',
    services: ['Feature walls', 'Hall/Stairs/Landing', 'Woodwork enamels', 'Kitchen refresh (paint only)'],
    tags: ['feature walls', 'woodwork', 'durable finishes'],
    image: '/images/saltaire-canal.png',
    verified: false,
  },
  {
    slug: 'baildon-paper-hangers',
    name: 'Baildon Paper Hangers',
    website: '#',
    areaServed: ['Baildon', 'Saltaire fringe'],
    excerpt:
      'Wallpaper specialists for patterns and murals; paste-the-wall and traditional. Seam matching and tricky alcoves tackled with patience.',
    services: ['Wallpaper hanging', 'Murals', 'Pattern matching', 'Stripping & surface leveling'],
    tags: ['wallpaper', 'murals', 'specialist'],
    image: '/images/history-unesco.png',
    verified: false,
  },
  {
    slug: 'airedale-spray-finish',
    name: 'Airedale Spray Finish',
    website: '#',
    areaServed: ['Airedale corridor', 'Saltaire'],
    excerpt:
      'Spray finishing for doors, cabinets & radiators; minimised overspray with masking & extraction. Factory-style finish on site where practical.',
    services: ['Spray finish', 'Cabinet repaint', 'Radiators', 'Doors & trims'],
    tags: ['spray', 'cabinet', 'HVLP'],
    image: '/images/plan-your-visit.png',
    verified: false,
  },
  {
    slug: 'heritage-masonry-friendly',
    name: 'Heritage Masonry-Friendly (verify)',
    website: '#',
    areaServed: ['Saltaire conservation area'],
    excerpt:
      'Advises on breathable coatings for stone and lime-based substrates. Emphasises gentle prep and reversible approaches.',
    services: ['Breathable systems advice', 'Gentle prep', 'Testing patches'],
    tags: ['heritage', 'breathable', 'lime'],
    image: '/images/salts-mill.png',
    verified: false,
    heritageNote:
      'Check conservation guidance; inappropriate products can trap moisture. Always get professional advice for listed fabric.',
  },
  {
    slug: 'even-keel-decor',
    name: 'Even Keel Decor',
    website: '#',
    areaServed: ['Shipley', 'Saltaire'],
    excerpt:
      'Balanced approach to timelines and finish quality. Good communication and clear daily tidy-down routines.',
    services: ['Interior rooms', 'Ceilings', 'Woodwork', 'Small exterior repairs'],
    tags: ['tidy', 'communication'],
    image: '/images/roberts-park.png',
    verified: false,
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

function JsonLd({ obj }: { obj: any }) {
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
}

function phoneOrMailCTA(name?: string, tel?: string, email?: string) {
  if (tel) return <a href={tel} className="btn btn-primary btn-sm">Call</a>
  if (email) return <a href={`mailto:${email}`} className="btn btn-primary btn-sm">Email</a>
  return (
    <a
      href={`mailto:hello@saltaireguide.uk?subject=${encodeURIComponent('Decorator enquiry via Saltaire Guide')}`}
      className="btn btn-primary btn-sm"
    >
      Enquire
    </a>
  )
}

function displayAreas(v?: string[]) {
  return (v && v.length ? v : ['Local area']).join(', ')
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
          Decorators
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Decorators in Saltaire & Shipley</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Friendly, impartial guide to painters & decorators around Saltaire — with heritage-safe pointers for stone
            cottages, colour ideas that flatter millstone grit, and a simple hiring checklist. We list nearby trades to
            consider (verify details), and offer a clearly labelled featured slot for businesses that want extra reach.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Heritage-aware tips</li>
            <li className="badge">Low-VOC options</li>
            <li className="badge">Wallpaper & spray</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#hire" className="btn btn-primary">Hiring checklist</a>
            <a href="#listings" className="btn btn-outline">Local listings</a>
            <a href="#faq" className="btn btn-ghost">FAQ</a>
          </div>
          <Small>We avoid specific prices. Always get written quotes and verify insurance/qualifications.</Small>
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
    { href: '#filters', label: 'Quick filters' },
    { href: '#featured', label: 'Featured (sponsored) slot' },
    { href: '#listings', label: 'All listings' },
    { href: '#compare', label: 'Compare providers' },
    { href: '#hire', label: 'Hiring & brief guide' },
    { href: '#prep', label: 'Prep checklist' },
    { href: '#colours', label: 'Colour ideas for Saltaire stone' },
    { href: '#conservation', label: 'Conservation-area pointers' },
    { href: '#glossary', label: 'Paint & finish glossary' },
    { href: '#map', label: 'Map' },
    { href: '#faq', label: 'FAQs' },
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

/* ------------------------------------------------ Filters ---------------------------------------------------------- */

function FiltersTOC() {
  return (
    <section id="filters" className="container mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="bg-white border rounded-md p-4">
            <h3 className="text-sm font-semibold">Quick filters</h3>
            <label className="block text-xs text-slate-600 mt-3">Service</label>
            <select className="w-full border rounded-md p-2 text-sm">
              <option>All</option>
              <option>Interior painting</option>
              <option>Exterior painting</option>
              <option>Wallpaper hanging</option>
              <option>Spray finishing</option>
              <option>Heritage-friendly</option>
            </select>
            <label className="block text-xs text-slate-600 mt-3">Sort</label>
            <select className="w-full border rounded-md p-2 text-sm">
              <option>Featured</option>
              <option>A–Z</option>
              <option>Heritage experience</option>
            </select>
            <div className="mt-4 text-xs text-slate-500">
              Static filter UI — convert to a Client Component later for live filtering.
            </div>
          </div>

          <nav className="bg-white border rounded-md p-4 text-sm mt-6">
            <h4 className="font-semibold mb-2">Contents</h4>
            <ul className="space-y-2">
              <li><a href="#featured" className="hover:underline">Featured (sponsored)</a></li>
              <li><a href="#listings" className="hover:underline">All listings</a></li>
              <li><a href="#compare" className="hover:underline">Compare</a></li>
              <li><a href="#hire" className="hover:underline">Hiring guide</a></li>
              <li><a href="#prep" className="hover:underline">Prep checklist</a></li>
              <li><a href="#colours" className="hover:underline">Colour ideas</a></li>
              <li><a href="#conservation" className="hover:underline">Conservation pointers</a></li>
              <li><a href="#glossary" className="hover:underline">Glossary</a></li>
              <li><a href="#map" className="hover:underline">Map</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#signup" className="hover:underline">List your business</a></li>
            </ul>
          </nav>
        </aside>

        {/* Right-hand lead content starts after Featured; we keep this area for symmetry */}
        <div className="lg:col-span-3">
          <FeaturedOrSlot />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ Featured / Sponsored -------------------------------------------- */

function FeaturedOrSlot() {
  if (FEATURED_SLOT_OPEN) {
    const subject = encodeURIComponent('Feature my decorating business on Saltaire Guide')
    const body = encodeURIComponent(
      `Hi,\n\nI’d like to feature my decorating business on Saltaire Guide.\n\nBusiness name:\nWebsite:\nPhone:\nEmail:\nAreas served:\nServices (interior/exterior/wallpaper/spray/heritage):\nShort description:\nVerification (insurance, references):\n\nThanks!`
    )
    const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`

    return (
      <section id="featured" aria-labelledby="featured-title" className="space-y-4">
        <h2 id="featured-title" className="text-2xl font-semibold">Featured decorator (sponsored)</h2>
        <article className="rounded-lg border-2 border-amber-200 bg-amber-50 p-6">
          <div className="md:flex md:items-center md:gap-6">
            <div className="md:flex-shrink-0">
              <div className="w-48 h-32 rounded-md overflow-hidden border bg-white relative">
                <Image src={IMG.palette.src} alt="Sponsored slot placeholder" fill className="object-cover" />
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Your business here</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    Get top placement, verification badge and prominent call buttons. Transparent “Sponsored” label keeps
                    the page trustworthy while driving real enquiries.
                  </p>
                </div>
                <span className="badge">Sponsored</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                <li>Priority position above listings</li>
                <li>Verification badge (insurance/reference check)</li>
                <li>Phone / email / website CTAs</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a href={mailto} className="btn btn-primary">Enquire about featuring</a>
                <a href="#benefits" className="btn btn-outline">Benefits</a>
                <Link href="#listings" className="btn btn-ghost">See all listings</Link>
              </div>
              <Small>We keep editorial content impartial. Sponsored slots are clearly marked.</Small>
            </div>
          </div>
        </article>
      </section>
    )
  }

  // If you later set FEATURED_SLOT_OPEN to false and provide a featured item, render that here.
  return null
}

/* ------------------------------------------------ Listings --------------------------------------------------------- */

function ListingsSection() {
  const featured = LISTINGS.filter((l) => l.featured)
  const others = LISTINGS.filter((l) => !l.featured)

  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">Decorators to consider (verify details)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Treat entries as starting points. Ownership, availability and policies change; always verify on the provider’s
        website and get a written quote that confirms scope, prep and products.
      </p>

      {featured.length > 0 ? (
        <div className="mt-6 grid gap-4">
          {featured.map((f) => <FeaturedCard key={f.slug} d={f} />)}
        </div>
      ) : null}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {others.map((l, idx) => <ListingCard key={l.slug ?? idx} d={l} index={idx} />)}
      </div>
    </section>
  )
}

function FeaturedCard({ d }: { d: Decorator }) {
  return (
    <article className="bg-white rounded-lg shadow p-6 border-2 border-amber-200">
      <div className="md:flex md:gap-6">
        <div className="md:flex-shrink-0">
          <div className="w-48 h-32 bg-white border rounded-md overflow-hidden relative">
            <Image src={d.image || IMG.palette.src} alt={`${d.name} photo`} fill className="object-cover" />
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold">{d.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{d.excerpt}</p>
              {d.heritageNote ? <p className="mt-2 text-xs text-slate-500">{d.heritageNote}</p> : null}
              {d.accessibilityNote ? <p className="mt-1 text-xs text-slate-500">{d.accessibilityNote}</p> : null}
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 mb-1">Sponsored</div>
              {d.verified ? <span className="badge">Verified</span> : <span className="badge">Listing</span>}
            </div>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm">
            <div>
              <dt className="text-xs text-slate-500">Areas</dt>
              <dd className="mt-1 text-slate-700">{displayAreas(d.areaServed)}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Services</dt>
              <dd className="mt-1 text-slate-700">{displayList(d.services)}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Tags</dt>
              <dd className="mt-1 text-slate-700">{displayList(d.tags)}</dd>
            </div>
          </dl>
          <div className="mt-4 flex gap-3">
            {d.website ? <a href={d.website} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer">Visit site</a> : null}
            {phoneOrMailCTA(d.name, d.phoneTel, d.email)}
          </div>
        </div>
      </div>
    </article>
  )
}

function ListingCard({ d, index }: { d: Decorator; index: number }) {
  return (
    <article className={cx('rounded-md p-4 border', d.verified ? 'bg-white shadow-sm' : 'bg-slate-50')}>
      <div className="flex items-start gap-4">
        <div className="w-20 h-14 rounded-sm border bg-white overflow-hidden relative">
          <Image src={d.image || '/images/parking-saltaire.png'} alt={`${d.name} image`} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium">{index + 1}. {d.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{d.excerpt}</p>
            </div>
            <div className="text-right">
              {d.verified ? <div className="text-xs text-green-700 font-medium">Verified</div> : <div className="text-xs text-slate-400">Unverified</div>}
            </div>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 text-sm">
            <div>
              <dt className="text-xs text-slate-500">Areas</dt>
              <dd className="mt-1">{displayAreas(d.areaServed)}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Services</dt>
              <dd className="mt-1">{displayList(d.services)}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Tags</dt>
              <dd className="mt-1">{displayList(d.tags)}</dd>
            </div>
          </dl>
          <div className="mt-3 flex gap-2">
            {d.website ? <a href={d.website} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">Visit</a> : null}
            {d.phoneTel ? <a href={d.phoneTel} className="btn btn-ghost btn-sm">Call {d.phoneLocal ?? ''}</a> : <span className="btn btn-ghost btn-sm opacity-60">No phone</span>}
            {d.email ? <a href={`mailto:${d.email}`} className="btn btn-ghost btn-sm">Email</a> : null}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------ Compare ---------------------------------------------------------- */

function CompareSection() {
  const rows = [
    { k: 'Heritage experience', featured: 'Advises on breathable systems; tests small patches first', others: 'Ask specifically; varies' },
    { k: 'Dust control', featured: 'Extract/sand systems + daily tidy-down', others: 'Basic dust sheets' },
    { k: 'Low-VOC options', featured: 'Yes on request', others: 'Ask at quote' },
    { k: 'Wallpapering', featured: 'Pattern matching & murals', others: 'Varies' },
    { k: 'Spray finishing', featured: 'Cabinets/rads/doors where practical', others: 'Often brush/roller only' },
    { k: 'Quote clarity', featured: 'Scope + product family named', others: 'Sometimes vague' },
  ]
  return (
    <section id="compare" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="compare-title">Compare providers (what to look for)</SectionHeading>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr>
              <th className="px-3 py-2 text-xs text-slate-500">Feature</th>
              <th className="px-3 py-2 text-xs text-slate-500">Good practice</th>
              <th className="px-3 py-2 text-xs text-slate-500">Ask if not shown</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.k} className="border-t">
                <td className="px-3 py-2">{r.k}</td>
                <td className="px-3 py-2">{r.featured}</td>
                <td className="px-3 py-2">{r.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Small>Quality of prep often matters more than the final coat brand.</Small>
    </section>
  )
}

/* ------------------------------------------------ Hiring / Brief Guide -------------------------------------------- */

function HiringGuide() {
  const steps = [
    'Scope: which rooms/surfaces? Any repairs? Furniture moving?',
    'Finish level: durable family finish vs showcase feature walls.',
    'Products: any allergies or low-VOC preferences? Brand family acceptable?',
    'Access: parking, protection plans, daily tidy, pets/children present.',
    'Timing: preferred dates, wet-weather contingencies for exteriors.',
    'Quote: written scope, named products where possible, payment schedule.',
  ]
  const questions = [
    'What prep will you do (filling, sanding, caulking) and how do you contain dust?',
    'Which primers/paints do you recommend for my substrate (timber, plaster, masonry)?',
    'Can you source low-VOC or odour-reduced options if needed?',
    'How will you handle colour matching across rooms with different light?',
    'What’s your approach to test patches and sign-off before full application?',
    'Are you insured and can you provide recent references?',
  ]
  return (
    <section id="hire" aria-labelledby="hire-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="hire-title">How to brief a decorator (owner-friendly steps)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Steps for a clear brief</h3>
              <ol className="mt-2 list-decimal pl-5 text-gray-700">
                {steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
              <Small>Clarity up-front reduces revisions and surprises later.</Small>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Questions to ask at quote</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {questions.map((q) => <li key={q}>{q}</li>)}
              </ul>
              <Small>Ask for product families (e.g., primer + mid + top) rather than a single brand line.</Small>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ Prep Checklist --------------------------------------------------- */

function PrepChecklist() {
  const homeowner = [
    'Clear small items/shelves; agree who moves heavier furniture.',
    'Pick colours early; allow time for sample patches to dry fully.',
    'Flag repairs (cracks, damp history) — decorators aren’t structural specialists.',
    'Pets/children: plan for door use, ventilation and daily tidy-down.',
  ]
  const pro = [
    'Protection: floors, furniture, sockets/switches masked or removed where safe.',
    'Surface: clean, degrease kitchens, key glossy areas, spot-prime repairs.',
    'Method: brush/roller vs spray; extraction and dust management.',
    'Weather: exteriors need dry windows and substrate moisture checks.',
  ]
  return (
    <section id="prep" aria-labelledby="prep-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="prep-title">Prep checklist (shared responsibilities)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Homeowner</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {homeowner.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Professional</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {pro.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </article>
      </div>

      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.prep.src} alt={IMG.prep.alt} fill className="object-cover" />
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-gray-800">
          Low-odour paints and good ventilation make life easier during the job. If you’re sensitive to smells, request
          low-VOC lines and schedule rooms strategically.
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ Colour ideas ----------------------------------------------------- */

function ColourIdeas() {
  const ideas = [
    { title: 'Warm off-whites', body: 'Soft off-whites with a hint of warmth complement Saltaire’s honey-coloured stone without turning yellow indoors.' },
    { title: 'Muted sages & olives', body: 'Historic-leaning greens add calm to small terraces and pair well with timber trims.' },
    { title: 'Inky feature walls', body: 'A deep blue/charcoal anchoring wall works in larger rooms — test patches to judge light loss.' },
    { title: 'Neutral woodwork', body: 'Satin woodwork in a warmer neutral avoids stark contrasts against stone-influenced schemes.' },
  ]
  return (
    <section id="colours" aria-labelledby="colours-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="colours-title">Colour ideas for Saltaire stone homes</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Light, aspect and stone colour vary by street. Always test large patches and view at different times of day.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {ideas.map((i) => (
            <article key={i.title} className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-gray-700">{i.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.palette.src} alt={IMG.palette.alt} fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ Conservation-area pointers -------------------------------------- */

function ConservationPointers() {
  const notes = [
    'External masonry and joinery: check conservation guidance before coating. Breathability matters on stone/lime substrates.',
    'Do not pressure-wash soft stone. Gentle cleaning and test patches reduce damage risk.',
    'Painted stone can trap moisture if the wrong system is used — ask your decorator and confirm product data sheets.',
    'Windows/doors in listed homes may need reversible approaches; consider brushable microporous systems.',
  ]
  return (
    <section id="conservation" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="conservation-title">Conservation-area pointers (evergreen)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
          <h3 className="text-lg font-semibold">Before you paint outside</h3>
          <ul className="mt-2 list-disc pl-5">
            {notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
          <Small>When in doubt, seek professional conservation advice. This is not legal or technical advice.</Small>
        </article>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.exterior.src} alt={IMG.exterior.alt} fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ Glossary --------------------------------------------------------- */

function Glossary() {
  const terms = [
    { t: 'VOC (Volatile Organic Compounds)', d: 'Solvent emissions from paints/finishes. Low-VOC lines help reduce odour and sensitivity.' },
    { t: 'Keying', d: 'Light abrasion to help new coats adhere to glossy/previously painted surfaces.' },
    { t: 'Microporous', d: 'Finish that allows moisture vapour to pass, useful on exterior joinery to reduce trapping moisture.' },
    { t: 'Mist coat', d: 'Thinned first coat on new plaster to prime before full coverage.' },
    { t: 'HVLP', d: 'High Volume Low Pressure spray system for fine finishes on doors/cabinets where suitable.' },
  ]
  return (
    <section id="glossary" aria-labelledby="glossary-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="glossary-title">Paint & finish glossary (quick reference)</SectionHeading>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {terms.map((x) => (
          <article key={x.t} className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="font-semibold">{x.t}</h3>
            <p className="mt-1 text-sm text-gray-700">{x.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------ Map -------------------------------------------------------------- */

function MapSection() {
  return (
    <section id="map" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & orientation</SectionHeading>
      <div
        role="img"
        aria-label="Map placeholder for decorators near Saltaire & Shipley"
        className="w-full h-64 rounded-md border-2 border-dashed flex items-center justify-center text-slate-400"
      >
        Map placeholder — integrate Leaflet/Mapbox later and load pins from your listings data.
      </div>
      <Small>Pins should deep-link to a listing and trigger analytics when clicked.</Small>
    </section>
  )
}

/* ------------------------------------------------ FAQ -------------------------------------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do decorators in Saltaire charge day rates or fixed prices?',
    a: 'Both exist. For predictable rooms, a fixed price with a defined scope is common. For complex prep or exteriors, some use day rates with a cap. Always get a written scope and product family.',
  },
  {
    q: 'Can I use low-VOC paint everywhere?',
    a: 'Many interior spaces suit low-VOC lines; kitchens/bathrooms may still need tougher, washable formulations. Your decorator can suggest options; always read the product data sheet.',
  },
  {
    q: 'What if I live in a listed terrace?',
    a: 'Discuss breathability and reversible approaches for external work. Confirm products are appropriate for stone/lime and check conservation guidance first.',
  },
  {
    q: 'Do you recommend specific brands?',
    a: 'We stay neutral. Ask your decorator to name a compatible system (primer + mid + top). Test patches help you judge colour and sheen.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Decorators can be seasonal; exterior slots fill when dry weather is likely. Book early and plan for flexibility if rain intervenes.',
  },
]

function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Frequently asked questions</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>{it.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      {/* FAQ JSON-LD */}
      <JsonLd obj={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }} />
    </section>
  )
}

/* ------------------------------------------------ Benefits / Signup ----------------------------------------------- */

function BenefitsSignup() {
  const subject = encodeURIComponent('List my decorating business on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI’d like to list my decorating business on Saltaire Guide.\n\nBusiness name:\nContact name:\nPhone:\nEmail:\nWebsite:\nAreas served:\nServices (interior/exterior/wallpaper/spray/heritage):\nShort description:\nWould you like a featured slot? (yes/no):\nVerification available (insurance, references):\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`

  return (
    <section id="signup" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10" id="benefits">
        <SectionHeading id="benefits-title">Why list or feature here?</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <h3 className="text-lg font-semibold">Benefits</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Local intent — readers already want Saltaire/Shipley decorators.</li>
              <li>Clean, fast page with clear CTAs that converts.</li>
              <li>Verification badges (insurance/reference) improve trust.</li>
              <li>Structured data helps search engines understand the directory.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
            <h3 className="text-lg font-semibold">Get listed</h3>
            <p className="mt-2">Basic listing is free. Featured slot is paid and clearly labelled “Sponsored”.</p>
            <div className="mt-4 flex gap-3">
              <a href={mailto} className="btn btn-primary">Request a listing</a>
              <a href="#featured" className="btn btn-outline">See featured slot</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ JSON-LD ---------------------------------------------------------- */

function JsonLdBlocks() {
  const base = site.url
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Decorators in Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: d.name,
      url: d.website || `${base}/local-services/decorators#${d.slug}`,
      description: d.excerpt,
      item: {
        '@type': 'LocalBusiness',
        name: d.name,
        areaServed: (d.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
        image: d.image ? `${base}${d.image}` : undefined,
        url: d.website || `${base}/local-services/decorators#${d.slug}`,
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Decorators in Saltaire',
    url: `${base}/local-services/decorators`,
    description:
      'Practical guide to decorators around Saltaire & Shipley: hiring checklist, colour ideas for Saltaire stone, conservation pointers, and a shortlist of trades to verify.',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hire-title', '#listings-title'] },
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Decorators', item: `${base}/local-services/decorators` },
    ],
  }

  const howToBrief = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to brief a decorator',
    totalTime: 'PT15M',
    step: [
      { '@type': 'HowToStep', text: 'Define scope: rooms/surfaces, repairs, moving furniture.' },
      { '@type': 'HowToStep', text: 'Clarify finish: durable family finish vs feature walls.' },
      { '@type': 'HowToStep', text: 'State product preferences: low-VOC, brand families if any.' },
      { '@type': 'HowToStep', text: 'Plan access, dust control and daily tidy procedures.' },
      { '@type': 'HowToStep', text: 'Agree timing and weather contingencies for exteriors.' },
      { '@type': 'HowToStep', text: 'Request written quote with scope and product families.' },
    ],
  }

  const howToPrep = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Homeowner prep for decorating',
    totalTime: 'PT30M',
    step: [
      { '@type': 'HowToStep', text: 'Clear small items and agree furniture moves.' },
      { '@type': 'HowToStep', text: 'Choose colours and make large test patches.' },
      { '@type': 'HowToStep', text: 'Flag repairs and any damp history to your decorator.' },
      { '@type': 'HowToStep', text: 'Plan pet/child safety and ventilation during works.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      <JsonLd obj={howToBrief} />
      <JsonLd obj={howToPrep} />
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function DecoratorsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FiltersTOC />
      <ListingsSection />
      <CompareSection />
      <HiringGuide />
      <PrepChecklist />
      <ColourIdeas />
      <ConservationPointers />
      <Glossary />
      <MapSection />
      <FAQ />
      <BenefitsSignup />
      <JsonLdBlocks />
    </>
  )
}
