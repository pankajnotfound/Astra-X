import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeroLeft = () => {
  return (
    <div className='w-fit flex flex-col justify-center items-start gap-4 lg:max-w-[45%]'>
        <p className='w-fit text-[#784afe] '>Our Services</p>
        <p className='w-fit text-6xl font-bold'>Innovative Digital Solutions for Modern Businesses</p>
        <p className='text-gray-500 '>We offer comprehensive digital solutions to help your business thrive in the digital landscape. From web development to SEO services, we create innovative solutions that drive results.</p>
        <div className='w-fit py-7 lg:py-5'>
            <div className='bg-[#784afe] flex w-40 justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
    </div>
  )
}

export default HeroLeft