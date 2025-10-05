import {
  Clock,
  Users,
  PlaneIcon,
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";

const Countries = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const countries = [
    {
      name: "ألمانيا",
      nameEn: "Germany",
      flag: "https://flagcdn.com/w40/de.png",
      flagSrcSet: "https://flagcdn.com/w80/de.png 2x",
      description: "أكبر اقتصاد في أوروبا",
      descriptionEn: "Europe's largest economy",
      processingTime: "15 يوم",
      processingTimeEn: "15 days",
      popularity: "عالية جداً",
      popularityEn: "Very High",
    },
    {
      name: "فرنسا",
      nameEn: "France",
      flag: "https://flagcdn.com/w40/fr.png",
      flagSrcSet: "https://flagcdn.com/w80/fr.png 2x",
      description: "عاصمة الثقافة والفنون",
      descriptionEn: "Capital of culture and arts",
      processingTime: "10 يوم",
      processingTimeEn: "10 days",
      popularity: "عالية جداً",
      popularityEn: "Very High",
    },
    {
      name: "إيطاليا",
      nameEn: "Italy",
      flag: "https://flagcdn.com/w40/it.png",
      flagSrcSet: "https://flagcdn.com/w80/it.png 2x",
      description: "تاريخ وحضارة عريقة",
      descriptionEn: "Rich history and civilization",
      processingTime: "12 يوم",
      processingTimeEn: "12 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "إسبانيا",
      nameEn: "Spain",
      flag: "https://flagcdn.com/w40/es.png",
      flagSrcSet: "https://flagcdn.com/w80/es.png 2x",
      description: "الثقافة الأندلسية الأصيلة",
      descriptionEn: "Authentic Andalusian culture",
      processingTime: "14 يوم",
      processingTimeEn: "14 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "هولندا",
      nameEn: "Netherlands",
      flag: "https://flagcdn.com/w40/nl.png",
      flagSrcSet: "https://flagcdn.com/w80/nl.png 2x",
      description: "أزهار التوليب والقنوات",
      descriptionEn: "Tulips and canals",
      processingTime: "8 يوم",
      processingTimeEn: "8 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "بلجيكا",
      nameEn: "Belgium",
      flag: "https://flagcdn.com/w40/be.png",
      flagSrcSet: "https://flagcdn.com/w80/be.png 2x",
      description: "عاصمة الاتحاد الأوروبي",
      descriptionEn: "Capital of the European Union",
      processingTime: "10 يوم",
      processingTimeEn: "10 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "النمسا",
      nameEn: "Austria",
      flag: "https://flagcdn.com/w40/at.png",
      flagSrcSet: "https://flagcdn.com/w80/at.png 2x",
      description: "جبال الألب الخلابة",
      descriptionEn: "Beautiful Alpine mountains",
      processingTime: "12 يوم",
      processingTimeEn: "12 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "اليونان",
      nameEn: "Greece",
      flag: "https://flagcdn.com/w40/gr.png",
      flagSrcSet: "https://flagcdn.com/w80/gr.png 2x",
      description: "مهد الحضارة الغربية",
      descriptionEn: "Cradle of Western civilization",
      processingTime: "15 يوم",
      processingTimeEn: "15 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "البرتغال",
      nameEn: "Portugal",
      flag: "https://flagcdn.com/w40/pt.png",
      flagSrcSet: "https://flagcdn.com/w80/pt.png 2x",
      description: "شواطئ الأطلسي الساحرة",
      descriptionEn: "Charming Atlantic beaches",
      processingTime: "16 يوم",
      processingTimeEn: "16 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "المملكة المتحدة",
      nameEn: "UK",
      flag: "https://flagcdn.com/w40/gb.png",
      flagSrcSet: "https://flagcdn.com/w80/gb.png 2x",
      description: "وجهة دراسية وعمل شهيرة",
      descriptionEn: "Popular destination for study and work",
      processingTime: "15 يوم",
      processingTimeEn: "15 days",
      popularity: "عالية جداً",
      popularityEn: "Very High",
    },
    {
      name: "الولايات المتحدة",
      nameEn: "USA",
      flag: "https://flagcdn.com/w40/us.png",
      flagSrcSet: "https://flagcdn.com/w80/us.png 2x",
      description: "أرض الفرص المتنوعة",
      descriptionEn: "Land of diverse opportunities",
      processingTime: "20 يوم",
      processingTimeEn: "20 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "أستراليا",
      nameEn: "Australia",
      flag: "https://flagcdn.com/w40/au.png",
      flagSrcSet: "https://flagcdn.com/w80/au.png 2x",
      description: "وجهة للهجرة والدراسة",
      descriptionEn: "Destination for migration and study",
      processingTime: "18 يوم",
      processingTimeEn: "18 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "كندا",
      nameEn: "Canada",
      flag: "https://flagcdn.com/w40/ca.png",
      flagSrcSet: "https://flagcdn.com/w80/ca.png 2x",
      description: "واحدة من أفضل الدول للهجرة",
      descriptionEn: "One of the best countries for immigration",
      processingTime: "25 يوم",
      processingTimeEn: "25 days",
      popularity: "عالية جداً",
      popularityEn: "Very High",
    },
    {
      name: "نيوزيلندا",
      nameEn: "New Zealand",
      flag: "https://flagcdn.com/w40/nz.png",
      flagSrcSet: "https://flagcdn.com/w80/nz.png 2x",
      description: "طبيعة خلابة وفرص عمل",
      descriptionEn: "Stunning nature and work opportunities",
      processingTime: "20 يوم",
      processingTimeEn: "20 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "سويسرا",
      nameEn: "Switzerland",
      flag: "https://flagcdn.com/w40/ch.png",
      flagSrcSet: "https://flagcdn.com/w80/ch.png 2x",
      description: "بلد البنوك والساعات",
      descriptionEn: "Country of banks and watches",
      processingTime: "12 يوم",
      processingTimeEn: "12 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "البرازيل",
      nameEn: "Brazil",
      flag: "https://flagcdn.com/w40/br.png",
      flagSrcSet: "https://flagcdn.com/w80/br.png 2x",
      description: "أكبر بلد في أمريكا الجنوبية",
      descriptionEn: "Largest country in South America",
      processingTime: "15 يوم",
      processingTimeEn: "15 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "إثيوبيا",
      nameEn: "Ethiopia",
      flag: "https://flagcdn.com/w40/et.png",
      flagSrcSet: "https://flagcdn.com/w80/et.png 2x",
      description: "تاريخ عريق في إفريقيا",
      descriptionEn: "Rich history in Africa",
      processingTime: "10 يوم",
      processingTimeEn: "10 days",
      popularity: "منخفضة",
      popularityEn: "Low",
    },
    {
      name: "تركيا",
      nameEn: "Turkey",
      flag: "https://flagcdn.com/w40/tr.png",
      flagSrcSet: "https://flagcdn.com/w80/tr.png 2x",
      description: "جسر بين الشرق والغرب",
      descriptionEn: "Bridge between East and West",
      processingTime: "7 يوم",
      processingTimeEn: "7 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "تايلاند",
      nameEn: "Thailand",
      flag: "https://flagcdn.com/w40/th.png",
      flagSrcSet: "https://flagcdn.com/w80/th.png 2x",
      description: "وجهة سياحية عالمية",
      descriptionEn: "Global tourist destination",
      processingTime: "8 يوم",
      processingTimeEn: "8 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "روسيا",
      nameEn: "Russia",
      flag: "https://flagcdn.com/w40/ru.png",
      flagSrcSet: "https://flagcdn.com/w80/ru.png 2x",
      description: "أكبر دولة في العالم",
      descriptionEn: "Largest country in the world",
      processingTime: "14 يوم",
      processingTimeEn: "14 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "ماليزيا",
      nameEn: "Malaysia",
      flag: "https://flagcdn.com/w40/my.png",
      flagSrcSet: "https://flagcdn.com/w80/my.png 2x",
      description: "بلد متعدد الثقافات",
      descriptionEn: "Multicultural country",
      processingTime: "9 يوم",
      processingTimeEn: "9 days",
      popularity: "عالية",
      popularityEn: "High",
    },
    {
      name: "البحرين",
      nameEn: "Bahrain",
      flag: "https://flagcdn.com/w40/bh.png",
      flagSrcSet: "https://flagcdn.com/w80/bh.png 2x",
      description: "جزيرة في الخليج العربي",
      descriptionEn: "Island in the Arabian Gulf",
      processingTime: "5 يوم",
      processingTimeEn: "5 days",
      popularity: "متوسطة",
      popularityEn: "Medium",
    },
    {
      name: "اليابان",
      nameEn: "Japan",
      flag: "https://flagcdn.com/w40/jp.png",
      flagSrcSet: "https://flagcdn.com/w80/jp.png 2x",
      description: "بلد التكنولوجيا المتقدمة",
      descriptionEn: "Land of advanced technology",
      processingTime: "12 يوم",
      processingTimeEn: "12 days",
      popularity: "عالية جداً",
      popularityEn: "Very High",
    },
    {
      name: "السلفادور",
      nameEn: "El Salvador",
      flag: "https://flagcdn.com/w40/sv.png",
      flagSrcSet: "https://flagcdn.com/w80/sv.png 2x",
      description: "أصغر بلد في أمريكا الوسطى",
      descriptionEn: "Smallest country in Central America",
      processingTime: "10 يوم",
      processingTimeEn: "10 days",
      popularity: "منخفضة",
      popularityEn: "Low",
    },
  ];

  const getPopularityColor = (popularity: string) => {
    const popularityAr = popularity;
    const popularityCheck = isRTL
      ? popularityAr
      : popularityAr === "عالية جداً"
      ? "Very High"
      : popularityAr === "عالية"
      ? "High"
      : popularityAr === "متوسطة"
      ? "Medium"
      : popularityAr;

    switch (popularityCheck) {
      case "عالية جداً":
      case "Very High":
        return "text-amber-600 bg-amber-50 border border-amber-200";
      case "عالية":
      case "High":
        return "text-yellow-600 bg-yellow-50 border border-yellow-200";
      case "متوسطة":
      case "Medium":
        return "text-gray-600 bg-gray-50 border border-gray-200";
      default:
        return "text-gray-500 bg-gray-50 border border-gray-200";
    }
  };

  const getPopularityGradient = (popularity: string) => {
    const popularityAr = popularity;
    const popularityCheck = isRTL
      ? popularityAr
      : popularityAr === "عالية جداً"
      ? "Very High"
      : popularityAr === "عالية"
      ? "High"
      : popularityAr === "متوسطة"
      ? "Medium"
      : popularityAr;

    switch (popularityCheck) {
      case "عالية جداً":
      case "Very High":
        return "bg-gradient-to-r from-amber-500 to-yellow-500";
      case "عالية":
      case "High":
        return "bg-gradient-to-r from-yellow-500 to-amber-400";
      case "متوسطة":
      case "Medium":
        return "bg-gradient-to-r from-gray-500 to-gray-400";
      default:
        return "bg-gradient-to-r from-gray-400 to-gray-300";
    }
  };

  // Filter countries based on search query
  const filteredCountries = countries.filter((country) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      country.name.toLowerCase().includes(searchLower) ||
      country.nameEn.toLowerCase().includes(searchLower) ||
      country.description.toLowerCase().includes(searchLower) ||
      country.descriptionEn.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <section
        id="countries"
        className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-400/10 to-gray-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div
            className={`text-center mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 text-blue-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              {t("countries.badge")}
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {t("countries.description")}
            </p>
          </div>

          {/* Search Input */}
          <div
            className={`max-w-md mx-auto mb-12 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Search Icon */}
              <Search
                className={`absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-600 ${
                  isRTL ? "right-4" : "left-4"
                }`}
              />

              {/* Input Field */}
              <input
                type="text"
                dir={isRTL ? "rtl" : "ltr"}
                placeholder={
                  isRTL ? "ابحث عن الدولة..." : "Search for a country..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-4 bg-white/80 backdrop-blur-sm border rounded-full 
        focus:outline-none focus:ring-2 transition-all duration-300 text-gray-700 placeholder-gray-400
        ${isRTL ? "pr-12 pl-4 text-right" : "pl-12 pr-4 text-left"} 
        border-blue-200/50 focus:ring-blue-500/20 focus:border-blue-400`}
              />

              {/* Clear Button (✕) */}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gold-500 transition-colors duration-200 ${
                    isRTL ? "left-4" : "right-4"
                  }`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Result Count */}
            <div className="text-center mt-3 text-sm text-gray-500">
              {isRTL
                ? `عرض ${filteredCountries.length} من ${countries.length} دولة`
                : `Showing ${filteredCountries.length} of ${countries.length} countries`}
            </div>
          </div>

          {/* Countries Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {filteredCountries.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50">
                  <Search className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {isRTL ? "لم يتم العثور على نتائج" : "No results found"}
                  </h3>
                  <p className="text-gray-500">
                    {isRTL
                      ? "جرب البحث بكلمات مختلفة أو تأكد من الإملاء"
                      : "Try searching with different keywords or check your spelling"}
                  </p>
                </div>
              </div>
            ) : (
              filteredCountries.map((country, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 rounded-3xl shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 ease-out"></div>

                  <Card className="relative z-10 border-0 bg-transparent shadow-none overflow-visible">
                    <CardContent className="p-6 relative z-10">
                      {/* Flag with Gradient Background */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                          ></div>
                          <div
                            className={`relative bg-gradient-to-br from-gray-100 to-gray-300 p-3 rounded-xl shadow-sm`}
                          >
                            <img
                              src={country.flag}
                              className="w-12 h-8 object-cover rounded"
                              alt={isRTL ? country.name : country.nameEn}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                            {isRTL ? country.name : country.nameEn}
                          </h3>
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                            {isRTL
                              ? country.description
                              : country.descriptionEn}
                          </p>
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-600">
                              {t("countries.processing_time")}
                            </span>
                          </div>
                          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {isRTL
                              ? country.processingTime
                              : country.processingTimeEn}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-sky-500" />
                            <span className="text-sm text-gray-600">
                              {t("countries.popularity")}
                            </span>
                          </div>
                          <div className="relative">
                            <span
                              className={`text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm ${getPopularityColor(
                                country.popularity
                              )}`}
                            >
                              {isRTL
                                ? country.popularity
                                : country.popularityEn}
                            </span>
                            <div
                              className={`absolute inset-0 rounded-full ${getPopularityGradient(
                                country.popularity
                              )} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-4 pt-4 border-t border-gray-200/50 group-hover:border-blue-200/50 transition-colors duration-300">
                        <a
                          href="https://wa.me/+201554300351"
                          target="__blanck"
                          className="group/btn w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-all duration-300 hover:gap-3"
                        >
                          {t("countries.request_visa")}{" "}
                          {isRTL ? country.name : country.nameEn}
                          <ArrowRight
                            className={`w-4 h-4 transform transition-transform duration-300 ${
                              isRTL
                                ? "rotate-180 group-hover/btn:-translate-x-1"
                                : "group-hover/btn:translate-x-1"
                            }`}
                          />
                        </a>
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-3/4 transition-all duration-500 ease-out"></div>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Countries;
