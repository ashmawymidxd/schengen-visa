import { useLanguage } from "@/contexts/LanguageContext";
import ContactInfo from "@/components/ContactInfo";
import { Phone, Mail } from "lucide-react";

import Testimonials from "@/components/Testimonials";

const Contact = () => {
  const { t } = useLanguage();
  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      color: "text-green-500",
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: ["info@schengenvisasa.com", "support@schengenvisasa.com"],
      color: "text-blue-500",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <Testimonials
        testimonials={[]}
        isVisible={true}
        title={t("about.testimonialsTitle")}
        subtitle={t("about.testimonialsSubtitle")}
      />
      <ContactInfo contactInfo={contactInfo} />
    </section>
  );
};

export default Contact;
