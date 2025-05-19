import React from 'react'
import ServicesLeft from './ServicesLeft'
import ServicesRight from './ServicesRight'

const Services = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden gap-2 p-2 lg:flex-row xl:p-20'>
        <ServicesLeft />
        <ServicesRight />
    </div>
  )
}

export default Services