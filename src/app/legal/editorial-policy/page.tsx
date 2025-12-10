// src/app/legal/editorial-policy/page.tsx
// Editorial Policy — SaltaireGuide.uk
// - App Router (server component only), static HTML, CWV-first
// - Covers: guides, directory, news, monetisation, AI, corrections
// - JSON-LD: WebPage + BreadcrumbList + Organization (publishingPrinciples) + Speakable

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title: 'Editorial Policy — Saltaire Guide',
  description:
    'How SaltaireGuide.uk works: what we cover, how we source and verify info, how we handle local news and monetisation (featured listings, sponsored content, affiliate links), and how to request corrections.',
  alternates: { canonical: `${site.url}/legal/editorial-policy` },
  openGraph: {
    title: 'Editorial Policy — Saltaire Guide',
    description:
      'Our publishing principles for guides, local services and news in Saltaire & Shipley: sourcing, verification, independence, commercial disclosures, images and corrections.',
    url: `${site.url}/legal/editorial-policy`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="anchor-offset text-2xl font-bold tracking-tight md:text-3xl">
      {children}
    </h2>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg font-semibold tracking-tight">{children}</h3>
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link href="/" className="underline underline-offset-4 hover:text-black">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Editorial policy
        </li>
      </ol>
    </nav>
  )
}

function Intro() {
  const reviewed = '2025-12-10'

  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-start gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Editorial Policy</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            {site.name} is an independent guide and news hub for Saltaire &amp; Shipley. We walk the routes, use the
            trains, read the council papers and then write practical, honest guides and updates — with clear labelling
            when money is involved.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Hyperlocal: Saltaire &amp; Shipley</li>
            <li className="badge">Guides + news + directory</li>
            <li className="badge">Last reviewed: {reviewed}</li>
          </ul>
          <p className="mt-3 text-xs text-gray-500">
            This page explains how we choose what to cover, how we verify it, how we use advertising and affiliate
            links, how AI fits in, and how to ask for corrections.
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <div className="text-lg font-semibold">Quick links</div>
            <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-gray-700">
              <li>
                <a href="#coverage" className="underline underline-offset-4">
                  What we cover (and don&apos;t)
                </a>
              </li>
              <li>
                <a href="#sourcing" className="underline underline-offset-4">
                  Sourcing &amp; citations
                </a>
              </li>
              <li>
                <a href="#verification" className="underline underline-offset-4">
                  Verification &amp; updates
                </a>
              </li>
              <li>
                <a href="#independence" className="underline underline-offset-4">
                  Independence &amp; monetisation
                </a>
              </li>
              <li>
                <a href="#commercial" className="underline underline-offset-4">
                  Featured listings &amp; paid spotlights
                </a>
              </li>
              <li>
                <a href="#affiliates" className="underline underline-offset-4">
                  Affiliate &amp; product links
                </a>
              </li>
              <li>
                <a href="#ai" className="underline underline-offset-4">
                  AI usage disclosure
                </a>
              </li>
              <li>
                <a href="#images" className="underline underline-offset-4">
                  Images &amp; permissions
                </a>
              </li>
              <li>
                <a href="#corrections" className="underline underline-offset-4">
                  Corrections &amp; right to reply
                </a>
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Related:{' '}
              <Link className="underline underline-offset-4" href="/legal/corrections">
                Corrections policy
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/legal/privacy">
                Privacy
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/about">
                About
              </Link>
              ,{' '}
              <Link className="underline underline-offset-4" href="/contact">
                Contact
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function Coverage() {
  return (
    <section id="coverage" aria-labelledby="coverage-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="coverage-title">What we cover (and what we don&apos;t)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        SaltaireGuide covers four main things:{' '}
        <strong>guides</strong> (walks, parking, planning your visit), <strong>local services</strong> (our directory),
        <strong> news &amp; roundups</strong> (Saltaire &amp; Shipley updates) and <strong>business spotlights</strong>{' '}
        (clearly labelled commercial content).
      </p>

      <SubHeading>What we focus on</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>Practical information for visitors and locals: routes, parking, access, timings, costs.</li>
        <li>Local services that actually operate in or around Saltaire &amp; Shipley.</li>
        <li>
          Local news and summaries that affect everyday life: transport changes, planning decisions, events, new
          openings and changes to public spaces.
        </li>
        <li>Clear &quot;how to&quot; guides (e.g. parking, getting here, step-free basics).</li>
      </ul>

      <SubHeading>What we don&apos;t aim to be</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>We are not a live crime / breaking news outlet.</li>
        <li>We do not publish rumours, unverified allegations or drama pulled from social media.</li>
        <li>We do not chase national clickbait stories unrelated to Saltaire &amp; Shipley.</li>
        <li>We do not run advertorial that pretends to be neutral news — paid content is labelled.</li>
      </ul>
    </section>
  )
}

function Sourcing() {
  return (
    <section id="sourcing" aria-labelledby="sourcing-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="sourcing-title">Sourcing &amp; citations</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We favour <strong>primary sources</strong> and our own on-the-ground checks. When we rely on other sources, we
        say so in plain English and link where helpful.
      </p>
      <SubHeading>For guides &amp; local services</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>On-site signs: parking plates, opening hours, access notes, step-free routes.</li>
        <li>Menus, prices and information provided directly by venues or service owners.</li>
        <li>Official websites for venues, attractions and local services where available.</li>
      </ul>

      <SubHeading>For news &amp; roundups</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>Council papers and notices, planning portals and official consultations.</li>
        <li>Transport operator announcements (rail, bus, roads) and verified timetables.</li>
        <li>Event organisers, community groups and verified public statements.</li>
      </ul>

      <SubHeading>Local knowledge &amp; reader tips</SubHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We live in or around Saltaire/Shipley and regularly walk the routes we recommend. When readers send tips or
        corrections, we treat them as leads — we look for documentation, on-the-ground checks, or other confirmation
        before updating a page.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        If a detail is uncertain or likely to change (for example, seasonal hours or temporary works), we say so and
        avoid giving false precision.
      </p>
    </section>
  )
}

function Verification() {
  return (
    <section id="verification" aria-labelledby="verification-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="verification-title">Verification, fact-checking &amp; updates</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We care most about the pages that people rely on to plan days out or make spending decisions. Those get the most
        frequent checks and the clearest &quot;Updated&quot; notes.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>
          <strong>High-impact guides</strong> (Parking, Getting here, Walks, Salts Mill, Local services hubs) are
          reviewed regularly and whenever we become aware of a material change.
        </li>
        <li>
          <strong>News pieces</strong> are checked against at least one primary or official source wherever possible
          (for example, council documents or operator announcements).
        </li>
        <li>
          <strong>Time-sensitive info</strong> (events, temporary works) is written with clear dates and not left
          hanging as evergreen advice.
        </li>
        <li>
          <strong>Material changes</strong> to a page (not just typos) are given an &quot;Updated&quot; note near the
          top, or reflected in a news/update section.
        </li>
      </ul>
      <p className="mt-3 text-sm text-gray-600">
        Found an error? See our{' '}
        <Link className="underline underline-offset-4" href="/legal/corrections">
          Corrections policy
        </Link>{' '}
        for how to flag it and what we do next.
      </p>
    </section>
  )
}

function Independence() {
  return (
    <section id="independence" aria-labelledby="independence-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="independence-title">Editorial independence &amp; monetisation</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        SaltaireGuide is funded by a mix of our own time, local business products (e.g. featured listings), and
        occasional affiliate links or paid spotlights. Money helps keep the site running, but it doesn&apos;t buy
        positive coverage.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>
          We decide what to cover, what to write and how to order information based on usefulness to readers, not on who
          is paying.
        </li>
        <li>We do not sell positive reviews or allow businesses to approve or veto independent content.</li>
        <li>
          Paid placements (such as featured directory listings or sponsored spotlights) are{' '}
          <strong>clearly labelled</strong> and kept distinct from purely editorial pieces.
        </li>
        <li>
          We do not run scammy, auto-inserted ad units or autoplay video ads. When advertising appears, it is intentional
          and signposted.
        </li>
      </ul>
    </section>
  )
}

function Commercial() {
  return (
    <section id="commercial" aria-labelledby="commercial-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="commercial-title">Featured listings, reviews &amp; paid spotlights</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We operate a local directory and occasionally highlight businesses in more depth. Some of this is free, some is
        paid — and we label the difference.
      </p>

      <SubHeading>Free basic listings</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>Local businesses in Saltaire &amp; Shipley can request a free basic listing in relevant categories.</li>
        <li>
          Free listings include simple factual information: name, contact details, short description and (where
          applicable) a note on verification.
        </li>
        <li>
          We reserve the right to decline, edit or remove listings that don&apos;t fit the area, our standards or this
          policy.
        </li>
      </ul>

      <SubHeading>Featured / priority listings</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>
          Some businesses pay for <strong>featured</strong> or <strong>priority</strong> placement in directory
          categories (for example, being shown higher up or with a badge).
        </li>
        <li>These placements are labelled (for example: &quot;Featured&quot; or &quot;Priority listing&quot;).</li>
        <li>
          Payment for a featured slot does <strong>not</strong> buy a positive editorial review elsewhere on the site.
        </li>
      </ul>

      <SubHeading>Reviews and paid spotlights</SubHeading>
      <ul className="mt-2 list-disc pl-6 text-gray-700">
        <li>
          If we receive complimentary tickets, meals or services, we will say so on the relevant page and still write as
          if we had paid.
        </li>
        <li>
          If we publish a <strong>paid spotlight</strong> or clearly commercial feature (for example, a business profile
          in the news section), it will be labelled as such (e.g. &quot;Sponsored&quot; or &quot;Paid spotlight&quot;).
        </li>
        <li>We do not use star ratings or fake-science scoring systems for businesses or products.</li>
      </ul>
    </section>
  )
}

function Affiliates() {
  return (
    <section id="affiliates" aria-labelledby="affiliates-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="affiliates-title">Affiliate &amp; product links</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Some pages (for example, our &quot;What to bring&quot; guide) include links to products on Amazon or other
        retailers. These are usually small, practical items that genuinely help with days out in Saltaire &amp;
        Shipley.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>
          Where a link is an affiliate link, we say so near the link (for example, by marking it as{' '}
          <span className="font-mono text-xs">(affiliate)</span> or in a short note on the page.
        </li>
        <li>
          As an Amazon Associate, we earn from qualifying purchases. This does <strong>not</strong> change the price you
          pay.
        </li>
        <li>
          We only include product suggestions where they make sense for Saltaire &amp; Shipley visits (for example,
          walking shoes, picnic blankets, day bags) — not random &quot;deal&quot; posts.
        </li>
        <li>
          Affiliate links do not control which routes, venues or services we recommend. We do not hide better free
          options to push products.
        </li>
        <li>Availability, prices and delivery are controlled by the retailer; always check their page before buying.</li>
      </ul>
    </section>
  )
}

function AI() {
  return (
    <section id="ai" aria-labelledby="ai-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="ai-title">AI usage disclosure</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We use AI tools (such as large language models) to help with structure, drafts, checklists and consistency. This
        is similar to using a smart editor or co-writer — not a replacement for humans.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>Humans choose topics, angles and structure for guides, directories and news.</li>
        <li>Humans check AI-assisted drafts against real-world knowledge and local reality before publishing.</li>
        <li>We do not auto-publish AI-generated venue descriptions or news without human review.</li>
        <li>
          We do not knowingly allow AI tools to invent venues, services or quotes; if we find anything wrong, we fix it
          as soon as possible.
        </li>
      </ul>
    </section>
  )
}

function Images() {
  return (
    <section id="images" aria-labelledby="images-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="images-title">Images, maps &amp; permissions</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Most photos, diagrams and maps on SaltaireGuide are created by us while walking the area. Some may be supplied
        by local businesses or licensed from image libraries.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>Where a licence or credit is required, we provide it in the caption or near the image.</li>
        <li>
          If you own rights to an image and believe it has been used incorrectly, please contact us and we will review
          promptly.
        </li>
        <li>
          If a business supplies an image for their listing or spotlight, they are responsible for having the right to
          share it.
        </li>
      </ul>
      <p className="mt-3 text-sm text-gray-600">
        For media or reuse enquiries, please get in touch via{' '}
        <Link className="underline underline-offset-4" href="/contact">
          Contact
        </Link>
        .
      </p>
    </section>
  )
}

function Corrections() {
  return (
    <section id="corrections" aria-labelledby="corrections-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="corrections-title">Corrections &amp; right to reply</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        We would rather fix something quickly than leave it wrong. That applies to small factual details and to more
        serious issues that affect people&apos;s reputations or safety.
      </p>
      <ul className="mt-3 list-disc pl-6 text-gray-700">
        <li>
          Anyone can request a correction. The fastest route is via the dedicated form in our{' '}
          <Link className="underline underline-offset-4" href="/legal/corrections">
            Corrections policy
          </Link>
          .
        </li>
        <li>
          Obvious factual errors (e.g. hours, phone numbers, map positions) are corrected as soon as we can verify the
          correct information.
        </li>
        <li>
          If a news piece or guide has a <strong>material error</strong>, we will correct it and, where appropriate,
          add a note explaining what changed.
        </li>
        <li>
          If you or your business are the subject of a critical or sensitive mention, you may request a{' '}
          <strong>right of reply</strong>. We will consider publishing a short response or clarification where it helps
          readers understand the full picture.
        </li>
      </ul>
    </section>
  )
}

function CTA() {
  return (
    <section
      aria-label="Talk to the editors"
      className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Questions about how we work?</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Whether you&apos;re a reader, local business or partner, we&apos;re happy to explain how we source,
              verify and label content on SaltaireGuide.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Contact us
              </Link>
              <Link href="/legal/corrections" className="btn btn-outline">
                Report a correction
              </Link>
              <Link href="/about" className="btn btn-ghost">
                About the team
              </Link>
            </div>
          </div>
          <div className="card card-muted">
            <div className="card-body">
              <div className="text-lg font-semibold">Transparency</div>
              <p className="mt-2 text-gray-700">
                Our{' '}
                <Link className="underline underline-offset-4" href="/legal/privacy">
                  Privacy policy
                </Link>{' '}
                explains how messages, tips and business enquiries are handled and how long we retain data. Our{' '}
                <Link className="underline underline-offset-4" href="/legal/corrections">
                  Corrections policy
                </Link>{' '}
                covers how we triage fixes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------- JSON-LD ----------------------------------- */

function JsonLd() {
  const base = site.url

  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Editorial Policy — Saltaire Guide',
    url: `${base}/legal/editorial-policy`,
    inLanguage: 'en-GB',
    description:
      'Publishing principles for SaltaireGuide.uk, covering what we publish about Saltaire & Shipley, how we source and verify information, how monetisation works, and how to request corrections.',
    dateModified: '2025-12-10',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#coverage-title', '#independence-title'],
    },
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Editorial policy', item: `${base}/legal/editorial-policy` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    publishingPrinciples: `${base}/legal/editorial-policy`,
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    </>
  )
}

export default function EditorialPolicyPage() {
  return (
    <>
      <Breadcrumbs />
      <Intro />
      <Coverage />
      <Sourcing />
      <Verification />
      <Independence />
      <Commercial />
      <Affiliates />
      <AI />
      <Images />
      <Corrections />
      <CTA />
      <JsonLd />
    </>
  )
}
