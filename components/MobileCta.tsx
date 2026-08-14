import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-paper/95 p-3 backdrop-blur lg:hidden">
      <Link href="/health-check" className="btn btn-primary w-full">
        {SITE.cta}
      </Link>
    </div>
  )
}