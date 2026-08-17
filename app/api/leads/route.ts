import { NextResponse } from 'next/server'
import type { LeadPayload } from '@/lib/lead-capture'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? 'site@arkomedialabs.com'
const TO_EMAIL = process.env.LEAD_TO_EMAIL ?? 'hello@arkomedialabs.com'

export async function POST(request: Request) {
  let payload: LeadPayload
  try {
    payload = (await request.json()) as LeadPayload
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  if (!payload.name) {
    return NextResponse.json({ error: 'Missing name' }, { status: 400 })
  }
  if (payload.kind === 'scorecard' && !payload.email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 })
  }
  if (payload.kind === 'contact' && !payload.email && !payload.phone) {
    return NextResponse.json({ error: 'Missing contact method' }, { status: 400 })
  }

  if (RESEND_API_KEY) {
    const subject =
      payload.kind === 'scorecard'
        ? `Church Visibility Scorecard: ${payload.name} (${payload.church ?? 'church unknown'}) — score ${payload.score ?? '—'}`
        : `Contact request: ${payload.name}${payload.church ? ` (${payload.church})` : ''}`
    const text = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.church ? `Church: ${payload.church}` : null,
      payload.city ? `City: ${payload.city}` : null,
      payload.phone ? `Phone: ${payload.phone}` : null,
      payload.score !== undefined ? `Score: ${payload.score}/50 (${payload.tier})` : null,
      payload.message ? `Message: ${payload.message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        text,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Delivery failed' }, { status: 502 })
    }
  } else {
    console.log('[lead]', JSON.stringify(payload, null, 2))
  }

  return NextResponse.json({ ok: true })
}