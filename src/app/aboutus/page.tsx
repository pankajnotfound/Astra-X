import React from 'react'
import Hero from '../../../components/AboutUsPage/hero/Hero'
import Values from '../../../components/AboutUsPage/ourValues/Values'
import Services from '../../../components/AboutUsPage/services/Services'
import WhyUs from '../../../components/AboutUsPage/whyUs/WhyUs'
import Testimonials from '../../../components/HomePage/testimonials/Testimonials'
import LetsTalk from '../../../components/HomePage/letsTalk/LetsTalk'
import TestimonialTop from '../../../components/HomePage/testimonials/TestimonialTop'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden'>
      <Hero />
      <Values />
      <Services />
      <WhyUs />
      <TestimonialTop />
      <LetsTalk />
    </div>
  )
}

export default page