
import React from 'react';
import { ArrowUp, Laptop, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyber-neon/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060610] to-black" />
      <div className="absolute inset-0 hero-neon-grid opacity-30" />
      <div className="absolute inset-0 hero-scanlines" />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-['Orbitron'] text-xl font-bold tracking-wider flex items-center gap-2 text-cyber-neon">
              <Laptop className="h-5 w-5" />
              <span>WHITNEY.LEJ</span>
            </a>
            <p className="text-foreground/40 mt-2 font-mono text-xs tracking-wider">
              AWS Solutions Architect & Cloud Practitioner
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-foreground/40 hover:text-cyber-neon font-mono text-xs tracking-wider transition-colors duration-300 uppercase">
                {link}
              </a>
            ))}
          </div>

          <button onClick={scrollToTop}
            className="w-10 h-10 glass-panel rounded-sm flex items-center justify-center text-cyber-neon hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all duration-300 magnetic-btn">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <div className="border-t border-foreground/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/30 text-xs font-mono mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Whitney Lejaka. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/30 hover:text-cyber-neon text-xs font-mono transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-foreground/30 hover:text-cyber-neon text-xs font-mono transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
