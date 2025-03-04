import React from 'react'
import data from '../_lib/data'
import Link from 'next/link';

const HeroSection = () => {
    const jewelry = data[6];
    
  return (
    <div className='flex  items-center p-6  justify-evenly flex-col md:flex-row'>
        <div className='w-[100%] md:w-[50%] flex flex-col gap-2 items-start'>
            <h1 className='text-6xl font-extrabold'>{jewelry.title}</h1>
            <h2 className='text-4xl font-bold'>{jewelry.description}</h2>
            <Link href={`/productdetails/${jewelry.id}`} className='bg-black text-white text-3xl px-4 py-2 rounded-lg font-bold'>Shop Now</Link>
        </div>
      <img src={jewelry.image} alt="" />
    </div>
  )
}

export default HeroSection
