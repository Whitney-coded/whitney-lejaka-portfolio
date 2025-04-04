
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyber-neon" />,
      label: "Email",
      value: "whitney@lejaka.com"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyber-magenta" />,
      label: "Location",
      value: "Johannesburg, South Africa"
    },
    {
      icon: <Phone className="w-5 h-5 text-cyber-yellow" />,
      label: "Contact",
      value: "+27 83 651 6368"
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

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3">
            <div className="cyber-border p-6 rounded-sm bg-cyber-blue/20 backdrop-blur-sm h-full">
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
          
          <div className="w-full lg:w-2/3">
            <div className="cyber-border p-6 rounded-sm bg-cyber-blue/20 backdrop-blur-sm">
              <h3 className="text-2xl font-mono text-cyber-neon mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-cyber-blue/30 border-cyber-neon/30 focus:border-cyber-neon focus:ring-cyber-neon/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-cyber-blue/30 border-cyber-neon/30 focus:border-cyber-neon focus:ring-cyber-neon/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-cyber-blue/30 border-cyber-neon/30 focus:border-cyber-neon focus:ring-cyber-neon/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-cyber-blue/30 border-cyber-neon/30 focus:border-cyber-neon focus:ring-cyber-neon/20"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
