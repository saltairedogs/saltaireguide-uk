// src/app/events/page.tsx
// What’s On in Saltaire & Shipley — hub (static, SEO-heavy, low-maintenance)
//
// - No client components; fully server-rendered
// - Focus on: regular highlights + very clear “submit an event” CTAs
// - WhatsApp deep link + simple event-tip form (FormBridge)
// - JSON-LD: WebPage + BreadcrumbList + ItemList of key event series + FAQPage
// - Internal links to Parking / Walks / Food & Drink / Salts Mill

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'
import FormBridge from '@/components/FormBridge'

export const dynamic = 'error'
export const revalidate = 43200

export const metadata: Metadata = {
  title: 'What’s on in Saltaire & Shipley — events, markets, exhibitions & live music (2025)',
  description:
    'Independent guide to what’s on in Saltaire & Shipley: Saltaire Festival, Christmas events, park music, markets and more — plus an easy way to submit your own event.',
  alternates: { canonical: `${site.url}/events` },
  openGraph: {
    title: 'What’s on in Saltaire & Shipley',
    description:
      'Festivals, markets, exhibitions and live music around Saltaire & Shipley — and a simple way to share your own event with Saltaire Guide.',
    url: `${site.url}/events`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Highlight = {
  id: string
  title: string
  category: 'Festival' | 'Christmas' | 'Market' | 'Music' | 'Family'
  blurb: string
  href: string
}

/* ------------------------------- Data ------------------------------------- */

const WHATSAPP_DM_LINK =
  'https://wa.me/447424208127?text=Hi%20Saltaire%20Guide%2C%20I%27d%20like%20to%20share%20an%20event%20for%20the%20website%3A%20[date]%20[time]%20[venue]%20[short%20details]%20[link]'

const HIGHLIGHTS: Highlight[] = [
  {
    id: 'saltaire-festival',
    title: 'Saltaire Festival',
    category: 'Festival',
    blurb:
      'Big annual festival with music, markets, food and art spread across the village and Roberts Park. Usually held in early autumn.',
    href: '/events/saltaire-festival',
  },
  {
    id: 'saltaire-christmas',
    title: 'Christmas in Saltaire',
    category: 'Christmas',
    blurb:
      'Lights, pop-up markets and cosy evenings around the village and Salts Mill. Expect busy weekends and lots of families.',
    href: '/saltaire-christmas',
  },
  {
    id: 'bandstand-music',
    title: 'Roberts Park bandstand music',
    category: 'Music',
    blurb:
      'Free live music on selected weekends through the warmer months. Bring a blanket and pick up drinks from Half Moon Café.',
    href: '/roberts-park',
  },
  {
    id: 'makers-markets',
    title: 'Local makers & food markets',
    category: 'Market',
    blurb:
      'Occasional artisan and food markets in Roberts Park and around the village — keep an eye on organisers’ socials for exact dates.',
    href: '/shops',
  },
]

/* ------------------------------ UI helpers -------------------------------- */

function SectionHeading({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset"
    >
      {children}
    </h2>
  )
}

/* ------------------------------- Components -------------------------------- */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 py-3 text-sm text-gray-600"
    >
      <ol className="breadcrumbs">
        <li>
          <Link
            className="underline underline-offset-4 hover:text-black"
            href="/"
          >
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          What’s On
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            What’s on in Saltaire &amp; Shipley
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Festivals, markets, exhibitions and live music in and around
            Saltaire &amp; Shipley — plus an easy way to tell us about your own
            event. We highlight the things that make it worth the trip.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Independent &amp; local</li>
            <li className="badge">Good for visitors &amp; locals</li>
            <li className="badge">Simple event submissions</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking" className="btn btn-primary">
              Parking guide
            </Link>
            <Link href="/walks" className="btn btn-outline">
              Walks &amp; routes
            </Link>
            <Link href="/food-drink" className="btn btn-ghost">
              Cafés &amp; pubs
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/whats-on.png"
            alt="People at an outdoor event near Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function Highlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-title"
      className="container mx-auto max-w-7xl px-4 py-10 md:py-14"
    >
      <SectionHeading id="highlights-title">
        Regular highlights &amp; big days
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These are the things people most often travel in for. Exact dates
        change each year, so always double-check with organisers before you set
        off, especially in bad weather.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <article
            key={h.id}
            className="card card-hover h-full border border-gray-200 bg-white"
          >
            <div className="card-body">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                {h.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{h.blurb}</p>
              <div className="mt-3">
                <Link
                  href={h.href}
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SubmitEvent() {
  return (
    <section
      id="submit"
      aria-labelledby="submit-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <SectionHeading id="submit-title">
              Share an event with Saltaire Guide
            </SectionHeading>
            <p className="mt-2 max-w-prose text-gray-700">
              Running something in Saltaire, Shipley or Roberts Park? We
              highlight a small number of local events that are helpful for
              visitors and people who live nearby.
            </p>
            <p className="mt-2 max-w-prose text-gray-700">
              The quickest way is to send us a message on WhatsApp with the
              basics: date, time, venue, short description and a link.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_DM_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Share an event on WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=Event%20for%20Saltaire%20Guide`}
                className="btn btn-outline"
              >
                Or email the details
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              We prioritise community, charity and cultural events over purely
              commercial promos. Submitting doesn’t guarantee a listing.
            </p>
          </div>

          {/* Simple form that lands in your FormBridge inbox */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
            <h3 className="text-lg font-semibold">
              Prefer a quick form instead?
            </h3>
            <p className="mt-1 text-sm text-gray-700">
              Fill this in and we&apos;ll review it alongside other submissions.
              Keep it short and factual.
            </p>
            <FormBridge
              formName="Event tip"
              className="mt-4 grid gap-4"
              noValidate
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="field">
                  <label htmlFor="organiser" className="label">
                    Your name / organisation
                  </label>
                  <input
                    id="organiser"
                    name="organiser"
                    type="text"
                    className="input"
                    placeholder="Saltaire Community Group"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email" className="label">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    inputMode="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="event_name" className="label">
                  Event name
                </label>
                <input
                  id="event_name"
                  name="event_name"
                  type="text"
                  className="input"
                  placeholder="Saltaire Summer Craft Market"
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="field">
                  <label htmlFor="event_date" className="label">
                    Date &amp; time
                  </label>
                  <input
                    id="event_date"
                    name="event_date"
                    type="text"
                    className="input"
                    placeholder="Sat 15 June, 10am–4pm"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="field">
                  <label htmlFor="venue" className="label">
                    Venue
                  </label>
                  <input
                    id="venue"
                    name="venue"
                    type="text"
                    className="input"
                    placeholder="Roberts Park, bandstand area"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="link" className="label">
                  Link or social handle
                </label>
                <input
                  id="link"
                  name="link"
                  type="text"
                  className="input"
                  placeholder="https://instagram.com/yourevent"
                />
              </div>

              <div className="field">
                <label htmlFor="details" className="label">
                  Short details
                </label>
                <textarea
                  id="details"
                  name="details"
                  className="textarea"
                  placeholder="Tell us what it is, who it’s for and anything important (tickets, accessibility, weather-dependent, etc.)"
                  minLength={20}
                  required
                  aria-required="true"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn btn-primary">
                  Send event tip
                </button>
                <span className="hint">
                  We usually reply or update the page within a few days if it&apos;s
                  a good fit.
                </span>
              </div>
            </FormBridge>
            <p className="mt-3 text-[11px] text-gray-500">
              We&apos;ll only use your details to follow up about this event. This
              form doesn&apos;t subscribe you to any newsletter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlanYourDay() {
  return (
    <section
      aria-labelledby="plan-title"
      className="container mx-auto max-w-7xl px-4 py-10 md:py-14"
    >
      <SectionHeading id="plan-title">Plan your day around it</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Coming in for a gig, market or festival? These guides help with the
        practical bits so you can actually enjoy it instead of worrying about
        parking or where to eat.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/parking" className="card card-hover">
          <div className="card-body">
            <h3 className="text-sm font-semibold">Parking in Saltaire</h3>
            <p className="mt-1 text-xs text-gray-700">
              Car parks, prices and where to avoid tickets on busy days.
            </p>
          </div>
        </Link>
        <Link href="/walks" className="card card-hover">
          <div className="card-body">
            <h3 className="text-sm font-semibold">Walks &amp; routes</h3>
            <p className="mt-1 text-xs text-gray-700">
              Easy river loops and canal walks to fill the gaps between shows.
            </p>
          </div>
        </Link>
        <Link href="/food-drink" className="card card-hover">
          <div className="card-body">
            <h3 className="text-sm font-semibold">Cafés, pubs &amp; food</h3>
            <p className="mt-1 text-xs text-gray-700">
              Where locals actually go for coffee, pints and Sunday lunch.
            </p>
          </div>
        </Link>
        <Link href="/salts-mill" className="card card-hover">
          <div className="card-body">
            <h3 className="text-sm font-semibold">Salts Mill</h3>
            <p className="mt-1 text-xs text-gray-700">
              Art, bookshops and views if you want something quieter.
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'How often do you update event listings?',
      a: 'We add and refresh highlights when organisers or locals send us accurate details. We don’t guarantee a full list of everything happening, but we try to keep the main “big” events useful and up to date.',
    },
    {
      q: 'Is this an official events calendar?',
      a: 'No. Saltaire Guide is independent. Always double-check dates and times with the event organiser before travelling, especially in bad weather.',
    },
    {
      q: 'Can I pay to be featured?',
      a: 'No. We don’t sell placements in the events guide. We may occasionally work on clearly-labelled partnerships that are genuinely useful to visitors.',
    },
    {
      q: 'Do you list events outside Saltaire & Shipley?',
      a: 'We focus on Saltaire, Shipley and very close surroundings that people would reasonably travel to from here on foot, by bus or by train.',
    },
  ]

  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10 md:py-14"
    >
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: HIGHLIGHTS.length,
    itemListElement: HIGHLIGHTS.map((h, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: h.title,
      url: `${base}${h.href}`,
      item: {
        '@type': 'EventSeries',
        name: h.title,
        eventSchedule: {
          '@type': 'Schedule',
          repeatFrequency: 'https://schema.org/Annual',
        },
        location: {
          '@type': 'Place',
          name: 'Saltaire & Shipley',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Saltaire',
            addressRegion: 'West Yorkshire',
            addressCountry: 'GB',
          },
        },
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'What’s on in Saltaire & Shipley',
    url: `${base}/events`,
    description:
      'Independent guide to events in Saltaire & Shipley, plus an easy way to submit your own event to Saltaire Guide.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'What’s On',
        item: `${base}/events`,
      },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <Highlights />
      <SubmitEvent />
      <PlanYourDay />
      <FAQ />
      <JsonLd />
    </>
  )
}
