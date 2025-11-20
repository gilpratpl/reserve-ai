import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onDemoClick={() => setIsDemoModalOpen(true)} />
      <Hero onDemoClick={() => setIsDemoModalOpen(true)} />
      <div id="features">
        <Features />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <Pricing onDemoClick={() => setIsDemoModalOpen(true)} />
      <CTA onDemoClick={() => setIsDemoModalOpen(true)} />
      <Contact />
      <Footer />
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
};

export default Index;
