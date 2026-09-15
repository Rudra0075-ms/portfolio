import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileData } from '../data/portfolioData';
import { Moon, Sun, Menu, X, Github, Linkedin, ExternalLink, Code2, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#090b10]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-900 dark:text-white font-bold text-xl tracking-tight transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg px-1"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-extrabold shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
              R
            </span>
            <span className="font-display">
              Rudra<span className="text-indigo-500 group-hover:text-violet-400 transition-colors">.</span>
            </span>
          </a>

          {/* Availability pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Internships</span>
          </div>
        </div>

        {/* Desktop Navigation Links with Active Indicator */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-200/40 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-indigo-600 dark:text-white bg-white dark:bg-white/15 shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* External quick profile links */}
          <div className="hidden lg:flex items-center gap-1 border-r border-slate-200 dark:border-white/10 pr-2 mr-1">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
            >
              <Linkedin className="w-4 h-4 text-[#0a66c2]" />
            </a>
            <a
              href={profileData.socials.codolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codolio Coding Profile"
              title="Codolio Coding Profile"
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Codolio ↗
            </a>
          </div>

          {/* Theme Toggle Button with Rotate Interaction */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 active:scale-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-500" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 hover:-rotate-45 transition-transform duration-500" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-90 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Smooth Fade-Slide */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#090b10]/95 backdrop-blur-xl ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-3 px-4' : 'max-h-0 opacity-0 py-0 px-4'
        }`}
      >
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40 font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="pt-3 mt-2 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-around text-xs text-slate-600 dark:text-slate-400 font-medium">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Linkedin className="w-4 h-4 text-[#0a66c2]" /> LinkedIn
          </a>
          <a
            href={profileData.socials.codolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 p-2 rounded hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Code2 className="w-4 h-4" /> Codolio
          </a>
        </div>
      </div>
    </header>
  );
};
