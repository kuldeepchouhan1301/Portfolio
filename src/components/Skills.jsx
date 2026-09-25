import React, { useState } from 'react';
import { Terminal, Cpu, Database, Code, Wrench, Package, Server, Lightbulb, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categoryIcons = {
    backend: Cpu,
    databases: Database,
    languages: Code,
    tools: Wrench,
    libraries: Package,
    deployment: Server,
    concepts: Lightbulb
  };

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative bg-[#090C12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6 reveal-on-scroll">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
              <Terminal size={14} />
              <span>02. Technical Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Technologies & Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Categorized stack focused on Python backend engineering, API architecture, database management, and deployment workflows.
            </p>
          </div>

          {/* Filter Tabs - Horizontal scrollable on small mobile */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800/80 overflow-x-auto no-scrollbar max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap min-h-[36px] focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeFilter === 'all'
                  ? 'bg-brand-primary text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Stack
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap min-h-[36px] focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeFilter === cat.id
                    ? 'bg-brand-primary text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 reveal-on-scroll">
          {filteredCategories.map((cat) => {
            const IconComp = categoryIcons[cat.id] || Cpu;
            return (
              <div
                key={cat.id}
                className="p-4 sm:p-6 rounded-2xl glass-card glass-card-hover space-y-4 relative group"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all shrink-0">
                      <IconComp size={18} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {cat.skills.length} Skills
                  </span>
                </div>

                {/* Skill Pills Grid */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-sky-500/30 text-[11px] sm:text-xs font-medium text-slate-200 transition-all"
                    >
                      <CheckCircle size={12} className="text-brand-python shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on Skill Evaluation */}
        <div className="mt-10 p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center text-[11px] sm:text-xs text-slate-400 font-mono">
          <span>Continuous hands-on implementation across production deployments, API development, and database optimizations.</span>
        </div>

      </div>
    </section>
  );
}
