import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Store: React.FC = () => {
  const { t } = useTranslation();

  const smartPlugDescription = t('store.smartPlugDescription');
  const fastPlugDescription = t('store.fastPlugDescription');
  const mobileChargerDescription = t('store.mobileChargerDescription');

  const accessoriesData = [
    {
      id: 'ev-charger-cable1',
      name: t('store.cable1Name'),
      image: '/images/EV_Charger_Cable1.png',
      price: 199.99,
      features: [
        t('store.cable1Feat1'),
        t('store.cable1Feat2'),
        t('store.cable1Feat3'),
        t('store.cable1Feat4')
      ],
    },
    {
      id: 'ev-charger-cable2',
      name: t('store.cable2Name'),
      image: '/images/EV_Charger_Cable2.png',
      price: 249.99,
      features: [
        t('store.cable2Feat1'),
        t('store.cable2Feat2'),
        t('store.cable2Feat3'),
        t('store.cable2Feat4')
      ],
    },
    {
      id: 'ev-charger-cable3',
      name: t('store.cable3Name'),
      image: '/images/EV_Charger_Cable3.png',
      price: 299.99,
      features: [
        t('store.cable3Feat1'),
        t('store.cable3Feat2'),
        t('store.cable3Feat3'),
        t('store.cable3Feat4')
      ],
    },
    {
      id: 'ev-charger-cable4',
      name: t('store.cable4Name'),
      image: '/images/EV_Charger_Cable4.png',
      price: 279.99,
      features: [
        t('store.cable4Feat1'),
        t('store.cable4Feat2'),
        t('store.cable4Feat3'),
        t('store.cable4Feat4')
      ],
    },
    {
      id: 'ev-charger1',
      name: t('store.compactChargerName'),
      image: '/images/EV_Charger1.png',
      price: 899.99,
      features: [
        t('store.compactChargerFeat1'),
        t('store.compactChargerFeat2'),
        t('store.compactChargerFeat3'),
        t('store.compactChargerFeat4'),
        t('store.compactChargerFeat5')
      ],
    },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [smartPlugExpanded, setSmartPlugExpanded] = useState(false);
  const [fastPlugExpanded, setFastPlugExpanded] = useState(false);
  const [mobileChargerExpanded, setMobileChargerExpanded] = useState(false);

  const descriptionRefs = {
    smartPlug: useRef<HTMLParagraphElement>(null),
    fastPlug: useRef<HTMLParagraphElement>(null),
    mobileCharger: useRef<HTMLParagraphElement>(null),
  };

  const accessoryRefs = useRef<{ [key: string]: React.RefObject<HTMLParagraphElement> }>({});
  accessoriesData.forEach(acc => {
    accessoryRefs.current[acc.id] = React.createRef<HTMLParagraphElement>();
  });

  const [accessoryExpandedStates, setAccessoryExpandedStates] = useState<{ [key: string]: boolean }>(
    accessoriesData.reduce((acc, current) => ({ ...acc, [current.id]: false }), {})
  );

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const allProducts = [
    {
      name: t('store.smartPlugTitle'),
      path: '/store/pulsar-plus',
      image: '/images/11kw borne de recharger.png',
      tag: t('store.homeTag'),
      description: smartPlugDescription,
      expanded: smartPlugExpanded,
      setExpanded: setSmartPlugExpanded,
      ref: descriptionRefs.smartPlug,
      price: 649,
      buttons: (
        <>
          <Button asChild className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-horizop-gold focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md">
            <Link to="/store/pulsar-plus">{t('store.buyButton')}</Link>
          </Button>
          <a
            href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-horizop-navy text-white py-3 rounded-lg text-lg font-semibold hover:bg-horizop-navy/80 focus:outline-none focus:ring-4 focus:ring-horizop-navy focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md flex items-center justify-center"
          >
            {t('store.learnMoreButton')}
          </a>
        </>
      )
    },
    {
      name: t('store.fastPlugTitle'),
      path: '/store/fastplug',
      image: '/images/EV_Charger15.png',
      tag: t('store.businessTag'),
      description: fastPlugDescription,
      expanded: fastPlugExpanded,
      setExpanded: setFastPlugExpanded,
      ref: descriptionRefs.fastPlug,
      price: 12999,
      buttons: (
        <>
          <Button asChild className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-horizop-gold focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md">
            <Link to="/store/fastplug">{t('store.buyButton')}</Link>
          </Button>
          <a
            href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-horizop-navy text-white py-3 rounded-lg text-lg font-semibold hover:bg-horizop-navy/80 focus:outline-none focus:ring-4 focus:ring-horizop-navy focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md flex items-center justify-center"
          >
            {t('store.learnMoreButton')}
          </a>
        </>
      )
    },
    {
      name: t('store.mobileChargerTitle'),
      path: '/store/mobile-charger',
      image: '/images/mobile.png',
      tag: t('store.mobileTag'),
      description: mobileChargerDescription,
      expanded: mobileChargerExpanded,
      setExpanded: setMobileChargerExpanded,
      ref: descriptionRefs.mobileCharger,
      price: 499,
      buttons: (
        <>
          <Button asChild className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-horizop-gold focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md">
            <Link to="/store/mobile-charger">{t('store.buyButton')}</Link>
          </Button>
          <a
            href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-horizop-navy text-white py-3 rounded-lg text-lg font-semibold hover:bg-horizop-navy/80 focus:outline-none focus:ring-4 focus:ring-horizop-navy focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md flex items-center justify-center"
          >
            {t('store.learnMoreButton')}
          </a>
        </>
      )
    },
    ...accessoriesData.map(acc => ({
      name: acc.name,
      path: '', // No navigation for accessory cards
      image: acc.image,
      tag: t('store.accessoryTag'),
      description: acc.features.join('. ') + '.',
      expanded: accessoryExpandedStates[acc.id],
      setExpanded: (state: boolean) => setAccessoryExpandedStates(prev => ({ ...prev, [acc.id]: state })),
      ref: accessoryRefs.current[acc.id],
      price: acc.price,
      buttons: (
        <>
          <Button
            className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-horizop-gold focus:ring-opacity-50 transition-all duration-300 ease-in-out shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id: acc.id,
                name: acc.name,
                price: acc.price,
                image: acc.image
              }, 1);
              navigate('/cart');
            }}
          >
            {t('store.buyButton')}
          </Button>
        </>
      )
    }))
  ];

  const filteredProducts = allProducts.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 w-full px-4 bg-gradient-to-br from-horizop-ivory via-white to-horizop-gold/10 py-16">
        <div className="max-w-4xl w-full text-center mb-12">
          <h1 className="text-6xl font-serif font-extrabold text-horizop-navy mb-4 tracking-tight drop-shadow-lg">{t('store.title')}</h1>
          <h2 className="text-2xl font-light text-horizop-navy/80 mb-2">{t('store.subtitle')}</h2>
          <p className="text-lg text-horizop-navy/60">{t('store.description')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mx-auto p-4">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              onClick={() => {
                // For all products, toggle description
                product.setExpanded(!product.expanded);
              }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200 flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                <span className="absolute top-4 left-4 bg-horizop-gold text-horizop-navy font-bold px-4 py-1 rounded-full text-xs shadow z-20">{product.tag}</span>
            </div>
              <div className="p-6 flex-grow flex flex-col justify-between text-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 truncate">{product.name}</h3>
                  <p
                    ref={product.ref}
                    className={`text-gray-600 transition-all duration-500 ease-in-out overflow-hidden`}
                    style={{
                      maxHeight: product.expanded ? `${product.ref.current?.scrollHeight}px` : '0px',
                    }}
                  >
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-col space-y-3">
                  <span className="text-3xl font-bold text-horizop-navy">${product.price.toFixed(2)}</span>
                  {product.buttons}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Business Solutions Section */}
      <footer className="w-full bg-[#232f3e] py-10 flex flex-col items-center">
        <h3 className="text-2xl text-white mb-2 text-center">Looking for charging solutions for your business?</h3>
        <p className="text-white text-center max-w-2xl text-sm">No matter the industry, we can make charging work for you. Send your details and we'll find the right solution for your business.</p>
      </footer>
    </div>
  );
};

export default Store; 