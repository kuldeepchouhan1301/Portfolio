import React from 'react';
import { ArrowRight, Github, Linkedin, FileText, Eye, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TerminalMockup from './TerminalMockup';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 xs:pt-28 sm:pt-36 pb-12 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-radial-gradient">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] xs:w-[450px] sm:w-[600px] h-[200px] sm:h-[350px] bg-brand-primary/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left reveal-on-scroll">
            
            {/* Small Badge */}
            <div className="inline-flex items-center flex-wrap gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-300 shadow-inner max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-brand-python font-semibold">Python Backend Developer</span>
              <span className="text-slate-600 hidden xs:inline">|</span>
              <span className="text-slate-400">Abu Road, Rajasthan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15]">
              Building <span className="text-gradient-python">reliable backends</span>,{' '}
              <span className="text-gradient-brand">scalable web apps</span>.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              {personalInfo.heroSummary}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 pb-1">
              {['Django', 'Flask', 'REST APIs', 'MySQL', 'PHP', 'Python Automation'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons - Touch friendly 44px min height & wrap cleanly */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 w-full pt-2">
              <a
                href="#projects"
                className="flex items-center justify-center space-x-2 px-5 py-3 min-h-[44px] rounded-xl bg-gradient-to-r from-brand-primary via-indigo-600 to-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              {/* View Resume Action (Opens PDF in new tab) */}
              <a
                href={personalInfo.resumeViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-5 py-3 min-h-[44px] rounded-xl bg-indigo-950/70 hover:bg-indigo-900/80 border border-indigo-500/40 text-indigo-200 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Eye size={16} className="text-indigo-400" />
                <span>View Resume</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 min-h-[44px] rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Github size={16} className="text-slate-300" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 min-h-[44px] rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Linkedin size={16} className="text-sky-400" />
                <span>LinkedIn</span>
              </a>

              {/* Download Resume Action */}
              <a
                href={personalInfo.resumeDownloadUrl}
                download="Kuldeep_Chouhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-4 py-3 min-h-[44px] rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Download size={16} className="text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Status Note */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-400 font-mono">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>Abu Road, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>BCA Graduate / Candidate</span>
              </div>
            </div>

          </div>

          {/* Right Column: Terminal Mockup */}
          <div className="lg:col-span-6 w-full max-w-full overflow-hidden reveal-on-scroll">
            <TerminalMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
