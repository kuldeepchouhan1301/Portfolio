import React from 'react';
import { Terminal, Shield, CheckCircle2, Calendar, Building, Code2 } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative bg-[#090C12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
            <Terminal size={14} />
            <span>04. Professional Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Industry Internship & Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Applying Python scripting and web application security auditing to craft resilient backend applications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center/left line */}
          <div className="absolute top-0 bottom-0 left-3 sm:left-6 lg:left-8 w-[2px] bg-gradient-to-b from-brand-python via-brand-primary to-slate-800"></div>

          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-9 sm:pl-16 lg:pl-20 pb-10 sm:pb-12 group reveal-on-scroll">
              
              {/* Timeline Dot Icon */}
              <div className="absolute left-3 sm:left-6 lg:left-8 top-1 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border-2 border-brand-python flex items-center justify-center text-brand-python group-hover:bg-brand-python group-hover:text-slate-950 transition-all shadow-lg shadow-sky-500/10 shrink-0">
                <Shield size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>

              {/* Experience Card */}
              <div className="p-4 sm:p-6 lg:p-8 rounded-2xl glass-card glass-card-hover space-y-5 border border-slate-800">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center space-x-2">
                      <span>{item.role}</span>
                    </h3>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-sky-400 font-medium mt-0.5">
                      <Building size={14} />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <Calendar size={12} className="text-brand-python" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Accomplishments</span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Natural Integration Note */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start space-x-2.5 text-xs text-slate-400 font-mono">
                  <Code2 size={15} className="text-brand-python shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-200">Backend Engineering Synergy:</strong> {item.note}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
