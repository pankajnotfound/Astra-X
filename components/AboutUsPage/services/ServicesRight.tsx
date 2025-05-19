'use client';
import { faMobile, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const ServicesRight = () => {
  return (
    <div className='relative w-fit flex flex-col content-center sm:p-4 gap-6 '>
      <motion.div
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} >
        <Image src='/resources/aboutus.png' alt='' width={500} height={800} className={`rounded-xl`} />
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className='absolute left-10 bottom-10 md:left-20 lg:bottom-15 rounded-md overflow-hidden '>
            <div className={` w-fit flex bg-linear-to-b from-[#784afe] to-white justify-center items-center gap-4 p-2 text-white `}>
                <FontAwesomeIcon icon={faMobileAlt} className='!w-10 !h-10' />
                <div className='w-fit flex flex-col gap-1'>
                    <p className='text-4xl font-bold '>250M+</p>
                    <p className='text-md text-gray-500 font-semibold'>App Download</p>
                </div>
            </div>
        </motion.div>
      </motion.div>
      
        
    </div>
  )
}

export default ServicesRight