
import React from 'react';
import { Award, Cloud, Database, Server, Shield, Code, FileCode, Layout, Palette, Globe } from 'lucide-react';
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
      icon: <Code className="w-8 h-8" />,
      title: "HTML Development",
      description: "Creating semantically correct, accessible, and well-structured HTML for modern web applications.",
      className: "border-cyber-yellow"
    },
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "CSS Styling",
      description: "Crafting responsive and visually appealing designs with CSS, including animations and layouts.",
      className: "border-cyber-magenta"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Building automated, repeatable deployments with CloudFormation and Terraform.",
      className: "border-cyber-magenta"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Creating websites that work seamlessly across all devices and screen sizes.",
      className: "border-cyber-neon"
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
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with a focus on user experience and accessibility.",
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
                I have completed a 6-month AWS Cloud Computing programme with ALX Africa, where I gained comprehensive knowledge of cloud architecture and services. I also completed a 16-week Software Engineering programme with Power Learn Project, specialising in AI for Software Engineering.
              </p>
              <p>
                During my training at Power Learn Project, I developed expertise in web technologies, Python programming, and database management. Additionally, I completed a course with Udacity called "Introducing Generative AI with AWS", further expanding my knowledge in cutting-edge AI technologies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
