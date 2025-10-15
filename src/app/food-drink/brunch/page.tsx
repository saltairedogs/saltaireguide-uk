// src/app/food-drink/brunch/page.tsx
// Brunch in Saltaire — calm, practical guide (cornerstone v1)
// - Server component (no client handlers), static rendering for CWV
// - Evergreen, venue-agnostic guidance to avoid staleness; invite updates via /contact
// - Strong internal linking to /food-drink, /food-drink/coffee, /food-drink/pubs,
//   /walks, /events, /plan/family, /plan/accessibility
// - On-page ToC; accessible markup; print-friendly via globals.css
// - JSON-LD: WebPage + BreadcrumbList + ItemList (styles & scenarios) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Best brunch in Saltaire (2025): full English, veggie/vegan, pancakes, kids plates & booking tips',
  description:
    'Local, practical brunch guide to Saltaire: calm tables, queue timing, popular plates (full English, veggie/vegan, pancakes, eggs), kids portions, allergens, and walk pairings.',
  alternates: { canonical: `${site.url}/food-drink/brunch` },
  openGraph: {
    title: 'Brunch in Saltaire — calm tables, popular plates & how to time it',
    description:
      'Find relaxed tables, choose plates that travel well, learn queue windows, and pair brunch with short walks or Salts Mill.',
    url: `${site.url}/food-drink/brunch`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Scenario = {
  id: string
  title: string
  area: 'Village core' | 'Near Salts Mill' | 'Roberts Park edge'
  summary: string
  tips: string[]
}

const SCENARIOS: Scenario[] = [
  {
    id: 'early-calm',
    title: 'Early calm (beat the queue)',
    area: 'Village core',
    summary:
      'Arrive near opening for the quietest tables, best light, and faster service before mid-morning peaks.',
    tips: [
      'Skim the menu online if available; decide fast at the counter.',
      'Sit by windows for natural light; tuck bags under tables.',
      'Order coffee with food to avoid two queue cycles.',
    ],
  },
  {
    id: 'post-mill',
    title: 'After Salts Mill browse',
    area: 'Near Salts Mill',
    summary:
      'Explore the bookshops and galleries first; sit for a late brunch as lunch queues ease.',
    tips: [
      'Split the party: one finds a table while the other orders.',
      'Ask for small plates for lighter appetites.',
      'Keep aisles clear around bookshop entrances.',
    ],
  },
  {
    id: 'park-picnic',
    title: 'Park picnic brunch (takeaway)',
    area: 'Roberts Park edge',
    summary:
      'Pick portable options (breakfast rolls, pastries) and eat riverside. Mind play areas and on-lead zones.',
    tips: [
      'Choose lidded drinks and sturdy packaging.',
      'Bring a blanket; stone benches can be cool.',
      'Pack wipes; dispose of litter responsibly.',
    ],
  },
]

type Plate = {
  id: string
  name: string
  suits: string
  diet: string
  notes: string
}

const PLATES: Plate[] = [
  {
    id: 'full-english',
    name: 'Full English (or Yorkshire breakfast)',
    suits: 'Hearty appetites; sit-in',
    diet: 'Meat / GF variants sometimes',
    notes:
      'Ask about grill vs. fried items, hash browns, and gluten handling. Smaller “regular” sizes help at peak times.',
  },
  {
    id: 'veggie-vegan',
    name: 'Veggie / Vegan plate',
    suits: 'Plant-based or lighter start',
    diet: 'Vegetarian / Vegan',
    notes:
      'Look for mushrooms, tomatoes, beans, avocado, plant sausages. Confirm cooking oils and cross-contact.',
  },
  {
    id: 'eggs',
    name: 'Eggs any way (Benedict, Florentine, Royale, scrambled)',
    suits: 'Sit-in with cutlery',
    diet: 'Vegetarian options common',
    notes:
      'Hollandaise is time-sensitive; eat promptly. Ask for well-done vs soft eggs to preference.',
  },
  {
    id: 'pancakes',
    name: 'Pancakes / French toast',
    suits: 'Leisurely sit-in; family favourite',
    diet: 'Vegetarian; GF varies',
    notes:
      'Toppings travel poorly; best eaten on plates. Share stacks to sample more without over-ordering.',
  },
  {
    id: 'rolls',
    name: 'Breakfast rolls & buns',
    suits: 'Takeaway; canalside benches',
    diet: 'Meat / Veggie variants',
    notes:
      'Ask for napkins; sauces on the side help. Ideal with a flat white or americano to go.',
  },
  {
    id: 'pastries',
    name: 'Pastries & light bites',
    suits: 'Quick queue; park picnic',
    diet: 'Vegetarian; contains gluten/dairy',
    notes:
      'Croissants, buns, and tarts move fastest in late mornings. Great when time is tight.',
  },
]

const BOOKING_TIPS = [
  'If a place takes bookings, reserve for peak weekend late-morning slots.',
  'Walk-ins: arrive early or after 13:30 for calmer seats.',
  'Split large groups: two smaller tables turn faster than one big one.',
  'Tell staff about prams or accessibility needs; they’ll find better layouts.',
]

const QUEUE_WINDOWS = [
  'Peak: 10:30–12:30 on sunny weekends and school holidays.',
  'Calmer: opening hour, or 13:30–15:00 shoulder.',
  'Events at the Mill or park can shift peaks — check /events.',
]

const DRINKS = [
  'Flat white or cappuccino for warmth outdoors; americanos travel well.',
  'Batch brew/filter for clarity if you sit inside.',
  'Fresh juices for families; ask about kids portions.',
  'Alcoholic brunch? Consider AF options or share a single drink over food.',
]

const ALLERGENS = [
  'Menus change; always confirm allergens and preparation areas.',
  'Gluten: ask about separate toasters, buns and flour in the air for pancakes.',
  'Egg/dairy: check batter components and butter finishing.',
  'Nuts: pastry counters may handle nut toppings; ask for sealed storage.',
]

const FAMILY_TIPS = [
  'High-chairs vary; compact travel seats add flexibility.',
  'Bring a small activity for waits (colouring, quiet toy).',
  'Share large plates; request side plates for kids.',
  'Use pram-friendly routes; see /plan/accessibility.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What time is best for brunch in Saltaire?',
    a: 'Opening hour for the calmest seats; otherwise aim for after 13:30. Sunny weekends peak from 10:30–12:30.',
  },
  {
    q: 'Can we book?',
    a: 'Some venues accept bookings, especially for larger groups. If walk-in only, arrive early and split big groups.',
  },
  {
    q: 'Good takeaway choices for the canal or park?',
    a: 'Breakfast rolls, pastries and lidded coffees. Eat plates like pancakes on site for best texture.',
  },
  {
    q: 'Family-friendly options?',
    a: 'Ask for kids portions, share large plates, and pick corners with space for prams. High-chairs vary by venue.',
  },
  {
    q: 'Dietary/allergens?',
    a: 'Always confirm with staff. Gluten handling (toasters, flour), egg/dairy in batters and nut storage are common checks.',
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
          Brunch
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
            Brunch in Saltaire: calm tables & crowd-pleasing plates
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Beat the queue, choose dishes that actually suit your plan (sit-in plates vs takeaway
            rolls), and pair it with a short walk or Salts Mill.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Queue windows</li>
            <li className="badge">Kids &amp; allergens</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Brunch table with pancakes, eggs and coffee near a sunny window"
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
    { href: '#scenarios', label: 'Best for…' },
    { href: '#plates', label: 'Plate cheat-sheet' },
    { href: '#booking', label: 'Booking & queues' },
    { href: '#drinks', label: 'Coffee & drinks' },
    { href: '#allergens', label: 'Dietary & allergens' },
    { href: '#family', label: 'Families' },
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
            <h3 className="text-lg font-semibold">Calm & sunny corner</h3>
            <p className="mt-1 text-gray-700">
              Arrive early, pick a window table, order coffee with food, and linger with a book.{' '}
              <Link className="underline underline-offset-4" href="/food-drink/coffee">
                Coffee guide
              </Link>
              .
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Takeaway for the canal</h3>
            <p className="mt-1 text-gray-700">
              Breakfast rolls/pastries plus lidded drinks. Walk a few minutes to quieter benches.{' '}
              <Link className="underline underline-offset-4" href="/walks/five-rise">
                Five Rise walk
              </Link>
              .
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">After the Mill</h3>
            <p className="mt-1 text-gray-700">
              Browse first, then a late brunch as queues thin.{' '}
              <Link className="underline underline-offset-4" href="/salts-mill">
                Salts Mill guide
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function Scenarios() {
  return (
    <section id="scenarios" aria-labelledby="scenarios-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="scenarios-title" className="text-2xl font-bold tracking-tight md:text-3xl">Best for your plan</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick the setup that matches your day: beat the queue at opening, pair a late brunch with a
        Mill browse, or take a simple picnic to the park.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {SCENARIOS.map((s) => (
          <article key={s.id} id={s.id} className="card card-hover">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <span className="badge">{s.area}</span>
              </div>
              <p className="mt-1 text-gray-700">{s.summary}</p>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {s.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Plates() {
  return (
    <section id="plates" aria-labelledby="plates-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="plates-title" className="text-2xl font-bold tracking-tight md:text-3xl">Plate cheat-sheet</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Choose dishes that suit where you’ll eat them. Big plates shine at tables; rolls and
        pastries travel best for the canal or park.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[880px]">
          <thead>
            <tr>
              <th className="w-[20%]">Dish</th>
              <th className="w-[22%]">Best for</th>
              <th className="w-[18%]">Diet</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {PLATES.map((p) => (
              <tr key={p.id} id={p.id}>
                <td className="font-medium">{p.name}</td>
                <td>{p.suits}</td>
                <td>{p.diet}</td>
                <td>{p.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Veggie & vegan</h3>
          <p className="mt-1 text-gray-700">
            Plant-based options usually include mushrooms, tomatoes, beans and avocado. Confirm
            cooking oils, sausage brands, and griddle handling.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Gluten-free & coeliacs</h3>
          <p className="mt-1 text-gray-700">
            Ask about separate toasters, GF buns, pancake batter and flour in the air. Cross-contact
            varies; staff can advise safe options and timings.
          </p>
        </div>
      </div>
    </section>
  )
}

function BookingQueues() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="booking-title" className="text-2xl font-bold md:text-3xl">Booking & queue timing</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">If bookings are offered</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {BOOKING_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Queue windows</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {QUEUE_WINDOWS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              Check{' '}
              <Link className="underline underline-offset-4" href="/events">
                what’s on
              </Link>{' '}
              — festivals and market days shift demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Drinks() {
  return (
    <section id="drinks" aria-labelledby="drinks-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="drinks-title" className="text-2xl font-bold tracking-tight md:text-3xl">Coffee & drinks</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ul className="list-disc pl-5 text-gray-700">
            {DRINKS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">
            See our{' '}
            <Link className="underline underline-offset-4" href="/food-drink/coffee">
              coffee guide
            </Link>{' '}
            for takeaway vs sit-in choices and alt milks.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Flat white and orange juice on a bright brunch table"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function Allergens() {
  return (
    <section id="allergens" aria-labelledby="allergens-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="allergens-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Dietary & allergens (always ask)
      </h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ul className="list-disc pl-5 text-gray-700">
            {ALLERGENS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Accessibility</h3>
          <p className="mt-1 text-gray-700">
            Some interiors have steps or tighter aisles. For the smoothest paths and step-free
            toilets nearby, see our{' '}
            <Link className="underline underline-offset-4" href="/plan/accessibility">
              accessibility guide
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

function Families() {
  return (
    <section id="family" aria-labelledby="family-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="family-title" className="text-2xl font-bold tracking-tight md:text-3xl">Families</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ul className="list-disc pl-5 text-gray-700">
            {FAMILY_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">
            More ideas in{' '}
            <Link className="underline underline-offset-4" href="/plan/family">
              plan/family
            </Link>
            .
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Family sharing pancakes and fruit at a bright café table"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

function MapSeasons() {
  return (
    <section id="map" aria-labelledby="map-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="map-title" className="text-2xl font-bold md:text-3xl">Map & seasonal notes</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="text-gray-700">
              Brunch spots cluster around the village core and Salts Mill, with quick access to the
              canal and Roberts Park for strolls. Everything is a few minutes’ walk.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Summer: shade and iced drinks; canalside benches fill early.</li>
              <li>Autumn: brisk air; pick sunny windows or sheltered corners.</li>
              <li>Winter: earlier kitchen closes; check hours before you set out.</li>
              <li>Spring: event weekends peak; arrive early or book if possible.</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Simple aerial-style orientation showing village, Mill, canal and park cluster"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-gray-500">Illustrative orientation; follow venue signage and staff guidance.</p>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Make a brunch day of it" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Make it a full Saltaire day</h2>
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
              <Link className="underline underline-offset-4" href="/events">
                What’s on this month
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/food-drink/pubs">
                Pubs (beer gardens & cask)
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <p className="text-gray-700">
            Run a brunch spot or have a local tip? Share quiet times, kids options, or outdoor table
            notes via our{' '}
            <Link className="underline underline-offset-4" href="/contact">
              contact page
            </Link>
            . We’ll verify and include helpful updates.
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
        Policies and menus change. Treat this as local guidance and follow staff instructions.
      </p>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemListScenarios = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Brunch scenarios in Saltaire',
    numberOfItems: SCENARIOS.length,
    itemListElement: SCENARIOS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${base}/food-drink/brunch#${s.id}`,
      description: `${s.area}. ${s.summary} Tips: ${s.tips.join('; ')}`,
    })),
  }

  const itemListPlates = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Common brunch plates in Saltaire',
    numberOfItems: PLATES.length,
    itemListElement: PLATES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${base}/food-drink/brunch#${p.id}`,
      description: `Best for: ${p.suits}. Diet: ${p.diet}. Notes: ${p.notes}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to plan a relaxed brunch in Saltaire',
    description:
      'Time your visit around peaks, choose dishes that suit sit-in or takeaway, and pair with a short walk or Salts Mill.',
    step: [
      { '@type': 'HowToStep', text: 'Decide sit-in vs takeaway and pick your scenario (early calm, post-Mill, park picnic).' },
      { '@type': 'HowToStep', text: 'Choose plates accordingly: big plates for tables; rolls/pastries for travel.' },
      { '@type': 'HowToStep', text: 'Order coffee with food; pick a calm corner and keep aisles clear.' },
      { '@type': 'HowToStep', text: 'Dispose of packaging responsibly or use reusables; consider a short walk after.' },
    ],
    totalTime: 'PT90M',
    tool: [{ '@type': 'HowToTool', name: 'Contactless payment' }],
    supply: [{ '@type': 'HowToSupply', name: 'Reusable cup/blanket (optional)' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Brunch in Saltaire — calm tables & crowd-pleasing plates',
    url: `${base}/food-drink/brunch`,
    description:
      'Calm, practical brunch guide to Saltaire with queue timing, popular plates, kids options, allergens and walk pairings.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Brunch', item: `${base}/food-drink/brunch` },
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
    url: `${base}/food-drink/brunch`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro-title', '#plates-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListScenarios) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListPlates) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function BrunchPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickPicks />
      <Scenarios />
      <Plates />
      <BookingQueues />
      <Drinks />
      <Allergens />
      <Families />
      <MapSeasons />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
