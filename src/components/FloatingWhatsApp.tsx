import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const { t } = useLanguage();

  // Pulsing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "+201554300351";
  const message = "Hello! I'd like to get more information.";

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-16 left-0 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-xl mb-3 transform -translate-y-2 transition-all duration-300">
          <div className="text-sm font-medium whitespace-nowrap">
            {t("contact.quick.whatsapp")} 💬
          </div>
          <div className="absolute -bottom-1 left-4 w-3 h-3 bg-yellow-500 transform rotate-45"></div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative flex items-center justify-center
          w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 
          text-white rounded-full shadow-2xl
          transform transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-3xl hover:from-green-400 hover:to-green-500
          ${isPulsing ? "animate-pulse-ring" : ""}
          border-2 border-white/20
          cursor-pointer
          group
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping-slow"></div>

        {/* WhatsApp Icon */}
        <svg
          className="w-8 h-8 transform transition-transform duration-300 group-hover:scale-125"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-green-400/20 blur-md group-hover:bg-green-400/30 transition-all duration-300 -z-10"></div>
      </a>

      {/* Optional: Unread message indicator */}
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
        1
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-pulse-ring::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid #10b981;
          border-radius: 50%;
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.25);
        }
      `}</style>
    </div>
  );
}

export default FloatingWhatsApp;
