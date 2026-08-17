import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Scorecard from '@/components/Scorecard'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Church Visibility Scorecard',
  description:
    'Answer 10 questions in about 3 minutes and get your church\u2019s Google visibility score — with a personalized fix-it list. Free, from Arko Media Labs.',
}

const scorecardSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Church Visibility Scorecard',
  description:
    'Free self-assessment for DFW churches: score your Google visibility, website, ownership, maintenance, and accessibility in 3 minutes.',
}

export default function ScorecardPage() {
  return (
    <>
      <JsonLd data={scorecardSchema} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Church Visibility Scorecard' }]} />
      <section className="container-site pb-12 pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="type-eyebrow">Free · 3 minutes · no call required</p>
          <h1 className="type-h1 mt-4 text-balance text-[clamp(2.25rem,0.75rem+3.5vw,3.75rem)]">
            How visible is your church on Google?
          </h1>
          <p className="type-lead mt-6">
            Answer 10 questions about how people actually find you. Get your score, see
            where you stand, and walk away with a prioritized fix-it list — whether or not
            you ever hire us.
          </p>
        </div>
      </section>
      <Scorecard />
      <section className="border-t border-line bg-surface py-16">
        <div className="container-site">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <p className="text-sm text-ink-soft">
              Prefer to talk first? We reply within one business day.
            </p>
            <a href={SITE.contact.callHref} className="btn btn-secondary">
              {SITE.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}