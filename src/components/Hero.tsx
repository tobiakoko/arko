import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Parallax effects - different layers move at different speeds
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const headlineY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const cubeY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden film-grain vignette light-rays"
    >
      {/* Photographic backdrop - soft focus, backlit hand/object */}
      <motion.div
        style={{ y: backgroundY }}
        className="parallax-layer absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

        {/* Hero Image - Professional photography */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden opacity-30 lg:opacity-60">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-full w-full"
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80&fit=crop&auto=format"
              alt="Abstract geometric forms"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: 'blur(2px) brightness(0.6) saturate(0.7)',
              }}
            />

            {/* Backlit gradient overlay simulating rim light */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-800/40 to-gray-900/80" />

            {/* Soft bokeh circles for depth */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  background: i % 2 === 0
                    ? 'radial-gradient(circle, rgba(136, 212, 212, 0.12) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255, 176, 136, 0.1) 0%, transparent 70%)',
                  right: `${Math.random() * 60}%`,
                  top: `${Math.random() * 80}%`,
                  filter: 'blur(40px)',
                }}
                animate={{
                  y: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Split tone color grading overlay */}
        <div className="split-tone absolute inset-0" />
      </motion.div>

      {/* Main content container */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Large typography and CTAs */}
            <motion.div
              style={{ y: headlineY }}
              className="parallax-layer space-y-6 sm:space-y-8"
            >
              {/* Badge pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="microlabel inline-block">
                  Fresh Perspectives, Bold Ideas
                </span>
              </motion.div>

              {/* Massive headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="space-y-2 sm:space-y-4"
              >
                <h1 className="hero-display">
                  Your story.
                </h1>
                <h2 className="hero-subhead text-gray-400">
                  Amplified.
                </h2>
              </motion.div>

              {/* Subheading text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="body-large text-gray-300 max-w-xl"
                style={{ fontFamily: 'var(--font-family-body)' }}
              >
                We're a young media agency with big ambitions. Combining creativity with strategy,
                we help emerging brands find their voice and make an impact in the digital world.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-start gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-4 rounded-full font-medium text-base transition-all duration-300 bg-white text-black hover:bg-gray-100 w-full sm:w-auto"
                  style={{ fontFamily: 'var(--font-family-body)' }}
                >
                  Let's Talk
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('services')}
                  className="pill-cta font-light text-base w-full sm:w-auto"
                  style={{ fontFamily: 'var(--font-family-body)' }}
                >
                  Explore Services
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right column - Translucent cube with volumetric lighting */}
            <div className="relative hidden lg:flex justify-center items-center">
              <motion.div
                style={{ y: cubeY }}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="parallax-layer relative"
              >
                {/* Glass cube */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 3 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="glass-cube volumetric-glow w-64 h-64 rounded-3xl transform-gpu"
                  style={{
                    transform: 'perspective(1000px) rotateY(-8deg) rotateX(5deg)',
                  }}
                >
                  {/* Inner reflective layers */}
                  <div className="absolute inset-4 rounded-2xl border border-white/10" />
                  <div className="absolute inset-8 rounded-xl border border-white/5" />

                  {/* Circular ring element */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 256 256"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
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
                  </motion.svg>

                  {/* Center glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/40 to-teal-500/40 blur-xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
