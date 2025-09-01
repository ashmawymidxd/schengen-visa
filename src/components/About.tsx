import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
const About = () => {
  const { t, isRTL } = useLanguage();
  const features = [
    {
      icon: Award,
      title: t("about.features1.title"),
      description: t("about.features1.description"),
    },
    {
      icon: Users,
      title: t("about.features2.title"),
      description: t("about.features2.description"),
    },
    {
      icon: Shield,
      title: t("about.features3.title"),
      description: t("about.features3.description"),
    },
    {
      icon: Clock,
      title: t("about.features4.title"),
      description: t("about.features4.description"),
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

  const achievements = [
    {
      number: "+8",
      label: t("about.achievements.label1"),
      color: "text-blue-500",
    },
    {
      number: "+5000",
      label: t("about.achievements.label2"),
      color: "text-green-500",
    },
    {
      number: "95%",
      label: t("about.achievements.label3"),
      color: "text-purple-500",
    },
    {
      number: "26",
      label: t("about.achievements.label4"),
      color: "text-orange-500",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground font-arabic mb-8">
                {t("about.featuresTitle")}
              </h3>

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-muted/30 to-transparent border border-border/30"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 font-arabic">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground font-arabic">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-primary rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4 font-arabic">
                {t("about.commitmentTitle")}
              </h4>
              <div className="space-y-3">
                {[
                  t("about.commitmentItems.slug1"),
                  t("about.commitmentItems.slug2"),
                  t("about.commitmentItems.slug3"),
                  t("about.commitmentItems.slug4"),
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-arabic">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-subtle border border-border/30"
                >
                  <div
                    className={`text-4xl font-bold mb-2 ${achievement.color} font-arabic`}
                  >
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground font-arabic">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
              <h4 className="text-xl font-bold text-foreground mb-4 font-arabic">
                {t("about.visionTitle")}
              </h4>
              <p className="text-muted-foreground mb-4 font-arabic leading-relaxed">
                {t("about.visionText1")}
              </p>
              <p className="text-muted-foreground font-arabic leading-relaxed">
                {t("about.visionText2")}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
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
