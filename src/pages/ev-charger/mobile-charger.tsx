import React from 'react';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MobileCharger = () => {
  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal text-white">
      <main className="flex-grow">

        {/* Mobile Charger Hero Section with Background Image */}
        <section 
          className="relative h-screen flex items-center justify-center text-center text-white"
          style={{ backgroundImage: 'url(/images/mobile.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
          {/* Mobile Charger Text and Indicator */}
          <div className="absolute bottom-16 left-16 z-10 flex items-center">
            {/* Small dot indicator */}
            <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
            <span className="text-5xl md:text-6xl font-bold text-white">Mobile Charger</span>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Powerful is just the beginning</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">Portable Charging</button>
              <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">Smart Functions</button>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Introducing Horizop Mobile Charger – the sleek, next-generation portable charger designed for everyone from first-time EV owners to seasoned enthusiasts.<br /><br />
              Engineered for simplicity without compromise, it combines intuitive operation with smart technology for a consistently powerful and seamless charging experience.<br /><br />
              Plug in. Charge up. Drive forward.
            </p>
          </motion.div>
        </section>

        {/* Mobile Charger Options/Details Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white text-horizop-navy rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            {/* Placeholder for Mobile Charger detailed image */}
            <img 
              src="/images/mobile.png" 
              alt="Horizop Energy Mobile Charger Detail"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:text-left text-center px-4"
          >
            <div className="flex items-center md:justify-start justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-horizop-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xl font-semibold text-horizop-navy">For Everyone</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-horizop-navy mb-4">
              <span className="text-gray-500">Mobile Charger</span><br />Optimize Your Charging Experience
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              Choose the solution that powers your lifestyle. HORIZOP Mobile Charger ensures seamless installation and intelligent EV charging tailored to your energy needs.
            </p>
            <p className="text-lg mb-6 text-gray-700">
            </p>
            {/* Placeholder for Price - adjust as needed */}
            <p className="text-2xl font-bold text-horizop-gold mb-6">Starting from <span className="text-horizop-navy">$ XXX.XX</span></p>
            <Link to="/store">
              <Button className="bg-horizop-navy text-white hover:bg-horizop-gold hover:text-horizop-navy text-lg px-8 py-4 rounded-lg shadow-lg font-semibold">
                Learn More or Buy
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto bg-horizop-charcoal text-white rounded-xl shadow-2xl mt-12">
          <h2 className="text-4xl font-serif font-bold text-horizop-gold text-center mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spec Item 1 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Output Power:</h3>
              <p>7kW AC</p>
            </div>
            {/* Spec Item 2 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Adjustable Current:</h3>
              <p>6–32A</p>
            </div>
            {/* Spec Item 3 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Connector:</h3>
              <p>Type 2</p>
            </div>
            {/* Spec Item 4 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Cable Length:</h3>
              <p>Up to 10m, weatherproof</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-horizop-gold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-horizop-navy p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">Smart Scheduling</h3>
              <p>Schedule your charging sessions to take advantage of off-peak hours and lower electricity rates.</p>
            </motion.div>
            
            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-horizop-navy p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">Remote Monitoring & Control</h3>
              <p>Control and monitor your charging from anywhere using the mobile app.</p>
            </motion.div>
            
            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-horizop-navy p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">Energy Usage Tracking</h3>
              <p>Keep track of your energy consumption and costs directly through the app.</p>
            </motion.div>
          </div>
        </section>

        {/* Background Photo Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center text-center"
          style={{ backgroundImage: "url(/images/pexels-mikebirdy-110844.jpg)", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for readability */}
          <div className="relative z-10 flex justify-center items-center h-full">
            <a
              href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-200 text-black font-semibold text-lg shadow border border-gray-400 hover:bg-cyan-100 transition"
              style={{ minWidth: 'fit-content' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Download catalog
            </a>
          </div>
        </section>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/store">
            <Button className="bg-horizop-gold text-white hover:bg-yellow-600 text-lg px-8 py-4 rounded-full shadow-lg font-semibold">
              Shop Mobile Charger Now
            </Button>
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default MobileCharger; 