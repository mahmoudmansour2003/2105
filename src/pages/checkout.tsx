import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "@/context/CartContext";

const CheckoutSteps = {
  DATA: 1,
  DELIVERY: 2,
  PAYMENT: 3
} as const;

const stepLabels = [
  { label: 'Data', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  ) },
  { label: 'Delivery', icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 48 48"><rect x="4" y="17" width="28" height="14" rx="2" strokeWidth="2.5" stroke="currentColor" fill="#fff"/><rect x="32" y="21" width="12" height="10" rx="2" strokeWidth="2.5" stroke="currentColor" fill="#fff"/><circle cx="12" cy="35" r="3" strokeWidth="2.5" stroke="currentColor" fill="#fff"/><circle cx="38" cy="35" r="3" strokeWidth="2.5" stroke="currentColor" fill="#fff"/><path d="M16 35h12M44 31v-6a2 2 0 0 0-2-2h-8" strokeWidth="2.5" stroke="currentColor"/></svg>
  ) },
  { label: 'Payment', icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" /></svg>
  ) },
];

const countries = ["Netherlands", "France", "Germany", "Belgium", "Spain", "Italy", "United Kingdom", "United States"];

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState<number>(CheckoutSteps.DATA);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showGuestForm, setShowGuestForm] = useState(false);
  // Guest form fields
  const [billing, setBilling] = useState({
    name: '', zip: '', street: '', house: '', city: '', country: 'Netherlands', phone: '', toponym: ''
  });
  const [deliverySame, setDeliverySame] = useState(true);
  const [businessOrder, setBusinessOrder] = useState(false);
  const [comment, setComment] = useState('');
  const [account, setAccount] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(CheckoutSteps.DELIVERY);
  };

  const handleContinueWithoutLogin = () => {
    setShowGuestForm(true);
  };

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(CheckoutSteps.DELIVERY);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-horizop-ivory via-white to-horizop-gold/10 py-16 px-2 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Main Content */}
        <div className="flex-1">
          {/* Progress Bar */}
          <div className="relative flex items-center justify-between mb-10 px-2" style={{ minHeight: 80 }}>
            {/* Connecting line */}
            <div className="absolute left-1/4 right-1/4 top-1/2 h-1 bg-gray-200 z-0" style={{ transform: 'translateY(-50%)' }} />
            {stepLabels.map((step, idx) => (
              <div key={step.label} className="relative z-10 flex-1 flex flex-col items-center">
                <div className={`flex items-center justify-center w-14 h-14 rounded-full border-4 ${currentStep > idx + 1 ? 'border-horizop-gold bg-horizop-gold/80 text-horizop-navy' : currentStep === idx + 1 ? 'border-horizop-navy bg-white text-horizop-navy' : 'border-gray-200 bg-gray-100 text-gray-400'} shadow-lg transition-all`}>{step.icon}</div>
                <span className={`mt-2 text-base font-semibold ${currentStep >= idx + 1 ? 'text-horizop-navy' : 'text-gray-400'}`}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="mt-8">
            {currentStep === CheckoutSteps.DATA && !showGuestForm && (
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-horizop-gold/30 p-10 flex flex-col md:flex-row gap-10">
                {/* Existing Customers */}
                <div className="flex-1 flex flex-col gap-6">
                  <h1 className="text-3xl font-extrabold text-horizop-navy mb-2">Log in</h1>
                  <p className="text-horizop-navy/70 mb-4">Please log in or continue without an account to complete your order.</p>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-horizop-navy">Email address</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-horizop-gold/40 px-4 py-3 shadow-sm focus:border-horizop-gold focus:ring-2 focus:ring-horizop-gold/40 focus:outline-none bg-horizop-ivory/30"
                        placeholder="Enter your e-mail address here"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-horizop-navy">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full rounded-lg border border-horizop-gold/40 px-4 py-3 shadow-sm focus:border-horizop-gold focus:ring-2 focus:ring-horizop-gold/40 focus:outline-none bg-horizop-ivory/30"
                        placeholder="Enter your password here"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <button
                        type="submit"
                        className="bg-horizop-navy text-white px-8 py-3 rounded-full font-bold hover:bg-horizop-gold hover:text-horizop-navy transition-colors shadow"
                      >
                        Log in
                      </button>
                      <button type="button" className="text-horizop-gold hover:text-horizop-navy font-semibold">Password?</button>
                    </div>
                  </form>
                </div>
                {/* New Customers */}
                <div className="flex-1 flex flex-col gap-6 border-l border-horizop-gold/20 pl-10">
                  <h2 className="text-2xl font-bold text-horizop-navy mb-2">New customers</h2>
                  <p className="text-horizop-navy/70 mb-4">Quick ordering without logging in</p>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 shadow-lg text-lg w-fit"
                  >
                    Sign in
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            {currentStep === CheckoutSteps.DATA && showGuestForm && (
              <form onSubmit={handleGuestSubmit} className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-horizop-gold/30 p-10 flex flex-col gap-8">
                <h1 className="text-3xl font-extrabold text-horizop-navy mb-2">Your details</h1>
                <p className="text-horizop-navy/70 mb-4">Please enter a delivery address for this order</p>
                {/* Email */}
                <div className="rounded-xl border border-horizop-gold/20 bg-white/70 p-6 mb-2">
                  <label className="block font-bold text-horizop-navy mb-2">Email address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-horizop-gold/40 px-4 py-3 shadow-sm focus:border-horizop-gold focus:ring-2 focus:ring-horizop-gold/40 focus:outline-none bg-horizop-ivory/30"
                    placeholder="Enter your e-mail address here"
                  />
                </div>
                {/* Billing address */}
                <div className="rounded-xl border border-horizop-gold/20 bg-white/70 p-6 mb-2">
                  <label className="block font-bold text-horizop-navy mb-4">Billing address</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">First and last name</label>
                      <input type="text" required value={billing.name} onChange={e => setBilling(b => ({ ...b, name: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your first and last name here" />
                    </div>
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">House number</label>
                      <input type="text" value={billing.house} onChange={e => setBilling(b => ({ ...b, house: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your house number here" />
                    </div>
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">Zip code</label>
                      <input type="text" required value={billing.zip} onChange={e => setBilling(b => ({ ...b, zip: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your postcode here" />
                    </div>
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">Toponym</label>
                      <input type="text" value={billing.toponym} onChange={e => setBilling(b => ({ ...b, toponym: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your city name here" />
                    </div>
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">Street name</label>
                      <input type="text" required value={billing.street} onChange={e => setBilling(b => ({ ...b, street: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your street name here" />
                    </div>
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">Phone number</label>
                      <input type="text" value={billing.phone} onChange={e => setBilling(b => ({ ...b, phone: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your phone number here" />
                    </div>
                    <div>
                      <label className="block text-sm text-horizop-navy mb-1">Select a country*</label>
                      <select value={billing.country} onChange={e => setBilling(b => ({ ...b, country: e.target.value }))} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30">
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <label className="flex items-center gap-2 mt-2 text-green-700 font-semibold">
                    <input type="checkbox" checked={deliverySame} onChange={e => setDeliverySame(e.target.checked)} className="accent-green-600 w-5 h-5" />
                    Delivery address is the same as billing address
                  </label>
                </div>
                {/* Business order */}
                <div className="rounded-xl border border-horizop-gold/20 bg-white/70 p-6 mb-2 flex items-center gap-3">
                  <input type="checkbox" checked={businessOrder} onChange={e => setBusinessOrder(e.target.checked)} className="accent-horizop-gold w-5 h-5" />
                  <span className="font-medium text-horizop-navy">This is a business order</span>
                </div>
                {/* Comment */}
                <div className="rounded-xl border border-horizop-gold/20 bg-white/70 p-6 mb-2">
                  <label className="block font-medium text-horizop-navy mb-2">Add comment</label>
                  <textarea value={comment} onChange={e => setComment(e.target.value)} className="w-full rounded-lg border border-horizop-gold/40 px-4 py-2 bg-horizop-ivory/30" placeholder="Enter your comment here" rows={2} />
                </div>
                {/* Account */}
                <div className="rounded-xl border border-horizop-gold/20 bg-white/70 p-6 mb-2 flex items-center gap-3">
                  <input type="checkbox" checked={account} onChange={e => setAccount(e.target.checked)} className="accent-horizop-navy w-5 h-5" />
                  <span className="font-medium text-horizop-navy">Account?</span>
                </div>
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-4">
                  <button type="button" onClick={() => setShowGuestForm(false)} className="px-6 py-2 rounded-full border border-horizop-navy text-horizop-navy font-semibold bg-white hover:bg-horizop-navy hover:text-white transition">&larr; Go back</button>
                  <button type="submit" className="px-8 py-3 rounded-full bg-horizop-navy text-white font-bold hover:bg-horizop-gold hover:text-horizop-navy transition shadow">Continue to payment</button>
                </div>
              </form>
            )}
            {currentStep === CheckoutSteps.DELIVERY && (
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-horizop-gold/30 p-10 flex flex-col gap-8">
                <h1 className="text-3xl font-extrabold text-horizop-navy mb-2">Delivery</h1>
                <p className="text-horizop-navy/70 mb-4">Please confirm your delivery details and continue to payment.</p>
                {/* Add delivery summary or confirmation UI here */}
                <div className="flex justify-end mt-4">
                  <button onClick={() => setCurrentStep(CheckoutSteps.PAYMENT)} className="px-8 py-3 rounded-full bg-horizop-navy text-white font-bold hover:bg-horizop-gold hover:text-horizop-navy transition shadow">Continue to payment</button>
                </div>
              </div>
            )}
            {currentStep === CheckoutSteps.PAYMENT && (
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-horizop-gold/30 p-10 flex flex-col gap-8">
                <h1 className="text-3xl font-extrabold text-horizop-navy mb-2">Payment</h1>
                <p className="text-horizop-navy/70 mb-4">Please enter your payment details to complete your order.</p>
                {/* Add payment form or UI here */}
              </div>
            )}
          </div>
        </div>
        {/* Order Summary Sidebar */}
        <div className="w-full md:w-96 md:sticky md:top-24 h-fit">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-horizop-gold/30 p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold text-horizop-navy flex items-center gap-2">
                <svg className="w-7 h-7 text-horizop-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 6h15l-1.5 9h-13z" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="20" r="1.5" strokeWidth="2.2" stroke="currentColor" fill="#fff"/>
                  <circle cx="18" cy="20" r="1.5" strokeWidth="2.2" stroke="currentColor" fill="#fff"/>
                </svg>
                Shopping cart
              </h2>
              <button
                onClick={() => navigate('/cart')}
                className="text-horizop-gold hover:text-horizop-navy font-semibold"
              >
                Change
              </button>
            </div>
            {/* Cart Items */}
            <div className="space-y-4 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start gap-2">
                  <div>
                    <span className="font-medium text-horizop-navy">{item.quantity}x</span>{' '}
                    <span className="font-semibold text-horizop-navy">{item.name}</span>
                    {item.options && (
                      <div className="text-xs text-horizop-navy/70 mt-1">
                        {Object.entries(item.options).map(([key, value]) => (
                          <div key={key}>
                            {key === 'amperage' ? 'Amperage' : key === 'output' ? 'Output' : key}:{' '}
                            {value}
                            {key === 'amperage' ? 'A' : key === 'output' ? 'kW' : ''}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="font-bold text-horizop-navy">
                    {(item.price * item.quantity).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    })}
                  </div>
                </div>
              ))}
            </div>
            {/* Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              </div>
              <div className="flex justify-between text-base text-horizop-navy/70">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between font-extrabold text-xl pt-2 border-t">
                <span>Total</span>
                <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 