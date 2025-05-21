import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const softwareData = [
  {
    titleKey: 'softwareDlmTitle',
    descriptionKey: 'softwareDlmDescription',
    image: '/images/freepik__a-vertical-electric-vehicle-charging-station__21097.png',
    bg: 'bg-horizop-lightYellow'
  },
  {
    titleKey: 'softwareHorizonTitle',
    descriptionKey: 'softwareHorizonDescription',
    image: '/images/pexels-kevin-ku-92347-577585.jpg',
    bg: 'bg-horizop-yellow'
  }
];

const SoftwareSection = () => {
  const { t } = useTranslation();

  return (
    <section id="software" className="py-20 px-4 bg-horizop-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-horizop-navy mb-2 drop-shadow-lg">{t('softwareSectionTitle')}</h2>
          <div className="w-20 h-1 bg-horizop-gold mb-16 rounded"></div>
        </motion.div>

        <div className="space-y-24">
          {softwareData.map((item, index) => (
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
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-horizop-navy space-y-4 text-lg"
                  >
                    {t(item.descriptionKey).split('. ').map((sentence, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        {sentence && (
                          <>
                            <span className="text-horizop-gold mr-2">•</span>
                            {sentence}.
                          </>
                        )}
                      </motion.p>
                    ))}
                  </motion.div>
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
      </div>
    </section>
  );
};

export default SoftwareSection; 