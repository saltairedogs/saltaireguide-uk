// src/app/local-services/dog-walkers/page.tsx
// Dog walkers & pet sitters in Saltaire & Shipley — directory (server-rendered, CWV-friendly)
// Goals:
// - Rank for local-intent “dog walker saltaire / shipley / BD18” queries
// - Be a genuine directory (featured + request listing), without fake competitors
// - Push high-intent users to the Saltaire Dogs + Pets landing page
// - Strong structured data: WebPage + BreadcrumbList + ItemList + FAQPage

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

const PATH = '/local-services/dog-walkers'
const UPDATED = '2025-12-18'

const HERO_IMAGE = '/images/local-services/saltaire-river-saltaire-dogs-dog-walker-img.jpg'
const BRAND_IMAGE = '/images/local-services/saltaire-river-saltaire-dogs-dog-walker-img.jpg'

const LISTING_EMAIL = 'hello@saltaireguide.uk'

const FEATURED = {
  slug: 'saltaire-dogs-pets',
  name: 'Saltaire Dogs + Pets',
  shortName: 'SaltaireDogs',
  href: '/local-services/dog-walkers/saltaire-dogs-pets',
  website: 'https://saltairedogs.uk',
  phoneDisplay: '07305 367941',
  phoneTel: 'tel:+447305367941',
  whatsappE164: '+447424208127',
  priceFrom: '£10',
  areas: ['Saltaire (BD18)', 'Shipley', 'Roberts Park', 'Canal / Towpath'],
  bullets: [
    'Dog walking (1:1 available)',
    'Pet sitting & home visits',
    'Cats / small pets / birds / fish feeding',
    'Optional photo updates',
    'DBS checked + insured (ask to see proof)',
  ],
  blurb:
    'Local dog walking, pet sitting and home visits in Saltaire & Shipley — calm, structured care with fast WhatsApp booking.',
} as const

type MetadataKeywords = string[]

export const metadata: Metadata = {
  title: 'Dog walkers & pet sitters in Saltaire & Shipley (BD18) — local directory',
  description:
    'Find dog walkers and pet sitters in Saltaire & Shipley (BD18). Featured local provider plus a simple checklist for booking safely (DBS, insurance, meet & greet, updates).',
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: 'Dog walkers & pet sitters in Saltaire & Shipley (BD18) — directory',
    description:
      'Local directory for dog walking, pet sitting and home visits in Saltaire & Shipley — with practical booking tips.',
    url: `${site.url}${PATH}`,
    type: 'website',
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 2400,
        height: 1800,
        alt: 'Dog walking in Saltaire near Roberts Park and the canal towpath',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${site.url}${HERO_IMAGE}`],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  keywords: [
    'dog walker saltaire',
    'dog walkers saltaire',
    'dog walker shipley',
    'pet sitter saltaire',
    'pet sitting shipley',
    'home visits bd18',
    'roberts park dog walks',
    'saltaire canal towpath walk',
  ] as MetadataKeywords,
}

function waMeLink(e164: string, text?: string) {
  const n = e164.replace(/[^\d+]/g, '').replace('+', '')
  const base = `https://wa.me/${n}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

function mailto(subject: string, body: string) {
  return `mailto:${LISTING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function analyticsAttrs(action: string) {
  return {
    'data-analytics': 'saltaire-guide',
    'data-analytics-action': action,
  } as any
}

/* ------------------------------ JSON-LD blocks ----------------------------- */

function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  )
}

const FAQS = [
  {
    q: 'Is this a ranked “best dog walker” list?',
    a: 'No. This is a local directory. Some placements may be labelled “Featured” (paid). Where “Verified” is shown, it means documents were provided (for example DBS/insurance).',
  },
  {
    q: 'How much do dog walkers cost in Saltaire & Shipley?',
    a: 'Prices vary by walk length, 1:1 vs group, and travel. Many local services start around £10–£15 for a short walk and increase for longer sessions or special requirements.',
  },
  {
    q: 'What should I ask before booking?',
    a: 'Ask about DBS/insurance, whether they do a meet & greet, whether walks are 1:1 or group, what updates you’ll get (messages/photos), and what their emergency/vet plan is.',
  },
  {
    q: 'How do I get my pet business listed here?',
    a: 'Use the contact page or email us your details. Basic listings are free. Verified/Featured placements require a quick check and are labelled clearly.',
  },
] as const

function buildLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dog walkers & pet sitters in Saltaire & Shipley (BD18) — directory',
    url: `${base}${PATH}`,
    description: metadata.description,
    inLanguage: 'en-GB',
    dateModified: UPDATED,
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Local services', item: `${base}/local-services` },
      { '@type': 'ListItem', position: 3, name: 'Dog walkers & pet sitters', item: `${base}${PATH}` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dog walkers & pet sitters in Saltaire & Shipley',
    numberOfItems: 1,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: FEATURED.name,
        url: `${base}${FEATURED.href}`,
        description: FEATURED.blurb,
      },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return { webpage, breadcrumbs, itemList, faqLd }
}

/* --------------------------------- Page ----------------------------------- */

export default function DogWalkersDirectoryPage() {
  const waPrefill = waMeLink(
    FEATURED.whatsappE164,
    `Hi ${FEATURED.shortName} — enquiry via SaltaireGuide.uk.
Area: (Saltaire/Shipley)
Service: (dog walking / pet sitting / home visits)
Pet: (breed/age/temperament)
Days needed:
Anything we should know (reactive/nervous/meds):`
  )

  const ownerMail = mailto(
    'Request a pet services listing (Saltaire Guide)',
    `Hi Saltaire Guide,

I'd like to add or update a local pet services listing.

Business name:
Contact name:
Phone:
Website:
Areas served (Saltaire/Shipley/BD18 etc):
Services (dog walking / pet sitting / cats / birds / fish / small pets):
Pricing (optional):
Verification available? (DBS/insurance):

Thanks!`
  )

  const { webpage, breadcrumbs, itemList, faqLd } = buildLd()

  return (
    <>
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={itemList} />
      <JsonLd obj={faqLd} />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="underline underline-offset-4 hover:text-slate-900">
              Home
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li>
            <Link href="/local-services" className="underline underline-offset-4 hover:text-slate-900">
              Local services
            </Link>
          </li>
          <span aria-hidden="true">›</span>
          <li aria-current="page" className="text-slate-800">
            Dog walkers &amp; pet sitters
          </li>
        </ol>
      </nav>

      {/* HERO (warm + light) */}
      <header className="bg-[#f7f1e7] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">Updated: {UPDATED}</span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                  Saltaire • Shipley • BD18
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1">
                  Roberts Park • canal towpath
                </span>
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Dog walkers &amp; pet sitters in Saltaire &amp; Shipley
              </h1>

              <p className="mt-3 max-w-prose text-lg text-slate-700">
                A practical local directory for dog walking, pet sitting and home visits in BD18 — with a simple
                booking checklist (DBS, insurance, meet &amp; greet, updates).
              </p>

              {/* Buttons (no blue/dark fill) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#featured"
                  className="rounded-2xl border border-black/10 bg-[#fbf7ef] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                  {...analyticsAttrs('dir_hero_jump_featured')}
                >
                  Featured provider ↓
                </a>

                <a
                  href="#request"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/80"
                  {...analyticsAttrs('dir_hero_jump_request')}
                >
                  Request a listing →
                </a>

                <Link
                  href="/visit-saltaire"
                  className="rounded-2xl border border-black/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
                >
                  Visiting Saltaire? Start here
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-600">
                Note: “Featured” placements are paid and labelled. “Verified” means documents were provided.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={HERO_IMAGE}
                  alt="Dog walking in Saltaire near Roberts Park and canal-side routes"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold text-slate-900">Quick tip</div>
                <p className="mt-1 text-sm text-slate-700">
                  If your dog is nervous or reactive, ask for <b>1:1 walks</b> and do a meet &amp; greet first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {/* Featured */}
        <section id="featured" className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured provider</h2>
              <p className="mt-2 max-w-prose text-slate-700">
                Featured placements are labelled. Verified indicates documents were provided (ask to see proof if important to you).
              </p>
            </div>
            <div className="text-xs text-slate-600 flex gap-2">
              <span className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1">Featured</span>
              <span className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1">Verified</span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[420px_1fr]">
            <div className="p-6 pt-0 lg:pt-6">
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={BRAND_IMAGE}
                    alt="Saltaire Dogs + Pets — dog walking and pet sitting in Saltaire"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 lg:p-6 lg:pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{FEATURED.name}</h3>
                  <p className="mt-2 text-sm text-slate-700">{FEATURED.blurb}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">From</div>
                  <div className="text-xl font-bold text-slate-900">{FEATURED.priceFrom}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {FEATURED.bullets.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-[#fbf7ef] px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-slate-700">
                <b>Areas:</b> {FEATURED.areas.join(', ')}
              </div>

              {/* Buttons (no blue/dark fill) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={FEATURED.phoneTel}
                  className="rounded-2xl border border-black/10 bg-[#fbf7ef] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
                  {...analyticsAttrs('dir_featured_call')}
                >
                  Call {FEATURED.phoneDisplay}
                </a>
                <a
                  href={waPrefill}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  {...analyticsAttrs('dir_featured_whatsapp')}
                >
                  WhatsApp (preferred) →
                </a>
                <Link
                  href={FEATURED.href}
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  {...analyticsAttrs('dir_featured_open_landing')}
                >
                  View full details →
                </Link>
                <a
                  href={FEATURED.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  {...analyticsAttrs('dir_featured_visit_site')}
                >
                  Visit website →
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-600">
                Fastest booking: WhatsApp with your area + what you need + your pet details.
              </p>
            </div>
          </div>
        </section>

        {/* Booking checklist */}
        <section className="rounded-3xl border border-black/10 bg-[#fbf7ef] p-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Booking checklist (quick + practical)</h2>
          <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-2">
            <li>Meet &amp; greet first (especially for nervous/reactive dogs).</li>
            <li>Ask about DBS + insurance (and request proof if important to you).</li>
            <li>Confirm whether walks are 1:1 or group, and typical routes (Roberts Park / canal).</li>
            <li>Agree update style (message/photos) and timing window.</li>
            <li>Confirm emergency plan (vet preference + who gets called).</li>
          </ul>
        </section>

        {/* Request listing */}
        <section id="request" className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Run a local pet service?</h2>
          <p className="mt-2 max-w-prose text-slate-700">
            Request a free listing on Saltaire Guide. Verified/Featured options are available (clearly labelled).
          </p>

          {/* Buttons (no blue/dark fill) */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={ownerMail}
              className="rounded-2xl border border-black/10 bg-[#fbf7ef] px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
              {...analyticsAttrs('dir_request_email')}
            >
              Request a listing via email
            </a>
            <Link
              href="/contact"
              className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Use contact form →
            </Link>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            We keep directory wording factual. No fake reviews, no “best” claims — just clear info.
          </p>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" className="space-y-4">
          <h2 id="faq" className="text-3xl font-bold tracking-tight text-slate-900">
            FAQs
          </h2>
          <div className="divide-y divide-black/10 rounded-3xl border border-black/10 bg-white">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group p-5 open:bg-slate-50">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {f.q}
                </summary>
                <p className="mt-2 max-w-prose text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile sticky CTA (no blue/dark fill) */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <div className="rounded-3xl border border-black/10 bg-white/95 backdrop-blur shadow-lg p-3 flex gap-2">
          <a
            href={FEATURED.phoneTel}
            className="flex-1 rounded-2xl border border-black/10 bg-[#fbf7ef] px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-white"
            {...analyticsAttrs('dir_sticky_call')}
          >
            Call
          </a>
          <a
            href={waPrefill}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
            {...analyticsAttrs('dir_sticky_whatsapp')}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
