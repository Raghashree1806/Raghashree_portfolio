import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'raghashree18062008@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2">
            06. Connect
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Contact
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              Get in Touch
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Direct Email & Location */}
          <div className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/20 hover:-translate-y-1.5 hover:scale-[1.02] rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all duration-300 group">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-sky-950/60 border border-sky-800/40 rounded-lg text-sky-400 mt-1 group-hover:scale-110 group-hover:bg-sky-900/50 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Email</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-300 break-all transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 mt-1 group-hover:scale-110 group-hover:border-sky-800/40 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Location</span>
                  <p className="text-sm sm:text-base font-semibold text-white">
                    Tenkasi, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-slate-800/80">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-all hover:scale-105 active:scale-95 shadow-md shadow-sky-950/30"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all hover:scale-105 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Profiles & Networks */}
          <div className="bg-[#0A0E1A] border border-slate-800 hover:border-sky-500/60 hover:shadow-xl hover:shadow-sky-950/20 hover:-translate-y-1.5 hover:scale-[1.02] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group">
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-4">
                Profiles & Networks
              </span>
              <div className="space-y-3">
                <a
                  href="https://github.com/Raghashree1806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-lg transition-all hover:scale-[1.02] group/link"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-300 group-hover/link:text-white group-hover/link:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/link:text-sky-300 transition-colors">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-sky-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ragha-shree-v-6938483a6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-lg transition-all hover:scale-[1.02] group/link"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sky-400 group-hover/link:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/link:text-sky-300 transition-colors">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-sky-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-6 text-xs text-slate-500 font-mono">
              Ragha Shree V · Portfolio Contact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
