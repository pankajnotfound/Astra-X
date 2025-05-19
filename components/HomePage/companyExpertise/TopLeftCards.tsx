'use client';
import { faArrowRight, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const TopLeftCards = () => {
  return (
    <div className='flex w-full flex-col gap-5 lg:flex-row'>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ y: -5}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} >
            <div className=' w-fit h-full relative rounded-lg bg-white transition-all duration-500'>
                <div className='text-start flex flex-col p-8 pr-0 gap-2'>
                    <p className='text-3xl font-bold'>Web Development</p>
                    <p className='w-[80%] '>Building responsive, scalable, and user-friendly websites that drive engagement and deliver results. From simple landing pages to complex web applications.</p>
                </div>
                <div className=' flex justify-between '>
                    <div className='m-8 px-3 py-3.5 rounded-full border-1 border-gray-400'>
                        <FontAwesomeIcon icon={faArrowRight} className='w-7 h-7' />
                    </div>
                    <Image src='/resources/expertise1.png' alt='' width={200} height={200} className='absolute hidden md:flex right-0 bottom-0 w-120 '/>
                </div>
            </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ y: -5}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className='flex flex-col w-full lg:w-80 p-5 py-11 justify-center items-center bg-gray-800 text-white rounded-lg gap-10'>
            <div className='flex flex-col gap-4 justify-center items-center' >
                <FontAwesomeIcon icon={faPaintBrush} className='!w-10 !h-10 p-4 bg-[#784afe] rounded-full' />
                <p className='text-3xl font-bold'>UI/UX Design</p>
                <div className='w-fit'>
                    <p>Designing intuitive and engaging user interfaces that enhance user experience and drive conversion.</p>
                </div>
            </div>
        </motion.div>
        
    </div>
  )
}

export default TopLeftCards