'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/products';

// Definindo o formato do item no carrinho (Produto + Quantidade)
export interface CartItem extends Product {
  quantity: number;
}

// Definindo o que nosso "Cérebro" sabe fazer
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  cartCount: number; // Quantos itens tem no total
  cartTotal: number; // Valor total em R$
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Função para adicionar item
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Verifica se o item já existe no carrinho
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (existingItem) {
        // Se já existe, só aumenta a quantidade
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Se não existe, adiciona o novo item com quantidade 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Função para remover item (diminuir quantidade ou tirar da lista)
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      
      if (existingItem && existingItem.quantity > 1) {
        // Se tem mais de 1, diminui a quantidade
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      // Se só tem 1, remove da lista
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const clearCart = () => setCart([]);

  // Cálculos automáticos
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

// Um "gancho" (hook) personalizado para facilitar o uso
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
}