import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Arko Media Labs — we reply within one business day, Mon–Fri 9am–5pm CT. Book a 15-min call or take the free Church Visibility Scorecard.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arko Media Labs',
  url: SITE.url,
  email: SITE.contact.email,
  areaServed: 'Dallas–Fort Worth, TX',
  openingHours: 'Mo-Fr 09:00-17:00',
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <section className="container-site pb-16 pt-10">
        <div className="max-w-3xl">
          <p className="type-eyebrow">Contact · one business day</p>
          <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">
            Let&rsquo;s talk about your church&rsquo;s visibility.
          </h1>
          <p className="type-lead mt-6">{SITE.contact.sla}</p>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="container-site grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-8">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="type-eyebrow mb-3">Direct</h2>
              <p className="text-ink-soft">
                <a href={SITE.contact.emailHref} className="link-signal">
                  {SITE.contact.email}
                </a>
              </p>
              <p className="mt-1 text-sm text-ink-faint">{SITE.contact.region}</p>
            </div>
            <div>
              <h2 className="type-eyebrow mb-3">Book a 15-min call</h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                No pitch deck, no pressure — we look at your church&rsquo;s actual online
                presence and tell you honestly where you stand.
              </p>
              <a href={SITE.contact.callHref} className="btn btn-secondary mt-4">
                {SITE.ctaCall}
              </a>
            </div>
            <div>
              <h2 className="type-eyebrow mb-3">Prefer to start on your own?</h2>
              <p className="text-sm leading-relaxed text-ink-soft">
                The scorecard takes 3 minutes and gives you a prioritized fix-it list —
                useful whether or not you ever call.
              </p>
              <Link href="/scorecard" className="btn btn-tertiary mt-4">
                {SITE.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}