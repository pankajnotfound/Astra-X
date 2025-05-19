import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const HeroBottom = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full relative flex flex-col space-y-5 px-5 py-10 lg:p-10 lg:flex-row xl:gap-10 lg:justify-center'>
            <div className='w-full rounded-2xl overflow-hidden md:w-[90%] lg:w-[50%] xl:w-[40%] xl:max-w-150 '>
                <Image src='/resources/aboutus.png' alt='' width={1000} height={1000} className='' />
            </div>
            <div className='py-20 left-80 bottom-30 w-full flex justify-center items-center md:absolute lg:left-0 xl:-left-5 '>
                <Image src='/resources/testimonialdivider.png' alt='' width={200} height={200} className='absolute w-45 h-45 animate-[RotatingAnimation_10s_linear_infinite]' />
                <div className=''></div>
            </div>
            <div className='hidden w-full h-fit rounded-2xl overflow-hidden lg:flex lg:w-[50%] xl:w-[40%] xl:max-w-150'>
                <Image src='/resources/aboutus.png' alt='' width={1000} height={1000} className='' />
            </div>
        </div>
        <div className='flex flex-col p-10 gap-5 justify-center items-center md:flex-row md:pt-0'>
            <div className='bg-[#784afe] w-fit px-5 flex justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
            <div className='bg-white w-fit px-5 flex justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-[#784afe] border-1 border-[#784afe] hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET FREE QUOTA
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
        
    </div>
  )
}

export default HeroBottom