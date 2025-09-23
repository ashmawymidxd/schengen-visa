import {
  Shield,
  Users,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import solution from "../assets/about/solutions.png";
import time from "../assets/about/time&effort.png";
import knowen from "../assets/about/knowandexpert.png";
import price from "../assets/about/price.png";
import supprt from "../assets/about/support.png";
import safe from "../assets/about/safe.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const About = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      img: solution,
      title: t("about.features1.title"),
      description: t("about.features1.description"),
      icon: Sparkles,
      gradient: "from-green-800 to-emerald-500",
    },
    {
      img: time,
      title: t("about.features2.title"),
      description: t("about.features2.description"),
      icon: Clock,
      gradient: "from-green-800 to-emerald-500",
    },
    {
      img: knowen,
      title: t("about.features3.title"),
      description: t("about.features3.description"),
      icon: Users,
      gradient: "from-green-800 to-emerald-500",
    },
    {
      img: price,
      title: t("about.features4.title"),
      description: t("about.features4.description"),
      icon: CheckCircle2,
      gradient: "from-amber-500 to-yellow-400",
    },
    {
      img: supprt,
      title: t("about.features5.title"),
      description: t("about.features5.description"),
      icon: Shield,
      gradient: "from-amber-500 to-yellow-400",
    },
    {
      img: safe,
      title: t("about.features6.title"),
      description: t("about.features6.description"),
      icon: Shield,
      gradient: "from-amber-500 to-yellow-400",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 text-primary px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {t("about.badge")}
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold  mb-6 font-arabic bg-gradient-to-r bg-clip-text">
            {t("about.title")}
            <span className="block bg-gradient-to-r text-green-800">
              {t("about.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            {t("about.description")}
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 rounded-3xl shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 ease-out"></div>
              <div className="relative z-10 flex flex-col items-center text-center h-full p-8">
                {/* Animated Icon Container */}
                <div
                  className={`relative mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`relative bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl shadow-lg`}
                  >
                    <img
                      src={feature.img}
                      width={40}
                      alt=""
                      className="filter brightness-0 invert"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold  mb-3 font-arabic bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground font-arabic leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-3/4 transition-all duration-500 ease-out`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      
        {/* CTA Section */}
        <div
          className={`text-center transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>

            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl shadow-green-500/30 max-w-2xl mx-auto relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl lg:text-4xl font-bold mb-4 font-arabic drop-shadow-sm">
                  {t("about.ctaTitle")}
                </h3>
                <p className="text-lg mb-6 font-arabic opacity-90 drop-shadow-sm">
                  {t("about.ctaSubtitle")}
                </p>
                <button className="group relative inline-flex items-center gap-2 bg-white text-purple-600 hover:text-purple-700 text-lg px-8 py-4 rounded-2xl font-arabic font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out">
                  {t("about.ctaButton")}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />

                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
