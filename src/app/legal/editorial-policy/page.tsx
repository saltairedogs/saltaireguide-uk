// src/app/legal/editorial-policy/page.tsx
// Editorial Policy — saltaireguide.uk
// - App Router (server component only), static HTML, CWV-first
// - Clear publishing principles: sourcing, fact-checking, independence, disclosure
// - JSON-LD: WebPage + BreadcrumbList + Organization (publishingPrinciples) + Speakable
// - Strong internal linking to Contact, Corrections, Privacy, About

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Editorial Policy — Saltaire Guide',
  description:
    'Our publishing principles: sourcing, fact-checking, on-the-ground verification, independence, disclosures, images & permissions, and update practices.',
  alternates: { canonical: `${site.url}/legal/editorial-policy` },
  openGraph: {
    title: 'Editorial Policy — Saltaire Guide',
    description:
      'How we research, verify and publish guides about Saltaire. Sourcing, fact-checking, conflicts, disclosures and update practices.',
    url: `${site.url}/legal/editorial-policy`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

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
          Editorial policy
        </li>
      </ol>
    </nav>
  )
}

function Intro() {
  const reviewed = '2025-10-12'
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Editorial Policy</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            {site.name} exists to make visiting Saltaire easier and more enjoyable. We verify details on the ground,
            cite sources, and keep our guides practical, accurate and up to date.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local & independent</li>
            <li className="badge">Original photos & maps</li>
            <li className="badge">Last reviewed: {reviewed}</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Quick links</div>
            <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-gray-700">
              <li><a href="#sourcing" className="underline underline-offset-4">Sourcing & citations</a></li>
              <li><a href="#verification" className="underline underline-offset-4">Verification & updates</a></li>
              <li><a href="#independence" className="underline underline-offset-4">Independence & conflicts</a></li>
              <li><a href="#reviews" className="underline underline-offset-4">Reviews & free items</a></li>
              <li><a href="#ai" className="underline underline-offset-4">AI usage disclosure</a></li>
              <li><a href="#images" className="underline underline-offset-4">Images & permissions</a></li>
              <li><a href="#corrections" className="underline underline-offset-4">Corrections</a></li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Related:{' '}
              <Link className="underline underline-offset-4" href="/legal/corrections">Corrections policy</Link>,{' '}
              <Link className="underline underline-offset-4" href="/legal/privacy">Privacy</Link>,{' '}
              <Link className="underline underline-offset-4" href="/about">About</Link>,{' '}
              <Link className="underline underline-offset-4" href="/contact">Contact</Link>.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Sourcing() {
  return (
    <section id="sourcing" aria-labelledby="sourcing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="sourcing-title">Sourcing & citations</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Primary sources are preferred: official notices, onsite signs, menus, timetables, and direct conversations with
        staff. Secondary sources include council pages, transport operators and venue websites. Where we cite, we do so
        in plain English inside the guide. If a claim is uncertain, we say so.
      </p>
      <SubHeading>Local knowledge</SubHeading>
      <p className="text-gray-700">
        We walk the routes we recommend and regularly re-check access, surfaces, and step-free options. When a reader
        supplies a tip, we verify before updating.
      </p>
    </section>
  )
}

function Verification() {
  return (
    <section id="verification" aria-labelledby="verification-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="verification-title">Verification, fact-checking & updates</SectionHeading>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>Prices, hours and restrictions are checked against on-site signs or official pages.</li>
        <li>We note uncertainty (e.g., seasonal changes) and provide alternatives.</li>
        <li>High-impact pages (Parking, Salts Mill, Walks) are reviewed at least quarterly.</li>
        <li>Material changes include an “Updated” note at the top of the page.</li>
      </ul>
      <p className="mt-3 text-sm text-gray-600">
        Found an error? See our <Link className="underline underline-offset-4" href="/legal/corrections">Corrections policy</Link>.
      </p>
    </section>
  )
}

function Independence() {
  return (
    <section id="independence" aria-labelledby="independence-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="independence-title">Independence & conflicts</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We do not sell sponsored posts or accept payment for positive coverage. If a potential conflict exists (e.g.,
        a contributor works with a venue), we disclose it on the relevant page or reassign the piece.
      </p>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="reviews-title">Reviews, free items & affiliations</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        If we receive complimentary tickets or items, we state this and evaluate as if we had paid. We currently have no
        affiliate links; if we introduce them, we will label them and never let them affect ranking or recommendations.
      </p>
    </section>
  )
}

function AI() {
  return (
    <section id="ai" aria-labelledby="ai-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ai-title">AI usage disclosure</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We may use AI tools to assist with formatting, checklists and consistency. All published content is planned,
        verified and edited by humans. We do not auto-publish AI-generated venue descriptions or reviews.
      </p>
    </section>
  )
}

function Images() {
  return (
    <section id="images" aria-labelledby="images-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="images-title">Images, maps & permissions</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Most photos and maps are our own. Some are licensed from libraries with credit where required. For media use,
        please ask first via <Link className="underline underline-offset-4" href="/contact">Contact</Link>.
      </p>
    </section>
  )
}

function Corrections() {
  return (
    <section id="corrections" aria-labelledby="corrections-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="corrections-title">Corrections</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We correct inaccuracies promptly and note material updates. For how to report an error and our triage timelines,
        see the <Link className="underline underline-offset-4" href="/legal/corrections">Corrections policy</Link>.
      </p>
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
            <h2 className="text-2xl font-bold md:text-3xl">Questions about this policy?</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              We’re happy to discuss sources, decisions and updates. We prefer clear, public corrections when needed.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Contact us</Link>
              <Link href="/legal/corrections" className="btn btn-outline">Report a correction</Link>
              <Link href="/about" className="btn btn-ghost">About the team</Link>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <div className="text-lg font-semibold">Transparency</div>
              <p className="mt-2 text-gray-700">
                Our <Link className="underline underline-offset-4" href="/legal/privacy">Privacy policy</Link> explains
                how messages and tips are handled and how long we retain data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------- JSON-LD ----------------------------------- */

function JsonLd() {
  const base = site.url
  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Editorial Policy — Saltaire Guide',
    url: `${base}/legal/editorial-policy`,
    inLanguage: 'en-GB',
    description:
      'Publishing principles covering sourcing, verification, independence, disclosures, images and corrections.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#sourcing-title', '#verification-title'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Editorial policy', item: `${base}/legal/editorial-policy` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    publishingPrinciples: `${base}/legal/editorial-policy`,
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

export default function EditorialPolicyPage() {
  return (
    <>
      <Breadcrumbs />
      <Intro />
      <Sourcing />
      <Verification />
      <Independence />
      <Reviews />
      <AI />
      <Images />
      <Corrections />
      <CTA />
      <JsonLd />
    </>
  )
}
