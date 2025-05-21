import Image from 'next/image'
import React from 'react'

const WhatWeOffer = () => {
  return (
    <div className='w-full flex flex-col gap-5 justify-start'>
        <Image src='/resources/whatWeOffer.png' alt='' width={1000} height={1000} className='w-full'/>
        <p className='text-4xl font-bold'>What We Offer</p>
        <p className='text-gray-600'>In the ever-evolving digital landscape, a strong social media presence isn’t just an option—it’s a necessity. Social media platforms are where your audience spends their time, discovers new products, and builds connections with brands. Our Social Media Management service is designed to not only maintain your presence but to maximize your impact, ensuring your business stands out in a crowded online space.</p>
    </div>
  )
}

export default WhatWeOffer