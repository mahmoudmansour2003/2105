import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const smartPlugDescription =
  'A sleek, easy-to-install EV charger with up to 22kW output, RFID payment, and app control. Compatible with solar systems and supports bidirectional charging. Includes LED status indicator and a 3-year warranty.';

const fastPlugDescription =
  'High-power DC charger with up to 350kW output, modular design for reliability and cost-efficiency. Features RFID payment, a 14" anti-vandal touchscreen, and supports Master-Satellite configurations.';

const products = [
  {
    name: 'HORIZOP SmartPlug',
    path: '/store/pulsar-plus',
  },
  {
    name: 'HORIZOP FastPlug',
    path: '/store/accessories',
  },
];

const Store: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-center py-4 bg-[#232f3e] relative">
        <div className="flex items-center w-full max-w-5xl px-4">
          <span className="text-white font-bold text-xl flex items-center gap-2">
            <span className="bg-white rounded-full w-6 h-6 inline-block mr-2" />
            {t('storeCompanyName')}
          </span>
          <span className="ml-8 text-white text-md font-medium cursor-pointer">{t('storeProductsLink')}</span>
          <div className="ml-auto flex items-center gap-4">
            <span
              className="text-white cursor-pointer"
              onClick={() => setShowSearch((v) => !v)}
            >
              🔍
            </span>
            <span className="text-white cursor-pointer" onClick={() => navigate('/login')}>👤</span>
            <span
              className="text-white cursor-pointer"
              onClick={() => navigate('/cart')}
            >
              🛒
            </span>
          </div>
        </div>
        {/* Search Bar Dropdown */}
        {showSearch && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-white shadow-lg rounded-lg p-4 z-50 flex flex-col gap-2">
            <input
              autoFocus
              type="text"
              placeholder={t('storeSearchPlaceholder')}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-horizop-gold"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Escape') setShowSearch(false);
              }}
            />
            <div className="mt-2">
              {filteredProducts.length === 0 && (
                <div className="text-gray-400 text-sm">{t('storeNoProductsFound')}</div>
              )}
              {filteredProducts.map(product => (
                <div
                  key={product.path}
                  className="px-3 py-2 rounded hover:bg-horizop-gold hover:text-white cursor-pointer text-gray-800"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchTerm('');
                    navigate(product.path);
                  }}
                >
                  {product.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center flex-1 w-full px-4">
        <h1 className="text-5xl font-light mt-12 mb-2">{t('storeTitle')}</h1>
        <h2 className="text-2xl font-light mb-10 text-center">{t('storeSubtitle')}</h2>
        <div className="flex flex-row gap-6 mb-16">
          {/* HORIZOP SmartPlug Card with overlayed text */}
          <Link to="/store/pulsar-plus" className="bg-gray-100 rounded-lg p-0 w-[420px] h-[500px] flex flex-col justify-between shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden relative group">
            <div className="relative w-full h-full flex-1">
              <img src="/images/smartplug.png" alt="HORIZOP SmartPlug" className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col h-full justify-end p-6">
                <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">HORIZOP SmartPlug</h3>
                <p className="text-sm mb-4 text-white drop-shadow-lg bg-black/50 rounded p-2">
                  {smartPlugDescription}
                </p>
              </div>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow hover:bg-gray-200 transition z-30"><span className="text-2xl">→</span></button>
          </Link>
          {/* HORIZOP FastPlug Card with overlayed text */}
          <Link to="/store/accessories" className="bg-gray-100 rounded-lg p-0 w-[420px] h-[500px] flex flex-col justify-between shadow-lg hover:scale-105 transition-transform cursor-pointer overflow-hidden relative group">
            <div className="relative w-full h-full flex-1">
              <img src="/images/fastplug.png" alt="HORIZOP FastPlug" className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col h-full justify-end p-6">
                <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">HORIZOP FastPlug</h3>
                <p className="text-sm mb-4 text-white drop-shadow-lg bg-black/50 rounded p-2">
                  {fastPlugDescription}
                </p>
              </div>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow hover:bg-gray-200 transition z-30"><span className="text-2xl">→</span></button>
          </Link>
        </div>
      </main>

      {/* Business Solutions Section */}
      <footer className="w-full bg-[#232f3e] py-10 flex flex-col items-center">
        <h3 className="text-2xl text-white mb-2 text-center">{t('storeBusinessTitle')}</h3>
        <p className="text-white text-center max-w-2xl text-sm">{t('storeBusinessText')}</p>
      </footer>
    </div>
  );
};

export default Store; 