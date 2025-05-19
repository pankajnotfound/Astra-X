import React from 'react'
import ContentToggle from './ContentToggle'

const ContentRight = () => {
  return (
    <div className='w-fit flex flex-col gap-5 p-0 lg:w-[50%] xl:w-[610px] '>
        <p className='text-4xl font-bold text-start'>Streamline your tool workflow</p>
        <p className='text-start text-gray-600'>Teams rely on AstraX to enhance document workflows, gain valuable insights, and boost efficiency, all while delivering an exceptional experience to their customers. Businesses trust AstraX’s all-in-one document automation platform to simplify the creation, approval, and eSigning of proposals, quotes, contracts, and more. With advanced document creation and workflow capabilities, teams can provide their customers with a professional, timely, and engaging experience.</p>
        <div>
            <ContentToggle />
        </div>
    </div>
  )
}

export default ContentRight