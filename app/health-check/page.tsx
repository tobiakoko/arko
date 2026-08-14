import type { Metadata } from 'next'
import HealthCheckQuiz from '@/components/health-check/HealthCheckQuiz'

export const metadata: Metadata = {
  title: 'Free Church Website Health Check',
  description:
    'Answer 10 quick questions to see exactly where your church stands on Google — website, first impression, and the $10,000/month Google Ad Grant. Get your Digital Health Score and a fix-it list in under 3 minutes.',
}

export default function HealthCheckPage() {
  return <HealthCheckQuiz />
}