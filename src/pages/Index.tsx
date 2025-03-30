
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark-blue text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
