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
                Login
              </button>
              <button
                className={`px-6 py-2 rounded-t-lg font-bold text-lg focus:outline-none transition-colors ${tab === 'register' ? 'bg-horizop-yellow text-horizop-navy' : 'bg-transparent text-horizop-yellow'}`}
                onClick={() => setTab('register')}
              >
                Register
              </button>
            </div>
            {tab === 'login' ? (
              <form className="space-y-6">
                <div>
                  <label className="block text-horizop-yellow mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-horizop-yellow mb-2">Password</label>
                  <input type="password" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder="Enter your password" />
                </div>
                <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold py-3 text-lg">Login</Button>
              </form>
            ) : (
              <form className="space-y-6">
                <div>
                  <label className="block text-horizop-yellow mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-horizop-yellow mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-horizop-yellow mb-2">Password</label>
                  <input type="password" className="w-full px-4 py-2 rounded-md bg-white/10 border border-horizop-gold text-white" placeholder="Create a password" />
                </div>
                <Button className="w-full bg-horizop-yellow text-horizop-navy hover:bg-horizop-gold py-3 text-lg">Create Account</Button>
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