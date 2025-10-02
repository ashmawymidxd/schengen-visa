import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, Quote } from "lucide-react";

export default function Testimonials({
  testimonials = [],
  isVisible = true,
  title = "",
  subtitle = "",
}) {
  return (
    <div className="container mx-auto px-4 relative z-10 mt-10">
      <div
        className={`my-20 transform transition-all duration-1000 delay-600 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-4xl lg:text-6xl font-bold text-yellow-500 font-arabic">
            {title}
          </h3>
          <p className="text-muted-foreground font-arabic text-lg mt-8">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Card className="border-white/20 my-6 md:my-10 bg-white/60 backdrop-blur-md hover:bg-white/80 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 ease-out transform group-hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -m-0.5"></div>

                <CardContent className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => "⭐")}
                    </div>
                  </div>

                  <Quote className="w-8 h-8 text-purple-400/40 mb-4 transform group-hover:scale-110 transition-transform duration-300" />

                  <p className="text-muted-foreground mb-6 font-arabic leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-white/30 pt-4 group-hover:border-purple-200/50 transition-colors duration-300">
                    <div className="font-semibold text-foreground font-arabic text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground font-arabic group-hover:text-foreground/80 transition-colors duration-300">
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
