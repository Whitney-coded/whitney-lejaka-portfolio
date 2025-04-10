
import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud, Shield, Network, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
  primaryIcon: React.ReactNode;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  image,
  demoLink,
  codeLink,
  primaryIcon,
  index
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className="modern-card p-0 overflow-hidden flex flex-col md:flex-row animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn(
        "w-full md:w-2/5 relative group overflow-hidden",
        isEven ? "md:order-1" : "md:order-2"
      )}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 z-20 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          {primaryIcon}
        </div>
      </div>
      
      <div className={cn(
        "w-full md:w-3/5 p-8",
        isEven ? "md:order-2" : "md:order-1"
      )}>
        <h3 className="text-2xl font-bold mb-3 text-shimmer">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium rounded-full 
                bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto pt-4">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modern-button group flex items-center"
            >
              <span>View</span>
              <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
          
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modern-button-outline flex items-center gap-2"
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
      title: "VPC Architecture for Small Business",
      description: "Created a secure VPC architecture for a small business during a hackathon. Implemented a multi-tier network design with public and private subnets across multiple availability zones, ensuring high availability and security for the business infrastructure.",
      tags: ["AWS VPC", "Network Security", "High Availability", "Multi-AZ", "Subnets"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      demoLink: "http://squad-project-ec2elites.s3-website-us-east-1.amazonaws.com/",
      codeLink: "https://github.com/Whitney-coded",
      primaryIcon: <Network className="w-12 h-12 text-white" />
    },
    {
      title: "Serverless Multi-Tier Application",
      description: "Designed and implemented a highly scalable serverless architecture using AWS Lambda, API Gateway, and DynamoDB with authentication via Cognito. The solution included CI/CD pipeline with AWS CodePipeline and infrastructure as code using CloudFormation.",
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation", "Cognito"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      demoLink: "#",
      codeLink: "#",
      primaryIcon: <Server className="w-12 h-12 text-white" />
    },
    {
      title: "Cloud-Native Microservices Platform",
      description: "Built a containerized microservices platform using ECS and ECR with service discovery via AWS Cloud Map. Implemented a resilient architecture with auto-scaling, load balancing, and fault tolerance across multiple availability zones.",
      tags: ["ECS", "ECR", "Microservices", "Docker", "CloudFormation"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      demoLink: "#",
      primaryIcon: <Cloud className="w-12 h-12 text-white" />
    },
    {
      title: "Secure Data Warehouse Solution",
      description: "Architected a comprehensive data warehouse solution using Redshift, with secure ETL pipelines using AWS Glue. The solution included data encryption, secure VPC design, and compliance with regulatory requirements.",
      tags: ["Redshift", "AWS Glue", "S3", "Security", "IAM"],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&auto=format&fit=crop",
      demoLink: "#",
      codeLink: "#",
      primaryIcon: <Database className="w-12 h-12 text-white" />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block text-sm font-semibold tracking-widest text-primary uppercase mb-3">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Cloud architecture solutions that showcase my expertise in building robust, scalable, and secure AWS environments.
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
