
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support."
  },
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Expertise in designing distributed systems and architectures on the AWS platform."
  },
  {
    title: "ALX Africa – AWS Cloud Computing",
    issuer: "ALX Africa",
    date: "2024",
    description: "Completed a 6-month intensive programme covering cloud architecture, deployment, and AWS services."
  },
  {
    title: "Software Engineering – AI Specialisation",
    issuer: "Power Learn Project",
    date: "2024",
    description: "16-week programme specialising in AI for Software Engineering, web technologies, Python, and databases."
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    date: "2024",
    description: "Explored cutting-edge generative AI technologies and their applications on the AWS platform."
  }
];

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-glow z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block cyber-text text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-cyber-neon">
            CERTIFICATIONS
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Professional certifications and training programmes I have completed.
          </p>
        </div>

        {/* Slide Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-2 rounded-full border-2 border-cyber-neon bg-background/80 text-cyber-neon hover:bg-cyber-neon hover:text-background transition-all duration-300"
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-2 rounded-full border-2 border-cyber-neon bg-background/80 text-cyber-neon hover:bg-cyber-neon hover:text-background transition-all duration-300"
            aria-label="Next certification"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Content */}
          <div className="cyber-border bg-cyber-blue/20 backdrop-blur-sm rounded-sm overflow-hidden">
            <div className="p-8 md:p-12 text-center min-h-[280px] flex flex-col items-center justify-center">
              <Award className="w-12 h-12 text-cyber-neon mb-6" />
              <h3 className="text-2xl md:text-3xl font-mono text-cyber-neon mb-2">
                {certifications[currentIndex].title}
              </h3>
              <p className="text-lg font-semibold text-foreground/90 mb-1">
                {certifications[currentIndex].issuer}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {certifications[currentIndex].date}
              </p>
              <p className="text-foreground/80 max-w-xl">
                {certifications[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 border border-cyber-neon",
                  index === currentIndex
                    ? "bg-cyber-neon shadow-[0_0_8px_rgba(0,255,102,0.6)]"
                    : "bg-transparent hover:bg-cyber-neon/40"
                )}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
