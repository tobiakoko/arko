'use client'

import { useState } from 'react'
import { QUESTIONS, TIERS, MAX_SCORE, scoreAnswers, tierForScore, CATEGORY_TOTAL } from '@/lib/health-check'
import type { Category } from '@/lib/health-check'
import { submitLead } from '@/lib/lead-capture'
import { SITE } from '@/lib/site'

type Stage = 'landing' | 'capture' | 'question' | 'done'

const TOTAL_QUESTIONS = QUESTIONS.length

function Progress({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">
          {current === 0 ? 'Just the basics first' : `Question ${current} of ${total}`}
        </span>
        <span className="text-text-tertiary">{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-amber-700 transition-all duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function HealthCheckQuiz() {
  const [stage, setStage] = useState<Stage>('landing')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const current = QUESTIONS[questionIndex]
  const currentAnswer = answers[current.id]

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const start = () => setStage('capture')

  const submitCapture = () => {
    if (!emailValid) {
      setEmailTouched(true)
      return
    }
    setStage('question')
    setQuestionIndex(0)
  }

  const selectOption = (points: number | null) => {
    if (points === null) return
    const next = { ...answers, [current.id]: points }
    setAnswers(next)
    window.setTimeout(() => {
      if (questionIndex < TOTAL_QUESTIONS - 1) setQuestionIndex(questionIndex + 1)
      else finish(next)
    }, 120)
  }

  const finish = async (finalAnswers: Record<number, number>) => {
    const { total, categories } = scoreAnswers(finalAnswers)
    const tier = tierForScore(total)
    await submitLead({
      name,
      email,
      phone,
      answers: finalAnswers,
      score: total,
      tier,
      categoryScores: categories,
    })
    setStage('done')
  }

  const restart = () => {
    setStage('landing')
    setAnswers({})
    setQuestionIndex(0)
    setEmailTouched(false)
  }

  if (stage === 'landing') {
    return (
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="type-label mb-5">Free · Takes less than 3 minutes</p>
          <h1 className="type-h1 text-ink">What&apos;s your church&apos;s Digital Health Score?</h1>
          <p className="type-body mt-6 text-text-body">
            Answer 10 quick questions to see exactly where your church stands on Google — your
            website, your first impression, and the $10,000/month grant — and get a personalized
            fix-it list.
          </p>
          <div className="mx-auto mt-10 grid max-w-md gap-3 text-left">
            {[
              'A score out of 40, by category — no fluff',
              'A fix-it list written for a pastor, not a developer',
              'Your 3 easiest wins this week — free to keep',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-sm text-text-body">
                <span className="mt-0.5 text-amber-700" aria-hidden>✓</span>
                {item}
              </div>
            ))}
          </div>
          <button type="button" onClick={start} className="btn btn-primary mt-10">
            Start the Health Check
          </button>
          <p className="mt-4 text-sm text-text-tertiary">
            Your answers are private. No spam — and you can stop anytime.
          </p>
        </div>
      </section>
    )
  }

  if (stage === 'capture') {
    return (
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-xl">
          <Progress current={0} total={TOTAL_QUESTIONS} />
          <h1 className="type-h2 text-ink">Where should we send your results?</h1>
          <p className="mt-3 text-text-body">
            Ten questions, one score, and a fix-it list. We&apos;ll use this email only for your
            results and follow-ups.
          </p>

          <div className="card mt-8 space-y-5">
            <div>
              <label htmlFor="hc-name" className="input-label">Your name</label>
              <input
                id="hc-name"
                type="text"
                autoComplete="name"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Pastor David"
              />
            </div>
            <div>
              <label htmlFor="hc-email" className="input-label">Email</label>
              <input
                id="hc-email"
                type="email"
                autoComplete="email"
                required
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                placeholder="pastor@yourchurch.org"
                aria-invalid={emailTouched && !emailValid}
                aria-describedby={emailTouched && !emailValid ? 'hc-email-error' : undefined}
              />
              {emailTouched && !emailValid && (
                <p id="hc-email-error" className="mt-2 text-sm text-amber-800">
                  That email doesn&apos;t look right — try name@yourchurch.org
                </p>
              )}
            </div>
            <div>
              <label htmlFor="hc-phone" className="input-label">Phone <span className="normal-case text-text-tertiary">(optional)</span></label>
              <input
                id="hc-phone"
                type="tel"
                autoComplete="tel"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(214) 555-0100"
              />
            </div>
            <button type="button" onClick={submitCapture} className="btn btn-primary w-full">
              Start the 10 questions →
            </button>
            <p className="text-center text-xs text-text-tertiary">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (stage === 'question') {
    const isLast = questionIndex === TOTAL_QUESTIONS - 1
    return (
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-xl">
          <Progress current={questionIndex + 1} total={TOTAL_QUESTIONS} />
          <div className="flex items-center justify-between gap-4">
            <p className="type-label">{current.category}</p>
            <button
              type="button"
              onClick={restart}
              className="min-h-11 text-sm text-text-tertiary underline-offset-4 hover:text-ink hover:underline"
            >
              Restart
            </button>
          </div>
          <h1 className="type-h2 mt-3 text-ink">{current.text}</h1>
          <div className="mt-8 space-y-3">
            {current.options.map((option) => {
              const selected = currentAnswer === option.points
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => selectOption(option.points)}
                  aria-pressed={selected}
                  className={`flex min-h-12 w-full items-center rounded-xl border px-5 py-3.5 text-left text-[0.9375rem] transition-colors ${
                    selected
                      ? 'border-amber-700 bg-amber-100/60 font-semibold text-ink'
                      : 'border-border-strong bg-surface text-text-body hover:border-ink'
                  }`}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setQuestionIndex(Math.max(0, questionIndex - 1))}
              disabled={questionIndex === 0}
              className="btn btn-secondary disabled:opacity-40"
            >
              ← Back
            </button>
            <p className="text-sm text-text-tertiary">
              {isLast ? 'Almost done!' : `${TOTAL_QUESTIONS - questionIndex - 1} to go`}
            </p>
          </div>
        </div>
      </section>
    )
  }

  const { total, categories } = scoreAnswers(answers)
  const tier = TIERS[tierForScore(total)]
  const categoryRows = (Object.keys(CATEGORY_TOTAL) as Category[]).map((cat) => ({
    name: cat,
    score: categories[cat],
    total: CATEGORY_TOTAL[cat],
  }))

  return (
    <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-2xl">
        <div id="report" className="card">
          <p className="type-label">Your Church&apos;s Digital Health Score</p>
          <p className="mt-6 font-display text-6xl font-semibold tracking-tight text-ink">
            {total}<span className="text-2xl text-text-tertiary">/{MAX_SCORE}</span>
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-amber-800">{tier.name}</p>

          <div className="mt-8 space-y-4">
            {categoryRows.map((row) => {
              const pct = Math.round((row.score / row.total) * 100)
              return (
                <div key={row.name}>
                  <div className="mb-1.5 flex items-baseline justify-between text-sm">
                    <span className="font-medium text-ink">{row.name}</span>
                    <span className="text-text-tertiary">{row.score}/{row.total}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-amber-700" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>

          <p className="type-h3 mt-10 text-ink">{tier.line}</p>
          <p className="mt-3 leading-relaxed text-text-body">{tier.body}</p>

          <ul className="mt-6 space-y-3">
            {tier.fixes.map((fix) => (
              <li key={fix} className="flex gap-3 text-[0.9375rem] text-text-body">
                <span className="mt-0.5 shrink-0 text-amber-700" aria-hidden>→</span>
                {fix}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-border pt-6">
            <a href="/contact" className="btn btn-primary w-full">
              {tier.cta}
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="mt-3 w-full text-sm text-text-secondary underline-offset-4 hover:text-ink hover:underline"
            >
              Save your report — choose “Save as PDF” in the print dialog
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <button type="button" onClick={restart} className="text-sm text-text-tertiary underline-offset-4 hover:text-ink hover:underline">
            Retake the Health Check
          </button>
          <p className="text-xs text-text-tertiary">
            Your score reflects your answers honestly — every point counts. {SITE.name}, {SITE.descriptor}.
          </p>
        </div>
      </div>
    </section>
  )
}