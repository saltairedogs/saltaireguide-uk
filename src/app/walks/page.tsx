// src/app/walks/page.tsx
// Saltaire Walks — upgraded cornerstone (static, CWV-friendly, E-E-A-T heavy)
// - Server-only (no client components)
// - Clear first-time vs family vs longer-day routes
// - Strong access/safety sections + future gear/affiliate hook
// - JSON-LD: WebPage (+ speakable) + BreadcrumbList + ItemList(HikingTrail) + FAQPage

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import RelatedLinks from "@/components/RelatedLinks";

export const dynamic = "error";

const UPDATED = "2025-12-10";

/* --------------------------------- SEO meta -------------------------------- */

export const metadata: Metadata = {
  title:
    "Best walks from Saltaire & Shipley: canal, Shipley Glen, Hirst Wood & family routes",
  description:
    "Local walks from Saltaire & Shipley: canal towpath to Bingley Five-Rise, Shipley Glen loop, Roberts Park step-free river loop and Hirst Wood. Distances, times, accessibility, dog-friendly notes and GPX.",
  alternates: { canonical: `${site.url}/walks` },
  openGraph: {
    title: "Walks from Saltaire — maps, distances, accessibility & GPX",
    description:
      "Practical local walking routes from Saltaire with distances, time, step-free notes, dog-friendly tips and downloadable GPX files.",
    url: `${site.url}/walks`,
    type: "article",
    images: [
      {
        url: `${site.url}/images/saltaire-canal.png`,
        width: 1200,
        height: 800,
        alt: "Canal towpath leaving Saltaire village",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

/* -------------------------------- Data model ------------------------------- */

type WalkGrade = "Short & easy" | "Canal classic" | "Woodland & rocky" | "Family step-free";

type Walk = {
  slug: string;
  title: string;
  distanceKm: number;
  timeMin: number;
  ascentM: number;
  grade: WalkGrade;
  stepFree: boolean;
  dogFriendly: boolean;
  start: string; // short description
  startArea: string; // e.g. Salts Mill, Roberts Park, Saltaire station
  bestFor: string; // human-readable "good for..."
  terrain: string; // surfaces summary
  highlights: string[];
  gpx?: string; // path in /gpx
  image?: { src: string; alt: string; width: number; height: number };
};

const WALKS: Walk[] = [
  {
    slug: "five-rise",
    title: "Canal towpath to Bingley Five-Rise (out & back)",
    distanceKm: 10.2,
    timeMin: 150,
    ascentM: 60,
    grade: "Canal classic",
    stepFree: true,
    dogFriendly: true,
    start: "From Saltaire station or Salts Mill, pick up the Leeds–Liverpool Canal westbound.",
    startArea: "Saltaire station / Salts Mill",
    bestFor: "First-time visitors, canal fans, full half-day from the village.",
    terrain: "Mostly level towpath; some narrow sections, puddles and tree roots after rain.",
    highlights: [
      "Level Aire Valley canal with historic locks",
      "Plenty of benches and tea stops en route",
      "Iconic Bingley Five-Rise lock staircase",
    ],
    gpx: "/gpx/saltaire-to-five-rise.gpx",
    image: {
      src: "/images/saltaire-canal.png",
      alt: "Canal towpath from Saltaire towards Bingley",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "shipley-glen",
    title: "Shipley Glen & Trench Wood loop",
    distanceKm: 7.4,
    timeMin: 120,
    ascentM: 180,
    grade: "Woodland & rocky",
    stepFree: false,
    dogFriendly: true,
    start:
      "Cross Roberts Park footbridge, climb via the Glen Tramway path, loop through woodland and return via the moor edge.",
    startArea: "Roberts Park footbridge",
    bestFor: "People after views and rockier paths rather than a flat towpath.",
    terrain: "Steeper sections, rocky steps, roots and mud in wet weather.",
    highlights: [
      "Millstone grit outcrops and boulders",
      "Woodland trails with birdsong",
      "Wide views back to Saltaire & Shipley",
    ],
    gpx: "/gpx/shipley-glen-loop.gpx",
    image: {
      src: "/images/walks-from-saltaire.png",
      alt: "Shipley Glen woodland and moorland trails above Saltaire",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "river-loop-step-free",
    title: "Roberts Park river loop (step-free)",
    distanceKm: 2.2,
    timeMin: 40,
    ascentM: 25,
    grade: "Family step-free",
    stepFree: true,
    dogFriendly: true,
    start:
      "Start at Half Moon Café; follow the riverside path and loop back via the bandstand and promenade.",
    startArea: "Roberts Park, near Half Moon Café",
    bestFor: "Prams, wheelchairs and gentle leg-stretch with a café and playground.",
    terrain: "Park paths and riverside surfaces; mostly smooth with a few gentle slopes.",
    highlights: [
      "Playground & Half Moon Café",
      "River Aire & Roberts Park lawns",
      "Benches, loos and easy turn-back points",
    ],
    gpx: "/gpx/roberts-park-step-free.gpx",
    image: {
      src: "/images/roberts-park.png",
      alt: "Roberts Park riverside path in Saltaire",
      width: 1200,
      height: 800,
    },
  },
  {
    slug: "hirst-wood",
    title: "Hirst Wood & Nature Reserve loop",
    distanceKm: 5.1,
    timeMin: 90,
    ascentM: 55,
    grade: "Short & easy",
    stepFree: false,
    dogFriendly: true,
    start:
      "Pick up the canal westbound, cross to Hirst Lock, loop through Hirst Wood and the nature reserve boardwalks.",
    startArea: "Salts Mill / canal towpath",
    bestFor: "Quieter woodland feel with birds, locks and a shorter outing.",
    terrain: "Canal towpath plus woodland paths and some uneven boardwalk sections.",
    highlights: [
      "Lock-side views at Hirst Lock",
      "Hirst Wood and nature reserve boardwalk",
      "Quieter feel just beyond Saltaire",
    ],
    gpx: "/gpx/hirst-wood-loop.gpx",
    image: {
      src: "/images/walks-from-saltaire.png",
      alt: "Hirst Wood nature reserve boardwalk near Saltaire",
      width: 1200,
      height: 800,
    },
  },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What’s the best first walk if I’ve never been to Saltaire?",
    a: "If you want the classic experience, walk the canal towpath towards Bingley and turn back whenever you’ve had enough. For a shorter taste, combine Salts Mill with the Roberts Park river loop.",
  },
  {
    q: "Are the canal walks step-free?",
    a: "The towpath between Saltaire and Bingley is mostly level and step-free, but there are narrow points, puddles and some uneven sections. Wheelchair and pram users usually manage fine in good conditions; avoid after heavy rain or ice.",
  },
  {
    q: "Where can I download GPX files?",
    a: "Each route card includes a GPX link. Save it to your phone and open in apps like OS Maps, Komoot or Outdooractive. Always carry a backup (map or screenshot) and don’t rely on battery alone.",
  },
  {
    q: "Are dogs allowed on these routes?",
    a: "Yes on all the routes listed here. Keep dogs close near livestock, cyclists and the canal edge, and respect any on-site signage in Roberts Park and Shipley Glen.",
  },
  {
    q: "What footwear do I need?",
    a: "Canal and Roberts Park: sturdy trainers are fine in dry weather. Hirst Wood and Shipley Glen: lightweight walking shoes or boots are better, especially in autumn/winter when it’s muddy.",
  },
];

/* -------------------------------- Utilities -------------------------------- */

function fmtKm(n: number) {
  // round to 0.1 km but strip trailing .0
  const s = n.toFixed(1);
  return s.endsWith(".0") ? `${parseInt(s, 10)} km` : `${s} km`;
}
function fmtTime(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  if (!h) return `${m} min`;
  if (!m) return `${h} hr`;
  return `${h} hr ${m} min`;
}

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

/* ------------------------------- Components -------------------------------- */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 py-3 text-sm text-gray-600"
    >
      <ol className="breadcrumbs">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-black"
          >
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Walks
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
            Walks from Saltaire &amp; Shipley
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            Canal towpath, parks and woodland loops — all starting from the
            village, Roberts Park or Hirst Wood. These routes are walked and
            re-checked locally, with realistic timings, access notes and GPX.
          </p>
          <ul className="mt-4 text-sm text-gray-600">
            <li>• First-time “classic” canal route to Bingley</li>
            <li>• Family-friendly step-free loop in Roberts Park</li>
            <li>• Woodland and moorland option via Shipley Glen</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Updated {UPDATED}</li>
            <li className="badge">Step-free &amp; family options</li>
            <li className="badge">Dog-friendly</li>
            <li className="badge">Local &amp; independent</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="#routes">
              See featured routes
            </Link>
            <Link className="btn btn-outline" href="#compare">
              Compare distances
            </Link>
            <Link className="btn btn-ghost" href="/parking">
              Parking for walks
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/saltaire-canal.png"
            alt="Towpath leaving Saltaire alongside the canal"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}

function PageTOC() {
  const items = [
    { href: "#routes", label: "Featured routes" },
    { href: "#compare", label: "Compare distances" },
    { href: "#access", label: "Step-free & access notes" },
    { href: "#safety", label: "Weather & safety" },
    { href: "#gear", label: "What to bring" },
    { href: "#tips", label: "Local tips" },
    { href: "#faqs", label: "FAQs" },
  ];
  return (
    <aside className="container mx-auto px-4">
      <nav
        aria-label="On this page"
        className="mt-6 rounded-xl border border-gray-200 bg-white p-4"
      >
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
  );
}

function WalkCard({ w }: { w: Walk }) {
  const hasGpx = Boolean(w.gpx);
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <div className="relative h-48 w-full md:h-56">
        {w.image ? (
          <Image
            alt={w.image.alt}
            src={w.image.src}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">{w.title}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
          Start: {w.startArea}
        </p>
        <p className="mt-2 text-sm text-gray-700">{w.start}</p>
        <ul className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
          <li className="badge">{fmtKm(w.distanceKm)}</li>
          <li className="badge">{fmtTime(w.timeMin)}</li>
          <li className="badge">{w.grade}</li>
          <li className="badge">{w.stepFree ? "Step-free" : "Some steps"}</li>
          <li className="badge">
            {w.dogFriendly ? "Dog-friendly" : "Dogs: check onsite"}
          </li>
        </ul>
        <p className="mt-3 text-xs text-gray-600">
          Best for: <span className="font-medium">{w.bestFor}</span>
        </p>
        <p className="mt-1 text-xs text-gray-600">
          Terrain: <span className="font-medium">{w.terrain}</span>
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {w.highlights.map((h) => (
            <li key={h} className="text-sm text-gray-700">
              <span aria-hidden="true" className="mr-1">
                ✓
              </span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/walks/${w.slug}`}
            className="btn btn-primary btn-sm"
            aria-label={`Read the ${w.title} guide`}
          >
            Read guide
          </Link>
          {hasGpx && (
            <a
              className="btn btn-outline btn-sm"
              href={w.gpx}
              download
              aria-label={`Download GPX for ${w.title}`}
            >
              Download GPX
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function FeaturedRoutes() {
  return (
    <section
      id="routes"
      aria-labelledby="routes-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="routes-title">Featured routes</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Start directly from Salts Mill, Saltaire station or Roberts Park. If
        you&apos;re new to the area, try the canal towpath first, then come
        back for Hirst Wood or Shipley Glen once you know the lie of the land.
      </p>
      <div className="mt-5 grid gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold">First visit</h3>
          <p className="mt-1">
            <Link
              href="/walks/five-rise"
              className="underline underline-offset-4"
            >
              Canal to Five-Rise
            </Link>{" "}
            — turn back at any lock for a shorter classic.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">With pram or wheels</h3>
          <p className="mt-1">
            <Link
              href="/walks/river-loop-step-free"
              className="underline underline-offset-4"
            >
              Roberts Park step-free loop
            </Link>{" "}
            — playground, café, loos and benches.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">A bit more effort</h3>
          <p className="mt-1">
            <Link
              href="/walks/shipley-glen"
              className="underline underline-offset-4"
            >
              Shipley Glen loop
            </Link>{" "}
            — rockier, with views back over Saltaire &amp; Shipley.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WALKS.map((w) => (
          <WalkCard key={w.slug} w={w} />
        ))}
      </div>
    </section>
  );
}

function CompareTable() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="compare-title">
        Compare distances &amp; difficulty
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Times are for a steady pace with short photo stops. Add extra time for
        cafés, kids, very muddy days or slower walkers.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="table min-w-[760px]">
          <thead>
            <tr>
              <th className="w-[28%]">Route</th>
              <th>Distance</th>
              <th>Time</th>
              <th>Ascent</th>
              <th>Grade</th>
              <th>Step-free</th>
              <th>Dog-friendly</th>
              <th>Start point</th>
            </tr>
          </thead>
          <tbody>
            {WALKS.map((w) => (
              <tr key={w.slug}>
                <td className="font-medium">
                  <a
                    className="underline underline-offset-4 decoration-gray-300 hover:decoration-black"
                    href={`/walks/${w.slug}`}
                  >
                    {w.title}
                  </a>
                </td>
                <td>{fmtKm(w.distanceKm)}</td>
                <td>{fmtTime(w.timeMin)}</td>
                <td>{w.ascentM} m</td>
                <td>{w.grade}</td>
                <td>{w.stepFree ? "Yes" : "No"}</td>
                <td>{w.dogFriendly ? "Yes" : "Check"}</td>
                <td>{w.startArea}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StepFreeAccess() {
  return (
    <section
      id="access"
      aria-labelledby="access-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="access-title">
          Step-free &amp; access notes
        </SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">
                Step-free &amp; pram-friendly options
              </h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                <li>
                  <strong>Roberts Park river loop</strong>: smooth park paths,
                  gentle gradients and benches; good for prams, small bikes and
                  wheelchairs in fair weather.
                </li>
                <li>
                  <strong>Canal towpath towards Bingley</strong>: mostly level
                  and step-free; narrow in places, with puddles after rain.
                </li>
                <li>
                  <strong>Hirst Wood</strong>: has boardwalk sections and some
                  roots; better for robust prams or chairs with support.
                </li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                Surfaces and conditions change with weather. If you need more
                detail, see the{" "}
                <Link
                  href="/plan/accessibility"
                  className="underline underline-offset-4"
                >
                  step-free &amp; accessibility notes
                </Link>
                .
              </p>
            </div>
          </article>
          <article className="card card-muted">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Parking close to routes</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
                <li>
                  For the{" "}
                  <strong>Roberts Park loop and Shipley Glen</strong>, park
                  near the park (see{" "}
                  <Link
                    href="/parking"
                    className="underline underline-offset-4"
                  >
                    Parking guide
                  </Link>
                  ) and use the footbridge.
                </li>
                <li>
                  For the <strong>canal &amp; Hirst Wood</strong> routes,
                  Caroline Street and the Salts Mill area are good bases.
                </li>
                <li>
                  Blue Badge concessions and rules vary by bay — always read the
                  plate beside your exact space.
                </li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                This is practical guidance, not legal or medical advice. Choose
                what feels safe for you and your group on the day.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function SafetyAndWeather() {
  return (
    <section
      id="safety"
      aria-labelledby="safety-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="safety-title">
        Weather, seasons &amp; safety basics
      </SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Before you set off</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
            <li>Check the weather and sunset time, especially in winter.</li>
            <li>
              Tell someone roughly where you&apos;re going and when you expect
              to be back.
            </li>
            <li>
              Bring water, a light layer and a small snack even on short walks.
            </li>
            <li>
              Don&apos;t rely on one phone — screenshots or a small paper map
              help if batteries die.
            </li>
          </ul>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">On the route</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
            <li>
              Towpaths can be slippy after rain; keep away from the edge and
              mind bikes.
            </li>
            <li>
              In Shipley Glen, rocks and tree roots are slick when wet or icy —
              slow down and avoid pushchairs.
            </li>
            <li>
              Respect livestock, dogs on leads signs and any temporary
              closures.
            </li>
            <li>
              Turn back earlier rather than rushing to “complete” a loop if
              conditions worsen.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function GearCallout() {
  return (
    <section
      id="gear"
      aria-labelledby="gear-title"
      className="border-y border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <SectionHeading id="gear-title">
          What to bring for a Saltaire walk
        </SectionHeading>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="card-body text-sm text-gray-700">
              <p>
                For most of these walks you don&apos;t need full mountain kit,
                but a few simple things make the day nicer:
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>Comfortable trainers or light walking shoes.</li>
                <li>Refillable water bottle and a small snack.</li>
                <li>Light waterproof or windproof layer.</li>
                <li>Power bank or spare battery if you use your phone for maps.</li>
              </ul>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body text-sm text-gray-700">
              <p>
                We&apos;re putting together a simple{" "}
                <Link
                  href="/plan/what-to-bring"
                  className="underline underline-offset-4"
                >
                  “what to bring” checklist
                </Link>{" "}
                for Saltaire &amp; Shipley walks, including a few gear
                recommendations that work well on local paths.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Some links on that checklist may be affiliate links (for
                example Amazon). If we use them, they will be clearly labelled
                and won&apos;t change which routes we recommend or how we
                describe them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalTips() {
  return (
    <section
      id="tips"
      aria-labelledby="tips-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="tips-title">Local tips</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Picking your first route</h3>
          <p className="mt-2 text-gray-700">
            Short on time? Pair a{" "}
            <strong>quick canal out-and-back</strong> with a coffee at Salts
            Mill. Want a full half-day? Follow the{" "}
            <strong>Five-Rise canal route</strong> and decide at Three-Rise or
            Five-Rise how far to go.
          </p>
          <p className="mt-2 text-gray-700">
            With kids or prams, the{" "}
            <strong>Roberts Park step-free loop</strong> keeps cafés, loos and
            playgrounds close by, so you can bail out easily.
          </p>
        </div>
        <div className="callout callout-warn">
          <h3 className="text-lg font-semibold">Small things that help</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>
              Start earlier on sunny weekends — paths, cafés and parking all
              feel calmer.
            </li>
            <li>
              Build in time for a bookshop browse at Salts Mill on the way
              back.
            </li>
            <li>
              Travelling by car? Read the{" "}
              <Link
                className="underline underline-offset-4"
                href="/parking"
              >
                Parking guide
              </Link>{" "}
              first. Coming by train drops you right at the start of most
              routes.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          If a path, gate or surface has changed since you walked one of these
          routes, we&apos;d appreciate a quick note via{" "}
          <Link className="underline underline-offset-4" href="/contact">
            the contact page
          </Link>{" "}
          so we can update the guide.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
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

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: WALKS.length,
    itemListElement: WALKS.map((w, i) => {
      let difficulty: "easy" | "moderate" | "difficult" = "easy";
      if (w.grade === "Woodland & rocky") difficulty = "moderate";
      return {
        "@type": "ListItem",
        position: i + 1,
        name: w.title,
        url: `${base}/walks/${w.slug}`,
        item: {
          "@type": "HikingTrail",
          name: w.title,
          trailLength: {
            "@type": "QuantitativeValue",
            value: w.distanceKm,
            unitCode: "KMT",
          },
          estimatedDuration: `PT${Math.round(w.timeMin)}M`,
          isAccessibleForFree: true,
          difficultyLevel: difficulty,
        },
      };
    }),
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Walks from Saltaire & Shipley",
    url: `${base}/walks`,
    description:
      "Local walks from Saltaire & Shipley: canal towpath to Bingley Five-Rise, Shipley Glen, Roberts Park step-free loop and Hirst Wood. Distances, times, accessibility, dog-friendly tips and GPX.",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#routes-title", "#tips-title"],
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Walks", item: `${base}/walks` },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}

/* --------------------------------- Page ----------------------------------- */

export default function WalksPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <PageTOC />
      <FeaturedRoutes />
      <CompareTable />
      <StepFreeAccess />
      <SafetyAndWeather />
      <GearCallout />
      <LocalTips />
      <FAQ />
      <RelatedLinks exclude={["/walks"]} title="Related Saltaire guides" />
      <JsonLd />
    </>
  );
}
