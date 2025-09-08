import { schengenCountries } from "../data/countries.js";
import { useLanguage } from "@/contexts/LanguageContext";
export default function CountryCards() {
      const { t, isRTL } = useLanguage();
  return (
    <div className="p-6 container">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
        {schengenCountries.map((country, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-100 shadow-md rounded-xl p-2 hover:shadow-lg transition"
          >
            <span className="text-5xl bg-gradient-to-br from-white to-gray-200 p-3 rounded-xl">{country.flag}</span>
            <p className="mt-2 text-lg font-medium text-center">
               {isRTL ? country.name : country.nameEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
