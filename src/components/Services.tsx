import { Code, Globe, Smartphone, HeadphonesIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch, aligned with your specific business requirements and goals.",
      features: [
        "Enterprise applications",
        "Business process automation",
        "Legacy system modernization",
        "API development & integration"
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Create stunning, high-performance websites that provide exceptional user experience across all devices and platforms.",
      features: [
        "Responsive web applications",
        "E-commerce solutions",
        "Content Management Systems",
        "Progressive Web Apps (PWAs)"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Build powerful, user-friendly mobile applications that engage users and drive business growth.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "Mobile app design & UX",
        "App Store optimization"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Consulting & Support",
      description: "Expert guidance and ongoing support to help you make informed technology decisions and maintain your solutions.",
      features: [
        "Technology consulting",
        "Project management",
        "Security audits",
        "24/7 technical support"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and drive digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-primary/60 hover:border-primary">
              <CardHeader>
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3 text-foreground">Key Features:</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
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
