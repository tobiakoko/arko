'use client'

import { useState } from 'react'
import { submitLead } from '@/lib/lead-capture'
import { SITE } from '@/lib/site'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', church: '', city: '', phone: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [sendError, setSendError] = useState(false)

  function validate(field: string, value: string) {
    if (field === 'phone' && value && !/^[\d\s()+.-]{7,}$/.test(value)) {
      return 'Enter a valid phone number.'
    }
    if (field === 'name' && !value.trim()) return 'Enter your name.'
    if (field === 'message' && !value.trim()) return 'Tell us what you need.'
    return ''
  }

  function handleBlur(field: string) {
    const message = validate(field, values[field as keyof typeof values])
    setErrors((prev) => ({ ...prev, [field]: message }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    const next: Record<string, string> = {}
    ;(Object.keys(values) as (keyof typeof values)[]).forEach((field) => {
      const message = validate(field, values[field])
      if (message) next[field] = message
    })
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSending(true)
    setSendError(false)
    try {
      await submitLead({ kind: 'contact', ...values })
      setSent(true)
    } catch {
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        {(
          [
            ['name', 'Your name', 'text', 'name'],
            ['church', 'Church name (optional)', 'text', 'organization'],
            ['city', 'Church city', 'text', 'address-level2'],
            ['phone', 'Phone (optional)', 'tel', 'tel'],
          ] as const
        ).map(([field, label, type, autocomplete]) => (
          <div key={field}>
            <label htmlFor={`contact-${field}`} className="field-label">
              {label}
            </label>
            <input
              id={`contact-${field}`}
              type={type}
              className="input"
              autoComplete={autocomplete}
              value={values[field]}
              onChange={(e) => setValues({ ...values, [field]: e.target.value })}
              onBlur={() => handleBlur(field)}
              aria-invalid={errors[field] ? true : undefined}
              aria-describedby={errors[field] ? `contact-${field}-error` : undefined}
            />
            {errors[field] && (
              <p id={`contact-${field}-error`} className="input-error">
                {errors[field]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <label htmlFor="contact-message" className="field-label">
          What do you need?
        </label>
        <textarea
          id="contact-message"
          className="input min-h-32 resize-y"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          onBlur={() => handleBlur('message')}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="input-error">
            {errors.message}
          </p>
        )}
      </div>
      <div className="mt-6" aria-live="polite">
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={sending || sent}>
          {sending ? 'Sending…' : sent ? 'Sent' : 'Send message'}
        </button>
        {sent && (
          <p className="mt-3 text-sm font-medium text-result">
            Sent — we&rsquo;ll reply within one business day.
          </p>
        )}
        {sendError && (
          <p className="mt-3 text-sm font-medium text-caution">
            Sending failed — your message is still here. Try again, or email {SITE.contact.email} directly.
          </p>
        )}
      </div>
    </form>
  )
}