"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const productList = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Headphones', price: 1500 },
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="font-semibold">Products</h2>
      {productList.map(product => (
        <div key={product.id} className="my-2">
          <span>{product.name} - ₹{product.price}</span>
          <button 
            onClick={() => dispatch(addToCart(product))} 
            className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
