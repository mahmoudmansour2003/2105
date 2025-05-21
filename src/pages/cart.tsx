import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-4">{t('cartTitle')}</h1>
      <p className="text-lg mb-8">{t('cartEmptyMessage')}</p>
      <button
        className="px-6 py-2 bg-[#232f3e] text-white rounded-lg text-lg font-semibold hover:bg-[#1a222b] transition"
        onClick={() => navigate('/store')}
      >
        {t('cartBackToStoreButton')}
      </button>
    </div>
  );
};

export default Cart; 