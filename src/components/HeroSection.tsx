
import React from 'react';
import { FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 scanline">
      <div className="absolute inset-0 dark:bg-web3-gradient light:bg-web3-gradient-light opacity-20 z-0"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-10 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-3/4 space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="cyber-text leading-tight">I AM WHITNEY LEJAKA</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-cyber-neon light:text-cyber-neon-light">
              <span className="text-flicker">&#60;Certified AWS Professional&#47;&#62;</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl light:text-slate-700 mx-auto">
              I am an aspiring Solutions Architect who has earned the AWS Cloud Practitioner certification.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="cyber-button">View Projects</a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white light:shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                Get In Touch
              </a>
              <Button 
                variant="outline" 
                className="group cyber-download-btn bg-transparent border-2 border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-black flex items-center gap-2 px-6 py-6 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(0,255,102,0.3)] hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] light:border-cyber-neon-light light:text-cyber-neon-light light:hover:bg-cyber-neon-light light:hover:text-white light:shadow-[0_0_10px_rgba(0,200,82,0.2)]"
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
