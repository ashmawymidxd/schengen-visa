import { 
  FileText, 
  Camera, 
  CreditCard, 
  Briefcase, 
  Plane, 
  Shield,
  CheckCircle2,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const Documents = () => {
  const { t, isRTL } = useLanguage();

  const documents = [
    {
      icon: FileText,
      title: t('documents.passport.title'),
      description: t('documents.passport.desc'),
      details: [
        "صفحتان فارغتان على الأقل",
        "نسخة من الصفحات المهمة", 
        "جوازات سفر قديمة إن وجدت"
      ],
      required: true
    },
    {
      icon: Camera,
      title: t('documents.photos.title'),
      description: t('documents.photos.desc'),
      details: [
        "مقاس 35×45 مم",
        "خلفية بيضاء موحدة",
        "وضعية مواجهة بدون نظارة شمسية"
      ],
      required: true
    },
    {
      icon: CreditCard,
      title: t('documents.bank.title'),
      description: t('documents.bank.desc'),
      details: [
        "باللغة العربية والإنجليزية",
        "يظهر حركة مالية منتظمة",
        "ختم البنك الرسمي"
      ],
      required: true
    },
    {
      icon: Briefcase,
      title: t('documents.work.title'),
      description: t('documents.work.desc'),
      details: [
        "خطاب رسمي من صاحب العمل",
        "يحدد الراتب ومدة الإجازة",
        "مترجم ومصدق إذا لزم الأمر"
      ],
      required: true
    },
    {
      icon: Plane,
      title: t('documents.travel.title'),
      description: t('documents.travel.desc'),
      details: [
        "تذاكر ذهاب وإياب مؤكدة",
        "حجز فندقي كامل المدة",
        "برنامج سياحي مفصل"
      ],
      required: true
    },
    {
      icon: Shield,
      title: t('documents.insurance.title'),
      description: t('documents.insurance.desc'),
      details: [
        "تغطية 30,000 يورو على الأقل",
        "يشمل جميع دول الشنغن",
        "صالح طوال فترة الإقامة"
      ],
      required: true
    }
  ];

  const additionalDocuments = [
    "شهادة الميلاد للأطفال",
    "موافقة الوالدين للقُصر", 
    "شهادة الزواج للمتزوجين",
    "كشف راتب للموظفين"
  ];

  return (
    <section id="requirements" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${isRTL ? 'font-arabic' : ''} font-medium mb-4`}>
            {t('documents.badge')}
          </span>
          <h2 className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t('documents.title')}
            <span className="block text-primary">{t('documents.subtitle')}</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''} leading-relaxed`}>
            {t('documents.description')}
          </p>
        </div>

        {/* Main Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {documents.map((doc, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-white/80 backdrop-blur-sm relative overflow-hidden"
            >
              {doc.required && (
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-success text-success-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {t('documents.required')}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <doc.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className={`text-xl font-bold text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {doc.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className={`text-muted-foreground text-center ${isRTL ? 'font-arabic' : ''}`}>
                  {doc.description}
                </p>
                
                <div className="space-y-2">
                  {doc.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Documents Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-medium)] border border-border/50">
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('documents.additional.title')}
            </h3>
            <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {t('documents.additional.desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalDocuments.map((doc, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50"
              >
                <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                <span className={`text-sm ${isRTL ? 'font-arabic' : ''} text-muted-foreground`}>
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-[var(--shadow-strong)] max-w-2xl mx-auto">
            <Download className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('documents.help.title')}
            </h3>
            <p className={`text-lg mb-6 ${isRTL ? 'font-arabic' : ''} opacity-90`}>
              {t('documents.help.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`btn-accent text-lg px-6 py-3 ${isRTL ? 'font-arabic' : ''}`}>
                {t('documents.help.button1')}
              </button>
              <button className={`bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl ${isRTL ? 'font-arabic' : ''} transition-colors`}>
                {t('documents.help.button2')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;