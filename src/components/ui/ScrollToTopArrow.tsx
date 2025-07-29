import React, { useEffect, useState } from 'react';

const ScrollToTopArrow: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-40 z-50 p-3 rounded-full bg-horizop-gold text-white shadow-lg transition-opacity duration-300 hover:bg-horizop-navy hover:text-horizop-gold focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} hidden sm:block`}
      aria-label="Scroll to top"
      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.18)' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
};

export default ScrollToTopArrow; 