import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Monitor, ChartLine, FileCode } from 'lucide-react';

const PartnerSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Monitor size={32} className="text-horizop-gold" />,
      title: "Custom Dashboard Development",
      description: "Interactive dashboards for real-time energy monitoring and insights."
    },
    {
      icon: <Database size={32} className="text-horizop-gold" />,
      title: "Energy Data Solutions",
      description: "Advanced data analytics for optimizing energy consumption and production."
    },
    {
      icon: <ChartLine size={32} className="text-horizop-gold" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to anticipate energy needs and market trends."
    },
    {
      icon: <FileCode size={32} className="text-horizop-gold" />,
      title: "Custom Software Engineering",
      description: "Tailored software solutions for specific energy management challenges."
    }
  ];

  const caseStudies = [
    {
      title: "Case Study: Renewable Energy Integration",
      client: "Major Utility Provider",
      description: "Developed a custom dashboard and data analytics platform to integrate and monitor renewable energy sources, leading to improved grid efficiency and reduced operational costs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2372&q=80"
    },
    {
      title: "Case Study: Energy Consumption Optimization",
      client: "Manufacturing Consortium",
      description: "Implemented a predictive analytics solution to optimize energy consumption in manufacturing plants, resulting in significant energy savings and reduced carbon footprint.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80"
    }
  ];

  return (
    <section id="partner-with-us" className="elegant-section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-horizop-gold font-medium mb-2 tracking-wider text-sm uppercase">Collaboration</span>
          <h2 className="heading-medium text-horizop-navy mb-4">Partner With Us</h2>
          <div className="elegant-divider"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Collaborate with HORIZOP ENERGY to drive innovation and efficiency in your energy operations. Our expertise in software development and energy systems creates powerful solutions for tomorrow's challenges.
          </p>
          <a href="/partner-portal">
            <Button className="bg-horizop-yellow text-horizop-navy font-bold shadow-lg rounded-lg px-8 py-5 text-lg md:text-xl hover:bg-horizop-gold hover:text-horizop-black border-2 border-horizop-yellow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-offset-2 text-center mt-8">
              Login to Partner Portal
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="elegant-card border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-horizop-gold bg-opacity-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="my-24">
          <div className="text-center mb-16">
            <span className="inline-block text-horizop-gold font-medium mb-2 tracking-wider text-sm uppercase">Results</span>
            <h3 className="heading-medium text-horizop-navy mb-4">Success Stories</h3>
            <div className="elegant-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((study, index) => (
              <div key={index} className="elegant-card border-none shadow-lg overflow-hidden flex flex-col group">
                <div className="h-56 overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h4 className="text-2xl font-serif font-semibold mb-2">{study.title}</h4>
                  <p className="text-horizop-gold font-medium mb-4">Client: {study.client}</p>
                  <p className="text-gray-600 flex-grow">{study.description}</p>
                  <Button variant="link" className="text-horizop-navy hover:text-horizop-gold mt-4 p-0 justify-start group">
                    Read Case Study
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-horizop-navy text-white rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-serif font-bold mb-3">Ready to transform your energy operations?</h3>
            <p className="text-gray-300">Let's discuss how our solutions can address your specific needs.</p>
          </div>
          <Button 
            className="bg-horizop-gold hover:bg-horizop-gold/90 whitespace-nowrap px-8 py-6 text-lg"
            onClick={() => scrollToSection('contact')}
          >
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
