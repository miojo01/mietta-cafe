'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import CartSidebar from './CartSidebar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { cartCount } = useCart(); 

  const links = [
    { name: 'Menu', href: '#menu' },
    { name: 'Nossa História', href: '#historia' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Avaliações', href: '#avaliacoes' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-mietta-cream/80 backdrop-blur-md border-b border-mietta-clay/10"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO ARREDONDADA AQUI */}
          <Link href="/" className="z-50 relative">
            <img 
              src="/logo_mietta.jpg" // Usando o PNG que parece ser o principal
              alt="Mietta Café" 
              className="h-17 w-20 rounded-full object-cover border-2 border-mietta-clay/10" // Classes para arredondar e dar tamanho
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 text-mietta-clay font-medium">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="relative group overflow-hidden">
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mietta-clay transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Ações */}
          <div className="flex items-center gap-4">
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-mietta-clay hover:bg-mietta-clay/10 rounded-full transition-colors z-50 relative"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
              
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-mietta-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 text-mietta-clay z-50 relative"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-mietta-clay text-mietta-cream px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Peça no WhatsApp
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-mietta-cream pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-mietta-clay font-bold block py-2 border-b border-mietta-clay/10"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

    </>
  );
}