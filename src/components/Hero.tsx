import { ArrowDown, Github, Linkedin, Mail, Compass, Sparkles } from 'lucide-react';
import heroBg from '../assets/images/hero_deep_space_1790116111976.jpg';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Deep space image backdrop with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Deep space backdrop with distant stars and cosmic nebulae"
          className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080F]/70 via-[#06080F]/90 to-[#06080F]" />
      </div>

      {/* Subtle radial starlight glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-sky-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle celestial location tag - clean unboxed typography */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 font-mono tracking-wide">
          <Compass className="w-3.5 h-3.5 text-sky-400" />
          <span>Tenkasi, Tamil Nadu, India</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-500">8.96° N, 77.31° E</span>
        </div>

        {/* Primary Name Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-white mb-4 text-balance">
          Ragha Shree V
        </h1>

        {/* Subtitle / Headline */}
        <p className="text-lg sm:text-2xl md:text-3xl font-medium text-sky-300/90 mb-6 font-display tracking-tight text-balance">
          B.Tech CSE Student @ NIAT <span className="text-slate-500 font-light mx-1">|</span> Aspiring Astroinformatician
        </p>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-sans text-balance">
          Exploring the connection between Computer Science, Artificial Intelligence, and the universe.
        </p>

        {/* Four Required Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mb-12">
          {/* 1. View Projects */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-all duration-200 shadow-sm shadow-sky-950/40 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* 2. GitHub */}
          <a
            href="https://github.com/Raghashree1806"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Github className="w-4 h-4 text-slate-300" />
            <span>GitHub</span>
          </a>

          {/* 3. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ragha-shree-v-6938483a6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-sky-500/50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          {/* 4. Contact */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact</span>
          </a>
        </div>

        {/* Grounded student quick context */}
        <div className="pt-4 border-t border-slate-800/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-sans">
          <span>First-Year Undergraduate</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>NIAT (NxtWave of Innovation in Advanced Technologies)</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>Python & Web Fundamentals</span>
        </div>
      </div>
    </section>
  );
}
