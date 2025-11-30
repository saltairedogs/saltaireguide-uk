// src/app/contact/page.tsx
// Contact — saltaireguide.uk (static, CWV-friendly, SEO/E-E-A-T)
// - No client components; fast static HTML with accessible form
// - Clear reasons to contact, categories, privacy notes, and alternatives
// - JSON-LD: ContactPage + BreadcrumbList + Organization contactPoint + Speakable + FAQPage
// - Internal links to About, Editorial Policy, Corrections, Privacy, Masthead
//
// NOTE: The form posts through FormBridge. You can wire the backend to your email/provider later.

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'
import FormBridge from '@/components/FormBridge'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Contact Saltaire Guide — local tips, corrections, business & media',
  description:
    'Say hello to Saltaire Guide. Share local tips, send corrections, give accessibility feedback, or talk about listing your Saltaire or Shipley business, maps, media and partnerships.',
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: 'Contact Saltaire Guide',
    description:
      'Tips, corrections, accessibility feedback, Saltaire & Shipley business listings, media/permissions and partnerships.',
    url: `${site.url}/contact`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const CATEGORIES = [
  { value: 'tip', label: 'Editorial tip (new place, route update, local info)' },
  { value: 'correction', label: 'Correction (prices, opening hours, accessibility detail)' },
  {
    value: 'business',
    label: 'Local business in Saltaire or Shipley (listing, map, website)',
  },
  {
    value: 'media',
    label: 'Media & permissions (photo use, quotes, interviews)',
  },
  {
    value: 'partnership',
    label: 'Partnerships (events, collabs, community projects)',
  },
  {
    value: 'accessibility',
    label: 'Accessibility feedback (step-free routes, facilities)',
  },
  { value: 'other', label: 'Other' },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'How fast do you reply?',
    a: 'We aim for 1–2 working days. Event weeks or holidays can take a little longer. Corrections that impact visitors’ safety or accessibility are prioritised.',
  },
  {
    q: 'Can I submit a correction anonymously?',
    a: 'Yes. You can leave the name field blank and use a throwaway email—though including an email helps us verify details if needed.',
  },
  {
    q: 'Do you accept sponsored posts?',
    a: 'No. We do not run sponsored posts or paid “reviews”. We consider transparent partnerships that benefit visitors and the local community.',
  },
  {
    q: 'Can I use your photos?',
    a: 'Ask first. Many images are our own; some are licensed stock. We’ll confirm permissions and, where allowed, the attribution required.',
  },
  {
    q: 'Where are you based?',
    a: 'Saltaire & Shipley, West Yorkshire. We walk the routes we recommend and update guides regularly.',
  },
]

/* ------------------------------- UI Helpers -------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="anchor-offset text-2xl font-bold tracking-tight md:text-3xl">
      {children}
    </h2>
  )
}

function Field({
  id,
  label,
  hint,
  required,
  children,
}: {
  id: string
  label: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="label">
        {label}{' '}
        {required ? (
          <span className="text-gray-500" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <p className="hint">{hint}</p> : null}
    </div>
  )
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
          Contact
        </li>
      </ol>
    </nav>
  )
}

function Intro() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Contact Saltaire Guide
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Tips from locals, corrections, accessibility notes, media/permissions and
            Saltaire &amp; Shipley business enquiries all land here. We keep replies
            practical and friendly, and we never sell your data.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Typical reply: 1–2 working days</li>
            <li className="badge">Corrections prioritised</li>
            <li className="badge">Based in Saltaire &amp; Shipley</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Prefer email or WhatsApp?</div>
            <p className="mt-2 text-gray-700">
              Email us at{' '}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>{' '}
              or message{' '}
              <a
                className="underline underline-offset-4"
                href="https://wa.me/447424208127"
                target="_blank"
                rel="noreferrer"
              >
                +44 7424 208127 on WhatsApp
              </a>
              .
            </p>
            <p className="mt-2 text-sm text-gray-600">
              For time-sensitive updates (closures, diversions), add <strong>“URGENT”</strong> to
              the email subject. You can also see our{' '}
              <Link className="underline underline-offset-4" href="/legal/editorial-policy">
                Editorial policy
              </Link>{' '}
              and{' '}
              <Link className="underline underline-offset-4" href="/legal/corrections">
                Corrections
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Reasons() {
  const items = [
    {
      title: 'Editorial tip',
      note: 'New café opening, route changes, closures, step-free improvements.',
    },
    {
      title: 'Correction',
      note: 'Prices, opening hours, surfaces, diversions, accessibility facilities.',
    },
    {
      title: 'Local businesses',
      note: 'If you run a place in Saltaire or Shipley (café, pub, shop, studio), use this page to talk about listings, maps or your website.',
    },
    {
      title: 'Media & permissions',
      note: 'Quote requests, interviews, photo licensing and attribution.',
    },
    {
      title: 'Partnerships',
      note: 'Community projects, events, data sharing and ways we can help more people enjoy this corner of West Yorkshire.',
    },
    {
      title: 'Accessibility feedback',
      note: 'Wheelchair/pram routes, toilets, gradients, cobbles and signage. These are always prioritised.',
    },
  ]
  return (
    <section
      id="reasons"
      aria-labelledby="reasons-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="reasons-title">Why people get in touch</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We aim to keep guides both welcoming and accurate. Your local knowledge helps thousands of
        visitors every month.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-700">{it.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <section
      id="form"
      aria-labelledby="form-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="form-title">Send a message</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use the form below or email{' '}
        <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        . We’ll only use your details to reply to this message. For local businesses in Saltaire or
        Shipley, tell us your business name and website or social links. See our{' '}
        <Link className="underline underline-offset-4" href="/legal/privacy">
          Privacy policy
        </Link>
        .
      </p>

      <FormBridge
        formName="Contact: general"
        className="mt-6 grid gap-5 rounded-2xl border border-gray-200 bg-white p-6 md:p-8"
        noValidate
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field id="name" label="Your name">
            <input id="name" name="name" type="text" className="input" placeholder="Jane Smith" />
          </Field>

          <Field
            id="email"
            label="Email"
            required
            hint="We’ll only use this to reply to your message."
          >
            <input
              id="email"
              name="email"
              type="email"
              className="input"
              inputMode="email"
              placeholder="you@domain.com"
              required
              aria-required="true"
            />
          </Field>
        </div>

        <Field id="category" label="What’s this about?" required>
          <select
            id="category"
            name="category"
            className="select"
            required
            aria-required="true"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a category…
            </option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>

        <Field id="subject" label="Subject" required>
          <input
            id="subject"
            name="subject"
            type="text"
            className="input"
            placeholder="Short summary"
            required
          />
        </Field>

        <Field
          id="message"
          label="Message"
          required
          hint="Include relevant dates, places and links."
        >
          <textarea
            id="message"
            name="message"
            className="textarea"
            minLength={20}
            placeholder="Tell us what we should know…"
            required
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-2">
          <Field id="consent" label="Consent">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4"
                required
                aria-required="true"
              />
              I agree to the processing of my data for the purpose of this enquiry.
            </label>
          </Field>

          <Field id="reply" label="Preferred reply">
            <select id="reply" name="reply" className="select" defaultValue="email">
              <option value="email">Email</option>
              <option value="no-reply">No reply needed (just sharing info)</option>
            </select>
          </Field>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="btn btn-primary" aria-label="Send your message">
            Send message
          </button>
          <a
            href="https://wa.me/447424208127"
            className="btn btn-outline"
            target="_blank"
            rel="noopener"
          >
            WhatsApp instead
          </a>
          <span className="hint">We usually reply within 1–2 working days.</span>
        </div>
      </FormBridge>

      <div className="mt-4 smallprint">
        This form does not subscribe you to any newsletter. For news, see the footer sign-up or{' '}
        <Link className="underline underline-offset-4" href="/events">
          What’s On
        </Link>
        .
      </div>
    </section>
  )
}

function ExtraInfo() {
  return (
    <section
      id="extra"
      aria-labelledby="extra-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="extra-title">Before you send</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        <div className="callout">
          <h3 className="text-lg font-semibold">Corrections & updates</h3>
          <p className="mt-2 text-gray-700">
            If your message is a correction (prices, hours, paths, access), please paste a link or
            photo of signage if you have one. We’ll verify and update quickly—especially for
            accessibility details.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            See our{' '}
            <Link className="underline underline-offset-4" href="/legal/corrections">
              Corrections policy
            </Link>
            .
          </p>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Permissions & media</h3>
          <p className="mt-2 text-gray-700">
            For image use and interviews, tell us the outlet, deadline and the specific
            images/text you’d like to use. We’ll confirm permissions and the attribution required.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Our editorial approach is outlined in the{' '}
            <Link className="underline underline-offset-4" href="/legal/editorial-policy">
              Editorial policy
            </Link>
            .
          </p>
        </div>
        <div className="callout callout-info">
          <h3 className="text-lg font-semibold">Saltaire &amp; Shipley businesses</h3>
          <p className="mt-2 text-gray-700">
            If you&apos;re a local business owner, tell us your business name, address, website or
            Instagram and what you&apos;d like help with (listing on the guide, maps, or your
            website). We&apos;ll reply with next steps.
          </p>
          <p className="mt-2 text-sm text-gray-700">
            This page is the best place to start if you&apos;d like to work with us or with our
            studio at{' '}
            <a
              href="https://alveriano.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              alveriano.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
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

function CTA() {
  return (
    <section
      aria-label="Learn more about us"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Who we are</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              We’re independent and local. No sponsored posts, no fluff—just practical guides with
              original photos and accessibility notes.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/about" className="btn btn-primary">
                About Saltaire Guide
              </Link>
              <Link href="/legal/masthead" className="btn btn-outline">
                Masthead &amp; imprint
              </Link>
              <Link href="/legal/privacy" className="btn btn-ghost">
                Privacy
              </Link>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <div className="text-lg font-semibold">Prefer not to use forms?</div>
              <p className="mt-2 text-gray-700">
                Email{' '}
                <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{' '}
                or message us via the social links on the{' '}
                <Link className="underline underline-offset-4" href="/about">
                  About page
                </Link>
                .
              </p>
              <p className="mt-2 text-sm text-gray-700">
                We’ll never share your details with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD ---------------------------------- */

function JsonLd() {
  const base = site.url

  const page = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Saltaire Guide',
    url: `${base}/contact`,
    description:
      'Send tips, corrections, accessibility feedback, Saltaire & Shipley business enquiries, media/permissions and partnership questions to Saltaire Guide.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#form-title', '#reasons-title'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${base}/contact` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    email: site.email,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs />
      <Intro />
      <Reasons />
      <ContactForm />
      <ExtraInfo />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
