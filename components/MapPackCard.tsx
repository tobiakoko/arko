export default function MapPackCard({ city = 'Frisco' }: { city?: string }) {
  return (
    <div className="w-full max-w-md" aria-label="Google search results: church near me">
      <div className="flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-3.5 shadow-1">
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ink-faint" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <p className="truncate text-[0.9375rem] text-ink">
          church near me <span className="text-ink-soft">{city}</span>
          <span className="ml-1 inline-block h-4 w-px translate-y-0.5 bg-signal-500 motion-safe:animate-[caret-blink_1.1s_steps(1)_infinite]" aria-hidden />
        </p>
      </div>

      <div className="mt-3 overflow-hidden rounded-[10px] border border-line bg-surface shadow-1">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="type-eyebrow">Local results</p>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-faint" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M12 21s-6-5.1-6-10a6 6 0 1 1 12 0c0 4.9-6 10-6 10Z" strokeLinejoin="round" />
            <circle cx="12" cy="10.5" r="2.25" />
          </svg>
        </div>

        <div className="border-b border-dashed border-signal-200 bg-signal-50/60 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-signal-200 bg-surface text-signal-500">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M12 21s-6-5.1-6-10a6 6 0 1 1 12 0c0 4.9-6 10-6 10Z" strokeLinejoin="round" />
                <circle cx="12" cy="10.5" r="2.25" />
              </svg>
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-signal-700">
                Your church — right here.
              </p>
              <p className="text-sm text-ink-soft">This slot is empty until you claim it.</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-ink-faint">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9l3-7Z" strokeLinejoin="round" />
              </svg>
              <span className="inline-block h-2.5 w-16 rounded-full bg-line" aria-hidden />
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-faint">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" strokeLinecap="round" />
              </svg>
              <span className="inline-block h-2.5 w-10 rounded-full bg-line" aria-hidden />
            </div>
            <span className="ml-auto inline-block h-2.5 w-16 rounded-full bg-line" aria-hidden />
          </div>
          <div className="mt-4 h-2.5 w-3/4 rounded-full bg-line" aria-hidden />
          <div className="mt-2 h-2.5 w-1/2 rounded-full bg-line" aria-hidden />
        </div>
      </div>
    </div>
  )
}