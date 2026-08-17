import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Church Websites',
  description:
    'Custom church websites for DFW churches — designed for first-time guests, built on mobile-first standards, and yours from day one. Starting at $1,500.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Church Website Design',
  provider: { '@type': 'LocalBusiness', name: 'Arko Media Labs' },
  areaServed: 'Dallas–Fort Worth, TX',
  description:
    'Custom church websites that first-time guests can find — mobile-first, with a Plan Your Visit flow, and owned by the church from day one.',
}

export default function ChurchWebsitesPage() {
  return (
    <ServicePage
      crumb="Church Websites"
      eyebrow="Service · Website Design"
      h1="A website first-time guests can find."
      intro="Custom builds, not templates — your church looks like you, not like 40 other churches. Every site ships with a Plan Your Visit flow, mobile-first design, and service-times schema so Google understands you."
      pricing="Custom builds from $1,500–$3,000. You own the site and domain from day one."
      schema={schema}
      deliverables={[
        {
          title: 'Custom design, not a template',
          body: 'Your colors, your voice, your layout. If a stranger visits, they should know within a second whose church they\u2019re looking at.',
        },
        {
          title: 'Plan Your Visit flow',
          body: 'Service times, directions, and what to expect — a first-timer never has to email you to figure out Sunday. This is the page that turns searches into guests.',
        },
        {
          title: 'Mobile-first, fast',
          body: 'Most guests will meet your church on a phone. Every main action works in two taps, and the page loads fast — which Google rewards.',
        },
        {
          title: 'Built on standards',
          body: 'Accessible by default (WCAG), schema-marked-up, and structured so your local SEO has a real foundation to stand on.',
        },
        {
          title: 'Yours from day one',
          body: 'You own your site and domain from the first invoice. Month-to-month after the initial term — if you leave, your site leaves with you.',
        },
        {
          title: 'Content that stays current',
          body: 'Pair the build with a care plan and your site is updated, backed up, and secured every month — with a plain-English report your board can read.',
        },
      ]}
      faq={[
        {
          question: 'Why custom instead of a template?',
          answer:
            'Template churches look alike — and families notice. Custom design also gives you the flexibility your church will actually need as it grows, plus better SEO foundations than most template platforms allow.',
        },
        {
          question: 'How long does a build take?',
          answer:
            'Most church sites take 3\u20136 weeks from kickoff to launch, depending on content. You\u2019ll get a timeline up front and a weekly progress note — no black boxes.',
        },
        {
          question: 'What happens if we want to leave?',
          answer:
            'You own your site and domain from day one. After the initial term you can cancel month-to-month — your site stays yours. No lock-in, no hostage site, no post-cancellation fees.',
        },
      ]}
    />
  )
}