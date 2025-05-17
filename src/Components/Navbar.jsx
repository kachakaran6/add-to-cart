import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
      <Link to="/" className="text-2xl font-bold hover:text-red-500 transition">
        MyShop
      </Link>

      <div className="space-x-6 flex items-center">
        <Link
          to="/"
          className="hover:text-red-500 transition font-semibold text-lg"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="relative hover:text-red-500 transition font-semibold text-lg"
          aria-label="Cart"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 rounded-full w-6 h-6 text-xs flex items-center justify-center font-bold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
