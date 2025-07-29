import React from 'react';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Smartplug = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal text-white">
      <main className="flex-grow">

        {/* Smartplug Hero Section with Background Image */}
        <section 
          className="relative h-screen flex items-center justify-center text-center text-white"
          style={{ backgroundImage: 'url(/images/pexels-kindelmedia-9800009.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
          {/* Pulsar Plus Text and Indicator (moved from fourth section) */}
          <div className="absolute bottom-16 left-16 z-10 flex items-center">
            {/* Small dot indicator */}
            <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
            <span className="text-5xl md:text-6xl font-bold text-white">{t('smartplugPage.heroTitle')}</span> {/* Changed text from Pulsar Plus to SmartPlug */}
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">{t('smartplugPage.section1Title')}</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">{t('smartplugPage.acButton')}</button>
              <button className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full">{t('smartplugPage.homeButton')}</button>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t('smartplugPage.section1Description') }}>
            </p>
          </motion.div>
        </section>

        {/* Smartplug Options/Details Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-white text-horizop-navy rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            {/* Placeholder for Smartplug detailed image */}
            <img 
              src="/images/EV_Charger1.png" 
              alt="Horizop Energy Smartplug Detail"
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
              <span className="text-xl font-semibold text-horizop-navy">{t('smartplugPage.forHome')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-horizop-navy mb-4">
              <span className="text-gray-500">{t('smartplugPage.heroTitle')}</span><br />{t('smartplugPage.section2Title')}
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              {t('smartplugPage.section2Description')}
            </p>
            <p className="text-lg mb-6 text-gray-700">
            </p>
            {/* Placeholder for Price - adjust as needed */}
            <p className="text-2xl font-bold text-horizop-gold mb-6">{t('smartplugPage.priceLabel')} <span className="text-horizop-navy">$ XXX.XX</span></p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/store" className="flex-1">
                <button className="w-full bg-horizop-gold text-horizop-navy hover:bg-horizop-navy hover:text-white text-lg px-8 py-4 rounded-lg shadow-lg font-semibold">
                  {t('smartplugPage.buyButton')}
                </button>
            </Link>
              <a
                href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-horizop-navy text-white hover:bg-horizop-gold hover:text-horizop-navy text-lg px-8 py-4 rounded-lg shadow-lg font-semibold text-center"
              >
                {t('smartplugPage.learnMoreButton')}
              </a>
            </div>
          </motion.div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto bg-horizop-charcoal text-white rounded-xl shadow-2xl mt-12">
          <h2 className="text-4xl font-serif font-bold text-horizop-gold text-center mb-12">{t('smartplugPage.techSpecsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spec Item 1 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.wirelessLabel')}</h3>
              <p>{t('smartplugPage.wirelessValue')}</p>
            </div>
            {/* Spec Item 2 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.enclosureLabel')}</h3>
              <p>{t('smartplugPage.enclosureValue')}</p>
            </div>
            {/* Spec Item 3 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.opTempLabel')}</h3>
              <p>{t('smartplugPage.opTempValue')}</p>
            </div>
            {/* Spec Item 4 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.storageTempLabel')}</h3>
              <p>{t('smartplugPage.storageTempValue')}</p>
            </div>
            {/* Spec Item 5 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.humidityLabel')}</h3>
              <p>{t('smartplugPage.humidityValue')}</p>
            </div>
            {/* Spec Item 6 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.dimensionsLabel')}</h3>
              <p>{t('smartplugPage.dimensionsValue')}</p>
            </div>
            {/* Spec Item 7 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.weightLabel')}</h3>
              <p>{t('smartplugPage.weightValue')}</p>
            </div>
            {/* Spec Item 8 */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{t('smartplugPage.powerLimitLabel')}</h3>
              <p>{t('smartplugPage.powerLimitValue')}</p>
            </div>
          </div>
        </section>

        {/* Model Specifications Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto bg-horizop-charcoal text-white rounded-xl shadow-2xl mt-8">
          <h2 className="text-4xl font-serif font-bold text-horizop-gold text-center mb-12">{t('smartplugPage.modelSpecsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SP Model */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-horizop-gold">{t('smartplugPage.spModelTitle')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">{t('smartplugPage.acPowerSupply')}</h4>
                  <p>{t('smartplugPage.spPowerSupplyValue')}</p>
                </div>
                <div>
                  <h4 className="font-bold">{t('smartplugPage.acInputVoltage')}</h4>
                  <p>{t('smartplugPage.spVoltageValue')}</p>
                </div>
                <div>
                  <h4 className="font-bold">{t('smartplugPage.maxInputCurrent')}</h4>
                  <p>{t('smartplugPage.spCurrentValue')}</p>
                </div>
                <div>
                  <h4 className="font-bold">{t('smartplugPage.maxInputPower')}</h4>
                  <p>{t('smartplugPage.spPowerValue')}</p>
                </div>
              </div>
            </div>
            {/* TP Model */}
            <div className="bg-horizop-navy p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-horizop-gold">{t('smartplugPage.tpModelTitle')}</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">{t('smartplugPage.acPowerSupply')}</h4>
                  <p>{t('smartplugPage.tpPowerSupplyValue')}</p>
                </div>
                <div>
                  <h4 className="font-bold">{t('smartplugPage.acInputVoltage')}</h4>
                  <p>{t('smartplugPage.tpVoltageValue')}</p>
                </div>
                <div>
                  <h4 className="font-bold">{t('smartplugPage.maxInputCurrent')}</h4>
                  <p>{t('smartplugPage.tpCurrentValue')}</p>
                </div>
                <div>
                  <h4 className="font-bold">{t('smartplugPage.maxInputPower')}</h4>
                  <p>{t('smartplugPage.tpPowerValue')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 w-full max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-horizop-gold text-center mb-12">{t('smartplugPage.featuresTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-horizop-navy p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">{t('smartplugPage.schedulingTitle')}</h3>
              <p>{t('smartplugPage.schedulingDescription')}</p>
            </motion.div>
            
            {/* Feature Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-horizop-navy p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">{t('smartplugPage.monitoringTitle')}</h3>
              <p>{t('smartplugPage.monitoringDescription')}</p>
            </motion.div>
            
            {/* Feature Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-horizop-navy p-6 rounded-lg shadow-lg text-white"
            >
              <h3 className="text-2xl font-bold mb-3">{t('smartplugPage.trackingTitle')}</h3>
              <p>{t('smartplugPage.trackingDescription')}</p>
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

        {/* Two-Card Section: OCPP App & SmartPlug */}
        <section className="py-12 px-2 w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* OCPP App Card */}
            <div className="relative rounded-xl shadow-xl overflow-hidden min-h-[260px] flex items-stretch">
              {/* Image as background */}
              <img src="/images/pexels-liza-summer-6347729.jpg" alt="OCPP App" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 z-10" />
              {/* Text Content */}
              <div className="relative z-20 flex flex-col justify-between h-full w-full p-6 md:p-8">
                <span className="inline-block bg-blue-700/80 text-white font-bold px-3 py-0.5 rounded-full text-xs mb-2 self-start">Software</span>
                <h2 className="text-lg md:text-xl font-extrabold text-white mb-1 drop-shadow">OCPP App</h2>
                <p className="text-xs md:text-sm text-white font-medium mb-3 drop-shadow">Users can schedule charging sessions, monitor energy use and enable energy management features with one intuitive app.</p>
                <div className="flex justify-end items-end mt-auto">
                  <Link to="/the-app">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all duration-200">
                      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M16 10v8m0 0l-4-4m4 4l4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* SmartPlug Card */}
            <div className="relative rounded-xl shadow-xl overflow-hidden min-h-[260px] flex items-stretch">
              {/* Image as background */}
              <img src="/images/EV_Charger_Cable4.png" alt="SmartPlug" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 z-10" />
              {/* Text Content */}
              <div className="relative z-20 flex flex-col justify-between h-full w-full p-6 md:p-8">
                <span className="inline-block bg-green-700/80 text-white font-bold px-3 py-0.5 rounded-full text-xs mb-2 self-start">Home EV Charging</span>
                <h2 className="text-lg md:text-xl font-extrabold text-white mb-1 drop-shadow">See how SmartPlug is part of a complete solution at home</h2>
                <p className="text-xs md:text-sm text-white font-medium mb-3 drop-shadow">Discover how SmartPlug integrates seamlessly into your home charging setup, offering reliability, speed, and smart features for every EV owner.</p>
                <div className="flex justify-end items-end mt-auto">
                  <Link to="/home#smartplug-features">
                    <button className="bg-green-600 hover:bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all duration-200">
                      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="2" fill="none" />
                        <path d="M16 10v8m0 0l-4-4m4 4l4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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
          <h2 className="text-3xl font-serif font-bold text-horizop-gold mb-6">Ready to simplify your EV charging?</h2>
          <Link to="/store">
            <Button className="bg-horizop-gold text-horizop-navy hover:bg-horizop-gold/90 text-lg px-8 py-4 rounded-lg shadow-lg font-semibold">
              Shop Smartplug Now
            </Button>
          </Link>
        </motion.div>

        {/* Floating Shop SmartPlug Button */}
        <Link to="/store/pulsar-plus" className="fixed bottom-8 right-24 z-50">
          <button className="bg-horizop-gold text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-horizop-navy hover:text-horizop-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50">
            Shop SmartPlug
          </button>
        </Link>

      </main>
      <Footer />
    </div>
  );
};

export default Smartplug; 