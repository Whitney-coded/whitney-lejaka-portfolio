
import React, { useEffect, useState } from 'react';
import { FileDown, Code, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { removeBackground } from '@/utils/imageUtils';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const processImage = async () => {
      try {
        // Create a temporary image element
        const img = new Image();
        img.crossOrigin = "anonymous"; // Enable CORS
        img.src = "/lovable-uploads/acdc0400-7923-43b5-bd46-def9d03013a8.png";
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        // Remove background
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
        
        toast({
          title: "Image processed successfully",
          description: "Background has been removed from the image.",
        });
      } catch (error) {
        console.error('Error processing image:', error);
        toast({
          variant: "destructive",
          title: "Error processing image",
          description: "Failed to remove background. Using original image.",
        });
      }
    };

    processImage();
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-16 scanline">
      <div className="absolute inset-0 dark:bg-web3-gradient light:bg-web3-gradient-light opacity-20 z-0"></div>
      <div className="absolute inset-0 cyber-grid-bg opacity-10 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Photo */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden cyber-border">
              <img 
                src={processedImageUrl || "/lovable-uploads/acdc0400-7923-43b5-bd46-def9d03013a8.png"}
                alt="Whitney Lejaka Professional Photo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto text-cyber-black dark:text-white">
                WHITNEY LEJAKA
              </h1>
              <h2 className="text-xl md:text-2xl font-mono text-cyber-neon dark:text-cyber-neon light:text-cyber-neon-light">
                <span className="text-flicker">&#60;Certified AWS Professional&#47;&#62;</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-foreground/80 max-w-2xl">
                I am an aspiring Solutions Architect who has earned the AWS Cloud Practitioner certification, with expertise in HTML and CSS development.
              </p>
            </div>

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
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="cyber-button">
                View Projects
              </a>
              <Button 
                variant="outline" 
                className="group cyber-download-btn bg-transparent border-2 border-cyber-neon text-cyber-black dark:text-white hover:bg-cyber-neon hover:text-black flex items-center gap-2 px-6 py-6 font-bold uppercase tracking-wider transition-all duration-300 rounded-sm shadow-[0_0_10px_rgba(0,255,102,0.3)] hover:shadow-[0_0_15px_rgba(0,255,102,0.5)] light:border-cyber-neon-light light:text-cyber-neon-light light:hover:bg-cyber-neon-light light:hover:text-white light:shadow-[0_0_10px_rgba(0,200,82,0.2)]"
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
