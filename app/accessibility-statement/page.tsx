import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Arko Media Labs\u2019 commitment to web accessibility — WCAG, CPACC certification, and how to report a barrier.',
}

export default function AccessibilityStatementPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Accessibility Statement' }]} />
      <section className="container-site max-w-3xl pb-24 pt-10">
        <p className="type-eyebrow">Commitment · WCAG</p>
        <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4rem)]">
          Accessibility is a commitment, not a checkbox.
        </h1>
        <div className="mt-10 space-y-8 text-[0.9375rem] leading-relaxed text-ink-soft">
          <section>
            <h2 className="type-h3 text-ink">Our standard</h2>
            <p className="mt-3">
              We work toward WCAG 2.2 AA on this site and on every site we build. The
              person leading this work is IAAP CPACC-certified — that&rsquo;s the
              Certified Professional in Accessibility Core Competencies credential — which
              is a demonstrated standard, not a plugin badge.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">How this site is built</h2>
            <p className="mt-3">
              Semantic landmarks, a skip-to-content link, keyboard-accessible everything,
              visible focus states, text that never relies on color alone, 44px minimum
              touch targets, and reduced-motion support. If a barrier exists, it&rsquo;s a
              bug — and we treat it that way.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Report a barrier</h2>
            <p className="mt-3">
              Found something that doesn&rsquo;t work for you? Tell us —{' '}
              <a href={SITE.contact.emailHref} className="link-signal">
                {SITE.contact.email}
              </a>{' '}
              — and we&rsquo;ll fix it and report back. Accessibility feedback gets the same
              one-business-day SLA as everything else.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">For your church</h2>
            <p className="mt-3">
              Every site we build ships accessible-by-default, and we offer audits,
              remediation, and monitoring for sites we didn&rsquo;t build:{' '}
              <Link href="/services/accessibility" className="link-signal">
                see Accessibility services
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  )
}