import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Phone, Laptop } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLDivElement>(null);
  
  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: 'About', href: '#about', icon: <User className="w-5 h-5" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Phone className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  // Generate particles once
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
    }))
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-neon/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="cyber-text text-2xl flex items-center gap-2 group">
          <Laptop className="h-6 w-6 text-cyber-neon" />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
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
        
        {/* Mobile Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-foreground hover:text-cyber-neon relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Full-screen Hero-style Mobile Menu */}
      <div 
        ref={navRef}
        className={cn(
          "fixed inset-0 z-[55] transition-all duration-500 md:hidden flex flex-col items-center justify-center",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Layer 1: Deep obsidian base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a12] to-[#080810] z-0" />

        {/* Layer 2: Breathing neon grid */}
        <div className="absolute inset-0 hero-neon-grid z-[1]" />

        {/* Layer 3: Ambient glow spots */}
        <div className="absolute inset-0 z-[2]">
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.08)_0%,transparent_70%)]" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.06)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,25,248,0.05)_0%,transparent_70%)]" />
        </div>

        {/* Layer 4: Floating particles */}
        <div className="absolute inset-0 z-[3] pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full animate-float"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                background: p.id % 3 === 0
                  ? 'rgba(0,255,102,0.5)'
                  : p.id % 3 === 1
                  ? 'rgba(0,200,255,0.4)'
                  : 'rgba(255,25,248,0.3)',
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                filter: `blur(${p.size > 2 ? 1 : 0}px)`,
              }}
            />
          ))}
        </div>

        {/* Layer 5: Scanlines */}
        <div className="absolute inset-0 hero-scanlines z-[4]" />

        {/* Glassmorphism content */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Corner brackets decorative */}
          <div className="absolute -top-12 -left-12 w-8 h-8 border-t-2 border-l-2 border-cyber-neon/40" />
          <div className="absolute -top-12 -right-12 w-8 h-8 border-t-2 border-r-2 border-cyber-neon/40" />
          <div className="absolute -bottom-12 -left-12 w-8 h-8 border-b-2 border-l-2 border-cyber-neon/40" />
          <div className="absolute -bottom-12 -right-12 w-8 h-8 border-b-2 border-r-2 border-cyber-neon/40" />

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
            <span className="text-xs font-['Rajdhani',sans-serif] font-medium tracking-[0.3em] uppercase text-cyber-neon/80">
              Navigation
            </span>
          </div>

          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              className={cn(
                "group flex items-center gap-4 px-8 py-4 glass-panel rounded-sm transition-all duration-300",
                "hover:border-cyber-neon/40 hover:shadow-[0_0_20px_rgba(0,255,102,0.2)]",
                "transform transition-all duration-500",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: isOpen ? `${i * 100 + 200}ms` : '0ms' }}
              onClick={handleLinkClick}
            >
              <span className="text-cyber-neon group-hover:animate-pulse">{link.icon}</span>
              <span className="text-xl font-['Orbitron',sans-serif] font-bold tracking-wider text-foreground/90 group-hover:text-cyber-neon transition-colors">
                {link.name}
              </span>
              <span className="ml-4 text-xs font-['Rajdhani',sans-serif] text-foreground/30 tracking-widest">
                {'0' + (i + 1)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
