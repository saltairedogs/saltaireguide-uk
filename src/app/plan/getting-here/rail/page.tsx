// src/app/plan/getting-here/rail/page.tsx
// Getting here by train — Saltaire (cornerstone subpage v1)
// - Server component, static, CWV-friendly
// - Evergreen guidance (no fragile timetables/prices), internal linking
// - JSON-LD: WebPage + BreadcrumbList + HowTo + FAQPage + Speakable + ItemList (cities)

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Getting to Saltaire by train: simple routes & arrival tips (2025)',
  description:
    'Exactly how to reach Saltaire by train with straightforward arrival notes from Leeds, Bradford and Manchester, plus accessibility pointers and what to do first.',
  alternates: { canonical: `${site.url}/plan/getting-here/rail` },
  openGraph: {
    title: 'Saltaire by train — routes & arrival tips',
    description:
      'Quick route ideas, step-free considerations, what to do on arrival, and links to parking alternatives and short walks.',
    url: `${site.url}/plan/getting-here/rail`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type City = {
  id: string
  city: string
  overview: string
  arrival: string
  notes?: string[]
}

const CITIES: City[] = [
  {
    id: 'leeds',
    city: 'From Leeds',
    overview:
      'Frequent local services toward Shipley/Saltaire via the Airedale corridor. Journeys are short and usually direct.',
    arrival:
      'Follow platform signage for the village core and Victoria Road. From there, Salts Mill and shops are a short walk.',
    notes: ['Busy at commuter peaks; earlier/later trains are calmer.'],
  },
  {
    id: 'bradford',
    city: 'From Bradford',
    overview:
      'Short hop on local trains toward Shipley/Saltaire. Good choice if you’re already in the district.',
    arrival:
      'Wayfinding to Victoria Road is straightforward; the village grid is compact once you reach the spine streets.',
  },
  {
    id: 'manchester',
    city: 'From Manchester',
    overview:
      'Typically change once toward the Airedale line. Still competitive vs. driving on weekends.',
    arrival:
      'After arrival at Saltaire, head for Victoria Road/Salts Mill first, then decide on park or towpath.',
    notes: ['Mind event days; connections can be busier — plan a buffer.'],
  },
]

const ARRIVAL_TIPS = [
  'Start at Salts Mill for orientation and facilities before exploring.',
  'Use Victoria Road as your spine street; landmarks are obvious and distances short.',
  'If step-free matters, follow signed routes and avoid narrow side-street cut-throughs.',
]

const ACCESS_TIPS = [
  'Check current station access arrangements and assistance options in your rail app.',
  'Footbridge/lift arrangements can vary; signage on the day is the source of truth.',
  'Surfaces between station and village are mostly flagstones with occasional crossfall.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is Saltaire station close to the main sights?',
    a: 'Yes. It’s a short, mostly level walk to Victoria Road and Salts Mill, then over the river to Roberts Park.',
  },
  {
    q: 'Is the route step-free?',
    a: 'Broadly yes between the station, Victoria Road and the Mill. Always follow signed step-free routes; arrangements can change.',
  },
  {
    q: 'What should I do first after getting off the train?',
    a: 'Head to Salts Mill to get your bearings, then stroll Victoria Road. If time allows, cross to Roberts Park.',
  },
  {
    q: 'What if trains are disrupted?',
    a: 'Switch to local buses for the last mile or consider a short walk from nearby stops. Our getting-here overview covers alternatives.',
  },
]

/* ------------------------------ UI Components ------------------------------ */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li><Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link></li>
        <span className="sep">›</span>
        <li><Link href="/plan" className="underline underline-offset-4 hover:text-black">Plan</Link></li>
        <span className="sep">›</span>
        <li><Link href="/plan/getting-here" className="underline underline-offset-4 hover:text-black">Getting here</Link></li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">By train</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Getting to Saltaire by train</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Rail is the easiest way in: no parking stress, short walks and clear landmarks. Use these
            simple notes from Leeds, Bradford and Manchester, then start at Salts Mill for a calm orientation.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Rail first</li>
            <li className="badge">Step-light</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Local train arriving at a stone-built platform"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#why-rail', label: 'Why rail works' },
    { href: '#from-cities', label: 'From Leeds/Bradford/Manchester' },
    { href: '#arrival', label: 'Arrival & first steps' },
    { href: '#access', label: 'Accessibility pointers' },
    { href: '#plan-next', label: 'Plan what to do next' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
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

function WhyRail() {
  const pros = ['No parking hassle near the heritage core', 'Short, mostly level walk to sights', 'Predictable journey times vs. road traffic']
  const keepInMind = ['Commuter peaks are busier', 'Station access arrangements can vary', 'Check last trains on late visits']
  return (
    <section id="why-rail" aria-labelledby="why-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="why-title" className="text-2xl font-bold tracking-tight md:text-3xl">Why rail works for Saltaire</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Advantages</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">{pros.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Keep in mind</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">{keepInMind.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

function FromCities() {
  return (
    <section id="from-cities" aria-labelledby="cities-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="cities-title" className="text-2xl font-bold tracking-tight md:text-3xl">From Leeds, Bradford & Manchester</h2>
      <p className="mt-2 max-w-prose text-gray-700">Simple, evergreen guidance. For live times, use your transport app on the day.</p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {CITIES.map((c) => (
          <article key={c.id} className="card card-hover" id={c.id}>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{c.city}</h3>
              <p className="mt-1 text-gray-700">{c.overview}</p>
              <p className="mt-2 text-sm text-gray-700"><strong>Arrival:</strong> {c.arrival}</p>
              {c.notes?.length ? (
                <ul className="mt-2 list-disc pl-5 text-xs text-gray-600">
                  {c.notes.map((n, i) => <li key={`${c.id}-${i}`}>{n}</li>)}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Arrival() {
  return (
    <section id="arrival" aria-labelledby="arrival-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="arrival-title" className="text-2xl font-bold tracking-tight md:text-3xl">Arrival & first steps</h2>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ol className="list-decimal pl-6 text-gray-700">
            {ARRIVAL_TIPS.map((t, i) => <li key={`arr-${i}`} className="mb-2">{t}</li>)}
          </ol>
          <p className="mt-2 text-sm">
            Next: <Link className="underline underline-offset-4" href="/salts-mill">Salts Mill</Link>,{' '}
            <Link className="underline underline-offset-4" href="/walks">walks</Link>,{' '}
            <Link className="underline underline-offset-4" href="/food-drink">food & drink</Link>.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Mill chimney skyline guiding you from the station"
            fill sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function Access() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="access-title" className="text-2xl font-bold tracking-tight md:text-3xl">Accessibility pointers</h2>
      <ul className="mt-2 list-disc pl-5 text-gray-700">{ACCESS_TIPS.map((t) => <li key={t}>{t}</li>)}</ul>
      <p className="mt-3 text-sm">
        See the full <Link className="underline underline-offset-4" href="/plan/accessibility">Accessibility guide</Link>.
      </p>
    </section>
  )
}

function PlanNext() {
  return (
    <section id="plan-next" aria-labelledby="next-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="next-title" className="text-2xl font-bold md:text-3xl">Plan what to do next</h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <li className="rounded-xl border border-gray-200 bg-white p-4">
            <Link href="/parking" className="font-medium underline-offset-4 hover:underline">Driving instead?</Link>
            <p className="mt-1 text-sm text-gray-700">Parking guide with step-free notes and busy times.</p>
          </li>
          <li className="rounded-xl border border-gray-200 bg-white p-4">
            <Link href="/plan/family" className="font-medium underline-offset-4 hover:underline">Family day ideas</Link>
            <p className="mt-1 text-sm text-gray-700">Short itineraries and play spots that work with kids.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick answers</h2>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium"><span className="mr-2 text-gray-400">Q{i+1}.</span>{f.q}</summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
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
    numberOfItems: CITIES.length,
    itemListElement: CITIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.city,
      url: `${base}/plan/getting-here/rail#${c.id}`,
      description: c.overview,
    })),
  }
  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by train',
    description: 'Plan a train journey to Saltaire with a short, mostly level walk on arrival.',
    step: [
      { '@type': 'HowToStep', text: 'Check live trains toward Saltaire/Shipley on the Airedale corridor.' },
      { '@type': 'HowToStep', text: 'Confirm step-free arrangements and assistance if needed.' },
      { '@type': 'HowToStep', text: 'On arrival, follow signs to Victoria Road and Salts Mill.' },
    ],
    totalTime: 'PT30M',
    tool: [{ '@type': 'HowToTool', name: 'Transport app' }],
    supply: [{ '@type': 'HowToSupply', name: 'Ticket/contactless' }],
  }
  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire by train',
    url: `${base}/plan/getting-here/rail`,
    description:
      'Getting to Saltaire by train with simple routing from Leeds, Bradford and Manchester, plus arrival and accessibility tips.',
  }
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Plan', item: `${base}/plan` },
      { '@type': 'ListItem', position: 3, name: 'Getting here', item: `${base}/plan/getting-here` },
      { '@type': 'ListItem', position: 4, name: 'By train', item: `${base}/plan/getting-here/rail` },
    ],
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/plan/getting-here/rail`,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#why-title', '#cities-title', '#faq-title'] },
  }
  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function RailPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <WhyRail />
      <FromCities />
      <Arrival />
      <Access />
      <PlanNext />
      <FAQ />
      <JsonLd />
    </>
  )
}
