import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface WaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Waitlist({ isOpen, onClose }: WaitlistProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send to your backend
      console.log('Waitlist signup:', email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-lg"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden"
          >
            {/* Glass studio frame */}
            <div className="glass-studio-frame relative">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-50 cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                type="button"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Content */}
              <div className="relative z-10 text-center space-y-8">
                {!submitted ? (
                  <>
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span className="pill-cta inline-block text-xs uppercase tracking-[0.2em]">
                        Coming Soon
                      </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight leading-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
                        Join the{' '}
                        <span className="font-light bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                          waitlist
                        </span>
                      </h2>
                      <p className="text-lg text-gray-300 max-w-xl mx-auto font-light" style={{ fontFamily: 'var(--font-family-body)' }}>
                        We're launching soon. Be the first to know when we open our doors and get exclusive early access to our services.
                      </p>
                    </motion.div>

                    {/* Email Form */}
                    <motion.form
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      onSubmit={handleSubmit}
                      className="max-w-md mx-auto space-y-4"
                    >
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="w-full px-6 py-4 rounded-full text-base font-light focus:outline-none transition-all duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            fontFamily: 'var(--font-family-body)',
                          }}
                          onFocus={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.target.style.borderColor = 'rgba(136, 212, 212, 0.3)';
                          }}
                          onBlur={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                            e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          }}
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full px-10 py-4 rounded-full font-medium text-base transition-all duration-300 bg-white text-black hover:bg-gray-100"
                        style={{ fontFamily: 'var(--font-family-body)' }}
                      >
                        Notify Me
                      </motion.button>
                    </motion.form>

                    {/* Stats Preview */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center gap-8 pt-8 border-t border-white/5"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-light bg-gradient-to-br from-cyan-300 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-family-display)' }}>
                          100+
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-light">
                          On Waitlist
                        </div>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-center">
                        <div className="text-2xl font-light bg-gradient-to-br from-orange-300 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-family-display)' }}>
                          Q1 2026
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-light">
                          Launch Date
                        </div>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 space-y-6"
                  >
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                      className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(136, 212, 212, 0.2), rgba(0, 217, 217, 0.2))',
                        border: '1px solid rgba(136, 212, 212, 0.3)',
                      }}
                    >
                      <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>

                    <div className="space-y-3">
                      <h3 className="text-3xl font-light" style={{ fontFamily: 'var(--font-family-display)' }}>
                        You're on the list!
                      </h3>
                      <p className="text-gray-300 font-light" style={{ fontFamily: 'var(--font-family-body)' }}>
                        We'll reach out as soon as we launch. Get ready for something special.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-white/10 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-white/10 rounded-br-2xl" />

              {/* Background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(0, 217, 217, 0.15) 0%, transparent 70%)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
