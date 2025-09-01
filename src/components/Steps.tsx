import { 
  Phone, 
  FileText, 
  CheckCircle, 
  Eye, 
  Plane,
  ArrowDown
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Steps = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: Phone,
      number: "01",
      title: t('steps.step1.title'),
      description: t('steps.step1.desc'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      number: "02", 
      title: t('steps.step2.title'),
      description: t('steps.step2.desc'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      number: "03",
      title: t('steps.step3.title'),
      description: t('steps.step3.desc'),
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Eye,
      number: "04",
      title: t('steps.step4.title'),
      description: t('steps.step4.desc'),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Plane,
      number: "05",
      title: t('steps.step5.title'),
      description: t('steps.step5.desc'),
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="steps" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${isRTL ? 'font-arabic' : ''} font-medium mb-4`}>
            {t('steps.badge')}
          </span>
          <h2 className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t('steps.title')}
            <span className="block text-primary">{t('steps.subtitle')}</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''} leading-relaxed`}>
            {t('steps.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 lg:mb-16">
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`z-10 w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-[var(--shadow-strong)] relative z-10`}>
                    <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div className="z-20 absolute -top-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <span className={`text-sm lg:text-base font-bold text-accent-foreground ${isRTL ? 'font-arabic' : ''}`}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className={`flex-1 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                  <h3 className={`text-2xl lg:text-3xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                    {step.title}
                  </h3>
                  <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector - only for non-last items */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mb-8 lg:mb-12">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full relative">
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <ArrowDown className="w-4 h-4 text-primary/60" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-[var(--shadow-strong)] max-w-2xl mx-auto">
            <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('steps.bottom_cta.title')}
            </h3>
            <p className={`text-lg mb-6 ${isRTL ? 'font-arabic' : ''} opacity-90`}>
              {t('steps.bottom_cta.desc')}
            </p>
            <button className={`btn-accent text-lg px-8 py-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('steps.bottom_cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;