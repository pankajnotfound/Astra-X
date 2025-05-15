'use client';
import Image from 'next/image'
import React from 'react'
import { useScrollValues } from '../../context/ScrollValueInfo'

const LeftSection = () => {

    const{ aboutUsImageVisible, aboutUsCardVisible } = useScrollValues();

  return (
    <div className='relative w-fit flex flex-col content-center sm:p-4 gap-6'>
        <Image src='/resources/aboutus.png' alt='' width={500} height={800} className={`rounded-xl transition-all duration-500 ease-in-out ${aboutUsImageVisible ? 'scale-100 opacity-100' : 'scale-20 opacity-0' }`} />
        <div className={`relative w-full sm:w-55 sm:absolute right-0 bottom-0 md:-right-25 md:-bottom-7 lg:right-0 lg:bottom-0 sxl:-right-25 sxl:-bottom-7 flex flex-col bg-white justify-center items-center gap-4 p-8 rounded-md shadow-[0px_0px_20px_1px_gray] transition-all duration-800 ease-in-out ${aboutUsCardVisible ? 'trabslate-y-0 opacity-100' : 'translate-y-20 opacity-0' } `}>
            <Image src='/resources/coloredtrophy.png' alt='' width={80} height={150} />
            <p className='text-7xl font-bold '>6248</p>
            <p className='text-md text-gray-500 font-semibold'>Projects completed</p>
        </div>
    </div>
  )
}

export default LeftSection