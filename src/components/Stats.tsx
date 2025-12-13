import { Card, CardContent } from "@/components/ui/card";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import { useTranslations } from "@/hooks/use-translations";

const Stats = () => {
  const t = useTranslations();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const stats = [
    { value: "10+", label: t.projectsCompleted },
    { value: "98%", label: t.clientSatisfaction },
    { value: "3+", label: t.yearsExperience }
  ];

  return (
    <section className="py-12 sm:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef} 
          className={`text-center mb-8 sm:mb-12 animate-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">
            {t.whyChooseUs}
          </h2>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto text-sm sm:text-base">
            {t.statsSubtitle}
          </p>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`bg-primary-foreground/10 border-2 border-secondary/60 hover:border-secondary text-center transition-all duration-300 animate-scale-up stagger-${index + 1} ${statsVisible ? 'visible' : ''}`}
            >
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-2xl sm:text-4xl font-bold text-secondary mb-1">{stat.value}</h3>
                <p className="text-primary-foreground text-xs sm:text-base">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
