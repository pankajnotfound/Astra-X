'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'


const RightCards = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5 p-2 '>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-fit flex justify-between items-center bg-white gap-10 rounded-xl p-5 md:w-full lg:w-fit '>
            <div className='w-fit flex flex-col gap-2'>
                <p className='text-2xl font-bold'>Brand Strategy</p>
                <p className='text-sm text-gray-600'>Craft strategies that connect with your audience</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 p-4 bg-gray-100 rounded-lg' />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-fit flex justify-between items-center bg-white gap-10 rounded-xl p-5 md:w-full lg:w-fit '>
            <div className='w-fit flex flex-col gap-2'>
                <p className='text-2xl font-bold'>Brand Strategy</p>
                <p className='text-sm text-gray-600'>Craft strategies that connect with your audience</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 p-4 bg-gray-100 rounded-lg' />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-fit flex justify-between items-center bg-white gap-10 rounded-xl p-5 md:w-full lg:w-fit '>
            <div className='w-fit flex flex-col gap-2'>
                <p className='text-2xl font-bold'>Brand Strategy</p>
                <p className='text-sm text-gray-600'>Craft strategies that connect with your audience</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 p-4 bg-gray-100 rounded-lg' />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-fit flex justify-between items-center bg-white gap-10 rounded-xl p-5 md:w-full lg:w-fit '>
            <div className='w-fit flex flex-col gap-2'>
                <p className='text-2xl font-bold'>Brand Strategy</p>
                <p className='text-sm text-gray-600'>Craft strategies that connect with your audience</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 p-4 bg-gray-100 rounded-lg' />
        </motion.div>
    </div>
  )
}

export default RightCards