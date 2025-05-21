import React from 'react'
import LeftText from './LeftText'
import RightCards from './RightCards'

const WhyUs = () => {
  return (
    <div className='w-fit flex flex-col justify-center items-center overflow-hidden gap-5 m-3 p-5 bg-linear-to-b from-[#eae2ff] to-white rounded-xl lg:p-15 lg:flex-row max-w-[1200px]'>
        <LeftText />
        <RightCards />
    </div>
  )
}

export default WhyUs