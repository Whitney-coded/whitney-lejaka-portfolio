
import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, Server, Database, Cloud, Shield, Network, Code, FileCode, Layout, Globe, Bot, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import MovingPixelRobot from './MovingPixelRobot';
import cryptoChatbotImg from '@/assets/crypto-chatbot.jpg';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  primaryIcon: React.ReactNode;
  reverse?: boolean;
  index: number;
}

const CornerBrackets = ({ color = 'rgba(0, 255, 102, 0.4)' }: { color?: string }) => (
  <>
    <div className="absolute top-0 left-0 w-5 h-5 pointer-events-none z-20" style={{ borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    <div className="absolute top-0 right-0 w-5 h-5 pointer-events-none z-20" style={{ borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
    <div className="absolute bottom-0 left-0 w-5 h-5 pointer-events-none z-20" style={{ borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    <div className="absolute bottom-0 right-0 w-5 h-5 pointer-events-none z-20" style={{ borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
  </>
);

const ProjectCard = ({ title, description, tags, image, demoLink, codeLink, primaryIcon, reverse = false, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const accentColor = reverse ? 'rgba(255, 25, 248, 0.5)' : 'rgba(0, 255, 102, 0.5)';
  const accentText = reverse ? 'text-[#ff19f8]' : 'text-cyber-neon';

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`
      }}
    >
      <div className={cn(
        "relative glass-panel rounded-sm flex flex-col lg:flex-row gap-0 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,102,0.15)]",
      )}>
        <CornerBrackets color={accentColor} />

        <div className={cn("lg:w-2/5 relative overflow-hidden group", reverse && "lg:order-2")}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <img src={image} alt={title} className="w-full h-full min-h-[200px] object-cover object-center transform group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-50 group-hover:opacity-0 transition-opacity duration-500 z-20">
            {primaryIcon}
          </div>
          {/* Scan bar on hover */}
          <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-neon/60 to-transparent" style={{ animation: 'scanBar 3s ease-in-out infinite' }} />
          </div>
        </div>

        <div className={cn("lg:w-3/5 p-6 md:p-8", reverse && "lg:order-1")}>
          {/* Mini status bar */}
          <div className="flex items-center gap-2 mb-4">
            <Terminal className={cn("w-3 h-3", accentText)} />
            <span className="font-mono text-[9px] tracking-[0.3em] text-foreground/30 uppercase">Project // {String(index + 1).padStart(2, '0')}</span>
          </div>

          <h3 className={cn("text-xl md:text-2xl font-['Orbitron'] mb-3", accentText)}>
            {title}
          </h3>

          <p className="text-foreground/60 mb-5 text-sm leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, i) => (
              <span key={i} className={cn(
                "px-2.5 py-1 text-[10px] font-mono tracking-wider rounded-sm border",
                reverse ? "border-[#ff19f8]/20 text-[#ff19f8]/70 bg-[#ff19f8]/5" : "border-cyber-neon/20 text-cyber-neon/70 bg-cyber-neon/5"
              )}>
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider rounded-sm border transition-all duration-300 magnetic-btn",
                  reverse ? "border-[#ff19f8]/50 text-[#ff19f8] hover:bg-[#ff19f8] hover:text-black hover:shadow-[0_0_20px_rgba(255,25,248,0.4)]"
                    : "border-cyber-neon/50 text-cyber-neon hover:bg-cyber-neon hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
                )}>
                <ExternalLink className="w-3 h-3" /> VIEW
              </a>
            )}
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider rounded-sm border border-foreground/15 text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-all duration-300">
                <Github className="w-3 h-3" /> CODE
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Crypto Chatbot",
      description: "Developed a rule-based cryptocurrency chatbot using Python that provides real-time crypto information, market analysis, and trading insights. The bot uses predefined rules and pattern matching to respond to user queries and integrates with cryptocurrency APIs to deliver accurate market data.",
      tags: ["Python", "Rule-Based System", "Cryptocurrency APIs", "Chatbot Development", "Market Analysis"],
      image: cryptoChatbotImg,
      codeLink: "https://github.com/Whitney-coded/Crypto_chatbot_python.git",
      primaryIcon: <MovingPixelRobot size="lg" />,
      reverse: false
    },
    {
      title: "Responsive Business Landing Page",
      description: "Designed and developed a fully responsive landing page for a business using Bolt.new and TypeScript. The website features a clean, user-friendly interface with smooth animations and cross-browser compatibility. Deployed using Vercel for fast and reliable hosting.",
      tags: ["TypeScript", "Bolt.new", "Vercel", "Responsive Design", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      demoLink: "https://www.omritech.co.za",
      primaryIcon: <Code className="w-20 h-20 text-[#ff19f8]" />,
      reverse: true
    },
    {
      title: "E-commerce Landing Page",
      description: "Created a high-converting landing page for an e-commerce client, featuring product showcases, testimonials, and call-to-action sections. Implemented mobile-first design and optimized for fast loading times.",
      tags: ["HTML", "CSS", "Flexbox", "CSS Grid", "Animation"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      demoLink: "https://github.com/Whitney-coded",
      codeLink: "https://github.com/Whitney-coded",
      primaryIcon: <Layout className="w-20 h-20 text-cyber-neon" />,
      reverse: false
    },
    {
      title: "VPC Architecture for Small Business",
      description: "Created a secure VPC architecture for a small business during a hackathon. Implemented a multi-tier network design with public and private subnets across multiple availability zones, ensuring high availability and security for the business infrastructure.",
      tags: ["AWS VPC", "Network Security", "High Availability", "Multi-AZ", "Subnets"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      demoLink: "http://squad-project-ec2elites.s3-website-us-east-1.amazonaws.com/",
      codeLink: "https://github.com/Whitney-coded",
      primaryIcon: <Network className="w-20 h-20 text-[#ff19f8]" />,
      reverse: true
    },
    {
      title: "Interactive Dashboard UI",
      description: "Developed a clean, modern dashboard interface using advanced CSS techniques. The dashboard features data visualizations, responsive layouts, and a cohesive design system that ensures consistency across components.",
      tags: ["HTML", "CSS3", "Sass", "CSS Variables", "Dark Mode"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      demoLink: "#",
      codeLink: "#",
      primaryIcon: <FileCode className="w-20 h-20 text-cyber-neon" />,
      reverse: false
    },
    {
      title: "Serverless Multi-Tier Application",
      description: "Designed and implemented a highly scalable serverless architecture using AWS Lambda, API Gateway, and DynamoDB with authentication via Cognito. The solution included CI/CD pipeline with AWS CodePipeline and infrastructure as code using CloudFormation.",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation", "Cognito"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      demoLink: "#",
      codeLink: "#",
      primaryIcon: <Server className="w-20 h-20 text-[#ff19f8]" />,
      reverse: true
    },
    {
      title: "Multi-page Business Website",
      description: "Built a comprehensive business website with multiple linked pages, contact forms, and responsive navigation. Utilized semantic HTML for better SEO and accessibility, with clean CSS for consistent styling.",
      tags: ["HTML", "CSS", "Forms", "Multi-page", "SEO"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      demoLink: "#",
      codeLink: "#",
      primaryIcon: <Globe className="w-20 h-20 text-cyber-neon" />,
      reverse: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060610] to-black" />
      <div className="absolute inset-0 hero-neon-grid" />
      <div className="absolute inset-0 hero-scanlines" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code className="w-5 h-5 text-cyber-neon" />
            <span className="font-mono text-xs tracking-[0.3em] text-cyber-neon/60 uppercase">Mission Archive</span>
          </div>
          <h2 className="font-['Orbitron'] text-3xl md:text-5xl font-bold" style={{
            background: 'linear-gradient(135deg, #0ef7f7, #00ff66, #ff19f8)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 4s ease infinite'
          }}>
            FEATURED PROJECTS
          </h2>
          <p className="text-sm font-mono text-foreground/50 mt-3 tracking-wider">
            Web development and cloud architecture deployments
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
