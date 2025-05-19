'use client';
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SliderProfile from './SliderProfile';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const TestimonialSlider = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className='flex gap-5 justify-center pt-20' >
        <Image src='/resources/quote.jpeg' alt='' width={50} height={50} className='hidden w-40 h-75 lg:flex'/> 
        <div className=' w-screen md:w-180 lg:w-120 sxl:w-200'>
            <Swiper
            modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={120}
                loop={true}
                autoplay={{
                    delay:4000
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex justify-center items-center'
            >
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <Image src='/resources/sliderquoteimage.png' alt='' width={50} height={50} className='w-20' />
                        <div className='flex justify-center items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                        </div>
                        <p className='w-full px-5 text-2xl font-bold sxl:px-25'>" Creating a landing page with clear and targeted messaging was a crucial step in increasing conversions. Together with the Polio team, we have compiled a new product page. "</p>
                        <SliderProfile image='/resources/slideravatar.png' name='PRITHVI CHAUHAN' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <Image src='/resources/sliderquoteimage.png' alt='' width={50} height={50} className='w-20' />
                        <div className='flex justify-center items-center gap-2'>
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                            <FontAwesomeIcon icon={faStar} className='text-[#784afe]' />
                        </div>
                        <p className='w-full px-5 text-2xl font-bold sxl:px-25'>" I am so impressed with the work done by DSTradeX! Their approach to smart savings and financial empowerment is truly game-changing. I've seen a significant improvement in my financial stability, and I'm excited about the future. Highly recommend! "</p>
                        <SliderProfile image='/resources/slideravatar.png' name='DEEPAK SINGH' />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
        <Image src='/resources/quote.jpeg' alt='' width={50} height={50} className=' hidden w-40 h-75 rotate-180 lg:flex'/> 
    </motion.div>
  )
}

export default TestimonialSlider