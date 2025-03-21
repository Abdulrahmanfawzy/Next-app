import Image from 'next/image'
import React from 'react'
import FacebookLoginButton from './Components/FacebookLoginButton';


export default function Home() {
  return (
    <div>
      <img src="/clothes.jpg" className='object-cover w-screen h-screen' alt='home page image' />      
    </div>
  )
}
