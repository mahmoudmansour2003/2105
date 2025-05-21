import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center -mt-[100px]">
      {/* Background image only, no particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/femme-chargeant-une-voiture-electrique-a-la-station-d-essence-electrique.jpg')] bg-cover bg-center"></div>
      </div>
      {/* Removed foreground content */}
    </section>
  );
};

export default HeroSection;
