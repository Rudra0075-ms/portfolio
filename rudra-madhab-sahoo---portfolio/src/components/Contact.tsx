import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { RevealOnScroll } from './RevealOnScroll';
import { Mail, Github, Linkedin, Code2, Copy, Check, ExternalLink, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('Internship Opportunity');
  const [customMessage, setCustomMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactItems = [
    {
      name: 'GitHub',
      handle: 'Rudra0075-ms',
      description: 'Repositories, projects & commit history',
      url: profileData.socials.github,
      icon: <Github className="w-5 h-5 text-slate-800 dark:text-white" />,
      tag: 'Code',
      hoverBorder: 'hover:border-slate-400 dark:hover:border-white/30',
    },
    {
      name: 'LinkedIn',
      handle: 'Rudra Madhab Sahoo',
      description: 'Professional connections & network',
      url: profileData.socials.linkedin,
      icon: <Linkedin className="w-5 h-5 text-[#0a66c2]" />,
      tag: 'Network',
      hoverBorder: 'hover:border-[#0a66c2]/50',
    },
    {
      name: 'Codolio',
      handle: 'Rms_007',
      description: 'Problem-solving track & coding profile',
      url: profileData.socials.codolio,
      icon: <Code2 className="w-5 h-5 text-violet-500" />,
      tag: 'DSA / Practice',
      hoverBorder: 'hover:border-violet-500/50',
    },
    {
      name: 'Google Developer Profile',
      handle: 'rudramadhabsahoogita',
      description: 'Developer program verification',
      url: profileData.socials.googleDev,
      icon: <span className="font-bold text-base text-rose-500">G</span>,
      tag: 'Profile',
      hoverBorder: 'hover:border-rose-500/50',
    }
  ];

  const quickSubjects = [
    'Internship Opportunity',
    'Hackathon Collaboration',
    'AI / ML Project Discussion',
    'General Engineering Connect'
  ];

  const generateMailto = () => {
    const subject = encodeURIComponent(`[Portfolio] ${selectedSubject} - Rudra Madhab Sahoo`);
    const body = encodeURIComponent(
      customMessage
        ? `${customMessage}\n\nSent from portfolio website.`
        : `Hi Rudra,\n\nI reviewed your portfolio and would like to connect regarding ${selectedSubject.toLowerCase()}.\n\nBest regards,`
    );
    return `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" aria-label="Contact" className="py-20 border-b border-slate-200 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 mb-3">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Let's build something useful.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              I am actively open to internships, hackathons, software engineering opportunities, and technical collaborations.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Email & Quick Message Composer */}
          <div className="lg:col-span-6 space-y-6">
            <RevealOnScroll delay={100}>
              <SpotlightCard
                enableTilt={false}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] shadow-xs space-y-4 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Direct Email
                  </span>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Replies within 24 hours
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#070a0f] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 break-all">
                    {profileData.email}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-slate-300 dark:border-white/10 transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${profileData.email}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </a>
                  </div>
                </div>

                {/* Quick Email Launcher for Recruiters & Collaborators */}
                <div className="pt-3 space-y-3">
                  <label className="block text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                    Select Purpose for Pre-filled Email:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickSubjects.map((subj) => (
                      <button
                        key={subj}
                        onClick={() => setSelectedSubject(subj)}
                        className={`px-3 py-1.5 rounded-lg text-xs transition-all active:scale-95 ${
                          selectedSubject === subj
                            ? 'bg-indigo-600 text-white font-semibold shadow-xs hover:bg-indigo-500'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'
                        }`}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                      Optional Custom Message:
                    </label>
                    <textarea
                      rows={3}
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder={`Write your message regarding ${selectedSubject.toLowerCase()}...`}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-black/20 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                    />
                  </div>

                  <a
                    href={generateMailto()}
                    className="btn-shine w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Mail Client with Pre-filled Subject ({selectedSubject})</span>
                  </a>
                </div>
              </SpotlightCard>
            </RevealOnScroll>
          </div>

          {/* Right Column: Verified Profiles List */}
          <div className="lg:col-span-6 space-y-3">
            <RevealOnScroll delay={150}>
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Verified Profiles & Platforms
              </h3>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactItems.map((item, idx) => (
                <RevealOnScroll key={item.name} delay={180 + idx * 60}>
                  <SpotlightCard
                    enableTilt={true}
                    className="h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.025] hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all shadow-xs group"
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500">
                            {item.tag}
                          </span>
                        </div>

                        <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        <span>{item.handle}</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </a>
                  </SpotlightCard>
                </RevealOnScroll>
              ))}
            </div>

            {/* Academic & Geographic Verification Note */}
            <RevealOnScroll delay={350}>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.01] text-xs text-slate-500 dark:text-slate-400 space-y-1 font-mono">
                <div>Institution: GITA Autonomous College, Bhubaneswar</div>
                <div>Location: Odisha, India (IST / UTC+5:30)</div>
                <div>Secondary Email: {profileData.secondaryEmail}</div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
