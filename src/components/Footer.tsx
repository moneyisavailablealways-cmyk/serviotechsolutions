import logo from "@/assets/logo.jpg";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle, Send } from "lucide-react"; // Added Music icon
const TikTokIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M192 69.5a52.3 52.3 0 0 1-31-10.4v65.7a59.6 59.6 0 1 1-59.6-59.6 60 60 0 0 1 8.6.6v29.7a29.7 29.7 0 1 0 21.1 28.3V24h29.9a52.3 52.3 0 0 0 52.3 52.3Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/serviotecgsolutions",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/servio-tech-solutions-gerald-098aa7394",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      url: "https://youtube.com/@serviotechsolutions",
      label: "YouTube",
    },
    {
      icon: MessageCircle,
      url: "https://wa.me/+256705466283",
      label: "WhatsApp",
    },
    {
      icon: Send,
      url: "https://t.me/+256705466283",
      label: "Telegram",
    },
    {
      icon: TikTokIcon,
      url: "https://www.tiktok.com/@servio.tech.solut",
      label: "TikTok",
    },
  ];

  return (
    <footer className="text-background py-12 bg-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="STS Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-lg font-bold">Servio Tech Solutions</h3>
                <p className="text-sm text-background/70">Elevating Your Business</p>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Professional software development company specializing in custom solutions that drive business growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-background/70 hover:text-secondary transition-colors">About</a></li>
              <li><a href="#services" className="text-background/70 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-background/70 hover:text-secondary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/70">Custom Software Development</li>
              <li className="text-background/70">Web Development</li>
              <li className="text-background/70">Mobile App Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>serviotechsolutions@gmail.com</li>
              <li>+256 705-466-283</li>
              <li>Munyonyo-Kampala</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/70">
              © {currentYear} Servio Tech Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-background/10 p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-background/70 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
