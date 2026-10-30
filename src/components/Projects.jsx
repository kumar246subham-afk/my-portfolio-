import React, { useState, useRef } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle, 
  AlertCircle, 
  ArrowUpRight,
  Sparkles,
  Info
} from 'lucide-react';

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // 3D Card Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 6; // Max 6 deg
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`glass-card rounded-2xl overflow-hidden border border-white/[0.08] ${project.borderAccent} transition-all duration-300 shadow-2xl flex flex-col justify-between group relative`}
    >
      {/* Top Banner & Image Preview */}
      <div>
        <div className="relative aspect-video overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={`${project.title} Preview Screenshot`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent opacity-90" />
          
          {/* Project Type Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#090a0f]/80 backdrop-blur-md border border-white/[0.1] text-cyan-300 shadow-md">
              {project.badge}
            </span>
          </div>

          {/* Deployment Status Pill */}
          <div className="absolute top-4 right-4">
            {project.liveDemo ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Verified</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Deployment Pending</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal pt-1">
              {project.description}
            </p>
          </div>

          {/* Key Implemented Features */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Features:</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="pt-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Verified Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-8 pt-0 border-t border-white/[0.05] mt-4 flex flex-wrap items-center gap-3">
        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        ) : (
          <button
            onClick={() => setShowDemoModal(true)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
          >
            <Info className="w-4 h-4 text-amber-400" />
            <span>Live URL Pending</span>
          </button>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all transform hover:-translate-y-0.5"
        >
          <Github className="w-4 h-4" />
          <span>View Source Code</span>
        </a>
      </div>

      {/* Informative Modal for Pending Live Demo URL */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0f111a] border border-white/[0.15] rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">
                  {project.title} Live URL
                </h4>
                <p className="text-xs text-slate-400">Production Deployment Notice</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              As per instructions, this project repository is verified at GitHub, while its public live deployment URL is awaiting your exact production domain.
            </p>

            <div className="p-3 rounded-lg bg-black/40 border border-white/[0.08] text-xs font-mono text-cyan-300 break-all">
              Repo: {project.github}
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowDemoModal(false)}
                className="px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090a0f] bg-grid-pattern">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-blue-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Highlighted real-world applications showcasing full-stack development, document engineering, and AI-driven ATS evaluation.
          </p>
        </div>

        {/* Two Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
