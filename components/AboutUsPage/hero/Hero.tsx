import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import RotatingDivider from '../../HomePage/testimonials/RotatingDivider'
import HeroTopText from './HeroTopText'
import HeroBottom from './HeroBottom'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center pb-15 gap-10 overflow-hidden text-center'>
        <HeroTopText />
        <HeroBottom />
    </div>
  )
}

export default Hero