import { 
  MessageCircle, 
  Calendar, 
  FileCheck, 
  Shield, 
  Plane, 
  Hotel,
  Eye
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: MessageCircle,
      title: t('services.consultation.title'),
      description: t('services.consultation.desc'),
      color: "text-blue-500"
    },
    {
      icon: Calendar,
      title: t('services.appointment.title'),
      description: t('services.appointment.desc'),
      color: "text-green-500"
    },
    {
      icon: FileCheck,
      title: t('services.forms.title'),
      description: t('services.forms.desc'),
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: t('services.insurance.title'),
      description: t('services.insurance.desc'),
      color: "text-red-500"
    },
    {
      icon: Plane,
      title: t('services.flight.title'),
      description: t('services.flight.desc'),
      color: "text-indigo-500"
    },
    {
      icon: Hotel,
      title: t('services.hotel.title'),
      description: t('services.hotel.desc'),
      color: "text-yellow-500"
    },
    {
      icon: Eye,
      title: t('services.tracking.title'),
      description: t('services.tracking.desc'),
      color: "text-teal-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${isRTL ? 'font-arabic' : ''} font-medium mb-4`}>
            {t('services.badge')}
          </span>
          <h2 className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t('services.title')}
            <span className="block text-primary">{t('services.subtitle')}</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''} leading-relaxed`}>
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-white/70 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-[var(--shadow-medium)] group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </div>
                <CardTitle className={`text-xl font-bold text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-muted-foreground text-center ${isRTL ? 'font-arabic' : ''} leading-relaxed`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-medium)] border border-border/50 max-w-2xl mx-auto">
            <h3 className={`text-2xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('services.cta.title')}
            </h3>
            <p className={`text-muted-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('services.cta.desc')}
            </p>
            <button className={`btn-hero ${isRTL ? 'font-arabic' : ''}`}>
              {t('services.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;