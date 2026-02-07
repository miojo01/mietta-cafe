import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Mietta Café",
  description: "Café e Aconchego",
  icons: {
    icon: '/logo_mietta.jpg', // Caminho da sua logo na pasta public
    shortcut: '/logo_mietta.jpg', // Opcional, para atalhos
    apple: '/logo_mietta.jpg', // Opcional, para ícone no iPhone/iPad
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} bg-mietta-cream text-mietta-clay antialiased`}>
        <CartProvider>
          {/* REMOVI O PRELOADER E O SMOOTHSCROLL DAQUI */}
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}