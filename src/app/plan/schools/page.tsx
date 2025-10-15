// src/app/plan/schools/page.tsx
// Schools in/around Saltaire — applying, timelines, in-year moves & SEND (server-only, static)
// - No client components or event handlers (great CWV & stability)
// - Sections: Overview, Key Dates, Step-by-step (HowTo), Primary vs Secondary,
//   Priority Areas (catchment), In-year moves, Appeals, SEND/EHCP, Transport,
//   Useful links, FAQs, CTA
// - JSON-LD: WebPage + BreadcrumbList + HowTo + FAQPage + ItemList(resources)
// - Outbound links: first-party only (Bradford Council / Ofsted / National Rail)

import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/config/site'

export const dynamic = 'error'

export const metadata: Metadata = {
  title:
    'School admissions for Saltaire — timelines, catchments, in-year moves & SEND (local guide)',
  description:
    'How to apply for Bradford Council school places from Saltaire: application timelines, priority area maps, in-year transfers, appeals, SEND/EHCP routes and trusted links.',
  alternates: { canonical: `${site.url}/plan/schools` },
  openGraph: {
    title: 'School admissions for Saltaire — practical local guide',
    description:
      'Step-by-step admissions, priority area maps (“catchments”), in-year moves, appeals and SEND/EHCP support with links to official Bradford sources.',
    url: `${site.url}/plan/schools`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image' },
}

/* --------------------------------- Types ---------------------------------- */

type Step = { title: string; body: string }
type Milestone = { label: string; month: string; note?: string }
type Resource = { name: string; href: string; note?: string }
type QA = { q: string; a: string }

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold tracking-tight md:text-3xl anchor-offset">
      {children}
    </h2>
  )
}

/* --------------------------------- Data ----------------------------------- */

// Dates are indicative; always check the Council pages linked in “Official links”.
const KEY_DATES: Milestone[] = [
  { label: 'Secondary applications open (Year 6)', month: 'September', note: 'Submit preferences online; read the council guide first.' },
  { label: 'Secondary deadline', month: 'Late October', note: 'Usually end of October; late applications affect chances.' },
  { label: 'Primary applications open (Reception)', month: 'Autumn', note: 'For children turning 5 the following academic year.' },
  { label: 'Primary deadline', month: 'January', note: 'Usually mid-January; late applications affect chances.' },
  { label: 'Offer day (Secondary)', month: 'March', note: 'National Offer Day — email/online letter.' },
  { label: 'Offer day (Primary)', month: 'April', note: 'National Offer Day — email/online letter.' },
  { label: 'Appeal window', month: 'Spring–Summer', note: 'Statutory deadlines apply; see Appeals section.' },
]

const HOWTO_STEPS: Step[] = [
  {
    title: 'Read the council admissions guide',
    body:
      'It explains how places are allocated, oversubscription rules, faith criteria (where relevant), how to list schools, and key deadlines.',
  },
  {
    title: 'Check priority areas & realistic options',
    body:
      'Use the council’s priority area (“catchment”) maps and last-year allocation stats to gauge where a place is realistic from your address.',
  },
  {
    title: 'Visit schools or attend open events',
    body:
      'If possible, see the school in action. For SEND questions, ask for the SENCo at visits and read the SEN Information Report.',
  },
  {
    title: 'List preferences carefully',
    body:
      'Rank schools genuinely in order. Listing fewer does not improve your chances. Include a realistic “safety” choice.',
  },
  {
    title: 'Submit the online application on time',
    body:
      'Late applications are processed later and can reduce your chance at popular schools. Keep the confirmation email/receipt.',
  },
  {
    title: 'After offers: accept, waitlist, or appeal',
    body:
      'Accept the offered place to secure it while you pursue waiting lists or appeals. You can hold an offered place and a waiting-list position simultaneously.',
  },
]

const RESOURCES: Resource[] = [
  {
    name: 'Bradford Council — School admissions: Guide for parents',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/guide-for-parents/',
    note: 'Primary & secondary admissions overview, deadlines, and travel help.',
  },
  {
    name: 'Priority admission area maps (catchments)',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/',
    note: 'Interactive maps for priority areas (where applicable).',
  },
  {
    name: 'Admission arrangements & coordinated scheme',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/admission-arrangements/',
    note: 'Official PDFs for how places are allocated each year.',
  },
  {
    name: 'In-year applications (moving school mid-year)',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/in-year-applications/',
    note: 'Process, forms and response time for transfers.',
  },
  {
    name: 'Appeals — how to make one',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/make-an-appeal/',
    note: 'Statutory timetable and what happens at an appeal hearing.',
  },
  {
    name: 'Appeal form (PDF)',
    href: 'https://www.bradford.gov.uk/media/z2hh5por/appeal-form.pdf',
    note: 'Use this to lodge a formal appeal (within deadlines).',
  },
  {
    name: 'Saltaire Primary — Ofsted / contact',
    href: 'https://www.saltaireprimaryschool.co.uk/web/ofsted/420413',
    note: 'School contact and latest Ofsted report link.',
  },
  {
    name: 'Ofsted profile — Saltaire Primary (official)',
    href: 'https://reports.ofsted.gov.uk/provider/21/107270',
    note: 'Regulator profile with inspection reports.',
  },
  {
    name: 'SEND — EHCP & assessment (Bradford Local Offer)',
    href: 'https://localoffer.bradford.gov.uk/kb5/bradford/directory/service.page?id=cCtkWJH-QUY&localofferchannel=181',
    note: 'EHCP process & contacts; use SEND team instead of in-year form.',
  },
  {
    name: 'About school admissions (contact the admissions team)',
    href: 'https://www.bradford.gov.uk/education-and-skills/school-admissions/about-school-admissions/',
    note: 'Who processes applications, general enquiries.',
  },
  {
    name: 'Saltaire station — accessibility & facilities',
    href: 'https://www.nationalrail.co.uk/stations/saltaire/',
    note: 'Step-free category and assistance info.',
  },
]

const FAQS: QA[] = [
  {
    q: 'How do catchments work in Bradford?',
    a: 'Some schools use a priority admission area (similar to “catchments”). Check the council priority maps and each school’s admission criteria. Living in a priority area does not guarantee a place.',
  },
  {
    q: 'Does listing fewer schools improve my chances?',
    a: 'No. Always rank schools in genuine order of preference and include a realistic option. The system does not “penalise” you for listing more.',
  },
  {
    q: 'We moved to Saltaire after the deadline — what now?',
    a: 'Use the in-year application route. If your child has an EHCP, contact the SEND/EHCP team instead of using the in-year form.',
  },
  {
    q: 'Can I be on a waiting list and keep my offered place?',
    a: 'Yes. Accept your offered place to secure education while you remain on a waiting list or prepare an appeal.',
  },
  {
    q: 'How long do in-year decisions take?',
    a: 'The council aims to issue a decision within the statutory timescale (commonly up to 15 school days). Appeals for in-year applications are heard within 30 school days of lodging.',
  },
  {
    q: 'My child has SEND — which route?',
    a: 'If your child has an EHCP or is being assessed, admissions are coordinated with the SEND team rather than the standard in-year form. Speak to the SEND service and the school SENCo.',
  },
  {
    q: 'What about new Ofsted ratings?',
    a: 'Read the full inspection reports (not just headlines) on the Ofsted profile. National policy on reporting formats is evolving — always refer to the latest report text for context.',
  },
]

/* -------------------------------- Components ------------------------------- */

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-600">
      <ol className="breadcrumbs">
        <li>
          <Link className="underline underline-offset-4 hover:text-black" href="/">
            Home
          </Link>
        </li>
        <span className="sep">›</span>
        <li>
          <Link className="underline underline-offset-4 hover:text-black" href="/plan">
            Plan
          </Link>
        </li>
        <span className="sep">›</span>
        <li aria-current="page" className="text-gray-800">
          Schools
        </li>
      </ol>
    </nav>
  )
}

function IntroHero() {
  return (
    <header className="border-b border-gray-200/70 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Schools & admissions from Saltaire</h1>
          <p className="mt-4 max-w-prose text-lg text-gray-700">
            A practical guide to applying for school places from Saltaire — key dates, priority areas (“catchments”),
            in-year moves, appeals and SEND routes. We link only to official sources and keep this page evergreen.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="badge">Official links</li>
            <li className="badge">Step-by-step</li>
            <li className="badge">In-year & SEND</li>
          </ul>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <p className="text-sm text-gray-700">
              New to the area? Pair this with our{' '}
              <Link className="underline underline-offset-4" href="/schools-and-housing">
                Schools & Housing overview
              </Link>{' '}
              and plan journeys via{' '}
              <a
                className="underline underline-offset-4"
                href="https://www.nationalrail.co.uk/stations/saltaire/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saltaire station
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function KeyDates() {
  return (
    <section id="dates" aria-labelledby="dates-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="dates-title">Key dates (typical cycle)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Use this as a planning sketch and always verify deadlines on the Bradford Council admissions pages before you apply.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {KEY_DATES.map((d) => (
          <div key={d.label} className="card">
            <div className="card-body">
              <h3 className="text-lg font-semibold">{d.label}</h3>
              <p className="mt-1 text-gray-700">
                <span className="badge">{d.month}</span>
              </p>
              {d.note ? <p className="mt-2 text-sm text-gray-700">{d.note}</p> : null}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-gray-500">Tip: set calendar reminders a week before each deadline.</p>
    </section>
  )
}

function HowToApply() {
  return (
    <section id="howto" aria-labelledby="howto-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="howto-title">How to apply (step-by-step)</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p className="mt-2 text-gray-700">
            Applications are coordinated by Bradford Council. You’ll submit ranked preferences online. Places are
            allocated using each school’s published admission arrangements.
          </p>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Documents to gather</h3>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>Proof of address (as requested by the council).</li>
              <li>Any faith or supplementary forms (where relevant).</li>
              <li>For SEND/EHCP: contact the SEND team rather than standard forms.</li>
            </ul>
          </div>
        </div>
      </div>

      <ol className="mt-6 grid gap-4">
        {HOWTO_STEPS.map((s, i) => (
          <li key={s.title} className="card">
            <div className="card-body">
              <div className="badge">Step {i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-gray-700">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
        <p className="text-sm text-gray-700">
          Primary vs secondary processes are similar, but deadlines differ. Start early and read the council booklet in full.
        </p>
      </div>
    </section>
  )
}

function PrimaryVsSecondary() {
  return (
    <section id="phases" aria-labelledby="phases-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="phases-title">Primary vs secondary — what’s different?</SectionHeading>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Primary (Reception)</h3>
            <p className="mt-2 text-gray-700">
              You’ll apply in the autumn/winter before your child starts school. Some schools have a priority area.
              Consider realistic choices within easy travel from Saltaire.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/guide-for-parents/" target="_blank" rel="noopener noreferrer">
                  Council “Guide for parents”
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Secondary (Year 7)</h3>
            <p className="mt-2 text-gray-700">
              Applications open in September of Year 6. Open evenings help you compare travel, curriculum and SEND provision.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/guide-for-parents/" target="_blank" rel="noopener noreferrer">
                  Secondary admissions booklet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function PriorityAreas() {
  return (
    <section id="priority-areas" aria-labelledby="pa-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="pa-title">Priority areas (“catchments”)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Some Bradford schools use a priority area as part of their oversubscription criteria. Use the council’s map
        pages to see the boundary for a school and always read the school’s full admission arrangements.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Check the map</h3>
            <p className="mt-2 text-gray-700">
              Open the official priority area maps and search by school name. Boundaries can change — always rely on the latest council page.
            </p>
            <p className="mt-2">
              <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/school-priority-admission-area-maps/" target="_blank" rel="noopener noreferrer">
                Priority area maps (Bradford Council)
              </a>
            </p>
          </div>
        </div>
        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Admissions criteria</h3>
            <p className="mt-2 text-gray-700">
              Each school’s policy states how places are ranked (looked-after children, siblings, distance, etc.). Read the official PDFs before applying.
            </p>
            <p className="mt-2">
              <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/admission-arrangements/" target="_blank" rel="noopener noreferrer">
                Admission arrangements & coordinated scheme
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function InYearMoves() {
  return (
    <section id="in-year" aria-labelledby="inyear-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="inyear-title">In-year moves (transfers mid-year)</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Moving into Saltaire or changing schools during the year? Use the council’s in-year process. If your child has an
        EHCP, contact the SEND team instead of completing the standard in-year form.
      </p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="callout">
          <h3 className="text-lg font-semibold">How it works</h3>
          <ul className="mt-2 list-disc pl-5 text-gray-700">
            <li>Talk to your current school first about the reasons for transfer.</li>
            <li>Submit the in-year application via Bradford Council.</li>
            <li>Keep an eye on your email for a decision letter; statutory timescales apply.</li>
          </ul>
          <p className="mt-2">
            <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/in-year-applications/" target="_blank" rel="noopener noreferrer">
              In-year applications guidance
            </a>
          </p>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">SEND/EHCP</h3>
            <p className="mt-2 text-gray-700">
              For pupils with an EHCP (or where assessment is in progress), contact the SEND team directly to discuss placement and support rather than submitting the standard in-year form.
            </p>
            <p className="mt-2">
              <a className="underline underline-offset-4" href="https://localoffer.bradford.gov.uk/kb5/bradford/directory/service.page?id=cCtkWJH-QUY&localofferchannel=181" target="_blank" rel="noopener noreferrer">
                Bradford Local Offer — EHCP
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Appeals() {
  return (
    <section id="appeals" aria-labelledby="appeals-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="appeals-title">If you didn’t get your preferred school</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        You can accept the offered place, join waiting lists, and appeal. Appeals are heard by an independent panel, and
        statutory timescales apply.
      </p>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Appeal process</h3>
            <p className="mt-2 text-gray-700">
              Read the council guidance carefully, gather evidence (e.g., distance, sibling links, medical/social reasons),
              and submit the appeal within the published window.
            </p>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/education-and-skills/school-admissions/make-an-appeal/" target="_blank" rel="noopener noreferrer">
                  Appeals guidance (Bradford Council)
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="https://www.bradford.gov.uk/media/z2hh5por/appeal-form.pdf" target="_blank" rel="noopener noreferrer">
                  Appeal form (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card card-muted">
          <div className="card-body">
            <h3 className="text-lg font-semibold">Waiting lists</h3>
            <p className="mt-2 text-gray-700">
              After offer day, waiting lists operate according to the same admissions criteria — they are not “first come, first served”. Keep your offered place while you wait.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">
        In-year appeals are typically heard within 30 school days of being lodged.
      </p>
    </section>
  )
}

function TransportAndJourneys() {
  return (
    <section id="transport" aria-labelledby="transport-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="transport-title">Journeys from Saltaire</SectionHeading>
      <p className="mt-2 max-w-prose text-gray-700">
        Saltaire station sits at the heart of the village with frequent trains along the Airedale Line. Many families
        also walk or cycle via the canal towpath. Check live accessibility information before you plan a new commute.
      </p>
      <div className="mt-3">
        <a
          className="underline underline-offset-4"
          href="https://www.nationalrail.co.uk/stations/saltaire/"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Rail — Saltaire station facilities & accessibility
        </a>
      </div>
    </section>
  )
}

function UsefulLinks() {
  return (
    <section id="links" aria-labelledby="links-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="links-title">Official links & resources</SectionHeading>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className="group card card-hover">
            <div className="card-body">
              <h3 className="text-lg font-semibold underline decoration-gray-300 underline-offset-4 group-hover:decoration-black">
                {r.name}
              </h3>
              {r.note ? <p className="mt-1 text-sm text-gray-700">{r.note}</p> : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faqs" aria-labelledby="faq-title" className="container mx-auto max-w-7xl px-4 py-10">
      <SectionHeading id="faq-title">Quick answers (Saltaire → Bradford admissions)</SectionHeading>
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
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  )
}

function CTA() {
  return (
    <section aria-label="Plan more" className="border-t border-b border-gray-200 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Next: make weekends easy</h2>
            <p className="mt-2 max-w-prose text-gray-700">
              Explore the village like a local: where to park, what to do, and step-free routes.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/schools-and-housing" className="btn btn-primary">Schools & Housing</Link>
              <Link href="/parking" className="btn btn-outline">Parking</Link>
              <Link href="/walks" className="btn btn-ghost">Walks</Link>
              <Link href="/food-drink" className="btn btn-muted">Eat & Drink</Link>
            </div>
          </div>
          <div className="callout">
            <h3 className="text-lg font-semibold">Have a correction or update?</h3>
            <p className="mt-2 text-gray-700">
              Let us know and we’ll verify and update quickly. See{' '}
              <Link className="underline underline-offset-4" href="/contribute">
                Contribute
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- JSON-LD --------------------------------- */

function JsonLd() {
  const base = site.url

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'School admissions for Saltaire',
    url: `${base}/plan/schools`,
    description:
      'Apply for school places from Saltaire: timelines, catchments/priority areas, in-year moves, appeals and SEND/EHCP routes with official links.',
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
      { '@type': 'ListItem', position: 2, name: 'Plan', item: `${base}/plan` },
      { '@type': 'ListItem', position: 3, name: 'Schools', item: `${base}/plan/schools` },
    ],
  }

  const howto = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Apply for a school place via Bradford Council',
    step: HOWTO_STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
    supply: [{ '@type': 'HowToSupply', name: 'Proof of address, supplementary forms (where applicable)' }],
    tool: [{ '@type': 'HowToTool', name: 'Online admissions portal (Bradford Council)' }],
  }

  const resources = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Official school admissions resources (Bradford / Ofsted)',
    numberOfItems: RESOURCES.length,
    itemListElement: RESOURCES.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: r.href,
      name: r.name,
      description: r.note,
    })),
  }

  // eslint-disable-next-line react/no-danger
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resources) }} />
    </>
  )
}

/* --------------------------------- Page ----------------------------------- */

export default function PlanSchoolsPage() {
  return (
    <>
      <Breadcrumbs />
      <IntroHero />
      <KeyDates />
      <HowToApply />
      <PrimaryVsSecondary />
      <PriorityAreas />
      <InYearMoves />
      <Appeals />
      <TransportAndJourneys />
      <UsefulLinks />
      <FAQ />
      <CTA />
      <JsonLd />
    </>
  )
}
