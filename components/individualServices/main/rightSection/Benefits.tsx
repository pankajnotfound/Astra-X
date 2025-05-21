import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const Benefits = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-2 '>
        <p className='text-4xl font-bold'>How It Benefits You</p>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-1 place-self-center' />
            <p className='font-bold text-nowrap'>Save Time and Resources:</p>
            <p className='text-gray-500'>Focus on running your business while we handle the complexities of social media.</p>
        </div>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-1 place-self-center' />
            <p className='font-bold text-nowrap'>Save Time and Resources:</p>
            <p className='text-gray-500'>Focus on running your business while we handle the complexities of social media.</p>
        </div>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-1 place-self-center' />
            <p className='font-bold text-nowrap'>Save Time and Resources:</p>
            <p className='text-gray-500'>Focus on running your business while we handle the complexities of social media.</p>
        </div>
        <div className='w-full flex gap-1 justify-start items-start p-1 text-[1.05rem]'>
            <FontAwesomeIcon icon={faCircle} className='!w-1 !h-1 text-gray-500 p-1 place-self-center' />
            <p className='font-bold text-nowrap'>Save Time and Resources:</p>
            <p className='text-gray-500'>Focus on running your business while we handle the complexities of social media.</p>
        </div>
    </div>
  )
}

export default Benefits