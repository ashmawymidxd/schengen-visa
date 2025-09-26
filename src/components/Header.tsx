import { Phone, Mail, Globe, Menu, Languages, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  // Update active section based on scroll or route
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname);
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "services", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const menuItems = [
    { name: t("header.home"), href: "#home", id: "home" },
    {
      name: t("header.services"),
      href: "#services",
      id: "services",
      submenu: [
        { name: t("header.service1"), href: "/request-schengen" },
        { name: t("header.service2"), href: "/tourist-visa" },
        { name: t("header.service3"), href: "/flight-reservation" },
        { name: t("header.service4"), href: "/hotel-reservation" },
      ],
    },
    { name: t("header.about"), href: "#about", id: "about" },
    { name: t("header.faq"), href: "#faq", id: "faq" },
    { name: t("header.contact"), href: "#contact", id: "contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  // Check if item is active
  const isActive = (itemId: string) => {
    return activeSection === itemId;
  };

  // Handle smooth scroll for hash links
  const handleHashClick = (href: string, id: string) => {
    if (href.startsWith("#")) {
      setActiveSection(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-[var(--shadow-soft)] sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-[10px] sm:px-6">
        {/* Top contact bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="tel:+201554300351"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-4 py-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>+201554300351</span>
            </a>
            <a
              href="mailto:uyu365656@gmail.com"
              target="_blank"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 transition-all duration-300 hover:text-foreground"
            >
              <Mail className="w-4 h-4" />
              <span>uyu365656@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
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
          <Link
            to={"/"}
            className="flex items-center group"
            onClick={() => setActiveSection("home")}
          >
            <div className="rounded-2xl transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-xl font-arabic">
                <img src={logo} alt="" className="h-10 rounded-lg" />
              </span>
            </div>
            <div className={isRTL ? "mr-4" : "ml-4"}>
              <h1
                className={`text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("header.company_name")}
              </h1>
              <p
                className={`text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("header.company_tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setIsServicesHovered(true)}
                onMouseLeave={() => item.submenu && setIsServicesHovered(false)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashClick(item.href, item.id);
                  }}
                  className={`flex items-center relative font-medium transition-all duration-300 rounded-full px-4 py-2 ${
                    isRTL ? "font-arabic" : ""
                  } ${
                    isActive(item.id)
                      ? "bg-gradient-to-r from-primary to-primary/80 text-white"
                      : "text-foreground hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isActive(item.id) ? "opacity-0" : ""
                    }`}
                  ></div>

                  <span className="relative z-10">{item.name}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 ${
                        isRTL ? "mr-2" : "ml-2"
                      } transition-transform duration-300 relative z-10 ${
                        isServicesHovered ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {/* Services Submenu */}
                {item.submenu && (isServicesHovered) && (
                  <div
                    className={`absolute mt-0 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 py-2 z-50 ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:text-primary transition-all duration-300 border-l-2 border-transparent hover:border-primary"
                        onClick={() => setActiveSection(subItem.href)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2 bg-gray-100 rounded-full p-1 border shadow-sm">
            <a
              href="tel:+201554300351"
              target="_blank"
              className={`cursor-pointer border bg-white px-4 py-2 flex items-center rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                isRTL ? "font-arabic" : ""
              } ${
                activeSection === "contact"
                  ? "bg-primary text-white border-primary"
                  : "hover:bg-gray-50"
              }`}
            >
              <Phone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("header.call_now")}
            </a>
            <a
              href="https://wa.me/+201554300351"
              target="_blank"
              className={`cursor-pointer px-4 py-2 btn-hero rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${
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
              className="rounded-full text-muted-foreground hover:text-foreground bg-gray-100 hover:bg-gray-200 transition-all duration-300"
              onClick={toggleLanguage}
            >
              <Globe className="w-4 h-4" /> |
              <Languages className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border px-[10px] bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-1 mt-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleHashClick(item.href, item.id);
                    }}
                    className={`relative py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      isRTL ? "font-arabic" : ""
                    } ${
                      isActive(item.id)
                        ? "bg-gradient-to-r from-primary to-primary/80 text-white shadow-md"
                        : "text-foreground hover:bg-gray-100 hover:text-primary"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      {isActive(item.id) && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </div>

                    {/* Active indicator for mobile */}
                    {isActive(item.id) && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-white rounded-full"></div>
                    )}
                  </a>

                  {/* Mobile submenu */}
                  {item.submenu && (
                    <div className="pl-6 mt-2 border-l-2 border-gray-200 ml-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-gray-50 transition-all duration-300"
                          onClick={() => {
                            setActiveSection(subItem.href);
                            setIsMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:+201554300351"
                  target="_blank"
                  className={`flex-1 text-center cursor-pointer border bg-white px-3 py-3 flex items-center justify-center rounded-xl transition-all duration-300 ${
                    isRTL ? "font-arabic" : ""
                  } ${
                    activeSection === "contact"
                      ? "bg-primary text-white border-primary"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <Phone className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("header.call_now")}
                </a>
                <a
                  href="https://wa.me/+201554300351"
                  target="_blank"
                  className={`flex-1 text-center cursor-pointer px-3 py-3 btn-hero rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium transition-all duration-300 ${
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

export default Header;
