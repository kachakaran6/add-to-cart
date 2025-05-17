import React from "react";
import ProductCard from "../Components/ProductCard.jsx";

// Sample products data
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cool Sneakers",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "I Phone",
    price: 149000.0,
    description: "I Phone",
    image:
      "https://images.unsplash.com/photo-1724051017997-15c226434b57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => (
  <main className="pt-20 max-w-6xl mx-auto px-6">
    <h1 className="text-3xl font-bold mb-8 text-gray-900">Featured Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  </main>
);

export default Home;
