import React from 'react'
import HeroMain from '../../components/HomePage/Hero/HeroMain'
import AboutUs from '../../components/HomePage/aboutUs/AboutUs'
import Testimonials from '../../components/HomePage/testimonials/Testimonials'
import Expertise from '../../components/HomePage/companyExpertise/Expertise'
import WhyUs from '../../components/HomePage/whyChooseUs/WhyUs'
import LetsTalk from '../../components/HomePage/letsTalk/LetsTalk'

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