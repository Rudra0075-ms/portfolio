import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectCardGraphic } from './ProjectCardGraphic';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';
import { RevealOnScroll } from './RevealOnScroll';
import { Github, ExternalLink, Info, Sparkles, Code2, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'python', label: 'Python', count: projectsData.filter((p) => p.category === 'python').length },
    { id: 'web', label: 'Web Development', count: projectsData.filter((p) => p.category === 'web').length },
    { id: 'ai', label: 'AI & Agents', count: projectsData.filter((p) => p.category === 'ai').length },
  ];

  return (
    <section id="projects" aria-label="Projects" className="py-20 border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 mb-3">
                <span>FEATURED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                Real projects, built and deployed.
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                Verified repositories and live applications spanning Python computational scripts, interactive web tools, and agentic workflows.
              </p>
            </div>

            {/* Filter Pills with smooth transition */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium self-start md:self-auto backdrop-blur-xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 active:scale-95 ${
                    selectedCategory === cat.id
                      ? 'bg-white dark:bg-white/15 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Featured Flagship Card (if in 'all' or 'ai' view) */}
        {(selectedCategory === 'all' || selectedCategory === 'ai') && (
          <RevealOnScroll delay={100}>
            <SpotlightCard
              enableTilt={false}
              className="mb-10 p-6 sm:p-8 rounded-2xl border border-indigo-300/80 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/60 dark:from-indigo-950/40 dark:via-[#0c1017] dark:to-violet-950/25 shadow-sm hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-300 dark:border-indigo-700/50">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>CURRENTLY EXPLORING & BUILDING</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                    Real-World AI Agent Architecture
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    Deep technical exploration into autonomous agent graphs using <strong className="text-slate-900 dark:text-white">Python, LangChain, LangGraph, RAG, and Vector Databases</strong>. Implementing deterministic cyclic state machines, external tool invocation, and persistent memory stores.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['LangGraph', 'LangChain', 'Python', 'RAG', 'VectorDB', 'CrewAI'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 transition-colors hover:border-indigo-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <button
                    onClick={() => setActiveModalProject(projectsData[0])}
                    className="btn-shine inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all shadow-xs hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Inspect Architecture</span>
                  </button>
                  <a
                    href="https://github.com/Rudra0075-ms/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-slate-300 dark:border-white/10 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Portfolio Repo</span>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        )}

        {/* Projects Grid with Staggered Scroll Reveal and SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={(index % 3) * 100}>
              <SpotlightCard
                as="article"
                enableTilt={true}
                className="h-full flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all group"
              >
                {/* Conceptual Project Graphic with subtle hover zoom */}
                <div className="relative overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <ProjectCardGraphic id={project.id} />
                  </div>
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black/60 backdrop-blur-sm text-slate-300 border border-white/10 transition-colors group-hover:border-indigo-400/40">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Chips with Hover Reaction */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 group-hover:border-indigo-300/40 dark:group-hover:border-indigo-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions Row */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/5 text-xs font-medium">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1 rounded active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            title="View GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                            <span className="sr-only sm:not-sr-only">Code</span>
                          </a>
                        )}

                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white font-semibold transition-all duration-200 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">
                            Python CLI
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
