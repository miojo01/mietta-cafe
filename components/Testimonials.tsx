'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Gabriela M.",
    date: "há 2 semanas",
    text: "O lugar é um encanto! O croissant de Nutella com morango é simplesmente divino, super recheado. Atendimento nota 10.",
    stars: 5,
  },
  {
    name: "Rafael S.",
    date: "há 1 mês",
    text: "Melhor café de Canoinhas. O ambiente é super aconchegante, ótimo para trabalhar. O cappuccino é perfeito!",
    stars: 5,
  },
  {
    name: "Beatriz L.",
    date: "há 3 dias",
    text: "Fui pela primeira vez e me apaixonei. A decoração é linda, cheia de plantas. Pedi uma empanada e estava fresquinha.",
    stars: 5,
  },
  {
    name: "Lucas P.",
    date: "há 1 semana",
    text: "Espaço incrível e café de qualidade. É difícil achar um lugar assim hoje em dia. Parabéns pelo capricho!",
    stars: 5,
  },
  {
    name: "Mariana C.",
    date: "há 5 dias",
    text: "Um refúgio no centro! A torta de limão é a melhor que já comi. Voltarei com certeza.",
    stars: 5,
  },
  {
    name: "Ricardo T.",
    date: "há 3 semanas",
    text: "Atendimento impecável e produtos frescos. O ambiente te abraça de verdade. Recomendo muito.",
    stars: 5,
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
  return (
    <section className="py-24 bg-mietta-clay relative overflow-hidden border-b border-mietta-cream/5">
      
      {/* Detalhe de fundo suave */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1 mb-4 shadow-md"
          >
            <GoogleIcon />
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Avaliações 5 Estrelas</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-mietta-cream"
          >
            Quem prova, <span className="text-mietta-accent italic">ama.</span>
          </motion.h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // AQUI: Mudei o bg para 'bg-mietta-cream' (amarelinho/bege)
              className="relative p-8 rounded-3xl bg-mietta-cream shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10"
            >
              <Quote className="absolute top-6 right-6 text-mietta-clay/10" size={40} />

              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, s) => (
                  <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Texto escuro (clay) para contrastar com o fundo creme */}
              <p className="text-mietta-clay/80 leading-relaxed mb-6 font-medium">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto border-t border-mietta-clay/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-mietta-clay text-mietta-cream flex items-center justify-center font-bold">
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
    </section>
  );
}