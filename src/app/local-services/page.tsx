// src/app/local-services/page.tsx
// Local Services — Master Hub (server-only, CWV-first, SEO-rich, E-E-A-T)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Local services in Saltaire & Shipley — trusted directory (2025)',
  description:
    'Find trusted local services in Saltaire & Shipley: trades, pets, health, kids, transport and events. Free basic listings, optional featured providers and clear guidance on how to choose safely.',
  alternates: { canonical: `${site.url}/local-services` },
  openGraph: {
    title: 'Local services in Saltaire & Shipley — trusted directory',
    description:
      'Browse high-intent categories—plumbers, electricians, dog walkers, dentists, taxis, photographers and more. Free basic listings, verification policy and “how to choose” guide.',
    url: `${site.url}/local-services`,
    type: 'website',
    images: [{ url: `${site.url}/images/window.svg` }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Category = {
  slug: string
  label: string
  blurb: string
  icon?: { src: string; alt: string; width: number; height: number }
  synonyms?: string[]
}

/* ------------------------------- Local images ------------------------------ */

const ICONS = {
  file: { src: '/images/local-services-2.png', alt: 'Document icon', width: 64, height: 64 },
  globe: { src: '/images/local-services-1.png', alt: 'Globe icon', width: 64, height: 64 },
  next: { src: '/next.svg', alt: 'Arrow icon', width: 64, height: 64 },
  window: { src: '/images/default-service.png', alt: 'Window icon', width: 64, height: 64 },
}

/* -------------------------- Category configuration ------------------------- */

const GROUPS: Array<{
  key: 'home' | 'pets' | 'health' | 'kids' | 'transport' | 'events'
  title: string
  desc: string
  items: Category[]
}> = [
  {
    key: 'home',
    title: 'Home & Trades',
    desc: 'Reliable local trades and home services.',
    items: [
      { slug: 'plumbers', label: 'Plumbers', blurb: 'Emergencies, leaks, bathrooms, boilers.', icon: ICONS.window },
      { slug: 'electricians', label: 'Electricians', blurb: 'EICR, rewires, sockets, lighting.' },
      { slug: 'locksmiths', label: 'Locksmiths (24h)', blurb: 'Emergency entry, lock repair.' },
      { slug: 'boiler-engineers', label: 'Boiler Engineers', blurb: 'Servicing, repairs & installs.' },
      { slug: 'cleaners', label: 'Cleaners', blurb: 'Domestic, end-of-tenancy, deep clean.' },
      { slug: 'gardeners', label: 'Gardeners', blurb: 'Lawns, hedges, tidy-ups.' },
      { slug: 'window-cleaners', label: 'Window Cleaners', blurb: 'Traditional & water-fed pole.' },
      { slug: 'decorators', label: 'Decorators', blurb: 'Interior & exterior painting.' },
      { slug: 'joiners', label: 'Joiners', blurb: 'Doors, kitchens, bespoke carpentry.' },
      { slug: 'handymen', label: 'Handymen', blurb: 'Small jobs, shelves, snagging.' },
      { slug: 'removals-storage', label: 'Removals & Storage', blurb: 'House moves, van & storage.' },
      { slug: 'waste-removal', label: 'Waste Removal', blurb: 'Man & van, garden, clearances.' },
    ],
  },
  {
    key: 'pets',
    title: 'Pets',
    desc: 'Walkers, sitters, groomers and vets.',
    items: [
      { slug: 'dog-walkers', label: 'Dog Walkers', blurb: 'Verified walkers, 1:1 & groups.' },
      { slug: 'pet-sitters', label: 'Pet Sitters', blurb: 'Home visits, overnight sits.' },
      { slug: 'groomers', label: 'Dog Groomers', blurb: 'Full grooms, baths, nails.' },
      { slug: 'vets', label: 'Vets', blurb: 'Consultations, vaccines, advice.' },
      { slug: 'pet-taxi', label: 'Pet Taxi', blurb: 'Transport to vets & groomers.' },
    ],
  },
  {
    key: 'health',
    title: 'Health & Wellbeing',
    desc: 'Clinics and practitioners near Saltaire.',
    items: [
      { slug: 'dentists', label: 'Dentists', blurb: 'NHS & private, hygiene & whitening.' },
      { slug: 'gps', label: 'GPs & Clinics', blurb: 'Local practices & walk-ins.' },
      { slug: 'physio', label: 'Physiotherapists', blurb: 'Sports injuries, rehab.' },
      { slug: 'osteopaths', label: 'Osteopaths', blurb: 'Back pain & posture.' },
      { slug: 'opticians', label: 'Opticians', blurb: 'Eye tests & frames.' },
      { slug: 'gyms', label: 'Gyms & PT', blurb: 'Strength, classes, coaching.' },
      { slug: 'yoga-pilates', label: 'Yoga & Pilates', blurb: 'Studios & small groups.' },
    ],
  },
  {
    key: 'kids',
    title: 'Kids & Learning',
    desc: 'Care, tuition and activities.',
    items: [
      { slug: 'nurseries', label: 'Nurseries', blurb: 'Day care & pre-school.' },
      { slug: 'childminders', label: 'Childminders', blurb: 'Home-based care.' },
      { slug: 'tutors', label: 'Tutors', blurb: 'Maths, English, 11+ & GCSE.' },
      { slug: 'music-teachers', label: 'Music Teachers', blurb: 'Guitar, piano, vocals.' },
      { slug: 'clubs-classes', label: 'Clubs & Classes', blurb: 'Sports, dance, arts.' },
    ],
  },
  {
    key: 'transport',
    title: 'Transport & Vehicles',
    desc: 'Taxis, garages and cycling.',
    items: [
      { slug: 'taxis', label: 'Taxis', blurb: 'Station, airport, local runs.' },
      { slug: 'garages', label: 'Garages & MOT', blurb: 'Servicing, MOT & repairs.' },
      { slug: 'bike-repair', label: 'Bike Repair', blurb: 'Repairs & tune-ups.' },
      { slug: 'ev-charging', label: 'EV Charging', blurb: 'Nearby public chargers.' },
    ],
  },
  {
    key: 'events',
    title: 'Events & Creative',
    desc: 'For parties, weddings and shoots.',
    items: [
      { slug: 'photographers', label: 'Photographers', blurb: 'Family, events & weddings.' },
      { slug: 'cake-makers', label: 'Cake Makers', blurb: 'Celebration & wedding cakes.' },
      { slug: 'caterers', label: 'Caterers', blurb: 'Private dining & events.' },
      { slug: 'party-venues', label: 'Party Venues', blurb: 'Halls & private rooms.' },
      { slug: 'florists', label: 'Florists', blurb: 'Bouquets & events.' },
      { slug: 'printers', label: 'Printers', blurb: 'Flyers, posters & signage.' },
    ],
  },
]

/* ----------------------------- Data access (SSG) --------------------------- */

async function getCountForCategory(slug: string): Promise<number> {
  try {
    // @ts-ignore — dynamic path resolved at build if file exists
    const mod = await import(`@/data/local-services/${slug}`)
    const arr = Array.isArray(mod?.listings) ? (mod.listings as unknown[]) : []
    return arr.length
  } catch {
    return 0
  }
}

async function getCountsMap(): Promise<Record<string, number>> {
  const all = GROUPS.flatMap((g) => g.items.map((i) => i.slug))
  const entries = await Promise.all(
    all.map(async (slug) => [slug, await getCountForCategory(slug)] as const),
  )
  return Object.fromEntries(entries)
}

/* ------------------------------- UI helpers -------------------------------- */

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function Small({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-500">{children}</p>
}

/* --------------------------------- Sections -------------------------------- */

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
          Local services
        </li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 id="hero-title" className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Local services in Saltaire &amp; Shipley
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The independent directory for Saltaire &amp; Shipley. Find reliable trades, pet care, clinics, tutors, taxis
            and more — with clear guidance on how to choose safely and free basic listings for genuine local providers.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Run a local business? Scroll down to <strong>“List your business”</strong> to request a free basic listing
            or ask about featured spots.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Saltaire &amp; Shipley focus</li>
            <li className="badge">Verification badges</li>
            <li className="badge">No paid reviews</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/local-services/dog-walkers" className="btn btn-primary">
              Dog walkers
            </Link>
            <Link href="/local-services/plumbers" className="btn btn-outline">
              Plumbers
            </Link>
            <Link href="/local-services/taxis" className="btn btn-ghost">
              Taxis
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image src={ICONS.globe.src} alt={ICONS.globe.alt} fill sizes="(max-width: 768px) 100vw, 50vw" priority />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#categories', label: 'Browse categories' },
    { href: '#how-to-choose', label: 'How to choose safely' },
    { href: '#verify', label: 'Verification & ranking' },
    { href: '#owners', label: 'List your business' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
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

function CategoryCard({ cat, count }: { cat: Category; count: number }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/local-services/${cat.slug}`} className="block focus-visible:outline-none">
        <div className="relative h-28 w-full bg-gray-50">
          <Image
            alt={cat.icon?.alt ?? 'Service category'}
            src={ICONS.window.src}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight">{cat.label}</h3>
            <span className="badge">
              {count > 0 ? `${count} listed` : 'Free basic listing available'}
            </span>
          </div>
          <p className="mt-2 line-clamp-3 text-sm text-gray-700">{cat.blurb}</p>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <ul className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
          <li className="badge">Saltaire &amp; Shipley</li>
          <li className="badge">Optional featured spots</li>
        </ul>
      </div>
    </article>
  )
}

async function CategoriesGrid() {
  const counts = await getCountsMap()
  return (
    <section id="categories" aria-labelledby="cat-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="cat-title">Browse categories</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Start with a category, then drill into featured providers and practical tips. Where you see a “verified” badge,
        we’ve checked key documents (see policy). Categories with “Free basic listing available” are actively looking
        for more genuine local businesses.
      </p>

      <div className="mt-6 space-y-10">
        {GROUPS.map((g) => (
          <div key={g.key}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <Small>{g.desc}</Small>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((cat) => (
                <CategoryCard key={cat.slug} cat={cat} count={counts[cat.slug] ?? 0} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function HowToChoose() {
  const steps = [
    'Shortlist 2–3 local providers (Saltaire/Shipley).',
    'Check basics: phone, website or email, and a genuine local footprint.',
    'For trades: ask for proof of public liability insurance. For pet/child services: DBS where appropriate.',
    'Get a written estimate and clarify what’s included/excluded.',
    'Agree start date, access and cancellation terms in writing.',
  ]
  return (
    <section id="how-to-choose" aria-labelledby="howto-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="howto-title">How to choose a provider safely (quick guide)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Five practical steps</h3>
              <ol className="mt-2 list-decimal pl-5 text-gray-700">
                {steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
              <p className="mt-3 text-sm text-gray-600">
                Documents and availability can change — confirm on the day and keep copies of quotes and invoices.
              </p>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Questions to ask</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>Are you insured and can you share proof?</li>
                <li>What happens if plans change or it overruns?</li>
                <li>Any call-out or out-of-hours fees?</li>
                <li>Do you have recent local references?</li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                We don’t give legal advice; use common sense and keep a paper trail.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function VerificationPolicy() {
  return (
    <section id="verify" aria-labelledby="verify-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="verify-title">Verification & ranking (E-E-A-T)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="font-semibold">How verification works</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Featured providers can submit proof (e.g., insurance, DBS).</li>
            <li>We check document dates and display a simple badge when valid.</li>
            <li>Verification isn’t an endorsement; always do your own checks.</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            See our <Link href="/legal/editorial-policy" className="underline underline-offset-4">editorial policy</Link>.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="font-semibold">How providers are ordered</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Featured/verified appear first when available.</li>
            <li>Others are shown in a simple, human-curated order.</li>
            <li>No paid reviews, no fake scores — just clear info.</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            Corrections? <Link href="/legal/corrections" className="underline underline-offset-4">Report an issue</Link>.
          </p>
        </article>
      </div>
    </section>
  )
}

function OwnersCta() {
  const text = encodeURIComponent(
    [
      'Hi, I’d like to list my local business on Saltaire Guide.',
      '',
      'Business name:',
      'Category (e.g. plumbers / dog walkers):',
      'Based in (Saltaire/Shipley/nearby village):',
      'Contact name:',
      'Phone:',
      'Email:',
      'Website/Instagram:',
      'Short description:',
      'Verification available (DBS/insurance etc):',
      'Interested in featured placement? (yes/no/maybe):',
    ].join('\n'),
  )
  const waLink = `https://wa.me/447424208127?text=${text}`

  return (
    <section id="owners" aria-labelledby="owners-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <SectionHeading id="owners-title">List your business (free basic)</SectionHeading>
            <p className="mt-2 max-w-prose text-gray-700">
              We’re building the definitive local directory for Saltaire &amp; Shipley. Basic listings are free for
              genuine local providers; featured placements come with a verification badge and priority slots in your
              category.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={waLink} className="btn btn-primary" target="_blank" rel="noopener">
                Request a listing via WhatsApp
              </a>
              <Link href="/legal/editorial-policy" className="btn btn-outline">
                Editorial policy
              </Link>
              <Link href="/legal/masthead" className="btn btn-ghost">
                Who we are
              </Link>
            </div>
            <Small>We usually reply within 48 hours. We reserve the right to decline or remove listings.</Small>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image src={ICONS.file.src} alt={ICONS.file.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Are featured providers vetted?',
      a: 'Featured providers can supply proof (e.g., insurance/DBS). We display a simple badge when verified. Always do your own checks.',
    },
    {
      q: 'How do you keep this up to date?',
      a: 'We review categories regularly and accept corrections. Some data comes from owners; prices/availability can change.',
    },
    {
      q: 'Do you take commission?',
      a: 'No. Featured placement is a fixed listing product. We do not take a cut from jobs.',
    },
    {
      q: 'Can I suggest a new category?',
      a: 'Yes — send a WhatsApp message to +44 7424 208127 with the category and 1–2 local providers to seed it.',
    },
  ]
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url
  const cats = GROUPS.flatMap((g) => g.items)

  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Local services in Saltaire & Shipley',
    url: `${base}/local-services`,
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    description:
      'Trusted local services directory for Saltaire & Shipley: trades, pets, health, kids, transport and events.',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '#cat-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Local service categories',
    numberOfItems: cats.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: cats.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${base}/local-services/${c.slug}`,
      name: c.label,
      description: c.blurb,
      item: {
        '@type': 'Service',
        name: c.label,
        areaServed: { '@type': 'AdministrativeArea', name: 'Saltaire & Shipley' },
      },
    })),
  }

  const howToChoose = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to choose a local service provider in Saltaire & Shipley',
    totalTime: 'PT10M',
    step: [
      { '@type': 'HowToStep', text: 'Shortlist 2–3 local providers.' },
      { '@type': 'HowToStep', text: 'Check insurance/DBS where appropriate.' },
      { '@type': 'HowToStep', text: 'Request a written estimate with inclusions/exclusions.' },
      { '@type': 'HowToStep', text: 'Confirm schedule, access and cancellation terms.' },
      { '@type': 'HowToStep', text: 'Keep copies of documents, quotes and invoices.' },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToChoose) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default async function LocalServicesHubPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <CategoriesGrid />
      <HowToChoose />
      <VerificationPolicy />
      <OwnersCta />
      <FAQ />
      <JsonLd />
    </>
  )
}
