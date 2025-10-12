import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="STS Logo" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold text-primary">Servio Tech Solutions</h1>
            <p className="text-xs text-foreground">Elevating Your Business</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("leadership")} className="text-foreground hover:text-primary transition-colors">
            Leadership Team
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
            Get In Touch
          </Button>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && <div className="md:hidden bg-secondary border-t border-primary/20">
          <nav className="flex flex-col p-4 gap-4">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("leadership")} className="text-foreground hover:text-primary transition-colors text-left">
              Leadership Team
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 w-full">
              Get In Touch
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Header;