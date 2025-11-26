// src/app/things-to-do/ultimate-guide/page.tsx
// -----------------------------------------------------------------------------
// Ultimate Guide to Saltaire — Pillar Page (server-only)
// Style matches your Home page (rounded-2xl, soft gradients, vintage vibe).
// Includes: Top 10 (ItemList), robust itineraries, extended local picks,
// deep-dive sections (History/Architecture/Seasons/Walks/Rules), practicals,
// photo spots, newsletter CTA, huge FAQ, and JSON-LD bundle.
//
// Human notes sprinkled as comments + occasional gentle humor in microcopy.
// No external images, no client components, no interactive handlers.
// -----------------------------------------------------------------------------

import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

// -------------------------------- Settings -----------------------------------

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'What to Do in Saltaire (2025) — Ultimate Guide, Itineraries & Local Picks',
  description:
    'The complete Saltaire guide: Top 10 highlights, one-day & half-day itineraries, cafés, pubs, restaurants, takeaways, bakeries, shops, seasonal tips, walks, maps, parking and accessibility — all in one beautiful page.',
}

// ------------------------------- Data models ---------------------------------

type TopItem = {
  title: string
  href: string
  blurb: string
  image: { src: string; alt: string; width: number; height: number }
}

type BusinessCategory =
  | 'cafe'
  | 'pub'
  | 'restaurant'
  | 'takeaway'
  | 'bakery-dessert'
  | 'shop'

type LocalSpot = {
  name: string
  slug: string
  category: BusinessCategory
  address?: string
  postcode?: string
  phone?: string
  url?: string
  mapsUrl?: string
  price?: '£' | '££' | '£££' | '££££'
  tags?: Array<'dog-friendly' | 'outdoor-seating' | 'step-free' | 'kids-menu' | 'vegan-options'>
  note?: string
}

type ItineraryStop = {
  time?: string
  title: string
  description: string
  href?: string
}

type Itinerary = {
  slug: string
  title: string
  duration: 'One day' | 'Half day' | 'Family' | 'Dog-friendly' | 'Rainy day'
  summary: string
  steps: ItineraryStop[]
}

type Walk = {
  title: string
  distanceKm: number
  grade: 'Easy' | 'Moderate' | 'Family'
  start: string
  summary: string
  href?: string
  gpx?: string
}

type Tip = { title: string; detail: string }

// --------------------------------- Content -----------------------------------

const HERO = {
  src: '/images/saltaire-canal.png',
  alt: 'Leeds–Liverpool Canal beside Salts Mill in Saltaire, at golden hour',
  width: 1600,
  height: 1066,
}

// Top 10 — each already exists as an internal page in your site.
const TOP10: TopItem[] = [
  {
    title: 'Salts Mill (Hockney & bookshops)',
    href: '/salts-mill',
    blurb:
      'A world-class Hockney collection, legendary book & poster shop, and cafés inside a monumental mill.',
    image: { src: '/images/salts-mill.png', alt: 'Salts Mill tower and facade', width: 1200, height: 800 },
  },
  {
    title: 'Roberts Park & bandstand',
    href: '/roberts-park',
    blurb:
      'Victorian riverside park with bandstand, pavilion café and big lawns. Free, family-friendly and photogenic.',
    image: { src: '/images/roberts-park.png', alt: 'Roberts Park bandstand and lawns', width: 1200, height: 800 },
  },
  {
    title: 'Towpath walk to Five-Rise Locks',
    href: '/walks/five-rise',
    blurb:
      'Flat, beautiful canal path to Bingley’s iconic locks. Easy nav, cafés on the way. Bring a camera.',
    image: { src: '/images/walks-from-saltaire.png', alt: 'Canal towpath lined with trees', width: 1200, height: 800 },
  },
  {
    title: 'Best cafés & coffee',
    href: '/food-drink/coffee',
    blurb:
      'Independent coffee and brunch spots locals actually use — with vegan options and outdoor tables.',
    image: { src: '/images/cafe-pubs-restaurants.png', alt: 'Coffee and pastries', width: 1200, height: 800 },
  },
  {
    title: 'Pubs & beer gardens',
    href: '/food-drink/pubs',
    blurb:
      'Character pubs and riverside pints, from micro-pubs with obscure kegs to classic cask lines.',
    image: { src: '/images/cafe-pubs-restaurants.png', alt: 'Pint on a wooden table', width: 1200, height: 800 },
  },
  {
    title: 'Parking with postcodes & prices',
    href: '/parking',
    blurb:
      'Car parks, height limits, prices and free options — minimise faff on busy weekends.',
    image: { src: '/images/parking-saltaire.png', alt: 'Car park sign near stone terraces', width: 1200, height: 800 },
  },
  {
    title: 'Step-free routes & accessibility',
    href: '/plan/accessibility',
    blurb:
      'Flattest paths, accessible toilets and step-free loops in the village, park and along the canal.',
    image: { src: '/images/plan-your-visit.png', alt: 'Train arriving at the platform', width: 1200, height: 800 },
  },
  {
    title: 'Architecture highlights',
    href: '/history/architecture',
    blurb:
      'Italianate mill and a model village by Lockwood & Mawson — the reason UNESCO listed Saltaire.',
    image: { src: '/images/history-unesco.png', alt: 'Stone terraces and chimneys', width: 1200, height: 800 },
  },
  {
    title: 'Family-friendly loop',
    href: '/plan/family',
    blurb:
      'Pram-friendly circuit linking Salts Mill, the footbridge, Roberts Park and a playground.',
    image: { src: '/images/roberts-park.png', alt: 'Family strolling past bandstand', width: 1200, height: 800 },
  },
  {
    title: 'What’s on & seasonal picks',
    href: '/events',
    blurb:
      'Festivals, markets, exhibitions and gigs — a simple monthly roundup with travel tips.',
    image: { src: '/images/whats-on.png', alt: 'Crowd at an outdoor market', width: 1200, height: 800 },
  },
]

// Itineraries — more detail + gentle humor for human warmth.
const ITINERARIES: Itinerary[] = [
  {
    slug: 'one-day',
    title: 'One-day in Saltaire (classic)',
    duration: 'One day',
    summary:
      'See the essentials without rushing: Mill → canal → Roberts Park → late lunch → photo loop.',
    steps: [
      {
        time: '09:45',
        title: 'Arrive by train or park up',
        description:
          'Trains from Leeds/Bradford/Ilkley/Skipton. If driving, Exhibition Road or Caroline St car parks are closest (height limits apply).',
        href: '/parking',
      },
      {
        time: '10:15',
        title: 'Salts Mill: Hockney & bookshops',
        description:
          'Head straight to the 1853 Gallery; float down to the book & poster shop; then a coffee. (Yes, you will want the big poster. Yes, it will fit on your wall. Probably.)',
        href: '/salts-mill',
      },
      {
        time: '12:15',
        title: 'Footbridge → Roberts Park loop',
        description:
          'Cross the River Aire, lap the lawns, enjoy the bandstand. Kids: playground; everyone: pavilion café.',
        href: '/roberts-park',
      },
      {
        time: '13:00',
        title: 'Lunch (choose vibe)',
        description:
          'Riverside pub classics, or specialty coffee + toasties back near the Mill. Sunny day? Aim for outdoor tables.',
        href: '#local-picks',
      },
      {
        time: '14:30',
        title: 'Towpath stroll (out-and-back)',
        description:
          'Turn west on the canal to Hirst Lock and back. It’s flat, photogenic, and ideal for digesting lunch + small life decisions.',
        href: '/walks',
      },
      {
        time: '16:00',
        title: 'Village streets & shop browse',
        description:
          'Back via Victoria Rd for Italianate views and independent stores. (If you reached for your phone to check house prices, we understand.)',
        href: '/shops',
      },
      {
        time: '17:00',
        title: 'Pint / early dinner',
        description:
          'Micro-pub or riverside table. If you’re training it home: the station is a short amble.',
      },
    ],
  },
  {
    slug: 'half-day',
    title: 'Half-day (tight schedule)',
    duration: 'Half day',
    summary:
      'Mill + short park loop + one sit-down — for last-minute plans and punctual people.',
    steps: [
      {
        title: 'Salts Mill (quick pass)',
        description:
          'Prioritise the 1853 Gallery and the bookshop. 60–75 minutes is enough to feel cultured and mildly tempted by espresso machines.',
        href: '/salts-mill',
      },
      {
        title: 'Footbridge & park',
        description:
          '20–30 mins under the trees, breathe, and back via the towpath for canal views.',
        href: '/roberts-park',
      },
      {
        title: 'Café or pub',
        description:
          'Pick a spot near Victoria Rd or by the river — choose whichever smells like chips.',
        href: '#local-picks',
      },
    ],
  },
  {
    slug: 'family',
    title: 'Family plan (buggy-friendly)',
    duration: 'Family',
    summary:
      'Smooth paths, easy toilets, ducks, and emergency snacks. (We’ve all been there.)',
    steps: [
      { title: 'Station → Mill (step-free)', description: 'Spacious floors, lifts where needed, plenty of room for prams.', href: '/salts-mill' },
      { title: 'Footbridge → Roberts Park', description: 'Playground, lawns, and a pavilion café. Toilets nearby.', href: '/roberts-park' },
      { title: 'Food break', description: 'Soup and sandwiches in winter; ice cream and outdoor tables in summer.', href: '#local-picks' },
    ],
  },
  {
    slug: 'dogs',
    title: 'Dog-friendly afternoon',
    duration: 'Dog-friendly',
    summary:
      'Towpath miles, water bowls, and a well-earned pint. Leads on where signed; ducks are basically unionised here.',
    steps: [
      { title: 'Towpath west (leads on)', description: 'Start by the Mill, head toward Hirst Lock. Please keep wildlife calm (including anglers).', href: '/walks/dog-friendly' },
      { title: 'Drink or treat', description: 'Some pubs have dog-friendly areas and water bowls; several cafés welcome dogs outdoors.', href: '#local-picks' },
    ],
  },
  {
    slug: 'rain',
    title: 'Rainy-day fallback',
    duration: 'Rainy day',
    summary:
      'Lean into galleries, book-browsing and long coffee. Embrace your inner art student.',
    steps: [
      { title: 'Salts Mill (linger longer)', description: 'Rotate exhibits, home/design sections and the bookshop. Umbrella dashes between doors.', href: '/salts-mill' },
      { title: 'Warm lunch', description: 'Soups, toasties, pies and puddings. Return to the gallery if the clouds persist.', href: '#local-picks' },
    ],
  },
]

// Local businesses — extended coverage; show 2 per category prominently.
const BUSINESSES: LocalSpot[] = [
  // Cafés
  {
    name: 'Tambourine Coffee',
    slug: 'tambourine-coffee',
    category: 'cafe',
    address: '38 Bingley Rd',
    postcode: 'BD18 4RU',
    url: 'https://tambourinecoffee.wordpress.com/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tambourine+Coffee+38+Bingley+Road+Saltaire',
    tags: ['vegan-options'],
    note: 'Specialty coffee; compact, friendly; baked things appear as if by magic.',
  },
  {
    name: 'Half Moon Café (Roberts Park)',
    slug: 'half-moon-cafe',
    category: 'cafe',
    address: 'Higher Coach Rd (Roberts Park)',
    postcode: 'BD17 7LU',
    url: 'http://halfmooncafe.co.uk/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Half+Moon+Cafe+Roberts+Park+Saltaire',
    tags: ['outdoor-seating'],
    note: 'Park pavilion café — strong “kids just burned off energy” vibes.',
  },

  // Pubs
  {
    name: "Fanny's Ale House",
    slug: 'fannys-ale-house',
    category: 'pub',
    address: '63 Saltaire Rd',
    postcode: 'BD18 3JN',
    url: 'https://fannysalehouse.com/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fanny%27s+Ale+House+BD18+3JN',
    tags: ['dog-friendly'],
    note: 'Traditional cask, wood-fires in season, effortlessly cosy.',
  },
  {
    name: 'Cap and Collar',
    slug: 'cap-and-collar',
    category: 'pub',
    address: '4 Queens Rd',
    postcode: 'BD18 4SJ',
    url: 'https://www.facebook.com/capcollar/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cap+and+Collar+Saltaire',
    tags: ['outdoor-seating'],
    note: 'Independent micro-pub; rotating lines; small but mighty.',
  },

  // Restaurants
  {
    name: 'The Boathouse Inn',
    slug: 'boathouse-inn',
    category: 'restaurant',
    address: 'Victoria Rd',
    postcode: 'BD18 3LA',
    url: 'https://theboathouseinn.co.uk/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Boathouse+Inn+Saltaire',
    tags: ['dog-friendly', 'outdoor-seating', 'kids-menu'],
    note: 'Riverside dining; classic pub mains; terrace tables on sunny days.',
  },
  {
    name: 'Shimla Spice (Shipley)',
    slug: 'shimla-spice',
    category: 'restaurant',
    address: '69 Otley Rd, Shipley',
    postcode: 'BD18 2BJ',
    url: 'https://shimlaspice.co.uk/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shimla+Spice+Shipley',
    tags: ['kids-menu', 'vegan-options'],
    note: 'Beloved Pakistani–Indian spot; good for family groups.',
  },

  // Takeaways
  {
    name: 'Websters Fish & Chips (Saltaire)',
    slug: 'websters-fish-and-chips',
    category: 'takeaway',
    address: '62 Bingley Rd',
    postcode: 'BD18 4SD',
    url: 'https://saltaire.webstersfishandchips.co.uk/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Websters+Fish+%26+Chips+Saltaire',
    tags: ['step-free'],
    note: 'Classic chippy; watch for gluten-free nights.',
  },
  {
    name: 'Saltaire Pizza',
    slug: 'saltaire-pizza',
    category: 'takeaway',
    address: '43 Saltaire Rd',
    postcode: 'BD18 3HZ',
    url: 'https://saltairepizzapastapollo.com/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Saltaire+Pizza+BD18+3HZ',
    tags: [],
    note: 'Pizza and grill; online ordering handy on late returns.',
  },

  // Bakeries & Desserts
  {
    name: 'Salts Village Bakery',
    slug: 'salts-village-bakery',
    category: 'bakery-dessert',
    address: '8 Victoria Rd',
    postcode: 'BD18 3LA',
    url: 'https://www.facebook.com/saltsvillagebakery/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salts+Village+Bakery+Saltaire',
    tags: [],
    note: 'Proper bakery staples; perfect for park picnics.',
  },
  {
    name: 'Hughes Family Bakers (Saltaire store)',
    slug: 'hughes-family-bakers',
    category: 'bakery-dessert',
    address: '32A Bingley Rd',
    postcode: 'BD18 4RU',
    url: 'https://www.melvyndavisbakers.com/the-bakehouse',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hughes+Family+Bakers+Saltaire',
    tags: [],
    note: 'Cakes, buns, and classics; range varies by day.',
  },

  // Shops
  {
    name: 'Salts Book & Poster Shop',
    slug: 'salts-book-and-poster-shop',
    category: 'shop',
    address: 'Salts Mill, Victoria Rd',
    postcode: 'BD18 3LA',
    url: 'https://saltsmillshop.co.uk/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salts+Book+%26+Poster+Shop',
    tags: [],
    note: 'Legendary; budget extra minutes; do not blame us for carry-on luggage complications.',
  },
  {
    name: 'Radstudio (design/homeware)',
    slug: 'radstudio',
    category: 'shop',
    address: 'Near the station (Saltaire)',
    postcode: 'BD18',
    url: 'https://radstudio.shop/',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Radstudio+Saltaire',
    tags: [],
    note: 'Independent design & gifts; dependable for last-minute birthdays.',
  },
]

// Honourable mentions list (names + links). You can surface later via filters.
const HONOURABLE: Array<{ name: string; url?: string; mapsUrl?: string; note?: string }> = [
  { name: 'Don’t Tell Titus (bar & food)', url: 'https://www.donttelltitus.com/', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Don%27t+Tell+Titus+Saltaire', note: 'Bar-restaurant on Victoria Rd.' },
  { name: 'The Terrace (pub/food)', url: 'https://www.facebook.com/theterracesaltaire/', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Terrace+Saltaire', note: 'Popular for sports; terrace tables.' },
  { name: 'Cycle shops & rentals (Shipley)', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=cycle+shop+Shipley', note: 'Handy for towpath days.' },
]

// Walks — internal links or GPX placeholders in /public/downloads (add later).
const WALKS: Walk[] = [
  {
    title: 'Towpath: Saltaire → Hirst Lock (there & back)',
    distanceKm: 4.0,
    grade: 'Easy',
    start: 'Salts Mill canal side',
    summary: 'Flat, smooth, pram-friendly. Lock gates and boats to watch. Coffee afterwards.',
    href: '/walks',
    gpx: '/downloads/saltaire-hirst-lock.gpx', // add later
  },
  {
    title: 'Saltaire → Bingley Five-Rise Locks',
    distanceKm: 11.0,
    grade: 'Moderate',
    start: 'Saltaire station',
    summary: 'Iconic destination; cafés at the top; train back from Bingley if legs protest.',
    href: '/walks/five-rise',
    gpx: '/downloads/saltaire-five-rise.gpx',
  },
  {
    title: 'Shipley Glen loop',
    distanceKm: 6.0,
    grade: 'Family',
    start: 'Roberts Park footbridge',
    summary: 'Mixed surfaces, woodland feel, big views; small legs will sleep well afterwards.',
    href: '/walks/shipley-glen',
    gpx: '/downloads/shipley-glen-loop.gpx',
  },
]

// Practical tips — tiny bites for scannability (sprinkle humor).
const PRACTICAL_TIPS: Tip[] = [
  { title: 'Cash vs cards', detail: 'Cards accepted almost everywhere; keep a couple of coins for odd machines / heritage stalls.' },
  { title: 'Toilets', detail: 'Roberts Park pavilion, Salts Mill, selected cafés/pubs. Festival days add temporary facilities.' },
  { title: 'Rain plan', detail: 'Mill galleries + bookshop + long coffee. Bring an umbrella; we are still in Yorkshire.' },
  { title: 'Quiet times', detail: 'Mornings before 10:30 are calm. Sundays are popular. The canal is peaceful at golden hour.' },
  { title: 'Shoes', detail: 'Towpath is fine in trainers; bring grippy soles if it’s been wet.' },
  { title: 'Respect the village', detail: 'This is a lived-in community. Keep noise reasonable; bins are dotted around.' },
]

// Etiquette (friendly “commandments”)
const COMMANDMENTS: string[] = [
  'Thou shalt photograph Salts Mill from the canal bend (and then check the shot once more, just in case).',
  'Thou shalt not feed ducks sourdough with activated walnuts — peas or proper duck food only.',
  'Thou shalt keep dogs on leads where signed (the squirrels have enough on).',
  'Thou shalt leave no trace on the park grass (except maybe a faint picnic-blanket rectangle).',
  'Thou shalt look both ways for cyclists on the towpath. The bell is not a marriage proposal; it just means “hello, passing!”.',
  'Thou shalt try at least one bun/pastry before concluding you’ve “tried everything”.',
  'Thou shalt allow extra minutes in the bookshop because time is a flat circle in there.',
]

// ---------------------------------- UI ---------------------------------------

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs uppercase tracking-wider text-gray-500">{children}</p>
}

function SectionTitle({
  id,
  children,
  kicker,
}: {
  id: string
  children: React.ReactNode
  kicker?: string
}) {
  return (
    <div className="mb-2">
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl">
        {children}
      </h2>
    </div>
  )
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="max-w-prose text-gray-700">{children}</p>
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-10 pt-8 md:grid-cols-2 md:pt-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            What to do in Saltaire — the ultimate guide
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Top 10 highlights, ready-made itineraries, local cafés and pubs we actually use, parking tips and step-free routes — all in one beautiful page.
            <span className="block text-sm text-gray-500">
              (We also tell you where the best pastry ambushes occur. You’re welcome.)
            </span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#top-10" className="btn btn-primary">Start with Top 10</Link>
            <Link href="#itineraries" className="btn btn-outline">One-day plan</Link>
            <Link href="/parking" className="btn btn-outline">Parking &amp; postcodes</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <li>Vintage-film images</li>
            <li>Original photos &amp; maps</li>
            <li>Local &amp; unbiased</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function OnThisPage() {
  const links = [
    { href: '#top-10', label: 'Top 10 highlights' },
    { href: '#itineraries', label: 'Itineraries' },
    { href: '#local-picks', label: 'Local picks' },
    { href: '#walks', label: 'Best walks' },
    { href: '#deep-history', label: 'History & UNESCO' },
    { href: '#architecture', label: 'Architecture highlights' },
    { href: '#seasons', label: 'Seasons & when to come' },
    { href: '#practical', label: 'Practical notes' },
    { href: '#photo-spots', label: 'Photo spots' },
    { href: '#rules', label: 'Etiquette (lightly comedic)' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <nav aria-label="On this page" className="mx-auto max-w-7xl px-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <Kicker>On this page</Kicker>
        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href={l.href as any}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Top10() {
  return (
    <section id="top-10" aria-labelledby="top-10-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="top-10-title" kicker="Start here">Top 10 Saltaire highlights</SectionTitle>
      <Lead>Each card links to a focused guide with maps, opening times, accessibility notes and FAQs.</Lead>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TOP10.map((it) => (
          <article key={it.href} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <Link href={it.href} className="block focus:outline-none">
              <div className="relative h-44 w-full md:h-52">
                <Image
                  src={it.image.src}
                  alt={it.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4 decoration-gray-300">
                  {it.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-600">{it.blurb}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function ItineraryCard({ it }: { it: Itinerary }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{it.title}</h3>
        <span className="inline-flex items-center rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-600">
          {it.duration}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-700">{it.summary}</p>
      <ol className="mt-4 space-y-3">
        {it.steps.map((s, i) => (
          <li key={`${it.slug}-${i}`} className="rounded-xl bg-gray-50 p-3">
            <div className="flex items-start gap-3">
              <span className="mt-1 min-w-[2rem] text-xs font-mono text-gray-500">{s.time ?? `S${i + 1}`}</span>
              <div className="grow">
                <div className="font-medium">{s.title}</div>
                <p className="text-sm text-gray-700">{s.description}</p>
                {s.href ? (
                  <p className="mt-1 text-sm">
                    <Link href={s.href} className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Details &rarr;</Link>
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </article>
  )
}

function Itineraries() {
  return (
    <section id="itineraries" aria-labelledby="it-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
        <SectionTitle id="it-title" kicker="Pick a plan">Ready-made itineraries</SectionTitle>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {ITINERARIES.map((it) => <ItineraryCard key={it.slug} it={it} />)}
        </div>
      </div>
    </section>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700 ring-1 ring-gray-200">{children}</span>
}

function BusinessCard({ b }: { b: LocalSpot }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={b.url ?? '#'} className="underline decoration-transparent underline-offset-4 hover:decoration-black">
            {b.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-600">{b.address ? `${b.address}${b.postcode ? `, ${b.postcode}` : ''}` : null}</p>
        {b.note ? <p className="mt-2 text-sm text-gray-700">{b.note}</p> : null}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {b.tags?.map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        {b.url ? <Link href={b.url} className="rounded-lg border border-gray-300 px-3 py-1 underline-offset-4 hover:bg-gray-50">Website</Link> : null}
        {b.mapsUrl ? <Link href={b.mapsUrl} className="rounded-lg border border-gray-300 px-3 py-1 underline-offset-4 hover:bg-gray-50">Open in Google Maps</Link> : null}
      </div>
    </article>
  )
}

function Category({ title, description, category }: { title: string; description: string; category: BusinessCategory }) {
  const items = BUSINESSES.filter((b) => b.category === category).slice(0, 2)
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-2">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="mt-1 max-w-prose text-sm text-gray-700">{description}</p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((b) => <BusinessCard key={b.slug} b={b} />)}
      </div>
    </section>
  )
}

function LocalPicks() {
  return (
    <section id="local-picks" aria-labelledby="local-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="local-title" kicker="Where to eat & drink">Local picks (curated)</SectionTitle>
      <Lead>Two per category for quick decision-making. Tap through for menus, hours and latest posts. We keep this current, prioritising places with recent activity.</Lead>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <Category title="Cafés & Coffee" description="Specialty coffee, brunch staples and park-side kiosks. Vegan options in the mix." category="cafe" />
        <Category title="Pubs & Beer" description="Cosy ale houses and a riverside pub. Many with outdoor seating; some dog-friendly." category="pub" />
        <Category title="Restaurants" description="Riverside British classics and beloved curry houses — book ahead on busy weekends." category="restaurant" />
        <Category title="Takeaways" description="Fish & chips and pizza near the station — ideal after long walks." category="takeaway" />
        <Category title="Bakeries & Desserts" description="Classic bakery staples plus sweet treats — availability varies by day." category="bakery-dessert" />
        <Category title="Shops: Books & Home" description="Independent book & poster haven inside the Mill, and a design/homeware store near the station." category="shop" />
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold tracking-tight">Honourable mentions</h3>
        <p className="mt-2 text-sm text-gray-700">Close by, useful, or just good energy:</p>
        <ul className="mt-2 list-disc pl-5 text-sm">
          {HONOURABLE.map((h, i) => (
            <li key={`hon-${i}`} className="mb-1">
              <span className="font-medium">{h.name}</span>
              {h.url ? <> — <Link href={h.url} className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Website</Link></> : null}
              {h.mapsUrl ? <> · <Link href={h.mapsUrl} className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Maps</Link></> : null}
              {h.note ? <span className="text-gray-600"> — {h.note}</span> : null}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-gray-500">
          We surface a broader list on category pages. Want your independent listed? Use our <Link href="/contact" className="underline">contact form</Link>.
        </p>
      </div>
    </section>
  )
}

function WalkCard({ w }: { w: Walk }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
        <span className="inline-flex items-center rounded-full border border-gray-300 px-2 py-0.5 text-xs text-gray-600">{w.grade}</span>
      </div>
      <p className="mt-1 text-sm text-gray-600">Start: {w.start} · {w.distanceKm} km</p>
      <p className="mt-2 text-sm text-gray-700">{w.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        {w.href ? <Link href={w.href} className="rounded-lg border border-gray-300 px-3 py-1 underline-offset-4 hover:bg-gray-50">Route details</Link> : null}
        {w.gpx ? <Link href={w.gpx} className="rounded-lg border border-gray-300 px-3 py-1 underline-offset-4 hover:bg-gray-50">Download GPX</Link> : null}
      </div>
    </article>
  )
}

function WalksSection() {
  return (
    <section id="walks" aria-labelledby="walks-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="walks-title" kicker="Stretch your legs">Best walks</SectionTitle>
      <Lead>Flat canal miles or woodland loops — pick your mood. Trains make point-to-point days easy. Bring snacks (then pretend it’s “fuel”).</Lead>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {WALKS.map((w) => <WalkCard key={w.title} w={w} />)}
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
        <p><strong>Safety:</strong> Towpaths can be narrow and shared with bikes; keep kids and dogs close at pinch points. After rain, expect some puddle diplomacy.</p>
      </div>
    </section>
  )
}

function DeepHistory() {
  return (
    <section id="deep-history" aria-labelledby="hist-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
        <SectionTitle id="hist-title" kicker="Context">History & UNESCO (quick-read)</SectionTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">From wool to world-class</h3>
            <p className="mt-2 text-sm text-gray-700">
              Sir Titus Salt moved his textile operations from Bradford’s smog to this riverside site in the 1850s,
              building an Italianate mill and an entire model village for workers — planned streets, quality housing,
              school, church, hospital, wash-houses and recreation. It was paternalistic, yes, but also forward-thinking
              for public health and education. UNESCO loved the completeness: industry + town planning + social reform.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Today, production’s gone, but the fabric remains: the Mill is culture/retail/food; the village is lived-in and listed.
              You are strolling a slice of industrial revolution optimism, with better coffee.
            </p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Quick timeline</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
              <li>1853: Salts Mill opens; it’s enormous and very proud of it.</li>
              <li>1850s–1870s: Model village built out — housing, school, church and amenities.</li>
              <li>Late 20th c.: Mill adapts; heavy industry recedes.</li>
              <li>2001: UNESCO World Heritage inscription (with nearby attractions boosting visits).</li>
              <li>Now: Culture, cafés, park, canal — the good life condensed into a walkable map square.</li>
            </ul>
            <p className="mt-2 text-xs text-gray-500">Longer read: <Link href="/history" className="underline">History hub</Link> · <Link href="/history/unesco" className="underline">Why UNESCO?</Link></p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Architecture() {
  const highlights = [
    { name: 'Salts Mill (Italianate)', tip: 'Count the arches and clock the proportion — classical dignity meets steam-age swagger.' },
    { name: 'Victoria Rd (sightline)', tip: 'The ultimate “village axis”: look north to the church; south to the Mill.' },
    { name: 'Terraces (Albert/Caroline)', tip: 'Uniform stone, neat chimneys, subtle house-type variations.' },
    { name: 'United Reformed Church', tip: 'A rotunda! In a mill village! The audacity is the point.' },
  ]
  return (
    <section id="architecture" aria-labelledby="arch-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="arch-title" kicker="Built beauty">Architecture highlights</SectionTitle>
      <Lead>Italianate mill, model-village order, and Victorian confidence. Bring a wide lens; resist the urge to straighten every chimney in post.</Lead>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {highlights.map((h) => (
          <div key={h.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{h.name}</h3>
            <p className="mt-2 text-sm text-gray-700">{h.tip}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Seasons() {
  const seasons: Record<string, string[]> = {
    Spring: [
      'Cherry blossoms and soft greens; light jackets and optimism.',
      'Towpath dries out; ducks union meeting resumes.',
      'Good time for early cafés and shorter queues.',
    ],
    Summer: [
      'Festivals, markets and late light; park picnics and beer gardens.',
      'Busy weekends — arrive early or go golden-hour.',
      'Bring suncream (yes, even here).',
    ],
    Autumn: [
      'Golds and ambers; best for photos along the canal.',
      'Crisper air; soups return to menus with authority.',
      'Crowds thin after half-term.',
    ],
    Winter: [
      'Mill galleries and long coffee; festive windows; brisk canalside walks.',
      'Short days — plan earlier; check opening times.',
      'Romantic if you like scarves (we do).',
    ],
  }
  return (
    <section id="seasons" aria-labelledby="season-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
        <SectionTitle id="season-title" kicker="When to come">Seasons at a glance</SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(seasons).map(([k, v]) => (
            <article key={k} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{k}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                {v.map((x, i) => <li key={`${k}-${i}`}>{x}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Practical() {
  return (
    <section id="practical" aria-labelledby="qp-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="qp-title" kicker="Practical">Getting here, parking & accessibility</SectionTitle>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Getting here</h3>
          <p className="mt-2 text-sm text-gray-700">
            <strong>By train:</strong> Frequent services to Saltaire from Leeds/Bradford/Ilkley/Skipton.
            <br />
            <strong>By car:</strong> Follow signs for Saltaire/Shipley; avoid narrow residential streets.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/plan/getting-here" className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Full travel guide &rarr;</Link>
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Parking</h3>
          <p className="mt-2 text-sm text-gray-700">
            Use <em>Exhibition Rd</em> or <em>Caroline St</em> car parks; watch height limits. We track price changes and free options nearby.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/parking" className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Prices, postcodes &amp; free options &rarr;</Link>
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold">Accessibility</h3>
          <p className="mt-2 text-sm text-gray-700">
            Canal towpath is mostly flat; pavements are good; Roberts Park has step-free loops and accessible toilets.
          </p>
          <p className="mt-2 text-sm">
            <Link href="/plan/accessibility" className="underline decoration-gray-300 underline-offset-4 hover:decoration-black">Step-free routes &amp; facilities &rarr;</Link>
          </p>
        </article>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="font-semibold">Quick tips</h3>
          <ul className="mt-2 list-disc pl-5">
            {PRACTICAL_TIPS.map((t) => <li key={t.title}><span className="font-medium">{t.title}:</span> {t.detail}</li>)}
          </ul>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
          <h3 className="font-semibold">Budget planner (rough)</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>Coffee & pastry: £4–8</li>
            <li>Pub lunch: £10–18 (kids ~£6–9)</li>
            <li>Train (off-peak, return): varies by origin; day-savers help</li>
            <li>Parking (day): see our <Link href="/parking" className="underline">prices table</Link></li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">Numbers fluctuate; check menus/boards for current prices.</p>
        </article>
      </div>
    </section>
  )
}

function PhotoSpots() {
  const spots = [
    { title: 'Salts Mill from the canal bend', tip: 'Golden hour reflections; a tripod if you like symmetry yoga.' },
    { title: 'Footbridge & weir', tip: 'Shoot from the south bank; watch for spray in winter flow.' },
    { title: 'Terraces (Albert/Caroline)', tip: 'Compression looks great — try 50–85mm for stacked chimneys.' },
    { title: 'Bandstand in Roberts Park', tip: 'Wide angle to capture lawns and crowd on event days.' },
  ]
  return (
    <section id="photo-spots" aria-labelledby="photo-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="photo-title" kicker="For your camera">Best photo spots</SectionTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {spots.map((s) => (
          <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{s.tip}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-500">
        <p>Pro etiquette: If you’re setting up a tripod on narrow paths, give way and smile with your whole face.</p>
      </div>
    </section>
  )
}

function Rules() {
  return (
    <section id="rules" aria-labelledby="rule-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
        <SectionTitle id="rule-title" kicker="Kindness in practice">The (friendly) Saltaire commandments</SectionTitle>
        <ul className="mt-4 space-y-2">
          {COMMANDMENTS.map((c, i) => (
            <li key={i} className="rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import NewsletterFormClient from '@/components/NewsletterFormClient'

function NewsletterCTA() {
  return (
    <section aria-labelledby="nl-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <div className="grid items-center gap-8 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-10">
        <div>
          <h2 id="nl-title" className="text-2xl font-bold md:text-3xl">The Saltaire Weekend (free)</h2>
          <p className="mt-2 max-w-prose text-gray-700">A short Friday email with what’s on, weather, parking notes and a featured walk. No spam, no fluff.</p>
        </div>
        <NewsletterFormClient />
      </div>
    </section>
  )
}

function FAQ() {
  const faqs: Array<{ q: string; a: string }> = [
    { q: 'How long do I need for Saltaire?', a: 'A comfortable one-day plan covers Salts Mill, the canal and Roberts Park with time for lunch. In a half-day, prioritise the Mill and a short park loop.' },
    { q: 'Where should I park?', a: 'Exhibition Rd or Caroline St car parks work well. Avoid narrow residential streets inside the model village. See our parking guide for current prices.' },
    { q: 'Is it good with kids?', a: 'Yes — wide pavements, pram-friendly routes, playground in Roberts Park, and lots of café options. Toilets are signposted.' },
    { q: 'Are dogs welcome?', a: 'On leads in Roberts Park and along the towpath where signed. Several cafés and pubs are dog-friendly outdoors; some indoors — check venue signs.' },
    { q: 'When is Salts Mill open?', a: 'Typically Wednesday–Sunday with varied hours by area. Always check the official site before travel.' },
    { q: 'Do I need tickets for the galleries?', a: 'The 1853 Gallery is free; special exhibitions may vary. Check the Mill’s site for details.' },
    { q: 'Is the towpath step-free?', a: 'Mostly. Surfaces vary but it’s generally flat; watch for puddles and leaf-litter in autumn/winter.' },
    { q: 'Can I swim in the river/canal?', a: 'No, please. Fast flows, hidden hazards; stick to paths. Wild-swimming options exist elsewhere with proper safety info.' },
    { q: 'Where are the best picnic spots?', a: 'Roberts Park lawns and along the canal (where space allows). Leave no trace — the ducks run a tight ship.' },
    { q: 'What’s the vibe after 6pm?', a: 'Calm. Pubs buzz; the park quiets down; evening golden light on the Mill is superb.' },
    { q: 'Any rainy-day ideas?', a: 'Yes — longer in the Mill galleries/shops, then café-hop. Umbrella dashes between doors add drama.' },
    { q: 'Is the station accessible?', a: 'Platforms are step-free via ramps; tactile paving is present. See our accessibility page for details.' },
    { q: 'Can I cycle?', a: 'Yes on the towpath; be courteous and slow near walkers. Bells are great; shouting “STRAVA!” is not.' },
    { q: 'Good souvenirs?', a: 'Hockney prints/posters, local books, cards and homeware from Radstudio. Totes recommended.' },
    { q: 'Where to watch sport?', a: 'Local pubs sometimes show big matches; check boards/socials. Or enjoy the calm and accept phone updates like a Victorian time traveler.' },
    { q: 'Is there EV charging?', a: 'Limited in immediate vicinity; Shipley/nearby options exist. Check your map app for live status.' },
    { q: 'Cash machines?', a: 'A few around Shipley/nearby; most places take cards or contactless.' },
    { q: 'Can I fly a drone?', a: 'Check current regulations and avoid flying over crowds, wildlife and private homes. Respect no-fly signage.' },
    { q: 'Is wild camping allowed?', a: 'No. Try official sites outside the village and keep the towpath calm for all.' },
    { q: 'Where can I get first aid?', a: 'Dial 111 for non-urgent advice. In emergencies dial 999. Many venues carry basic first-aid kits.' },
  ]
  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <SectionTitle id="faq-title" kicker="Quick answers">FAQ</SectionTitle>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((it, i) => (
          <details key={it.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>{it.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
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

// ------------------------------ JSON-LD bundle -------------------------------

function JsonLd() {
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://saltaireguide.uk/' },
      { '@type': 'ListItem', position: 2, name: 'What to do', item: 'https://saltaireguide.uk/things-to-do' },
      { '@type': 'ListItem', position: 3, name: 'Ultimate Guide', item: 'https://saltaireguide.uk/things-to-do/ultimate-guide' },
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'What to Do in Saltaire — Ultimate Guide (2025)',
    url: 'https://saltaireguide.uk/things-to-do/ultimate-guide',
    description:
      'Top 10 highlights, itineraries, cafés, pubs, restaurants, takeaways, bakeries, shops, walks, parking and accessibility — all in one place.',
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: TOP10.length,
    itemListElement: TOP10.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.title,
      url: `https://saltaireguide.uk${c.href}`,
      description: c.blurb,
    })),
  }

  // name + links only (no scraped ratings)
  const localBusinesses = BUSINESSES.map((b) => {
    const typeMap: Record<BusinessCategory, string> = {
      cafe: 'Cafe',
      pub: 'BarOrPub',
      restaurant: 'Restaurant',
      takeaway: 'FoodEstablishment',
      'bakery-dessert': 'Bakery',
      shop: 'Store',
    }
    const address = [b.address, b.postcode].filter(Boolean).join(', ')
    return {
      '@context': 'https://schema.org',
      '@type': typeMap[b.category] || 'LocalBusiness',
      name: b.name,
      url: b.url,
      address: address || undefined,
      telephone: b.phone || undefined,
      sameAs: b.mapsUrl ? [b.mapsUrl] : undefined,
    }
  })

  // ImageObjects for primary images (helps image search/assistants)
  const images = [
    { url: 'https://saltaireguide.uk/images/saltaire-canal.png', caption: 'Saltaire canal and Salts Mill at golden hour', width: 1600, height: 1066 },
    { url: 'https://saltaireguide.uk/images/salts-mill.png', caption: 'Salts Mill facade and tower', width: 1200, height: 800 },
    { url: 'https://saltaireguide.uk/images/roberts-park.png', caption: 'Roberts Park bandstand and lawns', width: 1200, height: 800 },
  ].map((i) => ({
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: i.url,
    caption: i.caption,
    width: i.width,
    height: i.height,
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      {localBusinesses.map((lb, i) => (
        <script key={`lb-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lb) }} />
      ))}
      {images.map((img, i) => (
        <script key={`img-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(img) }} />
      ))}
    </>
  )
}

// --------------------------------- Page --------------------------------------

export default function UltimateGuidePage() {
  return (
    <>
      <Hero />
      <div className="h-4" />
      <OnThisPage />
      <div className="h-4" />

      <Top10 />
      <Itineraries />
      <LocalPicks />
      <WalksSection />
      <DeepHistory />
      <Architecture />
      <Seasons />
      <Practical />
      <PhotoSpots />
      <Rules />
      <NewsletterCTA />
      <FAQ />
      <JsonLd />

      {/* Footer micro-disclaimer: comedy is gentle; facts are practical. */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <p className="mt-6 text-center text-xs text-gray-500">
          This guide is written by locals. Things change — menus, prices, opening times, weather, ducks — we update fast, but always check venue links before you travel.
        </p>
      </section>
    </>
  )
}

// -----------------------------------------------------------------------------
// End of file. If you want even more heft, add:
// - per-business micro blurbs with seasonal notes,
// - more walks with GPX files in /public/downloads,
// - monthly “What’s On” inject (server data from your /events source),
// - AVIF/WebP variants for images and <Image> src swap,
// - per-section “Read next” cards to cross-link deeper.
// -----------------------------------------------------------------------------
