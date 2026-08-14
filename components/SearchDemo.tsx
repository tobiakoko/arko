'use client'

import { useState } from 'react'

export default function SearchDemo() {
  const [play, setPlay] = useState(0)

  const replay = () => setPlay((v) => v + 1)

  return (
    <div className="card !p-0 overflow-hidden" role="img" aria-label="Demo of your church appearing first in Google's map pack for a 'church near me' search">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 hidden truncate text-xs text-text-tertiary sm:block">
          google.com/search?q=church+near+me
        </span>
      </div>

      <button
        type="button"
        onClick={replay}
        onFocus={replay}
        className="flex w-full items-center gap-3 border-b border-border px-5 py-4 text-left"
        aria-label="Replay the search demo"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
        <span key={play} className="flex items-center font-medium text-ink">
          <span
            className="inline-block"
            style={{ animation: play ? `revealQuery 500ms var(--ease-expo-out) ${play}ms both` : 'none' }}
          >
            church near me
          </span>
          <span className="ml-0.5 inline-block h-4 w-px bg-amber-700" style={{ animation: 'blink 1.1s steps(2) infinite' }} />
        </span>
        <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 shrink-0 text-text-tertiary" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3a7 7 0 0 1 7 7c0 2.5-1 4-2 5l-1 5h-8l-1-5c-1-1-2-2.5-2-5a7 7 0 0 1 7-7z" strokeLinejoin="round" />
          <path d="M10 21h4" strokeLinecap="round" />
        </svg>
      </button>

      <div className="flex flex-col sm:flex-row" key={`pack-${play}`}>
        <div className="relative flex-1 border-b border-border bg-surface-2 sm:border-b-0 sm:border-r">
          <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden>
            <path d="M0 40h200M0 80h200M0 120h200M50 0v140M100 0v140M150 0v140" stroke="#E7E5E4" strokeWidth="1" />
            <circle cx="60" cy="50" r="3" fill="#D6D3D1" />
            <circle cx="140" cy="90" r="3" fill="#D6D3D1" />
            <circle cx="90" cy="105" r="3" fill="#D6D3D1" />
            <circle cx="120" cy="40" r="5" fill="#B45309" />
            <circle cx="120" cy="40" r="9" fill="#B45309" opacity="0.2" />
          </svg>
          <span className="absolute left-3 top-3 rounded-md bg-paper/80 px-2 py-1 text-[0.625rem] uppercase tracking-wider text-text-tertiary">
            Map
          </span>
        </div>

        <div className="flex-1 divide-y divide-border">
          <div className="bg-amber-100/50 px-5 py-4">
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-display text-lg font-semibold text-ink">Your Church</span>
              <span className="text-xs text-amber-800">★ 4.9 (87)</span>
            </p>
            <p className="mt-1 text-sm text-ink">Sunday 9:00 &amp; 11:00 AM</p>
            <p className="text-sm text-text-secondary">Last week&apos;s sermon · What to expect · Directions</p>
          </div>
          <div className="px-5 py-4 opacity-50">
            <p className="text-sm font-medium text-ink">Grace Fellowship</p>
            <p className="text-xs text-text-secondary">Sunday 10:00 AM</p>
          </div>
          <div className="px-5 py-4 opacity-50">
            <p className="text-sm font-medium text-ink">Hope Community</p>
            <p className="text-xs text-text-secondary">Sunday 9:30 AM</p>
          </div>
        </div>
      </div>

      <p className="bg-paper px-5 py-3 text-xs text-text-tertiary">
        Demo — how your church shows up for a Saturday-night search. Tap the search bar to replay.
      </p>
    </div>
  )
}