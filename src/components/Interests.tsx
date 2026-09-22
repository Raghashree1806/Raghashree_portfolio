import { Brain, Atom, Telescope, Orbit, Globe, Sparkles } from 'lucide-react';

export function Interests() {
  const interests = [
    { name: 'Artificial Intelligence', icon: Brain },
    { name: 'Physics', icon: Atom },
    { name: 'Astronomy & Space Science', icon: Telescope },
    { name: 'Astroinformatics', icon: Orbit },
    { name: 'Web Development', icon: Globe },
    { name: 'Generative AI', icon: Sparkles },
  ];

  return (
    <section id="interests" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2">
            05. Intellectual Curiosity
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Areas of Interest
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Academic & Exploratory Focus
            </span>
          </div>
        </div>

        {/* Areas of Interest Grid with cursor-magnification effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/20 hover:-translate-y-1.5 hover:scale-[1.04] rounded-xl p-6 flex items-center gap-4 transition-all duration-300 cursor-default group"
              >
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-sky-800/60 group-hover:bg-sky-950/40 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">Area of Interest</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
