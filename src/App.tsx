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
import Accessories from "./pages/accessories";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Landing from "./pages/Landing";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <>
      {showHeader && <Header />}
      <div className={showHeader ? "pt-24" : ""}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Index />} />
          <Route path="/network" element={<Network />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/training" element={<Training />} />
          <Route path="/partner-portal" element={<PartnerPortal />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/pulsar-plus" element={<PulsarPlus />} />
          <Route path="/store/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
