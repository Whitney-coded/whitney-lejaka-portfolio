
import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Signal } from 'lucide-react';

const CornerBrackets = ({ color = 'rgba(0, 255, 102, 0.5)' }: { color?: string }) => (
  <>
    <div className="absolute top-0 left-0 w-5 h-5 pointer-events-none" style={{ borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none" style={{ borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
    <div className="absolute bottom-0 left-0 w-5 h-5 pointer-events-none" style={{ borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none" style={{ borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
  </>
);

const ContactSection = () => {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5 text-cyber-neon" />, label: "Email", value: "whitneylejaka@gmail.com", color: "cyber-neon" },
    { icon: <MapPin className="w-5 h-5 text-[#ff19f8]" />, label: "Location", value: "Johannesburg, South Africa", color: "#ff19f8" },
    { icon: <Phone className="w-5 h-5 text-[#0ef7f7]" />, label: "Contact", value: "+27 76 310 2692", color: "#0ef7f7" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080812] to-black" />
      <div className="absolute inset-0 hero-neon-grid" />
      <div className="absolute inset-0 hero-scanlines" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Signal className="w-5 h-5 text-cyber-neon" />
            <span className="font-mono text-xs tracking-[0.3em] text-cyber-neon/60 uppercase">Open Channel</span>
          </div>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold" style={{
            background: 'linear-gradient(135deg, #0ef7f7, #00ff66, #ff19f8)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite'
          }}>
            GET IN TOUCH
          </h2>
          <p className="text-sm font-mono text-foreground/50 mt-3 tracking-wider">
            Ready to collaborate on cloud solutions and web projects
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative glass-panel rounded-sm p-8">
            <CornerBrackets />

            {/* Header bar */}
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-cyber-neon/10">
              <div className="w-2 h-2 rounded-full bg-cyber-neon animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-cyber-neon/50 uppercase">Secure Transmission</span>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="group flex items-start gap-4 p-3 rounded-sm transition-all duration-300 hover:bg-foreground/[0.03]">
                  <div className="w-10 h-10 rounded-sm bg-foreground/[0.03] border border-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyber-neon/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-foreground/30 uppercase">{item.label}</p>
                    <p className="text-foreground/80 font-mono text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-cyber-neon/10">
              <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/30 uppercase block mb-4">Network Links</span>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/whitney-lejaka-b15234213" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 glass-panel rounded-sm flex items-center justify-center text-cyber-neon transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:border-cyber-neon/40 magnetic-btn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Whitney-coded" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 glass-panel rounded-sm flex items-center justify-center text-[#ff19f8] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,25,248,0.3)] hover:border-[#ff19f8]/40 magnetic-btn">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
