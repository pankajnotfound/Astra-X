import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center py-30 px-5 gap-10 lg:flex-row md:px-30 lg:px-5 sxl:px-20 sxl:gap-40 '>
        <LeftSection />
        <RightSection />
    </div>
  )
}

export default AboutUs