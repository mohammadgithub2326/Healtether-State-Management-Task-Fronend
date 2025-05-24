"use client"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.cartItems[index].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
    removeFromCart(state, action) {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.cartItems.splice(index, 1);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
    incrementQty(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
    decrementQty(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    },
    setCartItems: (state, action) => {
  state.cartItems = action.payload;
}

  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty,setCartItems, } = cartSlice.actions;
export default cartSlice.reducer;
