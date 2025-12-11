import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-studio-frame text-center relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/3 to-orange-500/3 rounded-[28px]" />

          <div className="relative z-10">
            <span className="microlabel inline-block mb-10">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-family-display)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              Building brands for the next generation through
              <br />
              <span className="font-light bg-linear-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                creative storytelling
              </span>,{' '}
              <span className="font-light bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                authentic connections
              </span>, and{' '}
              <span className="font-light bg-linear-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                digital innovation
              </span>.
            </h2>

            {/* Stats with glass separators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 mt-16">
              {[
                { number: '20+', label: 'Projects Launched' },
                { number: '10+', label: 'Happy Clients' },
                { number: '100%', label: 'Dedicated' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Decorative node */}
                  <svg className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 opacity-30" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="6" className="diagram-node" />
                    <circle cx="8" cy="8" r="2" fill="rgba(0, 217, 217, 0.3)" />
                  </svg>

                  <div className="text-5xl sm:text-6xl md:text-7xl font-light bg-linear-to-br from-cyan-300 to-teal-400 bg-clip-text text-transparent mb-3" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.02em' }}>
                    {stat.number}
                  </div>
                  <div className="microlabel">
                    {stat.label}
                  </div>

                  {/* Separator line (not on last item) */}
                  {index < 2 && (
                    <div className="hidden sm:block absolute top-1/2 -right-8 lg:-right-10 w-px h-16 bg-white/10" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional info section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-white/5"
            >
              <p className="text-gray-300 text-base sm:text-lg font-light max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-family-body)', lineHeight: '1.6' }}>
                We're a collective of young creatives, strategists, and technologists who believe
                every brand has a story worth telling. Our approach blends artistic vision with
                data-driven insights to create experiences that resonate and drive real results.
              </p>
            </motion.div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-white/10 rounded-tl-2xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-white/10 rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
