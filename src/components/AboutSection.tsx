
import React from 'react';
import { 
  Award, Cloud, Database, Server, Shield, Code, FileCode, Layout, 
  Palette, Globe, Terminal, Github, Network, Monitor, BarChart, 
  FileJson, Cpu, HardDrive, BrainCircuit
} from 'lucide-react';
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

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: {
    icon: React.ReactNode;
    name: string;
    level?: string;
  }[];
  className?: string;
}

const SkillCategory = ({ title, description, skills, className }: SkillCategoryProps) => {
  return (
    <div className={cn(
      "cyber-border p-6 rounded-sm bg-cyber-blue/10 backdrop-blur-sm mb-8",
      className
    )}>
      <h3 className="text-2xl text-cyber-neon font-mono mb-4">{title}</h3>
      <p className="mb-6 text-foreground/80">{description}</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 border border-cyber-neon/30 rounded-sm bg-cyber-black/30 hover:bg-cyber-blue/20 transition-all duration-300 group"
          >
            <div className="text-cyber-neon mb-2 transform group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <span className="text-foreground text-sm font-medium text-center">{skill.name}</span>
            {skill.level && (
              <div className="mt-2 w-full bg-cyber-blue/10 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyber-neon to-cyber-yellow" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const frontendSkills = [
    { icon: <Code className="w-6 h-6" />, name: "HTML5", level: "95%" },
    { icon: <FileCode className="w-6 h-6" />, name: "CSS3", level: "90%" },
    { icon: <Layout className="w-6 h-6" />, name: "Responsive Design", level: "90%" },
    { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design", level: "85%" },
  ];

  const cloudSkills = [
    { icon: <Cloud className="w-6 h-6" />, name: "AWS", level: "85%" },
    { icon: <Network className="w-6 h-6" />, name: "VPC Architecture", level: "80%" },
    { icon: <Shield className="w-6 h-6" />, name: "Security Best Practices", level: "85%" },
    { icon: <Server className="w-6 h-6" />, name: "Serverless", level: "75%" },
    { icon: <Cpu className="w-6 h-6" />, name: "EC2", level: "90%" },
    { icon: <Monitor className="w-6 h-6" />, name: "Monitoring", level: "80%" },
    { icon: <FileJson className="w-6 h-6" />, name: "CloudFormation", level: "75%" },
    { icon: <Terminal className="w-6 h-6" />, name: "Cloud9", level: "85%" },
    { icon: <Database className="w-6 h-6" />, name: "Databases", level: "80%" },
  ];

  const devToolsSkills = [
    { icon: <Github className="w-6 h-6" />, name: "GitHub", level: "85%" },
    { icon: <Code className="w-6 h-6" />, name: "VS Code", level: "90%" },
    { icon: <BrainCircuit className="w-6 h-6" />, name: "Git", level: "85%" },
  ];

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
                I have been on a learning journey with ALX Africa, focusing on AWS Cloud Computing. I am preparing to take the AWS Solutions Architect exam soon and am currently enrolled in a Software Engineering scholarship with Power Learn Project.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-mono text-center mb-10 text-cyber-yellow">
          Core Skills & Expertise
        </h3>
        
        {/* New Skills Showcase */}
        <div className="mb-12">
          <SkillCategory 
            title="Frontend Development" 
            description="Strong foundation in frontend development technologies focusing on creating responsive, accessible, and visually appealing web interfaces."
            skills={frontendSkills}
            className="border-cyber-yellow"
          />
          
          <SkillCategory 
            title="AWS Cloud Computing" 
            description="Expertise in designing, implementing, and managing cloud solutions using AWS services with a focus on security, scalability, and cost optimization."
            skills={cloudSkills}
            className="border-cyber-neon"
          />
          
          <SkillCategory 
            title="Development Tools" 
            description="Proficient with modern development tools and workflows for efficient coding, versioning, and collaboration."
            skills={devToolsSkills}
            className="border-cyber-magenta"
          />
        </div>

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
