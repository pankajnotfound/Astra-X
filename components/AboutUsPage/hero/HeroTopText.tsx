import Image from 'next/image'
import React from 'react'

const HeroTopText = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center px-5 py-10 lg:p-10 gap-5'>
        <p className='text-[#784afe]'>Welcome to The Pixel Mind Solutions</p>
        <p className='text-5xl lg:text-6xl font-bold'>About Us</p>
        <p className='w-full lg:w-[50%] text-gray-600'>In 2014, John Carter envisioned a better way to maximize productivity and create meaningful connections. This vision led to the birth of AstraX. Today, AstraX empowers teams to seamlessly communicate with customers through personalized documents crafted in minutes, fostering stronger relationships and driving real impact.</p>
    </div>
  )
}

export default HeroTopText