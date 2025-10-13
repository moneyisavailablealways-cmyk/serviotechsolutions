import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "3+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Skyline Tech Solutions?</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            With a proven track record of delivering exceptional software solutions, we're the partner you can trust for your next technology project.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-2 border-secondary/60 hover:border-secondary text-center transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-5xl font-bold text-secondary mb-2">{stat.value}</h3>
                <p className="text-white text-lg">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
