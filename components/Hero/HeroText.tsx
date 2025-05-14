import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BackerImages from './BackerImages'

const HeroText = () => {

  return (
    <div className='flex flex-col justify-center items-start md:scale-y-105 lg:scale-100'>
        <div className='text-[#784afe]'>
            Hi there! Welcome to astrax
        </div>
        <div className='text-[3rem]/13 font-bold max-w-180 text-start pt-3 pb-5 sm:text-[4.2rem]/18 lg:max-w-140'>
            We empower brands to reach full potential.
        </div>
        <div className='py-7 lg:py-5'>
            <div className='bg-[#784afe] flex w-40 justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
        <div className='flex text-[#666666] text-sm text-nowrap pt-8 gap-6 justify-center items-center lg:pt-5 flex-wrap '>
            Our backers
            <BackerImages />
        </div>
    </div>
  )
}

export default HeroText