import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const TestimonialTop = () => {
  return (
    <div className='pb-20'>
        <div className='flex flex-col gap-5 text-center'>
            <div className='text-[#784afe]'>
                Testimonials
            </div>
            <div className='text-5xl font-bold'>
                Our clients feedback is important for us
            </div>
        </div>
        <TestimonialSlider />
    </div>
  )
}

export default TestimonialTop