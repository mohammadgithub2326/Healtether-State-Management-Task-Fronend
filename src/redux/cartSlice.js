import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
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
    },
    removeFromCart(state, action) {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        state.cartItems.splice(index, 1);
      }
    },
    incrementQty(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
