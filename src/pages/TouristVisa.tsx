import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import TouristVisaFAQ from "@/components/TouristVisaFAQ";
import { CircleCheckIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const TouristVisa = () => {
  const { t, isRTL } = useLanguage();
  const additionalDocuments = [
    t("tourist.why-us-answer1"),
    t("tourist.why-us-answer2"),
    t("tourist.why-us-answer3"),
    t("tourist.why-us-answer4"),
    t("tourist.why-us-answer5"),
  ];
  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[var(--shadow-medium)] border border-border/50">
            <div className="text-center mb-8">
              <h3
                className={`text-2xl font-bold text-foreground mb-4 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("tourist.why-us")}
              </h3>
              <p
                className={`text-muted-foreground ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("tourist.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50"
                >
                  <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
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
        </div>
      </section>
      <TouristVisaFAQ/>
      <Footer />
    </div>
  );
};

export default TouristVisa;
