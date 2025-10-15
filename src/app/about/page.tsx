// src/app/about/page.tsx
// About — Saltaire Guide (static, CWV-focused, E-E-A-T heavy)
// - Server-rendered only (no client components)
// - Strong trust signals: who we are, how we work, sources, corrections, editorial independence
// - Clear contact/imprint + transparency on monetisation & data
// - JSON-LD: AboutPage + Organization (+ ContactPoint, publishingPrinciples, correctionsPolicy, verificationFactCheckingPolicy) + BreadcrumbList + FAQPage
// - Internal links to all cornerstones to reinforce topical authority

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* --------------------------------- SEO meta -------------------------------- */

export const metadata: Metadata = {
  title: 'About Saltaire Guide — who we are, how we work, and our editorial standards',
  description:
    'We’re a small local team creating practical, independent guides to Saltaire. Learn how we verify info, update pages, handle corrections and keep content accessible.',
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: 'About Saltaire Guide',
    description:
      'Local, practical, independent. Read our editorial policy, corrections process and how we verify information.',
    url: `${site.url}/about`,
    type: 'website',
    images: [
      {
        url: `${site.url}/images/parking-saltaire.png`,
        width: 180,
        height: 180,
        alt: 'Saltaire Guide',
      },
    ],
  },
  twitter: { card: 'summary' },
}

/* --------------------------------- Types ---------------------------------- */

type Value = { label: string; body: string }
type Person = {
  id: string
  name: string
  role: string
  bio: string
  photo?: { src: string; alt: string; width: number; height: number }
  links?: Array<{ label: string; href: string }>
}

/* --------------------------------- Data ----------------------------------- */

const VALUES: Value[] = [
  {
    label: 'Local, practical, independent',
    body:
      'We live nearby and walk these paths weekly. No pay-to-play listings, no fluff—just the details visitors actually need.',
  },
  {
    label: 'Accuracy over hype',
    body:
      'Opening hours change. Paths flood. Prices go up. We re-check high-traffic pages, note uncertainty, and remove outdated tips fast.',
  },
  {
    label: 'Accessible by default',
    body:
      'We include step-free notes, surfaces and pinch-points wherever possible. We welcome feedback from wheelchair users and parents with prams.',
  },
  {
    label: 'Original photos & maps',
    body:
      'We prioritise our own imagery and route checks. Stock is used only as temporary filler while we shoot fresh coverage.',
  },
]

const TEAM: Person[] = [
  {
    id: 'editor',
    name: 'Editorial Team',
    role: 'Editors & Researchers',
    bio:
      'Plan content, verify facts with primary sources (council, operators, venue signage) and maintain cornerstone guides.',
    photo: {
      src: '/images/salts-mill.png',
      alt: 'Notebook and pen on a table',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'photography',
    name: 'Field & Photography',
    role: 'Routes, photos & accessibility checks',
    bio:
      'Walks, step-free routes and venue exteriors are checked on foot. We annotate rough patches, gradients and seasonal conditions.',
    photo: {
      src: '/images/whats-on.png',
      alt: 'Camera and map',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'community',
    name: 'Community',
    role: 'Corrections, tips & local leads',
    bio:
      'Locals often know first when things change. We welcome polite corrections and tips via email—credited where useful.',
    photo: {
      src: '/images/roberts-park.png',
      alt: 'People chatting outdoors',
      width: 600,
      height: 400,
    },
  },
]

const SOURCES = [
  'On-site signage and operator notices',
  'Bradford Council and West Yorkshire Combined Authority materials',
  'National Rail Enquiries / Northern for services affecting Saltaire',
  'Venue websites and on-the-day social announcements',
  'Printed local history references for the village & UNESCO context',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How often do you update pages?',
    a: 'Cornerstones (Parking, Walks, Salts Mill, Plan) are reviewed regularly, with extra checks around holidays and festival dates. Minor notes are patched as soon as we spot them.',
  },
  {
    q: 'Do businesses pay to be listed?',
    a: 'No. We do not sell placements. We may accept relevant ads or affiliate links in future, and will label them clearly if we do.',
  },
  {
    q: 'Can I send a correction or tip?',
    a: `Yes, please email ${site.email}. Include date/time, what changed, and a photo or source link if possible.`,
  },
  {
    q: 'Can I use your photos or maps?',
    a: 'Ask first. We usually allow non-commercial reuse with credit and a link. Commercial use requires permission.',
  },
]

/* ------------------------------ Small helpers ------------------------------ */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* -------------------------------- Components ------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link className="underline underline-offset-4 hover:text-black" href="/">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          About
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">About Saltaire Guide</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            We’re a small local team writing practical, independent guides to Saltaire — with original
            photos, maps and accessibility notes. No pay-to-play listings. No fluff.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local & independent</li>
            <li className="badge">Original photography</li>
            <li className="badge">Accessibility first</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/walks">
              Start with Walks
            </Link>
            <Link className="btn btn-outline" href="/salts-mill">
              Salts Mill guide
            </Link>
            <Link className="btn btn-ghost" href="/parking">
              Parking
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-from-saltaire.png"
            alt="Canal and stone buildings near Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function Values() {
  return (
    <section id="values" aria-labelledby="values-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="values-title">What we stand for</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {VALUES.map((v) => (
          <div key={v.label} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{v.label}</h3>
              <p className="mt-2 text-gray-700">{v.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="team-title">Who writes Saltaire Guide</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We’re locals who walk, photograph and fact-check the routes and venues we cover. For now we publish
        under the site masthead and sign pieces individually when needed.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((p) => (
          <article key={p.id} className="card">
            <div className="card-body">
              {p.photo ? (
                <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={p.photo.src}
                    alt={p.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.role}</p>
              <p className="mt-2 text-sm text-gray-700">{p.bio}</p>
              {p.links?.length ? (
                <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <a className="badge underline underline-offset-4" href={l.href as any}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Method() {
  return (
    <section id="method" aria-labelledby="method-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="method-title">How we work</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Verification & sources</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Updates & uncertainty</h3>
          <p className="mt-2 text-gray-700">
            When details are fluid (festival schedules, seasonal toilets), we say so and point to official notices.
            We will remove or revise info that becomes inaccurate.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          See also our{' '}
          <Link className="underline underline-offset-4" href="/legal/editorial-policy">
            editorial policy
          </Link>{' '}
          and{' '}
          <Link className="underline underline-offset-4" href="/legal/corrections">
            corrections page
          </Link>
          . We publish a small{' '}
          <Link className="underline underline-offset-4" href="/legal/masthead">
            masthead & imprint
          </Link>{' '}
          for transparency.
        </p>
      </div>
    </section>
  )
}

function Monetisation() {
  return (
    <section id="monetisation" aria-labelledby="mon-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="mon-title">Advertising & monetisation</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">No paid placements</h3>
            <p className="mt-2 text-gray-700">
              We do not sell spots in guides. If we accept ads or relevant affiliate links in the future, they will be
              clearly labelled and separated from editorial decisions.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Conflicts of interest</h3>
            <p className="mt-2 text-gray-700">
              If any contributor has a material connection to a business we cover, we disclose it on the page or avoid the assignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="contact-title">Contact, imprint & press</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">General & corrections</h3>
            <p className="mt-2 text-gray-700">
              Email:{' '}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Please include date/time seen, a short description, and any evidence (photo or link).
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Media & re-use</h3>
            <p className="mt-2 text-gray-700">
              For press enquiries or to request use of images/maps, email us with subject “Press”. We usually allow
              non-commercial re-use with credit and a link.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <ul className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <li>
            <Link className="underline underline-offset-4" href="/legal/masthead">
              Masthead & imprint
            </Link>
          </li>
          <li>
            <Link className="underline underline-offset-4" href="/legal/editorial-policy">
              Editorial policy
            </Link>
          </li>
          <li>
            <Link className="underline underline-offset-4" href="/legal/corrections">
              Corrections
            </Link>
          </li>
          <li>
            <Link className="underline underline-offset-4" href="/legal/privacy">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
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

function CTA() {
  return (
    <section aria-label="Explore guides" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Explore the essential guides</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Start with parking or a classic towpath walk, browse cafés and pubs, or plan your day around Salts Mill.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/parking" className="btn btn-primary">Parking</Link>
              <Link href="/walks" className="btn btn-outline">Walks</Link>
              <Link href="/salts-mill" className="btn btn-ghost">Salts Mill</Link>
              <Link href="/food-drink" className="btn btn-muted">Eat &amp; Drink</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/walks-from-saltaire.png"
              alt="Towpath and canal bridge near Saltaire"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url
  const year = new Date().getFullYear()
  const twitter = site.twitter?.startsWith('@')
    ? `https://twitter.com/${site.twitter.slice(1)}`
    : site.twitter?.startsWith('http')
      ? site.twitter
      : undefined

  const aboutPage = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Saltaire Guide',
    url: `${base}/about`,
    description:
      'Who we are, how we work and our editorial standards: independent, local and practical guides to Saltaire.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${base}/about` },
      ],
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#values-title', '#method-title'],
    },
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: base,
    email: site.email,
    logo: `${base}/favicons/apple-touch-icon.png`,
    sameAs: twitter ? [twitter] : undefined,
    foundingDate: `${year}`,
    areaServed: 'GB',
    knowsAbout: [
      'Saltaire history',
      'Salts Mill',
      'Roberts Park',
      'Leeds–Liverpool Canal (Aire Valley)',
      'Walks from Saltaire',
      'Parking in Saltaire',
      'Cafés, pubs & restaurants in Saltaire',
      'Events & festivals in Saltaire',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'editorial',
        email: site.email,
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
    publishingPrinciples: `${base}/legal/editorial-policy`,
    correctionsPolicy: `${base}/legal/corrections`,
    verificationFactCheckingPolicy: `${base}/legal/editorial-policy`,
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${base}/about` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <Values />
      <Team />
      <Method />
      <Monetisation />
      <Contact />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
