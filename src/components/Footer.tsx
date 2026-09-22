import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#06080F] py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="text-center md:text-left">
          <div className="text-base font-bold font-display text-white">
            Ragha Shree V
          </div>
          <p className="text-xs text-slate-400 mt-1 font-sans">
            B.Tech CSE Student @ NIAT <span className="text-slate-600">·</span> Aspiring Astroinformatician
          </p>
          <p className="text-xs text-slate-500 font-mono mt-0.5">
            Tenkasi, Tamil Nadu, India
          </p>
        </div>

        {/* Links & Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#about" className="hover:text-slate-200 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-slate-200 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-slate-200 transition-colors">
            Projects
          </a>
          <a href="#beyond-tech" className="hover:text-slate-200 transition-colors">
            Beyond Tech
          </a>
          <a href="#interests" className="hover:text-slate-200 transition-colors">
            Interests
          </a>
          <a href="#contact" className="hover:text-slate-200 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Raghashree1806"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ragha-shree-v-6938483a6"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-sky-400 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:raghashree18062008@gmail.com"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors border border-slate-800"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
