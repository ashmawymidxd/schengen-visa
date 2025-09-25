import { useState, useEffect } from "react";
import ServiceHeader from "@/components/ServiceHeader";
import ContactForm from "@/components/ContactForm";
import {
  Phone,
  Mail,
  Plane,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Calendar,
  Ticket,
  Globe,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";
import FlightReservationFAQ from "@/components/FlightReservationFAQ";
import { useLanguage } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

// Import airline logos
import air1 from "../assets/countries/ae.png";
import air2 from "../assets/countries/eg.png";
import air3 from "../assets/countries/em.png";
import air4 from "../assets/countries/ku.png";
import air5 from "../assets/countries/na.png";
import air6 from "../assets/countries/ni.png";
import air7 from "../assets/countries/om.png";
import air8 from "../assets/countries/qa.png";
import air9 from "../assets/countries/sa.png";
import air10 from "../assets/countries/spa.png";

const FlightReservation = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: t("flight.reservation.why-us-answer1"),
      gradient: "from-green-500 to-emerald-500",
      description: t("flight.reservation.why-us-desc1"),
    },
    {
      icon: Clock,
      title: t("flight.reservation.why-us-answer2"),
      gradient: "from-amber-500 to-yellow-500",
      description: t("flight.reservation.why-us-desc2"),
    },
    {
      icon: Users,
      title: t("flight.reservation.why-us-answer3"),
      gradient: "from-green-600 to-teal-500",
      description: t("flight.reservation.why-us-desc3"),
    },
    {
      icon: Globe,
      title: t("flight.reservation.why-us-answer4"),
      gradient: "from-amber-600 to-orange-500",
      description: t("flight.reservation.why-us-desc4"),
    },
    {
      icon: Calendar,
      title: t("flight.reservation.why-us-answer5"),
      gradient: "from-emerald-500 to-green-400",
      description: t("flight.reservation.why-us-desc5"),
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: ["info@schengenvisasa.com", "support@schengenvisasa.com"],
      gradient: "from-amber-500 to-yellow-500",
    },
  ];

  const airlines = [
    air1,
    air2,
    air3,
    air4,
    air5,
    air6,
    air7,
    air8,
    air9,
    air10,
  ];

  return (
    <div className="min-h-screen">
      <ServiceHeader />

      {/* Main Content */}
      <div className="section-padding relative z-10">
        {/* Why Choose Us Section */}
        <section className="">
          <div className="container mx-auto">
            <div
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl shadow-green-500/10 border border-green-200/50 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200/50 text-green-600 px-6 py-3 rounded-full font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  {t("flight.reservation.why-us")}
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3
                  className={`text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {t("flight.reservation.why-us")}
                </h3>
                <p
                  className={`text-lg text-gray-600 max-w-3xl mx-auto ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {t("flight.reservation.description")}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-100/90 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500 ease-out"></div>
                    <div className="relative z-10 flex items-start gap-4 p-6">
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
                        <h4
                          className={`font-semibold text-gray-800 mb-2 ${
                            isRTL ? "font-arabic" : ""
                          }`}
                        >
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect Line */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-3/4 transition-all duration-500 ease-out`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Airlines Section */}
        <div
          className={`my-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Icon Header */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
            </div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 w-20 h-20 m-auto flex items-center justify-center rounded-2xl shadow-lg border border-green-200/50">
              <Plane className="w-10 h-10 text-green-600" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-4">
            {t("countries.service_providers")}
          </h3>

          {/* Airlines Slider */}
          <div className="container mx-auto mt-8">
            <Swiper
              dir={isRTL ? "rtl" : "ltr"}
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              navigation={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                reverseDirection: isRTL,
              }}
              speed={600}
              loop={true}
              key={isRTL ? "rtl" : "ltr"}
            >
              {airlines.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="p-5 rounded-md bg-gradient-to-br from-white to-gray-200">
                    <img
                      src={img}
                      draggable="false"
                      alt={`slide-${index}`}
                      className="rounded-md"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`container mx-auto px-4 mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-400/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-amber-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>

            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-amber-600 rounded-3xl p-8 text-white shadow-2xl shadow-green-500/30 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-arabic drop-shadow-sm">
                  Ready to Book Your Flight?
                </h3>
                <p className="text-lg mb-6 font-arabic opacity-90 drop-shadow-sm">
                  Get the best deals and secure your flight reservation today!
                </p>
                <button className="group relative inline-flex items-center gap-2 bg-white text-green-600 hover:text-green-700 text-lg px-8 py-4 rounded-2xl font-arabic font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out">
                  Book Now
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <FlightReservationFAQ />
        <ContactForm contactInfo={contactInfo} />
      </div>

      <Footer />
    </div>
  );
};

export default FlightReservation;
