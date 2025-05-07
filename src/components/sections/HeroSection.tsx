import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Animated background with particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-horizop-navy to-horizop-charcoal opacity-95"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-horizop-gold opacity-5 blur-3xl animate-particle-1"></div>
        <div className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-horizop-emerald opacity-5 blur-3xl animate-particle-2"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-horizop-lightBlue opacity-5 blur-3xl animate-particle-3"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <span className="inline-block text-horizop-yellow font-medium mb-4 tracking-wider text-sm md:text-base uppercase">Innovative Energy Solutions</span>
            <h1 className="heading-large text-white mb-6">
              <span className="block">Transforming Energy for a</span>
              <span className="text-horizop-yellow">More Sustainable Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              HORIZOP ENERGY delivers sophisticated software solutions and comprehensive energy insights that drive the sustainable transition forward for businesses and communities worldwide.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button 
                className="btn-primary group flex items-center gap-2 text-base"
                onClick={() => scrollToSection('partner-with-us')}
              >
                Partner With Us 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="/solutions">
                <Button className="bg-horizop-yellow text-horizop-navy font-bold shadow-lg hover:bg-horizop-gold hover:text-horizop-black border-2 border-horizop-yellow transition-all duration-300">
                  Explore Our Solutions
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full border-4 border-horizop-gold opacity-30"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border-4 border-horizop-yellow opacity-20"></div>
              
              <div className="w-full h-[450px] rounded-lg bg-white shadow-2xl overflow-hidden rotate-2 transform hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80" 
                  alt="Digital energy solutions" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              
              <div className="absolute -top-4 left-1/3 w-16 h-16 bg-horizop-yellow rounded-full opacity-80 blur-md animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
