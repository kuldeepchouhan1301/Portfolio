import React from 'react';
import { Terminal, GraduationCap, Award, BookOpen, CheckCircle, Sparkles, Building2, School } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 relative bg-[#080A0F] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 sm:mb-14 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
            <Terminal size={14} />
            <span>05. Education</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Academic History & Qualifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Formal educational background from secondary school to undergraduate computer applications degree.
          </p>
        </div>

        {/* 3-Card Responsive Education Grid */}
        <div className="space-y-6 max-w-5xl mx-auto reveal-on-scroll">
          
          {educationList.map((item) => {
            const isHighest = item.isHighest;
            return (
              <div
                key={item.num}
                className={`p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl glass-card glass-card-hover border relative transition-all overflow-hidden ${
                  isHighest
                    ? 'border-indigo-500/50 bg-gradient-to-br from-[#0F1424] via-[#0D111A] to-[#0A0D14] shadow-xl shadow-indigo-500/5'
                    : 'border-slate-800/90 bg-[#0A0D14]'
                }`}
              >
                {/* Glow accent for highest qualification */}
                {isHighest && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left Column: Number, Title, Institution */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center space-x-2.5 flex-wrap">
                      <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 border border-sky-500/30 px-2.5 py-0.5 rounded-md">
                        {item.num}
                      </span>

                      <span className="text-xs sm:text-sm font-extrabold text-slate-300 font-mono">
                        {item.level}
                      </span>

                      {isHighest && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                          <Sparkles size={11} />
                          <span>Highest Qualification</span>
                        </span>
                      )}
                    </div>

                    {/* Qualification Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight">
                      {item.level}
                    </h3>

                    {/* Institution Name */}
                    <p className="text-xs sm:text-sm font-semibold text-sky-300 flex items-start space-x-2">
                      <School size={15} className="shrink-0 mt-0.5 text-sky-400" />
                      <span className="leading-snug">{item.institution}</span>
                    </p>

                    {/* Board / University */}
                    {item.university ? (
                      <p className="text-xs text-slate-400 flex items-start space-x-2">
                        <Building2 size={14} className="shrink-0 mt-0.5 text-indigo-400" />
                        <span>University: <strong className="text-slate-300">{item.university}</strong></span>
                      </p>
                    ) : item.board ? (
                      <p className="text-xs text-slate-400 flex items-start space-x-2">
                        <Building2 size={14} className="shrink-0 mt-0.5 text-slate-500" />
                        <span>Board: <strong className="text-slate-300">{item.board}</strong></span>
                      </p>
                    ) : null}
                  </div>

                  {/* Right Column: Score & Metric Badge */}
                  <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-slate-800/80 pt-3 md:pt-0 md:pl-6 shrink-0 gap-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      {item.scoreType}
                    </span>
                    <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-right">
                      <span className={`text-xl sm:text-2xl font-extrabold font-mono ${
                        isHighest ? 'text-gradient-brand' : 'text-slate-100'
                      }`}>
                        {item.score}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
