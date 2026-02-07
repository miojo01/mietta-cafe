'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  image?: string;
  quantity: number;
  price?: number; 
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  cartCount: number; // <--- ADICIONAMOS ISSO AQUI
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carregar do LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('mietta-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Erro ao ler carrinho:", error);
      }
    }
  }, []);

  // Salvar no LocalStorage
  useEffect(() => {
    localStorage.setItem('mietta-cart', JSON.stringify(cart));
  }, [cart]);

  // CÁLCULO DINÂMICO DO TOTAL DE ITENS
  // Soma todas as quantidades (Ex: 2 cafés + 1 bolo = 3 itens)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
            : item
        );
      }
      return [...prevCart, { ...newItem, quantity: newItem.quantity || 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount }}>
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