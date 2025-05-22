import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Benefits = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start gap-2 '>
        <p className='text-4xl font-bold'>How It Benefits You</p>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-3 place-self-start' />
            <p className='text-gray-500'><strong className='font-bold text-black xsm:text-nowrap'>Save Time and Resources:</strong> Focus on running your business while we handle the complexities of social media.</p>
        </div>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-3 place-self-start' />
            <p className='text-gray-500'><strong className='font-bold text-black xsm:text-nowrap'>Save Time and Resources:</strong> Focus on running your business while we handle the complexities of social media.</p>
        </div>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-3 place-self-start' />
            <p className='text-gray-500'><strong className='font-bold text-black xsm:text-nowrap'>Save Time and Resources:</strong> Focus on running your business while we handle the complexities of social media.</p>
        </div>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-3 place-self-start' />
            <p className='text-gray-500'><strong className='font-bold text-black xsm:text-nowrap'>Save Time and Resources:</strong> Focus on running your business while we handle the complexities of social media.</p>
        </div>
    </div>
  )
}

export default Benefits