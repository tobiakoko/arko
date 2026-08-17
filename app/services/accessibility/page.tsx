import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'Website accessibility for churches — WCAG audits, remediation, and monitoring from an IAAP CPACC-certified professional. Audits from $750.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Accessibility (WCAG)',
  provider: { '@type': 'LocalBusiness', name: 'Arko Media Labs' },
  areaServed: 'Dallas–Fort Worth, TX',
  description:
    'WCAG audits, remediation, and monitoring for church websites — led by an IAAP CPACC-certified professional.',
}

export default function AccessibilityPage() {
  return (
    <ServicePage
      crumb="Accessibility"
      eyebrow="Service · WCAG & Digital Inclusion"
      h1="Your website should welcome every member."
      intro="If your site can\u2019t be read by a screen reader, members with disabilities are locked out of the front door. We fix that — with real audits, not badge widgets."
      pricing="Audits $750–2,500 · remediation $100–150/hr · monitoring $150–300/mo"
      schema={schema}
      deliverables={[
        {
          title: 'Real WCAG audits, not overlay widgets',
          body: 'An IAAP CPACC-certified professional tests your site against WCAG — including with actual screen readers. You get a prioritized list of barriers, ranked by impact.',
        },
        {
          title: 'Remediation that fixes the cause',
          body: 'We fix the underlying markup, structure, and interactions — not a script that papers over problems and can break them again.',
        },
        {
          title: 'Ongoing monitoring',
          body: 'Accessibility drifts as sites change. Monitoring keeps it true, with a plain-English report of what was checked and what changed.',
        },
        {
          title: 'The differentiator, made public',
          body: 'Accessibility is a genuine commitment here — it\u2019s in our accessibility statement, our builds ship accessible-by-default, and the certification is on the record.',
        },
        {
          title: 'For your members, not just compliance',
          body: 'ADA lawsuits hit churches, but the real reason is the member who can\u2019t find the service time. We start from people, not risk.',
        },
        {
          title: 'Works on any site',
          body: 'Audits and remediation stand alone — you don\u2019t need to rebuild your site or switch providers to make it accessible.',
        },
      ]}
      faq={[
        {
          question: 'Is accessibility a legal requirement for churches?',
          answer:
            'Requirements vary, and we\u2019re not lawyers — but courts increasingly treat public websites as places of public accommodation. The stronger reason: accessibility is hospitality, and your members deserve it regardless of the law.',
        },
        {
          question: 'What does "CPACC" mean?',
          answer:
            'Certified Professional in Accessibility Core Competencies — an IAAP certification covering accessibility law, standards, and inclusive design. It means the person auditing your site has demonstrated competence, not just installed a plugin.',
        },
        {
          question: 'We can\u2019t afford a full remediation right now — what then?',
          answer:
            'We\u2019ll rank the barriers by impact and fix the ones that matter most first — often the homepage and the Plan Your Visit path — so the cost follows the priority.',
        },
      ]}
    />
  )
}