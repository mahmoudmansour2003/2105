import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const productsData = [
  {
    titleKey: 'HORIZOP SmartPlug',
    featuresKeys: [
      'simpleDesign',
      'easyInstallationWarranty',
      '22kWOutput',
      '7_4kWOutput',
      'rfidPayment',
      'mobileApp',
      'ledIndicator',
      'solarCompatibility',
      'bidirectionalCharging'
    ],
    image: '/images/smartplug.png',
    bg: 'bg-horizop-lightYellow'
  },
  {
    titleKey: 'HORIZOP FastPlug DC Charger',
    featuresKeys: [
      'fastChargingPower',
      'modularDesign',
      'integratedPayment',
      'touchscreen',
      'masterSatellite'
    ],
    image: '/images/fastplug.png',
    bg: 'bg-horizop-yellow'
  }
];

const ProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-20 px-4 bg-horizop-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-horizop-navy mb-2 drop-shadow-lg">{t('productsSectionTitle')}</h2>
          <div className="w-20 h-1 bg-horizop-gold mb-16 rounded"></div>
        </motion.div>

        <div className="space-y-24">
          {productsData.map((item, index) => (
            <motion.div
              key={item.titleKey}
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
                    {t(item.titleKey)}
                  </motion.h3>
                  <h4 className="text-xl font-bold text-horizop-gold mb-3">{t('productsSectionFeaturesTitle')}</h4>
                  <motion.ul 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-horizop-navy space-y-3 text-lg"
                  >
                    {item.featuresKeys.map((featureKey, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-horizop-gold mr-2">•</span>
                        {featureKey === 'fastChargingPower' ? (
                          <span dangerouslySetInnerHTML={{ __html: t(featureKey) }} />
                        ) : (
                          t(featureKey)
                        )}
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
                    alt={t(item.titleKey)}
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
            {t('productsSectionCatalogueButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection; 