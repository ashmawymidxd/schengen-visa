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
import FlightSection from "@/components/FlightSection";
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
      gradient: "from-blue-500 to-blue-600",
      description: t("flight.reservation.why-us-desc1"),
    },
    {
      icon: Clock,
      title: t("flight.reservation.why-us-answer2"),
      gradient: "from-blue-400 to-blue-500",
      description: t("flight.reservation.why-us-desc2"),
    },
    {
      icon: Users,
      title: t("flight.reservation.why-us-answer3"),
      gradient: "from-blue-600 to-blue-700",
      description: t("flight.reservation.why-us-desc3"),
    },
    {
      icon: Globe,
      title: t("flight.reservation.why-us-answer4"),
      gradient: "from-blue-500 to-blue-600",
      description: t("flight.reservation.why-us-desc4"),
    },
    {
      icon: Calendar,
      title: t("flight.reservation.why-us-answer5"),
      gradient: "from-blue-400 to-blue-500",
      description: t("flight.reservation.why-us-desc5"),
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: ["info@schengenvisasa.com", "support@schengenvisasa.com"],
      gradient: "from-blue-400 to-blue-500",
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
            <FlightSection />
            <div
              className={`mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-500/10 border border-blue-200/50 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Header */}

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
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-2xl"></div>
            </div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 w-20 h-20 m-auto flex items-center justify-center rounded-2xl shadow-lg border border-blue-200/50">
              <Plane className="w-10 h-10 text-blue-600" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-blue-500 p-3 mb-4">
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
          className={`max-w-2xl mx-auto px-4 mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/30 rounded-full blur-sm animate-pulse delay-1000"></div>

            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 rounded-3xl p-8 text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-arabic drop-shadow-sm">
                  {t("flight.plain.reservations.title")}
                </h3>
                <p className="text-lg mb-6 font-arabic opacity-90 drop-shadow-sm">
                  {t("flight.plain.reservations.description")}
                </p>
                <a
                  href="https://wa.me/+201554300351"
                  className="group relative inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 text-lg px-8 py-4 rounded-2xl font-arabic font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out"
                >
                  {t("flight.plain.reservations.btn")}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>
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
