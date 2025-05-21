import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ServicesCards from './ServicesCards'

const Services = () => {
  return (
    <div className='w-fit flex flex-col justify-center items-center text-center gap-7 p-3 xl:max-w-[1300px]'>
        <p className='text-5xl font-bold'>Your All-in-one Solution</p>
        <p className='text-gray-600'>Everything you need, combined in one seamless system.</p>
        <ServicesCards />
        <p className='text-2xl font-bold text-[#784afe] '>1M+ happy user review on board.</p>
        <div className='w-fit py-3 lg:py-5'>
            <div className='bg-white flex w-50 justify-center items-center gap-2 text-center py-4 px-2 rounded-xl font-bold text-black hover:text-white border-1 border-gray-200 hover:bg-[#784afe] transition-all duration-400 ease-in-out'>
                HIRE US TODAY
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
    </div>
  )
}

export default Services