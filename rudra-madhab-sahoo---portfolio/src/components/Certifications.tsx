import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { RevealOnScroll } from './RevealOnScroll';
import { Award, ExternalLink, FileText, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" aria-label="Certifications" className="py-20 border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 mb-3">
              <span>CREDENTIALS & INTERNSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Verified certifications.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Real internship certificates and official documentation completed during academic studies.
            </p>
          </div>
        </RevealOnScroll>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="lg:col-span-8">
              <RevealOnScroll delay={100}>
                <SpotlightCard
                  enableTilt={false}
                  className="p-6 sm:p-8 rounded-2xl border border-indigo-300/60 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/40 via-white to-slate-50/30 dark:from-indigo-950/20 dark:via-[#0c1017] dark:to-transparent shadow-xs hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] space-y-6"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-400/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                          {cert.type}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                      <span>Verified Document</span>
                    </div>
                  </div>

                  {/* Issuer & Narrative */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Issuing Organization:{' '}
                      <span className="text-slate-900 dark:text-white font-bold">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Competencies Covered */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                      Internship Competencies & Outcomes
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {cert.skillsLearned.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons with shine & lift */}
                  <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center gap-3">
                    <a
                      href={cert.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all shadow-xs hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Open Certificate PDF ↗</span>
                    </a>

                    <a
                      href={cert.documentUrl}
                      download="Rudra-Madhab-Sahoo-AI-ML-Virtual-Internship.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-slate-200 dark:border-white/10 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            </div>
          ))}

          {/* Side Info Box: Academic Standing */}
          <div className="lg:col-span-4 space-y-4">
            <RevealOnScroll delay={200}>
              <SpotlightCard
                enableTilt={false}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] shadow-xs space-y-4"
              >
                <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  Internship Program Context
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The AI-ML Virtual Internship with EduSkills provides comprehensive training in artificial intelligence, model pipelines, and practical Python problem solving.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1">
                  <div>Document: AI-ML-Virtual-Internship.pdf</div>
                  <div>Status: Completed & Archived</div>
                  <div>Source: Repository Root Asset</div>
                </div>
              </SpotlightCard>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
