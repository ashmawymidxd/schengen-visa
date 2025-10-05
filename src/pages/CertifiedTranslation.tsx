import {
  Globe2,
  FileText,
  Languages,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Shield,
  Award,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CertifiedTranslation = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Languages className="w-8 h-8" />,
      title: t("translation.features.languages.title"),
      desc: t("translation.features.languages.desc"),
      gradient: "from-blue-600 to-sky-500",
      delay: "delay-200",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("translation.features.delivery.title"),
      desc: t("translation.features.delivery.desc"),
      gradient: "from-blue-600 to-cyan-500",
      delay: "delay-300",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t("translation.features.certified.title"),
      desc: t("translation.features.certified.desc"),
      gradient: "from-blue-700 to-blue-500",
      delay: "delay-400",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t("translation.features.documents.title"),
      desc: t("translation.features.documents.desc"),
      gradient: "from-sky-600 to-blue-400",
      delay: "delay-500",
    },
  ];

  const documents = [
    t("translation.documents.birth"),
    t("translation.documents.academic"),
    t("translation.documents.contracts"),
    t("translation.documents.financial"),
    t("translation.documents.medical"),
    t("translation.documents.travel"),
  ];

  return (
    <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <ServiceHeader />
      <section className="section-padding bg-gradient-to-br from-blue-50/80 via-slate-50 to-sky-100/40 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-sky-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-sky-400/25 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-yellow-400/15 to-amber-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-cyan-300/15 rounded-full blur-xl animate-pulse delay-1500"></div>

          {/* Gold Accent Elements */}
          <div className="absolute top-20 left-20 w-12 h-12 bg-yellow-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 right-32 w-8 h-8 bg-amber-400/25 rounded-full blur-md animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Enhanced Hero Section */}
          <div
            className={`text-center px-6 mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-sky-500/10 border border-blue-200/50 text-blue-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              {t("translation.badge")}
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 bg-clip-text text-transparent">
              {t("translation.title")}
              <span className="block bg-gradient-to-r p-5 from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                {t("translation.subtitle")}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-sm">
              {t("translation.description")}
            </p>
          </div>

          {/* Enhanced Features Section */}
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {features.map((feature, i) => (
              <div key={i} className={`group relative ${feature.delay}`}>
                {/* Background with gold accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-blue-50/80 rounded-2xl shadow-lg border border-blue-100/50 backdrop-blur-sm transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500 ease-out"></div>

                {/* Gold top border */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full group-hover:w-3/4 transition-all duration-500 ease-out"></div>

                <div className="relative z-10 p-6 text-center h-full">
                  {/* Animated Icon Container */}
                  <div
                    className={`relative mb-4 transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative bg-gradient-to-br ${feature.gradient} p-3 rounded-xl shadow-lg inline-flex`}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                  </div>

                  <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-blue-700 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Documents Grid Section */}
          <div
            className={`my-16 transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 p-3 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                {t("translation.documents.title")}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("translation.documents.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100/50 hover:border-yellow-300/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div
            className={`text-center py-16 rounded-3xl relative overflow-hidden transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Background with blue and gold gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600"></div>

            {/* Gold accent elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-400/15 rounded-full blur-2xl"></div>

            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm"></div>

            <div className="relative z-10">
              <Award className="w-16 h-16 text-yellow-300 mx-auto mb-6 drop-shadow-lg" />

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-sm">
                {t("translation.help.title")}
              </h2>

              <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
                {t("translation.help.desc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/+201554300351"
                  target="_blank"
                  className="group relative bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-blue-900 font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transform transition-all duration-300 ease-out"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t("translation.help.button1")}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex justify-center items-center gap-6 mt-8 text-blue-100 flex-wrap">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">
                    {t("translation.trust.quality")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">
                    {t("translation.trust.certified")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">
                    {t("translation.trust.timely")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CertifiedTranslation;
