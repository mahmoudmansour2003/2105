import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "@/context/CartContext";
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const { t } = useTranslation();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId: string, options?: Record<string, any>) => {
    removeFromCart(itemId, options);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-horizop-ivory via-white to-horizop-gold/10 py-24">
        <svg className="w-48 mb-8 opacity-80" fill="none" viewBox="0 0 64 64" stroke="currentColor">
          <rect x="8" y="20" width="40" height="24" rx="4" strokeWidth="3" stroke="#E5B900" fill="#fff"/>
          <rect x="48" y="28" width="10" height="12" rx="2" strokeWidth="3" stroke="#E5B900" fill="#fff"/>
          <circle cx="20" cy="50" r="3.5" strokeWidth="3" stroke="#E5B900" fill="#fff"/>
          <circle cx="46" cy="50" r="3.5" strokeWidth="3" stroke="#E5B900" fill="#fff"/>
          <path d="M28 50h12M58 40v-8a2 2 0 0 0-2-2h-8" strokeWidth="3" stroke="#E5B900"/>
        </svg>
        <h1 className="text-4xl font-extrabold text-horizop-navy mb-2">{t('cart.emptyTitle')}</h1>
        <p className="text-lg text-horizop-navy/70 mb-6">{t('cart.emptyMessage')}</p>
        <button
          className="px-8 py-3 bg-horizop-gold text-horizop-navy font-bold rounded-full text-lg shadow hover:bg-horizop-navy hover:text-horizop-gold transition"
          onClick={() => navigate('/store')}
        >
          {t('cart.backToStore')}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-horizop-ivory via-white to-horizop-gold/10 py-16 px-2 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Cart Items Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-horizop-navy mb-8 border-l-8 border-horizop-gold pl-6">{t('cart.title')}</h1>
          <div className="space-y-8">
            {cart.map((item, idx) => (
              <div key={item.id + idx} className="relative flex flex-col md:flex-row items-center md:items-stretch bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-horizop-gold/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Product Image */}
                <div className="flex-shrink-0 w-full md:w-48 h-48 flex items-center justify-center bg-gradient-to-br from-horizop-gold/10 to-horizop-ivory/60 p-6">
                  <img src={item.image} alt={item.name} className="object-contain w-full h-full rounded-2xl shadow-md" />
                </div>
                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-horizop-navy drop-shadow">{item.name}</span>
                      <span className="ml-2 px-3 py-1 bg-horizop-gold/20 text-horizop-gold text-xs rounded-full font-semibold uppercase tracking-wide">{item.id}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-horizop-navy/80 mb-2 text-base">
                      {item.options && Object.entries(item.options).map(([key, value]) => (
                        <span key={key} className="inline-flex items-center gap-1 px-3 py-1 bg-horizop-navy/5 rounded-full text-sm font-medium">
                          {key === 'amperage' ? t('cart.amperage') : key === 'output' ? t('cart.output') : key}: <span className="font-bold">{value}{key === 'amperage' ? 'A' : key === 'output' ? 'kW' : ''}</span>
                        </span>
                      ))}
                    </div>
                    {/* Features */}
                    <div className="text-gray-700 mb-2 text-sm">
                      {item.id === 'smartplug' && (
                        <ul className="list-disc list-inside space-y-1">
                          <li>{t('cart.smartplug_feat1')}</li>
                          <li>{t('cart.smartplug_feat2')}</li>
                          <li>{t('cart.smartplug_feat3')}</li>
                          <li>{t('cart.smartplug_feat4')}</li>
                        </ul>
                      )}
                      {item.id === 'fastplug' && (
                        <ul className="list-disc list-inside space-y-1">
                          <li>{t('cart.fastplug_feat1')}</li>
                          <li>{t('cart.fastplug_feat2')}</li>
                          <li>{t('cart.fastplug_feat3')}</li>
                          <li>{t('cart.fastplug_feat4')}</li>
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-horizop-navy/5 rounded-full px-3 py-1">
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-horizop-navy text-white hover:bg-horizop-gold hover:text-horizop-navy transition"
                        onClick={() => addToCart(item, -1, item.options)}
                      >-</button>
                      <span className="font-bold text-lg px-2">{item.quantity}</span>
                      <button
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-horizop-navy text-white hover:bg-horizop-gold hover:text-horizop-navy transition"
                        onClick={() => addToCart(item, 1, item.options)}
                      >+</button>
                    </div>
                    {/* Remove Button */}
                    <button
                      className="flex items-center gap-1 text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-full border border-red-200 transition font-semibold"
                      onClick={() => handleRemoveItem(item.id, item.options)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {t('cart.removeButton')}
                    </button>
                  </div>
                </div>
                {/* Price */}
                <div className="flex flex-col justify-between items-end p-6 min-w-[140px] bg-gradient-to-t from-horizop-gold/10 to-white/0">
                  <div className="font-extrabold text-2xl text-horizop-navy mb-2">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                  <div className="text-xs text-gray-400">Product ID: {item.id}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Summary Sidebar */}
        <div className="w-full md:w-96 md:sticky md:top-24 h-fit">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-horizop-gold/30 p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-horizop-navy mb-2 flex items-center gap-2">
              <svg className="w-7 h-7 text-horizop-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3" /></svg>
              {t('cart.orderSummary')}
            </h2>
            <div className="flex justify-between text-lg font-medium">
              <span>{t('cart.subtotal')}</span>
              <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
            <div className="flex justify-between text-base text-horizop-navy/70">
              <span>{t('cart.shipping')}</span>
              <span className="text-green-600 font-semibold">{t('cart.shippingFree')}</span>
            </div>
            <hr className="my-2 border-horizop-gold/30" />
            <div className="flex justify-between text-xl font-extrabold text-horizop-navy">
              <span>{t('cart.total')}</span>
              <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <button
                className="w-full bg-horizop-gold text-horizop-navy font-bold py-3 rounded-full text-lg shadow hover:bg-horizop-navy hover:text-horizop-gold transition"
                onClick={() => navigate('/checkout')}
              >
                {t('cart.continueToOrder')}
              </button>
              <button
                className="w-full bg-white border border-horizop-gold text-horizop-gold font-semibold py-3 rounded-full text-lg hover:bg-horizop-gold hover:text-white transition"
                onClick={() => navigate('/store')}
              >
                {t('cart.continueShopping')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 