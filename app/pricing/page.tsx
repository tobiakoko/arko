import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent starting-at pricing: custom church builds $2,500+, care plans $99/mo, Google Ad Grant setup and management. You own everything.',
}

const builds = [
  {
    name: 'Essential',
    price: '$2,500–$3,500',
    note: 'The church site that fixes Sunday morning',
    items: [
      '8–12 custom pages',
      'Plan-a-Visit pages',
      'Sermon archive + podcast',
      'Events + registration',
      'Giving embed',
      'Schema + Google Business Profile',
      '4-week build',
      'You own it all',
    ],
  },
  {
    name: 'Custom',
    price: '$4,000–$7,000',
    note: 'For larger churches, multi-campus, or deeper builds',
    items: [
      'Everything in Essential, plus:',
      'Spanish or multi-language option',
      'Multi-campus support',
      'Membership portal',
      'Advanced giving flows',
      '5–6 week build',
      'Launch training session',
    ],
    featured: true,
  },
  {
    name: 'Plant Kit',
    price: 'From $1,500',
    note: 'For church plants launching right',
    items: [
      'Service info + belief statement',
      'Sermon-ready podcast setup',
      'Giving + events essentials',
      'Google Business Profile setup',
      '2–3 week build',
      'Grant eligibility check',
    ],
  },
]

const carePlans = [
  {
    name: 'Basic',
    price: '$99/mo',
    note: 'Keep it fast and secure',
    items: [
      'Hosting + security',
      'Monthly one-page report',
      '1 hour of updates / month',
      'One-business-day response',
      'Cancel anytime',
    ],
  },
  {
    name: 'Plus',
    price: '$199/mo',
    note: 'Keep it fresh and found',
    items: [
      'Everything in Basic, plus:',
      'Monthly content refresh',
      'Quarterly SEO tune-up',
      'Event + sermon upkeep',
      'Priority response',
    ],
    featured: true,
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <p className="type-label mb-5">Pricing</p>
        <h1 className="type-h1 max-w-[16ch] text-ink">Straight numbers. No surprise invoices.</h1>
        <p className="type-body mt-6 max-w-[65ch] text-text-body">
          You&apos;ll see the price before the first call. You own your site, domain, and content
          from day one. Fifty percent deposit to start, balance at launch.
        </p>
        <div className="mt-8">
          <Link href="/health-check" className="btn btn-primary">
            {SITE.cta}
          </Link>
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <p className="type-label mb-8">Builds</p>
          <div className="grid gap-6 lg:grid-cols-3">
            {builds.map((b) => (
              <article key={b.name} className={`card ${b.featured ? 'border-ink shadow-md' : ''}`}>
                <p className="type-label">{b.name}</p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">{b.price}</p>
                <p className="mt-1 text-sm text-text-secondary">{b.note}</p>
                <ul className="mt-6 space-y-3">
                  {b.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-text-body">
                      <span className="mt-0.5 text-amber-700" aria-hidden>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <p className="type-label mb-8">Care plans</p>
        <div className="grid gap-6 lg:grid-cols-2">
          {carePlans.map((c) => (
            <article key={c.name} className={`card ${c.featured ? 'border-ink shadow-md' : ''}`}>
              <p className="type-label">{c.name}</p>
              <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">{c.price}</p>
              <p className="mt-1 text-sm text-text-secondary">{c.note}</p>
              <ul className="mt-6 space-y-3">
                {c.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text-body">
                    <span className="mt-0.5 text-amber-700" aria-hidden>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <p className="type-label mb-8">Google Ad Grant</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card !p-6">
              <h2 className="text-base font-semibold text-ink">Setup — $750–$1,000</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-body">
                Eligibility application, account build, first campaigns, and training. One-time.
              </p>
            </div>
            <div className="card !p-6">
              <h2 className="text-base font-semibold text-ink">Management — $250–$400/month</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-body">
                Monthly refreshes, compliance checks, suspension recovery, one-page reports. The
                reason most church grants die — handled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <div className="card flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="type-label mb-2">The ownership promise</p>
            <p className="type-h3 text-ink">Your site, your domain, your content. Always.</p>
            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-text-body">
              Compare us to the $97/month template shops: they host your site, keep it on their
              platform, and it doesn&apos;t leave with you. With us, you own everything from day
              one — and the grant is worth up to $10,000/month, more than your website&apos;s cost,
              every single month.
            </p>
          </div>
          <Link href="/health-check" className="btn btn-primary shrink-0">
            {SITE.cta}
          </Link>
        </div>
      </section>
    </>
  )
}