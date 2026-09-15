import React, { useState, useEffect, useRef } from 'react';
import { profileData } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Sparkles, 
  Terminal, 
  GraduationCap, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const roles = [
    'Python Developer',
    'AI & ML Learner',
    'Practical Web Builder',
    'Agentic AI Explorer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const pythonSnippet = `class RudraMadhabSahoo:
    def __init__(self):
        self.degree = "B.Tech CSE (AI & ML)"
        self.year = 2
        self.primary_lang = "Python"
        self.core_stack = ["Python", "LangChain", "LangGraph", "Web"]
        self.learning = ["Agentic AI", "DSA", "RAG"]

    def workflow(self):
        # Learn by building
        return ["Build", "Understand", "Improve"]`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pythonSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200 dark:border-white/5"
    >
      {/* Subtle Animated Radial Spotlight behind Headline */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none animate-subtle-pulse" />
      <div className="absolute top-1/2 right-1/4 w-[360px] h-[360px] bg-violet-500/10 dark:bg-violet-500/12 rounded-full blur-[90px] pointer-events-none animate-ambient-3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Academic Credentials Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100/90 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-xs backdrop-blur-xs hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors">
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                <GraduationCap className="w-3.5 h-3.5" />
                B.Tech CSE (AI & ML)
              </span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">2nd Year</span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3 h-3 text-slate-400" /> Odisha, India
              </span>
            </div>

            {/* Main Headline with Linear-style subtle gradient */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Hi, I'm <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-200 inline-block hover:brightness-110 transition-all">
                  {profileData.name}.
                </span>
              </h1>

              {/* Dynamic Sub-headline with Typed Effect */}
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-display font-semibold text-slate-700 dark:text-slate-300 min-h-[36px]">
                <span className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl font-normal">Focus:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono tracking-tight font-semibold">
                  {displayText}
                </span>
                <span className="w-0.5 h-6 bg-indigo-500 animate-pulse inline-block" />
              </div>
            </div>

            {/* Personal Positioning Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I build practical software and web applications with <strong className="text-slate-900 dark:text-white font-semibold">Python</strong> while growing into <strong className="text-slate-900 dark:text-white font-semibold">AI agents, LangChain, LangGraph, and backend engineering</strong>. A curious developer who learns by building real tools from first principles.
            </p>

            {/* CTAs with Light Sweep & Lift */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#090b10]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100/90 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] border border-slate-300 dark:border-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <span>Contact / Connect</span>
              </a>

              <a
                href="/AI-ML-Virtual-Internship.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-white/5 transition-all"
                title="View EduSkills AI/ML Virtual Internship Certificate"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                <span>AI/ML Certificate</span>
              </a>
            </div>

            {/* Social & Coding Profile Links with subtle hover lift */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect:
              </span>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-0.5 hover:border-slate-400 dark:hover:border-white/20 active:scale-95 shadow-2xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-0.5 hover:border-[#0a66c2]/40 active:scale-95 shadow-2xs"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 active:scale-95 shadow-2xs"
              >
                <Code2 className="w-3.5 h-3.5 text-violet-500" />
                <span>Codolio Profile</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all hover:-translate-y-0.5 hover:border-rose-400/40 active:scale-95 shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Developer Snapshot Terminal Card with Interactive Spotlight & 3D Tilt */}
          <div className="lg:col-span-5">
            <SpotlightCard
              enableTilt={true}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-[#0f131a] shadow-xl text-slate-200"
            >
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 dark:bg-[#0b0e14] border-b border-slate-800 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 transition-transform hover:scale-125" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 transition-transform hover:scale-125" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 transition-transform hover:scale-125" />
                  <span className="ml-2 text-xs font-mono text-slate-400">rudra_profile.py</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    aria-label="Copy Python Code"
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-[11px] flex items-center gap-1"
                    title="Copy Python Code"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 text-[10px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="text-[10px]">Copy</span>
                      </>
                    )}
                  </button>
                  <span className="text-[10px] font-mono text-slate-500 border-l border-slate-800 pl-2">Python 3.11</span>
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto space-y-1 text-slate-300">
                <div className="text-slate-500"># Source of truth: GITA Autonomous College</div>
                <div>
                  <span className="text-violet-400">class</span>{' '}
                  <span className="text-emerald-300">RudraMadhabSahoo</span>:
                </div>
                <div className="pl-4">
                  <span className="text-indigo-400">def</span>{' '}
                  <span className="text-amber-300">__init__</span>(self):
                </div>
                <div className="pl-8 text-slate-300">
                  self.degree = <span className="text-emerald-300">"B.Tech CSE (AI & ML)"</span>
                </div>
                <div className="pl-8 text-slate-300">
                  self.year = <span className="text-amber-400">2</span>
                </div>
                <div className="pl-8 text-slate-300">
                  self.primary_lang = <span className="text-emerald-300">"Python"</span>
                </div>
                <div className="pl-8 text-slate-300">
                  self.core_stack = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"LangChain"</span>, <span className="text-emerald-300">"LangGraph"</span>, <span className="text-emerald-300">"Web"</span>]
                </div>
                <div className="pl-8 text-slate-300">
                  self.learning = [<span className="text-emerald-300">"Agentic AI"</span>, <span className="text-emerald-300">"DSA"</span>, <span className="text-emerald-300">"RAG"</span>]
                </div>
                <div className="pl-4 pt-1">
                  <span className="text-indigo-400">def</span>{' '}
                  <span className="text-amber-300">workflow</span>(self):
                </div>
                <div className="pl-8 text-slate-500"># Philosophy from portfolio</div>
                <div className="pl-8">
                  <span className="text-violet-400">return</span>{' '}
                  <span className="text-amber-200">["Build", "Understand", "Improve"]</span>
                </div>
              </div>

              {/* Terminal Quick Highlight Footer */}
              <div className="px-4 py-2.5 bg-slate-950/80 dark:bg-black/40 border-t border-slate-800 dark:border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                  <span>status: ready_to_collaborate</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400">● 9 Projects built</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};
