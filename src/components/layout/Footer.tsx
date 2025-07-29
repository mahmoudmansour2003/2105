import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-horizop-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-baseline">
          <div className="flex flex-col">
            <h4 className="text-3xl font-extrabold text-horizop-gold mt-0 leading-none">{t('footer.title')}</h4>
            <ul className="mb-2 ml-1 space-y-1 mt-2">
              <li className="text-lg font-semibold text-white">
                <Link to="/smartplug" className="hover:text-horizop-gold transition-colors">{t('footer.smartplugLink')}</Link>
              </li>
              <li className="text-lg font-semibold text-white">
                <Link to="/fastplug" className="hover:text-horizop-gold transition-colors">{t('footer.fastplugLink')}</Link>
              </li>
              <li className="text-lg font-semibold text-white">
                <Link to="/mobile-charger" className="hover:text-horizop-gold transition-colors">{t('footer.mobileChargerLink')}</Link>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-2 leading-none">{t('footer.companyName')}</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.tagline')}
            </p>
            <h4 className="text-lg font-semibold mt-2 leading-none">{t('footer.socialMedia')}</h4>
            <div className="flex space-x-6 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-7 h-7 text-white hover:text-horizop-gold transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-7 h-7 text-white hover:text-horizop-gold transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-7 h-7 text-white hover:text-horizop-gold transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-horizop-gold mt-0 leading-none">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 mt-2">
              <li><Link to="/" className="text-gray-300 hover:text-horizop-gold transition-colors">{t('footer.homeLink')}</Link></li>
              <li><Link to="/who-we-are" className="text-gray-300 hover:text-horizop-gold transition-colors">{t('footer.whoWeAreLink')}</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-horizop-gold transition-colors">{t('footer.partnerLink')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-horizop-gold transition-colors">{t('footer.contactLink')}</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-horizop-gold mt-0 leading-none">{t('footer.contactUs')}</h4>
            <div className="space-y-4 mt-2">
              <p className="text-gray-300">{t('footer.email')}</p>
              <p className="text-gray-300">{t('footer.phone')}</p>
              <p className="text-gray-300">{t('footer.address')}</p>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-horizop-gold mt-0 leading-none">{t('footer.newsletter')}</h4>
              <form className="flex mt-2 flex-col">
                <input 
                  type="email" 
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="bg-transparent border border-gray-600 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-horizop-gold w-full"
                />
                <button 
                  className="bg-horizop-gold hover:bg-horizop-gold/90 text-black px-4 py-2 rounded-r-md font-medium"
                >
                  {t('footer.subscribe')}
                </button>
              </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">{t('footer.copyright')}</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-horizop-gold transition-colors">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms" className="text-gray-400 hover:text-horizop-gold transition-colors">{t('footer.termsOfService')}</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-horizop-gold transition-colors">{t('footer.cookiesPolicy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
