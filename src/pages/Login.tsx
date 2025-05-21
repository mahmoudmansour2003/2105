import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col items-center">
        <img src="/images/HE_Carr_text.png" alt="HORIZOP ENERGY logo" className="h-16 mb-6" />
        <h1 className="text-3xl font-bold mb-2">{t('loginTitle')}</h1>
        <p className="text-gray-600 mb-6 text-center">{t('loginSubtitle')}</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder={t('loginEmailPlaceholder')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="border-2 border-horizop-gold rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-horizop-gold text-lg"
          />
          <button
            type="submit"
            className="bg-horizop-gold hover:bg-horizop-gold/90 text-black font-semibold rounded-lg py-3 text-lg transition"
          >
            {t('loginContinueButton')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 