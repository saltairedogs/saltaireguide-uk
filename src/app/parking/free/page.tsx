// src/app/parking/free/page.tsx
// Free parking near Saltaire — careful, signage-first guide (server-only, CWV-first, local images only)
// - Parent hub: /parking
// - Siblings: /parking/caroline-street, /parking/exhibition-road
// - Purpose: Capture long-tail searches like “free parking saltaire”, “on-street parking saltaire”, “where to park saltaire for free”
// - Tone: Evergreen, cautious. We DO NOT assert exact streets or guaranteed free periods. We explain HOW to find legal free/limited bays,
//   how to read plates, and when to pivot to car parks or train. “Signage on the day” = single source of truth.
// - Styling: Reuses site .btn / .badge / .card utilities with your vintage vibe.
// - SEO: WebPage + BreadcrumbList + ItemList (candidate areas & paid fallbacks) + multiple HowTo + FAQ + Speakable.
//
// Local images referenced (already in /public/images):
// - /images/parking-saltaire.png
// - /images/saltaire-canal.png
// - /images/salts-mill.png
// - /images/roberts-park.png
// - /images/plan-your-visit.png

import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/config/site'

export const dynamic = 'error'

/* -------------------------------- Metadata -------------------------------- */

export const metadata: Metadata = {
  title: 'Free parking near Saltaire (2025): how to find legal bays, read plates & when to pivot',
  description:
    'Practical, signage-first guide to free/limited street parking near Saltaire. How to read plates, common patterns, busy-day strategy, and when to switch to Caroline Street or Exhibition Road.',
  alternates: { canonical: `${site.url}/parking/free` },
  openGraph: {
    title: 'Free parking near Saltaire — careful, local guidance',
    description:
      'Evergreen tips for finding legitimate free/limited on-street bays near Saltaire, with plate-decoding and stress-free fallbacks to Caroline Street or Exhibition Road.',
    url: `${site.url}/parking/free`,
    type: 'article',
    images: [{ url: `${site.url}/images/parking-saltaire.png`, width: 1600, height: 1066 }],
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Data ----------------------------------- */

const UPDATED = '2025-10-14'

type Tip = { title: string; text: string }
type Area = {
  id: string
  name: string
  vibe: string
  walkingNote: string
  caution: string
  goodFor: string[]
  // We do NOT hardcode streets or promise legality; link is a broad search query.
  mapQuery: string
}
type Playbook = { id: string; name: string; steps: string[]; links?: Array<{ label: string; href: string }> }

const IMG = {
  hero: { src: '/images/parking-saltaire.png', alt: 'Parking sign amid stone terraces in Saltaire', w: 1600, h: 1066 },
  orient: { src: '/images/saltaire-canal.png', alt: 'Canal and mill area for orientation in Saltaire', w: 1600, h: 1066 },
  mill: { src: '/images/salts-mill.png', alt: 'Salts Mill tower and facade', w: 1200, h: 800 },
  park: { src: '/images/roberts-park.png', alt: 'Roberts Park lawns and bandstand', w: 1200, h: 800 },
  plan: { src: '/images/plan-your-visit.png', alt: 'Train at platform — plan your visit without parking stress', w: 1200, h: 800 },
}

// Helper to open a *broad* Google Maps search; we avoid exact claims.
function mapsSearchLink(q: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
}

/** Core mindset tips (EVERGREEN) */
const MINDSET: Tip[] = [
  {
    title: 'Signage beats memory',
    text:
      'Treat the plate at your exact bay as law on the day. Online lists and past visits may be outdated.',
  },
  {
    title: 'Max-stay ≠ pay twice',
    text:
      'If a max-stay exists, it usually applies regardless of repaying. Don’t try to “reset” a limit with a new ticket.',
  },
  {
    title: 'Respect residents',
    text:
      'Avoid blocking driveways, junctions and dropped kerbs. Leave space for buggies and mobility users.',
  },
  {
    title: 'Pivot early',
    text:
      'If hunting starts to burn time, switch to Caroline Street or Exhibition Road and enjoy your day.',
  },
]

/** High-level “candidate area” heuristics.
 *  We stay general: *beyond* the immediate heritage core, edges where restrictions *may* relax,
 *  and green/river corridors often have a mixture of limits. Always the plate first.
 */
const CANDIDATE_AREAS: Area[] = [
  {
    id: 'edge-of-core',
    name: 'Edges beyond the heritage core',
    vibe: 'Quieter residential streets outside the tightest grid',
    walkingNote: 'Often 8–15 min extra walking vs central car parks',
    caution: 'Resident zones, short-stay spurs and school-time restrictions can appear — read each plate.',
    goodFor: ['Budget visits', 'Longer stays if permitted', 'Crowd avoidance'],
    mapQuery: 'street parking near Saltaire BD18',
  },
  {
    id: 'river-canal-corridors',
    name: 'River & canal corridors (wider area)',
    vibe: 'Green corridors with mixed restrictions near pinch-points',
    walkingNote: '10–20 min depending on start point and path',
    caution: 'Pinch points near footbridges; seasonal/event restrictions possible.',
    goodFor: ['Pairing with a walk', 'Calmer returns at off-peak'],
    mapQuery: 'parking near River Aire Saltaire',
  },
  {
    id: 'beyond-train-approaches',
    name: 'Beyond immediate station approaches',
    vibe: 'Commuter streets with varied time limits',
    walkingNote: '5–12 min to the village grid in many cases',
    caution: 'Commuter controls and short-stays common; check for weekday/daytime variations.',
    goodFor: ['Short stop errands', 'Quick museum/bookshop dips'],
    mapQuery: 'street parking near Saltaire Station',
  },
]

/** Busy-day playbooks for “free-or-bust” hunters. */
const PLAYBOOKS: Playbook[] = [
  {
    id: 'timebox',
    name: 'Time-box the hunt',
    steps: [
      'Give yourself 6–8 minutes of searching max.',
      'If nothing clear appears, pivot to Caroline Street.',
      'Enjoy your day; the walk is short and simple.',
    ],
    links: [{ label: 'Caroline Street', href: '/parking/caroline-street' }],
  },
  {
    id: 'arrive-smart',
    name: 'Arrive smart',
    steps: [
      'Aim early (~10:00) or later (~15:00+) on sunny weekends.',
      'If you’re carrying picnic gear or with kids, consider paying to avoid long hunts.',
      'Bundle a short walk so the extra distance feels like part of the day.',
    ],
    links: [{ label: 'Exhibition Road (overflow)', href: '/parking/exhibition-road' }, { label: 'Best walks', href: '/walks' }],
  },
  {
    id: 'event-days',
    name: 'Event days',
    steps: [
      'Prefer the train to Saltaire station.',
      'If driving, check Caroline Street first; free bays are rare near the core.',
      'Add a crowd buffer for the bridge and canal paths.',
    ],
    links: [{ label: 'Getting here (train first)', href: '/plan/getting-here' }, { label: 'What’s on', href: '/events' }],
  },
]

/** FAQs — cautious, signage-led answers. */
const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Is there truly free parking in Saltaire?',
    a: 'There can be free or limited-time on-street bays in the wider area, but rules shift and are actively enforced. Treat every plate as definitive on the day.',
  },
  {
    q: 'How far might I walk if I park for free?',
    a: 'Expect 8–20 minutes depending on the street you find and your destination. If that’s a stretch, use Caroline Street or Exhibition Road and enjoy the short walk.',
  },
  {
    q: 'Do Blue Badge concessions apply on-street?',
    a: 'Concessions and time limits vary by bay and council. Always read the plate by your exact bay; never assume Sundays/evenings are free.',
  },
  {
    q: 'Can I “reset” a max stay by buying another ticket?',
    a: 'Usually no. A posted max stay generally caps the total duration regardless of additional payments.',
  },
  {
    q: 'What’s the best stress-free option if I can’t find a free bay?',
    a: 'Use Caroline Street (reliable, near-level) or Exhibition Road (often has spaces). Or skip parking entirely and take the train to Saltaire station.',
  },
]

/* --------------------------- Utility UI bits ------------------------------- */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">{children}</h2>
}
function Small({ children }: { children: React.ReactNode }) {
  return <span className="text-xs text-gray-500">{children}</span>
}

/* -------------------------------- Components ------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li><Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link></li>
        <span className="sep">›</span>
        <li><Link href="/parking" className="underline underline-offset-4 hover:text-black">Parking</Link></li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">Free parking</li>
      </ol>
    </nav>
  )
}

function Hero() {
  return (
    <header className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Free parking near Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            How to find <em>legal</em> on-street bays without the drama. We cover plate-decoding, common patterns,
            smart time-boxing and when to pivot to the easy car parks. Always follow the sign by your bay.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated {UPDATED}</li>
            <li className="badge">Signage-first</li>
            <li className="badge">Stress-minimising</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/parking/caroline-street" className="btn btn-primary">Reliable: Caroline Street</Link>
            <Link href="/parking/exhibition-road" className="btn btn-outline">Overflow: Exhibition Road</Link>
            <Link href="/plan/getting-here#rail" className="btn btn-ghost">Train to Saltaire</Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src={IMG.hero.src}
            alt={IMG.hero.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  )
}

function OnThisPage() {
  const items = [
    { href: '#mindset', label: 'First principles' },
    { href: '#map', label: 'Orientation map' },
    { href: '#areas', label: 'Candidate areas (search & assess)' },
    { href: '#plates', label: 'Plate-decoder mini course' },
    { href: '#playbooks', label: 'Busy-day playbooks' },
    { href: '#compare', label: 'Compare: free vs paid' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#cta', label: 'Plan your visit' },
  ]
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">On this page</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.href}>
              <a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href={i.href}>{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function Mindset() {
  return (
    <section id="mindset" aria-labelledby="mindset-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="mindset-title">First principles</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        This page teaches you how to spot legitimate options, read plates confidently, and decide when to stop searching.
        It’s designed to save time and stress rather than name “secret” streets that change next month.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {MINDSET.map((t) => (
          <article key={t.title} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-gray-700">{t.text}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Need zero-hassle? Use <Link href="/parking/caroline-street" className="underline underline-offset-4">Caroline Street</Link> and walk in.
      </p>
    </section>
  )
}

function Orientation() {
  return (
    <section id="map" aria-labelledby="map-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="map-title">Orientation map & landmarks</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire’s heritage core (village grid + Salts Mill + Roberts Park) is compact and walkable. “Free” options, when
        legal, tend to live just beyond the most in-demand streets — which simply means a few extra minutes on foot.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <Image
          src={IMG.orient.src}
          alt={IMG.orient.alt}
          width={IMG.orient.w}
          height={IMG.orient.h}
          className="object-cover"
        />
      </div>
      <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
        <li><strong>Salts Mill</strong> — shortest approach from paid options; free hunts will extend the walk.</li>
        <li><strong>Roberts Park</strong> — crowds tighten at the footbridge; allow a buffer with buggies/dogs.</li>
      </ul>
    </section>
  )
}

function CandidateAreas() {
  return (
    <section id="areas" aria-labelledby="areas-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="areas-title">Candidate areas (search & assess)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use these patterns to <em>search broadly</em>, then decide on the kerb with the plate. We link to a neutral map
        search — not a promise — so you can scan and pick a clearly signed bay.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CANDIDATE_AREAS.map((a) => (
          <article key={a.id} id={a.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="p-5">
              <h3 className="text-lg font-semibold tracking-tight">{a.name} <span className="badge ml-1">Heuristic</span></h3>
              <p className="mt-2 text-sm text-gray-700">{a.vibe}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-700">
                <li className="badge">Walk: {a.walkingNote}</li>
                <li className="badge">Caution: signage first</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700"><span className="font-medium">Caution:</span> {a.caution}</p>
              <div className="mt-3 text-sm text-gray-700">
                <span className="font-medium">Good for:</span>{' '}
                {a.goodFor.map((g, i) => <span key={g}>{g}{i < a.goodFor.length - 1 ? ', ' : ''}</span>)}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={mapsSearchLink(a.mapQuery)} className="btn btn-primary btn-sm" target="_blank" rel="noopener">Open search in Maps</a>
                <a href={`#${a.id}`} className="btn btn-ghost btn-sm" aria-label={`Anchor link to ${a.name}`}>Link to section</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        <strong>Remember:</strong> if the hunt exceeds ~8 minutes, switch to{' '}
        <Link href="/parking/caroline-street" className="underline underline-offset-4">Caroline Street</Link>{' '}
        or <Link href="/parking/exhibition-road" className="underline underline-offset-4">Exhibition Road</Link>.
      </div>
    </section>
  )
}

function PlateDecoder() {
  const bullets = [
    { k: 'Bay type', v: 'Short-stay, resident permit, loading and disabled bays can sit side-by-side. Read posts and lines.' },
    { k: 'Days/hours', v: 'Controls often vary by day and time — weekdays vs weekends, school hours, or event notes.' },
    { k: 'Max stay', v: 'A posted max-stay caps total duration, even if you try to repay. Don’t risk “resetting”.' },
    { k: 'Blue Badge', v: 'Concessions/time differ by bay. Always read the plate for exceptions and limits.' },
    { k: 'Lines & kerbs', v: 'Park within marked lines. Keep corners, driveways and dropped kerbs clear.' },
  ]
  return (
    <section id="plates" aria-labelledby="plates-title" className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="plates-title">Plate-decoder mini course</SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Read before you commit</h3>
            <ul className="mt-2 list-disc pl-5">
              {bullets.map((b) => (<li key={b.k}><span className="font-medium">{b.k}:</span> {b.v}</li>))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">If a plate is damaged or unclear, choose another bay with crystal-clear rules.</p>
          </article>
          <article className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm">
            <h3 className="font-semibold">Myth busting</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>“Evenings are always free” — <em>not necessarily</em>. Check the plate.</li>
              <li>“Two tickets = double time” — <em>max stay still applies</em>.</li>
              <li>“Blue Badge = everywhere” — <em>rules vary by bay</em>. Read it every time.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function Playbooks() {
  return (
    <section id="playbooks" aria-labelledby="playbooks-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="playbooks-title">Busy-day playbooks</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {PLAYBOOKS.map((p) => (
          <article key={p.id} className="card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <ol className="mt-2 list-decimal pl-5 text-gray-700">
                {p.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
              {p.links && (
                <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                  {p.links.map((l) => (
                    <li key={l.href}><Link href={l.href as any} className="underline underline-offset-4">{l.label}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700">
        Zero-stress plan: train to <Link className="underline underline-offset-4" href="/plan/getting-here#rail">Saltaire station</Link>, then short walks to everything.
      </div>
    </section>
  )
}

function Compare() {
  const rows = [
    {
      option: 'Free/limited on-street (varies)',
      pros: ['£0 when legitimate', 'Can be closer than you expect off-peak'],
      cons: ['Rules change; active enforcement', 'Hunt time + uncertainty'],
      link: '/parking/free',
    },
    {
      option: 'Caroline Street (paid)',
      pros: ['Reliable all-rounder', 'Near-level 5–7 min to core sights'],
      cons: ['Fills early on sunny/event days'],
      link: '/parking/caroline-street',
    },
    {
      option: 'Exhibition Road (paid)',
      pros: ['Often has spaces at peak', 'Good overflow pick'],
      cons: ['Gentle uphill on return', 'Slightly longer walk'],
      link: '/parking/exhibition-road',
    },
  ]
  return (
    <section id="compare" aria-labelledby="compare-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="compare-title">Compare: free vs paid</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        If time is precious or mobility matters, paid options win. If budget is priority and you’re happy to walk,
        free/limited bays can work — <em>when</em> signage allows. Here’s the trade-off at a glance:
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[780px]">
          <thead>
            <tr>
              <th>Option</th>
              <th>Pros</th>
              <th>Trade-offs</th>
              <th>Guide</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.option}>
                <td className="font-medium">{r.option}</td>
                <td><ul className="list-disc pl-4">{r.pros.map((x) => <li key={x}>{x}</li>)}</ul></td>
                <td><ul className="list-disc pl-4">{r.cons.map((x) => <li key={x}>{x}</li>)}</ul></td>
                <td>
                  <Link href={r.link} className="underline underline-offset-4">Open →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-gray-500">Details change. Treat this page as guidance; the plate is final.</p>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Quick answers</SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {FAQS.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>{f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
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
    <section id="cta" aria-label="Plan your visit" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan the perfect Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Parking sorted? Choose a walk, pick a café or pub, and check what’s on. We keep guides practical and up to date.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/walks" className="btn btn-primary">Best walks</Link>
              <Link href="/food-drink" className="btn btn-outline">Cafés & pubs</Link>
              <Link href="/events" className="btn btn-ghost">What’s on</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src={IMG.plan.src}
              alt={IMG.plan.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  // ItemList of candidate areas & paid fallbacks (descriptive, not promises)
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free/limited on-street parking heuristics and paid fallbacks near Saltaire',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: CANDIDATE_AREAS.length + 2,
    itemListElement: [
      ...CANDIDATE_AREAS.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
        url: `${base}/parking/free#${a.id}`,
        description: `${a.vibe}. ${a.walkingNote}. Caution: ${a.caution}`,
      })),
      {
        '@type': 'ListItem',
        position: CANDIDATE_AREAS.length + 1,
        name: 'Caroline Street Car Park (paid)',
        url: `${base}/parking/caroline-street`,
        image: `${base}/images/parking-saltaire.png`,
        description:
          'Reliable central paid option with near-level 5–7 min walk to Salts Mill and village streets.',
      },
      {
        '@type': 'ListItem',
        position: CANDIDATE_AREAS.length + 2,
        name: 'Exhibition Road Car Park (paid)',
        url: `${base}/parking/exhibition-road`,
        image: `${base}/images/parking-saltaire.png`,
        description:
          'Overflow-friendly paid option; often has spaces when the centre is busy. Gentle uphill on return.',
      },
    ],
  }

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Free parking near Saltaire',
    url: `${base}/parking/free`,
    description:
      'How to find legal free/limited street parking near Saltaire, read plates, time-box the hunt and pivot to stress-free paid options when needed.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#mindset-title', '#areas-title', '#plates-title'],
    },
    isPartOf: { '@type': 'WebSite', url: base, name: site.name },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
        { '@type': 'ListItem', position: 2, name: 'Parking', item: `${base}/parking` },
        { '@type': 'ListItem', position: 3, name: 'Free parking', item: `${base}/parking/free` },
      ],
    },
  }

  const howToFindFree = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to find legal free/limited street parking near Saltaire',
    totalTime: 'PT8M',
    step: [
      { '@type': 'HowToStep', text: 'Search a broader radius beyond the heritage core for signed street bays.' },
      { '@type': 'HowToStep', text: 'Read the plate at your exact bay: days, hours, max-stay, Blue Badge notes.' },
      { '@type': 'HowToStep', text: 'If rules suit your plan, park within lines; keep kerbs/corners clear.' },
      { '@type': 'HowToStep', text: 'Time-box your search to ~8 minutes; pivot to Caroline Street or Exhibition Road if needed.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'Maps app for broad search' }],
  }

  const howToReadPlate = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to read a parking plate (street bay)',
    totalTime: 'PT3M',
    step: [
      { '@type': 'HowToStep', text: 'Confirm the bay type (short-stay, resident, loading, disabled).' },
      { '@type': 'HowToStep', text: 'Check day/time ranges and whether they differ on weekends/evenings.' },
      { '@type': 'HowToStep', text: 'Look for a max-stay line — this caps total duration, regardless of additional payments.' },
      { '@type': 'HowToStep', text: 'Note Blue Badge specifics; concessions and limits vary by bay.' },
    ],
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToFindFree) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToReadPlate) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function FreeParkingPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      <Mindset />
      <Orientation />
      <CandidateAreas />
      <PlateDecoder />
      <Playbooks />
      <Compare />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
