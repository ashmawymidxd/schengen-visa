import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import TouristVisaFAQ from "@/components/TouristVisaFAQ";
import VisaRequirementsSection from "@/components/VisaRequirementsSection";
import Featurs from "@/components/Featurs";

import { Phone, Mail } from "lucide-react";
import VisaSection from "@/components/VisaSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const TouristVisa = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      color: "text-blue-600",
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: ["info@schengenvisasa.com", "support@schengenvisasa.com"],
      color: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        <ServiceHeader />
        {/* Header Section */}
        {/* Main Content Section */}
        <section className="container mx-auto">
          <VisaSection />
         
        </section>
          <Featurs />
        <VisaRequirementsSection />

        <TouristVisaFAQ />
        <ContactForm contactInfo={contactInfo} />
        <Footer />
      </div>
    </div>
  );
};

export default TouristVisa;
