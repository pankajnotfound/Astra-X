import Image from 'next/image'
import React from 'react'

type propsType = {
    info : {
      ServiceImage : string;
      ServiceDetailHeading : string;
      ServiceDetails : string;
    };
}

const WhatWeOffer = (props : propsType) => {
  
  return (
    <div className='w-full flex flex-col gap-5 justify-start'>
        <Image src={props.info.ServiceImage} alt='' width={1000} height={1000} className='w-full'/>
        <p className='text-4xl font-bold'>{props.info.ServiceDetailHeading}</p>
        <p className='text-gray-600'>{props.info.ServiceDetails}</p>
    </div>
  )
}

export default WhatWeOffer