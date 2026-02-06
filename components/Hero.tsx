'use client';
import { motion } from 'framer-motion';
import { MaskText } from './MaskText';
import FallingBeans from './FallingBeans';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-mietta-cream overflow-hidden">
      
      {/* Grãos caindo ao fundo */}
      <FallingBeans />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        
        {/* LADO ESQUERDO: Textos */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block text-mietta-clay/80 font-medium tracking-widest text-sm mb-4 uppercase"
            >
              Café & Conforto
            </motion.span>
            
            <div className="mb-6">
               <MaskText className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-mietta-clay leading-[1.1]">
                 O seu momento
               </MaskText>
               <MaskText className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-mietta-accent leading-[1.1] italic">
                 Mietta do dia.
               </MaskText>
            </div>

            <MaskText className="text-mietta-clay/70 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              Um refúgio no centro da cidade. Cafés especiais, doces artesanais e aquele ambiente que te abraça.
            </MaskText>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#menu" className="px-8 py-4 bg-mietta-clay text-mietta-cream rounded-full font-semibold text-lg hover:bg-mietta-clay/90 transition-transform hover:scale-105 shadow-xl flex items-center gap-2 justify-center">
                Ver Cardápio
              </a>
              <a href="#historia" className="px-8 py-4 border-2 border-mietta-clay/20 text-mietta-clay rounded-full font-semibold text-lg hover:bg-mietta-clay/5 transition-colors">
                Nossa História
              </a>
            </motion.div>
          </div>
        </div>

        {/* LADO DIREITO: JANELA ARCO */}
        <div className="flex-1 w-full order-1 md:order-2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-md z-10"
          >
            {/* CORREÇÃO: Usamos drop-shadow no container pai. 
               Como removemos os elementos quadrados internos que mudavam no hover,
               a sombra agora deve permanecer sempre fiel ao formato do arco.
            */}
            <div className="relative drop-shadow-2xl">
                <div className="aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden border-4 border-white bg-mietta-sand">
                  {/* Apenas a imagem escala lentamente. Sem brilho, sem conflito. */}
                  <img 
                      src="/mietta-cafe.png" 
                      alt="Interior do Café Mietta"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  {/* REMOVI O DIV DE BRILHO QUE CAUSAVA O BUG */}
                </div>
            </div>

            {/* SELO FLUTUANTE */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 md:-right-10 bg-mietta-cream p-3 rounded-full shadow-xl border border-mietta-clay/10 z-20"
            >
              <div className="w-28 h-28 rounded-full border border-dashed border-mietta-clay flex items-center justify-center text-center p-2 bg-mietta-cream">
                <div className="flex flex-col items-center justify-center leading-none">
                  <span className="text-[10px] font-bold text-mietta-clay uppercase tracking-widest mb-1">Desde</span>
                  <span className="text-2xl font-serif font-bold text-mietta-accent">2024</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}