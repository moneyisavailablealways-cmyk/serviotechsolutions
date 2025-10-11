import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroBg1, heroBg2, heroBg3, heroBg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Blue/Yellow Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in md:text-4xl drop-shadow-lg">
          Elevating Your Business
          <br />
          <span className="text-secondary drop-shadow-md">with Technology</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-fade-in drop-shadow-md">
          Professional software development solutions that drive growth, innovation, and success for businesses of all sizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 shadow-lg hover:shadow-xl transition-all" 
            onClick={() => scrollToSection("contact")}
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all" 
            onClick={() => scrollToSection("portfolio")}
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;