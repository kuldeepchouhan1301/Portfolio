import React from 'react';
import { Terminal, Sparkles, CheckCircle2, Rocket, Globe, ShieldCheck } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const achievementIcons = [Rocket, Globe, ShieldCheck];

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 relative bg-[#090C12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16 text-center max-w-2xl mx-auto reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
            <Terminal size={14} />
            <span>06. Key Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Key Engineering Achievements
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Empirical results and milestones across production deployment and security internships.
          </p>
        </div>

        {/* 3 Clean Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 reveal-on-scroll">
          {achievements.map((item, idx) => {
            const IconComp = achievementIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl glass-card glass-card-hover space-y-4 relative border border-slate-800 group"
              >
                {/* Number Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-700 group-hover:text-brand-python transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shrink-0">
                    <IconComp size={20} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle2 size={12} />
                  <span>Verified Benchmark</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
