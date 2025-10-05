import { useState, useEffect } from "react";
import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Phone,
  Mail,
  Star,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Award,
  Zap,
  Heart,
} from "lucide-react";
import HotelReservationFQA from "@/components/HotelReservationFQA";
import { useLanguage } from "@/contexts/LanguageContext";
import HotelSection from "@/components/HotelSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

// Import hotel images
import hotel1 from "../assets/hotels/h1.png";
import hotel2 from "../assets/hotels/h2.png";
import hotel3 from "../assets/hotels/h3.png";
import hotel4 from "../assets/hotels/h4.png";
import hotel5 from "../assets/hotels/h5.png";
import hotel6 from "../assets/hotels/h6.png";
import hotel7 from "../assets/hotels/h7.png";
import hotel8 from "../assets/hotels/h8.png";
import hotel9 from "../assets/hotels/h9.png";
import hotel10 from "../assets/hotels/h10.png";
import hotel11 from "../assets/hotels/h11.png";
import hotel12 from "../assets/hotels/h12.png";
import hotel13 from "../assets/hotels/h13.png";
import hotel14 from "../assets/hotels/h14.png";
import hotel15 from "../assets/hotels/h15.png";
import hotel16 from "../assets/hotels/h16.png";
import hotel17 from "../assets/hotels/h17.png";

const HotelReservation = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: t("hotel.reservation.why-us-answer1"),
      description: t("hotel.reservation.why-us-desc1"),
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Clock,
      title: t("hotel.reservation.why-us-answer2"),
      description: t("hotel.reservation.why-us-desc2"),
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: t("hotel.reservation.why-us-answer3"),
      description: t("hotel.reservation.why-us-desc3"),
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Award,
      title: t("hotel.reservation.why-us-answer4"),
      description: t("hotel.reservation.why-us-desc4"),
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: t("hotel.reservation.why-us-answer5"),
      description: t("hotel.reservation.why-us-desc5"),
      gradient: "from-blue-600 to-blue-700",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: ["info@schengenvisasa.com", "support@schengenvisasa.com"],
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  const hotelImages = [
    hotel1,
    hotel2,
    hotel3,
    hotel4,
    hotel5,
    hotel6,
    hotel7,
    hotel8,
    hotel9,
    hotel10,
    hotel11,
    hotel12,
    hotel13,
    hotel14,
    hotel15,
    hotel16,
    hotel17,
  ];

  return (
    <div className="min-h-screen">
      <ServiceHeader />

      {/* Why Choose Us Section */}
      <section className="section-padding relative z-10">
        <div className="container mx-auto">
          <HotelSection/>
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

                  <div className="relative z-10 flex items-start gap-4 p-6 h-full">
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
                      {feature.description && (
                        <p
                          className={`text-sm text-gray-600 ${
                            isRTL ? "font-arabic" : ""
                          }`}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>

                    {/* Hover Effect Line */}
                    <div
                      className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full group-hover:w-full transition-all duration-500 ease-out`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Partners Section */}
      <div
        className={`my-16 relative z-10 transform transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-lg"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 m-auto flex items-center justify-center rounded-2xl shadow-2xl shadow-blue-500/30">
              <Star className="w-10 h-10 text-white" />
            </div>
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 p-3 bg-clip-text text-transparent mt-6 mb-4">
            {t("countries.service_providers")}
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("countries.service_providers.description")}
          </p>
        </div>

        {/* Swiper */}
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
            {hotelImages.map((img, index) => (
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

      {/* Enhanced Contact Info */}
      <div
        className={`container mx-auto px-4 mb-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-100/90 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm transform group-hover:scale-105 transition-all duration-500"></div>

              <div className="relative z-10 flex items-center gap-4 p-6">
                <div
                  className={`relative bg-gradient-to-br ${contact.gradient} p-3 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {contact.title}
                  </h4>
                  <div className="space-y-1">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <HotelReservationFQA />

      {/* Enhanced Contact Form */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/50"></div>
        <div className="relative z-10">
          <ContactForm contactInfo={contactInfo} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HotelReservation;