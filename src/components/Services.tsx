import { ArrowLeftCircle, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import rquest from "../assets/services/request.png";
import visa from "../assets/services/visa.png";
import flay from "../assets/services/flay.png";
import hotel from "../assets/services/hotel.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Services = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      img: rquest,
      title: t("services.consultation.title"),
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-500",
      href: "/request-schengen",
      gradient: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    },
    {
      img: visa,
      title: t("services.appointment.title"),
      color: "from-blue-600 to-blue-700",
      iconColor: "text-blue-600",
      href: "/tourist-visa",
      gradient: "bg-gradient-to-br from-blue-600/20 to-blue-700/20",
    },
    {
      img: flay,
      title: t("services.forms.title"),
      color: "from-blue-600 to-blue-700",
      iconColor: "text-blue-500",
      href: "/flight-reservation",
      gradient: "bg-gradient-to-br from-blue-600/20 to-blue-700/20",
    },
    {
      img: hotel,
      title: t("services.insurance.title"),
      color: "from-blue-600 to-blue-700",
      iconColor: "text-blue-600",
      href: "/hotel-reservation",
      gradient: "bg-gradient-to-br from-blue-600/20 to-blue-700/20",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50/30 relative overflow-hidden mt-[-50px]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-200/50 text-blue-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className={isRTL ? "font-arabic" : ""}>
              {t("services.badge")}
            </span>
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
          <h2
            className="text-4xl lg:text-6xl font-bold text-foreground mb-4 text-yellow-500"
          >
            {t("services.title")}
            <span className="block text-blue-600 mt-5 p-5">
              {t("services.subtitle")}
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : ""
            } leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20`}
          >
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={index}
              className="group relative block"
            >
              {/* Background Glow Effect */}
              <div
                className={`absolute inset-0 ${service.gradient} rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <Card className="relative group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 ease-out transform group-hover:-translate-y-3 border-white/30 bg-white/70 backdrop-blur-md overflow-hidden">
                {/* Animated Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5`}
                ></div>

                <CardHeader className="relative z-10 text-center pb-6 p-8">
                  {/* Icon Container */}
                  <div className="relative mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-br ${service.color} p-4 rounded-2xl shadow-lg`}
                    >
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-12 w-12 filter brightness-0 invert mx-auto"
                      />
                    </div>
                  </div>

                  <CardTitle
                    className={`text-xl font-bold flex items-center justify-center gap-3 ${
                      isRTL ? "font-arabic" : ""
                    }`}
                  >
                    <span className="bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-500 transition-all duration-500">
                      {service.title}
                    </span>
                    {isRTL ? (
                      <ArrowLeftCircle
                        className={`w-6 h-6 ${service.iconColor} transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300`}
                      />
                    ) : (
                      <ArrowRight
                        className={`w-6 h-6 ${service.iconColor} transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300`}
                      />
                    )}
                  </CardTitle>

                  {/* Hover Effect Line */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${service.color} rounded-full group-hover:w-3/4 transition-all duration-500 ease-out`}
                  ></div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>

            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-3xl p-8 text-white shadow-2xl shadow-blue-500/30 max-w-2xl mx-auto relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <h3
                  className={`text-2xl lg:text-3xl font-bold mb-4 ${
                    isRTL ? "font-arabic" : ""
                  } drop-shadow-sm`}
                >
                  {t("services.cta.title")}
                </h3>
                <p
                  className={`text-lg mb-6 ${
                    isRTL ? "font-arabic" : ""
                  } opacity-90 drop-shadow-sm`}
                >
                  {t("services.cta.desc")}
                </p>
                <a
                  href="https://wa.me/+201554300351"
                  target="__blanck"
                  className={`group relative inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {t("services.cta.button")}
                  {isRTL ? (
                    <ArrowLeftCircle className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
                  ) : (
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  )}

                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
