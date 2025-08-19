import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "React", "JavaScript", "Node.js", "MongoDB",
    "Tailwind CSS",  "Express",  "Figma" , "Firebase Hosting", 
    "Strapi" , "Wordpress", "Cursor", "Loveable", "REST APIs", "Render"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#1a2236] dark:bg-[#1a2236] transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate that study at Mae Fah Luang University
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a Software Engineering student at Mae Fah luang University. 
              I’m passionate and dedicated to web development, 
              and through some website development, 
              I have gained valuable skills and know about the work process. 
              I will continipusly learn and be highly motivated to a 
              company that offers opportunities for professional growth and valuable experience
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I have experience in building web applications using modern technologies like React, Node.js, and Tailwind CSS. 
              I love creating clean, efficient code and designing user-friendly interfaces.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;