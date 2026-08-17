import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Visibility',
  description:
    'Church visibility & Google local SEO for DFW churches — show up in the map pack when families search "church near me". 90-day visibility guarantee.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Church Visibility & Google (Local SEO)',
  provider: { '@type': 'LocalBusiness', name: 'Arko Media Labs' },
  areaServed: 'Dallas–Fort Worth, TX',
  description:
    'Map-pack visibility for "church near me" searches — Google Business Profile management, local SEO, and schema. 90-day visibility guarantee.',
}

export default function VisibilityPage() {
  return (
    <ServicePage
      crumb="Visibility"
      eyebrow="Service · Local SEO & Google"
      h1="Show up when your city searches \u201Cchurch near me.\u201D"
      intro="Families decide where to go this Sunday on Google. We make sure your church is one of the names that answers — with map-pack visibility typically showing within 30–90 days, guaranteed."
      pricing="Included in builds · standalone plans from $97–200/mo · 90-day visibility guarantee"
      schema={schema}
      deliverables={[
        {
          title: 'Google Business Profile, done right',
          body: 'Photos, service times, regular posts, and answered questions — the free listing most churches have but never finish. We finish it and keep it alive.',
        },
        {
          title: 'Map-pack targets that match how people search',
          body: '\u201CChurch near me\u201D and \u201Cchurch in [your city]\u201D — we track these specifically and report on them monthly, in plain English.',
        },
        {
          title: 'Local SEO foundations',
          body: 'Service schema, consistent NAP, city-page architecture, and on-page optimization built for the way Google ranks local churches.',
        },
        {
          title: 'Honest timelines',
          body: 'Map pack, typically 30–90 days. Organic rankings, months, not weeks. We tell you the truth up front — no week-one promises.',
        },
        {
          title: 'The 90-day guarantee',
          body: 'No measurable improvement in your Google visibility within 90 days? Your next month is free. Bounded, in writing, and we mean it.',
        },
        {
          title: 'Plain-English monthly report',
          body: 'One page: what changed, what it means, what\u2019s next. Your board should understand what it pays for without a decoder ring.',
        },
      ]}
      faq={[
        {
          question: 'What does "visible in 30–90 days" actually mean?',
          answer:
            'It means appearing in Google\u2019s map pack for searches like "church near me [your city]" — typically within 30–90 days in DFW suburbs. Organic page-one rankings for broader terms take longer, and we tell you which is which.',
        },
        {
          question: 'What is the 90-day visibility guarantee?',
          answer:
            'If there\u2019s no measurable improvement in your Google visibility within 90 days, your next month is free. It\u2019s bounded, in writing, and honest about what \u201Cimprovement\u201D means.',
        },
        {
          question: 'We already have a website — can you just do visibility?',
          answer:
            'Yes. Visibility work can stand alone: profile management, local SEO, schema, and reporting — even on a site someone else built.',
        },
      ]}
    />
  )
}