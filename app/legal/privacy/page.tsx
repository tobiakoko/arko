import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Arko Media Labs handles your information — plainly written, no legalese fog.',
}

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]} />
      <section className="container-site max-w-3xl pb-24 pt-10">
        <p className="type-eyebrow">Legal · Privacy</p>
        <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4rem)]">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: 2026</p>
        <div className="mt-10 space-y-8 text-[0.9375rem] leading-relaxed text-ink-soft">
          <section>
            <h2 className="type-h3 text-ink">What we collect</h2>
            <p className="mt-3">
              When you use the Church Visibility Scorecard or the contact form, we collect
              what you enter: your name, email, church name, city, and — for the scorecard —
              your answers and score. We don&rsquo;t collect anything else, and we don&rsquo;t
              run tracking pixels or third-party ad scripts on this site.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">What we do with it</h2>
            <p className="mt-3">
              We use it to reply to you and, if you took the scorecard, to follow up about
              your results. That&rsquo;s it. We never sell your information, and we never
              share it except as required by law.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Scorecard progress</h2>
            <p className="mt-3">
              Your in-progress scorecard answers are saved on your own device (local
              storage) so you can resume. You can clear them at any time by clearing your
              browser&rsquo;s site data.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Your rights</h2>
            <p className="mt-3">
              You can ask us to show, correct, or delete the information we hold about you
              at any time — email{' '}
              <a href={SITE.contact.emailHref} className="link-signal">
                {SITE.contact.email}
              </a>{' '}
              and we&rsquo;ll handle it, no forms, no runaround.
            </p>
          </section>
          <section>
            <h2 className="type-h3 text-ink">Changes</h2>
            <p className="mt-3">
              If this policy changes, we&rsquo;ll update the date above and explain what
              changed in plain English.
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