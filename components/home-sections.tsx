import Link from 'next/link'
import Reveal from '@/components/Reveal'
import SearchDemo from '@/components/SearchDemo'
import { SITE } from '@/lib/site'

export function Hero() {
  return (
    <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="type-label mb-5">Google is giving your church $10,000 a month. You haven&apos;t claimed it.</p>
          <Reveal
            text="Get found when your neighbors search for a church."
            className="type-h1 text-ink"
          />
          <p className="type-body mt-6 max-w-[65ch] text-text-body">
            We help churches get found on Google — with a website they own, plus the $10,000/month
            in free Google Ads most churches never claim.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/health-check" className="btn btn-primary">
              {SITE.cta}
            </Link>
            <Link href="/blog/google-ad-grant-for-churches" className="btn btn-secondary">
              Read the Ad Grant guide
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-tertiary">Takes less than 3 minutes · Free · No obligation</p>
        </div>

        <div>
          <SearchDemo />
        </div>
      </div>
    </section>
  )
}

export function Stakes() {
  return (
    <section className="border-y border-border bg-surface-2">
      <div className="container-site py-14 lg:py-16">
        <p className="type-h3 mx-auto max-w-[65ch] text-center text-ink">
          Every month without action, another family picks the church that showed up when they
          searched — and your <span className="text-amber-700">$10,000/month</span> stays unclaimed.
        </p>
      </div>
    </section>
  )
}

const values = [
  {
    title: 'Guests feel welcome before they arrive',
    body: 'Plan-a-Visit pages: parking, kids\u2019 check-in, what to wear — everything first-timers ask, answered before they walk in.',
  },
  {
    title: 'Show up first in the map pack',
    body: 'The box of churches Google shows with a map — that\u2019s where new families pick. We design for the top of it.',
  },
  {
    title: 'The $10K/month grant, finally claimed',
    body: 'We set up and manage the free Google Ads your church already qualifies for — most churches never turn them on.',
  },
]

export function Value() {
  return (
    <section className="container-site py-16 lg:py-24">
      <p className="type-label mb-8">What you get</p>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((v, i) => (
          <article key={v.title} className="card">
            <p className="font-display text-sm text-amber-700">0{i + 1}</p>
            <h2 className="type-h3 mt-4 text-ink">{v.title}</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-body">{v.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Guide() {
  return (
    <section className="bg-surface-2">
      <div className="container-site py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="type-label mb-5">Who we are</p>
            <h2 className="type-h2 text-ink">
              You&apos;re a pastor, not a webmaster — you shouldn&apos;t have to become one.
            </h2>
            <p className="type-body mt-6 max-w-[65ch] text-text-body">
              One senior builder designs, builds, and manages your site — not a rotating pod, not a
              template farm. Custom design, plain-English reports, and a response time you can
              actually count on.
            </p>
            <Link href="/about" className="link-accent mt-6 inline-block">
              Meet the builder →
            </Link>
          </div>
          <ul className="grid gap-4">
            {[
              ['One senior designer-engineer', 'The person on your proposal is the person who builds your site.'],
              ['Custom, not template', 'Your church\u2019s colors, your building, your people — not a kit fifty other churches bought.'],
              ['Local to DFW', 'A pastor you can meet for coffee. Dallas\u2013Fort Worth, and nationwide.'],
              ['Reports you can read', 'A one-page report you can finish before your coffee gets cold — no dashboard, no jargon.'],
            ].map(([title, body]) => (
              <li key={title} className="card !p-6">
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-text-body">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const planSteps = [
  {
    step: '01',
    title: 'Free Church Website Health Check',
    body: 'Answer 10 quick questions. Get your church\u2019s Digital Health Score and a fix-it list — in under 3 minutes.',
  },
  {
    step: '02',
    title: 'Custom design + build, 4–6 weeks',
    body: 'We gather the content, write the plan, and build. You approve. You own everything from day one.',
  },
  {
    step: '03',
    title: 'We keep it fast, fresh, and found',
    body: 'Care plans, plain-English monthly reports, and the Google Ad Grant — included and managed.',
  },
]

export function Plan() {
  return (
    <section className="container-site py-16 lg:py-24">
      <p className="type-label mb-8">How it works</p>
      <div className="grid gap-6 md:grid-cols-3">
        {planSteps.map((s) => (
          <article key={s.step} className="card">
            <p className="font-display text-sm text-amber-700">{s.step}</p>
            <h2 className="type-h3 mt-4 text-ink">{s.title}</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-body">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function TransitionalCta() {
  return (
    <section className="container-site pb-16 lg:pb-24">
      <div className="card flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="type-label mb-2">Not ready yet?</p>
          <p className="type-h3 text-ink">Read the Google Ad Grant guide for churches — free.</p>
        </div>
        <Link href="/blog/google-ad-grant-for-churches" className="btn btn-secondary shrink-0">
          Read the guide
        </Link>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="bg-sanctuary text-paper">
      <div className="container-site py-16 text-center lg:py-24">
        <p className="type-label mb-5 !text-paper/60">Your church, found</p>
        <h2 className="type-h2 mx-auto max-w-[20ch] text-paper">
          Ready to be the church your neighbors find?
        </h2>
        <p className="mx-auto mt-6 max-w-[65ch] text-paper/80">
          Start with a free Church Website Health Check. Ten questions, your score, and a fix-it
          list — no obligation.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/health-check" className="btn bg-paper text-ink shadow-xs hover:bg-paper/90 hover:shadow-md">
            {SITE.cta}
          </Link>
          <Link href="/contact" className="btn border border-paper/25 text-paper hover:border-paper/60">
            Book a call
          </Link>
        </div>
      </div>
    </section>
  )
}