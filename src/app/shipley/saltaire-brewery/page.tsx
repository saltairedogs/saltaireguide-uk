// src/app/shipley/saltaire-brewery/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import ReviewsSection from "@/components/ReviewsSection";

/**
 * Saltaire Brewery — business page (vintage “paper on desk” template)
 * - Uses the Digin’s Hut layout + components
 * - Hero + gallery now use your provided images in /public/images/shipley/saltaire-brewery/
 * - Right rail focuses on taproom essentials + hours + contact details
 * - Reviews section: FULL-WIDTH (shared ReviewsSection)
 * - Structured data: WebPage + BreadcrumbList + Brewery + FAQPage
 */

export const dynamic = "error";

const PATH = "/shipley/saltaire-brewery";
const UPDATED = "2025-12-22";

// Images you provided:
// /public/images/shipley/saltaire-brewery/*
const HERO_IMAGE = "/images/shipley/saltaire-brewery/outside-busy.png";

// Gallery images (exclude hero)
const GALLERY = [
  {
    src: "/images/shipley/saltaire-brewery/beer-pouring.png",
    alt: "Beer being poured at Saltaire Brewery",
  },
  {
    src: "/images/shipley/saltaire-brewery/beers-3.png",
    alt: "Saltaire Brewery beers and a glass",
  },
  {
    src: "/images/shipley/saltaire-brewery/indoor-image.png",
    alt: "Inside the Saltaire Brewery taproom",
  },
  {
    src: "/images/shipley/saltaire-brewery/more-beers.png",
    alt: "Selection of bottled beers from Saltaire Brewery",
  },
] as const;

const biz = {
  slug: "saltaire-brewery",
  name: "Saltaire Brewery",
  legalName: "Saltaire Brewery LTD",
  claimed: false,

  tagline: "Independent brewery • Taproom (Shop & Bar) • Shipley (BD17)",
  shortDesc:
    "An independent Yorkshire brewery with a taproom (shop & bar) in Shipley, close to Saltaire. A solid local stop when you want a proper pint in an unpretentious setting.",
  longDesc:
    "They describe themselves as “truly independent since 2006”, brewing high quality beers using traditional methods with a modern twist. The taproom is the public-facing bit (where you can drink and buy), while the wider operation brews for distribution and also offers contract brewing.",

  categories: ["Brewery", "Taproom", "Shop", "Bar", "Craft Beer"],

  address: "Unit 7, County Works, Dockfield Road, Shipley BD17 7AR",
  postcode: "BD17 7AR",

  email: "info@saltairebrewery.com",
  taproomPhone: "01274 452 098",
  officePhone: "01274 594 959",
  officeHoursNote: "Office hours: Mon–Fri 8:30am–5pm (admin/enquiries).",

  instagramHandle: "saltairebrewery",
  instagramUrl: "https://www.instagram.com/saltairebrewery/",
  website: "https://lnk.bio/saltairebrewery",

  lastVerified: UPDATED,
  heroImage: HERO_IMAGE,
  photos: GALLERY,

  hoursNote: "Hours can change (especially around bank holidays) — double-check on Google/Instagram before a special trip.",
  hours: [
    { day: "Monday", times: "Closed" },
    { day: "Tuesday", times: "Closed" },
    { day: "Wednesday", times: "3–9 pm" },
    { day: "Thursday", times: "3–9 pm" },
    { day: "Friday", times: "12–10 pm" },
    { day: "Saturday", times: "12–10 pm" },
    { day: "Sunday", times: "12–8 pm" },
  ],

  story: [
    "Their published story says the idea began in 2003, when founder Tony Garland met industrial chemist Derek Todd on a Brewlab course in Newcastle.",
    "They launched as one of Yorkshire’s early microbreweries with a bespoke 20-barrel brew kit in 2005, with early beers including Saltaire Blonde and Cascade Pale.",
    "They state they now produce at scale (including the multi-award-winning Triple Choc stout), and expanded again in 2017 with a 40-barrel brew kit plus packaging — enabling wider distribution and contract brewing services.",
  ],

  editorial: {
    bestFor: ["Taproom session with friends", "A local beer stop near Saltaire", "Buying beers to take home"],
    vibe: ["Independent", "No-nonsense", "Local staple"],
    goodToKnow: [
      "Taproom is closed Monday and Tuesday.",
      "Holiday hours can differ — confirm before travelling.",
      "Use the link-in-bio for the most current updates and options.",
    ],
    bestTime: "Friday evening or a Saturday session (when it feels most like a proper taproom outing).",
    accessibilityNote:
      "If you need step-free access or extra space (wheelchair/pram), check on arrival — industrial-unit entrances can vary.",
  },

  whatToTry: [
    "Treat it like a taproom: arrive with a rough idea (light / hoppy / dark) and choose what’s pouring that day.",
    "If you’re taking beers home, grab a mixed selection so you’re not stuck with one style.",
    "Pair it with a Saltaire walk: taproom first or last, depending on weather and daylight.",
  ],

  ambience: ["Taproom", "Beer shop", "Independent brewery", "Good for groups"],

  companyNo: "4795699",
} as const;

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${biz.name} ${biz.postcode}`
)}`;

const reviewScope = {
  siteSlug: "saltaireguide",
  entityType: "business",
};

export const metadata: Metadata = {
  title: "Saltaire Brewery — Taproom (Shop & Bar) in Shipley | Saltaire Guide",
  description:
    "Saltaire Brewery taproom in Shipley (BD17 7AR): address, opening hours, contact details, and reviews. Independent Yorkshire brewery near Saltaire.",
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: "Saltaire Brewery — Taproom in Shipley (near Saltaire) | Saltaire Guide",
    description:
      "Independent Yorkshire brewery with a taproom (shop & bar) in Shipley. Address + hours + practical visit info.",
    url: `${site.url}${PATH}`,
    type: "article",
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 1600,
        height: 1200,
        alt: "Saltaire Brewery taproom exterior (busy scene)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${site.url}${HERO_IMAGE}`],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

const FAQS = [
  {
    q: "Where is Saltaire Brewery’s taproom?",
    a: "The taproom (shop & bar) is at Unit 7, County Works, Dockfield Road, Shipley BD17 7AR — close to Saltaire and easy to pair with a walk or village visit.",
  },
  {
    q: "What are the taproom opening hours?",
    a: "Typical taproom hours are Wed–Thu 3–9 pm, Fri–Sat 12–10 pm, and Sun 12–8 pm (closed Mon–Tue). Hours can change around holidays, so confirm before travelling.",
  },
  {
    q: "Is Saltaire Brewery independent?",
    a: "They describe themselves as “truly independent since 2006”.",
  },
  {
    q: "How do I contact Saltaire Brewery?",
    a: "Email info@saltairebrewery.com. There are separate phone numbers for the taproom and office; both are listed on this page.",
  },
] as const;

// ---------------- JSON-LD ---------------------------------------------------

function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  );
}

function buildLd() {
  const base = site.url;

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Saltaire Brewery — Taproom (Shop & Bar) in Shipley",
    url: `${base}${PATH}`,
    description: metadata.description,
    inLanguage: "en-GB",
    dateModified: UPDATED,
    isPartOf: { "@type": "WebSite", name: site.name, url: base },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Shipley", item: `${base}/shipley` },
      { "@type": "ListItem", position: 3, name: "Saltaire Brewery", item: `${base}${PATH}` },
    ],
  };

  const brewery = {
    "@context": "https://schema.org",
    "@type": "Brewery",
    name: biz.name,
    legalName: biz.legalName,
    description: `${biz.shortDesc} ${biz.longDesc}`,
    email: biz.email,
    telephone: biz.taproomPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 7, County Works, Dockfield Road",
      addressLocality: "Shipley",
      addressRegion: "West Yorkshire",
      postalCode: "BD17 7AR",
      addressCountry: "GB",
    },
    sameAs: [biz.instagramUrl, biz.website].filter(Boolean),
    url: `${base}${PATH}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["https://schema.org/Wednesday", "https://schema.org/Thursday"],
        opens: "15:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["https://schema.org/Friday", "https://schema.org/Saturday"],
        opens: "12:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Sunday",
        opens: "12:00",
        closes: "20:00",
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return { webpage, breadcrumbs, brewery, faqLd };
}

// ---------------- UI bits ---------------------------------------------------

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-300/80 bg-stone-50/80 px-3 py-1 text-[11px] font-medium text-stone-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"rounded-2xl border border-stone-300/80 bg-white/90 shadow-sm " + className}>
      {children}
    </div>
  );
}

function Icon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-[#fbf7f1] text-[#0f3d2e] " +
        className
      }
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function HoursTable({ hours }: { hours: readonly { day: string; times: string }[] }) {
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-stone-200 bg-white">
      <div className="divide-y divide-stone-200">
        {hours.map((h) => (
          <div key={h.day} className="flex items-center justify-between gap-3 px-3 py-2">
            <div className="text-[12px] font-semibold text-stone-800">{h.day}</div>
            <div className="text-[12px] text-stone-700">{h.times}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function cleanTel(tel: string) {
  return tel.replace(/\s+/g, "");
}

// ---------------- Page ------------------------------------------------------

export default function Page() {
  const { webpage, breadcrumbs, brewery, faqLd } = buildLd();

  return (
    <main className="w-full">
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={brewery} />
      <JsonLd obj={faqLd} />

      {/* HERO — full-bleed */}
      <section className="relative w-full">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden rounded-b-[2rem]">
          <Image
            src={biz.heroImage}
            alt="Saltaire Brewery taproom exterior (busy scene)"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/18 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[#f6efe6]/10 mix-blend-soft-light" />
        </div>

        <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="inline-block max-w-[min(980px,100%)] rounded-2xl border border-stone-200/70 bg-[#f6efe6]/90 p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-stone-700">
                <Link
                  href="/"
                  className="underline decoration-stone-400/60 underline-offset-4 hover:decoration-stone-700"
                >
                  Home
                </Link>
                <span aria-hidden="true">›</span>
                <Link
                  href="/shipley"
                  className="underline decoration-stone-400/60 underline-offset-4 hover:decoration-stone-700"
                >
                  Shipley
                </Link>
                <span aria-hidden="true">›</span>
                <span className="text-stone-800">{biz.name}</span>
                <span className="ml-auto rounded-full border border-stone-200 bg-white/70 px-2 py-1 text-[11px] font-semibold text-stone-700">
                  Updated: {UPDATED}
                </span>
              </div>

              <h1 className="mt-3 mb-1 flex flex-wrap items-center gap-2 text-[28px] font-semibold text-stone-900 md:text-[34px]">
                {biz.name}
                {biz.claimed ? (
                  <span className="rounded-full border border-emerald-200 bg-emerald-100 px-2 py-1 text-[11px] font-medium text-emerald-800">
                    Claimed
                  </span>
                ) : (
                  <span className="rounded-full border border-stone-200 bg-white/70 px-2 py-1 text-[11px] font-medium text-stone-700">
                    Unclaimed
                  </span>
                )}
              </h1>

              <p className="text-[14px] text-stone-700">{biz.tagline}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {biz.categories.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (paper on desk + subtle grain) */}
      <section className="relative px-4 py-6 sm:px-6">
        <div className="pointer-events-none absolute inset-0 bg-[#f6efe6]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f6efe6] via-[#f6efe6]/70 to-white" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            {/* Left */}
            <div className="space-y-5 md:col-span-2">
              <Card className="p-0">
                <div className="h-[3px] w-full rounded-t-2xl bg-[#0f3d2e]" />
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f3d2e]">
                    Saltaire Guide notebook
                  </div>
                  <h2 className="mt-1 text-[20px] font-semibold text-stone-900">The feel</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-800">{biz.shortDesc}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-800">{biz.longDesc}</p>

                  <div className="mt-5 rounded-2xl border border-stone-200 bg-[#fbf7f1] p-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">
                          Best for
                        </div>
                        <ul className="mt-2 space-y-1 text-[13px] text-stone-800">
                          {biz.editorial.bestFor.map((x) => (
                            <li key={x} className="flex items-start gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#c2410c]" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">
                          Vibe
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {biz.editorial.vibe.map((v) => (
                            <span
                              key={v}
                              className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[12px] font-medium text-stone-800"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 text-[12px] text-stone-600">
                          Best time:{" "}
                          <span className="font-medium text-stone-800">{biz.editorial.bestTime}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">
                          Good to know
                        </div>
                        <ul className="mt-2 space-y-1.5 text-[13px] text-stone-800">
                          {biz.editorial.goodToKnow.slice(0, 3).map((x) => (
                            <li key={x} className="flex items-start gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#0f3d2e]" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600">
                      Their story (summary)
                    </div>
                    <h3 className="mt-1 text-[16px] font-semibold text-stone-900">How it started</h3>
                    <div className="mt-2 space-y-2 text-[13px] leading-relaxed text-stone-800">
                      {biz.story.map((p) => (
                        <p key={p} className="m-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {biz.ambience.map((a) => (
                      <Chip key={a}>{a}</Chip>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="grid gap-5 sm:grid-cols-2">
                <Card className="p-0">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <Icon>
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M8 7h8M8 11h8M8 15h5" />
                          <path d="M6 3h12a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2z" />
                        </svg>
                      </Icon>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-semibold text-stone-900">How to do it</h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">
                          Practical ways to enjoy it without over-promising specifics.
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {biz.whatToTry.map((item, i) => (
                        <li key={i} className="rounded-xl border border-stone-200 bg-white p-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-[#0f3d2e] text-[12px] font-semibold text-white">
                              {i + 1}
                            </span>
                            <div className="text-[13px] leading-relaxed text-stone-800">{item}</div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3 text-[12px] text-stone-700">
                      Quick rule: check hours before you commit — Mon/Tue are usually shut.
                    </div>
                  </div>
                </Card>

                <Card className="p-0">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <Icon className="text-[#c2410c]">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                        </svg>
                      </Icon>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-semibold text-stone-900">Local notes</h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">
                          The details that help you plan without guesswork.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Near Saltaire</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          It’s close enough to pair with Saltaire — useful if you want “walk + pint” without travelling far.
                        </div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Contact</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Email:{" "}
                          <a className="underline" href={`mailto:${biz.email}`}>
                            {biz.email}
                          </a>
                        </div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Taproom:{" "}
                          <a className="underline" href={`tel:${cleanTel(biz.taproomPhone)}`}>
                            {biz.taproomPhone}
                          </a>
                        </div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Office:{" "}
                          <a className="underline" href={`tel:${cleanTel(biz.officePhone)}`}>
                            {biz.officePhone}
                          </a>
                        </div>
                        <div className="mt-1 text-[12px] text-stone-600">{biz.officeHoursNote}</div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Practical</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          {biz.editorial.accessibilityNote}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-[12px] text-stone-600">
                      Last checked: <span className="font-medium text-stone-800">{biz.lastVerified}</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Gallery (hero excluded) */}
              <div>
                <h3 className="mb-2 text-lg font-semibold">Gallery</h3>
                <div className="columns-2 gap-3 md:columns-3 [column-fill:_balance]">
                  {biz.photos.map((img) => (
                    <div
                      key={img.src}
                      className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-stone-200 bg-white"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={1200}
                        height={900}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <Card className="p-0">
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f3d2e]">
                    Quick answers
                  </div>
                  <h3 className="mt-1 text-[18px] font-semibold text-stone-900">FAQs</h3>

                  <div className="mt-4 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
                    {FAQS.map((f) => (
                      <details key={f.q} className="group p-4 open:bg-stone-50/60">
                        <summary className="cursor-pointer list-none text-[14px] font-semibold text-stone-900">
                          {f.q}
                        </summary>
                        <p className="mt-2 text-[13px] leading-relaxed text-stone-800">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right rail */}
            <div className="space-y-4 md:col-span-1">
              <Card className="p-0">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600">
                        Plan your visit
                      </div>
                      <h3 className="mt-1 text-[16px] font-semibold text-stone-900">Quick essentials</h3>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-stone-200 bg-[#fbf7f1] px-2.5 py-1 text-[11px] font-medium text-stone-700">
                      Taproom <span className="ml-1 text-stone-500">shop & bar</span>
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="text-[12px] font-semibold text-stone-700">Address</div>
                      <div className="mt-1 text-[13px] font-medium text-stone-900">{biz.address}</div>

                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                      >
                        Get directions
                      </a>

                      <div className="mt-3 flex flex-col gap-2">
                        {biz.instagramUrl ? (
                          <a
                            href={biz.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-[#0f3d2e]/25 bg-white px-4 py-2 text-[13px] font-semibold text-[#0f3d2e] no-underline hover:bg-[#fbf7f1] focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/25"
                          >
                            Instagram @{biz.instagramHandle}
                          </a>
                        ) : null}

                        {biz.website ? (
                          <a
                            href={biz.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300/40"
                          >
                            Link-in-bio / options
                          </a>
                        ) : null}
                      </div>

                      <div className="mt-3 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3 text-[12px] text-stone-700">
                        <div className="font-semibold text-stone-900">Contact</div>
                        <div className="mt-1">
                          <a className="underline" href={`mailto:${biz.email}`}>
                            {biz.email}
                          </a>
                        </div>
                        <div className="mt-1">
                          Taproom:{" "}
                          <a className="underline" href={`tel:${cleanTel(biz.taproomPhone)}`}>
                            {biz.taproomPhone}
                          </a>
                        </div>
                        <div className="mt-1">
                          Office:{" "}
                          <a className="underline" href={`tel:${cleanTel(biz.officePhone)}`}>
                            {biz.officePhone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="text-[12px] font-semibold text-stone-700">Taproom hours</div>
                      <div className="mt-1 text-[12px] text-stone-600">{biz.hoursNote}</div>
                      <HoursTable hours={biz.hours} />
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3 text-[12px] text-stone-700">
                    {biz.claimed ? (
                      <>Owner-verified • {biz.lastVerified}</>
                    ) : (
                      <>Independent listing by Saltaire Guide. We keep details current.</>
                    )}
                    <div className="mt-2 text-[11px] text-stone-600">Company No. {biz.companyNo}</div>
                  </div>
                </div>
              </Card>

              <Card className="p-0">
                <div className="p-4">
                  <div className="text-[12px] font-semibold text-stone-900">More nearby</div>
                  <p className="mt-1 text-[12px] text-stone-700">
                    Useful pages if you’re planning a day around Saltaire/Shipley.
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/shipley"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                    >
                      Shipley hub
                    </Link>

                    <Link
                      href="/visit-saltaire"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50"
                    >
                      Visit Saltaire
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FULL-WIDTH Reviews */}
          <div className="mt-10">
            <ReviewsSection
              siteSlug={reviewScope.siteSlug}
              entityType={reviewScope.entityType}
              slug={biz.slug}
              name={biz.name}
            />
          </div>

          {/* Suggest an update */}
          <div className="mt-8">
            <Card className="p-0">
              <div className="p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="m-0 text-[13px] text-stone-700">
                    Spot an update (hours, address, contact details, photos)? Help keep local info tidy.
                  </p>
                  <Link
                    href="/contribute"
                    className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                  >
                    Suggest a quick fix
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
