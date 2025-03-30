
import React from 'react';
import { Award, Cloud, Database, Server, Shield, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SkillCard = ({ icon, title, description, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "cyber-border bg-cyber-blue/20 p-6 rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-cyber-blue/40",
      className
    )}>
      <div className="text-cyber-neon mb-4">{icon}</div>
      <h3 className="text-xl font-mono mb-2">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const skills = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Cloud Solutions",
      description: "Expert in designing and implementing scalable, cost-effective cloud architectures on AWS.",
      className: "border-cyber-neon"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Building automated, repeatable deployments with CloudFormation and Terraform.",
      className: "border-cyber-magenta"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Experience with both SQL and NoSQL database solutions including RDS, DynamoDB, and Redshift.",
      className: "border-cyber-yellow"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Implementing best practices for secure cloud environments and meeting regulatory requirements.",
      className: "border-cyber-magenta"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "DevOps Practices",
      description: "Streamlining development workflows with CI/CD pipelines and container technologies.",
      className: "border-cyber-yellow"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "AWS Certifications",
      description: "Certified AWS Cloud Practitioner and Solutions Architect with hands-on expertise.",
      className: "border-cyber-neon"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-glow z-0"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block cyber-text text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-cyber-neon">
            ABOUT ME
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Cloud enthusiast and AWS certified professional with a passion for building resilient, scalable architectures that power the digital world.
          </p>
        </div>

        <div className="mb-16">
          <div className="cyber-border p-6 md:p-10 rounded-sm bg-cyber-blue/20 backdrop-blur-sm">
            <h3 className="text-2xl text-cyber-neon font-mono mb-6">My Story</h3>
            <div className="space-y-4 text-lg">
              <p>
                With a strong foundation in IT infrastructure and a fascination with cloud technologies, I've dedicated my career to mastering AWS services and solutions architecture.
              </p>
              <p>
                As a certified AWS Cloud Practitioner and Solutions Architect, I combine technical expertise with business acumen to design cloud environments that are not only technically sound but also aligned with organizational goals and cost efficiency.
              </p>
              <p>
                I'm particularly passionate about automation, security, and leveraging the full potential of cloud services to drive digital transformation. When I'm not architecting cloud solutions, I'm sharing my knowledge through my blog and staying ahead of the rapidly evolving cloud landscape.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-mono text-center mb-10 text-cyber-yellow">
          Core Skills & Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              className={skill.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
