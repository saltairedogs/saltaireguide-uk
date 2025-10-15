// src/app/food-drink/coffee/page.tsx
// Coffee in Saltaire — calm, practical guide (cornerstone v1)
// - Server component (no client handlers), static rendering for CWV
// - Evergreen, venue-agnostic guidance to avoid staleness; encourages local updates via /contact
// - Strong internal links to /food-drink, /salts-mill, /walks, /events, /plan/accessibility
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
    'Best coffee in Saltaire (2025): calm cafés, takeaway windows, milk options & remote-work tips',
  description:
    'Local, practical coffee guide to Saltaire: where the calm tables are, takeaway windows near the canal/park, drink cheat-sheets, milk/decaf notes, and remote-work etiquette.',
  alternates: { canonical: `${site.url}/food-drink/coffee` },
  openGraph: {
    title: 'Coffee in Saltaire — calm spots & practical tips',
    description:
      'Find relaxed tables, takeaway windows for the towpath/park, brew cheat-sheets, milk/decaf options and remote-work etiquette.',
    url: `${site.url}/food-drink/coffee`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'

type Scenario = {
  id: string
  title: string
  summary: string
  tips: string[]
  area: 'Village core' | 'Near Salts Mill' | 'Roberts Park' | 'Canal/Towpath'
}

const SCENARIOS: Scenario[] = [
  {
    id: 'sit-calm',
    title: 'Sit-in & calm table',
    summary:
      'Best for a reset after exploring Salts Mill or the village. Aim for corners away from walkways.',
    tips: [
      'Off-peak: mid-morning or mid-afternoon.',
      'Pick a corner; avoid doors/queues.',
      'Order at the till if requested; some offer table service.',
    ],
    area: 'Village core',
  },
  {
    id: 'take-window',
    title: 'Takeaway window for the towpath',
    summary:
      'Grab-and-go for a canal or park wander. Lids help in wind; carry-out trays are useful for groups.',
    tips: [
      'Ask for a lid and napkin; wind can catch crema.',
      'Walk a few minutes to quieter benches.',
      'Bin cups responsibly or bring a reusable.',
    ],
    area: 'Canal/Towpath',
  },
  {
    id: 'post-mill',
    title: 'Post–Salts Mill browse',
    summary:
      'Combine bookshop browsing with a coffee before or after. Expect weekend peaks around lunch.',
    tips: [
      'Arrive early if it’s exhibition season.',
      'Split party: one finds seating while the other orders.',
      'Keep bags tucked in on busy aisles.',
    ],
    area: 'Near Salts Mill',
  },
  {
    id: 'park-picnic',
    title: 'Roberts Park picnic coffee',
    summary:
      'Kiosk or takeaway then lawns/benches by the river. On-lead near play areas; mind sports pitches.',
    tips: [
      'Bring a blanket; lawns can be damp.',
      'Keep cups steady on uneven benches.',
      'Carry out all rubbish; bins fill fast on sunny weekends.',
    ],
    area: 'Roberts Park',
  },
]

type Style = {
  id: string
  name: string
  flavour: string
  milk: string
  notes: string
}

const STYLES: Style[] = [
  {
    id: 'flat-white',
    name: 'Flat white',
    flavour: 'Smooth, balanced espresso-forward',
    milk: 'Textured microfoam',
    notes:
      'Reliable pick for a short milk drink; ask for a small size for best ratio.',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    flavour: 'Classic, slightly drier foam cap',
    milk: 'Foamier than a flat white',
    notes:
      'Great with cocoa dusting; more foam holds heat if you sit outside.',
  },
  {
    id: 'latte',
    name: 'Latte',
    flavour: 'Milk-forward, gentle espresso taste',
    milk: 'Silky, larger volume',
    notes:
      'Good for slower sipping; ask for a smaller size if you prefer stronger coffee flavour.',
  },
  {
    id: 'americano',
    name: 'Americano / Long black',
    flavour: 'Clean espresso with hot water',
    milk: 'Optional splash',
    notes:
      'Easy takeaway choice; ask for water on top of espresso if you prefer a “long black” profile.',
  },
  {
    id: 'filter',
    name: 'Filter / Batch brew',
    flavour: 'Light, clear cup; origin-forward',
    milk: 'Usually taken black',
    notes:
      'If available, this is the lowest-fuss option for flavour clarity and heat stability.',
  },
  {
    id: 'decaf',
    name: 'Decaf',
    flavour: 'Varies; good decaf is balanced',
    milk: 'Any',
    notes:
      'Ask if the decaf is Swiss Water or sugarcane process; both are common and reliable.',
  },
]

const REMOTE_WORK_TIPS = [
  'Buy first, then choose an out-of-the-way table; avoid blocking large tables at peak brunch.',
  'Keep calls short and on low volume; step outside for long meetings.',
  'One drink per hour is a fair baseline; add a snack if you settle in.',
  'Use headphones; mind power sockets and cable trip hazards.',
  'Be kind at peak times—offer to share or switch to a smaller table.',
]

const MILK_ALTS = [
  'Semi/whole dairy (standard)',
  'Oat (most common alternative)',
  'Almond/soy (varies by venue)',
  'Lactose-free dairy (varies)',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Where are the calmest coffee tables?',
    a: 'Look for side rooms, back corners or outdoor benches away from doors and till queues. Mid-morning and mid-afternoon are quieter.',
  },
  {
    q: 'Is there good coffee near Salts Mill?',
    a: 'Yes—combine a browse with coffee nearby. Weekends are popular; arrive earlier or later to dodge peaks.',
  },
  {
    q: 'Can I take coffee into Roberts Park?',
    a: 'Yes—use lidded cups, keep paths clear and bin your litter. On-lead near play areas and events.',
  },
  {
    q: 'Which drink is best for takeaway?',
    a: 'Flat whites and americanos travel well. Cappuccino’s foam holds heat outdoors; filter is great when available.',
  },
  {
    q: 'Do cafés support alternative milks and decaf?',
    a: 'Oat milk is common; almond/soy vary. Many stock good decaf—ask about Swiss Water or sugarcane process.',
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
          Coffee
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
            Coffee in Saltaire: calm tables & great takeaways
          </h1>
        </div>
        <div>
          <p className="max-w-prose text-lg text-gray-700">
            Where to find a relaxed seat, what to order for the towpath or park, and how to keep
            your visit smooth at busier times. Venue policies change—treat this as practical local
            guidance and <Link className="underline underline-offset-4" href="/contact">send tips</Link>.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Outdoor &amp; takeaway</li>
            <li className="badge">Alt milks &amp; decaf</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#quick-picks', label: 'Quick picks' },
    { href: '#scenarios', label: 'Best for…' },
    { href: '#styles', label: 'Drink cheat-sheet' },
    { href: '#remote', label: 'Remote-work etiquette' },
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
            <h3 className="text-lg font-semibold">Near Salts Mill</h3>
            <p className="mt-1 text-gray-700">
              Combine browsing with a coffee before/after. Weekends peak around lunch—arrive early or later.{' '}
              <Link className="underline underline-offset-4" href="/salts-mill">Salts Mill guide</Link>.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Towpath takeaway</h3>
            <p className="mt-1 text-gray-700">
              Lidded flat white or americano. Head a few minutes along the canal for quiet benches.{' '}
              <Link className="underline underline-offset-4" href="/walks/five-rise">Five Rise walk</Link>.
            </p>
          </div>
        </article>
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Park picnic coffee</h3>
            <p className="mt-1 text-gray-700">
              Grab a drink then find shade by the river. Keep paths clear and bin cups.{' '}
              <Link className="underline underline-offset-4" href="/walks/dog-friendly">Dog-friendly walks</Link>.
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
      <h2 id="scenarios-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Best for your plan today
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick the setup that matches your day: a calm corner after the Mill, a takeaway for the canal,
        or a riverside sit-down near Roberts Park.
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

function DrinkStyles() {
  return (
    <section id="styles" aria-labelledby="styles-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="styles-title" className="text-2xl font-bold tracking-tight md:text-3xl">Drink cheat-sheet</h2>
      <p className="mt-2 max-w-prose text-gray-700">
        A quick guide to the usual suspects, including takeaway friendliness and milk/decaf notes. Alternative
        milks commonly include: {MILK_ALTS.join(', ')}.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[820px]">
          <thead>
            <tr>
              <th className="w-[18%]">Drink</th>
              <th className="w-[25%]">Flavour</th>
              <th className="w-[20%]">Milk</th>
              <th className="w-[37%]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {STYLES.map((d) => (
              <tr key={d.id} id={d.id}>
                <td className="font-medium">{d.name}</td>
                <td>{d.flavour}</td>
                <td>{d.milk}</td>
                <td>{d.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Decaf & alt milks</h3>
          <p className="mt-1 text-gray-700">
            Good decaf is common—ask about Swiss Water or sugarcane process. Oat is the most
            widespread alternative milk; others vary by venue. For the best texture, smaller milk
            drinks (flat white/cappuccino) often shine outdoors.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Takeaway vs. sit-in</h3>
          <p className="mt-1 text-gray-700">
            Takeaway cups insulate well for canal/park strolls. For sit-in, ceramics preserve
            flavour clarity—especially with filter/batch brew.
          </p>
        </div>
      </div>
    </section>
  )
}

function RemoteWork() {
  return (
    <section id="remote" aria-labelledby="remote-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="remote-title" className="text-2xl font-bold md:text-3xl">Remote-work etiquette</h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              {REMOTE_WORK_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm">
              Accessibility notes: some venues have steps or tight aisles. See our{' '}
              <Link className="underline underline-offset-4" href="/plan/accessibility">
                accessibility guide
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Laptop, notebook and coffee on a small café table near a window"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
        Coffee spots cluster around the village core, Salts Mill and Roberts Park—just a few minutes apart.
        For a scenic takeaway, walk canal-side. For shade or wind shelter, check streetside canopies.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/cafe-pubs-restaurants.png"
          alt="A simple aerial-style illustration of Saltaire’s canal, park and village cluster"
          width={1600}
          height={900}
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>Summer: lids and shade; canalside benches fill—walk a little further for quiet.</li>
        <li>Autumn: wind gusts can cool drinks quickly; cappuccino foam helps retain heat.</li>
        <li>Winter: pick sheltered nooks; keep walks short and layer up.</li>
        <li>Spring: event weekends get busy; arrive early or late for a calm table.</li>
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Make a coffee day of it" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Make it a full Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Start with coffee, browse the Mill, stroll the canal, then pick a calm table to finish.
              Our guides keep it practical and local.
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
              <li>
                <Link className="underline underline-offset-4" href="/salts-mill">
                  Salts Mill guide
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/walks/five-rise">
                  Five Rise walk
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/events">
                  What’s on this month
                </Link>
              </li>
              <li>
                <Link className="underline underline-offset-4" href="/food-drink/dog-friendly">
                  Dog-friendly cafés & pubs
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/cafe-pubs-restaurants.png"
              alt="Cappuccino and pastries on a wooden table with soft morning light"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Contribute() {
  return (
    <section aria-labelledby="contrib-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="contrib-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Run a café or have a local tip?
      </h2>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-gray-700">
          We keep this page evergreen and venue-agnostic to avoid out-of-date details. If you run a
          spot with great coffee or have a quiet corner tip,{' '}
          <Link className="underline underline-offset-4" href="/contact">
            contact us
          </Link>
          . We’ll verify and include it.
        </p>
        <ul className="mt-2 list-disc pl-5 text-gray-700">
          <li>Alt-milk/decaf details and pricing periods</li>
          <li>Quiet times and best corner tables</li>
          <li>Outdoor seating, shade and wind shelter notes</li>
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
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Info changes; treat this as local guidance. Always follow venue signage and staff direction.
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
    name: 'Coffee scenarios in Saltaire',
    numberOfItems: SCENARIOS.length,
    itemListElement: SCENARIOS.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `${base}/food-drink/coffee#${s.id}`,
      description: `${s.area}. ${s.summary} Tips: ${s.tips.join('; ')}`,
    })),
  }

  const itemListStyles = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Common coffee styles in Saltaire cafés',
    numberOfItems: STYLES.length,
    itemListElement: STYLES.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: d.name,
      url: `${base}/food-drink/coffee#${d.id}`,
      description: `${d.flavour}. Milk: ${d.milk}. Notes: ${d.notes}`,
    })),
  }

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to get great coffee in Saltaire (calmly)',
    description:
      'Choose the right scenario, order a drink that suits sit-in or takeaway, and pick a calm spot away from doorways.',
    step: [
      { '@type': 'HowToStep', text: 'Decide sit-in vs. takeaway based on your plan (Mill, canal, or park).' },
      { '@type': 'HowToStep', text: 'Pick a drink that suits: flat white/americano for takeaway; filter for sit-in.' },
      { '@type': 'HowToStep', text: 'Find a calm corner; avoid aisles and queues. Share space at peak times.' },
      { '@type': 'HowToStep', text: 'Dispose of cups responsibly, or bring a reusable.' },
    ],
    totalTime: 'PT20M',
    supply: [{ '@type': 'HowToSupply', name: 'Reusable cup (optional)' }],
    tool: [{ '@type': 'HowToTool', name: 'Contactless payment' }],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Best coffee in Saltaire: calm cafés & takeaways',
    url: `${base}/food-drink/coffee`,
    description:
      'Calm coffee guide to Saltaire with sit-down corners, takeaway tips for canal/park, drink cheat-sheets, alt milks and remote-work etiquette.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Food & Drink', item: `${base}/food-drink` },
      { '@type': 'ListItem', position: 3, name: 'Coffee', item: `${base}/food-drink/coffee` },
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
    url: `${base}/food-drink/coffee`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#intro-title', '#qp-title', '#styles-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListScenarios) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListStyles) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function CoffeePage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <QuickPicks />
      <Scenarios />
      <DrinkStyles />
      <RemoteWork />
      <MapSeasons />
      <CTA />
      <Contribute />
      <FAQ />
      <JsonLd />
    </>
  )
}
