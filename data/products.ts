// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  // REMOVIDO: price: number;
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
    // Preço removido
    category: 'salgados',
    // Caminho local
    image: "/products/croissant-peito-peru.jpeg",
    availableDays: ALL_DAYS
  },
  {
    id: 2,
    name: "Croissant Nutella & Morango",
    description: "A combinação perfeita. Generosa camada de Nutella com morangos frescos na massa crocante.",
    // Preço removido
    category: 'doces',
    // Caminho local
    image: "/products/croissant-nutella.png",
    availableDays: ALL_DAYS
  },
  {
    id: 3,
    name: "Empanada de Carne",
    description: "Receita clássica e campeã de vendas. Massa leve e recheio de carne temperada suculenta.",
    // Preço removido
    category: 'salgados',
    // Caminho local
    image: "/products/empanadas_de_carne.jpg",
    availableDays: ALL_DAYS
  },
  {
    id: 4,
    name: "Coxinha da Mietta",
    description: "Massa fininha e muito recheio. Crocante por fora e cremosa por dentro. Impossível comer uma só.",
    // Preço removido
    category: 'salgados',
    // Caminho local
    image: "/products/coxinha.jpeg",
    availableDays: ALL_DAYS
  },
  // Usei a imagem do croissant doce como placeholder pro bolo, já que não vi imagem de bolo na sua lista
  {
    id: 5,
    name: "Bolo do Dia",
    description: "Nossa especialidade rotativa. Cada dia um sabor caseiro diferente para te surpreender.",
    // Preço removido
    category: 'doces',
    image: "/products/croissant-nutella.png", 
    availableDays: ALL_DAYS
  },
  {
    id: 6,
    name: "Cappuccino Mietta",
    description: "O par perfeito para nossos salgados. Expresso, leite vaporizado e cacau.",
    // Preço removido
    category: 'cafes',
    // Caminho local
    image: "/products/capuccino.png",
    availableDays: ALL_DAYS
  }
];