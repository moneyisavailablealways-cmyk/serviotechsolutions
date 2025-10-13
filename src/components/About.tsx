import { Target, Eye, Lightbulb, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const values = [{
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technology to deliver cutting-edge solutions"
  }, {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do"
  }, {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients to ensure success"
  }, {
    icon: TrendingUp,
    title: "Transparency",
    description: "We believe in open communication and honest progress updates"
  }];
  return <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Founded in 2022, Servio Tech Solutions has emerged from a simple belief that technology should empower businesses to reach their full potential. Our founders, with years of combined experience in software development and business consulting, saw an opportunity to bridge the gap between business challenges and cutting-edge technology solutions.</p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">We are technology partner for businesses across vast industries. We successfully delivered 60+ projects in various sectors, helping clients transform their ideas and business processes into digital solutions. Our clients trust us because we do not just write code; we understand business needs and create solutions designed to achieve tangible business goals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-yellow-400">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be their trusted partners, providing cutting-edge software development services tailored to their unique needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-amber-400">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the leading technology partner for businesses seeking to harness the power of innovation and digital transformation. We aim to create lasting success for our clients by delivering exceptional results.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="bg-primary text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-amber-400">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-white/80 text-sm">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;