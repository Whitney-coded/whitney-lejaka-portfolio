import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Shield, Cpu, Wifi, Activity, Terminal, AlertTriangle } from 'lucide-react';

// Typewriter hook
const useTypewriter = (text: string, speed = 60) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [started, text, speed]);

  return { displayed, ref, started };
};

// Terminal status lines
const statusLines = [
  { label: 'CLOUD_ARCH', value: 'AWS Certified', color: 'text-cyber-neon' },
  { label: 'WEB_DEV', value: 'HTML / CSS / JS', color: 'text-cyber-neon' },
  { label: 'AI_MODULE', value: 'Gen AI + ML', color: 'text-[#0ef7f7]' },
  { label: 'PYTHON', value: 'Active', color: 'text-cyber-neon' },
  { label: 'DB_ENGINE', value: 'SQL + NoSQL', color: 'text-[#0ef7f7]' },
  { label: 'IAC_STATUS', value: 'Terraform / CFN', color: 'text-cyber-neon' },
  { label: 'SECURITY', value: 'Compliance OK', color: 'text-cyber-neon' },
  { label: 'NEURAL_LINK', value: 'Stable', color: 'text-[#0ef7f7]' },
  { label: 'CPU_CLOCK', value: 'Overclocked', color: 'text-[#ff4444]' },
  { label: 'UPTIME', value: '99.97%', color: 'text-cyber-neon' },
];

// Glitch keyword component
const GlitchKeyword = ({ children }: { children: string }) => (
  <span className="dossier-keyword relative inline-block cursor-default text-cyber-neon font-bold transition-all duration-200 hover:text-[#0ef7f7] hover:drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]">
    {children}
  </span>
);

// Corner bracket component
const CornerBrackets = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className || ''}`}>
    <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-[#ccff00]" />
    <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-[#ccff00]" />
    <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-[#ccff00]" />
    <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-[#ccff00]" />
    {children}
  </div>
);

// Scrolling terminal component
const ScrollingTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => (prev < statusLines.length ? prev + 1 : prev));
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-sm space-y-1">
      <div className="flex items-center gap-2 mb-3 text-[#ccff00]">
        <Terminal className="w-4 h-4" />
        <span className="text-xs tracking-[0.3em] uppercase">System Status Report</span>
      </div>
      {statusLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="flex items-center gap-2 animate-[fadeSlideIn_0.3s_ease-out]">
          <span className="text-foreground/30">{'>'}</span>
          <span className="text-foreground/50">{line.label}:</span>
          <span className={line.color}>{line.value}</span>
          {i === visibleLines - 1 && <span className="animate-pulse text-cyber-neon">█</span>}
        </div>
      ))}
      {visibleLines >= statusLines.length && (
        <div className="mt-3 flex items-center gap-2 text-[#ff4444]">
          <AlertTriangle className="w-3 h-3" />
          <span className="text-xs tracking-widest uppercase animate-pulse">ALL SYSTEMS OPERATIONAL</span>
        </div>
      )}
    </div>
  );
};

// Data stream background
const DataStream = () => {
  const [columns] = useState(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: (i / 12) * 100 + Math.random() * 5,
      speed: Math.random() * 15 + 10,
      delay: Math.random() * 8,
      chars: Array.from({ length: 30 }, () => 
        Math.random() > 0.5 
          ? Math.floor(Math.random() * 2).toString() 
          : Math.floor(Math.random() * 16).toString(16).toUpperCase()
      ).join('\n'),
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1] opacity-[0.04]">
      {columns.map((col) => (
        <div
          key={col.id}
          className="absolute top-0 font-mono text-[10px] text-cyber-neon whitespace-pre leading-tight"
          style={{
            left: `${col.left}%`,
            animation: `dataStreamFall ${col.speed}s linear ${col.delay}s infinite`,
          }}
        >
          {col.chars}
        </div>
      ))}
    </div>
  );
};

// Scanning portrait placeholder
const ScanningPortrait = () => (
  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm border border-foreground/10">
    {/* Placeholder silhouette */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#111118] to-[#0a0a12] flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
        <Cpu className="w-10 h-10 text-foreground/20" />
      </div>
    </div>
    {/* Half-tone overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
      backgroundSize: '4px 4px',
    }} />
    {/* Scanning light bar */}
    <div className="absolute left-0 right-0 h-12 bg-gradient-to-b from-transparent via-cyber-neon/20 to-transparent animate-[scanBar_3s_ease-in-out_infinite] z-10" />
    {/* CLASSIFIED stamp */}
    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center">
      <span className="text-[#ff4444] font-['Orbitron',sans-serif] text-xs tracking-[0.4em] uppercase font-bold border border-[#ff4444]/30 px-3 py-1 bg-[#ff4444]/5">
        Classified
      </span>
    </div>
  </div>
);

const AboutSection = () => {
  const headerText = '// CLASSIFIED DOSSIER — SUBJECT: WHITNEY LEJAKA';
  const { displayed, ref, started } = useTypewriter(headerText, 40);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* CRT Scanline overlay */}
      <div className="absolute inset-0 hero-scanlines z-[5] pointer-events-none" />
      
      {/* Deep obsidian base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0a12] to-[#080810] z-0" />
      
      {/* Data stream background */}
      <DataStream />

      {/* Subtle neon grid */}
      <div className="absolute inset-0 hero-neon-grid z-[2] opacity-30" />

      <div className="container mx-auto px-4 z-10 relative">
        {/* Typewriter header */}
        <div ref={ref} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-[#ff4444]" />
            <span className="text-[#ff4444] font-['Rajdhani',sans-serif] text-sm tracking-[0.3em] uppercase font-bold animate-pulse">
              Security Clearance Required
            </span>
          </div>
          <h2 className="font-['Orbitron',sans-serif] text-2xl md:text-3xl lg:text-4xl font-black text-foreground/90 tracking-tight">
            {displayed}
            {started && displayed.length < headerText.length && (
              <span className="animate-pulse text-cyber-neon">|</span>
            )}
          </h2>
          <div className="mt-3 h-px bg-gradient-to-r from-[#ccff00] via-[#ccff00]/20 to-transparent" />
        </div>

        {/* Asymmetric 3-module grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Module 1: Portrait + ID (spans 3 cols) */}
          <div className="lg:col-span-3">
            <CornerBrackets>
              <div className="glass-panel p-4 space-y-4">
                <div className="flex items-center gap-2 text-[#ccff00] text-xs font-['Rajdhani',sans-serif] tracking-[0.3em] uppercase">
                  <Activity className="w-3 h-3" />
                  <span>Module 01 — ID</span>
                </div>
                <ScanningPortrait />
                <div className="space-y-1 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-foreground/40">CODENAME:</span>
                    <span className="text-cyber-neon">W.LEJAKA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/40">STATUS:</span>
                    <span className="text-cyber-neon">ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/40">CLEARANCE:</span>
                    <span className="text-[#ff4444]">LEVEL 5</span>
                  </div>
                </div>
              </div>
            </CornerBrackets>
          </div>

          {/* Module 2: Bio / Intel (spans 5 cols) */}
          <div className="lg:col-span-5">
            <CornerBrackets>
              <div className="glass-panel p-6 h-full">
                <div className="flex items-center gap-2 text-[#ccff00] text-xs font-['Rajdhani',sans-serif] tracking-[0.3em] uppercase mb-5">
                  <Wifi className="w-3 h-3" />
                  <span>Module 02 — Intel Brief</span>
                </div>
                <div className="space-y-4 font-mono text-sm md:text-base text-white/80 leading-relaxed">
                  <p>
                    Subject completed a <GlitchKeyword>6-month AWS Cloud Computing</GlitchKeyword> programme with <GlitchKeyword>ALX Africa</GlitchKeyword>, gaining comprehensive knowledge of <GlitchKeyword>cloud architecture</GlitchKeyword> and services.
                  </p>
                  <p>
                    Additionally completed a <GlitchKeyword>16-week Software Engineering</GlitchKeyword> programme with <GlitchKeyword>Power Learn Project</GlitchKeyword>, specialising in <GlitchKeyword>AI for Software Engineering</GlitchKeyword>.
                  </p>
                  <p>
                    During training, subject developed expertise in <GlitchKeyword>web technologies</GlitchKeyword>, <GlitchKeyword>Python programming</GlitchKeyword>, and <GlitchKeyword>database management</GlitchKeyword>. Also completed <GlitchKeyword>Udacity</GlitchKeyword>'s "Introducing <GlitchKeyword>Generative AI</GlitchKeyword> with AWS" course.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/5 flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3 text-[#ff4444]" />
                  <span className="text-[#ff4444] font-mono text-[10px] tracking-widest uppercase">
                    Eyes Only — Do Not Distribute
                  </span>
                </div>
              </div>
            </CornerBrackets>
          </div>

          {/* Module 3: System Status Terminal (spans 4 cols) */}
          <div className="lg:col-span-4">
            <CornerBrackets>
              <div className="glass-panel p-6 h-full">
                <div className="flex items-center gap-2 text-[#ccff00] text-xs font-['Rajdhani',sans-serif] tracking-[0.3em] uppercase mb-5">
                  <Cpu className="w-3 h-3" />
                  <span>Module 03 — System Stats</span>
                </div>
                <ScrollingTerminal />
              </div>
            </CornerBrackets>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
