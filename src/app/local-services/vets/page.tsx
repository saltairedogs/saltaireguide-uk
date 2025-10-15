// src/app/local-services/vets/page.tsx
// Saltaire Vets & Pet Healthcare — impartial local guide (server-only, SEO-optimised, monetisable-ready, CWV-first)
//
// ---------------------------------------------------------------------------------------------------------------------
// Purpose
// - Be the most useful page for searches like:
//   "vets Saltaire", "Shipley vets", "emergency vet near me BD18", "cat vaccinations Saltaire",
//   "puppy vaccinations Shipley", "rabbit vets near Saltaire", "out-of-hours vet Bradford", "travel certificate vet".
// - Provide a careful, impartial guide that helps owners choose and use veterinary care responsibly.
// - Include some real nearby businesses by name (without asserting volatile details like prices/hours). Encourage readers
//   to verify live information on the vet’s own site. Link to the RCVS directory as an authoritative resource.
// - Keep language evergreen and cautious. No medical diagnosis or price claims. Always advise readers to phone their
//   registered practice first and follow professional advice. We do not guarantee any provider.
//
// Implementation
// - Server Component (no "use client"). Daily ISR revalidation. Local images only (/public/images/*) for fast CWV.
// - Design mirrors our local-services system: hero, on-page TOC, editorial guide sections, real clinic cards (verify),
//   decision helpers (emergency flow), vaccination/travel notes, payment/insurance basics, exotics/small pets, FAQs,
//   long structured data: WebPage + BreadcrumbList + ItemList (clinics) + FAQPage + multiple HowTo + Speakable.
// - Monetisation-ready: “featured clinic” slot (opt-in, clearly labelled as sponsored), generic contact CTA for clinics.
//
// Editorial cautions (evergreen)
// - Urgent or life-threatening situations: phone your registered vet (or the provider they name for out-of-hours)
//   before travelling; if directed, go immediately. Do not self-diagnose from web pages.
// - This guide is not medical advice. It summarises common processes and owner checklists used locally.
// - Names of real clinics are included to help orientation; ownership, hours and policies can change.
//   Verify on the official website or via the RCVS “Find a Vet” directory.
// ---------------------------------------------------------------------------------------------------------------------

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* ------------------------------------------------ Metadata --------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    'Vets in Saltaire & Shipley (2025): how to choose a vet, emergencies, vaccinations & nearby clinics (verify details)',
  description:
    'Practical local guide to veterinary care around Saltaire & Shipley: how to register, what to do in emergencies, vaccination & travel notes, insurance tips, exotics, and nearby clinics to consider (verify details via the RCVS directory).',
  alternates: { canonical: `${site.url}/local-services/vets` },
  openGraph: {
    title: 'Vets in Saltaire — impartial local guide (with nearby clinics to verify)',
    description:
      'Emergency steps, registration, questions to ask, vaccination/travel notes, insurance basics, exotics care, end-of-life support, and a shortlist of nearby clinics (verify details).',
    url: `${site.url}/local-services/vets`,
    type: 'article',
    images: [{ url: `${site.url}/images/plan-your-visit.png`, width: 1200, height: 800 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ------------------------------------------------ Types ------------------------------------------------------------ */

type VetListing = {
  slug: string
  name: string
  website?: string
  satnav?: string
  areaServed?: string[]
  excerpt?: string
  verifiedNote?: string
  outOfHours?: 'own' | 'partner' | 'check'
  species?: Array<'dog' | 'cat' | 'rabbit' | 'small-mammal' | 'bird' | 'reptile' | 'other'>
  services?: string[]
  parkingNote?: string
  accessibilityNote?: string
  featured?: boolean
  image?: string
  tags?: string[]
}

/* ------------------------------------------------ Local Images ----------------------------------------------------- */

const IMG = {
  hero: { src: '/images/plan-your-visit.png', alt: 'Calm veterinary care illustration (local image placeholder)', w: 1200, h: 800 },
  consult: { src: '/images/whats-on.png', alt: 'Consultation ambience (local image placeholder)', w: 1200, h: 800 },
  emergency: { src: '/images/salts-mill.png', alt: 'Urgent decision helper visual (local image placeholder)', w: 1200, h: 800 },
  travel: { src: '/images/history-unesco.png', alt: 'Travel planning vibe (local image placeholder)', w: 1200, h: 800 },
  map: { src: '/images/roberts-park.png', alt: 'Area map-style image (local placeholder)', w: 1600, h: 1066 },
  pets: { src: '/images/saltaire-canal.png', alt: 'Happy pet vibe (local image placeholder)', w: 1600, h: 1066 },
}

/* ------------------------------------------------ Data: nearby (include real names with verify notes) -------------- */
/**
 * We include some well-known clinic names in the broader Saltaire/Shipley/Bingley/Bradford belt purely to help owners
 * orient their search. We DO NOT assert prices/hours/phones here. Names, ownership and policies can change; always
 * check the clinic’s official website and the RCVS “Find a Vet” directory (https://findavet.rcvs.org.uk/).
 *
 * Entries with website pointing to the brand homepage are intentional when exact local page URLs may change.
 */

const NEARBY_CLINICS: VetListing[] = [
  {
    slug: 'vets4pets-bingley',
    name: 'Vets4Pets (Bingley)',
    website: 'https://www.vets4pets.com',
    satnav: 'Bingley (BD16) — verify exact address',
    areaServed: ['Bingley', 'Saltaire nearby'],
    excerpt: 'National brand practice. Routine care, vaccinations, surgery; check branch page for hours and OOH policy.',
    verifiedNote: 'Verify branch page for live info. Policies vary by branch.',
    outOfHours: 'partner',
    species: ['dog', 'cat', 'rabbit', 'small-mammal'],
    services: ['Consultations', 'Vaccinations', 'Neutering', 'Diagnostics', 'Surgery (varies)'],
    parkingNote: 'Retail-park style locations sometimes have free parking — read on-site signs.',
    accessibilityNote: 'Most branches wheelchair accessible; confirm ramp/door width in advance.',
    featured: false,
    image: IMG.consult.src,
    tags: ['Chain', 'Verify OOH'],
  },
  {
    slug: 'bingley-veterinary-centre',
    name: 'Bingley Veterinary Centre',
    website: '#',
    satnav: 'Bingley (BD16) — verify exact address',
    areaServed: ['Bingley', 'Saltaire corridor'],
    excerpt:
      'Independent presence historically noted in Bingley area. Check official site for current team, hours and services.',
    verifiedNote: 'Please verify current ownership and out-of-hours arrangements.',
    outOfHours: 'check',
    species: ['dog', 'cat', 'rabbit', 'small-mammal'],
    services: ['Consultations', 'Vaccinations', 'Dentistry (varies)', 'Surgery (varies)'],
    parkingNote: 'Street or local car parks — follow signage.',
    accessibilityNote: 'Ask about step-free access and any narrow thresholds.',
    featured: false,
    image: IMG.pets.src,
    tags: ['Independent', 'Verify details'],
  },
  {
    slug: 'vets-now-leeds',
    name: 'Vets Now (Leeds) — Out-of-hours network (regional)',
    website: 'https://www.vets-now.com',
    satnav: 'Leeds — verify nearest site before travelling',
    areaServed: ['Leeds', 'West Yorkshire'],
    excerpt:
      'Regional out-of-hours provider used by many day practices. ALWAYS call first — they’ll direct you to the right site.',
    verifiedNote: 'Confirm your registered vet’s OOH partner before travelling.',
    outOfHours: 'own',
    species: ['dog', 'cat', 'rabbit', 'small-mammal'],
    services: ['Emergency triage', 'Urgent care', 'Stabilisation', 'Referral onward if needed'],
    parkingNote: 'Emergency sites vary; follow staff instructions on arrival.',
    accessibilityNote: 'OOH sites prioritise access; call ahead about ramps/doors.',
    featured: false,
    image: IMG.emergency.src,
    tags: ['Emergency', 'Call first'],
  },
  {
    slug: 'rcvs-find-a-vet',
    name: 'RCVS “Find a Vet” (official directory)',
    website: 'https://findavet.rcvs.org.uk/',
    satnav: 'Online — UK-wide directory by the Royal College of Veterinary Surgeons',
    areaServed: ['All UK'],
    excerpt:
      'Official RCVS directory — search by postcode to find registered veterinary practices and confirm their details.',
    verifiedNote: 'Most authoritative starting point for checking clinics and OOH arrangements.',
    outOfHours: 'check',
    species: ['dog', 'cat', 'rabbit', 'small-mammal', 'bird', 'reptile', 'other'],
    services: ['Directory search', 'Practice details', 'Professional registers'],
    parkingNote: '—',
    accessibilityNote: '—',
    featured: false,
    image: IMG.map.src,
    tags: ['Authoritative', 'Directory'],
  },
  {
    slug: 'vets4pets-bradford-idle',
    name: 'Vets4Pets (Bradford/Idle) — verify branch',
    website: 'https://www.vets4pets.com',
    satnav: 'Idle/Bradford — verify exact store/retail location',
    areaServed: ['Idle', 'Bradford', 'Shipley fringe'],
    excerpt:
      'Brand branch often serving the Bradford/Idle corridor. Check the exact branch page for directions, parking and OOH.',
    verifiedNote: 'Branch pages change — recheck before setting off.',
    outOfHours: 'partner',
    species: ['dog', 'cat', 'rabbit', 'small-mammal'],
    services: ['Consultations', 'Vaccinations', 'Routine surgery (varies)'],
    parkingNote: 'Usually retail-park style; obey time limits on signage.',
    accessibilityNote: 'Typically step-free; confirm on the branch page.',
    featured: false,
    image: IMG.consult.src,
    tags: ['Chain', 'Verify OOH'],
  },
  {
    slug: 'aireworth-vets-keighley',
    name: 'Aireworth Vets (Keighley) — verify current details',
    website: '#',
    satnav: 'Keighley (BD20) — verify exact address',
    areaServed: ['Keighley', 'Airedale corridor'],
    excerpt:
      'Keighley/Airedale practice often referenced by pet owners. Check official site for phone, hours and OOH links.',
    verifiedNote: 'Confirm travel time and parking before you go.',
    outOfHours: 'check',
    species: ['dog', 'cat', 'rabbit', 'small-mammal'],
    services: ['Consultations', 'Vaccinations', 'Surgery (varies)'],
    parkingNote: 'Follow on-site signs or nearby public car parks.',
    accessibilityNote: 'Call to confirm ramps and door widths.',
    featured: false,
    image: IMG.pets.src,
    tags: ['Independent?', 'Verify details'],
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
          Vets
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Vets in Saltaire & Shipley</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            An impartial, practical guide to veterinary care around Saltaire. What to do in an emergency, how to choose
            and register, routine care (vaccinations, neutering), travel documents, insurance, exotics and more — plus a
            shortlist of nearby clinics to verify. Always phone your registered vet first.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Emergency steps (call first)</li>
            <li className="badge">Vaccinations & travel</li>
            <li className="badge">RCVS directory</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#emergency" className="btn btn-primary">
              Emergency steps
            </a>
            <a href="#clinics" className="btn btn-outline">
              Nearby clinics (verify)
            </a>
            <a href="#faq" className="btn btn-ghost">
              FAQ
            </a>
          </div>
          <Small>
            This page is information only — not medical advice. Details change; verify on the clinic’s website or the
            RCVS directory.
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
    { href: '#emergency', label: 'Emergency: what to do' },
    { href: '#register', label: 'Registering with a vet' },
    { href: '#choose', label: 'How to choose a clinic' },
    { href: '#vaccinations', label: 'Vaccinations & routine care' },
    { href: '#travel', label: 'Travel certificates & advice' },
    { href: '#insurance', label: 'Insurance & payments' },
    { href: '#exotics', label: 'Exotics/small pets' },
    { href: '#endoflife', label: 'End-of-life support' },
    { href: '#clinics', label: 'Nearby clinics (verify)' },
    { href: '#map', label: 'Map & orientation' },
    { href: '#sponsored', label: 'Sponsored/featured slot' },
    { href: '#faq', label: 'FAQs' },
    { href: '#glossary', label: 'Glossary' },
    { href: '#ownership', label: 'Ownership changes: why verify' },
    { href: '#safety', label: 'Safety notes' },
    { href: '#cta', label: 'Next steps' },
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

/* ------------------------------------------------ Sections: Editorial --------------------------------------------- */

function EmergencySection() {
  const steps = [
    'Call your registered practice immediately; if closed, their voicemail or website will name their out-of-hours partner.',
    'Explain symptoms, species, size and any known conditions or medications.',
    'Follow the vet’s direction — you may be asked to come in at once or monitor briefly.',
    'If travelling, secure your pet safely (carrier/crate/harness), bring any meds, and avoid feeding unless told to.',
  ]
  const bring = [
    'Your contact details and your pet’s details (name, age, species/breed, weight if known).',
    'Medication list and timing of last dose.',
    'Any insurance documents or policy numbers.',
    'A towel/blanket and a carrier suited to your pet’s size.',
  ]
  const avoid = [
    'Do not give human medications unless explicitly instructed by a vet.',
    'Avoid long car waits on hot/cold days — ring the practice as you arrive.',
    'Don’t delay by phoning multiple clinics — your registered vet (or their OOH) is the fastest route.',
  ]
  return (
    <section id="emergency" aria-labelledby="emergency-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="emergency-title">Emergency: what to do right now</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Priority steps (call first)</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <Small>Not medical advice; your veterinary team will direct you based on the situation.</Small>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Bring if you can</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {bring.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h4 className="mt-4 font-semibold">Avoid</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {avoid.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image
            src={IMG.emergency.src}
            alt={IMG.emergency.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-gray-800">
          <strong>Important:</strong> out-of-hours care is normally provided by your practice or their named partner
          (often a dedicated emergency network). Check your practice’s voicemail or website for the correct number.
          <div className="mt-3">
            <a
              href="https://findavet.rcvs.org.uk/"
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              Find a practice via the RCVS “Find a Vet” directory
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  )
}

function RegisteringSection() {
  const qs = [
    'Do you accept new clients in my area/postcode?',
    'What are your standard consultation hours and do you run nurse clinics?',
    'How are out-of-hours emergencies handled (in-house or partner)?',
    'Which species do you see routinely (dog/cat/rabbit/small furries/birds/reptiles)?',
    'Is your building step-free and do you have parking nearby?',
    'What are your payment terms (payment at time, direct claims, deposits for surgery)?',
  ]
  return (
    <section id="register" aria-labelledby="register-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="register-title">Registering with a vet (simple checklist)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div>
            <p className="max-w-prose text-gray-700">
              Register before you need urgent help — it saves time. Most clinics have short online forms. If you have a
              new pet, ask about vaccination or health checks at registration.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>ID for the owner and contact details (email/phone).</li>
              <li>Pet details (species, sex, age, microchip, previous vet if applicable).</li>
              <li>Any ongoing meds or conditions; bring previous records where possible.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h3 className="text-lg font-semibold">Questions to ask</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {qs.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <Small>Use the answers to compare access, species coverage and out-of-hours setup.</Small>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChoosingSection() {
  const factors = [
    'Distance and transport options (parking, public transport, step-free access).',
    'Out-of-hours arrangements and travel time to the OOH site.',
    'Species experience and available equipment (imaging, dental, in-house lab).',
    'Team continuity and communication style (phone, email, app).',
    'Payment terms, insurance claims handling and deposit policies.',
    'Owner reviews and word-of-mouth from trusted local sources.',
  ]
  return (
    <section id="choose" aria-labelledby="choose-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="choose-title">How to choose a clinic (owner-centred factors)</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Compare these factors</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {factors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Small>There’s no single “best” clinic — pick the one that fits your pet and your situation.</Small>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Access & parking</h3>
            <p className="mt-2 text-gray-700">
              If you need predictable parking, check the clinic’s page and local signage. Our{' '}
              <Link href="/parking" className="underline underline-offset-4">
                Saltaire parking hub
              </Link>{' '}
              has general guidance on nearby car parks.
            </p>
            <Small>Disabled parking and ramp access vary — call ahead for step-free details.</Small>
          </div>
        </article>
      </div>
    </section>
  )
}

function VaccinationsSection() {
  const dogs = ['Core: distemper, adenovirus, parvovirus (schedule varies).', 'Leptospirosis (risk-based).', 'Kennel cough for boarding/daycare (often required).']
  const cats = ['Cat flu (herpes/calici).', 'Panleukopenia (feline parvovirus).', 'FeLV for outdoor/at-risk cats.']
  const rabbits = ['Myxomatosis.', 'Rabbit viral haemorrhagic disease (RHD1/2).']
  return (
    <section id="vaccinations" aria-labelledby="vaccinations-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="vaccinations-title">Vaccinations & routine care (speak to your vet)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Dog (indicative)</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {dogs.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Cat (indicative)</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {cats.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Rabbit (indicative)</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {rabbits.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Check-ups & dental</h3>
          <p className="mt-2 text-gray-700">
            Many clinics offer nurse clinics for weight checks, dental advice and senior pet health checks. These are
            great touchpoints to spot issues early.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
          <Image src={IMG.consult.src} alt={IMG.consult.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
      <Small>Exact schedules and products vary — your vet will tailor to your pet’s risks and lifestyle.</Small>
    </section>
  )
}

function TravelSection() {
  const bullets = [
    'Post-Brexit travel rules are different to pre-2021 PET Passport. Most GB pets now need an Animal Health Certificate (AHC) for EU travel.',
    'AHCs are time-limited and require a vet appointment and valid microchip + rabies vaccination.',
    'Rules for non-EU travel vary by country; plan well in advance with your vet.',
  ]
  return (
    <section id="travel" aria-labelledby="travel-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="travel-title">Travel certificates & pet passports (plan ahead)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div>
            <p className="max-w-prose text-gray-700">
              If you’re planning travel with your pet, contact your clinic well in advance. Appointment availability and
              vaccine timings matter — especially for rabies. Expect paperwork checks at the border.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Small>Always verify destination country rules and carrier requirements.</Small>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image
              src={IMG.travel.src}
              alt={IMG.travel.alt}
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

function InsurancePaymentsSection() {
  const doList = [
    'Read your policy schedule (excess, co-pay, caps, waiting periods).',
    'Ask your clinic whether they support direct claims or owner pays then claims.',
    'Keep invoices and receipts; some insurers need itemised bills.',
    'Tell your insurer early if a big procedure is likely (pre-authorisation where applicable).',
  ]
  const dontList = [
    'Don’t assume all conditions are covered (pre-existing issues often excluded).',
    'Don’t delay payment if your clinic requires payment at time of treatment.',
    'Don’t cancel insurance while a condition is ongoing without checking consequences.',
  ]
  return (
    <section id="insurance" aria-labelledby="insurance-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="insurance-title">Insurance & payments (practical basics)</SectionHeading>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Do</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {doList.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Avoid</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {dontList.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <Small>Clinics typically require payment at the time of treatment unless a direct claim is agreed.</Small>
          </div>
        </article>
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
        <strong>Tip:</strong> bring your insurer name, policy number and claims email. Ask reception about their claim
        process and whether they can provide itemised invoices after each visit.
      </div>
    </section>
  )
}

function ExoticsSection() {
  const species = [
    { label: 'Small mammals', notes: 'Rabbits, guinea pigs, hamsters — ask about dental and anaesthesia experience.' },
    { label: 'Birds', notes: 'Parrots, budgies — check for avian experience and suitable imaging.' },
    { label: 'Reptiles', notes: 'Bearded dragons, snakes — heating/husbandry advice often key; specialist vets preferred.' },
  ]
  const tips = [
    'Phone ahead to confirm species experience and whether referral is needed.',
    'Transport in appropriate carriers with stable temperature and minimal stress.',
    'Bring recent husbandry details (diet, enclosure temps, UV lighting).',
  ]
  return (
    <section id="exotics" aria-labelledby="exotics-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="exotics-title">Exotics & small pets (check experience first)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Species notes</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {species.map((s) => (
              <li key={s.label}>
                <span className="font-medium">{s.label}:</span> {s.notes}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold">Call-ahead checklist</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Small>For rare species, your day practice may refer you to a dedicated exotics service.</Small>
        </div>
      </div>
    </section>
  )
}

function EndOfLifeSection() {
  const bullets = [
    'Discuss quality-of-life, pain management and palliative options with your vet.',
    'Ask about home vs clinic euthanasia (availability varies).',
    'Talk through aftercare choices (cremation options vary by provider).',
    'Consider memory keepsakes (paw prints, fur clippings) if that’s important to you.',
  ]
  return (
    <section id="endoflife" aria-labelledby="endoflife-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="endoflife-title">End-of-life support (gentle planning)</SectionHeading>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div>
            <p className="max-w-prose text-gray-700">
              These conversations are hard. Your veterinary team can guide you through care options tailored to your pet
              and family. Take your time, ask questions and bring a friend if helpful.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image
              src={IMG.pets.src}
              alt="Comforting scene with pet — local placeholder"
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

/* ------------------------------------------------ Sections: Clinics & Map ----------------------------------------- */

function ClinicCard({ c }: { c: VetListing }) {
  return (
    <article id={c.slug} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {c.name}{' '}
              {c.featured ? <span className="ml-2 badge">Sponsored</span> : null}
            </h3>
            <p className="mt-1 text-sm text-gray-700">{c.excerpt}</p>
            {c.verifiedNote ? <p className="mt-1 text-xs text-gray-500">{c.verifiedNote}</p> : null}
          </div>
          <div className="relative h-20 w-28 overflow-hidden rounded border bg-gray-50">
            <Image src={c.image || IMG.consult.src} alt={`${c.name} preview`} fill className="object-cover" />
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs text-gray-500">Area served</dt>
            <dd className="mt-1 text-gray-800">{displayAreas(c.areaServed)}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">Species</dt>
            <dd className="mt-1 text-gray-800">{displayList(c.species)}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">Services</dt>
            <dd className="mt-1 text-gray-800">{displayList(c.services)}</dd>
          </div>
        </dl>

        <dl className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs text-gray-500">Out-of-hours</dt>
            <dd className="mt-1 text-gray-800">
              {c.outOfHours === 'own' ? 'Runs own emergency service' : c.outOfHours === 'partner' ? 'Uses partner service' : 'Check clinic page'}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">Parking</dt>
            <dd className="mt-1 text-gray-800">{c.parkingNote || 'Varies — check signs'}</dd>
          </div>
          <div>
            <dt className="text-xs text-gray-500">Accessibility</dt>
            <dd className="mt-1 text-gray-800">{c.accessibilityNote || 'Call to confirm step-free access'}</dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-3">
          {c.website ? (
            <a href={c.website} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
              Visit website
            </a>
          ) : null}
          {c.satnav ? (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.name}, ${c.satnav}`)}`}
              target="_blank"
              rel="noopener"
              className="btn btn-outline btn-sm"
            >
              Open in Maps
            </a>
          ) : null}
          <a href="#emergency" className="btn btn-ghost btn-sm">Emergency steps</a>
        </div>

        {c.tags && c.tags.length ? (
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
            {c.tags.map((t) => (
              <li key={t} className="badge">{t}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

function ClinicsSection() {
  return (
    <section id="clinics" aria-labelledby="clinics-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="clinics-title">Nearby clinics to verify (orientation shortlist)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Names below help you orient local searches. We don’t assert opening hours or prices. Always verify details on the
        clinic’s own website or the{' '}
        <a href="https://findavet.rcvs.org.uk/" target="_blank" rel="noopener" className="underline underline-offset-4">
          RCVS directory
        </a>
        .
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {NEARBY_CLINICS.map((c) => (
          <ClinicCard c={c} key={c.slug} />
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
        <table className="min-w-[900px] table text-sm">
          <thead>
            <tr>
              <th className="w-[24%]">Clinic</th>
              <th>Area</th>
              <th>Species</th>
              <th>Out-of-hours</th>
              <th>Services (summary)</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            {NEARBY_CLINICS.map((c) => (
              <tr key={`row-${c.slug}`}>
                <td className="font-medium">
                  {c.website ? (
                    <a href={c.website} target="_blank" rel="noopener" className="underline underline-offset-4">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </td>
                <td>{displayAreas(c.areaServed)}</td>
                <td>{displayList(c.species)}</td>
                <td>{c.outOfHours === 'own' ? 'Own' : c.outOfHours === 'partner' ? 'Partner' : 'Check'}</td>
                <td>{displayList(c.services)}</td>
                <td>
                  {c.satnav ? (
                    <a
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noopener"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${c.name}, ${c.satnav}`)}`}
                    >
                      Open →
                    </a>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Small>Inclusion here does not imply endorsement. Treat as a starting list to verify.</Small>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Map & orientation</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        For speed we show a static preview. Use the links above to open your chosen clinic directly in your map app.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src={IMG.map.src}
          alt={IMG.map.alt}
          width={IMG.map.w}
          height={IMG.map.h}
          className="object-cover"
        />
      </div>
      <Small>Illustrative only — always follow live directions and clinic instructions.</Small>
    </section>
  )
}

/* ------------------------------------------------ Monetisation: Sponsored Slot ------------------------------------ */

function SponsoredSlot() {
  // This is a neutral, clearly-labelled “featured clinic” area. Only use if a clinic opts in.
  const sponsored: VetListing | null = null
  return (
    <section id="sponsored" aria-labelledby="sponsored-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="sponsored-title">Featured clinic (sponsored, optional)</SectionHeading>
        {!sponsored ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-700">
            We occasionally feature a local clinic here with clear “Sponsored” labelling. Placement includes a profile
            card, verification prompts and a link to the clinic’s site. To enquire, email{' '}
            <a href="mailto:hello@saltaireguide.uk" className="underline underline-offset-4">
              hello@saltaireguide.uk
            </a>
            . Inclusion is opt-in and does not affect editorial content.
          </div>
        ) : (
          <ClinicCard c={{ ...(sponsored as VetListing), featured: true }} />
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------ Additional Editorial -------------------------------------------- */

function OwnershipChanges() {
  const notes = [
    'Clinic ownership and branding can change; websites and phone numbers may be updated.',
    'Out-of-hours partners can switch; always check the recorded message on your clinic’s phone.',
    'Service availability (e.g., dentistry, imaging) can expand or temporarily reduce due to staffing.',
  ]
  return (
    <section id="ownership" aria-labelledby="ownership-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ownership-title">Why “verify first” matters (ownership & policy changes)</SectionHeading>
      <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
        {notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <Small>We keep content evergreen by avoiding volatile details and pointing to the RCVS directory.</Small>
    </section>
  )
}

function SafetyNotes() {
  const bullets = [
    'Never delay urgent care while comparing prices online.',
    'Secure pets properly in vehicles; use carriers or seat-belt harnesses as appropriate.',
    'If you suspect poisoning, call a vet immediately; bring packaging if safe to do so.',
  ]
  return (
    <section id="safety" aria-labelledby="safety-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="safety-title">Safety notes</SectionHeading>
      <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </section>
  )
}

function Glossary() {
  const terms = [
    { k: 'OOH', v: 'Out-of-hours (emergency care provided when the clinic is closed).' },
    { k: 'AHC', v: 'Animal Health Certificate (travel document for pets travelling from GB to the EU).' },
    { k: 'FeLV', v: 'Feline leukaemia virus — a vaccination considered for at-risk cats.' },
    { k: 'Direct claim', v: 'Insurer pays clinic directly (availability varies); owner may still pay excess.' },
  ]
  return (
    <section id="glossary" aria-labelledby="glossary-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="glossary-title">Glossary (quick refs)</SectionHeading>
      <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {terms.map((t) => (
          <div key={t.k} className="rounded-2xl border border-gray-200 bg-white p-5">
            <dt className="font-semibold">{t.k}</dt>
            <dd className="mt-1 text-sm text-gray-700">{t.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* ------------------------------------------------ FAQ -------------------------------------------------------------- */

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Who should I call first in an emergency?',
    a: 'Call your registered practice. If they are closed, their voicemail or website will name their out-of-hours partner. Follow their direction before travelling.',
  },
  {
    q: 'Can I just turn up without calling?',
    a: 'Phoning first helps the team prepare and may direct you to the correct site more quickly. In genuine life-threatening emergencies, follow professional advice immediately.',
  },
  {
    q: 'How do I register with a vet in Saltaire?',
    a: 'Most clinics have an online form. Have your details and your pet’s details ready (species, age, microchip, previous vet). Ask about out-of-hours arrangements.',
  },
  {
    q: 'What vaccinations are typical for dogs and cats?',
    a: 'Schedules vary. Dogs: core (DHP), leptospirosis depending on risk. Cats: core (flu + panleukopenia), FeLV for at-risk cats. Your vet will advise based on lifestyle.',
  },
  {
    q: 'Do clinics do direct insurance claims?',
    a: 'Some do, some don’t. Ask reception about their process. Be prepared to pay at the time of treatment unless a direct claim is agreed.',
  },
  {
    q: 'Where can I verify a clinic is registered?',
    a: 'Use the RCVS “Find a Vet” directory to search by postcode and check practice details.',
  },
  {
    q: 'Do you list prices?',
    a: 'No. Prices and offers change often. Speak to clinics directly for current fees and package details.',
  },
  {
    q: 'Are the clinics listed endorsed?',
    a: 'No. Names are included to help orientation. We do not guarantee any provider. Verify details and make your own choice.',
  },
  {
    q: 'What about exotic pets?',
    a: 'Call ahead to confirm species experience. Some cases may be referred to specialist services.',
  },
  {
    q: 'How should I prepare for travel with my pet?',
    a: 'Contact your vet well in advance for an Animal Health Certificate (EU) or other country requirements. Ensure microchip and vaccinations are valid.',
  },
  {
    q: 'What if I can’t get through to my registered vet?',
    a: 'Try again shortly, check their website, and listen to the voicemail for the out-of-hours partner. If directed to an emergency provider, go as instructed.',
  },
  {
    q: 'Is home euthanasia available?',
    a: 'Availability varies. Discuss with your clinic — some offer home visits or partner with services.',
  },
]

function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Frequently asked questions</SectionHeading>
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

/* ------------------------------------------------ CTA -------------------------------------------------------------- */

function CTA() {
  return (
    <section id="cta" aria-label="Next steps" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Next steps</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Register with a clinic, save their emergency number, and book routine care. For urgent situations, call
              first and follow professional advice.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#clinics" className="btn btn-primary">Nearby clinics</a>
              <a href="https://findavet.rcvs.org.uk/" target="_blank" rel="noopener" className="btn btn-outline">
                RCVS directory
              </a>
              <Link href="/local-services" className="btn btn-ghost">All local services</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.consult.src}
              alt={IMG.consult.alt}
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

/* ------------------------------------------------ JSON-LD ---------------------------------------------------------- */

function JsonLdBlocks() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Nearby vets for Saltaire & Shipley (verify details)',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: NEARBY_CLINICS.length,
    itemListElement: NEARBY_CLINICS.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: c.website || `${base}/local-services/vets#${c.slug}`,
      description: c.excerpt,
      item: {
        '@type': 'MedicalClinic',
        name: c.name,
        areaServed: (c.areaServed || []).map((a) => ({ '@type': 'Place', name: a })),
        medicalSpecialty: 'VeterinaryCare',
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Vets in Saltaire & Shipley — impartial local guide',
    url: `${base}/local-services/vets`,
    description:
      'Emergency steps, registration, choosing a clinic, vaccinations, travel certificates, insurance basics, exotics, end-of-life support, and nearby clinics (verify details).',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#emergency-title', '#clinics-title'] },
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Vets', item: `${base}/local-services/vets` },
    ],
  }

  const howToEmergency = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'What to do in a pet emergency (local owner steps)',
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', text: 'Call your registered practice immediately.' },
      { '@type': 'HowToStep', text: 'If closed, follow the voicemail/website to the out-of-hours partner.' },
      { '@type': 'HowToStep', text: 'Secure your pet for transport; bring meds and insurance details if possible.' },
      { '@type': 'HowToStep', text: 'Follow the vet’s instruction without delay.' },
    ],
  }

  const howToRegister = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to register with a vet (Saltaire & Shipley)',
    totalTime: 'PT10M',
    step: [
      { '@type': 'HowToStep', text: 'Choose a local clinic and complete their online registration form.' },
      { '@type': 'HowToStep', text: 'Provide owner and pet details (species, age, microchip, prior vet).' },
      { '@type': 'HowToStep', text: 'Save the clinic and out-of-hours numbers in your phone.' },
    ],
  }

  const howToAHC = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to arrange an Animal Health Certificate (EU travel)',
    totalTime: 'PT30M',
    step: [
      { '@type': 'HowToStep', text: 'Check rabies vaccination status and microchip.' },
      { '@type': 'HowToStep', text: 'Book an AHC appointment in advance of travel.' },
      { '@type': 'HowToStep', text: 'Bring documents as advised by your clinic.' },
    ],
  }

  const howToInsurance = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to prepare for an insurance claim at the vet',
    totalTime: 'PT10M',
    step: [
      { '@type': 'HowToStep', text: 'Bring insurer name, policy number and contact email.' },
      { '@type': 'HowToStep', text: 'Ask about direct claim vs pay-and-claim.' },
      { '@type': 'HowToStep', text: 'Keep itemised invoices and medical notes for your records.' },
    ],
  }

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      <JsonLd obj={howToEmergency} />
      <JsonLd obj={howToRegister} />
      <JsonLd obj={howToAHC} />
      <JsonLd obj={howToInsurance} />
    </>
  )
}

/* ------------------------------------------------ Page ------------------------------------------------------------- */

export default function VetsGuidePage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <EmergencySection />
      <RegisteringSection />
      <ChoosingSection />
      <VaccinationsSection />
      <TravelSection />
      <InsurancePaymentsSection />
      <ExoticsSection />
      <EndOfLifeSection />
      <ClinicsSection />
      <MapSection />
      <SponsoredSlot />
      <OwnershipChanges />
      <SafetyNotes />
      <Glossary />
      <FAQSection />
      <CTA />
      <JsonLdBlocks />
    </>
  )
}

/* ------------------------------------------------ Long-tail content helpers (SEO text blocks) ---------------------- */
// The blocks below are editorial paragraphs intended to catch long-tail queries without repeating keywords unnaturally.
// They remain cautious and evergreen. They’re rendered visually subtle via utility classes if you decide to include them
// on the page. For now they are unused, but can be placed where needed (e.g., under ClinicsSection).

function LongTailParagraphs() {
  const blocks: string[] = [
    'Looking for cat boosters near Saltaire? Clinics commonly offer nurse appointments for routine checks — verify times and booking methods on the clinic’s site.',
    'Puppy vaccination schedules can vary slightly by product and risk. Your vet will advise a plan based on local prevalence and your puppy’s lifestyle.',
    'If you need an emergency vet around BD18 at night, your day clinic’s voicemail usually directs you to an out-of-hours provider. Call first for the correct site.',
    'Travel rules change — especially for EU trips with pets. Start the process early to avoid last-minute stress at the border.',
    'Dental care for rabbits and guinea pigs often requires specific experience. Ask about dental equipment and anaesthesia protocols for small mammals.',
  ]
  return (
    <section aria-label="Local notes (optional)" className="container mx-auto max-w-7xl px-4 py-6">
      <div className="rounded-2xl border border-gray-100 bg-white p-4 text-sm text-gray-600">
        {blocks.map((b, i) => (
          <p key={i} className={cx('mt-2', i === 0 && 'mt-0')}>
            {b}
          </p>
        ))}
      </div>
    </section>
  )
}
