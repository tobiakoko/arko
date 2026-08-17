import Link from 'next/link'

export type Crumb = { label: string; href?: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-site pt-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-ink-faint" aria-hidden>
                  /
                </span>
              )}
              {item.href && !last ? (
                <Link href={item.href} className="text-ink-soft hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? 'font-medium text-ink' : 'text-ink-soft'} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}