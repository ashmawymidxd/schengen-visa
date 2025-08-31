import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const translations = {
    ar: {
      // Header
      'header.home': 'الرئيسية',
      'header.services': 'الخدمات',
      'header.about': 'عنا',
      'header.requirements': 'الشروط',
      'header.faq': 'الأسئلة الشائعة',
      'header.contact': 'اتصل بنا',
      'header.call_now': 'اتصل الآن',
      'header.request_service': 'اطلب الخدمة',
      'header.company_name': 'مكتب فيزا الشنغن',
      'header.company_tagline': 'خبراء استخراج التأشيرات',
      
      // Hero
      'hero.badge': '✈️ خبراء فيزا الشنغن في السعودية',
      'hero.title': 'استخراج فيزا الشنغن',
      'hero.subtitle': 'بكل سهولة وسرعة',
      'hero.description': 'نحن نسهل لك إجراءات الحصول على تأشيرة الشنغن لدول أوروبا مع ضمان أعلى معدلات النجاح وأسرع الإجراءات',
      'hero.request_now': 'اطلب الخدمة الآن',
      'hero.free_consultation': 'استشارة مجانية',
      'hero.stats.clients': '+5000',
      'hero.stats.clients_label': 'عميل راضٍ',
      'hero.stats.success': '95%',
      'hero.stats.success_label': 'معدل النجاح',
      'hero.stats.processing': '7 أيام',
      'hero.stats.processing_label': 'متوسط المعالجة',

      // Services
      'services.badge': 'خدماتنا المتكاملة',
      'services.title': 'نقدم لك خدمات شاملة',
      'services.subtitle': 'لاستخراج فيزا الشنغن',
      'services.description': 'من الاستشارة الأولى حتى الحصول على التأشيرة، نحن معك في كل خطوة لضمان نجاح طلبك',
      'services.consultation.title': 'استشارات مجانية',
      'services.consultation.desc': 'نقدم استشارات مجانية شاملة حول متطلبات فيزا الشنغن وأفضل الطرق للحصول على الموافقة',
      'services.appointment.title': 'حجز موعد السفارة',
      'services.appointment.desc': 'نقوم بحجز المواعيد الإلكترونية في السفارات والقنصليات بأسرع وقت ممكن',
      'services.forms.title': 'تعبئة النماذج',
      'services.forms.desc': 'تعبئة جميع نماذج الطلب بدقة واحترافية لضمان عدم رفض الطلب لأسباب إدارية',
      'services.insurance.title': 'التأمين الصحي',
      'services.insurance.desc': 'توفير التأمين الصحي المطلوب الذي يغطي كامل فترة الرحلة وجميع دول الشنغن',
      'services.flight.title': 'حجز الطيران',
      'services.flight.desc': 'حجز تذاكر الطيران والمساعدة في اختيار أفضل المسارات والأسعار المناسبة (اختياري)',
      'services.hotel.title': 'حجز الفنادق',
      'services.hotel.desc': 'حجز الفنادق المناسبة وترتيب الإقامة في الدول الأوروبية حسب برنامج الرحلة (اختياري)',
      'services.tracking.title': 'متابعة الطلب',
      'services.tracking.desc': 'متابعة مستمرة لحالة الطلب من لحظة التقديم حتى الحصول على التأشيرة والتسليم',
      'services.cta.title': 'هل تريد البدء الآن؟',
      'services.cta.desc': 'احصل على استشارة مجانية وابدأ رحلتك نحو الحصول على فيزا الشنغن اليوم',
      'services.cta.button': 'احصل على استشارة مجانية',

      // Steps
      'steps.badge': 'كيف نعمل',
      'steps.title': 'خطوات الحصول على',
      'steps.subtitle': 'فيزا الشنغن',
      'steps.description': 'عملية بسيطة ومنظمة من خمس خطوات لضمان حصولك على التأشيرة بأسرع وقت وأعلى معدل نجاح',
      'steps.step1.title': 'التواصل والاستشارة',
      'steps.step1.desc': 'تواصل معنا للحصول على استشارة مجانية وتقييم شامل لحالتك وتحديد نوع التأشيرة المناسبة',
      'steps.step2.title': 'تجهيز المستندات',
      'steps.step2.desc': 'نساعدك في تجهيز جميع المستندات المطلوبة وفقاً لمتطلبات السفارة ونراجعها بعناية',
      'steps.step3.title': 'تعبئة النماذج والتقديم',
      'steps.step3.desc': 'نقوم بتعبئة جميع النماذج بدقة وحجز موعد السفارة وتقديم الطلب نيابة عنك',
      'steps.step4.title': 'متابعة حالة الطلب',
      'steps.step4.desc': 'نتابع طلبك يومياً ونبقيك على اطلاع بكل التطورات حتى صدور القرار النهائي',
      'steps.step5.title': 'استلام التأشيرة والسفر',
      'steps.step5.desc': 'بعد الموافقة، نساعدك في استلام التأشيرة ونقدم نصائح مهمة للسفر والوصول',
      'steps.bottom_cta.title': 'جاهز لبدء رحلتك؟',
      'steps.bottom_cta.desc': 'ابدأ معنا اليوم واحصل على فيزا الشنغن بأسرع وقت وأعلى معدل نجاح',
      'steps.bottom_cta.button': 'ابدأ الآن - استشارة مجانية',

      // Documents
      'documents.badge': 'المستندات المطلوبة',
      'documents.title': 'الأوراق والوثائق',
      'documents.subtitle': 'اللازمة للتقديم',
      'documents.description': 'قائمة شاملة بجميع المستندات المطلوبة للحصول على فيزا الشنغن. نساعدك في تحضيرها وتنظيمها',
      'documents.required': 'مطلوب',
      'documents.passport.title': 'جواز السفر',
      'documents.passport.desc': 'جواز سفر ساري المفعول لمدة 6 أشهر على الأقل',
      'documents.photos.title': 'الصور الشخصية',
      'documents.photos.desc': 'صورتان شخصيتان حديثتان بخلفية بيضاء',
      'documents.bank.title': 'كشف الحساب البنكي',
      'documents.bank.desc': 'كشف حساب بنكي للثلاثة أشهر الأخيرة',
      'documents.work.title': 'إثبات العمل',
      'documents.work.desc': 'خطاب من جهة العمل أو السجل التجاري',
      'documents.travel.title': 'حجوزات السفر',
      'documents.travel.desc': 'تذاكر الطيران وحجوزات الفنادق',
      'documents.insurance.title': 'التأمين الصحي',
      'documents.insurance.desc': 'تأمين صحي يغطي دول الشنغن',
      'documents.additional.title': 'مستندات إضافية (حسب الحالة)',
      'documents.additional.desc': 'قد تحتاج هذه المستندات حسب حالتك الشخصية والعائلية',
      'documents.help.title': 'هل تحتاج مساعدة في التحضير؟',
      'documents.help.desc': 'نحن هنا لمساعدتك في تحضير وتنظيم جميع المستندات المطلوبة بشكل صحيح',
      'documents.help.button1': 'قائمة المستندات PDF',
      'documents.help.button2': 'اطلب المساعدة',

      // Countries
      'countries.badge': 'الدول المتاحة',
      'countries.title': 'دول منطقة الشنغن',
      'countries.subtitle': 'التي نغطيها',
      'countries.description': 'نساعدك في الحصول على تأشيرة لجميع دول منطقة الشنغن مع خبرة متخصصة في كل دولة',
      'countries.processing_time': 'مدة المعالجة',
      'countries.popularity': 'شعبية الوجهة',
      'countries.request_visa': 'اطلب تأشيرة',
      'countries.one_visa.title': 'تأشيرة واحدة لجميع دول الشنغن',
      'countries.one_visa.desc': 'بتأشيرة شنغن واحدة، يمكنك زيارة جميع الـ 26 دولة في منطقة الشنغن بحرية تامة لمدة تصل إلى 90 يوماً في فترة 180 يوم',

      // About
      'about.badge': 'عن الشركة',
      'about.title': 'لماذا تختار',
      'about.subtitle': 'مكتب فيزا الشنغن؟',
      'about.description': 'نحن شركة متخصصة في استخراج تأشيرات الشنغن مع سجل حافل من النجاحات وثقة آلاف العملاء',

      // FAQ
      'faq.badge': 'الأسئلة الشائعة',
      'faq.title': 'أجوبة على أكثر الأسئلة',
      'faq.subtitle': 'شيوعاً',
      'faq.description': 'إجابات شاملة ووافية على جميع الأسئلة التي قد تخطر ببالك حول فيزا الشنغن وخدماتنا',
      'faq.cta.title': 'لم تجد إجابة لسؤالك؟',
      'faq.cta.desc': 'فريقنا المختص مستعد للإجابة على جميع استفساراتك والمساعدة في حل أي مشكلة',
      'faq.cta.button1': 'تواصل معنا الآن',
      'faq.cta.button2': 'واتساب مباشر',

      // Contact
      'contact.badge': 'اتصل بنا',
      'contact.title': 'تواصل معنا',
      'contact.subtitle': 'وابدأ رحلتك اليوم',
      'contact.description': 'فريقنا مستعد للإجابة على جميع استفساراتك ومساعدتك في الحصول على فيزا الشنغن',
      'contact.info.title': 'معلومات التواصل',
      'contact.phone.title': 'الهاتف / واتساب',
      'contact.email.title': 'البريد الإلكتروني',
      'contact.address.title': 'العنوان',
      'contact.hours.title': 'ساعات العمل',
      'contact.quick.title': 'تواصل سريع',
      'contact.quick.whatsapp': 'واتساب مباشر',
      'contact.quick.call': 'اتصال مباشر',
      'contact.quick.email': 'إرسال إيميل',
      'contact.map.title': 'موقعنا على الخريطة',
      'contact.map.desc': 'زرنا في مكتبنا في قلب الرياض للحصول على استشارة شخصية',
      'contact.map.button': 'عرض على خرائط جوجل',
      'contact.form.title': 'أرسل لنا رسالة',
      'contact.form.desc': 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة',
      'contact.form.name': 'الاسم الكامل',
      'contact.form.phone': 'رقم الهاتف',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.country': 'الدولة المرغوبة',
      'contact.form.message': 'تفاصيل الاستفسار',
      'contact.form.send': 'إرسال الرسالة',
      'contact.form.privacy': '🔒 نحن نحترم خصوصيتك. جميع المعلومات المرسلة محمية ولن يتم مشاركتها مع أطراف ثالثة. سنستخدم معلوماتك فقط للرد على استفسارك وتقديم خدماتنا.',

      // Footer
      'footer.company.desc': 'شريكك الموثوق للحصول على تأشيرات الشنغن بأسرع وقت وأعلى معدل نجاح في المملكة العربية السعودية.',
      'footer.quick_links': 'روابط سريعة',
      'footer.services': 'خدماتنا',
      'footer.legal': 'معلومات قانونية',
      'footer.follow': 'تابعنا على',
      'footer.newsletter.title': 'اشترك في نشرتنا الإخبارية',
      'footer.newsletter.desc': 'احصل على آخر التحديثات حول متطلبات التأشيرات والعروض الخاصة',
      'footer.newsletter.button': 'اشتراك',
      'footer.copyright': '© 2024 مكتب فيزا الشنغن. جميع الحقوق محفوظة.',
      'footer.licensed': 'مرخص من وزارة التجارة السعودية',
      'footer.member': 'عضو غرفة الرياض التجارية',
    },
    en: {
      // Header
      'header.home': 'Home',
      'header.services': 'Services',
      'header.about': 'About',
      'header.requirements': 'Requirements',
      'header.faq': 'FAQ',
      'header.contact': 'Contact',
      'header.call_now': 'Call Now',
      'header.request_service': 'Request Service',
      'header.company_name': 'Schengen Visa Office',
      'header.company_tagline': 'Visa Processing Experts',
      
      // Hero
      'hero.badge': '✈️ Schengen Visa Experts in Saudi Arabia',
      'hero.title': 'Get Your Schengen Visa',
      'hero.subtitle': 'Easy and Fast',
      'hero.description': 'We simplify the process of obtaining a Schengen visa for European countries with guaranteed highest success rates and fastest procedures',
      'hero.request_now': 'Request Service Now',
      'hero.free_consultation': 'Free Consultation',
      'hero.stats.clients': '+5000',
      'hero.stats.clients_label': 'Happy Clients',
      'hero.stats.success': '95%',
      'hero.stats.success_label': 'Success Rate',
      'hero.stats.processing': '7 Days',
      'hero.stats.processing_label': 'Average Processing',

      // Services
      'services.badge': 'Our Complete Services',
      'services.title': 'We provide comprehensive services',
      'services.subtitle': 'for Schengen visa processing',
      'services.description': 'From initial consultation to obtaining your visa, we are with you every step to ensure your application success',
      'services.consultation.title': 'Free Consultations',
      'services.consultation.desc': 'We provide comprehensive free consultations about Schengen visa requirements and best ways to get approval',
      'services.appointment.title': 'Embassy Appointment Booking',
      'services.appointment.desc': 'We book electronic appointments at embassies and consulates as quickly as possible',
      'services.forms.title': 'Form Completion',
      'services.forms.desc': 'Complete all application forms accurately and professionally to ensure no rejection for administrative reasons',
      'services.insurance.title': 'Health Insurance',
      'services.insurance.desc': 'Provide required health insurance that covers the entire trip period and all Schengen countries',
      'services.flight.title': 'Flight Booking',
      'services.flight.desc': 'Book flight tickets and help choose the best routes and suitable prices (optional)',
      'services.hotel.title': 'Hotel Booking',
      'services.hotel.desc': 'Book suitable hotels and arrange accommodation in European countries according to your trip itinerary (optional)',
      'services.tracking.title': 'Application Tracking',
      'services.tracking.desc': 'Continuous monitoring of application status from submission until visa receipt and delivery',
      'services.cta.title': 'Ready to Start Now?',
      'services.cta.desc': 'Get a free consultation and start your journey to obtain a Schengen visa today',
      'services.cta.button': 'Get Free Consultation',

      // Steps
      'steps.badge': 'How We Work',
      'steps.title': 'Steps to Get Your',
      'steps.subtitle': 'Schengen Visa',
      'steps.description': 'A simple and organized five-step process to ensure you get your visa in the shortest time with the highest success rate',
      'steps.step1.title': 'Contact and Consultation',
      'steps.step1.desc': 'Contact us for a free consultation and comprehensive assessment of your case to determine the appropriate visa type',
      'steps.step2.title': 'Document Preparation',
      'steps.step2.desc': 'We help you prepare all required documents according to embassy requirements and review them carefully',
      'steps.step3.title': 'Form Completion and Submission',
      'steps.step3.desc': 'We complete all forms accurately, book embassy appointment, and submit the application on your behalf',
      'steps.step4.title': 'Application Status Tracking',
      'steps.step4.desc': 'We track your application daily and keep you updated with all developments until the final decision',
      'steps.step5.title': 'Visa Collection and Travel',
      'steps.step5.desc': 'After approval, we help you collect the visa and provide important travel and arrival tips',
      'steps.bottom_cta.title': 'Ready to Start Your Journey?',
      'steps.bottom_cta.desc': 'Start with us today and get your Schengen visa in the shortest time with the highest success rate',
      'steps.bottom_cta.button': 'Start Now - Free Consultation',

      // Documents
      'documents.badge': 'Required Documents',
      'documents.title': 'Papers and Documents',
      'documents.subtitle': 'Needed for Application',
      'documents.description': 'Comprehensive list of all documents required to obtain a Schengen visa. We help you prepare and organize them',
      'documents.required': 'Required',
      'documents.passport.title': 'Passport',
      'documents.passport.desc': 'Valid passport for at least 6 months',
      'documents.photos.title': 'Personal Photos',
      'documents.photos.desc': 'Two recent personal photos with white background',
      'documents.bank.title': 'Bank Statement',
      'documents.bank.desc': 'Bank statement for the last three months',
      'documents.work.title': 'Work Proof',
      'documents.work.desc': 'Letter from employer or commercial registration',
      'documents.travel.title': 'Travel Bookings',
      'documents.travel.desc': 'Flight tickets and hotel reservations',
      'documents.insurance.title': 'Health Insurance',
      'documents.insurance.desc': 'Health insurance covering Schengen countries',
      'documents.additional.title': 'Additional Documents (Case-specific)',
      'documents.additional.desc': 'You may need these documents depending on your personal and family situation',
      'documents.help.title': 'Need Help with Preparation?',
      'documents.help.desc': 'We are here to help you prepare and organize all required documents correctly',
      'documents.help.button1': 'Documents List PDF',
      'documents.help.button2': 'Request Help',

      // Countries
      'countries.badge': 'Available Countries',
      'countries.title': 'Schengen Zone Countries',
      'countries.subtitle': 'We Cover',
      'countries.description': 'We help you get a visa for all Schengen zone countries with specialized expertise in each country',
      'countries.processing_time': 'Processing Time',
      'countries.popularity': 'Destination Popularity',
      'countries.request_visa': 'Request Visa for',
      'countries.one_visa.title': 'One Visa for All Schengen Countries',
      'countries.one_visa.desc': 'With one Schengen visa, you can visit all 26 countries in the Schengen zone freely for up to 90 days within a 180-day period',

      // About
      'about.badge': 'About Company',
      'about.title': 'Why Choose',
      'about.subtitle': 'Schengen Visa Office?',
      'about.description': 'We are a specialized company in Schengen visa processing with an impressive track record of success and trust of thousands of clients',

      // FAQ
      'faq.badge': 'Frequently Asked Questions',
      'faq.title': 'Answers to the Most',
      'faq.subtitle': 'Common Questions',
      'faq.description': 'Comprehensive answers to all questions that might come to mind about Schengen visas and our services',
      'faq.cta.title': 'Didn\'t Find an Answer to Your Question?',
      'faq.cta.desc': 'Our specialized team is ready to answer all your inquiries and help solve any problem',
      'faq.cta.button1': 'Contact Us Now',
      'faq.cta.button2': 'Direct WhatsApp',

      // Contact
      'contact.badge': 'Contact Us',
      'contact.title': 'Get in Touch',
      'contact.subtitle': 'and Start Your Journey Today',
      'contact.description': 'Our team is ready to answer all your questions and help you get your Schengen visa',
      'contact.info.title': 'Contact Information',
      'contact.phone.title': 'Phone / WhatsApp',
      'contact.email.title': 'Email',
      'contact.address.title': 'Address',
      'contact.hours.title': 'Working Hours',
      'contact.quick.title': 'Quick Contact',
      'contact.quick.whatsapp': 'Direct WhatsApp',
      'contact.quick.call': 'Direct Call',
      'contact.quick.email': 'Send Email',
      'contact.map.title': 'Our Location on Map',
      'contact.map.desc': 'Visit us at our office in the heart of Riyadh for personal consultation',
      'contact.map.button': 'View on Google Maps',
      'contact.form.title': 'Send Us a Message',
      'contact.form.desc': 'Fill out the form below and we will contact you within 24 hours',
      'contact.form.name': 'Full Name',
      'contact.form.phone': 'Phone Number',
      'contact.form.email': 'Email',
      'contact.form.country': 'Desired Country',
      'contact.form.message': 'Inquiry Details',
      'contact.form.send': 'Send Message',
      'contact.form.privacy': '🔒 We respect your privacy. All information sent is protected and will not be shared with third parties. We will use your information only to respond to your inquiry and provide our services.',

      // Footer
      'footer.company.desc': 'Your trusted partner for obtaining Schengen visas in the shortest time with the highest success rate in Saudi Arabia.',
      'footer.quick_links': 'Quick Links',
      'footer.services': 'Our Services',
      'footer.legal': 'Legal Information',
      'footer.follow': 'Follow Us',
      'footer.newsletter.title': 'Subscribe to Our Newsletter',
      'footer.newsletter.desc': 'Get the latest updates on visa requirements and special offers',
      'footer.newsletter.button': 'Subscribe',
      'footer.copyright': '© 2024 Schengen Visa Office. All rights reserved.',
      'footer.licensed': 'Licensed by Saudi Ministry of Commerce',
      'footer.member': 'Member of Riyadh Chamber of Commerce',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
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