import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'HORIZOP Smartplug',
    type: 'for Home',
    image: '/images/freepik__a-man-charging-his-electric-vehicle__38007.png',
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
    badge: 'Coming Soon',
    bg: 'bg-white'
  },
  {
    title: 'HORIZOP Smartplug',
    type: 'for Semi-Public',
    image: '/images/Semi Public Use.png',
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
    badge: 'Coming Soon',
    bg: 'bg-white'
  },
  {
    title: 'HORIZOP FastPlug',
    type: 'for Public',
    image: '/images/2.png',
    features: [
      'The highest DC charging power output available on the market from 100kW up to 350 kW',
      'A modular charging design for high uptime and reduced costs',
      'An integrated contactless RFID payment system',
      'A 14" anti-vandal daylight readable color touchscreen',
      'Can be configured as a Master-Satellite solution'
    ],
    badge: 'Under Construction',
    bg: 'bg-white'
  },
  {
    title: 'HORIZOP SunPlug',
    type: 'for Public',
    image: '/images/sunplug.png',
    features: [
      'Solar-powered EV charging',
      'Weather-resistant design',
      'Remote monitoring and control',
      'Integrated payment system',
      'Sustainable and eco-friendly'
    ],
    badge: 'Under Construction',
    bg: 'bg-white'
  }
];

const badgeVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
};

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal">
      <Header />
      <main className="flex-grow pt-28">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl font-serif font-extrabold text-horizop-yellow mb-2 drop-shadow-lg italic tracking-wide">OUR SOLUTIONS</h1>
              <p className="text-white text-lg max-w-2xl mx-auto mt-4 mb-8">We're committed to bringing you the best EV charging experience.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {solutions.map((solution, idx) => (
                <motion.div
                  key={solution.title + solution.type}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl border-2 border-horizop-gold overflow-hidden flex flex-col items-center ${solution.bg} p-0 group hover:shadow-2xl hover:border-horizop-yellow transition-all duration-300`}
                  style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
                >
                  <motion.div
                    className="relative w-full h-48 flex items-center justify-center bg-gradient-to-b from-horizop-navy/80 to-horizop-charcoal/80"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <motion.img
                      src={solution.image}
                      alt={solution.title}
                      className="object-contain h-36 drop-shadow-xl mx-auto transition-transform duration-500 group-hover:scale-110"
                      onError={e => (e.currentTarget.style.opacity = '0.2')}
                      whileHover={{ scale: 1.1 }}
                    />
                    {solution.badge && (
                      <motion.div
                        variants={badgeVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute top-3 right-3 bg-horizop-navy text-horizop-yellow font-bold px-3 py-1 rounded shadow-lg text-xs rotate-[-8deg] border-2 border-horizop-yellow"
                      >
                        {solution.badge}
                      </motion.div>
                    )}
                  </motion.div>
                  <div className="flex-1 flex flex-col items-center justify-between w-full px-6 py-4">
                    <p className="text-horizop-gold font-semibold text-base mb-2 text-center">{solution.type}</p>
                    <h3 className="text-xl font-serif font-bold text-horizop-navy mb-1 text-center leading-tight">{solution.title}</h3>
                    <ul className="text-horizop-navy text-sm space-y-1 mb-2 text-left w-full max-w-xs mx-auto">
                      {solution.features.map((feature, fidx) => (
                        <motion.li
                          key={fidx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 + fidx * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="text-horizop-gold mr-2">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
