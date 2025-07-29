import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center -mt-[100px]">
      {/* Background video only, no particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      {/* Removed foreground content */}
    </section>
  );
};

export default HeroSection;
