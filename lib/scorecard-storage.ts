export const SCORECARD_KEY = 'arko-scorecard-profile'
export const SCORECARD_ANSWERS_KEY = 'arko-scorecard-answers'

export type Profile = {
  name: string
  church: string
  city: string
  email: string
}

export function loadProfile(): Profile | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(SCORECARD_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Profile
    if (parsed && parsed.name && parsed.email) return parsed
    return null
  } catch {
    return null
  }
}

export function saveAnswers(answers: Record<string, number>) {
  try {
    localStorage.setItem(SCORECARD_ANSWERS_KEY, JSON.stringify(answers))
  } catch {
    // storage unavailable — answers live in state
  }
}

export function loadAnswers(): Record<string, number> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(SCORECARD_ANSWERS_KEY)
    return raw ? (JSON.parse(raw) as Record<string, number>) : {}
  } catch {
    return {}
  }
}