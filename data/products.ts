export interface Product {
  id: number;
  name: string;
  description: string;
  // REMOVIDO: price: number; (Conforme sua estrutura)
  category: 'cafes' | 'doces' | 'salgados';
  image: string;
  availableDays: number[]; 
}

const ALL_DAYS = [0, 1, 2, 3, 4, 5, 6];

export const products: Product[] = [
  {
    id: 1,
    name: "Croissant Peito de Peru",
    description: "Nosso carro-chefe. Massa folhada amanteigada recheada com peito de peru defumado e queijo.",
    category: 'salgados',
    image: "/products/croissant-peito-peru.jpeg",
    availableDays: ALL_DAYS
  },
  {
    id: 2,
    name: "Croissant Nutella & Morango",
    description: "A combinação perfeita. Generosa camada de Nutella com morangos frescos na massa crocante.",
    category: 'doces',
    image: "/products/croissant-nutella.png",
    availableDays: ALL_DAYS
  },
  {
    id: 3,
    name: "Empanada de Carne",
    description: "Receita clássica e campeã de vendas. Massa leve e recheio de carne temperada suculenta.",
    category: 'salgados',
    image: "/products/empanadas_de_carne.jpg",
    availableDays: ALL_DAYS
  },
  {
    id: 4,
    name: "Coxinha da Mietta",
    description: "Massa fininha e muito recheio. Crocante por fora e cremosa por dentro.",
    category: 'salgados',
    image: "/products/coxinha.jpeg",
    availableDays: ALL_DAYS
  },
  // --- AQUI ESTÁ A MUDANÇA (Café Gelado) ---
  {
    id: 5,
    name: "Iced Coffee Caramel",
    description: "Refrescante e energizante. Espresso duplo com leite gelado e borda de caramelo.",
    category: 'cafes',
    image: "/products/cafe-gelado.png", 
    availableDays: ALL_DAYS
  },
  // -----------------------------------------
  {
    id: 6,
    name: "Cappuccino Mietta",
    description: "O par perfeito para nossos salgados. Expresso, leite vaporizado e cacau.",
    category: 'cafes',
    image: "/products/capuccino.png",
    availableDays: ALL_DAYS
  }
];