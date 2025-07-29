import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import PartnerSection from '@/components/sections/PartnerSection';
import SoftwareSection from '@/components/sections/SoftwareSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ContactSection from '@/components/sections/ContactSection';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-horizop-ivory">
      {/* <Header /> */}
      <main className="flex-grow">
        <HeroSection />
        <WhoWeAreSection />
        <PartnerSection />
        <ProductsSection />
        <SoftwareSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Removed Floating Download our App Button */}
      {/* <Link to="/the-app" className="fixed bottom-8 right-24 z-50">
        <button className="bg-horizop-gold text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-horizop-navy hover:text-horizop-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50">
          Download our App
        </button>
      </Link> */}
      <Chatbot />
    </div>
  );
};

export default Index;
