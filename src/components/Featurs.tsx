import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";
function Featurs() {
  const { t, isRTL } = useLanguage();
  const [isVisible] = useState(true);
  const features = [
    {
      text: t("tourist.why-us-answer1"),
      icon: Zap,
      gradient: "from-blue-500 to-blue-600",
      description: t("tourist.badge1"),
    },
    {
      text: t("tourist.why-us-answer2"),
      icon: Shield,
      gradient: "from-blue-600 to-blue-400",
      description: t("tourist.badge2"),
    },
    {
      text: t("tourist.why-us-answer3"),
      icon: Clock,
      gradient: "from-blue-700 to-blue-500",
      description: t("tourist.badge3"),
    },
    {
      text: t("tourist.why-us-answer4"),
      icon: Users,
      gradient: "from-blue-800 to-blue-600",
      description: t("tourist.badge4"),
    },
    {
      text: t("tourist.why-us-answer5"),
      icon: Star,
      gradient: "from-blue-700 to-blue-400",
      description: t("tourist.badge5"),
    },
  ];
  return (
    <div
      className={`container m-auto mt-12 bg-white/80 backdrop-blur-sm rounded-3xl  ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-100/80 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 ease-out"></div>

            <div className="relative z-10 flex items-start gap-4 p-6 h-full">
              {/* Icon Container */}
              <div
                className={`relative transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>
                <div
                  className={`relative bg-gradient-to-br ${feature.gradient} p-3 rounded-xl shadow-lg`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {feature.description}
                  </span>
                </div>
                <span
                  className={`text-sm text-gray-700 leading-relaxed ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {feature.text}
                </span>
              </div>

              {/* Hover Effect Line */}
              <div
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-3/4 transition-all duration-500 ease-out`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featurs;
