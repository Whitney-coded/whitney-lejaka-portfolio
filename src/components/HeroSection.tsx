
import React from 'react';
import { FileDown, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="hero-blob w-96 h-96 left-1/4 top-1/4 animate-blob blob-animate-delay-1"></div>
      <div className="hero-blob w-96 h-96 right-1/4 bottom-1/3 animate-blob blob-animate-delay-2"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 space-y-8 text-left">
            <div className="animate-slide-up">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-4">
                AWS Certified Professional
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="block">Whitney Lejaka</span>
                <span className="modern-gradient">Cloud Architect</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mt-4">
                Solutions Architect & AWS Cloud Practitioner
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-slide-up [animation-delay:200ms]">
              I build resilient, scalable cloud architectures that power modern businesses. Focused on AWS solutions that drive innovation and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up [animation-delay:400ms]">
              <a href="#projects" className="modern-button group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#contact" className="modern-button-outline">
                Get In Touch
              </a>
              
              <Button 
                variant="outline" 
                className="modern-button-outline flex items-center gap-2"
                onClick={() => {
                  console.log('CV download clicked');
                  const link = document.createElement('a');
                  link.href = '#';
                  link.download = 'Whitney_Lejaka_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FileDown className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-80 h-80">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-modern-teal opacity-10 blur-xl animate-pulse"></div>
              <div className="modern-card w-full h-full rounded-full overflow-hidden p-0 border-2 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-modern-indigo/5 to-modern-teal/5 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1544819379-4b55b4f3df1e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
