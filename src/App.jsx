import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-blue-600/30 selection:text-cyan-200">
      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar onDownloadResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive 3D Canvas */}
        <Hero onDownloadResume={() => setIsResumeModalOpen(true)} />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Progress Button */}
      <BackToTop />

      {/* Resume Download / Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
