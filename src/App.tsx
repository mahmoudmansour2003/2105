import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Index from "./pages/Index";
import Network from "./pages/Network";
import Solutions from "./pages/Solutions";
import Training from "./pages/Training";
import NotFound from "./pages/NotFound";
import PartnerPortal from "./pages/PartnerPortal";
import Store from "./pages/Store";
import PulsarPlus from "./pages/pulsar-plus";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Landing from "./pages/Landing";
import QuoteRequest from "./pages/QuoteRequest";
import PartnerProgram from "./pages/PartnerProgram";
import Smartplug from "./pages/Smartplug";
import TheAppPage from "./components/TheAppPage";
import Fastplug from "./pages/Fastplug";
import ScrollToTopArrow from './components/ui/ScrollToTopArrow';
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Checkout from "./pages/checkout";
import MobileCharger from "./pages/mobile-charger";
import AdminPanel from "./pages/AdminPanel";
import i1n from './i18n';

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header />}
      {showHeader && <ScrollToTopArrow />}
      <div className={showHeader ? "pt-24" : ""}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route path="/home" element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          } />
          <Route path="/network" element={
            <ProtectedRoute>
              <Network />
            </ProtectedRoute>
          } />
          <Route path="/solutions" element={
            <ProtectedRoute>
              <Solutions />
            </ProtectedRoute>
          } />
          <Route path="/training" element={
            <ProtectedRoute>
              <Training />
            </ProtectedRoute>
          } />
          <Route path="/partner-portal" element={
            <ProtectedRoute>
              <PartnerPortal />
            </ProtectedRoute>
          } />
          <Route path="/store" element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          } />
          <Route path="/store/pulsar-plus" element={
            <ProtectedRoute>
              <PulsarPlus />
            </ProtectedRoute>
          } />
          <Route path="/store/mobile-charger" element={
            <ProtectedRoute>
              <MobileCharger />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path="/quote-request" element={
            <ProtectedRoute>
              <QuoteRequest />
            </ProtectedRoute>
          } />
          <Route path="/partner-program" element={
            <ProtectedRoute>
              <PartnerProgram />
            </ProtectedRoute>
          } />
          <Route path="/smartplug" element={
            <ProtectedRoute>
              <Smartplug />
            </ProtectedRoute>
          } />
          <Route path="/the-app" element={
            <ProtectedRoute>
              <TheAppPage />
            </ProtectedRoute>
          } />
          <Route path="/store/fastplug" element={
            <ProtectedRoute>
              <Fastplug />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminPanel />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  const [, setLanguage] = useState(i1n.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng);
    };

    i1n.on('languageChanged', handleLanguageChange);

    return () => {
      i1n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
          <CartProvider>
            <TooltipProvider>
              <AppContent />
            </TooltipProvider>
          </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster />
      <Sonner />
    </>
  );
};

export default App;
