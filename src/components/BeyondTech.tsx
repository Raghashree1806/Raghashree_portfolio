import { Sparkles, Users } from 'lucide-react';

export function BeyondTech() {
  return (
    <section id="beyond-tech" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2">
            04. Beyond Tech
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Beyond Tech
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Interests & Involvement
            </span>
          </div>
        </div>

        {/* 2-column presentation with cursor scale effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Classical Dance */}
          <div className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/20 hover:-translate-y-1.5 hover:scale-[1.02] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-amber-300 group-hover:scale-110 group-hover:bg-amber-950/30 transition-all duration-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                    Classical Dance
                  </h3>
                  <p className="text-xs font-mono text-sky-400">13 Years of Training</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                13 years of classical dance training with participation in competitions and performances.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 mt-6 text-xs text-slate-400 font-mono flex items-center gap-2">
              <span>Competitions</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Performances</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>13 Years</span>
            </div>
          </div>

          {/* Card 2: Cultural Club */}
          <div className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/20 hover:-translate-y-1.5 hover:scale-[1.02] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sky-400 group-hover:scale-110 group-hover:bg-sky-950/30 transition-all duration-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                    Cultural Club
                  </h3>
                  <p className="text-xs font-mono text-sky-400">NIAT</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Cultural Club — NIAT
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 mt-6 text-xs text-slate-400 font-mono flex items-center gap-2">
              <span>Cultural Club</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>NIAT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
