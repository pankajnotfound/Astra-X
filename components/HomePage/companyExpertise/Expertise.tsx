import React from 'react'
import Cards from './Cards'

const Expertise = () => {
  return (
    <div className='flex flex-col pt-30 bg-linear-to-b from-[#eae2ff] to-white gap-4'>
        <p className='text-[#784afe]'>OUR SERVICES</p>
        <p className='text-5xl font-bold' >Transforming Ideas into Digital Excellence</p>
        <Cards />
    </div>
  )
}

export default Expertise