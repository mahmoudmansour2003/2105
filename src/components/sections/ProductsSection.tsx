import React from 'react';
import { motion } from 'framer-motion';

const productsData = [
  {
    title: 'HORIZOP SmartPlug',
    features: [
      'A simple and futuristic design',
      'Easy installation with a standard 3-year warranty',
      'Up to 22kW of output power for 3-Phase AC charging',
      'Up to 7.4kW output power for 1-Phase AC charging',
      'Integrated contactless RFID payment system',
      'User-friendly mobile application for charge monitoring',
      'An LED bar on the front to indicate the charging status',
      'Compatible with existing solar PV installations',
      'Bidirectional charging allows a supported EV\'s battery to be used as a power supply for buildings.'
    ],
    image: '/images/smartplug.png',
    bgColor: 'bg-horizop-ivory'
  },
  {
    title: 'HORIZOP FastPlug DC Charger',
    features: [
      'High-performance DC charging up to <b>350kW</b>',
      'Modular design for high availability and reduced costs',
      'Integrated contactless RFID payment system',
      '14" vandal-resistant, daylight-readable color touchscreen',
      'Master-Satellite configuration support'
    ],
    image: '/images/fastplug.png',
    bgColor: 'bg-horizop-yellow'
  }
];

const ProductsSection = () => {
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
          <h2 className="heading-medium font-serif text-horizop-navy mb-4">Products</h2>
          <div className="w-20 h-1 bg-horizop-gold mb-6 mx-auto rounded"></div>
        </motion.div>

        <div className="space-y-24">
          {productsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-3xl shadow-xl overflow-hidden ${item.bgColor}`}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`p-8 md:p-12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-3xl font-serif font-extrabold text-horizop-navy mb-6 tracking-tight"
                  >
                    {item.title}
                  </motion.h3>
                  <h4 className="text-xl font-bold text-horizop-gold mb-3">Features</h4>
                  <motion.ul 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-horizop-navy space-y-3 text-lg"
                  >
                    {item.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-horizop-gold mr-2">•</span>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`relative h-[400px] overflow-hidden ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                >
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain p-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="/catalogue.pdf" download="HORIZOP_EV_Charging_Catalogue.pdf">
            <button className="bg-horizop-gold hover:bg-horizop-gold/90 text-black font-semibold rounded-lg py-4 px-8 text-lg transition">
              Download 2023 EV Charging Catalogue
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 