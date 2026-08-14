import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'One senior designer-engineer building church websites for Dallas–Fort Worth and beyond. Custom design, plain English, and you own everything.',
}

export default function AboutPage() {
  return (
    <>
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <p className="type-label mb-5">About</p>
        <h1 className="type-h1 max-w-[18ch] text-ink">
          A church&apos;s message shouldn&apos;t be hidden behind an outdated website.
        </h1>
        <p className="type-body mt-6 max-w-[65ch] text-text-body">
          Every person searching for hope deserves to find the church waiting for them. That&apos;s
          the problem we work on — one church, one website, one grant at a time.
        </p>
        <div className="mt-8">
          <Link href="/health-check" className="btn btn-primary">
            {SITE.cta}
          </Link>
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="type-label mb-5">The builder</p>
              <h2 className="type-h2 text-ink">One senior designer-engineer. The person on your proposal is the person who builds your site.</h2>
            </div>
            <div className="space-y-5 text-text-body">
              <p className="leading-relaxed">
                Arko Media Labs was built on a simple observation: churches do the most important
                work in a neighborhood, and get the worst web presence. Template farms sell them
                the same kit fifty churches bought. Big agencies charge more than a church
                budget can breathe. And the one thing Google gives every eligible church for free
                — the $10,000/month Ad Grant — sits unclaimed because nobody makes it easy.
              </p>
              <p className="leading-relaxed">
                So the studio is deliberately small: one senior builder, custom design, plain
                English, and contracts that say you own your site. The work is engineered as much
                as designed — fast, accessible, and built to stay fast.
              </p>
              <p className="leading-relaxed">
                If you&apos;re in the Dallas–Fort Worth area, coffee&apos;s on us. If you&apos;re
                anywhere else, the first call is still free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <p className="type-label mb-8">The promises</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['You own everything', 'Site, domain, and content stay yours from day one. No lock-in, cancel anytime after launch.'],
            ['One human, one business day', 'Your calls and emails get a real answer within one business day. Urgent site-down: same day.'],
            ['Reports you can read', 'A one-page report you can finish before your coffee gets cold — no dashboard, no jargon.'],
            ['Built to stay fast', 'Green Core Web Vitals and accessibility are part of the build, not an upgrade.'],
          ].map(([title, body]) => (
            <article key={title} className="card !p-6">
              <h2 className="text-base font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-body">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}