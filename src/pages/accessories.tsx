import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const productImages = [
  '/images/fastplug.png',
  '/images/smartplug.png',
  '/images/placeholder.svg',
  '/images/pexels-kindelmedia-9799996.jpg',
];

const amperages = [
  { label: '350kW', value: 350 },
  { label: '150kW', value: 150 },
];

const Accessories = () => {
  const [selectedAmperage, setSelectedAmperage] = useState(amperages[0].value);
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(productImages[0]);
  const { t } = useTranslation();

  const price = 12999;

  const sections = [
    { key: 'description', label: t('Description'), content: t('fastPlugDescription') },
    { key: 'specs', label: t('Technical Specifications'), content: t('fastPlugSpecs') },
    { key: 'included', label: t(`What's included`), content: t('fastPlugIncluded') },
    { key: 'install', label: t('How to install'), content: t('fastPlugInstall') },
    { key: 'refunds', label: t('Sales & Refunds'), content: t('fastPlugRefunds') },
    { key: 'warranty', label: t('Warranty'), content: t('fastPlugWarranty') },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Images */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <img src={mainImage} alt="HORIZOP FastPlug" className="rounded shadow w-full h-80 object-contain bg-gray-50" />
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`FastPlug ${idx + 1}`}
                className={`rounded cursor-pointer border-2 ${mainImage === img ? 'border-horizop-gold' : 'border-transparent'}`}
                onClick={() => setMainImage(img)}
                style={{ height: 60, objectFit: 'cover', background: '#f3f4f6' }}
              />
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full w-max mb-2">DC Fast Charger | 350kW</span>
            <h1 className="text-4xl font-bold">{t('HORIZOP FastPlug DC Charger')}</h1>
            <ul className="list-disc pl-5 text-gray-700 text-base mt-2 space-y-1">
              <li>{t('fastChargingPower')}</li>
              <li>{t('modularDesign')}</li>
              <li>{t('integratedPayment')}</li>
              <li>{t('touchscreen')}</li>
              <li>{t('masterSatellite')}</li>
            </ul>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <span className="font-semibold">{t('Select output')}</span>
            {amperages.map(a => (
              <button
                key={a.value}
                className={`px-4 py-2 rounded border ${selectedAmperage === a.value ? 'bg-horizop-gold text-white border-horizop-gold' : 'bg-white border-gray-300 text-gray-700'}`}
                onClick={() => setSelectedAmperage(a.value)}
              >
                {a.label}
              </button>
            ))}
          </div>
          <div className="flex gap-4 items-center mt-2">
            <span className="font-semibold">{t('Quantity')}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="w-8 text-center inline-block">{quantity}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <div className="text-2xl font-bold mt-2">${price.toLocaleString()} USD</div>
          <button className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">{t('Add to cart')}</button>
          <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 mt-2 hover:bg-gray-800 transition">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M21.35 11.1l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 001.42 1.42L4 12.41V20a2 2 0 002 2h3a1 1 0 001-1v-4h2v4a1 1 0 001 1h3a2 2 0 002-2v-7.59l1.29 1.3a1 1 0 001.42-1.42z" fill="#fff"/></svg>
            {t('Buy with G Pay')}
          </button>
          <div className="text-center text-sm text-gray-500 mt-2">{t('More payment options')}</div>
          <div className="flex gap-4 justify-between text-xs text-gray-600 border-t pt-4 mt-4">
            <span>{t('SECURE PAYMENT')}</span>
            <span>{t('ASSEMBLED IN U.S.A.')}</span>
            <span>{t('U.S. BASED CUSTOMER SERVICE')}</span>
            <span>{t('3-YEAR LIMITED WARRANTY')}</span>
          </div>
          <div className="mt-6 border-t pt-4">
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
        </div>
      </div>
    </div>
  );
};

export default Accessories; 