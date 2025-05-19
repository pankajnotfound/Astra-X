'use client';
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const BottomLeftCards = () => {
  return (
    <div className='w-full flex flex-col gap-5 lg:flex-row'>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ y: -5}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className='flex flex-col w-full lg:w-80 p-5 py-11 justify-center items-center bg-[#784afe] text-white rounded-lg gap-10'>
        <div>
            <div className='flex flex-col gap-4 justify-center items-center' >
                <FontAwesomeIcon icon={faMagnifyingGlass} className='!w-10 !h-10 p-4 bg-gray-800 rounded-full' />
                <p className='text-3xl font-bold'>SEO Services</p>
                <div className='w-fit'>
                    <p>Optimizing your digital presence to improve search rankings, drive organic traffic, and increase online visibility.</p>
                </div>
            </div>
        </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ y: -5}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className='flex flex-col w-full relative rounded-lg bg-white '>
            <div>
                <div className='text-start flex flex-col p-8 pr-0 gap-2'>
                    <p className='text-3xl font-bold'>App Development</p>
                    <p className='w-[80%] '>Creating innovative mobile applications that provide seamless user experiences across all platforms and devices.</p>
                </div>
                <div className='flex justify-between '>
                    <div className='m-8 px-3 py-3.5 rounded-full border-1 border-gray-400'>
                        <FontAwesomeIcon icon={faArrowRight} className='w-7 h-7' />
                    </div>
                    <Image src='/resources/expertise1.png' alt='' width={200} height={200} className='absolute hidden md:flex pt-20 right-0 bottom-0 w-120' />
                </div>
            </div>
        </motion.div>
        
    </div>
  )
}

export default BottomLeftCards