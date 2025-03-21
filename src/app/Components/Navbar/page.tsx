import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  return (
    <header className='py-8 w-[90%] mx-auto flex justify-between items-center px-10'>
        <div className="logo">
            <Image src="/next.svg" alt="forkify logo" width="150" height="200" />
        </div>
        <nav>
            <ul className='flex gap-10'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/cart">Cart</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </nav>
    </header>
  )
}
