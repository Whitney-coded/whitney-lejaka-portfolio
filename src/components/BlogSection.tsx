
import React from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
  colorVariant: 'neon' | 'magenta' | 'yellow';
}

const colorVariants = {
  neon: "border-cyber-neon hover:border-cyber-neon/80 shadow-[0_0_10px_rgba(14,247,247,0.3)]",
  magenta: "border-cyber-magenta hover:border-cyber-magenta/80 shadow-[0_0_10px_rgba(255,25,248,0.3)]",
  yellow: "border-cyber-yellow hover:border-cyber-yellow/80 shadow-[0_0_10px_rgba(247,255,25,0.3)]"
};

const BlogPostCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  href,
  colorVariant 
}: BlogPostCardProps) => {
  return (
    <a 
      href={href}
      className={cn(
        "group cyber-border p-1 rounded-sm flex flex-col overflow-hidden bg-cyber-blue/10 backdrop-blur-sm hover:bg-cyber-blue/20 transition-all duration-300",
        colorVariants[colorVariant]
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-blue/90 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex items-center space-x-4 mb-3 text-sm text-foreground/70">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        
        <h3 className={cn(
          "text-xl font-mono mb-3 group-hover:underline",
          colorVariant === 'neon' ? 'text-cyber-neon' : 
          colorVariant === 'magenta' ? 'text-cyber-magenta' : 'text-cyber-yellow'
        )}>
          {title}
        </h3>
        
        <p className="text-foreground/80 mb-4">
          {excerpt}
        </p>
      </div>
      
      <div className="px-6 pb-6 flex justify-between items-center mt-auto">
        <span className={cn(
          "text-sm font-semibold",
          colorVariant === 'neon' ? 'text-cyber-neon' : 
          colorVariant === 'magenta' ? 'text-cyber-magenta' : 'text-cyber-yellow'
        )}>
          Read More
        </span>
        <ArrowUpRight className={cn(
          "w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300",
          colorVariant === 'neon' ? 'text-cyber-neon' : 
          colorVariant === 'magenta' ? 'text-cyber-magenta' : 'text-cyber-yellow'
        )} />
      </div>
    </a>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Optimizing AWS Lambda for Performance and Cost",
      excerpt: "Learn how to fine-tune your Lambda functions to maximize performance while keeping costs under control.",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      href: "#",
      colorVariant: 'neon' as const
    },
    {
      title: "Securing Cloud Infrastructure: AWS Best Practices",
      excerpt: "Explore essential security practices for building and maintaining secure AWS environments for your organization.",
      date: "April 22, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
      href: "#",
      colorVariant: 'magenta' as const
    },
    {
      title: "Implementing Infrastructure as Code with CloudFormation",
      excerpt: "A comprehensive guide to automating your AWS infrastructure deployments using CloudFormation templates.",
      date: "March 10, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop",
      href: "#",
      colorVariant: 'yellow' as const
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block cyber-text text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-cyber-neon">
            FROM THE BLOG
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Insights, tutorials, and thoughts on cloud architecture, AWS services, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              image={post.image}
              href={post.href}
              colorVariant={post.colorVariant}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="cyber-button">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
