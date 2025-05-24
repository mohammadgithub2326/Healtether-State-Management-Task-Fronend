"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "../redux/cartSlice";

const CartHydration = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart =localStorage.getItem("cartItems")
    if (savedCart) {
      dispatch(setCartItems(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  return null;
};

export default CartHydration;
