import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO", initials: "JD" },
    { name: "Jane Smith", role: "CTO", initials: "JS" },
    { name: "Mike Johnson", role: "Lead Developer", initials: "MJ" },
    { name: "Sarah Williams", role: "Project Manager", initials: "SW" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
