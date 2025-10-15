// src/app/food-drink/ice-cream/page.tsx
// Ice Cream in Saltaire — calm, practical guide (cornerstone v1)
// - Server component (no client handlers), static HTML for CWV
// - Evergreen, venue-agnostic guidance; invite updates via /contact
// - Strong internal links to /food-drink, /food-drink/bakeries, /food-drink/coffee,
//   /plan/family, /plan/accessibility, /walks, /events
// - On-page ToC; accessible markup; print-friendly via globals.css
// - JSON-LD: WebPage + BreadcrumbList + ItemList (styles & tips) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Ice cream in Saltaire (2025): best styles, cones vs tubs, dairy-free, kids tips & melt-proof routes',
  description:
    'Local, practical ice-cream guide to Saltaire: gelato vs soft-serve vs scoops, cones vs tubs, dairy-free/vegan, kids & dogs, queue windows, and stroll pairings by the canal and Roberts Park.',
  alternates: { canonical: `${site.url}/food-drink/ice-cream` },
  openGraph: {
    title: 'Ice cream in Saltaire — styles, dietary tips & calm strolls',
    description:
      'Pick the right style (gelato/soft/scoop), manage melts, choose tubs for prams, and pair with short, shady routes.',
    url: `${site.url}/food-drink/ice-cream`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12' // update when you refresh copy

type Style = {
  id: string
  name: string
  texture: 'dense' | 'airy' | 'creamy' | 'icy'
  bestFor: string
  melts: 'slow' | 'medium' | 'fast'
  dairyFree: 'possible' | 'common' | 'rare'
  notes: string
}

const STYLES: Style[] = [
  {
    id: 'gelato',
    name: 'Gelato',
    texture: 'dense',
    bestFor: 'Intense flavour, smaller portions, slower strolls',
    melts: 'medium',
    dairyFree: 'possible',
    notes:
      'Lower overrun (less air) and slightly warmer serve than scooped ice-cream makes flavours pop; sorbetti handle dairy-free.',
  },
  {
    id: 'soft-serve',
    name: 'Soft-serve',
    texture: 'airy',
    bestFor: 'Kids, quick cones, sprinkles/sauce, immediate eat',
    melts: 'fast',
    dairyFree: 'rare',
    notes:
      'Light and swirlable; melts quickly in sun or wind. Best eaten in place or with a very short walk.',
  },
  {
    id: 'scoops',
    name: 'Scooped ice-cream',
    texture: 'creamy',
    bestFor: 'Classic cones/tubs, slower melts, flavour variety',
    melts: 'medium',
    dairyFree: 'possible',
    notes:
      'Broad flavour range (classics + seasonal). Tubs reduce drips for prams or multi-tasking.',
  },
  {
    id: 'sorbet',
    name: 'Sorbet',
    texture: 'icy',
    bestFor: 'Dairy-free fruit brightness, palate cleansers',
    melts: 'fast',
    dairyFree: 'common',
    notes:
      'Naturally dairy-free, often vegan; quicker to drip in warm weather — tubs with spoons travel best.',
  },
  {
    id: 'vegan',
    name: 'Vegan/alt-milk',
    texture: 'creamy',
    bestFor: 'Dairy-free richness (oat/coconut/almond bases)',
    melts: 'medium',
    dairyFree: 'common',
    notes:
      'Ask about shared scoops and cones (egg/milk traces). Tubs avoid cone allergens and reduce cross-contact.',
  },
]

type Tip = { id: string; title: string; bullets: string[] }

const MELT_TIPS: Tip = {
  id: 'melt-management',
  title: 'Melt management (save the shirt, save the pram)',
  bullets: [
    'Pick tubs over cones for prams, maps or photography days.',
    'Stand in shade for the first minute: surface refreeze reduces early drips.',
    'Napkin under the tub; second napkin for hands.',
    'Share two small tubs instead of a tall double cone in wind.',
  ],
}

const QUEUE_TIPS: Tip = {
  id: 'queues',
  title: 'Queues & calm timing',
  bullets: [
    'Sunny weekends: peaks 13:00–16:00, especially after Salts Mill and park events.',
    'Early afternoon shoulder (12:00–13:00) is calmer; evenings depend on weather.',
    'Split roles: one finds a shady bench while the other orders.',
    'Carry a tote for empties; bins can fill on event days.',
  ],
}

const FAMILY_TIPS: Tip = {
  id: 'family',
  title: 'With kids & prams',
  bullets: [
    'Choose tubs and short spoons; less spillage on cobbles.',
    'Seat on walls/benches away from steps and cycle routes.',
    'Keep wipes and water handy; bright toppings attract bees — move gently if they visit.',
    'Allergens: ask about egg in cones, nut traces in toppings.',
  ],
}

const DOG_TIPS: Tip = {
  id: 'dogs',
  title: 'With dogs',
  bullets: [
    'Short lead near queues; avoid tangling around benches.',
    'Some places offer dog-safe treats; avoid chocolate/xylitol.',
    'Pick cool, shaded spots near the park; carry water.',
  ],
}

const PAIRINGS = [
  {
    title: 'Canal towpath (short shady leg)',
    text: 'Pick tubs, walk a few minutes along tree cover, sit on the quieter side away from bridges.',
    link: '/walks/five-rise',
  },
  {
    title: 'Roberts Park loop',
    text: 'Shaded lawns and riverside views; keep to bins and dog-on-lead zones near play areas.',
    link: '/walks/dog-friendly',
  },
  {
    title: 'After Salts Mill',
    text: 'Browse first, then a single scoop before a gentle stroll back to the station.',
    link: '/salts-mill',
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Cones or tubs for the canal?',
    a: 'Tubs. They drip less, stack in prams, and keep hands free for towpath rails and photos.',
  },
  {
    q: 'Best options for dairy-free or vegan?',
    a: 'Sorbet is naturally dairy-free; many places carry alt-milk ice-creams. Ask about shared scoops and cones to reduce cross-contact.',
  },
  {
    q: 'When are queues worst?',
    a: 'Sunny weekends 13:00–16:00 and after events. Aim for earlier or later shoulders, or split roles to find shade while you wait.',
  },
  {
    q: 'Family tips?',
    a: 'Tubs, short spoons, wipes and a shady bench. Avoid steps and cycle routes; keep prams clear of queues.',
  },
  {
    q: 'Can I bring dogs?',
    a: 'Yes in outdoor areas; keep short leads near crowds. Some places offer dog-safe treats — avoid chocolate/xylitol.',
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
          <Link href="/food-drink" className="underline underline-offset-4 hover:text-black">
            Food &amp; Drink
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Ice cream
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
          <h1 id="intro-title" className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Ice cream in Saltaire: styles, tubs & shaded strolls
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Choose gelato, soft-serve or classic scoops, manage melts like a pro, and pair your
            treat with calm routes by the canal or Roberts Park.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Dairy-free options</li>
            <li className="badge">Family &amp; dogs</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Hand holding an ice cream with the sun behind stone buildings"
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
    { href: '#styles', label: 'Styles explained' },
    { href: '#cones-vs-tubs', label: 'Cones vs tubs' },
    { href: '#melt-management', label: 'Melt management' },
    { href: '#family-dogs', label: 'Family & dogs' },
    { href: '#pairings', label: 'Stroll pairings' },
    { href: '#seasonal', label: 'Seasonal notes' },
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

function StylesSection() {
  return (
    <section id="styles" aria-labelledby="styles-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="styles-title" className="text-2xl font-bold tracking-tight md:text-3xl">Styles explained</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Texture, melt speed and dietary options vary. Pick the style that fits your route and group.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {STYLES.map((s) => (
          <article key={s.id} id={s.id} className="card card-hover">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="badge capitalize">{s.texture}</span>
              </div>
              <p className="mt-1 text-gray-700">{s.notes}</p>
              <ul className="mt-2 text-sm text-gray-700">
                <li>
                  <strong>Best for:</strong> {s.bestFor}
                </li>
                <li>
                  <strong>Melt speed:</strong> {s.melts}
                </li>
                <li>
                  <strong>Dairy-free:</strong> {s.dairyFree}
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ConesVsTubs() {
  return (
    <section id="cones-vs-tubs" aria-labelledby="cvt-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="cvt-title" className="text-2xl font-bold md:text-3xl">Cones vs tubs</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Cones</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Fun, photogenic, great for immediate eating.</li>
              <li>Drip risk on warm/windy days — especially soft-serve.</li>
              <li>Check egg/dairy in cones if you have allergies.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Tubs</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Best for prams, benches and step-free strolls.</li>
              <li>Lower drip risk; lids handy if you need to pause.</li>
              <li>Reduce cone allergens and cross-contact worries.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TipsSection({ tip }: { tip: Tip }) {
  return (
    <section id={tip.id} aria-labelledby={`${tip.id}-title`} className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id={`${tip.id}-title`} className="text-2xl font-bold tracking-tight md:text-3xl">
        {tip.title}
      </h2>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <ul className="list-disc pl-5 text-gray-700">
          {tip.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Pairings() {
  return (
    <section id="pairings" aria-labelledby="pairings-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pairings-title" className="text-2xl font-bold tracking-tight md:text-3xl">Stroll pairings</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick short, shaded legs for summer and calmer benches a few minutes from bridges.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        {PAIRINGS.map((p) => (
          <article key={p.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-gray-700">{p.text}</p>
              <p className="mt-2 text-sm">
                Route:{' '}
                <Link className="underline underline-offset-4" href={p.link as any}>
                  open guide
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Seasonal() {
  return (
    <section id="seasonal" aria-labelledby="seasonal-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="seasonal-title" className="text-2xl font-bold md:text-3xl">Seasonal notes</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              <li>Summer: tubs + shade; carry water; benches fill after 14:00.</li>
              <li>Autumn: wind accelerates drips; keep lids handy and choose thicker scoops.</li>
              <li>Winter: shorter hours; consider hot drinks from the{' '}
                <Link className="underline underline-offset-4" href="/food-drink/coffee">
                  coffee guide
                </Link>
                .
              </li>
              <li>Spring: festivals spike queues — check{' '}
                <Link className="underline underline-offset-4" href="/events">
                  what’s on
                </Link>
                .
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Simple orientation graphic of canal, village and Roberts Park"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Make a sweet Saltaire hour of it" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Make it a sweet Saltaire hour</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
            <li>
              <Link className="underline underline-offset-4" href="/food-drink/bakeries">
                Bakeries (pastries to pair)
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/food-drink/coffee">
                Coffee guide (hot/cold drinks)
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/walks/shipley-glen">
                Shipley Glen walk
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/salts-mill">
                Salts Mill browse
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/plan/family">
                Family planning tips
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <p className="text-gray-700">
            Operate a local spot or have a tip? Share dairy-free options, quiet benches and shaded
            routes via our{' '}
            <Link className="underline underline-offset-4" href="/contact">
              contact page
            </Link>
            . We verify and add helpful updates.
          </p>
        </div>
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
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Menus and policies change. Treat this as local guidance and follow staff instructions.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemListStyles = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ice-cream styles in Saltaire',
    numberOfItems: STYLES.length,
    itemListElement: STYLES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${base}/food-drink/ice-cream#${s.id}`,
      description: `Texture: ${s.texture}. Best for: ${s.bestFor}. Melt: ${s.melts}. Dairy-free: ${s.dairyFree}. ${s.notes}`,
    })),
  }

  const itemListTips = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Melt & queue tips',
    numberOfItems: MELT_TIPS.bullets.length + QUEUE_TIPS.bullets.length,
    itemListElement: [...MELT_TIPS.bullets, ...QUEUE_TIPS.bullets].map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t,
      url: `${base}/food-drink/ice-cream#${i < MELT_TIPS.bullets.length ? MELT_TIPS.id : QUEUE_TIPS.id}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to enjoy ice cream in Saltaire without the mess',
    description:
      'Choose the right style, pick tubs for prams/steps, find shade and pair with short routes.',
    step: [
      { '@type': 'HowToStep', text: 'Pick a style that suits your plan: soft-serve for quick cones, scoops/gelato for flavour, sorbet for dairy-free.' },
      { '@type': 'HowToStep', text: 'Choose tubs if using prams or walking steps; bring napkins and water.' },
      { '@type': 'HowToStep', text: 'Find shade for the first minute to reduce early drips.' },
      { '@type': 'HowToStep', text: 'Pick short, shaded legs along canal or park and dispose of packaging responsibly.' },
    ],
    totalTime: 'PT30M',
    tool: [{ '@type': 'HowToTool', name: 'Napkins' }],
    supply: [{ '@type': 'HowToSupply', name: 'Lidded tub (optional)' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ice cream in Saltaire — styles, dietary tips & calm strolls',
    url: `${base}/food-drink/ice-cream`,
    description:
      'Practical ice-cream guide to Saltaire: styles, cones vs tubs, dairy-free/vegan, kids & dogs, queues and shaded stroll pairings.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Ice cream', item: `${base}/food-drink/ice-cream` },
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
    url: `${base}/food-drink/ice-cream`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro-title', '#styles-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStyles) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListTips) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function IceCreamPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <StylesSection />
      <ConesVsTubs />
      <TipsSection tip={MELT_TIPS} />
      <TipsSection tip={QUEUE_TIPS} />
      <section id="family-dogs" aria-labelledby="fd-title" className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="fd-title" className="text-2xl font-bold tracking-tight md:text-3xl">Family & dogs</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">With kids & prams</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {FAMILY_TIPS.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              For step-free paths and nearby facilities, see{' '}
              <Link className="underline underline-offset-4" href="/plan/accessibility">
                accessibility
              </Link>{' '}
              and{' '}
              <Link className="underline underline-offset-4" href="/plan/family">
                family tips
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">With dogs</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {DOG_TIPS.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              More pet-friendly ideas in{' '}
              <Link className="underline underline-offset-4" href="/walks/dog-friendly">
                dog-friendly walks
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <Pairings />
      <Seasonal />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
