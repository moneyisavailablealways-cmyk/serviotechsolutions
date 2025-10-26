import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Portfolio = () => {
  const projects = [
    {
      title: "Wisdom Empire Hub",
      image: "/lovable-uploads/eafcbbc5-af59-485e-ac62-204162fd5ad0.png",
      description: "A knowledge platform featuring proverbs, idioms, similes, and quotes, designed for easy exploration with modern UI/UX and AI integration.",
      year: "2025",
      category: "Web Development",
      liveUrl: "https://wisdomempirehub.com",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI Integration"]
    },
    {
      title: "Repor Card Generator",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      year: "2024",
      category: "Web app Development",
      liveUrl: "https://reporto-level.netlify.app",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"]
    },
    {
      title: "Excellence Academy",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      year: "2024",
      category: "Web app Development",
      liveUrl: "https://exellenceacademy.netlify.app",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and budget tracking features.",
      year: "2024",
      category: "Mobile Development",
      technologies: ["React Native", "TypeScript", "Biometric Auth", "Firebase"]
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for managing patient records, appointments, and medical staff with HIPAA compliance.",
      year: "2023",
      category: "Custom Software",
      technologies: ["React", "Node.js", "MongoDB", "HIPAA Compliant"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-secondary/60 hover:border-secondary">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary text-white">{project.category}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-3 text-foreground">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-secondary/20 text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <a href={project.liveUrl} className="btn-primary flex-1 text-center">
                        <ExternalLink className="w-4 h-4 mr-2 inline" />View Live</a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
