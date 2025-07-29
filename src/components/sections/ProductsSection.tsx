import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const productsData = [
  {
    title: 'HORIZOP SmartPlug',
    description: `The HORIZOP SmartPlug is a sleek, powerful EV charger designed for modern living. It offers up to 22kW for 3-phase and 7.4kW for single-phase AC charging, with easy installation and a 3-year warranty. Features include contactless RFID payment, a mobile app for monitoring, and a front LED status bar. It's solar PV compatible and supports bidirectional charging, allowing your EV to power your home—smart, sustainable, and future-ready.`,
    image: '/images/EV_Charger1.png',
    bgColor: 'bg-gradient-to-br from-horizop-ivory via-white to-horizop-gold/10',
    creative: true,
  },
  {
    title: 'HORIZOP FastPlug DC Charger',
    description: `The HORIZOP FastPlug DC Charger delivers ultra-fast DC charging up to 350kW, making it ideal for high-demand environments. Its modular design ensures maximum uptime and cost efficiency, while a durable 14" vandal-resistant, daylight-readable touchscreen offers an intuitive user experience. With an integrated contactless RFID payment system and support for Master-Satellite configurations, it's built for scalable, smart, and secure charging.`,
    image: '/images/EV_Charger15.png',
    bgColor: 'bg-gradient-to-br from-horizop-yellow/10 via-white to-horizop-gold/10',
    creative: true,
  }
];

const ProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-br from-horizop-ivory via-white to-horizop-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-horizop-navy mb-6">{t('productsSection.title')}</h2>
        <p className="text-center text-lg text-horizop-navy/70 mb-16">{t('productsSection.description')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mx-auto">
          {/* HORIZOP SmartPlug Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-horizop-gold/20 flex flex-col overflow-hidden relative">
            <div className="relative h-80 w-full flex items-center justify-center overflow-hidden bg-white">
              <img src="/images/EV_Charger1.png" alt="HORIZOP SmartPlug" className="object-contain max-h-72 w-auto h-full p-4" />
              <div className="absolute top-4 left-4 bg-horizop-gold text-horizop-navy font-bold px-4 py-1 rounded-full text-xs shadow z-20">{t('productsSection.homeTag')}</div>
            </div>
            <div className="flex-1 flex flex-col justify-end p-6 z-20">
              <h3 className="text-2xl font-serif font-bold mb-2 text-horizop-navy drop-shadow">{t('productsSection.smartplugTitle')}</h3>
              <p className="text-base mb-4 text-horizop-navy/80">{t('productsSection.smartplugDescription')}</p>
              <a href="/store/pulsar-plus" className="bg-horizop-gold text-horizop-navy font-bold rounded-full px-6 py-2 mt-auto self-start shadow hover:bg-horizop-navy hover:text-horizop-gold transition">{t('productsSection.learnMore')}</a>
            </div>
          </div>
          {/* HORIZOP FastPlug DC Charger Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-horizop-gold/20 flex flex-col overflow-hidden relative">
            <div className="relative h-80 w-full flex items-center justify-center overflow-hidden bg-white">
              <img src="/images/EV_Charger15.png" alt="HORIZOP FastPlug DC Charger" className="object-contain max-h-72 w-auto h-full p-4" />
              <div className="absolute top-4 left-4 bg-horizop-gold text-horizop-navy font-bold px-4 py-1 rounded-full text-xs shadow z-20">{t('productsSection.businessTag')}</div>
            </div>
            <div className="flex-1 flex flex-col justify-end p-6 z-20">
              <h3 className="text-2xl font-serif font-bold mb-2 text-horizop-navy drop-shadow">{t('productsSection.fastplugTitle')}</h3>
              <p className="text-base mb-4 text-horizop-navy/80">{t('productsSection.fastplugDescription')}</p>
              <a href="/store/accessories" className="bg-horizop-gold text-horizop-navy font-bold rounded-full px-6 py-2 mt-auto self-start shadow hover:bg-horizop-navy hover:text-horizop-gold transition">{t('productsSection.learnMore')}</a>
            </div>
          </div>
          {/* HORIZOP Mobile Charger Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-horizop-gold/20 flex flex-col overflow-hidden relative">
            <div className="relative h-80 w-full flex items-center justify-center overflow-hidden bg-white">
              <img src="/images/mobile.png" alt="HORIZOP Mobile Charger" className="object-contain max-h-72 w-auto h-full p-4" />
              <div className="absolute top-4 left-4 bg-horizop-gold text-horizop-navy font-bold px-4 py-1 rounded-full text-xs shadow z-20">{t('productsSection.mobileTag')}</div>
                </div>
            <div className="flex-1 flex flex-col justify-end p-6 z-20">
              <h3 className="text-2xl font-serif font-bold mb-2 text-horizop-navy drop-shadow">{t('productsSection.mobileChargerTitle')}</h3>
              <p className="text-base mb-4 text-horizop-navy/80">{t('productsSection.mobileChargerDescription')}</p>
              <a href="/store/mobile-charger" className="bg-horizop-gold text-horizop-navy font-bold rounded-full px-6 py-2 mt-auto self-start shadow hover:bg-horizop-navy hover:text-horizop-gold transition">{t('productsSection.learnMore')}</a>
              </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 