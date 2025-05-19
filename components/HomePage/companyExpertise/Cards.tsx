'use client';
import Image from 'next/image'
import React from 'react'
import TopLeftCards from './TopLeftCards'
import BottomLeftCards from './BottomLeftCards'
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div className=' w-full flex flex-col justify-center items-center gap-5 pt-15 p-10 text-wrap lg:flex-row'>
        <div className='flex flex-col gap-5'>
            <TopLeftCards />
            <BottomLeftCards />
        </div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ y: -5}}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} >
          {/* <div className='relative w-full p-10 lg:w-fit lg:p-0 rounded-lg flex flex-col overflow-hidden justify-center items-center bg-white '>
            <Image src='/resources/expertise4.png' alt='' width={200} height={200} className='hidden h-162 w-80 lg:flex' />
            <p className='flex justify-center w-full text-3xl font-bold bottom-10 lg:w-50 lg:absolute'>Social Media Marketing</p>
          </div> */}
        </motion.div>
        
    </div>
  )
}

export default Cards