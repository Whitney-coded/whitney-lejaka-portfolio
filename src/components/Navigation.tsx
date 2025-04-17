import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Phone, Laptop } from "lucide-react";
import { cn } from '@/lib/utils';
import { 
  Drawer, 
  DrawerContent, 
  DrawerTrigger, 
  DrawerClose 
} from "@/components/ui/drawer";
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

  // Close the mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
        
        {/* Mobile Navigation */}
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-foreground hover:text-cyber-neon"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-cyber-black/95 border-t border-cyber-neon/20 p-6 h-[70vh]">
              <div className="flex flex-col space-y-8 items-center justify-center h-full">
                {navLinks.map((link) => (
                  <DrawerClose asChild key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xl font-semibold text-foreground hover:text-cyber-neon transition-colors duration-300 flex items-center gap-3 cyber-glitch"
                      onClick={handleLinkClick}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-foreground hover:text-cyber-neon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </div>
      
      {/* Collapsible Mobile Menu (Fallback without Drawer) */}
      {!isMobile && (
        <div 
          ref={navRef}
          className={cn(
            "fixed inset-0 bg-cyber-black/95 flex flex-col justify-center items-center space-y-10 z-40 transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 pt-16" : "opacity-0 pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xl font-semibold text-foreground hover:text-cyber-neon transition-colors duration-300 flex items-center gap-3 cyber-glitch"
              onClick={handleLinkClick}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
