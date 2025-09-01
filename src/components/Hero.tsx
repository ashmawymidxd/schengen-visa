import { ArrowLeft, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "../assets/hero-schengen.jpg";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-[25px] sm:px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-8">
            <span className={`inline-block bg-accent/20 text-accent-dark px-4 py-2 rounded-full ${isRTL ? 'font-arabic' : ''} font-medium mb-6`}>
              {t('hero.badge')}
            </span>
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''} leading-tight`}>
              {t('hero.title')}
              <span className="block text-accent">{t('hero.subtitle')}</span>
            </h1>
            <p className={`text-xl lg:text-2xl text-white/90 mb-8 ${isRTL ? 'font-arabic' : ''} leading-relaxed`}>
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <Button className={`btn-hero text-xl px-10 py-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.request_now')}
              {isRTL ? (
                <ArrowLeft className="w-6 h-6 mr-3" />
              ) : (
                <ArrowRight className="w-6 h-6 ml-3" />
              )}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className={`text-dark border-white/30 hover:bg-white/10 text-xl px-8 py-6 ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('hero.free_consultation')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Award className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.stats.clients')}</h3>
              <p className={`text-white/80 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.stats.clients_label')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.stats.success')}</h3>
              <p className={`text-white/80 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.stats.success_label')}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.stats.processing')}</h3>
              <p className={`text-white/80 ${isRTL ? 'font-arabic' : ''}`}>{t('hero.stats.processing_label')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;