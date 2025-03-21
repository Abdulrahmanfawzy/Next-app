"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get("category") || "";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [selectedCategory]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat} className="mb-2">
              <Link href={`/products/category?category=${cat}`}>
                <span
                  className={`block p-2 rounded cursor-pointer ${
                    selectedCategory === cat ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {cat}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Products Section */}
      <main className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4 capitalize">
          {selectedCategory ? `${selectedCategory} Products` : "Select a category"}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow-md">
                <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-2" />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <div className="text-center">
                  <Link href={`${product.id}`}><button className="text-gray-600 cursor-pointer border-2 p-2 inline-block mt-3 ">View details</button></Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products available</p>
          )}
        </div>
      </main>
    </div>
  );
}
