import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCheck } from '@fortawesome/free-solid-svg-icons'

const WhyUsLeftText = () => {
  return (
    <div className='text-start flex flex-col justify-center gap-5 px-5 py-5 md:px-10 lg:pr-0 lg:w-[90%] '>
        <p className='text-[#784afe]'>Why choose us</p>
        <p className='text-5xl font-bold'>A systematic approach to digital marketing</p>
        <p className='text-gray-500 '>We offer a wide range of digital marketing services that cater to businesses of all sizes. A forward-thinking and clever approach to maintaining sales tax compliance amidst the digital era.</p>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faCheck} className='!w-3 !h-3 text-[#784afe] p-0.5 rounded-full border-1 border-gray-300'/>
                <p>Run loyalty program to reward customers</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faCheck} className='!w-3 !h-3 text-[#784afe] p-0.5 rounded-full border-1 border-gray-300'/>
                <p>Keep notes on valuable customer preferences</p>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <FontAwesomeIcon icon={faCheck} className='!w-3 !h-3 text-[#784afe] p-0.5 rounded-full border-1 border-gray-300'/>
                <p>24/7 online support available</p>
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