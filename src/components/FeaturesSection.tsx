import React from "react";
import { Star, MapPin, Info, User } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Star className="h-10 w-10 text-flavorsync-red" />,
      title: "AI Recommendations",
      description: "Our advanced AI learns your taste preferences and suggests restaurants and dishes that match your palette.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-flavorsync-red" />,
      title: "Location-Based Discovery",
      description: "Find the best eats near you without endless scrolling. We prioritize quality local establishments.",
    },
    {
      icon: <Info className="h-10 w-10 text-flavorsync-red" />,
      title: "Real-Time Restaurant Insights",
      description: "Get up-to-date wait times, special offers, and menu updates from restaurants as they happen.",
    },
    {
      icon: <User className="h-10 w-10 text-flavorsync-red" />,
      title: "Personalized Taste Profiles",
      description: "Create and refine your taste profile as you use the app. The more you eat, the better we get.",
    },
  ];

  return (
    <section id="features" className="bg-white dark:bg-gray-900 py-20 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-flavorsync-darkmaroon/10 dark:bg-flavorsync-red/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-flavorsync-red/10 dark:bg-flavorsync-red/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-flavorsync-darkmaroon dark:text-white mb-4">Discover the FlavorSync Experience</h2>
          <p className="text-flavorsync-maroon dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Our app uses cutting-edge technology to bring you a food discovery experience unlike any other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 rounded-full bg-flavorsync-darkmaroon/10 dark:bg-flavorsync-red/10 p-3 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-flavorsync-darkmaroon dark:text-white mb-3">{feature.title}</h3>
              <p className="text-flavorsync-maroon dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
