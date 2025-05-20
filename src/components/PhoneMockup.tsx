import React, { useEffect, useState } from 'react';

const PhoneMockup = () => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    // Trigger the zoom-in animation after mount
    setTimeout(() => setZoomed(true), 100);
  }, []);

  return (
    <div
      className={`relative w-[280px] h-[560px] mx-auto transition-transform duration-700 ease-out ${
        zoomed ? 'scale-100' : 'scale-0'
      }`}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[40px] border-4 border-white/20 bg-black/90 backdrop-blur-sm shadow-xl"></div>
      
      {/* Screen content - replaced with home.png */}
      <div className="absolute inset-2 rounded-[35px] overflow-hidden">
        <img 
          src="/home.png" 
          alt="FlavorSync App Interface" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full"></div>
    </div>
  );
};

export default PhoneMockup;
  