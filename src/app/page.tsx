import React from 'react'
import HeroMain from '../../components/Hero/HeroMain'
import AboutUs from '../../components/aboutUs/AboutUs'
import Testimonials from '../../components/testimonials/Testimonials'
import Expertise from '../../components/companyExpertise/Expertise'
import WhyUs from '../../components/whyChooseUs/WhyUs'
import LetsTalk from '../../components/letsTalk/LetsTalk'

const page = () => {
  return (
    <div className='bg-white w-full h-fit flex flex-col content-center text-center text-black' >
      <HeroMain />
      <AboutUs />
      <Expertise />
      <WhyUs />
      <Testimonials />
      <LetsTalk />
    </div>
  )
}

export default page