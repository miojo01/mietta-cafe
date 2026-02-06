'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, addToCart, cartTotal } = useCart();

  // Função que monta a mensagem e abre o WhatsApp
  const handleCheckout = () => {
    const phoneNumber = "554799999999"; // Coloque o número da Mietta aqui (com DDD)
    
    // 1. Cria o texto da lista
    const itemsList = cart.map(item => 
      `▪ ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`
    ).join('%0a'); // %0a é o código para pular linha na URL

    // 2. Monta a mensagem final
    const message = `Olá, Mietta! ☕%0aGostaria de fazer um pedido:%0a%0a${itemsList}%0a%0a*Total: R$ ${cartTotal.toFixed(2)}*%0a%0aAguardo a confirmação!`;

    // 3. Abre o link
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fundo escuro (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />

          {/* A Gaveta (Sidebar) */}
          <motion.div
            initial={{ x: '100%' }} // Começa escondida na direita
            animate={{ x: 0 }}      // Desliza para aparecer
            exit={{ x: '100%' }}    // Desliza de volta ao sair
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-mietta-cream z-[70] shadow-2xl flex flex-col border-l border-mietta-clay/10"
          >
            
            {/* Cabeçalho da Gaveta */}
            <div className="p-6 border-b border-mietta-clay/10 flex items-center justify-between bg-white/50">
              <h2 className="text-2xl font-serif font-bold text-mietta-clay">Seu Pedido</h2>
              <button onClick={onClose} className="p-2 hover:bg-mietta-clay/10 rounded-full transition-colors">
                <X size={24} className="text-mietta-clay" />
              </button>
            </div>

            {/* Lista de Itens (Com rolagem) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-mietta-clay/50 mt-20">
                  <p>Sua sacola está vazia.</p>
                  <p className="text-sm">Que tal um cafézinho?</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Foto Pequena */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-mietta-clay/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Detalhes */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-mietta-clay line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-mietta-clay/60">R$ {item.price.toFixed(2)} un</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Controlador de Quantidade */}
                        <div className="flex items-center gap-3 bg-white rounded-lg px-2 py-1 border border-mietta-clay/10">
                          <button onClick={() => removeFromCart(item.id)} className="p-1 hover:text-mietta-accent"><Minus size={14}/></button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="p-1 hover:text-mietta-accent"><Plus size={14}/></button>
                        </div>
                        
                        {/* Botão Remover Totalmente */}
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="text-mietta-clay/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Rodapé (Total + Botão Finalizar) */}
            <div className="p-6 bg-white border-t border-mietta-clay/10 safe-bottom">
              <div className="flex justify-between items-end mb-6">
                <span className="text-mietta-clay/60 font-medium">Total</span>
                <span className="text-3xl font-serif font-bold text-mietta-clay">
                  R$ {cartTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-4 bg-mietta-clay text-mietta-cream rounded-xl font-bold text-lg hover:bg-mietta-clay/90 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Finalizar no WhatsApp
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}