"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  return (
    <div className="w-[85%] mt-5 mx-auto">
      <h2 className="text-3xl mb-5 text-[#0A9370] font-bold">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 mb-3 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-300 text-black px-3 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-300 text-black px-3 py-1 rounded-r"
                >
                  +
                </button>
              </div>

              <p className="text-lg font-semibold">${item.price * item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="text-xl font-bold mt-5">Total: ${totalPrice.toFixed(2)}</h3>

          <button onClick={clearCart} className="bg-gray-800 text-white px-5 py-2 mt-3 rounded">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
