import { Orbit, Compass } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2">
            01. Background & Perspective
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative text */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed font-sans text-base sm:text-lg">
            <p>
              Curious first-year Computer Science student exploring Artificial Intelligence, programming,
              Web Development, Physics, Astronomy, and Space Science. Interested in understanding how
              technology and science connect, with a long-term interest in Astroinformatics.
            </p>

            {/* Quick highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
              <div>
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Institution</span>
                <span className="text-slate-200 font-medium">NIAT (NxtWave of Innovation in Advanced Technologies)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Current Academic Level</span>
                <span className="text-slate-200 font-medium">First-Year B.Tech Computer Science</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Location</span>
                <span className="text-slate-200 font-medium">Tenkasi, Tamil Nadu, India</span>
              </div>
              <div>
                <span className="text-slate-500 block text-xs uppercase font-mono mb-1">Primary Trajectory</span>
                <span className="text-slate-200 font-medium">Computer Science & Astroinformatics</span>
              </div>
            </div>
          </div>

          {/* Right column: Subtle Profile Card */}
          <div className="lg:col-span-5 bg-[#0A0E1A] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2.5 bg-sky-950/60 border border-sky-800/50 rounded-lg text-sky-400">
                <Orbit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white font-display">Student Profile</h3>
                <span className="text-xs text-slate-400 font-mono">NIAT · Tenkasi, India</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400 text-xs">Degree</span>
                <span className="text-white text-xs font-mono">B.Tech Computer Science</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400 text-xs">Year</span>
                <span className="text-white text-xs font-mono">First Year</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-400 text-xs">Aspiration</span>
                <span className="text-sky-300 text-xs font-mono">Astroinformatics</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400 text-xs">Email</span>
                <span className="text-slate-200 text-xs font-mono">raghashree18062008@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
