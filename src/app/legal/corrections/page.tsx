// src/app/legal/corrections/page.tsx
// Corrections Policy — saltaireguide.uk
// - Static, accessible, fast. Clear reporting paths & transparent change notes.
// - JSON-LD: WebPage + BreadcrumbList + Organization (correctionsPolicy) + FAQPage
// - Includes a slim server-friendly form that posts to /api/contact with category=correction

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'
import FormBridge from '@/components/FormBridge'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Corrections Policy — Saltaire Guide',
  description:
    'How to report errors and how we handle them: triage levels, timelines, transparency notes and version history.',
  alternates: { canonical: `${site.url}/legal/corrections` },
  openGraph: {
    title: 'Corrections Policy — Saltaire Guide',
    description:
      'Report mistakes quickly and see how we correct them. Triage levels, timelines and how to contact the editors.',
    url: `${site.url}/legal/corrections`,
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
          Corrections
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Corrections Policy</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            We fix errors quickly and visibly. Safety-critical or accessibility-impacting issues are prioritised.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Last reviewed: {reviewed}</li>
            <li className="badge">Local & unbiased</li>
            <li className="badge">Transparent change notes</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Report a correction</div>
            <p className="mt-2 text-gray-700">
              Use the form below, or email{' '}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>{' '}
              with “Correction” in the subject. Include the page link, the incorrect text, and your proposed fix.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Triage() {
  const levels = [
    {
      level: 'High',
      examples:
        'Safety, accessibility, closures, prices/dates that affect visitors immediately, legal risks.',
      target: 'Same day where possible; otherwise within 48 hours.',
    },
    {
      level: 'Medium',
      examples: 'Non-critical factual errors, map labels, outdated photos.',
      target: 'Within 7 days.',
    },
    {
      level: 'Low',
      examples: 'Grammar, style, minor clarity edits.',
      target: 'Within 30 days (often sooner).',
    },
  ]
  return (
    <section id="triage" aria-labelledby="triage-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="triage-title">Triage levels & timelines</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {levels.map((l) => (
          <div key={l.level} className="card card-hover">
            <div className="card-body">
              <div className="text-lg font-semibold">{l.level} priority</div>
              <p className="mt-2 text-gray-700">{l.examples}</p>
              <p className="mt-2 text-sm text-gray-600">
                Target resolution: <strong>{l.target}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        If a change requires on-the-ground verification, we’ll update the page with an interim note.
      </p>
    </section>
  )
}

function HowToReport() {
  return (
    <section id="report" aria-labelledby="report-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="report-title">How to report an error</SectionHeading>
      <ol className="mt-3 list-decimal pl-6 text-gray-700">
        <li>Copy the page URL and paste the exact sentence or section that is wrong.</li>
        <li>Tell us the correct detail and, if possible, include a source (photo of signage or official page).</li>
        <li>Share any accessibility impact (e.g., steps, gradients, closures) so we can prioritise.</li>
      </ol>

      <FormBridge
        formName="Corrections: report"
        className="mt-6 grid gap-5 rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        noValidate
      >
        <input type="hidden" name="category" value="correction" />
        <div className="field">
          <label htmlFor="page" className="label">Page URL</label>
          <input id="page" name="page" type="url" className="input" placeholder="https://saltaireguide.uk/parking" required />
        </div>
        <div className="field">
          <label htmlFor="incorrect" className="label">What is incorrect?</label>
          <textarea id="incorrect" name="incorrect" className="textarea" placeholder="Paste the exact text…" required />
        </div>
        <div className="field">
          <label htmlFor="proposed" className="label">Proposed correction</label>
          <textarea id="proposed" name="proposed" className="textarea" placeholder="Write what it should say…" required />
        </div>
        <div className="field">
          <label htmlFor="source" className="label">Source (optional but helpful)</label>
          <input id="source" name="source" type="url" className="input" placeholder="Link to official source or upload path in email" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="field">
            <label htmlFor="name" className="label">Your name (optional)</label>
            <input id="name" name="name" type="text" className="input" placeholder="Jane Smith" />
          </div>
          <div className="field">
            <label htmlFor="email" className="label">Email (for follow-up)</label>
            <input id="email" name="email" type="email" className="input" placeholder="you@domain.com" required />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="btn btn-primary">Submit correction</button>
          <a href={`mailto:${site.email}?subject=Correction`} className="btn btn-outline">Email instead</a>
          <span className="hint">We aim to reply within 1–2 working days.</span>
        </div>
      </FormBridge>
    </section>
  )
}

function Transparency() {
  return (
    <section id="transparency" aria-labelledby="transparency-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="transparency-title">Transparency & change notes</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        When we materially change a page, we add an “Updated” line near the top with a short note (e.g., “Prices updated
        for 2025” or “Towpath closed near bridge”). Minor edits (typos, commas) are not usually noted.
      </p>
      <div className="mt-4 card">
        <div className="card-body">
          <div className="text-lg font-semibold">Typical change note</div>
          <p className="mt-2 text-sm text-gray-700">
            <em>Updated 12 Oct 2025:</em> Caroline Street car park pricing and height info; added step-free route from
            Victoria Road to Roberts Park.
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      q: 'Do you remove content upon request?',
      a: 'We correct factual errors. We don’t remove accurate public-interest information. For privacy concerns, contact us and we’ll review sensitively.',
    },
    {
      q: 'Can I submit anonymously?',
      a: 'Yes. You can omit your name. An email helps us verify details, but you may use an address that does not identify you.',
    },
    {
      q: 'How will I know the fix is live?',
      a: 'We’ll reply to confirm. On material updates, you’ll often see an “Updated” note near the top of the page.',
    },
  ]
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faqs-title">Common questions</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((it, i) => (
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              ...[
                {
                  q: 'Do you remove content upon request?',
                  a: 'We correct factual errors. We don’t remove accurate public-interest information. For privacy concerns, contact us and we’ll review sensitively.',
                },
                {
                  q: 'Can I submit anonymously?',
                  a: 'Yes. You can omit your name. An email helps us verify details, but you may use an address that does not identify you.',
                },
                {
                  q: 'How will I know the fix is live?',
                  a: 'We’ll reply to confirm. On material updates, you’ll often see an “Updated” note near the top of the page.',
                },
              ].map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            ],
          }),
        }}
      />
    </section>
  )
}

function CTA() {
  return (
    <section
      aria-label="More about our principles"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">See how we publish</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Our editorial policy explains sourcing, verification and independence commitments.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/legal/editorial-policy" className="btn btn-primary">Editorial policy</Link>
              <Link href="/contact" className="btn btn-outline">Contact editors</Link>
              <Link href="/legal/privacy" className="btn btn-ghost">Privacy</Link>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <div className="text-lg font-semibold">Thank you</div>
              <p className="mt-2 text-gray-700">
                Reader tips and corrections help thousands of visitors. We appreciate your time and care.
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
    name: 'Corrections Policy — Saltaire Guide',
    url: `${base}/legal/corrections`,
    inLanguage: 'en-GB',
    description:
      'How to report errors and how we handle them: triage levels, timelines, transparency notes and version history.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Corrections', item: `${base}/legal/corrections` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    correctionsPolicy: `${base}/legal/corrections`,
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

export default function CorrectionsPolicyPage() {
  return (
    <>
      <Breadcrumbs />
      <Intro />
      <Triage />
      <HowToReport />
      <Transparency />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
