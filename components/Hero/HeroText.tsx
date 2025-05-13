import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import BackerImages from './BackerImages'

type propsType = {
    imageVisible : boolean;
}

const HeroText = (props : propsType) => {

  return (
    <div className='flex flex-col justify-center items-start '>
        <div className='text-[#784afe]'>
            Hi there! Welcome to astrax
        </div>
        <div className='text-[4.2rem]/18 font-bold max-w-140 text-start pt-3 pb-5'>
            We empower brands to reach full potential.
        </div>
        <div className='pt-5 pb-5'>
            <div className='bg-[#784afe] flex w-40 justify-center gap-2 text-center py-4 rounded-xl font-bold text-white'>
                GET STARTED
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>
        <div className='flex text-[#666666] text-sm pt-5 gap-6 justify-center items-center'>
            Our backers
            <BackerImages imageVisible = {props.imageVisible}  />
        </div>
    </div>
  )
}

export default HeroText