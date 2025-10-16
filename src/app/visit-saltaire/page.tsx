// app/visit-saltaire/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealInit from "@/components/RevealInit";

/**
 * VISIT SALTAIRE — Premium card design (paper aesthetic)
 * - Server Component only (no styled-jsx, no 'use client')
 * - Full-bleed hero w/ parallax
 * - Paper cards with grain, layered shadows, warm borders
 * - Chips, tinted variants, micro-interactions
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://saltaireguide.uk"),
  title: "Visit Saltaire 2025 | Complete UNESCO Village Guide | BD18",
  description:
    "Plan your visit to Saltaire UNESCO World Heritage Site (BD18). Parking, best things to do, Salts Mill, Roberts Park, canal walks, cafés & practical local tips.",
  alternates: { canonical: "/visit-saltaire" },
  openGraph: {
    type: "website",
    url: "https://saltaireguide.uk/visit-saltaire",
    siteName: "Saltaire Guide",
    title: "Visit Saltaire 2025 | Complete UNESCO Village Guide",
    description:
      "Everything you need for a Saltaire day out: parking, attractions, food, walks & history.",
    images: [{ url: "/og/visit-saltaire.png", width: 1200, height: 630, alt: "Salts Mill and canal in Saltaire" }],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Saltaire 2025 | Complete UNESCO Village Guide",
    description:
      "Plan the perfect visit to Saltaire — best things to do, parking, walks, cafés & practical tips.",
    images: ["/og/visit-saltaire.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  category: "travel",
};

const UPDATED = "2025-10-15";

/* ---------- Presentational helpers ---------- */

function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function Card({
  children,
  className = "",
  tint, // "blue" | "green" | undefined
  as: As = "article",
}: {
  children: React.ReactNode;
  className?: string;
  tint?: "blue" | "green";
  as?: any;
}) {
  const tintClass =
    tint === "blue" ? "card--blue" : tint === "green" ? "card--green" : "";
  return (
    <As className={`card reveal ${tintClass} ${className}`} data-animate="up">
      {children}
    </As>
  );
}

/* ---------- PAGE ---------- */

export default function VisitSaltairePage() {
  return (
    // inherit global background from layout (no bg-* here)
    <main className="flex min-h-screen flex-col text-stone-900">
      <RevealInit />
      {/* HERO */}
      <section className="relative isolate min-h-[60vh]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/saltaire-canal.png"
            alt="Saltaire canal and mill — soft overcast day"
            fill
            priority
            sizes="100vw"
            style={{ transform: "translateY(var(--heroY,0px))" }}
            className="object-cover will-change-transform"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.2), rgba(0,0,0,.55))",
            }}
          />
          <div className="pointer-events-none absolute inset-0 -z-10 animate-grain opacity-30 mix-blend-overlay" />
        </div>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-stone-200">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="underline decoration-stone-300/60 underline-offset-2 hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li aria-current="page" className="text-white/90">
              Visit Saltaire
            </li>
          </ol>
        </nav>

        {/* Hero copy */}
        <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 md:pt-28">
          <div className="max-w-3xl">
            <h1
              className="reveal is-visible mb-3 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl"
              data-animate="fade"
              data-delay="0"
            >
              Visit Saltaire: UNESCO World Heritage Village Guide
            </h1>

            <p className="reveal is-visible text-lg/7 text-white/90 md:text-xl" data-animate="fade" data-delay="90">
              Everything you need to plan the perfect day in Saltaire, West Yorkshire (BD18). Local tips for parking,
              attractions, walks, cafés and the history that makes this place special.
            </p>

            <div className="reveal is-visible mt-5 flex flex-wrap gap-2" data-animate="stagger">
              <Chip>Updated {UPDATED}</Chip>
              <Chip>Family friendly</Chip>
              <Chip>Free & paid options</Chip>
              <Chip>Step-free areas</Chip>
            </div>

            {/* Anchors */}
            <div className="reveal is-visible mt-8 flex flex-wrap gap-3" data-animate="up" data-delay="140">
              {[
                { href: "#top-5", label: "Top things to do" },
                { href: "#itineraries", label: "Itineraries" },
                { href: "#parking", label: "Parking" },
                { href: "#food", label: "Food & drink" },
                { href: "#walks", label: "Walks" },
                { href: "#best-time", label: "Best time" },
                { href: "#photo-spots", label: "Photo spots" },
                { href: "#faq", label: "FAQ" },
              ].map((a) => (
                <Link key={a.href} href={a.href} className="chip chip--button hover:-translate-y-0.5 transition">
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* Sticky in-page nav */}
        <div
          id="sticky-nav"
          className="sticky -top-px z-20 mx-auto hidden w-full md:block"
          style={{
            borderBottom: "1px solid rgba(255,255,255,.12)",
            backgroundColor: "rgba(0,0,0,.30)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-center gap-4 py-3 text-sm text-white/90">
              {[
                ["Top", "#top-5"],
                ["Itineraries", "#itineraries"],
                ["Parking", "#parking"],
                ["Food", "#food"],
                ["Walks", "#walks"],
                ["Best time", "#best-time"],
                ["Photo spots", "#photo-spots"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="anchor-link hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto mt-10 w-full max-w-6xl px-4">
        <Card className="grid gap-6 md:grid-cols-2 md:p-8 p-6" >
          <div>
            <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-stone-800">First time in Saltaire?</h2>
            <p className="text-stone-700">
              Saltaire is a complete Victorian model village founded in 1853 by Sir Titus Salt and recognised by UNESCO
              for its industrial heritage. You’ll find Salts Mill (free David Hockney gallery), Roberts Park, the canal,
              independent cafés and a walkable grid of honey-stone streets.
            </p>
          </div>
          <ul className="grid list-disc gap-2 pl-5 text-sm text-stone-700">
            <li>
              <Link href="/parking" className="link">
                Free on-street parking
              </Link>{" "}
              (time-limited) + low-cost car parks.
            </li>
            <li>
              <Link href="/plan/getting-here" className="link">
                15–25 minutes by train
              </Link>{" "}
              from Leeds or Bradford.
            </li>
            <li>Plan 2–4 hours for village & mill; a full day with walks.</li>
            <li>Dogs welcome in Roberts Park & on the canal towpath (guide dogs only inside the mill).</li>
          </ul>
        </Card>
      </section>

      {/* Top 5 */}
      <section id="top-5" className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="reveal mb-6 text-3xl font-extrabold tracking-tight text-stone-900" data-animate="up">
          Top 5 things to do in Saltaire
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Salts Mill & 1853 Hockney Gallery", time: "45–90 mins", desc: "Explore the free David Hockney gallery, bookshop, independent stores and cafés inside the landmark mill.", link: "/salts-mill" },
            { title: "Roberts Park", time: "30–60 mins", desc: "Victorian park with river walks, bandstand and play areas. Perfect for a picnic (Half Moon Café nearby).", link: "/roberts-park" },
            { title: "UNESCO village walk", time: "45 mins", desc: "Self-guided loop past the Congregational Church, almshouses and Italianate terraces.", link: "/history" },
            { title: "Canal towpath walk", time: "30–90 mins", desc: "Flat, pram-friendly stretch of the Leeds–Liverpool Canal with classic mill views.", link: "/walks" },
            { title: "Coffee, brunch & pubs", time: "30–60 mins", desc: "Cafés in the mill and village; outdoor seating in good weather; independent bakeries and roasts.", link: "/food-drink" },
          ].map((item, i) => (
            <Card key={item.title} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="eyebrow">{i + 1}</div>
                  <h3 className="mb-1 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mb-3 text-sm text-stone-600">{item.desc}</p>
                  <Link href={item.link} className="link-cta">Full guide →</Link>
                </div>
                <Chip>{item.time}</Chip>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Itineraries */}
      <section id="itineraries" className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="reveal mb-6 text-3xl font-extrabold tracking-tight text-stone-900" data-animate="up">
          Sample visit itineraries
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card tint="blue" className="p-6">
            <h3 className="mb-3 text-xl font-bold">Half day (2–3 hours)</h3>
            <ol className="space-y-2 text-sm">
              <li><strong>10:00</strong> — Park & explore Salts Mill</li>
              <li><strong>11:15</strong> — Coffee at the mill café</li>
              <li><strong>11:45</strong> — Stroll the village streets</li>
              <li><strong>12:30</strong> — Roberts Park loop</li>
            </ol>
          </Card>

          <Card tint="green" className="p-6">
            <h3 className="mb-3 text-xl font-bold">Full day (5–6 hours)</h3>
            <ol className="space-y-2 text-sm">
              <li><strong>10:00</strong> — Salts Mill galleries & shops</li>
              <li><strong>11:30</strong> — Brunch in the village</li>
              <li><strong>13:00</strong> — Canal walk (option to Five Rise Locks)</li>
              <li><strong>15:00</strong> — Roberts Park & ice cream</li>
              <li><strong>16:30</strong> — Explore independent shops</li>
            </ol>
          </Card>
        </div>
      </section>

      {/* Practical */}
      <section id="parking" className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="reveal mb-6 text-3xl font-extrabold tracking-tight text-stone-900" data-animate="up">
          Practical information
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-3 text-lg font-semibold">📍 Location & access</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong>Where:</strong> Saltaire, West Yorkshire, BD18.</li>
              <li><strong>From Bradford:</strong> 10 mins drive / 15 mins train.</li>
              <li><strong>From Leeds:</strong> 20 mins drive / 25 mins train.</li>
              <li><strong>Station:</strong> Saltaire Railway Station (on site).</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-lg font-semibold">🅿️ Parking options</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li><strong>Free:</strong> Side streets (often 2-hour zones — check signs).</li>
              <li><strong>Paid:</strong> Caroline St (£3–5/day) & Exhibition Rd car parks.</li>
              <li><strong>Disabled:</strong> Blue badge bays on Victoria Rd.</li>
              <li><Link href="/parking" className="link">Full parking guide →</Link></li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="mb-3 text-lg font-semibold">♿ Accessibility</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>Salts Mill has level access, lifts and accessible toilets.</li>
              <li>Roberts Park paths are flat; café accessible.</li>
              <li>Village mostly flat; some cobbles near the mill.</li>
              <li><Link href="/plan/accessibility" className="link">Accessibility info →</Link></li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 id="food" className="mb-3 text-lg font-semibold">🍽️ Food & drink</h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>Cafés and bakeries in the mill and village.</li>
              <li>Independent coffee, brunch and traditional Yorkshire pubs.</li>
              <li>Outdoor seating in good weather.</li>
              <li><Link href="/food-drink" className="link">Food & drink guide →</Link></li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Walks & seasons */}
      <section id="walks" className="mx-auto w-full max-w-6xl px-4 pb-14">
        <h2 className="reveal mb-6 text-3xl font-extrabold tracking-tight text-stone-900" data-animate="up">
          Walks & seasons
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-3 text-lg font-semibold">🥾 Canal & village walks</h3>
            <p className="text-sm text-stone-700">
              The Leeds–Liverpool Canal is flat and pram-friendly. The UNESCO village is compact and easy to explore on foot.
            </p>
            <div className="mt-3"><Link href="/walks" className="link">Browse walks →</Link></div>
          </Card>
          <Card className="p-6">
            <h3 id="best-time" className="mb-3 text-lg font-semibold">🗓️ Best time to visit</h3>
            <ul className="space-y-3 text-sm text-stone-700">
              <li><strong>Spring:</strong> Daffodils in Roberts Park, quiet weekdays.</li>
              <li><strong>Summer:</strong> Long days, bandstand concerts, busiest season.</li>
              <li><strong>Autumn:</strong> Canal colours, Saltaire Festival (Sept).</li>
              <li><strong>Winter:</strong> Quiet, cosy cafés; galleries open; wrap up for towpath walks.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Photo spots */}
      <section id="photo-spots" className="mx-auto w-full max-w-6xl px-4 pb-16">
        <h2 className="reveal mb-6 text-3xl font-extrabold tracking-tight text-stone-900" data-animate="up">
          Best photo spots in Saltaire
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Salts Mill chimney from the canal", "Golden hour reflection along the towpath."],
            ["Roberts Park footbridge", "Symmetry over the river with the mill in the distance."],
            ["Congregational Church portico", "Classic columns; shoot at 50mm for clean lines."],
            ["Victoria Road terraces", "Honey-stone streets; avoid midday contrast for softer tones."],
            ["Half Moon Café", "Candid coffee shot outdoors (mind privacy)."],
            ["Hockney posters inside the mill", "Detail-led, texture shots; signage rules apply."],
          ].map(([title, tip], i) => (
            <Card key={String(i)} className="p-5">
              <div className="eyebrow">{i + 1}</div>
              <h3 className="mb-1 font-semibold">{title}</h3>
              <p className="text-sm text-stone-600">{tip}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Plan links */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <h2 className="reveal mb-6 text-3xl font-extrabold tracking-tight text-stone-900" data-animate="up">
          Plan your Saltaire visit
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Parking Guide", href: "/parking", icon: "🅿️" },
            { title: "Getting Here", href: "/plan/getting-here", icon: "🚂" },
            { title: "Food & Drink", href: "/food-drink", icon: "🍽️" },
            { title: "Walks & Trails", href: "/walks", icon: "🥾" },
            { title: "What’s On", href: "/events", icon: "📅" },
            { title: "Family Guide", href: "/plan/family", icon: "👨‍👩‍👧" },
            { title: "UNESCO History", href: "/history/unesco", icon: "🏛️" },
            { title: "Local Services", href: "/local-services", icon: "🔧" },
            { title: "Browse All Pages", href: "/blog", icon: "📖" },
          ].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="card reveal flex items-center gap-3 p-4 transition hover:-translate-y-0.5"
              data-animate="up"
              data-delay={String(40 * i)}
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"BreadcrumbList",
        itemListElement:[
          {"@type":"ListItem","position":1,"name":"Home","item":"https://saltaireguide.uk/"},
          {"@type":"ListItem","position":2,"name":"Visit Saltaire","item":"https://saltaireguide.uk/visit-saltaire"}
        ]})}} />
      <script id="faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"Is parking free in Saltaire?","acceptedAnswer":{"@type":"Answer","text":"Yes, free parking is available on nearby side streets with a typical 2-hour limit. Low-cost car parks on Caroline Street and Exhibition Road offer full-day options."}},
          {"@type":"Question","name":"How long does it take to visit Saltaire?","acceptedAnswer":{"@type":"Answer","text":"A half-day visit (2–3 hours) covers Salts Mill and the village. A full day (5–6 hours) allows time for walks, Roberts Park and a relaxed meal."}},
          {"@type":"Question","name":"What is Saltaire famous for?","acceptedAnswer":{"@type":"Answer","text":"Saltaire is a UNESCO World Heritage Site — a complete Victorian model village built by Sir Titus Salt in 1853. It’s known for Salts Mill, the David Hockney gallery, and beautifully preserved architecture."}},
          {"@type":"Question","name":"Is Saltaire dog-friendly?","acceptedAnswer":{"@type":"Answer","text":"Dogs are welcome in Roberts Park and on canal walks. Many cafés have outdoor seating. Inside Salts Mill, only guide dogs are permitted."}}
        ]})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"TouristAttraction",
        name:"Saltaire UNESCO World Heritage Village",
        description:"Victorian model village featuring Salts Mill, David Hockney gallery, Roberts Park and historic architecture.",
        image:["https://saltaireguide.uk/og/visit-saltaire.png"],
        address:{"@type":"PostalAddress","streetAddress":"Victoria Road","addressLocality":"Saltaire","addressRegion":"West Yorkshire","postalCode":"BD18","addressCountry":"GB"},
        geo:{"@type":"GeoCoordinates","latitude":53.8385,"longitude":-1.7868},
        isAccessibleForFree:true, publicAccess:true,
        url:"https://saltaireguide.uk/visit-saltaire",
        datePublished:"2024-01-01", dateModified: UPDATED,
        touristType:["Family","History enthusiasts","Architecture fans","Day trippers"]
      })}} />

      {/* Animations handled by RevealInit client component */}

      {/* Premium card styles (plain CSS, no styled-jsx) */}
      <style dangerouslySetInnerHTML={{ __html: `
:root{
  --ink:#342e28;
  --paper:#FBF7EF;
  --paper-2:#F6F1E7;
  --border:#E8E1D4;
  --border-strong:#D9D0C1;
  --shadow-a: 0 10px 24px rgba(34,25,17,.06);
  --shadow-b: 0 2px 6px rgba(34,25,17,.05);
  --inner: inset 0 1px 0 rgba(255,255,255,.75);
}

/* Film grain */
@keyframes grain { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-2%, -2%) scale(1.02); } }
.animate-grain { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='128' height='128' filter='url(%23n)'/%3E%3C/svg%3E"); background-size: 256px 256px; animation: grain 9s linear infinite; }

/* Card: warm paper, crisp borders, layered shadow, soft grain overlay */
.card{
  position: relative;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: linear-gradient(180deg,#fff 0%, #fdfbf7 100%);
  box-shadow: var(--shadow-a), var(--shadow-b);
}
.card::before{
  content:"";
  position:absolute; inset:0; pointer-events:none; border-radius:16px;
  background-image: radial-gradient(transparent 60%, rgba(0,0,0,.03));
  opacity:.35;
}
.card:hover{ box-shadow: 0 16px 32px rgba(34,25,17,.08), 0 4px 10px rgba(34,25,17,.06); }

/* Tints for special cards */
.card--blue{
  background: linear-gradient(180deg,#f5f8ff 0%, #eef3ff 100%);
  border-color:#D9E4FF;
}
.card--green{
  background: linear-gradient(180deg,#f4fcf6 0%, #ecfaf2 100%);
  border-color:#CFEFDC;
}

/* Eyebrow number / subtle label */
.eyebrow{
  display:inline-block;
  font-size:.72rem; letter-spacing:.08em; text-transform:uppercase;
  color:#7a6f62; margin-bottom:.25rem;
}

/* Chips (badges + buttons) */
.chip{
  display:inline-flex; align-items:center; gap:.4rem;
  background: linear-gradient(180deg,#ffffff 0%, #f7f3ea 100%);
  color: var(--ink);
  border:1px solid var(--border);
  border-radius:9999px;
  padding:.38rem .7rem;
  box-shadow: var(--inner), 0 1px 1.5px rgba(34,25,17,.08);
}
.chip--button{ text-decoration:none; font-weight:600; }

/* Links */
.link{ color:#1d4ed8; text-decoration:underline; text-underline-offset:2px; }
.link:hover{ color:#153ea9; }
.link-cta{ color:#1d4ed8; font-weight:600; text-decoration:underline; text-underline-offset:3px; }
.link-cta:hover{ color:#153ea9; }

/* Reveal animation */
.reveal { opacity: 0; transform: translateY(14px) scale(0.995); transition: opacity .7s cubic-bezier(.2,.65,.2,1), transform .7s cubic-bezier(.2,.65,.2,1), filter .7s; will-change: opacity, transform, filter; }
.reveal.is-visible { opacity: 1; transform: translateY(0) scale(1); filter: none; }
.reveal[data-animate="fade"] { transform: none; }
.reveal[data-animate="up"] { transform: translateY(16px); }
.reveal[data-animate="stagger"] > * { opacity: 0; transform: translateY(16px); transition: opacity .7s, transform .7s; }
.reveal.is-visible[data-animate="stagger"] > * { opacity: 1; transform: none; }
.reveal.is-visible[data-animate="stagger"] > *:nth-child(1) { transition-delay: .05s; }
.reveal.is-visible[data-animate="stagger"] > *:nth-child(2) { transition-delay: .10s; }
.reveal.is-visible[data-animate="stagger"] > *:nth-child(3) { transition-delay: .15s; }
.reveal.is-visible[data-animate="stagger"] > *:nth-child(4) { transition-delay: .20s; }

/* Sticky nav links */
.anchor-link { color: rgba(255,255,255,.8); transition: color .2s ease; }
.anchor-link:hover { color: #fff; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal > * { transition: none !important; opacity: 1 !important; transform: none !important; }
  .animate-grain { animation: none !important; }
}
` }} />
    </main>
  );
}
