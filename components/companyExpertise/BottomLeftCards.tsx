'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const BottomLeftCards = () => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row'>
        <motion.div
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        whileHover={{ y: -5}}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} >
            <div className='flex flex-col w-full lg:w-80 p-5 justify-center items-center bg-[#784afe] text-white rounded-lg gap-0'>
            <div className='w-fit'>
                <Image src='/resources/expertise2.png' alt='' width={200} height={200} className='w-60' />
            </div>
            <p className='text-4xl font-bold'>Game Development</p>
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
                <div className='text-start flex flex-col p-8 pr-0'>
                    <p className='text-3xl font-bold'>Brand Strategy</p>
                    <p className='w-[80%] '>We offer a wide range of digital marketing services that cater to business of all sizes</p>
                </div>
                <div className='flex justify-between '>
                    <div className='m-8 px-3 py-3.5 rounded-full border-1 border-gray-400'>
                        <FontAwesomeIcon icon={faArrowRight} className='w-7 h-7' />
                    </div>
                    <Image src='/resources/expertise1.png' alt='' width={200} height={200} className='absolute hidden md:flex lg:absolute pt-20 right-0 bottom-0 w-120 '/>
                </div>
            </div>
        </motion.div>
        
    </div>
  )
}

export default BottomLeftCards