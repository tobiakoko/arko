'use client'

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
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-accent-teal transition-colors cursor-pointer hover:-translate-y-0.5 transform"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-accent-teal transition-colors cursor-pointer hover:-translate-y-0.5 transform"
            >
              Terms of Service
            </button>
            <span>© {currentYear} Arko Media Labs</span>
          </div>

          <div className="flex items-center gap-4">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:border-accent-teal transition-all hover:scale-110 hover:-translate-y-0.5"
              >
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
