import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-horizop-ivory to-horizop-gold/10">
      <div className="flex flex-col items-center py-10">
        <h1 className="text-5xl font-extrabold text-horizop-navy mb-2 tracking-tight text-center">New at Horizop Energy</h1>
        <p className="text-lg text-horizop-navy/80 mb-10 text-center">Fill in your account details</p>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-8">
          {/* Personal Data */}
          <div className="bg-white/90 rounded-2xl border border-horizop-gold/20 shadow p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-horizop-navy mb-2">Personal data</h2>
            <label className="font-semibold text-horizop-navy mb-1">First and last name</label>
            <Input
              type="text"
              placeholder="Enter your first and last name here"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
            />
          </div>
          {/* Login Details */}
          <div className="bg-white/90 rounded-2xl border border-horizop-gold/20 shadow p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-horizop-navy mb-2">Login details</h2>
            <label className="font-semibold text-horizop-navy mb-1">Email address</label>
            <Input
              type="email"
              placeholder="Enter your e-mail address here"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label className="font-semibold text-horizop-navy mb-1">Password</label>
                <Input
                  type="password"
                  placeholder="Enter your password here"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="font-semibold text-horizop-navy mb-1">Repeat password</label>
                <Input
                  type="password"
                  placeholder="Repeat your password"
                  value={repeatPassword}
                  onChange={e => setRepeatPassword(e.target.value)}
                  required
                  className="bg-white border-horizop-gold/40 focus:border-horizop-gold text-horizop-navy"
                />
              </div>
            </div>
          </div>
          <p className="text-horizop-navy/70 text-base text-center max-w-xl mx-auto">We will send you an email with a link to activate your account (Please note that your email can also end up in the unwanted).</p>
          <div className="flex justify-center">
            <Button type="submit" className="bg-horizop-gold text-horizop-navy font-bold rounded-full px-8 py-3 shadow hover:bg-horizop-navy hover:text-horizop-gold transition flex items-center gap-2">
              <span>Account</span>
              <span className="text-xl">&rarr;</span>
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register; 