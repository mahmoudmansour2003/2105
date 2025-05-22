import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="elegant-section bg-horizop-ivory">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-horizop-gold font-medium mb-2 tracking-wider text-sm uppercase">Contact</span>
          <h2 className="heading-medium font-serif text-horizop-navy mb-2">Get in Touch</h2>
          <div className="w-20 h-1 bg-horizop-gold mb-6 mx-auto rounded"></div>
          <p className="text-horizop-navy max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, solutions for your business, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="elegant-card p-10 border-none">
            <h3 className="text-2xl font-serif font-semibold mb-8 text-horizop-navy">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="fullName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-horizop-gold focus:ring-horizop-gold" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-horizop-gold focus:ring-horizop-gold" placeholder="Your Email" />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input type="text" id="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-horizop-gold focus:ring-horizop-gold" placeholder="Your Company (Optional)" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-horizop-gold focus:ring-horizop-gold" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-horizop-gold hover:bg-horizop-gold/90 text-black font-semibold py-3 px-6 rounded-lg transition">Send Message</button>
            </form>
          </div>

          <div className="elegant-card p-10 border-none bg-horizop-navy text-white">
            <h3 className="text-2xl font-serif font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-horizop-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-horizop-gold mb-1">Email</h4>
                  <p className="text-gray-300">contact@horizopenergy.com</p>
                  <p className="text-gray-300">hr@horizopenergy.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-horizop-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-horizop-gold mb-1">Phone</h4>
                  <p className="text-gray-300">(+216) 55 956 713</p>
                  <p className="text-gray-300">(+216) 53 741 363</p>
                  <p className="text-gray-300">(+31) 68 489 14 99</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-horizop-gold flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-horizop-gold mb-1">Main Address</h4>
                  <p className="text-gray-300">Ariana 2088, Tunisia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
