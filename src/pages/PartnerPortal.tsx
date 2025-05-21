import React, { useState } from 'react';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const PartnerPortal = () => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-horizop-charcoal">
      <main className="flex-grow flex flex-col items-center justify-center">
        <Card className="w-full max-w-md mx-auto bg-white/10 border-horizop-gold">
          <CardContent className="p-8">
            <div className="flex justify-center mb-8">
              <button
                className={`px-6 py-2 rounded-t-lg font-bold text-lg focus:outline-none transition-colors ${tab === 'login' ? 'bg-horizop-yellow text-horizop-navy' : 'bg-transparent text-horizop-yellow'}`}
                onClick={() => setTab('login')}
              >
                {t('partnerPortalLoginTab')}
              </button>
              <button
                className={`px-6 py-2 rounded-t-lg font-bold text-lg focus:outline-none transition-colors ${tab === 'register' ? 'bg-horizop-yellow text-horizop-navy' : 'bg-transparent text-horizop-yellow'}`}
                onClick={() => setTab('register')}
              >
                {t('partnerPortalRegisterTab')}
              </button>
            </div>
            {tab === 'login' ? (
              <form className="space-y-6">
                <div>
                  <label className="block text-horizop-yellow mb-2">{t('partnerPortalLabelEmail')}</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder={t('partnerPortalPlaceholderEnterEmail')} />
                </div>
                <div>
                  <label className="block text-horizop-yellow mb-2">{t('partnerPortalLabelPassword')}</label>
                  <input type="password" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder={t('partnerPortalPlaceholderEnterPassword')} />
                </div>
                <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold py-3 text-lg">{t('partnerPortalLoginButton')}</Button>
              </form>
            ) : (
              <form className="space-y-6">
                <div>
                  <label className="block text-horizop-yellow mb-2">{t('partnerPortalLabelFullName')}</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder={t('partnerPortalPlaceholderEnterName')} />
                </div>
                <div>
                  <label className="block text-horizop-yellow mb-2">{t('partnerPortalLabelEmail')}</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder={t('partnerPortalPlaceholderEnterEmail')} />
                </div>
                <div>
                  <label className="block text-horizop-yellow mb-2">{t('partnerPortalLabelPassword')}</label>
                  <input type="password" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder={t('partnerPortalPlaceholderCreatePassword')} />
                </div>
                <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold py-3 text-lg">{t('partnerPortalCreateAccountButton')}</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerPortal; 