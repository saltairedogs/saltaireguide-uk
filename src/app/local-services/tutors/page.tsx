// src/app/local-services/tutors/page.tsx
// Saltaire Tutors — private tuition directory (server-only, CWV-first, SEO-optimised, monetisable)
//
// ---------------------------------------------------------------------------------------------------------------------
// Goals
// - Be #1 for searches like: "tutor Saltaire", "maths tutor BD18", "English GCSE tutor Saltaire", "11+ tutor Shipley",
//   "A-level physics tutor near me", "SEN tutor Saltaire", "online tutor BD18", "piano teacher Saltaire", "ESOL tutor Shipley".
// - Deliver monetisable UX: featured providers, instant call/email CTAs, comparison table, subject/topic deep links,
//   onboarding for new tutors (List your business), and evidence-led trust signals (DBS, safeguarding, references).
// - Provide helpful content without risky specifics: no exam leaks or copyrighted material; promote exam-board alignment,
//   study skills, safe hiring, and realistic pricing notes (no made-up tariffs).
// - Solid SEO: WebPage + BreadcrumbList + ItemList + LocalBusiness/Service (featured) + HowTo (safe hiring) + FAQPage + Speakable.
// - Local-first imagery: all from /public/images/* — no remote image dependencies.
// - Server Component (no "use client") for static-first performance; daily revalidation.
//
// Safety & Editorial Constraints
// - Do NOT share exam content or "insider" materials. Encourage using official specifications and past papers from boards.
// - Safeguarding-first: tutors should have DBS (or PVG elsewhere), references, and a clear safeguarding policy.
// - Parents/guardians should be present for minors when appropriate; avoid unsupervised in-home sessions without checks.
// - Pricing/availability are variable; avoid exact tariffs. Encourage transparent quotes, written policies, and receipts.
// - Accessibility & inclusion: highlight SEN/ALN experience when claimed by the tutor; avoid medical advice.
//
// Utilities & Styling
// - Tailwind utilities + your house utilities (btn, badge, card, card-hover, card-muted, table, breadcrumbs).
// - Images: reuse site images to keep everything local (hero, map, park, canal, mill, etc.).
// - Keep copy evergreen; no fragile claims like "cheapest" or "guaranteed grade increase".
//
// File Layout
// 1) Metadata
// 2) Types & data
// 3) Local images constants
// 4) Utility helpers
// 5) Layout components (Breadcrumbs, Hero, OnThisPage)
// 6) Sections:
//    - Featured providers
//    - Subjects index & filters (static server UI)
//    - All listings
//    - Compare table
//    - Hiring HowTo (safe)
//    - Exam board micro-guides (AQA/Edexcel/OCR/WJEC) – short, evergreen pointers
//    - Study skills & revision patterns
//    - SEN support notes (non-medical, inclusive, practical)
//    - Online vs in-person guide
//    - Pricing & policies (no fixed tariffs)
//    - Calendar pointers (non-interactive, server-only placeholder)
//    - Map & coverage
//    - Testimonials (illustrative)
//    - FAQ (long-tail)
//    - Tutor signup (monetisation)
//    - CTA to other categories
// 7) JSON-LD (WebPage, BreadcrumbList, ItemList, LocalBusiness for featured, HowTo(HireSafely), Speakable)
// 8) Page export
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
    'Tutors in Saltaire (2025): Maths, English, Science, 11+, GCSE, A-level — trusted private tuition & study skills',
  description:
    'Find trusted Saltaire tutors for Maths, English, Science, Languages, Music, 11+, GCSE & A-level. Featured providers with DBS & safeguarding notes, study skills, exam-board guides, FAQs.',
  alternates: { canonical: `${site.url}/local-services/tutors` },
  openGraph: {
    title: 'Tutors in Saltaire — private tuition directory',
    description:
      'Local tutors for primary to A-level, 11+, SEN-aware support, online & in-person. Safe hiring HowTo, comparison table, exam board pointers and study skill tips.',
    url: `${site.url}/local-services/tutors`,
    type: 'article',
    images: [{ url: `${site.url}/images/salts-mill.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------------------------ Types & Data ----------------------------------------------------- */

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
  subjects?: string[]
  stages?: string[] // Primary/KS2, KS3, GCSE, A-level, Adult
  examBoards?: string[] // AQA, Edexcel, OCR, WJEC
  online?: boolean
  inPerson?: boolean
  group?: boolean
  oneToOne?: boolean
  senAware?: boolean
  enhancedDBS?: boolean
  safeguardingPolicy?: boolean
  referencesAvailable?: boolean
  languages?: string[]
  payment?: string[] // Card, Bank transfer, Cash
  notes?: string[]
  tags?: string[]
}

/* ------------------------------------------------ Local Images ----------------------------------------------------- */

const IMG = {
  hero: { src: '/images/salts-mill.png', alt: 'Salts Mill and Saltaire rooftops — local tutoring guide', w: 1200, h: 800 },
  map: { src: '/images/saltaire-canal.png', alt: 'Map context visual for Saltaire area', w: 1600, h: 1066 },
  study: { src: '/images/plan-your-visit.png', alt: 'Study skills vibe — calm desk scene placeholder', w: 1200, h: 800 },
  park: { src: '/images/roberts-park.png', alt: 'Roberts Park — local environment', w: 1200, h: 800 },
  hall: { src: '/images/whats-on.png', alt: 'Community hall ambience — group tuition vibe', w: 1200, h: 800 },
  heritage: { src: '/images/history-unesco.png', alt: 'Heritage texture — thoughtful academic aesthetic', w: 1200, h: 800 },
}

/* ------------------------------------------------ Canonical Subjects ---------------------------------------------- */

const SUBJECTS = [
  'Maths',
  'English',
  'Physics',
  'Chemistry',
  'Biology',
  'Combined Science',
  '11+ / Entrance prep',
  'Primary (KS1/KS2)',
  'KS3 (Y7–Y9)',
  'GCSE (Y10–Y11)',
  'A-level (Y12–Y13)',
  'SEN-aware support',
  'ESOL / EAL',
  'French',
  'Spanish',
  'German',
  'Italian',
  'Mandarin (beginner)',
  'History',
  'Geography',
  'Religious Studies',
  'Computer Science',
  'Programming (Python)',
  'Business Studies',
  'Economics',
  'Music (Piano / Theory)',
  'Art & Design feedback',
  'Study Skills / Revision',
]

/* ------------------------------------------------ Demo Listings ---------------------------------------------------- */

const LISTINGS: Listing[] = [
  {
    slug: 'saltaire-tutors',
    name: 'Saltaire Tutors (DBS • Study Skills • 11+ to A-level)',
    phoneLocal: '01274 000510',
    phoneTel: 'tel:+441274000510',
    email: 'hello@saltaire-tutors.example',
    website: '#',
    bookingUrl: '#',
    excerpt:
      'Friendly, DBS-checked local tutors. Maths/English/Science plus 11+, GCSE and A-level. Study skills coaching and exam-board alignment.',
    priceFrom: 'Enquire for tailored quote',
    areaServed: ['Saltaire', 'Shipley', 'Baildon'],
    featured: true,
    verified: false,
    image: IMG.study.src,
    subjects: ['Maths', 'English', 'Physics', 'Chemistry', 'Biology', '11+ / Entrance prep'],
    stages: ['Primary (KS1/KS2)', 'KS3 (Y7–Y9)', 'GCSE (Y10–Y11)', 'A-level (Y12–Y13)'],
    examBoards: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
    online: true,
    inPerson: true,
    group: true,
    oneToOne: true,
    senAware: true,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: true,
    languages: ['English'],
    payment: ['Card', 'Bank transfer', 'Contactless'],
    notes: ['Learning plan agreed at start', 'Progress feedback for parents/carers', 'Receipts for records'],
    tags: ['Featured', 'DBS', '11+ to A-level', 'Study skills'],
  },
  {
    slug: 'shipley-maths-specialist',
    name: 'Shipley Maths Specialist (GCSE/A-level)',
    phoneLocal: '01274 000520',
    phoneTel: 'tel:+441274000520',
    website: '#',
    excerpt:
      'Focused maths tuition from KS3 to A-level. Calm explanations, exam technique practice, homework strategies.',
    priceFrom: 'By quote',
    areaServed: ['Shipley', 'Saltaire'],
    featured: true,
    verified: false,
    image: IMG.heritage.src,
    subjects: ['Maths', 'Further Maths (intro)'],
    stages: ['KS3 (Y7–Y9)', 'GCSE (Y10–Y11)', 'A-level (Y12–Y13)'],
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    online: true,
    inPerson: true,
    group: false,
    oneToOne: true,
    senAware: true,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: true,
    languages: ['English'],
    payment: ['Bank transfer', 'Card'],
    notes: ['Diagnostic first session optional', 'Exam board past paper cycles'],
    tags: ['Featured', 'Maths focus'],
  },
  {
    slug: 'canal-english',
    name: 'Canal English & ESOL',
    website: '#',
    excerpt: 'English language support, GCSE English Language & Literature, ESOL for adults.',
    priceFrom: 'By quote',
    areaServed: ['Saltaire', 'Shipley', 'Frizinghall'],
    image: IMG.hall.src,
    subjects: ['English', 'ESOL / EAL'],
    stages: ['KS3 (Y7–Y9)', 'GCSE (Y10–Y11)', 'Adult'],
    examBoards: ['AQA', 'Edexcel'],
    online: true,
    inPerson: true,
    group: true,
    oneToOne: true,
    senAware: false,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: false,
    languages: ['English'],
    payment: ['Card', 'Bank transfer'],
    tags: ['English', 'ESOL'],
  },
  {
    slug: 'park-science',
    name: 'Park Science (Physics • Chemistry • Biology)',
    website: '#',
    excerpt: 'Science specialists for GCSE combined and separate sciences; physics at A-level.',
    priceFrom: 'By quote',
    areaServed: ['Saltaire', 'Shipley'],
    image: IMG.park.src,
    subjects: ['Physics', 'Chemistry', 'Biology', 'Combined Science'],
    stages: ['KS3 (Y7–Y9)', 'GCSE (Y10–Y11)', 'A-level (Y12–Y13)'],
    examBoards: ['AQA', 'Edexcel', 'OCR'],
    online: true,
    inPerson: false,
    group: false,
    oneToOne: true,
    senAware: true,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: true,
    languages: ['English'],
    payment: ['Card', 'Bank transfer'],
    tags: ['Science', 'Physics'],
  },
  {
    slug: 'aire-language-lab',
    name: 'Aire Language Lab (French • Spanish • German)',
    website: '#',
    excerpt: 'KS3–GCSE languages with emphasis on confident speaking and exam-style tasks.',
    priceFrom: 'By quote',
    areaServed: ['Shipley', 'Saltaire', 'Baildon'],
    image: IMG.map.src,
    subjects: ['French', 'Spanish', 'German'],
    stages: ['KS3 (Y7–Y9)', 'GCSE (Y10–Y11)'],
    examBoards: ['AQA', 'Edexcel'],
    online: true,
    inPerson: true,
    group: true,
    oneToOne: true,
    senAware: false,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: true,
    languages: ['English', 'French', 'Spanish', 'German'],
    payment: ['Card', 'Bank transfer'],
    tags: ['Languages', 'Speaking practice'],
  },
  {
    slug: 'valley-music-piano',
    name: 'Valley Music — Piano & Theory',
    website: '#',
    excerpt: 'Beginner to intermediate piano, graded theory support, and practice planning.',
    priceFrom: 'By quote',
    areaServed: ['Saltaire', 'Shipley'],
    image: IMG.study.src,
    subjects: ['Music (Piano / Theory)'],
    stages: ['Primary (KS1/KS2)', 'KS3 (Y7–Y9)', 'Adult'],
    examBoards: [],
    online: true,
    inPerson: true,
    group: false,
    oneToOne: true,
    senAware: true,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: true,
    languages: ['English'],
    payment: ['Card', 'Bank transfer', 'Cash'],
    tags: ['Music', 'Piano'],
  },
  {
    slug: 'bd18-compsci',
    name: 'BD18 Computing & Python',
    website: '#',
    excerpt: 'GCSE Computer Science coaching, Python fundamentals, and project walkthroughs.',
    priceFrom: 'By quote',
    areaServed: ['BD18'],
    image: IMG.heritage.src,
    subjects: ['Computer Science', 'Programming (Python)'],
    stages: ['KS3 (Y7–Y9)', 'GCSE (Y10–Y11)'],
    examBoards: ['AQA', 'OCR'],
    online: true,
    inPerson: false,
    group: true,
    oneToOne: true,
    senAware: false,
    enhancedDBS: true,
    safeguardingPolicy: true,
    referencesAvailable: true,
    languages: ['English'],
    payment: ['Bank transfer'],
    tags: ['Computing', 'Python'],
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
          Tutors
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Tutors in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Maths, English, Sciences, Languages, Music, 11+, GCSE and A-level. We highlight DBS-checked tutors, safe
            hiring steps, study skills, and exam-board alignment — without publishing fragile prices.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">DBS & safeguarding</li>
            <li className="badge">Study skills</li>
            <li className="badge">Online & in-person</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#featured" className="btn btn-primary">
              Featured tutors
            </Link>
            <Link href="#subjects" className="btn btn-outline">
              Browse subjects
            </Link>
            <Link href="#faq" className="btn btn-ghost">
              Long FAQ
            </Link>
          </div>
          <Small>
            Parents/carers: for minors, ensure a responsible adult is present as appropriate and agree safeguarding &
            communication policies before sessions begin.
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
    { href: '#subjects', label: 'Subjects index' },
    { href: '#listings', label: 'All listings' },
    { href: '#compare', label: 'Compare at a glance' },
    { href: '#hire-safely', label: 'Hire a tutor safely' },
    { href: '#exam-boards', label: 'Exam board pointers' },
    { href: '#study-skills', label: 'Study skills & revision' },
    { href: '#sen-support', label: 'SEN-aware support' },
    { href: '#online-vs-inperson', label: 'Online vs in-person' },
    { href: '#pricing', label: 'Pricing & policies' },
    { href: '#calendar', label: 'Planning calendar' },
    { href: '#map', label: 'Map & coverage' },
    { href: '#testimonials', label: 'Local testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#signup', label: 'Tutors: list your service' },
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
      {l.enhancedDBS && <Badge>DBS</Badge>}
      {l.safeguardingPolicy && <Badge>Safeguarding policy</Badge>}
      {l.referencesAvailable && <Badge>References</Badge>}
      {l.senAware && <Badge>SEN-aware</Badge>}
      {l.online && <Badge>Online</Badge>}
      {l.inPerson && <Badge>In-person</Badge>}
      {l.group && <Badge>Small group</Badge>}
      {l.oneToOne && <Badge>1-to-1</Badge>}
    </ul>
  )
}

function FeaturedCard({ l }: { l: Listing }) {
  return (
    <article id={l.slug} className="group overflow-hidden rounded-2xl border-2 border-sky-200 bg-white shadow-sm">
      <div className="p-5 md:flex md:gap-6">
        <div className="md:w-48 md:flex-shrink-0">
          <div
            className="h-32 w-full overflow-hidden rounded-lg border bg-cover bg-center text-xs text-gray-400 md:h-36"
            style={{ backgroundImage: `url(${l.image || IMG.study.src})` }}
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
                <span className="font-medium">Subjects:</span> {displayList(l.subjects)} <span className="mx-2">•</span>{' '}
                <span className="font-medium">Stages:</span> {displayList(l.stages)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">From</div>
              <div className="text-lg font-bold">{l.priceFrom ?? 'On request'}</div>
              <div className="mt-1 text-xs">{l.verified ? <span className="text-green-700">Verified</span> : <span className="text-gray-400">Unverified</span>}</div>
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
    <article id={l.slug} className={cx('rounded-xl p-4 border', isFeatured ? 'bg-white shadow-sm border-sky-200' : 'bg-gray-50')}>
      <div className="flex items-start gap-4">
        <div
          className="h-14 w-20 flex-shrink-0 rounded-md border bg-cover bg-center text-[10px] text-gray-400"
          style={{ backgroundImage: `url(${l.image || IMG.study.src})` }}
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
                <span className="font-medium">Subjects:</span> {displayList(l.subjects)} <span className="mx-2">•</span>{' '}
                <span className="font-medium">Stages:</span> {displayList(l.stages)}
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
      <SectionHeading id="featured-title">Featured tutors (easy to contact)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We prioritise providers with clear safeguarding notes, DBS status and transparent communication. Ask for a
        written plan and receipts — and verify exam board focus (AQA/Edexcel/OCR/WJEC) for exam years.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6">{featured.map((f) => <FeaturedCard key={f.slug} l={f} />)}</div>
      <Small>For learners under 18, ensure a responsible adult is present as appropriate and agree communication rules.</Small>
    </section>
  )
}

function SubjectsIndex() {
  const groups = [
    {
      title: 'Core',
      items: ['Maths', 'English', 'Combined Science', 'Physics', 'Chemistry', 'Biology'],
    },
    {
      title: 'Languages',
      items: ['French', 'Spanish', 'German', 'Italian', 'ESOL / EAL'],
    },
    {
      title: 'Humanities & Social',
      items: ['History', 'Geography', 'Religious Studies', 'Business Studies', 'Economics'],
    },
    {
      title: 'Creative & Tech',
      items: ['Computer Science', 'Programming (Python)', 'Music (Piano / Theory)', 'Art & Design feedback'],
    },
    {
      title: 'Levels',
      items: ['Primary (KS1/KS2)', 'KS3 (Y7–Y9)', 'GCSE (Y10–Y11)', 'A-level (Y12–Y13)', '11+ / Entrance prep', 'Adult'],
    },
  ]
  return (
    <section id="subjects" aria-labelledby="subjects-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="subjects-title">Subjects index (quick browse)</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          This page is server-rendered for speed. Client-side filtering can be added later. Use the quick links below to
          scan popular topics and then compare providers.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <article key={g.title} className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <Small>Tip: ask tutors which exam board materials they prefer and how they track progress.</Small>
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
      <p className="mt-2 max-w-prose text-gray-700">Availability changes around exam season — contact early for the best slots.</p>
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
    'DBS',
    'Safeguarding',
    'References',
    'SEN-aware',
    'Online',
    'In-person',
    'Group',
    '1-to-1',
    'Exam boards',
    'Subjects',
    'Payment',
    'Contact',
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="compare-title">Compare at a glance</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">Credentials and policies vary — always confirm before booking.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table min-w-[1160px]">
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
                    {l.featured ? <div className="text-xs text-sky-700">Featured</div> : null}
                  </td>
                  <td>{l.enhancedDBS ? 'Yes' : '—'}</td>
                  <td>{l.safeguardingPolicy ? 'Yes' : '—'}</td>
                  <td>{l.referencesAvailable ? 'Yes' : '—'}</td>
                  <td>{l.senAware ? 'Yes' : '—'}</td>
                  <td>{l.online ? 'Yes' : '—'}</td>
                  <td>{l.inPerson ? 'Yes' : '—'}</td>
                  <td>{l.group ? 'Yes' : '—'}</td>
                  <td>{l.oneToOne ? 'Yes' : '—'}</td>
                  <td>{displayList(l.examBoards)}</td>
                  <td>{(l.subjects || []).slice(0, 3).join(', ') || '—'}</td>
                  <td>{l.payment?.join(', ') ?? '—'}</td>
                  <td>{l.phoneTel ? <a className="underline underline-offset-4" href={l.phoneTel}>Call</a> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Small>Ask for a simple service agreement: schedule, fees, cancellation, safeguarding, feedback format.</Small>
      </div>
    </section>
  )
}

function HireSafely() {
  const steps = [
    'State your goal (e.g., confidence, grade boundary, 11+ readiness) and timeframe.',
    'Ask for DBS status, references, and a clear safeguarding statement. For minors, agree adult presence/venue.',
    'Confirm exam board (AQA/Edexcel/OCR/WJEC) and typical resources (specification, past papers, mark schemes).',
    'Agree the cadence: weekly, fortnightly, or intensive blocks; decide on homework and feedback routine.',
    'Discuss fees, what’s included, cancellations, and how payments/receipts work.',
    'Start with a calm diagnostic to identify topics; build a simple plan and review each month.',
  ]
  const pitfalls = [
    'Avoid claims of guaranteed grades or special insider content.',
    'Beware of vague pricing; request a written outline before the first lesson.',
    'Don’t rely only on generic worksheets — align to the learner’s exam board/spec and needs.',
  ]
  return (
    <section id="hire-safely" aria-labelledby="hire-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="hire-title">Hire a tutor safely (no exam leaks, just good practice)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Practical steps</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <Small>For minors, ensure a responsible adult can see or be nearby throughout, according to your policy.</Small>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Avoid pitfalls</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {pitfalls.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <div className="mt-6 relative overflow-hidden rounded-2xl border">
        <Image src={IMG.study.src} alt={IMG.study.alt} width={IMG.study.w} height={IMG.study.h} className="object-cover" />
      </div>
    </section>
  )
}

function ExamBoards() {
  const boards = [
    {
      name: 'AQA',
      notes: [
        'Use the current specification index to build topic maps.',
        'Cycle past papers with mark schemes for technique.',
        'Look for examiner commentary to calibrate answers.',
      ],
    },
    {
      name: 'Edexcel',
      notes: [
        'Watch wording differences vs AQA (especially Maths methods and Science command words).',
        'Practice timed short sections; debrief quickly against scheme.',
        'Use formula sheets/reference materials where allowed.',
      ],
    },
    {
      name: 'OCR',
      notes: [
        'Check practical/required skills emphasis for Sciences.',
        'Mix topic-tagged questions to target weak areas.',
        'Schedule checkpoint mocks with realistic conditions.',
      ],
    },
    {
      name: 'WJEC',
      notes: [
        'Confirm availability of past papers & exemplars for your year.',
        'Focus on command words and structured responses.',
        'Build confidence with targeted, spaced practice.',
      ],
    },
  ]
  return (
    <section id="exam-boards" aria-labelledby="boards-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="boards-title">Exam board pointers (evergreen)</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Tutors should align to the live specification for your board. Past papers and mark schemes are essential, but
          so are calm explanations, retrieval practice and time-managed tasks.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {boards.map((b) => (
            <article key={b.name} className="card">
              <div className="card-body">
                <h3 className="text-lg font-semibold">{b.name}</h3>
                <ul className="mt-2 list-disc pl-5 text-gray-700">
                  {b.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StudySkills() {
  const pillars = [
    {
      title: 'Spaced practice',
      text: 'Short, regular sessions beat last-minute cramming. Rotate topics and include quick retrieval checks.',
    },
    {
      title: 'Active recall',
      text: 'Close the book and teach it back, or quiz with prompt cards. Mark with model answers afterwards.',
    },
    {
      title: 'Worked examples',
      text: 'See one, try one, explain one. Talk through steps aloud and write down the reasoning.',
    },
    {
      title: 'Time on task',
      text: 'Use a light timer (e.g., 20–25 minutes) then a short break. Track what gets finished, not just time spent.',
    },
  ]
  const planning = [
    '2–3 short sessions per week per exam subject outside school time in the run-up.',
    'Mix core topics, weaker areas and one confidence boost item.',
    'Keep a one-page log of misconceptions and their fixes.',
  ]
  return (
    <section id="study-skills" aria-labelledby="skills-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="skills-title">Study skills & revision patterns</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Four pillars</h3>
            <div className="mt-2 grid grid-cols-1 gap-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-lg border p-3">
                  <div className="text-sm font-medium">{p.title}</div>
                  <div className="text-sm text-gray-700">{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Planning a week</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {planning.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <Small>Protect sleep and nutrition; short walks in Roberts Park help reset between sessions.</Small>
          </div>
        </article>
      </div>
    </section>
  )
}

function SenSupport() {
  const notes = [
    'Ask tutors about experience with ADHD/ASC, processing differences or anxiety-aware approaches.',
    'Agree clear routines: advance agendas, chunking tasks, visual timers, and planned movement breaks.',
    'Provide a predictable environment with minimal surprises; summarise next steps in writing.',
  ]
  return (
    <section id="sen-support" aria-labelledby="sen-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="sen-title">SEN-aware notes (inclusive & practical)</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div>
          <p className="max-w-prose text-gray-700">
            Tutoring is not medical advice; however, many tutors use inclusive practices that reduce friction and help
            focus. Ask what has worked with similar learners and adapt together.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
            {notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <Small>Parents/carers know the learner best — share what helps or hinders to get the most from sessions.</Small>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.park.src} alt={IMG.park.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  )
}

function OnlineVsInPerson() {
  const prosOnline = [
    'No travel time; consistent scheduling.',
    'Screenshare for past papers and live annotation.',
    'Recorded whiteboards or notes for review (where agreed).',
  ]
  const prosInPerson = ['Body-language cues are easier', 'Hands-on subjects (e.g., instruments) fit better', 'Fewer tech hurdles']
  return (
    <section id="online-vs-inperson" aria-labelledby="ovi-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="ovi-title">Online vs in-person — pick what fits</SectionHeading>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Online strengths</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {prosOnline.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Small>Agree recording and privacy rules in advance; store notes responsibly.</Small>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">In-person strengths</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {prosInPerson.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Small>Pick public/communal spaces when appropriate; avoid distractions.</Small>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function PricingPolicies() {
  const bullets = [
    'Most tutors quote per hour; some offer 45/60/90-minute slots.',
    'Ask what prep/marking is included. Some tutors provide feedback notes after each session.',
    'Cancellation windows vary. A simple one-pager avoids confusion.',
    'Block bookings may come with modest discounts — always get receipts.',
  ]
  return (
    <section id="pricing" aria-labelledby="pr-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="pr-title">Pricing & simple policies</SectionHeading>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
        <ul className="list-disc pl-5">
          {bullets.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <Small>We don’t publish tariffs here — they change. Request a clear quote and keep documentation.</Small>
      </div>
    </section>
  )
}

function CalendarPlanning() {
  const pointers = [
    'Work backwards from key dates (mocks, coursework hand-in, exam windows).',
    'Plan lighter weeks around trips or busy school periods.',
    'Keep one flexible slot for catch-up or rest — consistency beats intensity.',
  ]
  return (
    <section id="calendar" aria-labelledby="cal-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="cal-title">Planning calendar (placeholder)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        For best performance this page is static; replace the card below with a client-side planner later if needed.
      </p>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
        <ul className="list-disc pl-5">
          {pointers.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <Small>Short weekly check-ins keep plans alive; don’t wait for problems to pile up.</Small>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & coverage</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">We keep mapping lightweight here. When you add pins, source them from listing data.</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image src={IMG.map.src} alt={IMG.map.alt} width={IMG.map.w} height={IMG.map.h} className="object-cover" />
      </div>
      <Small>Illustrative only — confirm exact locations and travel with your tutor.</Small>
    </section>
  )
}

function Testimonials() {
  const quotes = [
    ['“My son found the A-level maths explanations reassuring and clear — big confidence boost.”', '— Parent, Saltaire'],
    ['“Science past papers finally clicked after a few timed drills with calm feedback.”', '— GCSE student, Shipley'],
    ['“The ESOL sessions focused on speaking confidence for work — really practical.”', '— Adult learner, BD18'],
    ['“Piano teacher set tiny weekly goals; practice became easier to stick to.”', '— Learner, Saltaire'],
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
      <Small>Illustrative examples. When you gather real reviews, consider Review schema to enrich snippets.</Small>
    </section>
  )
}

/* ------------------------------------------------ FAQ -------------------------------------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Do Saltaire tutors have DBS checks?',
    a: 'Many do; look for DBS/DBS Update Service and ask for confirmation. We surface DBS and safeguarding notes where provided.',
  },
  {
    q: 'Online or in-person — which is better?',
    a: 'Both work. Online helps consistency and sharing resources; in-person can help for instruments or practical coaching. Choose what the learner engages with best.',
  },
  {
    q: 'Which exam boards do tutors cover?',
    a: 'Common boards include AQA, Edexcel, OCR and WJEC. Confirm your board and year to align resources.',
  },
  {
    q: 'What about 11+ preparation?',
    a: 'Look for providers who focus on reasoning, vocabulary growth and calm test-taking habits — not “insider” materials. Balance practice with rest.',
  },
  {
    q: 'Do you publish prices?',
    a: 'No; fees change. Ask for a written quote that includes session length, prep/marking, and cancellation policy.',
  },
  {
    q: 'Can tutors guarantee grades?',
    a: 'No one can guarantee exam outcomes. A good tutor focuses on steady progress, skills and exam technique.',
  },
  {
    q: 'How early should we book before exams?',
    a: 'Ideally 2–3 months for GCSE/A-level regular sessions; intensive short blocks can help near mocks, but consistency wins.',
  },
  {
    q: 'Do tutors provide homework?',
    a: 'Many do. Agree a sensible amount and how it’s reviewed. Quality practice beats volume.',
  },
  {
    q: 'What about SEN support?',
    a: 'Ask about experience and preferred strategies (chunking, visuals, movement breaks). Keep communication simple and predictable.',
  },
  {
    q: 'How do we track progress?',
    a: 'Use quick topic checklists, retrieval quizzes, and occasional timed tasks. Ask for a monthly summary.',
  },
  // Long-tail
  { q: 'Do tutors help with coursework?', a: 'They can coach understanding and planning but must not do the work for you — follow your school’s academic honesty policy.' },
  { q: 'Are group sessions cheaper?', a: 'Sometimes. Small groups can reduce cost and boost motivation, but 1-to-1 targets needs more precisely.' },
  { q: 'Do tutors accept card?', a: 'Many do (or bank transfer). We show payment types where provided.' },
  { q: 'What’s the ideal session length?', a: '60 minutes is common; younger learners may suit 45 minutes. Focus and fit matter more than length alone.' },
  { q: 'Can adults get tutoring?', a: 'Yes — for ESOL, workplace skills, or personal goals. Set practical objectives and check availability.' },
  { q: 'Are first sessions free?', a: 'Varies. Some offer a short diagnostic or reduced-rate taster. Confirm ahead of time.' },
  { q: 'How do cancellations work?', a: 'Policies differ. Ask for a written window (e.g., 24–48 hours) and how to reschedule.' },
  { q: 'Do tutors liaise with schools?', a: 'Some do with permission. Agree what to share and respect privacy policies.' },
  { q: 'Is travel included?', a: 'For in-person sessions, some add a travel component. Confirm what’s included in your quote.' },
  { q: 'How do we choose a subject focus?', a: 'Start with the exam spec and recent work. A simple diagnostic highlights where time pays off quickest.' },
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

function SignupTutors() {
  const subject = encodeURIComponent('List my tutoring service on Saltaire Guide')
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to list my tutoring service on Saltaire Guide.\n\nBusiness/Name:\nSubjects:\nStages (Primary/KS3/GCSE/A-level/Adult):\nExam boards (AQA/Edexcel/OCR/WJEC):\nOnline / In-person / Both:\nDBS (yes/no):\nSafeguarding policy (yes/no):\nSEN-aware experience (yes/no):\nLanguages:\nAreas served:\nPhone:\nEmail:\nWebsite/booking:\nShort description:\nFeatured listing trial? (yes/no)\n\nThanks!`
  )
  const mailto = `mailto:hello@saltaireguide.uk?subject=${subject}&body=${body}`
  return (
    <section id="signup" aria-labelledby="signup-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="signup-title">Tutors — list your service</SectionHeading>
        <p className="mt-2 max-w-prose text-gray-700">
          Basic listing is free. Featured adds a badge, priority placement and better conversion. Provide DBS and your
          safeguarding statement for verification.
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
          <p className="mt-2 max-w-prose text-gray-700">Browse our local services hub or jump to popular categories.</p>
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
    name: 'Tutors serving Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: LISTINGS.length,
    itemListElement: LISTINGS.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: l.name,
      url: `${base}/local-services/tutors#${l.slug}`,
      description: l.excerpt,
    })),
  }

  const featuredThings = LISTINGS.filter((l) => l.featured).map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: l.name,
    url: `${base}/local-services/tutors#${l.slug}`,
    areaServed: (l.areaServed || ['Saltaire']).map((a) => ({ '@type': 'Place', name: a })),
    telephone: l.phoneTel,
    image: l.image ? `${base}${l.image}` : undefined,
    paymentAccepted: l.payment?.join(', '),
    serviceType: 'Private tutoring',
    additionalProperty: [
      ...(l.subjects || []).map((s) => ({ '@type': 'PropertyValue', name: 'subject', value: s })),
      ...(l.stages || []).map((s) => ({ '@type': 'PropertyValue', name: 'stage', value: s })),
      ...(l.examBoards || []).map((s) => ({ '@type': 'PropertyValue', name: 'examBoard', value: s })),
      { '@type': 'PropertyValue', name: 'online', value: String(!!l.online) },
      { '@type': 'PropertyValue', name: 'inPerson', value: String(!!l.inPerson) },
      { '@type': 'PropertyValue', name: 'senAware', value: String(!!l.senAware) },
      { '@type': 'PropertyValue', name: 'enhancedDBS', value: String(!!l.enhancedDBS) },
    ],
  }))

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tutors in Saltaire',
    url: `${base}/local-services/tutors`,
    description:
      'Local tutors for Maths, English, Sciences, Languages, Music, 11+, GCSE and A-level. Safe hiring steps, exam-board pointers, study skills and FAQs.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#featured-title', '#hire-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Tutors', item: `${base}/local-services/tutors` },
    ],
  }

  const howToHireSafely = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to hire a tutor safely',
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', text: 'Define goals and timeframe; decide online or in-person.' },
      { '@type': 'HowToStep', text: 'Request DBS status, references and a safeguarding statement.' },
      { '@type': 'HowToStep', text: 'Confirm exam board and resources (specification, past papers, mark schemes).' },
      { '@type': 'HowToStep', text: 'Agree schedule, fees, cancellation window and feedback routine in writing.' },
      { '@type': 'HowToStep', text: 'Begin with a calm diagnostic and review progress monthly.' },
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
      <JsonLd obj={howToHireSafely} />
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function TutorsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <FeaturedProviders />
      <SubjectsIndex />
      <AllListings />
      <CompareTable />
      <HireSafely />
      <ExamBoards />
      <StudySkills />
      <SenSupport />
      <OnlineVsInPerson />
      <PricingPolicies />
      <CalendarPlanning />
      <MapSection />
      <Testimonials />
      <FAQ />
      <SignupTutors />
      <CTA />
      <StructuredData />
    </>
  )
}
