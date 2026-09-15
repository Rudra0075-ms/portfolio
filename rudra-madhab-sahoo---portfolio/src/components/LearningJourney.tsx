import React from 'react';
import { learningItems, goals2026 } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { RevealOnScroll } from './RevealOnScroll';
import { Compass, Sparkles, Target } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  return (
    <section id="learning" aria-label="Current Learning and Goals" className="py-20 border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 mb-3">
              <span>CURRICULUM & DIRECTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Currently exploring & 2026 goals.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              A transparent log of what I am studying right now, without inflated claims of senior mastery.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2-Column Grid: Active Learning & 2026 Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Active Learning In Progress */}
          <div className="lg:col-span-6 space-y-4">
            <RevealOnScroll delay={100}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-indigo-500" />
                  <span>Currently Exploring</span>
                </h3>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Studies
                </span>
              </div>
            </RevealOnScroll>

            <div className="space-y-3">
              {learningItems.map((item, idx) => (
                <RevealOnScroll key={item.topic} delay={120 + idx * 60}>
                  <SpotlightCard
                    enableTilt={false}
                    className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.topic}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/40">
                        {item.status}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mt-1">
                      {item.category}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* 2026 Concrete Milestones */}
          <div className="lg:col-span-6 space-y-4">
            <RevealOnScroll delay={150}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-violet-500" />
                  <span>Target Milestones for 2026</span>
                </h3>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-medium">
                  Goals Roadmap
                </span>
              </div>
            </RevealOnScroll>

            <div className="space-y-3">
              {goals2026.map((goal, idx) => (
                <RevealOnScroll key={goal.goal} delay={160 + idx * 60}>
                  <SpotlightCard
                    enableTilt={false}
                    className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all shadow-xs flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-lg bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/40 text-violet-600 dark:text-violet-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      0{idx + 1}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                          {goal.goal}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          {goal.targetYear}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                        Area: {goal.area}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                        {goal.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>

            {/* Fun Fact Callout from Source */}
            <RevealOnScroll delay={250}>
              <div className="mt-4 p-4 rounded-xl border border-amber-200 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/10 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3 hover:border-amber-400/60 transition-colors">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
                <div className="leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block font-semibold mb-1">
                    Continuous Growth Philosophy
                  </strong>
                  "I enjoy building projects, solving coding problems, and exploring new technologies. Every project teaches me something new and helps me grow as a programmer."
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
