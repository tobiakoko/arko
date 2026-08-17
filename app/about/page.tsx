import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Arko Media Labs: one senior person building church websites for DFW — IAAP CPACC-certified, honest timelines, and you own everything from day one.',
}

const CREDENTIALS = [
  { title: 'IAAP CPACC-certified', body: 'Certified Professional in Accessibility Core Competencies — accessibility is a credential, not a bullet point.' },
  { title: 'Two churches served end-to-end', body: 'DLBC Tampa and DCLM Lewisville — real builds with real before/after documentation in progress (publishing soon, Rule 8).' },
  { title: 'One senior person', body: 'The person who builds your site answers the phone. No rotating pods, no ticket roulette, no account-manager shuffle.' },
  { title: '90-day visibility guarantee', body: 'No measurable improvement in 90 days? Your next month is free. Bounded and in writing.' },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <section className="container-site pb-16 pt-10">
        <div className="max-w-3xl">
          <p className="type-eyebrow">About · one senior person</p>
          <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">
            I build and manage your site personally.
          </h1>
          <p className="type-lead mt-6">
            Arko Media Labs exists because a church with open doors shouldn&rsquo;t need a
            marketing department to be found. I&rsquo;m the founder — and the only person
            who ever touches your work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/scorecard" className="btn btn-primary">
              {SITE.cta}
            </Link>
            <a href={SITE.contact.callHref} className="btn btn-secondary">
              {SITE.ctaCall}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="container-site">
          <h2 className="type-h2">Why this exists</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-ink-soft">
            <p className="leading-relaxed">
              I&rsquo;ve seen great churches that nobody can find online. Wonderful
              ministries, warm communities — hidden behind a template site from 2017 with
              last year&rsquo;s service times and a Google listing that says
              &ldquo;permanently closed.&rdquo; Meanwhile, the families moving into town
              are deciding where to belong this Sunday, on their phones, in the map pack.
            </p>
            <p className="leading-relaxed">
              The big website companies made this worse: bundles, lock-ins, opaque pricing,
              and sites you lose when you leave. The template shops made churches look
              identical. The DIY builders gave churches another volunteer job.
            </p>
            <p className="leading-relaxed">
              So this studio does the opposite, on purpose: custom builds you own from day
              one, published pricing, month-to-month after the initial term, plain-English
              reports, and a 90-day visibility guarantee. One senior person — me — who
              knows your site and your church, and answers the phone.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <h2 className="type-h2">What you&rsquo;d be working with</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {CREDENTIALS.map((item) => (
            <div key={item.title} className="card p-7">
              <h3 className="type-h3 text-[1.0625rem]">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="type-h2">The fastest way to find out if we&rsquo;re a fit</h2>
            <p className="type-body mt-4">
              Take the scorecard — you get something useful either way.
            </p>
            <Link href="/scorecard" className="btn btn-primary mt-8">
              {SITE.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}