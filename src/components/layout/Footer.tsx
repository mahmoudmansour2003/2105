import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-horizop-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">HORIZOP ENERGY</h3>
            <p className="text-gray-300 mb-8">
              Partnering for a smarter, greener future through innovative energy and software solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-horizop-gold transition-colors">Home</Link></li>
              <li><Link to="/who-we-are" className="text-gray-300 hover:text-horizop-gold transition-colors">Who We Are</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-300 hover:text-horizop-gold transition-colors">Partner With Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-horizop-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-gray-300">Email: contact@horizop.com</p>
              <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-300">Address: 123 Energy Street, Suite 100, San Francisco, CA 94105</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <form className="flex mt-2">
                <input 
                  type="email" 
                placeholder="Your email"
                  className="bg-transparent border border-gray-600 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-horizop-gold w-full"
                />
                <button 
                  className="bg-horizop-gold hover:bg-horizop-gold/90 text-black px-4 py-2 rounded-r-md font-medium"
                >
                Subscribe
                </button>
              </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-horizop-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-horizop-gold transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-horizop-gold transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
