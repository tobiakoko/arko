import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Care Plans',
  description:
    'Church website care plans from $97–200/mo — updates, backups, uptime, and plain-English monthly reports. Cancel anytime after the initial term.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Church Website Care Plans',
  provider: { '@type': 'LocalBusiness', name: 'Arko Media Labs' },
  areaServed: 'Dallas–Fort Worth, TX',
  description:
    'Monthly care for church websites: updates, backups, uptime, security, and plain-English reports. From $97/month.',
}

export default function CarePlansPage() {
  return (
    <ServicePage
      crumb="Care Plans"
      eyebrow="Service · Maintenance & Care"
      h1="A site nobody maintains is invisible."
      intro="Volunteers burn out, updates get forgotten, and security drifts. Care plans keep your site current, secure, and accurate — from $97/month, about $3 a day."
      pricing="Care plans from $97–200/mo · cancel anytime after the initial term"
      schema={schema}
      deliverables={[
        {
          title: 'Updates that actually happen',
          body: 'Content changes, service-time corrections, security patches — done monthly, not whenever someone finds time. Your site never shows last year\u2019s Sunday.',
        },
        {
          title: 'Backups and uptime monitoring',
          body: 'Your site is backed up and watched. If it goes down, we know before your members do — and we\u2019re the ones fixing it, same-day.',
        },
        {
          title: 'Plain-English monthly report',
          body: 'One page your board can read: what we did, what changed, what\u2019s next. No jargon, no surprise line items, no \u201Cmanaged services\u201D fog.',
        },
        {
          title: 'One person, not a pod',
          body: 'The same senior person answers the phone every time — someone who already knows your site and your church. No ticket roulette.',
        },
        {
          title: 'Ownership stays yours',
          body: 'Care plans don\u2019t hold your site hostage. You own everything from day one; cancel anytime after the initial term and your site leaves with you.',
        },
        {
          title: 'Urgent issues, same day',
          body: 'Site down or a service time wrong on Sunday morning? That\u2019s same-day attention, not a ticket queue.',
        },
      ]}
      faq={[
        {
          question: 'Do we need a care plan if we have volunteers?',
          answer:
            'If your volunteers are reliable and have the time — maybe not. In practice, most churches find updates slip, and a stale site quietly hurts both guests and rankings. The plan is about consistency, not capability.',
        },
        {
          question: 'Can you maintain a site you didn\u2019t build?',
          answer:
            'Yes. Care plans work on any site — ours or someone else\u2019s. We\u2019ll take a look first and tell you honestly if we can serve it well.',
        },
        {
          question: 'What if we want to leave?',
          answer:
            'Cancel anytime after the initial term, month-to-month. You keep your site, your domain, and your backups. We\u2019ll even help you move — no retention maze, no post-cancellation fees.',
        },
      ]}
    />
  )
}