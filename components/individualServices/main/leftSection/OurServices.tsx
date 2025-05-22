import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const OurServices = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start gap-4 p-4 rounded-lg bg-gray-100 '>
        <p className='text-2xl font-semibold'>Our Services</p>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <Link href='/services/web-development' className='w-full flex justify-between items-center group gap-10 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>Web Development</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </Link>
            <Link href='/services/app-development' className='w-full flex justify-between items-center group gap-10 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>App Development</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </Link>
            <Link href='/services/uiux-design' className='w-full flex justify-between items-center group gap-10 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>UI/UX Design</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </Link>
            <Link href='/services/seo-services' className='w-full flex justify-between items-center group gap-10 p-3 rounded-lg bg-white transition-all duration-300 ease-in-out hover:bg-[#784afe] hover:text-white'>
                <p className='text-sm'>SEO Services</p>
                <FontAwesomeIcon icon={faArrowRight} className='!w-4 !h-4 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:-rotate-45' />
            </Link>
        </div>
    </div>
  )
}

export default OurServices