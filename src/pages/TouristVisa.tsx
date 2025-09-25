import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import TouristVisaFAQ from "@/components/TouristVisaFAQ";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const TouristVisa = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      text: t("tourist.why-us-answer1"),
      icon: Zap,
      gradient: "from-emerald-500 to-green-400",
      description: t("tourist.badge1"),
    },
    {
      text: t("tourist.why-us-answer2"),
      icon: Shield,
      gradient: "from-amber-500 to-yellow-400",
      description: t("tourist.badge2"),
    },
    {
      text: t("tourist.why-us-answer3"),
      icon: Clock,
      gradient: "from-green-600 to-emerald-500",
      description: t("tourist.badge3"),
    },
    {
      text: t("tourist.why-us-answer4"),
      icon: Users,
      gradient: "from-amber-600 to-orange-400",
      description: t("tourist.badge4"),
    },
    {
      text: t("tourist.why-us-answer5"),
      icon: Star,
      gradient: "from-emerald-600 to-teal-400",
      description: t("tourist.badge5"),
    },
  ];
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
    <div className="min-h-screen">

      <div className="relative z-10">
        <ServiceHeader />

        {/* Main Content Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-md shadow-green-500/10 border border-green-200/50 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Header Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200/50 text-emerald-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  {t("tourist.why-us")}
                  <Sparkles className="w-4 h-4" />
                </div>

                <h3
                  className={`text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {t("tourist.why-us")}
                </h3>

                <p
                  className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {t("tourist.description")}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="group relative">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 ease-out"></div>

                    <div className="relative z-10 flex items-start gap-4 p-6 h-full">
                      {/* Icon Container */}
                      <div
                        className={`relative transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                        ></div>
                        <div
                          className={`relative bg-gradient-to-br ${feature.gradient} p-3 rounded-xl shadow-lg`}
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                            {feature.description}
                          </span>
                        </div>
                        <span
                          className={`text-sm text-gray-700 leading-relaxed ${
                            isRTL ? "font-arabic" : ""
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>

                      {/* Hover Effect Line */}
                      <div
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-3/4 transition-all duration-500 ease-out`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <TouristVisaFAQ />
        <ContactForm contactInfo={contactInfo} />
        <Footer />
      </div>
    </div>
  );
};

export default TouristVisa;
