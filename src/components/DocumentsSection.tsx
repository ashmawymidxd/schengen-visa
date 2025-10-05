import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import safe from "../assets/about/safe.png";
import { Link } from "react-router-dom";
export default function DocumentsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden rounded-xl mb-5">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-100 to-white" />

      {/* Subtle travel pattern (planes, passports, stamps) */}
      <div className="absolute inset-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="text-sky-400/40"
        >
          <defs>
            <pattern
              id="travelPattern"
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
          <rect width="100%" height="100%" fill="url(#travelPattern)" />
        </svg>
      </div>

      {/* Animated magic dots overlay */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
        <div className="w-[140%] h-[140%] animate-[spin_50s_linear_infinite] bg-[radial-gradient(circle,rgba(255,215,0,0.3)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-10 items-center justify-center max-w-5xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
        {/* Badge */}
        <Link to={'/countries'} className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-200/40 to-blue-200/30 border border-blue-300/40 text-sky-700 px-6 py-3 rounded-full font-medium backdrop-blur-md shadow-sm shadow-sky-100">
          <Sparkles className="w-4 h-4 text-yellow-500" />
          {t("documents.badge")}
          <Sparkles className="w-4 h-4 text-yellow-500" />
        </Link>

        {/* Title */}
        <h2 className="text-4xl lg:text-6xl font-extrabold leading-snug text-center">
          <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
            {t("documents.title")}
          </span>
          <span className="mx-3 bg-gradient-to-r from-sky-500 via-blue-600 to-sky-500 bg-clip-text text-transparent">
            {t("documents.subtitle")}
          </span>
        </h2>

        {/* document icon svg */}

        <img src={safe} alt="" className="" />

        {/* Gold highlight bar */}
        <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-md shadow-yellow-200" />
      </div>
    </section>
  );
}
