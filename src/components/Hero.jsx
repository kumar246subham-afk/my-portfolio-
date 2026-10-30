import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import Hero3DCanvas from './Hero3DCanvas';
import { ArrowDown, Github, Linkedin, Download, Sparkles, Terminal } from 'lucide-react';

export default function Hero({ onDownloadResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* 3D Background Canvas */}
      <Hero3DCanvas />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-mono tracking-wider backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 -ml-3.5" />
            <span>Open for Tech & Analytics Roles</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
              Hello, World! I am
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Subham Kumar <br className="hidden sm:block" />
              <span className="gradient-text-blue-cyan">Keshari</span>
            </h1>
          </div>

          {/* Animated Dynamic Role Badge */}
          <div className="flex items-center gap-2 text-xl sm:text-2xl font-heading font-semibold text-slate-200 min-h-[38px]">
            <Terminal className="w-6 h-6 text-cyan-400 shrink-0" />
            <span className="text-slate-300">I am an Aspiring</span>
            <span className="gradient-text-violet-cyan border-b-2 border-cyan-400 pb-0.5">
              {displayedText}
            </span>
            <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
          </div>

          {/* Short Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            "{personalInfo.shortBio}"
          </p>

          {/* Prominent Interactive Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            {/* Explore My Work CTA */}
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-cyan-400/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Explore My Work</span>
            </a>

            {/* Download Resume CTA */}
            <button
              onClick={onDownloadResume}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.15] hover:border-blue-400/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="pt-3 flex items-center gap-5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] hover:border-blue-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] hover:border-blue-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photograph Frame (5 Cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group max-w-sm w-full">
            {/* Ambient Multi-Layer Glow behind Photo */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700" />
            
            {/* Photo Glass Container */}
            <div className="relative rounded-2xl p-2 bg-[#0d0f17]/90 backdrop-blur-xl border border-white/[0.12] shadow-2xl">
              <div className="relative overflow-hidden rounded-xl aspect-[5/6] bg-gradient-to-b from-slate-900 via-slate-800 to-[#090a0f]">
                <img
                  src={personalInfo.profileImage}
                  alt="Subham Kumar Keshari - Professional Profile"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if file path ever altered
                    e.target.onerror = null;
                    e.target.src = "/images/subham-profile.png";
                  }}
                />
                
                {/* Subtle tech overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/90 via-transparent to-transparent opacity-80" />
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#090a0f]/80 backdrop-blur-md border border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-semibold text-white text-xs">
                        Subham Kumar Keshari
                      </p>
                      <p className="text-[10px] text-cyan-300 font-mono">
                        Marwadi University
                      </p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-mono">
                      B.Tech CE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Data Chip */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f111a]/95 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-md animate-float-slow">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Full-Stack & Data</span>
            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
          Scroll Down
        </span>
        <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </div>
    </section>
  );
}
