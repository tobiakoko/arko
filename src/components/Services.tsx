import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Brand Identity',
      description: 'Starting from scratch? We craft memorable brand identities that help you stand out and connect with your audience from day one.',
      tags: ['Logo Design', 'Visual Identity', 'Brand Guidelines'],
      delay: 0,
    },
    {
      title: 'Content Creation',
      description: 'From social media posts to promotional videos, we create engaging content that tells your story and grows your presence.',
      tags: ['Social Content', 'Video', 'Photography'],
      delay: 0.1,
    },
    {
      title: 'Digital Strategy',
      description: 'New to digital marketing? We help you build a smart, focused strategy that makes the most of your budget and reaches the right people.',
      tags: ['Planning', 'Analytics', 'Growth'],
      delay: 0.2,
    },
    {
      title: 'Web Presence',
      description: 'Beautiful, functional websites that work across all devices. Your digital home built to convert visitors into customers.',
      tags: ['Web Design', 'Development', 'SEO'],
      delay: 0.3,
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 lg:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="microlabel inline-block mb-8">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6" style={{ fontFamily: 'var(--font-family-display)', lineHeight: '1.02', letterSpacing: '-0.02em' }}>
            Everything you need
            <br />
            <span className="font-light bg-linear-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              to get started
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: service.delay }}
              className="group relative"
            >
              {/* Ultra-thin glass studio frame */}
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="glass-studio-frame h-full relative overflow-hidden"
              >
                {/* Decorative diagram overlay */}
                <svg
                  className="absolute top-4 right-4 w-24 h-24 opacity-20"
                  viewBox="0 0 100 100"
                >
                  {/* Connecting lines */}
                  <motion.line
                    x1="20"
                    y1="20"
                    x2="80"
                    y2="20"
                    className="diagram-line"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: service.delay + 0.3 }}
                  />
                  <motion.line
                    x1="80"
                    y1="20"
                    x2="80"
                    y2="80"
                    className="diagram-line"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: service.delay + 0.4 }}
                  />
                  <motion.line
                    x1="80"
                    y1="80"
                    x2="20"
                    y2="80"
                    className="diagram-line"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: service.delay + 0.5 }}
                  />
                  <motion.line
                    x1="20"
                    y1="80"
                    x2="20"
                    y2="20"
                    className="diagram-line"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: service.delay + 0.6 }}
                  />

                  {/* Corner nodes */}
                  <circle cx="20" cy="20" r="3" className="diagram-node" />
                  <circle cx="80" cy="20" r="3" className="diagram-node" />
                  <circle cx="80" cy="80" r="3" className="diagram-node" />
                  <circle cx="20" cy="80" r="3" className="diagram-node" />

                  {/* Center node */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="4"
                    className="diagram-node"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </svg>

                {/* Gradient hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 rounded-[28px]"
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-normal tracking-tight" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-300 font-light text-base sm:text-lg" style={{ lineHeight: '1.6' }}>
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="microlabel px-4 py-1.5"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '100px',
                          color: 'rgba(136, 212, 212, 0.9)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accent glow */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle, rgba(0, 217, 217, 0.2) 0%, transparent 70%)' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative glass frames */}
        <div className="relative mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-studio-frame max-w-4xl mx-auto text-center space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.01em', lineHeight: '1.1' }}>
              Ready to amplify your story?
            </h3>
            <p className="text-gray-300 font-light text-base sm:text-lg" style={{ lineHeight: '1.6' }}>
              Let's create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 rounded-full font-medium text-base transition-all duration-300 bg-white text-black hover:bg-gray-100"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
