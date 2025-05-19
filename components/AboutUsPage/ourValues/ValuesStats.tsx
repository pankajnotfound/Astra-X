import { faCode, faMoneyBill, faUsersRays, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ValuesStats = () => {
  return (
    <div className='w-full flex flex-col flex-wrap justify-center items-center gap-5 md:flex-row md:gap-10 lg:gap-30'>
        <div className='flex flex-col justify-center items-center gap-2 p-4'>
            <FontAwesomeIcon icon={faCode} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>43k+</p>
            <p className='text-gray-500'>Website’s Powering</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 p-4'>
            <FontAwesomeIcon icon={faMoneyBill} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>7M+</p>
            <p className='text-gray-500'>New raised funds</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 p-4'>
            <FontAwesomeIcon icon={faUsersRays} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>20k+</p>
            <p className='text-gray-500'>Lovely customers</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 p-4'>
            <FontAwesomeIcon icon={faUsersLine} className='!w-10 !h-10 text-[#784afe] ' />
            <p className='text-5xl font-bold'>12+</p>
            <p className='text-gray-500'>Years of experience</p>
        </div>
    </div>
  )
}

export default ValuesStats