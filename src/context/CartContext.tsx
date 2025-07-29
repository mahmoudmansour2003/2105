import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  options?: Record<string, any>;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number, options?: Record<string, any>) => void;
  removeFromCart: (itemId: string, options?: Record<string, any>) => void;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number, options?: Record<string, any>) => {
    setCart(prev => {
      const idx = prev.findIndex(
        i => i.id === item.id && JSON.stringify(i.options) === JSON.stringify(options)
      );
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += quantity;
        if (updated[idx].quantity <= 0) {
          return updated.filter((_, i) => i !== idx);
        }
        return updated;
      }
      return [...prev, { ...item, quantity, options }];
    });
  };

  const removeFromCart = (itemId: string, options?: Record<string, any>) => {
    setCart(prev => prev.filter(
      item => !(item.id === itemId && JSON.stringify(item.options) === JSON.stringify(options))
    ));
  };

  const getCartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
}; 