import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../CartContext";

// Same sample products from Home for demo:
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 299,
    description:
      "A classic, comfortable T-shirt made of 100% cotton. Perfect for casual wear.",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cool Sneakers",
    price: 899,
    description:
      "Stylish sneakers with great cushioning and durable design for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    name: "I Phone",
    price: 149000,
    description: "Iphone 13 Pro Max.",
    image:
      "https://images.unsplash.com/photo-1724051017997-15c226434b57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Product = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));
  const { addToCart } = useContext(CartContext);

  if (!product) return <div className="pt-20 p-6">Product not found.</div>;

  return (
    <main className="pt-20 max-w-4xl mx-auto px-6">
      <Link to="/" className="text-blue-600 underline mb-6 inline-block">
        &larr; Back to Home
      </Link>
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg object-cover w-full md:w-1/2 h-72"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">
            ₹{product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product.id)}
            className="bg-red-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-red-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
