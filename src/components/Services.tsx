import { ArrowLeftCircle } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import rquest from "../assets/services/request.png";
import visa from "../assets/services/visa.png";
import flay from "../assets/services/flay.png";
import hotel from "../assets/services/hotel.png";
import { Link } from "react-router-dom";
const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      img: rquest,
      title: t("services.consultation.title"),
      color: "text-blue-500",
      href: "/request-schengen",
    },
    {
      img: visa,
      title: t("services.appointment.title"),
      color: "text-green-500",
      href: "/tourist-visa",
    },
    {
      img: flay,
      title: t("services.forms.title"),
      color: "text-purple-500",
      href: "/flight-reservation",
    },
    {
      img: hotel,
      title: t("services.insurance.title"),
      color: "text-red-500",
      href: "/hotel-reservation",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${
              isRTL ? "font-arabic" : ""
            } font-medium mb-4`}
          >
            {t("services.badge")}
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold text-foreground mb-4 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("services.title")}
            <span className="block text-primary">{t("services.subtitle")}</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : ""
            } leading-relaxed`}
          >
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link to={service.href} key={index}>
              <Card className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-white/70 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br from-white to-gray-200 shadow-[var(--shadow-medium)] group-hover:scale-110 transition-transform duration-300`}
                    >
                      <img src={service.img} alt="hi" className="h-[50px]" />
                    </div>
                  </div>
                  <CardTitle
                    className={`text-xl font-bold text-foreground flex items-center justify-center gap-2 ${
                      isRTL ? "font-arabic" : ""
                    }`}
                  >
                    <span>{service.title}</span> <ArrowLeftCircle />
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-medium)] border border-border/50 max-w-2xl mx-auto">
            <h3
              className={`text-2xl font-bold text-foreground mb-4 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("services.cta.title")}
            </h3>
            <p
              className={`text-muted-foreground mb-6 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("services.cta.desc")}
            </p>
            <button className={`btn-hero ${isRTL ? "font-arabic" : ""}`}>
              {t("services.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
