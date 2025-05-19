'use client';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const WhyUsRightImages = () => {
  return (
    <div className='flex h-fit relative flex-col w-full gap-5 px-3 md:px-10 lg:justify-center lg:py-20 '>
        <motion.div
          className='z-10 w-full h-full'
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image src='/resources/whyUs.png' alt='' width={200} height={200} className=' w-full rounded-lg md:w-[55%] lg:w-[80%] sxl:w-[60%] '/>
        </motion.div>
        <motion.div
          className='z-5 right-35 -bottom-40 w-full overflow-hidden rounded-lg md:w-[45%] md:absolute lg:bottom-0 lg:right-10 sxl:-bottom-10 sxl:right-25'
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image src='/resources/aboutus.png' alt='' width={200} height={200} className='w-full'/>
        </motion.div>
        
    </div>
  )
}

export default WhyUsRightImages