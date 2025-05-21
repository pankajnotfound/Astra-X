import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const hero = () => {
  return (
    <div className='w-fit flex flex-col justify-center items-center gap-5 px-8 py-20 mb-20 lg:flex-row xl:max-w-[1300px]'>
      <HeroLeft />
      <HeroRight />
    </div>
  )
}

export default hero