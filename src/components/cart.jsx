"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl text-black font-semibold mb-4 border-b pb-2">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="mb-4 text-black">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm">₹{item.price * item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
  onClick={() => {
    dispatch(decrementQty(item.id));
    toast.error(`${item.name} - 1 unit removed from cart.`);
  }}
  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
>
  -
</button>

<span className='font-semibold'>{item.quantity}</span>

<button
  onClick={() => {
    dispatch(incrementQty(item.id));
    toast.success(`${item.name} - 1 unit added to cart.`);
  }}
  className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
>
  +
</button>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.error(`${item.name} removed from cart.`);
                  }}
                  className="ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
