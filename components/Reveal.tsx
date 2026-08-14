'use client'

import { useEffect, useState } from 'react'

export default function Reveal({ text, as: Tag = 'h1', className = '' }: { text: string; as?: 'h1' | 'h2' | 'h3'; className?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), 150)
    return () => window.clearTimeout(t)
  }, [])

  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top"
          style={{
            transform: visible ? 'translateY(0)' : 'translateY(110%)',
            opacity: visible ? 1 : 0,
            transition: `transform 800ms var(--ease-expo-out) ${200 + i * 80}ms, opacity 800ms ease ${200 + i * 80}ms`,
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}