import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/10 via-transparent to-accent-coral/10" />

          <div className="relative z-10">
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'var(--font-family-display)' }}>
              Ready to start
              <br />
              your journey?
            </h2>

            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Let's chat about your project. Whether you're launching something new or looking
              to refresh your brand, we're here to help bring your vision to life.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 217, 217, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 font-bold rounded-full text-lg glow-teal transition-all duration-300"
              style={{ backgroundColor: 'var(--color-accent-teal)', color: 'var(--color-primary)' }}
            >
              Get In Touch
            </motion.button>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: 'rgb(255 255 255 / 0.1)' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                <a href="mailto:hello@arkomedia.com" className="hover:text-accent-teal transition-colors">
                  hello@arkomedia.com
                </a>
                <span className="hidden sm:block">•</span>
                <a href="tel:+1234567890" className="hover:text-accent-teal transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgb(0 217 217 / 0.2)' }}
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl"
            style={{ backgroundColor: 'rgb(255 107 107 / 0.2)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
