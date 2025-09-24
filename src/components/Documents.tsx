import {
  FileText,
  Download,
  FileCheck,
  UserCheck,
  ShieldCheck,
  Plane,
  Home,
  MailCheck,
  CalendarCheck,
  BadgeCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const Documents = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const documentTypes = [
    {
      text: t("document.additional.pasport"),
      icon: FileCheck,
      gradient: "from-emerald-500 to-green-500",
      description: "Passport verification"
    },
    {
      text: t("document.additional.towImg"),
      icon: UserCheck,
      gradient: "from-amber-500 to-yellow-500",
      description: "Photograph requirements"
    },
    {
      text: t("document.additional.piemetrice"),
      icon: ShieldCheck,
      gradient: "from-emerald-600 to-teal-500",
      description: "Biometric data"
    },
    {
      text: t("document.additional.insurance"),
      icon: BadgeCheck,
      gradient: "from-amber-600 to-orange-500",
      description: "Insurance coverage"
    },
    {
      text: t("document.additional.reserveFlight"),
      icon: Plane,
      gradient: "from-green-600 to-emerald-600",
      description: "Travel arrangements"
    },
    {
      text: t("document.additional.profe"),
      icon: CalendarCheck,
      gradient: "from-yellow-600 to-amber-600",
      description: "Professional documents"
    },
    {
      text: t("document.additional.home"),
      icon: Home,
      gradient: "from-emerald-700 to-green-700",
      description: "Accommodation proof"
    },
    {
      text: t("document.additional.invetation"),
      icon: MailCheck,
      gradient: "from-amber-700 to-yellow-700",
      description: "Invitation letters"
    },
  ];

  return (
    <section id="requirements" className="section-padding bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-hidden">

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200/50 text-emerald-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {t("documents.badge")}
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold p-5 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            <span>{t("documents.title")}</span>
            <span className="mx-3 bg-gradient-to-r from-emerald-600 mt-5 to-green-600 bg-clip-text text-transparent">
              {t("documents.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            {t("documents.description")}
          </p>
        </div>

        {/* Additional Documents Section */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-emerald-500/10 border border-white/20 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-full">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold  bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {t("documents.additional.title")}
              </h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("documents.additional.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentTypes.map((doc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 ease-out"></div>
                <div className="relative z-10 flex items-center gap-4 p-4 rounded-xl">
                  {/* Icon with Gradient Background */}
                  <div className={`relative transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${doc.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className={`relative bg-gradient-to-br ${doc.gradient} p-3 rounded-xl shadow-lg`}>
                      <doc.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300 block truncate">
                      {doc.text}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300 block mt-1">
                      {doc.description}
                    </span>
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${doc.gradient} rounded-full group-hover:w-full transition-all duration-500 ease-out`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-400/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>
            
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl shadow-emerald-500/30 max-w-2xl mx-auto relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-4xl font-bold mb-4 drop-shadow-sm">
                  {t("documents.help.title")}
                </h3>
                <p className="text-lg mb-6 opacity-90 drop-shadow-sm max-w-md mx-auto">
                  {t("documents.help.desc")}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#requirements"
                    className="group relative inline-flex items-center gap-2 bg-white text-emerald-600 hover:text-emerald-700 text-lg px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out"
                  >
                    {t("documents.help.button1")}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                  
                  <a href="https://wa.me/+201554300351" target="__blanck" className="text-center group relative inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-2xl font-semibold backdrop-blur-sm transition-all duration-300 ease-out">
                    {t("documents.help.button2")}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-200/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-20 right-10 w-16 h-16 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default Documents;