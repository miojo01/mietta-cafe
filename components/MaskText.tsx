'use client';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export function MaskText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: { 
        duration: 0.75, 
        ease: [0.33, 1, 0.68, 1], 
        delay: 0.075 * i 
      }
    })
  };

  return (
    <div ref={body} className={`overflow-hidden ${className}`}>
      <motion.div
        custom={1}
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
}