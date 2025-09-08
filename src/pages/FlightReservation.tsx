import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import FlightReservationFAQ from "@/components/FlightReservationFAQ";
import { CircleCheckIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { PlaneIcon } from "lucide-react";
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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
const FlightReservation = () => {
  const { t, isRTL } = useLanguage();
  const additionalDocuments = [
    t("document.additional.pasport"),
    t("flight.reservation.why-us-answer1"),
    t("flight.reservation.why-us-answer2"),
    t("flight.reservation.why-us-answer3"),
    t("flight.reservation.why-us-answer4"),
    t("flight.reservation.why-us-answer5"),
  ];
  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-[var(--shadow-medium)] border border-border/50">
            <div className="text-center mb-8">
              <h3
                className={`text-2xl font-bold text-foreground mb-4 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("flight.reservation.why-us")}
              </h3>
              <p
                className={`text-muted-foreground ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("flight.reservation.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50"
                >
                  <CircleCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span
                    className={`text-sm ${
                      isRTL ? "font-arabic" : ""
                    } text-muted-foreground`}
                  >
                    {doc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="my-10">
        <div className="bg-gradient-to-br from-white to-gray-200 w-[70px] h-[70px] m-auto flex items-center justify-center rounded-xl">
          <PlaneIcon className="w-12 h-12 text-primary mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
          {t("countries.service_providers")}
        </h3>

        <div className="container mt-10">
          <Swiper
            dir={isRTL ? "rtl" : "ltr"}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 7 },
            }}
            navigation={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: !isRTL, // ✅ autoplay goes left for LTR, right for RTL
            }}
            speed={500}
            loop={true}
            // force swiper to recalc on direction change
            key={isRTL ? "rtl" : "ltr"}
          >
            {[air1, air2, air3, air4, air5, air6, air7, air8, air9, air10].map(
              (img, index) => (
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
              )
            )}
          </Swiper>
        </div>
      </div>

      <FlightReservationFAQ />
      <Footer />
    </div>
  );
};

export default FlightReservation;
