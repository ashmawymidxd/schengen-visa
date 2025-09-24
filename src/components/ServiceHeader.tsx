import { Phone, Mail, Globe, Menu, Languages, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const ServiceHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const menuItems = [
    { name: t("header.home"), href: "/" },
    { name: t("header.service1"), href: "/request-schengen" },
    { name: t("header.service2"), href: "/tourist-visa" },
    { name: t("header.service3"), href: "/flight-reservation" },
    { name: t("header.service4"), href: "/hotel-reservation" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-[var(--shadow-soft)] sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-[10px] sm:px-6">
        {/* Top contact bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="tel:+201554300351"
              target="__blanck"
              className="flex items-center gap-2 bg-green-700 rounded-full p-3 text-white"
            >
              <Phone className="w-4 h-4" />
              <span>+201554300351</span>
            </a>
            <a
              href="mailto:uyu365656@gmail.com"
              target="__blanck"
              className="flex items-center gap-2 rounded-full p-3"
            >
              <Mail className="w-4 h-4" />
              <span>uyu365656@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-muted-foreground hover:text-foreground"
              onClick={toggleLanguage}
            >
              <Globe className="w-4 h-4" /> |
              <Languages className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {language === "ar" ? "English" : "العربية"}
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4 px-[10px] sm:px-0">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <div className="rounded-2xl">
              <span className="text-primary-foreground font-bold text-xl font-arabic">
                <img src={logo} alt="" className="h-10 rounded-lg" />
              </span>
            </div>
            <div className={isRTL ? "mr-4" : "ml-4"}>
              <h1
                className={`text-xl font-bold text-primary ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("header.company_name")}
              </h1>
              <p
                className={`text-sm text-muted-foreground ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("header.company_tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:bg-gray-100 duration-300 rounded-full p-2 hover:text-primary ${
                  isRTL ? "font-arabic" : ""
                } font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}

          <div className="hidden lg:flex items-center gap-4 bg-gray-100 rounded-full p-1 border">
            <a
              href="tel:+201554300351"
              target="__blanck"
              className={`cursor-pointer border bg-white px-3 py-2 flex items-center rounded-full ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              <Phone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("header.call_now")}
            </a>
            <a
              href="https://wa.me/+201554300351"
              target="__blanck"
              className={`cursor-pointer px-3 py-2 btn-hero rounded-full ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("header.request_service")}
            </a>
          </div>

          {/* Mobile language toggle and menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-muted-foreground hover:text-foreground bg-gray-100"
              onClick={toggleLanguage}
            >
              <Globe className="w-4 h-4" /> |
              <Languages className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border px-[10px]">
            <div className="flex flex-col gap-4 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-foreground  hover:text-primary ${
                    isRTL ? "font-arabic" : ""
                  } font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 mt-4">
                <a
                  href="tel:+201554300351"
                  target="__blanck"
                  className={`flex-1 text-center cursor-pointer border bg-white px-3 py-2 flex items-center justify-center rounded-full ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  <Phone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("header.call_now")}
                </a>
                <a
                  href="https://wa.me/+201554300351"
                  target="__blanck"
                  className={`flex-1 text-center cursor-pointer px-3 py-2 btn-hero rounded-full ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {t("header.request_service")}
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default ServiceHeader;
