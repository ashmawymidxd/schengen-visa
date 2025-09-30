import ServiceHeader from "@/components/ServiceHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import Documents from "@/components/Documents";
import CountryCards from "@/components/CountryCards";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail } from "lucide-react";
import RequestSchengenFAQ from "@/components/RequestSchengenFAQ";

const RequestSchengen = () => {
  const { t } = useLanguage();
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
      <ServiceHeader />
      <Documents />
      <RequestSchengenFAQ />
      <CountryCards />
      <ContactForm contactInfo={contactInfo} />
      <Footer />
    </div>
  );
};

export default RequestSchengen;
