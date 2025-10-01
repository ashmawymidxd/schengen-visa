import { useState, useEffect } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { schengenCountries } from "../data/countries.js";
import { useLanguage } from "@/contexts/LanguageContext";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CountryCards() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-6 container relative">
      {/* Section Header */}
      <div
        className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm">
          <MapPin className="w-4 h-4" />
          {t("countries.title")}
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-arabic">
          {t("countries.subtitle")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-arabic leading-relaxed">
          {t("countries.description")}
        </p>
      </div>

      {/* 🔹 Countries Banner with Swiper */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-6 shadow-lg">
        <Swiper
          dir={isRTL ? "rtl" : "ltr"}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          navigation={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: isRTL,
          }}
          speed={600}
          loop={true}
          key={isRTL ? "rtl" : "ltr"}
        >
          {schengenCountries.map((country, idx) => (
            <SwiperSlide key={idx}>
              <div className="border p-3 rounded-md flex flex-col justify-center items-center text-white cursor-pointer hover:scale-105 transition-transform duration-300 bg-white/10 backdrop-blur-md">
                {/* Flag */}
                <img
                  src={country.flag}
                  className="w-16 h-10 object-cover rounded-sm shadow-sm mb-2"
                  alt={`${country.nameEn} flag`}
                />
                {/* Country Name */}
                <p className="text-sm font-bold text-center">
                  {isRTL ? country.name : country.nameEn}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
