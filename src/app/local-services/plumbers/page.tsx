// src/app/local-services/plumbers/page.tsx
// Saltaire Plumbers & Emergency Plumbing — category directory (server-only, static, CWV-first)
// -----------------------------------------------------------------------------------------
// Purpose
// - Become the definitive "plumbers in Saltaire" hub: clear CTAs, careful language (no invented prices),
//   long-form evergreen advice, and rich structured data.
// - Conversion-first sections: Featured providers, Emergency checklist, Same-day request tips, Boiler/Gas notes,
//   Leak mitigation (safe general guidance), Comparison table, Long FAQ, Owner signup.
// - SEO: WebPage + BreadcrumbList + ItemList + Plumber (featured) + HowTo (isolate water safely) + FAQPage + Speakable.
// - Design: matches your vintage card/badge/btn utilities; local images only.
//
// Notes
// - Plumbing vs Gas: Gas work (boilers, flues) requires Gas Safe engineers — we signpost but don’t give technical instructions.
// - Advice is practical/common-sense & non-clinical; readers must follow on-site instructions from professionals.
// - Replace placeholder provider details as you verify. Keep cautious copy.
// - No client code, no event handlers. Static-first for CWV.

// Imports
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

// Static generation / revalidation
export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Plumbers in Saltaire (2025): emergency leaks, same-day callouts, blocked drains & boiler handover',
  description:
    'Trusted plumbers serving Saltaire & Shipley. Featured providers, emergency leak checklists, safe water isolation tips, and when to call a Gas Safe engineer.',
  alternates: { canonical: `${site.url}/local-services/plumbers` },
  openGraph: {
    title: 'Plumbers in Saltaire — emergency & same-day',
    description:
      'Local plumbers for leaks, blockages and repairs. Featured providers with quick contact, comparison table, and long FAQ. Boiler work signposted to Gas Safe.',
    url: `${site.url}/local-services/plumbers`,
    type: 'article',
    images: [{ url: `${site.url}/images/parking-saltaire.png`, width: 1600, height: 1066 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Listing = {
  slug: string
  name: string
  phoneLocal?: string
  phoneTel?: string // tel:+44…
  email?: string
  website?: string
  bookingUrl?: string
  excerpt?: string
  priceFrom?: string
  emergency?: boolean
  gasSafe?: boolean // for teams that can dispatch a Gas Safe engineer (boiler-specific)
  areaServed?: string[]
  featured?: boolean
  verified?: boolean
  image?: string
  tags?: string[] // e.g. ['24/7','Emergency','Drain jetting','Card']
  services?: string[] // e.g. ['Leaks','Toilets','Showers','Radiators']
  payment?: string[] // e.g. ['Card','Cash','Contactless','Bank transfer']
  notes?: string[]
}

/* ------------------------------ Local images ------------------------------ */

const IMG = {
  hero: { src: '/images/parking-saltaire.png', alt: 'Saltaire stone terraces with signage', w: 1600, h: 1066 },
  map: { src: '/images/saltaire-canal.png', alt: 'Orientation graphic around Saltaire', w: 1600, h: 1066 },
  vintage: { src: '/images/history-unesco.png', alt: 'Historic stonework in Saltaire', w: 1200, h: 800 },
  mill: { src: '/images/salts-mill.png', alt: 'Salts Mill tower', w: 1200, h: 800 },
}

/* --------------------------------- Data ----------------------------------- */
/**
 * Replace placeholders with verified details. Keep copy evergreen and careful.
 */
const LISTINGS: Listing[] = [
  {
    slug: 'saltaire-plumbing',
    name: 'Saltaire Plumbing & Repairs',
    phoneLocal: '01274 000200',
    phoneTel: 'tel:+441274000200',
    email: undefined,
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Local repairs, leaks and bathroom fixes. Same-day slots where possible. Card accepted.',
    priceFrom: 'Call for estimate',
    emergency: true,
    gasSafe: false,
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    featured: true,
    verified: false,
    image: '/images/whats-on.png',
    tags: ['Emergency', '24/7', 'Card'],
    services: ['Leaks', 'Toilets', 'Taps', 'Radiators', 'Outdoor taps'],
    payment: ['Card', 'Cash', 'Contactless'],
    notes: ['Video call diagnostics available on request.'],
  },
  {
    slug: 'shipley-plumbers',
    name: 'Shipley Plumbers (Same-Day)',
    phoneLocal: '01274 000310',
    phoneTel: 'tel:+441274000310',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Rapid response team covering Shipley & Saltaire. Good for urgent leaks and blockages.',
    priceFrom: 'Transparent call-out on booking',
    emergency: true,
    gasSafe: true,
    areaServed: ['Shipley', 'Saltaire', 'Frizinghall'],
    featured: true,
    verified: false,
    image: '/images/plan-your-visit.png',
    tags: ['Emergency', 'Drain jetting', 'Card'],
    services: ['Burst pipes (first response)', 'Blockages', 'Leaks', 'Shut-off support'],
    payment: ['Card', 'Cash'],
    notes: ['Can arrange Gas Safe engineer for boiler faults.'],
  },
  {
    slug: 'baildon-bathrooms',
    name: 'Baildon Bathrooms & Plumbing',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Bathroom refits and routine plumbing. Not a 24/7 emergency service. Pre-book recommended.',
    priceFrom: 'By quote',
    emergency: false,
    gasSafe: false,
    areaServed: ['Baildon', 'Saltaire', 'Shipley'],
    featured: false,
    verified: false,
    image: '/images/roberts-park.png',
    tags: ['Bathrooms', 'Installations'],
    services: ['Bathrooms', 'Showers', 'Tiling (partners)'],
    payment: ['Bank transfer', 'Card'],
  },
  {
    slug: 'aire-valley-drainage',
    name: 'Aire Valley Drainage',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Blockages and jetting across the Aire Valley. Good fallback for stubborn drains.',
    priceFrom: 'By quote',
    emergency: true,
    gasSafe: false,
    areaServed: ['Shipley', 'Bingley', 'Saltaire'],
    featured: false,
    verified: false,
    image: '/images/saltaire-canal.png',
    tags: ['Drain jetting', 'CCTV'],
    services: ['Blockages', 'Jetting', 'CCTV surveys'],
    payment: ['Card', 'Cash'],
  },
  {
    slug: 'heritage-heating-handovers',
    name: 'Heritage Heating (Boiler Handover)',
    phoneLocal: '',
    phoneTel: '',
    website: '#',
    excerpt:
      'Gas Safe boiler servicing & handover (by appointment). Not an emergency plumber.',
    priceFrom: 'By quote',
    emergency: false,
    gasSafe: true,
    areaServed: ['Saltaire', 'Shipley', 'Leeds fringe'],
    featured: false,
    verified: false,
    image: '/images/salts-mill.png',
    tags: ['Gas Safe', 'Boilers'],
    services: ['Boiler service', 'Landlord certs'],
    payment: ['Card', 'Bank transfer'],
  },
]

/* ----------------------------- Utility helpers ---------------------------- */

function cx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(' ')
}

function displayAreas(v?: string[]) {
  return (v && v.length ? v : ['Saltaire']).join(', ')
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>
}

function Small({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-xs text-gray-500">{children}</p>
}

function JsonLd({ obj }: { obj: any }) {
  // eslint-disable-next-line react/no-danger
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
}

/* --------------------------------- Layout --------------------------------- */

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
          Plumbers
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Plumbers in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Trusted local plumbers for leaks, blockages and repairs. We highlight emergency options, safe water
            isolation basics, and when a <strong>Gas Safe</strong> engineer is required for boiler work.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Emergency & same-day</li>
            <li className="badge">Drain blockages</li>
            <li className="badge">Boiler handover (Gas Safe)</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Featured plumbers
            </Link>
            <Link href="#emergency" className="btn btn-outline">
              Emergency checklist
            </Link>
            <Link href="#faq" className="btn btn-ghost">
              Long FAQ
            </Link>
          </div>
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
    { href: '#listings', label: 'All listings' },
    { href: '#compare', label: 'Compare at a glance' },
    { href: '#emergency', label: 'Emergency checklist' },
    { href: '#how-to', label: 'How to isolate water (safe basics)' },
    { href: '#gas', label: 'Boiler & Gas Safe notes' },
    { href: '#map', label: 'Map & coverage' },
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

/* --------------------------- Provider card blocks ------------------------- */

function FeaturedCard({ l }: { l: Listing }) {
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-yellow-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || '/images/whats-on.png'})` }}
            aria-label={`${l.name} branding`}
            role="img"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{l.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{l.excerpt}</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-bold">{l.priceFrom ?? 'On request'}</div>
              <div className="mt-1 text-xs">{l.verified ? <span className="text-green-700">Verified</span> : <span className="text-gray-400">Unverified</span>}</div>
            </div>
          </div>
          <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
            {l.tags?.map((t) => (
              <li key={t} className="badge">
                {t}
              </li>
            ))}
            {l.services?.map((t) => (
              <li key={t} className="badge">
                {t}
              </li>
            ))}
            {l.payment?.map((t) => (
              <li key={t} className="badge">
                {t}
              </li>
            ))}
            {l.emergency && <li className="badge">Emergency</li>}
            {l.gasSafe && <li className="badge">Gas Safe</li>}
          </ul>
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
                      Book online
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
    <article id={l.slug} className={cx('rounded-xl p-4 border', isFeatured ? 'bg-white shadow-sm border-yellow-200' : 'bg-gray-50')}>
      <div className="flex items-start gap-4">
        <div
          className="h-14 w-20 flex-shrink-0 rounded-md border bg-cover bg-center text-[10px] text-gray-400"
          style={{ backgroundImage: `url(${l.image || '/images/whats-on.png'})` }}
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
              <ul className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-700">
                {l.tags?.map((t) => (
                  <li key={t} className="badge">
                    {t}
                  </li>
                ))}
                {l.emergency && <li className="badge">Emergency</li>}
                {l.gasSafe && <li className="badge">Gas Safe</li>}
              </ul>
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

/* ------------------------------ Sections: UI ------------------------------ */

function FeaturedProviders() {
  const featured = LISTINGS.filter((l) => l.featured)
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured plumbers (quick to contact)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These providers are highlighted for visibility and clearer contact details. Featured placement encourages
        verification (insurance/trade memberships).
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">{featured.map((f) => <FeaturedCard key={f.slug} l={f} />)}</div>
    </section>
  )
}

function AllListings() {
  const others = LISTINGS.filter((l) => !l.featured)
  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">All listings (Saltaire & nearby)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">Pre-book where possible; availability varies during peaks and bad weather.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {others.map((l, i) => (
          <ListingCard key={l.slug} l={l} index={i + 1 + LISTINGS.filter((x) => x.featured).length} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  const cols = ['Provider', 'Emergency', 'Gas Safe (handover)', 'Typical services', 'Payment', 'Contact']
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Estimates and capabilities change — confirm on booking.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[880px]">
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
                    {l.featured ? <div className="text-xs text-amber-700">Featured</div> : null}
                  </td>
                  <td>{l.emergency ? 'Yes' : 'No'}</td>
                  <td>{l.gasSafe ? 'Yes' : '—'}</td>
                  <td>{l.services?.slice(0, 4).join(', ') ?? '—'}</td>
                  <td>{l.payment?.join(', ') ?? '—'}</td>
                  <td>{l.phoneTel ? <a className="underline underline-offset-4" href={l.phoneTel}>Call</a> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Treat as guidance; always follow the professional’s advice on the day.</Small>
      </div>
    </section>
  )
}

function EmergencyChecklist() {
  const steps = [
    'If water is actively leaking and it is safe to do so, isolate your internal stop tap (usually under the kitchen sink or in a utility cupboard). Turn clockwise to close.',
    'If you cannot find or operate the stop tap safely, move valuables away from the leak and contain water with towels/buckets while you wait for help.',
    'Switch off electrics only if water is near sockets or the consumer unit and it is safe to do so. If unsure, wait for a professional.',
    'Avoid using DIY sealants on pressurised pipes — this can worsen the leak.',
    'Call an emergency plumber. Provide postcode, description of the leak, and access instructions.',
  ]
  return (
    <section id="emergency" aria-labelledby="em-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="em-title">Emergency checklist (calm, safe and simple)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">First response</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm text-gray-600">If the leak is external or appears to be a mains issue, contact your water supplier.</p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">What to tell the plumber</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Location of leak and whether water is still flowing</li>
              <li>Stop tap status (can/can’t turn)</li>
              <li>Property access and parking notes</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

function HowToIsolateWater() {
  const basics = [
    'Most internal stop taps are under the kitchen sink, in a utility cupboard, or under-stairs.',
    'Turn clockwise (right) to close; anticlockwise (left) to open.',
    'Do not force a seized valve — wait for a professional.',
    'External stop taps are usually in a covered chamber outside; only use if permitted and safe.',
  ]
  return (
    <section id="how-to" aria-labelledby="how-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="how-title">How to isolate water (safe basics)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Find & turn the stop tap</h3>
            <ul className="mt-2 list-disc pl-5">
              {basics.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">Only take action if safe. If in doubt, wait for a professional.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">After isolation</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>Open a cold tap briefly to confirm flow stops.</li>
              <li>Wipe pooled water; move items clear of damp surfaces.</li>
              <li>Ventilate to help drying; avoid heaters near damp electrics.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function GasSafeNotes() {
  return (
    <section id="gas" aria-labelledby="gas-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="gas-title">Boilers & Gas Safe (important)</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Boiler servicing, gas leaks, flues and combustion checks require a <strong>Gas Safe</strong> registered
            engineer. Many plumbing companies can dispatch a Gas Safe engineer or partner. For water-only issues (leaks,
            taps, toilets), a general plumber is typical.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            <li>Smell gas? Follow official guidance from your gas supplier and ventilate if safe.</li>
            <li>Do not attempt boiler repairs yourself.</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.vintage.src} alt={IMG.vintage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & coverage</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">We keep maps light for speed. When you add an interactive map, load pins from listings.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm exact coverage with your chosen provider.</Small>
    </section>
  )
}

function SignupOwners() {
  const subject = encodeURIComponent('List my plumbing business on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my plumbing business on Saltaire Guide.\n\nBusiness name:\nTrade memberships/insurance:\nPhone:\nEmail:\nWebsite/booking link:\nEmergency service: yes/no\nGas Safe (self/partner): yes/no\nAreas served:\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Plumbing businesses — list your service</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured includes a badge, priority placement and better conversion. Provide proof of
          insurance/memberships for a verification tick.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={mailto} className="btn btn-primary">
            Request listing via email
          </a>
          <Link href="/local-services" className="btn btn-outline">
            All service categories
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------- FAQ ---------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do plumbers in Saltaire offer 24/7 emergency callout?',
    a: 'Some do; availability varies by day and season. Call featured providers first and provide leak details and access notes.',
  },
  {
    q: 'Can a plumber fix my boiler?',
    a: 'Boilers and gas appliances must be serviced by a Gas Safe registered engineer. Many plumbing firms can arrange one; ask when you call.',
  },
  {
    q: 'Where is the stop tap in typical Saltaire terraces?',
    a: 'Often under the kitchen sink or in a utility/under-stairs cupboard. If it is stiff, avoid forcing it and wait for a professional.',
  },
  {
    q: 'Do plumbers take card?',
    a: 'Many do, but not all. Ask on booking; carry a backup payment method.',
  },
  {
    q: 'Should I try to seal a leak myself?',
    a: 'Avoid DIY sealants on pressurised pipes; this can worsen the issue. Isolate water if safe and call a professional.',
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

/* ---------------------------------- CTA ----------------------------------- */

function CTA() {
  return (
    <section aria-label="Plan your visit" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Need trade services beyond plumbing?</h2>
          <p className="mt-2 max-w-prose text-gray-700">Browse our local services hub or jump to popular categories.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/local-services" className="btn btn-primary">
              All local services
            </Link>
            <Link href="/local-services/electricians" className="btn btn-outline">
              Electricians
            </Link>
            <Link href="/local-services/taxis" className="btn btn-ghost">
              Taxis
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.mill.src} alt={IMG.mill.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function StructuredData() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Plumbers serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/plumbers#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const plumberServices = LISTINGS.filter((l) => l.featured).map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: l.name,
    url: `${base}/local-services/plumbers#${l.slug}`,
    areaServed: (l.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    telephone: l.phoneTel,
    image: l.image ? `${base}${l.image}` : undefined,
    paymentAccepted: l.payment?.join(', '),
    hasOfferCatalog: l.priceFrom
      ? {
          '@type': 'OfferCatalog',
          name: 'Indicative call-out',
          itemListElement: [
            { '@type': 'Offer', price: l.priceFrom, priceCurrency: 'GBP', itemOffered: { '@type': 'Service', name: 'Local visit' } },
          ],
        }
      : undefined,
    additionalProperty: [
      ...(l.tags || []).map((t) => ({ '@type': 'PropertyValue', name: 'feature', value: t })),
      { '@type': 'PropertyValue', name: 'emergency', value: String(!!l.emergency) },
      { '@type': 'PropertyValue', name: 'gasSafePartner', value: String(!!l.gasSafe) },
    ],
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Plumbers in Saltaire',
    url: `${base}/local-services/plumbers`,
    description:
      'Local plumbers for leaks, blockages and repairs in Saltaire & Shipley. Featured providers, emergency checklist and Gas Safe notes.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#em-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Plumbers', item: `${base}/local-services/plumbers` },
    ],
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to isolate your water safely before a plumber arrives',
    totalTime: 'PT3M',
    step: [
      { '@type': 'HowToStep', text: 'Locate the internal stop tap (often under the kitchen sink or in a utility cupboard).' },
      { '@type': 'HowToStep', text: 'Turn the valve clockwise to close. Do not force a seized valve.' },
      { '@type': 'HowToStep', text: 'Open a cold tap briefly to confirm flow has stopped.' },
      { '@type': 'HowToStep', text: 'If unsafe or you cannot find the tap, move items away from the leak and wait for a professional.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      {plumberServices.map((t, idx) => (
        <JsonLd key={idx} obj={t} />
      ))}
      <JsonLd obj={howTo} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function PlumbersPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProviders />
      <AllListings />
      <CompareTable />
      <EmergencyChecklist />
      <HowToIsolateWater />
      <GasSafeNotes />
      <MapSection />
      <FAQ />
      <SignupOwners />
      <CTA />
      <StructuredData />
    </>
  )
}
