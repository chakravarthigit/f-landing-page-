import { useEffect, useState } from "react";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";
import { useToast } from "@/hooks/use-toast"; // Import useToast

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const { toast } = useToast(); // Initialize useToast

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const handleAppStoreClick = () => {
    toast({
      title: "Launching Soon!",
      description: "The App Store version is coming soon.",
    });
  };

  const playStoreLink = "https://drive.google.com/file/d/1aN4uh_RKdFo7ciBM-a9hS3OIBkE3r5E6/view?usp=drive_link";

  return (
    <section className="bg-white dark:bg-gray-900 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 text-center lg:text-left">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-flavorsync-darkmaroon dark:text-white leading-tight transition-all duration-700 ease-out transform ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              Cravings synced.<br />Flavors delivered.
            </h1>
            <p
              className={`text-lg md:text-xl text-flavorsync-maroon dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 transition-all duration-700 delay-200 ease-out transform ${
                animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              Discover AI-powered food suggestions, personalized to your location and taste. Never wonder where to eat again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="btn-maroon text-base sm:text-lg flex items-center"
                onClick={handleAppStoreClick} // Add onClick handler
              >
                <img src="/Apple-Logo.png" alt="App Store" className="mr-2 h-5 w-5 align-middle" />
                App Store
              </Button>
              <a href={playStoreLink} target="_blank" rel="noopener noreferrer"> {/* Changed to <a> tag */}
                <Button className="btn-maroon text-base sm:text-lg flex items-center">
                  <img src="/playstore.png" alt="Google Play" className="mr-2 h-6 w-6 object-contain align-middle" />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="animate-float">
              <PhoneMockup />
            </div>
            
            {/* Decorative elements - with dark mode support */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-flavorsync-darkmaroon/10 dark:bg-flavorsync-red/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-flavorsync-red/20 dark:bg-flavorsync-red/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
