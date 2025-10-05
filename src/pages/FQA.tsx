import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";

import { HelpCircle, MessageCircle, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const FAQ = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: t("faqs1.question"),
      answer: t("faqs1.answer"),
      icon: "💡",
    },
    {
      question: t("faqs2.question"),
      answer: t("faqs2.answer"),
      icon: "⚡",
    },
    {
      question: t("faqs3.question"),
      answer: t("faqs3.answer"),
      icon: "🛡️",
    },
    {
      question: t("faqs4.question"),
      answer: t("faqs4.answer"),
      icon: "💰",
    },
    {
      question: t("faqs5.question"),
      answer: t("faqs5.answer"),
      icon: "⏱️",
    },
    {
      question: t("faqs6.question"),
      answer: t("faqs6.answer"),
      icon: "👥",
    },
    {
      question: t("faqs7.question"),
      answer: t("faqs7.answer"),
      icon: "🎯",
    },
    {
      question: t("faqs8.question"),
      answer: t("faqs8.answer"),
      icon: "🌍",
    },
    {
      question: t("faqs9.question"),
      answer: t("faqs9.answer"),
      icon: "🌟",
    },
  ];

  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <section className="section-padding bg-gradient-to-br from-blue-50/50 via-gray-50 to-sky-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-400/10 to-slate-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-sky-500" />
              {t("faq.badge")}
              <Sparkles className="w-4 h-4 text-sky-500" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-yellow-500 font-arabic">
              {t("faq.title")}
              <span className="block bg-gradient-to-r p-3 from-blue-600 to-cyan-600 mt-5 bg-clip-text text-transparent">
                {t("faq.subtitle")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm">
              {t("faq.description")}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div
            className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-sky-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-2 md:p-8 shadow-2xl shadow-blue-500/10 border border-white/50 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/5"></div>

                <Accordion
                  type="multiple"
                  className="space-y-4 relative z-10"
                  value={openItems}
                  onValueChange={setOpenItems}
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-blue-200/50 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group overflow-hidden"
                    >
                      {/* Animated Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <AccordionTrigger className="text-right hover:no-underline py-6 px-6 relative z-10 group-hover:shadow-sm transition-shadow duration-300">
                        <div className="flex items-center justify-between w-full gap-4">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{faq.icon}</span>
                              <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 group-hover:text-blue-600 transition-colors duration-300" />
                            </div>
                            <span className="text-lg font-semibold text-gray-800 font-arabic text-right flex-1 group-hover:text-blue-700 transition-colors duration-300">
                              {faq.question}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="text-right pb-6 pt-2 px-6 relative z-10">
                        <div className="border-r-2 border-blue-300/50 mr-4">
                          <p className="text-gray-600 leading-relaxed font-arabic pr-4 text-lg group-hover:text-gray-700 transition-colors duration-300">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>

                      {/* Animated Indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500 group-data-[state=open]:w-full transition-all duration-500 ease-out"></div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Contact CTA */}
            <div
              className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-sky-400/30 rounded-full blur-sm animate-pulse delay-500"></div>

                <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl shadow-blue-500/30 max-w-2xl mx-auto relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="relative inline-block mb-4">
                      <MessageCircle className="w-12 h-12 text-sky-300 drop-shadow-sm" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-400 rounded-full animate-ping"></div>
                    </div>

                    <h3 className="text-2xl lg:text-4xl font-bold mb-4 font-arabic drop-shadow-sm">
                      {t("faq.cta.title")}
                    </h3>
                    <p className="text-lg mb-6 font-arabic opacity-90 drop-shadow-sm leading-relaxed">
                      {t("faq.cta.desc")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://wa.me/+201554300351"
                        target="__blanck"
                        className="text-center group relative items-center gap-2 bg-sky-400 hover:bg-sky-300 text-gray-100 font-semibold text-lg px-8 py-4 rounded-2xl font-arabic shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out"
                      >
                        {t("faq.cta.button1")}
                        <div className="w-0 h-0.5 bg-blue-700 absolute bottom-2 left-4 group-hover:w-8 transition-all duration-300 ease-out"></div>
                      </a>
                    </div>
                  </div>
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

export default FAQ;
