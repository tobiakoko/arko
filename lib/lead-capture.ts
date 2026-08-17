export type LeadPayload = {
  kind: 'scorecard' | 'contact' | 'started'
  name: string
  email?: string
  church?: string
  city?: string
  phone?: string
  message?: string
  answers?: Record<string, number>
  score?: number
  tier?: 'low' | 'medium' | 'high'
  categoryScores?: Record<string, number>
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error(`lead submission failed: ${response.status}`)
  }
}