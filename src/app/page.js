"use client";
import Products from '../components/Products';
import Cart from '../components/Cart';
import CartHydration from '../components/CartHydration';


export default function Home() {
  return (
 <main className="min-h-screen bg-gray-900 p-6 max-w-100% mx-auto mt-10 text-white">            <CartHydration />

      <h1 className="text-3xl text-white font-bold mb-6 text-center">
        🛒 Shopping Cart App
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Products />
        <Cart />
      </div>
    </main>
  );
}
