// src/app/plan/what-to-bring/page.tsx
// What to bring for Saltaire & Shipley — practical kit list + Amazon affiliate hooks

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import RelatedLinks from "@/components/RelatedLinks";

export const dynamic = "error";

export const metadata: Metadata = {
  title:
    "What to bring for Saltaire & Shipley (2025) — practical kit list & ideas",
  description:
    "Realistic packing list for a Saltaire & Shipley day trip or walk: footwear, layers, bags, kids and dog-friendly extras. With example products on Amazon (affiliate links).",
  alternates: { canonical: `${site.url}/plan/what-to-bring` },
  openGraph: {
    title: "What to bring for Saltaire & Shipley — kit list & ideas",
    description:
      "Make your Saltaire or Shipley visit easier: simple packing list for walks, canalside days, visits with kids or dogs. Includes example products on Amazon (affiliate links).",
    url: `${site.url}/plan/what-to-bring`,
    type: "article",
    images: [
      {
        url: `${site.url}/images/walks-riverside.png`,
        width: 1600,
        height: 1066,
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

/* ----------------------------- Types & data ----------------------------- */

type Product = {
  slug: string;
  name: string;
  blurb: string;
  whyHere: string;
  href: string; // Amazon URL with affiliate tag
  tag?: string;
  note?: string;
};

type Section = {
  id: string;
  title: string;
  intro: string;
  tips: string[];
  products: Product[];
};

const AFFILIATE_NOTE =
  "As an Amazon Associate, we earn from qualifying purchases. It doesn’t change what you pay, and we only suggest things that actually make sense for Saltaire & Shipley trips.";

const SECTIONS: Section[] = [
  {
    id: "essentials",
    title: "Essentials for any Saltaire or Shipley visit",
    intro:
      "You don’t need loads of gear for Saltaire. A few basics make the canal, cobbles and changeable weather much easier.",
    tips: [
      "Wear comfortable shoes — there are cobbles, slopes and canal towpaths.",
      "Bring a light layer or waterproof even in ‘nice’ weather; it’s Yorkshire.",
      "Keep hands free for kids/dogs/coffee with a small backpack.",
    ],
    products: [
      {
        slug: "lightweight-daypack",
        name: "Lightweight daypack (10–20L)",
        blurb: "Small rucksack for water, snacks, camera and an extra layer.",
        whyHere:
          "Perfect for wandering between Salts Mill, the canal and Roberts Park without juggling bags.",
        href: "#", // TODO: swap for real Amazon affiliate link
        tag: "Day-trip friendly",
      },
      {
        slug: "reusable-water-bottle",
        name: "Reusable water bottle",
        blurb:
          "Keeps drinks cold/warm while you walk the canal or sit in the park.",
        whyHere:
          "Tap top-ups + plenty of benches = easy hydration without buying plastic bottles all day.",
        href: "#",
        tag: "Eco pick",
      },
      {
        slug: "compact-umbrella",
        name: "Compact wind-resistant umbrella",
        blurb: "Folds into your bag but survives a canal-side gust.",
        whyHere:
          "Great backup if the weather flips while you’re between Salts Mill and Shipley.",
        href: "#",
        tag: "Wet-weather backup",
      },
    ],
  },
  {
    id: "walks",
    title: "For longer walks & towpath exploring",
    intro:
      "If you’re doing Hirst Wood, Shipley Glen or longer canal stretches, think more about feet and weather.",
    tips: [
      "Choose shoes or boots with decent grip for mud and wet leaves.",
      "Socks matter more than people think — blisters can ruin the day.",
      "Pack a small dry bag for phone/keys if rain is likely.",
    ],
    products: [
      {
        slug: "walking-shoes",
        name: "Water-resistant walking shoes / trail trainers",
        blurb:
          "More grip than fashion trainers, less faff than full hiking boots.",
        whyHere:
          "Ideal for Roberts Park → Hirst Wood loops or Shipley Glen paths that can get muddy.",
        href: "#",
        tag: "Most useful",
      },
      {
        slug: "walking-socks",
        name: "Cushioned walking socks (multi-pack)",
        blurb: "Stops rubbing on longer days and helps with temperature.",
        whyHere:
          "Great for canal out-and-back walks or if you’re doing a full day around the village.",
        href: "#",
      },
      {
        slug: "lightweight-rain-jacket",
        name: "Packable waterproof jacket",
        blurb:
          "Folds into its own pocket and lives in your bag until you need it.",
        whyHere:
          "Perfect for unpredictable Saltaire skies; you can still sit outside at cafés or in Roberts Park.",
        href: "#",
        tag: "All seasons",
      },
    ],
  },
  {
    id: "kids",
    title: "Coming with kids",
    intro:
      "Between Roberts Park, the river, playgrounds and trains, kids usually love Saltaire — but they do better with snacks, layers and somewhere to sit.",
    tips: [
      "Dress kids in layers; wind off the river can be chilly even on bright days.",
      "Snacks and wipes solve 80% of small dramas.",
      "A small picnic blanket turns any patch of grass into a base.",
    ],
    products: [
      {
        slug: "picnic-blanket",
        name: "Foldable picnic blanket",
        blurb:
          "Water-resistant underside, rolls up with a handle or strap.",
        whyHere:
          "Makes Roberts Park lawns, canal banks or Shipley Glen a lot more comfortable for snack breaks.",
        href: "#",
        tag: "Family staple",
      },
      {
        slug: "snack-boxes",
        name: "Leakproof snack boxes",
        blurb:
          "Little containers for fruit, crackers, bits they actually eat.",
        whyHere:
          "Saves queuing every time someone is hungry; ideal for the train or park benches.",
        href: "#",
      },
      {
        slug: "compact-power-bank",
        name: "Compact power bank",
        blurb:
          "Keeps phones alive for trains, tickets, maps and kid entertainment.",
        whyHere:
          "Useful if you’re filming in Salts Mill / park and still need battery for the ride home.",
        href: "#",
        tag: "Nice-to-have",
      },
    ],
  },
  {
    id: "dogs",
    title: "Bringing the dog",
    intro:
      "Saltaire and Shipley are very dog-friendly with the canal, woods and park — but water, towels and leads make a big difference.",
    tips: [
      "Use a shorter lead near the canal and roads; extendable ones can be risky.",
      "Pack water for dogs as well as humans, especially on warm days.",
      "Bring a towel if they’re anywhere near the river or muddy paths.",
    ],
    products: [
      {
        slug: "collapsible-bowl",
        name: "Collapsible dog bowl",
        blurb:
          "Clips onto a bag or lead and folds flat when you’re walking.",
        whyHere:
          "Perfect for water stops on the towpath or in Roberts Park without having to improvise.",
        href: "#",
        tag: "Dog essential",
      },
      {
        slug: "dog-towel",
        name: "Microfibre dog towel",
        blurb:
          "Quick-dry towel that actually absorbs the mud and river water.",
        whyHere:
          "Very handy if they decide the River Aire is irresistible just before you go home.",
        href: "#",
      },
      {
        slug: "poo-bag-dispenser",
        name: "Poo bag dispenser with spare rolls",
        blurb:
          "Clips to lead/bag so you’re not patting pockets every five minutes.",
        whyHere:
          "Good for longer routes where bins are more spaced out.",
        href: "#",
      },
    ],
  },
  {
    id: "winter",
    title: "Winter, rain & darker evenings",
    intro:
      "Shorter days and wet towpaths are normal here. A couple of visibility and warmth tweaks make late-afternoon visits much nicer.",
    tips: [
      "Check sunset time; it gets dark fast behind the mill and trees.",
      "Grip and warm layers matter more than umbrellas in proper rain.",
      "Small lights/reflective bits help if you’re walking back to Shipley.",
    ],
    products: [
      {
        slug: "beanie",
        name: "Warm beanie / hat",
        blurb:
          "Nothing fancy, just something that keeps wind off your ears.",
        whyHere:
          "The canal and river get breezy; you’ll feel the difference on winter laps between Saltaire and Shipley.",
        href: "#",
      },
      {
        slug: "gloves",
        name: "Touchscreen gloves",
        blurb:
          "Keeps fingers warm while you still use your phone for photos and maps.",
        whyHere:
          "Good for winter markets, Salts Mill visits and evening walks.",
        href: "#",
      },
      {
        slug: "clip-on-light",
        name: "Small clip-on light / reflector",
        blurb:
          "Clips to bag or coat for a bit of extra visibility in dim light.",
        whyHere:
          "Handy if you’re finishing a canal walk closer to dusk, especially nearer Shipley.",
        href: "#",
        tag: "Safety",
      },
    ],
  },
];

/* ------------------------------- UI helpers ------------------------------- */

function SectionHeading({
  id,
  children,
}: {
  id?: string;
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

function Small({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs text-gray-500 ${className || ""}`}>{children}</p>;
}

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
        <li>
          <Link
            href="/plan"
            className="underline underline-offset-4 hover:text-black"
          >
            Plan your visit
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          What to bring
        </li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <span>Plan your visit</span>
            <span className="h-1 w-1 rounded-full bg-emerald-700" />
            <span>Realistic kit list</span>
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            What to bring for Saltaire &amp; Shipley
          </h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A simple, non-spammy packing list for Saltaire &amp; Shipley:
            essentials, longer walks, kids, dogs and winter visits. With a few
            example products on Amazon if you need to buy something before you
            come.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Day trips &amp; walks</li>
            <li className="badge">Kids &amp; dogs friendly</li>
            <li className="badge">Affiliate links clearly labelled</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#essentials" className="btn btn-primary">
              Start with essentials
            </a>
            <a href="#walks" className="btn btn-outline">
              Gear for walks
            </a>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3">
            <p className="text-xs text-amber-900">
              {AFFILIATE_NOTE}
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          <Image
            src="/images/walks-riverside.png"
            alt="Walkers on the canal and river between Saltaire and Shipley"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}

function OnThisPage() {
  const items = [
    { href: "#essentials", label: "Essentials for any visit" },
    { href: "#walks", label: "For longer walks" },
    { href: "#kids", label: "With kids" },
    { href: "#dogs", label: "With dogs" },
    { href: "#winter", label: "Winter & rainy days" },
    { href: "#faq", label: "FAQ & small print" },
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
                href={i.href}
                className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
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

/* --------------------------- Product card UI --------------------------- */

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm transition hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {product.name}
          </h3>
          {product.tag && <span className="badge">{product.tag}</span>}
        </div>
        <p className="mt-1 text-sm text-gray-700">{product.blurb}</p>
        <p className="mt-2 text-xs text-gray-600">
          <span className="font-semibold">Why here:</span> {product.whyHere}
        </p>
        {product.note && (
          <p className="mt-1 text-[11px] text-gray-500">{product.note}</p>
        )}
      </div>
      <div className="mt-3">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-emerald-600 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50"
        >
          View on Amazon
          <span className="ml-1 text-[11px] text-gray-500">(affiliate)</span>
        </a>
      </div>
    </article>
  );
}

/* ------------------------------- Sections ------------------------------- */

function GearSection({ section }: { section: Section }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id={`${section.id}-title`}>
        {section.title}
      </SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">{section.intro}</p>

      {section.tips.length > 0 && (
        <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-sm">
          <h3 className="text-sm font-semibold">Quick tips</h3>
          <ul className="mt-1 list-disc pl-5">
            {section.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {section.products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Do I need to buy anything before visiting?",
      a: "Not really. You can have a good day in Saltaire & Shipley with things you already own. The products here are just examples if you’re missing something or prefer to order online.",
    },
    {
      q: "Are these recommendations sponsored?",
      a: "Links to Amazon are affiliate links, which means we may earn a small commission if you buy via our link. It doesn’t change what you pay, and we only include items that make sense for local days out.",
    },
    {
      q: "Is this page giving packing rules?",
      a: "No. It’s just practical suggestions based on living here and walking these routes a lot. You know your own health and needs best.",
    },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="container mx-auto max-w-7xl px-4 py-10"
    >
      <SectionHeading id="faq-title">
        Small print &amp; quick questions
      </SectionHeading>
      <div className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqs.map((f, i) => (
          <details key={f.q} className="group p-5 open:bg-gray-50">
            <summary className="cursor-pointer list-none text-lg font-medium">
              <span className="mr-2 text-gray-400">Q{i + 1}.</span>
              {f.q}
            </summary>
            <p className="mt-2 max-w-prose text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      <Small className="mt-3">
        Always double-check product details, sizes and reviews on Amazon before
        buying. We can’t guarantee stock, pricing or suitability.
      </Small>
    </section>
  );
}

/* ------------------------------ JSON-LD ------------------------------ */

function JsonLd() {
  const base = site.url;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "What to bring for Saltaire & Shipley",
    url: `${base}/plan/what-to-bring`,
    itemListElement: SECTIONS.flatMap((s, iSection) =>
      s.products.map((p, iProd) => ({
        "@type": "ListItem",
        position: iSection * 10 + iProd + 1,
        name: p.name,
        description: p.blurb,
        url: `${base}/plan/what-to-bring#${s.id}`,
      }))
    ),
  };

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}

/* -------------------------------- Page -------------------------------- */

export default function WhatToBringPage() {
  return (
    <>
      <Breadcrumbs />
      <Hero />
      <OnThisPage />
      {SECTIONS.map((s) => (
        <GearSection key={s.id} section={s} />
      ))}
      <FaqSection />
      <RelatedLinks
        exclude={["/plan/what-to-bring"]}
        title="More Saltaire & Shipley planning guides"
      />
      <JsonLd />
    </>
  );
}
