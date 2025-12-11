import { motion } from 'framer-motion';

type ModalType = 'privacy' | 'terms' | null;

interface FooterProps {
  setActiveModal: (modal: ModalType) => void;
}

export default function Footer({ setActiveModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 lg:px-8" style={{ borderTop: '1px solid rgb(255 255 255 / 0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl" style={{ background: 'linear-gradient(to bottom right, var(--color-accent-teal), var(--color-accent-coral))' }}>
              A
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
              Arko Media Labs
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <motion.button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-accent-teal transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              onClick={() => setActiveModal('terms')}
              className="hover:text-accent-teal transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.button>
            <span>© {currentYear} Arko Media Labs</span>
          </div>

          <div className="flex items-center gap-4">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:border-accent-teal transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
