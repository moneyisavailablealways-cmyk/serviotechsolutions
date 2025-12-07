import { Code, Globe, Smartphone, HeadphonesIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useScrollAnimation from "@/hooks/use-scroll-animation";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const services = [{
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built from scratch, aligned with your specific business requirements and goals.",
    features: ["Enterprise applications", "Business process automation", "Legacy system modernization", "API development & integration"]
  }, {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, high-performance websites that provide exceptional user experience across all devices and platforms.",
    features: ["Responsive web applications", "E-commerce solutions", "Content Management Systems", "Progressive Web Apps (PWAs)"]
  }, {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Build powerful, user-friendly mobile applications that engage users and drive business growth.",
    features: ["iOS and Android development", "Cross-platform solutions", "Mobile app design & UX", "App Store optimization"]
  }, {
    icon: HeadphonesIcon,
    title: "Consulting & Support",
    description: "Expert guidance and ongoing support to help you make informed technology decisions and maintain your solutions.",
    features: ["Technology consulting", "Project management", "Security audits", "24/7 technical support"]
  }];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef} 
          className={`text-center mb-16 animate-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and drive digital transformation
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-xl transition-all duration-300 border-2 border-primary/60 hover:border-primary animate-scale-up stagger-${index + 1} ${cardsVisible ? 'visible' : ''}`}
            >
              <CardHeader className="p-3 sm:p-6">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-2 sm:mb-4 bg-amber-400">
                  <service.icon className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-sm sm:text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-xs sm:text-base font-bold hidden sm:block">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
                <p className="font-semibold mb-2 sm:mb-3 text-foreground text-xs sm:text-base">Key Features:</p>
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-1 sm:mr-2 text-xs sm:text-base">✓</span>
                      <span className="text-muted-foreground font-bold text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
