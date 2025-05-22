'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="mt-4 ">
      <h2 className="font-semibold ">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p  >No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="my-2">
            <span>{item.name} - ₹{item.price * item.quantity}</span>
            <div className="inline-flex ml-2">
              <button
                onClick={() => dispatch(decrementQty(item.id))}
                className="px-2  bg-grey"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQty(item.id))}
                className="px-2 bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
