import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import TestimonialTop from './TestimonialTop'
import RotatingDivider from './RotatingDivider'
import TestimonialBottom from './TestimonialBottom'

const Testimonials = () => {
  return (
    <div className='flex flex-col py-10'>
        <TestimonialTop />
        <RotatingDivider />
        <TestimonialBottom />
    </div>
  )
}

export default Testimonials