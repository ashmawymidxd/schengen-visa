import { MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Countries = () => {
  const { t, isRTL } = useLanguage();

  const countries = [
    {
      name: "ألمانيا",
      nameEn: "Germany",
      flag: "🇩🇪",
      description: "أكبر اقتصاد في أوروبا",
      descriptionEn: "Europe's largest economy",
      processingTime: "15 يوم",
      processingTimeEn: "15 days",
      popularity: "عالية جداً",
      popularityEn: "Very High"
    },
    {
      name: "فرنسا",
      nameEn: "France", 
      flag: "🇫🇷",
      description: "عاصمة الثقافة والفنون",
      descriptionEn: "Capital of culture and arts",
      processingTime: "10 يوم",
      processingTimeEn: "10 days",
      popularity: "عالية جداً",
      popularityEn: "Very High"
    },
    {
      name: "إيطاليا",
      nameEn: "Italy",
      flag: "🇮🇹",
      description: "تاريخ وحضارة عريقة",
      descriptionEn: "Rich history and civilization",
      processingTime: "12 يوم",
      processingTimeEn: "12 days", 
      popularity: "عالية",
      popularityEn: "High"
    },
    {
      name: "إسبانيا",
      nameEn: "Spain",
      flag: "🇪🇸",
      description: "الثقافة الأندلسية الأصيلة",
      descriptionEn: "Authentic Andalusian culture",
      processingTime: "14 يوم",
      processingTimeEn: "14 days",
      popularity: "عالية",
      popularityEn: "High"
    },
    {
      name: "هولندا",
      nameEn: "Netherlands",
      flag: "🇳🇱",
      description: "أزهار التوليب والقنوات",
      descriptionEn: "Tulips and canals",
      processingTime: "8 يوم",
      processingTimeEn: "8 days",
      popularity: "متوسطة",
      popularityEn: "Medium"
    },
    {
      name: "بلجيكا",
      nameEn: "Belgium", 
      flag: "🇧🇪",
      description: "عاصمة الاتحاد الأوروبي",
      descriptionEn: "Capital of the European Union",
      processingTime: "10 يوم",
      processingTimeEn: "10 days",
      popularity: "متوسطة",
      popularityEn: "Medium"
    },
    {
      name: "النمسا",
      nameEn: "Austria",
      flag: "🇦🇹",
      description: "جبال الألب الخلابة",
      descriptionEn: "Beautiful Alpine mountains", 
      processingTime: "12 يوم",
      processingTimeEn: "12 days",
      popularity: "متوسطة",
      popularityEn: "Medium"
    },
    {
      name: "اليونان",
      nameEn: "Greece",
      flag: "🇬🇷",
      description: "مهد الحضارة الغربية",
      descriptionEn: "Cradle of Western civilization",
      processingTime: "15 يوم",
      processingTimeEn: "15 days",
      popularity: "عالية",
      popularityEn: "High"
    },
    {
      name: "البرتغال",
      nameEn: "Portugal",
      flag: "🇵🇹", 
      description: "شواطئ الأطلسي الساحرة",
      descriptionEn: "Charming Atlantic beaches",
      processingTime: "16 يوم",
      processingTimeEn: "16 days",
      popularity: "متوسطة",
      popularityEn: "Medium"
    }
  ];

  const getPopularityColor = (popularity: string) => {
    const popularityAr = popularity;
    const popularityCheck = isRTL ? popularityAr : (
      popularityAr === "عالية جداً" ? "Very High" :
      popularityAr === "عالية" ? "High" :
      popularityAr === "متوسطة" ? "Medium" : popularityAr
    );
    
    switch (popularityCheck) {
      case "عالية جداً":
      case "Very High":
        return "text-red-500 bg-red-50";
      case "عالية":
      case "High":
        return "text-orange-500 bg-orange-50";
      case "متوسطة":
      case "Medium":
        return "text-blue-500 bg-blue-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  return (
    <section id="countries" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block bg-primary/10 text-primary px-4 py-2 rounded-full ${isRTL ? 'font-arabic' : ''} font-medium mb-4`}>
            {t('countries.badge')}
          </span>
          <h2 className={`text-4xl lg:text-5xl font-bold text-foreground mb-6 ${isRTL ? 'font-arabic' : ''}`}>
            {t('countries.title')}
            <span className="block text-primary">{t('countries.subtitle')}</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isRTL ? 'font-arabic' : ''} leading-relaxed`}>
            {t('countries.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.map((country, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-strong)] transition-all duration-300 hover:-translate-y-2 border-border/50 bg-white overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{country.flag}</div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                      {isRTL ? country.name : country.nameEn}
                    </h3>
                    <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                      {isRTL ? country.description : country.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-sm ${isRTL ? 'font-arabic' : ''} text-muted-foreground`}>
                        {t('countries.processing_time')}
                      </span>
                    </div>
                    <span className={`text-sm font-semibold text-primary ${isRTL ? 'font-arabic' : ''}`}>
                      {isRTL ? country.processingTime : country.processingTimeEn}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-sm ${isRTL ? 'font-arabic' : ''} text-muted-foreground`}>
                        {t('countries.popularity')}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${isRTL ? 'font-arabic' : ''} ${getPopularityColor(country.popularity)}`}>
                      {isRTL ? country.popularity : country.popularityEn}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50">
                  <button className={`w-full text-primary hover:text-primary-dark ${isRTL ? 'font-arabic' : ''} font-medium text-sm transition-colors`}>
                    {t('countries.request_visa')} {isRTL ? country.name : country.nameEn} {isRTL ? '←' : '→'}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-subtle rounded-3xl p-8 text-center border border-border/50">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className={`text-2xl font-bold text-foreground mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('countries.one_visa.title')}
          </h3>
          <p className={`text-muted-foreground mb-6 ${isRTL ? 'font-arabic' : ''} max-w-2xl mx-auto`}>
            {t('countries.one_visa.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["النرويج", "سويسرا", "التشيك", "المجر", "بولندا", "سلوفاكيا", "سلوفينيا", "لاتفيا", "ليتوانيا", "إستونيا", "مالطا", "لوكسمبورغ", "فنلندا", "الدنمارك", "السويد", "أيسلندا", "ليشتنشتاين"].map((country) => (
              <span 
                key={country}
                className={`px-3 py-1 bg-primary/10 text-primary rounded-full text-sm ${isRTL ? 'font-arabic' : ''}`}
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;