import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <div className='flex flex-col gap-20'>
        <div className='flex flex-col gap-5'>
            <div className='text-[#784afe]'>
                Testimonials
            </div>
            <div className='text-5xl font-bold'>
                Happy users feedback
            </div>
        </div>
        <TestimonialSlider />
    </div>
  )
}

export default Testimonials