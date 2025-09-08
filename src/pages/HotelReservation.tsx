import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import HotelReservationFQA from "@/components/HotelReservationFQA";
import { CircleCheckIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { LucideHotel } from "lucide-react";
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

import { Navigation, Autoplay } from "swiper/modules";
const HotelReservation = () => {
  const { t, isRTL } = useLanguage();
  const additionalDocuments = [
    t("document.additional.pasport"),
    t("hotel.reservation.why-us-answer1"),
    t("hotel.reservation.why-us-answer2"),
    t("hotel.reservation.why-us-answer3"),
    t("hotel.reservation.why-us-answer4"),
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
                {t("hotel.reservation.why-us")}
              </h3>
              <p
                className={`text-muted-foreground ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("hotel.reservation.description")}
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
          <LucideHotel className="w-12 h-12 text-primary mx-auto" />

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
className="flex gap-4"
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 7 },
              }}
              navigation={true}
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
              {[
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
              
              ].map((img, index) => (
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

      <HotelReservationFQA/>
      <Footer />
    </div>
  );
};

export default HotelReservation;
