import React from 'react';
import { Terminal, Github, CheckCircle2, FolderGit2, BarChart3 } from 'lucide-react';
import { otherProjects } from '../data/portfolioData';
import FeaturedProject from './FeaturedProject';

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative bg-[#080A0F] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Title */}
        <div className="space-y-2 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
            <Terminal size={14} />
            <span>03. Selected Portfolio Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Production & Technical Applications
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Clean code, modular backend architecture, and production web applications built with Python, Django, PHP, and relational databases.
          </p>
        </div>

        {/* Centerpiece Featured Project */}
        <FeaturedProject />

        {/* Other Projects Grid */}
        <div className="pt-4 sm:pt-8 reveal-on-scroll">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              Additional Backend & Full-Stack Projects
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Modular web applications demonstrating Django MVT, ORM mapping, and analytics dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="p-5 sm:p-8 rounded-2xl glass-card glass-card-hover space-y-5 relative flex flex-col justify-between group border border-slate-800">
      
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-sky-400 bg-sky-950/60 border border-sky-500/30 px-2.5 py-1 rounded-md">
            {project.number}
          </span>
          <span className="text-[11px] sm:text-xs font-mono text-slate-400">
            {project.type} ({project.year})
          </span>
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 min-h-[36px] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
        )}
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-100 group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-semibold text-slate-400">
          {project.subtitle}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
          {project.description}
        </p>
      </div>

      {/* Visual Abstract Mockup */}
      {project.id === 'arkitektur' && <ArkitekturVisual />}
      {project.id === 'student-analytics' && <AnalyticsVisual />}

      {/* Features List */}
      <div className="space-y-2 pt-2 border-t border-slate-800/80">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Key Features</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-1.5">
              <CheckCircle2 size={13} className="text-sky-400 shrink-0 mt-0.5" />
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

    </div>
  );
}

function ArkitekturVisual() {
  return (
    <div className="p-3 rounded-xl bg-[#0A0D14] border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center space-x-1">
          <FolderGit2 size={13} className="text-brand-python" />
          <span>Django MVT App Structure</span>
        </span>
        <span className="text-emerald-400 text-[10px]">SQLite ORM</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px] sm:text-[11px] text-center pt-1">
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-sky-400 font-semibold block">Models</span>
          <span className="text-slate-500 text-[9px] sm:text-[10px]">ORM Schema</span>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-indigo-400 font-semibold block">Views</span>
          <span className="text-slate-500 text-[9px] sm:text-[10px]">Logic Layer</span>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-emerald-400 font-semibold block">Templates</span>
          <span className="text-slate-500 text-[9px] sm:text-[10px]">SCSS UI</span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="p-3 rounded-xl bg-[#0A0D14] border border-slate-800 font-sans text-xs text-slate-300 space-y-2">
      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2">
        <span className="flex items-center space-x-1">
          <BarChart3 size={13} className="text-indigo-400" />
          <span>Chart.js Performance Metrics</span>
        </span>
        <span className="text-sky-400 font-mono text-[10px]">Admin & Student</span>
      </div>
      <div className="flex items-center justify-around text-center pt-1">
        <div>
          <span className="text-[10px] sm:text-xs text-slate-400 block">Attendance</span>
          <span className="text-base sm:text-lg font-bold text-emerald-400">92.4%</span>
        </div>
        <div className="w-[1px] h-7 bg-slate-800"></div>
        <div>
          <span className="text-[10px] sm:text-xs text-slate-400 block">Pass Rate</span>
          <span className="text-base sm:text-lg font-bold text-indigo-400">96.8%</span>
        </div>
        <div className="w-[1px] h-7 bg-slate-800"></div>
        <div>
          <span className="text-[10px] sm:text-xs text-slate-400 block">Reports</span>
          <span className="text-base sm:text-lg font-bold text-sky-400">Graded</span>
        </div>
      </div>
    </div>
  );
}
