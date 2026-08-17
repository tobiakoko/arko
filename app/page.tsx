import Link from 'next/link'
import { SITE } from '@/lib/site'
import MapPackCard from '@/components/MapPackCard'
import HomeCaptureForm from '@/components/HomeCaptureForm'
import JsonLd from '@/components/JsonLd'

const VALUE_CARDS = [
  {
    title: 'Show up on Google',
    body: 'In the map pack for \u201Cchurch near me [city]\u201D — typically visible in 30\u201390 days.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Welcome guests',
    body: 'A Plan Your Visit page with service times, directions, and what to expect — a first-timer never has to email you to figure out Sunday.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 8l9-5 9 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" strokeLinejoin="round" />
        <path d="M8 21v-8h8v8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Own everything',
    body: 'Your site and domain are yours from day one. Leave anytime after the initial term — your site leaves with you.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="4" y="9" width="16" height="11" rx="2" />
        <path d="M8 9V6a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
]

const PLAN_STEPS = [
  { step: '1', title: 'Take the free 5-min Scorecard', body: 'Answer 10 questions. Get your visibility score and a personalized fix-it list — free, whether or not you ever hire us.' },
  { step: '2', title: '15-min call + custom plan', body: 'We look at your church\u2019s actual presence and tell you exactly what we\u2019d do, in plain English.' },
  { step: '3', title: 'Guests start finding you', body: 'We build it, you own it, and we keep it current. Map-pack visibility typically shows in 30\u201390 days.' },
]

const AGREEMENT = [
  { title: 'You own your site and domain from day one', body: 'The keys are yours from the first invoice — not after a buyout, not when you complain loudly enough.' },
  { title: 'Month-to-month after the initial term', body: 'Stay because the work is good, not because leaving is expensive. Cancel anytime after the initial term — no retention maze.' },
  { title: '90-day visibility guarantee', body: 'No measurable improvement in your Google visibility within 90 days? Your next month is free.' },
  { title: 'Plain-English monthly reports', body: 'One page your board can read: what we did, what changed, what\u2019s next. No jargon, no surprise line items.' },
]

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arko Media Labs',
  description: 'Custom church websites and local visibility for DFW churches. You own your site, month-to-month, with a 90-day visibility guarantee.',
  url: SITE.url,
  email: SITE.contact.email,
  areaServed: ['Frisco', 'McKinney', 'Lewisville', 'Garland', 'Mesquite', 'Dallas–Fort Worth'],
  priceRange: '$1,500–$3,000 builds · $97–$200/mo care',
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusiness} />

      <section className="container-site grid items-center gap-12 pb-24 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-20">
        <div>
          <p className="type-eyebrow hero-rise" style={{ animationDelay: '0ms' }}>
            Web Design &amp; Local Marketing · Dallas–Fort Worth
          </p>
          <h1 className="type-h1 mt-5 hero-rise" style={{ animationDelay: '80ms' }}>
            Help first-time guests find your church.
          </h1>
          <p className="type-lead mt-6 max-w-xl hero-rise" style={{ animationDelay: '160ms' }}>
            Custom church websites that show up when families search &ldquo;church near
            me&rdquo; — you own it, month-to-month, with a 90-day visibility guarantee.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row hero-rise" style={{ animationDelay: '240ms' }}>
            <Link href="/scorecard" className="btn btn-primary">
              {SITE.cta}
            </Link>
            <a href={SITE.contact.callHref} className="btn btn-secondary">
              {SITE.ctaCall}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3 hero-rise" style={{ animationDelay: '320ms' }}>
            <li className="chip">
              <span className="type-metric text-signal-500">2</span>
              <span className="chip-label">churches served</span>
            </li>
            <li className="chip">
              <span className="type-metric text-signal-500">CPACC</span>
              <span className="chip-label">certified accessibility</span>
            </li>
            <li className="chip">
              <span className="type-metric text-signal-500">1 day</span>
              <span className="chip-label">reply SLA</span>
            </li>
          </ul>
        </div>
        <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto hero-rise" style={{ animationDelay: '200ms' }}>
          <MapPackCard />
        </div>
      </section>

      <section className="border-y border-line bg-surface py-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
          <h2 className="type-h2 max-w-xl">
            Nobody searches a church to read about it. They&rsquo;re deciding where to go
            this Sunday.
          </h2>
          <p className="type-body measure">
            Last Sunday, families searched &ldquo;church near me&rdquo; in your city. The
            ones who found a church found the one that shows up on Google. If your church
            isn&rsquo;t there, it isn&rsquo;t an option — no matter how welcoming the people
            inside are.
          </p>
        </div>
      </section>

      <section className="container-site py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {VALUE_CARDS.map((card) => (
            <div key={card.title} className="card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-signal-50 text-signal-500" aria-hidden>
                {card.icon}
              </span>
              <h3 className="type-h3 mt-6">{card.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="type-eyebrow">Who you&rsquo;d be working with</p>
          <h2 className="type-h2 mt-4">
            &ldquo;I&rsquo;ve seen great churches that nobody can find online.&rdquo;
          </h2>
          <p className="type-body measure mx-auto mt-6">
            I&rsquo;m the founder of Arko Media Labs — one senior person, not a rotating
            pod. I&rsquo;ve already served two churches end-to-end (DLBC Tampa and DCLM
            Lewisville), I&rsquo;m IAAP CPACC-certified in accessibility, and I build and
            manage your site personally. If I can&rsquo;t fix it, I&rsquo;ll tell you
            straight — that&rsquo;s the deal.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-24">
        <div className="container-site">
          <p className="type-eyebrow text-center">The plan — three steps</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PLAN_STEPS.map((item) => (
              <div key={item.step} className="card p-8">
                <span className="type-metric text-4xl text-signal-500">{item.step}</span>
                <h3 className="type-h3 mt-4">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-24">
        <div className="mx-auto max-w-4xl rounded-[10px] border border-signal-200 bg-signal-50 p-8 sm:p-12">
          <p className="type-eyebrow">The agreement — before you sign anything</p>
          <h2 className="type-h2 mt-4">What you own, what you pay, and how you leave.</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {AGREEMENT.map((item) => (
              <div key={item.title}>
                <h3 className="type-h3 text-[1.0625rem]">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="type-eyebrow">Proof — under construction, on purpose</p>
          <h2 className="type-h2 mt-4">Case studies are coming after our next two builds.</h2>
          <p className="type-body measure mx-auto mt-6">
            We publish numbers you can check, not quotes we invented. Our first two case
            studies — DLBC Tampa and DCLM Lewisville — are being documented now, and
            they&rsquo;ll go up here with real before/after metrics. Until then, the
            guarantee stands on its own.
          </p>
          <Link href="/case-studies" className="btn btn-secondary mt-8">
            See what&rsquo;s there now
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="type-eyebrow">Start here — it&rsquo;s free</p>
            <h2 className="type-h2 mt-4">How visible is your church on Google?</h2>
            <p className="type-body mt-4">
              Answer 10 questions in about 3 minutes — get your score and a personalized
              fix-it list. No call required, no pressure after.
            </p>
          </div>
          <div className="mt-10">
            <HomeCaptureForm />
          </div>
        </div>
      </section>

      <section className="container-site py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="type-h2">Ready to help more guests find you?</h2>
          <p className="type-body mt-4">
            Take the scorecard, or skip straight to a conversation — we reply within one
            business day.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/scorecard" className="btn btn-primary">
              {SITE.cta}
            </Link>
            <a href={SITE.contact.callHref} className="btn btn-secondary">
              {SITE.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}