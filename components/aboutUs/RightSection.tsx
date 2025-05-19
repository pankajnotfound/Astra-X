'use client';
import React from 'react'
import AboutUsElement from './AboutUsElement'
import { useScrollValues } from '../../context/ScrollValueInfo'

const RightSection = () => {

    const {aboutUsImageVisible} = useScrollValues();

  return (
    <div className='flex flex-col gap-0 sm:p-4'>
        <div className=' w-full text-start flex flex-col justify-center gap-6 py-12 lg:w-120 sxl:w-150'>
            <p className='text-[1.1rem]/0 text-[#784afe]'>ABOUT US</p>
            <p className=' text-[3rem]/13 sm:text-[3.2rem]/15 font-bold'>Grateful you're here to discover more about us.</p>
            <div className={`transition-[clip-path] duration-2000 delay-1000 ease-in-out ${ aboutUsImageVisible ? '[clip-path:inset(0%_0%_0%_0%)]' : '[clip-path:inset(0%_0%_100%_0%)]' } overflow-hidden`}>
                <p className={`text-gray-600 transition-all delay-800 duration-1000 ease-in-out origin-top ${aboutUsImageVisible ? ' translate-y-0 opacity-100' : ' -translate-y-10 opacity-0' }`}>
                    At The Pixel Mind, we bring your ideas to life with cutting-edge web and app development, UI/UX design, and innovative software solutions. Let's collaborate to create exceptional digital experiences and turn your vision into success.
                </p>
            </div>
            
        </div>
        <div className='flex flex-col'>
            <AboutUsElement path = '/resources/codewindow.png' number = '10+' text = "Experienced Designers" border = {true}/>
            <AboutUsElement path = '/resources/globe.png' number = '20+' text = "Satisfied Customer" border = {false} />
        </div>
    </div>
  )
}

export default RightSection