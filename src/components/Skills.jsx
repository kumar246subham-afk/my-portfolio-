import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Sheet, 
  Binary, 
  Cpu, 
  Code, 
  Palette, 
  FileCode2, 
  Atom, 
  Zap, 
  Wind, 
  Server, 
  Network, 
  Workflow, 
  TableProperties, 
  ShieldCheck, 
  Coffee, 
  Terminal, 
  Box, 
  Layers, 
  GitCommit, 
  GitBranch, 
  Github, 
  Laptop, 
  Send, 
  Globe,
  Sparkles
} from 'lucide-react';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Database,
  BarChart3,
  Sheet,
  Binary,
  Cpu,
  Code,
  Palette,
  FileCode2,
  Atom,
  Zap,
  Wind,
  Server,
  Network,
  Workflow,
  TableProperties,
  ShieldCheck,
  Coffee,
  Terminal,
  Box,
  Layers,
  GitCommit,
  GitBranch,
  Github,
  Laptop,
  Send,
  Globe
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090a0f] bg-dots-pattern">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text-violet-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            A comprehensive overview of my data analytics toolkit, web engineering stack, and software engineering competencies.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            return (
              <div
                key={category.id}
                className={`group glass-card rounded-2xl p-6 border border-white/[0.08] ${category.borderGlow} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle Gradient Accent along card top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

                <div>
                  {/* Category Title & Description */}
                  <div className="mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-cyan-200 transition-colors mt-0.5">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Code;
                      return (
                        <div
                          key={skill.name}
                          className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-200 transform hover:scale-105 ${category.badgeColor}`}
                        >
                          <IconComponent className="w-3.5 h-3.5 shrink-0 opacity-90" />
                          <span className="text-slate-200">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="pt-5 mt-5 border-t border-white/[0.05] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.length} core technologies</span>
                  <span className="group-hover:text-cyan-400 transition-colors">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
