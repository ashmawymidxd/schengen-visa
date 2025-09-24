import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
function FlightReservationFAQ() {
  const { t, isRTL } = useLanguage();
  const faqs = [
    {
      question: t("flight.reservation-visa.faqs1.question"),
      answer: t("flight.reservation-visa.faqs1.answer"),
      icon: "✈️",
    },
    {
      question: t("flight.reservation-visa.faqs2.question"),
      answer: t("flight.reservation-visa.faqs2.answer"),
      icon: "🛬",
    },
    {
      question: t("flight.reservation-visa.faqs3.question"),
      answer: t("flight.reservation-visa.faqs3.answer"),
      icon: "📅",
    },
  ];
  return (
    <div className="max-w-4xl m-auto p-10">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-medium)] border border-border/50">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-emerald-200/50 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <AccordionTrigger className="text-right hover:no-underline py-6 px-6 relative z-10 group-hover:shadow-sm transition-shadow duration-300">
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{faq.icon}</span>
                      <HelpCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 group-hover:text-amber-500 transition-colors duration-300" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 font-arabic text-right flex-1 group-hover:text-emerald-700 transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="text-right pb-6 pt-2 px-6 relative z-10">
                <div className="border-r-2 border-amber-300/50 mr-4">
                  <p className="text-gray-600 leading-relaxed font-arabic pr-4 text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>

              {/* Animated Indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 group-data-[state=open]:w-full transition-all duration-500 ease-out"></div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FlightReservationFAQ;
