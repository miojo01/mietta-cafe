'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FallingBeans() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Movimento parallax (diferentes velocidades para efeito 3D)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]); // Rápido (Frente)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]); // Lento (Fundo)
  
  // Rotações (Criei uma rotação inversa também para não girarem todos iguais)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -360]);

  // Função para renderizar o grão real
  const RealBean = ({ size, className }: { size: number, className?: string }) => (
    <img 
      src="/coffee-bean.png" 
      alt="Grão de café"
      width={size}
      height={size}
      className={`object-contain opacity-60 ${className}`} 
    />
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* --- GRÃOS ORIGINAIS --- */}

      {/* Grão 1 (Focado - Grande - Canto Superior Direito) */}
      <motion.div style={{ y: y1, rotate }} className="absolute -top-10 right-[5%] w-24 h-24 blur-[1px]">
        <RealBean size={96} />
      </motion.div>

      {/* Grão 2 (Desfocado - Fundo - Esquerda Alta) */}
      <motion.div style={{ y: y2, rotate: rotateReverse }} className="absolute top-[20%] left-[2%] w-16 h-16 blur-[2px] opacity-40">
        <RealBean size={64} />
      </motion.div>

      {/* Grão 3 (Pequeno - Centro Esquerda Baixo) */}
      <motion.div style={{ y: y1, rotate }} className="absolute bottom-[30%] left-[20%] w-12 h-12 blur-[1px]">
        <RealBean size={48} />
      </motion.div>

       {/* Grão 4 (Extra - Direita Meio) */}
       <motion.div style={{ y: y2, rotate: rotateReverse }} className="absolute top-[60%] right-[15%] w-20 h-20 blur-[3px]">
        <RealBean size={80} />
      </motion.div>


      {/* --- NOVOS GRÃOS ADICIONADOS --- */}

      {/* Grão 5 (Fundo - Centro Superior - Bem pequeno) */}
      <motion.div style={{ y: y2, rotate }} className="absolute top-[10%] left-[45%] w-10 h-10 blur-[2px] opacity-30">
        <RealBean size={40} />
      </motion.div>

      {/* Grão 6 (Frente - Canto Inferior Direito - Grande) */}
      <motion.div style={{ y: y1, rotate: rotateReverse }} className="absolute -bottom-10 right-[25%] w-28 h-28 blur-[1px] opacity-80">
        <RealBean size={112} />
      </motion.div>

      {/* Grão 7 (Meio - Esquerda Meio) */}
      <motion.div style={{ y: y2, rotate }} className="absolute top-[45%] left-[10%] w-14 h-14 opacity-50">
        <RealBean size={56} />
      </motion.div>

      {/* Grão 8 (Fundo - Canto Superior Esquerdo Extremo) */}
      <motion.div style={{ y: y1, rotate: rotateReverse }} className="absolute top-[5%] left-[80%] w-12 h-12 blur-[1px] opacity-40">
        <RealBean size={48} />
      </motion.div>

       {/* Grão 9 (Frente - Bem embaixo na esquerda) */}
       <motion.div style={{ y: y1, rotate }} className="absolute bottom-[5%] left-[5%] w-20 h-20 blur-[2px]">
        <RealBean size={80} />
      </motion.div>

    </div>
  );
}