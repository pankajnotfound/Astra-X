import { faCode, faMoneyBill, faUsersRays, faUsersLine, faChartLine, faUsers, faBuildingShield, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ServiceCards = () => {
  return (
    <div className='w-full flex justify-center flex-wrap items-center gap-10'>
        <div className='w-[40%] max-w-[240px] group flex flex-col justify-center items-start gap-2 py-4'>
            <FontAwesomeIcon icon={faChartLine} className='!w-8 !h-8 p-4 rounded-md bg-gray-200 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#784afe] ' />
            <p className=' font-bold transition-all duration-300 ease-in-out group-hover:text-[#784afe]'>Robust Strategy</p>
            <p className='text-gray-500'>Access top-tier support from our worldwide network.</p>
        </div>
        <div className='w-[40%] max-w-[240px] group flex flex-col justify-center items-start gap-2 py-4'>
            <FontAwesomeIcon icon={faUsers} className='!w-8 !h-8 p-4 rounded-md bg-gray-200 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#784afe] ' />
            <p className=' font-bold transition-all duration-300 ease-in-out group-hover:text-[#784afe]'>Collaboration Tools</p>
            <p className='text-gray-500'>Keep your goals and plans in one place.</p>
        </div>
        <div className='w-[40%] max-w-[240px] group flex flex-col justify-center items-start gap-2 py-4'>
            <FontAwesomeIcon icon={faBuildingShield} className='!w-8 !h-8 p-4 rounded-md bg-gray-200 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#784afe] ' />
            <p className=' font-bold transition-all duration-300 ease-in-out group-hover:text-[#784afe]'>Data Protection</p>
            <p className='text-gray-500'>Safeguard your information with advanced security.</p>
        </div>
        <div className='w-[40%] max-w-[240px] group flex flex-col justify-center items-start gap-2 py-4'>
            <FontAwesomeIcon icon={faHeadphonesAlt} className='!w-8 !h-8 p-4 rounded-md bg-gray-200 text-black transition-all duration-300 ease-in-out group-hover:text-white group-hover:bg-[#784afe] ' />
            <p className=' font-bold transition-all duration-300 ease-in-out group-hover:text-[#784afe]'>Great support</p>
            <p className='text-gray-500'>Experience reliable assistance whenever you need it.</p>
        </div>
    </div>
  )
}

export default ServiceCards