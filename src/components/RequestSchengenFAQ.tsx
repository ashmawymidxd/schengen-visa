import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Sparkles, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

function RequestSchengenFAQ() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: t("request.faqs1.question"),
      answer: t("request.faqs1.answer"),
      icon: "⚡",
    },
    {
      question: t("request.faqs2.question"),
      answer: t("request.faqs2.answer"),
      icon: "💬",
    },
    {
      question: t("request.faqs3.question"),
      answer: t("request.faqs3.answer"),
      icon: "🆘",
    },
  ];

  return (
    <div
      className={` mx-auto p-6 lg:p-10 transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200/50 text-blue-600 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm">
          <HelpCircle className="w-5 h-5" />
          {t("request.faqTitle")}
          <MessageCircle className="w-5 h-5" />
        </div>
        <h2 className="text-4xl lg:text-5xl p-5 font-bold  mb-4 font-arabic bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {t("request.faqHeading")}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-arabic leading-relaxed">
          {t("request.faqSubtitle")}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="relative">
        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-400/20 rounded-full blur-lg"></div>
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-blue-400/20 rounded-full blur-lg"></div>

        <div className="max-w-4xl m-auto bg-gradient-to-br from-white/80 via-white/60 to-blue-50/30 backdrop-blur-md rounded-3xl p-2 md:p-8 shadow-2xl shadow-blue-500/10 border border-white/50 relative overflow-hidden">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent opacity-30"></div>

          <Accordion
            type="single"
            collapsible
            className="space-y-4 relative z-10"
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

          {/* Footer CTA */}
          <div className="text-center mt-8 pt-8 border-t border-blue-200/30">
            <p className="text-gray-600 font-arabic mb-4">
              {t("request.faqFooter")}
            </p>
            <a
              href="tel:+201554300351"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-2xl font-arabic font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out overflow-hidden"
            >
              <MessageCircle className="w-5 h-5" />
              {t("request.contactButton")}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: Sparkles,
            title: t("request.info1.title"),
            description: t("request.info1.desc"),
            color: "from-blue-500 to-blue-600",
          },
          {
            icon: HelpCircle,
            title: t("request.info2.title"),
            description: t("request.info2.desc"),
            color: "from-blue-400 to-blue-500",
          },
          {
            icon: MessageCircle,
            title: t("request.info3.title"),
            description: t("request.info3.desc"),
            color: "from-blue-500 to-blue-600",
          },
        ].map((item, index) => (
          <div key={index} className="group text-center">
            <div className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/30 hover:border-blue-300/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 ease-out transform group-hover:-translate-y-1">
              <div className="relative inline-block mb-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>
                <div
                  className={`relative bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 font-arabic mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 font-arabic text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestSchengenFAQ;