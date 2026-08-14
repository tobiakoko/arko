import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guides for Churches',
  description:
    'Plain-English guides for churches: the Google Ad Grant, church websites that get found, and digital ministry without the jargon.',
}

const posts = [
  {
    title: 'The Google Ad Grant for churches: your $10,000/month, explained in plain English',
    excerpt:
      'Every eligible church gets up to $10,000/month in free Google Ads. Most never claim it. Here\u2019s what it is, whether you qualify, and why most grants get suspended.',
    href: '/blog/google-ad-grant-for-churches',
    date: 'The guide to start with',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <p className="type-label mb-5">Guides</p>
        <h1 className="type-h1 max-w-[16ch] text-ink">Plain-English guides for churches.</h1>
        <p className="type-body mt-6 max-w-[65ch] text-text-body">
          No jargon, no fluff. Just what your church needs to know about being found online.
        </p>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link key={post.href} href={post.href} className="card group !p-8">
                <p className="type-label">{post.date}</p>
                <h2 className="type-h3 mt-4 text-ink group-hover:text-amber-800">{post.title}</h2>
                <p className="mt-3 max-w-[65ch] text-text-body">{post.excerpt}</p>
                <p className="link-accent mt-4 inline-block">Read the guide →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}