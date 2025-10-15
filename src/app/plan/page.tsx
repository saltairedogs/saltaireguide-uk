// src/app/plan/getting-here/page.tsx
// Getting to Saltaire — cornerstone v1 (static, CWV, SEO/E-E-A-T)
//
// Why this page:
// - High-intent query class (“how to get to Saltaire”, “Saltaire directions”)
// - Covers all transport modes with practical, human tips
// - Strong internal links to Parking, Walks, Salts Mill, Food & Drink, Events
//
// Technical:
// - Server-only (no "use client"), fast static HTML
// - Careful with specifics that change (prices/times) → evergreen phrasing + “check on day” guidance
// - Semantic sections, ToC, tables, callouts, FAQs, and CTAs
// - JSON-LD: WebPage + BreadcrumbList + ItemList (modes) + multiple HowTo + Speakable
//
// E-E-A-T:
// - Local tone, safety notes, accessibility, “what locals actually do” tips
// - Transparent caveats where things change (rail/bus timetables, roadworks, festival days)

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Getting to Saltaire — train, bus, car, bike, walking & airports (local guide, 2025)',
  description:
    'The practical way to get to Saltaire: train times and tips, buses, driving & parking, EV charging, cycling the canal towpath, walking routes, airports, accessibility and festival-day advice.',
  alternates: { canonical: `${site.url}/plan/getting-here` },
  openGraph: {
    title: 'Getting to Saltaire — complete local guide',
    description:
      'All modes covered: train, bus, car & parking, EV charging, cycling the canal, walking in, airports, accessibility and festival-day strategy.',
    url: `${site.url}/plan/getting-here`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

type Mode = { slug: string; name: string; blurb: string; bestFor: string[] }
const MODES: Mode[] = [
  {
    slug: 'train',
    name: 'Train',
    blurb:
      'Fast, stress-free and lands you right in the centre of the village. Our top pick for most visitors.',
    bestFor: ['Best overall', 'Peak weekends', 'Festival days'],
  },
  {
    slug: 'bus',
    name: 'Bus',
    blurb:
      'Useful from nearby towns; good value for short hops. Check live times and diversions on the day.',
    bestFor: ['Budget', 'Local trips'],
  },
  {
    slug: 'car',
    name: 'Car',
    blurb:
      'Convenient with kids or luggage. Pair with our parking guide to avoid fines and busy hotspots.',
    bestFor: ['Families', 'Rainy days', 'Off-peak'],
  },
  {
    slug: 'bike',
    name: 'Bike (canal towpath)',
    blurb:
      'A beautiful, mostly-flat ride along the Leeds & Liverpool Canal. Popular at weekends; ring a bell and share space.',
    bestFor: ['Active visitors', 'Good weather'],
  },
  {
    slug: 'walk',
    name: 'Walk (last mile)',
    blurb:
      'Approach on foot via the canal, from Shipley, Bingley or Baildon. Easy gradients and great views.',
    bestFor: ['Photo-lovers', 'Slow travel'],
  },
  {
    slug: 'air',
    name: 'Airports',
    blurb:
      'Leeds Bradford is the closest, Manchester has more long-haul. Both link easily by rail/bus.',
    bestFor: ['From abroad', 'Long-distance'],
  },
]

const TRAIN_TIPS = [
  'Arrive at Saltaire station — it’s in the middle of the village, a short level walk to Salts Mill.',
  'Buy off-peak/day return where available; mobile tickets are widely accepted.',
  'If you use a railcard, ensure it’s added on purchase and carry it for inspection.',
  'Allow extra time on festival days or if there’s weekend engineering work.',
  'Step-free access is available via ramps/level routes — follow station signage.',
]

const BUS_TIPS = [
  'Check live departures and diversions on the day, especially in poor weather or during events.',
  'Many services accept contactless payment on board.',
  'Stops around the village centre and Victoria Road are most convenient for Salts Mill.',
]

const CAR_TIPS = [
  'Avoid circling the heritage core — streets are narrow and quickly congested.',
  'Use Caroline Street or Exhibition Road car parks as reliable defaults.',
  'On sunny weekends, aim to arrive before 10:30 or after 15:00.',
  'Always read signage: restrictions vary by bay, time and event.',
  'Consider the train instead on festival days.',
]

const EV_TIPS = [
  'Public chargers change frequently — check your preferred map/app on the day.',
  'Bring your own cable and check parking rules while charging.',
  'Never block footways or historic street corners to “nip in”.',
]

const BIKE_TIPS = [
  'Towpath is shared: slow for walkers, dogs and families, especially near bridges.',
  'Surfaces vary (grit/tarmac); lights help in gloomy weather and under bridges.',
  'Lock bikes in well-lit areas; use two locks where possible.',
]

const WALK_TIPS = [
  'From Shipley or Bingley, the canal towpath is flat and scenic — allow extra time for photos.',
  'Footbridges can be busy; be patient and give way where narrow.',
  'After rain, riverside sections can be splashy; waterproof shoes help.',
]

const AIR_TIPS = [
  'Leeds Bradford (LBA) is the closest airport; onward travel is via bus to rail or direct taxi/car.',
  'Manchester Airport (MAN) has frequent direct trains toward Leeds/Bradford with an easy change along the Aire Valley.',
  'If you land late, consider staying near a main station and travelling in the morning.',
]

const MISTAKES = [
  'Driving into the tightest streets around the village core looking for a “secret” space — it rarely ends well.',
  'Assuming Sundays are free everywhere — always check the plate.',
  'Ignoring festival-day traffic management or temporary restrictions.',
  'Cycling fast on the towpath — it’s shared space; slow is smooth.',
  'Leaving travel decisions to the last minute when rail works are scheduled.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What’s the easiest way to get to Saltaire?',
    a: 'The train: it’s quick, lands you in the centre, and avoids parking stress. From the station you’re minutes from Salts Mill and the canal.',
  },
  {
    q: 'Where should I park if I drive?',
    a: 'Caroline Street and Exhibition Road are reliable car parks. Read signage carefully and see our Parking guide for step-free routes and busy times.',
  },
  {
    q: 'How do I get to Salts Mill specifically?',
    a: 'From Saltaire station it’s a short, level walk down Victoria Road. If you’re already parked, follow signs to the mill and the canal.',
  },
  {
    q: 'Is the canal route step-free?',
    a: 'Yes, the towpath is broadly flat with gentle gradients. Surfaces vary from smooth to grit; take care under bridges.',
  },
  {
    q: 'Which airport is best for Saltaire?',
    a: 'Leeds Bradford (closest) or Manchester (more long-haul). Both connect to Saltaire via rail/bus with a simple change on the way.',
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
        <li>
          <Link href="/plan" className="underline underline-offset-4 hover:text-black">
            Plan
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Getting here
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Getting to Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Trains drop you right in the village; buses, bikes and the canal towpath make it easy without a car.
            If you do drive, use our Parking guide to avoid fines and busy hotspots. Here’s the local, practical way to arrive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking" className="btn btn-primary">Parking</Link>
            <Link href="/walks" className="btn btn-outline">Best walks</Link>
            <Link href="/salts-mill" className="btn btn-ghost">Salts Mill</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Step-free routes</li>
            <li className="badge">Festival-day strategy</li>
            <li className="badge">Local & unbiased</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Train approaching a platform near a riverside setting"
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
    { href: '#quick', label: 'Quick picks' },
    { href: '#train', label: 'By train' },
    { href: '#bus', label: 'By bus' },
    { href: '#car', label: 'By car & parking' },
    { href: '#bike', label: 'By bike (canal)' },
    { href: '#walk', label: 'Walk in' },
    { href: '#air', label: 'From airports' },
    { href: '#times', label: 'Typical journey times' },
    { href: '#access', label: 'Accessibility basics' },
    { href: '#mistakes', label: 'Avoid these mistakes' },
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

function QuickPicks() {
  return (
    <section id="quick" aria-labelledby="quick-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="quick-title">Quick picks (locals’ view)</SectionHeading>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {MODES.map((m) => (
          <div key={m.slug} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">
                {m.name}
              </h3>
              <p className="mt-2 text-gray-700">{m.blurb}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                {m.bestFor.map((b) => (
                  <li key={b} className="badge">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Festival or sunny weekend? Train wins. Driving anyway? Read our <Link className="underline underline-offset-4" href="/parking">Parking guide</Link>.
      </p>
    </section>
  )
}

function ByTrain() {
  return (
    <section id="train" aria-labelledby="train-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="train-title">By train — easiest overall</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-gray-700">
            Saltaire has its own railway station on the Airedale Line. Services run throughout the day with extra
            capacity at peaks. From the platforms it’s a short, level walk down Victoria Road to <Link className="underline underline-offset-4" href="/salts-mill">Salts Mill</Link> and the canal.
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            {TRAIN_TIPS.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Engineering works and special events can alter patterns — check live times on the day.
          </p>
          <div className="mt-4">
            <Link href="/walks" className="btn btn-muted btn-sm">Arrive & take a canal stroll</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Local train at a small Yorkshire station"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Tip: travel off-peak when possible for calmer carriages and easier café seats at the mill.
        </p>
      </div>
    </section>
  )
}

function ByBus() {
  return (
    <section id="bus" aria-labelledby="bus-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="bus-title">By bus — handy from nearby towns</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-gray-700">
            Buses connect Saltaire with nearby centres. They’re great value for short hops and a solid backup if rail
            works are in play. Stops near the village core and Victoria Road are most convenient for the mill.
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            {BUS_TIPS.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Allow extra time at school-run peaks and on event days.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Bus arriving at a stone-built village street"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function ByCar() {
  return (
    <section id="car" aria-labelledby="car-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="car-title">By car — then use our Parking guide</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Driving is convenient with kids or luggage, but the village core is tight and fills quickly on sunny weekends.
        Aim for the main car parks and walk in. Always read signs; restrictions vary by bay and event.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Key tips</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {CAR_TIPS.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="mt-3">
            <Link href="/parking" className="btn btn-primary">Open Parking guide</Link>
          </div>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">EV charging</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {EV_TIPS.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="mt-2 text-sm text-gray-700">
            Chargers come and go — verify location, connector and rules in your preferred app before you set off.
          </p>
        </div>
      </div>
      <div className="mt-6 relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
        <Image
          src="/images/plan-your-visit.png"
          alt="Car park with clear signage near stone buildings"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}

function ByBike() {
  return (
    <section id="bike" aria-labelledby="bike-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="bike-title">By bike — canal towpath</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-gray-700">
            The Leeds & Liverpool Canal towpath is a favourite approach: mostly flat, scenic and traffic-free. Surfaces
            vary between bound gravel and tarmac. It’s shared space — ring a bell, slow down for bridges and give way to families.
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            {BIKE_TIPS.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            Lock up in well-lit areas. If you’re new to the routes, start with a shorter segment and build up.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Cyclists riding along a tree-lined canal towpath"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="mt-6">
        <Link href="/walks" className="btn btn-muted">See canal-friendly walk ideas</Link>
      </div>
    </section>
  )
}

function ByWalk() {
  return (
    <section id="walk" aria-labelledby="walk-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="walk-title">Walk in — the slow, scenic way</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Approaching on foot lets the village unfold at your pace. The canal towpath and riverside paths offer an easy
        last mile from Shipley or Bingley with minimal gradient and plenty of photo stops.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        {WALK_TIPS.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p className="mt-3 text-sm text-gray-600">
        For step-free circuits in the village, start with our <Link className="underline underline-offset-4" href="/roberts-park">Roberts Park loop</Link>.
      </p>
    </section>
  )
}

function FromAirports() {
  return (
    <section id="air" aria-labelledby="air-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="air-title">From airports — Leeds Bradford or Manchester</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Leeds Bradford Airport (closest)</h3>
          <p className="mt-2 text-gray-700">
            Shortest distance to Saltaire. Onward travel typically combines a local bus or taxi plus a simple rail leg
            along the Aire Valley. Taxis are convenient if you’re carrying luggage or travelling late.
          </p>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Manchester Airport (more long-haul)</h3>
          <p className="mt-2 text-gray-700">
            Frequent trains toward Leeds/Bradford with an easy change en route to Saltaire. If your flight lands late,
            consider staying near a main station and travelling the next morning.
          </p>
        </div>
      </div>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        {AIR_TIPS.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  )
}

function TypicalTimes() {
  const rows = [
    { from: 'Leeds (train)', approx: '≈ 25–30 min', notes: 'Direct; frequent daytime service.' },
    { from: 'Bradford (train)', approx: '≈ 12–15 min', notes: 'Direct; good for quick visits.' },
    { from: 'Shipley (walk/towpath)', approx: '≈ 25–35 min', notes: 'Flat, scenic canal section.' },
    { from: 'Bingley (train)', approx: '≈ 7–10 min', notes: 'Direct; combine with Five-Rise Locks.' },
    { from: 'Leeds Bradford Airport (mixed)', approx: '≈ 50–75+ min', notes: 'Bus/taxi + rail; timing varies.' },
  ]
  return (
    <section id="times" aria-labelledby="times-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="times-title">Typical journey times</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Treat these as ballpark figures — frequency and engineering works change patterns. Check live information on the day.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[680px]">
          <thead>
            <tr>
              <th>From</th>
              <th>Approx time</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.from}>
                <td className="font-medium">{r.from}</td>
                <td>{r.approx}</td>
                <td>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function AccessibilityBasics() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="access-title">Accessibility basics</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Step-free arrivals</h3>
          <p className="mt-2 text-gray-700">
            Saltaire station has step-free routes. Village streets and the canal towpath are mostly level; occasional
            cobbles and thresholds appear near historic buildings. See our{' '}
            <Link className="underline underline-offset-4" href="/plan#accessibility">
              accessibility notes
            </Link>{' '}
            and the <Link className="underline underline-offset-4" href="/roberts-park">Roberts Park loop</Link> for smoothest paths.
          </p>
        </div>
        <div className="callout callout-success">
          <h3 className="text-lg font-semibold">Families & dogs</h3>
          <p className="mt-2 text-gray-700">
            Pram-friendly and dog-friendly routes are easy to find; keep dogs on leads near wildlife and on busy streets.
            Play areas and loos are signposted in Roberts Park.
          </p>
        </div>
      </div>
    </section>
  )
}

function Mistakes() {
  return (
    <section id="mistakes" aria-labelledby="mistakes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="mistakes-title">Avoid these common mistakes</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Top five</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {MISTAKES.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Do this instead</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Take the train and stroll the canal before coffee at the mill.</li>
              <li>If driving, head straight for Caroline Street or Exhibition Road.</li>
              <li>On festival days, travel early or use rail to skip road closures.</li>
              <li>Share the towpath kindly; slow is smooth and safer for all.</li>
              <li>Check live info the night before and again on the morning.</li>
            </ul>
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

function CTA() {
  return (
    <section aria-label="Build your Saltaire day" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">You’re here — make it great</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Start with Salts Mill, add a canal walk and finish in a local café. Our guides keep it practical and current.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/salts-mill" className="btn btn-primary">Salts Mill</Link>
              <Link href="/walks" className="btn btn-outline">Best walks</Link>
              <Link href="/food-drink" className="btn btn-ghost">Eat & Drink</Link>
              <Link href="/events" className="btn btn-muted">What’s on</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/plan-your-visit.png"
              alt="People arriving happily for a day out"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD ---------------------------------- */

function JsonLd() {
  const base = site.url

  // Overview page schema
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Getting to Saltaire — train, bus, car, bike, walking & airports',
    url: `${base}/plan/getting-here`,
    description:
      'Practical ways to get to Saltaire: train, bus, car & parking, EV charging, bike via canal, walking, airports, accessibility and festival-day tips.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#train-title', '#car-title'],
    },
  }

  // Breadcrumbs
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Plan', item: `${base}/plan` },
      { '@type': 'ListItem', position: 3, name: 'Getting here', item: `${base}/plan/getting-here` },
    ],
  }

  // Modes ItemList
  const modes = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: MODES.length,
    itemListElement: MODES.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.name,
      description: m.blurb,
      url: `${base}/plan/getting-here#${m.slug}`,
    })),
  }

  // HowTo schemas (summarised, evergreen)
  const howToTrain = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by train',
    totalTime: 'PT30M',
    step: [
      { '@type': 'HowToStep', text: 'Travel to Saltaire station on the Airedale Line.' },
      { '@type': 'HowToStep', text: 'Exit and follow Victoria Road to Salts Mill (short, level walk).' },
      { '@type': 'HowToStep', text: 'Check train times and any engineering works on the day.' },
    ],
    supply: [{ '@type': 'HowToSupply', name: 'Valid ticket or contactless' }],
  }

  const howToBus = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by bus',
    totalTime: 'PT40M',
    step: [
      { '@type': 'HowToStep', text: 'Use a local bus toward Saltaire / Victoria Road stops.' },
      { '@type': 'HowToStep', text: 'Pay contactless or show a day ticket if available.' },
      { '@type': 'HowToStep', text: 'Check live departures and diversions on the day.' },
    ],
  }

  const howToCar = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by car',
    totalTime: 'PT45M',
    step: [
      { '@type': 'HowToStep', text: 'Navigate to Saltaire, West Yorkshire (BD18).' },
      { '@type': 'HowToStep', text: 'Head for Caroline Street or Exhibition Road car parks.' },
      { '@type': 'HowToStep', text: 'Read all signage and walk in via level routes.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Parking payment method' }],
  }

  const howToBike = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to cycle to Saltaire on the canal',
    totalTime: 'PT60M',
    step: [
      { '@type': 'HowToStep', text: 'Join the Leeds & Liverpool Canal towpath toward Saltaire.' },
      { '@type': 'HowToStep', text: 'Share space kindly; slow for bridges and families.' },
      { '@type': 'HowToStep', text: 'Lock your bike in a well-lit area on arrival.' },
    ],
    supply: [{ '@type': 'HowToSupply', name: 'Bike lights and bell' }],
  }

  const howToWalk = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to walk into Saltaire',
    totalTime: 'PT35M',
    step: [
      { '@type': 'HowToStep', text: 'Follow the canal towpath from Shipley/Bingley toward Saltaire.' },
      { '@type': 'HowToStep', text: 'Use footbridges to access Salts Mill and Roberts Park.' },
      { '@type': 'HowToStep', text: 'Wear suitable shoes after rain; surfaces can be splashy.' },
    ],
  }

  const howToAir = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to reach Saltaire from the airport',
    totalTime: 'PT90M',
    step: [
      { '@type': 'HowToStep', text: 'From Leeds Bradford: bus/taxi to rail, then train to Saltaire.' },
      { '@type': 'HowToStep', text: 'From Manchester: rail toward Leeds/Bradford with an easy change.' },
      { '@type': 'HowToStep', text: 'If late arrival, consider an overnight near a main station.' },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(modes) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToTrain) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBus) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToCar) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBike) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToWalk) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToAir) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function GettingHerePage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <QuickPicks />
      <ByTrain />
      <ByBus />
      <ByCar />
      <ByBike />
      <ByWalk />
      <FromAirports />
      <TypicalTimes />
      <AccessibilityBasics />
      <Mistakes />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
