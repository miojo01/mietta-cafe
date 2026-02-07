'use client';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="historia" className="py-24 bg-mietta-cream relative overflow-hidden">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mietta-sand/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LADO ESQUERDO: A HISTÓRIA (Texto) --- */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-mietta-accent font-bold tracking-widest text-sm uppercase mb-4 inline-block"
            >
              Sobre Nós
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold text-mietta-clay mb-8 leading-[1.1]"
            >
              Um refúgio no meio <br/> da correria.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-mietta-clay/80 font-light leading-relaxed"
            >
              <p>
                A Mietta nasceu de um desejo simples: criar um lugar onde o tempo passa mais devagar. 
                Não somos apenas uma cafeteria, somos a sala de estar da cidade.
              </p>
              <p>
                Do cheirinho de bolo saindo do forno à playlist pensada para acalmar, cada detalhe 
                foi desenhado para te abraçar. Seja para um café rápido ou para passar a tarde trabalhando, 
                aqui você é sempre bem-vindo.
              </p>
            </motion.div>

            {/* Assinatura ou Frase de Efeito */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-8 border-t border-mietta-clay/10"
            >
               <p className="font-serif italic text-2xl text-mietta-clay">"Sinta-se em casa."</p>
            </motion.div>
          </div>

          {/* --- LADO DIREITO: 3 FOTOS + INSTAGRAM --- */}
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
             
             {/* Composição de 3 Fotos (Polaroid Cluster) */}
             <div className="relative h-[450px] w-full">
                
                {/* Foto 1: Interior (Fundo) */}
                <motion.div 
                  initial={{ rotate: -6, opacity: 0, scale: 0.8 }}
                  whileInView={{ rotate: -3, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-4 w-64 md:w-72 aspect-[4/5] bg-white p-2 shadow-xl z-10"
                >
                   <img src="/banner-hero.png" alt="Interior" className="w-full h-full object-cover" />
                </motion.div>

                {/* Foto 2: Produto (Meio) */}
                <motion.div 
                   initial={{ rotate: 6, opacity: 0, x: 50 }}
                   whileInView={{ rotate: 3, opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 }}
                   className="absolute top-12 right-0 md:right-8 w-56 md:w-64 aspect-square bg-white p-2 shadow-xl z-20"
                >
                   <img src="/coffee2.png" alt="Café" className="w-full h-full object-cover" />
                </motion.div>

                {/* Foto 3: Fachada (Frente) */}
                <motion.div 
                   initial={{ y: 50, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   className="absolute bottom-0 left-12 md:left-24 w-60 md:w-72 aspect-video bg-white p-2 shadow-2xl z-30"
                >
                   <img src="/fachada1.png" alt="Fachada" className="w-full h-full object-cover object-[center_18%]" />
                </motion.div>

             </div>

             {/* BOTÃO INSTAGRAM (Abaixo das fotos) */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center lg:text-right flex flex-col items-center lg:items-end gap-3"
             >
                <p className="text-sm text-mietta-clay/60 font-medium">Acompanhe nosso dia a dia</p>
                
                <a 
                  href="https://www.instagram.com/miettacafe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Instagram size={20} />
                  <span>Siga @miettacafe</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
             </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}