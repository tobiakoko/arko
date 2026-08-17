'use client'

import { useMemo, useState } from 'react'
import { submitLead } from '@/lib/lead-capture'
import { loadAnswers, loadProfile, saveAnswers, type Profile } from '@/lib/scorecard-storage'

type Option = { label: string; points: number }
type Question = {
  id: string
  category: string
  text: string
  options: Option[]
}
type Qualifying = { id: string; text: string; options: string[] }

const SCORED: Question[] = [
  { id: 'map', category: 'Found on Google', text: 'When you search "church near me" in your city, does your church appear in the map pack?', options: [
    { label: 'Yes, consistently', points: 5 },
    { label: 'Sometimes', points: 3 },
    { label: 'No', points: 1 },
    { label: "Don't know", points: 0 },
  ]},
  { id: 'gbp', category: 'Found on Google', text: 'Is your Google Business Profile complete — photos, service times, regular updates?', options: [
    { label: 'Yes, fully', points: 5 },
    { label: 'Mostly', points: 4 },
    { label: 'Partially', points: 2 },
    { label: 'Not sure', points: 1 },
  ]},
  { id: 'visit', category: 'Website', text: 'Can a first-time visitor find your service times and directions in under 30 seconds?', options: [
    { label: 'Yes', points: 5 },
    { label: 'Mostly', points: 3 },
    { label: 'No', points: 1 },
    { label: "Don't know", points: 0 },
  ]},
  { id: 'mobile', category: 'Website', text: 'Do the main actions on your site work on a phone?', options: [
    { label: 'Yes', points: 5 },
    { label: 'Somewhat', points: 3 },
    { label: 'No', points: 1 },
    { label: 'Not sure', points: 1 },
  ]},
  { id: 'owner', category: 'Ownership', text: 'Who owns your domain and website files?', options: [
    { label: 'We do', points: 5 },
    { label: 'Our agency does', points: 2 },
    { label: 'Not sure', points: 0 },
  ]},
  { id: 'exit', category: 'Ownership', text: 'If you left your current provider tomorrow, could you keep your site?', options: [
    { label: 'Yes', points: 5 },
    { label: 'No', points: 0 },
    { label: 'Not sure', points: 1 },
  ]},
  { id: 'updated', category: 'Maintenance', text: 'When was your site last updated — content, security, or design?', options: [
    { label: 'Within the last 30 days', points: 5 },
    { label: 'Within the last 6 months', points: 3 },
    { label: 'Over a year ago', points: 1 },
    { label: 'Never', points: 0 },
    { label: 'Not sure', points: 1 },
  ]},
  { id: 'maintainer', category: 'Maintenance', text: 'Who handles updates and security today?', options: [
    { label: 'A paid provider', points: 5 },
    { label: 'A volunteer', points: 2 },
    { label: 'Nobody', points: 0 },
    { label: 'Not sure', points: 1 },
  ]},
  { id: 'wcag', category: 'Accessibility', text: 'Does your site meet WCAG accessibility standards — usable with a screen reader?', options: [
    { label: 'Yes', points: 5 },
    { label: 'Not sure', points: 1 },
    { label: 'No', points: 0 },
  ]},
  { id: 'confident', category: 'Accessibility', text: 'How confident are you that a blind visitor could use your site?', options: [
    { label: 'Confident', points: 5 },
    { label: 'Somewhat', points: 2 },
    { label: 'Not confident', points: 0 },
  ]},
]

const QUALIFYING: Qualifying[] = [
  { id: 'size', text: 'About how many people attend your Sunday service?', options: ['Under 100', '100–500', '500+'] },
  { id: 'role', text: 'What\u2019s your role at the church?', options: ['Senior pastor', 'Administrator', 'Volunteer', 'Other'] },
  { id: 'budget', text: 'Do you have a budget for church website work this year?', options: ['Yes', 'Not yet', 'Not sure'] },
]

const CATEGORY_LABELS = ['Found on Google', 'Website', 'Ownership', 'Maintenance', 'Accessibility'] as const

const FIXES: Record<string, { low: string; medium: string; high: string }> = {
  'Found on Google': {
    low: 'Claim your Google Business Profile and complete every field — photos, service times, and a weekly post.',
    medium: 'Post to your profile twice a month and answer questions promptly — consistency is what ranks.',
    high: 'Keep weekly posts and review Q&A so the map pack treats you as active.',
  },
  Website: {
    low: 'Put current service times, address, and a welcome line on your homepage, phone-first.',
    medium: 'Add a Plan Your Visit page — service times, directions, what to expect — so first-timers never have to ask.',
    high: 'Audit speed and mobile flow; every main action should work in two taps.',
  },
  Ownership: {
    low: 'Get your domain and site files into the church\u2019s own name — this is the lock-in trap most agencies leave behind.',
    medium: 'Confirm the transfer is complete and that you hold the keys, not a vendor.',
    high: 'Keep ownership documented so it survives leadership changes.',
  },
  Maintenance: {
    low: 'Set a monthly update routine — or hand it to a care plan so it actually happens.',
    medium: 'Schedule security updates and backups; a stale site is a security risk and a bad first impression.',
    high: 'Keep your cadence and add plain-English monthly reports so the board knows what it pays for.',
  },
  Accessibility: {
    low: 'Run a WCAG check on your homepage — many churches discover barriers they never knew existed.',
    medium: 'Fix the top barriers found and test with a screen reader once.',
    high: 'Add monitoring so accessibility stays true as the site evolves.',
  },
}

const EASY_STEPS = [
  'Claim your Google Business Profile and complete every field — it is free and the single biggest lever.',
  'Put current service times and directions on your homepage, readable on a phone.',
  'Make sure your domain and site files are in the church\u2019s own name.',
]

const SITE_CTA_CALL = 'Book a 15-min call'
const SITE_CTA_CALL_HREF =
  'mailto:hello@arkomedialabs.com?subject=Book%20a%2015-min%20call%20with%20Arko%20Media%20Labs'

const TIERS = {
  low: {
    name: 'Needs attention',
    headline: 'Your church is hard to find right now.',
    body: 'That is fixable — and most churches in your situation are a few levers away from being found. Here is where to start:',
    cta: 'Book a 15-min call — we\u2019ll fix the worst one with you.',
    ctaLabel: SITE_CTA_CALL,
  },
  medium: {
    name: 'Getting closer',
    headline: 'Strong foundations with room to improve.',
    body: 'You are closer than most — the fixes below are the ones with the biggest payoff, in order:',
    cta: 'Book a 15-min call — get a custom plan.',
    ctaLabel: SITE_CTA_CALL,
  },
  high: {
    name: 'Strong foundations',
    headline: 'Excellent foundation — now keep it.',
    body: 'Your church is already findable. The work now is keeping it that way as you grow:',
    cta: 'Book a call — we\u2019ll help you keep it that way.',
    ctaLabel: SITE_CTA_CALL,
  },
}

type Stage = 'capture' | 'questions' | 'results'

export default function Scorecard() {
  const totalQuestions = SCORED.length + QUALIFYING.length
  const [stage, setStage] = useState<Stage>(() => (loadProfile() ? 'questions' : 'capture'))
  const [profile, setProfile] = useState<Profile>(() => loadProfile() ?? { name: '', church: '', city: '', email: '' })
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({})
  const [index, setIndex] = useState<number>(() => {
    const saved = loadAnswers()
    const answered = Object.keys(saved).length
    return answered > 0 ? Math.min(answered, totalQuestions - 1) : 0
  })
  const [answers, setAnswers] = useState<Record<string, number>>(() => loadAnswers())
  const [qualifying, setQualifying] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const currentScored = index < SCORED.length ? SCORED[index] : null
  const currentQualifying = index >= SCORED.length ? QUALIFYING[index - SCORED.length] : null
  const currentLabel = currentScored?.category ?? 'About you'
  const currentText = currentScored?.text ?? currentQualifying?.text ?? ''
  const progressLabel = index === totalQuestions - 1 ? 'Almost done!' : `Question ${index + 1} of ${totalQuestions}`

  const result = useMemo<{
    score: number
    tier: 'low' | 'medium' | 'high'
    categoryScores: Record<string, number>
  }>(() => {
    const raw = SCORED.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
    const categoryScores: Record<string, number> = {}
    for (const label of CATEGORY_LABELS) {
      categoryScores[label] = SCORED.filter((q) => q.category === label).reduce(
        (sum, q) => sum + (answers[q.id] ?? 0),
        0,
      )
    }
    const score = Math.min(raw, 50)
    const tier = score <= 24 ? 'low' : score <= 38 ? 'medium' : 'high'
    return { score, tier, categoryScores }
  }, [answers])

  function validateProfile(field: string, value: string) {
    if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Enter a valid email address.'
    }
    const labels: Record<string, string> = {
      name: 'Enter your name.',
      church: "Enter your church's name.",
      city: "Enter the church's city.",
      email: 'Enter your email address.',
    }
    if (!value.trim()) return labels[field]
    return ''
  }

  function handleProfileBlur(field: string) {
    const message = validateProfile(field, profile[field as keyof Profile])
    setProfileErrors((prev) => ({ ...prev, [field]: message }))
  }

  function startQuestions(event: React.FormEvent) {
    event.preventDefault()
    const next: Record<string, string> = {}
    ;(Object.keys(profile) as (keyof Profile)[]).forEach((field) => {
      const message = validateProfile(field, profile[field])
      if (message) next[field] = message
    })
    setProfileErrors(next)
    if (Object.keys(next).length > 0) return
    try {
      localStorage.setItem('arko-scorecard-profile', JSON.stringify(profile))
    } catch {
      // storage unavailable — answers live in state
    }
    setStage('questions')
  }

  function answer(value: number) {
    const next = { ...answers, [currentScored!.id]: value }
    setAnswers(next)
    if (index < totalQuestions - 1) {
      setIndex(index + 1)
    } else {
      finish(next)
    }
  }

  function answerQualifying(value: string) {
    const next = { ...qualifying, [currentQualifying!.id]: value }
    setQualifying(next)
    if (index < totalQuestions - 1) {
      setIndex(index + 1)
    } else {
      finish(answers)
    }
  }

  function back() {
    if (index > 0) setIndex(index - 1)
  }

  function finish(finalAnswers: Record<string, number>) {
    saveAnswers(finalAnswers)
    const payload = {
      kind: 'scorecard' as const,
      ...profile,
      answers: finalAnswers,
      score: result.score,
      tier: result.tier,
      categoryScores: result.categoryScores,
    }
    setStage('results')
    void submitLead(payload).catch(() => {})
  }

  async function sendResults() {
    setSending(true)
    setSendError(false)
    try {
      await submitLead({
        kind: 'scorecard',
        ...profile,
        answers,
        score: result.score,
        tier: result.tier,
        categoryScores: result.categoryScores,
      })
      setSent(true)
    } catch {
      setSendError(true)
      setSending(false)
    }
  }

  if (stage === 'capture') {
    return (
      <section className="container-site pb-24">
        <div className="mx-auto max-w-xl">
          <h2 className="type-h3">Before we start — where do we send your score?</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Your answers are scored on this page. Enter your details to begin; we reply within
            one business day.
          </p>
          <form onSubmit={startQuestions} noValidate className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  ['name', 'Your name'],
                  ['church', 'Church name'],
                  ['city', 'Church city'],
                  ['email', 'Email'],
                ] as const
              ).map(([field, label]) => (
                <div key={field}>
                  <label htmlFor={`sc-${field}`} className="field-label">
                    {label}
                  </label>
                  <input
                    id={`sc-${field}`}
                    className="input"
                    type={field === 'email' ? 'email' : 'text'}
                    autoComplete={field === 'email' ? 'email' : field === 'name' ? 'name' : field === 'church' ? 'organization' : 'address-level2'}
                    value={profile[field]}
                    onChange={(e) => setProfile({ ...profile, [field]: e.target.value })}
                    onBlur={() => handleProfileBlur(field)}
                    aria-invalid={profileErrors[field] ? true : undefined}
                    aria-describedby={profileErrors[field] ? `sc-${field}-error` : undefined}
                  />
                  {profileErrors[field] && (
                    <p id={`sc-${field}-error`} className="input-error">
                      {profileErrors[field]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-primary mt-6 w-full">
              Get my score
            </button>
            <p className="mt-3 text-center text-sm text-ink-faint">
              Free, takes about 3 minutes. We never sell your info.
            </p>
          </form>
        </div>
      </section>
    )
  }

  if (stage === 'questions') {
    return (
      <section className="container-site pb-24">
        <div className="mx-auto max-w-2xl">
          <p className="type-eyebrow" aria-live="polite">
            {progressLabel}
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line" aria-hidden>
            <div
              className="h-full rounded-full bg-signal-500 transition-all duration-300"
              style={{ width: `${((index + 1) / totalQuestions) * 100}%` }}
            />
          </div>
          <div className="mt-10 rounded-[10px] border border-line bg-surface p-8">
            <p className="type-eyebrow">{currentLabel}</p>
            <h2 className="type-h3 mt-3">{currentText}</h2>
            <div className="mt-6 flex flex-col gap-2" role="radiogroup" aria-label={currentText}>
              {currentScored ? (
                currentScored.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    role="radio"
                    aria-checked={answers[currentScored.id] === option.points}
                    onClick={() => answer(option.points)}
                    className={`flex min-h-12 items-center justify-between rounded-lg border px-4 py-3 text-left text-[0.9375rem] transition-colors ${
                      answers[currentScored.id] === option.points
                        ? 'border-signal-500 bg-signal-50 font-medium text-signal-700'
                        : 'border-line bg-paper text-ink hover:border-ink-faint'
                    }`}
                  >
                    {option.label}
                  </button>
                ))
              ) : (
                currentQualifying!.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={qualifying[currentQualifying!.id] === option}
                    onClick={() => answerQualifying(option)}
                    className={`flex min-h-12 items-center justify-between rounded-lg border px-4 py-3 text-left text-[0.9375rem] transition-colors ${
                      qualifying[currentQualifying!.id] === option
                        ? 'border-signal-500 bg-signal-50 font-medium text-signal-700'
                        : 'border-line bg-paper text-ink hover:border-ink-faint'
                    }`}
                  >
                    {option}
                  </button>
                ))
              )}
            </div>
          </div>
          {index > 0 && (
            <button type="button" onClick={back} className="btn btn-tertiary mt-6">
              Back
            </button>
          )}
          <p className="mt-4 text-sm text-ink-faint">
            Your progress is saved on this device automatically.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="container-site pb-24" id="report">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[10px] border border-line bg-surface p-8 sm:p-12">
          <p className="type-eyebrow">Church Visibility Scorecard</p>
          <p className="mt-2 text-sm text-ink-soft">
            Prepared for {profile.church} · {profile.city}, TX · {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <div className="mt-8 flex items-end justify-between gap-6">
            <div>
              <p className="type-metric text-6xl text-ink">{result.score}<span className="text-2xl text-ink-faint">/50</span></p>
              <p className="type-eyebrow mt-2">{TIERS[result.tier].name}</p>
            </div>
            <div className="flex gap-3" aria-hidden>
              {(['low', 'medium', 'high'] as const).map((t) => (
                <span
                  key={t}
                  className={`h-2.5 w-10 rounded-full ${
                    t === result.tier ? 'bg-signal-500' : 'bg-line'
                  }`}
                />
              ))}
            </div>
          </div>

          <h3 className="type-h3 mt-10">{TIERS[result.tier].headline}</h3>
          <p className="mt-2 text-ink-soft">{TIERS[result.tier].body}</p>

          <div className="mt-8">
            <h4 className="type-eyebrow mb-4">Where you stand</h4>
            <ul className="space-y-3">
              {CATEGORY_LABELS.map((label) => {
                const max = 10
                const value = result.categoryScores[label]
                return (
                  <li key={label}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-ink">{label}</span>
                      <span className="type-metric text-ink-soft">{value}/{max}</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-line" aria-hidden>
                      <div
                        className="h-full rounded-full bg-signal-400 transition-all duration-500"
                        style={{ width: `${(value / max) * 100}%` }}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="mt-10">
            <h4 className="type-eyebrow mb-4">Your prioritized fixes</h4>
            {result.tier === 'low' && (
              <ol className="space-y-3">
                {EASY_STEPS.map((step, i) => (
                  <li key={step} className="flex gap-3 rounded-lg border border-line bg-paper p-4 text-sm text-ink-soft">
                    <span className="type-metric text-signal-500">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            )}
            {result.tier !== 'low' && (
              <ol className="space-y-3">
                {CATEGORY_LABELS.map((label, i) => (
                  <li key={label} className="flex gap-3 rounded-lg border border-line bg-paper p-4 text-sm text-ink-soft">
                    <span className="type-metric text-signal-500">{i + 1}</span>
                    <span>
                      <span className="font-medium text-ink">{label}: </span>
                      {FIXES[label][result.tier]}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href={SITE_CTA_CALL_HREF} className="btn btn-primary">
              {TIERS[result.tier].ctaLabel}
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn btn-secondary text-sm"
            >
              Save or print your report (PDF)
            </button>
          </div>

          <div className="mt-8 border-t border-line pt-6" aria-live="polite">
            {sent ? (
              <p className="text-sm font-medium text-result">
                Sent — we&rsquo;ll reply within one business day.
              </p>
            ) : sendError ? (
              <div>
                <p className="text-sm font-medium text-caution">
                  Sending failed — your answers are saved. Try again.
                </p>
                <button type="button" onClick={() => void sendResults()} className="btn btn-tertiary mt-2 text-sm">
                  Try again
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => void sendResults()}
                disabled={sending}
                className="btn btn-secondary text-sm"
              >
                {sending ? 'Sending…' : 'Email me these results'}
              </button>
            )}
            <p className="mt-3 text-sm text-ink-faint">
              One senior person — not a call center — reads every scorecard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}