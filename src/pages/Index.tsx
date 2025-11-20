import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
