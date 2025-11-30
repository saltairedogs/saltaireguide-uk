// src/app/legal/masthead/page.tsx
// Masthead & Imprint — saltaireguide.uk
// - App Router (server component only), static HTML, CWV-friendly
// - E-E-A-T signals: publisher identity, editorial structure, contact points, disclosures
// - JSON-LD: WebPage (Masthead) + BreadcrumbList + Organization (publishingPrinciples/correctionsPolicy/privacy)
// - Strong internal links to About, Contact, Privacy, Editorial Policy, Corrections
//
// NOTE: This page lists roles rather than personal details. Add named people later if desired.

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Masthead & Imprint — Saltaire Guide',
  description:
    'Publisher identity for Saltaire Guide: editorial structure, responsibilities, contact points, policies and disclosures for this independent local guide to Saltaire & Shipley.',
  alternates: { canonical: `${site.url}/legal/masthead` },
  openGraph: {
    title: 'Masthead & Imprint — Saltaire Guide',
    description:
      'Who publishes Saltaire Guide: roles, responsibilities, contact points, and our core policies as an independent local publication.',
    url: `${site.url}/legal/masthead`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Role = {
  title: string
  responsibility: string
  email?: string
  notes?: string
}

/* --------------------------------- Data ----------------------------------- */

// ISO-style string for humans + JSON-LD
const UPDATED = '2025-11-30'
const PUBLISHED = '2025-10-12'

const ROLES: Role[] = [
  {
    title: 'Editor',
    responsibility:
      'Overall editorial direction; commissioning; final sign-off; implementing corrections and updates.',
    email: site.email,
    notes: 'Primary editorial contact.',
  },
  {
    title: 'Research Editor',
    responsibility:
      'On-the-ground verification; source collection; checking transport/price/access details against official notices.',
  },
  {
    title: 'Accessibility Editor',
    responsibility:
      'Step-free routes, gradients, surfaces and facilities; plain-language guidance; accessibility FAQs and testing.',
  },
  {
    title: 'Photography & Maps',
    responsibility:
      'Original images and map overlays; permissions & credits; keeping visuals current and representative.',
  },
  {
    title: 'Community & Partnerships',
    responsibility:
      'Local organisations, events and reader tips; fair representation; conflict checks; listing eligibility.',
  },
]

const CONTACT_POINTS = [
  { label: 'Editorial', email: site.email, subject: 'Editorial' },
  { label: 'Corrections', email: site.email, subject: 'Correction' },
  { label: 'Media & permissions', email: site.email, subject: 'Media' },
  { label: 'Accessibility', email: site.email, subject: 'Accessibility' },
]

/* -------------------------------- Helpers --------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg font-semibold tracking-tight">{children}</h3>
}

/* ------------------------------- Components -------------------------------- */

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
          Masthead &amp; Imprint
        </li>
      </ol>
    </nav>
  )
}

function Intro() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Masthead &amp; Imprint</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            {site.name} is an independent local publication about Saltaire &amp; Shipley. This page sets out who
            publishes it, how we make decisions, and how to contact us.
          </p>
          <p className="mt-2 max-w-prose text-sm text-gray-600">
            We&apos;re not an official council or tourism site. We run this as a small local project with clear
            editorial standards and transparent policies.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Independent &amp; local</li>
            <li className="badge">Editorially led</li>
            <li className="badge">Updated: {UPDATED}</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Quick links</div>
            <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-gray-700">
              <li>
                <a href="#publisher" className="underline underline-offset-4">
                  Publisher
                </a>
              </li>
              <li>
                <a href="#team" className="underline underline-offset-4">
                  Editorial structure
                </a>
              </li>
              <li>
                <a href="#contact" className="underline underline-offset-4">
                  Contact points
                </a>
              </li>
              <li>
                <a href="#policies" className="underline underline-offset-4">
                  Core policies
                </a>
              </li>
              <li>
                <a href="#credits" className="underline underline-offset-4">
                  Credits &amp; licensing
                </a>
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Related:{' '}
              <Link className="underline underline-offset-4" href="/about">
                About
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/contact">
                Contact
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/legal/editorial-policy">
                Editorial policy
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/legal/corrections">
                Corrections
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/legal/privacy">
                Privacy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Publisher() {
  return (
    <section id="publisher" aria-labelledby="publisher-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="publisher-title">Publisher</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">{site.name}</div>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-600">Website</dt>
                <dd className="text-gray-800">{site.url}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-600">Domain</dt>
                <dd className="text-gray-800">{site.domain}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-600">Email</dt>
                <dd className="text-gray-800">
                  <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-600">Based</dt>
                <dd className="text-gray-800">Shipley &amp; Saltaire, West Yorkshire, UK</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-gray-600">
              We are a small, independent publisher. We don&apos;t sell sponsored posts or accept payment for positive
              coverage. See{' '}
              <Link className="underline underline-offset-4" href="/legal/editorial-policy">
                Editorial policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="callout">
          <div className="text-lg font-semibold">What the masthead means</div>
          <p className="mt-2 text-gray-700">
            A masthead (imprint) identifies who is responsible for publishing and maintaining the site. It supports
            transparency and accountability—key E-E-A-T signals for visitors, search engines and local partners.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            If you ever need to escalate an issue or query a decision, start here: the buck stops with the Editor.
          </p>
        </div>
      </div>
    </section>
  )
}

function EditorialStructure() {
  return (
    <section id="team" aria-labelledby="team-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="team-title">Editorial structure</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We publish under clear roles and responsibilities. Named editors and contributors may be added here later as the
        project grows.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ROLES.map((r) => (
          <article key={r.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-gray-700">{r.responsibility}</p>
              {r.email ? (
                <p className="mt-2 text-sm">
                  <a className="underline underline-offset-4" href={`mailto:${r.email}`}>
                    Email {r.title.toLowerCase()}
                  </a>
                </p>
              ) : null}
              {r.notes ? <p className="mt-1 text-sm text-gray-600">{r.notes}</p> : null}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 smallprint">
        Want to contribute photos, accessibility notes or local history?{' '}
        <Link className="underline underline-offset-4" href="/contact">
          Get in touch
        </Link>
        .
      </div>
    </section>
  )
}

function ContactPoints() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="contact-title">Contact points</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Choose the most relevant inbox so we can triage quickly. We aim to reply within 1–2 working days.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {CONTACT_POINTS.map((c) => (
          <div key={c.label} className="card">
            <div className="card-body">
              <div className="text-lg font-semibold">{c.label}</div>
              <p className="mt-2">
                <a
                  className="underline underline-offset-4"
                  href={`mailto:${c.email}?subject=${encodeURIComponent(c.subject)}`}
                >
                  {c.email}
                </a>
              </p>
              <p className="mt-2 text-sm text-gray-600">Subject: {c.subject}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Prefer forms? Use the{' '}
        <Link className="underline underline-offset-4" href="/contact">
          Contact page
        </Link>{' '}
        or{' '}
        <Link className="underline underline-offset-4" href="/legal/corrections">
          Corrections policy
        </Link>
        .
      </div>
    </section>
  )
}

function Policies() {
  const items = [
    {
      title: 'Editorial policy',
      href: '/legal/editorial-policy',
      desc: 'Sourcing, verification, independence, disclosures, images and update practices.',
    },
    {
      title: 'Corrections policy',
      href: '/legal/corrections',
      desc: 'How to report an error and how we triage, fix and note material updates.',
    },
    {
      title: 'Privacy policy',
      href: '/legal/privacy',
      desc: 'What we collect, why, retention periods, cookies/analytics and your rights.',
    },
  ]
  return (
    <section id="policies" aria-labelledby="policies-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="policies-title">Core policies</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="card card-hover focus:outline-none">
            <div className="card-body">
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-gray-700">{it.desc}</p>
              <p className="mt-3 text-sm underline underline-offset-4">Read policy</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Credits() {
  return (
    <section id="credits" aria-labelledby="credits-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="credits-title">Credits &amp; licensing</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <SubHeading>Photos &amp; graphics</SubHeading>
            <p className="mt-2 text-gray-700">
              Most images are our own. Some header/illustrative images are licensed from libraries; where required,
              attribution is provided in-page. Please request permission before reuse.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              For media use, see{' '}
              <Link className="underline underline-offset-4" href="/contact">
                Contact
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="callout">
          <SubHeading>Content licence</SubHeading>
          <p className="mt-2 text-gray-700">
            Unless stated otherwise, text and original images are © {new Date().getFullYear()} {site.name}. We&apos;re
            happy to permit limited quotation with clear credit and a link back to the source page.
          </p>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section
      aria-label="Talk to the editors"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Questions about the imprint?</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              We&apos;re happy to discuss roles, sources and decisions. For tips or corrections, use the dedicated
              routes so we can keep a clear audit trail.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Contact editors
              </Link>
              <Link href="/legal/corrections" className="btn btn-outline">
                Report a correction
              </Link>
              <Link href="/about" className="btn btn-ghost">
                About us
              </Link>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <div className="text-lg font-semibold">Transparency</div>
              <p className="mt-2 text-gray-700">
                Our policies explain how we publish and how we handle updates and data. They&apos;re kept short and
                clear so they&apos;re actually readable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Masthead & Imprint — Saltaire Guide',
    url: `${base}/legal/masthead`,
    inLanguage: 'en-GB',
    description:
      'Publisher identity for Saltaire Guide: editorial structure, responsibilities, contact points, policies and disclosures.',
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    isPartOf: {
      '@type': 'WebSite',
      name: site.name,
      url: base,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#publisher-title', '#team-title'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Masthead & Imprint', item: `${base}/legal/masthead` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
    areaServed: 'GB',
    sameAs: [
      // Add socials when live, e.g.:
      // 'https://www.instagram.com/saltaireguide',
      // 'https://www.youtube.com/@saltaireguide',
    ],
    publishingPrinciples: `${base}/legal/editorial-policy`,
    correctionsPolicy: `${base}/legal/corrections`,
    privacyPolicy: `${base}/legal/privacy`,
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Shipley & Saltaire',
        addressRegion: 'West Yorkshire',
        addressCountry: 'GB',
      },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'editorial',
        email: site.email,
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'media inquiries',
        email: site.email,
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'accessibility',
        email: site.email,
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function MastheadPage() {
  return (
    <>
      <Breadcrumbs />
      <Intro />
      <Publisher />
      <EditorialStructure />
      <ContactPoints />
      <Policies />
      <Credits />
      <CTA />
      <JsonLd />
    </>
  )
}
