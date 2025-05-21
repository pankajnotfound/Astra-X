'use client';
import { faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'

const RightCards = () => {
  return (
    <div className='w-full flex flex-col flex-wrap justify-center items-center gap-5 md:flex-row  lg:min-w-[60%] sxl:min-w-[50%] '>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-full flex flex-col justify-center items-center gap-2 px-20 py-15 rounded-lg bg-white md:w-fit lg:p-15'>
            <FontAwesomeIcon icon={faCode} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>43k+</p>
            <p className='text-gray-500'>Website’s Powering</p>
        </motion.div >
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-full flex flex-col justify-center items-center gap-2 px-20 py-15 rounded-lg bg-white md:w-fit lg:p-15'>
            <FontAwesomeIcon icon={faCode} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>43k+</p>
            <p className='text-gray-500'>Website’s Powering</p>
        </motion.div >
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-full flex flex-col justify-center items-center gap-2 px-20 py-15 rounded-lg bg-white md:w-fit lg:p-15'>
            <FontAwesomeIcon icon={faCode} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>43k+</p>
            <p className='text-gray-500'>Website’s Powering</p>
        </motion.div >
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-full flex flex-col justify-center items-center gap-2 px-20 py-15 rounded-lg bg-white md:w-fit lg:p-15'>
            <FontAwesomeIcon icon={faCode} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>43k+</p>
            <p className='text-gray-500'>Website’s Powering</p>
        </motion.div >
    </div>
  )
}

export default RightCards