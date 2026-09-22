interface SkillItem {
  name: string;
  level: string;
  focus: string;
}

export function Skills() {
  const skillsList: SkillItem[] = [
    {
      name: 'Python',
      level: 'First-Year Core',
      focus: 'Programming logic, algorithms, and problem solving',
    },
    {
      name: 'HTML',
      level: 'First-Year Core',
      focus: 'Web page structure and semantic elements',
    },
    {
      name: 'CSS',
      level: 'First-Year Core',
      focus: 'Styling, responsive layouts, and presentation',
    },
    {
      name: 'Generative AI',
      level: 'Exploration',
      focus: 'Foundational concepts and practical applications',
    },
    {
      name: 'Prompt Engineering',
      level: 'Practical Practice',
      focus: 'Structuring prompts for coding and learning assistance',
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2">
            02. Technical Toolkit
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Skills
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Appropriate First-Year Scope
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/20 hover:-translate-y-1.5 hover:scale-[1.03] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 cursor-default group"
            >
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-sky-400 group-hover:scale-105 transition-transform">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {skill.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-5">
                <span className="text-xs text-slate-500 font-mono group-hover:text-slate-400 transition-colors">
                  First-Year B.Tech
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
