
import React from 'react';
import { ArrowUp, Wallet, Bitcoin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-cyber-black py-10 border-t border-cyber-neon/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="cyber-text text-2xl font-bold tracking-wider flex items-center gap-2">
              <Wallet className="h-6 w-6" />
              <span>WHITNEY.LEJ</span>
            </a>
            <p className="text-foreground/60 mt-2">
              AWS Solutions Architect & Cloud Practitioner
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <a href="#home" className="text-foreground/70 hover:text-cyber-neon transition-colors duration-300">Home</a>
            <a href="#about" className="text-foreground/70 hover:text-cyber-neon transition-colors duration-300">About</a>
            <a href="#projects" className="text-foreground/70 hover:text-cyber-neon transition-colors duration-300">Projects</a>
            <a href="#blog" className="text-foreground/70 hover:text-cyber-neon transition-colors duration-300">Blog</a>
            <a href="#contact" className="text-foreground/70 hover:text-cyber-neon transition-colors duration-300">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-sm bg-cyber-dark-blue border border-cyber-neon/30 flex items-center justify-center text-cyber-neon hover:bg-cyber-neon hover:text-cyber-dark-blue transition-colors duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        <div className="border-t border-cyber-neon/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Whitney Lejaka. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-cyber-neon text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-cyber-neon text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
