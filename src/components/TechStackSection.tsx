
import React from 'react';

interface TechItem {
  name: string;
  logo: string;
}

const techStack: TechItem[] = [
  {
    name: "Bolt.new",
    logo: "https://pbs.twimg.com/profile_images/1880681797498974208/NMovLh0W_400x400.jpg"
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
  },
  {
    name: "Netlify",
    logo: "https://www.netlify.com/v3/img/components/logomark.png"
  },
  {
    name: "Supabase",
    logo: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/5vZlMjMLsBbOiiGqy0VgA5/0a1a4478531b8e4de8ed498e0f201952/supabase_logo_icon_249349.png"
  },
  {
    name: "GitHub",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
  }
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="py-20 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="inline-block cyber-text text-3xl md:text-4xl font-bold mb-4 pb-2 border-b-2 border-cyber-neon">
            TECH STACK
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            The tools and platforms I use to build and deploy modern applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="cyber-border bg-cyber-blue/20 backdrop-blur-sm rounded-sm p-5 w-24 h-24 flex items-center justify-center transition-all duration-300 group-hover:bg-cyber-blue/40 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.3)]">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-mono text-foreground/80 text-center group-hover:text-cyber-neon transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
