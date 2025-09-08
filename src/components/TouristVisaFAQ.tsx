import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
function TouristVisaFAQ() {
  const { t, isRTL } = useLanguage();
  const faqs = [
    {
      question: t("tourist-visa.faqs1.question"),
      answer: t("tourist-visa.faqs1.answer"),
    },
    {
      question: t("tourist-visa.faqs2.question"),
      answer: t("tourist-visa.faqs2.answer"),
    },
    {
      question: t("tourist-visa.faqs3.question"),
      answer: t("tourist-visa.faqs3.answer"),
    },
    {
      question: t("tourist-visa.faqs4.question"),
      answer: t("tourist-visa.faqs4.answer"),
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
              className="border border-border/30 rounded-xl px-6 bg-white/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-right hover:no-underline py-6">
                <div className="flex items-center gap-4 w-full">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg font-semibold text-foreground font-arabic text-right flex-1">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-right pb-6 pt-2">
                <p className="text-muted-foreground leading-relaxed font-arabic pr-9">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default TouristVisaFAQ;
