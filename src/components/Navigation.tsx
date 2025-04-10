
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Home, User, Briefcase, Phone, Laptop } from "lucide-react";
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-foreground font-bold text-2xl flex items-center gap-2 transition-colors">
          <span className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <Laptop className="h-6 w-6 text-primary-foreground" />
          </span>
          <span className="modern-gradient font-bold">WHITNEY.LEJ</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
            >
              {link.icon}
              <span className="relative group-hover:text-primary transition-colors duration-300">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 flex flex-col justify-center items-center space-y-10 z-40 transition-all duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-3"
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
