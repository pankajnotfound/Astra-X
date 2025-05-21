import React from 'react'
import TopText from './TopText'
import BottomCards from './BottomCards'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StartNow = () => {
  return (
    <div className='w-fit flex flex-col gap-5 pt-20 p-5 justify-center items-center lg:gap-15'>
        <TopText />
        <BottomCards />
        <div className='flex flex-col p-10 gap-5 justify-center items-center md:flex-row md:pt-0'>
            <div className='bg-[#784afe] w-fit px-5 flex justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
            <div className='bg-white w-fit px-5 flex justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-[#784afe] border-1 border-[#784afe] hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET FREE QUOTE
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
    </div>
  )
}

export default StartNow