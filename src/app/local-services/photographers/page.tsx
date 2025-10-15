// src/app/local-services/photographers/page.tsx
// Saltaire Photographers — impartial local guide + monetisable featured slot (server-only, SEO-optimised, CWV-first)
//
// ---------------------------------------------------------------------------------------------------------------------
// Purpose
// - Be the best helpful page for: "photographer Saltaire", "Shipley photographers", "wedding photographer Saltaire",
//   "family photos Roberts Park", "headshots Saltaire", "property photographer Shipley", "event photographer near BD18".
// - Give locals a genuine guide (planning, locations, light, licences, usage rights) + a shortlist of nearby providers
//   to verify, without risky claims (prices/hours change). Encourage direct verification on providers' own sites.
// - Provide a clearly labelled Featured/Sponsored slot to monetise ethically (opt-in, transparent).
//
// Implementation
// - Server Component (no "use client"). Daily ISR revalidation.
// - Local images only (/public/images/*) for performance & stable CWV. Re-usable UI utilities (btn, badge, card).
// - Sections: hero, on-page TOC, featured/sponsored slot (optional), packages (portraits, weddings, events, property),
//   how-to (book flow), locations & permits (Saltaire-specific), light/weather planning, usage/licensing explainer,
//   kit & backup expectations, editing & delivery timelines, accessibility, FAQs, provider cards (verify), map placeholder,
//   business-owner CTA ("List your business"), deep JSON-LD (WebPage, BreadcrumbList, ItemList, Service/OfferCatalog,
//   multiple HowTo, FAQPage, Speakable).
//
// Editorial cautions
// - We do not guarantee any provider. Names included to aid search orientation; verify details on official sites.
// - Licensing/usage notes are general; not legal advice. For commercial campaigns, agree a written licence.
// - Parks/heritage spaces may require permission for commercial shoots. Always check latest rules.
// ---------------------------------------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* ------------------------------------------------ Metadata --------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    'Photographers in Saltaire & Shipley (2025): portraits, weddings, headshots, events & property — local guide',
  description:
    'Plan a great shoot in Saltaire: best locations, permits, light, what to ask, usage/licensing basics, editing & delivery timelines. Includes a shortlist of nearby photographers to verify and a transparent featured slot.',
  alternates: { canonical: `${site.url}/local-services/photographers` },
  openGraph: {
    title: 'Photographers in Saltaire — impartial local guide + nearby providers (verify)',
    description:
      'Where to shoot (Roberts Park, canal, Victoria Road), golden-hour tips, what to ask a photographer, usage rights, editing timelines, accessibility, and a local shortlist to verify.',
    url: `${site.url}/local-services/photographers`,
    type: 'article',
    images: [{ url: `${site.url}/images/plan-your-visit.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------------------------ Types ------------------------------------------------------------ */

type PhotoListing = {
  slug: string
  name: string
  website?: string
  areaServed?: string[]
  genres?: string[] // e.g., weddings, family, headshots, property, events, products
  excerpt?: string
  tags?: string[]
  image?: string
  featured?: boolean
  verifyNote?: string
}

type Package = {
  id: string
  name: string
  from: string
  includes: string[]
  notes?: string
}

/* ------------------------------------------------ Images (local placeholders) ------------------------------------- */

const IMG = {
  hero: { src: '/images/plan-your-visit.png', alt: 'Calm lifestyle scene in Saltaire (placeholder)', w: 1200, h: 800 },
  locations: { src: '/images/roberts-park.png', alt: 'Roberts Park lawns and bandstand (placeholder)', w: 1600, h: 1066 },
  canal: { src: '/images/saltaire-canal.png', alt: 'Leeds–Liverpool Canal near Salts Mill (placeholder)', w: 1600, h: 1066 },
  mill: { src: '/images/salts-mill.png', alt: 'Salts Mill facade (placeholder)', w: 1200, h: 800 },
  whatsOn: { src: '/images/whats-on.png', alt: 'People and events ambience (placeholder)', w: 1200, h: 800 },
  history: { src: '/images/history-unesco.png', alt: 'Heritage stone and textures (placeholder)', w: 1200, h: 800 },
}

/* ------------------------------------------------ Constants & helpers --------------------------------------------- */

const UPDATED = '2025-10-14'

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

/* ------------------------------------------------ Featured slot (monetisable) ------------------------------------- */
/**
 * We keep the featured slot generic until a photographer opts in.
 * If you want to pin your own or a partner photographer, fill details here,
 * or leave it as an invite. Clear “Sponsored” label keeps trust high.
 */

const FEATURED_SLOT = {
  enabled: true, // flip to false to hide sponsored slot
  sponsoredLabel: 'Sponsored / Featured',
  name: 'Featured photographer slot available',
  tagline:
    'Get booked by locals searching “photographer Saltaire” — appear here with clear packages and a WhatsApp CTA.',
  ctaWhatsApp:
    'https://wa.me/447305367941?text=Hi%20Saltaire%20Guide!%20I%27d%20like%20to%20feature%20my%20photography%20business.',
  ctaMail: 'mailto:hello@saltaireguide.uk?subject=Feature%20my%20photography%20business&body=Hello!%20Please%20send%20details%20about%20the%20featured%20slot.',
  image: '/images/whats-on.png',
  packages: [
    { id: 'feat-portraits', name: 'Portraits / Families', copy: '60–90 min session, 20+ edited images' },
    { id: 'feat-headshots', name: 'Headshots', copy: 'On-location or simple backdrop, 1–3 looks' },
    { id: 'feat-weddings', name: 'Weddings', copy: 'Half-day and full-day with online gallery' },
  ],
}

/* ------------------------------------------------ Packages (guide, not binding) ----------------------------------- */

const PACKAGES: Package[] = [
  {
    id: 'portraits',
    name: 'Portraits & Families (guide)',
    from: '£120',
    includes: [
      '60–90 min on-location (Roberts Park / canal / heritage streets)',
      'Online proof gallery',
      '10 retouched selects (high-res + web size)',
      'Personal-use licence',
    ],
    notes:
      'Great for families, couples, new arrivals to Saltaire. Add prints/albums if you like.',
  },
  {
    id: 'headshots',
    name: 'Headshots & Personal Branding (guide)',
    from: '£95',
    includes: [
      '30–60 min session (outdoors or simple backdrop)',
      '2–4 retouched finals (commercial licence optional)',
      'Advice on wardrobe/background',
    ],
    notes: 'Perfect for LinkedIn, press, and “about” pages.',
  },
  {
    id: 'events',
    name: 'Small Events (guide)',
    from: '£200',
    includes: [
      '2–3 hours coverage',
      'Candid & detail mix',
      'Curated online gallery w/ download',
    ],
    notes: 'Think celebrations, meetups, small cultural gatherings.',
  },
  {
    id: 'property',
    name: 'Property & Interiors (guide)',
    from: '£120',
    includes: [
      'Up to 2-bed home / small venue',
      'Balanced ambient + flash where needed',
      'Next-day delivery option',
    ],
    notes: 'Usage/licensing for sales/lettings by agreement.',
  },
  {
    id: 'weddings',
    name: 'Weddings (guide)',
    from: '£750',
    includes: [
      'Half-day coverage',
      'High-res gallery & web set',
      'Optional engagement mini-shoot',
    ],
    notes: 'Full-day, albums and second shooters available with many photographers.',
  },
]

/* ------------------------------------------------ Nearby providers (verify) --------------------------------------- */
/**
 * Names are to help owners orient their search. Verify details on the photographer’s own website.
 * We keep blurbs generic and avoid prices/hours. You can replace with real local favourites later.
 */

const PROVIDERS: PhotoListing[] = [
  {
    slug: 'saltaire-portraits',
    name: 'Saltaire Portraits (verify details)',
    website: '#',
    areaServed: ['Saltaire', 'Shipley'],
    genres: ['portraits', 'families', 'headshots'],
    excerpt:
      'Lifestyle portraits around Roberts Park and the canal. Check site for current packages and availability.',
    tags: ['Lifestyle', 'Outdoors'],
    image: IMG.locations.src,
    verifyNote: 'Confirm session length, editing times and usage rights.',
  },
  {
    slug: 'airedale-weddings',
    name: 'Airedale Weddings (verify details)',
    website: '#',
    areaServed: ['Airedale', 'Bradford & Leeds corridor'],
    genres: ['weddings', 'engagements'],
    excerpt:
      'Documentary + classic portraits. Full-day and half-day — verify portfolio and contracts.',
    tags: ['Weddings', 'Documentary'],
    image: IMG.mill.src,
    verifyNote: 'Check backup plan and second shooter options.',
  },
  {
    slug: 'shipley-headshots',
    name: 'Shipley Headshots (verify details)',
    website: '#',
    areaServed: ['Shipley', 'Saltaire'],
    genres: ['headshots', 'branding'],
    excerpt:
      'On-location headshots and simple brand sessions for local businesses.',
    tags: ['Headshots', 'Branding'],
    image: IMG.whatsOn.src,
    verifyNote: 'Agree usage licence for commercial sites/socials.',
  },
  {
    slug: 'bingley-property-photo',
    name: 'Bingley Property Photo (verify details)',
    website: '#',
    areaServed: ['Bingley', 'Saltaire corridor'],
    genres: ['property', 'interiors'],
    excerpt:
      'Homes, holiday lets, small venues. Next-day turnaround options.',
    tags: ['Property', 'Interiors'],
    image: IMG.canal.src,
    verifyNote: 'Confirm floorplans/virtual tours if needed.',
  },
  {
    slug: 'events-bradford',
    name: 'Bradford Event Imaging (verify details)',
    website: '#',
    areaServed: ['Bradford', 'Leeds fringe', 'Saltaire'],
    genres: ['events', 'press'],
    excerpt:
      'Candid coverage, speaker shots and detail imagery for small events.',
    tags: ['Events', 'Press'],
    image: IMG.history.src,
    verifyNote: 'Agree delivery deadline for press releases.',
  },
]

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
          Photographers
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Photographers in Saltaire & Shipley</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Plan a brilliant shoot in the model village: Roberts Park, the canal, heritage streets and the Mill. We cover
            when to shoot, what to ask, usage rights and realistic timelines — plus a shortlist of nearby photographers
            to consider (verify details).
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated {UPDATED}</li>
            <li className="badge">Locations & permits</li>
            <li className="badge">Usage/licensing basics</li>
            <li className="badge">Editing & delivery timelines</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#packages" className="btn btn-primary">Popular packages</a>
            <a href="#providers" className="btn btn-outline">Nearby photographers</a>
            <a href="#faq" className="btn btn-ghost">FAQ</a>
          </div>
          <Small>
            Providers listed are not endorsed; verify on their own sites. Commercial shoots may require permissions.
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
    { href: '#featured', label: 'Featured photographer (sponsored)' },
    { href: '#packages', label: 'Popular packages (guide)' },
    { href: '#howto', label: 'How to book (flow)' },
    { href: '#locations', label: 'Locations & permits' },
    { href: '#light', label: 'Light & weather tips' },
    { href: '#licensing', label: 'Usage rights 101' },
    { href: '#kit', label: 'Kit & backup to expect' },
    { href: '#editing', label: 'Editing & delivery' },
    { href: '#access', label: 'Accessibility notes' },
    { href: '#providers', label: 'Nearby providers (verify)' },
    { href: '#map', label: 'Map & orientation' },
    { href: '#owners', label: 'List your business' },
    { href: '#faq', label: 'FAQ' },
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
  if (!FEATURED_SLOT.enabled) return null
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured photographer — local spotlight</SectionHeading>
      <div className="mt-4 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-amber-200 px-2 py-0.5 text-xs font-medium text-amber-900">
            {FEATURED_SLOT.sponsoredLabel}
          </span>
          <span className="text-xs text-amber-900/80">Clear labelling keeps trust high.</span>
        </div>
        <div className="mt-3 md:flex md:gap-6">
          <div className="md:flex-shrink-0">
            <div className="w-48 h-32 rounded-md overflow-hidden border bg-white">
              <Image src={FEATURED_SLOT.image} alt="Featured photographer example" width={384} height={256} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex-1">
            <h3 className="text-2xl font-semibold">{FEATURED_SLOT.name}</h3>
            <p className="text-sm text-gray-800 mt-1">{FEATURED_SLOT.tagline}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-sm text-gray-800">
              {FEATURED_SLOT.packages.map((p) => (
                <li key={p.id} className="rounded-lg border border-amber-200 bg-white p-3">
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-gray-600">{p.copy}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={FEATURED_SLOT.ctaWhatsApp} className="btn btn-primary">Enquire via WhatsApp</a>
              <a href={FEATURED_SLOT.ctaMail} className="btn btn-outline">Email about featuring</a>
            </div>
            <Small>Want this slot? It’s opt-in and limited. We’ll label it “Sponsored” and keep advice impartial.</Small>
          </div>
        </div>
      </div>
    </section>
  )
}

function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="packages-title">Popular packages (guide, not binding)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Every photographer works differently. Use these as planning anchors, then confirm the exact scope, licence and
        delivery times on the provider’s own site.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {PACKAGES.map((p) => (
          <article key={p.id} id={p.id} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-1 text-sm text-gray-600">From {p.from}</div>
              <ul className="mt-2 list-disc pl-5 text-gray-800">
                {p.includes.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {p.notes ? <Small>{p.notes}</Small> : null}
            </div>
          </article>
        ))}
      </div>
      <Small>Tip: ask about backup equipment and how many images you’ll receive (and when).</Small>

      {/* OfferCatalog JSON-LD */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: 'Photography packages in Saltaire (guide)',
          url: `${site.url}/local-services/photographers#packages`,
          itemListElement: PACKAGES.map((p, i) => ({
            '@type': 'Offer',
            position: i + 1,
            price: p.from,
            priceCurrency: 'GBP',
            itemOffered: { '@type': 'Service', name: p.name, description: p.includes.join(' ') },
            url: `${site.url}/local-services/photographers#${p.id}`,
          })),
        }}
      />
    </section>
  )
}

const HOWTO_STEPS = [
  'Shortlist 2–3 photographers whose style matches your taste (documentary, posed, editorial).',
  'Send a brief: date, time window, people count, sample images/mood, usage needs (personal/commercial).',
  'Ask key questions: backup plan, turnaround time, licence terms, number of edited images.',
  'Agree the fee, deposit, contract, and weather backup (indoor spot or reschedule).',
  'Confirm on the week: meeting point, parking, accessibility needs, contact phone.',
  'After the shoot: choose favourites, agree edits, delivery format and any print options.',
]

function HowToBook() {
  return (
    <section id="howto" aria-labelledby="howto-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="howto-title">How to book a photographer (simple flow)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <ol className="list-decimal pl-5 text-gray-800">
              {HOWTO_STEPS.map((s) => (
                <li key={s} className="mb-1">{s}</li>
              ))}
            </ol>
            <Small>Keep everything in writing (email/contract). For commercial work, ensure the usage licence is clear.</Small>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-lg font-semibold">What to include in your brief</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-800">
              <li>Goal & mood (e.g., candid family morning vs. clean corporate headshots).</li>
              <li>People count & must-have shots (grandparents, team leads).</li>
              <li>Location ideas (Roberts Park bandstand, canal towpath, Salts Mill textures).</li>
              <li>Timing & weather backup (golden hour vs. mid-day shade).</li>
              <li>Usage: personal only, social media, website, print, press.</li>
            </ul>
          </article>
        </div>

        {/* HowTo JSON-LD */}
        <JsonLd
          obj={{
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to book a photographer in Saltaire',
            totalTime: 'PT10M',
            step: HOWTO_STEPS.map((t) => ({ '@type': 'HowToStep', text: t })),
          }}
        />
      </div>
    </section>
  )
}

const LOCATIONS = [
  {
    k: 'Roberts Park',
    v: 'Open lawns, bandstand, tree lines and the famous lion statues. Great for family & engagement sessions.',
    tip: 'Early mornings or golden hour for softer light; avoid busy events unless you want bustle.',
  },
  {
    k: 'Canal & Towpath',
    v: 'Water reflections and narrowboat colour. Watch for cyclists and towpath etiquette.',
    tip: 'Low wind days help for reflections. Safety first near water with little ones.',
  },
  {
    k: 'Victoria Road & Salts Mill',
    v: 'Heritage stone, arches and textured backdrops. Classic Saltaire feel.',
    tip: 'Mind business access and private property; respect signage.',
  },
  {
    k: 'Hirst Wood fringe',
    v: 'Woodland edge textures and seasonal colour. Mud risk after rain.',
    tip: 'Plan footwear and a clean-up towel for kids/pets.',
  },
]

function LocationsPermits() {
  return (
    <section id="locations" aria-labelledby="locations-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="locations-title">Locations & permits (Saltaire specifics)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <dl className="text-sm">
            {LOCATIONS.map((x) => (
              <div key={x.k} className="mb-3">
                <dt className="font-semibold text-gray-900">{x.k}</dt>
                <dd className="text-gray-700">{x.v}</dd>
                <dd className="text-xs text-gray-500 mt-1">Tip: {x.tip}</dd>
              </div>
            ))}
          </dl>
          <Small>
            Commercial filming/photography may need permission. Check venue/landowner guidance and any event restrictions.
          </Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.locations.src} alt={IMG.locations.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function LightWeather() {
  const tips = [
    'Golden hour (shortly after sunrise / before sunset) gives softer light and warm tones.',
    'Cloudy bright = flattering portraits; midday sun = seek open shade near buildings or trees.',
    'Wind matters — consider sheltered spots for hair/clothing.',
    'Wet weather backup: covered areas by Salts Mill, arches, or reschedule plan.',
  ]
  return (
    <section id="light" aria-labelledby="light-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="light-title">Light & weather — realistic planning</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <ul className="list-disc pl-5 text-gray-800">
              {tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Small>Sunrise/sunset times shift fast — confirm on the week of your shoot.</Small>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-lg font-semibold">What to bring</h3>
            <ul className="list-disc pl-5 text-gray-800">
              <li>Layers & spare footwear (towpath/grass can be damp).</li>
              <li>Small snack/water for kids; wipes for little hands.</li>
              <li>Lint roller; hairbrush; optional blanket for seated shots.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function Licensing() {
  const bullets = [
    'Personal-use licence: you can share online and print for yourself/family. Credit appreciated but usually optional.',
    'Commercial licence: needed for business websites, ads, press, or paid campaigns — agree scope and duration in writing.',
    'Model release: for commercial promotion, photographers may ask subjects to sign a release.',
    'Social usage: tag the photographer if requested; avoid heavy filters over edited images unless agreed.',
  ]
  return (
    <section id="licensing" aria-labelledby="licensing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="licensing-title">Usage rights 101 (not legal advice)</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <ul className="list-disc pl-5 text-gray-800">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Small>Always read the contract. For brand work, define the licence (territory, duration, media, exclusivity).</Small>
      </div>
    </section>
  )
}

function KitBackup() {
  const kit = [
    'Two camera bodies or rapid backup plan.',
    'Multiple lenses covering wide/normal/portrait.',
    'Off-camera flash/reflector for balance on gloomy days.',
    'Plenty of batteries & cards; dual-slot recording if available.',
  ]
  const safety = [
    'Respect towpath users and water edges; brief kids before moving near the canal.',
    'No blocking access to businesses; be considerate on narrow streets.',
  ]
  return (
    <section id="kit" aria-labelledby="kit-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="kit-title">Kit & backup — what good practice looks like</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Equipment & redundancy</h3>
          <ul className="list-disc pl-5 text-gray-800">
            {kit.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Safety & courtesy</h3>
          <ul className="list-disc pl-5 text-gray-800">
            {safety.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
          <Small>Public spaces are shared; keep gear tidy and pathways clear.</Small>
        </article>
      </div>
    </section>
  )
}

function EditingDelivery() {
  const timeline = [
    'Next-day sneak peek (optional): 3–5 images.',
    'Proof gallery in 1–2 weeks (typical; ask your photographer).',
    'Final edited set within 2–4 weeks depending on scope.',
    'Weddings often longer — 4–8 weeks or agreed in contract.',
  ]
  const delivery = [
    'Private online gallery (download with PIN).',
    'High-res for print + web-size versions.',
    'Optional prints, framed pieces and albums.',
  ]
  return (
    <section id="editing" aria-labelledby="editing-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="editing-title">Editing & delivery — realistic timelines</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-lg font-semibold">Typical timelines</h3>
            <ul className="list-disc pl-5 text-gray-800">
              {timeline.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-lg font-semibold">Delivery formats</h3>
            <ul className="list-disc pl-5 text-gray-800">
              {delivery.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Small>Always back up your images. Ask how long your gallery link will stay live.</Small>
          </article>
        </div>
      </div>
    </section>
  )
}

function Accessibility() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="access-title">Accessibility notes</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <ul className="list-disc pl-5 text-gray-800">
          <li>Roberts Park has step-free paths and benches nearby.</li>
          <li>Some heritage streets have cobbles — plan footwear and mobility needs.</li>
          <li>Canal towpath surface varies with weather; consider alternate spots if needed.</li>
        </ul>
        <Small>See our <Link href="/plan/accessibility" className="underline underline-offset-4">access basics</Link> for more local context.</Small>
      </div>
    </section>
  )
}

function Providers() {
  return (
    <section id="providers" aria-labelledby="providers-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="providers-title">Nearby photographers to verify</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Start with style fit — then confirm availability, contract and licence on the photographer’s website. We don’t
        guarantee any provider.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROVIDERS.map((p) => (
          <article key={p.slug} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="relative h-36 w-full overflow-hidden rounded-md border">
              <Image src={p.image || IMG.hero.src} alt={`${p.name} image`} fill className="object-cover" />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-700">{p.excerpt}</p>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
              {(p.genres || []).map((g) => (
                <li key={g} className="badge">{g}</li>
              ))}
              {(p.tags || []).map((t) => (
                <li key={t} className="badge">{t}</li>
              ))}
            </ul>
            {p.areaServed?.length ? <Small>Areas: {p.areaServed.join(', ')}</Small> : null}
            {p.verifyNote ? <Small>{p.verifyNote}</Small> : null}
            <div className="mt-3">
              {p.website ? (
                <a href={p.website} className="underline underline-offset-4" target="_blank" rel="noopener">Visit site</a>
              ) : (
                <span className="text-xs text-gray-500">No site provided</span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ItemList JSON-LD for providers */}
      <JsonLd
        obj={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Photographers in and around Saltaire',
          itemListOrder: 'https://schema.org/ItemListUnordered',
          numberOfItems: PROVIDERS.length,
          itemListElement: PROVIDERS.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.name,
            url: p.website || `${site.url}/local-services/photographers#${p.slug}`,
            description: p.excerpt,
          })),
        }}
      />
    </section>
  )
}

function MapPlaceholder() {
  return (
    <section id="map" aria-labelledby="map-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="map-title">Map & orientation</SectionHeading>
        <div className="mt-3 relative w-full h-64 rounded-2xl border-2 border-dashed flex items-center justify-center text-slate-400">
          Interactive map placeholder — integrate Leaflet/Mapbox and load provider pins.
        </div>
        <Small>Tip: link pins to provider cards and track clicks for analytics.</Small>
      </div>
    </section>
  )
}

function OwnersCTA() {
  const mail = `mailto:hello@saltaireguide.uk?subject=${encodeURIComponent(
    'List my photography business on Saltaire Guide'
  )}&body=${encodeURIComponent(
    `Hi,\n\nI'd like to list my photography business.\n\nBusiness name:\nWebsite/portfolio:\nSpecialisms (e.g., weddings, families, headshots, property):\nShort bio:\nDo you want the Featured slot details? (yes/no)\n\nThanks!`
  )}`
  return (
    <section id="owners" aria-labelledby="owners-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="owners-title">Photographers — list your business</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <p className="text-gray-700">
          Basic listing is free (subject to review). The featured slot is optional and clearly marked “Sponsored”.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <a href={mail} className="btn btn-primary">Request a listing</a>
          <a href="#featured" className="btn btn-outline">See featured slot</a>
        </div>
        <Small>We prioritise useful, human-centred guides — quality over quantity.</Small>
      </div>
    </section>
  )
}

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do I need permission to shoot in Roberts Park or by Salts Mill?',
    a: 'For casual personal photos, you’re usually fine. For commercial shoots (ads/brands) or larger setups, ask the venue/landowner first and follow any local guidance.',
  },
  {
    q: 'What’s the best time of day for portraits?',
    a: 'Golden hour is flattering; otherwise find open shade near buildings/trees. Cloudy bright is your friend.',
  },
  {
    q: 'How many images will I get and when?',
    a: 'It varies — ask your photographer. A typical portrait session might deliver 10–30 edited images within 1–3 weeks.',
  },
  {
    q: 'Can I use the photos on my business website?',
    a: 'That’s a commercial usage. Agree the licence (duration, channels, territory) in writing as part of the contract.',
  },
  {
    q: 'What if it rains?',
    a: 'Have a backup indoor spot (covered area near the Mill) or reschedule plan. Many photographers are flexible.',
  },
  {
    q: 'Are drones allowed?',
    a: 'Drone rules are strict. Many areas require permissions and operator qualifications. Check CAA rules and local restrictions before flying.',
  },
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

function CTA() {
  return (
    <section aria-label="Plan your shoot" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready to plan your Saltaire photos?</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Pick a package, choose a location and message a photographer with your brief. Keep it simple, keep it local.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#packages" className="btn btn-primary">See packages</a>
              <a href="#providers" className="btn btn-outline">Browse photographers</a>
              <a href="#howto" className="btn btn-ghost">How to book</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.mill.src}
              alt="Heritage textures near Salts Mill — a favourite backdrop"
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

/* ------------------------------------------------ JSON-LD: Page-level blocks ------------------------------------- */

function JsonLdBlocks() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Photographers in Saltaire & Shipley — local guide + providers',
    url: `${base}/local-services/photographers`,
    description:
      'Plan a shoot in Saltaire: locations, light, how to book, usage/licensing basics, editing timelines, accessibility, and a shortlist of nearby photographers to verify.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#packages-title', '#howto-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Photographers', item: `${base}/local-services/photographers` },
    ],
  }

  // Optional business block — if the featured slot is occupied by a specific provider, replace fields accordingly.
  const featuredBiz =
    FEATURED_SLOT.enabled
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Featured photographer (sponsored slot)',
          url: `${base}/local-services/photographers#featured`,
          image: FEATURED_SLOT.image,
          areaServed: ['Saltaire', 'Shipley', 'Roberts Park'].map((n) => ({ '@type': 'Place', name: n })),
          makesOffer: FEATURED_SLOT.packages.map((o) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: o.name, description: o.copy },
            url: `${base}/local-services/photographers#featured`,
          })),
          description:
            'Sponsored/featured display area for a local photographer. Enquire to feature your business.',
        }
      : null

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      {featuredBiz ? <JsonLd obj={featuredBiz} /> : null}
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function PhotographersPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedSlot />
      <Packages />
      <HowToBook />
      <LocationsPermits />
      <LightWeather />
      <Licensing />
      <KitBackup />
      <EditingDelivery />
      <Accessibility />
      <Providers />
      <MapPlaceholder />
      <OwnersCTA />
      <FAQ />
      <CTA />
      <JsonLdBlocks />
    </>
  )
}

/* ------------------------------------------------ Notes on utilities ---------------------------------------------- */
/**
 * This page expects Tailwind utilities and the small UI helpers used across the site:
 * .btn .btn-primary .btn-outline .btn-ghost .badge .card .card-body .anchor-offset
 *
 * If you need minimal fallbacks, add in your global stylesheet:
 *
 * .btn { @apply inline-flex items-center justify-center rounded-md px-4 py-2 text-sm border; }
 * .btn-primary { @apply bg-sky-600 text-white border-sky-600 hover:bg-sky-700; }
 * .btn-outline { @apply bg-white text-slate-900 border-slate-300 hover:bg-slate-50; }
 * .btn-ghost { @apply bg-transparent text-slate-900 border-transparent hover:bg-slate-100; }
 * .badge { @apply inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-xs; }
 * .card { @apply rounded-2xl border border-gray-200 bg-white shadow-sm; }
 * .card-body { @apply p-5 text-sm text-gray-700; }
 * .anchor-offset { scroll-margin-top: 6rem; }
 */
