import React, { useState, useEffect, useRef } from 'react';

  const testimonials = [
    {
    quote: "FlavorSync found the best pizza spot just around the corner from my hotel! The AI recommendations are always on point, and I love discovering new places wherever I travel.",
    name: "Sarah Patel",
    title: "Travel Blogger",
    avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
  },
  {
    quote: "I never have to worry about what to eat anymore. FlavorSync's location-based suggestions are a game changer for foodies like me. The app even remembers my favorite cuisines!",
    name: "Michael Chen",
    title: "Food Enthusiast",
    avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
  },
  {
    quote: "The AI in FlavorSync really understands my taste. I get personalized food recommendations that match my cravings, and the location service is super accurate.",
    name: "Priya Singh",
    title: "Tech Reviewer",
    avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
  }
];

const SLIDE_DURATION = 500; // ms

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');
  const [isSliding, setIsSliding] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line
  }, [activeIndex]);

  const handleNext = () => {
    setDirection('right');
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsSliding(false);
    }, SLIDE_DURATION);
  };

  const handlePrev = () => {
    setDirection('left');
    setIsSliding(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsSliding(false);
    }, SLIDE_DURATION);
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 font-pj">Thousands of food lovers trust FlavorSync</p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl font-pj">What our users say about FlavorSync</h2>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a href="#" title="" className="pb-2 text-base font-bold leading-7 text-gray-900 dark:text-white transition-all duration-200 border-b-2 border-gray-900 dark:border-white hover:border-gray-600 dark:hover:border-gray-400 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600 dark:hover:text-gray-400"> Check all reviews </a>
        </div>
        
          <div className="relative mt-10 md:mt-24 md:order-2 w-full flex flex-col items-center">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'}}></div>
            </div>
            <div className="relative w-full max-w-lg overflow-hidden">
              <div
                className={`transition-transform duration-[${SLIDE_DURATION}ms] ease-in-out flex flex-col items-center bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 lg:py-12 lg:px-10 min-h-[340px] ${
                  isSliding
                    ? direction === 'right'
                      ? 'translate-x-full opacity-0'
                      : '-translate-x-full opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
                key={activeIndex}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 mt-4">
                  <p className="text-lg leading-relaxed text-gray-900 dark:text-gray-100 font-pj">"{testimonial.quote}"</p>
                </blockquote>
                <div className="flex items-center mt-8">
                  <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  <div className="ml-3">
                    <p className="text-base font-bold text-gray-900 dark:text-white font-pj">{testimonial.name}</p>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 font-pj">{testimonial.title}</p>
              </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              aria-label="Previous testimonial"
                  disabled={isSliding}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
            </button>
            <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              aria-label="Next testimonial"
                  disabled={isSliding}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
