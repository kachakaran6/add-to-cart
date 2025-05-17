import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col">
    <img
      src={product.image}
      alt={product.name}
      className="rounded-md object-cover mb-4 h-48 w-full"
    />
    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
    <p className="text-gray-700 font-medium mb-4">
      ₹{product.price.toFixed(2)}
    </p>
    <Link
      to={`/product/${product.id}`}
      className="mt-auto bg-red-600 text-white py-2 rounded-md text-center font-semibold hover:bg-red-700 transition"
    >
      View Details
    </Link>
  </div>
);

export default ProductCard;
