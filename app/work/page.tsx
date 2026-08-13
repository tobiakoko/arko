import React from 'react';

interface CaseStudyProps {
  id: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ id }) => {
  return (
    <div className="pt-24 min-h-screen bg-background-light dark:bg-background-dark">
      <header className="pt-16 pb-16 lg:pt-24 lg:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-bold mb-6 border border-blue-200 dark:border-blue-800 uppercase tracking-widest">
                <span className="material-icons text-sm mr-1">auto_awesome</span> Case Study
              </div>
              <h1 className="font-display font-bold text-6xl lg:text-8xl text-navy dark:text-white mb-6 leading-tight">
                Ron&apos;s Auto Body
              </h1>
              <p className="text-xl lg:text-2xl text-slate-500 dark:text-slate-400 font-light mb-12 max-w-2xl">
                Modernizing a local legacy business with a high-conversion digital presence that increased appointment bookings by 240%.
              </p>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 aspect-video group">
                <img 
                  alt="Case Study Featured" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyUrbTNnz_gxW_m7lsaRoHjpu7rX-Me9wbGjfgLoVzZvTIh01mxX0jNqCU3zqyMdRLJhfkaUTOdUXrhqkC2avZK0Z8FB7-sh2W1ic_aM_lN0psP-AJHv0ZcH2k0d1l68gXmCWnb5bKrGpKFZoAIMAyzLJjKEop12KjDqyRhXde7hMUXtHAjQ6_VI8sL2FXiIHFGKnoAOJl9txODApCtczJaLR27yDxI8WTWteDhwRU51p_zgDt5osgXhe4LXfWixMNa8HyP6wcgUE"
                />
              </div>
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                <h3 className="font-display font-bold text-lg mb-8 border-b pb-4 dark:border-slate-700">Project Overview</h3>
                <div className="space-y-8">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Client</span>
                    <span className="text-base font-bold text-navy dark:text-white">Ron&apos;s Auto Body &amp; Collision</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Services Provided</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-[10px] font-bold rounded uppercase tracking-wider">UX/UI Design</span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-[10px] font-bold rounded uppercase tracking-wider">Development</span>
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-[10px] font-bold rounded uppercase tracking-wider">SEO</span>
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Goal</span>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">Streamline estimation requests and modernize brand perception for a mobile-first audience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-slate-900/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
               <div>
                  <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                     Ron&apos;s Auto Body had been a staple for over 30 years, but their digital presence was stuck in 2005. Their website was non-responsive, making it nearly impossible for users to find contact information on mobile—where 85% of traffic originated during roadside emergencies.
                  </p>
                  <div className="p-6 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-r-2xl">
                     <h4 className="font-bold text-orange-900 dark:text-orange-200 mb-2">Constraints</h4>
                     <ul className="text-sm space-y-2 text-orange-800 dark:text-orange-300 opacity-80">
                        <li>• Must integrate with legacy CRM software.</li>
                        <li>• Strict 4-week timeline before winter.</li>
                        <li>• High-contrast accessibility requirements.</li>
                     </ul>
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl font-display font-bold mb-6">The Impact</h2>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800 text-center">
                        <div className="text-4xl font-display font-bold text-primary mb-1">+240%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bookings</div>
                     </div>
                     <div className="p-8 bg-teal-50 dark:bg-teal-900/20 rounded-3xl border border-teal-100 dark:border-teal-800 text-center">
                        <div className="text-4xl font-display font-bold text-teal-600 mb-1">0.8s</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Load Speed</div>
                     </div>
                     <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-800 text-center col-span-2">
                        <div className="text-4xl font-display font-bold text-indigo-600 mb-1">92%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lead Quality Improvement</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-navy text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <span className="material-icons-round text-6xl text-blue-500/30 mb-8">format_quote</span>
            <p className="text-3xl font-display leading-relaxed mb-10 opacity-90 italic">
               &ldquo;Arko Media Labs didn&apos;t just build us a website; they built us a business tool. We&apos;re booking more appointments with less phone tag than ever before. It&apos;s transformed how we operate.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
               <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden border-2 border-primary">
                  <img src="https://picsum.photos/id/64/100/100" alt="Testimonial" referrerPolicy="no-referrer" />
               </div>
               <div className="text-left">
                  <p className="font-bold">Ron Miller</p>
                   <p className="text-sm text-blue-300">Owner, Ron&apos;s Auto Body</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CaseStudy;
