import { motion } from 'framer-motion';

interface NavigationProps {
  scrollToSection: (id: string) => void;
  onOpenWaitlist: () => void;
}

export default function Navigation({ scrollToSection, onOpenWaitlist }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Ultra-thin glass nav bar */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full"
          style={{
            background: 'rgba(10, 10, 15, 0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 217, 217, 0.2), rgba(255, 107, 107, 0.2))',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'var(--font-family-display)',
              }}
            >
              A
            </div>
            <span className="text-base font-light tracking-tight hidden sm:block" style={{ fontFamily: 'var(--font-family-display)' }}>
              Arko Media Labs
            </span>
          </motion.div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'Services', id: 'services' },
              { label: 'About', id: 'about' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-5 py-2 font-light transition-colors duration-300 rounded-full"
                style={{
                  fontFamily: 'var(--font-family-body)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.02em',
                }}
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenWaitlist}
            className="px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#0a0a0f',
              fontFamily: 'var(--font-family-body)',
            }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
