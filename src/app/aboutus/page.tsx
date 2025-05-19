import React from 'react'
import Hero from '../../../components/AboutUsPage/hero/Hero'
import Values from '../../../components/AboutUsPage/ourValues/Values'
import Services from '../../../components/AboutUsPage/services/Services'

const page = () => {
  return (
    <div className='w-fit flex flex-col overflow-hidden'>
      <Hero />
      <Values />
      <Services />
    </div>
  )
}

export default page