import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Elevating Your Business
          <br />
          <span className="text-secondary">with Technology</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          Professional software development solutions that drive growth, innovation, and success for businesses of all sizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
            onClick={() => scrollToSection("contact")}
          >
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8"
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
