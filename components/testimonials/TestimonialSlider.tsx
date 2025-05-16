'use client';
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SliderProfile from './SliderProfile';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TestimonialSlider = () => {
  return (
    <div className='flex gap-5 justify-center' >
        <Image src='/resources/quote.jpeg' alt='' width={50} height={50} className='hidden w-40 h-75 lg:flex'/> 
        <div className=' w-120 md:w-180 lg:w-120 sxl:w-200'>
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
                        <p className='w-full px-5 text-2xl font-bold sxl:px-25'>" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</p>
                        <SliderProfile image='/resources/slideravatar.png' name='KRISTIN WATSON' address='Head Of Idea, Treve LLC ' />
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
                        <p className='w-full px-5 text-2xl font-bold sxl:px-25'>" Unrivaled brilliance surpassing all others. Highly recommended for novices and experts alike. We will hire them for sure. "</p>
                        <SliderProfile image='/resources/slideravatar.png' name='KRISTIN WATSON' address='Head Of Idea, Treve LLC ' />
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
        <Image src='/resources/quote.jpeg' alt='' width={50} height={50} className=' hidden w-40 h-75 rotate-180 lg:flex'/> 
    </div>
  )
}

export default TestimonialSlider