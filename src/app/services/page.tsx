import React from 'react'
import Hero from '../../../components/ServicesPage/hero/Hero'
import Services from '../../../components/ServicesPage/allServices/Services'
import KeyBenefits from '../../../components/ServicesPage/keyBenefits/KeyBenefits'
import RotatingDivider from '../../../components/HomePage/testimonials/RotatingDivider'
import StartNow from '../../../components/ServicesPage/startNow/StartNow'
import LetsTalk from '../../../components/HomePage/letsTalk/LetsTalk'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden gap-3'>
        <Hero />
        <Services />
        <KeyBenefits />
        <RotatingDivider />
        <StartNow />
        <LetsTalk />
    </div>
  )
}

export default page