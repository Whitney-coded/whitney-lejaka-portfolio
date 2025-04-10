
import React from 'react';
import { Award, Cloud, Database, Server, Shield, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const SkillCard = ({ icon, title, description, index }: SkillCardProps) => {
  return (
    <div 
      className="modern-card group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const skills = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "AWS Cloud Solutions",
      description: "Expert in designing and implementing scalable, cost-effective cloud architectures on AWS."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure as Code",
      description: "Building automated, repeatable deployments with CloudFormation and Terraform."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Experience with both SQL and NoSQL database solutions including RDS, DynamoDB, and Redshift."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Implementing best practices for secure cloud environments and meeting regulatory requirements."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "DevOps Practices",
      description: "Streamlining development workflows with CI/CD pipelines and container technologies."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AWS Certifications",
      description: "Certified AWS Cloud Practitioner and Solutions Architect with hands-on expertise."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block text-sm font-semibold tracking-widest text-primary uppercase mb-3">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cloud Enthusiast & AWS Professional
          </h2>
          <p className="text-lg text-muted-foreground">
            With a passion for building resilient, scalable architectures that power the digital world, I specialize in AWS cloud solutions that meet modern business challenges.
          </p>
        </div>

        <div className="mb-20">
          <div className="modern-card p-8 md:p-10">
            <div className="space-y-6 text-lg">
              <p className="lead text-foreground/90">
                I've been on a learning journey with ALX Africa, focusing on AWS Cloud Computing. My AWS Cloud Practitioner certification is just the beginning—I'm preparing to take the AWS Solutions Architect exam soon. Currently enrolled in a Software Engineering scholarship with Power Learn Project, I'm constantly expanding my technical toolkit.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with a deep understanding of business needs, creating cloud solutions that are not just technically sound but also aligned with organizational goals.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold">
            My Expertise
          </h3>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
