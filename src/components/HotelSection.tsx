import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles } from "lucide-react";

function HotelSection() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="relative py-20 overflow-hidden rounded-xl">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-100 to-white" />

      {/* Subtle travel pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="text-sky-400/40"
        >
          <defs>
            <pattern
              id="travelPatternHotel"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <text
                x="20"
                y="40"
                fontSize="32"
                fill="currentColor"
                opacity="0.7"
              >
                ✈️
              </text>
              <text
                x="70"
                y="90"
                fontSize="28"
                fill="currentColor"
                opacity="0.8"
              >
                🛂
              </text>
              <text
                x="40"
                y="110"
                fontSize="28"
                fill="currentColor"
                opacity="0.9"
              >
                🌍
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#travelPatternHotel)" />
        </svg>
      </div>

      {/* Animated dots overlay */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div className="w-[140%] h-[140%] animate-[spin_60s_linear_infinite] bg-[radial-gradient(circle,rgba(0,0,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-200/50 text-blue-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          {t("hotel.reservation.why-us")}
          <Sparkles className="w-4 h-4" />
        </div>

        <h3
          className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r p-3 from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 ${
            isRTL ? "font-arabic" : ""
          }`}
        >
          {t("hotel.reservation.why-us")}
        </h3>

        <p
          className={`text-lg text-gray-600 max-w-3xl mx-auto ${
            isRTL ? "font-arabic" : ""
          } p-6 text-justify md:text-center`}
        >
          {t("hotel.reservation.description")}
        </p>
        <div className="w-32 h-1 mx-auto mt-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md shadow-yellow-200" />
      </div>
    </section>
  );
}

export default HotelSection;
