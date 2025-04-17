
import React from 'react';
import { FileDown, Code, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 scanline">
      <div className="absolute inset-0 dark:bg-web3-gradient light:bg-web3-gradient-light opacity-20 z-0"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-10 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left content column */}
          <div className="w-full space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto text-black dark:text-white">
              <span className="leading-tight">WHITNEY LEJAKA</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-cyber-neon-light dark:text-cyber-neon">
              <span className="text-flicker">&#60;Certified AWS Professional&#47;&#62;</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-foreground/80 max-w-2xl">
              I am an aspiring Solutions Architect who has earned the AWS Cloud Practitioner certification, with expertise in HTML and CSS development.
            </p>
            <div className="flex flex-wrap gap-3 my-4 justify-center md:justify-start">
              <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-neon rounded-sm text-cyber-neon">
                <Code className="w-4 h-4 inline mr-1" /> HTML
              </span>
              <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-magenta rounded-sm text-cyber-magenta">
                <FileCode className="w-4 h-4 inline mr-1" /> CSS
              </span>
              <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-yellow rounded-sm text-cyber-yellow">
                AWS
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects" className="cyber-button">View Projects</a>
              
              <Button 
                variant="outline" 
                className="group cyber-download-btn bg-transparent border-2 border-cyber-neon text-white dark:text-white text-black hover:bg-cyber-neon hover:text-white flex items-center gap-2 px-6 py-6 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(0,255,102,0.3)] hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] border-cyber-neon-light hover:bg-cyber-neon-light hover:text-white shadow-[0_0_10px_rgba(0,200,82,0.2)]"
                onClick={() => {
                  // In a real app, this would link to an actual CV file
                  console.log('CV download clicked');
                  // Example of how to trigger a download (would use actual file in production)
                  const link = document.createElement('a');
                  link.href = '#'; // Replace with actual CV file path
                  link.download = 'Whitney_Lejaka_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
