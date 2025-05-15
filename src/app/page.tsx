import React from 'react'
import HeroMain from '../../components/Hero/HeroMain'
import AboutUs from '../../components/aboutUs/AboutUs'

const page = () => {
  return (
    <div className='bg-white w-full h-1000 flex flex-col content-center text-center text-black' >
      <HeroMain />
      <AboutUs />
    </div>
  )
}

export default page