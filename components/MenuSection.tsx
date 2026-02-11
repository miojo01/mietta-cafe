'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '@/data/products';
import { Plus, Info, Sparkles, Sun, Coffee, BatteryCharging } from 'lucide-react';
import { useCart } from "@/context/CartContext";

// Configuração dos "Humores"
const moods = [
  { 
    id: 'tired', 
    label: 'Cansado(a)', 
    icon: <BatteryCharging size={20} />, 
    colorClass: 'text-blue-500', 
    recommendId: 6, // Cappuccino
    msg: "Nada que uma dose de cafeína quentinha não resolva." 
  },
  // MUDANÇA: 'Com Calor' recomenda o ID 5 (Iced Coffee)
  { 
    id: 'hot', 
    label: 'Com Calor', 
    icon: <Sun size={20} />, 
    colorClass: 'text-orange-500', 
    recommendId: 5, // <--- Novo Café Gelado
    msg: "Um Iced Coffee geladinho para refrescar as ideias!" 
  },
  { 
    id: 'hungry', 
    label: 'Faminto(a)', 
    icon: <Coffee size={20} />, 
    colorClass: 'text-red-500', 
    recommendId: 4, // Coxinha
    msg: "A Coxinha da Mietta sustenta a alma." 
  },
  { 
    id: 'fancy', 
    label: 'Chique', 
    icon: <Sparkles size={20} />, 
    colorClass: 'text-purple-500', 
    recommendId: 1, // Croissant Salgado
    msg: "Um croissant francês e postura elegante, por favor." 
  },
];

export default function MenuSection() {
  const [recommendation, setRecommendation] = useState<{ product: Product | undefined, msg: string } | null>(null);
  const { addToCart } = useCart();

  const handleMoodSelect = (moodId: string) => {
    const selectedMood = moods.find(m => m.id === moodId);
    if (selectedMood) {
      const product = products.find(p => p.id === selectedMood.recommendId); 
      setRecommendation({ product, msg: selectedMood.msg });
      
      setTimeout(() => {
        const element = document.getElementById(`product-${selectedMood.recommendId}`);
        if(element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <section id="menu" className="py-20 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-mietta-clay mb-4">
            Nossos Clássicos
          </h2>
          <p className="text-mietta-clay/60 text-lg max-w-2xl mx-auto">
            Uma seleção do que fazemos de melhor.
          </p>
        </div>

        {/* --- SOMMELIER --- */}
        <div className="max-w-3xl mx-auto bg-mietta-cream rounded-3xl p-6 md:p-8 mb-16 border border-mietta-clay/10 text-center shadow-sm">
          <h3 className="text-xl font-serif font-bold text-mietta-clay mb-6 flex items-center justify-center gap-2">
            <Sparkles className="text-mietta-accent" size={24} />
            Não sabe o que pedir? Como você está hoje?
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood.id)}
                className={`
                  group flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-200 shadow-sm
                  bg-white border-mietta-clay/10
                  hover:shadow-md hover:scale-105 hover:border-mietta-clay/30 hover:bg-white
                  active:scale-95 active:shadow-inner
                `}
              >
                <span className={`${mood.colorClass} transition-transform group-hover:rotate-12`}>
                  {mood.icon}
                </span>
                <span className="font-medium text-mietta-clay">{mood.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {recommendation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 bg-white rounded-xl p-4 border border-mietta-accent/20"
              >
                <p className="text-mietta-accent font-medium mb-2">"{recommendation.msg}"</p>
                <p className="text-sm text-mietta-clay/60">
                  Sugerimos: <strong>{recommendation.product?.name}</strong>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                layout
                id={`product-${product.id}`} 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  borderColor: recommendation?.product?.id === product.id ? '#D4A373' : 'rgba(0,0,0,0.05)'
                }}
                className={`group relative bg-mietta-cream rounded-3xl overflow-hidden hover:shadow-xl transition-all border flex flex-col h-full
                  ${recommendation?.product?.id === product.id ? 'ring-2 ring-mietta-accent ring-offset-2 shadow-2xl scale-[1.02]' : 'border-mietta-clay/5'}
                `}
              >
                
                <div className="h-64 overflow-hidden relative shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-bold text-mietta-clay">{product.name}</h3>
                  </div>
                  
                  <p className="text-mietta-clay/70 text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>

                  <button 
                    onClick={() => addToCart({ 
                      ...product, 
                      id: product.id.toString(), // Converte número para string
                      quantity: 1 
                    })}
                    className="w-full py-3 bg-white border border-mietta-clay/20 text-mietta-clay rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-mietta-clay hover:text-mietta-cream transition-colors group-hover:border-mietta-clay mt-auto"
                  >
                    <Plus size={20} />
                    Adicionar à Lista
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-12">
            <span className="text-sm bg-mietta-clay/5 px-4 py-2 rounded-full inline-flex items-center gap-2 text-mietta-clay/60">
              <Info size={14} />
              Cardápio rotativo. Consulte a disponibilidade do dia pelo WhatsApp.
            </span>
        </div>

      </div>
    </section>
  );
}