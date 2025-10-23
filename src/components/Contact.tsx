import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false); // ✅ Loading state

  const SERVICE_ID = "serviotech@12345";
  const TEMPLATE_ID = "template_i5q67de";
  const AUTO_REPLY_TEMPLATE_ID = "template_vvpuvd8";
  const PUBLIC_KEY = "Ep9iSpdsMM3qcJPC-";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      // Send message to you
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message
        },
        PUBLIC_KEY
      );

      // Auto-reply to user
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_email: formData.email
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible."
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again later."
      });
    } finally {
      setLoading(false); // stop loading
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const reasons = [
    "Free consultation and project estimate",
    "Experienced team of experts",
    "Agile development methodology",
    "Transparent communication",
    "On-time delivery guarantee",
    "Post-launch support included"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="yourname@company.com" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and any specific requirements..." required rows={5} className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"} {/* ✅ Loading feedback */}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* The rest of your component remains unchanged */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Let's connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">serviotechsolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+256 705-466-283</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-muted-foreground">Munyonyo-Kampala</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Why work with us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a free consultation call to discuss your project requirements and get a detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open('https://wa.me/256705466283?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20project.', '_blank')}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = 'tel:+256705466283'}
            >
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
