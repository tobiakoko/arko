'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE } from '@/lib/site'
import { SCORECARD_KEY } from '@/lib/scorecard-storage'

export default function HomeCaptureForm() {
  const router = useRouter()
  const [values, setValues] = useState({ name: '', church: '', city: '', email: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)

  function validate(field: string, value: string) {
    if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Enter a valid email address.'
    }
    if (!value.trim()) {
      const labels: Record<string, string> = {
        name: 'Enter your name.',
        church: "Enter your church's name.",
        city: "Enter the church's city.",
        email: 'Enter your email address.',
      }
      return labels[field]
    }
    return ''
  }

  function handleBlur(field: string) {
    const message = validate(field, values[field as keyof typeof values])
    setErrors((prev) => ({ ...prev, [field]: message }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const next: Record<string, string> = {}
    ;(Object.keys(values) as (keyof typeof values)[]).forEach((field) => {
      const message = validate(field, values[field])
      if (message) next[field] = message
    })
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSending(true)
    localStorage.setItem(SCORECARD_KEY, JSON.stringify(values))
    router.push('/scorecard')
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="capture-name" className="field-label">
            Your name
          </label>
          <input
            id="capture-name"
            className="input"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            onBlur={() => handleBlur('name')}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'capture-name-error' : undefined}
          />
          {errors.name && (
            <p id="capture-name-error" className="input-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="capture-church" className="field-label">
            Church name
          </label>
          <input
            id="capture-church"
            className="input"
            autoComplete="organization"
            value={values.church}
            onChange={(e) => setValues({ ...values, church: e.target.value })}
            onBlur={() => handleBlur('church')}
            aria-invalid={errors.church ? true : undefined}
            aria-describedby={errors.church ? 'capture-church-error' : undefined}
          />
          {errors.church && (
            <p id="capture-church-error" className="input-error">
              {errors.church}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="capture-city" className="field-label">
            Church city
          </label>
          <input
            id="capture-city"
            className="input"
            autoComplete="address-level2"
            value={values.city}
            onChange={(e) => setValues({ ...values, city: e.target.value })}
            onBlur={() => handleBlur('city')}
            aria-invalid={errors.city ? true : undefined}
            aria-describedby={errors.city ? 'capture-city-error' : undefined}
          />
          {errors.city && (
            <p id="capture-city-error" className="input-error">
              {errors.city}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="capture-email" className="field-label">
            Email
          </label>
          <input
            id="capture-email"
            type="email"
            className="input"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            onBlur={() => handleBlur('email')}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'capture-email-error' : undefined}
          />
          {errors.email && (
            <p id="capture-email-error" className="input-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-6 w-full" disabled={sending}>
        {sending ? 'Getting your scorecard…' : SITE.cta}
      </button>
      <p className="mt-3 text-center text-sm text-ink-faint">
        Free, takes about 3 minutes. We reply within one business day.
      </p>
    </form>
  )
}