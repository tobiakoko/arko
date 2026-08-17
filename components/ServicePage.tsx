import Link from 'next/link'
import Breadcrumbs, { type Crumb } from '@/components/Breadcrumbs'
import { SITE } from '@/lib/site'

type Deliverable = { title: string; body: string }
type FaqItem = { question: string; answer: string }

export default function ServicePage({
  crumb,
  eyebrow,
  h1,
  intro,
  deliverables,
  pricing,
  faq,
  faqTitle = 'Questions pastors ask',
  schema,
}: {
  crumb: string
  eyebrow: string
  h1: string
  intro: string
  deliverables: Deliverable[]
  pricing?: string
  faq?: FaqItem[]
  faqTitle?: string
  schema?: object
}) {
  const crumbs: Crumb[] = [{ label: 'Home', href: '/' }, { label: crumb }]
  return (
    <>
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <Breadcrumbs items={crumbs} />
      <section className="container-site pb-16 pt-10">
        <div className="max-w-3xl">
          <p className="type-eyebrow">{eyebrow}</p>
          <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">{h1}</h1>
          <p className="type-lead mt-6">{intro}</p>
          {pricing && <p className="mt-6 font-medium text-ink">{pricing}</p>}
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
          <h2 className="type-h2">What&rsquo;s included</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item.title} className="card p-7">
                <h3 className="type-h3 text-[1.0625rem]">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faq && (
        <section className="container-site py-16">
          <h2 className="type-h2">{faqTitle}</h2>
          <div className="mt-8 max-w-3xl space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="card p-6">
                <summary className="cursor-pointer font-medium text-ink">{item.question}</summary>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-line bg-surface py-16">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="type-h2">Not sure what your church needs?</h2>
            <p className="type-body mt-4">
              Take the scorecard — it tells you exactly where you stand, free.
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