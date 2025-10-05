import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Suspense, lazy } from "react";
import Loader from "@/components/Loader"; // We'll create this component
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const RequestSchengen = lazy(() => import("./pages/RequestSchengen"));
const TouristVisa = lazy(() => import("./pages/TouristVisa"));
const FlightReservation = lazy(() => import("./pages/FlightReservation"));
const HotelReservation = lazy(() => import("./pages/HotelReservation"));
const FQA = lazy(() => import("./pages/FQA"));
const Countries = lazy(() => import("./pages/Countries"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

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
              <Route
                path="/flight-reservation"
                element={<FlightReservation />}
              />
              <Route path="/hotel-reservation" element={<HotelReservation />} />
              <Route path="/faq" element={<FQA />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          {/* Floating WhatsApp Button - appears on all pages */}
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
