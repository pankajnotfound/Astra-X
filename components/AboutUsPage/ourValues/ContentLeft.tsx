'use client';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ContentLeft = () => {
  return (
    <div className='relative w-fit flex flex-col content-center sm:p-4 gap-6 '>
      <motion.div
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} >
        <Image src='/resources/aboutus.png' alt='' width={500} height={800} className={`rounded-xl`} />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className='relative sm:w-55 sm:absolute right-0 bottom-0 md:-right-25 md:-bottom-7 lg:right-0 lg:bottom-0 sxl:-right-25 sxl:-bottom-7 rounded-md overflow-hidden shadow-[0px_0px_20px_1px_gray] '>
        <div className={` w-full flex flex-col bg-white justify-center items-center gap-4 p-8 `}>
          <Image src='/resources/coloredtrophy.png' alt='' width={80} height={150} />
          <p className='text-7xl font-bold '>120+</p>
          <p className='text-md text-gray-500 font-semibold'>Projects completed</p>
        </div>
      </motion.div>
        
    </div>
  )
}

export default ContentLeft