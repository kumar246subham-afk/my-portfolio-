import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Code, 
  BarChart2, 
  Brain, 
  Layers, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#090a0f]">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            About <span className="gradient-text-blue-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Bridging analytical data rigor with modern full-stack web engineering.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Education & Technical Focus Highlights (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 relative border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 group shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Formal Education
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {personalInfo.education.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {personalInfo.education.university}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>{personalInfo.education.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed font-sans">
                {personalInfo.education.description}
              </div>
            </div>

            {/* Core Values Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-violet-500/30 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-white text-base">
                  Learning Mindset & Philosophy
                </h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated to writing maintainable code and dissecting data to find high-impact answers. Always curious, eager to experiment with modern AI architectures, and committed to continuous technical refinement.
              </p>
            </div>

          </div>

          {/* Right Column: Bio, Interests & Career Focus (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Box */}
            <div className="glass-panel rounded-2xl p-8 border border-white/[0.09] shadow-xl relative">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
              </h3>
              
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
                "{personalInfo.aboutText}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm mb-1.5">
                    <BarChart2 className="w-4 h-4 text-cyan-400" />
                    <span>Data Analytics Focus</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Uncovering patterns, structuring SQL queries, generating business reports, and building Python data pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm mb-1.5">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span>Full-Stack Development</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Building clean user interfaces in React alongside RESTful backend microservices in Node.js & Express.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Interests Pill Matrix */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5">
                Key Areas of Exploration & Interest
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400/40 text-slate-200 text-xs font-medium transition-all duration-200 hover:bg-white/[0.07]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
