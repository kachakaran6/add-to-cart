import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

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

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const cartItems = Object.entries(cart).map(([productId, qty]) => {
    const product = products.find((p) => p.id === Number(productId));
    return { ...product, quantity: qty };
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return (
      <main className="pt-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Your Cart is Empty</h2>
        <Link
          to="/"
          className="text-blue-600 underline font-semibold hover:text-blue-800"
        >
          Go Back to Shopping
        </Link>
      </main>
    );

  return (
    <main className="pt-20 max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="space-y-6">
        {cartItems.map(({ id, name, price, image, quantity }) => (
          <div
            key={id}
            className="flex items-center bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-md object-cover mr-6"
            />
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-700"> ₹{price.toFixed(2)}</p>
              <p className="text-gray-900 font-bold">Quantity: {quantity}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => addToCart(id)}
                className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition"
                aria-label={`Add one more ${name}`}
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(id)}
                className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition"
                aria-label={`Remove one ${name}`}
              >
                –
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right font-bold text-xl">
        Total: ₹{totalPrice.toFixed(2)}
      </div>
    </main>
  );
};

export default Cart;
