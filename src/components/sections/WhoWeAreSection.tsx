import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Globe, Sun, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhoWeAreSection = () => {

  const values = [
    {
      icon: <Sun size={40} className="text-horizop-yellow animate-spin-slow" />,
      title: "Innovation",
      description: "Driving innovation through cutting-edge technology and creative solutions."
    },
    {
      icon: <Zap size={40} className="text-horizop-yellow animate-bounce-subtle" />,
      title: "Sustainability",
      description: "Committed to building a sustainable future through green energy solutions."
    },
    {
      icon: <Globe size={40} className="text-horizop-yellow animate-float" />,
      title: "Collaboration",
      description: "Partnering with businesses and communities for mutual growth and success."
    }
  ];

  return (
    <section id="who-we-are" className="section bg-horizop-black text-horizop-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-medium text-horizop-yellow mb-4 shine">Who We Are</h2>
          <div className="w-20 h-1 bg-horizop-yellow mx-auto mb-6 animated-border"></div>
          <p className="text-horizop-white max-w-3xl mx-auto mb-6">
            HORIZOP ENERGY delivers sophisticated software solutions and comprehensive energy insights that drive the sustainable transition forward for businesses and communities worldwide.
          </p>
          <a 
            href="https://www.linkedin.com/company/horizop-energy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-horizop-yellow text-horizop-navy font-bold shadow-lg rounded px-5 py-2 hover:bg-horizop-gold hover:text-horizop-black border-2 border-horizop-yellow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-offset-2"
          >
            <Link size={16} /> Learn More on LinkedIn
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-horizop-yellow mb-4 animated-border inline-block pb-2">Our Mission</h3>
            <p className="text-horizop-lightYellow mb-6">
              Our mission is to accelerate the global transition to sustainable energy by providing innovative and accessible charging solutions for electric vehicles.
            </p>
            
            <h3 className="text-2xl font-bold text-horizop-yellow mb-4 animated-border inline-block pb-2">Our Vision</h3>
            <p className="text-horizop-lightYellow mb-6">
              To be a leading force in the future of energy, empowering individuals and businesses with smart, efficient, and environmentally conscious technologies.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-horizop-yellow mb-4">Core Values</h4>
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
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Using the image from the screenshot
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
