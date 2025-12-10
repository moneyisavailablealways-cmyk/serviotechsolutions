import { Target, Eye, Lightbulb, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import { useTranslations } from "@/hooks/use-translations";

const About = () => {
  const t = useTranslations();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  const values = [{
    icon: Lightbulb,
    title: t.innovation,
    description: t.innovationDesc
  }, {
    icon: Award,
    title: t.excellence,
    description: t.excellenceDesc
  }, {
    icon: Users,
    title: t.collaboration,
    description: t.collaborationDesc
  }, {
    icon: TrendingUp,
    title: t.transparency,
    description: t.transparencyDesc
  }];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div 
          ref={introRef} 
          className={`max-w-4xl mx-auto mb-16 animate-on-scroll ${introVisible ? 'visible' : ''}`}
        >
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t.aboutIntro1}
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t.aboutIntro2}
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={`bg-white border-primary/20 animate-fade-left ${cardsVisible ? 'visible' : ''}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-yellow-400">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{t.ourMission}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.ourMissionText}
              </p>
            </CardContent>
          </Card>

          <Card className={`bg-white border-primary/20 animate-fade-right ${cardsVisible ? 'visible' : ''}`}>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-amber-400">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{t.ourVision}</h3>
              </div>
              <p className="text-muted-foreground">
                {t.ourVisionText}
              </p>
            </CardContent>
          </Card>
        </div>

        <div ref={valuesRef}>
          <h3 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-primary animate-fade-up ${valuesVisible ? 'visible' : ''}`}>
            {t.ourCoreValues}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`bg-primary text-primary-foreground hover:scale-105 transition-transform animate-scale-up stagger-${index + 1} ${valuesVisible ? 'visible' : ''}`}
              >
                <CardContent className="p-3 sm:p-5 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 bg-amber-400">
                    <value.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-sm sm:text-lg font-bold mb-1">{value.title}</h4>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm leading-tight">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
