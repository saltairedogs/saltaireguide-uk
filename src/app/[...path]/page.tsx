/* eslint-disable @next/next/no-img-element */
// app/[...path]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { createClient } from "@supabase/supabase-js";
import { site } from "@/config/site";
import ReviewsSection from "@/components/ReviewsSection";

export const runtime = "nodejs";
export const dynamicParams = true;
export const dynamic = "force-dynamic";

// WhatsApp (your number) — digits only (no +)
const CLAIM_WA_NUMBER = "447424208127";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // SERVER ONLY

if (!supabaseUrl) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
if (!serviceKey) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { persistSession: false },
});

type ContentItem = Record<string, any> & {
  id: string;
  title: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  body_md?: string | null;
  path: string;
  status: string;
  published_at?: string | null;
  updated_at?: string | null;
  data?: any; // JSON payload (recommended)
  json_data?: any;
  payload?: any;
  meta?: any;
};

type ContentImage = Record<string, any> & {
  id: string;
  item_id: string;
  role: "hero" | "og" | "gallery" | string;
  bucket: string;
  storage_path: string | null;
  public_url: string | null;
  alt_text: string | null;
  width: number | null;
  height: number | null;
  sort_order: number;
};

type BizHoursRow = { day: string; times: string };

type NormalizedBiz = {
  schemaType: string; // Bakery, BarOrPub, CafeOrCoffeeShop, Restaurant, LocalBusiness, etc.
  slug: string;
  name: string;
  claimed: boolean;

  tagline: string;
  shortDesc: string;
  longDesc: string;

  categories: string[];
  priceRange: string;

  address: string;
  postcode: string;
  phone: string;
  website: string;
  instagram: string;
  facebook: string;

  hoursNote: string;
  hours: BizHoursRow[];

  editorial: {
    bestFor: string[];
    vibe: string[];
    goodToKnow: string[];
    bestTime: string;
    accessibilityNote: string;
  };

  whatToTry: string[];
  ambience: string[];
  lastVerified: string;

  faqs: { q: string; a: string }[];
  claimBenefits: string[];
};

function toTitle(s: string) {
  return s
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

function fmtDate(iso: string | null | undefined) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

function resolveImageUrl(img: ContentImage) {
  if (img.public_url) return img.public_url;
  if (!img.bucket || !img.storage_path) return null;
  return `${supabaseUrl}/storage/v1/object/public/${img.bucket}/${img.storage_path}`;
}

function sanitizeHref(href: string) {
  const trimmed = String(href || "").trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("mailto:") || trimmed.startsWith("tel:")) return trimmed;
  return "";
}

function waLink(text: string) {
  return `https://wa.me/${CLAIM_WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function buildBreadcrumbs(path: string) {
  const segments = path.split("/").filter(Boolean);
  const items = segments.map((seg, idx) => {
    const href = "/" + segments.slice(0, idx + 1).join("/");
    return { name: toTitle(seg), href };
  });
  return [{ name: "Home", href: "/" }, ...items];
}

function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  );
}

function jsonLdWebPage(item: ContentItem, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: item.seo_title || item.title || site.name,
    url: canonical,
    description: item.seo_description || undefined,
    inLanguage: "en-GB",
    datePublished: item.published_at || undefined,
    dateModified: item.updated_at || item.published_at || undefined,
    isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
  };
}

function jsonLdBreadcrumbs(bc: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: bc.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: `${site.url}${b.href}`,
    })),
  };
}

function jsonLdBusiness(biz: NormalizedBiz, canonical: string, heroUrl: string | null) {
  const desc = `${biz.shortDesc} ${biz.longDesc}`.trim();
  const sameAs = [biz.instagram, biz.facebook, biz.website].filter(Boolean);

  // We keep address as a single field to avoid lying about parsing.
  const addressObj =
    biz.address && biz.address !== "To be verified"
      ? {
          "@type": "PostalAddress",
          streetAddress: biz.address,
          postalCode: biz.postcode || undefined,
          addressCountry: "GB",
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": biz.schemaType || "LocalBusiness",
    name: biz.name,
    url: canonical,
    description: desc || undefined,
    image: heroUrl || undefined,
    priceRange: biz.priceRange || undefined,
    address: addressObj,
    sameAs: sameAs.length ? sameAs : undefined,
  };
}

function jsonLdFaq(faqs: { q: string; a: string }[]) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function asStr(v: any) {
  if (v === null || v === undefined) return "";
  return String(v).trim();
}

function asBool(v: any) {
  if (v === true) return true;
  if (v === false) return false;
  if (typeof v === "string") return v.toLowerCase() === "true";
  return false;
}

function asStrArr(v: any): string[] {
  if (Array.isArray(v)) return v.map((x) => asStr(x)).filter(Boolean);
  return [];
}

function asHours(v: any): BizHoursRow[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((x) => ({
      day: asStr(x?.day),
      times: asStr(x?.times),
    }))
    .filter((x) => x.day && x.times);
}

function inferSchemaTypeFromPath(path: string) {
  const p = path.toLowerCase();
  if (p.includes("/pub")) return "BarOrPub";
  if (p.includes("/cafe") || p.includes("/coffee")) return "CafeOrCoffeeShop";
  if (p.includes("/restaurant") || p.includes("/food")) return "Restaurant";
  if (p.includes("/bakery")) return "Bakery";
  return "LocalBusiness";
}

// This is the key: strict normalization with safe, non-lying placeholders.
function normalizeBiz(item: ContentItem): NormalizedBiz {
  const raw = item.data ?? item.json_data ?? item.payload ?? item.meta ?? {};

  const rawBiz = raw?.biz ?? raw ?? {};

  const segments = item.path.split("/").filter(Boolean);
  const lastSeg = segments[segments.length - 1] || "listing";
  const slug = asStr(rawBiz.slug) || lastSeg;

  const name = asStr(rawBiz.name) || asStr(item.title) || toTitle(lastSeg);

  const schemaType = asStr(raw.schemaType) || asStr(rawBiz.schemaType) || inferSchemaTypeFromPath(item.path);

  const tagline = asStr(rawBiz.tagline) || asStr(item.seo_description) || "Independent listing — details being verified.";

  const shortDesc =
    asStr(rawBiz.shortDesc) ||
    "A practical local listing on Saltaire Guide. If anything here is out of date, send a correction and we’ll update it.";

  const longDesc =
    asStr(rawBiz.longDesc) ||
    "This page is designed to be useful first: quick details, what to expect, and tips that save time. Some details may be unverified while the listing is being completed.";

  const categories = asStrArr(rawBiz.categories);
  const priceRange = asStr(rawBiz.priceRange) || "£";

  const address = asStr(rawBiz.address) || "To be verified";
  const postcode = asStr(rawBiz.postcode) || "";
  const phone = asStr(rawBiz.phone) || "";
  const website = asStr(rawBiz.website) || "";
  const instagram = asStr(rawBiz.instagram) || "";
  const facebook = asStr(rawBiz.facebook) || "";

  const hoursNote = asStr(rawBiz.hoursNote) || "Opening hours can change — double-check on Google before a special trip.";

  const hours = asHours(rawBiz.hours).length
    ? asHours(rawBiz.hours)
    : ([
        { day: "Monday", times: "To be verified" },
        { day: "Tuesday", times: "To be verified" },
        { day: "Wednesday", times: "To be verified" },
        { day: "Thursday", times: "To be verified" },
        { day: "Friday", times: "To be verified" },
        { day: "Saturday", times: "To be verified" },
        { day: "Sunday", times: "To be verified" },
      ] satisfies BizHoursRow[]);

  const editorial = rawBiz.editorial ?? {};
  const bestFor = asStrArr(editorial.bestFor);
  const vibe = asStrArr(editorial.vibe);
  const goodToKnow = asStrArr(editorial.goodToKnow);

  const normalized: NormalizedBiz = {
    schemaType,
    slug,
    name,
    claimed: asBool(rawBiz.claimed),

    tagline,
    shortDesc,
    longDesc,

    categories: categories.length ? categories : [toTitle(schemaType.replace(/([A-Z])/g, " $1").trim())].filter(Boolean),
    priceRange,

    address,
    postcode,
    phone,
    website,
    instagram,
    facebook,

    hoursNote,
    hours,

    editorial: {
      bestFor: bestFor.length ? bestFor : ["A quick local stop", "Meeting friends", "A simple plan on a Saltaire day"],
      vibe: vibe.length ? vibe : ["Local", "Practical", "Neighbourhood feel"],
      goodToKnow: goodToKnow.length
        ? goodToKnow
        : ["Details may be unverified while this listing is completed.", "Double-check hours on Google for special trips."],
      bestTime: asStr(editorial.bestTime) || "Varies — check what you’re aiming for (quiet vs busy).",
      accessibilityNote:
        asStr(editorial.accessibilityNote) || "If you need step-free access, confirm on arrival or call ahead (streetfronts vary).",
    },

    whatToTry: asStrArr(rawBiz.whatToTry).length
      ? asStrArr(rawBiz.whatToTry)
      : [
          "Use the quick details first (address, hours, website).",
          "If you’re travelling specifically, double-check hours on Google before you go.",
          "If you spot an error, send a correction — we update fast.",
        ],

    ambience: asStrArr(rawBiz.ambience).length ? asStrArr(rawBiz.ambience) : ["Locally useful", "Quick to scan", "Designed for planning"],

    lastVerified: asStr(rawBiz.lastVerified) || asStr(item.updated_at) || asStr(item.published_at) || "",

    faqs: Array.isArray(raw.faqs)
      ? raw.faqs
          .map((x: any) => ({ q: asStr(x?.q), a: asStr(x?.a) }))
          .filter((x: any) => x.q && x.a)
      : [
          {
            q: `Where is ${name}?`,
            a:
              address === "To be verified"
                ? "Address is being verified. Check Google Maps for the latest, or send a correction."
                : `Find it at ${address}.`,
          },
          { q: "What are the opening hours?", a: "Hours can change. Use the hours section here as a guide, and double-check Google for special trips." },
          { q: "Can I claim this listing?", a: "If you manage this business, you can claim the page to keep details accurate. Proof is required." },
        ],

    claimBenefits: Array.isArray(raw.claimBenefits)
      ? raw.claimBenefits.map((x: any) => asStr(x)).filter(Boolean)
      : ["Verified owner badge (trust).", "Edit hours, links, and contact details.", "Add more photos and key info.", "Priority placement in local searches (optional)."],
  };

  return normalized;
}

function isIndexable(item: ContentItem, heroUrl: string | null) {
  // Strict: do not index listings that look like stubs.
  const hasDesc = Boolean(asStr(item.seo_description));
  const hasHero = Boolean(heroUrl);
  const hasTitle = Boolean(asStr(item.seo_title) || asStr(item.title));
  return hasTitle && hasDesc && hasHero;
}

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

function HoursTable({ hours }: { hours: BizHoursRow[] }) {
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

const getContentByPath = cache(async (path: string) => {
  const { data: item, error: itemErr } = await supabase
    .from("content_items")
    .select("*")
    .eq("path", path)
    .eq("status", "published")
    .maybeSingle();

  if (itemErr) throw new Error(`Supabase content_items error: ${itemErr.message}`);
  if (!item) return null;

  const { data: images, error: imgErr } = await supabase
    .from("content_images")
    .select("*")
    .eq("item_id", item.id)
    .order("sort_order", { ascending: true });

  if (imgErr) throw new Error(`Supabase content_images error: ${imgErr.message}`);

  const hero = (images || []).find((x: ContentImage) => x.role === "hero") || null;
  const og = (images || []).find((x: ContentImage) => x.role === "og") || null;
  const gallery = (images || []).filter((x: ContentImage) => x.role === "gallery") || [];

  return {
    item: item as ContentItem,
    images: (images || []) as ContentImage[],
    hero,
    og,
    gallery,
  };
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>;
}): Promise<Metadata> {
  const { path: parts } = await params;
  const path = "/" + parts.join("/");

  const data = await getContentByPath(path);
  if (!data) return { title: "Not found | Saltaire Guide" };

  const { item, hero, og } = data;
  const canonical = `${site.url}${item.path}`;

  const heroUrl = hero ? resolveImageUrl(hero) : null;
  const ogUrl = og ? resolveImageUrl(og) : null;

  const title = (item.seo_title || item.title || site.name).toString();
  const description = (item.seo_description || "Local listing on Saltaire Guide.").toString();

  const image = ogUrl || heroUrl || `${site.url}/og.png`;
  const indexable = isIndexable(item, heroUrl);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: image ? [{ url: image, alt: item.title || title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      images: image ? [image] : undefined,
    },
    robots: indexable ? { index: true, follow: true, "max-image-preview": "large" } : { index: false, follow: true, "max-image-preview": "large" },
  };
}

export default async function CatchAllContentPage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path: parts } = await params;
  const path = "/" + parts.join("/");

  const data = await getContentByPath(path);
  if (!data) return notFound();

  const { item, hero, gallery } = data;

  const biz = normalizeBiz(item);

  const heroUrl = hero ? resolveImageUrl(hero) : null;
  const canonical = `${site.url}${item.path}`;
  const breadcrumbs = buildBreadcrumbs(item.path);

  const updated = fmtDate(item.updated_at || item.published_at || null);
  const published = fmtDate(item.published_at || null);

  const mapUrl =
    biz.address && biz.address !== "To be verified"
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(biz.address)}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${biz.name} ${biz.postcode}`.trim())}`;

  const claimPrefill = `Hi — I manage ${biz.name}. Can I claim this listing? ${canonical}`;
  const claimUrl = waLink(claimPrefill);

  const faqLd = jsonLdFaq(biz.faqs);

  return (
    <main className="w-full">
      <JsonLd obj={jsonLdWebPage(item, canonical)} />
      <JsonLd obj={jsonLdBreadcrumbs(breadcrumbs)} />
      <JsonLd obj={jsonLdBusiness(biz, canonical, heroUrl)} />
      {faqLd ? <JsonLd obj={faqLd} /> : null}

      {/* HERO — full-bleed */}
      <section className="relative w-full">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden rounded-b-[2rem] bg-stone-200">
          {heroUrl ? (
            <>
              <img src={heroUrl} alt={hero?.alt_text || biz.name} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/18 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[#f6efe6]/10 mix-blend-soft-light" />
            </>
          ) : (
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-[#f6efe6] to-white" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl border border-stone-300 bg-white/80 px-4 py-3 text-[13px] text-stone-700 shadow-sm">
                  Photo pending — listing is live, imagery is being added.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* TITLE CARD */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-5 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="inline-block max-w-[min(980px,100%)] rounded-2xl border border-stone-200/70 bg-[#f6efe6]/90 p-4 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-stone-700">
                {breadcrumbs.map((b, idx) => (
                  <span key={b.href} className="inline-flex items-center gap-2">
                    {idx < breadcrumbs.length - 1 ? (
                      <Link href={b.href} className="underline decoration-stone-400/60 underline-offset-4 hover:decoration-stone-700">
                        {b.name}
                      </Link>
                    ) : (
                      <span className="text-stone-800">{b.name}</span>
                    )}
                    {idx < breadcrumbs.length - 1 ? <span aria-hidden="true">›</span> : null}
                  </span>
                ))}

                <span className="ml-auto rounded-full border border-stone-200 bg-white/70 px-2 py-1 text-[11px] font-semibold text-stone-700">
                  {updated ? `Updated: ${updated}` : published ? `Published: ${published}` : "Published"}
                </span>
              </div>

              <h1 className="mt-3 mb-1 flex flex-wrap items-center gap-2 text-[28px] font-semibold text-stone-900 md:text-[34px]">
                {biz.name}
                {biz.claimed ? (
                  <span className="rounded-full border border-emerald-200 bg-emerald-100 px-2 py-1 text-[11px] font-medium text-emerald-800">Claimed</span>
                ) : (
                  <span className="rounded-full border border-stone-200 bg-white/70 px-2 py-1 text-[11px] font-medium text-stone-700">Unclaimed</span>
                )}
              </h1>

              <p className="text-[14px] text-stone-700">{biz.tagline}</p>

              <div className="mt-2 flex flex-wrap gap-2">
                {biz.categories.slice(0, 6).map((c) => (
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f3d2e]">Saltaire Guide notebook</div>
                  <h2 className="mt-1 text-[20px] font-semibold text-stone-900">The feel</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-800">{biz.shortDesc}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-800">{biz.longDesc}</p>

                  <div className="mt-5 rounded-2xl border border-stone-200 bg-[#fbf7f1] p-4">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">Best for</div>
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
                            <span key={v} className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[12px] font-medium text-stone-800">
                              {v}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 text-[12px] text-stone-600">
                          Best time: <span className="font-medium text-stone-800">{biz.editorial.bestTime}</span>
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">Good to know</div>
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

                  <div className="mt-4 flex flex-wrap gap-2">
                    {biz.ambience.slice(0, 10).map((a) => (
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
                          <path d="M8 7h8M8 11h8M8 15h5" />
                          <path d="M6 3h12a2 2 0 0 1 2 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2z" />
                        </svg>
                      </Icon>
                      <div className="min-w-0">
                        <h3 className="text-[14px] font-semibold text-stone-900">How to do it</h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">Practical suggestions that stay useful even when details change.</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-3">
                      {biz.whatToTry.map((item, i) => (
                        <li key={i} className="rounded-xl border border-stone-200 bg-white p-3">
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-[#0f3d2e] text-[12px] font-semibold text-white">{i + 1}</span>
                            <div className="text-[13px] leading-relaxed text-stone-800">{item}</div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3 text-[12px] text-stone-700">Rule: if you’re travelling specifically, confirm hours before you go.</div>
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
                        <p className="mt-1 text-[12px] leading-relaxed text-stone-600">The details that prevent wasted trips.</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Accessibility</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">{biz.editorial.accessibilityNote}</div>
                      </div>

                      <div className="rounded-xl border border-stone-200 bg-white p-3">
                        <div className="text-[12px] font-semibold text-[#0f3d2e]">Verification</div>
                        <div className="mt-1 text-[13px] leading-relaxed text-stone-800">Some details may be unverified until confirmed. If you manage this business, claim the listing.</div>
                      </div>
                    </div>

                    <div className="mt-4 text-[12px] text-stone-600">
                      Last checked:{" "}
                      <span className="font-medium text-stone-800">
                        {biz.lastVerified ? fmtDate(biz.lastVerified) || biz.lastVerified : updated || published || "To be verified"}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Gallery */}
              {gallery.length ? (
                <div>
                  <div className="mb-2 flex items-end justify-between">
                    <h3 className="text-lg font-semibold text-stone-900">Gallery</h3>
                    <div className="text-[12px] text-stone-600">
                      {gallery.length} photo{gallery.length === 1 ? "" : "s"}
                    </div>
                  </div>

                  <div className="columns-2 gap-3 md:columns-3 [column-fill:_balance]">
                    {gallery.map((img) => {
                      const url = resolveImageUrl(img);
                      if (!url) return null;
                      return (
                        <div key={img.id} className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-stone-200 bg-white">
                          <img src={url} alt={img.alt_text || biz.name} className="h-auto w-full object-cover" loading="lazy" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Card className="p-0">
                  <div className="p-5 sm:p-6">
                    <div className="text-[12px] font-semibold text-stone-900">Gallery</div>
                    <p className="mt-1 text-[13px] text-stone-700">Photos are being added. This listing stays live while imagery is uploaded.</p>
                  </div>
                </Card>
              )}

              {/* FAQ */}
              <Card className="p-0">
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f3d2e]">Quick answers</div>
                  <h3 className="mt-1 text-[18px] font-semibold text-stone-900">FAQs</h3>

                  <div className="mt-4 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
                    {biz.faqs.slice(0, 8).map((f) => (
                      <details key={f.q} className="group p-4 open:bg-stone-50/60">
                        <summary className="cursor-pointer list-none text-[14px] font-semibold text-stone-900">{f.q}</summary>
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
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600">Plan your visit</div>
                      <h3 className="mt-1 text-[16px] font-semibold text-stone-900">Quick essentials</h3>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-stone-200 bg-[#fbf7f1] px-2.5 py-1 text-[11px] font-medium text-stone-700">
                      {biz.priceRange} <span className="ml-1 text-stone-500">guide</span>
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
                        {sanitizeHref(biz.instagram) ? (
                          <a
                            href={sanitizeHref(biz.instagram)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-[#0f3d2e]/25 bg-white px-4 py-2 text-[13px] font-semibold text-[#0f3d2e] no-underline hover:bg-[#fbf7f1] focus:outline-none focus:ring-2 focus:ring-[#0f3d2e]/25"
                          >
                            Instagram
                          </a>
                        ) : null}

                        {sanitizeHref(biz.facebook) ? (
                          <a
                            href={sanitizeHref(biz.facebook)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-300/40"
                          >
                            Facebook
                          </a>
                        ) : null}

                        {sanitizeHref(biz.website) ? (
                          <a
                            href={sanitizeHref(biz.website)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50"
                          >
                            Website
                          </a>
                        ) : null}
                      </div>

                      {/* CLAIM LISTING (WhatsApp) */}
                      {!biz.claimed ? (
                        <div className="mt-4 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3">
                          <div className="text-[12px] font-semibold text-stone-900">Claim this listing</div>
                          <div className="mt-1 text-[12px] leading-relaxed text-stone-700">Owners/managers can claim this page to keep details accurate. Proof required.</div>

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
                            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-600">Why claim</div>
                            <ul className="mt-2 space-y-1.5 text-[12px] text-stone-800">
                              {biz.claimBenefits.slice(0, 6).map((b) => (
                                <li key={b} className="flex items-start gap-2">
                                  <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-[#c2410c]" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-2 text-[11px] text-stone-600">Proof accepted: domain email reply or Google Business Profile access screenshot.</div>
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
                    {biz.claimed ? <>Owner-verified • {updated || "Recently updated"}</> : <>Independent listing by Saltaire Guide. We keep details current.</>}
                  </div>
                </div>
              </Card>

              <Card className="p-0">
                <div className="p-4">
                  <div className="text-[12px] font-semibold text-stone-900">Explore</div>
                  <p className="mt-1 text-[12px] text-stone-700">Use the hub pages for more local spots and planning.</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/food-drink"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#c2410c] px-4 py-2 text-[13px] font-semibold text-white shadow-sm no-underline hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#c2410c]/30"
                    >
                      Food & Drink hub
                    </Link>

                    <Link
                      href="/walks"
                      className="inline-flex w-full items-center justify-center rounded-xl border border-stone-200 bg-white px-4 py-2 text-[13px] font-semibold text-stone-800 no-underline hover:bg-stone-50"
                    >
                      Walks & routes
                    </Link>
                  </div>

                  <div className="mt-3 rounded-xl border border-stone-200 bg-[#fbf7f1] p-3 text-[12px] text-stone-700">
                    Canonical: <span className="font-medium text-stone-900">{canonical}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* ✅ FULL-WIDTH Reviews (outside the grid so it spans the full content width) */}
          <div className="mt-10">
            <ReviewsSection siteSlug="saltaireguide" entityType="business" slug={biz.slug} name={biz.name} />
          </div>

          {/* ✅ Full-width “Suggest an update” (matches the House of Bread layout) */}
          <div className="mt-8">
            <Card className="p-0">
              <div className="p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="m-0 text-[13px] text-stone-700">Spot an update (hours, address, photos)? Help keep local info tidy.</p>
                  <Link
                    href={`/contribute?path=${encodeURIComponent(item.path)}`}
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
