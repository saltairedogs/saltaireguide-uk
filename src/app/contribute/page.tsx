// src/app/contribute/page.tsx
// Contribute — Help improve Saltaire Guide (server-only, static, SEO/E-E-A-T)
// - No client components or JS handlers (excellent CWV)
// - Clear contribution channels: report updates, corrections, photo submissions, author pitches
// - Strong trust signals: review workflow, sourcing policy, privacy, licensing
// - JSON-LD: WebPage + ContactPage + FAQPage + BreadcrumbList
// - Forms post to placeholder endpoints you can wire up later (/api/contribute/*)

import type { Metadata } from 'next'
import Link from 'next/link'
import FormBridge from '@/components/FormBridge'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Contribute to Saltaire Guide — updates, photos, corrections & local tips',
  description:
    'Help keep Saltaire Guide accurate and brilliant. Send updates, corrections, accessibility notes, photos or pitch an article. Transparent review workflow and credit policy.',
  alternates: { canonical: `${site.url}/contribute` },
  openGraph: {
    title: 'Contribute to Saltaire Guide',
    description:
      'Report changes, submit photos, share accessibility info, or pitch a guide. We review every submission and credit contributors.',
    url: `${site.url}/contribute`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Step = { title: string; body: string }
type Tip  = { title: string; body: string }

/* --------------------------------- Data ----------------------------------- */

const WHY_STEPS: Step[] = [
  {
    title: 'Local knowledge beats guesswork',
    body:
      'Opening hours, step-free routes and temporary closures change. Your on-the-ground notes keep the guide genuinely helpful.',
  },
  {
    title: 'Transparency & trust',
    body:
      'We cite sources, date changes and add editor notes for significant updates. You can read how we verify below.',
  },
  {
    title: 'Credit where it’s due',
    body:
      'We acknowledge meaningful contributions on the page and in our changelog. Opt-out if you prefer to remain anonymous.',
  },
]

const REVIEW_STEPS: Step[] = [
  {
    title: 'Triage (within a few days)',
    body:
      'We sanity-check the submission for scope, safety, and whether it’s already covered. You’ll get an email receipt if provided.',
  },
  {
    title: 'Verification',
    body:
      'We confirm with first-party sources where possible (venue websites, on-site signage, council notices) and cross-reference photos.',
  },
  {
    title: 'Edit & publish',
    body:
      'We update the page with clear wording and date stamps. For bigger changes, we add an editor note explaining what changed and why.',
  },
]

const SOURCING_TIPS: Tip[] = [
  { title: 'Prefer first-party info', body: 'Use venue websites, posted signage, and official council/rail sources.' },
  { title: 'Note your visit date', body: 'Timelines matter for things like prices, closures or diversions.' },
  { title: 'Be precise', body: 'Postcodes, bay numbers, step heights, gradient impressions (“gentle”, “steep”), and surface types help.' },
  { title: 'Add context photos', body: 'Wide shots that show approaches/ramps/toilets are more useful than close-ups.' },
]

const LICENCE_POINTS: Tip[] = [
  {
    title: 'You keep your copyright',
    body:
      'By submitting, you grant us a non-exclusive, worldwide licence to publish and adapt your content on Saltaire Guide (and our social channels) with credit unless you opt out.',
  },
  {
    title: 'Attribution',
    body:
      'We typically credit by name (or “local contributor”) and the year. If you need a specific credit line, tell us in the form.',
  },
  {
    title: 'Removal/changes',
    body:
      'If your circumstances change, email us. We’ll remove or amend credited items where practical, preserving factual integrity of pages.',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What kinds of contributions are most valuable?',
    a: 'Verified practical updates (prices, step-free paths, temporary closures), original photos of routes and facilities, corrections to errors, and thoughtful local tips that help visitors.',
  },
  {
    q: 'Do you pay for contributions?',
    a: 'At the moment, contributions are voluntary. We credit meaningful submissions. For commissioned articles/photo essays, pitch us below and we’ll discuss budgets if appropriate.',
  },
  {
    q: 'How are photos used?',
    a: 'We use them to illustrate guides, especially accessibility sections and map callouts. We compress for web performance and add alt text. You keep copyright (see licence).',
  },
  {
    q: 'Will you publish everything I send?',
    a: 'No. We curate for clarity, accuracy, and usefulness. If we pass, it’s not a reflection on you — sometimes items overlap or can’t be verified.',
  },
  {
    q: 'How quickly will updates go live?',
    a: 'We batch edits for quality control. Urgent safety-related changes are prioritised. For typical submissions, expect updates in the next content sprint.',
  },
]

/* ------------------------------ UI Helpers -------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

function SmallHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>
}

/* -------------------------------- Components ------------------------------- */

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
          Contribute
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Contribute to Saltaire Guide</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Locals and regulars make this site great. Share updates, corrections, accessibility notes, or photos —
            we’ll verify, credit you (if you want), and improve guides for everyone.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Verify & cite</li>
            <li className="badge">Transparent edits</li>
            <li className="badge">Fast performance</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Quick links</SmallHeading>
            <ul className="mt-2 grid list-disc gap-1 pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="#update-form">Send an update</a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#photos">Submit photos</a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#pitch">Pitch an article</a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#licensing">Licensing & credit</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

function WhyContribute() {
  return (
    <section id="why" aria-labelledby="why-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="why-title">Why your contribution matters</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire changes in small ways all the time — a ramp gets added, a bridge closes for works, cafés adjust hours.
        Your notes help visitors have a smooth day while keeping the heritage core respected and safe.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {WHY_STEPS.map((s) => (
          <div key={s.title} className="card">
            <div className="card-body">
              <SmallHeading>{s.title}</SmallHeading>
              <p className="mt-2 text-gray-700">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Migrated to Google Apps Script via FormBridge

function UpdateForm() {
  return (
    <section id="update-form" aria-labelledby="update-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="update-title">Send an update or correction</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use this for factual changes (prices, step-free routes, closures, new openings) or to flag mistakes. For general
        feedback use <Link href="/contact" className="underline underline-offset-4">Contact</Link>.
      </p>

      <FormBridge
        formName="Contribute: update"
        className="mt-4 grid gap-4 rounded-2xl border border-gray-200 bg-white p-6"
        noValidate
      >

        <div className="field">
          <label htmlFor="page" className="label">Which page is this about?</label>
          <input id="page" name="page" className="input" required placeholder="/parking or /walks/five-rise" />
          <p className="hint">A URL or page title helps us locate it quickly.</p>
        </div>

        <div className="field">
          <label htmlFor="details" className="label">What changed or needs correction?</label>
          <textarea id="details" name="details" className="textarea" required placeholder="Be specific. Include dates, signs you saw, and any evidence links." />
          <p className="hint">Example: “Caroline St machine now card-only, £1.60/hr (seen 12 Oct 2025)”</p>
        </div>

        <div className="field">
          <label htmlFor="evidence" className="label">Evidence link (optional)</label>
          <input id="evidence" name="evidence" className="input" placeholder="Link to official source, photo album or document" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="field">
            <label htmlFor="name" className="label">Your name (for credit, optional)</label>
            <input id="name" name="name" className="input" placeholder="e.g., Sam B." />
          </div>
          <div className="field">
            <label htmlFor="email" className="label">Email (for follow-up, optional)</label>
            <input id="email" name="email" type="email" className="input" placeholder="you@domain.com" />
            <p className="hint">We only use this to clarify your submission. See privacy below.</p>
          </div>
        </div>

        <div className="field">
          <label htmlFor="credit" className="label">Credit preference</label>
          <select id="credit" name="credit" className="select">
            <option value="credit">Credit me by name (default)</option>
            <option value="anon">No credit (anonymous)</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="date" className="label">When did you observe this?</label>
          <input id="date" name="date" type="date" className="input" />
        </div>

        <button type="submit" className="btn btn-primary">Send update</button>
        <p className="smallprint">By submitting, you confirm the information is to your knowledge accurate and not confidential.</p>
      </FormBridge>
    </section>
  )
}

// Migrated to Google Apps Script via FormBridge

function PhotoSection() {
  return (
    <section id="photos" aria-labelledby="photos-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="photos-title">Submit photos (routes, access & maps especially welcome)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We prioritise original images that help visitors: step-free approaches, ramps, loos, surfaces, bridge gradients,
        and orientation shots. Scenic images of Salts Mill, the canal and Roberts Park are also great.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <SmallHeading>What to include</SmallHeading>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Where it is (closest landmark or coordinates if you have them).</li>
              <li>Date taken and context (e.g., “after heavy rain”).</li>
              <li>Permission statement (you own it; no people in focus without consent).</li>
            </ul>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>How to send</SmallHeading>
            <p className="mt-2 text-gray-700">
              Email <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a> with a link to a shared folder
              (Drive, Dropbox, iCloud) or use the form below (max few files).
            </p>
          </div>
        </div>
      </div>

      <FormBridge
        formName="Contribute: photos"
        className="mt-4 grid gap-4 rounded-2xl border border-gray-200 bg-white p-6"
        noValidate
        encType="multipart/form-data"
      >
        <div className="field">
          <label htmlFor="photo-page" className="label">Which page should these support? (optional)</label>
          <input id="photo-page" name="page" className="input" placeholder="/roberts-park or /plan/accessibility" />
        </div>

        <div className="field">
          <label htmlFor="photo-files" className="label">Upload photos (JPG/PNG)</label>
          <input id="photo-files" name="files" type="file" accept=".jpg,.jpeg,.png" multiple className="input" />
          <p className="hint">If you have many, send a shared folder link by email instead.</p>
        </div>

        <div className="field">
          <label htmlFor="photo-notes" className="label">Notes (location, date, permissions)</label>
          <textarea id="photo-notes" name="notes" className="textarea" placeholder="Where, when, anything to blur/avoid, credit line if desired" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="field">
            <label htmlFor="photo-name" className="label">Your name for credit</label>
            <input id="photo-name" name="name" className="input" placeholder="e.g., Alex R." />
          </div>
          <div className="field">
            <label htmlFor="photo-email" className="label">Email (for follow-up)</label>
            <input id="photo-email" name="email" type="email" className="input" placeholder="you@domain.com" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="photo-credit" className="label">Credit preference</label>
          <select id="photo-credit" name="credit" className="select">
            <option value="credit">Credit me by name</option>
            <option value="anon">No credit (anonymous)</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit photos</button>
        <p className="smallprint">By uploading, you confirm you own the rights and grant us a non-exclusive licence to publish (see “Licensing”).</p>
      </FormBridge>
    </section>
  )
}

// Migrated to Google Apps Script via FormBridge

function PitchSection() {
  return (
    <section id="pitch" aria-labelledby="pitch-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="pitch-title">Pitch an article or local guide</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We commission occasional deep-dives (e.g., canal history, accessibility audits, family itineraries) and photo essays.
        Keep pitches short and specific with a sample paragraph or two.
      </p>

      <FormBridge
        formName="Contribute: pitch"
        className="mt-4 grid gap-4 rounded-2xl border border-gray-200 bg-white p-6"
        noValidate
      >
        <div className="field">
          <label htmlFor="pitch-title" className="label">Proposed title</label>
          <input id="pitch-title" name="title" className="input" placeholder="e.g., A step-free photo guide to Saltaire" required />
        </div>

        <div className="field">
          <label htmlFor="pitch-summary" className="label">Summary</label>
          <textarea id="pitch-summary" name="summary" className="textarea" required placeholder="100–200 words. What’s new or uniquely useful? Who benefits?" />
        </div>

        <div className="field">
          <label htmlFor="pitch-bio" className="label">About you</label>
          <textarea id="pitch-bio" name="bio" className="textarea" placeholder="Local angle, relevant expertise, links to past work (if any)" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="field">
            <label htmlFor="pitch-name" className="label">Name</label>
            <input id="pitch-name" name="name" className="input" required />
          </div>
          <div className="field">
            <label htmlFor="pitch-email" className="label">Email</label>
            <input id="pitch-email" name="email" type="email" className="input" required />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Send pitch</button>
        <p className="smallprint">We’ll reply if it’s a fit or ask follow-ups. Thanks for understanding we can’t take everything.</p>
      </FormBridge>
    </section>
  )
}

function ReviewWorkflow() {
  return (
    <section id="workflow" aria-labelledby="workflow-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="workflow-title">How we review & verify</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Accuracy matters. Here’s our simple workflow from submission to publish.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {REVIEW_STEPS.map((s) => (
          <div key={s.title} className="callout">
            <SmallHeading>{s.title}</SmallHeading>
            <p className="mt-2 text-gray-700">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <SmallHeading>What counts as a “reliable source”?</SmallHeading>
        <ul className="mt-2 list-disc pl-5 text-gray-700">
          <li>Official websites and on-site signage (e.g., car park meters, station notices).</li>
          <li>Council and transport operator announcements.</li>
          <li>First-hand observation with date and context photos.</li>
        </ul>
      </div>
    </section>
  )
}

function SourcingGuidance() {
  return (
    <section id="sourcing" aria-labelledby="sourcing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="sourcing-title">Sourcing & evidence tips</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {SOURCING_TIPS.map((t) => (
          <div key={t.title} className="card">
            <div className="card-body">
              <SmallHeading>{t.title}</SmallHeading>
              <p className="mt-2 text-gray-700">{t.body}</p>
            </div>
          </div>
        ))}
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Accessibility specifics that help</SmallHeading>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Gradient feel (“steep for manual wheelchair”, “gentle ramp”).</li>
              <li>Surface (“smooth tarmac”, “uneven cobbles”, “compact gravel”).</li>
              <li>Toilet access (location, RADAR key, baby-change).</li>
              <li>Pinch points/temporary closures (date and sign text if possible).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Licensing() {
  return (
    <section id="licensing" aria-labelledby="licensing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="licensing-title">Licensing, credit & removals</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We keep licensing simple to encourage contributions while protecting your rights. For commissioned work, we’ll
        agree terms in writing.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {LICENCE_POINTS.map((t) => (
          <div key={t.title} className="card">
            <div className="card-body">
              <SmallHeading>{t.title}</SmallHeading>
              <p className="mt-2 text-gray-700">{t.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-700">
        Questions about rights or takedowns? Email <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Contributor FAQ</SectionHeading>
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
      {/* FAQ JSON-LD for this section only */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
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

function ContactCTA() {
  return (
    <section aria-label="Contact" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Prefer email?</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Send notes, photos or pitches directly to <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
              Include URLs, dates and any credit line you’d like us to use.
            </p>
          </div>
          <div className="callout">
            <SmallHeading>Data & privacy</SmallHeading>
            <p className="mt-2 text-gray-700">
              We use your details only to review the submission and follow up. See our{' '}
              <Link href="/legal/privacy" className="underline underline-offset-4">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Contribute to Saltaire Guide',
    url: `${base}/contribute`,
    description:
      'Share updates, photos and corrections to improve Saltaire Guide. Transparent review workflow, practical sourcing tips and clear licensing.',
  }

  const contact = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contribute',
    url: `${base}/contribute`,
    contactOption: ['TollFree', 'HearingImpairedSupported'],
    availableLanguage: ['en-GB'],
    email: site.email,
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Contribute', item: `${base}/contribute` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contact) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ContributePage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <WhyContribute />
      <UpdateForm />
      <PhotoSection />
      <PitchSection />
      <ReviewWorkflow />
      <SourcingGuidance />
      <Licensing />
      <FAQ />
      <ContactCTA />
      <JsonLd />
    </>
  )
}
