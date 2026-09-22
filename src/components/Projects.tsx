import { Gamepad2, Bus, Calculator, UserCheck, Github } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export function Projects() {
  const projectsData: ProjectItem[] = [
    {
      id: 'ganesha-quest',
      title: 'Ganesha Quest',
      category: 'Interactive Game',
      description:
        'Interactive cultural learning game designed to make Indian stories and traditions more engaging through fun gameplay and storytelling.',
    },
    {
      id: 'bus-tracking-app',
      title: 'Government Bus Tracking App',
      category: 'Student Project',
      description:
        'Student project focused on making bus routes and tracking information easier for users to access.',
    },
    {
      id: 'student-grade-calculator',
      title: 'Student Grade Calculator',
      category: 'Utility Project',
      description:
        'Simple project for calculating student grades and marks.',
    },
    {
      id: 'voting-eligibility-calculator',
      title: 'Voting Eligibility Calculator',
      category: 'Verification Project',
      description:
        'Simple project that checks voting eligibility based on age.',
    },
  ];

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'ganesha-quest':
        return <Gamepad2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'bus-tracking-app':
        return <Bus className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'student-grade-calculator':
        return <Calculator className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" />;
      case 'voting-eligibility-calculator':
        return <UserCheck className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2">
            03. Practical Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Projects
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              First-Year Student Projects
            </span>
          </div>
        </div>

        {/* Projects Grid: 2 columns with interactive cursor hover-magnify styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/30 hover:-translate-y-1.5 hover:scale-[1.02] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group"
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-sky-800/60 group-hover:bg-sky-950/30 transition-all">
                    {getProjectIcon(project.id)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description from user prompt */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-5 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Student Project
                </span>
                <a
                  href="https://github.com/Raghashree1806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-all font-mono py-1 px-2.5 rounded bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:scale-105 active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
