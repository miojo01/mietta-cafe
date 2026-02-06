import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection"; // Novo
import Testimonials from "@/components/Testimonials"; // Novo
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* A história vem logo depois do impacto visual para conectar emocionalmente */}
      <AboutSection />
      
      {/* Agora que ele já gosta da marca, mostramos os produtos */}
      <MenuSection />
      
      {/* E fechamos com prova social para validar a decisão */}
      <Testimonials />
      <LocationSection />
    </>
  );
}