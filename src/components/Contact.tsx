import { useLanguage } from "@/contexts/LanguageContext";
import ContactInfo from "@/components/ContactInfo";
import { Phone, Mail } from "lucide-react";

import Testimonials from "@/components/Testimonials";
import { text } from "stream/consumers";

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

  const testimonials = [
    {
      name : t('about.testimonials.c1.name'),
      location : t('about.testimonials.c1.location'),
      text : t('about.testimonials.c1.text'),
      rating : 5,
    },
    {
      name : t('about.testimonials.c2.name'),
      location : t('about.testimonials.c2.location'),
      text : t('about.testimonials.c2.text'),
      rating : 4,
    },
    {
      name : t('about.testimonials.c3.name'),
      location : t('about.testimonials.c3.location'),
      text : t('about.testimonials.c3.text'),
      rating : 3,
    },
  ];

  return (
    <section className=" bg-gradient-subtle">
      <Testimonials
        testimonials={testimonials}
        isVisible={true}
        title={t("about.testimonialsTitle")}
        subtitle={t("about.testimonialsSubtitle")}
      />
      <ContactInfo contactInfo={contactInfo} />
    </section>
  );
};

export default Contact;
