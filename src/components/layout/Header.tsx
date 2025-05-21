import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const navItems = [
  {
    title: 'Catalog',
    dropdown: [
      {
        groupTitle: 'Home Chargers',
        items: [
          { name: 'Smartplug', href: '#' },
        ],
      },
      {
        groupTitle: 'Business Solutions',
        items: [
          { name: 'Business EV Charging', href: '#' },
          { name: 'Business Software Solutions', href: '#' },
        ],
      },
      {
        groupTitle: 'Business Fast Chargers',
        items: [],
      },
      {
        groupTitle: 'Software Solutions',
        items: [
          { name: 'App for EV drivers', href: '#' },
          { name: 'Business Portal', href: '#' },
        ],
      },
      {
        groupTitle: 'More Products',
        items: [
          { name: 'Accessories', href: '#' },
        ],
      },
    ],
  },
  { title: 'For Businesses', dropdownItems: ['Solutions', 'Case Studies', 'Pricing'] },
  { title: 'For Home', dropdownItems: ['Home Charging', 'Smart Devices', 'Support'] },
  { title: 'For Partners', dropdownItems: ['Partner Program', 'Resources', 'Contact'] },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  // Hide header on scroll down, show on scroll up
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // Hide on scroll down, add a threshold
        setVisible(false);
      } else { // Show on scroll up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Clean up event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  return (
    <header className={`fixed top-0 z-10 w-full transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <div className="container mx-auto px-8 py-3 bg-gray-100 bg-opacity-90 rounded-2xl shadow-lg flex items-center">
          <div className="flex items-center mr-8">
            <Link to="/">
              <img src="/images/HE_Carr_text.png" alt="HORIZOP ENERGY logo" className="h-10" />
            </Link>
          </div>

          <div className="flex-grow flex items-center justify-between">
            <nav className="hidden md:flex items-center space-x-6 text-lg font-normal">
              {navItems.map((item, idx) => (
                <div key={item.title} className="relative group">
                  <button
                    className={`font-normal text-lg px-2 py-2 flex items-center gap-1 focus:outline-none transition-colors duration-200 ${openDropdown === idx ? 'text-horizop-gold' : 'text-gray-900'}`}
                    onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  >
                    {item.title}
                    {openDropdown === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {openDropdown === idx && (
                    <div className="absolute left-0 mt-2 bg-white rounded-xl shadow-2xl py-8 px-8 z-20">
                      {item.dropdown && item.title === 'Catalog' && (
                        <div className="flex gap-8">
                          {item.dropdown.map((group, gIdx) => (
                            <div key={gIdx} className="min-w-[140px]">
                              <div className="text-gray-400 font-bold mb-2 text-lg">{group.groupTitle}</div>
                              {group.items.map((prod) => (
                                <a
                                  key={prod.name}
                                  href={prod.href}
                                  className="block font-bold text-xl text-gray-800 hover:text-horizop-gold mb-2"
                                >
                                  {prod.name}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                      {item.dropdownItems && item.title !== 'Catalog' && (
                        <div className="flex flex-col gap-3">
                          {item.dropdownItems.map((subKey) => (
                            <a
                              key={subKey}
                              href="#"
                              className="block px-6 py-3 text-lg font-bold text-gray-700 hover:bg-gray-100 rounded"
                            >
                              {subKey}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link to="/store" className="bg-white text-gray-800 font-normal py-2 px-6 rounded-full transition border border-gray-300 hover:bg-gray-100">
                Shop now
              </Link>
              <Link to="/login" className="text-gray-800 hover:text-horizop-gold transition hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <button className="md:hidden p-2 text-gray-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 flex flex-col items-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col gap-6">
            <button className="self-end mb-4" onClick={() => setMobileMenuOpen(false)}>
              <X size={28} />
            </button>
            {navItems.map((item, idx) => (
              <div key={item.title} className="mb-2">
                <button
                  className="font-semibold text-lg flex items-center gap-2 w-full text-left"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {item.title} {openDropdown === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openDropdown === idx && (
                  <div className="ml-6 mt-4 flex flex-col gap-3">
                    {item.title === 'Catalog' && item.dropdown
                      ? item.dropdown.map((group, gIdx) => (
                          <div key={gIdx} className="mb-4">
                            <div className="text-gray-400 font-bold mb-2 text-xl">{group.groupTitle}</div>
                            {group.items.map((prod) => (
                              <a
                                key={prod.name}
                                href={prod.href}
                                className="block font-extrabold text-2xl text-gray-800 hover:text-horizop-gold mb-2"
                              >
                                {prod.name}
                              </a>
                            ))}
                          </div>
                        ))
                      : item.dropdownItems && item.dropdownItems.map((subKey) => (
                          <a
                            key={subKey}
                            href="#"
                            className="block px-6 py-3 text-xl font-bold text-gray-700 hover:bg-gray-100 rounded"
                          >
                            {subKey}
                          </a>
                        ))}
                  </div>
                )}
              </div>
            ))}
            <button
              className="px-6 py-2 rounded-full border font-semibold hover:bg-gray-100 transition w-full mt-4 text-lg"
              onClick={() => { setMobileMenuOpen(false); navigate('/store'); }}
            >
              Shop now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
