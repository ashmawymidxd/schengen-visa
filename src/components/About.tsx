import {
  Shield,
  // Award,
  Users,
  Clock,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import solution from "../assets/about/solutions.png";
import time from "../assets/about/time&effort.png";
import knowen from "../assets/about/knowandexpert.png";
import price from "../assets/about/price.png";
import supprt from "../assets/about/support.png";
import safe from "../assets/about/safe.png";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
const About = () => {
  const { t, isRTL } = useLanguage();
  const features = [
    {
      img: solution,
      title: t("about.features1.title"),
      description: t("about.features1.description"),
    },
    {
      img: time,
      title: t("about.features2.title"),
      description: t("about.features2.description"),
    },
    {
      img: knowen,
      title: t("about.features3.title"),
      description: t("about.features3.description"),
    },
    {
      img: price,
      title: t("about.features4.title"),
      description: t("about.features4.description"),
    },
    {
      img: supprt,
      title: t("about.features5.title"),
      description: t("about.features5.description"),
    },
    {
      img: safe,
      title: t("about.features6.title"),
      description: t("about.features6.description"),
    },
  ];

  const testimonials = [
    {
      name: t("about.testimonials.c1.name"),
      location: t("about.testimonials.c1.location"),
      text: t("about.testimonials.c1.text"),
      rating: 5,
    },
    {
      name: t("about.testimonials.c2.name"),
      location: t("about.testimonials.c2.location"),
      text: t("about.testimonials.c2.text"),
      rating: 5,
    },
    {
      name: t("about.testimonials.c3.name"),
      location: t("about.testimonials.c3.location"),
      text: t("about.testimonials.c3.text"),
      rating: 5,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-arabic font-medium mb-4">
            {t("about.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-arabic">
            {t("about.title")}
            <span className="block text-primary"> {t("about.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center h-auto md:h-[27vh] gap-2 p-4 shadow-sm rounded-2xl  bg-muted/50  border border-border/30"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-white to-gray-200">
                    <img src={feature.img} width={50} alt="" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-1 font-arabic">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground font-arabic text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="my-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 font-arabic">
              {t("about.testimonialsTitle")}
            </h3>
            <p className="text-muted-foreground font-arabic">
              {t("about.testimonialsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 bg-white/80 backdrop-blur-sm hover:shadow-[var(--shadow-medium)] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-primary/30 mb-4" />

                  <p className="text-muted-foreground mb-6 font-arabic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border/50 pt-4">
                    <div className="font-semibold text-foreground font-arabic">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-arabic">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-[var(--shadow-strong)] max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-arabic">
              {t("about.ctaTitle")}
            </h3>
            <p className="text-lg mb-6 font-arabic opacity-90">
              {t("about.ctaTitle")}
            </p>
            <button className="btn-accent text-lg px-8 py-4 font-arabic">
              {t("about.ctaButton")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
