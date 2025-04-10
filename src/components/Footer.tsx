
import React from 'react';
import { ArrowUp, Laptop, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-20 border-t border-border/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <Laptop className="h-6 w-6 text-primary-foreground" />
              </span>
              <span className="modern-gradient font-bold text-2xl">WHITNEY.LEJ</span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              AWS Solutions Architect & Cloud Practitioner building the infrastructure of tomorrow.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/Whitney-coded" className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:whitneylejaka@gmail.com" className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-6 md:mb-0">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-300">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">Contact</a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Whitney Lejaka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
