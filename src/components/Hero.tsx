import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Sparkles,
  Star,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "../assets/hero-schengen.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Enhanced Background with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/75 via-blue-600/90 to-transparent"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-blue-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-[25px] sm:px-6 py-20">
        <div
          className={`max-w-4xl transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge with Magic Effect */}
          <div className="mb-8">
            <div
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full ${
                isRTL ? "font-arabic" : ""
              } font-medium mb-6 backdrop-blur-sm relative overflow-hidden`}
            >
              <Sparkles className="w-4 h-4" />
              {t("hero.badge")}
              <Sparkles className="w-4 h-4" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent -translate-x-full animate-shine"></div>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl lg:text-6xl font-bold text-white mb-6 ${
                isRTL ? "font-arabic" : ""
              } leading-tight`}
            >
              <span className="block bg-gradient-to-r from-gray-100 to-gray-100 bg-clip-text text-transparent drop-shadow-lg p-6">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p
              className={`text-xl lg:text-2xl text-white/90 mb-8 ${
                isRTL ? "font-arabic" : ""
              } leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10`}
            >
              {t("hero.description")}
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a
              href="tel:+201554300351" target="__blanck"
              className={`flex items-center justify-center group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl px-5 py-3 rounded-2xl font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300 ease-out ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              <span className="relative z-10 flex items-center">
                {t("hero.request_now")}
                {isRTL ? (
                  <ArrowLeft className="w-6 h-6 mr-3 transform group-hover:-translate-x-1 transition-transform duration-300" />
                ) : (
                  <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </span>
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>

            <a
              href="https://wa.me/+201554300351" target="__blanck"
              className={`text-center group relative overflow-hidden text-white border-blue-400/50 hover:border-white hover:bg-blue-400/10 bg-blue-400/10 text-xl px-5 py-3 rounded-2xl backdrop-blur-sm ${
                isRTL ? "font-arabic" : ""
              } hover:scale-105 transform transition-all duration-300 ease-out`}
            >
              <span className="relative z-10">
                {t("hero.free_consultation")}
              </span>
              {/* Blue glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </a>
          </div>

          {/* Enhanced Stats Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              {
                icon: Award,
                value: t("hero.stats.clients"),
                label: t("hero.stats.clients_label"),
                delay: 0,
              },
              {
                icon: Shield,
                value: t("hero.stats.success"),
                label: t("hero.stats.success_label"),
                delay: 200,
              },
              {
                icon: Clock,
                value: t("hero.stats.processing"),
                label: t("hero.stats.processing_label"),
                delay: 400,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5"></div>

                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 group-hover:border-blue-400/30 transition-all duration-500 ease-out transform group-hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-blue-400 to-blue-500 p-3 rounded-full shadow-lg">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3
                    className={`text-3xl font-bold text-white mb-2 ${
                      isRTL ? "font-arabic" : ""
                    } bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </h3>

                  <p
                    className={`text-white/80 ${
                      isRTL ? "font-arabic" : ""
                    } group-hover:text-blue-100 transition-colors duration-300`}
                  >
                    {stat.label}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full group-hover:w-3/4 transition-all duration-500 ease-out"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="group cursor-pointer">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
            {/* Blue glow */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
          </div>
          <a href="#contact" className="text-blue-300/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {t("hero.scroll_down")}
          </a>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;