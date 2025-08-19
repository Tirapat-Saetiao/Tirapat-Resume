import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Portal for MFU",
      description: "A comprehensive AI portal for Mae Fah Luang University, featuring a chatbot, knowledge base, and user-friendly interface for students and staff.",
      image: "https://cdn.discordapp.com/attachments/981581187980091445/1407346307902865429/image.png?ex=68a5c4e3&is=68a47363&hm=094d4b227eb5fd5d40b086e0d7a2f4276978b150c5f2a07a9ec7b671848aa0af&",
      technologies: ["React", "Node.js", "Strapi", "Wordpress", "CSS"],
      liveUrl: "https://ai-portal-c9179.web.app/",
      githubUrl: "https://github.com"
    },
    {
      title: "Chaihuay Restaurant",
      description: "A Chinese Restaurant with guangtung cuisine that open for over 30 years at Syratthani ",
      image: "https://cdn.discordapp.com/attachments/981581187980091445/1407347108725653555/image.png?ex=68a5c5a1&is=68a47421&hm=eab0a3af0898269c0a14142a161e90183221260c76746d5c23bd191061e55165&",
      technologies: ["React.js", "Tailwind CSS", "Firebase Hosting",],
      liveUrl: "https://chaihuay-c241a.firebaseapp.com/",
      githubUrl: "https://github.com"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Personal Finance Tracker",
      description: "A comprehensive personal finance application with expense tracking, budget planning, and investment portfolio management.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing different technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-smooth overflow-hidden hover:scale-[1.02] hover:glow-soft"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-primary/30 hover:border-primary/60 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;