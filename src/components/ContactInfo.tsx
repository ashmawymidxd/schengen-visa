import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  MessageSquare,
  Phone,
  Mail,
  Sparkles,
  Send,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

const ContactInfo = ({ contactInfo }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const serviceID = "service_7qzj7ci";
    const templateID = "template_m7q5e2b";
    const userID = "vK1Pii72N3tTdskj7";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "uyu365666@gmail.com",
        },
        userID
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50/30 relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 text-blue-600 px-6 py-3 rounded-full font-arabic font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {t("contact.badge")}
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-yellow-500 font-arabic">
            {t("contact.title")}
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text p-5 text-transparent">
              {t("contact.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Contact Info Cards */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 font-arabic bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {t("contact.info.title")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <Card className="border-white/20 bg-white/60 backdrop-blur-md hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ease-out transform group-hover:-translate-y-2 relative overflow-hidden">
                      {/* Blue Accent Border */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-lg font-arabic text-gray-800">
                            {info.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-gray-600 font-arabic text-sm mb-1 group-hover:text-gray-800 transition-colors duration-300"
                          >
                            {detail}
                          </p>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
              {/* Blue Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400 to-cyan-500 rounded-bl-2xl transform translate-x-8 -translate-y-8 rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <h4 className="text-xl font-bold text-gray-800 mb-6 font-arabic relative z-10">
                {t("contact.quick.title")}
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <Button
                  className="w-full justify-start gap-3 h-14 font-arabic bg-white/80 hover:bg-white border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group/btn"
                  variant="outline"
                >
                  <a
                    href="https://wa.me/+201554300351"
                    target="__blanck"
                    className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 group-hover/btn:scale-110 transition-transform duration-300"
                  >
                    <MessageSquare className="w-5 h-5 text-white" />
                  </a>
                  {t("contact.quick.whatsapp")}
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-all duration-300" />
                </Button>

                <Button
                  className="w-full justify-start gap-3 h-14 font-arabic bg-white/80 hover:bg-white border border-blue-200/50 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group/btn"
                  variant="outline"
                >
                  <a
                    href="tel:+201554300351"
                    target="__blanck"
                    className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 group-hover/btn:scale-110 transition-transform duration-300"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </a>
                  {t("contact.quick.call")}
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-all duration-300" />
                </Button>

                <Button
                  className="w-full justify-start gap-3 h-14 font-arabic bg-white/80 hover:bg-white border border-gray-200/50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group/btn"
                  variant="outline"
                >
                  <a
                    href="mailto:uyu365656@gmail.com"
                    target="__blanck"
                    className="p-2 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 group-hover/btn:scale-110 transition-transform duration-300"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>
                  {t("contact.quick.email")}
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover/btn:text-gray-600 group-hover/btn:translate-x-1 transition-all duration-300" />
                </Button>
              </div>
            </div>

            {/* Map Section */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 text-center border border-blue-200/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400/30 rounded-full blur-sm animate-pulse delay-1000"></div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 w-16 h-16 mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white mx-auto" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 font-arabic">
                  {t("contact.map.title")}
                </h4>
                <p className="text-gray-600 font-arabic mb-4">
                  {t("contact.map.desc")}
                </p>
                <Button
                  variant="outline"
                  className="font-arabic border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 group/btn"
                >
                  <a href="https://facebook.com" target="__blank"> {t("contact.map.button")}</a>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Form Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-3xl shadow-2xl shadow-blue-500/30 transform group-hover:scale-105 transition-transform duration-500"></div>

              {/* Blue Accent Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500 -m-0.5"></div>

              <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-8 h-full shadow-2xl">
                {/* Floating Icons */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400/20 rounded-full backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full backdrop-blur-sm"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-arabic">
                      {t("contact.form.title")}
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="group">
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.form.name")}
                          className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-white/30 focus:border-blue-200/50 transition-all duration-300"
                          required
                        />
                      </div>
                      <div className="group">
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="05xxxxxxxx"
                          className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-white/30 focus:border-blue-200/50 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="group">
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="example@email.com"
                        className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-white/30 focus:border-blue-200/50 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="group">
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.form.message")}
                        className="min-h-[120px] bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-white/30 focus:border-blue-200/50 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 text-lg bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white font-semibold border-none shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-out group/btn relative overflow-hidden"
                      disabled={loading}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ⏳ Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {t("contact.form.send")}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>

                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    </Button>

                    {status && (
                      <p
                        className={`text-center mt-3 font-semibold backdrop-blur-sm rounded-lg p-3 ${
                          status.includes("✅")
                            ? "bg-green-400/20 text-green-100 border border-green-400/30"
                            : "bg-red-400/20 text-red-100 border border-red-400/30"
                        }`}
                      >
                        {status}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;