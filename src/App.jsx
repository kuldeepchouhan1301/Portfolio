import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // Initialize scroll-triggered section reveal animations
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-[#080A0F] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-sky-300 overflow-x-hidden">
      {/* Background ambient grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" aria-hidden="true"></div>

      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
