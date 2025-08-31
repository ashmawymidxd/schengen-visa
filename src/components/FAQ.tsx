import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "ما هي مدة معالجة طلب فيزا الشنغن؟",
      answer: "عادة تتراوح مدة معالجة الطلب بين 7-15 يوم عمل من تاريخ تقديم الطلب في السفارة. في بعض الحالات الخاصة قد تصل إلى 30 يوم، وفي حالات الطوارئ يمكن معالجتها خلال 3 أيام عمل مقابل رسوم إضافية."
    },
    {
      question: "ما هي نسبة قبول طلبات فيزا الشنغن؟",
      answer: "نحقق نسبة نجاح تصل إلى 95% لجميع طلبات عملائنا. هذا بفضل خبرتنا الواسعة ومراجعتنا الدقيقة لجميع المستندات قبل التقديم، بالإضافة إلى متابعتنا المستمرة مع السفارات."
    },
    {
      question: "ماذا يحدث لو تم رفض طلبي؟",
      answer: "في حالة الرفض النادرة، نقوم بمراجعة أسباب الرفض مع العميل ونعيد تقديم الطلب مجاناً بعد معالجة الأسباب. كما نقدم ضمان استرداد جزئي للرسوم في حالات معينة حسب شروط الخدمة."
    },
    {
      question: "هل يمكنني السفر إلى أكثر من دولة بتأشيرة واحدة؟",
      answer: "نعم، تأشيرة الشنغن تسمح لك بالسفر بحرية إلى جميع الـ 26 دولة في منطقة الشنغن بتأشيرة واحدة فقط. يمكنك البقاء لمدة تصل إلى 90 يوماً خلال فترة 180 يوم والتنقل بين الدول بدون قيود."
    },
    {
      question: "ما هي مدة صلاحية تأشيرة الشنغن؟",
      answer: "تختلف مدة صلاحية التأشيرة حسب نوعها وظروف المتقدم. عادة تكون صالحة لمدة 90 يوماً خلال فترة 180 يوم. في بعض الحالات يمكن الحصول على تأشيرات متعددة الدخول صالحة لسنة أو أكثر."
    },
    {
      question: "كم تكلف خدماتكم لاستخراج فيزا الشنغن؟",
      answer: "تتراوح تكلفة خدماتنا بين 800-1500 ريال سعودي حسب نوع الخدمة والدولة المختارة، بالإضافة إلى رسوم السفارة البالغة 80 يورو. نقدم استشارة مجانية لتحديد التكلفة الدقيقة حسب حالتك."
    },
    {
      question: "هل تقدمون خدمة متابعة الطلب؟",
      answer: "نعم، نقدم خدمة متابعة شاملة من لحظة تقديم الطلب حتى استلام التأشيرة. ستحصل على تحديثات منتظمة عبر الرسائل النصية والواتساب، كما يمكنك متابعة حالة طلبك عبر موقعنا الإلكتروني."
    },
    {
      question: "ما هي المستندات الأساسية المطلوبة؟",
      answer: "المستندات الأساسية تشمل: جواز سفر ساري، صور شخصية، كشف حساب بنكي، خطاب عمل، تأمين صحي، حجوزات طيران وفنادق، ونماذج الطلب المكتملة. قد تختلف المتطلبات قليلاً حسب الدولة المختارة."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-arabic font-medium mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-arabic">
            أجوبة على أكثر الأسئلة
            <span className="block text-primary">شيوعاً</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed">
            إجابات شاملة ووافية على جميع الأسئلة التي قد تخطر ببالك حول فيزا الشنغن وخدماتنا
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
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-lg mb-6 font-arabic opacity-90">
                فريقنا المختص مستعد للإجابة على جميع استفساراتك والمساعدة في حل أي مشكلة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-accent text-lg px-6 py-3 font-arabic">
                  تواصل معنا الآن
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-arabic transition-colors">
                  واتساب مباشر
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