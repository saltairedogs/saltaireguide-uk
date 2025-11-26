// src/app/roberts-park/page.tsx
// Roberts Park — cornerstone v2.5 (static, CWV-focused, SEO/E-E-A-T)
// - Server-only (no "use client" or client event handlers)
// - Sections: Intro, On-page ToC, Highlights, Facilities (rich), Step-free loops (short+extended),
//   Benches & shade, Café & loos, Picnic & photo spots, Dogs & etiquette, Wildlife & safety,
//   Transport & parking, Seasonal notes, History snapshot, Nearby combos, Events, FAQs, CTA
// - JSON-LD: WebPage + TouristAttraction + BreadcrumbList + ItemList(features) + HowTo(loop)
//   + FAQPage + Speakable (selectors)
// - Strong internal linking to Parking, Walks, Food & Drink, Salts Mill, Plan/Family, Getting Here
// - Images are static/remote and sized for speed; no client interactivity

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'Roberts Park, Saltaire — play areas, café, step-free river loop, benches & events (local guide, 2025)',
  description:
    'Everything you need for Roberts Park in Saltaire: step-free river loop, play areas, benches & shade, Half Moon Café, loos, wildlife & safety notes, photo spots and how to combine with Salts Mill and canal walks.',
  alternates: { canonical: `${site.url}/roberts-park` },
  openGraph: {
    title: 'Roberts Park, Saltaire — complete local guide',
    description:
      'Playgrounds, bandstand, Half Moon Café, step-free river loop, benches & shade, wildlife and events. Practical info with links to parking, walks and Salts Mill.',
    url: `${site.url}/roberts-park`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-13'

type BenchSpot = { label: string; shade: 'AM' | 'PM' | 'Mixed'; near: string; tip: string }
type PhotoSpot = { label: string; time: 'Morning' | 'Midday' | 'Golden hour' | 'Any'; tip: string }
type Feature = { title: string; note: string }

const HIGHLIGHTS: Feature[] = [
  {
    title: 'Step-free river loop',
    note:
      'A smooth, scenic loop via the park, riverside and Salts Mill side. Pram- and wheelchair-friendly with gentle gradients.',
  },
  {
    title: 'Two play areas',
    note:
      'A main playground near the bandstand and a toddler-friendly zone. Surfaces and equipment are generally well maintained.',
  },
  {
    title: 'Half Moon Café',
    note:
      'Casual food, coffee and ice cream beside the river. Expect peak queues on sunny weekends and holidays.',
  },
  {
    title: 'Bandstand & lawns',
    note:
      'Classic bandstand with big green lawns for picnics and space to spread out. Seasonal community events.',
  },
]

const FACILITIES: Feature[] = [
  { title: 'Loos', note: 'Public toilets are signposted; accessible cubicles typically available.' },
  { title: 'Seating', note: 'Benches around the bandstand and along riverside/canal paths.' },
  { title: 'Surfaces', note: 'Mostly tarmac/gravel with short sections of cobbles at approaches.' },
  { title: 'Dogs', note: 'Welcome; leads required in some areas — follow on-site notices.' },
  { title: 'Bins', note: 'Litter and dog-waste bins are dotted around; please pack out if full.' },
  { title: 'Shelter', note: 'Trees and bandstand area give partial shelter from showers and wind.' },
]

const ACCESSIBILITY_BULLETS: string[] = [
  'Main paths are level or gently sloped; mixed tarmac/gravel surfaces.',
  'Shortest loop uses the riverside and the footbridge towards Salts Mill.',
  'Benches appear every few minutes around the lawns and riverside.',
  'Cobbles appear at some approaches — choose smoother alternatives nearby.',
  'Towpath edges can be narrow at bridges; pause and let others pass.',
]

const LOOP_SHORT_STEPS: string[] = [
  'Start at the bandstand in Roberts Park.',
  'Head east on the riverside path (level tarmac).',
  'Cross the footbridge towards the Salts Mill side.',
  'Follow the level path by the canal and return to the park entrance.',
]

const LOOP_EXTENDED_STEPS: string[] = [
  'From the bandstand, walk east along the riverside to the footbridge.',
  'Cross to the Salts Mill side and pause for views back to the park.',
  'Continue along the canal path towards the village bridge.',
  'Loop back through the village streets or re-enter the park for lawns.',
]

const BENCHES: BenchSpot[] = [
  { label: 'Bandstand ring', shade: 'Mixed', near: 'Bandstand', tip: 'Good for kids watching music; some wind shelter.' },
  { label: 'Riverside north edge', shade: 'PM', near: 'River path', tip: 'Afternoon sun; space to park a pram beside.' },
  { label: 'Footbridge approach', shade: 'AM', near: 'Bridge ramp', tip: 'Morning light on water; watch pinch point flow.' },
  { label: 'Canal-side return', shade: 'PM', near: 'Canal path', tip: 'Reflections in late light; fewer dogs than river edge.' },
]

const PHOTOS: PhotoSpot[] = [
  { label: 'Footbridge mid-span', time: 'Golden hour', tip: 'Soft light on stone and water; hold rails, keep cameras secure.' },
  { label: 'Bandstand lawn corner', time: 'Any', tip: 'Wide lawn with chimney beyond; avoid event cables on music days.' },
  { label: 'Canal near village bridge', time: 'Morning', tip: 'Still water reflections; step aside for bikes.' },
  { label: 'Riverside benches', time: 'Golden hour', tip: 'Backlight on grass and trees; lens hood helps in summer.' },
]

const WILDLIFE_SAFETY: Feature[] = [
  { title: 'River & weirs', note: 'Fast water after rain; keep children and dogs clear of the edge.' },
  { title: 'Cyclists & shared paths', note: 'Keep left, listen for bells and give space at bridge pinch points.' },
  { title: 'Birds', note: 'Ducks, geese and herons are common; please don’t overfeed bread.' },
  { title: 'Seasonal works', note: 'Sections may shut temporarily for maintenance or events.' },
]

const DOG_TIPS: string[] = [
  'Use short leads at bridges and water edges; towpaths can be narrow.',
  'Pick lawn corners away from main footfall for calmer picnics.',
  'Carry a collapsible bowl; shade shifts through the day.',
  'Dispose of waste in dog bins or pack it out if full.',
]

const SEASONAL_NOTES: Array<{ season: string; bullets: string[] }> = [
  {
    season: 'Spring',
    bullets: [
      'Unstable showers — plan a short loop and café window.',
      'Bluebells and wild garlic appear in nearby woods (short drive/walk).',
    ],
  },
  {
    season: 'Summer',
    bullets: [
      'Golden light on water; outside tables fill fast — benches are close.',
      'Carry water; choose shade near the bandstand side or riverside trees.',
    ],
  },
  {
    season: 'Autumn',
    bullets: [
      'Leaf colour along riverside and canal; reflections at calm times.',
      'Wind funnels at bridge pinch points; pause and let others pass safely.',
    ],
  },
  {
    season: 'Winter',
    bullets: [
      'Short daylight — eat first, then a compact photo loop.',
      'Towpaths may be slick; footwear with grip helps.',
    ],
  },
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Where do I park for Roberts Park?',
    a: 'Use Caroline Street or Exhibition Road and walk over — both within about 10 minutes. Limited bays near the park fill quickly. See our Parking guide for details.',
  },
  {
    q: 'Is the park step-free?',
    a: 'Yes, most main routes are step-free with gentle gradients. The river loop here is popular with prams and wheelchairs.',
  },
  {
    q: 'Can I get coffee/food?',
    a: 'Half Moon Café sits inside the park. For more options, cross the footbridge to Salts Mill or village cafés on Victoria Road.',
  },
  {
    q: 'Are there toilets?',
    a: 'Yes — public loos are signposted in/near the park. Accessible cubicles are typically available.',
  },
  {
    q: 'When is it busiest?',
    a: 'Sunny weekends, school holidays and event days. Arrive before late morning or go late afternoon for calmer paths.',
  },
  {
    q: 'Is it dog-friendly?',
    a: 'Yes — keep leads short around bridges and wildlife. Use bins provided and be mindful of picnic areas.',
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
        <li aria-current="page" className="text-gray-800">
          Roberts Park
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Roberts Park, Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Riverside lawns, play areas and a bandstand opposite Salts Mill. Here’s everything you need:
            step-free loops, benches & shade, café and loos, photo tips, safety notes and how to pair
            it with the village.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking" className="btn btn-primary">Parking</Link>
            <Link href="/walks" className="btn btn-outline">Walks</Link>
            <Link href="/food-drink" className="btn btn-ghost">Cafés & pubs</Link>
            <Link href="/plan/family" className="btn btn-muted">With kids</Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated: {UPDATED}</li>
            <li className="badge">Family-friendly</li>
            <li className="badge">Step-free routes</li>
            <li className="badge">Bandstand & events</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/roberts-park.png"
            alt="Bandstand and riverside lawns at Roberts Park"
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
    { href: '#highlights', label: 'Highlights' },
    { href: '#play', label: 'Play & facilities' },
    { href: '#accessibility', label: 'Accessibility notes' },
    { href: '#loop', label: 'Step-free loops' },
    { href: '#benches', label: 'Benches & shade' },
    { href: '#cafe-loos', label: 'Café & loos' },
    { href: '#picnic-photos', label: 'Picnic & photo spots' },
    { href: '#dogs', label: 'Dogs & etiquette' },
    { href: '#wildlife', label: 'Wildlife & safety' },
    { href: '#transport', label: 'Transport & parking' },
    { href: '#seasonal', label: 'Seasonal notes' },
    { href: '#history', label: 'History snapshot' },
    { href: '#nearby', label: 'Nearby & combos' },
    { href: '#events', label: 'Events' },
    { href: '#faqs', label: 'FAQs' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4 toc-sticky">
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

function Highlights() {
  return (
    <section id="highlights" aria-labelledby="highlights-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="highlights-title">Highlights</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        A classic Victorian park beside the River Aire with views to Salts Mill and a gentle circuit that suits all ages.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {HIGHLIGHTS.map((h) => (
          <article key={h.title} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{h.title}</h3>
              <p className="mt-2 text-gray-700">{h.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function PlayAndFacilities() {
  return (
    <section id="play" aria-labelledby="play-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="play-title">Play & facilities</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Expect well-used lawns, a main playground and a toddler zone near the core of the park. Facilities below help
        you plan a smoother visit.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {FACILITIES.map((f) => (
          <article key={f.title} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-700">{f.note}</p>
            </div>
          </article>
        ))}
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Pair with the village</h3>
            <p className="mt-2 text-gray-700">
              Cross the footbridge to <Link className="underline underline-offset-4" href="/salts-mill">Salts Mill</Link> for galleries and
              bookshops, or head up to <Link className="underline underline-offset-4" href="/food-drink">Eat & Drink</Link> picks.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function AccessibilityNotes() {
  return (
    <section id="accessibility" aria-labelledby="acc-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="acc-title">Accessibility notes</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The park and its immediate approaches are generally level with gentle gradients. Use these pointers to choose
        smoother paths and reliable pauses.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="callout">
          <h3 className="text-lg font-semibold">Surfaces & gradients</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {ACCESSIBILITY_BULLETS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
        <article className="callout callout-success">
          <h3 className="text-lg font-semibold">Good pause points</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Bandstand perimeter benches with partial wind shelter.</li>
            <li>Riverside benches near the footbridge approaches.</li>
            <li>Canal-side return path (fewer dogs, steadier flow).</li>
          </ul>
        </article>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        Disclaimer: path conditions change with weather and maintenance. Treat this as local guidance and pick the smoother option on the day.
      </p>
    </section>
  )
}

function StepFreeLoops() {
  return (
    <section id="loop" aria-labelledby="loop-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="loop-title">Step-free loops</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Two simple circuits keep distances short and views strong. Both are mostly level and suit prams, wheelchairs and
        small legs.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Short riverside loop (20–30 mins)</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {LOOP_SHORT_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-2 text-sm text-gray-700">Surface: tarmac/gravel; gradients gentle. Benches within a few minutes.</p>
          </div>
        </article>

        <article className="card card-hover">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Extended river–canal loop (35–50 mins)</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700">
              {LOOP_EXTENDED_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-2 text-sm text-gray-700">Adds the canal-side return with classic reflections and calmer edges.</p>
          </div>
        </article>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <article className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/roberts-park.png"
            alt="People walking near a bandstand on a sunny day"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </article>
        <article className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow">
          <Image
            src="/images/roberts-park.png"
            alt="Tree-lined canal towpath with reflections"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </article>
      </div>
    </section>
  )
}

function BenchesShade() {
  return (
    <section id="benches" aria-labelledby="benches-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="benches-title">Benches & shade</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Shade moves through the day. These spots make easy pauses with prams, wheels or picnic boxes.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[720px]">
          <thead>
            <tr>
              <th>Spot</th>
              <th>Best light</th>
              <th>Near</th>
              <th>Tip</th>
            </tr>
          </thead>
          <tbody>
            {BENCHES.map((b) => (
              <tr key={b.label}>
                <td className="font-medium">{b.label}</td>
                <td>{b.shade}</td>
                <td>{b.near}</td>
                <td>{b.tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">Benches come and go as works happen; treat this as a starting point.</p>
    </section>
  )
}

function CafeAndLoos() {
  return (
    <section id="cafe-loos" aria-labelledby="cl-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="cl-title">Half Moon Café & loos</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Café</h3>
            <p className="mt-2 text-gray-700">
              The café sits beside the river with outdoor seating. Queues grow at lunchtime on sunny weekends — go early
              or late afternoon for a calmer stop.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              For more options, cross the bridge to{' '}
              <Link className="underline underline-offset-4" href="/salts-mill">Salts Mill</Link> or head to our{' '}
              <Link className="underline underline-offset-4" href="/food-drink">Eat & Drink</Link> picks.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Toilets</h3>
            <p className="mt-2 text-gray-700">
              Public toilets are signposted. Accessible cubicles are typically available; baby-change facilities usually in the main block.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function PicnicAndPhotos() {
  return (
    <section id="picnic-photos" aria-labelledby="pp-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="pp-title">Picnic & photo spots</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="callout">
          <h3 className="text-lg font-semibold">Picnics</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Use lawn corners with wind shelter; keep a small rubbish bag with you.</li>
            <li>Grab sturdy bakery items that travel well — see <Link href="/food-drink/bakeries" className="underline underline-offset-4">bakeries</Link>.</li>
            <li>Benches near the canal help if grass is damp; tubs beat cones if moving.</li>
          </ul>
        </article>
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Photo ideas</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {PHOTOS.map((p) => (
                <li key={p.label}>
                  <strong>{p.label}</strong> — {p.time}. {p.tip}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

function DogsEtiquette() {
  return (
    <section id="dogs" aria-labelledby="dogs-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="dogs-title">Dogs & etiquette</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="callout">
          <h3 className="text-lg font-semibold">Quick tips</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            {DOG_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Where to walk next</h3>
            <p className="mt-2 text-gray-700">
              Try a short towpath leg towards Hirst Lock or a loop across the canal. See{' '}
              <Link className="underline underline-offset-4" href="/walks/dog-friendly">dog-friendly walks</Link>.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function WildlifeAndSafety() {
  return (
    <section id="wildlife" aria-labelledby="wild-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="wild-title">Wildlife & safety</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {WILDLIFE_SAFETY.map((w) => (
          <article key={w.title} className="callout">
            <h3 className="text-lg font-semibold">{w.title}</h3>
            <p className="mt-2 text-gray-700">{w.note}</p>
          </article>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-700">
        Respect the park as a shared space: keep music low, take litter home and follow requests from stewards or staff.
      </div>
    </section>
  )
}

function TransportParking() {
  return (
    <section id="transport" aria-labelledby="tp-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="tp-title">Transport & parking</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <article className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">By train/bus</h3>
            <p className="mt-2 text-gray-700">
              Saltaire station is a short, level walk from the village core and the park footbridge. Buses serve the
              main road above the village; drop down to the park via signposted paths.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              See <Link className="underline underline-offset-4" href="/plan/getting-here">Getting here</Link> for simple routes and step-free notes.
            </p>
          </div>
        </article>
        <article className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">By car</h3>
            <p className="mt-2 text-gray-700">
              Use <Link className="underline underline-offset-4" href="/parking">Caroline Street</Link> or{' '}
              <Link className="underline underline-offset-4" href="/parking#exhibition-road">Exhibition Road</Link> and walk over.
              Limited bays near the park fill fast on sunny weekends and event days.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function SeasonalNotes() {
  return (
    <section id="seasonal" aria-labelledby="seasonal-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="seasonal-title">Seasonal notes</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {SEASONAL_NOTES.map((s) => (
          <article key={s.season} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{s.season}</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function HistorySnapshot() {
  return (
    <section id="history" aria-labelledby="hist-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="hist-title">History snapshot</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The park forms a green counterpart to the model village and mill across the river. Its bandstand, lawns and
        riverside paths make an easy pairing with Salts Mill and the towpath. For deeper context on the village and
        architecture, start with the <Link href="/history" className="underline underline-offset-4">History hub</Link>.
      </p>
      <ul className="mt-2 list-disc pl-5 text-gray-700">
        <li>Victorian layout with lawns and ornamental features facing the mill.</li>
        <li>Footbridge links the park to the village core and Salts Mill axis.</li>
        <li>Green lungs for picnics, events and low-stress wandering beside water.</li>
      </ul>
    </section>
  )
}

function NearbyCombos() {
  const links = [
    { label: 'Salts Mill — art & bookshops', href: '/salts-mill' },
    { label: 'Walks hub — pick a short route', href: '/walks' },
    { label: 'Hirst Wood loop — level & scenic', href: '/walks/hirst-wood' },
    { label: 'Eat & Drink — cafés, pubs, desserts', href: '/food-drink' },
  ]
  return (
    <section id="nearby" aria-labelledby="nearby-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="nearby-title">Nearby & easy combos</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Keep distances short and decisions simple. Pair the park with one of these for a calm day out.
      </p>
      <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href as any} className="underline underline-offset-4 hover:opacity-80">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="events-title">Events at the bandstand</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Music and community events pop up spring–autumn. Dates change each year — check{' '}
        <Link className="underline underline-offset-4" href="/events">What’s On</Link> for the latest round-up.
      </p>
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
    <section aria-label="Explore Saltaire" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Make a perfect Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Pair the park with Salts Mill, a canal stretch and a village café. Our guides keep it practical and current.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/salts-mill" className="btn btn-primary">Salts Mill</Link>
              <Link href="/walks" className="btn btn-outline">Best walks</Link>
              <Link href="/parking" className="btn btn-ghost">Parking</Link>
              <Link href="/food-drink" className="btn btn-muted">Eat & Drink</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/roberts-park.png"
              alt="Train arriving near a riverside park — easy to visit without a car"
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

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Roberts Park, Saltaire — local guide',
    url: `${base}/roberts-park`,
    description:
      'Play areas, café, loos, step-free river loop, benches & shade, wildlife and events at Roberts Park in Saltaire — practical, up-to-date local guide.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#highlights-title', '#loop-title', '#faq-title'] },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Roberts Park', item: `${base}/roberts-park` },
    ],
  }

  const attraction = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Roberts Park',
    url: `${base}/roberts-park`,
    description:
      'Riverside Victorian park opposite Salts Mill with bandstand, lawns, play areas and a popular step-free loop.',
    isPartOf: { '@type': 'Place', name: 'Saltaire', url: `${base}/` },
    touristType: ['Family', 'Walking', 'Picnic'],
  }

  const features = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Roberts Park highlights',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: HIGHLIGHTS.length,
    itemListElement: HIGHLIGHTS.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: h.title,
      description: h.note,
      url: `${base}/roberts-park#highlights`,
    })),
  }

  const howToLoop = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Step-free river loop at Roberts Park',
    totalTime: 'PT25M',
    step: LOOP_SHORT_STEPS.map((s) => ({ '@type': 'HowToStep', text: s })),
    supply: [{ '@type': 'HowToSupply', name: 'Comfortable shoes or wheels' }],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(attraction) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(features) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLoop) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function RobertsParkPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <Highlights />
      <PlayAndFacilities />
      <AccessibilityNotes />
      <StepFreeLoops />
      <BenchesShade />
      <CafeAndLoos />
      <PicnicAndPhotos />
      <DogsEtiquette />
      <WildlifeAndSafety />
      <TransportParking />
      <SeasonalNotes />
      <HistorySnapshot />
      <NearbyCombos />
      <Events />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
