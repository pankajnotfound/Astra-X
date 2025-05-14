'use client';
import Image from 'next/image';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

type propsType = {
    image : string;
    text : string;
}

const NavbarElement = (props : propsType) => {
  return (
    <div className='flex w-full group/element gap-2 border-b-2 border-gray-200 p-3 px-5 text-black text-nowrap items-center justify-between text-sm hover:text-[#784afe] transition-all duration-300 ease-in-out'>
        <Image src={props.image} alt='' width={30} height={30} />
        <p className='w-full'>{props.text}</p>
        <FontAwesomeIcon icon={faSquareArrowUpRight} color='black' className=' opacity-0 w-fit group-hover/element:opacity-100 transition-all duration-300 ease-in-out' />
    </div>
  )
}

export default NavbarElement