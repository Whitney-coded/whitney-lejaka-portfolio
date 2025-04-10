
import React from 'react';
import { ArrowUp, Wallet, Bitcoin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="dark:bg-black light:bg-slate-50 py-10 border-t dark:border-cyber-neon/10 light:border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="cyber-text text-2xl font-bold tracking-wider flex items-center gap-2">
              <Wallet className="h-6 w-6" />
              <span>WHITNEY.LEJ</span>
            </a>
            <p className="dark:text-foreground/60 light:text-slate-600 mt-2">
              AWS Solutions Architect & Cloud Practitioner
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="#home" className="dark:text-foreground/70 light:text-slate-600 hover:text-cyber-neon light:hover:text-cyber-neon-light transition-colors duration-300">Home</a>
            <a href="#about" className="dark:text-foreground/70 light:text-slate-600 hover:text-cyber-neon light:hover:text-cyber-neon-light transition-colors duration-300">About</a>
            <a href="#projects" className="dark:text-foreground/70 light:text-slate-600 hover:text-cyber-neon light:hover:text-cyber-neon-light transition-colors duration-300">Projects</a>
            <a href="#contact" className="dark:text-foreground/70 light:text-slate-600 hover:text-cyber-neon light:hover:text-cyber-neon-light transition-colors duration-300">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-sm dark:bg-black light:bg-white dark:border-cyber-neon/30 light:border-slate-300 border flex items-center justify-center dark:text-cyber-neon light:text-cyber-neon-light dark:hover:bg-cyber-neon light:hover:bg-cyber-neon-light hover:text-black light:hover:text-white transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        <div className="border-t dark:border-cyber-neon/10 light:border-slate-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-foreground/60 light:text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Whitney Lejaka. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="dark:text-foreground/60 light:text-slate-500 hover:text-cyber-neon light:hover:text-cyber-neon-light text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="dark:text-foreground/60 light:text-slate-500 hover:text-cyber-neon light:hover:text-cyber-neon-light text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
