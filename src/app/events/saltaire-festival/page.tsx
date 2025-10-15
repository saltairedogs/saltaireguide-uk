// src/app/events/saltaire-festival/page.tsx
// Saltaire Festival — cornerstone v1 (server-only, static, SEO/E-E-A-T)
// - No client components or handlers; excellent CWV
// - Content is evergreen: explains how the festival typically runs, what to expect, and how to plan
// - Sections: intro, when/where, highlights, typical programme, family-friendly, accessibility,
//   travel & parking, food & drink, maps/orientation, etiquette/safety, volunteering & vendors,
//   FAQs, "plan your day" HowTo, CTAs
// - JSON-LD: WebPage + BreadcrumbList + EventSeries (Festival) + ItemList (highlights) + FAQPage + HowTo
// - Internal linking: /events, /parking, /walks, /food-drink, /salts-mill, /roberts-park, /plan/getting-here

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'Saltaire Festival — dates, what to expect, Roberts Park, music, markets & family tips (local guide, 2025)',
  description:
    'Your practical guide to Saltaire Festival: when it usually runs, where events happen, music & markets, family activities, accessibility, travel & parking — written by locals.',
  alternates: { canonical: `${site.url}/events/saltaire-festival` },
  openGraph: {
    title: 'Saltaire Festival — local, practical guide',
    description:
      'What the Saltaire Festival is like, typical programme highlights, Roberts Park events, markets on Victoria Road, accessibility, travel, parking and tips to plan your day.',
    url: `${site.url}/events/saltaire-festival`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

type Highlight = { title: string; desc: string }
type Venue = { name: string; area: string; blurb: string }
type Tip = { title: string; body: string }

const HIGHLIGHTS: Highlight[] = [
  {
    title: 'Music on the bandstand',
    desc:
      'Live performances across styles in Roberts Park. Bring a blanket and layer up — evenings cool quickly by the river.',
  },
  {
    title: 'Street markets & makers',
    desc:
      'Stalls typically line parts of Victoria Road and around the village on set days, with local producers, crafts and street food.',
  },
  {
    title: 'Family activities',
    desc:
      'Face-painting, storytelling, craft tables, and child-friendly shows tend to pop up across the main weekends.',
  },
  {
    title: 'Exhibitions & heritage',
    desc:
      'Expect open studios, pop-up exhibitions and heritage walks — Saltaire’s history is part of the festival feel.',
  },
  {
    title: 'Food, drink & picnics',
    desc:
      'From park picnics to village cafés and pubs. Many places extend hours at the weekend — queues build at lunchtime.',
  },
]

const KEY_VENUES: Venue[] = [
  {
    name: 'Roberts Park Bandstand',
    area: 'Roberts Park',
    blurb:
      'A hub for music and family activities. Large lawns, play areas and step-free riverside paths.',
  },
  {
    name: 'Victoria Road & Village Streets',
    area: 'UNESCO core',
    blurb:
      'Markets, buskers and pop-ups. Please be considerate in residential streets and follow steward guidance.',
  },
  {
    name: 'Salts Mill',
    area: 'Salts Mill',
    blurb:
      'Art, book & poster shop, cafés and changing displays. A popular rainy-day fallback during the festival.',
  },
]

const FAMILY_TIPS: Tip[] = [
  {
    title: 'Pick your window',
    body:
      'Weekend late mornings and mid-afternoons are the busiest. Early starts or later afternoons are calmer for little legs.',
  },
  {
    title: 'Pack for the park',
    body:
      'Bring a picnic blanket, sunscreen, hats and layers — the riverside can be breezy even on warm days.',
  },
  {
    title: 'Step-free routes',
    body:
      'The footbridge between Roberts Park and Salts Mill side is step-free. Surfaces are mostly smooth with gentle gradients.',
  },
  {
    title: 'Toilets & baby-change',
    body:
      'Public loos are signposted; accessible cubicles are usually available. Expect queues at peak times.',
  },
]

const ACCESS_TIPS: Tip[] = [
  {
    title: 'Approaches & surfaces',
    body:
      'Main routes are step-free; surfaces vary from tarmac to some cobbles on side streets. The park lawns are mostly flat.',
  },
  {
    title: 'Best times for access',
    body:
      'Weekday or early-morning events are quieter; bandstand surroundings fill most at weekend peaks.',
  },
  {
    title: 'Seating',
    body:
      'Fixed benches are around the park and riverside; bring portable seating for longer sets.',
  },
  {
    title: 'Wayfinding & stewards',
    body:
      'Stewards can help with directions and crowd flow. If you need assistance, ask early before crowds build.',
  },
]

const TRAVEL_TIPS: Tip[] = [
  {
    title: 'By train',
    body:
      'Saltaire station is central, with frequent services on the Airedale Line (Leeds/Bradford–Skipton/Ilkley). Trains avoid parking stress on peak days.',
  },
  {
    title: 'By bus',
    body:
      'Local services run along Bingley Road / Saltaire Road; check timetables and diversions before travelling.',
  },
  {
    title: 'By car',
    body:
      'Plan for peak demand. Use our Parking guide for Caroline Street or Exhibition Road and walk in; street bays near the core fill fast.',
  },
  {
    title: 'On foot / wheels',
    body:
      'The canal towpath offers a scenic, mostly level approach from Shipley or Bingley; watch for cyclists on shared paths.',
  },
]

const ETIQUETTE: Tip[] = [
  {
    title: 'Respect residents',
    body:
      'Saltaire is a lived-in village. Keep noise reasonable at late hours, avoid blocking entrances, and take litter home or use bins.',
  },
  {
    title: 'Follow signage',
    body:
      'Road closures, one-way systems and temporary no-parking are common. Always follow stewards and signage for everyone’s safety.',
  },
  {
    title: 'Dogs & leads',
    body:
      'Roberts Park and busy streets require care around crowds — use leads where requested and give space at the bandstand.',
  },
  {
    title: 'Cash & contactless',
    body:
      'Vendors vary. Many accept cards, but small cash for buskers and small purchases helps.',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'When does Saltaire Festival happen?',
    a: 'Dates vary by year, typically in early autumn over multiple days, often spanning two weekends. Check the official channels for this year’s confirmed dates and programme.',
  },
  {
    q: 'Do I need tickets?',
    a: 'Many outdoor events are free; some concerts, workshops, or evening events can be ticketed. Always verify details for individual listings.',
  },
  {
    q: 'Where is everything?',
    a: 'The village core (Victoria Road and surrounding streets), Roberts Park and Salts Mill area are the main hubs. Use our orientation map and venue list below to plan your route.',
  },
  {
    q: 'Is it good for families?',
    a: 'Yes — family activities and music in Roberts Park are popular. Arrive early for quieter space and bring picnic kit.',
  },
  {
    q: 'What about accessibility?',
    a: 'Key approaches are step-free with generally smooth surfaces. Peak crowds make moving slower; mornings offer easier access. See our accessibility section for practical notes.',
  },
  {
    q: 'How crowded does it get?',
    a: 'Weekends, especially mid-day to late afternoon, are the busiest. If you prefer calm, aim for weekday events or off-peak hours.',
  },
]

/* ------------------------------- UI Helpers -------------------------------- */

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
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li>
          <Link href="/events" className="underline underline-offset-4 hover:text-black">Events</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Saltaire Festival</li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Saltaire Festival</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A village-wide celebration with music, markets, art and family activities across Saltaire’s streets,
            Roberts Park and Salts Mill area. This guide stays practical: how it typically runs, where to go, travel and
            accessibility — so you can plan a great day out.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/events" className="btn btn-primary">What’s On</Link>
            <Link href="/parking" className="btn btn-outline">Parking</Link>
            <Link href="/food-drink" className="btn btn-ghost">Eat & drink</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Free outdoor events</li>
            <li className="badge">Family-friendly</li>
            <li className="badge">Step-free routes</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/whats-on.png"
            alt="Crowd gathered by a bandstand in a riverside park"
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
    { href: '#when-where', label: 'When & where' },
    { href: '#highlights', label: 'Highlights' },
    { href: '#programme', label: 'Typical programme' },
    { href: '#family', label: 'Family tips' },
    { href: '#access', label: 'Accessibility' },
    { href: '#travel', label: 'Travel & parking' },
    { href: '#eat', label: 'Food & drink' },
    { href: '#map', label: 'Orientation map' },
    { href: '#etiquette', label: 'Etiquette & safety' },
    { href: '#get-involved', label: 'Vendors & volunteering' },
    { href: '#faqs', label: 'FAQs' },
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

function WhenWhere() {
  return (
    <section id="when-where" aria-labelledby="when-where-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="when-where-title">When & where</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <SmallHeading>Typical timing</SmallHeading>
            <p className="mt-2 text-gray-700">
              The festival usually falls in early autumn across multiple days, often spanning two weekends.
              Exact dates and headliners change annually — treat this page as a practical overview and check official
              listings for the current programme.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Main areas</SmallHeading>
            <ul className="mt-2 grid list-disc gap-1 pl-5 text-gray-700">
              <li><strong>Roberts Park:</strong> bandstand performances, family activities, picnics.</li>
              <li><strong>Victoria Road & village streets:</strong> markets, buskers, pop-ups.</li>
              <li><strong>Salts Mill:</strong> galleries, shops, cafés (great rainy-day fallback).</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Tip: choose a focus for each visit (park music vs. markets vs. galleries). It’s more enjoyable than
          trying to do everything in one go.
        </p>
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="highlights-title">Festival highlights</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Programming changes every year, but these threads come up again and again. If you’re short on time, pick
        two and plan around them.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <div className="card card-hover" key={h.title}>
            <div className="card-body">
              <SmallHeading>{h.title}</SmallHeading>
              <p className="mt-2 text-gray-700">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function TypicalProgramme() {
  const blocks = [
    {
      t: 'Opening weekend',
      points: [
        'Park music sets and family-friendly activities around the bandstand.',
        'Initial market days on or near Victoria Road.',
        'Evening gigs or ticketed events (varies annually).',
      ],
    },
    {
      t: 'Mid-week',
      points: [
        'Quieter exhibitions, talks and heritage walks.',
        'Smaller performances and community events.',
        'Good time for galleries and village exploring.',
      ],
    },
    {
      t: 'Final weekend',
      points: [
        'Busiest markets and park performances.',
        'Family programme peaks — arrive early for space.',
        'Some late-afternoon headline sets (varies by year).',
      ],
    },
  ]

  return (
    <section id="programme" aria-labelledby="prog-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="prog-title">Typical programme flow</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Treat this as a pattern, not a schedule. For the current year, check official listings when they’re released.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {blocks.map((b) => (
          <div key={b.t} className="callout">
            <SmallHeading>{b.t}</SmallHeading>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {b.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="table min-w-[720px]">
          <thead>
            <tr>
              <th>Venue</th>
              <th>Area</th>
              <th>What typically happens</th>
            </tr>
          </thead>
          <tbody>
            {KEY_VENUES.map((v) => (
              <tr key={v.name}>
                <td className="font-medium">{v.name}</td>
                <td>{v.area}</td>
                <td>{v.blurb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Family() {
  return (
    <section id="family" aria-labelledby="family-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="family-title">Family-friendly tips</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {FAMILY_TIPS.map((t) => (
          <div key={t.title} className="card">
            <div className="card-body">
              <SmallHeading>{t.title}</SmallHeading>
              <p className="mt-2 text-gray-700">{t.body}</p>
            </div>
          </div>
        ))}
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Play areas & breaks</SmallHeading>
            <p className="mt-2 text-gray-700">
              Roberts Park has two play areas and big lawns for downtime. Pair a park stint with a short walk over the
              footbridge for cafés or a quiet browse at Salts Mill.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Accessibility() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="access-title">Accessibility notes</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {ACCESS_TIPS.map((t) => (
          <div key={t.title} className="callout">
            <SmallHeading>{t.title}</SmallHeading>
            <p className="mt-2 text-gray-700">{t.body}</p>
          </div>
        ))}
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Step-free loop</SmallHeading>
            <p className="mt-2 text-gray-700">
              A popular step-free loop connects Roberts Park and the Salts Mill side via the footbridge and canal path —
              great for wheels and prams. See our <Link href="/roberts-park" className="underline underline-offset-4">Roberts Park guide</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Travel() {
  return (
    <section id="travel" aria-labelledby="travel-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="travel-title">Travel & parking</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {TRAVEL_TIPS.map((t) => (
          <div key={t.title} className="card">
            <div className="card-body">
              <SmallHeading>{t.title}</SmallHeading>
              <p className="mt-2 text-gray-700">{t.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Planning to drive? Read our <Link href="/parking" className="underline underline-offset-4">Parking guide</Link>{' '}
          for the latest on Caroline Street and Exhibition Road and step-free approaches to the core.
        </p>
      </div>
    </section>
  )
}

function EatDrink() {
  return (
    <section id="eat" aria-labelledby="eat-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="eat-title">Food & drink nearby</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Markets add street food to the mix, but you can also head to village cafés and pubs or Salts Mill’s cafés. For
        a breezy break, picnic in Roberts Park then grab coffee in the village.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        <li><Link className="underline underline-offset-4" href="/food-drink/coffee">Best coffee</Link> in walking distance.</li>
        <li><Link className="underline underline-offset-4" href="/brunch">Brunch options</Link> for late starts.</li>
        <li><Link className="underline underline-offset-4" href="/food-drink/pubs">Pubs & beer gardens</Link> near the park.</li>
        <li><Link className="underline underline-offset-4" href="/food-drink/desserts">Desserts & ice cream</Link> to finish the day.</li>
      </ul>
    </section>
  )
}

function OrientationMap() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Quick orientation</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        This static preview shows how compact the core is — the park, canal and mill sit minutes apart. Use your maps
        app on the day for live directions and road closures.
      </p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/whats-on.png"
          alt="Aerial-style illustration of an urban area, standing in for a simple orientation map"
          width={1600}
          height={900}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">Illustrative preview only — check live maps for the latest diversions.</p>
    </section>
  )
}

function Etiquette() {
  return (
    <section id="etiquette" aria-labelledby="etiquette-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="etiquette-title">Etiquette & safety</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {ETIQUETTE.map((t) => (
          <div key={t.title} className="callout">
            <SmallHeading>{t.title}</SmallHeading>
            <p className="mt-2 text-gray-700">{t.body}</p>
          </div>
        ))}
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Weather plan</SmallHeading>
            <p className="mt-2 text-gray-700">
              Showers blow through quickly in the Aire valley. Pack light rain layers and something dry to sit on.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GetInvolved() {
  return (
    <section id="get-involved" aria-labelledby="involved-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="involved-title">Vendors & volunteering</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <SmallHeading>Trading at the festival</SmallHeading>
            <p className="mt-2 text-gray-700">
              Applications and criteria are managed centrally and change yearly. Prepare product photos, insurance and
              a short pitch. Accessibility of your stall (ramps, card payments) is a plus for visitors.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <SmallHeading>Volunteering</SmallHeading>
            <p className="mt-2 text-gray-700">
              Festivals rely on volunteers for stewarding, set-up and information points. If you can help, look out for
              calls-to-action on official channels in the months before the event.
            </p>
          </div>
        </div>
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

function PlanYourDayCTA() {
  return (
    <section aria-label="Plan your day" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan a perfect festival day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Pick a focus (park music, markets or galleries), add coffee and a short walk, and keep a fallback for rain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/parking" className="btn btn-primary">Parking</Link>
              <Link href="/food-drink" className="btn btn-outline">Eat & drink</Link>
              <Link href="/walks" className="btn btn-ghost">Best walks</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/whats-on.png"
              alt="Train arriving at a platform near a park — easy access by rail"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- JSON-LD ----------------------------------- */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire Festival — local guide',
    url: `${base}/events/saltaire-festival`,
    description:
      'Practical local guide to the Saltaire Festival: typical timings, venues, highlights, family tips, accessibility, travel, and planning advice.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Events', item: `${base}/events` },
      { '@type': 'ListItem', position: 3, name: 'Saltaire Festival', item: `${base}/events/saltaire-festival` },
    ],
  }

  const series = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'Saltaire Festival',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: [
      {
        '@type': 'Place',
        name: 'Roberts Park',
        address: { '@type': 'PostalAddress', addressLocality: 'Saltaire', addressRegion: 'West Yorkshire', addressCountry: 'GB' },
      },
      {
        '@type': 'Place',
        name: 'Saltaire (Victoria Road & village core)',
        address: { '@type': 'PostalAddress', addressLocality: 'Saltaire', addressRegion: 'West Yorkshire', addressCountry: 'GB' },
      },
      {
        '@type': 'Place',
        name: 'Salts Mill',
        address: { '@type': 'PostalAddress', addressLocality: 'Saltaire', addressRegion: 'West Yorkshire', addressCountry: 'GB' },
      },
    ],
    // Dates vary annually; we intentionally avoid specific years for evergreen value.
    eventSchedule: {
      '@type': 'Schedule',
      repeatFrequency: 'P1Y',
      // Example pattern: early autumn
      byMonth: [9],
    },
    description:
      'Village-wide arts, music and community festival across Saltaire, with performances, markets and family-friendly activities.',
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: HIGHLIGHTS.length,
    itemListElement: HIGHLIGHTS.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: h.title,
      description: h.desc,
      url: `${base}/events/saltaire-festival#highlights`,
    })),
  }

  const howto = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Plan a Saltaire Festival day',
    totalTime: 'PT6H',
    step: [
      { '@type': 'HowToStep', text: 'Pick your focus (park music / markets / galleries).' },
      { '@type': 'HowToStep', text: 'Arrive by train if possible, or park at Caroline St / Exhibition Rd.' },
      { '@type': 'HowToStep', text: 'Start early; add coffee or a picnic break.' },
      { '@type': 'HowToStep', text: 'Leave space for a short walk along the canal or in Roberts Park.' },
    ],
    supply: [{ '@type': 'HowToSupply', name: 'Picnic blanket and layers' }],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(series) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function SaltaireFestivalPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <WhenWhere />
      <Highlights />
      <TypicalProgramme />
      <Family />
      <Accessibility />
      <Travel />
      <EatDrink />
      <OrientationMap />
      <Etiquette />
      <GetInvolved />
      <FAQ />
      <PlanYourDayCTA />
      <JsonLd />
    </>
  )
}
