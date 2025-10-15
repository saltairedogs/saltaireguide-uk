// src/app/legal/privacy/page.tsx
// Privacy Policy — saltaireguide.uk
// - App Router (server component only), static HTML, CWV-friendly
// - Clear E-E-A-T signals (who we are, how to contact, what we collect, why, how long)
// - UK GDPR lawful bases, your rights, cookies, processors, international transfers
// - JSON-LD: PrivacyPolicy + BreadcrumbList + Speakable
// - Strong internal linking to Contact, About, Editorial Policy, Corrections
//
// NOTE: Keep statements accurate. Replace placeholder processor names if/when you add vendors.
//       No client-side cookie banner here; this page documents policy. (We can add a banner later.)

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Privacy Policy — Saltaire Guide',
  description:
    'How Saltaire Guide uses your data: what we collect, why, how long we keep it, cookies, analytics, your rights under UK GDPR, and how to contact us.',
  alternates: { canonical: `${site.url}/legal/privacy` },
  openGraph: {
    title: 'Privacy Policy — Saltaire Guide',
    description:
      'Data use at Saltaire Guide: collection, lawful bases, retention, cookies, analytics, international transfers, and your rights.',
    url: `${site.url}/legal/privacy`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Helpers -------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function SubHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="mt-6 text-lg font-semibold tracking-tight">
      {children}
    </h3>
  )
}

function DataBlock({
  title,
  items,
}: {
  title: string
  items: Array<{ label: string; detail: string }>
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-lg font-semibold">{title}</div>
        <dl className="mt-3 grid gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.label}>
              <dt className="text-sm font-medium text-gray-600">{it.label}</dt>
              <dd className="text-gray-800">{it.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/* --------------------------------- Content -------------------------------- */

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
          Privacy
        </li>
      </ol>
    </nav>
  )
}

function Intro() {
  const reviewed = '2025-10-12' // keep in ISO; update when you revise content
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            We keep data collection to a minimum. This page explains what we collect, why we collect it, how long we
            keep it, how we secure it, and the rights you have under UK GDPR. If anything is unclear,{' '}
            <Link className="underline underline-offset-4" href="/contact">
              contact us
            </Link>
            .
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Controller: {site.name}</li>
            <li className="badge">Jurisdiction: UK GDPR</li>
            <li className="badge">Last reviewed: {reviewed}</li>
          </ul>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Quick links</div>
            <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-gray-700">
              <li>
                <a href="#data-we-collect" className="underline underline-offset-4">
                  What we collect
                </a>
              </li>
              <li>
                <a href="#lawful-bases" className="underline underline-offset-4">
                  Lawful bases
                </a>
              </li>
              <li>
                <a href="#retention" className="underline underline-offset-4">
                  How long we keep data
                </a>
              </li>
              <li>
                <a href="#cookies" className="underline underline-offset-4">
                  Cookies & analytics
                </a>
              </li>
              <li>
                <a href="#your-rights" className="underline underline-offset-4">
                  Your rights
                </a>
              </li>
              <li>
                <a href="#contact" className="underline underline-offset-4">
                  Contact us
                </a>
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              See also:{' '}
              <Link className="underline underline-offset-4" href="/legal/editorial-policy">
                Editorial policy
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/legal/corrections">
                Corrections
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/about">
                About
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function WhoWeAre() {
  return (
    <section id="who-we-are" aria-labelledby="who-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="who-title">Who we are</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        {site.name} (“we”, “us”) operates <strong>{site.domain}</strong>. We’re an independent, local guide to Saltaire.
        For privacy enquiries, email{' '}
        <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <DataBlock
          title="Data controller"
          items={[
            { label: 'Organisation', detail: site.name },
            { label: 'Website', detail: site.url },
            { label: 'Email', detail: site.email },
            { label: 'Jurisdiction', detail: 'United Kingdom (UK GDPR & Data Protection Act 2018)' },
          ]}
        />
        <DataBlock
          title="How to contact us"
          items={[
            {
              label: 'Corrections & accuracy',
              detail:
                'Email subject “Privacy: correction” if a page contains personal data or inaccuracies about you.',
            },
            {
              label: 'Data requests',
              detail:
                'Email subject “Privacy: request” to access, rectify, delete or restrict processing of your data.',
            },
            {
              label: 'Complaints',
              detail:
                'If unresolved, you can complain to the UK ICO. We prefer to resolve issues directly first.',
            },
          ]}
        />
      </div>
    </section>
  )
}

function DataWeCollect() {
  return (
    <section id="data-we-collect" aria-labelledby="collect-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="collect-title">What data we collect (and why)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We collect the minimum needed to run a helpful, safe website. We do <strong>not</strong> sell your data, run
        third-party advertising scripts, or buy personal information from brokers.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[760px]">
          <thead>
            <tr>
              <th>Category</th>
              <th>Examples</th>
              <th>Purpose</th>
              <th>Lawful basis (UK GDPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Contact details (you provide)</td>
              <td>Name, email, message content</td>
              <td>Reply to your query; verify tips/corrections; manage media permissions</td>
              <td>Consent; Legitimate interests (running a responsive local guide)</td>
            </tr>
            <tr>
              <td className="font-medium">Technical logs (automatic)</td>
              <td>IP (truncated/hashed where possible), user-agent, URL, timestamp, error traces</td>
              <td>Security, abuse prevention, debugging, service reliability</td>
              <td>Legitimate interests (security & operations)</td>
            </tr>
            <tr>
              <td className="font-medium">Analytics (aggregated)</td>
              <td>Page views, referrers, device categories, approximate location (city/region)</td>
              <td>Understand what’s useful, fix UX issues, plan content</td>
              <td>Consent where required; otherwise Legitimate interests (low-risk, privacy-respecting analytics)</td>
            </tr>
            <tr>
              <td className="font-medium">Email newsletter (optional)</td>
              <td>Email address, opt-in timestamp</td>
              <td>Send “The Saltaire Weekend” and essential service updates</td>
              <td>Consent (you can unsubscribe anytime)</td>
            </tr>
            <tr>
              <td className="font-medium">User contributions</td>
              <td>Tips, route corrections, photos you send us</td>
              <td>Editorial verification and publication decisions</td>
              <td>Consent; Legitimate interests (publishing a community resource)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <SubHeading>Special category data</SubHeading>
      <p className="text-gray-700">
        We don’t seek special category data (e.g., health, beliefs). If such details are included in your message, we’ll
        delete or redact them unless strictly necessary to handle your request (e.g., accessibility feedback).
      </p>
    </section>
  )
}

function LawfulBases() {
  return (
    <section id="lawful-bases" aria-labelledby="bases-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="bases-title">Our lawful bases</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Under UK GDPR, we rely on a small set of lawful bases appropriate for a content site:
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>
          <strong>Consent</strong> — when you subscribe to email updates or explicitly opt-in to analytics cookies.
        </li>
        <li>
          <strong>Legitimate interests</strong> — operating a secure website, preventing abuse, measuring what content is
          useful in a privacy-respecting way, and responding to messages you send us.
        </li>
        <li>
          <strong>Contract</strong> — if we agree to provide something you request directly (e.g., commissioned content).
        </li>
        <li>
          <strong>Legal obligation</strong> — where we must keep certain records or respond to lawful requests.
        </li>
      </ul>
    </section>
  )
}

function Retention() {
  return (
    <section id="retention" aria-labelledby="retention-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="retention-title">How long we keep data</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We keep data only as long as needed for the purpose collected, then delete or anonymise it.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[760px]">
          <thead>
            <tr>
              <th>Data</th>
              <th>Typical retention</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Contact form & email threads</td>
              <td>Up to 24 months</td>
              <td>So we can follow up on long-running editorial issues; delete earlier on request.</td>
            </tr>
            <tr>
              <td className="font-medium">Server/access logs</td>
              <td>30–90 days</td>
              <td>Security & reliability. Shorter where feasible; longer temporarily for incident review.</td>
            </tr>
            <tr>
              <td className="font-medium">Analytics aggregates</td>
              <td>Up to 26 months</td>
              <td>Trend analysis only; we avoid storing raw IPs where possible.</td>
            </tr>
            <tr>
              <td className="font-medium">Newsletter list</td>
              <td>Until you unsubscribe</td>
              <td>We keep a minimal suppression record so we don’t email you again by mistake.</td>
            </tr>
            <tr>
              <td className="font-medium">User contributions (published)</td>
              <td>As long as published</td>
              <td>We’ll remove or amend on request if appropriate.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Sharing() {
  return (
    <section id="sharing" aria-labelledby="sharing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="sharing-title">Who we share data with</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We share data only with service providers who help us run the site (called “processors”). They must keep your
        data secure and act on our instructions. Typical categories:
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>Hosting & CDN (delivers the site fast and securely)</li>
        <li>Email & newsletter provider (handles contact replies and opt-in emails)</li>
        <li>Analytics provider (privacy-respecting usage stats)</li>
        <li>Error monitoring/logging (keeps the site reliable)</li>
      </ul>
      <p className="mt-3 text-sm text-gray-600">
        We don’t sell your data. If we’re ever legally required to disclose information, we’ll only share what’s
        necessary and will notify you where lawful to do so.
      </p>
    </section>
  )
}

function Cookies() {
  return (
    <section id="cookies" aria-labelledby="cookies-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="cookies-title">Cookies & analytics</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We aim to run with light, privacy-respecting analytics and essential cookies only. If we introduce optional
        analytics or preferences cookies, you’ll see a clear choice.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <div className="text-lg font-semibold">Cookie categories</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <strong>Strictly necessary</strong> — security, load balancing, basic site functions. Always on.
              </li>
              <li>
                <strong>Functional</strong> — saves simple preferences (e.g., text size). Optional.
              </li>
              <li>
                <strong>Analytics</strong> — aggregated usage to improve content. Optional where consent is required.
              </li>
            </ul>
          </div>
        </div>

        <div className="callout">
          <div className="text-lg font-semibold">Your choices</div>
          <p className="mt-2 text-gray-700">
            You can block or delete cookies via your browser settings. If we add an on-site cookie control, you’ll find
            it linked from this page and the footer.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            We don’t use cross-site advertising trackers.
          </p>
        </div>
      </div>
    </section>
  )
}

function TransfersSecurity() {
  return (
    <section id="security" aria-labelledby="security-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="security-title">Security & international transfers</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We use reputable providers with modern security practices (HTTPS, encryption in transit, access controls). Data
        may be processed outside the UK/EEA where providers operate; where that happens, appropriate safeguards (such as
        UK IDTA/EU SCCs) are used.
      </p>
    </section>
  )
}

function YourRights() {
  return (
    <section id="your-rights" aria-labelledby="rights-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="rights-title">Your rights</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Under UK GDPR you can ask us to access, correct, delete or restrict your data; to object to certain processing;
        and to provide a portable copy of data you provided. Where our basis is consent, you can withdraw it at any
        time. We’ll respond within one month where feasible.
      </p>
      <div className="mt-4 card">
        <div className="card-body">
          <ul className="list-disc pl-5 text-gray-700">
            <li>Right of access (copy of your data we hold)</li>
            <li>Right to rectification (fix inaccurate data)</li>
            <li>Right to erasure (“right to be forgotten”)</li>
            <li>Right to restriction (pause certain processing)</li>
            <li>Right to object (e.g., analytics on legitimate interests)</li>
            <li>Right to data portability (copy in a common format)</li>
            <li>Right to withdraw consent (for optional features)</li>
          </ul>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        To exercise rights, email{' '}
        <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        . If unresolved, you can complain to the UK Information Commissioner’s Office (ICO).
      </p>
    </section>
  )
}

function ChildrenPolicy() {
  return (
    <section id="children" aria-labelledby="children-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="children-title">Children</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Our site is aimed at a general audience. We don’t knowingly collect personal data from children under 13. If you
        believe a child has provided personal data, contact us and we’ll delete it.
      </p>
    </section>
  )
}

function ChangesContact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="contact-title">Changes & how to contact us</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We’ll update this policy when our practices change. Significant changes will be highlighted on this page with a
        new review date.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <div className="text-lg font-semibold">Contact</div>
          <p className="mt-2 text-gray-700">
            Email:{' '}
            <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-700">
            For faster handling, include “Privacy” in the subject and tell us what right you wish to exercise.
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Related pages</div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <Link className="underline underline-offset-4" href="/contact">
                  Contact form
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
                <Link className="underline underline-offset-4" href="/about">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD ---------------------------------- */

function JsonLd() {
  const base = site.url
  const reviewed = '2025-10-12'

  const policy = {
    '@context': 'https://schema.org',
    '@type': 'PrivacyPolicy',
    name: 'Privacy Policy — Saltaire Guide',
    url: `${base}/legal/privacy`,
    inLanguage: 'en-GB',
    datePublished: reviewed,
    dateModified: reviewed,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      email: site.email,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#collect-title', '#cookies-title'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Privacy', item: `${base}/legal/privacy` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(policy) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs />
      <Intro />
      <WhoWeAre />
      <DataWeCollect />
      <LawfulBases />
      <Retention />
      <Sharing />
      <Cookies />
      <TransfersSecurity />
      <YourRights />
      <ChildrenPolicy />
      <ChangesContact />
      <JsonLd />
    </>
  )
}
