import React from 'react'
import WhyUsLeftText from './WhyUsLeftText'
import WhyUsRightImages from './WhyUsRightImages'

const WhyUs = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-fit flex flex-col justify-center lg:flex-row md:mb-60 lg:mb-40 lg:p-10'>
        <WhyUsLeftText />
        <WhyUsRightImages />
      </div>
    </div>
  )
}

export default WhyUs