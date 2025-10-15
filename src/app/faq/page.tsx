// src/app/faq/page.tsx
// Saltaire FAQ — cornerstone v1 (server-only, static, SEO/E-E-A-T)
// - One stop for common questions across History, Salts Mill, Walks, Dog-friendly, Accessibility,
//   Parking, Events, Food & Drink, Shops, Accommodation, Families, Rainy days, Photography, Safety,
//   Seasons, Logistics and "Planning your day".
// - No client components, no event handlers → excellent CWV.
// - Rich internal linking + comprehensive FAQPage schema.
// - Content written to be evergreen and practical; link out to deeper pages you’ve built.

// ──────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Saltaire FAQ — quick answers to parking, walks, Salts Mill, dog-friendly spots, accessibility & more',
  description:
    'Your complete Saltaire FAQ: parking, best walks, Salts Mill, Roberts Park, dog-friendly tips, accessibility, events, food, cafés, pubs, shops, accommodation, photography, seasons and planning your day.',
  alternates: { canonical: `${site.url}/faq` },
  openGraph: {
    title: 'Saltaire FAQ — everything visitors ask (local answers)',
    description:
      'Clear, practical answers for Saltaire: parking, best walks, dog-friendly, accessibility, family tips, events, where to eat, shops, rainy day plans and more.',
    url: `${site.url}/faq`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* ────────────────────────────────────────────────────────────────────────────
   DATA
   Each category has a title, id, short description and question list.
   Keep answers compact; deep-link to relevant cornerstone pages.
   ─────────────────────────────────────────────────────────────────────────── */

type QA = { q: string; a: string }
type Category = { id: string; title: string; intro?: string; faqs: QA[] }

const CATS: Category[] = [
  /* ----------------------------- Quick planning ----------------------------- */
  {
    id: 'plan',
    title: 'Quick planning',
    intro:
      'Fast answers if you are planning a visit in under five minutes — with links to deeper guides.',
    faqs: [
      {
        q: 'What is the best way to plan one great day in Saltaire?',
        a: 'Arrive by train to Saltaire station → coffee on Victoria Road → explore Salts Mill → walk the canal or Roberts Park → late lunch in a village café or pub → markets/events if running. Use our itineraries in Plan: '
          + '<a class="underline underline-offset-4" href="/plan/itineraries/one-day">One-day guide</a>.',
      },
      {
        q: 'Where can I find “what’s on” right now?',
        a: 'Start at <a class="underline underline-offset-4" href="/events">Events hub</a>. For the big annual festival see '
          + '<a class="underline underline-offset-4" href="/events/saltaire-festival">Saltaire Festival</a>.',
      },
      {
        q: 'I only have 90 minutes — what should I do?',
        a: 'Take the “Salts Mill in 90 minutes” route: book hall → poster shop → Hockney displays → quick coffee. Then a short canal stretch. See '
          + '<a class="underline underline-offset-4" href="/salts-mill">Salts Mill guide</a>.',
      },
    ],
  },

  /* -------------------------------- Parking -------------------------------- */
  {
    id: 'parking',
    title: 'Parking',
    intro:
      'Parking fills quickly on sunny weekends and during events — trains are easiest. If driving, read our detailed parking guide.',
    faqs: [
      {
        q: 'Where should I park for Saltaire?',
        a: 'Use Caroline Street or Exhibition Road and walk 5–10 minutes to the village core. Details, step-free notes and tips: '
          + '<a class="underline underline-offset-4" href="/parking">Parking guide</a>.',
      },
      {
        q: 'Is there free parking?',
        a: 'Limited on-street options exist with restrictions and active enforcement. Use car parks for a stress-free day. See '
          + '<a class="underline underline-offset-4" href="/parking#compare">comparison table</a>.',
      },
      {
        q: 'What time is it busiest?',
        a: 'Sunny weekends, school holidays and festival days. Arrive before 10:30 or after 15:00, or take the train. See '
          + '<a class="underline underline-offset-4" href="/plan/getting-here">Getting here</a>.',
      },
    ],
  },

  /* ------------------------------- Getting here ----------------------------- */
  {
    id: 'getting-here',
    title: 'Getting here & around',
    intro:
      'Saltaire is compact: the station, Salts Mill, the canal and Roberts Park sit minutes apart.',
    faqs: [
      {
        q: 'Does Saltaire have a train station?',
        a: 'Yes — Saltaire station is central on the Airedale Line (Leeds/Bradford ↔ Skipton/Ilkley). From the platform it’s 2–5 minutes to the Mill and village.',
      },
      {
        q: 'Are the main routes step-free?',
        a: 'Yes, principal approaches are step-free with generally smooth surfaces. Some side streets have cobbles. See '
          + '<a class="underline underline-offset-4" href="/plan/accessibility">Accessibility</a>.',
      },
      {
        q: 'Is cycling allowed on the towpath?',
        a: 'Yes on shared-use sections. Keep speeds low near families and dogs, give a bell early, and slow for tight bridges.',
      },
    ],
  },

  /* --------------------------------- Walks --------------------------------- */
  {
    id: 'walks',
    title: 'Walks & routes',
    intro:
      'From easy towpath stretches to Shipley Glen and Bingley Five-Rise, you can walk right from the village.',
    faqs: [
      {
        q: 'What is the easiest scenic walk?',
        a: 'A short canal out-and-back towards Hirst Wood or Bingley. See the simple options in '
          + '<a class="underline underline-offset-4" href="/walks">Walks hub</a>.',
      },
      {
        q: 'How long is the towpath walk to Five-Rise Locks?',
        a: 'Roughly 4.5–5.5 miles (7–9 km) one-way depending on start point. You can train back from Bingley. Full details: '
          + '<a class="underline underline-offset-4" href="/walks/five-rise">Five-Rise route</a>.',
      },
      {
        q: 'Is there a step-free loop with views?',
        a: 'Yes — the Roberts Park ↔ canal ↔ Salts Mill loop is popular for prams/wheelchairs. See '
          + '<a class="underline underline-offset-4" href="/roberts-park#loop">step-free river loop</a>.',
      },
      {
        q: 'Are there dog-friendly routes?',
        a: 'Yes — canal sections and Hirst Wood paths are common; keep dogs close around cyclists and wildlife. See '
          + '<a class="underline underline-offset-4" href="/walks/dog-friendly">Dog-friendly walks</a>.',
      },
    ],
  },

  /* ----------------------------- Salts Mill & art --------------------------- */
  {
    id: 'salts-mill',
    title: 'Salts Mill & art',
    intro:
      'The headline attraction: bookshops, the famous poster shop, cafés and changing Hockney displays.',
    faqs: [
      {
        q: 'How long should I spend at Salts Mill?',
        a: 'Allow 60–120 minutes for a quick browse; half a day if you add a café stop and village walk.',
      },
      {
        q: 'Is Salts Mill good in bad weather?',
        a: 'Yes — it is the best rainy-day plan: large indoor spaces, shops and cafés. Pair with a short canal walk if weather clears.',
      },
      {
        q: 'Can I take photos inside?',
        a: 'Policies differ by space; avoid flash, obey signage and ask staff in galleries. Outdoors and from the canal are great photo spots.',
      },
    ],
  },

  /* ----------------------------- Roberts Park ------------------------------- */
  {
    id: 'roberts-park',
    title: 'Roberts Park',
    intro: 'Victorian riverside park with lawns, bandstand, play areas and a step-free loop.',
    faqs: [
      {
        q: 'Where are the toilets?',
        a: 'Public loos are signposted in/near the park; accessible cubicles are typically available. Expect queues at peak times.',
      },
      {
        q: 'Is there a café?',
        a: 'Yes — Half Moon Café inside the park and various cafés across the footbridge towards Salts Mill. See '
          + '<a class="underline underline-offset-4" href="/food-drink">Eat & Drink</a>.',
      },
      {
        q: 'Is swimming allowed in the river?',
        a: 'No — the river and weirs are hazardous. Keep children and dogs clear of fast water, especially after rain.',
      },
    ],
  },

  /* ------------------------------ Food & drink ------------------------------ */
  {
    id: 'food',
    title: 'Food & drink',
    intro: 'Local picks for coffee, brunch, pubs and desserts — plus dog-friendly spots.',
    faqs: [
      { q: 'Where’s the best coffee?', a: 'See our curated list in <a class="underline underline-offset-4" href="/food-drink/coffee">Coffee</a>.' },
      { q: 'Where can I get brunch?', a: 'Options change — we track current favourites in <a class="underline underline-offset-4" href="/brunch">Brunch</a>.' },
      { q: 'Which pubs have beer gardens?', a: 'See <a class="underline underline-offset-4" href="/food-drink/pubs">Pubs & beer gardens</a> for outdoor seats and family notes.' },
      { q: 'Any dessert or ice-cream spots?', a: 'Yes — check <a class="underline underline-offset-4" href="/food-drink/desserts">Desserts</a> and <a class="underline underline-offset-4" href="/food-drink/ice-cream">Ice cream</a>.' },
      { q: 'Dog-friendly cafés?', a: 'We list places that welcome dogs in <a class="underline underline-offset-4" href="/food-drink/dog-friendly">Dog-friendly cafés</a>.' },
    ],
  },

  /* --------------------------------- Shops --------------------------------- */
  {
    id: 'shops',
    title: 'Shops & markets',
    intro:
      'Independent shops in and around Salts Mill/Victoria Road + periodic markets during events.',
    faqs: [
      {
        q: 'What kinds of shops are in Salts Mill?',
        a: 'Book hall, poster shop, home & design, art and gifts — all under one roof. See <a class="underline underline-offset-4" href="/salts-mill">Salts Mill</a>.',
      },
      {
        q: 'Are there regular markets?',
        a: 'Markets are typically tied to big events (e.g., the festival weekends). Check <a class="underline underline-offset-4" href="/events">Events</a>.',
      },
      {
        q: 'Where can I buy local gifts?',
        a: 'Design and print shops in the Mill, plus independent village stores. Our overview: <a class="underline underline-offset-4" href="/shops">Shops guide</a>.',
      },
    ],
  },

  /* ----------------------------- Dog-friendly ------------------------------- */
  {
    id: 'dogs',
    title: 'Dog-friendly',
    intro:
      'Saltaire is popular with well-behaved dogs — shared spaces require care around families and bikes.',
    faqs: [
      {
        q: 'Are dogs allowed in Roberts Park?',
        a: 'Yes, on leads where requested. Keep clear of the river edge and busy play areas.',
      },
      {
        q: 'Dog-friendly cafés/pubs?',
        a: 'Yes — see <a class="underline underline-offset-4" href="/food-drink/dog-friendly">Dog-friendly cafés</a> and '
          + '<a class="underline underline-offset-4" href="/food-drink/pubs">Pubs</a>.',
      },
      {
        q: 'Best dog walks?',
        a: 'Canal towpath and Hirst Wood are common; bag & bin diligently. See <a class="underline underline-offset-4" href="/walks/dog-friendly">dog-friendly routes</a>.',
      },
    ],
  },

  /* ------------------------------- Accessibility ---------------------------- */
  {
    id: 'access',
    title: 'Accessibility',
    intro:
      'Step-free approaches connect the station, Salts Mill, canal and Roberts Park. Surfaces are mainly smooth with some cobbles on side streets.',
    faqs: [
      {
        q: 'Is the village centre step-free?',
        a: 'Principal routes are step-free with gentle gradients. Side streets may have cobbles. See <a class="underline underline-offset-4" href="/plan/accessibility">Accessibility guide</a>.',
      },
      {
        q: 'Where are accessible toilets?',
        a: 'Public loos with accessible cubicles are signposted in/near Roberts Park and the core. See <a class="underline underline-offset-4" href="/plan/toilets">Toilets</a> (coming soon).',
      },
      {
        q: 'Best time to visit for easier access?',
        a: 'Early mornings and weekdays; avoid peak weekends and festival afternoons.',
      },
    ],
  },

  /* ------------------------------ Families & kids --------------------------- */
  {
    id: 'families',
    title: 'Families & kids',
    intro: 'Short loops, big lawns and play areas — great for a half-day.',
    faqs: [
      { q: 'Is Saltaire good with a pram?', a: 'Yes — try the step-free loop linking the park, canal and Mill. See <a class="underline underline-offset-4" href="/roberts-park#loop">loop details</a>.' },
      { q: 'Where can children run around?', a: 'Roberts Park lawns and two play areas. Bring a ball and picnic blanket.' },
      { q: 'Family food tips?', a: 'Go early or later for lunch to dodge queues; see <a class="underline underline-offset-4" href="/food-drink">Eat & Drink</a>.' },
    ],
  },

  /* ------------------------------ Accommodation ----------------------------- */
  {
    id: 'stays',
    title: 'Accommodation',
    intro:
      'Stay in/near the village for early canal light and quieter evenings — book ahead for festival dates.',
    faqs: [
      { q: 'Are there hotels in Saltaire?', a: 'Accommodation is mostly guesthouses/apartments nearby; trains make Headingley/Shipley/Bingley easy. See <a class="underline underline-offset-4" href="/accommodation">Accommodation hub</a> (coming soon).' },
      { q: 'Best areas to stay?', a: 'Close to the station or on the canal edge for walks; check parking restrictions before booking a car-based stay.' },
      { q: 'Where to base for walks?', a: 'Anywhere near the canal or park; Ilkley and Bingley are good bases for wider Wharfedale/Aire valley walks.' },
    ],
  },

  /* ------------------------------- Events & festival ------------------------ */
  {
    id: 'events',
    title: 'Events & festival',
    intro:
      'The Saltaire Festival typically runs in early autumn over multiple days with park music and village markets.',
    faqs: [
      { q: 'When is the Saltaire Festival?', a: 'Dates vary; check current listings. Read our overview: <a class="underline underline-offset-4" href="/events/saltaire-festival">Festival guide</a>.' },
      { q: 'Do I need tickets?', a: 'Many outdoor events are free; some gigs/workshops may be ticketed. Always check the individual listing.' },
      { q: 'Where is everything?', a: 'Roberts Park, Victoria Road and the Salts Mill side are the main hubs — all within minutes on foot.' },
    ],
  },

  /* --------------------------------- History -------------------------------- */
  {
    id: 'history',
    title: 'History & UNESCO',
    intro:
      'A model village built by Sir Titus Salt; UNESCO status reflects its planning, architecture and social history.',
    faqs: [
      {
        q: 'Who was Titus Salt?',
        a: 'An industrialist who moved his worsted mills from Bradford to Saltaire, building model housing and amenities. Read: <a class="underline underline-offset-4" href="/history/titus-salt">Titus Salt</a>.',
      },
      {
        q: 'Why is Saltaire UNESCO-listed?',
        a: 'For its outstanding model-village planning and Italianate architecture (criteria ii & iv). See '
          + '<a class="underline underline-offset-4" href="/history/unesco">UNESCO page</a>.',
      },
      {
        q: 'What are the must-see historic spots?',
        a: 'Salts Mill, Victoria Road streetscape, Roberts Park, United Reformed Church and the river/canal ensemble. Try the self-guided route in '
          + '<a class="underline underline-offset-4" href="/history/walking-tour">History walking tour</a> (coming soon).',
      },
    ],
  },

  /* -------------------------------- Photography ----------------------------- */
  {
    id: 'photo',
    title: 'Photography & viewpoints',
    intro:
      'Soft canal light at golden hour, reflections after rain, and long views from Shipley Glen.',
    faqs: [
      { q: 'Best photo spots?', a: 'Towpath by Salts Mill, the railway bridge, Roberts Park footbridge, and the church frontage. See <a class="underline underline-offset-4" href="/photo-spots">Photo spots</a> (coming soon).' },
      { q: 'Sunrise or sunset?', a: 'Sunset on the canal is easier; sunrise gives mist over the Aire on cold mornings.' },
      { q: 'Tripod etiquette?', a: 'Keep paths clear, mind cyclists and avoid blocking doorways/bridges.' },
    ],
  },

  /* --------------------------------- Seasons -------------------------------- */
  {
    id: 'seasons',
    title: 'Best time to visit & seasons',
    intro:
      'Every season has a look: blossom in spring, long canal evenings in summer, colour in autumn, cosy interiors in winter.',
    faqs: [
      { q: 'When is the best time to visit?', a: 'Late spring and early autumn for mild weather and golden light. The festival adds buzz; mid-week is calmer.' },
      { q: 'Is winter worth it?', a: 'Yes — cosy cafés, Salts Mill browsing and crisp canal walks. Dress for wind chill by the water.' },
      { q: 'What about rain?', a: 'Use the Mill as a base, then dart between short canal or park windows when showers pass.' },
    ],
  },

  /* ---------------------------------- Safety -------------------------------- */
  {
    id: 'safety',
    title: 'Safety & etiquette',
    intro:
      'Saltaire feels friendly and compact. Common sense goes a long way — and the river demands respect after rain.',
    faqs: [
      { q: 'Is the area safe for solo travellers?', a: 'Generally yes; stick to lit routes after dark and keep valuables discreet.' },
      { q: 'Any hazards?', a: 'Fast river/weirs, slippery cobbles when wet, and shared towpaths — take care with kids and dogs.' },
      { q: 'Drone rules?', a: 'Respect CAA regulations and privacy; avoid flying over crowds or close to the railway/roads.' },
    ],
  },

  /* -------------------------------- Logistics ------------------------------- */
  {
    id: 'logistics',
    title: 'Logistics & practicalities',
    intro: 'The small details that make a day run smoothly.',
    faqs: [
      { q: 'Are there ATMs?', a: 'Options are limited; many vendors take contactless, but small cash helps at markets and for buskers.' },
      { q: 'Can I picnic?', a: 'Yes — Roberts Park lawns are ideal. Please take litter home and keep glass away from play areas.' },
      { q: 'Where can I refill water?', a: 'Some cafés will refill on request; bring a bottle and ask politely.' },
    ],
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   UI Helpers
   ─────────────────────────────────────────────────────────────────────────── */

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Components
   ─────────────────────────────────────────────────────────────────────────── */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">Home</Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">FAQ</li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Saltaire — Frequently Asked Questions</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            The ultimate local FAQ: parking, walks, Salts Mill, Roberts Park, dog-friendly, accessibility, events, shops,
            cafés, pubs, families, safety, photography and logistics. Each answer is practical and links to deeper guides.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Local & unbiased</li>
            <li className="badge">Step-free notes</li>
            <li className="badge">Updated regularly</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <p className="text-sm text-gray-700">
              Can’t find your question? Email <a className="underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a> or suggest it on our{' '}
              <Link href="/contact" className="underline underline-offset-4">contact page</Link>.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function PageTOC() {
  return (
    <aside className="container mx-auto px-4">
      <nav aria-label="On this page" className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
        <div className="text-sm font-semibold text-gray-800">Jump to a topic</div>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {CATS.map((c) => (
            <li key={c.id}>
              <a className="underline decoration-gray-300 underline-offset-4 hover:decoration-black" href={`#${c.id}`}>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

function CategoryBlock({ c }: { c: Category }) {
  return (
    <section id={c.id} aria-labelledby={`h-${c.id}`} className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id={`h-${c.id}`}>{c.title}</SectionHeading>
      {c.intro ? <p className="mt-2 max-w-prose text-gray-700">{c.intro}</p> : null}

      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {c.faqs.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            {/* Keep answers HTML-safe: we intentionally use small inline A tags (no scripts) */}
            <p className="mt-2 max-w-prose text-gray-700" dangerouslySetInnerHTML={{ __html: f.a }} />
          </details>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Plan your day" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Plan a perfect Saltaire day</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Choose a focus, add a short walk, and keep a rainy-day fallback. Our cornerstone guides cover everything.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/salts-mill" className="btn btn-primary">Salts Mill</Link>
              <Link href="/walks" className="btn btn-outline">Best walks</Link>
              <Link href="/roberts-park" className="btn btn-ghost">Roberts Park</Link>
              <Link href="/parking" className="btn btn-muted">Parking</Link>
            </div>
          </div>
          <div className="callout">
            <h3 className="text-lg font-semibold">Stay updated</h3>
            <p className="mt-2 text-gray-700">
              We refresh FAQs when prices, routes or opening hours change. For quick updates, join our mini newsletter in{' '}
              <Link href="/contact" className="underline underline-offset-4">Contact</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   JSON-LD
   ─────────────────────────────────────────────────────────────────────────── */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Saltaire FAQ',
    url: `${base}/faq`,
    description:
      'Comprehensive local FAQ for Saltaire: parking, walks, Salts Mill, Roberts Park, dog-friendly, accessibility, events, food, shops, accommodation, families, safety and logistics.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#h-plan', '#h-parking', '#h-walks'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${base}/faq` },
    ],
  }

  // Build a single FAQPage entity with all questions across categories
  const allQs = CATS.flatMap((cat) =>
    cat.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  )

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQs,
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  )
}

/* ────────────────────────────────────────────────────────────────────────────
   Page
   ─────────────────────────────────────────────────────────────────────────── */

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      {CATS.map((c) => (
        <CategoryBlock key={c.id} c={c} />
      ))}
      <CTA />
      <JsonLd />
    </>
  )
}
