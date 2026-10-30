import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06070a] border-t border-white/[0.08] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left: Brand & Title */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-heading font-extrabold text-base text-white tracking-tight">
              {personalInfo.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs text-slate-400 font-mono">
              Portfolio
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Computer Engineering Student • Aspiring Data Analyst & Full-Stack Developer
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Inquiry for Subham Kumar Keshari")}`}
            className="w-9 h-9 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
            title={`Email: ${personalInfo.email}`}
            aria-label={`Send email to ${personalInfo.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs text-slate-400 font-mono space-y-1 md:text-right">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-400 flex items-center justify-center md:justify-end gap-1">
            Built with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-violet-400 font-semibold">Three.js</span> & <span className="text-blue-400 font-semibold">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
