
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  code: string;
}

const certifications: Certification[] = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
    code: "CLF-C02"
  },
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Expertise in designing distributed systems and architectures on the AWS platform.",
    code: "SAA-C03"
  },
  {
    title: "ALX Africa – AWS Cloud Computing",
    issuer: "ALX Africa",
    date: "2024",
    description: "Completed a 6-month intensive programme covering cloud architecture, deployment, and AWS services.",
    code: "ALX-AWS"
  },
  {
    title: "Software Engineering – AI Specialisation",
    issuer: "Power Learn Project",
    date: "2024",
    description: "16-week programme specialising in AI for Software Engineering, web technologies, Python, and databases.",
    code: "PLP-AI"
  },
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    date: "2024",
    description: "Explored cutting-edge generative AI technologies and their applications on the AWS platform.",
    code: "UDA-GAI"
  }
];

const CornerBrackets = ({ color = 'rgba(0, 255, 102, 0.6)' }: { color?: string }) => (
  <>
    <div className="absolute top-0 left-0 w-6 h-6 pointer-events-none" style={{ borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    <div className="absolute top-0 right-0 w-6 h-6 pointer-events-none" style={{ borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
    <div className="absolute bottom-0 left-0 w-6 h-6 pointer-events-none" style={{ borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    <div className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none" style={{ borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
  </>
);

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setHeaderVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setIsTyping(true);
    setTypedTitle('');
    const title = certifications[currentIndex].title;
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(title.slice(0, i + 1));
      i++;
      if (i >= title.length) { clearInterval(interval); setIsTyping(false); }
    }, 35);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => setCurrentIndex((p) => (p === 0 ? certifications.length - 1 : p - 1));
  const goToNext = () => setCurrentIndex((p) => (p === certifications.length - 1 ? 0 : p + 1));

  const cert = certifications[currentIndex];

  return (
    <section id="certifications" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080812] to-black" />
      <div className="absolute inset-0 hero-neon-grid" />
      <div className="absolute inset-0 hero-scanlines" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-cyber-neon" />
            <span className="font-mono text-xs tracking-[0.3em] text-cyber-neon/60 uppercase">Verified Credentials</span>
            <Shield className="w-5 h-5 text-cyber-neon" />
          </div>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold" style={{
            background: 'linear-gradient(135deg, #0ef7f7, #00ff66, #ff19f8)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite'
          }}>
            {headerVisible ? 'CERTIFICATIONS' : ''}
          </h2>
          <p className="text-sm font-mono text-foreground/50 mt-3 tracking-wider">
            Professional certifications and training programmes
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <button onClick={goToPrevious} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-12 h-12 glass-panel rounded-sm flex items-center justify-center text-cyber-neon hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all duration-300 group">
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          <button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-12 h-12 glass-panel rounded-sm flex items-center justify-center text-cyber-neon hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all duration-300 group">
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Card */}
          <div className="relative glass-panel rounded-sm overflow-hidden">
            <CornerBrackets color="rgba(0, 255, 102, 0.5)" />
            
            <div className="p-8 md:p-12">
              {/* Top bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyber-neon/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-cyber-neon/10 border border-cyber-neon/30 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyber-neon" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-cyber-neon/50 block">CREDENTIAL ID</span>
                    <span className="font-mono text-sm text-cyber-neon">{cert.code}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground/40 block">ISSUED</span>
                  <span className="font-mono text-sm text-foreground/70">{cert.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center min-h-[180px] flex flex-col items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-['Orbitron'] text-cyber-neon mb-2">
                  {typedTitle}{isTyping && <span className="animate-pulse">▊</span>}
                </h3>
                <p className="text-base font-mono text-foreground/70 mb-4">{cert.issuer}</p>
                <p className="text-foreground/60 max-w-xl text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Status bar */}
              <div className="mt-8 pt-4 border-t border-cyber-neon/10 flex items-center justify-center gap-6 font-mono text-[10px] tracking-[0.2em] text-foreground/30">
                <span>STATUS: <span className="text-cyber-neon">VERIFIED</span></span>
                <span>•</span>
                <span>RECORD {currentIndex + 1}/{certifications.length}</span>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {certifications.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={cn(
                "w-2 h-2 rounded-full transition-all duration-500",
                index === currentIndex ? "bg-cyber-neon shadow-[0_0_10px_rgba(0,255,102,0.6)] scale-150" : "bg-foreground/20 hover:bg-foreground/40"
              )} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
