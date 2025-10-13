import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import geraldImg from "@/assets/gerald.png";
import kevinImg from "@/assets/kevin.jpg";
import brunoImg from "@/assets/bruno.jpg";
import nicImg from "@/assets/nic.png";

const Leadership = () => {
  const teamMembers = [
    {
      name: "Gerald B",
      role: "Chief Executive Officer (CEO) & Chief Marketing Officer (CMO)",
      image: geraldImg,
      phones: ["0705466283", "0792586649"],
      description: "Gerald B leads Servio Tech Solutions with vision, innovation, and a passion for excellence. As both CEO and CMO, he oversees the company's strategic direction, partnerships, and branding efforts. His leadership ensures that Servio Tech remains a trusted name in technology and digital transformation across East Africa."
    },
    {
      name: "Kevin K",
      role: "Chief Technology Officer (CTO)",
      image: kevinImg,
      phones: ["0751880433"],
      description: "Kevin K drives innovation and technical excellence at Servio Tech Solutions. He oversees software development, mobile apps, management systems, and API integrations. His deep technical expertise ensures that all products are reliable, scalable, and meet the latest global standards."
    },
    {
      name: "Bruno G",
      role: "Chief Operations Officer (COO)",
      image: brunoImg,
      phones: ["0708434656"],
      description: "Bruno G manages day-to-day operations and ensures all projects are delivered on schedule, within budget, and to the highest standards. His leadership in operations guarantees smooth coordination between teams and consistent client satisfaction."
    },
    {
      name: "Sir Nic Omubedhe M",
      role: "Company Mentor",
      image: nicImg,
      phones: ["0704972253"],
      description: "Sir Nic Omubedhe serves as the guiding force behind Servio Tech Solutions' growth and excellence. A seasoned leader with a wealth of experience, he is Manager at Success FM, CEO of Ronro Virtual University, CEO of Mubedhe Driving University, and Manager at Nyce TV. His mentorship brings wisdom, strategic insight, and professional guidance to the entire leadership team."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at Servio Tech Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-primary/60 hover:border-primary">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{member.name}</h2>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.phones.map((phone, idx) => (
                      <a 
                        key={idx}
                        href={`tel:${phone}`}
                        className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
