import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import logo from "../assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { name: t("footer.home"), href: "#home" },
    { name: t("footer.services"), href: "#services" },
    { name: t("footer.steps"), href: "#steps" },
    { name: t("footer.about"), href: "#about" },
  ];

  const services = [
    { name: t("footer.visa_schengen"), href: "#services" },
    { name: t("footer.free_consult"), href: "#contact" },
    { name: t("footer.appointment_booking"), href: "#services" },
    { name: t("footer.health_insurance"), href: "#services" },
  ];

  const legalLinks = [
    { name: t("footer.terms"), href: "#terms" },
    { name: t("footer.privacy"), href: "#privacy" },
    { name: t("footer.cancellation"), href: "#cancellation" },
    { name: t("footer.agreement"), href: "#agreement" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-white">
                  <span className="">
                    <img src={logo} alt="" className="h-10 rounded-sm" />
                  </span>
                </div>
                <div className="mr-3">
                  <h3 className="text-xl font-bold font-arabic">
                    {t("header.company_name")}
                  </h3>
                </div>
              </div>
              <p className="text-primary-foreground/80 font-arabic leading-relaxed">
                {t("footer.company.desc")}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">info@schengenvisasa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-arabic">
                  {" "}
                  {t("footer.address")}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-arabic text-primary-foreground">
              {t("footer.quick_links")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-arabic"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-arabic text-primary-foreground">
              {t("footer.service")}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-arabic"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-arabic text-primary-foreground">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-arabic text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold mb-4 font-arabic text-primary-foreground">
                {t("footer.follow")}
              </h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground/80 group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-primary-foreground/80 group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground/80 group-hover:text-accent-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground/80 group-hover:text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/20">
          <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-4 font-arabic text-primary-foreground">
              {t("footer.newsletter.title")}
            </h4>
            <p className="text-primary-foreground/80 mb-6 font-arabic">
              {t("footer.newsletter.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("footer.enter_email") || "أدخل بريدك الإلكتروني"}
                className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-accent px-6 py-3 whitespace-nowrap font-arabic flex items-center justify-center gap-3">
                {t("footer.newsletter.button")}
                <ExternalLink className="w-4 h-4 mr-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-primary-dark/50 py-6 border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60 font-arabic">
              {t("footer.copyright")}
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span className="font-arabic">{t("footer.licensed")}</span>
              <span>|</span>
              <span className="font-arabic">{t("footer.member")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
