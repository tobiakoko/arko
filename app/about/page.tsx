import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 bg-background-light dark:bg-background-dark min-h-screen">
      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-base text-primary font-semibold tracking-wide uppercase mb-4">Our Story</h1>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-navy dark:text-white mb-8 leading-tight">
              We started Arko to solve the <span className="gradient-text">trust problem</span> in web design.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                In an industry full of missed deadlines and hidden fees, Arko Media Labs was founded on a simple principle: **High-trust engineering.**
              </p>
              <p>
                We believe that a website is a company&apos;s most valuable employee. It works 24/7, represents your brand to the world, and handles your most sensitive customer interactions. Why settle for anything less than excellence?
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative">
             <div className="aspect-square rounded-[3rem] bg-slate-200 dark:bg-slate-800 overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Arko Office" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-navy py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[20rem]">diversity_3</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
               <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5]">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                      alt="Alex Arko - Founder" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
               </div>
            </div>
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">Meet the Founder</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Alex Arko</h2>
              <div className="space-y-6 text-blue-100/80 leading-relaxed text-lg italic border-l-4 border-primary pl-8">
                <p>
                  &ldquo;I spent a decade as a senior engineer at top-tier tech firms before realizing that small to mid-sized businesses were being underserved by &lsquo;template agencies.&rsquo; I founded Arko to bring enterprise-level performance and design to every business, regardless of their size.&rdquo;
                </p>
                <p>
                  &ldquo;When you hire us, you&apos;re not just getting a vendor; you&apos;re getting a technical partner who cares as much about your conversion rate as you do.&rdquo;
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                 <div>
                   <p className="font-display text-4xl font-bold text-white">10+</p>
                   <p className="text-xs uppercase tracking-widest text-slate-400">Years Experience</p>
                 </div>
                 <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                 <div>
                   <p className="font-display text-4xl font-bold text-white">200+</p>
                   <p className="text-xs uppercase tracking-widest text-slate-400">Projects Launched</p>
                 </div>
                 <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
                 <div className="font-outfit text-3xl opacity-60">Alex Arko</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy dark:text-white mb-6">Built on core values.</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: 'speed', 
                title: 'Radical Speed', 
                desc: 'Slow sites kill business. We optimize every millisecond because we know speed equals revenue.' 
              },
              { 
                icon: 'visibility', 
                title: 'Total Transparency', 
                desc: 'No hidden fees. No technical jargon to hide behind. You get clear updates and honest advice.' 
              },
              { 
                icon: 'diamond', 
                title: 'Premium Quality', 
                desc: 'We don’t do "good enough." Every project is a testament to our craft and your ambition.' 
              }
            ].map((value, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;