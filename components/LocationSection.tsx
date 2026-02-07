'use client';
import { MapPin, Clock, Navigation, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LocationSection() {
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    let isOpen = false;
    // Seg-Sex: 13h-20h | Sáb: 14h-19h
    if (day >= 1 && day <= 5) {
      if (hour >= 13 && hour < 20) isOpen = true;
    } else if (day === 6) {
      if (hour >= 14 && hour < 19) isOpen = true;
    }
    setIsOpenNow(isOpen);
  }, []);

  return (
    <section id="localizacao" className="relative py-24 bg-mietta-clay text-mietta-cream overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 p-2 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-0">
            
            {/* LADO ESQUERDO: MAPA COLORIDO */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full rounded-[2.5rem] overflow-hidden">
                 
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1064.5366019225517!2d-50.39434321403857!3d-26.175198663172186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e713439a51730f%3A0xaa44f5efedc92544!2sMietta%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1770491699695!5m2!1spt-BR!2sbr" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, minHeight: '400px' }} 
                   allowFullScreen 
                   loading="lazy" 
                   // REMOVI 'grayscale' e 'opacity', agora é mapa full color
                   className="transition-all duration-700 w-full h-full"
                 />

                 {/* Status Flutuante */}
                 <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg z-10 border border-gray-200">
                    {isOpenNow ? (
                      <>
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-green-700 font-bold text-sm">Aberto agora</span>
                      </>
                    ) : (
                      <>
                         <XCircle size={16} className="text-red-500" />
                         <span className="text-red-700 font-bold text-sm">Fechado agora</span>
                      </>
                    )}
                 </div>
            </div>

            {/* LADO DIREITO: INFOS */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 space-y-8">
              <div>
                <span className="text-mietta-accent font-bold uppercase tracking-widest text-sm mb-2 block">Visite-nos</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Rua Senador Felipe Schmidt, 130</h2>
                <p className="text-mietta-cream/60 mt-2">Centro - Canoinhas/SC</p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  {/* ÍCONE COM FUNDO CLARO (bg-mietta-cream) E ÍCONE ESCURO (text-mietta-clay) */}
                  <div className="w-12 h-12 rounded-full bg-mietta-cream flex items-center justify-center shrink-0 text-mietta-clay shadow-md">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Horários</h4>
                    <p className="text-sm opacity-80">Seg - Sex: 13h às 20h</p>
                    <p className="text-sm opacity-80">Sábado: 14h às 19h</p>
                    <p className="text-sm text-mietta-accent mt-1 font-bold">Domingo: Fechado</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-mietta-cream flex items-center justify-center shrink-0 text-mietta-clay shadow-md">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">Localização</h4>
                    <p className="text-sm opacity-80 mb-4">
                      Venha nos fazer uma visita.<br/>
                      Ambiente climatizado e pet friendly.
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/Mietta+Caf%C3%A9/@-26.1751987,-50.3943432,19z/data=!4m6!3m5!1s0x94e713439a51730f:0xaa44f5efedc92544!8m2!3d-26.175297!4d-50.3938281!16s%2Fg%2F11thng0n74?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-mietta-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-mietta-accent transition-colors shadow-lg"
                    >
                      <Navigation size={16} />
                      Como chegar
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}