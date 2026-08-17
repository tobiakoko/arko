import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for church websites in DFW: builds from $1,500–$3,000, care plans from $97–200/mo, accessibility audits from $750. You own your site.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Arko Media Labs pricing',
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Church website build',
      price: '1500',
      priceCurrency: 'USD',
      description: 'Custom church website, starting at $1,500.',
    },
    {
      '@type': 'Offer',
      name: 'Care plan',
      price: '97',
      priceCurrency: 'USD',
      description: 'Monthly church website care, from $97/month.',
    },
  ],
}

const PLAN_GROUPS = [
  {
    title: 'Builds',
    items: [
      { name: 'Church website', price: '$1,500–$3,000', body: 'Custom design, Plan Your Visit flow, mobile-first, schema, and local SEO foundations. You own it from day one.' },
      { name: 'Visibility add-on', price: 'included / from $97/mo', body: 'Map-pack targeting for "church near me [city]" with the 90-day guarantee, as a standalone plan or bundled with a build.' },
      { name: 'Accessibility audit', price: '$750–$2,500', body: 'WCAG audit by an IAAP CPACC-certified professional, with barriers ranked by impact.' },
    ],
  },
  {
    title: 'Care plans (monthly)',
    items: [
      { name: 'Church care', price: '$97/mo', body: 'Updates, backups, uptime, and a plain-English monthly report. About $3 a day.' },
      { name: 'Care + visibility', price: '$200/mo', body: 'Everything in Church care, plus Google Business Profile management and monthly visibility reporting.' },
      { name: 'Accessibility monitoring', price: '$150–$300/mo', body: 'Ongoing WCAG checks so accessibility stays true as your site evolves.' },
    ],
  },
  {
    title: 'Remediation & extras',
    items: [
      { name: 'Accessibility remediation', price: '$100–$150/hr', body: 'Fixing the underlying barriers — not overlay widgets — priced on the audit\u2019s prioritized list.' },
      { name: 'One-off updates', price: 'from $50', body: 'Small changes outside a care plan, billed plainly and quoted before work starts.' },
      { name: 'Strategy & planning', price: 'quoted separately', body: 'Stand-alone planning work, separately stated on invoices so you know exactly what you paid for.' },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />
      <section className="container-site pb-16 pt-10">
        <div className="max-w-3xl">
          <p className="type-eyebrow">Pricing · published, on purpose</p>
          <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">
            You own your site and domain from day one.
          </h1>
          <p className="type-lead mt-6">
            Most agencies hide pricing because the surprises come later. Here are our
            numbers up front — builds, care plans, and the guarantee — so you know what
            you&rsquo;re walking into before the first call.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          {PLAN_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="type-eyebrow mb-6">{group.title}</h2>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="card p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-medium text-ink">{item.name}</h3>
                      <span className="type-metric whitespace-nowrap text-sm text-signal-500">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16">
        <div className="mx-auto max-w-4xl rounded-[10px] border border-signal-200 bg-signal-50 p-8 sm:p-12">
          <h2 className="type-h2">The guarantee, in writing</h2>
          <div className="mt-6 space-y-4">
            <p className="text-ink-soft">
              <span className="font-medium text-ink">90-day visibility guarantee:</span>{' '}
              no measurable improvement in your Google visibility within 90 days? Your next
              month is free.
            </p>
            <p className="text-ink-soft">
              <span className="font-medium text-ink">You own everything:</span> your site,
              your domain, your content — from day one, in writing, in the agreement.
            </p>
            <p className="text-ink-soft">
              <span className="font-medium text-ink">Leaving is easy:</span> month-to-month
              after the initial term. Cancel anytime — your site leaves with you. No
              retention maze, no post-cancellation fees.
            </p>
          </div>
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

      <section className="border-t border-line bg-surface py-16">
        <div className="container-site max-w-3xl">
          <h2 className="type-h2">A note on taxes</h2>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
            Texas taxes data-processing services — website creation and care fall in that
            bucket. We bill with every line item separately stated, including the taxable
            portion, so you always know exactly what you&rsquo;re paying for. No bundling,
            no &ldquo;platform fees,&rdquo; no surprise line items after launch.
          </p>
        </div>
      </section>
    </>
  )
}