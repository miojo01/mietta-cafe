'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Coffee, Sun, CloudRain, BatteryCharging, Heart } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

// Mapeando emoções para IDs de produtos (Baseado na nossa lista products.ts)
const moods = [
  { 
    id: 'tired', 
    label: 'Preciso Acordar', 
    icon: BatteryCharging, 
    color: 'bg-yellow-100 text-yellow-700',
    matchId: 6 // Espresso Tônica (ou o café mais forte que tiver)
  },
  { 
    id: 'cozy', 
    label: 'Quero um Abraço', 
    icon: CloudRain, 
    color: 'bg-blue-100 text-blue-700',
    matchId: 1 // Cappuccino
  },
  { 
    id: 'sweet', 
    label: 'Formiga de Doce', 
    icon: Heart, 
    color: 'bg-pink-100 text-pink-700',
    matchId: 3 // Red Velvet
  },
  { 
    id: 'hot', 
    label: 'Refrescar', 
    icon: Sun, 
    color: 'bg-orange-100 text-orange-700',
    matchId: 6 // Espresso Tônica
  },
];

export default function MoodMatcher() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Encontra o produto baseado na emoção selecionada
  const recommendation = selectedMood 
    ? products.find(p => p.id === moods.find(m => m.id === selectedMood)?.matchId)
    : null;

  return (
    <section className="py-16 bg-mietta-sand/30 border-y border-mietta-clay/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="text-mietta-accent" size={24} />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-mietta-clay">
            Não sabe o que pedir?
          </h2>
        </div>
        
        <p className="text-mietta-clay/70 mb-10">
          Diga como você está se sentindo e nós sugerimos a escolha perfeita.
        </p>

        {/* Grid de Botões de Emoção */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMood === mood.id;
            
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3 border-2
                  ${isSelected 
                    ? 'border-mietta-clay bg-white shadow-md scale-105' 
                    : 'border-transparent bg-white/50 hover:bg-white hover:shadow-sm'
                  }`}
              >
                <div className={`p-3 rounded-full ${mood.color}`}>
                  <Icon size={24} />
                </div>
                <span className="font-medium text-mietta-clay text-sm">{mood.label}</span>
              </button>
            );
          })}
        </div>

        {/* Área da Recomendação (Aparece suavemente) */}
        <AnimatePresence mode='wait'>
          {recommendation && (
            <motion.div
              key={recommendation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-mietta-clay/10 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8"
            >
              {/* Foto Redonda */}
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-mietta-cream shadow-inner">
                <img 
                  src={recommendation.image} 
                  alt={recommendation.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="text-left flex-1">
                <div className="text-sm font-bold text-mietta-accent uppercase tracking-wider mb-2">
                  Match Perfeito
                </div>
                <h3 className="text-2xl font-serif font-bold text-mietta-clay mb-2">
                  {recommendation.name}
                </h3>
                <p className="text-mietta-clay/70 text-sm mb-6 leading-relaxed">
                  {recommendation.description}
                </p>
                
                <button 
                  onClick={() => addToCart(recommendation)}
                  className="px-8 py-3 bg-mietta-clay text-mietta-cream rounded-xl font-bold hover:bg-mietta-clay/90 transition-transform hover:scale-105 flex items-center gap-2"
                >
                  <Coffee size={20} />
                  Pedir essa Sugestão (R$ {recommendation.price.toFixed(2)})
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}