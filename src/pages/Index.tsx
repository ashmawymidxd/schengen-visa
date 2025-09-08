import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Countries from "@/components/Countries";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Steps />
      <Countries />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
