// src/app/events/page.tsx
// What’s On in Saltaire — cornerstone (static, CWV-friendly, SEO-heavy)
// - No client components; server-rendered only
// - Clear groupings: Featured, Upcoming, Markets, Family
// - Internal links to Parking / Walks / Salts Mill
// - JSON-LD: WebPage + BreadcrumbList + ItemList of Event + FAQPage
// - ICS download links are simple text/calendar data URIs (no deps)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'
export const revalidate = 43200

export const metadata: Metadata = {
  title: 'What’s on in Saltaire — festivals, markets, exhibitions & live music (2025)',
  description:
    'The independent roundup of events in Saltaire: Saltaire Festival, markets, exhibitions, family activities and live music. Dates, times, venues and practical tips.',
  alternates: { canonical: `${site.url}/events` },
  openGraph: {
    title: 'What’s on in Saltaire',
    description:
      'Festivals, markets, exhibitions and live music with dates, times and venues — updated by locals.',
    url: `${site.url}/events`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* -------------------------------- Data model ------------------------------- */

type EventItem = {
  id: string
  title: string
  start: string // ISO date-time
  end?: string // ISO
  venue: string
  address?: string
  free: boolean
  priceNote?: string
  category: 'Festival' | 'Market' | 'Exhibition' | 'Music' | 'Family'
  blurb: string
  bookingUrl?: string
  image?: { src: string; alt: string; width: number; height: number }
}

/**
 * Placeholder sample data. Swap with real dates as you confirm them. The structure
 * and JSON-LD stay identical, so Google will understand immediately when updated.
 */
const EVENTS: EventItem[] = [
  {
    id: 'saltaire-festival',
    title: 'Saltaire Festival (village-wide)',
    start: '2025-09-12T10:00:00+01:00',
    end: '2025-09-21T22:00:00+01:00',
    venue: 'Saltaire Village & Roberts Park',
    address: 'Saltaire, West Yorkshire, GB',
    free: true,
    category: 'Festival',
    blurb:
      'Music, markets, food, art and outdoor performances across the village and park. Expect busy weekends and evening events.',
    image: {
      src: '/images/whats-on.png',
      alt: 'Crowd at an outdoor festival with bunting',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'roberts-park-market',
    title: 'Roberts Park Makers Market',
    start: '2025-05-24T10:00:00+01:00',
    end: '2025-05-24T16:00:00+01:00',
    venue: 'Roberts Park bandstand area',
    address: 'Roberts Park, Saltaire, GB',
    free: true,
    category: 'Market',
    blurb:
      'Local makers, food stalls and live acoustic sets by the bandstand. Family-friendly; dogs on leads.',
    image: {
      src: '/images/whats-on.png',
      alt: 'Craft market stalls outdoors',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'hockney-exhibition',
    title: 'Hockney at Salts Mill',
    start: '2025-03-01T10:00:00+00:00',
    venue: 'Salts Mill — Galleries',
    address: 'Victoria Rd, Saltaire, GB',
    free: true,
    category: 'Exhibition',
    blurb:
      'A changing display of David Hockney works inside Salts Mill. Combine with bookshops and a canal stroll.',
    image: {
      src: '/images/whats-on.png',
      alt: 'Salts Mill interior gallery space',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'bandstand-sundays',
    title: 'Bandstand Sundays (summer series)',
    start: '2025-06-08T14:00:00+01:00',
    end: '2025-09-07T16:00:00+01:00',
    venue: 'Roberts Park Bandstand',
    address: 'Roberts Park, Saltaire, GB',
    free: true,
    category: 'Music',
    blurb:
      'Free live music most Sundays through summer. Bring a blanket; Half Moon Café nearby for ice creams and drinks.',
    image: {
      src: '/images/whats-on.png',
      alt: 'Band playing on a bandstand',
      width: 1200,
      height: 800,
    },
  },
  {
    id: 'family-river-safari',
    title: 'Family River Safari',
    start: '2025-07-19T11:00:00+01:00',
    end: '2025-07-19T13:00:00+01:00',
    venue: 'Roberts Park riverside',
    address: 'Roberts Park, Saltaire, GB',
    free: false,
    priceNote: 'Booking required; small fee for equipment',
    category: 'Family',
    blurb:
      'Hands-on session exploring insects and river life with guide support. Suits ages 6–12 with adults.',
    image: {
      src: '/images/whats-on.png',
      alt: 'Kids exploring nature by a river',
      width: 1200,
      height: 800,
    },
  },
]

/* --------------------------------- Helpers -------------------------------- */

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

function fmtDateRange(startISO: string, endISO?: string) {
  const s = new Date(startISO)
  const e = endISO ? new Date(endISO) : undefined
  const sameDay =
    e && s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth() && s.getDate() === e.getDate()

  const day = `${s.getDate()} ${MONTHS[s.getMonth()]} ${s.getFullYear()}`
  const time = s.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  if (!e) return `${day}${time !== '00:00' ? ` · ${time}` : ''}`

  const eDay = `${e.getDate()} ${MONTHS[e.getMonth()]} ${e.getFullYear()}`
  const eTime = e.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

  if (sameDay) {
    return `${day} · ${time}–${eTime}`
  }
  return `${day}${time !== '00:00' ? ` · ${time}` : ''} → ${eDay}${eTime !== '00:00' ? ` · ${eTime}` : ''}`
}

function icsForEvent(ev: EventItem) {
  const dt = (s: string) =>
    new Date(s).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//saltaireguide.uk//events//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${ev.id}@saltaireguide.uk`,
    `DTSTAMP:${dt(ev.start)}`,
    `DTSTART:${dt(ev.start)}`,
    ev.end ? `DTEND:${dt(ev.end)}` : undefined,
    `SUMMARY:${ev.title}`,
    `LOCATION:${ev.venue}`,
    `DESCRIPTION:${ev.blurb} — More: ${site.url}/events`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]
    .filter(Boolean)
    .join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines)}`
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* ------------------------------- Components -------------------------------- */

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
          What’s On
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">What’s on in Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Festivals, markets, exhibitions and live music — plus family-friendly picks in Roberts Park.
            Updated regularly by locals with practical links and tips.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local & up-to-date</li>
            <li className="badge">Free options</li>
            <li className="badge">Family-friendly</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking" className="btn btn-primary">Parking guide</Link>
            <Link href="/walks" className="btn btn-outline">Best walks</Link>
            <Link href="/salts-mill" className="btn btn-ghost">Salts Mill</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/whats-on.png"
            alt="People at an outdoor event in a park"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function PageTOC() {
  const items = [
    { href: '#featured', label: 'Featured' },
    { href: '#upcoming', label: 'Upcoming' },
    { href: '#markets', label: 'Markets' },
    { href: '#family', label: 'Family' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#submit', label: 'Submit an event' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
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

function EventCard({ ev }: { ev: EventItem }) {
  return (
    <article id={ev.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-44 w-full md:h-52">
        {ev.image ? (
          <Image
            alt={ev.image.alt}
            src={ev.image.src}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={ev.id === 'saltaire-festival'}
          />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{ev.title}</h3>
        <p className="mt-2 text-sm text-gray-700">{ev.blurb}</p>
        <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-700">
          <li className="badge">{fmtDateRange(ev.start, ev.end)}</li>
          <li className="badge">{ev.venue}</li>
          <li className="badge">{ev.free ? 'Free' : ev.priceNote ?? 'Paid'}</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="btn btn-primary btn-sm" href={icsForEvent(ev)} download={`${ev.id}.ics`} aria-label={`Add ${ev.title} to calendar`}>
            Add to calendar
          </a>
          {ev.bookingUrl ? (
            <a className="btn btn-outline btn-sm" href={ev.bookingUrl}>
              Booking/info
            </a>
          ) : null}
          <a className="btn btn-ghost btn-sm" href={`#${ev.id}`} aria-label={`Anchor link to ${ev.title}`}>
            Link to event
          </a>
        </div>
      </div>
    </article>
  )
}

function Featured() {
  const featured = EVENTS.filter((e) => e.category === 'Festival' || e.id === 'hockney-exhibition')
  return (
    <section id="featured" aria-labelledby="featured-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="featured-title">Featured</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Big hitters and long-running highlights. Arrive early on sunny weekends and festival dates, or consider the train
        to avoid parking stress.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    </section>
  )
}

function Upcoming() {
  // sort by start date ascending
  const list = [...EVENTS].sort((a, b) => +new Date(a.start) - +new Date(b.start))
  return (
    <section id="upcoming" aria-labelledby="upcoming-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="upcoming-title">Upcoming dates</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Here’s what’s coming up next across the village and park. Looking for coffee or lunch around an event? See{' '}
        <Link className="underline underline-offset-4" href="/food-drink">
          Eat &amp; Drink
        </Link>
        .
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    </section>
  )
}

function Markets() {
  const markets = EVENTS.filter((e) => e.category === 'Market')
  if (!markets.length) return null
  return (
    <section id="markets" aria-labelledby="markets-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="markets-title">Markets</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Makers and food markets pop up through the year — the park bandstand area is a favourite spot.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    </section>
  )
}

function Family() {
  const fam = EVENTS.filter((e) => e.category === 'Family')
  if (!fam.length) return null
  return (
    <section id="family" aria-labelledby="family-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="family-title">Family-friendly</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Easy wins with kids — combine with the{' '}
        <Link className="underline underline-offset-4" href="/walks">
          step-free river loop
        </Link>{' '}
        and a stop at Half Moon Café.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fam.map((ev) => (
          <EventCard key={ev.id} ev={ev} />
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    {
      q: 'Where should I park for big events?',
      a: 'Use Caroline Street or Exhibition Road and walk in; expect queues on festival weekends. Trains to Saltaire station drop you right in the village and are easiest at peak times.',
    },
    {
      q: 'Are events free?',
      a: 'Many park and village events are free to watch. Workshops and some evening gigs may charge — follow the “Booking/info” links where shown.',
    },
    {
      q: 'Is there step-free access?',
      a: 'Main village streets and the park promenades are level; toilets and lifts exist in Salts Mill. Our accessibility and parking guides have maps and tips.',
    },
  ]
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
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
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Where should I park for big events?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Use Caroline Street or Exhibition Road and walk in; expect queues on festival weekends. Trains to Saltaire station drop you right in the village and are easiest at peak times.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are events free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Many park and village events are free to watch. Workshops and some evening gigs may charge — follow the “Booking/info” links where shown.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is there step-free access?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Main village streets and the park promenades are level; toilets and lifts exist in Salts Mill.',
                },
              },
            ],
          }),
        }}
      />
    </section>
  )
}

function SubmitAnEvent() {
  return (
    <section id="submit" aria-labelledby="submit-title" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <SectionHeading id="submit-title">Submit an event</SectionHeading>
            <p className="mt-2 max-w-prose text-gray-700">
              Running something in Saltaire or Roberts Park? Email details (title, date/time, venue, short blurb,
              booking link and a landscape photo) to{' '}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              We prefer original imagery and will prioritise community, charity and cultural events.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/whats-on.png"
              alt="People submitting an event from a laptop"
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
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: EVENTS.length,
    itemListElement: EVENTS.map((ev, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: ev.title,
      url: `${base}/events#${ev.id}`,
      item: {
        '@type': 'Event',
        name: ev.title,
        startDate: ev.start,
        endDate: ev.end ?? undefined,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: {
          '@type': 'Place',
          name: ev.venue,
          address: ev.address
            ? {
                '@type': 'PostalAddress',
                streetAddress: undefined,
                addressLocality: 'Saltaire',
                addressRegion: 'West Yorkshire',
                addressCountry: 'GB',
                postalCode: undefined,
              }
            : undefined,
        },
        isAccessibleForFree: ev.free,
        offers: ev.free
          ? undefined
          : {
              '@type': 'Offer',
              url: ev.bookingUrl ?? `${base}/events#${ev.id}`,
              price: ev.priceNote ?? '0',
              priceCurrency: 'GBP',
              availability: 'https://schema.org/InStock',
            },
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'What’s on in Saltaire',
    url: `${base}/events`,
    description:
      'Roundup of Saltaire events: festivals, markets, exhibitions, music and family activities with dates, venues and tips.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'What’s On', item: `${base}/events` },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <Featured />
      <Upcoming />
      <Markets />
      <Family />
      <FAQ />
      <SubmitAnEvent />
      <JsonLd />
    </>
  )
}
