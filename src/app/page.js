"use cleint"
import Products from '../components/Products';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <main className="p-4  mt-10 ml-200 
    ">
      <h1 className="text-xl  text-white  font-bold mb-4">Shopping Cart App</h1>
      <Products />
      <Cart />
    </main>
  );
}
