import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import {SkillsSection} from "@/components/sections/SkillsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <div className="hidden">
        <h1>Gouresh Madye - Software Engineer | AI/ML & Full-Stack Developer</h1>
        <meta name="description" content="Portfolio of Gouresh Madye, a passionate Software Engineer specializing in AI/ML and Full-Stack Development. Explore projects, experience, and skills in modern web technologies." />
        <meta name="keywords" content="Gouresh Madye, Software Engineer, AI/ML Developer, Full-Stack Developer, React, Python, Machine Learning, Portfolio" />
      </div>

      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Leadership & Achievements Section */}
      <LeadershipSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};

export default Index;
