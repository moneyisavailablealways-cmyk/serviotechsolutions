import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Calendar, Code, TestTube, Rocket, Headphones } from "lucide-react";
const Process = () => {
  const steps = [{
    icon: Lightbulb,
    title: "Discovery",
    description: "We understand your business needs and project goals"
  }, {
    icon: Calendar,
    title: "Planning",
    description: "Strategic roadmap and timeline development"
  }, {
    icon: Code,
    title: "Development",
    description: "Agile development with continuous integration"
  }, {
    icon: TestTube,
    title: "Testing",
    description: "Comprehensive quality assurance and testing"
  }, {
    icon: Rocket,
    title: "Deployment",
    description: "Smooth launch and production deployment"
  }, {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance and technical support"
  }];
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures quality, efficiency, and success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => <Card key={index} className="relative hover:shadow-xl transition-all duration-300 border-2 border-primary/60 hover:border-primary">
              <CardContent className="p-6 text-center px-0 py-0">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-2 bg-amber-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Process;