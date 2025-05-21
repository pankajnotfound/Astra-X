'use client';
import { faCheck, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'

const LeftText = () => {
  return (
    <div className='w-full flex flex-col gap-8 md:px-12'>
        <p className=' text-[#784afe] '>Key benefits</p>
        <p className=' text-5xl/13 font-bold'>Effective Tools to Drive Your Sales.</p>
        <p className='text-gray-600'>Leverage data insights to refine pricing strategies, uncover revenue opportunities, and maximize growth potential.</p>
        <div className='w-full flex flex-col flex-wrap items-start gap-4 text-sm py-5 '>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}  
            className='w-fit flex gap-4 justify-start items-center bg-white rounded-md px-5 py-4 '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p className='text-[1rem] '>Expert Team</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-fit flex gap-4 justify-start items-center bg-white rounded-md px-5 py-4 '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p className='text-[1rem] '>Fast Delivery</p>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-fit flex gap-4 justify-start items-center bg-white rounded-md px-5 py-4 '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p className='text-[1rem] '>24/7 Support</p>
            </motion.div>
        </div>
    </div>
  )
}

export default LeftText