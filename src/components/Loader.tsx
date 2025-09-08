// components/Loader.jsx (alternative version)
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Multi-colored spinner with green theme */}
        <div className="relative w-20 h-20">
          <div className="w-full h-full border-4 border-green-100 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent rounded-full animate-spin border-t-green-500 border-r-green-400 border-b-green-300"></div>
        </div>
        
        {/* Text with fading animation */}
        <div className="flex space-x-1">
          <span className="text-green-600 font-medium">Loading</span>
          <div className="flex space-x-0.5">
            <span className="text-green-500 animate-pulse delay-75">.</span>
            <span className="text-green-600 animate-pulse delay-150">.</span>
            <span className="text-green-700 animate-pulse delay-300">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;