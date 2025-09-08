import {
  Phone,
  FileText,
  CheckCircle,
  Eye,
  Plane,
  ArrowLeft,
  ArrowDown,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Steps = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: Phone,
      number: "01",
      title: t("steps.step1.title"),
      description: t("steps.step1.desc"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      number: "02",
      title: t("steps.step2.title"),
      description: t("steps.step2.desc"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: t("steps.step3.title"),
      description: t("steps.step3.desc"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Eye,
      number: "04",
      title: t("steps.step4.title"),
      description: t("steps.step4.desc"),
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Plane,
      number: "05",
      title: t("steps.step5.title"),
      description: t("steps.step5.desc"),
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section id="steps" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${
              isRTL ? "font-arabic" : ""
            } font-medium mb-4`}
          >
            {t("steps.badge")}
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("steps.title")}
            <span className="block text-primary">{t("steps.subtitle")}</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : ""
            } leading-relaxed`}
          >
            {t("steps.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center md:justify-start">
              {/* Step Card */}
              <div className="border bg-gray-50 p-3 rounded-md h-[30vh] w-full m-1">
                {/* Step Number and Icon */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white to-gray-200">
                    <step.icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <h2 className="text-lg text-center">{step.title}</h2>
                  <p className="text-center text-gray-400">{step.description}</p>
                </div>
              </div>

              {/* Arrow connector - only for non-last items */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8 lg:mb-0">
                  <div className="w-2 h-12 md:w-12 md:h-2 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full relative">
                    <div className="absolute -bottom-1 left-1 transform -translate-x-1/2">
                      <ArrowLeft className="w-4 h-4 text-primary/60 hidden md:flex" />
                      <ArrowDown className="w-4 h-4 text-primary/60 flex md:hidden" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-[var(--shadow-strong)] max-w-2xl mx-auto">
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("steps.bottom_cta.title")}
            </h3>
            <p
              className={`text-lg mb-6 ${
                isRTL ? "font-arabic" : ""
              } opacity-90`}
            >
              {t("steps.bottom_cta.desc")}
            </p>
            <button
              className={`btn-accent text-lg px-8 py-4 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("steps.bottom_cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
