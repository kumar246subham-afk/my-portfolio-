import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  AlertCircle,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copyStatus, setCopyStatus] = useState(''); // 'copied', 'error', ''
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [generatedGmailUrl, setGeneratedGmailUrl] = useState('');
  const [generatedMailtoUrl, setGeneratedMailtoUrl] = useState('');

  const targetEmail = personalInfo.email || 'kumar246subham@gmail.com';
  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}`;
  const directMailtoUrl = `mailto:${targetEmail}`;

  // Robust Copy Email with navigator.clipboard and fallback
  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(targetEmail)
        .then(() => {
          setCopyStatus('copied');
          setTimeout(() => setCopyStatus(''), 2500);
        })
        .catch(() => fallbackCopy(targetEmail));
    } else {
      fallbackCopy(targetEmail);
    }
  };

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus(''), 2500);
      } else {
        setCopyStatus('error');
        setTimeout(() => setCopyStatus(''), 3000);
      }
    } catch (err) {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus(''), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    // Field Validation
    if (!trimmedName) {
      setErrorMsg('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMsg('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    if (!trimmedMessage) {
      setErrorMsg('Please enter your message.');
      return;
    }

    const subject = trimmedSubject || `Portfolio Inquiry from ${trimmedName}`;
    const body = `Hello Subham,\n\nName: ${trimmedName}\nSender Email: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n\n---\nSent from Portfolio Website`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setGeneratedGmailUrl(gmailUrl);
    setGeneratedMailtoUrl(mailtoUrl);

    // Open Gmail compose directly in a new tab
    const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popups may be blocked; user can use visible anchor on screen
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090a0f] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-600/10 via-violet-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-300 text-xs font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Let's Build <span className="gradient-text-blue-cyan">Something Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Whether you have an upcoming project, data analytics opportunity, or simply want to connect—my inbox is always open!
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Reachout Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] hover:border-blue-500/30 transition-all shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                {/* Email Icon button linking directly to Gmail compose */}
                <a
                  href={directGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/20 hover:border-cyan-400/50 transition-colors cursor-pointer"
                  title="Compose Email on Gmail"
                  aria-label={`Compose email to ${targetEmail} via Gmail`}
                >
                  <Mail className="w-5 h-5 pointer-events-none" />
                </a>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Direct Email Address
                  </span>
                  {/* Clickable Email Address using mailto */}
                  <a
                    href={directMailtoUrl}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors block cursor-pointer"
                    title={`Open in default email app: ${directMailtoUrl}`}
                  >
                    {targetEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                {/* Send Direct Email button opening Gmail compose */}
                <a
                  href={directGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20 cursor-pointer"
                  title="Open Gmail compose in a new tab"
                >
                  <Mail className="w-3.5 h-3.5 pointer-events-none" />
                  <span>Send Direct Email</span>
                </a>

                {/* Copy Email Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copyStatus === 'copied' ? (
                    <Check className="w-4 h-4 text-emerald-400 pointer-events-none" />
                  ) : (
                    <Copy className="w-4 h-4 pointer-events-none" />
                  )}
                </button>
              </div>

              {copyStatus === 'copied' && (
                <p className="text-xs text-emerald-400 font-mono text-center animate-fadeIn">
                  Email Copied!
                </p>
              )}
              {copyStatus === 'error' && (
                <p className="text-xs text-rose-400 font-mono text-center animate-fadeIn">
                  Failed to copy. Please manually copy: {targetEmail}
                </p>
              )}
            </div>

            {/* Social Professional Channels */}
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-4">
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-slate-300">
                Professional Channels
              </h3>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-blue-500/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </span>
                    <p className="text-[11px] text-slate-400">Connect with Subham</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors font-mono">
                  View Profile &rarr;
                </span>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-violet-500/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-violet-300 transition-colors">
                      GitHub
                    </span>
                    <p className="text-[11px] text-slate-400">Explore Open Repositories</p>
                  </div>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-violet-400 transition-colors font-mono">
                  View Code &rarr;
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.09] shadow-2xl relative">
              
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-heading font-bold text-white">
                  Send a Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-white text-base">
                      Gmail Compose Opened
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                      A Gmail compose tab has been prepared with your message addressed to <strong className="text-cyan-300">{targetEmail}</strong>.
                    </p>
                  </div>

                  {/* Direct Link Options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-1">
                    <a
                      href={generatedGmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in Gmail Tab</span>
                    </a>

                    <a
                      href={generatedMailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:text-white transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Default Mail App</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Compose Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your ideas, project requirements, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 border border-cyan-400/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4 pointer-events-none" />
                    <span>Send Message (Opens Gmail)</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-mono pt-1">
                    Opens Gmail compose with pre-filled details to <span className="text-cyan-300">{targetEmail}</span>.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
