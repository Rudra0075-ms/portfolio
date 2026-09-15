import React from 'react';
import { profileData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-100 dark:bg-[#06080c] border-t border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
              <span className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-black">
                R
              </span>
              <span className="font-display">Rudra Madhab Sahoo</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
              2nd Year B.Tech CSE (AI & ML) at GITA Autonomous College. Building practical software and exploring agentic AI workflows.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              </a>

              <a
                href={profileData.socials.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-mono text-xs font-semibold transition-colors"
                title="Codolio"
              >
                Codolio
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-medium transition-colors border border-slate-200 dark:border-white/5"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Rudra Madhab Sahoo. All rights reserved.
          </div>

          {/* Genuine repository credit preserved from Thanks.md */}
          <div className="flex items-center gap-1">
            <span>Special thanks to</span>
            <a
              href="https://github.com/Pinaki-Das2007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              @Pinaki-Das2007
            </a>
            <span>for contribution & support.</span>
          </div>

          <div className="font-mono">
            Host: <span className="text-slate-600 dark:text-slate-400">madhab.dpdns.org / GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
