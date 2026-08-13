'use client'

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden film-grain vignette light-rays">
      {/* Photographic backdrop - soft focus, backlit hand/object */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

        {/* Hero Image - Professional photography */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden opacity-30 lg:opacity-60">
          <div className="relative h-full w-full">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80&fit=crop&auto=format"
              alt="Abstract geometric forms"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: 'blur(2px) brightness(0.6) saturate(0.7)',
              }}
            />

            {/* Backlit gradient overlay simulating rim light */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-800/40 to-gray-900/80" />
          </div>
        </div>

        {/* Split tone color grading overlay */}
        <div className="split-tone absolute inset-0" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Large typography and CTAs */}
            <div className="space-y-6 sm:space-y-8">
              {/* Badge pill */}
              <div>
                <span className="microlabel inline-block">
                  Fresh Perspectives, Bold Ideas
                </span>
              </div>

              {/* Massive headline */}
              <div className="space-y-2 sm:space-y-4">
                <h1 className="hero-display">
                  Your story.
                </h1>
                <h2 className="hero-subhead text-gray-400">
                  Amplified.
                </h2>
              </div>

              {/* Subheading text */}
              <p
                className="body-large text-gray-300 max-w-xl"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                We&apos;re a young media agency with big ambitions. Combining creativity with strategy,
                we help emerging brands find their voice and make an impact in the digital world.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-4 rounded-full font-medium text-base transition-all duration-300 bg-white text-black hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
                  style={{ fontFamily: 'var(--font-family-body)' }}
                >
                  Let&apos;s Talk
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="pill-cta font-light text-base w-full sm:w-auto hover:scale-[1.03] active:scale-[0.98]"
                  style={{ fontFamily: 'var(--font-family-body)' }}
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Right column - Translucent cube with volumetric lighting */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glass cube */}
                <div
                  className="glass-cube volumetric-glow w-64 h-64 rounded-3xl transform-gpu transition-transform duration-600 hover:scale-[1.02]"
                  style={{
                    transform: 'perspective(1000px) rotateY(-8deg) rotateX(5deg)',
                  }}
                >
                  {/* Inner reflective layers */}
                  <div className="absolute inset-4 rounded-2xl border border-white/10" />
                  <div className="absolute inset-8 rounded-xl border border-white/5" />

                  {/* Circular ring element */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-spin"
                    style={{ animationDuration: '20s' }}
                    viewBox="0 0 256 256"
                  >
                    <circle
                      cx="128"
                      cy="128"
                      r="80"
                      className="diagram-line"
                      strokeDasharray="8 8"
                    />
                    <circle cx="128" cy="48" r="6" className="diagram-node" />
                    <circle cx="208" cy="128" r="6" className="diagram-node" />
                    <circle cx="128" cy="208" r="6" className="diagram-node" />
                    <circle cx="48" cy="128" r="6" className="diagram-node" />
                  </svg>

                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/40 to-teal-500/40 blur-xl animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
