import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { Parallax } from 'react-scroll-parallax';

const Index = () => {
  // Update page title
  useEffect(() => {
    document.title = "FlavorSync - AI-Powered Food Recommendations";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Parallax speed={-20}>
          <HeroSection />
        </Parallax>
        <Parallax speed={-10}>
          <FeaturesSection />
        </Parallax>
        <Parallax speed={-15}>
          <HowItWorksSection />
        </Parallax>
        <Parallax speed={-8}>
          <TestimonialsSection />
        </Parallax>
        <Parallax speed={-5}>
          <NewsletterSection />
        </Parallax>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
