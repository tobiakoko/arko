export type LeadPayload = {
  name: string
  email: string
  phone: string
  answers: Record<number, number>
  score: number
  tier: 'hidden' | 'found' | 'ready'
  categoryScores: Record<string, number>
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  console.log('[lead-capture] submission received', payload)
  return Promise.resolve()
}