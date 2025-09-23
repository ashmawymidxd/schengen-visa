import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  Home, 
  Sparkles, 
  Navigation, 
  Star,
  Rocket,
  Cloud,
  Moon,
  Satellite
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState<Array<{id: number; x: number; y: number; size: number; delay: number}>>([]);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    setIsVisible(true);
    
    // Create random stars for background
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));
    setStars(generatedStars);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Animated Space Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.7
            }}
          />
        ))}
        
        {/* Floating Planets */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-2xl shadow-orange-500/30 animate-float">
          <div className="absolute top-4 left-6 w-8 h-8 bg-orange-300/30 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-2xl shadow-blue-500/30 animate-float" style={{animationDelay: '2s'}}>
          <div className="absolute top-3 left-4 w-6 h-6 bg-blue-300/30 rounded-full"></div>
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-shooting-star"></div>
        <div className="absolute top-20 right-40 w-1 h-1 bg-cyan-300 rounded-full animate-shooting-star" style={{animationDelay: '3s'}}></div>
        
        {/* Nebula Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center text-white max-w-2xl mx-auto px-6 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      }`}>
        
        {/* Animated 404 Text */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold bg-gradient-to-br from-white via-cyan-200 to-green-300 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </div>
          <div className="absolute inset-0 text-9xl font-bold bg-gradient-to-br from-cyan-400 to-green-500 bg-clip-text text-transparent opacity-70 blur-sm animate-pulse">
            404
          </div>
          <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-cyan-400 animate-bounce" />
          <Sparkles className="absolute -bottom-4 -left-4 w-10 h-10 text-green-400 animate-bounce" style={{animationDelay: '1s'}} />
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Lost in Space?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
            Oops! The page you're looking for has drifted into the cosmos.
          </p>
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3 mb-4">
            <Navigation className="w-5 h-5 text-cyan-400" />
            <code className="text-cyan-300 font-mono text-sm">
              {location.pathname}
            </code>
          </div>
        </div>

        {/* Animated Illustration */}
        <div className="relative mb-8 w-48 h-48 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-cyan-600/30 to-green-600/30 rounded-full animate-spin-slow"></div>
          <Satellite className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-cyan-400 animate-orbit" />
          <Moon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-gray-300" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <Home className="w-5 h-5" />
            Beam Me Home
            <Rocket className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <Navigation className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back in Time
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-8 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
          <p className="text-gray-400 mb-3">While you're here, why not:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-cyan-300">
              <Star className="w-4 h-4" />
              Report this issue
            </span>
            <span className="flex items-center gap-2 text-green-300">
              <Cloud className="w-4 h-4" />
              Check our status
            </span>
            <span className="flex items-center gap-2 text-green-300">
              <Sparkles className="w-4 h-4" />
              Explore other pages
            </span>
          </div>
        </div>
      </div>

      {/* Floating Astronaut */}
      <div className="absolute bottom-10 right-10 text-6xl animate-bounce" style={{animationDuration: '3s'}}>
        👨‍🚀
      </div>

      {/* Space Station */}
      <div className="absolute top-10 left-10 text-4xl animate-float" style={{animationDuration: '4s'}}>
        🛰️
      </div>
    </div>
  );
};

export default NotFound;