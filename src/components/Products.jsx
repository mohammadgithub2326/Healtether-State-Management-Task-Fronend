"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl text-black font-semibold mb-4 border-b pb-2">🛍️ Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border border-gray-200 rounded p-4 mb-4 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg text-black font-medium">{product.title}</p>
              <p className="text-sm text-gray-600 mb-1">₹{product.price}</p>
              <p className="text-sm text-gray-500 mb-2">{product.description}</p>
              <p className="text-xs text-yellow-600">Rating: {product.rating} ⭐</p>
            </div>
            <img src={product.thumbnail || "https://via.placeholder.com/100"} alt={product.title} className="w-24 h-24 object-cover rounded ml-4" />
          </div>
          <button
            onClick={() => {
              dispatch(addToCart({
                id: product.id,
                name: product.title,
                price: product.price
              }));
              toast.success(`${product.title} added to cart!`);
            }}
            className="mt-3 px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
