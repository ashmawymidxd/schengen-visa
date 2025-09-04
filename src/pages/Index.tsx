import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Documents from "@/components/Documents";
import Countries from "@/components/Countries";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen hidden">
      <Header />
      <Hero />
      <Services />
      <Steps />
      <Documents />
      <Countries />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
