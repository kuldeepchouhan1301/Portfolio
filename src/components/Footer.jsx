import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-10 bg-[#06080C] border-t border-slate-800/80 font-sans text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left: Copyright & Identity */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
          <span className="font-semibold text-slate-200">
            © 2026 Kuldeep Chouhan
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-brand-python font-mono text-[11px]">
            Python Backend Developer
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-300">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 min-h-[44px] px-2 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 min-h-[44px] px-2 hover:text-sky-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center space-x-1.5 min-h-[44px] px-2 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center space-x-1 focus-visible:ring-2 focus-visible:ring-indigo-500"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            <span className="text-[11px] font-mono">Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
