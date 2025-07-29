import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCart } from "@/context/CartContext";

const productImages = [
  '/images/ChatGPT Image Jun 12, 2025, 10_23_14 AM.png',
  '/images/EV_Charger1.png',
  '/images/EV_Charger_Cable2.png',
  '/images/EV_Charger_Cable4.png',
  '/images/EV_Charger_Cable1.png',
  '/images/EV_Charger_Cable3.png',
];

const amperages = [
  { labelKey: 'pulsarPlusPage.amperage40', value: 40 },
  { labelKey: 'pulsarPlusPage.amperage48', value: 48 },
];

const SmartPlug = () => {
  const [selectedAmperage, setSelectedAmperage] = useState(amperages[0].value);
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [zoomOpen, setZoomOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const price = 649;

  const sections = [
    { key: 'description', label: t('pulsarPlusPage.description'), content: t('pulsarPlusPage.descriptionContent') },
    { key: 'specs', label: t('pulsarPlusPage.techSpecs'), content: t('pulsarPlusPage.techSpecsContent') },
    { key: 'included', label: t('pulsarPlusPage.whatsIncluded'), content: t('pulsarPlusPage.whatsIncludedContent') },
    { key: 'refunds', label: t('pulsarPlusPage.salesAndRefunds'), content: t('pulsarPlusPage.salesAndRefundsContent') },
    { key: 'warranty', label: t('pulsarPlusPage.warrantyInfo'), content: t('pulsarPlusPage.warrantyInfoContent') },
  ];

  const handleRequestQuoteClick = () => {
    navigate('/quote-request');
  };

  const handleAddToCart = () => {
    addToCart({
      id: 'smartplug',
      name: 'SmartPlug',
      price,
      image: mainImage
    }, quantity, { amperage: selectedAmperage });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Images */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <img
            src={mainImage}
            alt="SmartPlug"
            className="rounded shadow w-full h-80 object-contain bg-gray-50 cursor-zoom-in"
            onClick={() => setZoomOpen(true)}
          />
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`SmartPlug ${idx + 1}`}
                className={`rounded cursor-pointer border-2 ${mainImage === img ? 'border-horizop-gold' : 'border-transparent'}`}
                onClick={() => setMainImage(img)}
                style={{ height: 60, objectFit: 'cover', background: '#f3f4f6' }}
              />
            ))}
          </div>
          {/* Moved Sections here, directly below images */}
          <div className="w-full mt-6 pt-4">
            {sections.map(section => (
              <div key={section.key} className="mb-2">
                <button
                  className="w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-800 bg-gray-100 rounded hover:bg-gray-200 transition"
                  onClick={() => setExpanded(expanded === section.key ? null : section.key)}
                >
                  {section.label}
                  <span>{expanded === section.key ? '−' : '+'}</span>
                </button>
                {expanded === section.key && (
                  <div className="p-4 text-gray-700 bg-gray-50 border rounded-b animate-fade-in">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Zoom Modal */}
          {zoomOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setZoomOpen(false)}>
              <div className="relative max-w-3xl w-full flex items-center justify-center">
                <img
                  src={mainImage}
                  alt="Zoomed"
                  className="max-h-[80vh] max-w-full rounded shadow-lg object-contain cursor-zoom-out transition-transform duration-200 hover:scale-110"
                  onClick={e => e.stopPropagation()}
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                  onClick={() => setZoomOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full w-max mb-2">{t('pulsarPlusPage.tag')}</span>
            <h1 className="text-4xl font-bold">{t('pulsarPlusPage.title')}</h1>
            <span className="text-lg font-semibold text-horizop-gold mt-2 mb-1">{t('pulsarPlusPage.features')}</span>
            <ul className="list-disc pl-5 text-gray-700 text-base mt-2 space-y-1">
              <li>{t('pulsarPlusPage.feature1')}</li>
              <li>{t('pulsarPlusPage.feature2')}</li>
              <li>{t('pulsarPlusPage.feature3')}</li>
            </ul>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <span className="font-semibold">{t('pulsarPlusPage.selectAmperage')}</span>
            {amperages.map(a => (
              <button
                key={a.value}
                className={`px-4 py-2 rounded border ${selectedAmperage === a.value ? 'bg-horizop-gold text-white border-horizop-gold' : 'bg-white border-gray-300 text-gray-700'}`}
                onClick={() => setSelectedAmperage(a.value)}
              >
                {t(a.labelKey)}
              </button>
            ))}
          </div>
          <div className="flex gap-4 items-center mt-2">
            <span className="font-semibold">{t('pulsarPlusPage.quantity')}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="w-8 text-center inline-block">{quantity}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <div className="text-2xl font-bold mt-2">{t('pulsarPlusPage.priceDisplay', { price: price.toFixed(2) })}</div>
          <button
            className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50"
            onClick={handleAddToCart}
          >
            {t('pulsarPlusPage.addToCart')}
          </button>
          {/* Request a Quote Button */}
          <button
            onClick={handleRequestQuoteClick}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {t('pulsarPlusPage.requestQuote')} <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-700 text-sm mr-2">{t('pulsarPlusPage.pricesExcludeVat')}</span>
            {/* Simple Toggle Switch (using Tailwind classes) */}
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="priceToggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label htmlFor="priceToggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-2">{t('pulsarPlusPage.morePaymentOptions')}</div>
          <div className="flex gap-4 justify-between text-xs text-gray-600 border-t pt-4 mt-4">
            <span>{t('pulsarPlusPage.securePayment')}</span>
            <span>{t('pulsarPlusPage.assembledInUSA')}</span>
            <span>{t('pulsarPlusPage.customerService')}</span>
            <span>{t('pulsarPlusPage.warranty')}</span>
          </div>
        </div>
      </div>
  </div>
);
};

export default SmartPlug; 