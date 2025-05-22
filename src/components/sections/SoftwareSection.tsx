import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Rocket, Cloud } from 'lucide-react';

const SoftwareSection = () => {
  const softwareData = [
    {
      icon: <Rocket size={40} className="text-horizop-gold" />,
      title: "CHARGE DLM",
      description: "We offer Dynamic Load Management (DLM) software that allows you to control the charging of several EVs simultaneously in less time using the available power more efficiently and balancing it between the EV chargers.",
      bgColor: "bg-horizop-ivory",
      image: '/images/freepik__a-vertical-electric-vehicle-charging-station__21097.png'
    },
    {
      icon: <Cloud size={40} className="text-horizop-gold" />,
      title: "CHARGE HORIZON",
      description: "Charge Horizon is a cloud-based platform for usage monitoring and reporting. It is designed to collect and store data from a specific set of EV chargers located in car parks, offices, and communal blocks.",
      bgColor: "bg-horizop-yellow",
      image: '/images/pexels-kevin-ku-92347-577585.jpg'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-medium font-serif text-horizop-navy mb-4">Software</h2>
          <div className="w-20 h-1 bg-horizop-gold mb-6 mx-auto rounded"></div>
        </motion.div>

        <div className="space-y-24">
          {softwareData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2 items-center ${item.bgColor} ${index % 2 === 0 ? 'md:grid-flow-col-dense' : ''}`}>

              <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="flex-shrink-0 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-horizop-navy">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`relative h-[300px] md:h-[400px] overflow-hidden ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection; 