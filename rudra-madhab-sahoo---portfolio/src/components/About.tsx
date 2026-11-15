import React from 'react';
import { profileData } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { RevealOnScroll } from './RevealOnScroll';
import { GraduationCap, MapPin, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Me" className="py-20 border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 mb-3">
              <span>ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              A developer who learns by building practical software.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              I believe hands-on experimentation produces genuine engineering competence. Here is my current trajectory, academic background, and approach.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2-Column Presentation: Bio & Core Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll delay={100}>
              <SpotlightCard
                enableTilt={false}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] shadow-xs space-y-4 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all"
              >
                <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white">
                  Engineering Journey & Focus
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  I am a second-year undergraduate pursuing my <strong className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science & Engineering with AI & ML Specialization</strong> at <strong className="text-slate-900 dark:text-white font-semibold">GITA Autonomous College, Bhubaneswar</strong>, based in Odisha, India.
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  My primary programming language is <strong className="text-slate-900 dark:text-white font-semibold">Python</strong>. I have used it for automation scripts, file processing, small utilities and a webcam-based face-recognition attendance prototype. My main backend experience is with <strong className="text-slate-900 dark:text-white font-semibold">Django</strong>, including authentication, CRUD operations, search, sorting, pagination and Django ORM with SQLite.
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  I have also completed virtual internships in Python full-stack development, Python programming and AI/ML fundamentals. Alongside backend work, I use HTML5, CSS3, JavaScript and Bootstrap to build application interfaces. I prefer an active learning methodology: <em className="text-indigo-600 dark:text-indigo-400 font-medium">build something, understand how it works, and improve it through practice</em>.
                </p>

                {/* Approach Values Cards */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {profileData.approachValues.map((val) => (
                    <div
                      key={val.title}
                      className="p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.02] hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/20 transition-all group"
                    >
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide group-hover:underline">
                        {val.title}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-1">
                        {val.subtitle}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                        {val.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </RevealOnScroll>
          </div>

          {/* Right Column: Key Facts & Academic Specs */}
          <div className="lg:col-span-5 space-y-4">
            <RevealOnScroll delay={150}>
              <SpotlightCard
                enableTilt={false}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] shadow-xs space-y-4 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all"
              >
                <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span>Academic & Professional Details</span>
                </h3>

                <div className="divide-y divide-slate-100 dark:divide-white/5 text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Full Name</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">Rudra Madhab Sahoo</span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Degree</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">B.Tech CSE (AI & ML)</span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Institution</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">GITA Autonomous College</span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Degree CGPA</span>
                    <span className="font-semibold text-slate-900 dark:text-white text-right">8.00</span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Degree Duration</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">Aug 2025 – May 2029</span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Academic Year</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">2nd Year (In Progress)</span>
                  </div>
<div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">School</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">Bridgewell Global School</span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Location</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> Odisha, India
                    </span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Primary Language</span>
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300">
                      Python
                    </span>
                  </div>

                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-slate-500 dark:text-slate-400">Current Objective</span>
                    <span className="font-medium text-slate-900 dark:text-white text-right">Internships & AI Projects</span>
                  </div>
                </div>
              </SpotlightCard>
            </RevealOnScroll>

            {/* Verified Internship Callout */}
            <RevealOnScroll delay={200}>
              <div className="p-4 rounded-2xl border border-indigo-200 dark:border-indigo-900/40 bg-indigo-50/50 dark:bg-indigo-950/20 flex items-start gap-3 hover:border-indigo-400 dark:hover:border-indigo-700/60 transition-colors">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 animate-pulse" />
                <div className="text-xs leading-relaxed">
                  <strong className="block text-slate-900 dark:text-white font-semibold mb-0.5">
                    Three Completed Virtual Internships
                  </strong>
                  <span className="text-slate-600 dark:text-slate-400">
                    Python Full Stack Development (EduSkills), Python Programming (CodeAlpha), and AI & ML (EduSkills).
                  </span>
                  <div className="mt-2">
                    <a
                      href="#certifications"
                      className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline inline-flex items-center gap-1 group"
                    >
                      <span>View internships & credentials</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
