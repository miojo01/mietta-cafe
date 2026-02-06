'use client';
import { Instagram, MessageCircle, Heart, Bike } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mietta-clay text-mietta-cream pt-10 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout simplificado: Esquerda (Marca) e Direita (Social) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* MARCA */}
          <div className="flex items-center gap-4">
             <img src="/logo2.png" alt="Mietta" className="w-14 h-14 rounded-full border border-white/10 p-0.5 object-cover" />
             <div>
                <span className="font-serif font-bold text-2xl block leading-none">Mietta Café</span>
                <span className="text-sm opacity-60 font-light mt-1 block">Cafés Especiais & Doces Artesanais</span>
             </div>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-6">
             <span className="text-sm font-bold uppercase tracking-widest opacity-60 hidden md:block">Peça ou Siga</span>
             
             <div className="flex gap-4">
               {/* Instagram */}
               <a 
                 href="https://instagram.com" 
                 target="_blank"
                 className="group relative w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] !outline-none !border-none !ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none"
                 aria-label="Instagram"
               >
                 <Instagram size={22} className="group-hover:text-white text-mietta-cream transition-colors duration-300" />
               </a>
               
               {/* WhatsApp */}
               <a 
                 href="#" 
                 target="_blank"
                 className="group relative w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:bg-[#25D366] !outline-none !border-none !ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none"
                 aria-label="WhatsApp"
               >
                 <MessageCircle size={22} className="group-hover:text-white text-mietta-cream transition-colors duration-300" />
               </a>

               {/* Delivery Much (Novo) */}
               <a 
                 href="https://deliverymuch.com.br" 
                 target="_blank"
                 // Usando a cor vermelha/rosa característica do Delivery Much (#F52C4F)
                 className="group relative w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:bg-[#F52C4F] !outline-none !border-none !ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none"
                 aria-label="Delivery Much"
               >
                 <Bike size={22} className="group-hover:text-white text-mietta-cream transition-colors duration-300" />
               </a>
             </div>
          </div>

        </div>

        {/* Rodapé Final */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40">
           <p>© {currentYear} Mietta Café. Todos os direitos reservados.</p>
           <div className="flex items-center gap-1">
             <span>Feito com</span>
             <Heart size={10} className="fill-current text-red-500" />
             <span>em Santa Catarina.</span>
           </div>
        </div>

      </div>
    </footer>
  );
}