import {
  FileText,
  Download,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Documents = () => {
  const { t, isRTL } = useLanguage();

  const additionalDocuments = [
    t("document.additional.pasport"),
    t("document.additional.towImg"),
    t("document.additional.piemetrice"),
    t("document.additional.insurance"),
    t("document.additional.reserveFlight"),
    t("document.additional.profe"),
    t("document.additional.home"),
    t("document.additional.invetation"),
  ];

  return (
    <section id="requirements" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span
            className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${
              isRTL ? "font-arabic" : ""
            } font-medium mb-4`}
          >
            {t("documents.badge")}
          </span>
          <h2
            className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("documents.title")}
            {t("documents.subtitle")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto ${
              isRTL ? "font-arabic" : ""
            } leading-relaxed`}
          >
            {t("documents.description")}
          </p>
        </div>

        {/* Additional Documents Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-medium)] border border-border/50">
          <div className="text-center mb-8">
            <h3
              className={`text-2xl font-bold text-foreground mb-4 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("documents.additional.title")}
            </h3>
            <p
              className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
            >
              {t("documents.additional.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50"
              >
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <span
                  className={`text-sm ${
                    isRTL ? "font-arabic" : ""
                  } text-muted-foreground`}
                >
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-[var(--shadow-strong)] max-w-2xl mx-auto">
            <Download className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3
              className={`text-2xl lg:text-3xl font-bold mb-4 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("documents.help.title")}
            </h3>
            <p
              className={`text-lg mb-6 ${
                isRTL ? "font-arabic" : ""
              } opacity-90`}
            >
              {t("documents.help.desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`btn-accent text-lg px-6 py-3 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("documents.help.button1")}
              </button>
              <button
                className={`bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl ${
                  isRTL ? "font-arabic" : ""
                } transition-colors`}
              >
                {t("documents.help.button2")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
