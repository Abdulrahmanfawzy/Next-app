"use client";

import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product{
  title: string,
  description: string,
  category: string,
  image: string,
  price: number,
  id: number,
}

export default function Details() {
    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);
  // const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
    
    
  return (
    <div className="flex w-[90%] mx-auto justify-between items-center">
      <div className="w-[45%]">
        <img className="w-[50%] mx-auto text-center" src={product.image} alt={product.title} />
      </div>
      <div className="w-[50%] text-center">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <h2 className="text-3xl font-bold my-3 text-green-600">${product.price}</h2>
        <section>{product.description}</section>
        <button onClick={() => addToCart(product)} className="w-fit px-5 cursor-pointer py-3 border mt-3 text-gray-600 block font-semibold">Add To Cart</button>
      </div>
    </div>
  )
}
