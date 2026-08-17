import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The plain-English terms for working with Arko Media Labs.',
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms' }]} />
      <section className="container-site max-w-3xl pb-24 pt-10">
        <p className="type-eyebrow">Legal · Terms</p>
        <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4rem)]">Terms of Service</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: 2026</p>
        <div className="mt-10 space-y-8 text-[0.9375rem] leading-relaxed text-ink-soft">
          <section>
            <h2 className="type-h3 text-ink">The short version</h2>
            <p className="mt-3">
              We do the work, you own the work, you pay what we agreed in writing, and you
              can leave after the initial term. The full agreement (MSA + statement of
              work) is signed before any paid work starts — and everything on this page
              matches what that agreement says.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Ownership</h2>
            <p className="mt-3">
              You own your website, your domain, your content, and your backups from day
              one — even before the final invoice clears. If you ever leave, your site
              leaves with you.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Terms &amp; cancellation</h2>
            <p className="mt-3">
              Builds are billed per the statement of work. Care plans are month-to-month
              after the initial term — cancel anytime after that, with 30 days&rsquo;
              notice, and you keep everything that&rsquo;s yours. There are no
              post-cancellation fees, no &ldquo;hosting transfers,&rdquo; no retention
              maze.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">The guarantee</h2>
            <p className="mt-3">
              If there&rsquo;s no measurable improvement in your Google visibility within 90
              days, your next month is free. This is a bounded guarantee — it applies to
              visibility work you&rsquo;ve paid us to do, as described in your statement of
              work, and it never means a money-back refund of work already delivered.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Scope &amp; change orders</h2>
            <p className="mt-3">
              Anything beyond the agreed scope is quoted before it&rsquo;s done — in
              writing, with a price you approve first. No surprise invoices.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Taxes</h2>
            <p className="mt-3">
              Texas taxes data-processing services, which includes website creation and
              care. Invoices state every line item separately, including the taxable
              portion, so you can see exactly what you&rsquo;re paying.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Questions</h2>
            <p className="mt-3">
              If any of this is unclear, ask — before you sign:{' '}
              <a href={SITE.contact.emailHref} className="link-signal">
                {SITE.contact.email}
              </a>
              .
            </p>
          </section>
          <Link href="/scorecard" className="btn btn-primary mt-4">
            {SITE.cta}
          </Link>
        </div>
      </section>
    </>
  )
}