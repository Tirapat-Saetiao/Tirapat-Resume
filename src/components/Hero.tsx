import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <p className="text-primary text-lg font-medium mb-4 animate-slide-in-right">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Tirapat Saetiao</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-8">
            Backend Developer & Web Enthusiast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft beautiful, scalable web applications with modern technologies. 
            Passionate about creating seamless user experiences and clean, maintainable code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToProjects}
            className="group"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
          </Button>
          <Button 
            variant="outline-hero" 
            size="xl"
            onClick={scrollToContact}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default Hero;