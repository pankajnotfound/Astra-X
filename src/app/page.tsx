import React from 'react'
import HeroMain from '../../components/Hero/HeroMain'
import AboutUs from '../../components/aboutUs/AboutUs'
import Testimonials from '../../components/testimonials/Testimonials'

const page = () => {
  return (
    <div className='bg-white w-full h-1000 flex flex-col content-center text-center text-black' >
      <HeroMain />
      <AboutUs />
      <Testimonials />
    </div>
  )
}

export default page