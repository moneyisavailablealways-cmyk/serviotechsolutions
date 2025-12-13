import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Calendar, Code, TestTube, Rocket, Headphones } from "lucide-react";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import { useTranslations } from "@/hooks/use-translations";

const Process = () => {
  const t = useTranslations();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  const steps = [{
    icon: Lightbulb,
    title: t.discovery,
    description: t.discoveryDesc
  }, {
    icon: Calendar,
    title: t.planning,
    description: t.planningDesc
  }, {
    icon: Code,
    title: t.development,
    description: t.developmentDesc
  }, {
    icon: TestTube,
    title: t.testing,
    description: t.testingDesc
  }, {
    icon: Rocket,
    title: t.deployment,
    description: t.deploymentDesc
  }, {
    icon: Headphones,
    title: t.support,
    description: t.supportDesc
  }];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef} 
          className={`text-center mb-16 animate-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">{t.ourDevelopmentProcess}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.processSubtitle}
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 border-2 border-primary/60 hover:border-primary animate-scale-up stagger-${index + 1} ${stepsVisible ? 'visible' : ''}`}
            >
              <CardContent className="p-3 sm:p-5 text-center">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs">
                  {index + 1}
                </div>
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 mt-1 bg-amber-300">
                  <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-tight">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
