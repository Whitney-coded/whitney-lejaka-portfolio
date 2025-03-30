
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Phone, FileText } from "lucide-react";
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Blog', href: '#blog', icon: <FileText className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-dark-blue/80 backdrop-blur-md border-b border-cyber-neon/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="cyber-text text-2xl font-bold tracking-wider">WHITNEY.LEJ</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-cyber-neon transition-colors duration-300 flex items-center gap-2 cyber-glitch"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          className="flex md:hidden text-foreground hover:text-cyber-neon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-cyber-black/95 flex flex-col justify-center items-center space-y-10 z-40 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-xl font-semibold text-foreground hover:text-cyber-neon transition-colors duration-300 flex items-center gap-3 cyber-glitch"
            onClick={() => setIsOpen(false)}
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
