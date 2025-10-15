// src/app/food-drink/desserts/page.tsx
// Desserts in Saltaire — calm, practical guide (cornerstone v1)
// - Server component (no client handlers). Static HTML for top CWV.
// - Evergreen, venue-agnostic advice: pudding/cake styles, takeaway-friendly picks,
//   seasonal ideas, family/date options, dietary & allergens, reheating/storage.
// - Strong internal links to /food-drink, /food-drink/bakeries, /food-drink/ice-cream,
//   /food-drink/coffee, /brunch, /walks, /events, /plan/family, /plan/accessibility.
// - Accessible markup, on-page ToC, print-friendly via globals.css.
// - JSON-LD: WebPage + BreadcrumbList + ItemList (dessert styles) + FAQPage + HowTo + Speakable.

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Desserts in Saltaire (2025): puddings, cakes, dairy-free tips, takeaway treats & calm stroll pairings',
  description:
    'Local dessert guide to Saltaire: classic British puddings, artisan cakes, ice-cream pairings, dairy-free/vegan options, family/date ideas, reheating & storage, and where to stroll after.',
  alternates: { canonical: `${site.url}/food-drink/desserts` },
  openGraph: {
    title: 'Desserts in Saltaire — puddings, cakes & sweet strolls',
    description:
      'Choose puddings or cakes that fit your plan, manage allergens, pack for picnics, and pair with coffee, canal or park routes.',
    url: `${site.url}/food-drink/desserts`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-13' // update when you refresh copy

type DessertStyle = {
  id: string
  name: string
  bestFor: string
  serve: 'sit-in' | 'takeaway' | 'either'
  travels: 'excellent' | 'good' | 'fair'
  allergens: string
  notes: string
}

const STYLES: DessertStyle[] = [
  {
    id: 'sticky-toffee',
    name: 'Sticky toffee pudding',
    bestFor: 'Comfort dessert after a cool walk',
    serve: 'sit-in',
    travels: 'fair',
    allergens: 'gluten, dairy, egg',
    notes:
      'Best hot with sauce; takeaway works if reheated quickly. Pairs with a short post-dessert stroll to the canal.',
  },
  {
    id: 'crumble',
    name: 'Fruit crumble & custard',
    bestFor: 'Family sharer, seasonal fruit',
    serve: 'either',
    travels: 'good',
    allergens: 'gluten, dairy (custard)',
    notes:
      'Tray portions can travel; keep custard separate. Reheat until the topping is crisp again.',
  },
  {
    id: 'cheesecake',
    name: 'Baked/new-york style cheesecake',
    bestFor: 'Rich slices, slow coffee pairing',
    serve: 'either',
    travels: 'excellent',
    allergens: 'dairy, gluten (base), egg',
    notes:
      'Chilled slice holds shape; ideal takeaway. Pair with a flat white and a bench in light shade.',
  },
  {
    id: 'brownie',
    name: 'Chocolate brownie',
    bestFor: 'Pocketable sweet, kids & prams',
    serve: 'takeaway',
    travels: 'excellent',
    allergens: 'gluten, egg, dairy (varies)',
    notes:
      'Dense crumb travels perfectly; add a scoop at home. Check nut traces if sensitive.',
  },
  {
    id: 'carrot-cake',
    name: 'Carrot cake',
    bestFor: 'Afternoon tea slice',
    serve: 'either',
    travels: 'good',
    allergens: 'gluten, dairy (frosting), egg, nuts (often)',
    notes:
      'Moist crumb holds; frosting can smudge—keep upright. Great with filter coffee.',
  },
  {
    id: 'victoria-sponge',
    name: 'Victoria sponge',
    bestFor: 'Classic British slice',
    serve: 'either',
    travels: 'good',
    allergens: 'gluten, egg, dairy',
    notes:
      'Light crumb; carry flat. Jam-forward versions survive travel better than heavy cream layers.',
  },
  {
    id: 'meringue',
    name: 'Pavlova/meringue',
    bestFor: 'Showy sharer, quick sit-in',
    serve: 'sit-in',
    travels: 'fair',
    allergens: 'egg, dairy (cream)',
    notes:
      'Crisp shell hates humidity; sit-in unless boxed carefully. Add fruit last minute.',
  },
  {
    id: 'vegan-slice',
    name: 'Vegan slices/bakes',
    bestFor: 'Dairy-free treat',
    serve: 'either',
    travels: 'excellent',
    allergens: 'gluten (often), nuts/soya (varies)',
    notes:
      'Alt-fat frostings travel well; confirm cross-contact and ingredient cards.',
  },
  {
    id: 'gluten-free',
    name: 'Gluten-free cakes',
    bestFor: 'Coeliac-friendly choices',
    serve: 'either',
    travels: 'good',
    allergens: 'egg, dairy (varies); cross-contact risk',
    notes:
      'Ask about separate knives/cake stands; brownies and cheesecakes often have clear labelling.',
  },
]

const QUICK_PICKS = [
  {
    title: 'Pocket-friendly walk treat',
    text: 'Brownie or flapjack slices; tidy, high energy, minimal crumbs. Pair with the canal towpath.',
    link: '/walks/five-rise',
  },
  {
    title: 'Dessert after Salts Mill',
    text: 'Cheesecake slice + coffee; quiet sit-down or a shaded bench before the train.',
    link: '/salts-mill',
  },
  {
    title: 'Family sharer',
    text: 'Crumble tray with custard in a separate tub; easy to reheat in a cottage.',
    link: '/plan/family',
  },
]

const STORAGE_TIPS = [
  'Cakes: store cool and covered; keep frostings upright. Most slices are fine 1–2 days.',
  'Sauces & custards: keep chilled; reheat gently until steaming, not boiling.',
  'Brownies/flapjacks: wrap individually; freeze well for later hikes.',
  'Cheesecake: keep refrigerated; travel in a rigid container to avoid smears.',
]

const DATE_IDEAS = [
  'Share one rich dessert and two spoons; then a short golden-hour walk to the river.',
  'Coffee first, dessert second: reduces queue risk and gives fresh palate for sweets.',
  'Pick a window seat on quieter side streets, or a bench a few minutes from busy bridges.',
]

const FAMILY_TIPS = [
  'Choose low-mess slices (brownies, loaf cakes) for prams and little hands.',
  'Carry napkins and a small water bottle; avoid steps and cycle routes when seated.',
  'Check allergen cards for nuts/eggs; ask staff to slice thinner for kids.',
]

const DIETARY = [
  'Vegan options vary daily; look for clearly labelled plant-based slices or fruit-forward desserts.',
  'Gluten-free: ask about separate knives/stands and prep; cross-contact can occur on shared counters.',
  'Nut traces: common in bakeries; confirm with staff and check signage.',
  'Dairy-free: pair with our ice-cream dairy-free guide for cold add-ons.',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What desserts travel best for a canal or park picnic?',
    a: 'Brownies, flapjacks and cheesecake slices in rigid boxes. Keep sauces separate and use tubs to avoid mess.',
  },
  {
    q: 'Where can we sit for a calm sweet break?',
    a: 'Shady benches a few minutes from canal bridges, or Roberts Park lawns away from play areas. Avoid narrow pinch points.',
  },
  {
    q: 'Any tips for dairy-free or vegan desserts?',
    a: 'Look for labelled vegan slices and fruit-based options; confirm shared knives and ingredients. Pair with our dairy-free ice-cream guide.',
  },
  {
    q: 'How do I keep crumbles or puddings good for later?',
    a: 'Chill components; reheat pudding/custard separately. Crisp the topping briefly in a hot oven before serving.',
  },
  {
    q: 'Best “little treat” after a walk?',
    a: 'A single brownie or small slice with a filter coffee keeps things simple and tidy on cobbles.',
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
          Desserts
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
            Desserts in Saltaire: puddings, cakes & sweet strolls
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Choose a dessert that actually fits your plan: sit-in puddings, takeaway-friendly
            slices, dairy-free options and little treats for prams and pockets.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Dietary tips</li>
            <li className="badge">Family &amp; date ideas</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/cafe-pubs-restaurants.png"
            alt="Selection of cakes and puddings on a rustic counter with sunlight"
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
    { href: '#styles', label: 'Dessert styles' },
    { href: '#pairings', label: 'Coffee & stroll pairings' },
    { href: '#storage', label: 'Storage & reheating' },
    { href: '#family-date', label: 'Family & date ideas' },
    { href: '#dietary', label: 'Dietary & allergens' },
    { href: '#map', label: 'Map & seasonal' },
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
        {QUICK_PICKS.map((p) => (
          <article key={p.title} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-gray-700">{p.text}</p>
              <p className="mt-2 text-sm">
                Pairing:{' '}
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

function StylesGrid() {
  return (
    <section id="styles" aria-labelledby="styles-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="styles-title" className="text-2xl font-bold tracking-tight md:text-3xl">Dessert styles</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Match the dessert to your plan: sit-in puddings when you’ve time, sturdy slices for walks,
        chilled options for hot days, and labelled vegan/gluten-free bakes for dietary needs.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {STYLES.map((s) => (
          <article key={s.id} id={s.id} className="card card-hover">
            <div className="card-body">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="badge capitalize">{s.serve}</span>
              </div>
              <p className="mt-1 text-gray-700">{s.notes}</p>
              <ul className="mt-2 text-sm text-gray-700">
                <li>
                  <strong>Best for:</strong> {s.bestFor}
                </li>
                <li>
                  <strong>Travels:</strong> {s.travels}
                </li>
                <li>
                  <strong>Allergens:</strong> {s.allergens}
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Pairings() {
  return (
    <section id="pairings" aria-labelledby="pairings-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="pairings-title" className="text-2xl font-bold md:text-3xl">Coffee & stroll pairings</h2>
        <p className="mt-2 max-w-prose text-gray-700">
          Sit-in or takeaway, you’re minutes from benches and gentle routes. Keep slices flat and
          avoid bottlenecks on bridges at peak times.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Coffee + cake</h3>
              <p className="mt-1 text-gray-700">
                Pair a slice with a filter or flat white. See the{' '}
                <Link className="underline underline-offset-4" href="/food-drink/coffee">
                  coffee guide
                </Link>
                .
              </p>
            </div>
          </article>
          <article className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Cake + canal</h3>
              <p className="mt-1 text-gray-700">
                Walk a few minutes along the towpath for quieter benches. Try the{' '}
                <Link className="underline underline-offset-4" href="/walks/five-rise">
                  Five Rise leg
                </Link>
                .
              </p>
            </div>
          </article>
          <article className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Dessert + park</h3>
              <p className="mt-1 text-gray-700">
                Roberts Park lawns offer shade and space. Combine with{' '}
                <Link className="underline underline-offset-4" href="/walks/dog-friendly">
                  dog-friendly strolls
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function StorageReheat() {
  return (
    <section id="storage" aria-labelledby="storage-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="storage-title" className="text-2xl font-bold tracking-tight md:text-3xl">Storage & reheating</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[880px]">
          <thead>
            <tr>
              <th className="w-[24%]">Dessert</th>
              <th className="w-[24%]">Short-term</th>
              <th className="w-[20%]">Freeze</th>
              <th>Reheat / serve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">Brownie/flapjack</td>
              <td>Room temp, covered</td>
              <td>Excellent; wrap slices</td>
              <td>Serve as-is or warm briefly (160–170 °C, 3–5 mins)</td>
            </tr>
            <tr>
              <td className="font-medium">Cheesecake</td>
              <td>Chilled, airtight box</td>
              <td>Not ideal</td>
              <td>Serve chilled; level container for transport</td>
            </tr>
            <tr>
              <td className="font-medium">Crumble</td>
              <td>Chilled; separate custard</td>
              <td>Portion first; good</td>
              <td>Oven 180–200 °C until hot; crisp topping last 5 mins</td>
            </tr>
            <tr>
              <td className="font-medium">Sponge/loaf cakes</td>
              <td>Cool, covered, upright</td>
              <td>Slice & freeze (ok)</td>
              <td>Room temp or brief warm; protect frosting in transit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">Times/temps are guidance; ovens vary — check early.</p>
    </section>
  )
}

function FamilyDate() {
  return (
    <section id="family-date" aria-labelledby="fd-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="fd-title" className="text-2xl font-bold md:text-3xl">Family & date ideas</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Family</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {FAMILY_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              More help in our{' '}
              <Link className="underline underline-offset-4" href="/plan/family">
                family planning tips
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <h3 className="text-lg font-semibold">Date</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {DATE_IDEAS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              For a slower afternoon, browse{' '}
              <Link className="underline underline-offset-4" href="/salts-mill">
                Salts Mill
              </Link>{' '}
              then share one slice and a coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DietarySection() {
  return (
    <section id="dietary" aria-labelledby="dietary-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="dietary-title" className="text-2xl font-bold tracking-tight md:text-3xl">Dietary & allergens</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <ul className="list-disc pl-5 text-gray-700">
            {DIETARY.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Dairy-free add-ons</h3>
          <p className="mt-1 text-gray-700">
            Want something cold with your slice? See{' '}
            <Link className="underline underline-offset-4" href={"/food-drink/ice-cream/dairy-free" as any}>
              dairy-free & vegan ice-cream
            </Link>
            .
          </p>
          <h3 className="mt-4 text-lg font-semibold">Coffee pairings</h3>
          <p className="mt-1 text-gray-700">
            Balance sweetness with a filter or espresso from our{' '}
            <Link className="underline underline-offset-4" href="/food-drink/coffee">
              coffee guide
            </Link>
            .
          </p>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Menus and recipes change. Treat this as guidance and follow current labels and staff advice.
      </p>
    </section>
  )
}

function MapSeasons() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">Map & seasonal notes</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Dessert spots cluster around the village core and Salts Mill area — everything is walkable
        and close to benches and the towpath.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/cafe-pubs-restaurants.png"
          alt="Simple orientation graphic of Saltaire streets, canal and Roberts Park"
          width={1600}
          height={900}
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>Summer: carry rigid boxes; frosting softens quickly.</li>
        <li>Autumn: wind = crumbs; choose denser slices and sheltered benches.</li>
        <li>Winter: earlier closing; warm puddings hit harder after a cold walk.</li>
        <li>Spring: festivals affect queues — check{' '}
          <Link className="underline underline-offset-4" href="/events">
            what’s on
          </Link>
          .
        </li>
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Make a sweet Saltaire hour" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Make it a sweet Saltaire hour</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
            <li>
              <Link className="underline underline-offset-4" href="/food-drink/bakeries">
                Bakeries (pastries & trays)
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/food-drink/ice-cream">
                Ice-cream (styles & tips)
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/brunch">
                Brunch ideas
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/walks/shipley-glen">
                Shipley Glen walk
              </Link>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <p className="text-gray-700">
            Got a local dessert tip (seasonal slices, sharers, allergen-friendly bakes)? Tell us via{' '}
            <Link className="underline underline-offset-4" href="/contact">
              contact
            </Link>
            . We verify before adding updates.
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
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const itemListStyles = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dessert styles in Saltaire',
    numberOfItems: STYLES.length,
    itemListElement: STYLES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${base}/food-drink/desserts#${s.id}`,
      description: `Best for: ${s.bestFor}. Serve: ${s.serve}. Travels: ${s.travels}. Allergens: ${s.allergens}. ${s.notes}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to choose and carry desserts in Saltaire',
    description:
      'Pick desserts that match your plan, pack them to travel, and pair with calm routes.',
    step: [
      { '@type': 'HowToStep', text: 'Decide on sit-in pudding or takeaway slice based on time and weather.' },
      { '@type': 'HowToStep', text: 'Check allergen cards and ask about cross-contact for gluten/dairy/nuts.' },
      { '@type': 'HowToStep', text: 'Use rigid boxes for slices and keep sauces separate in tubs.' },
      { '@type': 'HowToStep', text: 'Find shaded benches or short towpath legs to enjoy without rush.' },
    ],
    totalTime: 'PT45M',
    tool: [{ '@type': 'HowToTool', name: 'Rigid takeaway box' }],
    supply: [{ '@type': 'HowToSupply', name: 'Napkins and water' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Desserts in Saltaire — puddings, cakes & sweet strolls',
    url: `${base}/food-drink/desserts`,
    description:
      'Choose puddings or cakes that fit your plan, manage allergens, pack for picnics, and pair with coffee, canal or park routes.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Desserts', item: `${base}/food-drink/desserts` },
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
    url: `${base}/food-drink/desserts`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function DessertsPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickPicks />
      <StylesGrid />
      <Pairings />
      <StorageReheat />
      <FamilyDate />
      <DietarySection />
      <MapSeasons />
      <CTA />
      <FAQ />
      <JsonLd />
    </>
  )
}
    