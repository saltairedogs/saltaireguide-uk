// src/app/diginshut/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import ReviewsSection from "@/components/ReviewsSection";

/**
 * Digin’s Hut — Saltaire business page (vintage “paper on desk” template)
 * - Full-bleed hero (edge-to-edge) + warm overlay
 * - Editorial “magazine” blocks (experiences, not menu promises)
 * - Right rail: essentials + hours + CTAs + CLAIM LISTING (WhatsApp)
 * - Reviews section: FULL-WIDTH (shared ReviewsSection)
 * - Structured data: WebPage + BreadcrumbList + FastFoodRestaurant + FAQPage
 */

export const dynamic = "error";

const PATH = "/diginshut";
const UPDATED = "2025-10-21";

// WhatsApp (your number) — must be digits only (no +)
const CLAIM_WA_NUMBER = "447424208127";

// Images you provided:
// /public/images/saltaire/digins-hut/*
const HERO_IMAGE = "/images/saltaire/digins-hut/hero-image.png";

// Gallery images (exclude hero)
const GALLERY = [
  {
    src: "/images/saltaire/digins-hut/burger-image.png",
    alt: "Burger and loaded fries at Digin’s Hut",
  },
  {
    src: "/images/saltaire/digins-hut/burger-2-image.png",
    alt: "Burger meal at Digin’s Hut",
  },
  {
    src: "/images/saltaire/digins-hut/pizza-image.png",
    alt: "Pizza at Digin’s Hut",
  },
  {
    src: "/images/saltaire/digins-hut/counter-image.png",
    alt: "Counter display at Digin’s Hut",
  },
] as const;

const biz = {
  slug: "diginshut",
  name: "Digin’s Hut",
  claimed: false,
  tagline: "Smash Burgers • Donuts • Loaded Fries",
  shortDesc:
    "Casual and indulgent street-food style from a small spot on Victoria Road. Big flavour, quick service, and proper portions.",
  longDesc:
    "Think crispy-edged smash burgers, loaded fries and rotating donuts. It’s the kind of place you grab for a treat night or a walk-home box — simple ordering, friendly team, and a menu that’s built for comfort-food cravings.",
  categories: ["Street Food", "Burgers", "Donuts", "Fries"],
  address: "13 Victoria Rd, Saltaire, Shipley BD18 3LQ",
  postcode: "BD18 3LQ",
  phone: "",
  website: "",
  instagramHandle: "dig_ins_hut",
  instagramUrl: "https://instagram.com/dig_ins_hut",
  priceRange: "££",
  lastVerified: UPDATED,
  heroImage: HERO_IMAGE,
  photos: GALLERY,

  hoursNote: "Hours can change — check Instagram (or Google) before you travel.",
  hours: [
    { day: "Monday", times: "Closed" },
    { day: "Tuesday", times: "Closed" },
    { day: "Wednesday", times: "12–8 pm" },
    { day: "Thursday", times: "12–8 pm" },
    { day: "Friday", times: "12–8 pm" },
    { day: "Saturday", times: "12–8 pm" },
    { day: "Sunday", times: "11 am–6 pm" },
  ],

  editorial: {
    bestFor: ["Treat-night takeaway", "Post-walk comfort food", "Quick indulgent stop"],
    vibe: ["Casual", "Fast turnaround", "Local favourite"],
    goodToKnow: [
      "Friday/Saturday evenings can be busy — order earlier if you hate waiting.",
      "Best as takeaway (or quick in-and-out) rather than a long sit-down meal.",
      "Check Instagram for any specials or updated hours.",
    ],
    bestTime: "Early evening (when it feels like the right kind of ‘treat night’).",
    accessibilityNote:
      "If you need step-free access or space for a pram/wheelchair, check the entrance on arrival (streetfronts vary).",
  },

  whatToTry: [
    "Do it as a proper ‘treat night’ — share a few things and don’t overthink it.",
    "Pick up takeaway after a canal/Saltaire walk when you want warm comfort food fast.",
    "If you’re ordering for a group: get a mix (burger + fries + something sweet) so it lands for everyone.",
  ],

  ambience: ["Takeaway-friendly", "Comfort food", "Fast service", "Good for groups"],
} as const;

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${biz.name} ${biz.postcode}`
)}`;

const reviewScope = {
  siteSlug: "saltaireguide",
  entityType: "business",
};

export const metadata: Metadata = {
  title: "Digin’s Hut — Smash Burgers, Donuts & Loaded Fries | Saltaire Guide",
  description:
    "Digin’s Hut on Victoria Road, Saltaire: smash burgers, donuts and loaded fries. Address, opening hours and reviews.",
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: "Digin’s Hut — Smash Burgers, Donuts & Loaded Fries",
    description: "Smash burgers, donuts and loaded fries on Victoria Road, Saltaire.",
    url: `${site.url}${PATH}`,
    type: "article",
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 1600,
        height: 1200,
        alt: "Digin’s Hut — exterior on Victoria Road in Saltaire",
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
    q: "Where is Digin’s Hut in Saltaire?",
    a: "Digin’s Hut is on Victoria Road in Saltaire (BD18 3LQ), a short walk from the village centre and close to the main footfall routes.",
  },
  {
    q: "What is Digin’s Hut known for?",
    a: "It’s known for street-food style comfort food — especially smash burgers, loaded fries and sweet treats — served fast and takeaway-friendly.",
  },
  {
    q: "Is it mainly takeaway?",
    a: "It works best as takeaway (or a quick stop). If you want something easy for a ‘treat night’, it’s a good fit.",
  },
  {
    q: "What are the opening hours?",
    a: "Typical hours are listed on this page, but hours can change — check Instagram or Google before a special trip.",
  },
] as const;

const CLAIM_BENEFITS = [
  "Verified owner badge (trust).",
  "Edit hours, links, and contact details.",
  "Add more photos and key info (e.g. ordering link).",
  "Priority placement in Saltaire searches (optional).",
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
    name: "Digin’s Hut — Smash Burgers, Donuts & Loaded Fries | Saltaire Guide",
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
      { "@type": "ListItem", position: 2, name: "Digin’s Hut", item: `${base}${PATH}` },
    ],
  };

  const restaurant = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: biz.name,
    description: `${biz.shortDesc} ${biz.longDesc}`,
    priceRange: biz.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 Victoria Rd",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      postalCode: "BD18 3LQ",
      addressCountry: "GB",
    },
    sameAs: [biz.instagramUrl, biz.website].filter(Boolean),
    url: `${base}${PATH}`,
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

  return { webpage, breadcrumbs, restaurant, faqLd };
}

// ---------------- UI bits ---------------------------------------------------

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-300/80 bg-stone-50/80 px-3 py-1 text-[11px] font-medium text-stone-700 shadow-sm">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={"rounded-2xl border border-stone-300/80 bg-white/90 shadow-sm " + className}>{children}</div>;
}

function Icon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

function waLink(text: string) {
  return `https://wa.me/${CLAIM_WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ---------------- Page ------------------------------------------------------

export default function Page() {
  const { webpage, breadcrumbs, restaurant, faqLd } = buildLd();

  const canonical = `${site.url}${PATH}`;
  const claimPrefill = `Hi — I manage ${biz.name}. Can I claim this listing? ${canonical}`;
  const claimUrl = waLink(claimPrefill);

  return (
    <main className="w-full">
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={restaurant} />
      <JsonLd obj={faqLd} />

      {/* HERO — full-bleed */}
      <section className="relative w-full">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden rounded-b-[2rem]">
          <Image
            src={biz.heroImage}
            alt="Digin’s Hut — exterior on Victoria Road in Saltaire"
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
                <Chip>{biz.priceRange}</Chip>
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
                          {biz.editorial.goodToKnow.slice(0, 2).map((x) => (
                            <li key={x} className="flex items-start gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#0f3d2e]" />
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                          Experiences, not promises — stays useful even if the menu rotates.
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
                      Quick rule: if you’re ordering at peak time, order earlier than you think.
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
                          The practical details that save time.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">For Saltaire days</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Works well after a village wander or canal walk when you want something hot and fast.
                        </div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Timing</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Early evening is the safest bet if you want to avoid the rush.
                        </div>
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
                      {biz.priceRange} <span className="ml-1 text-stone-500">mid-range</span>
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
                        <a
                          href={biz.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-xl border border-[#0f3d2e]/25 bg-white px-4 py-2 text-[13px] font-semibold text-[#0f3d2e] no-underline hover:bg-[#fbf7f1] focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/25"
                        >
                          Instagram @{biz.instagramHandle}
                        </a>

                        {biz.website ? (
                          <a
                            href={biz.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300/40"
                          >
                            Order / menu
                          </a>
                        ) : null}
                      </div>

                      {/* CLAIM LISTING (WhatsApp) */}
                      {!biz.claimed ? (
                        <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3">
                          <div className="text-[12px] font-semibold text-stone-900">Claim this listing</div>
                          <div className="mt-1 text-[12px] leading-relaxed text-stone-700">
                            Owners/managers can claim this page to keep details accurate. Proof required to mark as claimed.
                          </div>

                          <a
                            href={claimUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                          >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.116.55 4.184 1.6 6.02L0 24l6.135-1.58A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.206-1.248-6.22-3.48-8.52ZM12 22.03c-1.86 0-3.683-.49-5.275-1.417l-.378-.22-3.64.937.97-3.55-.246-.365A10.02 10.02 0 0 1 1.97 12C1.97 6.47 6.47 1.97 12 1.97S22.03 6.47 22.03 12 17.53 22.03 12 22.03Zm5.58-7.54c-.306-.153-1.81-.892-2.09-.993-.28-.102-.484-.153-.688.153-.204.306-.79.993-.97 1.197-.178.204-.357.23-.663.077-.306-.153-1.292-.476-2.46-1.52-.91-.81-1.525-1.81-1.704-2.116-.178-.306-.02-.472.134-.625.138-.138.306-.357.46-.535.153-.178.204-.306.306-.51.102-.204.05-.382-.026-.535-.076-.153-.688-1.66-.942-2.276-.247-.594-.498-.513-.688-.523l-.586-.01c-.204 0-.535.077-.815.382-.28.306-1.07 1.046-1.07 2.55 0 1.504 1.096 2.96 1.25 3.164.153.204 2.157 3.295 5.223 4.62.73.315 1.3.504 1.744.645.733.233 1.4.2 1.93.122.59-.088 1.81-.74 2.066-1.453.255-.714.255-1.326.178-1.453-.076-.128-.28-.204-.586-.357Z" />
                            </svg>
                            Claim on WhatsApp
                          </a>

                          <div className="mt-3">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600">
                              Why claim
                            </div>
                            <ul className="mt-2 space-y-1.5 text-[12px] text-stone-800">
                              {CLAIM_BENEFITS.map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                  <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[#c2410c]" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-2 text-[11px] text-stone-600">
                              Proof accepted: reply from a domain email or a screenshot of Google Business Profile access.
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="text-[12px] font-semibold text-stone-700">Opening hours</div>
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
                  </div>
                </div>
              </Card>

              <Card className="p-0">
                <div className="p-4">
                  <div className="text-[12px] font-semibold text-stone-900">More nearby</div>
                  <p className="mt-1 text-[12px] text-stone-700">
                    A couple of useful pages if you’re planning a Saltaire visit.
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/visit-saltaire"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                    >
                      Visit Saltaire
                    </Link>

                    <Link
                      href="/walks"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50"
                    >
                      Walks & routes
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
                    Spot an update (hours, address, menu link, photos)? Help keep local info tidy.
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
