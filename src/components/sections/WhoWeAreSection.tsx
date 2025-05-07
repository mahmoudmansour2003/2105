import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Globe, Sun, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhoWeAreSection = () => {
  const values = [
    {
      icon: <Sun size={40} className="text-horizop-yellow animate-spin-slow" />,
      title: "Innovation",
      description: "We drive technological advancement in energy solutions, always staying ahead of the curve."
    },
    {
      icon: <Zap size={40} className="text-horizop-yellow animate-bounce-subtle" />,
      title: "Sustainability",
      description: "Environmental responsibility is at the core of every solution we develop."
    },
    {
      icon: <Globe size={40} className="text-horizop-yellow animate-float" />,
      title: "Collaboration",
      description: "We believe in the power of partnerships to create meaningful, lasting change."
    }
  ];

  return (
    <section id="who-we-are" className="section bg-horizop-black text-horizop-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-medium text-horizop-yellow mb-4 shine">Who We Are</h2>
          <div className="w-20 h-1 bg-horizop-yellow mx-auto mb-6 animated-border"></div>
          <p className="text-horizop-white max-w-3xl mx-auto mb-6">
            HORIZOP Energy is a startup specializing in innovative charging solutions for Electric Vehicles. 
            Our company focuses on R&D, manufacturing, and intelligent charging technology distribution for 
            electric vehicles and for energy management.
          </p>
          <a 
            href="https://www.linkedin.com/company/horizop-energy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-horizop-yellow text-horizop-navy font-bold shadow-lg rounded px-5 py-2 hover:bg-horizop-gold hover:text-horizop-black border-2 border-horizop-yellow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-offset-2"
          >
            <Link size={16} /> Learn More
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-horizop-yellow mb-4 animated-border inline-block pb-2">Our Mission</h3>
            <p className="text-horizop-lightYellow mb-6">
              To empower organizations with advanced software tools and data insights that drive the sustainable energy transition and create lasting impact.
            </p>
            
            <h3 className="text-2xl font-bold text-horizop-yellow mb-4 animated-border inline-block pb-2">Our Vision</h3>
            <p className="text-horizop-lightYellow mb-6">
              A world where technology and energy innovation converge to create a sustainable future for generations to come.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-horizop-yellow mb-4">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="card-hover border-none shadow-md bg-gradient-to-br from-horizop-black to-gray-900 hover:yellow-glow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3">{value.icon}</div>
                        <h5 className="text-lg font-semibold mb-2 text-horizop-yellow">{value.title}</h5>
                        <p className="text-sm text-horizop-white">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 hover:yellow-glow">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-horizop-black to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-horizop-yellow rounded-full opacity-20 blur-3xl -z-10 animate-pulse-glow"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-horizop-yellow rounded-full opacity-20 blur-2xl -z-10 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
