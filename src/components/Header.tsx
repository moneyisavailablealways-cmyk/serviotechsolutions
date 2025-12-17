import { useState, useEffect } from "react";
import { Menu, X, Settings, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.jpg";
import { useTranslations } from "@/hooks/use-translations";
import { useSettings, languages, Language } from "@/hooks/use-settings";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();
  const { settings, updateSetting } = useSettings();

  const currentLanguage = languages.find(l => l.value === settings.language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: Language) => {
    updateSetting("language", lang);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary shadow-lg backdrop-blur-sm' : 'bg-secondary/80 shadow-md'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="STS Logo" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="text-xl font-bold text-primary">Servio Tech Solutions</h1>
            <p className="text-xs text-foreground">{t.elevatingYourBusiness}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{t.home}</button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{t.about}</button>
          <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{t.services}</button>
          <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{t.portfolio}</button>
          <button onClick={() => scrollToSection("leadership")} className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">{t.leadershipTeam}</button>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">{t.getInTouch}</Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1.5 text-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                <Globe size={18} />
                <span className="text-sm">{currentLanguage?.flag}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-secondary border border-primary/20 z-[100]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.value}
                  onClick={() => handleLanguageChange(lang.value)}
                  className={`cursor-pointer hover:bg-primary/10 ${settings.language === lang.value ? 'bg-primary/20 text-primary' : ''}`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/settings" className="text-foreground hover:text-primary transition-colors">
                  <Settings size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t.settings}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-primary/20">
          <nav className="flex flex-col p-4 gap-4">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">{t.home}</button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">{t.about}</button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors text-left">{t.services}</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-foreground hover:text-primary transition-colors text-left">{t.portfolio}</button>
            <button onClick={() => scrollToSection("leadership")} className="text-foreground hover:text-primary transition-colors text-left">{t.leadershipTeam}</button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 w-full">{t.getInTouch}</Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-left">
                  <Globe size={20} />
                  <span>{currentLanguage?.flag} {currentLanguage?.label}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-secondary border border-primary/20 z-[100]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.value}
                    onClick={() => handleLanguageChange(lang.value)}
                    className={`cursor-pointer hover:bg-primary/10 ${settings.language === lang.value ? 'bg-primary/20 text-primary' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/settings" className="text-foreground hover:text-primary transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <Settings size={20} />
              {t.settings}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
