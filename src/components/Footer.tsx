import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Sparkles,
  Crown,
  Shield,
  CheckCircle
} from "lucide-react";
import logo from "../assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: t("footer.home"), href: "#home", icon: Sparkles },
    { name: t("footer.services"), href: "#services", icon: Crown },
    { name: t("footer.steps"), href: "#steps", icon: CheckCircle },
    { name: t("footer.about"), href: "#about", icon: Shield },
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
    <footer className="relative bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-gray-400/5 to-gray-300/5 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-green-700 shadow-lg border border-emerald-400/30">
                    <img src={logo} alt="" className="h-12 rounded-sm filter brightness-0 invert" />
                  </div>
                </div>
                <div className="m-4">
                  <h3 className="text-2xl font-bold font-arabic bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                    {t("header.company_name")}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mt-2"></div>
                </div>
              </div>
              
              <p className="text-emerald-100/90 font-arabic leading-relaxed text-lg backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-emerald-400/20">
                {t("footer.company.desc")}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-emerald-400/10 hover:border-amber-400/30">
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 group-hover:from-amber-500 group-hover:to-yellow-500 transition-all duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-emerald-50 font-medium">+201554300351</span>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-emerald-400/10 hover:border-amber-400/30">
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 group-hover:from-amber-500 group-hover:to-yellow-500 transition-all duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-emerald-50 font-medium">uyu365656@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-emerald-400/10 hover:border-amber-400/30">
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 group-hover:from-amber-500 group-hover:to-yellow-500 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-emerald-50 font-medium font-arabic">
                  {t("footer.address")}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 font-arabic text-white flex items-center gap-3">
              <Crown className="w-5 h-5 text-amber-400" />
              {t("footer.quick_links")}
              <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent ml-3"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 text-emerald-100/80 hover:text-amber-300 transition-all duration-300 font-arabic text-lg p-2 rounded-lg hover:bg-white/5"
                  >
                    <link.icon className="w-4 h-4 text-amber-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 font-arabic text-white flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-400" />
              {t("footer.service")}
              <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent ml-3"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                  <a
                    href={service.href}
                    className="flex items-center gap-3 text-emerald-100/80 hover:text-amber-300 transition-all duration-300 font-arabic text-lg p-2 rounded-lg hover:bg-white/5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="group">
            <h4 className="text-xl font-bold mb-6 font-arabic text-white flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              {t("footer.legal")}
              <div className="flex-1 h-px bg-gradient-to-r from-amber-400/50 to-transparent ml-3"></div>
            </h4>
            
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index} className="group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${index * 100}ms`}}>
                  <a
                    href={link.href}
                    className="text-emerald-100/80 hover:text-amber-300 transition-colors font-arabic text-lg p-2 rounded-lg hover:bg-white/5 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-4 font-arabic text-white flex items-center gap-2">
                {t("footer.follow")}
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent ml-3"></div>
              </h5>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, color: "from-blue-500 to-blue-600" },
                  { icon: Twitter, color: "from-sky-500 to-sky-600" },
                  { icon: Instagram, color: "from-pink-500 to-purple-600" },
                  { icon: Linkedin, color: "from-blue-600 to-blue-700" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group relative w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-emerald-400/10 hover:border-amber-400/30 hover:scale-110 transform"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    <social.icon className="w-5 h-5 text-emerald-200 group-hover:text-amber-300 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-16 pt-12 border-t border-emerald-400/20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-gradient-to-r from-emerald-800/40 to-green-800/40 rounded-3xl p-8 text-center backdrop-blur-sm border border-emerald-400/20 shadow-2xl shadow-emerald-900/20">
            {/* Decorative Elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-amber-400 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-400 rounded-full blur-sm animate-pulse delay-1000"></div>
            
            <div className="relative z-10">
              <h4 className="text-2xl lg:text-3xl font-bold mb-4 font-arabic text-white">
                {t("footer.newsletter.title")}
              </h4>
              <p className="text-emerald-100/80 mb-6 font-arabic text-lg max-w-2xl mx-auto">
                {t("footer.newsletter.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("footer.enter_email") || "أدخل بريدك الإلكتروني"}
                  className="flex-1 px-4 py-4 rounded-xl bg-white/90 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent font-arabic text-lg shadow-lg"
                />
                <button className="group relative bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-4 rounded-xl font-arabic font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px]">
                  {t("footer.newsletter.button")}
                  <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative bg-gradient-to-r from-emerald-950/80 to-green-950/80 py-8 border-t border-amber-400/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-sm text-emerald-200/70 font-arabic flex items-center gap-2">
              <span>© 2025 {t("header.company_name")}</span>
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              <span>{t("footer.copyright")}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-emerald-200/70">
              <span className="font-arabic flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                {t("footer.licensed")}
              </span>
              <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
              <span className="font-arabic flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" />
                {t("footer.member")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        .animate-float {
          animation: float 20s infinite linear;
        }
      `}</style>
    </footer>
  );
};

export default Footer;