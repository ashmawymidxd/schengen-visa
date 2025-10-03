import {
  Phone,
  FileText,
  CheckCircle,
  Eye,
  Plane,
  ArrowLeft,
  ArrowDown,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Steps = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      icon: Phone,
      number: "01",
      title: t("steps.step1.title"),
      description: t("steps.step1.desc"),
      color: "from-blue-600 to-blue-800",
      accent: "bg-blue-600",
    },
    {
      icon: FileText,
      number: "02",
      title: t("steps.step2.title"),
      description: t("steps.step2.desc"),
      color: "from-blue-700 to-blue-900",
      accent: "bg-blue-700",
    },
    {
      icon: Eye,
      number: "03",
      title: t("steps.step3.title"),
      description: t("steps.step3.desc"),
      color: "from-blue-700 to-blue-900",
      accent: "bg-blue-700",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: t("steps.step4.title"),
      description: t("steps.step4.desc"),
      color: "from-blue-700 to-blue-900",
      accent: "bg-blue-700",
    },
    {
      icon: Plane,
      number: "05",
      title: t("steps.step5.title"),
      description: t("steps.step5.desc"),
      color: "from-blue-700 to-blue-900",
      accent: "bg-blue-700",
    },
  ];

  return (
    <section
      id="steps"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-400/10 to-slate-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className={isRTL ? "font-arabic" : ""}>
              {t("steps.badge")}
            </span>
            <Sparkles className="w-4 h-4 text-blue-500" />
          </div>
          <h2
            className={`text-4xl lg:text-6xl font-bold mb-6 text-yellow-500 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("steps.title")}
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 p-5 bg-clip-text text-transparent">
              {t("steps.subtitle")}
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : ""
            } leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20`}
          >
            {t("steps.description")}
          </p>
        </div>

        {/* Steps Timeline */}
        <div
          className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-200 to-blue-200 rounded-full hidden lg:block"></div>
          <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2">
            <div className="h-full w-0.5 bg-gradient-to-b from-blue-300/50 to-blue-300/50 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`relative ${step.accent} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-4 border-white`}
                  >
                    {step.number}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                  </div>
                </div>

                {/* Step Card */}
                <div className="relative bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 h-64 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:border-blue-200/70">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5"></div>

                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                    {/* Icon Container */}
                    <div
                      className={`relative mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                      <div
                        className={`relative bg-gradient-to-br ${step.color} p-3 rounded-2xl shadow-lg`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-lg font-bold text-gray-900 mb-2 ${
                        isRTL ? "font-arabic" : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-gray-600 text-sm leading-relaxed ${
                        isRTL ? "font-arabic" : ""
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${step.color} rounded-full group-hover:w-3/4 transition-all duration-500 ease-out`}
                    ></div>
                  </div>
                </div>

                {/* Arrow Connectors - Desktop */}
                {index < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 z-10">
                      <div className="flex items-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300"></div>
                        <ArrowLeft className="w-6 h-6 text-blue-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Mobile Arrow */}
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="flex flex-col items-center">
                        <div className="h-8 w-0.5 bg-gradient-to-b from-blue-300 to-blue-300"></div>
                        <ArrowDown className="w-6 h-6 text-blue-500 transform group-hover:translate-y-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-900 ${
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
                  {t("steps.bottom_cta.title")}
                </h3>
                <p
                  className={`text-lg mb-6 ${
                    isRTL ? "font-arabic" : ""
                  } opacity-90 drop-shadow-sm`}
                >
                  {t("steps.bottom_cta.desc")}
                </p>
                <a
                  href="https://wa.me/+201554300351"
                  target="__blanck"
                  className="group relative inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out"
                >
                  <span className={isRTL ? "font-arabic" : ""}>
                    {t("steps.bottom_cta.button")}
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />

                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
