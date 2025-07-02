import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud, Shield, Network, Code, FileCode, Layout, Globe, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import MovingPixelRobot from './MovingPixelRobot';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  primaryIcon: React.ReactNode;
  reverse?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image,
  demoLink,
  codeLink,
  primaryIcon,
  reverse = false
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "cyber-border p-1 rounded-sm flex flex-col lg:flex-row gap-6 overflow-hidden bg-cyber-blue/10 backdrop-blur-sm",
      reverse ? "border-cyber-magenta shadow-[0_0_10px_rgba(255,25,248,0.3)]" : "border-cyber-neon shadow-[0_0_10px_rgba(14,247,247,0.3)]"
    )}>
      <div className={cn(
        "lg:w-2/5 relative overflow-hidden group",
        reverse && "lg:order-2"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark-blue/80 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-0 transition-opacity duration-300 z-20">
          {primaryIcon}
        </div>
      </div>
      
      <div className={cn(
        "lg:w-3/5 p-6",
        reverse && "lg:order-1"
      )}>
        <h3 className={cn(
          "text-2xl font-mono mb-3",
          reverse ? "text-cyber-magenta" : "text-cyber-neon"
        )}>
          {title}
        </h3>
        
        <p className="text-foreground/80 mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={cn(
                "px-3 py-1 text-sm rounded-sm border",
                reverse 
                  ? "border-cyber-magenta/40 text-cyber-magenta bg-cyber-magenta/10" 
                  : "border-cyber-neon/40 text-cyber-neon bg-cyber-neon/10"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-sm border-2 transition-all duration-300",
                reverse 
                  ? "border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-cyber-dark-blue" 
                  : "border-cyber-neon text-cyber-neon hover:bg-cyber-neon hover:text-cyber-dark-blue"
              )}
            >
              <ExternalLink className="w-4 h-4" />
              View
            </a>
          )}
          
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-sm border-2 border-foreground/30 text-foreground/80 hover:bg-foreground/10 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Crypto Chatbot",
      description: "Developed an intelligent cryptocurrency chatbot using Python that provides real-time crypto information, market analysis, and trading insights. The bot features natural language processing capabilities and integrates with cryptocurrency APIs to deliver accurate market data.",
      tags: ["Python", "Natural Language Processing", "Cryptocurrency APIs", "Chatbot Development", "Market Analysis"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format&fit=crop",
      demoLink: "#",
      codeLink: "https://github.com/Whitney-coded/Crypto_chatbot_python.git",
      primaryIcon: <MovingPixelRobot size="lg" />,
      reverse: false
    },
    {
      title: "Responsive Portfolio Website",
      description: "Designed and developed a fully responsive portfolio website using HTML5, CSS3, and modern design principles. The website features a clean, user-friendly interface with smooth animations and cross-browser compatibility.",
      tags: ["HTML5", "CSS3", "Responsive Design", "Accessibility", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      demoLink: "https://github.com/Whitney-coded",
      codeLink: "https://github.com/Whitney-coded",
      primaryIcon: <Code className="w-20 h-20 text-cyber-magenta" />,
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
      primaryIcon: <Network className="w-20 h-20 text-cyber-magenta" />,
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
      primaryIcon: <Server className="w-20 h-20 text-cyber-magenta" />,
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
    <section id="projects" className="py-20 bg-cyber-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block cyber-text text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-cyber-neon">
            FEATURED PROJECTS
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            A showcase of my web development and cloud architecture projects, demonstrating expertise in HTML, CSS, and AWS technologies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              primaryIcon={project.primaryIcon}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
