import React from 'react'
import Hero from '../../../../components/individualServices/hero/Hero'
import Main from '../../../../components/individualServices/main/Main'
import Services from '../../../../components/ServicesPage/allServices/Services'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Hero />
        <Main />
        <Services />
    </div>
  )
}

export default page