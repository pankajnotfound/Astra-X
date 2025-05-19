import React from 'react'
import ServiceCards from './ServiceCards'

const ServicesLeft = () => {
  return (
    <div className=' w-full flex flex-col gap-5 lg:max-w-[40%] xl:max-w-[50%] '>
        <div className='flex flex-col gap-5 md:px-5'>
            <p className='text-[#784afe] '>Services and solutions</p>
            <p className='text-5xl font-bold'>Helping you thrive at every Stage</p>
            <p className='text-gray-500'>Elevate your brand to new heights, ensuring your message resonates powerfully and captivates your audience like never before.</p>
        </div>
        <ServiceCards />
    </div>
  )
}

export default ServicesLeft