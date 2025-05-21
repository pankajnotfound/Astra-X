'use client';
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ServicesCards = () => {
  return (
    <div className='w-fit flex flex-col flex-wrap justify-center items-center gap-4 pt-10 md:flex-row   '>
        <motion.div 
        initial={{ opacity: 0, y:100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}        
        className='w-fit border-1 border-gray-200 rounded-xl md:max-w-[45%] lg:max-w-[30%] '>
            <div className='w-fit flex flex-col justify-center items-start p-8 gap-4 text-start  transition-all duration-300 ease-in-out hover:shadow-lg '>
                <Image src='/resources/serviceCard.png' alt='' width={1000} height={1000} className='!w-20' />
                <p className='text-[1.6rem] font-bold'>Web Development</p>
                <p className='text-gray-600'>Create powerful, responsive, and scalable websites that engage users and drive business growth. We build custom solutions tailored to your specific needs.</p>
                <Link href='' className='w-fit flex justify-center items-center gap-2'>
                    <p className='text-[#784afe] text-sm font-bold '>LEARN MORE</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}  
        className='w-fit border-1 border-gray-200 rounded-xl md:max-w-[45%] lg:max-w-[30%] '>
        <div className='w-fit flex flex-col justify-center items-start p-8 gap-4 text-start rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg '>
            <Image src='/resources/serviceCard.png' alt='' width={1000} height={1000} className='!w-20' />
            <p className='text-[1.6rem] font-bold'>App Development</p>
            <p className='text-gray-600'>Transform your ideas into powerful mobile applications that engage users and deliver exceptional experiences across all platforms.</p>
            <Link href='' className='w-fit flex justify-center items-center gap-2'>
                <p className='text-[#784afe] text-sm font-bold '>LEARN MORE</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
        </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}  
        className='w-fit border-1 border-gray-200 rounded-xl md:max-w-[45%] lg:max-w-[30%] '>
            <div className='w-fit flex flex-col justify-center items-start p-8 gap-4 text-start rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg '>            <Image src='/resources/serviceCard.png' alt='' width={1000} height={1000} className='!w-20' />
            <p className='text-[1.6rem] font-bold'>UI/UX Design</p>
            <p className='text-gray-600'>Create intuitive and engaging user experiences with our expert UI/UX design services. We craft designs that delight users and drive conversions.</p>
            <Link href='' className='w-fit flex justify-center items-center gap-2'>
                <p className='text-[#784afe] text-sm font-bold '>LEARN MORE</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}  
        className='w-fit border-1 border-gray-200 rounded-xl md:max-w-[45%] lg:max-w-[30%] '>
            <div className='w-fit flex flex-col justify-center items-start p-8 gap-4 text-start rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg '>            <Image src='/resources/serviceCard.png' alt='' width={1000} height={1000} className='!w-20' />
            <p className='text-[1.6rem] font-bold'>SEO Services</p>
            <p className='text-gray-600'>Boost your online visibility and drive organic traffic with our comprehensive SEO services. We implement data-driven strategies to improve your search rankings.</p>
            <Link href='' className='w-fit flex justify-center items-center gap-2'>
                <p className='text-[#784afe] text-sm font-bold '>LEARN MORE</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}  
        className='w-fit border-1 border-gray-200 rounded-xl md:max-w-[45%] lg:max-w-[30%] '>
        <div className='w-fit flex flex-col justify-center items-start p-8 gap-4 text-start rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg '>
            <Image src='/resources/serviceCard.png' alt='' width={1000} height={1000} className='!w-20' />
            <p className='text-[1.6rem] font-bold'>Brand Strategy</p>
            <p className='text-gray-600'>Lay a strong foundation for your business with branding strategies that communicate your vision and connect with your audience.</p>
            <Link href='' className='w-fit flex justify-center items-center gap-2'>
                <p className='text-[#784afe] text-sm font-bold '>LEARN MORE</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}  
        className='w-fit border-1 border-gray-200 rounded-xl md:max-w-[45%] lg:max-w-[30%] '>
        <div className='w-fit flex flex-col justify-center items-start p-8 gap-4 text-start rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg '>
            <Image src='/resources/serviceCard.png' alt='' width={1000} height={1000} className='!w-20' />
            <p className='text-[1.6rem] font-bold'>Brand Strategy</p>
            <p className='text-gray-600'>Lay a strong foundation for your business with branding strategies that communicate your vision and connect with your audience.</p>
            <Link href='' className='w-fit flex justify-center items-center gap-2'>
                <p className='text-[#784afe] text-sm font-bold '>LEARN MORE</p>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
            </div>
        </motion.div>
    </div>
  )
}

export default ServicesCards