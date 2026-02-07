'use client';

import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext'; // Certifique-se que o caminho está certo

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // AQUI estava o erro: pegamos 'cart' do contexto, não 'cartItems'
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    // 1. Cria a lista de itens apenas com Quantidade e Nome
    const itemsList = cart.map(item => 
      `• ${item.quantity}x ${item.name}`
    ).join('%0A'); // %0A é a quebra de linha para URL

    // 2. Monta a mensagem
    const message = `Olá! Gostaria de fazer um pedido:%0A%0A${itemsList}%0A%0AFico no aguardo para confirmar valores e entrega!`;

    // 3. Redireciona (Troque o número abaixo pelo real)
    const phoneNumber = "5547999999999"; 
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Escuro (Fundo) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />

          {/* O Sidebar em si */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-mietta-cream shadow-2xl z-50 flex flex-col border-l border-mietta-clay/10"
          >
            {/* CABEÇALHO */}
            <div className="p-6 border-b border-mietta-clay/10 flex items-center justify-between bg-white/50">
              <div className="flex items-center gap-3">
                 <ShoppingBag className="text-mietta-accent" />
                 <h2 className="text-2xl font-serif font-bold text-mietta-clay">Seu Pedido</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-mietta-clay"
              >
                <X size={24} />
              </button>
            </div>

            {/* LISTA DE ITENS (Scrollável) */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-mietta-clay/40 space-y-4">
                  <ShoppingBag size={48} />
                  <p className="text-lg font-medium">Sua sacola está vazia</p>
                  <button onClick={onClose} className="text-mietta-accent font-bold hover:underline">
                    Ver Cardápio
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-mietta-clay/5"
                  >
                    {/* Imagem do Item */}
                    {item.image && (
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Informações do Item */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-mietta-clay line-clamp-2 leading-tight">
                            {item.name}
                        </h3>
                        {/* REMOVIDO: O preço que causava erro (toFixed) não existe mais aqui */}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Controles de Quantidade */}
                        <div className="flex items-center gap-3 bg-mietta-cream rounded-lg px-2 py-1 border border-mietta-clay/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-mietta-accent disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-mietta-accent"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        {/* Botão de Remover */}
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          title="Remover item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* RODAPÉ (Sem Total) */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-mietta-clay/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                
                {/* REMOVIDO: A div que mostrava "Total: R$ NaN" foi deletada daqui */}

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-mietta-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-mietta-clay transition-colors shadow-lg shadow-mietta-accent/20 flex items-center justify-center gap-2"
                >
                  <span>Finalizar no WhatsApp</span>
                </button>
                
                <p className="text-center text-xs text-mietta-clay/40 mt-3">
                  Valores e entrega serão combinados no chat.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}