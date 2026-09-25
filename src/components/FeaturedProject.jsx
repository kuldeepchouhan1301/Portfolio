import React from 'react';
import { ExternalLink, Github, CheckCircle2, Sparkles, Server, FileSpreadsheet, Layers } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import SchoolDashboardMockup from './SchoolDashboardMockup';

export default function FeaturedProject() {
  return (
    <div className="space-y-8 reveal-on-scroll">
      {/* Featured Card Wrapper */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F1420] to-[#0A0D14] border border-slate-800/90 p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800/80">
          <div className="flex items-center flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1.5 shadow-sm">
              <Sparkles size={13} />
              <span>{featuredProject.tag}</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
              {featuredProject.type} ({featuredProject.year})
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-emerald-950 active:scale-95 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>Live Website</span>
              <ExternalLink size={14} />
            </a>
            <a
              href={featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Github size={14} />
              <span>View Source</span>
            </a>
          </div>
        </div>

        {/* Split Info & Visual Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Project Info */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                {featuredProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                {featuredProject.subtitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {featuredProject.description}
            </p>

            {/* Tech Badges */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {featuredProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-slate-900/90 border border-slate-800 text-sky-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Module Highlights */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Production Features & Architecture</span>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs text-slate-300">
                {featuredProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <span className="flex items-center space-x-1.5">
                <Layers size={13} className="text-emerald-400" />
                <span>10+ Core Modules</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Server size={13} className="text-sky-400" />
                <span>Production Live</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <FileSpreadsheet size={13} className="text-amber-400" />
                <span>Google Sheets API</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive School Dashboard Mockup */}
          <div className="lg:col-span-7 w-full max-w-full overflow-hidden">
            <SchoolDashboardMockup />
          </div>

        </div>

      </div>
    </div>
  );
}
