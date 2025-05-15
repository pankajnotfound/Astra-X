'use client';
import React from 'react'
import AboutUsElement from './AboutUsElement'
import { useScrollValues } from '../../context/ScrollValueInfo'

const RightSection = () => {

    const {aboutUsImageVisible} = useScrollValues();

  return (
    <div className='flex flex-col gap-0 sm:p-4'>
        <div className=' w-full text-start flex flex-col justify-center gap-6 py-12 lg:w-120 sxl:w-150'>
            <p className='text-[1.1rem]/0 text-[#784afe]'>Since from 2000</p>
            <p className=' text-[3rem]/13 sm:text-[3.2rem]/15 font-bold'>We serve quality service around the world</p>
            <div className={`transition-[clip-path] duration-2000 delay-1000 ease-in-out ${ aboutUsImageVisible ? '[clip-path:inset(0%_0%_0%_0%)]' : '[clip-path:inset(0%_0%_100%_0%)]' } overflow-hidden`}>
                <p className={`text-gray-600 transition-all delay-800 duration-1000 ease-in-out origin-top ${aboutUsImageVisible ? ' translate-y-0 opacity-100' : ' -translate-y-10 opacity-0' }`}>
                    We offer a wide range of digital marketing services that cater to business of all sizes. A forward-thinking and clever approach to maintaining sales tax compliance amidst the digital era.
                </p>
            </div>
            
        </div>
        <div className='flex flex-col'>
            <AboutUsElement path = '/resources/codewindow.png' number = '43k+' text = "Website's Powering" border = {true}/>
            <AboutUsElement path = '/resources/globe.png' number = '7M' text = "Chats in Last 2002" border = {false} />
        </div>
    </div>
  )
}

export default RightSection