import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone.title"),
      details: ["+966 50 123 4567", "+966 11 234 5678"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      details: ["info@schengenvisasa.com", "support@schengenvisasa.com"],
      color: "text-blue-500"
    },
    
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-text-white bg-primary/10 text-primary px-4 py-2 rounded-full font-arabic font-medium mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-arabic">
            {t("contact.title")}
            <span className="text-white block text-primary">{t("contact.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-arabic leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
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
                        <div className={`p-3 rounded-xl bg-white shadow-[var(--shadow-soft)]`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <CardTitle className="text-lg font-arabic">
                          {info.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground font-arabic text-sm mb-1">
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
                <Button className="w-full justify-start gap-3 h-12 font-arabic" variant="outline">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  {t("contact.quick.whatsapp")}
                </Button>
                <Button className="w-full justify-start gap-3 h-12 font-arabic" variant="outline">
                  <Phone className="w-5 h-5 text-blue-500" />
                  {t("contact.quick.call")}
                </Button>
                <Button className="w-full justify-start gap-3 h-12 font-arabic" variant="outline">
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
          <div className="bg-gradient-to-br from-primary-dark to-primary backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-[var(--shadow-medium)]">
            <div className="mb-8">
              <h3 className="text-white text-2xl font-bold text-foreground mb-4 font-arabic">
                {t("contact.form.title")}
              </h3>
              <p className="text-white text-muted-foreground font-arabic">
                {t("contact.form.desc")}
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div>
                  <label className="text-white block text-sm font-medium text-foreground mb-2 font-arabic">
                    {t("contact.form.name")}
                  </label>
                  <Input 
                    placeholder={t("contact.form.name")}
                    className="h-12 font-arabic bg-gray-200"
                  />
                </div>
                <div>
                  <label className="text-white block text-sm font-medium text-foreground mb-2 font-arabic">
                    {t("contact.form.phone")}
                  </label>
                  <Input 
                    placeholder="05xxxxxxxx"
                    className="h-12 bg-gray-200"
                    type="tel"
                  />
                </div>
              </div>

              <div>
                <label className="text-white block text-sm font-medium text-foreground mb-2 font-arabic">
                  {t("contact.form.email")}
                </label>
                <Input 
                  placeholder="example@email.com"
                  className="h-12 bg-gray-200"
                  type="email"
                />
              </div>

              <div>
                <label className="text-white block text-sm font-medium text-foreground mb-2 font-arabic">
                  {t("contact.form.country")}
                </label>
                <Input 
                  placeholder={t("contact.form.country")}
                  className="h-12 font-arabic bg-gray-200"
                />
              </div>

              <div>
                <label className="text-white block text-sm font-medium text-foreground mb-2 font-arabic">
                  {t("contact.form.message")}
                </label>
                <Textarea 
                  placeholder={t("contact.form.message")}
                  className="min-h-[120px] font-arabic bg-gray-200"
                  rows={5}
                />
              </div>

              <Button className="w-full h-12 text-lg font-arabic bg-gradient-primary hover:shadow-[var(--shadow-strong)]">
                <Send className="w-5 h-5 mr-2" />
                {t("contact.form.send")}
              </Button>
            </form>

            {/* Privacy notice */}
            <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border/30 hidden md:flex">
              <p className="text-xs text-gray-200 font-arabic leading-relaxed">
                {t("contact.form.privacy")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
