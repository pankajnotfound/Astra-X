'use client';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const HeroRight = () => {
  return (
    <motion.div 
    initial = {{scale:0 , opacity:0}}  
    whileInView={{scale:1 , opacity:1}}  
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className='w-full'>
        <Image src='/resources/serviceshero.png' alt='' width={1000} height={1000} className='w-full' />
    </motion.div>
  )
}

export default HeroRight