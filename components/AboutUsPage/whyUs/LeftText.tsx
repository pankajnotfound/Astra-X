import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

const LeftText = () => {
  return (
    <div className='w-full flex flex-col gap-8'>
        <p className=' text-[#784afe] '>Work with us</p>
        <p className=' text-5xl/13 font-bold'>Why Choose Us to Drive Your Business Forward?</p>
        <p className='text-gray-600'>We bring fresh ideas and creative strategies to solve your unique challenges, ensuring your business stands out in the market. Our team of experts is passionate, skilled, and committed to delivering high-quality results that exceed expectations.</p>
        <div className='w-full flex flex-wrap items-start gap-4 text-sm py-5'>
            <div className='w-[45%] flex gap-2 justify-start items-center '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p>Affordable & Scalable</p>
            </div>
            <div className='w-[45%] flex gap-2 justify-start items-center '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p>Affordable & Scalable</p>
            </div>
            <div className='w-[45%] flex gap-2 justify-start items-center '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p>Affordable & Scalable</p>
            </div>
            <div className='w-[45%] flex gap-2 justify-start items-center '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p>Affordable & Scalable</p>
            </div>
            <div className='w-[45%] flex gap-2 justify-start items-center '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p>Affordable & Scalable</p>
            </div>
            <div className='w-[45%] flex gap-2 justify-start items-center '>
                <FontAwesomeIcon icon={faCheck} className=' !w-3 !h-3 text-[#784afe] p-1 rounded-full border-1 border-gray-400 ' />
                <p>Affordable & Scalable</p>
            </div>
        </div>
        <div className='bg-black w-fit px-5 flex justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
            GET IN TOUCH
            <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
        </div>
    </div>
  )
}

export default LeftText