import { Circle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Circle className="h-12 w-12 text-flavorsync-red" fill="transparent" strokeWidth={2.5}>
        <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" className="text-flavorsync-darkmaroon dark:text-flavorsync-red font-bold" style={{ fontSize: "10px" }}>1</text>
      </Circle>,
      title: "Open the App",
      description: "Launch FlavorSync and allow location access for personalized results.",
    },
    {
      icon: <Circle className="h-12 w-12 text-flavorsync-red" fill="transparent" strokeWidth={2.5}>
        <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" className="text-flavorsync-darkmaroon dark:text-flavorsync-red font-bold" style={{ fontSize: "10px" }}>2</text>
      </Circle>,
      title: "Search & Discover",
      description: "Search for any food item and instantly see the highest-rated restaurants nearby.",
    },
    {
      icon: <Circle className="h-12 w-12 text-flavorsync-red" fill="transparent" strokeWidth={2.5}>
        <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" className="text-flavorsync-darkmaroon dark:text-flavorsync-red font-bold" style={{ fontSize: "10px" }}>3</text>
      </Circle>,
      title: "BiteBot Analyzes",
      description: "Our BiteBot AI reviews restaurant details and delivers the best match for your craving.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white dark:bg-gray-900 py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-flavorsync-red/30 to-transparent"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-flavorsync-red/30 to-transparent"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-flavorsync-darkmaroon dark:text-white mb-4">How FlavorSync Works</h2>
          <p className="text-flavorsync-maroon dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Finding your perfect meal is as easy as 1-2-3 with our intuitive process.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="md:w-1/3 relative">
              <div className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-2xl border border-gray-200 dark:border-gray-700 text-center h-full flex flex-col items-center hover:scale-105 transition-all duration-300">
                <div className="mb-4 rounded-full bg-flavorsync-darkmaroon/10 dark:bg-flavorsync-red/10 p-3">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-flavorsync-darkmaroon dark:text-white mb-3">{step.title}</h3>
                <p className="text-flavorsync-maroon dark:text-gray-300">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-flavorsync-red/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
