// src/app/plan/getting-here/page.tsx
// Getting to Saltaire — train, bus & car (cornerstone v1)
// - Server component only (no client handlers; static for CWV)
// - Strong internal links (Parking, Accessibility, Walks, Food & Drink, History)
// - Conservative/evergreen copy (no fragile timetables); encourages on-the-day checks
// - SEO: structured sections + JSON-LD (WebPage, BreadcrumbList, ItemList, HowTo per mode, Speakable, FAQPage)
// - Tailwind v4 + your globals.css primitives; no shadcn, no plugins

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Getting to Saltaire: train, bus, car — simple routes & local tips (2025)',
  description:
    'Exactly how to get to Saltaire by train, bus or car, with simple route notes from Leeds, Bradford and Manchester. Includes parking, step-free pointers and FAQs.',
  alternates: { canonical: `${site.url}/plan/getting-here` },
  openGraph: {
    title: 'Getting to Saltaire — train, bus & car (local guide)',
    description:
      'Quick route notes from Leeds, Bradford and Manchester. Parking, step-free tips, and what to do first when you arrive.',
    url: `${site.url}/plan/getting-here`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2026-01-05'

type LinkRef = { label: string; href: string }
type Mode = {
  slug: string
  title: string
  summary: string
  bestFor: string[]
  pros: string[]
  cons: string[]
  arrival: string
  links: LinkRef[]
}

const MODES: Mode[] = [
  {
    slug: 'train',
    title: 'By train (recommended)',
    summary:
      'Frequent local services stop at Saltaire station, a short walk from the model village and Salts Mill.',
    bestFor: ['Day trips', 'Avoiding parking', 'Step-light visits'],
    pros: ['Fast from Leeds/Bradford', 'No parking stress', 'Short walk to the village core'],
    cons: [
      'Occasional crowding at peaks',
      'Station access/footbridge arrangements can vary — check on the day',
    ],
    arrival:
      'From the platforms, follow local signage toward Victoria Road for Salts Mill and the village streets.',
    links: [
      { label: 'Plan your visit (Accessibility)', href: '/plan/accessibility' },
      { label: 'What to do first', href: '/salts-mill' },
      { label: 'Short walks', href: '/walks' },
    ],
  },
  {
    slug: 'bus',
    title: 'By bus',
    summary:
      'Regular local buses run through Saltaire/Shipley; handy if you’re nearby or combining with train.',
    bestFor: ['Local visitors', 'Flexible budgets', 'Backup to rail'],
    pros: ['Stops close to the village', 'No car required', 'Good value with day tickets'],
    cons: ['Traffic variability at peaks', 'Less step-free certainty than rail'],
    arrival:
      'Alight near Victoria Road for the quickest access to the core streets and Salts Mill approach.',
    links: [
      { label: 'Eat & drink nearby', href: '/food-drink' },
      { label: 'Roberts Park', href: '/roberts-park' },
      { label: 'Accessibility tips', href: '/plan/accessibility' },
    ],
  },
  {
    slug: 'car',
    title: 'By car',
    summary:
      'Driving is straightforward but spaces are limited at busy times. Use the main car parks and avoid narrow terraces.',
    bestFor: ['Families with gear', 'Off-peak weekdays', 'Rainy-day flexibility'],
    pros: [
      'Door-to-door convenience',
      'Easy to carry picnic/kit',
      'Good for multi-stop days in Wharfedale/Airedale',
    ],
    cons: [
      'Parking fills on sunny weekends/festivals',
      'Restrictions and enforcement in residential streets',
    ],
    arrival:
      'Target Caroline Street or Exhibition Road car parks for a reliable all-round option; read every sign before leaving the vehicle.',
    links: [
      { label: 'Parking guide (prices, maps & tips)', href: '/parking' },
      { label: 'Plan — accessibility', href: '/plan/accessibility' },
      { label: 'Family day ideas', href: '/plan/family' },
    ],
  },
]

type CityRoute = {
  id: string
  city: string
  rail: string
  bus: string
  car: string
  notes?: string[]
}

const CITY_ROUTES: CityRoute[] = [
  {
    id: 'from-leeds',
    city: 'From Leeds',
    rail:
      'Local trains towards Skipton typically call at Saltaire. For Ilkley, you\'ll usually need to change at Shipley. Check live boards and step-free arrangements.',
    bus:
      'Buses via Kirkstall/Shipley corridors reach Saltaire; choose services that stop near Victoria Road.',
    car:
      'Via A65 or A657 depending on start point. Allow extra time at peaks; follow signs toward Saltaire/Shipley and use main car parks.',
    notes: ['Rail is usually the easiest at busy times.', 'Avoid cutting through narrow terraces by car.'],
  },
  {
    id: 'from-bradford',
    city: 'From Bradford',
    rail:
      'Frequent local trains run toward Saltaire/Shipley on the Airedale line. Short hop with level walking to the village core.',
    bus:
      'Several routes serve the Saltaire/Shipley area. Alight close to Victoria Road for quickest access.',
    car:
      'Follow A650/A6037 toward Shipley/Saltaire. Expect queues near junctions at school-run and sunny weekends.',
    notes: ['Consider park-once then walk; streets are tight near the core.'],
  },
  {
    id: 'from-manchester',
    city: 'From Manchester',
    rail:
      'Trains to Leeds/Bradford with a change for the Airedale line toward Saltaire. Check connection times; total journey is still convenient.',
    bus:
      'Longer and less direct; rail is generally faster. Use bus for last-mile from nearby towns.',
    car:
      'M62/M606/A6177 corridors toward Bradford/Shipley/Saltaire. Add contingency for motorway works or weekend traffic.',
    notes: ['Rail is typically calmer; driving can be fine off-peak if you plan parking.'],
  },
]

const ARRIVAL_TIPS: string[] = [
  'If you’re new, start at Salts Mill: clear signage, food options, and an easy hop to village streets.',
  'For a calm half day: Mill → Victoria Road → Roberts Park lawns (step-light).',
  'On busy festival days, rail can beat the car for overall stress/time.',
  'If driving, arrive before 10:30 or after 15:00 on sunny weekends.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is rail the best way to reach Saltaire?',
    a: 'For most visitors, yes: local trains are frequent, quick and avoid parking pressure. It’s a short walk from the station to the village core.',
  },
  {
    q: 'Where should I park if I drive?',
    a: 'Use the main public car parks (Caroline Street or Exhibition Road) and always read on-site signs. Residential streets are tight with varied restrictions.',
  },
  {
    q: 'Is there step-free access?',
    a: 'There are broadly level routes between Salts Mill, Victoria Road and Roberts Park. Station/bridge arrangements can vary — check on the day and see our Accessibility guide.',
  },
  {
    q: 'What should I see first?',
    a: 'Start at Salts Mill for orientation, then stroll Victoria Road and cross to Roberts Park if time allows.',
  },
  {
    q: 'When is it busiest?',
    a: 'Sunny weekends, school holidays and festival days. Travel earlier/later or choose rail to avoid parking stress.',
  },
]

/* ------------------------------ UI Components ------------------------------ */

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

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Getting to Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Rail is easiest, the bus is handy locally, and the car works if you plan parking. Use
            these simple notes from Leeds, Bradford and Manchester — then start at Salts Mill for a
            calm orientation.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Rail first</li>
            <li className="badge">Parking tips inside</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Train arriving at a stone-built station platform"
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
    { href: '#modes', label: 'Best ways to arrive' },
    { href: '#from-cities', label: 'From Leeds, Bradford & Manchester' },
    { href: '#arrival', label: 'What to do first' },
    { href: '#parking', label: 'Parking pointers' },
    { href: '#access', label: 'Step-free & accessibility' },
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

function ModeCard({ m }: { m: Mode }) {
  return (
    <article id={m.slug} className="card card-hover">
      <div className="card-body">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{m.title}</h3>
          <div className="flex flex-wrap gap-2">
            {m.bestFor.map((b) => (
              <span key={`${m.slug}-${b}`} className="badge">
                {b}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-1 text-gray-700">{m.summary}</p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-3">
            <div className="text-sm font-semibold text-gray-800">Why it’s good</div>
            <ul className="mt-1 list-disc pl-5 text-sm text-gray-700">
              {m.pros.map((p, i) => (
                <li key={`pro-${m.slug}-${i}`}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-3">
            <div className="text-sm font-semibold text-gray-800">Keep in mind</div>
            <ul className="mt-1 list-disc pl-5 text-sm text-gray-700">
              {m.cons.map((c, i) => (
                <li key={`con-${m.slug}-${i}`}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          <strong>Arrival:</strong> {m.arrival}
        </p>
        {!!m.links.length && (
          <p className="mt-2 text-sm">
            Plan next:{" "}
            {m.links.map((l, i) => (
              <span key={`${m.slug}-l-${i}`}>
                <Link className="underline underline-offset-4" href={l.href as any}>
                  {l.label}
                </Link>
                {i < m.links.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        )}
      </div>
    </article>
  )
}

function ModesSection() {
  return (
    <section id="modes" aria-labelledby="modes-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="modes-title" className="text-2xl font-bold tracking-tight md:text-3xl">Best ways to arrive</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        We recommend rail for most visits. Bus is useful for local hops. The car works well if you
        plan parking and avoid narrow terraces.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {MODES.map((m) => (
          <ModeCard key={m.slug} m={m} />
        ))}
      </div>
    </section>
  )
}

function CityCard({ c }: { c: CityRoute }) {
  return (
    <article id={c.id} className="card card-hover">
      <div className="card-body">
        <h3 className="text-lg font-semibold">{c.city}</h3>
        <div className="mt-2 grid gap-3">
          <p className="text-sm text-gray-700">
            <strong>Rail:</strong> {c.rail}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Bus:</strong> {c.bus}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Car:</strong> {c.car}
          </p>
        </div>
        {c.notes?.length ? (
          <ul className="mt-2 list-disc pl-5 text-xs text-gray-600">
            {c.notes.map((n, i) => (
              <li key={`${c.id}-n-${i}`}>{n}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

function FromCities() {
  return (
    <section id="from-cities" aria-labelledby="cities-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="cities-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        From Leeds, Bradford & Manchester
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        These are simple, evergreen notes. For live times, check your transport app on the day.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {CITY_ROUTES.map((c) => (
          <CityCard key={c.id} c={c} />
        ))}
      </div>
    </section>
  )
}

function ArrivalFirst() {
  return (
    <section id="arrival" aria-labelledby="arrival-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="arrival-title" className="text-2xl font-bold tracking-tight md:text-3xl">What to do first</h2>
      <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Start at Salts Mill</h3>
          <p className="mt-1 text-gray-700">
            It’s the easiest landmark: clear wayfinding, indoor spaces, cafés and loos. From here,
            the village streets and the park are short, mostly level walks.
          </p>
          <p className="mt-2 text-sm">
            Next steps:{" "}
            <Link className="underline underline-offset-4" href="/salts-mill">
              Salts Mill guide
            </Link>
            ,{" "}
            <Link className="underline underline-offset-4" href="/history">
              History hub
            </Link>
            ,{" "}
            <Link className="underline underline-offset-4" href="/walks">
              short walks
            </Link>
            .
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Tall mill chimney rising over stone buildings"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <ul className="mt-4 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        {ARRIVAL_TIPS.map((t, i) => (
          <li key={`tip-${i}`}>{t}</li>
        ))}
      </ul>
    </section>
  )
}

function ParkingPointers() {
  return (
    <section id="parking" aria-labelledby="parking-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 id="parking-title" className="text-2xl font-bold md:text-3xl">Parking pointers</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Use the main public car parks and always read the meter plates and bay markings.
              Restrictions change — signage on the day is the source of truth.
            </p>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Caroline Street: reliable, straightforward walk to the village.</li>
              <li>Exhibition Road: good overflow option at peak times.</li>
              <li>Avoid tight residential terraces and junction corners.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/parking" className="btn btn-primary">
                Full parking guide
              </Link>
              <Link href="/plan/accessibility" className="btn btn-outline">
                Step-free notes
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/plan-your-visit.png"
              alt="Car park sign near historic buildings"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Accessibility() {
  return (
    <section id="access" aria-labelledby="access-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="access-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Step-free & accessibility
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Broadly level routes connect Salts Mill, Victoria Road and Roberts Park. Surfaces vary:
        expect stone flags and occasional cobbles on side streets.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        <li>Check station access arrangements and use signed step-free paths.</li>
        <li>Favour the widest pavements and avoid narrow cut-throughs.</li>
        <li>After rain, watch for slippery flags and puddles near park edges.</li>
      </ul>
      <p className="mt-3 text-sm">
        See:{" "}
        <Link className="underline underline-offset-4" href="/plan/accessibility">
          Accessibility guide
        </Link>
        .
      </p>
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
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        We avoid exact timetables/prices here — always check live info on the day.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: MODES.length,
    itemListElement: MODES.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.title,
      url: `${base}/plan/getting-here#${m.slug}`,
      description: m.summary,
    })),
  }

  const howToTrain = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by train',
    description:
      'Plan a simple train journey to Saltaire with a short, mostly level walk on arrival.',
    step: [
      { '@type': 'HowToStep', text: 'Check live trains toward Saltaire/Shipley on the Airedale line.' },
      { '@type': 'HowToStep', text: 'Confirm step-free arrangements at your origin and at Saltaire station.' },
      { '@type': 'HowToStep', text: 'On arrival, follow signage to Victoria Road for Salts Mill and village streets.' },
    ],
    totalTime: 'PT30M',
    supply: [{ '@type': 'HowToSupply', name: 'Contactless or rail ticket' }],
    tool: [{ '@type': 'HowToTool', name: 'Transport app for live info' }],
  }

  const howToBus = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by bus',
    description:
      'Use a local bus service stopping near Victoria Road for direct access to the village core.',
    step: [
      { '@type': 'HowToStep', text: 'Check local routes that stop near Saltaire/Victoria Road.' },
      { '@type': 'HowToStep', text: 'Allow for peak-time traffic; consider an earlier bus.' },
      { '@type': 'HowToStep', text: 'Alight near Victoria Road and walk a few minutes into the core.' },
    ],
    totalTime: 'PT45M',
    supply: [{ '@type': 'HowToSupply', name: 'Day ticket or contactless fare' }],
  }

  const howToCar = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get to Saltaire by car',
    description:
      'Drive in via signed approaches and use the main public car parks to avoid narrow terraces.',
    step: [
      { '@type': 'HowToStep', text: 'Navigate toward Saltaire/Shipley via signed A-roads.' },
      { '@type': 'HowToStep', text: 'Head for Caroline Street or Exhibition Road public car parks.' },
      { '@type': 'HowToStep', text: 'Read every sign; avoid tight residential bays and corners.' },
    ],
    totalTime: 'PT60M',
    tool: [{ '@type': 'HowToTool', name: 'Sat-nav with traffic' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Getting to Saltaire',
    url: `${base}/plan/getting-here`,
    description:
      'How to reach Saltaire by train, bus or car, with simple route notes from Leeds, Bradford and Manchester, plus parking and accessibility tips.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Plan', item: `${base}/plan` },
      { '@type': 'ListItem', position: 3, name: 'Getting here', item: `${base}/plan/getting-here` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/plan/getting-here`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#modes-title', '#cities-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToTrain) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBus) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToCar) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function GettingHerePage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <ModesSection />
      <FromCities />
      <ArrivalFirst />
      <ParkingPointers />
      <Accessibility />
      <FAQ />
      <JsonLd />
    </>
  )
}
