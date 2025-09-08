import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import RequestSchengen from "./pages/RequestSchengen";
import TouristVisa from "./pages/TouristVisa";
import FlightReservation from "./pages/FlightReservation";
import HotelReservation from "./pages/HotelReservation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Green Loader Component
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/request-schengen" element={<RequestSchengen />} />
              <Route path="/tourist-visa" element={<TouristVisa />} />
              <Route path="/flight-reservation" element={<FlightReservation />} />
              <Route path="/hotel-reservation" element={<HotelReservation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
