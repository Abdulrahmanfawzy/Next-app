"use client";

import { useCart } from "@/context/CartContext";



export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b p-2">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain mr-4" />
                  <span>{item.title}</span>
                </div>
                <div>
                  <span className="mr-4">${item.price} x {item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="bg-gray-500 text-white px-4 py-2 mt-4 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
