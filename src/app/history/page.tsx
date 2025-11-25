// src/app/history/page.tsx
// History of Saltaire — hub & overview (static, CWV, E-E-A-T)
// - Server-only (no "use client")
// - Acts as the main "History hub (all topics)" page linked from the header
// - Sections: Hero, Topics hub, Why UNESCO, Timeline, Architecture, People, Preservation, Sources, FAQ, CTA
// - JSON-LD: WebPage + BreadcrumbList + ItemList (timeline) + Speakable + FAQPage

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export const dynamic = "error";

export const metadata: Metadata = {
  title:
    "History of Saltaire & UNESCO World Heritage — Titus Salt, the model village and Italianate architecture",
  description:
    "A clear, local guide to Saltaire’s history: why it’s a UNESCO World Heritage Site, a timeline from the Mill (1853) to today, architecture highlights and sources.",
  alternates: { canonical: `${site.url}/history` },
  openGraph: {
    title: "History of Saltaire — UNESCO World Heritage",
    description:
      "Why UNESCO listed Saltaire, key dates, Italianate architecture, Titus Salt, and how the village was preserved.",
    url: `${site.url}/history`,
    type: "article",
  },
  twitter: { card: "summary_large_image" },
};

/* --------------------------------- Data ----------------------------------- */

type TL = {
  year: number | string;
  title: string;
  blurb: string;
};

const TIMELINE: TL[] = [
  {
    year: 1853,
    title: "Salts Mill opens",
    blurb:
      "Sir Titus Salt builds a vast new alpaca-wool mill on the River Aire and Leeds–Liverpool Canal, away from polluted Bradford.",
  },
  {
    year: "1853–1876",
    title: "Model village constructed",
    blurb:
      "Italianate stone housing, neat streets, schools, church, wash-houses and recreational facilities provided for workers.",
  },
  {
    year: 1876,
    title: "Titus Salt dies",
    blurb:
      "Leadership passes to his sons and trustees; the village identity and amenities continue to shape daily life.",
  },
  {
    year: "20th c.",
    title: "Industry changes",
    blurb:
      "Wool trade fluctuates; the mill passes through different owners. The village’s fabric remains largely intact.",
  },
  {
    year: 1987,
    title: "Regeneration begins",
    blurb:
      "New uses for the Mill and village accelerate conservation, cultural activity and public access.",
  },
  {
    year: 2001,
    title: "UNESCO inscription",
    blurb:
      "Saltaire is designated a World Heritage Site for its outstanding, intact example of a mid-19th-century industrial model village.",
  },
  {
    year: "Today",
    title: "Living village & culture",
    blurb:
      "Galleries, bookshops and cafés in the Mill; Roberts Park restored; the village remains a thriving residential community.",
  },
];

const ARCHITECTURE = [
  {
    title: "Italianate style in Yorkshire stone",
    note:
      "Mill and housing draw on Italian Renaissance forms: round-arched windows, cornices, symmetry and a landmark chimney.",
  },
  {
    title: "Planned urban layout",
    note:
      "Gridded streets with consistent stone façades, crescents and civic buildings create coherence rare in industrial towns.",
  },
  {
    title: "Social infrastructure",
    note:
      "Church, schools, institute, wash-houses and recreation spaces reflect 19th-century philanthropy and reformist ideals.",
  },
  {
    title: "Setting by water & rail",
    note:
      "Sited by the River Aire, the canal and the railway for power and transport, yet separate from Bradford’s smoke.",
  },
];

const PEOPLE = [
  {
    name: "Sir Titus Salt (1803–1876)",
    note:
      "Industrialist and philanthropist who consolidated his mills at Saltaire and built housing and amenities for workers.",
  },
  {
    name: "James Roberts (1848–1935)",
    note:
      "Later owner associated with village improvements; Roberts Park bears his name after a key donation.",
  },
  {
    name: "Architects & planners",
    note:
      "Village built to unified plans by professional architects/engineers of the period, producing rare consistency across streets.",
  },
];

const PRESERVATION = [
  "The village retains exceptional integrity: plan, building stock and skyline survive with limited alteration.",
  "Adaptive reuse of Salts Mill preserves the industrial shell while supporting culture and retail.",
  "Roberts Park restoration maintains vistas between park, river, canal and Mill.",
  "Ongoing conservation management balances residential life with visitor interest.",
];

const SOURCES = [
  {
    label: "UNESCO World Heritage Centre — Saltaire",
    href: "https://whc.unesco.org/",
  },
  {
    label: "Historic England — listings & guidance",
    href: "https://historicengland.org.uk/",
  },
  {
    label: "Bradford Council — conservation & planning",
    href: "https://www.bradford.gov.uk/",
  },
  {
    label: "Salts Mill — official site & visitor info",
    href: "https://www.saltsmill.org.uk/",
  },
  {
    label: "Saltaire History Club — local research",
    href: "https://saltairehistoryclub.org/",
  },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Why did UNESCO list Saltaire?",
    a: "It is an exceptionally intact model industrial village that shows how 19th-century ideas about industry, housing and welfare were built into one planned place.",
  },
  {
    q: "When was Salts Mill built?",
    a: "The Mill opened in 1853, with the surrounding village built largely between 1853 and 1876.",
  },
  {
    q: "Is Saltaire still lived in?",
    a: "Yes. It is a living community with residents, shops, cafés and cultural venues—please be considerate when visiting.",
  },
  {
    q: "Where can I learn more on site?",
    a: "Start at Salts Mill for galleries and shops, then walk to Roberts Park and through the village streets. Local signage and exhibitions change seasonally.",
  },
];

/** Hub topics shown near the top so this page works as a menu as well as an overview. */
type HubTopic = {
  name: string;
  href: string;
  blurb: string;
  group: "Overview & timeline" | "Buildings & places" | "People & stories" | "Research & archives";
};

const HUB_TOPICS: HubTopic[] = [
  {
    name: "History hub (this page)",
    href: "/history",
    blurb: "Quick overview, UNESCO summary and links out to every history topic.",
    group: "Overview & timeline",
  },
  {
    name: "Timeline",
    href: "/history/timeline",
    blurb: "Key dates from mill opening to regeneration and world heritage status.",
    group: "Overview & timeline",
  },
  {
    name: "Buildings & architecture",
    href: "/history/architecture",
    blurb: "How the village was planned, built and laid out – mills, streets and civic set pieces.",
    group: "Buildings & places",
  },
  {
    name: "Church (URC)",
    href: "/history/church",
    blurb: "Landmark tower, portico and Salt family mausoleum.",
    group: "Buildings & places",
  },
  {
    name: "Almshouses & model housing",
    href: "/history/almshouses",
    blurb: "Philanthropic housing and care on Victoria Road.",
    group: "Buildings & places",
  },
  {
    name: "Housing streets & typologies",
    href: "/history/housing",
    blurb: "Terraces, status cues and the everyday fabric of the village.",
    group: "Buildings & places",
  },
  {
    name: "School & education",
    href: "/history/school",
    blurb: "Classrooms, ventilation and the investment in skills.",
    group: "Buildings & places",
  },
  {
    name: "UNESCO World Heritage",
    href: "/history/architecture/unesco",
    blurb: "Criteria, boundaries and what inscription means in practice.",
    group: "Buildings & places",
  },
  {
    name: "Titus Salt & family",
    href: "/history/titus-salt",
    blurb: "The man behind the mill, his family and legacy.",
    group: "People & stories",
  },
  {
    name: "People & biographies",
    href: "/history/people",
    blurb: "Workers, residents and notable figures connected to the village.",
    group: "People & stories",
  },
  {
    name: "House histories",
    href: "/history/house-histories",
    blurb: "Street-by-street snapshots of who lived where.",
    group: "People & stories",
  },
  {
    name: "Myths & local stories",
    href: "/history/architecture/myths",
    blurb: "Folklore, misunderstandings and how the facts really stack up.",
    group: "People & stories",
  },
  {
    name: "Journal & Sentinel archive",
    href: "/history/archives",
    blurb: "Local newsletters and research journals in one place.",
    group: "Research & archives",
  },
  {
    name: "Research tools & reading list",
    href: "/history/reading-list",
    blurb: "Where to go next if you’re digging into Saltaire’s past.",
    group: "Research & archives",
  },
  {
    name: "WW1: Saltaire story",
    href: "/history/ww1",
    blurb: "How the First World War touched the village and its people.",
    group: "Research & archives",
  },
  {
    name: "WW2 & 20th century",
    href: "/history/ww2",
    blurb: "Later industry, change and preservation in the 20th century.",
    group: "Research & archives",
  },
];

/* ------------------------------ UI helpers -------------------------------- */

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="anchor-offset text-2xl font-bold tracking-tight md:text-3xl"
    >
      {children}
    </h2>
  );
}

/* --------------------------------- UI ------------------------------------- */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 py-3 text-sm text-gray-600"
    >
      <ol className="breadcrumbs">
        <li>
          <Link
            className="underline underline-offset-4 hover:text-black"
            href="/"
          >
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          History
        </li>
      </ol>
    </nav>
  );
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            History of Saltaire
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A model industrial village founded by Sir Titus Salt. Italianate
            stone streets, a colossal mill and a riverside park—together
            recognised by UNESCO for outstanding universal value.
          </p>
          <p className="mt-2 max-w-prose text-sm text-gray-700">
            This page is your starting point: use the topic grid below to jump
            into detailed guides on buildings, people, timelines and research.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">UNESCO World Heritage</li>
            <li className="badge">Italianate architecture</li>
            <li className="badge">19th-century social reform</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/salts-mill" className="btn btn-primary">
              Salts Mill
            </Link>
            <Link href="/walks" className="btn btn-outline">
              Walks & routes
            </Link>
            <Link href="/plan" className="btn btn-ghost">
              Plan your visit
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/history-unesco.png"
            alt="Stone terraced houses and mill chimney in Saltaire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </header>
  );
}

/** New: hub-style grid of all history topics, grouped to mirror the header dropdown. */
function TopicsHub() {
  const groups: HubTopic["group"][] = [
    "Overview & timeline",
    "Buildings & places",
    "People & stories",
    "Research & archives",
  ];

  return (
    <section
      id="topics"
      aria-labelledby="topics-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="topics-title">
        History topics at a glance
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Pick a topic to dive deeper. Everything here is being expanded over
        time, combining modern, visitor-friendly guides with serious research
        links.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {groups.map((group) => {
          const items = HUB_TOPICS.filter((t) => t.group === group);
          if (!items.length) return null;
          return (
            <div
              key={group}
              className="rounded-2xl border border-gray-200 bg-white p-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {group}
              </h3>
              <div className="mt-3 space-y-2">
                {items.map((topic) => (
                  <Link
                    key={topic.name}
                    href={topic.href}
                    className="block rounded-lg p-2 hover:bg-gray-50"
                  >
                    <div className="text-sm font-semibold text-gray-900">
                      {topic.name}
                    </div>
                    <p className="text-xs text-gray-600">{topic.blurb}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WhyUNESCO() {
  return (
    <section
      id="unesco"
      aria-labelledby="unesco-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="unesco-title">
        Why UNESCO recognised Saltaire
      </SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Outstanding universal value</h3>
            <p className="mt-2 text-gray-700">
              Saltaire is a remarkably complete planned industrial village: a
              monumental mill set alongside dignified workers’ housing, civic
              buildings and recreation spaces, all conceived as one design.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              It demonstrates 19th-century approaches to industry, welfare and
              town planning that influenced developments well beyond Yorkshire.
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Integrity & authenticity</h3>
            <p className="mt-2 text-gray-700">
              The original street plan, skyline and stone façades largely
              survive. Adaptive reuse of the Mill and conservation of Roberts
              Park protect vistas and the relationship between river, canal and
              village.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="timeline-title">Quick timeline</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        The essentials—from founding to inscription—so you can place what you
        see on the ground. For a deeper dive, see the dedicated{" "}
        <Link
          href="/history/timeline"
          className="underline underline-offset-4"
        >
          timeline page
        </Link>
        .
      </p>
      <div className="mt-6 grid gap-4">
        {TIMELINE.map((t) => (
          <article key={`${t.year}-${t.title}`} className="card card-hover">
            <div className="card-body">
              <div className="text-sm text-gray-500">{t.year}</div>
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-gray-700">{t.blurb}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-700">
        See also:{" "}
        <Link
          className="underline underline-offset-4"
          href="/salts-mill"
        >
          Salts Mill
        </Link>{" "}
        and{" "}
        <Link
          className="underline underline-offset-4"
          href="/roberts-park"
        >
          Roberts Park
        </Link>
        .
      </p>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section
      id="architecture"
      aria-labelledby="arch-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="arch-title">
        Architecture & urban design
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        A quick sketch of the physical setting. For a full building-by-building
        exploration, see{" "}
        <Link
          href="/history/architecture"
          className="underline underline-offset-4"
        >
          the architecture guide
        </Link>
        .
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {ARCHITECTURE.map((a) => (
          <div key={a.title} className="callout">
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-gray-700">{a.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          For photo ideas, try our{" "}
          <Link
            className="underline underline-offset-4"
            href="/salts-mill#photos"
          >
            Salts Mill photo spots
          </Link>{" "}
          and the{" "}
          <Link
            className="underline underline-offset-4"
            href="/walks#routes"
          >
            towpath &amp; park loops
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function PeopleSection() {
  return (
    <section
      id="people"
      aria-labelledby="people-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="people-title">
        People & ideas behind the village
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        These are the names you’ll see most often. We’ll expand them into
        detailed biographies in the{" "}
        <Link
          href="/history/people"
          className="underline underline-offset-4"
        >
          people &amp; biographies
        </Link>{" "}
        section.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {PEOPLE.map((p) => (
          <div key={p.name} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-gray-700">{p.note}</p>
            </div>
          </div>
        ))}
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">A living community</h3>
            <p className="mt-2 text-gray-700">
              Saltaire is not a museum. Residents live in the historic
              houses—please be considerate when exploring and keep to public
              routes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreservationSection() {
  return (
    <section
      id="preservation"
      aria-labelledby="pres-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="pres-title">
        Preservation & conservation today
      </SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {PRESERVATION.map((p, i) => (
          <div key={i} className="callout">
            <p className="text-gray-700">{p}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-700">
        Planning a trip? Read{" "}
        <Link className="underline underline-offset-4" href="/plan">
          Plan your visit
        </Link>{" "}
        and{" "}
        <Link className="underline underline-offset-4" href="/parking">
          Parking
        </Link>
        .
      </div>
    </section>
  );
}

function SourcesSection() {
  return (
    <section
      id="sources"
      aria-labelledby="src-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="src-title">Sources & further reading</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We prioritise primary and authoritative references. If you spot an
        error, email{" "}
        <a
          className="underline underline-offset-4"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        .
      </p>
      <ul className="mt-4 grid gap-2 text-sm">
        {SOURCES.map((s) => (
          <li key={s.href}>
            <a
              className="underline underline-offset-4 decoration-gray-300 hover:decoration-black"
              href={s.href}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xs text-gray-500">
        Historical details can change as new research appears; treat this page
        as a practical overview and follow the links above for deeper study.
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

function CTA() {
  return (
    <section
      aria-label="Explore more"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              See it for yourself
            </h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Pair the history with a lap of the village: Salts Mill, Roberts
              Park and a towpath stretch. Our guides keep everything practical
              and current.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/salts-mill" className="btn btn-primary">
                Salts Mill
              </Link>
              <Link href="/walks" className="btn btn-outline">
                Walks
              </Link>
              <Link href="/plan" className="btn btn-ghost">
                Plan
              </Link>
              <Link href="/food-drink" className="btn btn-muted">
                Eat &amp; Drink
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image
              src="/images/history-unesco.png"
              alt="Roberts Park bandstand and riverside paths"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- JSON-LD ---------------------------------- */

function JsonLd() {
  const base = site.url;

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "History of Saltaire & UNESCO World Heritage",
    url: `${base}/history`,
    description:
      "Local guide to Saltaire’s history: why UNESCO listed it, a timeline from the Mill (1853) to today, architecture highlights and preservation notes.",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#unesco-title", "#timeline-title"],
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "History",
        item: `${base}/history`,
      },
    ],
  };

  const timeline = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: TIMELINE.length,
    itemListElement: TIMELINE.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name:
        typeof t.year === "number"
          ? `${t.year}: ${t.title}`
          : `${t.year} — ${t.title}`,
      url: `${base}/history#timeline`,
      description: t.blurb,
    })),
  };

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(timeline) }}
      />
    </>
  );
}

/* --------------------------------- Page ----------------------------------- */

export default function HistoryPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <TopicsHub />
      <WhyUNESCO />
      <TimelineSection />
      <ArchitectureSection />
      <PeopleSection />
      <PreservationSection />
      <SourcesSection />
      <FAQSection />
      <CTA />
      <JsonLd />
    </>
  );
}
