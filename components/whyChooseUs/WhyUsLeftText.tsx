import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCheck } from '@fortawesome/free-solid-svg-icons'

const WhyUsLeftText = () => {
  return (
    <div className='text-start flex flex-col justify-center gap-5 px-5 py-5 md:px-10 lg:pr-0 lg:w-[90%] '>
        <p className='text-[#784afe]'>Why Us</p>
        <p className='text-5xl font-bold'>We Provide You with Empowering Digital Solutions</p>
        <p className='text-gray-500 '>At The Pixel Mind, we bring innovation, creativity, and expertise to every project. Our team is dedicated to understanding your vision and transforming it into results that set you apart. With a commitment to excellence and a personalized approach, we ensure your success is our top priority. Let us help you achieve your goals with solutions that truly make an impact.</p>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faCheck} className='!w-3 !h-3 text-[#784afe] p-0.5 rounded-full border-1 border-gray-300'/>
                <p>Expert Team</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faCheck} className='!w-3 !h-3 text-[#784afe] p-0.5 rounded-full border-1 border-gray-300'/>
                <p>Fast Delivery</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faCheck} className='!w-3 !h-3 text-[#784afe] p-0.5 rounded-full border-1 border-gray-300'/>
                <p>24/7 Support</p>
            </div>
        </div>
        <div className='py-7 lg:py-5'>
            <div className='bg-black flex w-fit justify-center items-center gap-2 text-center px-6 py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET IN TOUCH
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
    </div>
  )
}

export default WhyUsLeftText