import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Google Ad Grant for Churches: Your $10,000/Month, Explained',
  description:
    'Every eligible church gets up to $10,000/month in free Google Ads. Most never claim it. What it is, whether you qualify, and why most church grants get suspended — in plain English.',
}

const faq = [
  {
    q: 'Is the Google Ad Grant really free?',
    a: 'Yes. Google gives nonprofits up to $10,000 per month in search advertising. You are never charged — Google grants it because it wants search ads from mission-driven organizations, not just businesses.',
  },
  {
    q: 'Do churches qualify?',
    a: 'Yes — churches with valid 501(c)(3) status qualify. You need the status, a working website on your own domain, and to serve people without discrimination. Most churches already qualify and simply never apply.',
  },
  {
    q: 'Why do most church grants get suspended?',
    a: 'Google requires the ad account to stay active and compliant. Suspensions usually happen because nobody touches the account: stale keywords, old ads, policy drift. Management is not optional — it is the whole game.',
  },
  {
    q: 'Can we manage it ourselves?',
    a: 'You can, if someone on your team will spend a few hours a month on it and learn Google Ads compliance. Most churches hire it out for the same reason they hire out the plumbing: it is someone\u2019s full-time craft.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function AdGrantGuidePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[65ch]">
          <p className="type-label mb-5">Guide for churches</p>
          <h1 className="type-h1 text-ink">
            The Google Ad Grant for churches: your $10,000/month, explained.
          </h1>
          <p className="mt-6 text-text-secondary">
            Written for pastors, not marketers. Read it before your coffee gets cold.
          </p>

          <div className="mt-10 space-y-6 leading-relaxed text-text-body">
            <h2 className="type-h2 text-ink">What it is</h2>
            <p>
              Google gives nonprofits up to <strong>$10,000 per month</strong> in free search
              advertising. That is real budget: when someone searches &ldquo;church near me&rdquo;
              on a Saturday night, ads paid for by Google can put your church in front of them.
              Not page three. In front.
            </p>
            <p>
              It is not a loan, not a discount, and not a trick. Google wants search ads from
              nonprofits the way it wants them from businesses — and for nonprofits, it provides
              the budget for free.
            </p>

            <h2 className="type-h2 text-ink">Whether your church qualifies</h2>
            <p>Three things, and that&apos;s genuinely it:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>501(c)(3) status</strong> — verified through Google for Nonprofits. Most churches have this or can get it in about a week.</li>
              <li><strong>A working website</strong> — on your own domain, loading reasonably fast, usable on phones. This is where most churches stall.</li>
              <li><strong>No discrimination</strong> — you welcome and serve everyone, and your site says so.</li>
            </ul>
            <p>
              If those three are true, the money is available. The church that qualifies and
              applies is rare — which is exactly why the grant is such an opportunity for the
              church that bothers.
            </p>

            <h2 className="type-h2 text-ink">Why most church grants get suspended</h2>
            <p>
              The grant has a compliance rule: the account must stay active. Ads must be refreshed,
              keywords must stay relevant, and the account must follow Google&apos;s ad policies.
              Google suspends thousands of church grants every year — almost always for one
              reason: <strong>nobody touched the account</strong>.
            </p>
            <p>
              The pastor is busy being a pastor. The volunteer webmaster left. The account goes
              stale, the suspension notice arrives, and the $10,000/month quietly disappears. The
              grant was never the hard part. The stewardship of it was.
            </p>

            <h2 className="type-h2 text-ink">What it takes to keep it alive</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Fresh ad groups and keywords, month after month</li>
              <li>Ads that match what neighbors actually search on Saturday night</li>
              <li>Compliance checks before Google&apos;s reviewer finds the problem</li>
              <li>One-page reports, in English, that a pastor can read in two minutes</li>
            </ul>

            <h2 className="type-h2 text-ink">Next step</h2>
            <p>
              Start with the free <Link href="/health-check" className="link-accent">Church Website Health Check</Link> —
              ten questions, your Digital Health Score, and a fix-it list. Question seven is about
              the grant. It takes less than three minutes.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="type-h2 text-ink">Common questions</h2>
            {faq.map((f) => (
              <div key={f.q} className="card !p-6">
                <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}