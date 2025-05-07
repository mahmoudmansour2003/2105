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
      `Bidirectional charging allows a supported EV's battery to be used as a power supply for buildings.`
    ],
    image: '/images/smartplug.png',
    bg: 'bg-horizop-lightYellow'
  },
  {
    title: 'HORIZOP FastPlug',
    features: [
      'The highest DC charging power output available on the market from 100kW up to 350 kW',
      'A modular charging design for high uptime and reduced costs',
      'An integrated contactless RFID payment system',
      'A 14" anti-vandal daylight readable color touchscreen',
      'Can be configured as a Master-Satellite solution'
    ],
    image: '/images/fastplug.png',
    bg: 'bg-horizop-yellow'
  }
];

const ProductsSection = () => (
  <section id="products" className="py-20 px-4 bg-horizop-ivory">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-serif font-bold text-horizop-navy mb-2 drop-shadow-lg">Products</h2>
        <div className="w-20 h-1 bg-horizop-gold mb-16 rounded"></div>
      </motion.div>

      <div className="space-y-24">
        {productsData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`rounded-3xl shadow-xl overflow-hidden ${item.bg}`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
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
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative h-[400px] overflow-hidden"
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

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <a
          href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-horizop-yellow text-horizop-navy font-bold shadow-lg rounded-lg px-8 py-5 text-lg md:text-xl hover:bg-horizop-gold hover:text-horizop-black border-2 border-horizop-yellow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-offset-2 text-center transform hover:scale-105"
        >
          Learn more via our 2023 EV Charging Catalogue
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProductsSection; 