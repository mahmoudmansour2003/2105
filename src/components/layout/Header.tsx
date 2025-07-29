import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, User, LogOut, Settings, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [logoLink, setLogoLink] = useState('/');
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    {
      key: 'products',
      title: t('navigation.products'),
      dropdown: [
        {
          groupTitle: t('navigation.homeChargers'),
          items: [
            { name: t('navigation.smartplug'), href: '/smartplug' },
            { name: t('navigation.mobileCharger'), href: '/store/mobile-charger' },
          ],
        },
        {
          groupTitle: t('navigation.businessSolutions'),
          items: [
            { name: t('navigation.businessEVCharging'), href: '#' },
            { name: t('navigation.businessSoftwareSolutions'), href: '#' },
          ],
        },
        {
          groupTitle: t('navigation.businessFastChargers'),
          items: [
            { name: t('navigation.fastplug'), href: '/fastplug' },
          ],
        },
        {
          groupTitle: t('navigation.softwareSolutions'),
          items: [
            { name: t('navigation.appForEVDrivers'), href: '/the-app' },
            { name: t('navigation.businessPortal'), href: '#' },
          ],
        },
        {
          groupTitle: t('navigation.moreProducts'),
          items: [
            { name: t('navigation.accessories'), href: '/store/accessories' },
          ],
        },
      ],
    },
    { 
      key: 'for_businesses',
      title: t('navigation.forBusinesses'), 
      dropdownItems: [
        { name: t('navigation.solutions'), href: '#' }, 
        { name: t('navigation.caseStudies'), href: '#' }, 
        { name: t('navigation.pricing'), href: '#' }
      ] 
    },
    { 
      key: 'domestic',
      title: t('navigation.domestic'), 
      dropdownItems: [
        { name: t('navigation.homeCharging'), href: '#' }, 
        { name: t('navigation.smartDevices'), href: '#' }, 
        { name: t('navigation.support'), href: '#' }
      ] 
    },
    {
      key: 'partner',
      title: t('navigation.partner'),
      dropdownItems: [
        { name: t('navigation.partnerProgram'), href: '/partner-program' },
        { name: t('navigation.resources'), href: '#' },
        { name: t('navigation.contact'), href: '#' },
      ]
    },
    { key: 'training', title: t('navigation.training'), dropdownItems: [] },
    { key: 'the_app', title: t('navigation.theApp'), href: '/the-app' },
  ];

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
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'ADMIN': return 'bg-red-500';
      case 'INSTALLER': return 'bg-blue-500';
      case 'DISTRIBUTOR': return 'bg-green-500';
      case 'FINANCIAL_CUSTOMER': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-horizop-gold/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={logoLink} className="flex items-center">
              <img
                src="/images/HE_Carr_text.png"
                alt="HORIZOP ENERGY"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <div key={item.key} className="dropdown-container relative">
                  {item.href ? (
                    <Link
                      to={item.href}
                    className="text-horizop-navy hover:text-horizop-gold font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.title}
                    </Link>
                  ) : (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    className="text-horizop-navy hover:text-horizop-gold font-medium transition-colors duration-200 flex items-center"
                  >
                      {item.title}
                    {openDropdown === index ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-horizop-gold/20 p-4 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {item.dropdown.map((group, groupIndex) => (
                        <div key={groupIndex}>
                          <h3 className="text-sm font-semibold text-horizop-navy mb-2">
                            {group.groupTitle}
                          </h3>
                          <ul className="space-y-1">
                            {group.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.href}
                                  className="text-sm text-horizop-navy/70 hover:text-horizop-gold transition-colors duration-200 block py-1"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                              ))}
                          </ul>
                        </div>
                          ))}
                    </div>
                  </div>
                      )}

                {/* Simple Dropdown */}
                {item.dropdownItems && openDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-horizop-gold/20 py-2 z-50">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <Link
                        key={dropdownIndex}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-horizop-navy/70 hover:text-horizop-gold hover:bg-horizop-gold/10 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                            </Link>
                          ))}
                  </div>
                  )}
                </div>
              ))}
            </nav>

          {/* Right side - Cart, Language, User */}
            <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-horizop-navy hover:text-horizop-gold transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-horizop-gold text-horizop-navy text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getCartCount()}
                  </span>
                )}
            </Link>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* User Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 text-horizop-navy hover:text-horizop-gold">
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline">{user?.firstName}</span>
                    <Badge className={getRoleBadgeColor(user?.role || '')}>
                      {user?.role}
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/home" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  {user?.role === 'ADMIN' && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center">
                        <Shield className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/partner-portal" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Partner Portal
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="bg-horizop-gold text-horizop-navy hover:bg-horizop-navy hover:text-horizop-gold">
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-horizop-navy hover:text-horizop-gold transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
       {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-horizop-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.key}>
                 {item.href ? (
                   <Link
                     to={item.href}
                      className="block text-horizop-navy hover:text-horizop-gold font-medium py-2"
                     onClick={() => setMobileMenuOpen(false)}
                   >
                     {item.title}
                   </Link>
                 ) : (
                    <div>
                      <div className="text-horizop-navy font-medium py-2">{item.title}</div>
                      {item.dropdownItems && (
                        <div className="pl-4 space-y-2">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.href}
                              className="block text-sm text-horizop-navy/70 hover:text-horizop-gold py-1"
                              onClick={() => setMobileMenuOpen(false)}
                 >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile User Menu */}
              {isAuthenticated ? (
                <div className="pt-4 border-t border-horizop-gold/20">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="h-5 w-5 text-horizop-gold" />
                    <div>
                      <p className="font-medium text-horizop-navy">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <Badge className={getRoleBadgeColor(user?.role || '')}>
                        {user?.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/home"
                      className="block text-sm text-horizop-navy/70 hover:text-horizop-gold py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    {user?.role === 'ADMIN' && (
                               <Link
                        to="/admin"
                        className="block text-sm text-horizop-navy/70 hover:text-horizop-gold py-1"
                                    onClick={() => setMobileMenuOpen(false)}
                               >
                        Admin Panel
                               </Link>
                    )}
                           <Link
                      to="/partner-portal"
                      className="block text-sm text-horizop-navy/70 hover:text-horizop-gold py-1"
                                 onClick={() => setMobileMenuOpen(false)}
                           >
                      Partner Portal
                           </Link>
               <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="block text-sm text-red-600 hover:text-red-700 py-1 w-full text-left"
               >
                      Logout
               </button>
             </div>
           </div>
              ) : (
                <div className="pt-4 border-t border-horizop-gold/20">
                  <Link
                    to="/login"
                    className="block w-full text-center bg-horizop-gold text-horizop-navy hover:bg-horizop-navy hover:text-horizop-gold py-2 px-4 rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
         </div>
       )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
