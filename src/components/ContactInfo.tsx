import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageSquare, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // EmailJS configuration (you'll get these from emailjs.com)
    const serviceID = 'service_7qzj7ci';
    const templateID = 'template_m7q5e2b';
    const userID = 'vK1Pii72N3tTdskj7';

    try {
      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'uyu365666@gmail.com',
      }, userID);

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
    <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Contact Info Section */}
        <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 font-arabic">
            {t("contact.info.title")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-border/50 bg-white/80 backdrop-blur-sm hover:shadow-[var(--shadow-medium)] transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white shadow-[var(--shadow-soft)]">
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <CardTitle className="text-lg font-arabic">
                      {info.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-muted-foreground font-arabic text-sm mb-1"
                    >
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <h4 className="text-xl font-bold text-foreground mb-6 font-arabic">
            {t("contact.quick.title")}
          </h4>
          <div className="space-y-4">
            <Button
              className="w-full justify-start gap-3 h-12 font-arabic"
              variant="outline"
            >
              <MessageSquare className="w-5 h-5 text-green-500" />
              {t("contact.quick.whatsapp")}
            </Button>
            <Button
              className="w-full justify-start gap-3 h-12 font-arabic"
              variant="outline"
            >
              <Phone className="w-5 h-5 text-blue-500" />
              {t("contact.quick.call")}
            </Button>
            <Button
              className="w-full justify-start gap-3 h-12 font-arabic"
              variant="outline"
            >
              <Mail className="w-5 h-5 text-purple-500" />
              {t("contact.quick.email")}
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center border border-primary/20">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
          <h4 className="text-xl font-bold text-foreground mb-2 font-arabic">
            {t("contact.map.title")}
          </h4>
          <p className="text-muted-foreground font-arabic mb-4">
            {t("contact.map.desc")}
          </p>
          <Button variant="outline" className="font-arabic">
            {t("contact.map.button")}
          </Button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl h-[500px] p-8 shadow-[var(--shadow-medium)]">
        <h3 className="text-white text-2xl font-bold mb-6 font-arabic">
          {t("contact.form.title")}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.form.name")}
              className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="05xxxxxxxx"
              className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
              required
            />
          </div>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="example@email.com"
            className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.form.message")}
            className="min-h-[120px] bg-white/20 border-white/30 text-white placeholder:text-white/70"
            required
          />

          <Button
            type="submit"
            className="w-full h-12 text-lg bg-white text-primary hover:bg-gray-100 font-semibold"
            disabled={loading}
          >
            {loading ? "⏳ Sending..." : t("contact.form.send")}
          </Button>

          {status && (
            <p className={`text-center mt-3 font-semibold ${
              status.includes("✅") ? "text-green-300" : "text-red-300"
            }`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
