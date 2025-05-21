'use client';
import Image from 'next/image'
import React from 'react'
import { useScrollValues } from '../../../data/ScrollValueInfo';

const BackerImages = () => {

    const { heroImageVisible } = useScrollValues();
    
  return (
    <div className='flex justify-center items-center w-fit h-fit gap-4'>
        <Image src='/resources/google.png' alt='Google' width={80} height={30} className={`${heroImageVisible ? 'opacity-100' : 'opacity-0'} hover:-translate-y-1 transition-all ease-in-out duration-400`} />
        <Image src='/resources/yahoo.png' alt='Google' width={80} height={30} className={`${heroImageVisible ? 'opacity-100' : 'opacity-0'} hover:-translate-y-1 transition-all ease-in-out duration-400 delay-200`} />
        <Image src='/resources/netflix.png' alt='Google' width={80} height={30} className={`${heroImageVisible ? 'opacity-100' : 'opacity-0'} hover:-translate-y-1 transition-all ease-in-out duration-400 delay-400`} />
    </div>
  )
}

export default BackerImages