import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Globe, Sun, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const WhoWeAreSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Sun size={40} className="text-horizop-yellow animate-spin-slow" />,
      title: t('whoWeAre.innovationTitle'),
      description: t('whoWeAre.innovationDescription')
    },
    {
      icon: <Zap size={40} className="text-horizop-yellow animate-bounce-subtle" />,
      title: t('whoWeAre.sustainabilityTitle'),
      description: t('whoWeAre.sustainabilityDescription')
    },
    {
      icon: <Globe size={40} className="text-horizop-yellow animate-float" />,
      title: t('whoWeAre.collaborationTitle'),
      description: t('whoWeAre.collaborationDescription')
    }
  ];

  return (
    <section id="who-we-are" className="section bg-horizop-black text-horizop-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-medium text-horizop-yellow mb-4 shine">{t('whoWeAre.title')}</h2>
          <div className="w-20 h-1 bg-horizop-yellow mx-auto mb-6 animated-border"></div>
          <p className="text-horizop-white max-w-3xl mx-auto mb-6">
            {t('whoWeAre.description')}
          </p>
          <a 
            href="https://www.linkedin.com/company/horizop-energy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-horizop-yellow text-horizop-navy font-bold shadow-lg rounded px-5 py-2 hover:bg-horizop-gold hover:text-horizop-black border-2 border-horizop-yellow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-offset-2"
          >
            <Link size={16} /> {t('whoWeAre.learnMore')}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-horizop-yellow mb-4 animated-border inline-block pb-2">{t('whoWeAre.missionTitle')}</h3>
            <p className="text-horizop-lightYellow mb-6">
              {t('whoWeAre.missionDescription')}
            </p>
            
            <h3 className="text-2xl font-bold text-horizop-yellow mb-4 animated-border inline-block pb-2">{t('whoWeAre.visionTitle')}</h3>
            <p className="text-horizop-lightYellow mb-6">
              {t('whoWeAre.visionDescription')}
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-horizop-yellow mb-4">{t('whoWeAre.coreValues')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="card-hover border-none shadow-md bg-gradient-to-br from-horizop-black to-gray-900 hover:yellow-glow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3">{value.icon}</div>
                        <h5 className="text-lg font-semibold mb-2 text-horizop-yellow">{value.title}</h5>
                        <p className="text-sm text-horizop-white">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
              <img 
              src="/images/ChatGPT Image Jun 12, 2025, 10_23_14 AM.png"
                alt="Team collaboration" 
              className="rounded-lg shadow-lg"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
