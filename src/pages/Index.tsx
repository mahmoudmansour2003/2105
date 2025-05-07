import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import PartnerSection from '@/components/sections/PartnerSection';
import SoftwareSection from '@/components/sections/SoftwareSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-horizop-ivory">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhoWeAreSection />
        <PartnerSection />
        <SoftwareSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
