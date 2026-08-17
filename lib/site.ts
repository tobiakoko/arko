export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const SITE = {
  name: 'Arko Media Labs',
  descriptor: 'Web Design & Local Marketing • Dallas–Fort Worth',
  url: 'https://arkomedialabs.com',
  cta: 'Get my scorecard',
  ctaFull: 'Get my free Church Visibility Scorecard',
  ctaCall: 'Book a 15-min call',
  nav: [
    { label: 'Services', href: '/services/church-websites', children: [
      { label: 'Church Websites', href: '/services/church-websites' },
      { label: 'Visibility', href: '/services/visibility' },
      { label: 'Care Plans', href: '/services/care-plans' },
      { label: 'Accessibility', href: '/services/accessibility' },
    ]},
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ] satisfies NavItem[],
  contact: {
    email: 'hello@arkomedialabs.com',
    emailHref: 'mailto:hello@arkomedialabs.com',
    callHref: 'mailto:hello@arkomedialabs.com?subject=Book%20a%2015-min%20call%20with%20Arko%20Media%20Labs',
    sla: 'We reply within one business day — Mon–Fri, 9am–5pm CT. Urgent site-down issues get same-day attention.',
    region: 'Dallas–Fort Worth, TX',
  },
} as const

export type City = {
  slug: string
  name: string
  h1: string
  intro: string
  hook: string
  localProof: string[]
  faq: { question: string; answer: string }[]
}

export const CITIES: City[] = [
  {
    slug: 'frisco',
    name: 'Frisco',
    h1: 'Church web design in Frisco, TX',
    intro:
      'New families move to Frisco every month — and the first thing they search after unpacking is "church near me." If your church doesn\u2019t show up, they never know you exist.',
    hook: 'In a city growing this fast, invisibility on Google is a choice no church can afford.',
    localProof: [
      'Custom builds for growing suburban churches like yours',
      'Map-pack targets: "church near me" + "church in Frisco"',
      'Plan Your Visit flows built for first-time guests',
    ],
    faq: [
      {
        question: 'Do you build church websites in Frisco?',
        answer:
          'Yes. We build custom church websites for Frisco churches — design, development, local visibility, and care plans, all from one senior person.',
      },
      {
        question: 'How long until my Frisco church shows up on Google?',
        answer:
          'Map-pack visibility for "church near me" typically shows within 30–90 days. Organic rankings for longer-tail terms take longer — we give you an honest timeline, not a promise of week-one results.',
      },
      {
        question: 'Do we own our website?',
        answer:
          'Yes — your site and domain are yours from day one. If you ever leave, your site leaves with you. No lock-in, no hostage site.',
      },
    ],
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    h1: 'Church web design in McKinney, TX',
    intro:
      'McKinney is one of the most-requested places to move in the country — and every new family is searching "church near me" before they choose a church.',
    hook: 'The families deciding where to belong this Sunday are deciding on Google right now.',
    localProof: [
      'Churches in McKinney\u2019s growing neighborhoods reached where it counts',
      'Map-pack targets: "church near me" + "church in McKinney"',
      'Sites that welcome first-timers, not just members',
    ],
    faq: [
      {
        question: 'Do you build church websites in McKinney?',
        answer:
          'Yes. We build custom church websites for McKinney churches — plus local visibility, care plans, and accessibility work, all from one senior person.',
      },
      {
        question: 'How long until my McKinney church shows up on Google?',
        answer:
          'Map-pack visibility for "church near me" typically shows within 30–90 days. Organic rankings for longer-tail terms take longer — we give you an honest timeline.',
      },
      {
        question: 'Do we own our website?',
        answer:
          'Yes — your site and domain are yours from day one. If you ever leave, your site leaves with you. No lock-in, no hostage site.',
      },
    ],
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    h1: 'Church web design in Lewisville, TX',
    intro:
      'Lewisville sits at the crossroads of two big highways — families pass through constantly, and the ones settling down are searching "church near me" this weekend.',
    hook: 'Your church\u2019s front door on Google is often the only one visitors ever see.',
    localProof: [
      'One of the DFW churches we serve today is in Lewisville (DCLM)',
      'Map-pack targets: "church near me" + "church in Lewisville"',
      'Visibility work that keeps service times current and findable',
    ],
    faq: [
      {
        question: 'Do you build church websites in Lewisville?',
        answer:
          'Yes. We already serve a Lewisville church today, and we build custom sites for Lewisville churches — design, development, local visibility, and care plans.',
      },
      {
        question: 'How long until my Lewisville church shows up on Google?',
        answer:
          'Map-pack visibility for "church near me" typically shows within 30–90 days. Organic rankings for longer-tail terms take longer — we give you an honest timeline.',
      },
      {
        question: 'Do we own our website?',
        answer:
          'Yes — your site and domain are yours from day one. If you ever leave, your site leaves with you. No lock-in, no hostage site.',
      },
    ],
  },
  {
    slug: 'garland',
    name: 'Garland',
    h1: 'Church web design in Garland, TX',
    intro:
      'Garland is one of the largest cities in the metroplex, and its churches serve a wonderfully diverse community — but many of them can\u2019t be found on Google.',
    hook: 'A great church hidden on page two might as well not exist for the family searching Sunday morning.',
    localProof: [
      'Custom, not template — your church looks like you, not like 40 others',
      'Map-pack targets: "church near me" + "church in Garland"',
      'Accessible-by-default builds (WCAG) — welcome every member',
    ],
    faq: [
      {
        question: 'Do you build church websites in Garland?',
        answer:
          'Yes. We build custom church websites for Garland churches — design, development, local visibility, and care plans, all from one senior person.',
      },
      {
        question: 'How long until my Garland church shows up on Google?',
        answer:
          'Map-pack visibility for "church near me" typically shows within 30–90 days. Organic rankings for longer-tail terms take longer — we give you an honest timeline.',
      },
      {
        question: 'Do we own our website?',
        answer:
          'Yes — your site and domain are yours from day one. If you ever leave, your site leaves with you. No lock-in, no hostage site.',
      },
    ],
  },
  {
    slug: 'mesquite',
    name: 'Mesquite',
    h1: 'Church web design in Mesquite, TX',
    intro:
      'Mesquite is a family town with deep roots — and its churches are the heart of that community. Too many of them still can\u2019t be found when neighbors search.',
    hook: 'The neighbor who moved in last month is searching for a church right now. Will they find yours?',
    localProof: [
      'Custom builds that put your church\u2019s welcome online',
      'Map-pack targets: "church near me" + "church in Mesquite"',
      'Care plans so the site stays current after launch',
    ],
    faq: [
      {
        question: 'Do you build church websites in Mesquite?',
        answer:
          'Yes. We build custom church websites for Mesquite churches — design, development, local visibility, and care plans, all from one senior person.',
      },
      {
        question: 'How long until my Mesquite church shows up on Google?',
        answer:
          'Map-pack visibility for "church near me" typically shows within 30–90 days. Organic rankings for longer-tail terms take longer — we give you an honest timeline.',
      },
      {
        question: 'Do we own our website?',
        answer:
          'Yes — your site and domain are yours from day one. If you ever leave, your site leaves with you. No lock-in, no hostage site.',
      },
    ],
  },
]

export function getCity(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug)
}