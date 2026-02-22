
import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyber-neon" />,
      label: "Email",
      value: "whitneylejaka@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyber-magenta" />,
      label: "Location",
      value: "Johannesburg, South Africa"
    },
    {
      icon: <Phone className="w-5 h-5 text-cyber-yellow" />,
      label: "Contact",
      value: "+27 76 310 2692"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-black/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block cyber-text text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-cyber-neon">
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Have a project in mind or want to discuss cloud solutions? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="cyber-border p-6 rounded-sm bg-cyber-blue/20 backdrop-blur-sm">
            <h3 className="text-2xl font-mono text-cyber-neon mb-6">Contact Info</h3>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="text-foreground/60 text-sm">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-mono text-cyber-yellow mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/whitney-lejaka-b15234213" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cyber-neon/50 rounded-sm flex items-center justify-center text-cyber-neon hover:bg-cyber-neon hover:text-cyber-dark-blue transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Whitney-coded" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-cyber-magenta/50 rounded-sm flex items-center justify-center text-cyber-magenta hover:bg-cyber-magenta hover:text-cyber-dark-blue transition-colors duration-300"
                >
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
