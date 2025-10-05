import { useState, useEffect } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { schengenCountries } from "../data/countries.js";
import { useLanguage } from "@/contexts/LanguageContext";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CountryCards() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="container mx-auto">
        {/* 🔹 Background Gradient & Pattern */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')] bg-repeat" />
        </div>

        {/* Section Header */}
        <div
          className={`text-center mb-14 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-md shadow-sm">
            <MapPin className="w-4 h-4" />
            {t("countries.title")}
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-500 mb-4 font-arabic drop-shadow-sm">
            {t("countries.subtitle")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-arabic leading-relaxed">
            {t("countries.description")}
          </p>
        </div>

        {/* 🔹 Countries Banner with Swiper */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 shadow-xl backdrop-blur-md">
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
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              reverseDirection: isRTL,
            }}
            speed={700}
            loop={true}
            key={isRTL ? "rtl" : "ltr"}
          >
            {schengenCountries.map((country, idx) => (
              <SwiperSlide key={idx}>
                <div className="border border-white/30 p-4 rounded-xl flex flex-col justify-center items-center text-white cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-lg">
                  {/* Flag */}
                  <img
                    src={country.flag}
                    className="w-16 h-10 object-cover rounded-md shadow-md mb-2 border border-white/40"
                    alt={`${country.nameEn} flag`}
                  />
                  {/* Country Name */}
                  <p className="text-sm font-semibold text-center drop-shadow-sm">
                    {isRTL ? country.name : country.nameEn}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
