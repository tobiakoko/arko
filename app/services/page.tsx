import React from 'react';

const packages = [
  {
    name: 'Launch Page',
    price: '$2,500',
    timeline: '1-2 Weeks',
    features: ['One high-converting landing page', 'Mobile responsive design', 'Basic SEO setup', 'Contact form integration', 'Analytics setup'],
    isPopular: false
  },
  {
    name: 'Starter Website',
    price: '$4,800',
    timeline: '3-5 Weeks',
    features: ['Everything in Launch, plus:', 'Up to 5 custom designed pages', 'CMS Integration (Blog/News)', 'Newsletter integration', 'Technical SEO optimization', '1 month post-launch support'],
    isPopular: true
  },
  {
    name: 'Growth Website',
    price: '$8,500+',
    timeline: '6-10 Weeks',
    features: ['Everything in Starter, plus:', '10+ custom designed pages', 'Advanced animations & interactions', 'Complex integrations (CRM/API)', 'E-commerce functionality', '3 months priority support'],
    isPopular: false
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white">
          Transparent pricing <br/> for world-class <span className="gradient-text">products.</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We build high-performance websites that convert visitors into customers and scale with your business. No hidden fees.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 border ${pkg.isPopular ? 'border-primary dark:border-blue-500 shadow-2xl scale-105 z-10' : 'border-slate-200 dark:border-slate-700 shadow-xl'}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-slate-500 block text-xs mt-1">Starting investment</span>
              </div>
              <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-icons-round text-sm text-primary">schedule</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Timeline</span>
                </div>
                <p className="text-sm text-slate-500">{pkg.timeline}</p>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="material-icons-round text-green-500 text-lg">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.isPopular ? 'bg-primary text-white shadow-glow hover:bg-blue-700' : 'bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-100'}`}>
                Start Project
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;