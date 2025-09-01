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
      "header.services": "الخدمات",
      "header.about": "عنا",
      "header.requirements": "الشروط",
      "header.faq": "الأسئلة الشائعة",
      "header.contact": "اتصل بنا",
      "header.call_now": "اتصل الآن",
      "header.request_service": "اطلب الخدمة",
      "header.company_name": "مكتب فيزا الشنغن",
      "header.company_tagline": "خبراء استخراج التأشيرات",

      // Hero
      "hero.badge": "✈️ خبراء فيزا الشنغن في السعودية",
      "hero.title": "استخراج فيزا الشنغن",
      "hero.subtitle": "بكل سهولة وسرعة",
      "hero.description":
        "نحن نسهل لك إجراءات الحصول على تأشيرة الشنغن لدول أوروبا مع ضمان أعلى معدلات النجاح وأسرع الإجراءات",
      "hero.request_now": "اطلب الخدمة الآن",
      "hero.free_consultation": "استشارة مجانية",
      "hero.stats.clients": "+5000",
      "hero.stats.clients_label": "عميل راضٍ",
      "hero.stats.success": "95%",
      "hero.stats.success_label": "معدل النجاح",
      "hero.stats.processing": "7 أيام",
      "hero.stats.processing_label": "متوسط المعالجة",

      // Services
      "services.badge": "خدماتنا المتكاملة",
      "services.title": "نقدم لك خدمات شاملة",
      "services.subtitle": "لاستخراج فيزا الشنغن",
      "services.description":
        "من الاستشارة الأولى حتى الحصول على التأشيرة، نحن معك في كل خطوة لضمان نجاح طلبك",
      "services.consultation.title": "استشارات مجانية",
      "services.consultation.desc":
        "نقدم استشارات مجانية شاملة حول متطلبات فيزا الشنغن وأفضل الطرق للحصول على الموافقة",
      "services.appointment.title": "حجز موعد السفارة",
      "services.appointment.desc":
        "نقوم بحجز المواعيد الإلكترونية في السفارات والقنصليات بأسرع وقت ممكن",
      "services.forms.title": "تعبئة النماذج",
      "services.forms.desc":
        "تعبئة جميع نماذج الطلب بدقة واحترافية لضمان عدم رفض الطلب لأسباب إدارية",
      "services.insurance.title": "التأمين الصحي",
      "services.insurance.desc":
        "توفير التأمين الصحي المطلوب الذي يغطي كامل فترة الرحلة وجميع دول الشنغن",
      "services.flight.title": "حجز الطيران",
      "services.flight.desc":
        "حجز تذاكر الطيران والمساعدة في اختيار أفضل المسارات والأسعار المناسبة (اختياري)",
      "services.hotel.title": "حجز الفنادق",
      "services.hotel.desc":
        "حجز الفنادق المناسبة وترتيب الإقامة في الدول الأوروبية حسب برنامج الرحلة (اختياري)",
      "services.tracking.title": "متابعة الطلب",
      "services.tracking.desc":
        "متابعة مستمرة لحالة الطلب من لحظة التقديم حتى الحصول على التأشيرة والتسليم",
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
      "steps.step1.title": "التواصل والاستشارة",
      "steps.step1.desc":
        "تواصل معنا للحصول على استشارة مجانية وتقييم شامل لحالتك وتحديد نوع التأشيرة المناسبة",
      "steps.step2.title": "تجهيز المستندات",
      "steps.step2.desc":
        "نساعدك في تجهيز جميع المستندات المطلوبة وفقاً لمتطلبات السفارة ونراجعها بعناية",
      "steps.step3.title": "تعبئة النماذج والتقديم",
      "steps.step3.desc":
        "نقوم بتعبئة جميع النماذج بدقة وحجز موعد السفارة وتقديم الطلب نيابة عنك",
      "steps.step4.title": "متابعة حالة الطلب",
      "steps.step4.desc":
        "نتابع طلبك يومياً ونبقيك على اطلاع بكل التطورات حتى صدور القرار النهائي",
      "steps.step5.title": "استلام التأشيرة والسفر",
      "steps.step5.desc":
        "بعد الموافقة، نساعدك في استلام التأشيرة ونقدم نصائح مهمة للسفر والوصول",
      "steps.bottom_cta.title": "جاهز لبدء رحلتك؟",
      "steps.bottom_cta.desc":
        "ابدأ معنا اليوم واحصل على فيزا الشنغن بأسرع وقت وأعلى معدل نجاح",
      "steps.bottom_cta.button": "ابدأ الآن - استشارة مجانية",

      // Documents
      "documents.badge": "المستندات المطلوبة",
      "documents.title": "الأوراق والوثائق",
      "documents.subtitle": "اللازمة للتقديم",
      "documents.description":
        "قائمة شاملة بجميع المستندات المطلوبة للحصول على فيزا الشنغن. نساعدك في تحضيرها وتنظيمها",
      "documents.required": "مطلوب",
      "documents.passport.title": "جواز السفر",
      "documents.passport.desc": "جواز سفر ساري المفعول لمدة 6 أشهر على الأقل",
      "documents.photos.title": "الصور الشخصية",
      "documents.photos.desc": "صورتان شخصيتان حديثتان بخلفية بيضاء",
      "documents.bank.title": "كشف الحساب البنكي",
      "documents.bank.desc": "كشف حساب بنكي للثلاثة أشهر الأخيرة",
      "documents.work.title": "إثبات العمل",
      "documents.work.desc": "خطاب من جهة العمل أو السجل التجاري",
      "documents.travel.title": "حجوزات السفر",
      "documents.travel.desc": "تذاكر الطيران وحجوزات الفنادق",
      "documents.insurance.title": "التأمين الصحي",
      "documents.insurance.desc": "تأمين صحي يغطي دول الشنغن",
      "documents.additional.title": "مستندات إضافية (حسب الحالة)",
      "documents.additional.desc":
        "قد تحتاج هذه المستندات حسب حالتك الشخصية والعائلية",
      "documents.help.title": "هل تحتاج مساعدة في التحضير؟",
      "documents.help.desc":
        "نحن هنا لمساعدتك في تحضير وتنظيم جميع المستندات المطلوبة بشكل صحيح",
      "documents.help.button1": "قائمة المستندات PDF",
      "documents.help.button2": "اطلب المساعدة",
      "document.passport.details.d1": "صفحتان فارغتان على الأقل",
      "document.passport.details.d2": "نسخة من الصفحات المهمة",
      "document.passport.details.d3": "جوازات سفر قديمة إن وجدت",
      "document.photos.details.d1": "مقاس 35×45 مم",
      "document.photos.details.d2": "خلفية بيضاء موحدة",
      "document.photos.details.d3": "وضعية مواجهة بدون نظارة شمسية",
      "document.photos.bank.d1": "باللغة العربية والإنجليزية",
      "document.photos.bank.d2": "يظهر حركة مالية منتظمة",
      "document.photos.bank.d3": "ختم البنك الرسمي",
      "document.photos.work.d1": "خطاب رسمي من صاحب العمل",
      "document.photos.work.d2": "يحدد الراتب ومدة الإجازة",
      "document.photos.work.d3": "مترجم ومصدق إذا لزم الأمر",
      "document.photos.travel.d1": "تذاكر ذهاب وإياب مؤكدة",
      "document.photos.travel.d2": "حجز فندقي كامل المدة",
      "document.photos.travel.d3": "برنامج سياحي مفصل",
      "document.photos.insurance.d1": "تغطية 30,000 يورو على الأقل",
      "document.photos.insurance.d2": "يشمل جميع دول الشنغن",
      "document.photos.insurance.d3": "صالح طوال فترة الإقامة",
      "document.additional.birthCertificate": "شهادة الميلاد للأطفال",
      "document.additional.parentConsent": "موافقة الوالدين للقُصر",
      "document.additional.marriageCertificate": "شهادة الزواج للمتزوجين",
      "document.additional.salaryStatement": "كشف راتب للموظفين",

      // Countries
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
      // About
      "about.badge": "عن الشركة",
      "about.title": "لماذا تختار",
      "about.subtitle": "مكتب فيزا الشنغن؟",
      "about.description":
        "نحن شركة متخصصة في استخراج تأشيرات الشنغن مع سجل حافل من النجاحات وثقة آلاف العملاء",
      "about.commitmentTitle": "التزامنا تجاهك",
      "about.commitmentItems.slug1": "استشارة مجانية وشفافية كاملة في الأسعار",
      "about.commitmentItems.slug2": "متابعة يومية لحالة طلبك",
      "about.commitmentItems.slug3": "ضمان إعادة التقديم في حالة الرفض",
      "about.commitmentItems.slug4": "دعم فني على مدار الساعة",
      "about.featuresTitle": "ما يميزنا عن الآخرين",
      "about.features1.title": "خبرة واسعة",
      "about.features1.description":
        "أكثر من 8 سنوات في مجال استخراج التأشيرات",

      "about.features2.title": "فريق محترف",
      "about.features2.description": "فريق متخصص من الخبراء والمستشارين",

      "about.features3.title": "أمان وسرية",
      "about.features3.description": "حماية تامة لجميع بياناتك الشخصية",

      "about.features4.title": "سرعة الإنجاز",
      "about.features4.description": "أسرع معالجة مع ضمان الجودة",

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

      "faqs1.question": "ما هي مدة معالجة طلب فيزا الشنغن؟",
      "faqs1.answer":
        "عادة تتراوح مدة معالجة الطلب بين 7-15 يوم عمل من تاريخ تقديم الطلب في السفارة. في بعض الحالات الخاصة قد تصل إلى 30 يوم، وفي حالات الطوارئ يمكن معالجتها خلال 3 أيام عمل مقابل رسوم إضافية.",

      "faqs2.question": "ما هي نسبة قبول طلبات فيزا الشنغن؟",
      "faqs2.answer":
        "نحقق نسبة نجاح تصل إلى 95% لجميع طلبات عملائنا. هذا بفضل خبرتنا الواسعة ومراجعتنا الدقيقة لجميع المستندات قبل التقديم، بالإضافة إلى متابعتنا المستمرة مع السفارات.",

      "faqs3.question": "ماذا يحدث لو تم رفض طلبي؟",
      "faqs3.answer":
        "في حالة الرفض النادرة، نقوم بمراجعة أسباب الرفض مع العميل ونعيد تقديم الطلب مجاناً بعد معالجة الأسباب. كما نقدم ضمان استرداد جزئي للرسوم في حالات معينة حسب شروط الخدمة.",

      "faqs4.question": "هل يمكنني السفر إلى أكثر من دولة بتأشيرة واحدة؟",
      "faqs4.answer":
        "نعم، تأشيرة الشنغن تسمح لك بالسفر بحرية إلى جميع الـ 26 دولة في منطقة الشنغن بتأشيرة واحدة فقط. يمكنك البقاء لمدة تصل إلى 90 يوماً خلال فترة 180 يوم والتنقل بين الدول بدون قيود.",

      "faqs5.question": "ما هي مدة صلاحية تأشيرة الشنغن؟",
      "faqs5.answer":
        "تختلف مدة صلاحية التأشيرة حسب نوعها وظروف المتقدم. عادة تكون صالحة لمدة 90 يوماً خلال فترة 180 يوم. في بعض الحالات يمكن الحصول على تأشيرات متعددة الدخول صالحة لسنة أو أكثر.",

      "faqs6.question": "كم تكلف خدماتكم لاستخراج فيزا الشنغن؟",
      "faqs6.answer":
        "تتراوح تكلفة خدماتنا بين 800-1500 ريال سعودي حسب نوع الخدمة والدولة المختارة، بالإضافة إلى رسوم السفارة البالغة 80 يورو. نقدم استشارة مجانية لتحديد التكلفة الدقيقة حسب حالتك.",

      "faqs7.question": "هل تقدمون خدمة متابعة الطلب؟",
      "faqs7.answer":
        "نعم، نقدم خدمة متابعة شاملة من لحظة تقديم الطلب حتى استلام التأشيرة. ستحصل على تحديثات منتظمة عبر الرسائل النصية والواتساب، كما يمكنك متابعة حالة طلبك عبر موقعنا الإلكتروني.",

      "faqs8.question": "ما هي المستندات الأساسية المطلوبة؟",
      "faqs8.answer":
        "المستندات الأساسية تشمل: جواز سفر ساري، صور شخصية، كشف حساب بنكي، خطاب عمل، تأمين صحي، حجوزات طيران وفنادق، ونماذج الطلب المكتملة. قد تختلف المتطلبات قليلاً حسب الدولة المختارة.",

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
      "footer.copyright": "© 2024 مكتب فيزا الشنغن. جميع الحقوق محفوظة.",
      "footer.licensed": "مرخص من وزارة التجارة السعودية",
      "footer.member": "عضو غرفة الرياض التجارية",
      "footer.address": "الرياض - حي الملز",
    },
    en: {
      // Header
      "header.home": "Home",
      "header.services": "Services",
      "header.about": "About",
      "header.requirements": "Requirements",
      "header.faq": "FAQ",
      "header.contact": "Contact",
      "header.call_now": "Call Now",
      "header.request_service": "Request Service",
      "header.company_name": "Schengen Visa",
      "header.company_tagline": "Visa Processing Experts",

      // Hero
      "hero.badge": "✈️ Schengen Visa Experts in Saudi Arabia",
      "hero.title": "Get Your Schengen Visa",
      "hero.subtitle": "Easy and Fast",
      "hero.description":
        "We simplify the process of obtaining a Schengen visa for European countries with guaranteed highest success rates and fastest procedures",
      "hero.request_now": "Request Service Now",
      "hero.free_consultation": "Free Consultation",
      "hero.stats.clients": "+5000",
      "hero.stats.clients_label": "Happy Clients",
      "hero.stats.success": "95%",
      "hero.stats.success_label": "Success Rate",
      "hero.stats.processing": "7 Days",
      "hero.stats.processing_label": "Average Processing",

      // Services
      "services.badge": "Our Complete Services",
      "services.title": "We provide comprehensive services",
      "services.subtitle": "for Schengen visa processing",
      "services.description":
        "From initial consultation to obtaining your visa, we are with you every step to ensure your application success",
      "services.consultation.title": "Free Consultations",
      "services.consultation.desc":
        "We provide comprehensive free consultations about Schengen visa requirements and best ways to get approval",
      "services.appointment.title": "Embassy Appointment Booking",
      "services.appointment.desc":
        "We book electronic appointments at embassies and consulates as quickly as possible",
      "services.forms.title": "Form Completion",
      "services.forms.desc":
        "Complete all application forms accurately and professionally to ensure no rejection for administrative reasons",
      "services.insurance.title": "Health Insurance",
      "services.insurance.desc":
        "Provide required health insurance that covers the entire trip period and all Schengen countries",
      "services.flight.title": "Flight Booking",
      "services.flight.desc":
        "Book flight tickets and help choose the best routes and suitable prices (optional)",
      "services.hotel.title": "Hotel Booking",
      "services.hotel.desc":
        "Book suitable hotels and arrange accommodation in European countries according to your trip itinerary (optional)",
      "services.tracking.title": "Application Tracking",
      "services.tracking.desc":
        "Continuous monitoring of application status from submission until visa receipt and delivery",
      "services.cta.title": "Ready to Start Now?",
      "services.cta.desc":
        "Get a free consultation and start your journey to obtain a Schengen visa today",
      "services.cta.button": "Get Free Consultation",

      // Steps
      "steps.badge": "How We Work",
      "steps.title": "Steps to Get Your",
      "steps.subtitle": "Schengen Visa",
      "steps.description":
        "A simple and organized five-step process to ensure you get your visa in the shortest time with the highest success rate",
      "steps.step1.title": "Contact and Consultation",
      "steps.step1.desc":
        "Contact us for a free consultation and comprehensive assessment of your case to determine the appropriate visa type",
      "steps.step2.title": "Document Preparation",
      "steps.step2.desc":
        "We help you prepare all required documents according to embassy requirements and review them carefully",
      "steps.step3.title": "Form Completion and Submission",
      "steps.step3.desc":
        "We complete all forms accurately, book embassy appointment, and submit the application on your behalf",
      "steps.step4.title": "Application Status Tracking",
      "steps.step4.desc":
        "We track your application daily and keep you updated with all developments until the final decision",
      "steps.step5.title": "Visa Collection and Travel",
      "steps.step5.desc":
        "After approval, we help you collect the visa and provide important travel and arrival tips",
      "steps.bottom_cta.title": "Ready to Start Your Journey?",
      "steps.bottom_cta.desc":
        "Start with us today and get your Schengen visa in the shortest time with the highest success rate",
      "steps.bottom_cta.button": "Start Now - Free Consultation",

      // Documents
      "documents.badge": "Required Documents",
      "documents.title": "Papers and Documents",
      "documents.subtitle": "Needed for Application",
      "documents.description":
        "Comprehensive list of all documents required to obtain a Schengen visa. We help you prepare and organize them",
      "documents.required": "Required",
      "documents.passport.title": "Passport",
      "documents.passport.desc": "Valid passport for at least 6 months",
      "documents.photos.title": "Personal Photos",
      "documents.photos.desc":
        "Two recent personal photos with white background",
      "documents.bank.title": "Bank Statement",
      "documents.bank.desc": "Bank statement for the last three months",
      "documents.work.title": "Work Proof",
      "documents.work.desc": "Letter from employer or commercial registration",
      "documents.travel.title": "Travel Bookings",
      "documents.travel.desc": "Flight tickets and hotel reservations",
      "documents.insurance.title": "Health Insurance",
      "documents.insurance.desc":
        "Health insurance covering Schengen countries",
      "documents.additional.title": "Additional Documents (Case-specific)",
      "documents.additional.desc":
        "You may need these documents depending on your personal and family situation",
      "documents.help.title": "Need Help with Preparation?",
      "documents.help.desc":
        "We are here to help you prepare and organize all required documents correctly",
      "documents.help.button1": "Documents List PDF",
      "documents.help.button2": "Request Help",
      "document.passport.details.d1": "At least two blank pages",
      "document.passport.details.d2": "Copy of important pages",
      "document.passport.details.d3": "Old passports if available",

      "document.photos.details.d1": "Size 35×45 mm",
      "document.photos.details.d2": "Uniform white background",
      "document.photos.details.d3": "Frontal pose without sunglasses",

      "document.photos.bank.d1": "In Arabic and English",
      "document.photos.bank.d2": "Shows regular financial activity",
      "document.photos.bank.d3": "Official bank stamp",

      "document.photos.work.d1": "Official letter from employer",
      "document.photos.work.d2": "Specifies salary and leave duration",
      "document.photos.work.d3": "Translated and certified if required",

      "document.photos.travel.d1": "Confirmed round-trip tickets",
      "document.photos.travel.d2": "Hotel booking for full duration",
      "document.photos.travel.d3": "Detailed travel itinerary",

      "document.photos.insurance.d1": "Coverage of at least €30,000",
      "document.photos.insurance.d2": "Covers all Schengen countries",
      "document.photos.insurance.d3": "Valid throughout the stay",

      "document.additional.birthCertificate": "Children's birth certificate",
      "document.additional.parentConsent": "Parental consent for minors",
      "document.additional.marriageCertificate":
        "Marriage certificate for married applicants",
      "document.additional.salaryStatement": "Salary statement for employees",

      // Countries
      "countries.badge": "Available Countries",
      "countries.title": "Schengen Zone Countries",
      "countries.subtitle": "We Cover",
      "countries.description":
        "We help you get a visa for all Schengen zone countries with specialized expertise in each country",
      "countries.processing_time": "Processing Time",
      "countries.popularity": "Destination Popularity",
      "countries.request_visa": "Request Visa for",
      "countries.one_visa.title": "One Visa for All Schengen Countries",
      "countries.one_visa.desc":
        "With one Schengen visa, you can visit all 26 countries in the Schengen zone freely for up to 90 days within a 180-day period",
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
      // About
      "about.badge": "About Us",
      "about.title": "Why Choose",
      "about.subtitle": "Schengen Visa Office?",
      "about.description":
        "We specialize in Schengen visa processing with a proven track record and thousands of satisfied clients.",

      "about.commitmentTitle": "Our Commitment to You",
      "about.commitmentItems.slug1":
        "Free consultation and full price transparency",
      "about.commitmentItems.slug2":
        "Daily follow-up on your application status",
      "about.commitmentItems.slug3":
        "Resubmission guarantee in case of rejection",
      "about.commitmentItems.slug4": "24/7 technical support",

      "about.featuresTitle": "What Makes Us Different",
      "about.features1.title": "Extensive Experience",
      "about.features1.description": "Over 8 years in visa processing",

      "about.features2.title": "Professional Team",
      "about.features2.description":
        "A specialized team of experts and consultants",

      "about.features3.title": "Safety & Confidentiality",
      "about.features3.description":
        "Complete protection of all your personal data",

      "about.features4.title": "Fast Processing",
      "about.features4.description":
        "Fastest processing with guaranteed quality",

      "about.testimonialsTitle": "What Our Clients Say",
      "about.testimonialsSubtitle":
        "Real experiences from our clients who trusted us with their visa applications",

      "about.ctaTitle": "Join Thousands of Happy Clients",
      "about.ctaSubtitle":
        "Start your journey to getting a Schengen visa today and enjoy an unforgettable travel experience",
      "about.ctaButton": "Start Now",

      "about.visionTitle": "Our Vision & Mission",
      "about.visionText1":
        "We aim to be the first choice for all Saudi travelers to obtain Schengen visas quickly with the highest success rate.",
      "about.visionText2":
        "Our mission is to make travel easier for our clients and turn their dream of visiting Europe into reality with minimal effort and time.",

      "about.testimonials.c1.name": "Ahmed Mohammed Al-Ghamdi",
      "about.testimonials.c1.location": "Riyadh",
      "about.testimonials.c1.text":
        "Excellent and fast service. I got my German visa in just one week. Very professional team with continuous follow-up.",

      "about.testimonials.c2.name": "Fatimah Abdullah",
      "about.testimonials.c2.location": "Jeddah",
      "about.testimonials.c2.text":
        "I was worried about the visa process, but the team helped me with everything. I got my French visa without any issues.",

      "about.testimonials.c3.name": "Khalid Al-Otaibi",
      "about.testimonials.c3.location": "Dammam",
      "about.testimonials.c3.text":
        "The best visa office in Saudi Arabia. Excellent customer service and a very high success rate. Highly recommended.",

      "about.achievements.label1": "Years of Experience",
      "about.achievements.label2": "Satisfied Clients",
      "about.achievements.label3": "Success Rate",
      "about.achievements.label4": "Countries Covered",

      // FAQ
      "faq.badge": "FAQs",
      "faq.title": "Answers to the Most",
      "faq.subtitle": "Common Questions",
      "faq.description":
        "Comprehensive answers to all the questions you may have about Schengen visas and our services",

      "faq.cta.title": "Didn’t Find Your Answer?",
      "faq.cta.desc":
        "Our expert team is ready to answer all your inquiries and help solve any issue",
      "faq.cta.button1": "Contact Us Now",
      "faq.cta.button2": "Direct WhatsApp",

      "faqs1.question":
        "How long does it take to process a Schengen visa application?",
      "faqs1.answer":
        "Processing usually takes 7–15 working days from submission at the embassy. In some special cases, it may take up to 30 days, while urgent cases can be processed in 3 days for an additional fee.",

      "faqs2.question":
        "What is the approval rate for Schengen visa applications?",
      "faqs2.answer":
        "We achieve up to a 95% success rate for our clients’ applications, thanks to our extensive experience, detailed document checks, and continuous follow-up with embassies.",

      "faqs3.question": "What happens if my application is rejected?",
      "faqs3.answer":
        "In the rare case of rejection, we review the reasons with the client and resubmit the application for free after addressing the issues. We also offer partial refunds under certain service conditions.",

      "faqs4.question": "Can I travel to multiple countries with one visa?",
      "faqs4.answer":
        "Yes, the Schengen visa allows you to travel freely to all 26 countries in the Schengen Area with a single visa. You can stay up to 90 days within a 180-day period and move between countries without restrictions.",

      "faqs5.question": "What is the validity period of a Schengen visa?",
      "faqs5.answer":
        "Validity depends on the type of visa and applicant’s situation. Usually, it allows 90 days of stay within 180 days. In some cases, you may get multiple-entry visas valid for one year or more.",

      "faqs6.question": "How much do your Schengen visa services cost?",
      "faqs6.answer":
        "Our service fees range between 800–1500 SAR depending on the service type and destination country, in addition to the embassy fee of €80. We offer free consultations to provide accurate pricing based on your case.",

      "faqs7.question": "Do you provide application follow-up services?",
      "faqs7.answer":
        "Yes, we provide full follow-up from submission until you receive your visa. You’ll get regular updates via SMS and WhatsApp, and you can also track your application status through our website.",

      "faqs8.question": "What are the basic required documents?",
      "faqs8.answer":
        "The basic documents include: valid passport, personal photos, bank statement, employment letter, health insurance, flight and hotel bookings, and completed application forms. Requirements may vary slightly depending on the country.",

      // Contact
      "contact.badge": "Contact Us",
      "contact.title": "Get in Touch",
      "contact.subtitle": "and Start Your Journey Today",
      "contact.description":
        "Our team is ready to answer all your questions and help you get your Schengen visa",
      "contact.info.title": "Contact Information",
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
        "Visit us at our office in the heart of Riyadh for personal consultation",
      "contact.map.button": "View on Google Maps",
      "contact.form.title": "Send Us a Message",
      "contact.form.desc":
        "Fill out the form below and we will contact you within 24 hours",
      "contact.form.name": "Full Name",
      "contact.form.phone": "Phone Number",
      "contact.form.email": "Email",
      "contact.form.country": "Desired Country",
      "contact.form.message": "Inquiry Details",
      "contact.form.send": "Send Message",
      "contact.form.privacy":
        "🔒 We respect your privacy. All information sent is protected and will not be shared with third parties. We will use your information only to respond to your inquiry and provide our services.",
      "contact.hours.weekdays": " hours weekdays",
      "contact.hours.weekend": "24 Hours at week",
      "contact.address.line1": "Riyadh - Al-Malaz",
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
        "Your trusted partner for obtaining Schengen visas quickly with the highest success rate in Saudi Arabia.",
      "footer.quick_links": "Quick Links",
      "footer.service": "Our Services",
      "footer.legal": "Legal Information",
      "footer.follow": "Follow Us",
      "footer.newsletter.title": "Subscribe to Our Newsletter",
      "footer.newsletter.desc":
        "Get the latest updates on visa requirements and special offers",
      "footer.newsletter.button": "Subscribe",
      "footer.copyright": "© 2024 Schengen Visa Office. All rights reserved.",
      "footer.licensed": "Licensed by the Saudi Ministry of Commerce",
      "footer.member": "Member of the Riyadh Chamber of Commerce",
      "footer.address": "Riyadh - Al-Malaz",
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
