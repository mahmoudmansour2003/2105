import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCart } from "@/context/CartContext";
import Modal from '@/components/ui/Modal';

const productImages = [
  '/images/mobile.png',
  '/images/freepik__a-man-charging-his-electric-vehicle__38007.png',
  '/images/freepik__a-vertical-electric-vehicle-charging-station__21097.png',
];

const MobileCharger: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [zoomOpen, setZoomOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const price = 499;

  const sections = [
    {
      key: 'description',
      label: t('mobileChargerPage.descriptionLabel'),
      content: t('mobileChargerPage.descriptionContent')
    },
    {
      key: 'specs',
      label: t('mobileChargerPage.specsLabel'),
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>{t('mobileChargerPage.specsContent.power')}</li>
          <li>{t('mobileChargerPage.specsContent.current')}</li>
          <li>{t('mobileChargerPage.specsContent.connector')}</li>
          <li>{t('mobileChargerPage.specsContent.cable')}</li>
          <li>{t('mobileChargerPage.specsContent.enclosure')}</li>
          <li>{t('mobileChargerPage.specsContent.display')}</li>
          <li>{t('mobileChargerPage.specsContent.app')}</li>
          <li>{t('mobileChargerPage.specsContent.functions')}</li>
          <li>{t('mobileChargerPage.specsContent.safety')}</li>
          <li>{t('mobileChargerPage.specsContent.dimensions')}</li>
          <li>{t('mobileChargerPage.specsContent.weight')}</li>
        </ul>
      )
    },
    {
      key: 'included',
      label: t('mobileChargerPage.includedLabel'),
      content: t('mobileChargerPage.includedContent')
    },
    {
      key: 'refunds',
      label: t('mobileChargerPage.refundsLabel'),
      content: t('mobileChargerPage.refundsContent')
    },
    {
      key: 'warranty',
      label: t('mobileChargerPage.warrantyLabel'),
      content: t('mobileChargerPage.warrantyContent')
    },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: 'mobile-charger',
      name: 'HORIZOP Mobile Charger',
      price,
      image: mainImage
    }, quantity);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Images */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <img
            src={mainImage}
            alt="HORIZOP Mobile Charger"
            className="rounded shadow w-full h-80 object-contain bg-gray-50 cursor-zoom-in"
            onClick={() => setZoomOpen(true)}
          />
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Mobile Charger ${idx + 1}`}
                className={`rounded cursor-pointer border-2 ${mainImage === img ? 'border-horizop-gold' : 'border-transparent'}`}
                onClick={() => setMainImage(img)}
                style={{ height: 60, objectFit: 'cover', background: '#f3f4f6' }}
              />
            ))}
          </div>
          {/* Collapsible Sections */}
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
            <Modal onClose={() => setZoomOpen(false)} title={t('mobileChargerPage.modalTitle')}>
              <img
                src={mainImage}
                alt="Zoomed Mobile Charger"
                className="max-h-[80vh] max-w-full rounded shadow-lg object-contain cursor-zoom-out"
                onClick={e => e.stopPropagation()}
              />
            </Modal>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full w-max mb-2">{t('mobileChargerPage.productTag')}</span>
            <h1 className="text-4xl font-bold">{t('mobileChargerPage.productTitle')}</h1>
            <span className="text-lg font-semibold text-horizop-gold mt-2 mb-1">{t('mobileChargerPage.featuresTitle')}</span>
            <ul className="list-disc pl-5 text-gray-700 text-base mt-2 space-y-1">
              <li>{t('mobileChargerPage.feature1')}</li>
              <li>{t('mobileChargerPage.feature2')}</li>
              <li>{t('mobileChargerPage.feature3')}</li>
              <li>{t('mobileChargerPage.feature4')}</li>
              <li>{t('mobileChargerPage.feature5')}</li>
            </ul>
          </div>

          <div className="flex gap-4 items-center mt-2">
            <span className="font-semibold">{t('mobileChargerPage.quantityLabel')}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="w-8 text-center inline-block">{quantity}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <div className="text-2xl font-bold mt-2">{t('mobileChargerPage.priceDisplay', { price: price.toFixed(2) })}</div>

          <button
            className="w-full bg-horizop-gold text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-horizop-gold focus:ring-opacity-50"
            onClick={handleAddToCart}
          >
            {t('mobileChargerPage.addToCartButton')}
          </button>

          <a
            href="/HORIZOP_Energy_EV_Charging_Catalogue_2023_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {t('mobileChargerPage.learnMoreButton')} <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <div className="text-center text-sm text-gray-500 mt-2">{t('mobileChargerPage.morePaymentOptions')}</div>
          <div className="flex gap-4 justify-between text-xs text-gray-600 border-t pt-4 mt-4">
            <span>{t('mobileChargerPage.securePayment')}</span>
            <span>{t('mobileChargerPage.assembledInUSA')}</span>
            <span>{t('mobileChargerPage.customerService')}</span>
            <span>{t('mobileChargerPage.warranty')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCharger; 