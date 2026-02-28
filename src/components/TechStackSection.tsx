
import React, { useRef, useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

interface TechItem {
  name: string;
  logo: string;
  status: string;
}

const techStack: TechItem[] = [
  { name: "Bolt.new", logo: "https://pbs.twimg.com/profile_images/1880681797498974208/NMovLh0W_400x400.jpg", status: "ACTIVE" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", status: "DEPLOYED" },
  { name: "Netlify", logo: "https://www.netlify.com/v3/img/components/logomark.png", status: "ONLINE" },
  { name: "Supabase", logo: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/5vZlMjMLsBbOiiGqy0VgA5/0a1a4478531b8e4de8ed498e0f201952/supabase_logo_icon_249349.png", status: "CONNECTED" },
  { name: "GitHub", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", status: "SYNCED" },
  { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png", status: "ACTIVE" }
];

const CornerBrackets = ({ color = 'rgba(0, 255, 102, 0.4)' }: { color?: string }) => (
  <>
    <div className="absolute top-0 left-0 w-4 h-4 pointer-events-none" style={{ borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
    <div className="absolute top-0 right-0 w-4 h-4 pointer-events-none" style={{ borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
    <div className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none" style={{ borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}` }} />
    <div className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none" style={{ borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}` }} />
  </>
);

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="techstack" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a18] to-black" />
      <div className="absolute inset-0 hero-neon-grid" />
      <div className="absolute inset-0 hero-scanlines" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-cyber-neon" />
            <span className="font-mono text-xs tracking-[0.3em] text-cyber-neon/60 uppercase">System Arsenal</span>
          </div>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold" style={{
            background: 'linear-gradient(135deg, #0ef7f7, #00ff66, #ff19f8)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite'
          }}>
            TECH STACK
          </h2>
          <p className="text-sm font-mono text-foreground/50 mt-3 tracking-wider">
            Tools and platforms powering the build pipeline
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="group relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s`
              }}
            >
              <div className="relative glass-panel rounded-sm p-5 flex flex-col items-center gap-3 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,255,102,0.2)] group-hover:border-cyber-neon/30">
                <CornerBrackets />
                <div className="w-16 h-16 flex items-center justify-center relative">
                  <img src={tech.logo} alt={`${tech.name} logo`} className="w-12 h-12 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-cyber-neon/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="text-xs font-mono text-foreground/70 text-center group-hover:text-cyber-neon transition-colors duration-300">{tech.name}</span>
                <span className="font-mono text-[8px] tracking-[0.2em] text-cyber-neon/40 group-hover:text-cyber-neon/80 transition-colors">{tech.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
