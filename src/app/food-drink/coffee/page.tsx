// src/app/food-drink/coffee/page.tsx
// Coffee in Saltaire — directory + calm, practical guide (cornerstone v3)
// - Server component (no client handlers), static rendering for CWV
// - Adds full-bleed hero background image (text-safe left) + uses it as OG image
// - Neutral, non-ranked venue directory (alphabetical) + “claim/update” flow via WhatsApp/contact
// - JSON-LD: WebPage + BreadcrumbList + ItemList (venues + styles + scenarios) + FAQPage + HowTo + Speakable

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Assets ---------------------------------- */

const HERO_BG = '/images/food-drink/coffee/saltaire-shipley-coffee-hero.png'
const LAPTOP_IMG = '/images/food-drink/coffee/saltaire-coffee-laptop-etiquette.png'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title:
    'Coffee shops in Saltaire & Shipley (2025): a calm directory + takeaway tips, decaf & laptop etiquette',
  description:
    'A warm, neutral coffee directory for Saltaire & Shipley (not ranked), plus practical local tips: calm tables, towpath takeaways, milk/decaf notes and remote-work etiquette.',
  alternates: { canonical: `${site.url}/food-drink/coffee` },
  openGraph: {
    title: 'Coffee in Saltaire & Shipley — a calm directory (not ranked)',
    description:
      'Neutral coffee directory (not ranked) + local tips: calm tables, towpath takeaways, milk/decaf notes and laptop etiquette.',
    url: `${site.url}/food-drink/coffee`,
    type: 'article',
    images: [
      {
        url: HERO_BG,
        width: 1920,
        height: 823, // ~21:9
        alt: 'Saltaire & Shipley coffee guide — calm village street scene',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee in Saltaire & Shipley — calm directory (not ranked)',
    description:
      'Neutral coffee directory (not ranked) + practical tips: calm tables, takeaways, milk/decaf notes and laptop etiquette.',
    images: [HERO_BG],
  },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-12'
const WHATSAPP_NUMBER = '+44 7424 208127'
const WHATSAPP_WA = 'https://wa.me/447424208127'
const WHATSAPP_GROUP = 'https://chat.whatsapp.com/Iv6KTDzUSwX87LfzWN1ZkR'

type ListingStatus = 'community' | 'owner-confirmed'
type Area = 'Saltaire village' | 'Near Salts Mill' | 'Roberts Park' | 'Canal / Towpath' | 'Shipley'

type Venue = {
  name: string
  slug: string
  area: Area
  categoryHint?: string
  shortBlurb: string
  tags: string[]
  status: ListingStatus
  lastVerified?: string
  websiteUrl?: string
}

const VENUES: Venue[] = [
  {
    name: 'Dandelion Cafe',
    slug: 'dandelion-cafe',
    area: 'Saltaire village',
    categoryHint: 'Cafe',
    shortBlurb: 'A friendly local café option in the village for a sit-in coffee or quick stop.',
    tags: ['Sit-in', 'Takeaway easy', 'Village core'],
    status: 'community',
    lastVerified: UPDATED,
  },
  {
    name: 'giddy arts',
    slug: 'giddy-arts',
    area: 'Saltaire village',
    categoryHint: 'Craft gallery + speciality coffee bar',
    shortBlurb: 'An independent spot combining a craft/gallery feel with a speciality coffee bar.',
    tags: ['Speciality coffee', 'Quiet corner', 'Village core'],
    status: 'community',
    lastVerified: UPDATED,
    websiteUrl: 'https://www.giddyarts.co.uk',
  },
  {
    name: 'The Olive Cafe',
    slug: 'the-olive-cafe',
    area: 'Saltaire village',
    categoryHint: 'Cafe',
    shortBlurb: 'A village café choice that works well for a relaxed catch-up and a warm drink.',
    tags: ['Catch-up spot', 'Sit-in', 'Village core'],
    status: 'community',
    lastVerified: UPDATED,
  },
  {
    name: 'The Quaffery',
    slug: 'the-quaffery',
    area: 'Saltaire village',
    categoryHint: 'Espresso + chocolate + chai + tea bar',
    shortBlurb: 'A drink-led spot (espresso/chocolate/chai/tea) that feels like a quick “treat stop”.',
    tags: ['Treat stop', 'Takeaway easy', 'Village core'],
    status: 'community',
    lastVerified: UPDATED,
    websiteUrl: 'https://thequaffery.square.site',
  },
  {
    name: 'Tambourine Coffee',
    slug: 'tambourine-coffee',
    area: 'Saltaire village',
    categoryHint: 'Cafe',
    shortBlurb: 'A simple, local coffee stop with a calm vibe — good as part of a wander day.',
    tags: ['Calm vibe', 'Sit-in', 'Village core'],
    status: 'community',
    lastVerified: UPDATED,
  },
]
  .slice()
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())) as Venue[]

const TAGS_GUIDE = [
  { label: 'Quiet corner', desc: 'More of a reset vibe than a loud brunch queue.' },
  { label: 'Catch-up spot', desc: 'Good for meeting a friend without feeling rushed.' },
  { label: 'Takeaway easy', desc: 'Feels smooth if you’re heading canal-side or to the park.' },
  { label: 'Speciality coffee', desc: 'Leans more “coffee-first” than “food-first”.' },
  { label: 'Treat stop', desc: 'A quick pick-me-up rather than a long sit-down.' },
  { label: 'Laptop-friendly', desc: 'Typically ok off-peak (always be considerate).' },
] as const

function whatsappPrefill(text: string) {
  return `${WHATSAPP_WA}?text=${encodeURIComponent(text)}`
}

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
    title: 'Takeaway for the towpath',
    summary:
      'Grab-and-go for a canal or park wander. Lids help in wind; carry-out trays are useful for groups.',
    tips: ['Ask for a lid + napkin; wind can catch crema.', 'Walk a few minutes to quieter benches.', 'Bin cups responsibly or bring a reusable.'],
    area: 'Canal/Towpath',
  },
  {
    id: 'post-mill',
    title: 'Post–Salts Mill browse',
    summary:
      'Combine bookshop browsing with a coffee before or after. Expect weekend peaks around lunch.',
    tips: ['Arrive earlier or later to dodge peaks.', 'Split party: one finds seating while the other orders.', 'Keep bags tucked in on busy aisles.'],
    area: 'Near Salts Mill',
  },
  {
    id: 'park-picnic',
    title: 'Roberts Park coffee break',
    summary:
      'Takeaway then lawns/benches by the river. On-lead near play areas; mind sports pitches.',
    tips: ['Bring a small layer; wind cools cups fast.', 'Keep paths clear and bin cups.', 'On event days, walk a little further for quiet.'],
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
  { id: 'flat-white', name: 'Flat white', flavour: 'Smooth, balanced espresso-forward', milk: 'Textured microfoam', notes: 'Reliable pick for a short milk drink; ask for a small size for best ratio.' },
  { id: 'cappuccino', name: 'Cappuccino', flavour: 'Classic, slightly drier foam cap', milk: 'Foamier than a flat white', notes: 'Good outdoors — foam helps hold heat a little longer.' },
  { id: 'latte', name: 'Latte', flavour: 'Milk-forward, gentle espresso taste', milk: 'Silky, larger volume', notes: 'Great for slower sipping; go smaller if you want stronger coffee flavour.' },
  { id: 'americano', name: 'Americano / Long black', flavour: 'Clean espresso with hot water', milk: 'Optional splash', notes: 'Easy takeaway choice; ask for “long black” if you prefer water on top.' },
  { id: 'filter', name: 'Filter / Batch brew', flavour: 'Light, clear cup; origin-forward', milk: 'Usually taken black', notes: 'If available, it’s the lowest-fuss option said plainly: hot, steady, flavourful.' },
  { id: 'decaf', name: 'Decaf', flavour: 'Varies; good decaf is balanced', milk: 'Any', notes: 'Ask if it’s Swiss Water or sugarcane process — both are common and reliable.' },
]

const REMOTE_WORK_TIPS = [
  'Buy first, then choose an out-of-the-way table; avoid blocking big tables at peak brunch.',
  'Keep calls short and quiet; step outside for long meetings.',
  'One drink per hour is a fair baseline; add a snack if you settle in.',
  'Use headphones; mind power sockets and cable trip hazards.',
  'Be kind at peak times — offer to share or switch to a smaller table.',
]

const MILK_ALTS = [
  'Semi/whole dairy (standard)',
  'Oat (most common alternative)',
  'Almond/soy (varies by venue)',
  'Lactose-free dairy (varies)',
]

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is this a ranking of the “best” coffee?',
    a: 'No — we don’t rank venues. This page is a calm directory plus practical local tips. Listings are alphabetical and we keep notes neutral.',
  },
  {
    q: 'How do you keep listings fair and up to date?',
    a: 'We rely on owner confirmations and community tips. If something changes, send a quick note via the contact page or WhatsApp and we’ll correct it.',
  },
  {
    q: 'Where are the calmest coffee tables?',
    a: 'Look for side rooms, back corners or outdoor benches away from doors and till queues. Mid-morning and mid-afternoon are quieter.',
  },
  {
    q: 'Which drink is best for takeaway on the canal?',
    a: 'Flat whites and americanos travel well. Cappuccino foam helps keep heat outdoors; filter is great when available.',
  },
  {
    q: 'Do cafés support alternative milks and decaf?',
    a: 'Oat milk is common; almond/soy vary. Many stock good decaf — ask about Swiss Water or sugarcane process.',
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
    <header className="relative overflow-hidden border-b border-gray-200/70">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Text-safe left third + gentle overall wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ee]/95 via-[#fbf6ee]/80 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/65" />
      </div>

      <div className="relative">
        <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
          <div>
            <h1 id="intro-title" className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Coffee in Saltaire &amp; Shipley
            </h1>
            <p className="mt-3 max-w-prose text-lg text-gray-800">
              A calm, neutral directory (not ranked) — plus practical tips for finding a relaxed seat,
              choosing a good takeaway, and keeping café time smooth at busy hours.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="badge">Updated: {UPDATED}</span>
              <span className="badge">Not ranked</span>
              <span className="badge">Takeaway • sit-in • etiquette</span>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/92 p-5 shadow-lg backdrop-blur-sm">
            <div className="text-sm font-semibold text-gray-900">Quick actions</div>
            <div className="mt-3 grid gap-2">
              <a
                href={WHATSAPP_GROUP}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-white"
              >
                Join the local WhatsApp chat →
              </a>

              <a
                href={whatsappPrefill(
                  "Hi Saltaire Guide — I’d like to add/update a coffee listing. Here’s the name + any key notes:"
                )}
                className="rounded-2xl bg-black px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-95"
              >
                Add / update a listing via WhatsApp
              </a>

              <Link
                href="/contact"
                className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Prefer email? Contact page
              </Link>
            </div>

            <p className="mt-3 text-xs text-gray-700">
              We don’t sell rankings. If something looks wrong, we’ll fix it fast.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#directory', label: 'Directory (not ranked)' },
    { href: '#how-we-keep-it-fair', label: 'How we keep it fair' },
    { href: '#scenarios', label: 'Best for… (today)' },
    { href: '#styles', label: 'Drink cheat-sheet' },
    { href: '#remote', label: 'Laptop etiquette' },
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
              <a
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                href={i.href}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function Directory() {
  return (
    <section id="directory" aria-labelledby="dir-title" className="container mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="dir-title" className="text-2xl font-bold tracking-tight md:text-3xl">
            Coffee directory (not ranked)
          </h2>
          <p className="mt-2 max-w-prose text-gray-700">
            Listed alphabetically. Notes are intentionally neutral — built for visitors and respectful to businesses.
          </p>
        </div>
        <div className="text-xs text-gray-600">
          <span className="badge">Listings: {VENUES.length}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VENUES.map((v) => (
          <article key={v.slug} className="card card-hover">
            <div className="card-body">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{v.name}</h3>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
                    <span className="badge">{v.area}</span>
                    {v.categoryHint ? <span className="badge">{v.categoryHint}</span> : null}
                    <span className="badge">
                      {v.status === 'owner-confirmed' ? 'Owner confirmed' : 'Community listing'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-sm text-gray-700">{v.shortBlurb}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {v.tags.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`#venue-${v.slug}`}
                  className="text-sm font-semibold underline underline-offset-4 hover:text-black"
                >
                  Open listing →
                </a>

                <a
                  href={whatsappPrefill(`Hi Saltaire Guide — quick update for ${v.name}: `)}
                  className="text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                >
                  Suggest an update
                </a>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Last checked: {v.lastVerified ?? '—'}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5">
        <h3 className="text-lg font-semibold">Tag guide (what we mean)</h3>
        <p className="mt-1 max-w-prose text-sm text-gray-700">
          Tags are small “at a glance” hints — not scores. If you run a venue and want these adjusted,
          message us and we’ll update.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {TAGS_GUIDE.map((t) => (
            <div key={t.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-sm font-semibold text-gray-900">{t.label}</div>
              <div className="mt-1 text-sm text-gray-700">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fairness() {
  return (
    <section
      id="how-we-keep-it-fair"
      aria-labelledby="fair-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-12">
        <h2 id="fair-title" className="text-2xl font-bold tracking-tight md:text-3xl">
          How we keep it fair (and useful)
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <ul className="list-disc pl-5 text-gray-700">
              <li><b>No rankings</b>. The directory is alphabetical.</li>
              <li><b>Neutral notes</b>. We avoid hype and avoid takedowns.</li>
              <li><b>Fast corrections</b>. If something changes, we update it.</li>
              <li><b>Owner-friendly</b>. Businesses can confirm or adjust their listing.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="text-sm font-semibold text-gray-900">Run a café?</div>
            <p className="mt-2 text-sm text-gray-700">
              You can claim your listing, add correct links, and share one or two practical notes
              (quiet times, dog policy, laptop friendliness, accessibility).
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={whatsappPrefill(
                  "Hi Saltaire Guide — I’m the owner/manager and I’d like to claim our coffee listing. Venue name: "
                )}
                className="rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Claim a listing (WhatsApp)
              </a>
              <Link
                href="/contact"
                className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                Claim via email
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-600">Or just text {WHATSAPP_NUMBER}. We keep it simple.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function VenueProfiles() {
  return (
    <section aria-labelledby="venues-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="venues-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Venue notes (expanded)
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Short, practical summaries you can scan. These are not reviews. If you notice anything outdated, send a quick update.
      </p>

      <div className="mt-6 space-y-4">
        {VENUES.map((v) => (
          <details
            key={v.slug}
            id={`venue-${v.slug}`}
            className="group rounded-2xl border border-gray-200 bg-white p-5 open:bg-gray-50"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{v.name}</div>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
                    <span className="badge">{v.area}</span>
                    {v.categoryHint ? <span className="badge">{v.categoryHint}</span> : null}
                    <span className="badge">{v.status === 'owner-confirmed' ? 'Owner confirmed' : 'Community listing'}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-gray-800 underline decoration-gray-300 underline-offset-4 group-open:decoration-black">
                  {v.websiteUrl ? 'Open site' : 'Open notes'} →
                </div>
              </div>
            </summary>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-gray-700">{v.shortBlurb}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {v.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
                  <div className="text-sm font-semibold text-gray-900">Help keep this accurate</div>
                  <p className="mt-1 text-sm text-gray-700">
                    Quick updates are welcome — we’d rather be correct than “confident”.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={whatsappPrefill(`Hi Saltaire Guide — update for ${v.name}: `)}
                      className="text-sm font-semibold underline underline-offset-4 hover:text-black"
                    >
                      Message an update →
                    </a>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                    >
                      Contact page
                    </Link>
                  </div>
                </div>

                <p className="mt-3 text-xs text-gray-500">Last checked: {v.lastVerified ?? '—'}</p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Links</div>
                <div className="mt-2 space-y-2 text-sm text-gray-700">
                  {v.websiteUrl ? (
                    <a
                      href={v.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:text-black"
                    >
                      Official website →
                    </a>
                  ) : (
                    <div className="text-sm text-gray-600">Official website: (add one)</div>
                  )}

                  <div className="text-sm text-gray-600">
                    Owner/manager?{' '}
                    <a
                      href={whatsappPrefill(`Hi Saltaire Guide — I’d like to claim the listing for ${v.name}.`)}
                      className="underline underline-offset-4 hover:text-black"
                    >
                      Claim via WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  <div className="text-sm font-semibold text-gray-900">Future: reviews</div>
                  <p className="mt-1 text-sm text-gray-700">
                    We’re building warm, useful “one-sentence tips” (not rage reviews). If you’d like early access to add feedback, message us.
                  </p>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

function ScenariosSection() {
  return (
    <section id="scenarios" aria-labelledby="scenarios-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="scenarios-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Best for your plan today
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick the setup that matches your day: a calm corner after the Mill, a takeaway for the canal, or a riverside stop near Roberts Park.
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
      <h2 id="styles-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Drink cheat-sheet
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        A quick guide to the usual suspects, including takeaway friendliness and milk/decaf notes. Alternative milks commonly include: {MILK_ALTS.join(', ')}.
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
            Good decaf is common — ask about Swiss Water or sugarcane process. Oat is the most widespread alternative milk; others vary by venue.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-4">
          <h3 className="text-lg font-semibold">Takeaway vs. sit-in</h3>
          <p className="mt-1 text-gray-700">
            Takeaway cups insulate well for canal/park strolls. For sit-in, ceramics preserve flavour clarity — especially with filter/batch brew.
          </p>
        </div>
      </div>
    </section>
  )
}

function RemoteWork() {
  return (
    <section
      id="remote"
      aria-labelledby="remote-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <h2 id="remote-title" className="text-2xl font-bold md:text-3xl">
          Laptop etiquette (so it stays friendly)
        </h2>
        <div className="mt-4 grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <ul className="list-disc pl-5 text-gray-700">
              {REMOTE_WORK_TIPS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-700">
              Accessibility notes: some venues have steps or tight aisles. See our{' '}
              <Link className="underline underline-offset-4" href="/plan/accessibility">
                accessibility guide
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/food-drink/coffee/saltaire-coffee-laptop-etiquette.jpg"
              alt="A calm UK café scene with a remote worker using a laptop considerately"
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
      <h2 id="map-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Map & seasonal notes
      </h2>
      <p className="mt-2 max-w-prose text-gray-700">
        Coffee spots cluster around the village core, Salts Mill and Roberts Park — just a few minutes apart. For a scenic takeaway, walk canal-side.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src="/images/food-drink/coffee/map-illustration-fictional-saltaire-vintage.jpg"
          alt="A simple illustration of Saltaire’s canal, park and village cluster"
          width={1600}
          height={900}
        />
      </div>

      <ul className="mt-3 list-disc pl-5 text-gray-700">
        <li>Summer: lids and shade; canalside benches fill — walk a little further for quiet.</li>
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
              Start with coffee, browse the Mill, stroll the canal, then finish somewhere calm. Our guides stay practical and local.
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
              <li><Link className="underline underline-offset-4" href="/salts-mill">Salts Mill guide</Link></li>
              <li><Link className="underline underline-offset-4" href="/walks/five-rise">Five Rise walk</Link></li>
              <li><Link className="underline underline-offset-4" href="/events">What’s on this month</Link></li>
              <li><Link className="underline underline-offset-4" href="/food-drink/dog-friendly">Dog-friendly cafés &amp; pubs</Link></li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/food-drink/coffee/cozy-cafe-scene.jpg"
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

      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5">
        <p className="text-gray-700">
          If you run a spot with great coffee (or you’ve got a “quiet corner” tip),{' '}
          <Link className="underline underline-offset-4" href="/contact">contact us</Link>{' '}
          or message on WhatsApp. We’ll keep the notes practical and fair.
        </p>

        <ul className="mt-3 list-disc pl-5 text-gray-700">
          <li>Correct links (website/Instagram) and a one-line description</li>
          <li>Quiet times + best corner tables</li>
          <li>Dog policy, laptop friendliness, accessibility notes</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={whatsappPrefill('Hi Saltaire Guide — please add/verify our coffee listing. Name, link, and one practical note:')}
            className="rounded-2xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Message us on WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Contact page
          </Link>
        </div>

        <p className="mt-3 text-xs text-gray-600">WhatsApp: {WHATSAPP_NUMBER}</p>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <h2 id="faq-title" className="text-2xl font-bold tracking-tight md:text-3xl">
        Quick answers
      </h2>

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

  const itemListVenues = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Coffee venues in Saltaire & Shipley (not ranked)',
    numberOfItems: VENUES.length,
    itemListElement: VENUES.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: v.name,
      url: `${base}/food-drink/coffee#venue-${v.slug}`,
      item: {
        '@type': 'CafeOrCoffeeShop',
        name: v.name,
        url: `${base}/food-drink/coffee#venue-${v.slug}`,
        areaServed: ['Saltaire', 'Shipley'],
      },
    })),
  }

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
      'Use the directory to pick a spot, choose a drink that suits sit-in or takeaway, and keep café time smooth at busy hours.',
    step: [
      { '@type': 'HowToStep', text: 'Pick a venue from the directory (it’s alphabetical — not ranked).' },
      { '@type': 'HowToStep', text: 'Decide sit-in vs takeaway based on your plan (Mill, canal, or park).' },
      { '@type': 'HowToStep', text: 'Choose a drink that travels well (flat white/americano) or suits sitting in (filter).' },
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
    name: 'Coffee shops in Saltaire & Shipley: a calm directory (not ranked)',
    url: `${base}/food-drink/coffee`,
    description:
      'Neutral coffee directory (not ranked) for Saltaire & Shipley plus practical local tips: calm tables, towpath takeaways, milk/decaf notes and laptop etiquette.',
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${base}${HERO_BG}`,
    },
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
      cssSelector: ['#intro-title', '#dir-title', '#scenarios-title', '#styles-title', '#faq-title'],
    },
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListVenues) }} />
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

      <Directory />
      <Fairness />
      <VenueProfiles />

      <ScenariosSection />
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
