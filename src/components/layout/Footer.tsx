import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import huarenIcon from "@/assets/huaren-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "CA Services",
    "Financials", 
    "Investing",
    "Tech & IT Solutions"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src={huarenIcon} alt="Huaren H Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold">Huaren</div>
                <div className="text-xs sm:text-sm opacity-80">Consultancy Firm</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
              Your trusted partner for comprehensive consultancy services. 
              We bring clarity, trust, and innovation to every partnership, 
              helping businesses achieve sustainable growth.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-xs sm:text-sm opacity-90 hover:text-gold hover:opacity-100 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Our Services</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-xs sm:text-sm opacity-90 hover:text-gold hover:opacity-100 transition-all cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gold flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-90">
                  <p>Gurugram, India, 122101</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gold flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-90">
                  <p>Main: +91 70110 57059</p>
                  <p>WhatsApp: +91 70110 57059</p>
                  <p>24/7: +91 76786 30568</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gold flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-90 break-all">
                  <p>Huarenconsultancy@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-gold flex-shrink-0" />
                <div className="text-xs sm:text-sm opacity-90">
                  <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm opacity-80 text-center sm:text-left">
              © {currentYear} Huaren. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy" className="text-xs sm:text-sm opacity-80 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs sm:text-sm opacity-80 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-xs sm:text-sm opacity-80 hover:text-gold transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;