import React from 'react'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

const ValuesContent = () => {
  return (
    <div className='flex flex-col justify-center py-30 px-5 gap-10 lg:flex-row lg:px-5 sxl:px-20 sxl:gap-40 '>
        <ContentLeft />
        <ContentRight />
    </div>
  )
}

export default ValuesContent