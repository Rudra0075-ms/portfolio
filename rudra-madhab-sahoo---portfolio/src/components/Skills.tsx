import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { RevealOnScroll } from './RevealOnScroll';
import { Code, Brain, Globe, Database, Wrench, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code className="w-4 h-4 text-emerald-500" />,
    ai_ml: <Brain className="w-4 h-4 text-violet-500" />,
    web: <Globe className="w-4 h-4 text-sky-500" />,
    database: <Database className="w-4 h-4 text-amber-500" />,
    tools: <Wrench className="w-4 h-4 text-indigo-500" />,
  };

  const filteredCategories = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" aria-label="Skills and Tech Stack" className="py-20 border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 mb-3">
                <span>TECHNICAL TOOLKIT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Technologies I use and learn.
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                Categorized by actual practical experience and active exploration — with zero simulated percentage bars.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium self-start md:self-auto backdrop-blur-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95 ${
                  activeCategory === 'all'
                    ? 'bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Tech ({skillsData.reduce((acc, c) => acc + c.skills.length, 0)})
              </button>
              {skillsData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                    activeCategory === cat.id
                      ? 'bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{cat.title.split(' ')[0]}</span>
                  <span className="text-[10px] opacity-70">({cat.skills.length})</span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category, idx) => (
            <RevealOnScroll key={category.id} delay={idx * 80}>
              <SpotlightCard
                enableTilt={false}
                className="h-full p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5 mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                        {categoryIcons[category.id] || <Layers className="w-4 h-4 text-indigo-500" />}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-medium">
                      {category.skills.length} tools
                    </span>
                  </div>

                  {/* Skills Chips Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl border border-slate-200/80 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.015] hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all group/chip"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm text-slate-900 dark:text-slate-200 group-hover/chip:text-indigo-600 dark:group-hover/chip:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 bg-slate-200/60 dark:bg-white/5">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.note && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {skill.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* Philosophy Note Banner */}
        <RevealOnScroll delay={200}>
          <div className="mt-8 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0d1117] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 animate-pulse" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Learning Philosophy:</strong> Strengthen core Python and DSA algorithms while expanding hands-on knowledge in autonomous agent frameworks and retrieval-augmented systems.
              </span>
            </div>
            <a
              href="#learning"
              className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline shrink-0 group flex items-center gap-1"
            >
              <span>View current learning roadmap</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
