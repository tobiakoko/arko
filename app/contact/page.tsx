import type { Metadata } from 'next'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Book a free call with Arko Media Labs. We reply within one business day. Dallas–Fort Worth and nationwide.',
}

export default function ContactPage() {
  return (
    <>
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <p className="type-label mb-5">Contact &amp; booking</p>
        <h1 className="type-h1 max-w-[16ch] text-ink">Talk to the person who builds your site.</h1>
        <p className="type-body mt-6 max-w-[65ch] text-text-body">
          No sales team, no queue. We respond to every message within one business day
          (Mon–Fri, 9am–5pm CT), and urgent site-down issues get same-day attention.
        </p>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <p className="type-label">Email us to book a call</p>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Send a note with your church&apos;s name and the best time to call — we&apos;ll
                reply with a calendar link.
              </p>
              <a href={SITE.contact.emailHref} className="link-accent mt-4 inline-block break-all">
                {SITE.contact.email}
              </a>
            </div>
            <div className="card">
              <p className="type-label">Phone</p>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                Real person, real answers. Leave a message if we&apos;re mid-build — we return
                every call.
              </p>
              <a href={SITE.contact.phoneHref} className="link-accent mt-4 inline-block">
                {SITE.contact.phone}
              </a>
            </div>
            <div className="card">
              <p className="type-label">Response promise</p>
              <p className="mt-3 text-sm leading-relaxed text-text-body">
                One business day for messages, same day for a site down. And every report you ever
                receive fits on one page.
              </p>
            </div>
          </div>

          <div className="card mt-6">
            <p className="type-label">Prefer to start yourself?</p>
            <p className="mt-3 text-sm leading-relaxed text-text-body">
              The free Church Website Health Check answers your ten biggest questions about your
              church&apos;s Google presence — and takes less than 3 minutes. You&apos;ll get your
              Digital Health Score and a fix-it list either way.
            </p>
            <a href="/health-check" className="btn btn-primary mt-5">
              Start the Health Check
            </a>
          </div>
        </div>
      </section>
    </>
  )
}