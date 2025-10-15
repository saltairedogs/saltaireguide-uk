// src/app/local-services/handymen/page.tsx
// Handymen & Odd Jobs in Saltaire — impartial local guide (server-only, SEO-optimised, monetisable, CWV-first)
//
// ---------------------------------------------------------------------------------------------------------------------
// Purpose
// - Rank for: "handyman Saltaire", "odd jobs Shipley", "IKEA assembly BD18", "shelf hanging Saltaire",
//   "TV wall mount Shipley", "picture hanging Saltaire", "curtain pole fitting BD18", "small jobs near me".
// - Be provider-neutral: no personal self-promo. Clear, friendly guide + owner checklists + safety notes.
// - Monetisation-ready: clearly labelled “Featured slot available (sponsored)” with a mailto onboarding CTA.
//
// Implementation
// - Server Component (no "use client"). Daily ISR revalidation. Local images only (/public/images/*) for fast CWV.
// - Sections: Hero, TOC, Featured-slot-available (sponsored), Typical jobs & pricing guidance (OfferCatalog-style),
//   What a handyman can/can’t do, DIY vs Handyman vs Trade comparison, Booking checklist, Prep checklist,
//   Wall types primer, TV mount & Shelf “HowTo” overviews, Tools typically carried, Service area context,
//   Example local listings (verify details), Safety & insurance, FAQs, Business-owner CTA.
// - JSON-LD: WebPage + BreadcrumbList + OfferCatalog (generic) + ItemList (example listings) + FAQPage + HowTo x2 + Speakable.
//
// Editorial cautions
// - Not an endorsement. Names presented only to help users orient their search; verify details directly with providers.
// - No guaranteed prices; guidance only. For regulated works (gas/advanced electrics/structural), users must hire certified trades.
// ---------------------------------------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* ------------------------------------------------ Meta ------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    'Handyman in Saltaire & Shipley (2025): flat-pack assembly, shelves, TV mounting & odd jobs — impartial local guide',
  description:
    'Friendly, provider-neutral guide to handymen & odd jobs in Saltaire & Shipley. Typical tasks and pricing guidance, what needs a certified trade, how to book, wall-type primer, safety notes, FAQs, and example local listings (verify details).',
  alternates: { canonical: `${site.url}/local-services/handymen` },
  openGraph: {
    title: 'Handymen & Odd Jobs in Saltaire — impartial guide (with example local listings)',
    description:
      'Flat-pack builds, shelf & picture hanging, curtain poles, TV mounting, small fixes. What a handyman can do, when to hire a pro, and how to book. Includes example local listings to verify.',
    url: `${site.url}/local-services/handymen`,
    type: 'article',
    images: [{ url: `${site.url}/images/plan-your-visit.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------------------------ Data ------------------------------------------------------------- */

const UPDATED = '2025-10-14'

// Neutral “featured slot” (sponsored) — initially empty; clearly labelled as advertising when used.
const FEATURED_SLOT = {
  available: true,
  heading: 'Featured local handyman (sponsored slot)',
  blurb:
    'This is a clearly labelled advertising placement for a vetted local provider. We only accept providers who agree to fair pricing, clear communication and sensible safety limits.',
  ctaMailto: (() => {
    const subject = encodeURIComponent('Request: Featured Handyman Slot on Saltaire Guide')
    const body = encodeURIComponent(
      `Hi Saltaire Guide,\n\nI'd like to enquire about the sponsored featured slot for the Handyman page.\n\nBusiness name:\nContact name:\nPhone:\nEmail:\nWebsite:\nInsurance (Y/N):\nServices offered:\nShort description:\n\nThanks!`
    )
    return `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  })(),
}

// Generic “menu” of typical small jobs (guidance only — not a quote)
type OfferRow = { name: string; guide: string; notes: string }
const OFFER_ROWS: OfferRow[] = [
  { name: 'Flat-pack assembly (chair/side table)', guide: '£10–15', notes: 'Built, leveled; packaging flattened' },
  { name: 'Flat-pack assembly (2-door wardrobe)', guide: '£35–45', notes: 'Secure fixings; anti-tip strap if supplied' },
  { name: 'Shelf install (each)', guide: '£15–25', notes: 'Fixings matched to wall type; spirit-levelled' },
  { name: 'Picture hanging (per item)', guide: '£5–10', notes: 'Anchors appropriate to wall/weight' },
  { name: 'Curtain pole or blind', guide: '£20–30', notes: 'Measure, align, fix; dust & tidy' },
  { name: 'TV wall mount (bracket supplied)', guide: '£35–55', notes: 'Load-rated fixings; optional cable tidy' },
  { name: 'Silicone re-seal (small area)', guide: '£20–35', notes: 'Remove old sealant, clean, re-seal' },
  { name: 'Loose hinge / door tweak', guide: '£15–25', notes: 'Adjust/pack and re-fix as appropriate' },
  { name: '“Odd-jobs hour” (any mix)', guide: '£35', notes: 'Bundle small tasks into one tidy visit' },
]

// Example local listings (provider-neutral; “verify details”)
type Listing = {
  slug: string
  name: string
  website?: string
  areaServed?: string[]
  excerpt?: string
  tags?: string[]
  image?: string
  verifyNote?: string
}
const EXAMPLE_LISTINGS: Listing[] = [
  {
    slug: 'handyman-saltaire-independent',
    name: 'Independent Handyman — Saltaire (verify details)',
    website: '#',
    areaServed: ['Saltaire', 'Shipley'],
    excerpt: 'Typical punch-lists: shelves, picture rails, blinds, small tweaks. Verify availability and insurance.',
    tags: ['Independent', 'Verify details'],
    image: '/images/roberts-park.png',
    verifyNote: 'Ownership/availability can change — confirm before booking.',
  },
  {
    slug: 'odd-jobs-bingley',
    name: 'Odd Jobs — Bingley side (verify details)',
    website: '#',
    areaServed: ['Bingley', 'Saltaire corridor'],
    excerpt: 'Flat-pack, curtain poles, small filling/caulk. Check scope and tools carried.',
    tags: ['Verify details'],
    image: '/images/saltaire-canal.png',
    verifyNote: 'Always verify insurance and what’s included.',
  },
  {
    slug: 'idle-fix-and-fit',
    name: 'Fix & Fit — Idle/Bradford fringe (verify details)',
    website: '#',
    areaServed: ['Idle', 'Bradford fringe'],
    excerpt: 'Curtain poles, shelves, mirrors. Ask about wall types supported and parking limits.',
    tags: ['Verify details'],
    image: '/images/plan-your-visit.png',
    verifyNote: 'Confirm tools and fixings; ask about evening slots.',
  },
]

/* ------------------------------------------------ Images ----------------------------------------------------------- */

const IMG = {
  hero: { src: '/images/plan-your-visit.png', alt: 'Friendly local handyman guide (placeholder)', w: 1200, h: 800 },
  tools: { src: '/images/whats-on.png', alt: 'Tool bag and fixings (placeholder)', w: 1200, h: 800 },
  walls: { src: '/images/history-unesco.png', alt: 'Wall types overview (placeholder)', w: 1200, h: 800 },
  map: { src: '/images/roberts-park.png', alt: 'Saltaire & Shipley area (placeholder)', w: 1600, h: 1066 },
  gallery1: { src: '/images/salts-mill.png', alt: 'Before/after placeholder 1', w: 1200, h: 800 },
  gallery2: { src: '/images/saltaire-canal.png', alt: 'Before/after placeholder 2', w: 1200, h: 800 },
}

/* ------------------------------------------------ Utils ------------------------------------------------------------ */

function cx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function Small({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-gray-500">{children}</p>
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function JsonLd({ obj }: { obj: any }) {
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
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
          Handymen
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Handymen & Odd Jobs in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A friendly, impartial guide to getting small jobs done in Saltaire & Shipley — flat-pack assembly, shelf &
            picture hanging, curtain poles/blinds, TV mounting, silicone re-seals and more. What handymen can do, when
            to hire a certified trade, and how to book smoothly.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Provider-neutral</li>
            <li className="badge">Safety-first</li>
            <li className="badge">Updated {UPDATED}</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#featured" className="btn btn-primary">Featured slot (sponsored)</a>
            <a href="#prices" className="btn btn-outline">Typical jobs & prices</a>
            <a href="#faq" className="btn btn-ghost">FAQ</a>
          </div>
          <Small>
            Not an offer of service. This guide is for information only. Always verify provider details and use certified
            trades for regulated or complex work.
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
    { href: '#featured', label: 'Featured (sponsored) — available' },
    { href: '#prices', label: 'Typical jobs & price guidance' },
    { href: '#do', label: 'What a handyman can do' },
    { href: '#dont', label: 'What needs a certified trade' },
    { href: '#compare', label: 'DIY vs Handyman vs Trade' },
    { href: '#booking', label: 'Booking checklist' },
    { href: '#prep', label: 'Prep checklist' },
    { href: '#walls', label: 'Wall types primer' },
    { href: '#howto-tv', label: 'HowTo: TV mount (overview)' },
    { href: '#howto-shelf', label: 'HowTo: shelf install (overview)' },
    { href: '#kit', label: 'Tools typically carried' },
    { href: '#coverage', label: 'Service area context' },
    { href: '#others', label: 'Example local listings (verify)' },
    { href: '#safety', label: 'Safety & sensible limits' },
    { href: '#faq', label: 'FAQs' },
    { href: '#owners', label: 'Business owners: get listed' },
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

/* ------------------------------------------------ Sections --------------------------------------------------------- */

function FeaturedSlot() {
  if (!FEATURED_SLOT.available) return null
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured local handyman — sponsored slot available</SectionHeading>
      <div className="mt-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
        <p className="text-gray-800">{FEATURED_SLOT.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={FEATURED_SLOT.ctaMailto} className="btn btn-primary">Enquire about the featured slot</a>
          <a href="#owners" className="btn btn-outline">Listing options</a>
          <a href="#prices" className="btn btn-ghost">See typical jobs & prices</a>
        </div>
        <Small>
          Advertising is clearly labelled and never affects our impartial editorial guidance. Providers must follow our
          editorial policy and safety standards.
        </Small>
      </div>
    </section>
  )
}

function PricesOfferCatalog() {
  return (
    <section id="prices" aria-labelledby="prices-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="prices-title">Typical small jobs & guidance prices (not a quote)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These guide figures help you budget for common tasks. Exact costs vary by wall type, access, fixings and time on
        site. Ask your chosen provider for a firm quote.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="min-w-[720px] w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700 w-[34%]">Job</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Guide</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody>
            {OFFER_ROWS.map((r) => (
              <tr key={r.name} className="border-t">
                <td className="px-4 py-3">{r.name}</td>
                <td className="px-4 py-3">{r.guide}</td>
                <td className="px-4 py-3">{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OfferCatalog JSON-LD (generic / indicative) */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: 'Handyman tasks — indicative pricing (Saltaire & Shipley)',
          url: `${site.url}/local-services/handymen#prices`,
          itemListElement: OFFER_ROWS.map((o, i) => ({
            '@type': 'Offer',
            position: i + 1,
            itemOffered: { '@type': 'Service', name: o.name, description: o.notes },
            price: o.guide,
            priceCurrency: 'GBP',
            url: `${site.url}/local-services/handymen#prices`,
            availability: 'https://schema.org/InStock',
          })),
        }}
      />

      <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-gray-800">
        <strong>Tip:</strong> bundle tasks (e.g., shelves + curtain poles) into one visit to save call-out and setup time.
      </div>
    </section>
  )
}

const DO_LIST = [
  'Flat-pack/IKEA builds (small to medium).',
  'Shelves (floating, bracketed, alcove) — fixings matched to wall type.',
  'Picture, mirror & rail hanging with appropriate anchors.',
  'Curtain poles & blinds (roller/venetian/roman).',
  'TV wall mounting (client supplies bracket) — load-rated fixings; cable tidy optional.',
  'Small fixes: loose hinges, sticky doors, handles, minor filling & caulk.',
  'Bathroom & kitchen silicone re-seals (small areas, no active leaks).',
  '“Odd-jobs hour” — bundle little tasks into one tidy visit.',
]
const DONT_LIST = [
  'No gas work (Gas Safe only).',
  'No advanced electrics (no rewiring/consumer units/bathroom electrics).',
  'No roofing, glazing, structural alterations or load-bearing changes.',
  'No unsafe ladder work or exterior work in poor weather.',
  'No works requiring building control sign-off.',
  'Plumbing beyond minor swaps requires a qualified plumber.',
]

function DoDont() {
  return (
    <section id="do" aria-labelledby="do-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="do-title">What a handyman typically does (and what needs a pro)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="text-lg font-semibold">Yes — small, tidy jobs</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-800">
            {DO_LIST.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </article>
        <article id="dont" className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <h3 className="text-lg font-semibold">No — certified trades only</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-800">
            {DONT_LIST.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <Small>
            Unsure? Ask your chosen provider to confirm scope. Reputable handymen will defer to certified trades when appropriate.
          </Small>
        </article>
      </div>
    </section>
  )
}

const COMPARE_ROWS = [
  {
    feature: 'Tools/experience',
    diy: 'Basic tools; experience varies.',
    handyman: 'Compact pro kit; repeatable small jobs.',
    trade: 'Specialist tools & deep experience for complex works.',
  },
  {
    feature: 'Speed/efficiency',
    diy: 'Evening/weekend project.',
    handyman: 'Fast for small tasks — in and out.',
    trade: 'Fast at complex work once scheduled.',
  },
  {
    feature: 'Safety & compliance',
    diy: 'Risk of drilling into services if unsure.',
    handyman: 'Detection and care for small jobs.',
    trade: 'Certified compliance for regulated works.',
  },
  {
    feature: 'Cost',
    diy: 'Cheapest if you own tools.',
    handyman: 'Cost-effective for punch-lists.',
    trade: 'Higher day rates; right for complex jobs.',
  },
  {
    feature: 'When to choose',
    diy: 'You enjoy it and have time.',
    handyman: 'You want quick, tidy results for small tasks.',
    trade: 'Anything gas/electrical/structural or complex.',
  },
]
function Comparison() {
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">DIY vs Handyman vs Trade — quick comparison</SectionHeading>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-[820px] w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-[26%]">Factor</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">DIY</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Handyman</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Trade (certified)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.feature} className="border-t">
                  <td className="px-4 py-3">{r.feature}</td>
                  <td className="px-4 py-3">{r.diy}</td>
                  <td className="px-4 py-3">{r.handyman}</td>
                  <td className="px-4 py-3">{r.trade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>If a job touches gas, mains electrics or structure — hire a certified professional.</Small>
      </div>
    </section>
  )
}

const BOOKING_STEPS = [
  'Send a couple of photos and a short description.',
  'Confirm address area (Saltaire/Shipley), parking notes and preferred time window.',
  'Agree a guide price and slot; ask how long the job is likely to take.',
  'On the day: confirm access, walk through the job, agree finish and tidy plan.',
  'Payment: many providers take bank/card/cash on completion; ask for a receipt if needed.',
]
function BookingFlow() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="booking-title">Booking checklist — smooth & simple</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <ol className="list-decimal pl-5 text-gray-700">
          {BOOKING_STEPS.map((s, i) => (
            <li key={i} className="mb-1">{s}</li>
          ))}
        </ol>
      </div>

      {/* HowTo JSON-LD: booking */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to book a handyman in Saltaire',
          totalTime: 'PT5M',
          supply: [{ '@type': 'HowToSupply', name: 'Job photos' }],
          tool: [{ '@type': 'HowToTool', name: 'Messaging or email' }],
          step: BOOKING_STEPS.map((s) => ({ '@type': 'HowToStep', text: s })),
        }}
      />
    </section>
  )
}

const PREP_LIST = [
  'Clear a small working area and protect fragile items.',
  'Have the product, brackets and instructions to hand.',
  'Tell the provider your wall type if you know (brick, block, plasterboard).',
  'Plan for pets/children safety around tools.',
  'Expect minor dust if drilling — ask about sheets and cleanup.',
]
function PrepChecklist() {
  return (
    <section id="prep" aria-labelledby="prep-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="prep-title">Before your appointment — quick prep checklist</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <ul className="list-disc pl-5 text-gray-700">
          {PREP_LIST.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <Small>Good prep shortens visits and keeps things tidy.</Small>
      </div>
    </section>
  )
}

const WALLS = [
  { k: 'Solid brick/stone', v: 'Strong, but hard — needs masonry bits and appropriate plugs. Vintage brick can blow — drill slow.' },
  { k: 'Blockwork (lightweight)', v: 'Holds medium loads with correct anchors; avoid oversizing holes.' },
  { k: 'Plasterboard on studs', v: 'Find studs for heavy loads; use toggles/anchors for light to medium loads.' },
  { k: 'Lathe and plaster (older)', v: 'Trickier — often needs specialty fixings or backing. Proceed with care.' },
]
function WallTypes() {
  return (
    <section id="walls" aria-labelledby="walls-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="walls-title">Wall types (quick primer)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <dl className="text-sm">
              {WALLS.map((w) => (
                <div key={w.k} className="mb-3">
                  <dt className="font-medium">{w.k}</dt>
                  <dd className="text-gray-700">{w.v}</dd>
                </div>
              ))}
            </dl>
            <Small>Unknown walls? Ask your provider to test a hidden spot or use no-drill options where sensible.</Small>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image src={IMG.walls.src} alt={IMG.walls.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

const TV_STEPS = [
  'Confirm wall type and choose suitable fixings.',
  'Agree height and position; check for glare and cable reach.',
  'Mark bracket, verify level, drill pilot, install anchors.',
  'Mount bracket, hang TV, secure safety screws.',
  'Cable tidy (clips or trunking) if requested.',
]
function HowToTV() {
  return (
    <section id="howto-tv" aria-labelledby="howto-tv-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="howto-tv-title">How a TV wall mount appointment typically works</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <ol className="list-decimal pl-5 text-gray-700">
              {TV_STEPS.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ol>
            <Small>Fireplace walls and chimneys can be more complex; discuss heat and cable routing first.</Small>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Have these ready</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Bracket with fixings (or ask the provider to supply).</li>
              <li>Cables long enough to reach sockets once mounted.</li>
              <li>Location agreed — consider seating height and glare.</li>
            </ul>
          </div>
        </article>
      </div>

      {/* HowTo JSON-LD: TV mount */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to get a TV wall mounted in Saltaire',
          totalTime: 'PT60M',
          step: TV_STEPS.map((x) => ({ '@type': 'HowToStep', text: x })),
          tool: [{ '@type': 'HowToTool', name: 'Bracket & fixings' }, { '@type': 'HowToTool', name: 'Drill, anchors, level' }],
        }}
      />
    </section>
  )
}

const SHELF_STEPS = [
  'Discuss shelf positions and loads (books? décor?).',
  'Check wall type and choose fixings; find studs where possible.',
  'Mark lines with a level; pilot drill; install anchors/brackets.',
  'Fix shelf, confirm level; adjust and secure.',
  'Wipe down and vacuum.',
]
function HowToShelf() {
  return (
    <section id="howto-shelf" aria-labelledby="howto-shelf-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="howto-shelf-title">How a shelf install typically works</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <ol className="list-decimal pl-5 text-gray-700">
              {SHELF_STEPS.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ol>
            <Small>Floating shelves on plasterboard often need special anchors and sensible load limits.</Small>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image src={IMG.tools.src} alt={IMG.tools.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>

        {/* HowTo JSON-LD: Shelf */}
        <JsonLd
          obj={{
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to get a shelf installed in Saltaire',
            totalTime: 'PT45M',
            step: SHELF_STEPS.map((x) => ({ '@type': 'HowToStep', text: x })),
            tool: [{ '@type': 'HowToTool', name: 'Drill & anchors' }, { '@type': 'HowToTool', name: 'Spirit level' }],
          }}
        />
      </div>
    </section>
  )
}

const KIT = [
  'Compact tool bag with quality bits/sockets',
  'Combi drill (masonry & wood) and driver',
  'Stud/pipe/cable detector',
  'Assorted anchors: masonry plugs, plasterboard toggles, frame fixings',
  'Spirit level, tape, square, pencil, masking tape',
  'Hand tools: hammers, pliers, screwdrivers, hex keys',
  'Silicone & gun, filler/caulk, sandpaper',
  'Dust sheets, mini vacuum, shoe covers, PPE (gloves/safety glasses/mask)',
  'Step-ladder (indoor)',
]
function KitCarried() {
  return (
    <section id="kit" aria-labelledby="kit-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="kit-title">Tools a typical handyman carries</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <ul className="list-disc pl-5 text-gray-700">
          {KIT.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Coverage() {
  return (
    <section id="coverage" aria-labelledby="coverage-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="coverage-title">Service area context</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-gray-700">
            <p>
              Most independent handymen around Saltaire cover the BD18 core, Shipley and nearby streets. Some will travel
              further for larger punch-lists — ask when enquiring. Evening slots are sometimes available.
            </p>
            <ul className="mt-3 list-disc pl-5">
              <li>Parking: If a permit is needed, discuss options up front.</li>
              <li>Apartments: Confirm entry instructions and lift size, if relevant.</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image src={IMG.map.src} alt={IMG.map.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

function OtherHandymen() {
  return (
    <section id="others" aria-labelledby="others-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="others-title">Example local listings (verify details)</SectionHeading>
      <p className="mt-2 text-gray-700 max-w-prose">
        These examples help you orient your search. We don’t endorse any provider; verify insurance, scope and pricing
        directly before booking.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {EXAMPLE_LISTINGS.map((l) => (
          <article key={l.slug} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="w-full h-32 relative rounded-md overflow-hidden border">
              <Image src={l.image || IMG.tools.src} alt={`${l.name} image`} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold mt-3">{l.name}</h3>
            <p className="text-sm text-gray-700">{l.excerpt}</p>
            <ul className="mt-2 text-xs text-gray-600 flex flex-wrap gap-2">
              {(l.tags || []).map((t) => (
                <li key={t} className="badge">{t}</li>
              ))}
            </ul>
            {l.verifyNote ? <Small>{l.verifyNote}</Small> : null}
            <div className="mt-3">
              {l.website ? (
                <a href={l.website} className="underline underline-offset-4">Visit site</a>
              ) : (
                <span className="text-xs text-gray-500">No site listed</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ItemList JSON-LD for example listings */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Example handymen around Saltaire (verify details)',
          itemListOrder: 'https://schema.org/ItemListUnordered',
          numberOfItems: EXAMPLE_LISTINGS.length,
          itemListElement: EXAMPLE_LISTINGS.map((l, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: l.name,
            url: l.website || `${site.url}/local-services/handymen#${l.slug}`,
            description: l.excerpt,
          })),
        }}
      />
    </section>
  )
}

const SAFETY_POINTS = [
  'Public liability insurance strongly recommended — ask for proof.',
  'Step-ladders indoors only; avoid unsafe ladder work/exterior work in poor weather.',
  'Wall scanning for pipes/cables is best practice; hidden services are possible in older buildings.',
  'Silicone and minor plumbing only on non-leaking areas; active leaks require a plumber.',
  'Clean-up at end; packaging flattening common. Waste removal may incur a fee or need a licensed carrier.',
]
function Safety() {
  return (
    <section id="safety" aria-labelledby="safety-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="safety-title">Safety, insurance & sensible limits</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <ul className="list-disc pl-5 text-gray-700">
          {SAFETY_POINTS.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <Small>This page is information only — always verify specifics with your chosen provider.</Small>
      </div>
    </section>
  )
}

const FAQS: Array<{ q: string; a: string }> = [
  { q: 'How do I get a quick quote?', a: 'Send a couple of photos, a short description, your street (Saltaire/Shipley) and any parking notes. Ask for a guide price and time window.' },
  { q: 'Do handymen bring fixings?', a: 'Most carry a range for common wall types. Specialty anchors can be sourced at cost or provided by you — confirm ahead.' },
  { q: 'What payment methods are common?', a: 'Many accept bank transfer or card; some take cash. Ask for a receipt if you need one.' },
  { q: 'Will they take away packaging or waste?', a: 'Often they’ll flatten packaging. Removal may incur a fee or need licensed carriers — confirm first.' },
  { q: 'Can they guarantee to avoid pipes/wires?', a: 'Detection helps, but older buildings can hide services. Agree sensible fixing points and proceed with care.' },
  { q: 'Do evenings/weekends exist?', a: 'Sometimes. Ask when enquiring — availability varies by provider.' },
  { q: 'TV over a fireplace?', a: 'Sometimes feasible, but heat/cabling make it trickier. Discuss risks and whether it’s wise for your setup.' },
  { q: 'Heavy mirrors?', a: 'Yes with rated anchors and sometimes two-person lifts. Confirm wall type and weight.' },
  { q: 'Floating shelves on plasterboard?', a: 'Possible with reinforced fixings and sensible loads. Best if studs can be used.' },
  { q: 'Exterior jobs?', a: 'Light tasks near the door may be fine in good weather. Avoid unsafe ladder work.' },
]
function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
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

function OwnersCTA() {
  const subject = encodeURIComponent('List my handyman service on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my handyman service on Saltaire Guide.\n\nBusiness name:\nContact name:\nPhone:\nEmail:\nWebsite:\nService types:\nInsurance (Y/N):\nShort description:\nInterested in the sponsored featured slot? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`

  return (
    <section id="owners" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Business owners: get listed (free basic)</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Basic listing is free. A clearly labelled sponsored featured slot is available for extra visibility.
              Providers must meet our editorial standards (insurance, fair communication, sensible safety limits).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={mailto} className="btn btn-primary">Request a listing</a>
              <a href="#featured" className="btn btn-outline">Featured slot details</a>
            </div>
            <Small>We verify basic details and keep the page impartial. Sponsored placements are always labelled.</Small>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.gallery1.src}
              alt="Get listed on Saltaire Guide"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ JSON-LD: Page/Breadcrumbs -------------------------------------- */

function JsonLdBlocks() {
  const base = site.url
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Handymen & Odd Jobs in Saltaire — impartial local guide',
    url: `${base}/local-services/handymen`,
    description:
      'Provider-neutral guide to small jobs in Saltaire & Shipley. Typical tasks and pricing guidance, what needs a certified trade, booking & prep checklists, wall primer, safety notes, FAQs and example listings (verify details).',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#prices-title', '#booking-title'] },
  }
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Handymen', item: `${base}/local-services/handymen` },
    ],
  }
  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function HandymenPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedSlot />
      <PricesOfferCatalog />
      <DoDont />
      <Comparison />
      <BookingFlow />
      <PrepChecklist />
      <WallTypes />
      <HowToTV />
      <HowToShelf />
      <KitCarried />
      <Coverage />
      <OtherHandymen />
      <Safety />
      <FAQ />
      <OwnersCTA />
      <JsonLdBlocks />
    </>
  )
}

/* ------------------------------------------------ Styles used (utility notes) ------------------------------------- */
/**
 * This page relies on your global Tailwind + small utility classes like:
 * - btn / btn-primary / btn-outline / btn-ghost
 * - badge
 * - card / card-body / card-muted
 * - anchor-offset (top padding for #links)
 *
 * If you haven’t defined them, here’s a minimal fallback to paste into your globals.css (optional):
 *
 * .btn { @apply inline-flex items-center justify-center rounded-md px-4 py-2 text-sm border; }
 * .btn-primary { @apply bg-sky-600 text-white border-sky-600 hover:bg-sky-700; }
 * .btn-outline { @apply bg-white text-slate-900 border-slate-300 hover:bg-slate-50; }
 * .btn-ghost { @apply bg-transparent text-slate-900 border-transparent hover:bg-slate-100; }
 * .badge { @apply inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-xs; }
 * .card { @apply rounded-2xl border border-gray-200 bg-white shadow-sm; }
 * .card-body { @apply p-5 text-sm text-gray-700; }
 * .card-muted { @apply bg-slate-50; }
 * .anchor-offset { scroll-margin-top: 6rem; }
 */
