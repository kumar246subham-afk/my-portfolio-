import React from 'react';
import { Download, ExternalLink, X, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Subham_Kumar_Keshari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="glass-panel rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 border border-white/[0.15] shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1px] shrink-0">
            <div className="w-full h-full bg-[#090a0f] rounded-[11px] flex items-center justify-center text-cyan-300">
              <FileText className="w-6 h-6" />
            </div>
          </div>
          <div className="space-y-1 pr-6">
            <h3 className="text-xl font-heading font-bold text-white">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              {personalInfo.name} • Marwadi University
            </p>
          </div>
        </div>

        {/* Details Card */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-300">
            <span>Format: Standard PDF</span>
            <span className="text-cyan-400">Ready for Download</span>
          </div>
          <div className="text-xs text-slate-300 space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>B.Tech in Computer Engineering Highlights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Data Analytics Toolkit (Python, SQL, Power BI)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Projects: ConvertX & Resume-Checker-AI</span>
            </div>
          </div>
        </div>

        {/* Notice for the user */}
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Official resume is verified and ready for review or download as <code className="text-cyan-300 font-mono text-[11px]">Subham_Kumar_Keshari_Resume.pdf</code>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={handleDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Now</span>
          </button>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-xs text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Preview in Tab</span>
          </a>
        </div>
      </div>
    </div>
  );
}
