import { useState, useEffect } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { schengenCountries } from "../data/countries.js";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CountryCards() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-6 container relative">
     

      {/* Section Header */}
      <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border border-emerald-200/50 text-emerald-700 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm">
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

      {/* Countries Grid */}
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {schengenCountries.map((country, idx) => (
          <div
            key={idx}
            className="group relative"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Main Card */}
            <div className="relative z-10 flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-4 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-200/60 hover:scale-105 transition-all duration-500 ease-out cursor-pointer">
              
              {/* Flag Container with Enhanced Styling */}
              <div className="relative mb-3 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500">
                {/* Flag Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-amber-400/30 rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                
                {/* Flag Container */}
                <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-xl p-3 shadow-inner border border-gray-200/50">
                  <img
                    src={country.flag}
                    className="w-12 h-9 object-cover rounded-sm shadow-sm transform group-hover:scale-105 transition-transform duration-300"
                    alt={`${country.nameEn} flag`}
                  />
                </div>
                
                {/* Corner Accents */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-amber-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Country Name */}
              <p className="text-center font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight text-sm">
                {isRTL ? country.name : country.nameEn}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full group-hover:w-3/4 transition-all duration-500 ease-out"></div>

              {/* Additional Info on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-1 h-1 bg-amber-500 rounded-full mx-auto mb-1"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}