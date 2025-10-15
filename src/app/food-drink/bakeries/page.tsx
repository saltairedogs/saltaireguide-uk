// src/app/food-drink/bakeries/page.tsx
// Bakeries in Saltaire — calm, practical guide (cornerstone v1)
// - Server component (no client handlers), static rendering for CWV
// - Evergreen, venue-agnostic guidance; invite local updates via /contact
// - Strong internal links to /food-drink, /food-drink/coffee, /plan/family, /walks, /events
// - On-page ToC; accessible, print-friendly via globals.css utilities
// - JSON-LD: WebPage + BreadcrumbList + ItemList (breads & pastries) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Best bakeries in Saltaire (2025): sourdough, pastries, kid-friendly picks & picnic tips',
  description:
    'Calm, local bakery guide to Saltaire: sourdough styles, pastries that travel, queue timing, reheating & storage, kid-friendly picks, and canal/park picnic ideas.',
  alternates: { canonical: `${site.url}/food-drink/bakeries` },
  openGraph: {
    title: 'Bakeries in Saltaire — sourdough, pastries & picnic tips',
    description:
      'Choose the right loaf or pastry for your plan, beat the queue, and pair it with coffee, canal strolls or Roberts Park.',
    url: `${site.url}/food-drink/bakeries`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Bread = {
  id: string
  name: string
  bestFor: string
  crust: 'thin' | 'medium' | 'thick'
  keeping: string
  notes: string
}

const BREADS: Bread[] = [
  {
    id: 'country-sourdough',
    name: 'Country sourdough (white/mostly white)',
    bestFor: 'Sandwiches, toast, picnic slices',
    crust: 'medium',
    keeping: '1–2 days counter; slice & freeze beyond',
    notes:
      'Balanced tang and open crumb; easy everyday pick. Slice thick for picnic sturdiness.',
  },
  {
    id: 'seeded-sourdough',
    name: 'Seeded sourdough',
    bestFor: 'Open sandwiches, soup dunking',
    crust: 'thick',
    keeping: '2–3 days; refresh in a hot oven for 5–8 mins',
    notes:
      'Toasted seeds add aroma and crunch; great with soft cheeses and salads.',
  },
  {
    id: 'rye-mix',
    name: 'Rye-mix or farmhouse',
    bestFor: 'Smoked fish, cheese boards, robust toppings',
    crust: 'thick',
    keeping: '3–4 days; slice and freeze well',
    notes:
      'Denser crumb with malty notes; brilliant for slower, savoury lunches.',
  },
  {
    id: 'tin-loaf',
    name: 'Tin loaf (sandwich loaf)',
    bestFor: 'Uniform sandwiches for kids & picnics',
    crust: 'thin',
    keeping: '2–3 days wrapped; slices freeze perfectly',
    notes:
      'Even slices and soft crumb; ideal for family picnics and toasties.',
  },
  {
    id: 'baguette',
    name: 'Baguette',
    bestFor: 'Same-day picnic with soft cheeses & charcuterie',
    crust: 'thick',
    keeping: 'Best day-of; revives briefly in a hot oven',
    notes:
      'High crust-to-crumb ratio; plan to eat within hours for peak snap.',
  },
  {
    id: 'focaccia',
    name: 'Focaccia (tray bread)',
    bestFor: 'Tear-and-share, soups, park picnics',
    crust: 'medium',
    keeping: 'Day-of best; rewarm 6–8 mins for springiness',
    notes:
      'Olive-oil rich; ask about toppings (allergens) and reheating tips.',
  },
]

type Pastry = {
  id: string
  name: string
  travels: 'excellent' | 'good' | 'fair'
  bestTime: 'opening' | 'mid-morning' | 'any'
  allergens: string
  notes: string
}

const PASTRIES: Pastry[] = [
  {
    id: 'croissant',
    name: 'Croissant',
    travels: 'good',
    bestTime: 'opening',
    allergens: 'gluten, dairy',
    notes: 'Flaky layers; crisp outside, tender inside. Eat same day.',
  },
  {
    id: 'pain-choc',
    name: 'Pain au chocolat',
    travels: 'excellent',
    bestTime: 'opening',
    allergens: 'gluten, dairy, soy (varies)',
    notes: 'Kid favourite; sturdy for canalside benches.',
  },
  {
    id: 'cinnamon-bun',
    name: 'Cinnamon bun/roll',
    travels: 'excellent',
    bestTime: 'mid-morning',
    allergens: 'gluten, dairy (varies), egg (varies)',
    notes: 'Holds shape in a bag; icing can smudge—keep upright.',
  },
  {
    id: 'danish',
    name: 'Danish (fruit/cheese)',
    travels: 'fair',
    bestTime: 'any',
    allergens: 'gluten, dairy, egg',
    notes: 'Custards and fruits are delicate; better sit-in.',
  },
  {
    id: 'savoury-pastry',
    name: 'Savoury pastry (sausage/veggie rolls)',
    travels: 'excellent',
    bestTime: 'any',
    allergens: 'gluten; others vary',
    notes: 'Great walking lunch with napkins; check spice/allergen lists.',
  },
]

const QUEUE_TIPS = [
  'Weekend peaks: 09:30–11:30 (earlier during school holidays).',
  'Arrive near opening for widest choice; pre-order if a shop offers it.',
  'Bring a tote and a firm container for delicate pastries.',
  'Split roles: one queues, one finds coffee (see coffee guide).',
]

const STORAGE_TIPS = [
  'Loaves: keep cut-side down on a board; avoid sealed plastic (soggy crust).',
  'Slice and freeze what you won’t eat within two days; toast from frozen.',
  'Refresh crusts: 200 °C oven for 5–8 mins; cool 5 mins before slicing.',
  'Pastries: best day-of; revive 3–5 mins at 160–170 °C.',
]

const PICNIC_TIPS = [
  'Choose firm loaves (tin, country, baguette) for neat slices.',
  'Pack a small knife, napkins, and a bag for crumbs/rubbish.',
  'Use lidded drinks; canalside wind can snatch flakes.',
  'Sit a few minutes from busy bridges for quieter benches.',
]

const DIETARY = [
  'Vegan options vary (olive-oil breads, some pastries). Ask about enrichment (butter, milk powder).',
  'Gluten: cross-contact is common in open bakeries; coeliacs should confirm processes.',
  'Nuts & seeds: check toppings/fillings and shared equipment.',
  'Allergen cards: most counters have them—ask if not visible.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'When do bakeries sell out?',
    a: 'Popular items move fast on sunny weekends and event days; arrive at opening for the widest choice.',
  },
  {
    q: 'Which breads keep best for picnics?',
    a: 'Tin and country loaves slice evenly and hold fillings well. Baguettes are best same day with a brief oven refresh.',
  },
  {
    q: 'How should I store sourdough?',
    a: 'Cut-side down on a board or in a paper bag; avoid sealed plastic. Slice and freeze beyond two days.',
  },
  {
    q: 'Good pastries for the canal or park?',
    a: 'Cinnamon buns, pain au chocolat and savoury rolls travel well. Custard-heavy danish are better sit-in.',
  },
  {
    q: 'Dietary options?',
    a: 'Ask about vegan doughs, dairy in laminations and cross-contact for gluten/nuts. Policies vary by shop.',
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
          Bakeries
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
            Bakeries in Saltaire: sourdough, pastries & picnic-ready picks
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Choose the right loaf for sandwiches, the pastry that actually travels, and when to
            arrive to beat the queue. Then pair it with coffee, a canal stroll or Roberts Park.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Picnic tips</li>
            <li className="badge">Dietary notes</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Artisan sourdough loaves and pastries stacked on a wooden counter"
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
    { href: '#quick-picks', label: 'Quick picks' },
    { href: '#breads', label: 'Bread cheat-sheet' },
    { href: '#pastries', label: 'Pastry guide' },
    { href: '#queues', label: 'Queues & timing' },
    { href: '#storage', label: 'Storage & reheating' },
    { href: '#picnic', label: 'Picnics & benches' },
    { href: '#dietary', label: 'Dietary & allergens' },
    { href: '#map', label: 'Map & seasons' },
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

function QuickPicks() {
  return (
    <section id="quick-picks" aria-labelledby="qp-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="qp-title" className="text-2xl font-bold tracking-tight md:text-3xl">Quick picks</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Picnic-ready</h3>
            <p className="mt-1 text-gray-700">
              Tin or country sourdough + cinnamon buns. Add lidded coffees and walk the canal.{' '}
              <Link className="underline underline-offset-4" href="/food-drink/coffee">
                Coffee guide
              </Link>
              .
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Family-friendly</h3>
            <p className="mt-1 text-gray-700">
              Uniform sandwich slices, pain au chocolat and fruit. Benches near the park are perfect.{' '}
              <Link className="underline underline-offset-4" href="/plan/family">
                Family tips
              </Link>
              .
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Late brunch pastry</h3>
            <p className="mt-1 text-gray-700">
              Savoury rolls + filter coffee; eat on site if the pastry is custard-heavy.{' '}
              <Link className="underline underline-offset-4" href="/food-drink/brunch">
                Brunch guide
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function BreadSheet() {
  return (
    <section id="breads" aria-labelledby="breads-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="breads-title" className="text-2xl font-bold tracking-tight md:text-3xl">Bread cheat-sheet</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick a loaf that matches your plan and prep. If you won’t finish it in two days, slice and
        freeze—then toast from frozen for peak convenience.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[900px]">
          <thead>
            <tr>
              <th className="w-[22%]">Loaf</th>
              <th className="w-[22%]">Best for</th>
              <th className="w-[12%]">Crust</th>
              <th className="w-[18%]">Keeping</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {BREADS.map((b) => (
              <tr key={b.id} id={b.id}>
                <td className="font-medium">{b.name}</td>
                <td>{b.bestFor}</td>
                <td className="capitalize">{b.crust}</td>
                <td>{b.keeping}</td>
                <td>{b.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Slicing & freezing</h3>
          <p className="mt-1 text-gray-700">
            For everyday toast/sandwiches, slice the loaf once fully cooled. Freeze in a bag with
            baking paper separators if you want single-slice access.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Crust refresh</h3>
          <p className="mt-1 text-gray-700">
            A quick 5–8 minute bake at ~200 °C revives yesterday’s crust. Let it cool for 5 minutes
            so the crumb sets before cutting.
          </p>
        </div>
      </div>
    </section>
  )
}

function PastryGuide() {
  return (
    <section id="pastries" aria-labelledby="pastries-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="pastries-title" className="text-2xl font-bold tracking-tight md:text-3xl">Pastry guide</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Some pastries love a picnic; others are best on plates. Use this quick read before you
        order.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[880px]">
          <thead>
            <tr>
              <th className="w-[26%]">Pastry</th>
              <th className="w-[16%]">Travels</th>
              <th className="w-[18%]">Best time</th>
              <th className="w-[18%]">Common allergens</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {PASTRIES.map((p) => (
              <tr key={p.id} id={p.id}>
                <td className="font-medium">{p.name}</td>
                <td className="capitalize">{p.travels}</td>
                <td className="capitalize">{p.bestTime.replace('-', ' ')}</td>
                <td>{p.allergens}</td>
                <td>{p.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Lamination & flake control</h3>
          <p className="mt-1 text-gray-700">
            Laminated doughs shed flakes in wind—carry flat in a box or eat near the bakery before a
            walk. Keep icing upright to avoid sliding.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Savoury for the towpath</h3>
          <p className="mt-1 text-gray-700">
            Rolls and hand pies are the least messy options when you’re moving. Couple with water or
            a lidded coffee for fewer stops.
          </p>
        </div>
      </div>
    </section>
  )
}

function QueuesTiming() {
  return (
    <section id="queues" aria-labelledby="queues-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="queues-title" className="text-2xl font-bold md:text-3xl">Queues & timing</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              {QUEUE_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              Event weekends shift demand—check{' '}
              <Link className="underline underline-offset-4" href="/events">
                what’s on
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Morning queue outside a small bakery with warm light on the loaves"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StorageReheat() {
  return (
    <section id="storage" aria-labelledby="storage-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="storage-title" className="text-2xl font-bold tracking-tight md:text-3xl">Storage & reheating</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        The biggest flavour upgrades are simple: store bread correctly, refresh crusts, and give
        pastries a gentle warm-through rather than microwaving.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[860px]">
          <thead>
            <tr>
              <th className="w-[24%]">Item</th>
              <th className="w-[20%]">Short-term</th>
              <th className="w-[20%]">Freeze</th>
              <th>Refresh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Sourdough loaves</td>
              <td>Cut-side down on board or paper bag</td>
              <td>Slice, bag; toast from frozen</td>
              <td>200 °C, 5–8 mins; rest 5 mins before slicing</td>
            </tr>
            <tr>
              <td className="font-medium">Baguette</td>
              <td>Eat same day</td>
              <td>Not ideal; brief freeze ok</td>
              <td>220 °C, 3–5 mins; best within hours of purchase</td>
            </tr>
            <tr>
              <td className="font-medium">Focaccia</td>
              <td>Cover lightly at room temp</td>
              <td>Portion and freeze; reheat from frozen</td>
              <td>180–200 °C, 6–8 mins; avoid drying—check early</td>
            </tr>
            <tr>
              <td className="font-medium">Laminated pastries</td>
              <td>Room temp, same day</td>
              <td>Freeze in container; re-crisp later</td>
              <td>160–170 °C, 3–5 mins; no microwave (soggy layers)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">Times/temps are guidance; ovens vary—check early.</p>
    </section>
  )
}

function PicnicSection() {
  return (
    <section id="picnic" aria-labelledby="picnic-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="picnic-title" className="text-2xl font-bold tracking-tight md:text-3xl">Picnics & benches</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Five minutes’ walk unlocks quieter spots. Take your time and pack out everything you bring.
      </p>
      <ul className="mt-3 grid list-disc gap-2 pl-6 text-gray-700 md:grid-cols-2">
        <li>For shade/wind shelter, try side streets or Roberts Park trees.</li>
        <li>For views, walk the canal a little way before you sit.</li>
        <li>
          Pair with a short loop:{' '}
          <Link className="underline underline-offset-4" href="/walks/shipley-glen">
            Shipley Glen
          </Link>{' '}
          or{' '}
          <Link className="underline underline-offset-4" href="/walks/five-rise">
            Five Rise towpath
          </Link>
          .
        </li>
        <li>Dogs on short leads in busy areas; check local signage.</li>
      </ul>
    </section>
  )
}

function DietarySection() {
  return (
    <section id="dietary" aria-labelledby="dietary-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="dietary-title" className="text-2xl font-bold md:text-3xl">Dietary & allergens</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              {DIETARY.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Accessibility</h3>
            <p className="mt-1 text-gray-700">
              Some counters have steps or narrow doors. For step-free paths and nearby facilities,
              see our{' '}
              <Link className="underline underline-offset-4" href="/plan/accessibility">
                accessibility guide
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapSeasons() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Map & seasonal notes</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Bakeries cluster around the village core and near Salts Mill. Everything is walkable and
        close to benches, canalside spots and Roberts Park lawns.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/cafe-pubs-restaurants.png"
          alt="Simple aerial-style orientation graphic of village streets, canal and park"
          width={1600}
          height={900}
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>Summer: arrive early; pastries go fast; use shade for laminations.</li>
        <li>Autumn: wind picks up flakes—carry pastries flat.</li>
        <li>Winter: warm pastries briefly at home; check earlier closing.</li>
        <li>Spring: festivals/markets shift queues—check{' '}
          <Link className="underline underline-offset-4" href="/events">
            events
          </Link>
          .
        </li>
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Make a bakery morning of it" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Make it a full Saltaire morning</h2>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link className="underline underline-offset-4" href="/food-drink/coffee">
                  Coffee guide
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/salts-mill">
                  Salts Mill guide
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/walks/shipley-glen">
                  Shipley Glen walk
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/walks/five-rise">
                  Five Rise towpath
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
              Run a bakery or have a local tip? Share sell-out times, seasonal specials and allergen
              notes via our{' '}
              <Link className="underline underline-offset-4" href="/contact">
                contact page
              </Link>
              . We’ll verify and include helpful updates.
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
        Policies, menus and hours change. Treat this as local guidance and follow staff signs.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemListBreads = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Common bread styles in Saltaire bakeries',
    numberOfItems: BREADS.length,
    itemListElement: BREADS.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      url: `${base}/food-drink/bakeries#${b.id}`,
      description: `Best for: ${b.bestFor}. Crust: ${b.crust}. Keeping: ${b.keeping}. ${b.notes}`,
    })),
  }

  const itemListPastries = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Common pastry types in Saltaire bakeries',
    numberOfItems: PASTRIES.length,
    itemListElement: PASTRIES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/food-drink/bakeries#${p.id}`,
      description: `Travels: ${p.travels}. Best time: ${p.bestTime}. Allergens: ${p.allergens}. ${p.notes}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to plan a bakery morning in Saltaire',
    description:
      'Time your visit around peaks, pick bread/pastries that match your plan, and pair with coffee, canal or park.',
    step: [
      { '@type': 'HowToStep', text: 'Arrive near opening for widest choice, or later to miss peak queues.' },
      { '@type': 'HowToStep', text: 'Choose a loaf for sandwiches/picnics (tin/country) or same-day baguette.' },
      { '@type': 'HowToStep', text: 'Pick pastries that travel if walking (buns/rolls) or eat delicate items in-shop.' },
      { '@type': 'HowToStep', text: 'Store correctly, slice/freeze extras, and refresh crusts briefly in a hot oven.' },
    ],
    totalTime: 'PT60M',
    tool: [{ '@type': 'HowToTool', name: 'Contactless payment' }],
    supply: [{ '@type': 'HowToSupply', name: 'Tote & container for pastries' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Bakeries in Saltaire — sourdough, pastries & picnic tips',
    url: `${base}/food-drink/bakeries`,
    description:
      'Local, practical bakery guide to Saltaire with sourdough styles, pastry travel tips, queue timing, storage/reheating, and picnic ideas.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Bakeries', item: `${base}/food-drink/bakeries` },
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
    url: `${base}/food-drink/bakeries`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro-title', '#breads-title', '#pastries-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListBreads) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListPastries) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function BakeriesPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickPicks />
      <BreadSheet />
      <PastryGuide />
      <QueuesTiming />
      <StorageReheat />
      <PicnicSection />
      <DietarySection />
      <MapSeasons />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
