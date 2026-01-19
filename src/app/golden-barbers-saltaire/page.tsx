// src/app/golden-barbers-saltaire/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import ReviewsSection from "@/components/ReviewsSection";

/**
 * Golden Barbers — Saltaire business page (paper-on-desk template)
 * - Full-bleed hero + warm overlay
 * - Editorial blocks (what to expect + practical notes)
 * - Right rail: essentials + hours + CTAs + CLAIM LISTING (WhatsApp)
 * - Reviews section: FULL-WIDTH (shared ReviewsSection)
 * - Structured data: WebPage + BreadcrumbList + BarberShop + FAQPage
 *
 * TODO: Replace HERO_IMAGE + gallery paths with real images in /public/images/saltaire/golden-barbers/
 */

export const dynamic = "error";

const PATH = "/golden-barbers-saltaire";
const UPDATED = "2026-01-19";

// WhatsApp (your number) — digits only (no +)
const CLAIM_WA_NUMBER = "447424208127";

// Images (TODO replace with real files)
const HERO_IMAGE = "/images/saltaire/golden-barbers/hero.png";

type GalleryImage = { src: string; alt: string };

const GALLERY: readonly GalleryImage[] = [
  // Add real photos here when you have them
  // { src: "/images/saltaire/golden-barbers/shop-1.jpg", alt: "Inside Golden Barbers in Saltaire" },
  // { src: "/images/saltaire/golden-barbers/cut-1.jpg", alt: "Skin fade haircut at Golden Barbers Saltaire" },
];

const biz = {
  slug: "golden-barbers",
  name: "Golden Barbers — Saltaire",
  claimed: false,
  tagline: "Haircuts • Skin fades • Beard trims • Walk-ins welcome • Book online",
  shortDesc:
    "Local barbershop on Bingley Road in Saltaire serving Saltaire and Shipley. Straightforward cuts, clean fades, and beard work — walk in or book ahead.",
  longDesc:
    "If you want a simple booking flow, clear starting prices, and a reliable neighbourhood shop, Golden Barbers is positioned for exactly that. Keep it basic: pick your service, choose a time, and get in and out without drama.",
  categories: ["Barber", "Skin fades", "Beard trims", "Walk-ins", "Online booking"],
  address: "213 Bingley Road, Saltaire, Shipley BD18 4DH",
  postcode: "BD18 4DH",
  phone: "07578 993622",
  website: "https://golden-barbers.vercel.app/",
  googleProfileUrl:
    "https://www.google.co.uk/search?sca_esv=53adf50e10334de7&cs=0&output=search&kgmid=/g/11swzb8sh7&q=Golden+barber&shem=bdslc,shrtn&shndl=30&source=sh/x/kp/local/m1/1&kgs=f419ba76e02c177d&utm_source=bdslc,shrtn,sh/x/kp/local/m1/1",
  instagramHandle: "goldenbarber_saltaire",
  instagramUrl: "https://www.instagram.com/goldenbarber_saltaire/",
  priceRange: "£",
  lastVerified: UPDATED,
  heroImage: HERO_IMAGE,
  photos: GALLERY,

  hoursNote:
    "Hours can change (holidays, staffing). If it’s a special trip, confirm on Instagram or Google before you go.",
  hours: [
    { day: "Monday", times: "9:00 am – 6:30 pm" },
    { day: "Tuesday", times: "9:00 am – 6:30 pm" },
    { day: "Wednesday", times: "9:00 am – 6:30 pm" },
    { day: "Thursday", times: "9:00 am – 6:30 pm" },
    { day: "Friday", times: "9:00 am – 6:30 pm" },
    { day: "Saturday", times: "9:00 am – 6:30 pm" },
    { day: "Sunday", times: "9:00 am – 6:30 pm" },
  ],

  editorial: {
    bestFor: ["Clean, low-fuss haircut", "Skin fade + tidy lineup", "Beard shape-up", "Walk-in when you’re nearby"],
    vibe: ["Neighbourhood", "Simple", "Modern cuts"],
    goodToKnow: [
      "If you’re booking a skin fade, bring a reference photo (or be clear on how high you want it).",
      "If you’re unsure, ask for a conservative start — it’s easier to go shorter than fix regret.",
      "If you’re walking in at peak times, expect a wait.",
    ],
    bestTime: "Weekday mid-morning or early afternoon if you want a quieter slot.",
    accessibilityNote:
      "Streetfront access varies. If you need step-free access or extra space, check the entrance when you arrive.",
  },

  whatToTry: [
    "If you want a fade, say exactly what you mean (low / mid / high) and show a photo — that removes 90% of miscommunication.",
    "If you’re growing a beard: a quick shape-up keeps it looking intentional without taking length off.",
    "If you’re trying a new style: start conservative this visit, adjust next time once you’ve lived with it.",
  ],

  ambience: ["Book ahead or walk in", "Local shop on Bingley Road", "Good for quick trims"],
  services: [
    // Keep this short; treat as “starting prices” unless owner confirms exact list.
    { name: "Haircut", price: "from £15" },
    { name: "Skin Fade", price: "from £18" },
    { name: "Beard Trim", price: "from £10" },
    { name: "Hair + Beard", price: "from £23" },
    { name: "Kids Cut", price: "from £12" },
    { name: "Senior Cut", price: "from £12" },
  ],
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${biz.name} ${biz.address}`
)}`;

const reviewScope = {
  siteSlug: "saltaireguide",
  entityType: "business",
};

export const metadata: Metadata = {
  title: "Golden Barbers — Saltaire (BD18) | Prices, Hours & Booking | Saltaire Guide",
  description:
    "Golden Barbers in Saltaire (Bingley Road): haircuts, skin fades, beard trims. Opening hours, contact details, map link, Instagram, and reviews.",
  alternates: { canonical: `${site.url}${PATH}` },
  openGraph: {
    title: "Golden Barbers — Saltaire | Haircuts, Skin Fades & Beard Trims",
    description:
      "Local barbershop on Bingley Road in Saltaire serving Saltaire and Shipley. Hours, contact details, directions, and reviews.",
    url: `${site.url}${PATH}`,
    type: "article",
    images: [
      {
        url: `${site.url}${HERO_IMAGE}`,
        width: 1600,
        height: 1200,
        alt: "Golden Barbers Saltaire — hero image",
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
    q: "Where is Golden Barbers in Saltaire?",
    a: "Golden Barbers is located at 213 Bingley Road, Saltaire, Shipley, BD18 4DH — convenient for both Saltaire and Shipley.",
  },
  {
    q: "Do I need to book an appointment?",
    a: "Walk-ins are welcome. If you want a guaranteed time slot, booking ahead is the safer option.",
  },
  {
    q: "What services do they offer?",
    a: "Core services include haircuts, skin fades, beard trims, and combined haircut + beard appointments.",
  },
  {
    q: "What are the opening hours?",
    a: "Typically open 7 days a week from 9:00 am to 6:30 pm. Hours can change around holidays, so confirm before a special trip.",
  },
  {
    q: "How do I contact Golden Barbers?",
    a: "You can call 07578 993622, book online via the official site, or check Instagram for updates and examples of recent work.",
  },
] as const;

const CLAIM_BENEFITS = [
  "Verified owner badge (trust).",
  "Edit hours, links, and contact details.",
  "Add more photos and key info (e.g. booking link).",
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
    name: "Golden Barbers — Saltaire (BD18) | Prices, Hours & Booking | Saltaire Guide",
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
      { "@type": "ListItem", position: 2, name: "Golden Barbers — Saltaire", item: `${base}${PATH}` },
    ],
  };

  const barberShop = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: biz.name,
    description: `${biz.shortDesc} ${biz.longDesc}`,
    priceRange: biz.priceRange,
    telephone: biz.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "213 Bingley Road",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      postalCode: biz.postcode,
      addressCountry: "GB",
    },
    url: `${base}${PATH}`,
    sameAs: [biz.instagramUrl, biz.website, biz.googleProfileUrl].filter(Boolean),
    openingHours: "Mo-Su 09:00-18:30",
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

  return { webpage, breadcrumbs, barberShop, faqLd };
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
  const { webpage, breadcrumbs, barberShop, faqLd } = buildLd();

  const canonical = `${site.url}${PATH}`;
  const claimPrefill = `Hi — I manage ${biz.name}. Can I claim this listing? ${canonical}`;
  const claimUrl = waLink(claimPrefill);

  return (
    <main className="w-full">
      <JsonLd obj={webpage} />
      <JsonLd obj={breadcrumbs} />
      <JsonLd obj={barberShop} />
      <JsonLd obj={faqLd} />

      {/* HERO — full-bleed */}
      <section className="relative w-full">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden rounded-b-[2rem]">
          <Image
            src={biz.heroImage}
            alt="Golden Barbers Saltaire — hero image"
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
                  <h2 className="mt-1 text-[20px] font-semibold text-stone-900">What to expect</h2>
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
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">Vibe</div>
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
                          Best time: <span className="font-medium text-stone-800">{biz.editorial.bestTime}</span>
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
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 4h10M7 8h10M7 12h10M7 16h10" />
                        </svg>
                      </Icon>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-semibold text-stone-900">Quick guidance</h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">
                          Small choices that stop you leaving annoyed.
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
                      If you’re unsure, ask for a conservative start. It’s easier to go shorter than undo a mistake.
                    </div>
                  </div>
                </Card>

                <Card className="p-0">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <Icon className="text-[#c2410c]">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                        </svg>
                      </Icon>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-semibold text-stone-900">Local notes</h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">Practical details that save time.</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">For Saltaire days</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Easy to combine with Saltaire village or a canal walk — book ahead if you’re on a schedule.
                        </div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Timing</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Weekday mid-morning is usually the least hectic. Peak time walk-ins can mean a wait.
                        </div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Access</div>
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

              {/* Services (starting prices) */}
              <Card className="p-0">
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f3d2e]">
                    Starting prices
                  </div>
                  <h3 className="mt-1 text-[18px] font-semibold text-stone-900">Services</h3>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {biz.services.map((s) => (
                      <div key={s.name} className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-[13px] font-semibold text-stone-900">{s.name}</div>
                          <div className="text-[13px] font-semibold text-[#0f3d2e]">{s.price}</div>
                        </div>
                        <div className="mt-1 text-[12px] text-stone-600">
                          Confirm exact options/prices when booking or by phone.
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Gallery (optional) */}
              <div>
                <h3 className="mb-2 text-lg font-semibold">Gallery</h3>

                {biz.photos.length ? (
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
                ) : (
                  <Card className="p-0">
                    <div className="p-4">
                      <p className="m-0 text-[13px] text-stone-700">
                        Gallery photos aren’t published here yet. For recent cuts and updates, check Instagram.
                      </p>
                      <div className="mt-3">
                        <a
                          href={biz.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                        >
                          View on Instagram
                        </a>
                      </div>
                    </div>
                  </Card>
                )}
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
                      {biz.priceRange} <span className="ml-1 text-stone-500">budget-friendly</span>
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
                        {biz.phone ? (
                          <a
                            href={`tel:${biz.phone.replace(/\s+/g, "")}`}
                            className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300/40"
                          >
                            Call {biz.phone}
                          </a>
                        ) : null}

                        <a
                          href={biz.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                        >
                          Book online
                        </a>

                        <a
                          href={biz.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-xl border border-[#0f3d2e]/25 bg-white px-4 py-2 text-[13px] font-semibold text-[#0f3d2e] no-underline hover:bg-[#fbf7f1] focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/25"
                        >
                          Instagram @{biz.instagramHandle}
                        </a>

                        <a
                          href={biz.googleProfileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50"
                        >
                          View on Google
                        </a>
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
                  <p className="mt-1 text-[12px] text-stone-700">Useful pages if you’re planning a Saltaire visit.</p>
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
                    Spot an update (hours, address, phone, booking link, photos)? Help keep local info tidy.
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
