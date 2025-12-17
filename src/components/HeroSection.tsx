import React from 'react';
import { FileDown, Code, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/uc?export=download&id=1QT14_qGxK02POyNeKqmX06SdWsMDHHiO', '_blank');
    
    toast({
      title: "Download Started",
      description: "Your CV download should begin shortly.",
    });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 scanline">
      <div className="absolute inset-0 dark:bg-web3-gradient opacity-20 z-0"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-10 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-start justify-center">
          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-left">
              <span className="cyber-text leading-tight">WHITNEY LEJAKA</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-cyber-neon text-left">
              <span className="text-flicker">&#60;ALX AFRICA ALUMNA | POWER LEARN PROJECT ALUMNA | AWS CERTIFIED CLOUD PRACTITIONER&#47;&#62;</span>
            </h2>
            <div className="flex flex-wrap gap-3 my-4">
              <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-neon rounded-sm text-cyber-neon">
                <Code className="w-4 h-4 inline mr-1" /> HTML
              </span>
              <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-magenta rounded-sm text-cyber-magenta">
                <FileCode className="w-4 h-4 inline mr-1" /> CSS
              </span>
              <span className="px-3 py-1 bg-cyber-blue/20 border border-cyber-yellow rounded-sm text-cyber-yellow">
                AWS
              </span>
              <span className="px-3 py-1 bg-cyber-blue/20 border border-primary rounded-sm text-primary">
                <Code className="w-4 h-4 inline mr-1" /> Python
              </span>
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl">
              I am an aspiring Solutions Architect with AWS Cloud Practitioner certification, specializing in customer service excellence and cloud computing solutions.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#projects" className="cyber-button">View Projects</a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 py-2 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                Get In Touch
              </a>
              <Button 
                variant="outline" 
                className="group cyber-download-btn bg-transparent border-2 border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-black flex items-center gap-2 px-6 py-6 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(0,255,102,0.3)] hover:shadow-[0_0_15px_rgba(0,255,102,0.5)]"
                onClick={handleDownloadCV}
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
