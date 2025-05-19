import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type propsType = {
    path:string;
    number:string;
    text:string;
    border:boolean;
}

const AboutUsElement = (props : propsType) => {
  return (
    <div className={` w-full flex gap-5 justify-between items-center py-8 ${props.border ? 'border-b-1 border-gray-300' : ''} `}>
        <Image src={props.path} alt='' width={50} height={50} className='w-10 h-10'/>
        <p className='text-3xl font-bold xsm:text-5xl'>{props.number}</p>
        <p className=' text-start text-wrap sm:text-nowrap'>{props.text}</p>
        <div className='w-full h-fit text-end transition-all duration-300 ease-in-out hover:-translate-y-0.5'>
            <FontAwesomeIcon icon={faArrowRight} className='w-3 h-3 px-3 py-2.5 rounded-full border-1 border-gray-300 xsm:px-5 xsm:py-4.5' />
        </div>
    </div>
  )
}

export default AboutUsElement