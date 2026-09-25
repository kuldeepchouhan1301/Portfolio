import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Award, 
  Server, 
  Code2, 
  Database, 
  ShieldCheck, 
  Workflow, 
  Rocket, 
  Terminal 
} from 'lucide-react';
import { personalInfo, education, whatIBuild } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Server: Server,
    Code2: Code2,
    Database: Database,
    ShieldCheck: ShieldCheck,
    Workflow: Workflow,
    Rocket: Rocket
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative bg-[#080A0F] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 sm:mb-16 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 text-brand-python font-mono text-xs tracking-wider uppercase">
            <Terminal size={14} />
            <span>01. About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Engineering solid backend systems with precision.
          </h2>
        </div>

        {/* Clean Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          
          {/* Left: Short personal introduction */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed reveal-on-scroll">
            <p className="text-base sm:text-lg text-slate-200 font-medium">
              I am a <span className="text-brand-python font-semibold">Python Backend Developer</span> with a passionate focus on building reliable, scalable backend architectures, web applications, RESTful APIs, and relational databases.
            </p>

            <p>
              My expertise spans modern Python frameworks (<span className="text-slate-100 font-semibold">Django, Flask</span>), full-stack PHP applications, REST API development, and SQL database optimization. I emphasize Object-Oriented Programming (OOP), Data Structures & Algorithms, MVC/MVT architectural patterns, and secure authentication pipelines.
            </p>

            <p>
              Having developed and deployed production systems—including a school management platform handling admissions, results, and administrative workflows—I bring a practical, production-first mindset to software development.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">Primary Technical Focus</div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-slate-200">
                <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700">Python 3.x</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700">Django & Flask</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700">REST API Design</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700">MySQL & SQLite</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700">PHP & Apache</span>
                <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700">Python Automation</span>
              </div>
            </div>
          </div>

          {/* Right: Compact Info Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 reveal-on-scroll">
            
            <div className="p-4 sm:p-5 rounded-xl glass-card glass-card-hover space-y-1.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <User size={18} />
              </div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Role</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-100">Python Backend Developer</h3>
            </div>

            <div className="p-4 sm:p-5 rounded-xl glass-card glass-card-hover space-y-1.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <GraduationCap size={18} />
              </div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Education</span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-100">{education.degree}</h3>
              <p className="text-[11px] text-slate-400">{education.college}</p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl glass-card glass-card-hover space-y-1.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MapPin size={18} />
              </div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Location</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-100">{personalInfo.location}</h3>
            </div>

            <div className="p-4 sm:p-5 rounded-xl glass-card glass-card-hover space-y-1.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award size={18} />
              </div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">CGPA</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100">{education.cgpa}</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-400">BCA Score (2023 - 2026)</p>
            </div>

          </div>
        </div>

        {/* What I Build Section */}
        <div className="pt-4 sm:pt-8 reveal-on-scroll">
          <div className="text-left mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              What I Build & Specialize In
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Core backend capabilities delivered with clean code and production reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whatIBuild.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Server;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl glass-card glass-card-hover space-y-3 relative overflow-hidden group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-python group-hover:text-white group-hover:bg-brand-primary/20 transition-all shrink-0">
                    <IconComp size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
