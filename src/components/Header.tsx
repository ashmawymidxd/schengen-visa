import { Phone, Mail, Globe, Menu, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const menuItems = [
    { name: t('header.home'), href: "#home" },
    { name: t('header.services'), href: "#services" },
    { name: t('header.about'), href: "#about" },
    { name: t('header.requirements'), href: "#requirements" },
    { name: t('header.faq'), href: "#faq" },
    { name: t('header.contact'), href: "#contact" }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-[var(--shadow-soft)] sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-[10px] sm:px-6">
        {/* Top contact bar */}
        <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+966 50 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@schengenvisasa.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleLanguage}
            >
              <Languages className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4 px-[10px] sm:px-0">
          {/* Logo */}
          <div className="flex items-center">
            <div className="rounded-2xl">
              <span className="text-primary-foreground font-bold text-xl font-arabic">
                <img src={logo} alt="" className="h-10 rounded-lg"/>
              </span>
            </div>
            <div className={isRTL ? "mr-4" : "ml-4"}>
              <h1 className={`text-xl font-bold text-primary ${isRTL ? 'font-arabic' : ''}`}>{t('header.company_name')}</h1>
              <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>{t('header.company_tagline')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-foreground hover:text-primary ${isRTL ? 'font-arabic' : ''} font-medium transition-colors`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" className={isRTL ? 'font-arabic' : ''}>
              <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('header.call_now')}
            </Button>
            <Button className={`btn-hero ${isRTL ? 'font-arabic' : ''}`}>
              {t('header.request_service')}
            </Button>
          </div>

          {/* Mobile language toggle and menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
              onClick={toggleLanguage}
            >
              <Languages className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
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
                  className={`text-foreground hover:text-primary ${isRTL ? 'font-arabic' : ''} font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
               {/* Language toggle for mobile */}
              <Button 
                variant="outline" 
                size="sm" 
                className={`w-full ${isRTL ? 'font-arabic' : ''} mb-2`}
                onClick={toggleLanguage}
              >
                <Languages className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {language === 'ar' ? 'English' : 'العربية'}
              </Button>
              
              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="sm" className={`flex-1 ${isRTL ? 'font-arabic' : ''}`}>
                  <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('header.call_now')}
                </Button>
                <Button className={`btn-hero flex-1 ${isRTL ? 'font-arabic' : ''}`}>
                  {t('header.request_service')}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;