import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Pause } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import wisdomImage from "@/assets/wisdom-empire-thumbnail.png";
import reportCardImage from "@/assets/portfolio-reportcard.jpg";
import academyImage from "@/assets/portfolio-academy.jpg";
import bankingImage from "@/assets/portfolio-banking.jpg";
import healthcareImage from "@/assets/portfolio-healthcare.jpg";
import { useTranslations } from "@/hooks/use-translations";

const Portfolio = () => {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const projects = [
    {
      title: "Wisdom Empire Hub",
      image: wisdomImage,
      description: "A knowledge platform featuring proverbs, idioms, similes, and quotes, designed for easy exploration with modern UI/UX and AI integration.",
      year: "2025",
      category: "Web Development",
      liveUrl: "https://wisdomempirehub.com",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI Integration"]
    },
    {
      title: "Repor Card Generator",
      image: reportCardImage,
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      year: "2024",
      category: "Web app Development",
      liveUrl: "https://reporto-level.netlify.app",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"]
    },
    {
      title: "Excellence Academy",
      image: academyImage,
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      year: "2024",
      category: "Web app Development",
      liveUrl: "https://exellenceacademy.netlify.app",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT"]
    },
    {
      title: "Mobile Banking App",
      image: bankingImage,
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and budget tracking features.",
      year: "2024",
      category: "Mobile Development",
      technologies: ["React Native", "TypeScript", "Biometric Auth", "Firebase"]
    },
    {
      title: "Healthcare Management System",
      image: healthcareImage,
      description: "Comprehensive healthcare platform for managing patient records, appointments, and medical staff with HIPAA compliance.",
      year: "2023",
      category: "Custom Software",
      technologies: ["React", "Node.js", "MongoDB", "HIPAA Compliant"]
    }
  ];

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    if (!api || !autoplay) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, autoplay]);

  const handleInteraction = () => {
    setAutoplay(false);
  };

  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">{t.ourPortfolio}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.portfolioSubtitle}
          </p>
        </div>

        <Carousel 
          className="max-w-6xl mx-auto"
          setApi={setApi}
          opts={{ loop: true }}
        >
          <CarouselContent className="animate-slide-in-right">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-secondary/60 hover:border-secondary overflow-hidden">
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary text-white">{project.category}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-3 text-foreground">{t.technologiesUsed}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-secondary/20 text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <a href={project.liveUrl} className="btn-primary flex-1 text-center">
                        <ExternalLink className="w-4 h-4 mr-2 inline" />{t.viewLive}</a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={handleInteraction} />
          <CarouselNext onClick={handleInteraction} />
        </Carousel>

        {/* Dot Indicators with Play/Pause */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300"
            aria-label={autoplay ? "Pause auto-advance" : "Play auto-advance"}
          >
            {autoplay ? (
              <Pause className="w-4 h-4 text-primary" />
            ) : (
              <Play className="w-4 h-4 text-primary" />
            )}
          </button>
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  handleInteraction();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
