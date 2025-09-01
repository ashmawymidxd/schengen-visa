import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const FAQ = () => {
  const { t, isRTL } = useLanguage();
  const faqs = [
    {
      question: t("faqs1.question"),
      answer: t("faqs1.answer"),
    },
    {
      question: t("faqs2.question"),
      answer: t("faqs2.answer"),
    },
    {
      question: t("faqs3.question"),
      answer: t("faqs3.answer"),
    },
    {
      question: t("faqs4.question"),
      answer: t("faqs4.answer"),
    },
    {
      question: t("faqs5.question"),
      answer: t("faqs5.answer"),
    },
    {
      question: t("faqs6.question"),
      answer: t("faqs7.answer"),
    },
    {
      question: t("faqs7.question"),
      answer: t("faqs7.answer"),
    },
    {
      question: t("faqs8.question"),
      answer: t("faqs8.answer"),
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-arabic font-medium mb-4">
            {t("faq.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-arabic">
            {t("faq.title")}
            <span className="block text-primary"> {t("faq.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed">
            {t("faq.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-[var(--shadow-strong)] max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-arabic">
                {t("faq.cta.title")}
              </h3>
              <p className="text-lg mb-6 font-arabic opacity-90">
                {t("faq.cta.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-accent text-lg px-6 py-3 font-arabic">
                  {t("faq.cta.button1")}
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-arabic transition-colors">
                  {t("faq.cta.button2")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
