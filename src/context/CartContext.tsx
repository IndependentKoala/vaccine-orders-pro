import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product, DosePack } from '@/data/products';

export interface CartItem {
  product: Product;
  dosePack: DosePack;
  quantity: number;
  requestedDeliveryDate: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, dosePack: DosePack, quantity: number, deliveryDate: string) => void;
  removeItem: (productId: string, dosePackId: string) => void;
  updateQuantity: (productId: string, dosePackId: string, quantity: number) => void;
  updateDeliveryDate: (productId: string, dosePackId: string, date: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product, dosePack: DosePack, quantity: number, deliveryDate: string) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.dosePack.id === dosePack.id
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      return [...prev, { product, dosePack, quantity, requestedDeliveryDate: deliveryDate }];
    });
  }, []);

  const removeItem = useCallback((productId: string, dosePackId: string) => {
    setItems(prev => prev.filter(
      item => !(item.product.id === productId && item.dosePack.id === dosePackId)
    ));
  }, []);

  const updateQuantity = useCallback((productId: string, dosePackId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, dosePackId);
      return;
    }

    setItems(prev => prev.map(item => 
      item.product.id === productId && item.dosePack.id === dosePackId
        ? { ...item, quantity }
        : item
    ));
  }, [removeItem]);

  const updateDeliveryDate = useCallback((productId: string, dosePackId: string, date: string) => {
    setItems(prev => prev.map(item =>
      item.product.id === productId && item.dosePack.id === dosePackId
        ? { ...item, requestedDeliveryDate: date }
        : item
    ));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + (item.dosePack.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      updateDeliveryDate,
      clearCart,
      totalItems,
      totalAmount,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
