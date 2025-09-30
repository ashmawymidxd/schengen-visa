import { Sparkles, Shield, Globe, Zap } from "lucide-react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50/30 z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400/40 rounded-full animate-bounce delay-0"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-400/40 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="flex flex-col items-center space-y-8 relative z-10">
        {/* Animated Logo Container */}
        <div className="relative">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-3xl blur-lg opacity-60 animate-pulse"></div>

          {/* Main Logo Container */}
          <div className="relative bg-gradient-to-br from-white to-emerald-50/80 backdrop-blur-sm border border-emerald-200/50 rounded-2xl p-8 shadow-2xl shadow-emerald-500/20 animate-float">
            <div className="relative">
              {/* Rotating Shield Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-32 h-32 text-emerald-200/40 animate-spin-slow" />
              </div>

              {/* Logo Image */}
              <img
                src={logo}
                alt="Prime Visa"
                className="relative w-44 h-24 mx-auto drop-shadow-lg animate-scale"
              />
            </div>
          </div>

          {/* Floating Icons */}
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 animate-bounce delay-200" />
          <Zap className="absolute -bottom-2 -left-2 w-5 h-5 text-emerald-400 animate-bounce delay-500" />
          <Globe className="absolute -top-2 -left-2 w-5 h-5 text-blue-400 animate-pulse delay-700" />
        </div>

        {/* Enhanced Spinner */}
        <div className="relative w-28 h-28">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-emerald-100/80 rounded-full"></div>

          {/* Animated Gradient Ring */}
          <div
            className="absolute inset-0  border-transparent rounded-full animate-spin-slow 
            bg-gradient-conic from-emerald-500 via-blue-500 to-emerald-500 
            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
            [mask-composite:xor] [-webkit-mask-composite:xor] border-4"
          ></div>

          {/* Inner Glow */}
          <div className="absolute inset-4 border-2 border-emerald-300/30 rounded-full animate-pulse"></div>

          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Enhanced Text Animation */}
        <div className="text-center space-y-4">
          {/* Main Title */}
          <div className="flex items-center justify-center space-x-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Prime Visa
            </h2>
            <Sparkles className="w-6 h-6 text-blue-400 animate-sparkle" />
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></span>
            </div>
            <span className="text-emerald-600 font-medium text-lg">
              Loading
            </span>
          </div>

          {/* Subtle Description */}
          <p className="text-emerald-500/70 text-sm max-w-xs animate-fade-in">
            Preparing your magical experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-emerald-100/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full animate-progress"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }

        .animate-scale {
          animation: scale 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
