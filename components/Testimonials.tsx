'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const reviews = [
  {
    name: "Michele Fernandes",
    date: "há 2 semanas",
    text: "Ambiente bonito e acolhedor, muito aconchegante, opções de lanches MARAVILHOSOS! Tem um empadão sem igual.",
    stars: 5,
    image: "/clientes/c1.png"
  },
  {
    name: "Juçara Fabiana Batista",
    date: "há 1 mês",
    text: "Local aconchegante e comida maravilhosa. O atendimento também é muito bom, são tão queridos que se faz amizade muito fácil!",
    stars: 5,
    image: "/clientes/c2.png"
  },
  {
    name: "A. Assunção",
    date: "há 5 meses",
    text: "A melhor cafeteira de Canoinhas! Ótimo atendimento! O ambiente é bem decorado, descontraído e aconchegante.",
    stars: 5,
    image: "/clientes/c3.png"
  },
  {
    name: "Rodrigo M. Teixeira",
    date: "um ano atrás",
    text: "Cardápio, atendimento e ambiente que não devem nada aos cafés da capital. O melhor café de Canoinhas, parabéns!",
    stars: 5,
    image: "/clientes/c4.png"
  },
  {
    name: "Kaue Natan Jungles",
    date: "há 3 meses",
    text: "Incrível, um lugar simplesmente impecável e aconchegante! Com certeza voltarei mais vezes.",
    stars: 5,
    image: "/clientes/c5.png"
  },
  {
    name: "Everton Valencio",
    date: "há 3 semanas",
    text: "Excelente qualidade atendimento top. Um refúgio no centro da cidade para tomar aquele café especial.",
    stars: 5,
    image: "/clientes/c6.png"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24.81-.6z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll suave (Funciona em conjunto com o CSS Snap ou sozinho)
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      // Tamanho aproximado de um card + gap
      const scrollAmount = 400; 
      
      const targetScroll = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="avaliacoes" className="py-24 bg-mietta-clay relative overflow-hidden border-b border-mietta-cream/5">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Header (NÃO ALTERADO) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-10">
          <motion.a 
            href="https://www.google.com/search?q=mietta+cafe+canoinhas+avaliacoes" 
            target="_blank"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-4 shadow-md hover:scale-105 transition-transform cursor-pointer"
          >
            <GoogleIcon />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Ver Avaliações no Google</span>
            <ArrowRight size={12} className="text-gray-400" />
          </motion.a>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-mietta-cream"
          >
            Quem prova, <span className="text-mietta-accent italic">ama.</span>
          </motion.h2>
      </div>

      {/* --- CONTAINER RESPONSIVO --- */}
      <div className="relative group w-full">
          
          {/* Botões de Navegação (Escondidos no Mobile, Visíveis no Desktop) */}
          <div className="hidden md:block max-w-[1400px] mx-auto relative pointer-events-none z-20">
              <button 
                  onClick={() => scroll('left')}
                  className="absolute left-6 top-[200px] -translate-y-1/2 bg-white text-mietta-clay p-4 rounded-full shadow-lg hover:bg-mietta-accent hover:text-white hover:scale-110 transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100"
                  aria-label="Anterior"
              >
                  <ChevronLeft size={24} />
              </button>

              <button 
                  onClick={() => scroll('right')}
                  className="absolute right-6 top-[200px] -translate-y-1/2 bg-white text-mietta-clay p-4 rounded-full shadow-lg hover:bg-mietta-accent hover:text-white hover:scale-110 transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100"
                  aria-label="Próximo"
              >
                  <ChevronRight size={24} />
              </button>
          </div>

          {/* Área de Scroll */}
          <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 px-6 md:px-12 py-10 snap-x snap-mandatory scrollbar-none items-stretch"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    // RESPONSIVIDADE AQUI:
                    // Mobile: w-[85vw] (ocupa quase a tela toda)
                    // Desktop: w-[400px] (tamanho fixo)
                    className="snap-center shrink-0 w-[85vw] md:w-[400px] relative p-8 rounded-3xl bg-mietta-cream shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 flex flex-col justify-between"
                >
                    <Quote className="absolute top-6 right-6 text-mietta-clay/10" size={40} />

                    <div>
                        <div className="flex gap-1 mb-4">
                            {[...Array(review.stars)].map((_, s) => (
                            <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>

                        <p className="text-mietta-clay/80 leading-relaxed mb-6 font-medium text-lg">
                            "{review.text}"
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto border-t border-mietta-clay/10 pt-4">
                        <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-mietta-clay/20"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.nextSibling) {
                                    (target.nextSibling as HTMLElement).style.display = 'flex';
                                }
                            }} 
                        />
                        {/* Fallback caso a imagem não carregue */}
                        <div className="hidden w-12 h-12 rounded-full bg-mietta-clay text-mietta-cream items-center justify-center font-bold">
                            {review.name.charAt(0)}
                        </div>

                        <div>
                            <h4 className="font-bold text-mietta-clay text-sm">{review.name}</h4>
                            <span className="text-xs text-gray-500">{review.date} no Google</span>
                        </div>
                    </div>
                </motion.div>
            ))}
          </div>
      </div>
      
      {/* Dica visual apenas no mobile */}
      <p className="text-center text-white/30 text-xs mt-0 md:hidden animate-pulse">
          Arraste para o lado →
      </p>

    </section>
  );
}