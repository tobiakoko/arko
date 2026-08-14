export type Category = 'Findability' | 'First impression' | 'The grant'

export type Question = {
  id: number
  category: Category | 'Qualifiers'
  text: string
  options: { label: string; points: number | null }[]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Findability',
    text: 'When a neighbor searches \u201Cchurch near me,\u201D how often does your church appear on page 1?',
    options: [
      { label: 'Never — we\u2019re invisible', points: 1 },
      { label: 'Rarely — maybe page 2', points: 2 },
      { label: 'Sometimes', points: 3 },
      { label: 'Usually', points: 4 },
      { label: 'Always — first screen', points: 5 },
    ],
  },
  {
    id: 2,
    category: 'Findability',
    text: 'Is your Google Business Profile set up and updated?',
    options: [
      { label: 'No', points: 1 },
      { label: 'Yes — but outdated', points: 2 },
      { label: 'Yes — updated recently', points: 3 },
      { label: 'Yes — updated monthly', points: 4 },
      { label: 'Yes — we post weekly', points: 5 },
    ],
  },
  {
    id: 3,
    category: 'Findability',
    text: 'Is your sermon or podcast content findable on Google?',
    options: [
      { label: 'No', points: 1 },
      { label: 'Not sure', points: 2 },
      { label: 'Some — a few posts', points: 3 },
      { label: 'Yes — sermons are online', points: 4 },
      { label: 'Yes — indexed and easy to find', points: 5 },
    ],
  },
  {
    id: 4,
    category: 'First impression',
    text: 'Can someone find service times, address, and directions within 5 seconds on your homepage?',
    options: [
      { label: 'No — buried', points: 1 },
      { label: 'Not on mobile', points: 2 },
      { label: 'Only on desktop', points: 3 },
      { label: 'Yes — on the homepage', points: 4 },
      { label: 'Yes — one tap from anywhere', points: 5 },
    ],
  },
  {
    id: 5,
    category: 'First impression',
    text: 'How does your website look on a phone?',
    options: [
      { label: 'It breaks on phones', points: 1 },
      { label: 'Outdated but loads', points: 2 },
      { label: 'Plain but works', points: 3 },
      { label: 'Looks good', points: 4 },
      { label: 'Looks great — feels like us', points: 5 },
    ],
  },
  {
    id: 6,
    category: 'First impression',
    text: 'When was your site last meaningfully updated?',
    options: [
      { label: '5+ years ago', points: 1 },
      { label: '3\u20135 years ago', points: 2 },
      { label: '1\u20133 years ago', points: 3 },
      { label: 'This year', points: 4 },
      { label: 'This month', points: 5 },
    ],
  },
  {
    id: 7,
    category: 'The grant',
    text: 'Have you heard of the Google Ad Grant?',
    options: [
      { label: 'No — never heard of it', points: 1 },
      { label: 'Heard of it — not sure', points: 2 },
      { label: 'Know it — never applied', points: 3 },
      { label: 'Applied — denied', points: 4 },
      { label: 'Active', points: 5 },
    ],
  },
  {
    id: 8,
    category: 'The grant',
    text: 'Is grant traffic actually reaching your website?',
    options: [
      { label: 'We\u2019re not on the grant', points: 1 },
      { label: 'Don\u2019t know', points: 2 },
      { label: 'No — no tracking', points: 3 },
      { label: 'Hard to say', points: 4 },
      { label: 'Yes — we track monthly', points: 5 },
    ],
  },
  {
    id: 9,
    category: 'Qualifiers',
    text: 'What matters most to your church right now?',
    options: [
      { label: 'Reaching new families', points: null },
      { label: 'Serving current members', points: null },
      { label: 'Fundraising', points: null },
      { label: 'Events & registration', points: null },
    ],
  },
  {
    id: 10,
    category: 'Qualifiers',
    text: 'What size is your church — and when would you want this done?',
    options: [
      { label: '0\u2013150 · Just exploring', points: null },
      { label: '150\u2013400 · This month', points: null },
      { label: '400\u2013800 · This quarter', points: null },
      { label: '800+ · Before Easter', points: null },
    ],
  },
]

export const SCORED_QUESTIONS = QUESTIONS.filter((q) => q.options.some((o) => o.points !== null))

export const CATEGORY_TOTAL: Record<Category, number> = {
  Findability: 15,
  'First impression': 15,
  'The grant': 10,
}

export const MAX_SCORE = 40

export type TierId = 'hidden' | 'found' | 'ready'

export const TIERS: Record<
  TierId,
  { min: number; name: string; line: string; body: string; fixes: string[]; cta: string }
> = {
  hidden: {
    min: 0,
    name: 'The Hidden Church',
    line: 'You\u2019re doing the work — Google just can\u2019t see it yet.',
    body:
      'This is the most fixable place to be. Your church exists; the neighborhood just can\u2019t find it. Every fix below is a small, concrete step — most can be started this week, and none of them require becoming technical.',
    fixes: [
      'Set up your Google Business Profile — the single fastest win in local search',
      'Put service times, address, and directions above the fold on your homepage',
      'Get on the Google Ad Grant eligibility path — free ad budget while you fix the rest',
    ],
    cta: 'Book your free 20-min first-steps call',
  },
  found: {
    min: 16,
    name: 'Found, but overlooked',
    line: 'Neighbors find you — then leave.',
    body:
      'You show up on Google, but the first impression is doing the losing. Visitors land on an outdated, phone-hostile page and click the next church in the map pack. The fixes here turn found into chosen.',
    fixes: [
      'Rebuild the first impression: mobile-first, service times in one tap, fresh photos',
      'Make sermons and podcast content findable — it\u2019s your best search asset',
      'Turn on the grant and aim it at the searches that actually bring new families',
    ],
    cta: 'Book your free Health Check report call',
  },
  ready: {
    min: 30,
    name: 'Sunday-ready',
    line: 'Strong foundation — the $10K is the unlock.',
    body:
      'Your church is showing up well. The one thing between you and the growth the foundation deserves is the grant most churches never claim — up to $10,000/month in free Google Ads, aimed at the neighbors searching for you.',
    fixes: [
      'Get the grant active — most churches qualify and never apply',
      'Aim it at \u201Cchurch near me\u201D and service-time searches with monthly refreshes',
      'Polish the conversion path: Plan-a-Visit pages that turn clicks into first-timers',
    ],
    cta: 'Book your free grant strategy call',
  },
}

export function scoreAnswers(answers: Record<number, number>): { total: number; categories: Record<Category, number> } {
  const categories: Record<Category, number> = { Findability: 0, 'First impression': 0, 'The grant': 0 }
  let total = 0
  for (const q of SCORED_QUESTIONS) {
    const points = answers[q.id] ?? 0
    if (q.category !== 'Qualifiers') {
      categories[q.category] += points
      total += points
    }
  }
  return { total, categories }
}

export function tierForScore(score: number): TierId {
  if (score >= TIERS.ready.min) return 'ready'
  if (score >= TIERS.found.min) return 'found'
  return 'hidden'
}