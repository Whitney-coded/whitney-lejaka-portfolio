import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Code, FileCode, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [btnOffset, setBtnOffset] = useState<{ [key: string]: { x: number; y: number } }>({});

  // Parallax mouse tracking
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  }, []);

  // Magnetic button effect
  const handleBtnMouseMove = useCallback((e: React.MouseEvent, id: string) => {
    const btn = e.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnOffset(prev => ({ ...prev, [id]: { x: x * 0.3, y: y * 0.3 } }));
  }, []);

  const handleBtnMouseLeave = useCallback((id: string) => {
    setBtnOffset(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  }, []);

  // Particle positions (static, generated once)
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 4,
    }))
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden flex items-center pt-16"
    >
      {/* Layer 1: Deep obsidian base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a12] to-[#080810] z-0" />

      {/* Layer 2: Breathing neon grid with parallax */}
      <div
        className="absolute inset-0 hero-neon-grid z-[1]"
        style={{
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Layer 3: Ambient glow spots */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,25,248,0.05)_0%,transparent_70%)]" />
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

      {/* Layer 5: Scanline overlay */}
      <div className="absolute inset-0 hero-scanlines z-[4]" />

      {/* Layer 6: Glassmorphism content panel */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text content */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Subtitle tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full">
              <span className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
              <span className="text-sm font-['Rajdhani',sans-serif] font-medium tracking-widest uppercase text-cyber-neon/80">
                Available for projects
              </span>
            </div>

            {/* Main Headline - Orbitron */}
            <h1
              className="glitch-text text-5xl md:text-7xl lg:text-8xl font-['Orbitron',sans-serif] font-black leading-[0.95] tracking-tight cursor-default"
              data-text="WHITNEY LEJAKA"
            >
              <span className="block bg-gradient-to-r from-[#0ef7f7] via-cyber-neon to-[#ff19f8] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_6s_ease-in-out_infinite]">
                WHITNEY
              </span>
              <span className="block bg-gradient-to-r from-[#ff19f8] via-white to-[#0ef7f7] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_6s_ease-in-out_infinite_reverse]">
                LEJAKA
              </span>
            </h1>

            {/* Role line */}
            <h2 className="text-lg md:text-xl font-['Rajdhani',sans-serif] font-semibold tracking-[0.3em] uppercase text-foreground/60">
              <span className="text-cyber-neon">&#60;</span>
              {' '}Web Developer · Cloud Architect · AI Enthusiast{' '}
              <span className="text-cyber-neon">&#47;&#62;</span>
            </h2>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'HTML', icon: <Code className="w-3.5 h-3.5" />, color: 'cyber-neon' },
                { label: 'CSS', icon: <FileCode className="w-3.5 h-3.5" />, color: 'cyber-neon' },
                { label: 'AWS', icon: null, color: 'cyber-neon' },
                { label: 'Python', icon: <Code className="w-3.5 h-3.5" />, color: 'cyber-neon' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 glass-panel rounded-sm text-sm font-['Rajdhani',sans-serif] font-medium text-cyber-neon/90 hover:text-cyber-neon hover:border-cyber-neon/30 transition-colors duration-300"
                >
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl font-['Rajdhani',sans-serif] font-light text-foreground/70 max-w-xl leading-relaxed">
              I am a Web Developer with a passion for Cloud Computing, Artificial Intelligence, and Machine Learning.
            </p>

            {/* CTA Buttons - Magnetic */}
            <div className="flex flex-wrap gap-5 pt-2">
              <a
                href="#projects"
                className="magnetic-btn relative px-8 py-3 font-['Orbitron',sans-serif] text-sm font-bold uppercase tracking-wider bg-cyber-neon text-black rounded-sm overflow-hidden group"
                style={{
                  transform: `translate(${btnOffset['cta1']?.x || 0}px, ${btnOffset['cta1']?.y || 0}px)`,
                }}
                onMouseMove={(e) => handleBtnMouseMove(e, 'cta1')}
                onMouseLeave={() => handleBtnMouseLeave('cta1')}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ef7f7] to-[#ff19f8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <a
                href="#contact"
                className="magnetic-btn px-8 py-3 font-['Orbitron',sans-serif] text-sm font-bold uppercase tracking-wider glass-panel text-foreground/90 rounded-sm border border-foreground/20 hover:border-cyber-neon/50 hover:text-cyber-neon transition-all duration-300"
                style={{
                  transform: `translate(${btnOffset['cta2']?.x || 0}px, ${btnOffset['cta2']?.y || 0}px)`,
                }}
                onMouseMove={(e) => handleBtnMouseMove(e, 'cta2')}
                onMouseLeave={() => handleBtnMouseLeave('cta2')}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Floating 3D Orb */}
          <div
            className="hidden lg:flex w-2/5 items-center justify-center"
            style={{
              transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
              transition: 'transform 0.5s ease-out',
            }}
          >
            <div className="relative">
              {/* Main orb */}
              <div className="hero-orb w-64 h-64 xl:w-80 xl:h-80 flex items-center justify-center">
                {/* Inner hex pattern */}
                <svg viewBox="0 0 200 200" className="w-32 h-32 xl:w-40 xl:h-40 opacity-40">
                  <polygon
                    points="100,10 180,50 180,130 100,170 20,130 20,50"
                    fill="none"
                    stroke="rgba(0,255,102,0.4)"
                    strokeWidth="1"
                    className="animate-[spin_20s_linear_infinite]"
                  />
                  <polygon
                    points="100,30 160,60 160,120 100,150 40,120 40,60"
                    fill="none"
                    stroke="rgba(0,200,255,0.3)"
                    strokeWidth="1"
                    className="animate-[spin_15s_linear_infinite_reverse]"
                  />
                  <circle cx="100" cy="90" r="20" fill="none" stroke="rgba(255,25,248,0.3)" strokeWidth="1" className="animate-pulse" />
                </svg>
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute inset-[-60px] animate-[spin_25s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-cyber-neon shadow-[0_0_10px_rgba(0,255,102,0.8)]" />
              </div>
              <div className="absolute inset-[-80px] animate-[spin_35s_linear_infinite_reverse]">
                <div className="absolute top-1/2 right-0 w-1.5 h-1.5 rounded-full bg-[#0ef7f7] shadow-[0_0_8px_rgba(0,200,255,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 animate-float">
        <span className="text-xs font-['Rajdhani',sans-serif] tracking-[0.3em] uppercase text-foreground/40">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyber-neon" />
      </div>
    </section>
  );
};

export default HeroSection;
