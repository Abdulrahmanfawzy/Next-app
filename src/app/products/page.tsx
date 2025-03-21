import Link from 'next/link'
import React from 'react'

export default async function Products() {

    const data = await fetch(`https://fakestoreapi.com/products`);
    const result = await data.json();
    console.log(result);

    interface Product{
        title: string,
        description: string,
        category: string,
        image: string,
        price: number,
        id: number,
    }
    
  return (
    <div className='w-[85%] mt-5 mx-auto'>
        <div className='flex justify-between items-start'>
            <aside className='w-[30%] p-5 rounded border border-gray-300'>
                <Link href="/" className='block mb-2 pt-3 pb-4 border-b border-gray-300'>Home</Link>
                <Link href="products/category" className='block mb-2 pt-3 pb-4 border-b border-gray-300'>Category</Link>
                <Link href="/" className='block pt-2'>Logout</Link>
            </aside>

            <section className='w-[67%]'>
                <h2 className='text-3xl mb-5 text-[#0A9370] font-bold'>Products</h2>
                <div className="flex justify-between flex-wrap">
                    {result.map((product: Product)=><div className='w-[32%] mb-5' key={product.id}>
                        <img className='mb-3 h-48 w-full object-contain' src={product.image} alt={product.title.split(" ").slice(0,3).join(" ")} />
                        <h2 className='text-xl font-semibold'>{product.title.split(" ").slice(0,4).join(" ")}</h2>
                        <p className='my-2'>Category: <strong>{product.category}</strong></p>
                        <Link className='py-3 px-4 text-[#047857] font-semibold capitalize border block w-fit mt-3 text-sm rounded' href={`products/${product.id}`}>View details</Link>
                    </div>)}
                </div>      
            </section>
        
        </div>
    </div>
  )
}
