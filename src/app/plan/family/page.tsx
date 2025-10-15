// src/app/plan/family/page.tsx
// Family day in Saltaire — kid-friendly routes, play spots, food & practicals (cornerstone v1)
// - Server component only (no client handlers; static for CWV)
// - Strong internal links to Parking, Walks, Food & Drink, Accessibility, Roberts Park, Salts Mill
// - SEO: deep headings, conservative, trustworthy guidance; JSON-LD: WebPage + BreadcrumbList + Speakable + ItemList (itineraries) + FAQPage
// - Uses your Tailwind v4 + globals.css primitives

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Family day in Saltaire: kid-friendly routes, Roberts Park, cafés & practical tips (2025)',
  description:
    'Plan an easy family visit to Saltaire: pram-friendly routes, Roberts Park play areas, kid-approved cafés, toilets & baby-change notes, rainy-day ideas, safety tips and FAQs.',
  alternates: { canonical: `${site.url}/plan/family` },
  openGraph: {
    title:
      'Family day in Saltaire — pram-friendly routes, play areas, cafés & tips',
    description:
      'Local, practical guide for families visiting Saltaire: short itineraries, where to eat, what to pack, and how to avoid busy pinch points.',
    url: `${site.url}/plan/family`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Step = { title: string; detail: string }
type Itinerary = {
  slug: string
  title: string
  duration: string
  pace: 'Relaxed' | 'Standard' | 'Energetic'
  summary: string
  suitableFor: string[]
  steps: Step[]
}

const ITINERARIES: Itinerary[] = [
  {
    slug: 'half-day-classic',
    title: 'Half-day classic (Salts Mill + village + park)',
    duration: '3–4 hours',
    pace: 'Relaxed',
    summary:
      'Easy rhythm for mixed ages. Indoors + outdoors, short distances and food options at sensible intervals.',
    suitableFor: ['Prams', 'Primary-age', 'Grandparents'],
    steps: [
      { title: 'Arrive & park', detail: 'Use Caroline Street or Salts Mill area; always read on-site signs. See the Parking guide for step-free options.' },
      { title: 'Salts Mill browse', detail: 'Bookshop & Hockney spaces are usually a hit; split adults and kids if attention spans differ.' },
      { title: 'Village wander', detail: 'Stroll Victoria Road for architecture and quick snacks. Watch kerbs and side-street junctions.' },
      { title: 'Roberts Park play', detail: 'Head over the river for lawns, bandstand and play spots; pick up drinks near the pavilion areas.' },
    ],
  },
  {
    slug: 'full-day-stretch',
    title: 'Full-day with towpath loop',
    duration: '6–7 hours',
    pace: 'Standard',
    summary:
      'Add a flat, scenic canal stretch (out-and-back) to the classic route. Great for scooters or balance bikes with supervision.',
    suitableFor: ['Confident walkers', 'Scooters', 'Mixed ages'],
    steps: [
      { title: 'Start on the towpath', detail: 'Pick a short section towards Shipley or Bingley. Agree a turnaround time with kids.' },
      { title: 'Village lunch', detail: 'Refuel at a kid-friendly café (see Food section). Indoor/covered seating helps in drizzle.' },
      { title: 'Salts Mill galleries', detail: 'Quiet time post-lunch. Set a meeting point if splitting the group.' },
      { title: 'Park & treats', detail: 'Finish with park time and a treat; save energy for the walk back to the car or station.' },
    ],
  },
  {
    slug: 'rainy-day-light',
    title: 'Rainy-day light (mostly indoors)',
    duration: '2–3 hours',
    pace: 'Relaxed',
    summary:
      'Keep it flexible with short outdoor hops and warm indoor stops. Bring layers and spare socks.',
    suitableFor: ['Toddlers', 'Prams', 'Low-energy day'],
    steps: [
      { title: 'Salts Mill indoors', detail: 'Start inside; rotate adults for a calmer browse while the other keeps kids engaged.' },
      { title: 'Short streets loop', detail: 'Quick look at facades under umbrellas; avoid side-street cobbles where possible.' },
      { title: 'Warm-up stop', detail: 'Hot chocolate or soup at a friendly café; plan a short next step only if everyone’s happy.' },
    ],
  },
]

type Place = {
  id: string
  title: string
  context: string
  tags: string[]
  href?: string // internal link if available
}

const PLAY_SPOTS: Place[] = [
  {
    id: 'roberts-park-lawns',
    title: 'Roberts Park lawns & bandstand area',
    context:
      'Broad, mostly level paths and open grass make easy play space. Great for running, frisbee and picnic blankets in fine weather.',
    tags: ['Level paths', 'Picnic-friendly', 'Pushchair OK'],
    href: '/roberts-park',
  },
  {
    id: 'riverside',
    title: 'Riverside edges (with care)',
    context:
      'Lovely views and ducks; keep close supervision near water and railings, especially in wet or fast-flow conditions.',
    tags: ['Supervision', 'Views', 'Short stop'],
  },
  {
    id: 'towpath',
    title: 'Canal towpath taster',
    context:
      'Flat and scenic for short scooter or balance-bike stints. Shared space — slow down for pedestrians and at bridges.',
    tags: ['Flat', 'Scooters', 'Shared path'],
    href: '/walks',
  },
]

const FOOD_SPOTS: Place[] = [
  {
    id: 'kid-cafes',
    title: 'Kid-friendly cafés',
    context:
      'Look for high chairs, space to manoeuvre prams, and quick-serve options. Many cafés have benches outside in good weather.',
    tags: ['High chairs', 'Table space', 'Quick bites'],
    href: '/food-drink/coffee',
  },
  {
    id: 'parkside',
    title: 'Park-side refreshments',
    context:
      'Useful for five-minute resets between play bursts. Expect busy queues on sunny days; have water/snacks as backup.',
    tags: ['Convenient', 'Busy at peaks', 'Short stops'],
    href: '/food-drink',
  },
  {
    id: 'sunday-lunch',
    title: 'Family pubs & Sunday lunch',
    context:
      'Good for longer sits and warm food; book ahead for groups. Many have quieter corners if you ask.',
    tags: ['Booking helps', 'Warm meals', 'Group-friendly'],
    href: '/food-drink/pubs',
  },
]

const PACK_LIST: string[] = [
  'Water bottles & small snacks',
  'Spare layers; hats/gloves or sun-protection per season',
  'Baby wipes & small first-aid pouch',
  'Portable phone charger for maps/calls',
  'Compact blanket for grass stops',
  'Scooter/balance bike (optional) for towpath stints',
]

const SAFETY_TIPS: string[] = [
  'Agree a meeting point before splitting the group (e.g., bookshop desk, bandstand, café counter).',
  'Hold hands or slow to walking pace at road crossings and bridge pinch points.',
  'Keep scooters at walking speed on shared paths; dismount where space is tight.',
  'Avoid side-street cobbles with tiny wheels — pick parallel paved pavements.',
  'Watch weather changes; stone flags can be slippery with wet leaves.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is Saltaire suitable for prams and pushchairs?',
    a: 'Yes for the main axes — Salts Mill forecourt, Victoria Road pavements and Roberts Park paths are generally manageable. Side streets can have cobbles or kerbs; stick to the broader pavements when possible.',
  },
  {
    q: 'What’s the easiest family route?',
    a: 'The “half-day classic”: Salts Mill browse → village streets → Roberts Park lawns. Short, level and full of stops.',
  },
  {
    q: 'Any busy times to avoid?',
    a: 'Sunny weekends, school holidays and festival days. Arrive before 10:30 or after 15:00 for calmer paths and shorter queues.',
  },
  {
    q: 'Where can we eat with kids?',
    a: 'Try the cafés on/near Victoria Road for quick bites, or family pubs for longer sits. In summer, picnics work well in Roberts Park (take litter home and watch the ducks!).',
  },
  {
    q: 'Are there public toilets and baby-change?',
    a: 'Provision varies by venue and season; follow on-site signage. Major attractions and parks sometimes have facilities available during opening hours.',
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
          Family
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
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Family day in Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Short, step-light routes, open lawns and easy cafés make Saltaire great with kids. Use
            these local tips, itineraries and safety notes to keep everyone smiling — rain or shine.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Pram-friendly</li>
            <li className="badge">Short distances</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/plan-your-visit.png"
            alt="Family walking on a riverside path with trees and stone buildings nearby"
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
    { href: '#quick-planner', label: 'Quick planner' },
    { href: '#play-spots', label: 'Play spots' },
    { href: '#food', label: 'Food & treats' },
    { href: '#walks', label: 'Pram-friendly walks' },
    { href: '#essentials', label: 'What to pack' },
    { href: '#safety', label: 'Safety tips' },
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

function ItineraryCard({ it }: { it: Itinerary }) {
  return (
    <article id={it.slug} className="card card-hover">
      <div className="card-body">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{it.title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge">{it.duration}</span>
            <span className="badge">{it.pace}</span>
          </div>
        </div>
        <p className="mt-1 text-gray-700">{it.summary}</p>
        <p className="mt-2 text-sm text-gray-700">
          <strong>Good for:</strong> {it.suitableFor.join(', ')}
        </p>
        <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3">
          <div className="text-sm font-semibold text-gray-800">Steps</div>
          <ol className="mt-1 list-decimal pl-6 text-sm text-gray-700">
            {it.steps.map((s, i) => (
              <li key={`${it.slug}-s-${i}`}>
                <span className="font-medium">{s.title}.</span> {s.detail}
              </li>
            ))}
          </ol>
          <p className="mt-2 text-xs text-gray-500">
            Mix and match with weather and energy. Keep distances short, add snack stops and use level paths.
          </p>
        </div>
      </div>
    </article>
  )
}

function QuickPlanner() {
  return (
    <section id="quick-planner" aria-labelledby="planner-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="planner-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Quick planner (three easy itineraries)
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Start with one of these and tweak for naps, weather and appetite. Combine with our{' '}
        <Link className="underline underline-offset-4" href="/parking">
          parking guide
        </Link>{' '}
        and{' '}
        <Link className="underline underline-offset-4" href="/plan/accessibility">
          accessibility notes
        </Link>
        .
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {ITINERARIES.map((it) => (
          <ItineraryCard key={it.slug} it={it} />
        ))}
      </div>
    </section>
  )
}

function PlaySpots() {
  return (
    <section id="play-spots" aria-labelledby="play-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="play-title" className="text-2xl font-bold tracking-tight md:text-3xl">Play spots that work with kids</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Keep energy smooth by alternating quiet indoor time with open space. The park and towpath
        are the wins — just slow near water, bridges and busy pinch points.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PLAY_SPOTS.map((p) => (
          <article key={p.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-gray-700">{p.context}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={`${p.id}-${t}`} className="badge">
                    {t}
                  </span>
                ))}
              </div>
              {p.href ? (
                <p className="mt-2 text-sm">
                  <Link className="underline underline-offset-4" href={p.href}>
                    Learn more
                  </Link>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          <strong>Heads up:</strong> stone flags can be slippery when wet; small-wheel scooters may struggle on cobbles. Use the widest paved paths where possible.
        </p>
      </div>
    </section>
  )
}

function FoodAndTreats() {
  return (
    <section id="food" aria-labelledby="food-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="food-title" className="text-2xl font-bold tracking-tight md:text-3xl">Food & treats with kids</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Aim for quick-serve, space to park a pram and a plan-B snack in your bag. For longer meals,
        pubs with quieter corners are kinder to everyone.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {FOOD_SPOTS.map((f) => (
          <article key={f.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-gray-700">{f.context}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span key={`${f.id}-${t}`} className="badge">
                    {t}
                  </span>
                ))}
              </div>
              {f.href ? (
                <p className="mt-2 text-sm">
                  <Link className="underline underline-offset-4" href={f.href}>
                    Explore options
                  </Link>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        See <Link className="underline underline-offset-4" href="/food-drink">Eat & drink</Link>{' '}
        for specific picks, and check <Link className="underline underline-offset-4" href="/events">What’s On</Link>{' '}
        if you’re visiting on a market or festival day.
      </p>
    </section>
  )
}

function PramFriendlyWalks() {
  const links = [
    { label: 'Towpath to Five-Rise (choose a short section)', href: '/walks/five-rise' },
    { label: 'Shipley Glen (pick gentler stretches)', href: '/walks/shipley-glen' },
    { label: 'Roberts Park loop (step-free focus)', href: '/roberts-park/step-free' },
  ]
  return (
    <section id="walks" aria-labelledby="walks-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="walks-title" className="text-2xl font-bold tracking-tight md:text-3xl">Pram-friendly walks</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Stick to level paths and set a simple “out and back” timer with a turnaround point. Avoid
        steep shortcuts and narrow cobbled lanes with tiny wheels.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link className="underline underline-offset-4" href={l.href as any}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Essentials() {
  return (
    <section id="essentials" aria-labelledby="essentials-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="essentials-title" className="text-2xl font-bold tracking-tight md:text-3xl">What to pack</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Family kit</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {PACK_LIST.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Weather & seasons</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Spring: layers and a light waterproof for showers.</li>
              <li>Summer: sun hats, water and picnic blanket; shade near trees in the park.</li>
              <li>Autumn: grippy shoes for wet leaves on stone flags.</li>
              <li>Winter: extra socks and warm layers; keep routes short and paved.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Safety() {
  return (
    <section id="safety" aria-labelledby="safety-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="safety-title" className="text-2xl font-bold tracking-tight md:text-3xl">Safety tips</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Keep it simple</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {SAFETY_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Crowds & pinch points</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Slow for bridges and narrow pavements; take turns to pass.</li>
            <li>Choose quieter parallel streets to bypass busy corners.</li>
            <li>Arrive earlier or later on sunny/holiday days to reduce stress.</li>
          </ul>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        This is general guidance only; always follow on-site signage and staff advice on the day.
      </p>
    </section>
  )
}

function Related() {
  return (
    <section aria-labelledby="related-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="related-title" className="text-2xl font-bold tracking-tight md:text-3xl">Related guides</h2>
      <ul className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/parking" className="font-medium underline-offset-4 hover:underline">
            Parking in Saltaire
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            Best car parks, step-free notes and busy times.
          </p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/plan/accessibility" className="font-medium underline-offset-4 hover:underline">
            Accessibility guide
          </Link>
          <p className="mt-1 text-sm text-gray-700">
            Step-free routes, surfaces and public transport tips.
          </p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/walks" className="font-medium underline-offset-4 hover:underline">
            Walks from Saltaire
          </Link>
          <p className="mt-1 text-sm text-gray-700">Short, level options and family loops.</p>
        </li>
        <li className="rounded-xl border border-gray-200 bg-white p-4">
          <Link href="/food-drink" className="font-medium underline-offset-4 hover:underline">
            Eat &amp; drink
          </Link>
          <p className="mt-1 text-sm text-gray-700">Kid-friendly cafés, pubs and quick bites.</p>
        </li>
      </ul>
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
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: ITINERARIES.length,
    itemListElement: ITINERARIES.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.title,
      url: `${base}/plan/family#${it.slug}`,
      description: `${it.duration}; ${it.pace} pace; good for ${it.suitableFor.join(', ')}`,
      item: {
        '@type': 'CreativeWork',
        headline: it.title,
        text: it.summary,
      },
    })),
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Family day in Saltaire',
    url: `${base}/plan/family`,
    description:
      'Kid-friendly itineraries, play spots, pram-friendly routes, food ideas and practical tips for visiting Saltaire as a family.',
    isPartOf: { '@type': 'WebSite', name: site.name, url: base },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Plan', item: `${base}/plan` },
      { '@type': 'ListItem', position: 3, name: 'Family', item: `${base}/plan/family` },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  const speakable = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${base}/plan/family`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#planner-title', '#play-title', '#food-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function FamilyPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <section aria-label="Intro image and vibe" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/plan-your-visit.png"
              alt="Open lawns and a riverside path suggesting easy family roaming"
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
            />
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Balance indoors and outdoors, keep distances short and stop often — Saltaire rewards a gentle pace.
          </p>
        </div>
      </section>
      <QuickPlanner />
      <PlaySpots />
      <FoodAndTreats />
      <PramFriendlyWalks />
      <Essentials />
      <Safety />
      <Related />
      <FAQ />
      <JsonLd />
    </>
  )
}
