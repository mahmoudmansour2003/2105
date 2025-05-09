import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Who We Are', href: '/#who-we-are' },
    { title: 'Solutions', href: '/solutions' },
    { title: 'Network', href: '/network' },
    { title: 'Training', href: '/training' },
    { title: 'Partner With Us', href: '/#partner-with-us' },
    { title: 'Software', href: '/#software' },
    { title: 'Products', href: '/#products' },
    { title: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
      return;
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 mr-16">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="HORIZOP Logo" className="h-8 w-8 object-contain" />
              <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-horizop-navy' : 'text-white'}`}>
                HORIZOP ENERGY
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-base font-semibold tracking-wide transition-colors duration-300 hover:text-horizop-yellow whitespace-nowrap px-2 ${
                      isScrolled ? 'text-horizop-navy' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    className={`text-base font-semibold tracking-wide transition-colors duration-300 hover:text-horizop-yellow whitespace-nowrap px-2 ${
                      isScrolled ? 'text-horizop-navy' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </nav>

            <div className="ml-6">
              <Link to="/network">
                <Button className="btn-primary">
                  Join the Network
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-horizop-navy' : 'text-white'
            }`} 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                      toggleMobileMenu();
                    }}
                    className="text-horizop-navy hover:text-horizop-yellow font-medium transition-colors py-3"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-horizop-navy hover:text-horizop-yellow font-medium transition-colors py-3"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </Link>
                )
              ))}
              <Link to="/network" onClick={toggleMobileMenu}>
                <Button className="btn-primary w-full mt-4">
                  Join the Network
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
