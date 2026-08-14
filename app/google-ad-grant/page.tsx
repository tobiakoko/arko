import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Google Ad Grant for Churches',
  description:
    'Churches with a 501(c)(3) can get up to $10,000/month in free Google Ads. We set it up and keep it from getting suspended. Plain-English guide inside.',
}

export default function AdGrantPage() {
  return (
    <>
      <section className="bg-sanctuary text-paper">
        <div className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
          <p className="type-label mb-5 !text-paper/60">The Google Ad Grant</p>
          <h1 className="type-h1 max-w-[16ch] text-paper">
            Google is giving your church{' '}
            <span className="text-amber-600">$10,000</span> a month.
          </h1>
          <p className="mt-6 max-w-[65ch] leading-relaxed text-paper/80">
            Most churches never claim it. Your church already qualifies — if it has a working
            website, a 501(c)(3), and a heart for serving people without discrimination. That&apos;s
            it. We turn it on, and we keep it on.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/health-check" className="btn bg-paper text-ink shadow-xs hover:bg-paper/90">
              Check your church&apos;s eligibility
            </Link>
            <Link href="/contact" className="btn border border-paper/25 text-paper hover:border-paper/60">
              Book a call
            </Link>
          </div>
          <p className="mt-4 text-sm text-paper/50">Free Health Check · Takes less than 3 minutes</p>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <p className="type-label mb-8">What it is</p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Free Google Ads', 'Up to $10,000/month in search ads for nonprofits — real budget, real clicks, zero cost.'],
            ['Your neighbors, searching', 'People in your city search \u201Cchurch near me\u201D on Saturday nights. The grant puts you in front of them.'],
            ['One condition: a working site', 'Grant ads land on your website. No website, no grant. That\u2019s why we build both.'],
          ].map(([title, body]) => (
            <article key={title} className="card">
              <h2 className="type-h3 text-ink">{title}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-body">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <p className="type-label mb-8">Eligibility — it&apos;s simpler than you think</p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['501(c)(3) status', 'A valid nonprofit status with Google for Nonprofits. Most churches have this already or can get it in a week.'],
              ['A working website', 'It must load, work on phones, and be your own domain — this is where most churches stall.'],
              ['No discrimination', 'You welcome and serve everyone, and your site says so.'],
              ['Account compliance', 'The reason most grants get suspended: the ad account goes stale. That\u2019s the part we manage.'],
            ].map(([title, body]) => (
              <div key={title} className="card !p-6">
                <h2 className="text-base font-semibold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <p className="type-label mb-8">Why grants get suspended — and why ours don&apos;t</p>
        <div className="card">
          <p className="leading-relaxed text-text-body">
            Google suspends thousands of church grants every year — usually for one reason: nobody
            touches the account. Old keywords, stale ads, policy drift. Management isn&apos;t
            optional; it&apos;s the whole game. That&apos;s why we offer it as a service: monthly
            reviews, fresh ad groups, compliance checks, and a plain-English one-page report — the
            kind you can read before your coffee gets cold.
          </p>
        </div>
      </section>

      <section className="container-site pb-16 lg:pb-24">
        <p className="type-label mb-8">What&apos;s included</p>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ['Setup — $750–$1,000', 'Eligibility application, account build, first campaigns, and training so you understand every ad. One-time.'],
            ['Management — $250–$400/month', 'Monthly keyword and ad refreshes, compliance checks, suspension recovery, one-page reports.'],
          ].map(([title, body]) => (
            <div key={title} className="card !p-6">
              <h2 className="text-base font-semibold text-amber-800">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-body">{body}</p>
            </div>
          ))}
        </div>
        <div className="card mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="type-h3 text-ink">Not sure you qualify?</p>
            <p className="mt-2 text-sm text-text-secondary">
              The free Health Check includes your eligibility — answered in the first ten questions.
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