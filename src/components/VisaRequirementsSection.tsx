import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileCheck,
  FileText,
  CreditCard,
  Fingerprint,
  ShieldCheck,
  Clock,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function VisaRequirementsSeection() {
  const { isRTL, t } = useLanguage();

  // Visa requirements in Arabic
  const requirements = [
    {
      title: t("hotel.requirements1.title"),
      details: t("hotel.requirements1.details"),
      icon: <FileCheck className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements2.title"),
      details: t("hotel.requirements2.details"),
      icon: <FileText className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements3.title"),
      details: t("hotel.requirements3.details"),
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements4.title"),
      details: t("hotel.requirements4.details"),
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements5.title"),
      details: t("hotel.requirements5.details"),
      icon: <Fingerprint className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements6.title"),
      details: t("hotel.requirements6.details"),
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements7.title"),
      details: t("hotel.requirements7.details"),
      icon: <FileText className="w-5 h-5 text-blue-500" />,
    },
    {
      title: t("hotel.requirements8.title"),
      details: t("hotel.requirements8.details"),
      icon: <Clock className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <section className="max-w-4xl m-auto p-10">
      <h2
        className={`text-3xl lg:text-4xl font-bold text-center mb-10 bg-gradient-to-r p-5 from-blue-500 to-blue-400 bg-clip-text text-transparent ${
          isRTL ? "font-arabic" : ""
        }`}
      >
       {t("hotel.requirements-slug")}
      </h2>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-2 md:p-8 shadow-[var(--shadow-medium)] border border-border/50">
        <Accordion type="single" collapsible className="space-y-4">
          {requirements.map((req, index) => (
            <AccordionItem
              key={index}
              value={`req-${index}`}
              className="border border-blue-200/50 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group overflow-hidden relative"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <AccordionTrigger className="text-right hover:no-underline py-6 px-6 relative z-10 group-hover:shadow-sm transition-shadow duration-300">
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex items-center gap-3">{req.icon}</div>
                  <span className="text-lg font-semibold text-gray-800 font-arabic text-right flex-1 group-hover:text-blue-700 transition-colors duration-300">
                    {req.title}
                  </span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-right pb-6 pt-2 px-6 relative z-10">
                <div className="border-r-2 border-blue-300/50 mr-4 whitespace-pre-line">
                  <p className="text-gray-600 leading-relaxed font-arabic pr-4 text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {req.details}
                  </p>
                </div>
              </AccordionContent>

              {/* Animated indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 group-data-[state=open]:w-full transition-all duration-500 ease-out"></div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default VisaRequirementsSeection;
