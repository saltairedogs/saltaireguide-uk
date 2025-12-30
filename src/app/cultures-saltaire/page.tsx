// src/app/culturessaltaire/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReviewsSection from "@/components/ReviewsSection";

/**
 * Cultures Saltaire — warm vintage listing
 * - Full-bleed hero (edge-to-edge)
 * - Lighter overlay (no “washed/blurred” look)
 * - Reviews section is FULL-WIDTH (not inside the left column)
 * - Textured “paper on desk” background for the content area
 * - Vintage dark orange as primary CTA accent; forest green as secondary
 */

export const metadata: Metadata = {
  title: "Cultures Saltaire — Deli & Draught House | Saltaire Guide",
  description:
    "Independent deli & draught house on Victoria Road. Wine, beer, coffee, cheese & ferments — easy Saltaire vibes.",
  alternates: { canonical: "/culturessaltaire" },
  openGraph: {
    title: "Cultures Saltaire — Deli & Draught House",
    description:
      "Independent deli & draught house in Saltaire. Wine, beer, coffee, cheese & ferments.",
    images: ["/culturessaltaire/cultures-exterior.jpg"],
    type: "article",
  },
};

// ---- Data -------------------------------------------------------------------

const biz = {
  slug: "culturessaltaire",
  name: "Cultures Saltaire",
  claimed: false,
  tagline: "Deli & Draught House",
  shortDesc:
    "Fermentation-forward: wine, beer, coffee, cheese & good things for the table. Friendly corner spot on Victoria Road.",
  longDesc:
    "A cosy independent pouring local draught and rotating wines by the glass, with bakes, cheeses and ferments to graze in or take home. It’s the kind of place you pop in for a glass and end up staying for one more.",
  categories: ["Deli", "Bar", "Wine & Beer", "Coffee"],
  address: "79 Victoria Rd, Saltaire, Shipley BD18 3JS",
  postcode: "BD18 3JS",
  phone: "07711964854",
  instagram: "culturessaltaire",
  opening: "See Instagram for the latest hours",
  priceRange: "££",
  photos: [
    "/culturessaltaire/cultures-exterior.jpg", // hero
    "/culturessaltaire/cultures-pastry.jpg",
    "/culturessaltaire/cultures-bakes-overhead.jpg",
    "/culturessaltaire/cultures-coffee-menu.jpg",
  ],

  // Magazine-style editorial fields (menu-safe: experiences, not specific items)
  editorial: {
    bestFor: ["Grazing with a pour", "Slow coffee stop", "Cosy catch-ups"],
    vibe: ["Warm, wood-and-stone", "Neighbourhood", "Unhurried"],
    goodToKnow: [
      "Hours can change week to week — check Instagram before you set off.",
      "Window seats are the best people-watching spot on Victoria Road.",
      "Think “drinks + nibbles + deli counter”, not a full sit-down dinner.",
    ],
    bestTime:
      "Late afternoon into early evening (when it starts to feel like a small local bar).",
    accessibilityNote:
      "If you need step-free access or space for a pram/wheelchair, check the entrance on arrival (historic streetfronts vary).",
  },

  whatToTry: [
    "A wine-by-the-glass moment — try something you wouldn’t normally pick.",
    "A slow ‘graze’ visit — share a few deli bits and let it run long.",
    "A quick coffee reset — especially good when you want warmth without fuss.",
  ],

  ambience: ["Cosy", "Neighbourhood", "Counter service", "Sit-in & take-away"],
  lastVerified: "2025-10-21",
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${biz.name} ${biz.postcode}`
)}`;

const reviewScope = {
  siteSlug: "saltaireguide",
  entityType: "business",
};

// ---- UI bits ---------------------------------------------------------------

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
    <div
      className={
        "rounded-2xl border border-stone-300/80 bg-white/90 shadow-sm " + className
      }
    >
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

// ---- Page -------------------------------------------------------------------

export default function Page() {
  return (
    <main className="w-full">
      {/* HERO — full-bleed, lighter overlay */}
      <section className="relative w-full">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden rounded-b-[2rem]">
          <Image
            src={biz.photos[0]}
            alt="Cultures Saltaire — corner exterior on Victoria Road"
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
            <div className="inline-block max-w-[min(900px,100%)] rounded-2xl border border-stone-200/70 bg-[#f6efe6]/90 p-4 shadow-sm">
              <h1 className="mb-1 flex flex-wrap items-center gap-2 text-[28px] font-semibold text-stone-900 md:text-[34px]">
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
        {/* Warm desk base */}
        <div className="pointer-events-none absolute inset-0 bg-[#f6efe6]" />
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f6efe6] via-[#f6efe6]/70 to-white" />
        {/* Subtle grain (pure CSS, no asset required) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            {/* Left (content) */}
            <div className="space-y-5 md:col-span-2">
              {/* ====== UPGRADED PART START: About / What to do / Local notes ====== */}
              <Card className="p-0">
                {/* editorial top rule */}
                <div className="h-[3px] w-full rounded-t-2xl bg-[#0f3d2e]" />
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f3d2e]">
                        Saltaire Guide notebook
                      </div>
                      <h2 className="mt-1 text-[20px] font-semibold text-stone-900">
                        The feel
                      </h2>
                      <p className="mt-2 text-[15px] leading-relaxed text-stone-800">
                        {biz.shortDesc}
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-stone-800">
                        {biz.longDesc}
                      </p>
                    </div>

                    {/* At-a-glance band (denser + fewer nested borders) */}
                    <div className="rounded-2xl border border-stone-200 bg-[#fbf7f1] p-4">
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
                            <span className="font-medium text-stone-800">
                              {biz.editorial.bestTime}
                            </span>
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

                    {/* Subtle ambience chips */}
                    {biz.ambience?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {biz.ambience.map((a) => (
                          <Chip key={a}>{a}</Chip>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Experiences (menu-safe) */}
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
                        <h3 className="text-[14px] font-semibold text-stone-900">
                          How to do it
                        </h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">
                          Experiences, not menu items — so this stays useful even when the counter
                          changes.
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {biz.whatToTry.map((item, i) => (
                        <li
                          key={i}
                          className="rounded-xl border border-stone-200 bg-white p-3"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-[#0f3d2e] text-[12px] font-semibold text-white">
                              {i + 1}
                            </span>
                            <div className="text-[13px] leading-relaxed text-stone-800">
                              {item}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3 text-[12px] text-stone-700">
                      Tip: if you’re unsure what to pick, say what you usually like — they’re good
                      at guiding without overselling.
                    </div>
                  </div>
                </Card>

                {/* Local notes (magazine callouts) */}
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
                          The small details that make a visit feel easy.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">
                          Best seats
                        </div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Window seats for people-watching on Victoria Road. If you want them,
                          arrive a touch earlier.
                        </div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Pairings</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">
                          Ask for a pairing suggestion — “something light / something bold” is
                          enough for a good steer.
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
                      Last checked:{" "}
                      <span className="font-medium text-stone-800">{biz.lastVerified}</span>
                    </div>
                  </div>
                </Card>
              </div>
              {/* ====== UPGRADED PART END ====== */}

              <div>
                <h3 className="mb-2 text-lg font-semibold">Gallery</h3>
                <div className="columns-2 gap-3 md:columns-3 [column-fill:_balance]">
                  {biz.photos.map((src, i) => (
                    <div
                      key={src + i}
                      className="mb-3 break-inside-avoid overflow-hidden rounded-xl"
                    >
                      <Image
                        src={src}
                        alt={
                          i === 0
                            ? "Corner exterior"
                            : i === 1
                            ? "Pastry at the counter"
                            : i === 2
                            ? "Bakes & coffee overhead"
                            : "Coffee, menu and bakes"
                        }
                        width={1200}
                        height={900}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right (details) */}
            <div className="space-y-4 md:col-span-1">
              {/* ====== UPGRADED PART START: Details / CTAs (orange primary) ====== */}
              <Card className="p-0">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600">
                        Plan your visit
                      </div>
                      <h3 className="mt-1 text-[16px] font-semibold text-stone-900">
                        Quick essentials
                      </h3>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-stone-200 bg-[#fbf7f1] px-2.5 py-1 text-[11px] font-medium text-stone-700">
                      {biz.priceRange} <span className="ml-1 text-stone-500">mid-range</span>
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="text-[12px] font-semibold text-stone-700">Address</div>
                      <div className="mt-1 text-[13px] font-medium text-stone-900">
                        {biz.address}
                      </div>

                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                      >
                        Get directions
                      </a>
                    </div>

                    <div className="rounded-xl border border-stone-200 bg-white p-3">
                      <div className="text-[12px] font-semibold text-stone-700">Hours</div>
                      <div className="mt-1 text-[13px] text-stone-800">{biz.opening}</div>
                      {biz.instagram ? (
                        <a
                          href={`https://instagram.com/${biz.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[#0f3d2e]/25 bg-white px-4 py-2 text-[13px] font-semibold text-[#0f3d2e] hover:bg-[#fbf7f1] focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/25"
                        >
                          Latest hours (Instagram)
                        </a>
                      ) : null}
                    </div>

                    {biz.phone ? (
                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-stone-700">Call</div>
                        <a
                          href={`tel:${biz.phone}`}
                          className="mt-1 inline-flex text-[13px] font-semibold text-[#0f3d2e] underline decoration-[#0f3d2e]/30 underline-offset-4 hover:decoration-[#0f3d2e]"
                        >
                          {biz.phone}
                        </a>
                      </div>
                    ) : null}
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
              {/* ====== UPGRADED PART END ====== */}
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

          {/* Suggest an update (full width, after reviews) */}
          <div className="mt-8">
            <Card className="p-0">
              <div className="p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="m-0 text-[13px] text-stone-700">
                    Spot an update (hours, menu, photos)? Help keep local info tidy.
                  </p>
                  <Link
                    href="/contribute"
                    className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
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
