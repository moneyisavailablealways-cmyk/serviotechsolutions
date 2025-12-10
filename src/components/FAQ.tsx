import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/use-scroll-animation";
import { useTranslations } from "@/hooks/use-translations";

const FAQ = () => {
  const t = useTranslations();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "What services does Servio Tech Solutions offer?",
      answer: "We offer a comprehensive range of technology services including Custom Software Development, Web Development, Mobile App Development (iOS & Android), API Development & Integration, Business Process Automation, and Technology Consulting & Support. Each solution is tailored to meet your specific business needs."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary based on complexity and scope. A simple website may take 2-4 weeks, while a full-featured mobile app or enterprise software can take 2-6 months. During our free consultation, we'll provide a detailed timeline based on your specific requirements."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with six key phases: Discovery (understanding your needs), Planning (roadmap & timeline), Development (building with continuous integration), Testing (quality assurance), Deployment (smooth launch), and Support (ongoing maintenance). This ensures transparency and quality at every stage."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support. We believe in building long-term partnerships with our clients."
    },
    {
      question: "How much does it cost to develop an app or website?",
      answer: "Costs depend on the project's complexity, features, and timeline. We offer competitive pricing and flexible payment plans. Contact us for a free consultation and detailed project estimate tailored to your budget and requirements."
    },
    {
      question: "Can you work with my existing systems and technologies?",
      answer: "Absolutely! We specialize in integrating new solutions with existing systems, modernizing legacy applications, and developing custom APIs. Our team is experienced with a wide range of technologies and can adapt to your current tech stack."
    },
    {
      question: "Do you sign NDAs and protect intellectual property?",
      answer: "Yes, we take confidentiality seriously. We're happy to sign Non-Disclosure Agreements (NDAs) before discussing your project details. All intellectual property rights for custom-developed solutions belong to you upon project completion and payment."
    },
    {
      question: "How do I get started with Servio Tech Solutions?",
      answer: "Getting started is easy! Simply contact us via WhatsApp, phone, or the contact form on our website. We'll schedule a free consultation to discuss your project, understand your goals, and provide a detailed proposal with timeline and cost estimates."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 animate-fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">{t.faq}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.faqSubtitle}
          </p>
        </div>

        <div 
          ref={accordionRef}
          className={`max-w-3xl mx-auto animate-fade-up ${accordionVisible ? 'visible' : ''}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 border-primary/60 rounded-lg px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
