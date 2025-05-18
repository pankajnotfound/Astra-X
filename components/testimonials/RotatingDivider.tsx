import Image from 'next/image'
import React from 'react'

const RotatingDivider = () => {
  return (
    <div className='py-40 flex justify-center items-center'>
        <div className='h-[2px] w-full bg-[#784afe] '></div>
        <Image src='/resources/testimonialdivider.png' alt='' width={200} height={200} className='absolute w-45 h-45 animate-[RotatingAnimation_10s_linear_infinite]' />
        <div className=''></div>
    </div>
  )
}

export default RotatingDivider