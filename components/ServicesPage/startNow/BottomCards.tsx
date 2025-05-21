'use client';
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'

const BottomCards = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 lg:flex-row'>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className=' w-full flex p-5 rounded-xl border-1 border-gray-300 gap-3 md:gap-10'>
            <div>
                <Image src='/resources/serviceStartCard.png' alt='' width={1000} height={1000} className='w-25' />
            </div>
            <div className=' flex flex-col justify-center items-start gap-2'>
                <p className='text-2xl font-bold'>Head office</p>
                <div className='flex justify-center items-start gap-1'>
                    <FontAwesomeIcon icon={faLocationDot} className='!w-5 !h-5 p-2 text-gray-300' />
                    <p className='text-gray-800 self-center'>123, Main Street, SpringField, Illinois, 62701, USA</p>
                </div>
                <div className='flex justify-center items-start gap-1'>
                    <FontAwesomeIcon icon={faEnvelope} className='!w-5 !h-5 p-2 text-gray-300' />
                    <p className='text-gray-800 self-center'>support@mail.com</p>
                </div>
                <div className='flex justify-center items-start gap-1'>
                    <FontAwesomeIcon icon={faPhone} className='!w-5 !h-5 p-2 text-gray-300' />
                    <p className='text-gray-800 self-center'>Contact Number</p>
                </div>
            </div>
        </motion.div >
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className=' w-full flex p-5 rounded-xl border-1 border-gray-300 gap-3 md:gap-10'>
            <div>
                <Image src='/resources/serviceStartCard.png' alt='' width={1000} height={1000} className='w-25' />
            </div>
            <div className=' flex flex-col justify-center items-start gap-2'>
                <p className='text-2xl font-bold'>Production Branch</p>
                <div className='flex justify-center items-start gap-1'>
                    <FontAwesomeIcon icon={faLocationDot} className='!w-5 !h-5 p-2 text-gray-300' />
                    <p className='text-gray-800 self-center'>123, Main Street, SpringField, Illinois, 62701, USA</p>
                </div>
                <div className='flex justify-center items-start gap-1'>
                    <FontAwesomeIcon icon={faEnvelope} className='!w-5 !h-5 p-2 text-gray-300' />
                    <p className='text-gray-800 self-center'>support@mail.com</p>
                </div>
                <div className='flex justify-center items-start gap-1'>
                    <FontAwesomeIcon icon={faPhone} className='!w-5 !h-5 p-2 text-gray-300' />
                    <p className='text-gray-800 self-center'>Contact Number</p>
                </div>
            </div>
        </motion.div >
    </div>
  )
}

export default BottomCards