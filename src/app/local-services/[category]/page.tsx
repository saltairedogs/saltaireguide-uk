// src/app/local-services/[category]/page.tsx
// Dynamic category directory page for local services.
// Reads data from src/data/local-services/<category>.ts

import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

type Listing = {
  slug: string;
  name: string;
  phoneLocal?: string;
  phoneTel?: string; // e.g. "tel:+4474..."
  email?: string;
  website?: string;
  excerpt?: string;
  priceFrom?: string; // e.g. "£12"
  areaServed?: string[];
  featured?: boolean;
  verified?: boolean;
  image?: string;
  tags?: string[];
};

type ListingsModule = {
  listings: Listing[];
  categoryMetadata?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

const WA_NUMBER = "447424208127";

function displayName(slug: string) {
  if (!slug) return slug;
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

function JsonLd({ obj }: { obj: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
    />
  );
}

/* ----------------------------- generateMetadata ---------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const display = displayName(category);

  try {
    // @ts-ignore – resolved at build if file exists
    const mod: ListingsModule = await import(
      `@/data/local-services/${category}`
    );
    const meta = mod?.categoryMetadata;

    const title =
      meta?.title ?? `${display} in Saltaire & Shipley — local services`;
    const description =
      meta?.description ??
      `Find trusted ${display.toLowerCase()} serving Saltaire & Shipley. Featured providers are highlighted and verified when possible.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${site.url}/local-services/${category}`,
        images: meta?.image ? [meta.image] : undefined,
      },
      alternates: {
        canonical: `${site.url}/local-services/${category}`,
      },
    };
  } catch {
    const title = `${display} in Saltaire & Shipley — local services`;
    const description = `Find trusted ${display.toLowerCase()} serving Saltaire & Shipley. Featured providers are highlighted and verified when possible.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${site.url}/local-services/${category}`,
      },
      alternates: {
        canonical: `${site.url}/local-services/${category}`,
      },
    };
  }
}

/* --------------------------------- Page ----------------------------------- */

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const display = displayName(category);

  let mod: ListingsModule | null = null;
  let listings: Listing[] = [];

  try {
    // @ts-ignore – resolved at build if file exists
    mod = (await import(
      `@/data/local-services/${category}`
    )) as ListingsModule;
    listings = Array.isArray(mod?.listings) ? mod!.listings : [];
  } catch {
    mod = null;
    listings = [];
  }

  const featured = listings.filter((l) => l.featured);
  const others = listings.filter((l) => !l.featured);

  const pageTitle =
    mod?.categoryMetadata?.title ??
    `${display} in Saltaire & Shipley — local services`;
  const pageDescription =
    mod?.categoryMetadata?.description ??
    `Find trusted ${display.toLowerCase()} serving Saltaire & Shipley. Featured providers are listed first and may show verification badges where proof has been provided.`;

  const baseUrl = site.url;
  const categoryUrl = `${baseUrl}/local-services/${category}`;

  /* ------------------------------- JSON-LD -------------------------------- */

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${display} in Saltaire & Shipley`,
    url: categoryUrl,
    itemListElement: listings.map((l, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: l.website || `${categoryUrl}#${l.slug}`,
      name: l.name,
      description: l.excerpt,
    })),
  };

  const featuredLd = featured.map((f) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: f.name,
    image: f.image,
    url: f.website || `${categoryUrl}#${f.slug}`,
    telephone: f.phoneTel,
    email: f.email,
    priceRange: f.priceFrom,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saltaire",
      addressRegion: "West Yorkshire",
      postalCode: "BD18",
      addressCountry: "GB",
    },
    areaServed: (f.areaServed || ["Saltaire", "Shipley"]).map((a) => ({
      "@type": "Place",
      name: a,
    })),
    description: f.excerpt,
    "@id": f.website || `${categoryUrl}#${f.slug}`,
  }));

  const faqs = buildFaq(display, category);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  /* --------------------------- Business owner CTAs ------------------------ */

  const queryCategory = encodeURIComponent(display);
  const freeListingUrl = `/for-business/free-audit-free-listing?category=${queryCategory}`;

  const waText = encodeURIComponent(
    [
      `Hi Giuseppe, I run a ${display.toLowerCase()} service in Saltaire/Shipley.`,
      "",
      "I saw the SaltaireGuide local services page and would like to:",
      "- Get a free basic listing, and",
      "- Hear about featured placement / website options.",
      "",
      "Business name:",
      "Based in:",
      "Website / Instagram:",
    ].join("\n"),
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  return (
    <>
      <JsonLd obj={itemListLd} />
      {featuredLd.map((f, i) => (
        <JsonLd obj={f} key={`featured-ld-${i}`} />
      ))}
      <JsonLd obj={faqLd} />

      <main className="mx-auto max-w-5xl px-4 py-10 md:max-w-6xl">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-4 text-sm text-neutral-600"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-neutral-900"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link
                href="/local-services"
                className="underline underline-offset-4 hover:text-neutral-900"
              >
                Local services
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="text-neutral-900">
              {display}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="mb-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Saltaire &amp; Shipley
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl">
            {pageTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-neutral-700">
            {pageDescription}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#providers" className="btn btn-primary">
              Browse {display.toLowerCase()} providers
            </a>
            <Link href={freeListingUrl} className="btn btn-outline">
              List your {display.toLowerCase()} business (free)
            </Link>
            <Link href="/local-services" className="btn btn-ghost">
              Back to all services
            </Link>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Featured providers appear first and may show a{" "}
            <span className="font-semibold">“Verified documents”</span> badge
            where we&apos;ve checked insurance/DBS. Basic listings are always
            free.
          </p>
        </section>

        {/* Providers */}
        <section id="providers" className="space-y-10">
          {/* Featured providers */}
          <section aria-labelledby="featured-title">
            <div className="flex items-baseline justify-between gap-3">
              <h2
                id="featured-title"
                className="text-2xl font-bold tracking-tight text-neutral-900"
              >
                Featured {display}
              </h2>
              <p className="text-xs text-neutral-500">
                Paid placements from genuine local providers. We aim to check
                key documents where possible.
              </p>
            </div>

            {featured.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-700">
                No featured providers yet. If you run a{" "}
                {display.toLowerCase()} service in Saltaire or Shipley, you can{" "}
                <Link
                  href={freeListingUrl}
                  className="font-semibold underline underline-offset-4"
                >
                  get a free listing
                </Link>{" "}
                and ask about featured placement and website help.
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                {featured.map((f) => (
                  <FeaturedListingCard key={f.slug} listing={f} />
                ))}
              </div>
            )}
          </section>

          {/* All listings */}
          <section aria-labelledby="all-title">
            <div className="flex items-baseline justify-between gap-3">
              <h2
                id="all-title"
                className="text-2xl font-bold tracking-tight text-neutral-900"
              >
                All {display.toLowerCase()} listings
              </h2>
              <p className="text-xs text-neutral-500">
                Human-curated order. No star ratings, no fake reviews — just
                clear info.
              </p>
            </div>

            {listings.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700">
                We don&apos;t have any {display.toLowerCase()} listed yet for
                Saltaire &amp; Shipley.
                <br />
                <span className="mt-1 inline-block">
                  Own a local business?{" "}
                  <Link
                    href={freeListingUrl}
                    className="font-semibold underline underline-offset-4"
                  >
                    Get your free listing
                  </Link>{" "}
                  and we&apos;ll add you here.
                </span>
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {(others.length > 0 ? others : listings).map((l, idx) => (
                  <ListingCard
                    key={l.slug || idx}
                    listing={l}
                    index={idx + 1}
                  />
                ))}
              </div>
            )}
          </section>

          {/* How we list & verify */}
          <section className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">
              How we list &amp; verify {display.toLowerCase()}
            </h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                Basic listings are free for genuine providers serving Saltaire
                &amp; Shipley.
              </li>
              <li>
                Featured spots are fixed-fee ad products — no commission taken
                from jobs.
              </li>
              <li>
                Where providers share proof (e.g. insurance, DBS), we display a{" "}
                <span className="font-semibold">“Verified documents”</span>{" "}
                badge. Always do your own checks.
              </li>
              <li>
                For full details, see the{" "}
                <Link
                  href="/local-services#verify"
                  className="underline underline-offset-4"
                >
                  verification & ranking policy
                </Link>
                .
              </li>
            </ul>
          </section>

          {/* Business owner CTA */}
          <section className="rounded-2xl border border-neutral-200 bg-emerald-50/60 p-6 text-sm text-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-900">
              Run a {display.toLowerCase()} business in Saltaire or Shipley?
            </h2>
            <p className="mt-2 max-w-prose">
              You can get a free basic listing plus a quick look over your
              website. If you want extra visibility, we offer simple paid
              options:
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>5-page website build for £40.</li>
              <li>50-page website build for £300 for multi-service businesses.</li>
              <li>Website audit video for £30.</li>
              <li>Priority featured ad slots from £30 / month.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={freeListingUrl} className="btn btn-primary">
                Get free listing &amp; website check
              </Link>
              <Link
                href="/for-business/free-audit-free-listing#extras"
                className="btn btn-outline"
              >
                See full pricing &amp; pay online
              </Link>
              <a href={waLink} className="btn btn-ghost" target="_blank">
                Ask a question via WhatsApp
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faqs"
            className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-800 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              {display} — quick questions
            </h2>
            <div className="mt-3 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-neutral-200 bg-neutral-50 p-4 open:bg-neutral-50"
                >
                  <summary className="cursor-pointer list-none text-sm font-medium text-neutral-900">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

/* ----------------------------- Presentational ----------------------------- */

function FeaturedListingCard({ listing }: { listing: Listing }) {
  const {
    slug,
    name,
    excerpt,
    priceFrom,
    phoneLocal,
    phoneTel,
    email,
    website,
    areaServed,
    verified,
    tags,
    image,
  } = listing;

  const priceLabel = priceFrom ? `From ${priceFrom}` : "Price on enquiry";

  return (
    <article
      id={slug}
      className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-36">
          <div
            className="flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-neutral-100 text-center text-[11px] text-neutral-500"
            style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : undefined
            }
          >
            {!image && <span>{name}</span>}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {name}
              </h3>
              <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
                <span className="badge bg-emerald-100 text-emerald-800">
                  Featured
                </span>
                {verified && (
                  <span className="badge bg-emerald-600 text-white">
                    Verified documents
                  </span>
                )}
                <span className="badge">Saltaire &amp; Shipley</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-neutral-500">Guide price</div>
              <div className="text-base font-semibold text-neutral-900">
                {priceLabel}
              </div>
            </div>
          </div>

          <p className="mt-2 text-sm text-neutral-700">{excerpt}</p>

          <dl className="mt-3 grid gap-3 text-xs text-neutral-600 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-neutral-700">Area covered</dt>
              <dd>{(areaServed || ["Saltaire", "Shipley"]).join(", ")}</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-700">Contact</dt>
              <dd className="space-y-1">
                {phoneTel && (
                  <div>
                    <a
                      href={phoneTel}
                      className="underline underline-offset-2"
                    >
                      {phoneLocal || phoneTel.replace("tel:", "")}
                    </a>
                  </div>
                )}
                {email && (
                  <div>
                    <a
                      href={`mailto:${email}`}
                      className="underline underline-offset-2"
                    >
                      {email}
                    </a>
                  </div>
                )}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-700">Tags</dt>
              <dd>{tags?.join(", ") || "—"}</dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap gap-3">
            {phoneTel && (
              <a href={phoneTel} className="btn btn-primary">
                Call
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="btn btn-outline">
                Email
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Visit website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ListingCard({
  listing,
  index,
}: {
  listing: Listing;
  index: number;
}) {
  const {
    slug,
    name,
    excerpt,
    priceFrom,
    phoneLocal,
    phoneTel,
    email,
    website,
    image,
  } = listing;

  const priceLabel = priceFrom ? `From ${priceFrom}` : "Price on enquiry";

  return (
    <article
      id={slug}
      className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-sm"
    >
      <div className="flex gap-3">
        <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100 text-[11px] text-neutral-500">
          <div
            className="h-full w-full"
            style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
            }
          >
            {!image && <span className="block p-2">{name}</span>}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-neutral-900">
              {index}. {name}
            </h3>
            <div className="text-right text-xs text-neutral-600">
              <div className="font-semibold text-neutral-900">
                {priceLabel}
              </div>
            </div>
          </div>
          <p className="mt-1 line-clamp-3 text-xs text-neutral-700">
            {excerpt}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="badge"
          >
            Visit site
          </a>
        )}
        {phoneTel ? (
          <a href={phoneTel} className="badge">
            Call {phoneLocal || phoneTel.replace("tel:", "")}
          </a>
        ) : (
          <span className="badge text-neutral-400">No phone listed</span>
        )}
        {email && (
          <a href={`mailto:${email}`} className="badge">
            Email
          </a>
        )}
      </div>
    </article>
  );
}

/* ----------------------------- FAQ helper --------------------------------- */

function buildFaq(
  display: string,
  slug: string,
): Array<{ q: string; a: string }> {
  const base = display.toLowerCase();

  const categorySpecific = [
    {
      q: `What kinds of ${base} are listed here?`,
      a: `We list genuine ${base} providers who serve Saltaire & Shipley — including independent traders, small businesses and local agencies.`,
    },
    {
      q: `Are all ${base} on this page vetted?`,
      a: "Not automatically. Some providers share proof of insurance/DBS and we show a 'Verified documents' badge when checks are up to date. You should still do your own checks before booking.",
    },
  ];

  const common = [
    {
      q: "How much does a typical job cost?",
      a: "Costs vary by provider and job. Many listings include a 'from' price. The quickest way to get an accurate figure is to contact two or three local providers for quotes.",
    },
    {
      q: "How do I get my business listed?",
      a: "If you run a local service, you can get a free basic listing plus a quick look over your website via the 'Get free listing & website check' button above.",
    },
    {
      q: "How do featured listings work?",
      a: "Featured listings are fixed-fee ad spots that appear above standard listings. They may also include verification checks and extra visibility across SaltaireGuide.uk. We never take commission on jobs.",
    },
    {
      q: "Can I suggest a new provider?",
      a: "Yes. You can suggest a provider or correction from the main Local services hub, or message Giuseppe on WhatsApp using the contact link in the site header.",
    },
  ];

  return [...categorySpecific, ...common];
}
