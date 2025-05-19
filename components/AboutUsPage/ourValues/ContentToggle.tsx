'use client';
import React, { useState } from 'react'
import Values from './Values';

const ContentToggle = () => {

    const [toggleValue, setToggleValue] =useState(1);

    const handleToggle1 = () => {
        setToggleValue(1);
    }
    const handleToggle2 = () => {
        setToggleValue(2);
    }
    const handleToggle3 = () => {
        setToggleValue(3);
    }


  return (
    <div className='w-full flex flex-col gap-4 text-start '>
        <div className='w-full flex justify-between items-center rounded-xl overflow-hidden border-black text-center text-sm font-bold'>
            <div onClick={() => {handleToggle1()}} className={`w-full flex justify-center items-center p-3 transition-all duration-300 ease-in-out ${toggleValue == 1 ? 'bg-[#784afe] text-white ' : 'bg-white text-black' } `}>MISSION</div>
            <div onClick={() => {handleToggle2()}} className={`w-full flex justify-center items-center p-3 transition-all duration-300 ease-in-out ${toggleValue == 2 ? 'bg-[#784afe] text-white ' : 'bg-white text-black' } `}>VISION</div>
            <div onClick={() => {handleToggle3()}} className={`w-full flex justify-center items-center p-3 transition-all duration-300 ease-in-out ${toggleValue == 3 ? 'bg-[#784afe] text-white ' : 'bg-white text-black' } `}>VALUES</div>
        </div>
        <div className={` flex-col gap-3 text-gray-600 ${toggleValue == 1 ? 'flex' : 'hidden' }`}>
            <p>At AstraX, we simplify complex processes, boost operational efficiency, and drive growth with our cutting-edge software and services. Our reliable solutions empower clients to navigate the ever-evolving tech landscape with confidence, ensuring they stay ahead in a competitive world.</p>
            <p>We are committed to designing innovative tech solutions that transform how businesses operate, driving efficiency and growth.</p>
        </div>
        <div className={` flex-col gap-3 text-gray-600 ${toggleValue == 2 ? 'flex' : 'hidden' }`}>
            <p>At1 AstraX, we simplify complex processes, boost operational efficiency, and drive growth with our cutting-edge software and services. Our reliable solutions empower clients to navigate the ever-evolving tech landscape with confidence, ensuring they stay ahead in a competitive world.</p>
            <p>We are committed to designing innovative tech solutions that transform how businesses operate, driving efficiency and growth.</p>
        </div>
        <div className={` flex-col gap-3 text-gray-600 ${toggleValue == 3 ? 'flex' : 'hidden' }`}>
            <p>At2 AstraX, we simplify complex processes, boost operational efficiency, and drive growth with our cutting-edge software and services. Our reliable solutions empower clients to navigate the ever-evolving tech landscape with confidence, ensuring they stay ahead in a competitive world.</p>
            <p>We are committed to designing innovative tech solutions that transform how businesses operate, driving efficiency and growth.</p>
        </div>
    </div>
  )
}

export default ContentToggle