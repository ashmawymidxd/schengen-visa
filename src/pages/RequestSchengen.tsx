import ServiceHeader from "@/components/ServiceHeader";
import Footer from "@/components/Footer";
import Documents from "@/components/Documents";
import CountryCards from "@/components/CountryCards";

import RequestSchengenFAQ from "@/components/RequestSchengenFAQ";
const RequestSchengen = () => {
  return (
    <div className="min-h-screen">
      <ServiceHeader />
      <Documents />
      <RequestSchengenFAQ />
      <CountryCards/>
      <Footer />
    </div>
  );
};

export default RequestSchengen;
