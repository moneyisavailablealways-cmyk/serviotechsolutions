import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import { useTranslations } from "@/hooks/use-translations";

const Contact = () => {
  const { toast } = useToast();
  const t = useTranslations();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const SERVICE_ID = "service_olg830h";
  const TEMPLATE_ID = "template_i5q67de";
  const AUTO_REPLY_TEMPLATE_ID = "template_vvpuvd8";
  const PUBLIC_KEY = "Ep9iSpdsMM3qcJPC-";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
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

      try {
        await emailjs.send(
          SERVICE_ID,
          AUTO_REPLY_TEMPLATE_ID,
          {
            from_name: formData.name,
            to_email: formData.email,
            reply_to: formData.email,
            user_email: formData.email,
            to_name: formData.name
          },
          PUBLIC_KEY
        );
      } catch (autoReplyError) {
        console.log("Auto-reply failed (non-critical):", autoReplyError);
      }

      toast({
        title: t.messageSent,
        description: t.messageSuccess
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
        title: t.messageFailed,
        description: t.messageError,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
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
        <div 
          ref={headerRef} 
          className={`text-center mb-16 animate-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">{t.getInTouchTitle}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
        </div>

        <div ref={formRef} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className={`animate-fade-left ${formVisible ? 'visible' : ''}`}>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t.sendMessage}</CardTitle>
                <CardDescription>{t.formSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t.fullName} *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.emailAddress} *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="yourname@company.com" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">{t.companyName}</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.projectDetails} *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and any specific requirements..." required rows={5} className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={loading}>
                    {loading ? t.sending : t.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className={`space-y-6 animate-fade-right ${formVisible ? 'visible' : ''}`}>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t.letsConnect}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.email}</p>
                    <p className="text-muted-foreground">serviotechsolutions@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{t.phone}</p>
                    <p className="text-muted-foreground">+256 705-466-283</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{t.office}</p>
                    <p className="text-muted-foreground">Lwasa, near Paradis Motel, Munyonyo–Kampala</p>

                    <div className="mt-3 rounded-2xl overflow-hidden shadow-md">
                      <iframe
                        src="https://www.google.com/maps?q=Lwasa%20Salaama%20Kampala&output=embed"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          
            <Card className="border-primary/20 bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-2xl">{t.whyWorkWithUs}</CardTitle>
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

        <div 
          ref={ctaRef} 
          className={`text-center mt-16 animate-fade-up ${ctaVisible ? 'visible' : ''}`}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">{t.readyToStart}</h3>
          <p className="text-muted-foreground mb-6">
            {t.readyToStartSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open('https://wa.me/256705466283?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20my%20project.', '_blank')}
            >
              {t.scheduleConsultation}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.location.href = 'tel:+256705466283'}
            >
              {t.callNow}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
