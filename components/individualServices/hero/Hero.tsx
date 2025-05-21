import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='w-full h-fit relative flex justify-center items-center overflow-hidden border-y-1 border-gray-300 '>
      <div>
        <Image src='/resources/decorateLeft.png' alt='' width={1000} height={1000} className='z-0 w-123 absolute left-0 top-0' />
      </div>
      <div className='flex flex-col justify-center items-center gap-8 py-25'>
        <p className='z-1 text-5xl font-bold'>Social Media Management</p>
        <div className='w-fit flex justify-center items-center gap-2 text-center '>
          <p>Home</p>
          <FontAwesomeIcon icon={faAngleRight} className='!w-4 !h-4 text-gray-400' />
          <p className='text-[#784afe] font-bold '>Social Media Management</p>
        </div>
      </div>
      <div>
        <Image src='/resources/decorateRight.png' alt='' width={1000} height={1000} className='z-0 w-123 absolute right-0 top-0' />
      </div>
    </div>
  )
}

export default Hero