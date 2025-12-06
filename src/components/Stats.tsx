import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "3+", label: "Years Experience" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">Why Choose Skyline Tech Solutions?</h2>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto text-sm sm:text-base">
            With a proven track record of delivering exceptional software solutions, we're the partner you can trust for your next technology project.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-2 border-secondary/60 hover:border-secondary text-center transition-all duration-300">
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
