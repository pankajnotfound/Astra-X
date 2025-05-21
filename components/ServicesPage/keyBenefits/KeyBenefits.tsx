import React from 'react'
import LeftText from './LeftText'
import RightCards from './RightCards'
import { div } from 'framer-motion/client'

const KeyBenefits = () => {
  return (
    <div className=' w-full flex justify-center items-center bg-linear-to-b from-[#eae2ff] to-white'>
        <div className='w-full flex flex-col justify-center items-center overflow-hidden gap-5 m-3 p-5 rounded-xl lg:p-10 lg:flex-row max-w-[1300px]'>
            <LeftText />
            <RightCards />
        </div>
    </div>
    
  )
}

export default KeyBenefits