import { useState, useEffect } from "react";
import { Sparkles, MapPin, Crown, Globe, ArrowRight } from "lucide-react";
import { schengenCountries } from "../data/countries.js";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CountryCards() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-16 px-6 container relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Section Header */}
      <div
        className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-200/30 text-blue-700 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm shadow-lg shadow-blue-500/10">
          <Crown className="w-5 h-5 text-yellow-500" />
          {t("countries.title")}
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold p-5 text-gray-800 mb-6 font-arabic bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
          {t("countries.subtitle")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-arabic leading-relaxed text-lg bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          {t("countries.description")}
        </p>
      </div>

      {/* Enhanced Countries Banner */}
      <div className="relative">
        {/* Main Banner Container */}
        <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-3xl p-8 shadow-2xl shadow-blue-500/30 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          
          {/* Shimmer Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
          
          {/* Gold Accent Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-600 p-1 -m-1 opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {schengenCountries.map((country, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHoveredCountry(idx)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  {/* Animated Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 group-hover:border-yellow-300/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-2"></div>
                  
                  {/* Flag Container with Gold Border */}
                  <div className="relative mb-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    {/* Gold Glow Effect */}
                    <div className="absolute inset-0 bg-yellow-400/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Flag Image */}
                    <img
                      src={country.flag}
                      className="relative z-10 w-20 h-12 object-cover rounded-lg shadow-lg border-2 border-white/30 group-hover:border-yellow-300 transition-all duration-300"
                      alt={`${country.nameEn} flag`}
                    />
                    
                    {/* Crown Badge for Hover */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Crown className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Country Name */}
                  <p className="relative z-10 text-white font-semibold text-center text-sm leading-tight transform group-hover:scale-105 transition-transform duration-300">
                    {isRTL ? country.name : country.nameEn}
                  </p>

                  {/* Hover Info Panel */}
                  <div className={`absolute bottom-full mb-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-yellow-200/50 transform transition-all duration-300 ${
                    hoveredCountry === idx 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
                  }`}>
                    <div className="text-center min-w-[120px]">
                      <div className="font-bold text-gray-800 text-sm mb-1">
                        {isRTL ? country.name : country.nameEn}
                      </div>
                      <div className="text-xs text-gray-600 mb-2">
                        Schengen Area
                      </div>
                      <div className="flex items-center justify-center gap-1 text-yellow-500">
                        {[...Array(3)].map((_, i) => (
                          <Sparkles key={i} className="w-3 h-3" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white/95"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>

      {/* Add shimmer animation to tailwind config */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}