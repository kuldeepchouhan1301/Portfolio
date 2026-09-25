import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Eye, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080A0F]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2.5 group focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-python via-brand-primary to-emerald-500 p-[1px] shadow-lg shadow-indigo-500/10 group-hover:shadow-indigo-500/25 transition-all">
              <div className="w-full h-full bg-[#0B0E14] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 text-sm sm:text-base">
                  KC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight leading-tight group-hover:text-sky-400 transition-colors">
                Kuldeep Chouhan
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                Python Backend
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Desktop navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm"
          >
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-primary/80 to-indigo-600/80 text-white shadow-sm border border-indigo-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Resume Actions Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href={personalInfo.resumeViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-950/80 hover:bg-indigo-900/90 border border-indigo-500/40 text-indigo-200 transition-all focus-visible:ring-2 focus-visible:ring-indigo-500 min-h-[38px]"
              title="View Resume in new tab"
            >
              <Eye size={14} className="text-indigo-400" />
              <span>View Resume</span>
            </a>

            <a
              href={personalInfo.resumeDownloadUrl}
              download="Kuldeep_Chouhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500 min-h-[38px]"
              title="Download Resume PDF"
            >
              <Download size={14} className="text-emerald-400" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-[60px] bg-[#0B0E14] border-b border-slate-800/90 px-4 pt-4 pb-6 space-y-2 z-50 max-h-[calc(100vh-60px)] overflow-y-auto shadow-2xl transition-all"
          >
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center min-h-[44px] px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-800/90 text-sky-400 border border-slate-700'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-sky-400'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <a
                href={personalInfo.resumeViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full min-h-[44px] py-3 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-200 font-semibold text-xs shadow-md active:scale-98"
              >
                <Eye size={16} />
                <span>View Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.resumeDownloadUrl}
                download="Kuldeep_Chouhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full min-h-[44px] py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs shadow-md active:scale-98"
              >
                <Download size={16} className="text-emerald-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
