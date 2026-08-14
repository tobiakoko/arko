import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Church Websites',
  description:
    'Custom church websites designed and built by one senior builder: Plan-a-Visit pages, sermons, giving, mobile-first, and you own everything. Dallas–Fort Worth and nationwide.',
}

const included = [
  ['Plan-a-Visit pages', 'Parking, kids\u2019 check-in, what to wear — everything first-timers ask, before they walk in.'],
  ['Sermons + podcast', 'Last week\u2019s sermon on every podcast app. Searchable, shareable, findable.'],
  ['Giving in one tap', 'Give, pledge, and events without chasing a login — built around the tools you already use.'],
  ['Events & registration', 'Baptisms, camps, conferences — register from the page, no spreadsheet chaos.'],
  ['Mobile-first', 'Most of your neighbors browse on phones. Your site is built for theirs first.'],
  ['Schema + Google Business Profile', 'The behind-the-scenes signals that put you in the map pack — not page 3.'],
  ['Accessibility built in', 'WCAG-ready: every member of your church can use it, including screen readers.'],
  ['Ownership from day one', 'Your site, domain, and content stay yours. No lock-in, cancel anytime after launch.'],
]

export default function ChurchWebsitesPage() {
  return (
    <>
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <p className="type-label mb-5">Church Websites</p>
        <h1 className="type-h1 max-w-[18ch] text-ink">
          A website that does what your church does: <em className="font-display not-italic text-amber-700">welcomes people.</em>
        </h1>
        <p className="type-body mt-6 max-w-[65ch] text-text-body">
          Custom design, not templates. One senior builder. Your church&apos;s colors, your building,
          your people — not a kit fifty other churches bought.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/health-check" className="btn btn-primary">
            {SITE.cta}
          </Link>
          <Link href="/pricing" className="btn btn-secondary">
            See pricing
          </Link>
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <p className="type-label mb-8">Who this is for</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <p className="font-display text-sm text-amber-700">Established churches</p>
              <h2 className="type-h3 mt-4 text-ink">150–800 members, suburbs and cities</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-body">
                Your website is a volunteer-built relic from 2012: slow, wrong service times,
                untouched for years. You know guests Google you first — and you&apos;re tired of
                apologizing for what they find.
              </p>
            </div>
            <div className="card">
              <p className="font-display text-sm text-amber-700">Church plants</p>
              <h2 className="type-h3 mt-4 text-ink">New congregations, new neighbors</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-body">
                Launch with the Plant Kit: service info, belief statement, sermon archive, and a
                Google presence that puts you in front of your first families — not your fiftieth
                webmaster.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-text-secondary">
            Denominational or independent, English or Spanish (or both), one campus or many — the
            build adapts to how you already work, and to the tools you already use.
          </p>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <p className="type-label mb-8">What&apos;s included</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {included.map(([title, body]) => (
            <article key={title} className="card !p-6">
              <h2 className="text-base font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-body">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="nonprofits" className="bg-sanctuary text-paper">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="type-label mb-5 !text-paper/60">Nonprofits &amp; ministries</p>
              <h2 className="type-h2 text-paper">The same craft, for the missions doing the work.</h2>
              <p className="mt-6 max-w-[65ch] leading-relaxed text-paper/80">
                Faith-based nonprofits, missions, and ministries: donation flows that don&apos;t
                leak, volunteer signups, programs and stories that move people — and the same
                Google Ad Grant eligibility check.
              </p>
              <Link href="/health-check" className="btn mt-8 bg-paper text-ink hover:bg-paper/90">
                Check your eligibility
              </Link>
            </div>
            <ul className="grid gap-4">
              {[
                'Donation flow designed to convert — one tap, no login',
                'Volunteer and program signup without spreadsheet chaos',
                'Stories that move people: impact, not org-chart',
                'Google Ad Grant: up to $10,000/month in free ads for 501(c)(3)',
              ].map((item) => (
                <li key={item} className="rounded-2xl border border-paper/12 bg-paper/5 p-6 text-paper/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <p className="type-label mb-8">How it works</p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Free Health Check', 'Ten questions, your Digital Health Score, and a fix-it list — no obligation.'],
            ['02', 'Custom design + build', 'We gather content, write the plan, and build in 4–6 weeks. You approve every step.'],
            ['03', 'Keep it fast, fresh, and found', 'Care plans, monthly one-page reports, and the Ad Grant managed for you.'],
          ].map(([step, title, body]) => (
            <article key={step} className="card">
              <p className="font-display text-sm text-amber-700">{step}</p>
              <h2 className="type-h3 mt-4 text-ink">{title}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-body">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <p className="type-label mb-8">Common questions</p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ['Do we keep our domain and content?', 'Yes — everything is yours from day one: site, domain, and content. No lock-in. Cancel anytime after launch.'],
              ['What if we already use Tithe.ly or Planning Center?', 'We build around the tools you already use. No forced migration, no replatforming.'],
              ['How long does the build take?', '4–6 weeks for a typical church site. You approve each stage; nothing ships without your sign-off.'],
              ['Are you really the one building it?', 'Yes. The person on your proposal is the person who designs and builds your site — no rotating pod, no outsourced team.'],
            ].map(([q, a]) => (
              <div key={q} className="card !p-6">
                <h2 className="text-base font-semibold text-ink">{q}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-body">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}