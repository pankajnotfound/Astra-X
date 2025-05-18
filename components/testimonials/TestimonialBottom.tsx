import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond, faEarth, faLinesLeaning, faTag } from '@fortawesome/free-solid-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'

const TestimonialBottom = () => {
  return (
    <div>
        <div className='flex flex-col gap-5'>
            <div className='text-[#784afe]'>
                Testimonials
            </div>
            <div className='text-5xl font-bold'>
                Happy users feedback
            </div>
        </div>
        <div className='flex flex-col justify-center items-center px-10 py-20 gap-12 mask-x-from-60% mask-x-to-100% md:flex-row md:flex-wrap lg:px-20 lg:justify-between '>
            <div className='w-fit flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faEarth} className='!w-12 !h-12 text-[#784afe] ' />
                <p className='text-3xl font-semibold'>Astro</p>
            </div>
            <div className='w-fit flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faDiamond} className='!w-12 !h-12 text-[#784afe]' />
                <p className='text-3xl font-semibold'>Purei</p>
            </div>
            <div className='w-fit flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faTag} className='!w-12 !h-12 text-[#784afe]' />
                <p className='text-3xl font-semibold'>Freshzi</p>
            </div>
            <div className='w-fit flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faLinesLeaning} className='!w-12 !h-12 text-[#784afe]' />
                <p className='text-3xl font-semibold'>YellPure</p>
            </div>
            <div className='w-fit flex justify-center items-center gap-2'>
                <FontAwesomeIcon icon={faTriangleExclamation} className='!w-12 !h-12 text-[#784afe]' />
                <p className='text-3xl font-semibold'>ai.core</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBottom