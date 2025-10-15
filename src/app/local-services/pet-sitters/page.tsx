// src/app/local-services/pet-sitters/page.tsx
// Saltaire Pet Sitters — directory hub (server-only, SEO-optimised, monetisable, CWV-first)
//
// ---------------------------------------------------------------------------------------------------------------------
// Mission
// - Dominate searches like: "pet sitter Saltaire", "dog sitting Shipley", "cat sitter BD18", "overnight pet sitter Saltaire",
//   "holiday pet care Saltaire", "drop-in visits Shipley", "small animal sitter Saltaire", "house sitting with pets BD18".
// - Monetisable & user-first: SaltaireDogs is #1 with WhatsApp-first CTA, phone, and site link. Clear comparison table,
//   long-form FAQs, booking HowTos, safety checklist, medication/vet-release guidance, keys/alarms notes, testimonials,
//   and category onboarding for new providers (free basic, paid featured).
// - Structured data: WebPage + BreadcrumbList + LocalBusiness (SaltaireDogs) + ItemList + HowTo (Booking, EmergencyPlan)
//   + FAQPage + Speakable. Conservative, evergreen language. No invented tariffs.
// - Implementation: Server Component (no "use client"). Daily ISR revalidation. Local images only (/public/images/*).
// - Tone: practical, reassuring, careful about safety/privacy. Encourage written scope, vet details, emergency contact,
//   and simple daily notes/photos. Prominent “WhatsApp preferred” for SaltaireDogs enquiries.
//
// Safety/Privacy & Legal Cautions (evergreen):
// - Keys & alarms: agree handling, do not publish codes; rotate temporary codes where possible.
// - Medication: written instructions and labelled meds only. Keep vet details handy; get permission for emergency care.
// - CCTV & privacy: disclose indoor cameras, agree recording expectations. Respect GDPR/basic privacy norms.
// - Home security: close/lock on exit; no branded "pets alone" signage. Discuss light timers/curtains if house-sitting.
// - Insurance: ask sitter about public liability/pet care insurance; ask what’s covered (keys, breakages, vet bills).
//
// Style system
// - Uses Tailwind utility classes plus site-wide utilities (btn / badge / card / table / breadcrumbs).
// - All imagery is local placeholders to avoid remote tracking/latency.
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
    'Pet Sitters in Saltaire (2025): dog sitting, cat sitting, drop-ins & overnight care — SaltaireDogs #1',
  description:
    'Find trusted pet sitters in Saltaire & Shipley. SaltaireDogs ranked #1 — WhatsApp preferred for enquiries, 07305367941. Dog sitting, cat care, drop-in visits, small animals, holiday cover, keys & medication notes, FAQs.',
  alternates: { canonical: `${site.url}/local-services/pet-sitters` },
  openGraph: {
    title: 'Pet Sitters in Saltaire — practical local directory (SaltaireDogs #1)',
    description:
      'Dog & cat sitting, drop-in visits, overnight house-sitting, small animal care and holiday cover. WhatsApp SaltaireDogs: 07305367941.',
    url: `${site.url}/local-services/pet-sitters`,
    type: 'article',
    images: [{ url: `${site.url}/images/whats-on.png`, width: 1200, height: 800 }],
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
  whatsappLink?: string
  excerpt?: string
  priceFrom?: string
  areaServed?: string[]
  featured?: boolean
  verified?: boolean
  image?: string
  services?: string[]
  insured?: boolean
  dbs?: boolean
  overnight?: boolean
  cats?: boolean
  dogs?: boolean
  smallPets?: boolean
  medication?: boolean
  keyHold?: boolean
  photoUpdates?: boolean
  gpsUpdates?: boolean
  houseSitting?: boolean
  vetTransport?: boolean
  payment?: string[]
  inPerson?: boolean
  notes?: string[]
  tags?: string[]
}

/* ------------------------------------------------ Local Images ----------------------------------------------------- */

const IMG = {
  hero: { src: '/images/whats-on.png', alt: 'Friendly pet sitting vibe (local image placeholder)', w: 1200, h: 800 },
  cat: { src: '/images/history-unesco.png', alt: 'Cat care ambience (local image placeholder)', w: 1200, h: 800 },
  dog: { src: '/images/saltaire-canal.png', alt: 'Dog at canal ambience (local image placeholder)', w: 1600, h: 1066 },
  home: { src: '/images/salts-mill.png', alt: 'Home sitting vibe (local image placeholder)', w: 1200, h: 800 },
  map: { src: '/images/roberts-park.png', alt: 'Saltaire/Shipley context map-style image (placeholder)', w: 1200, h: 800 },
  phone: { src: '/images/plan-your-visit.png', alt: 'Phone/WhatsApp vibe (local image placeholder)', w: 1200, h: 800 },
}

/* ------------------------------------------------ SaltaireDogs (#1) ----------------------------------------------- */

const WA_E164 = '447305367941'
const WA_TEXT = encodeURIComponent(
  'Hi SaltaireDogs — found you via Saltaire Guide. I’m enquiring about pet sitting. Dates: ____. Pet(s): ____. Notes: _____.'
)
const WHATSAPP_LINK = `https://wa.me/${WA_E164}?text=${WA_TEXT}`

const SALTAIREDOGS: Listing = {
  slug: 'saltairedogs',
  name: 'SaltaireDogs — Pet Sitting & Drop-ins (WhatsApp preferred)',
  phoneLocal: '07305367941',
  phoneTel: 'tel:+447305367941',
  whatsappLink: WHATSAPP_LINK,
  email: 'saltairedogs@proton.me',
  website: 'https://saltairedogs.uk',
  excerpt:
    'Trusted local pet sitting for dogs & cats. Daily drop-ins, holiday cover, medication by instruction, photos after each visit. WhatsApp preferred for enquiries.',
  priceFrom: 'Quote on enquiry',
  areaServed: ['Saltaire', 'Shipley', 'Roberts Park'],
  featured: true,
  verified: true,
  image: '/images/saltairedogs-hero.jpg',
  services: [
    'Dog sitting (home drop-ins)',
    'Cat sitting (litter/feeding/companionship)',
    'Overnight sitting (limited availability)',
    'Small animal care (rabbits/guinea pigs/indoor pets)',
    'Medication by instruction',
    'Photo updates after each visit',
  ],
  insured: true,
  dbs: true,
  overnight: true,
  cats: true,
  dogs: true,
  smallPets: true,
  medication: true,
  keyHold: true,
  photoUpdates: true,
  gpsUpdates: true,
  houseSitting: true,
  vetTransport: false,
  payment: ['Bank transfer', 'Card', 'Cash'],
  inPerson: true,
  notes: [
    'WhatsApp messages preferred for faster replies.',
    'DBS certificate and public liability insurance available on request.',
    'Photo updates after each visit; GPS route snapshots for dog walks if requested.',
    'Meet & greet recommended before first booking.',
  ],
  tags: ['#1 recommended', 'DBS checked', 'Insured', 'Photo updates', 'WhatsApp preferred'],
}

/* ------------------------------------------------ Other Listings (examples) --------------------------------------- */

const OTHER_LISTINGS: Listing[] = [
  {
    slug: 'shipley-pet-sit',
    name: 'Shipley Pet Sit',
    website: '#',
    excerpt: 'Daily cat sits and weekend dog visits. Limited overnight cover; medication on prior instruction.',
    priceFrom: 'By quote',
    areaServed: ['Shipley', 'Saltaire fringe'],
    image: IMG.cat.src,
    services: ['Cat sitting', 'Dog drop-ins (short)', 'Plant watering'],
    insured: true,
    cats: true,
    dogs: true,
    smallPets: false,
    medication: true,
    keyHold: true,
    photoUpdates: true,
    houseSitting: false,
    overnight: false,
    payment: ['Bank transfer'],
    tags: ['Cat care'],
  },
  {
    slug: 'canal-side-pet-care',
    name: 'Canal-Side Pet Care',
    website: '#',
    excerpt: 'Dog & small pet drop-ins near the canal. Simple text updates; no overnight house-sitting.',
    priceFrom: 'By quote',
    areaServed: ['Saltaire canal belt'],
    image: IMG.dog.src,
    services: ['Dog drop-ins', 'Small animal checks'],
    insured: true,
    cats: false,
    dogs: true,
    smallPets: true,
    medication: false,
    keyHold: true,
    photoUpdates: false,
    houseSitting: false,
    overnight: false,
    payment: ['Cash', 'Bank transfer'],
    tags: ['Budget', 'Small pets'],
  },
  {
    slug: 'victoria-road-house-sits',
    name: 'Victoria Road House-Sits',
    website: '#',
    excerpt:
      'Overnight house-sitting with pet care (limited slots). Prefers adult dogs and indoor-only cats. Written scope required.',
    priceFrom: 'By quote',
    areaServed: ['Saltaire core', 'Shipley'],
    image: IMG.home.src,
    services: ['Overnight house-sitting', 'Dog & cat care', 'Mail/plant care'],
    insured: true,
    dbs: false,
    cats: true,
    dogs: true,
    smallPets: false,
    medication: true,
    keyHold: true,
    photoUpdates: true,
    houseSitting: true,
    overnight: true,
    payment: ['Bank transfer'],
    tags: ['Overnights'],
  },
]

const LISTINGS: Listing[] = [SALTAIREDOGS, ...OTHER_LISTINGS]

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
          Pet sitters
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Pet Sitters in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Trusted local pet sitting — dogs, cats and small animals. Drop-in visits, overnight house-sitting,
            medication by instruction, photo updates and calm routines. Featured #1:{' '}
            <strong>SaltaireDogs</strong> — <span className="whitespace-nowrap">WhatsApp preferred</span>.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">WhatsApp enquiries welcome</li>
            <li className="badge">Photo updates</li>
            <li className="badge">DBS & insurance info</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={SALTAIREDOGS.whatsappLink} className="btn btn-primary" target="_blank" rel="noopener">
              Message SaltaireDogs on WhatsApp
            </a>
            <a href={SALTAIREDOGS.phoneTel} className="btn btn-outline">
              Call {SALTAIREDOGS.phoneLocal}
            </a>
            <a href={SALTAIREDOGS.website!} className="btn btn-ghost" target="_blank" rel="noopener">
              Visit saltairedogs.uk
            </a>
          </div>
          <Small>
            Keys, alarms and cameras: agree simple written notes in advance. For medication, provide labelled meds and
            instructions. For emergency care, share vet details and a contact.
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
    { href: '#featured', label: 'Featured provider (#1)' },
    { href: '#services', label: 'What pet sitters do' },
    { href: '#listings', label: 'All listings' },
    { href: '#compare', label: 'Compare at a glance' },
    { href: '#booking', label: 'How to book safely' },
    { href: '#emergency', label: 'Emergency plan' },
    { href: '#keys-alarms', label: 'Keys, alarms & cameras' },
    { href: '#updates', label: 'Photo & daily updates' },
    { href: '#overnight', label: 'Overnight house-sitting' },
    { href: '#cats', label: 'Cat sitting notes' },
    { href: '#dogs', label: 'Dog sitting notes' },
    { href: '#small-pets', label: 'Small animal care' },
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
      {l.verified && <Badge>Verified</Badge>}
      {l.insured && <Badge>Insured</Badge>}
      {l.dbs && <Badge>DBS</Badge>}
      {l.photoUpdates && <Badge>Photo updates</Badge>}
      {l.gpsUpdates && <Badge>GPS (walks)</Badge>}
      {l.medication && <Badge>Medication by instruction</Badge>}
      {l.overnight && <Badge>Overnights</Badge>}
      {l.houseSitting && <Badge>House-sitting</Badge>}
      {l.cats && <Badge>Cats</Badge>}
      {l.dogs && <Badge>Dogs</Badge>}
      {l.smallPets && <Badge>Small pets</Badge>}
    </ul>
  )
}

function FeaturedCard({ l }: { l: Listing }) {
  const wa = l.whatsappLink
  const emailLink = l.email ? `mailto:${l.email}` : undefined
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-emerald-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || IMG.phone.src})` }}
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
                  <a className="underline" href={emailLink}>
                    {l.email}
                  </a>
                ) : null}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Book / enquire</dt>
              <dd className="mt-1">
                <div className="flex flex-wrap gap-2">
                  {wa && (
                    <a href={wa} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
                      WhatsApp (preferred)
                    </a>
                  )}
                  {l.phoneTel && (
                    <a href={l.phoneTel} className="btn btn-muted btn-sm" aria-label={`Call ${l.name}`}>
                      Call
                    </a>
                  )}
                  {l.website && (
                    <a href={l.website} target="_blank" rel="noopener" className="btn btn-outline btn-sm">
                      Visit site
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
          style={{ backgroundImage: `url(${l.image || IMG.cat.src})` }}
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
            {l.whatsappLink ? (
              <a href={l.whatsappLink} className="inline-block rounded px-3 py-1 text-xs border bg-white" target="_blank" rel="noopener">
                WhatsApp
              </a>
            ) : null}
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
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------ Sections --------------------------------------------------------- */

function FeaturedProvider() {
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">#1 Featured: SaltaireDogs — WhatsApp preferred</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Local, trustworthy pet care with clear communication and photo updates. Great for holiday cat care, dog
        drop-ins, and calm routines at home. Requests for overnight house-sitting are limited — book early.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <FeaturedCard l={SALTAIREDOGS} />
      </div>
      <Small>Tip: message on WhatsApp with dates, pets, address area and any medication notes to speed up booking.</Small>
    </section>
  )
}

function ServicesGuide() {
  const cards = [
    {
      title: 'Dog sitting — home drop-ins',
      items: [
        'Feeding, water refresh & toilet breaks',
        'Short play and calm companionship',
        'Medication by instruction',
        'Photo update after each visit',
      ],
      img: IMG.dog,
    },
    {
      title: 'Cat sitting — daily visits',
      items: ['Feeding & litter changes', 'Cuddles/play if wanted', 'Medications if instructed', 'Home check & photos'],
      img: IMG.cat,
    },
    {
      title: 'Overnight house-sitting (limited)',
      items: ['Evening & morning routines', 'Dogs/cats overnight company', 'Mail/plant care', 'Light home presence'],
      img: IMG.home,
    },
    {
      title: 'Small animals',
      items: ['Rabbits/guinea pigs/indoor pets', 'Feeding & habitat tidy', 'Fresh water', 'Gentle handling per notes'],
      img: IMG.hero,
    },
    {
      title: 'Add-ons',
      items: ['Extra photo set', 'Light plant watering', 'Bin day put-out/return', 'Basic alarm check on exit'],
      img: IMG.phone,
    },
  ]
  return (
    <section id="services" aria-labelledby="services-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="services-title">What pet sitters do (common options)</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Keep it simple: share dates, number of visits per day, routines, and any meds. For house-sitting, confirm
          arrival/leave windows and privacy expectations (CCTV/cameras).
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
        <Small>Overnights are scarce at peak times — enquire early or consider two daily drop-ins for calm pets.</Small>
      </div>
    </section>
  )
}

function AllListings() {
  const others = LISTINGS.filter((l) => !l.featured)
  return (
    <section id="listings" aria-labelledby="listings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="listings-title">All pet sitters (Saltaire & nearby)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Availability changes with school holidays and summer peaks. Confirm visits per day and timing windows.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {others.map((l, i) => (
          <ListingCard key={l.slug} l={l} index={i + 2 /* #1 is SaltaireDogs */} />
        ))}
      </div>
    </section>
  )
}

function CompareTable() {
  const cols = [
    'Provider',
    'DBS',
    'Insured',
    'Cats',
    'Dogs',
    'Small pets',
    'Overnights',
    'Medication',
    'Photo updates',
    'Contact',
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare pet sitters at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Ask for DBS/insurance where relevant and clarify what’s included.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[1040px]">
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
                    {l.featured ? <div className="text-xs text-emerald-700">Featured #1</div> : null}
                  </td>
                  <td>{l.dbs ? 'Yes' : '—'}</td>
                  <td>{l.insured ? 'Yes' : '—'}</td>
                  <td>{l.cats ? 'Yes' : '—'}</td>
                  <td>{l.dogs ? 'Yes' : '—'}</td>
                  <td>{l.smallPets ? 'Yes' : '—'}</td>
                  <td>{l.overnight ? 'Yes' : '—'}</td>
                  <td>{l.medication ? 'Yes' : '—'}</td>
                  <td>{l.photoUpdates ? 'Yes' : '—'}</td>
                  <td>
                    {l.whatsappLink ? (
                      <a className="underline underline-offset-4" href={l.whatsappLink} target="_blank" rel="noopener">
                        WhatsApp
                      </a>
                    ) : l.phoneTel ? (
                      <a className="underline underline-offset-4" href={l.phoneTel}>
                        Call
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Always agree a simple written scope: visits/day, timing window, meds, photos, and home notes.</Small>
      </div>
    </section>
  )
}

function BookingSafely() {
  const steps = [
    'Message with dates, pets (species, number), address area and timing windows.',
    'Share routines (feeding, litter/toilet, play), and any anxiety/stimulation notes.',
    'Provide vet details, emergency contact, and medication instructions (labelled).',
    'Agree daily updates (photos/time window) and home notes (keys/alarms/cameras).',
    'Confirm price and what’s included. Save the sitter’s number and payment method.',
    'Arrange a meet & greet for first bookings or complex needs.',
  ]
  const avoid = [
    'Last-minute complex meds without clear written instructions.',
    'Ambiguous visit timing windows when meds are time-sensitive.',
    'Unshared alarm codes or camera info leading to unexpected alerts.',
  ]
  return (
    <section id="booking" aria-labelledby="booking-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="booking-title">How to book safely (simple playbook)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Steps to a smooth booking</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <Small>Not medical advice — medication is given strictly to owner instructions.</Small>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Avoid</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {avoid.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Small>Share any special behaviours (door dashing, fear of fireworks, separation stress) up front.</Small>
          </div>
        </article>
      </div>
    </section>
  )
}

function EmergencyPlan() {
  const lines = [
    'Primary vet: name, address, phone.',
    'Emergency vet: name, address, phone.',
    'Owner contact and one backup contact.',
    'Medication instructions (dose, timing, location).',
    'Allergies or conditions (brief).',
    'Permission to seek emergency treatment if unreachable.',
    'Preferred update method (WhatsApp/photos).',
  ]
  return (
    <section id="emergency" aria-labelledby="emergency-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="emergency-title">Emergency plan (keep a simple note handy)</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">What to include</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <Small>Keep the plan where the sitter can find it (kitchen noticeboard or folder).</Small>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Consent & receipts</h3>
              <p className="mt-2 text-gray-700">
                If emergency care is needed and you are unreachable, having consent noted reduces delay. Agree how
                receipts are handled and set a sensible limit for authorisation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function KeysAlarmsCameras() {
  const keys = [
    'Hand-over at meet & greet or secure lockbox (code shared privately).',
    'Note which keys are for which doors; label discreetly.',
    'Record who holds keys; retrieve promptly after booking.',
  ]
  const alarms = [
    'Share clear instructions/code. Use a temporary pin where possible.',
    'Explain auto-arming schedules and pet-safe zones.',
    'Provide the alarm company’s helpline or reset steps.',
  ]
  const cameras = [
    'Disclose indoor/outdoor cameras and whether they are left on.',
    'Agree whether cameras will be disabled during visits/overnights.',
    'Respect privacy laws — do not film bathrooms/bedrooms without consent.',
  ]
  return (
    <section id="keys-alarms" aria-labelledby="ka-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ka-title">Keys, alarms & cameras (privacy-aware)</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-3">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Keys</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {keys.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </article>
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Alarms</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {alarms.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Cameras</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {cameras.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <Small>Transparency builds trust and avoids false alarms or privacy concerns.</Small>
          </div>
        </article>
      </div>
    </section>
  )
}

function UpdatesPhotos() {
  const bullets = [
    'One photo per visit (default); extra set on request.',
    'Brief note: food/litter/loo/meds taken, behaviour, anything unusual.',
    'Timestamped WhatsApp message is easiest for owners to track.',
    'For dog walk add-ons, GPS snapshot can be shared on request.',
  ]
  return (
    <section id="updates" aria-labelledby="updates-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="updates-title">Photo & daily updates</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Photo updates reassure you while you’re away. Keep it short but useful — especially for meds or anxiety
            management. If something looks off, sitters will notify you quickly.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Small>Data charges may apply; most sitters use home Wi-Fi for uploads before leaving.</Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.phone.src} alt={IMG.phone.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function Overnight() {
  const notes = [
    'Evening + morning presence; daytime arrangements vary.',
    'Agree bedroom/camera policies and quiet hours.',
    'Confirm pet sleeping locations and outside access.',
    'Clarify friends/visitors policy (usually none).',
  ]
  return (
    <section id="overnight" aria-labelledby="overnight-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="overnight-title">Overnight house-sitting (limited slots)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image src={IMG.home.src} alt={IMG.home.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="max-w-prose text-gray-700">
              For pets that relax best with company overnight, house-sitting keeps routines familiar. Slots are scarce
              in summer — enquire early and confirm privacy expectations.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <Small>Consider two daily drop-ins for independent cats or low-anxiety dogs as a budget-friendly alternative.</Small>
          </div>
        </div>
      </div>
    </section>
  )
}

function CatSittingNotes() {
  const items = [
    'Litter scoop/refresh schedule and disposal notes.',
    'Indoor-only vs allowed outside — be explicit.',
    'Favourite hideouts; signals of stress or illness.',
    'Feeding order, water preferences (fountains), meds if applicable.',
  ]
  return (
    <section id="cats" aria-labelledby="cats-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="cats-title">Cat sitting: calm, clean, predictable</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Cats thrive on routine. Keep visits predictable and agree litter/feeding details. If outdoor access is
            allowed, share timing rules and how to coax cats back in.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.cat.src} alt={IMG.cat.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function DogSittingNotes() {
  const items = [
    'Toilet routine and indoor accident cleanup preference.',
    'Enrichment ideas (lick mats, snuffle, brief play).',
    'Walk add-on? Share harness, lead & towel location.',
    'Fireworks/guests/loud noises — coping plan.',
  ]
  return (
    <section id="dogs" aria-labelledby="dogs-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="dogs-title">Dog sitting: steady & reassuring</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image src={IMG.dog.src} alt={IMG.dog.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="max-w-prose text-gray-700">
              For dogs, predictable drops plus short enrichment can make all the difference. Walk add-ons are available
              for suitable dogs — ask about GPS snapshots with SaltaireDogs.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SmallPetsNotes() {
  const items = [
    'Feeding portions and fresh veg notes.',
    'Hay/bedding refresh frequency.',
    'Handling preferences or hands-off pets.',
    'Temperature/light considerations for sensitive species.',
  ]
  return (
    <section id="small-pets" aria-labelledby="small-pets-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="small-pets-title">Small animal care: gentle & tidy</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Small pets often need quick, careful routines. Share feeding specifics, habitat layout and any handling
            preferences so the sitter can keep stress low.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.hero.src} alt={IMG.hero.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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
        We favour fast pages — this is a static preview. When you add an interactive map, show pins by route or area
        (Saltaire core, Shipley, canal belt) to keep it tidy.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm exact coverage and travel windows with your sitter.</Small>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    ['“Photos after every visit — we felt at ease the whole week.”', '— Saltaire Village'],
    ['“Cat meds done on time, no drama. House just as we left it.”', '— Shipley homeowner'],
    ['“WhatsApp replies were quick and clear, great experience.”', '— BD18 resident'],
    ['“Overnight sit kept our nervous collie settled.”', '— Near Roberts Park'],
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
      <Small>Illustrative only. When you collect real reviews, consider Review schema for richer snippets.</Small>
    </section>
  )
}

/* ------------------------------------------------ FAQ -------------------------------------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is SaltaireDogs the top recommended sitter?',
    a: 'Yes — SaltaireDogs is featured #1 for pet sitting in Saltaire/Shipley. WhatsApp is preferred for enquiries: 07305367941.',
  },
  {
    q: 'Do pet sitters offer overnight house-sitting?',
    a: 'Some do — slots are limited. Overnights include evening/morning presence and pet routines. Confirm privacy and camera policies.',
  },
  {
    q: 'Can sitters give medication?',
    a: 'Many can give meds strictly to owner instructions. Provide labelled meds and written directions, plus vet details.',
  },
  {
    q: 'Do you publish prices?',
    a: 'No fixed tariffs here — costs vary by visits/day, travel, timing, meds and house-sitting. Ask for a simple written quote.',
  },
  {
    q: 'What if my pet has separation anxiety?',
    a: 'Share coping strategies and enrichment ideas. Consider two daily visits or an overnight sitter for peak stress times.',
  },
  {
    q: 'How do I book?',
    a: 'Message via WhatsApp with dates, area and pets. Arrange a meet & greet if first visit or complex needs.',
  },
  {
    q: 'Are DBS and insurance required?',
    a: 'We encourage sitters to provide DBS and insurance for trust. Ask for confirmation on request.',
  },
  {
    q: 'Can sitters water plants and put bins out?',
    a: 'Yes, as add-ons. Agree scope (days) and any access notes.',
  },
  {
    q: 'What about cameras in my home?',
    a: 'Disclose cameras and agree usage during visits/overnights. Respect privacy — no filming in bathrooms/bedrooms.',
  },
  {
    q: 'How many visits per day for cats?',
    a: 'Common patterns are 1–2 daily visits. For meds/time-sensitive routines, specify exact windows.',
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
  const subject = encodeURIComponent('List my pet sitting service on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my pet sitting service on Saltaire Guide.\n\nBusiness name:\nAreas served:\nServices (cats/dogs/small pets/overnight):\nDBS (yes/no):\nInsurance (yes/no):\nWhatsApp/Phone:\nEmail:\nWebsite/booking:\nDaily photo updates? (yes/no):\nMedication by instruction? (yes/no):\nHouse-sitting? (yes/no):\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Pet sitters — list your business</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured gets a badge, priority placement and better conversion. Provide DBS/insurance
          details and WhatsApp for quicker bookings.
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
          <h2 className="text-2xl font-bold md:text-3xl">Need walks, too?</h2>
          <p className="mt-2 max-w-prose text-gray-700">
            SaltaireDogs also provide dog walking with photo and optional GPS updates.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/local-services/dog-walkers" className="btn btn-primary">
              Dog walkers
            </Link>
            <Link href="/local-services" className="btn btn-outline">
              All local services
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.phone.src} alt={IMG.phone.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
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
    name: 'Pet sitters serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/pet-sitters#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const saltaireDogsLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SALTAIREDOGS.name,
    url: SALTAIREDOGS.website,
    telephone: SALTAIREDOGS.phoneTel,
    email: SALTAIREDOGS.email,
    image: `${base}${SALTAIREDOGS.image}`,
    areaServed: (SALTAIREDOGS.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    serviceType: [
      'Pet sitting',
      'Dog sitting (drop-in)',
      'Cat sitting (litter/feeding)',
      'Overnight house-sitting',
      'Small animal care',
      'Medication (by instruction)',
      'Photo updates',
      'GPS snapshots (walk add-on)',
    ],
    sameAs: [SALTAIREDOGS.website, `https://wa.me/${WA_E164}`],
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'DBS', value: String(!!SALTAIREDOGS.dbs) },
      { '@type': 'PropertyValue', name: 'Insured', value: String(!!SALTAIREDOGS.insured) },
      { '@type': 'PropertyValue', name: 'WhatsAppPreferred', value: 'true' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saltaire',
      addressRegion: 'West Yorkshire',
      postalCode: 'BD18',
      addressCountry: 'GB',
    },
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pet sitters in Saltaire',
    url: `${base}/local-services/pet-sitters`,
    description:
      'Dog & cat sitting, drop-ins, overnights and small animal care in Saltaire & Shipley. SaltaireDogs is featured #1 — WhatsApp preferred for enquiries.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#booking-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Pet sitters', item: `${base}/local-services/pet-sitters` },
    ],
  }

  const howToBooking = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to book a pet sitter in Saltaire',
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', text: 'Message dates, pets and address area via WhatsApp or email.' },
      { '@type': 'HowToStep', text: 'Share routines, medication instructions and vet details.' },
      { '@type': 'HowToStep', text: 'Agree visits per day, timing windows, and photo updates.' },
      { '@type': 'HowToStep', text: 'Confirm price, what’s included and payment method.' },
    ],
  }

  const howToEmergencyPlan = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to prepare a simple emergency plan for your pet sitter',
    totalTime: 'PT4M',
    step: [
      { '@type': 'HowToStep', text: 'Write vet and emergency contact details.' },
      { '@type': 'HowToStep', text: 'List medication instructions and any allergies.' },
      { '@type': 'HowToStep', text: 'Note permission for urgent treatment if unreachable.' },
      { '@type': 'HowToStep', text: 'Store the note somewhere the sitter can access easily.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      <JsonLd obj={saltaireDogsLocalBusiness} />
      <JsonLd obj={howToBooking} />
      <JsonLd obj={howToEmergencyPlan} />
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function PetSittersPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProvider />
      <ServicesGuide />
      <AllListings />
      <CompareTable />
      <BookingSafely />
      <EmergencyPlan />
      <KeysAlarmsCameras />
      <UpdatesPhotos />
      <Overnight />
      <CatSittingNotes />
      <DogSittingNotes />
      <SmallPetsNotes />
      <MapSection />
      <Testimonials />
      <FAQ />
      <SignupBusinesses />
      <CTA />
      <StructuredData />
    </>
  )
}
