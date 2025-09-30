import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ar");

  const translations = {
    ar: {
      // Header
      "header.home": "الرئيسية",
      "header.services": "خدماتنا",
      "header.about": "من نحن",
      "header.faq": "الأسئلة الشائعة",
      "header.contact": "اتصل بنا",
      "header.call_now": "اتصل الآن",
      "header.request_service": "اطلب الخدمة",
      "header.company_name": "فيرست محطة",
      "header.company_tagline": "خبراء استخراج التأشيرات",
      "header.service1": "اطلب الشنغن",
      "header.service2": "التاشيرات السياحية",
      "header.service3": "حجز الطياران",
      "header.service4": "حجز الفنادق",

      // Hero
      "hero.badge": "✈️ خبراء فيزا الشنغن في السعودية",
      "hero.subtitle":
        "سواء كانت رحلتك سیاحة، عمل أو مغامرة، نوفر لك كل ما تحتاجه لتسافر براحة وثقة",
      "hero.description": `في فيرست محطة لخدمات التأشیرات، نؤمن أن السفر ھو بدایة لاكتشاف العالم وصناعة ذكریات لا تُنسى. لذلك وفرنا حلول متكاملة وسھلة
        لكل ما یخص التأشیرات السیاحیة، طلبات الشنغن، وحجوزات طيران السفر، لنمنحك تجربة خالیة من التعقید وبأعلى درجات الاحترافیة.
        ھدفنا في فيرست محطة لخدمات التأشیرات أن نكون شریكك الأول في رحلتك، من الفكرة وحتى الوصول`,
      "hero.request_now": "اطلب الخدمة الآن",
      "hero.free_consultation": "استشارة مجانية",
      "hero.stats.clients": "+5000",
      "hero.stats.clients_label": "عميل راضٍ",
      "hero.stats.success": "95%",
      "hero.stats.success_label": "معدل النجاح",
      "hero.stats.processing": "7 أيام",
      "hero.stats.processing_label": "متوسط المعالجة",
      "hero.scroll_down": "النزول الي الاسفل",

      // Services
      "services.badge": "خدماتنا المتكاملة",
      "services.title": "نقدم لك خدمات شاملة",
      "services.subtitle": "لاستخراج فيزا الشنغن",
      "services.description":
        "من الاستشارة الأولى حتى الحصول على التأشيرة، نحن معك في كل خطوة لضمان نجاح طلبك",
      "services.consultation.title": "طلب الشنغن",
      "services.appointment.title": "التأشیرات السیاحیة",
      "services.forms.title": "حجوزات الطیران",
      "services.insurance.title": "حجوزات الفنادق",
      "services.cta.title": "هل تريد البدء الآن؟",
      "services.cta.desc":
        "احصل على استشارة مجانية وابدأ رحلتك نحو الحصول على فيزا الشنغن اليوم",
      "services.cta.button": "احصل على استشارة مجانية",

      // Steps
      "steps.badge": "كيف نعمل",
      "steps.title": "خطوات الحصول على",
      "steps.subtitle": "فيزا الشنغن",
      "steps.description":
        "عملية بسيطة ومنظمة من خمس خطوات لضمان حصولك على التأشيرة بأسرع وقت وأعلى معدل نجاح",
      "steps.step1.title": "استشارة سریعة",
      "steps.step1.desc": "نفھم احتیاجاتك ونحدد وجھتك",
      "steps.step2.title": "تجھیز الأوراق",
      "steps.step2.desc": "نرتب مستنداتك بدقة واحترافیة",
      "steps.step3.title": "متابعة الطلب",
      "steps.step3.desc": "نتابع مع السفارات خطوة بخطوة",
      "steps.step4.title": "تأكید الحجوزات",
      "steps.step4.desc": "نوفر تذاكر الطیران والفنادق بأفضل الأسعار",
      "steps.step5.title": "تسلیم جاھز",
      "steps.step5.desc": "تستلم كل أوراقك مكتملة وجاھزة للسفر بثقة.",
      "steps.bottom_cta.title": "جاهز لبدء رحلتك؟",
      "steps.bottom_cta.desc":
        "ابدأ معنا اليوم واحصل على فيزا الشنغن بأسرع وقت وأعلى معدل نجاح",
      "steps.bottom_cta.button": "ابدأ الآن - استشارة مجانية",

      // Request Service
      "documents.badge": "اطلب الشنغن",
      "documents.title": "ما هي ",
      "documents.subtitle": "الشنغن",
      "documents.description":
        " تأشيرة الشنغن هي تأشيرة موحدة تتيح لك السفر إلى 29 دولة أوروبية باستخدام تأشيرة واحدة فقط، مما يجعلها الخيار الأمثل للرحلات السياحية أو العمل.",
      "documents.additional.title": "الأوراق المطلوبة",
      "documents.additional.desc":
        "قد تحتاج هذه المستندات حسب حالتك الشخصية والعائلية",
      "document.additional.pasport": "جواز سفر ساري المفعول",
      "document.additional.towImg": "صورتان شخصيتان بحجم صور جواز السفر",
      "document.additional.piemetrice": "البصمات (البيومترية)",
      "document.additional.insurance": "معاير السفر الطبية",
      "document.additional.reserveFlight": "حجز طيران ذهاب وعودة",
      "document.additional.profe":
        "إثبات القدرة المالية (كشف حساب بنكي أو شهادة راتب)",
      "document.additional.home": "إثبات السكن (حجز فندق أو مستند إقامة)",
      "document.additional.invetation": "خطاب دعوة (إن وجد)",
      "documents.help.title": "هل تحتاج مساعدة في التحضير؟",
      "documents.help.desc":
        "نحن هنا لمساعدتك في تحضير وتنظيم جميع المستندات المطلوبة بشكل صحيح",
      "documents.help.button1": "قائمة المستندات PDF",
      "documents.help.button2": "اطلب المساعدة",
      "document.description1": "توثيق جواز السفر",
      "document.description2": "الصور المطلوبة",
      "document.description3": "بينات البصمة",
      "document.description4": "تغطية المعاير ",
      "document.description5": "ترتيبات السفر ",
      "document.description6": "مستندات احترافية ",
      "document.description7": "اثباتات",
      "document.description8": "خطابات الدعوة ",
      "request.faqs1.question": "كم مدة صلاحية تأشيرة الشنغن؟",
      "request.faqs1.answer":
        "عادة من 90 يومًا إلى 180 يومًا حسب نوع التأشيرة.",
      "request.faqs2.question": "هل يمكن التقديم بدون حجز طيران وفندق؟",
      "request.faqs2.answer": " لا، الحجوزات مطلوبة ضمن المستندات الأساسية",

      "request.faqs3.question": "ما هي الشروط للحصول على تأشيرة شنغن؟",
      "request.faqs3.answer": `أن يكون جواز السفر ساري المفعول لمدة لا تقل عن 3 أشهر بعد تاريخ العودة.
      تقديم خطة سفر واضحة (تذاكر طيران ذهاب وعودة + حجز فندقي).
      إثبات القدرة المالية (كشف حساب بنكي يغطي تكاليف الرحلة).
      تأمين طبي للسفر يغطي فترة الإقامة داخل دول الشنغن.
      سجل جنائي نظيف (قد تطلب بعض السفارات شهادة عدم محكومية).
      أسباب قوية للعودة إلى بلدك (وظيفة، التزامات أسرية، ممتلكات...).
      `,
      "request.faqTitle": "أسئلة شائعة",
      "request.faqHeading": "أسئلة متكررة",
      "request.faqSubtitle":
        "ابحث عن إجابات للأسئلة الأكثر شيوعاً حول تأشيرة الشنغن",
      "request.faqFooter": "لم تجد إجابتك؟ نحن هنا لمساعدتك",
      "request.contactButton": "اتصل بنا",
      "request.info1.title": "دعم فوري",
      "request.info1.desc": "ردود سريعة خلال 24 ساعة",
      "request.info2.title": "خبراء معتمدون",
      "request.info2.desc": "فريق من المحترفين المعتمدين",
      "request.info3.title": "متاح 24/7",
      "request.info3.desc": "دعم مستمر على مدار الساعة",

      // tourist visa service
      "tourist.description":
        "نقدّم في فيرست محطة خدمة استخراج التأشيرات السياحية لمجموعة واسعة من الوجهات العالمية، مع متابعة دقيقة لكل تفاصيل الطلب لضمان تجربة سفر مريحة وخالية من المتاعب. هدفنا أن نسهّل عليك كل الإجراءات، بحيث تركز فقط على الاستمتاع برحلتك.",

      "tourist.why-us": "ما يميزنا",
      "tourist.why-us-answer1": "سرعة في تجهيز الملفات والتقديم.",
      "tourist.badge1": "سرعة المعالجة",
      "tourist.why-us-answer2": "متابعة مستمرة مع السفارات والجهات الرسمية.",
      "tourist.badge2": "الامان والموثقية",
      "tourist.why-us-answer3":
        "استشارات مخصصة لاختيار الوجهة المناسبة حسب احتياجاتك.",
      "tourist.badge3": "كفات الوقت",
      "tourist.why-us-answer4":
        " رفع فرص قبول التأشيرة عبر مراجعة دقيقة للأوراق.",
      "tourist.badge4": "كادر خبير",
      "tourist.why-us-answer5":
        "أسعار مناسبة وخدمة دعم متوفرة للإجابة على جميع استفساراتك.",
      "tourist.badge5": "خدمات ممتاذة",
      "tourist-visa.faqs1.question": "كم تستغرق مدة استخراج التأشيرة السياحية؟",
      "tourist-visa.faqs1.answer":
        " تختلف من دولة لأخرى، وتتراوح عادة بين 3 أيام و3 أسابيع.",

      "tourist-visa.faqs2.question": "هل نسبة القبول مضمونة؟",
      "tourist-visa.faqs2.answer":
        " نحن نساعدك في تجهيز الأوراق بشكل احترافي لزيادة فرص القبول، لكن القرار النهائي يعود إلى السفارة.",

      "tourist-visa.faqs3.question": "هل أحتاج إلى حضور مقابلة شخصية؟",
      "tourist-visa.faqs3.answer":
        " في بعض الدول مثل الولايات المتحدة وكندا، المقابلة الشخصية إلزامية، بينما في دول أخرى قد لا تكون مطلوبة.",

      "tourist-visa.faqs4.question":
        "هل يمكن التقديم لعائلة أو مجموعة في نفس الوقت؟",
      "tourist-visa.faqs4.answer":
        " نعم، يمكننا تجهيز طلبات جماعية للعائلات أو المجموعات السياحية.",

      // Flight Reservation
      "flight.reservation.description":
        "في فيرست محطة نوفر لك خدمة حجز تذاكر الطيران إلى جميع الوجهات العالمية بأفضل الأسعار وبأعلى مستوى من المرونة. سواء كنت تبحث عن رحلة اقتصادية أو درجة رجال الأعمال أو الأولى، نساعدك في إيجاد الخيار الأمثل لرحلتك.",

      "flight.reservation.why-us": "ما يميزنا",
      "flight.reservation.why-us-answer1":
        "أسعار تنافسية على جميع شركات الطيران.",
      "flight.reservation.why-us-answer2":
        "خيارات متعددة تناسب جميع الميزانيات.",
      "flight.reservation.why-us-answer3":
        "إمكانية تعديل أو إلغاء الحجز بسهولة.",
      "flight.reservation.why-us-answer4": "دعم فني متواصل لمساعدتك في أي وقت.",
      "flight.reservation.why-us-answer5":
        "حجوزات مؤكدة مع تذكيرات بمواعيد السفر.",
      "flight.reservation-visa.faqs1.question":
        "هل أستطيع تغيير موعد الرحلة بعد الحجز؟",
      "flight.reservation-visa.faqs1.answer":
        " تختلف من دولة لأخرى، وتتراوح عادة بين 3 أيام و3 أسابيع.",

      "flight.reservation-visa.faqs2.question":
        "هل تقدمون عروض خاصة للرحلات الجماعية؟",
      "flight.reservation-visa.faqs2.answer":
        " نعم، نوفر أسعارًا خاصة للعائلات والمجموعات.",

      "flight.reservation-visa.faqs3.question":
        "هل أستطيع اختيار مقعدي مسبقًا؟",
      "flight.reservation-visa.faqs3.answer":
        " بالتأكيد، يمكنك اختيار مقعدك عند الحجز أو لاحقًا حسب توافر المقاعد.",

      "flight.reservation.why-us-desc1": "حجوزات طيران آمنة وموثقة",
      "flight.reservation.why-us-desc2": "معالجة سريعة خلال ساعات",
      "flight.reservation.why-us-desc3": "استشارات سفر من خبراء",
      "flight.reservation.why-us-desc4": "تغطية واسعة لشركات الطيران",
      "flight.reservation.why-us-desc5": "خيارات تواريخ مرنة",
      "flight.reservation.why-us-desc6": "ضمان أفضل سعر",

      "flight.plain.reservations.title": "مستعد لحجز رحلتك؟",
      "flight.plain.reservations.description":
        "احصل على أفضل العروض وامنح حجز رحلتك اليوم!",
      "flight.plain.reservations.btn": " احجز الآن",
      // Hotel Reservation
      "hotel.reservation.description":
        "مع فيرست محطة أصبح حجز فندقك أسهل من أي وقت مضى. نوفر خيارات متنوعة تناسب جميع الميزانيات، من الفنادق الاقتصادية إلى المنتجعات الفاخرة، مع تأكيد فوري وأسعار تنافسية.",

      "hotel.reservation.why-us": "شبكة واسعة من الفنادق حول العالم.",
      "hotel.reservation.why-us-answer1": "شبكة واسعة من الفنادق حول العالم.",
      "hotel.reservation.why-us-answer2": "أسعار حصرية تنافسية.",
      "hotel.reservation.why-us-answer3":
        "خيارات تناسب كل الميزانيات (اقتصادي – متوسط – فاخر).",
      "hotel.reservation.why-us-answer4":
        "إمكانية تعديل أو إلغاء الحجز حسب سياسة الفندق",
      "hotel.reservation.why-us-answer5":
        " دعم متواصل لمتابعة أي طلب أو استفسار.",
      "hotel.reservation.faqs1.question":
        "هل يمكنني إلغاء الحجز واسترداد المبلغ؟",
      "hotel.reservation.faqs1.answer":
        " نعم، حسب سياسة الفندق. بعض الحجوزات تكون قابلة للاسترداد والبعض الآخر لا.",

      "hotel.reservation.faqs2.question": "هل تشمل الأسعار الإفطار والضرائب؟",
      "hotel.reservation.faqs2.answer":
        " يعتمد على الفندق. نحن نوضح لك جميع التفاصيل قبل تأكيد الحجز.",

      "hotel.reservation.faqs3.question":
        "هل يمكنني الحجز لفترة طويلة (شهر أو أكثر)؟",
      "hotel.reservation.faqs3.answer":
        " نعم، نوفر خيارات للإقامات الطويلة بأسعار مميزة.",

      "hotel.reservation.why-us-desc1": "حجوزات فنادق آمنة وموثقة",
      "hotel.reservation.why-us-desc2": "معالجة سريعة خلال ساعات",
      "hotel.reservation.why-us-desc3": "استشارات سفر من خبراء",
      "hotel.reservation.why-us-desc4": "إقامة مضمونة الجودة",
      "hotel.reservation.why-us-desc5": "تأكيد فوري",

      // Countries
      "countries.visa_information": "معلومات عن فيزا الشنغن",
      "countries.badge": "الدول المتاحة",
      "countries.title": "دول منطقة الشنغن",
      "countries.subtitle": "التي نغطيها",
      "countries.description":
        "نساعدك في الحصول على تأشيرة لجميع دول منطقة الشنغن مع خبرة متخصصة في كل دولة",
      "countries.processing_time": "مدة المعالجة",
      "countries.popularity": "شعبية الوجهة",
      "countries.request_visa": "اطلب تأشيرة",
      "countries.one_visa.title": "تأشيرة واحدة لجميع دول الشنغن",
      "countries.one_visa.desc":
        "بتأشيرة شنغن واحدة، يمكنك زيارة جميع الـ 26 دولة في منطقة الشنغن بحرية تامة لمدة تصل إلى 90 يوماً في فترة 180 يوم",
      "country.norway": "النرويج",
      "country.switzerland": "سويسرا",
      "country.czech_republic": "جمهورية التشيك",
      "country.hungary": "المجر",
      "country.poland": "بولندا",
      "country.slovakia": "سلوفاكيا",
      "country.slovenia": "سلوفينيا",
      "country.latvia": "لاتفيا",
      "country.lithuania": "ليتوانيا",
      "country.estonia": "إستونيا",
      "country.malta": "مالطا",
      "country.luxembourg": "لوكسمبورغ",
      "country.finland": "فنلندا",
      "country.denmark": "الدنمارك",
      "country.sweden": "السويد",
      "country.iceland": "أيسلندا",
      "country.liechtenstein": "ليختنشتاين",
      "countries.service_providers": "مزود الخدمة",
      "countries.service_providers.description": "الشراكة مع أفخم فنادق العالم لإقامتك المثالية",
      // About
      "about.badge": "عن الشركة",
      "about.title": "لماذا اختار",
      "about.subtitle": "فيرست محطة لحجز رحلتي القادمة؟",
      "about.description":
        "لأننا مش مجرد مكتب تأشیرات أو حجوزات، إحنا شریك رحلتك من أول خطوة لحد ما توصل وجھتك. معانا ھتلاقي",
      "about.features1.title": "حلول متكاملة",
      "about.features1.description":
        "تأشیرات، حجوزات طیران، وفنادق – كل شيء في مكان واحد",

      "about.features2.title": "توفیر الوقت والجھد",
      "about.features2.description":
        "نختصر لك الإجراءات الطویلة ونقدّمھا بشكل منظم وسریع.",

      "about.features3.title": "خبرة ومعرفة",
      "about.features3.description":
        "فریق متخصص یعرف متطلبات كل سفارة وشركة طیران وفندق.",

      "about.features4.title": "أسعار تنافسیة",
      "about.features4.description":
        "نضمن لك أفضل الصفقات دون تنازل عن الجودة.",

      "about.features5.title": "دعم شخصي",
      "about.features5.description":
        "نتابع طلبك خطوة بخطوة ونكون متواجدین للإجابة على أي استفسار",

      "about.features6.title": "ثقة وأمان",
      "about.features6.description":
        "كل تعاملاتك معنا آمنة وموثوقة، لتسافر براحة بال كاملة.",

      "about.testimonialsTitle": "ماذا يقول عملاؤنا",
      "about.testimonialsSubtitle":
        "تجارب حقيقية من عملائنا الذين وثقوا بنا لاستخراج تأشيراتهم",
      "about.ctaTitle": "انضم إلى آلاف العملاء السعداء",
      "about.ctaSubtitle":
        "ابدا رحلتك نحو الحصول على فيزا الشنغن اليوم واستمتع بتجربة سفر لا تُنسى",
      "about.ctaButton": "ابدا معنا الآن",
      "about.visionTitle": "رؤيتنا ورسالتنا",
      "about.visionText1":
        "نسعى لأن نكون الخيار الأول لجميع المسافرين السعوديين للحصول على تأشيرات الشنغن بأسرع وقت وأعلى معدل نجاح.",
      "about.visionText2":
        "رسالتنا هي تسهيل رحلة السفر لعملائنا وجعل حلم زيارة أوروبا حقيقة بأقل جهد ووقت ممكن.",

      "about.testimonials.c1.name": "أحمد محمد الغامدي",
      "about.testimonials.c1.location": "الرياض",
      "about.testimonials.c1.text":
        "خدمة ممتازة وسريعة، حصلت على فيزا ألمانيا خلال أسبوع فقط. فريق محترف جداً ومتابعة مستمرة.",

      "about.testimonials.c2.name": "فاطمة عبدالله",
      "about.testimonials.c2.location": "جدة",
      "about.testimonials.c2.text":
        "كنت قلقة من إجراءات الفيزا لكن الفريق ساعدني في كل شيء. حصلت على فيزا فرنسا بدون أي مشاكل.",

      "about.testimonials.c3.name": "خالد العتيبي",
      "about.testimonials.c3.location": "الدمام",
      "about.testimonials.c3.text":
        "أفضل مكتب للتأشيرات في السعودية. خدمة عملاء راقية ونسبة نجاح عالية جداً. أنصح بهم بقوة.",
      "about.achievements.label1": "سنوات خبرة",
      "about.achievements.label2": "عميل راضي ",
      "about.achievements.label3": "معدل النجاح ",
      "about.achievements.label4": "دول نغطيها  ",

      // FAQ
      "faq.badge": "الأسئلة الشائعة",
      "faq.title": "أجوبة على أكثر الأسئلة",
      "faq.subtitle": "شيوعاً",
      "faq.description":
        "إجابات شاملة ووافية على جميع الأسئلة التي قد تخطر ببالك حول فيزا الشنغن وخدماتنا",
      "faq.cta.title": "لم تجد إجابة لسؤالك؟",
      "faq.cta.desc":
        "فريقنا المختص مستعد للإجابة على جميع استفساراتك والمساعدة في حل أي مشكلة",
      "faq.cta.button1": "تواصل معنا الآن",
      "faq.cta.button2": "واتساب مباشر",

      "faqs1.question": "ھل فيرست محطة معتمدة لدى السفارات؟",
      "faqs1.answer":
        "نعم، نحن نلتزم بجمیع الشروط والمتطلبات الرسمیة ونعمل بخبرة في تجھیز الملفات بشكل یتوافق مع معاییر السفارات.",

      "faqs2.question": "ھل یمكنني متابعة طلبي بعد التقدیم؟",
      "faqs2.answer":
        "بالتأكید، نوفر خدمة متابعة حالة الطلب خطوة بخطوة حتى استلام النتیجة",

      "faqs3.question": "ھل توفرون باقات سفر متكاملة (تأشیرة + طیران + فندق)؟",
      "faqs3.answer":
        "نعم، نوفر باقات شاملة تساعدك على تخطیط رحلتك من البدایة للنھایة بسھولة",

      "faqs4.question": "ھل ھناك رسوم استشارة منفصلة؟",
      "faqs4.answer":
        "لا، الاستشارات الأولیة مجانیة، ولا ندفع أي رسوم إلا عند بدء الإجراءات الفعلیة.",

      "faqs5.question": "ھل خدماتكم متاحة للأفراد فقط أم للشركات أیضًا؟",
      "faqs5.answer":
        "نخدم الأفراد، العائلات، والشركات التي ترغب في تنظیم سفر موظفیھا.",

      "faqs6.question": "كیف أضمن أن بیاناتي الشخصیة آمنة؟",
      "faqs6.answer":
        "نلتزم بمعاییر عالیة من الأمان والسریة، وجمیع بیاناتك تحفظ بشكل آمن ومحمیة تمامًا",

      "faqs7.question": "ھل أحتاج للحضور شخصیًا إلى المكتب؟",
      "faqs7.answer":
        "لیس دائمًا، یمكننا إنجاز معظم الإجراءات إلكترونیًا أو عبر الھاتف، إلا إذا طلبت السفارة حضورك للمقابلة.",

      "faqs8.question": "ھل یمكنكم مساعدتي في اختیار الوجھة المناسبة؟",
      "faqs8.answer":
        "نعم، نوفر استشارات شخصیة لمساعدتك في اختیار الوجھة المثالیة بناءً على میزانیتك واھتماماتك",
      "faqs9.question": "ما الذي یمیز فيرست محطة عن غیرھا؟",
      "faqs9.answer":
        "نحن نوفّر مزیجًا من الخبرة، السرعة، والأسعار التنافسیة، مع دعم شخصي یجعلك تشعر بالثقة طوال رحلتك.",

      // Contact
      "contact.badge": "اتصل بنا",
      "contact.title": "تواصل معنا",
      "contact.subtitle": "وابدأ رحلتك اليوم",
      "contact.description":
        "فريقنا مستعد للإجابة على جميع استفساراتك ومساعدتك في الحصول على فيزا الشنغن",
      "contact.info.title": "معلومات التواصل",
      "contact.phone.title": "الهاتف / واتساب",
      "contact.email.title": "البريد الإلكتروني",
      "contact.address.title": "العنوان",
      "contact.hours.title": "ساعات العمل",
      "contact.quick.title": "تواصل سريع",
      "contact.quick.whatsapp": "واتساب مباشر",
      "contact.quick.call": "اتصال مباشر",
      "contact.quick.email": "إرسال إيميل",
      "contact.map.title": "موقعنا على الخريطة",
      "contact.map.desc":
        "زرنا في مكتبنا في قلب الرياض للحصول على استشارة شخصية",
      "contact.map.button": "عرض على خرائط جوجل",
      "contact.form.title": "أرسل لنا رسالة",
      "contact.form.desc": "املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة",
      "contact.form.name": "الاسم الكامل",
      "contact.form.phone": "رقم الهاتف",
      "contact.form.email": "البريد الإلكتروني",
      "contact.form.country": "الدولة المرغوبة",
      "contact.form.message": "تفاصيل الاستفسار",
      "contact.form.send": "إرسال الرسالة",
      "contact.form.privacy":
        "🔒 نحن نحترم خصوصيتك. جميع المعلومات المرسلة محمية ولن يتم مشاركتها مع أطراف ثالثة. سنستخدم معلوماتك فقط للرد على استفسارك وتقديم خدماتنا.",
      "contact.hours.weekdays": "عدد ساعات العمل",
      "contact.hours.weekend": "نعمل 24 ساعة - علي مدار الاسبوع",
      "contact.address.line1": "الرياض - حي الملز",
      "contact.address.line2": "الرياض",
      // Footer

      "footer.home": "الرئيسية",
      "footer.services": "خدماتنا",
      "footer.steps": "كيف نعمل",
      "footer.about": "عن الشركة",

      "footer.visa_schengen": "فيزا الشنغن",
      "footer.free_consult": "استشارة مجانية",
      "footer.appointment_booking": "حجز المواعيد",
      "footer.health_insurance": "التأمين الصحي",

      "footer.terms": "الشروط والأحكام",
      "footer.privacy": "سياسة الخصوصية",
      "footer.cancellation": "سياسة الإلغاء",
      "footer.agreement": "اتفاقية الخدمة",

      "footer.enter_email": "أدخل بريدك الإلكتروني",

      "footer.company.desc":
        "شريكك الموثوق للحصول على تأشيرات الشنغن بأسرع وقت وأعلى معدل نجاح في المملكة العربية السعودية.",
      "footer.quick_links": "روابط سريعة",
      "footer.service": "خدماتنا",
      "footer.legal": "معلومات قانونية",
      "footer.follow": "تابعنا على",
      "footer.newsletter.title": "اشترك في نشرتنا الإخبارية",
      "footer.newsletter.desc":
        "احصل على آخر التحديثات حول متطلبات التأشيرات والعروض الخاصة",
      "footer.newsletter.button": "اشتراك",
      "footer.copyright": "© 2025 مكتب فيزا الشنغن. جميع الحقوق محفوظة.",
      "footer.licensed": "مرخص من وزارة التجارة السعودية",
      "footer.member": "عضو غرفة الرياض التجارية",
      "footer.address": "الرياض - حي الملز",
    },
    en: {
      // Header
      "header.home": "Home",
      "header.services": "Services",
      "header.about": "About Us",
      "header.faq": "FAQ",
      "header.contact": "Contact Us",
      "header.call_now": "Call Now",
      "header.request_service": "Request Service",
      "header.company_name": "First Mahata",
      "header.company_tagline": "Visa Experts",
      "header.service1": "ٌRequest Schengen",
      "header.service2": "Tourism Visa",
      "header.service3": "Flight Reservation",
      "header.service4": "Hotel Reservations",

      // Hero
      "hero.badge": "✈️ Schengen Visa Experts in Saudi Arabia",
      "hero.subtitle":
        "Whether your trip is for tourism, business, or adventure, we provide everything you need to travel with ease and confidence",
      "hero.description": `At First Mahata Services, we believe that travel is the beginning of discovering the world and creating unforgettable memories. That’s why we provide integrated and easy solutions for all things related to tourist visas, Schengen applications, and travel bookings, to give you a hassle-free experience with the highest professionalism.
    Our goal at First Mahata is to be your first partner in your journey, from the idea to the destination.`,
      "hero.request_now": "Request Service Now",
      "hero.free_consultation": "Free Consultation",
      "hero.stats.clients": "+5000",
      "hero.stats.clients_label": "Satisfied Clients",
      "hero.stats.success": "95%",
      "hero.stats.success_label": "Success Rate",
      "hero.stats.processing": "7 Days",
      "hero.stats.processing_label": "Avg. Processing Time",
      "hero.scroll_down": "Scroll Down",

      // Services
      "services.badge": "Our Services",
      "services.title": "Comprehensive Visa Solutions",
      "services.subtitle": "For Schengen Applications",
      "services.description":
        "From the first consultation to getting your visa, we are with you every step of the way to ensure success",
      "services.consultation.title": "Schengen Application",
      "services.appointment.title": "Tourist Visas",
      "services.forms.title": "Flight Bookings",
      "services.insurance.title": "Hotel Reservations",
      "services.cta.title": "Ready to Start?",
      "services.cta.desc":
        "Get a free consultation and begin your journey toward securing your Schengen visa today",
      "services.cta.button": "Get Free Consultation",

      // Steps
      "steps.badge": "How We Work",
      "steps.title": "Steps to Get Your",
      "steps.subtitle": "Schengen Visa",
      "steps.description":
        "A simple, organized 5-step process to guarantee you get your visa quickly and with the highest success rate",
      "steps.step1.title": "Quick Consultation",
      "steps.step1.desc":
        "We understand your needs and identify your destination",
      "steps.step2.title": "Document Preparation",
      "steps.step2.desc":
        "We organize your documents with accuracy and professionalism",
      "steps.step3.title": "Application Follow-up",
      "steps.step3.desc": "We track your case with the embassies step by step",
      "steps.step4.title": "Booking Confirmation",
      "steps.step4.desc":
        "We provide flight and hotel bookings at the best rates",
      "steps.step5.title": "Ready Delivery",
      "steps.step5.desc":
        "You receive all your documents complete and ready for travel",
      "steps.bottom_cta.title": "Ready to Begin?",
      "steps.bottom_cta.desc":
        "Start today and get your Schengen visa with speed and confidence",
      "steps.bottom_cta.button": "Start Now - Free Consultation",

      // Request Service
      "documents.badge": "Request Schengen Visa",
      "documents.title": "What is",
      "documents.subtitle": "Schengen",
      "documents.description":
        "The Schengen Visa is a unified visa that allows you to travel to 29 European countries with just one visa, making it the ideal choice for tourism or business trips.",
      "documents.additional.title": "Required Documents",
      "documents.additional.desc":
        "These documents may be required depending on your personal and family situation",
      "document.additional.pasport": "Valid Passport",
      "document.additional.towImg": "Two passport-sized photos",
      "document.additional.piemetrice": "Biometric fingerprints",
      "document.additional.insurance": "Travel medical insurance",
      "document.additional.reserveFlight": "Round-trip flight reservation",
      "document.additional.profe":
        "Proof of financial means (bank statement or salary certificate)",
      "document.additional.home":
        "Proof of accommodation (hotel booking or residence document)",
      "document.additional.invetation": "Invitation letter (if available)",
      "documents.help.title": "Need help with preparation?",
      "documents.help.desc":
        "We are here to help you prepare and organize all required documents correctly",
      "documents.help.button1": "Documents List PDF",
      "documents.help.button2": "Request Assistance",
      "document.description1": "Passport verification",
      "document.description2": "Photograph requirements",
      "document.description3": "Biometric data",
      "document.description4": "Insurance coverage",
      "document.description5": "Travel arrangements",
      "document.description6": "Professional documents",
      "document.description7": "Accommodation proof",
      "document.description8": "Invitation letters",
      "request.faqs1.question": "How long is the Schengen visa valid?",
      "request.faqs1.answer":
        "Usually from 90 to 180 days depending on the type of visa.",
      "request.faqs2.question":
        "Can I apply without flight and hotel reservations?",
      "request.faqs2.answer":
        "No, reservations are required as part of the basic documents.",
      "request.faqs3.question":
        "What are the conditions for obtaining a Schengen visa?",
      "request.faqs3.answer": `- A valid passport for at least 3 months after return date.
- Clear travel plan (round-trip flight tickets + hotel booking).
- Proof of financial means (bank statement covering trip expenses).
- Travel medical insurance covering the stay within Schengen countries.
- Clean criminal record (some embassies may require a police clearance certificate).
- Strong reasons to return to your home country (job, family obligations, property...).`,
      "request.faqTitle": "Frequently Asked Questions",
      "request.faqHeading": "Common Questions",
      "request.faqSubtitle":
        "Find answers to the most common questions about Schengen visas and our services",
      "request.faqFooter": "Didn't find your answer? We're here to help",
      "request.contactButton": "Contact Us",
      "request.info1.title": "Instant Support",
      "request.info1.desc": "Quick responses within 24 hours",
      "request.info2.title": "Certified Experts",
      "request.info2.desc": "A team of certified professionals",
      "request.info3.title": "Available 24/7",
      "request.info3.desc": "Continuous support around the clock",

      // Tourist Visa Service
      "tourist.description":
        "At First Mahata, we provide tourist visa services for a wide range of global destinations, with careful follow-up on every detail of your application to ensure a smooth and hassle-free travel experience. Our goal is to simplify all procedures so you can focus only on enjoying your trip.",
      "tourist.why-us": "Why Choose Us",
      "tourist.why-us-answer1": "Fast processing of files and applications.",
      "tourist.badge1": "Fast Processing",
      "tourist.badge2": "Secure & Reliable",
      "tourist.badge3": "Time Efficient",
      "tourist.badge4": "Expert Team",
      "tourist.badge5": "Premium Service",
      "tourist.why-us-answer2":
        "Continuous follow-up with embassies and official authorities.",
      "tourist.why-us-answer3":
        "Personalized consultations to choose the destination that suits your needs.",
      "tourist.why-us-answer4":
        "Increased chances of approval through thorough document review.",
      "tourist.why-us-answer5":
        "Affordable prices and dedicated support available to answer all your questions.",
      "tourist-visa.faqs1.question":
        "How long does it take to issue a tourist visa?",
      "tourist-visa.faqs1.answer":
        "It varies from country to country, usually between 3 days and 3 weeks.",
      "tourist-visa.faqs2.question": "Is visa approval guaranteed?",
      "tourist-visa.faqs2.answer":
        "We help you prepare your documents professionally to increase your chances, but the final decision lies with the embassy.",
      "tourist-visa.faqs3.question":
        "Do I need to attend a personal interview?",
      "tourist-visa.faqs3.answer":
        "In some countries like the US and Canada, the interview is mandatory, while in others it may not be required.",
      "tourist-visa.faqs4.question":
        "Can I apply for a family or group at the same time?",
      "tourist-visa.faqs4.answer":
        "Yes, we can prepare group applications for families or tourist groups.",

      // Flight Reservation
      "flight.reservation.description":
        "At First Mahata, we provide flight reservation services to all global destinations at the best prices and with maximum flexibility. Whether you are looking for an economy, business, or first-class ticket, we help you find the best option for your trip.",
      "flight.reservation.why-us": "Why Choose Us",
      "flight.reservation.why-us-answer1":
        "Competitive prices across all airlines.",
      "flight.reservation.why-us-answer2":
        "Multiple options to suit all budgets.",
      "flight.reservation.why-us-answer3":
        "Easy modification or cancellation of bookings.",
      "flight.reservation.why-us-answer4":
        "24/7 technical support to assist you anytime.",
      "flight.reservation.why-us-answer5":
        "Confirmed bookings with travel reminders.",
      "flight.reservation-visa.faqs1.question":
        "Can I change my flight date after booking?",
      "flight.reservation-visa.faqs1.answer":
        "Yes, depending on the airline's policies and ticket type.",
      "flight.reservation-visa.faqs2.question":
        "Do you offer special deals for group travel?",
      "flight.reservation-visa.faqs2.answer":
        "Yes, we provide special rates for families and groups.",
      "flight.reservation-visa.faqs3.question":
        "Can I choose my seat in advance?",
      "flight.reservation-visa.faqs3.answer":
        "Of course, you can select your seat at booking or later depending on availability.",
      "flight.reservation.why-us-desc1":
        "Secure and verified flight reservations",
      "flight.reservation.why-us-desc2": "Quick processing within hours",
      "flight.reservation.why-us-desc3": "Expert travel consultation",
      "flight.reservation.why-us-desc4": "Worldwide airline coverage",
      "flight.reservation.why-us-desc5": "Flexible date options",
      "flight.reservation.why-us-desc6": "Best price guarantee",

      "flight.plain.reservations.title": "Ready to Book Your Flight?",
      "flight.plain.reservations.description":
        "Get the best deals and secure your flight reservation today!",
      "flight.plain.reservations.btn": " Book Now",
      // Hotel Reservation
      "hotel.reservation.description":
        "With First Mahata, booking your hotel is easier than ever. We offer a wide range of options to suit all budgets, from economy hotels to luxury resorts, with instant confirmation and competitive prices.",
      "hotel.reservation.why-us": "Wide network of hotels worldwide.",
      "hotel.reservation.why-us-answer1":
        "Wide network of hotels around the worled",
      "hotel.reservation.why-us-answer2": "Exclusive competitive prices.",
      "hotel.reservation.why-us-answer3":
        "Options to suit all budgets (economy – mid-range – luxury).",
      "hotel.reservation.why-us-answer4":
        "Possibility to modify or cancel the booking according to hotel policy.",
      "hotel.reservation.why-us-answer5":
        "Continuous support to follow up on any request or inquiry.",
      "hotel.reservation.faqs1.question":
        "Can I cancel my booking and get a refund?",
      "hotel.reservation.faqs1.answer":
        "Yes, depending on the hotel policy. Some bookings are refundable, others are not.",
      "hotel.reservation.faqs2.question":
        "Do prices include breakfast and taxes?",
      "hotel.reservation.faqs2.answer":
        "It depends on the hotel. We show you all details before confirming the booking.",
      "hotel.reservation.faqs3.question":
        "Can I book for a long stay (a month or more)?",
      "hotel.reservation.faqs3.answer":
        "Yes, we offer long-stay options at special rates.",
      "hotel.reservation.why-us-desc1":
        "Secure and verified hotel reservations",
      "hotel.reservation.why-us-desc2": "Quick processing within hours",
      "hotel.reservation.why-us-desc3": "Expert travel consultation",
      "hotel.reservation.why-us-desc4": "Quality guaranteed accommodations",
      "hotel.reservation.why-us-desc5": "Instant confirmation",
      // Countries
      "countries.visa_information": "Schengen Visa Information",
      "countries.badge": "Available Countries",
      "countries.title": "Schengen Area Countries",
      "countries.subtitle": "We Cover",
      "countries.description":
        "We assist in obtaining visas for all Schengen countries with specialized expertise in each",
      "countries.processing_time": "Processing Time",
      "countries.popularity": "Destination Popularity",
      "countries.request_visa": "Request Visa",
      "countries.one_visa.title": "One Visa for All Schengen Countries",
      "countries.one_visa.desc":
        "With one Schengen visa, you can visit all 26 countries in the area for up to 90 days within a 180-day period",
      "country.norway": "Norway",
      "country.switzerland": "Switzerland",
      "country.czech_republic": "Czech Republic",
      "country.hungary": "Hungary",
      "country.poland": "Poland",
      "country.slovakia": "Slovakia",
      "country.slovenia": "Slovenia",
      "country.latvia": "Latvia",
      "country.lithuania": "Lithuania",
      "country.estonia": "Estonia",
      "country.malta": "Malta",
      "country.luxembourg": "Luxembourg",
      "country.finland": "Finland",
      "country.denmark": "Denmark",
      "country.sweden": "Sweden",
      "country.iceland": "Iceland",
      "country.liechtenstein": "Liechtenstein",
      "countries.service_providers": "Service Providers",
      "countries.service_providers.description":
        "Partnering with the world's finest hotels for your perfect stay",

      // About
      "about.badge": "About Us",
      "about.title": "Why Choose",
      "about.subtitle": "First Mahata for Your Next Trip?",
      "about.description":
        "We are not just a visa office or booking agency, we are your travel partner from the first step until you reach your destination. With us, you’ll find:",
      "about.features1.title": "Integrated Solutions",
      "about.features1.description":
        "Visas, flight bookings, and hotels – everything in one place",

      "about.features2.title": "Save Time & Effort",
      "about.features2.description":
        "We simplify and speed up the long procedures.",

      "about.features3.title": "Expertise & Knowledge",
      "about.features3.description":
        "Our team knows the requirements of every embassy, airline, and hotel.",

      "about.features4.title": "Competitive Prices",
      "about.features4.description":
        "We guarantee the best deals without compromising quality.",

      "about.features5.title": "Personal Support",
      "about.features5.description":
        "We follow up on your application step by step and are always available for inquiries.",

      "about.features6.title": "Trust & Security",
      "about.features6.description":
        "All your dealings with us are safe and reliable, giving you peace of mind.",

      "about.testimonialsTitle": "What Our Clients Say",
      "about.testimonialsSubtitle":
        "Real experiences from clients who trusted us with their visas",
      "about.ctaTitle": "Join Thousands of Happy Clients",
      "about.ctaSubtitle":
        "Start your journey today toward getting a Schengen visa and enjoy an unforgettable travel experience",
      "about.ctaButton": "Start with Us Now",
      "about.visionTitle": "Our Vision & Mission",
      "about.visionText1":
        "We aim to be the first choice for Saudi travelers to obtain Schengen visas quickly and successfully.",
      "about.visionText2":
        "Our mission is to make travel easier and turn the dream of visiting Europe into reality with minimal effort and time.",

      "about.testimonials.c1.name": "Ahmed Mohammed Al-Ghamdi",
      "about.testimonials.c1.location": "Riyadh",
      "about.testimonials.c1.text":
        "Excellent and fast service, I got my Germany visa in just one week. Very professional team and continuous follow-up.",

      "about.testimonials.c2.name": "Fatimah Abdullah",
      "about.testimonials.c2.location": "Jeddah",
      "about.testimonials.c2.text":
        "I was worried about visa procedures, but the team helped with everything. I got my France visa without any issues.",

      "about.testimonials.c3.name": "Khalid Al-Otaibi",
      "about.testimonials.c3.location": "Dammam",
      "about.testimonials.c3.text":
        "Best visa office in Saudi Arabia. High-class customer service and very high success rate. Strongly recommended.",
      "about.achievements.label1": "Years of Experience",
      "about.achievements.label2": "Satisfied Clients",
      "about.achievements.label3": "Success Rate",
      "about.achievements.label4": "Countries Covered",

      // FAQ
      "faq.badge": "Frequently Asked Questions",
      "faq.title": "Answers to the Most",
      "faq.subtitle": "Common Questions",
      "faq.description":
        "Comprehensive answers to all your questions about Schengen visas and our services",
      "faq.cta.title": "Didn’t find your answer?",
      "faq.cta.desc":
        "Our expert team is ready to answer all your inquiries and help you with any issue",
      "faq.cta.button1": "Contact Us Now",
      "faq.cta.button2": "Direct WhatsApp",

      "faqs1.question": "Is First Mahata accredited by embassies?",
      "faqs1.answer":
        "Yes, we comply with all official requirements and prepare files that meet embassy standards.",

      "faqs2.question": "Can I track my application after submission?",
      "faqs2.answer":
        "Absolutely, we provide step-by-step updates on your application until the result is received.",

      "faqs3.question":
        "Do you provide complete travel packages (Visa + Flight + Hotel)?",
      "faqs3.answer":
        "Yes, we provide comprehensive packages to help you plan your trip easily from start to finish.",

      "faqs4.question": "Are there separate consultation fees?",
      "faqs4.answer":
        "No, initial consultations are free. You only pay once the actual process begins.",

      "faqs5.question":
        "Are your services for individuals only or also for companies?",
      "faqs5.answer":
        "We serve individuals, families, and companies that wish to organize travel for their employees.",

      "faqs6.question": "How do I know my personal data is safe?",
      "faqs6.answer":
        "We adhere to high security and confidentiality standards. Your data is fully protected and safe.",

      "faqs7.question": "Do I need to visit the office in person?",
      "faqs7.answer":
        "Not always, most procedures can be completed online or by phone unless the embassy requires your attendance.",

      "faqs8.question": "Can you help me choose the right destination?",
      "faqs8.answer":
        "Yes, we provide personal consultations to help you choose the best destination based on your budget and interests.",

      "faqs9.question": "What makes First Mahata different?",
      "faqs9.answer":
        "We offer a unique mix of expertise, speed, and competitive pricing, with personal support that builds confidence throughout your journey.",

      // Contact
      "contact.badge": "Contact Us",
      "contact.title": "Get in Touch",
      "contact.subtitle": "And Start Your Journey Today",
      "contact.description":
        "Our team is ready to answer all your questions and help you get your Schengen visa",
      "contact.info.title": "Contact Info",
      "contact.phone.title": "Phone / WhatsApp",
      "contact.email.title": "Email",
      "contact.address.title": "Address",
      "contact.hours.title": "Working Hours",
      "contact.quick.title": "Quick Contact",
      "contact.quick.whatsapp": "Direct WhatsApp",
      "contact.quick.call": "Direct Call",
      "contact.quick.email": "Send Email",
      "contact.map.title": "Our Location on Map",
      "contact.map.desc":
        "Visit our office in the heart of Riyadh for a personal consultation",
      "contact.map.button": "View on Google Maps",
      "contact.form.title": "Send Us a Message",
      "contact.form.desc":
        "Fill in the form below and we’ll contact you within 24 hours",
      "contact.form.name": "Full Name",
      "contact.form.phone": "Phone Number",
      "contact.form.email": "Email",
      "contact.form.country": "Desired Country",
      "contact.form.message": "Inquiry Details",
      "contact.form.send": "Send Message",
      "contact.form.privacy":
        "🔒 We respect your privacy. All information is protected and will not be shared with third parties. We only use your info to respond to your inquiry and provide our services.",
      "contact.hours.weekdays": "Working Hours",
      "contact.hours.weekend": "Available 24/7 - All Week",
      "contact.address.line1": "Riyadh - Al Malaz District",
      "contact.address.line2": "Riyadh",

      // Footer
      "footer.home": "Home",
      "footer.services": "Services",
      "footer.steps": "How We Work",
      "footer.about": "About Us",

      "footer.visa_schengen": "Schengen Visa",
      "footer.free_consult": "Free Consultation",
      "footer.appointment_booking": "Appointment Booking",
      "footer.health_insurance": "Health Insurance",

      "footer.terms": "Terms & Conditions",
      "footer.privacy": "Privacy Policy",
      "footer.cancellation": "Cancellation Policy",
      "footer.agreement": "Service Agreement",

      "footer.enter_email": "Enter your email",

      "footer.company.desc":
        "Your trusted partner for obtaining Schengen visas quickly and successfully in Saudi Arabia.",
      "footer.quick_links": "Quick Links",
      "footer.service": "Our Services",
      "footer.legal": "Legal Info",
      "footer.follow": "Follow Us",
      "footer.newsletter.title": "Subscribe to Our Newsletter",
      "footer.newsletter.desc":
        "Get the latest updates on visa requirements and special offers",
      "footer.newsletter.button": "Subscribe",
      "footer.copyright": "© 2025 Schengen Visa Office. All rights reserved.",
      "footer.licensed": "Licensed by the Saudi Ministry of Commerce",
      "footer.member": "Member of Riyadh Chamber of Commerce",
      "footer.address": "Riyadh - Al Malaz District",
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
  }, [language, isRTL]);

  const value = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
