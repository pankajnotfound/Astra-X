import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OurServices = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-4 p-4 rounded-lg bg-gray-100'>
        <p className='text-2xl font-semibold'>Our Services</p>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-center items-center group gap-50 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>Content Creation</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </div>
            <div className='flex justify-center items-center group gap-50 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>Content Creation</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </div>
            <div className='flex justify-center items-center group gap-50 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>Content Creation</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </div>
            <div className='flex justify-center items-center group gap-50 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>Content Creation</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </div>
        </div>
    </div>
  )
}

export default OurServices