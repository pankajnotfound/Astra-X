import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faChartLine, faDiamond, faEarth, faIndustry, faLinesLeaning, faTag, faTshirt, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import Link from 'next/link'
import Image from 'next/image'
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'

const TestimonialBottom = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 pt-20'>
            <div className='text-[#784afe]'>
                OUR PROJECTS
            </div>
            <div className='text-5xl font-bold'>
                Crafting Exceptional Digital Experiences
            </div>
        </div>
        <div className='flex flex-col justify-center items-center px-10 py-20 gap-12 mask-x-from-80% mask-x-to-100% md:flex-row md:flex-wrap lg:px-20 '>
            <Link href='/' className='w-fit flex justify-center items-center p-5 gap-2 rounded bg-[#784afe] transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faIndustry} className='!w-12 !h-12 rounded text-white ' />
                <p className='text-3xl font-semibold text-white'>Source NXT</p>
            </Link>
            <Link href='/' className='w-fit flex justify-center items-center p-5 gap-2 rounded bg-[#784afe] transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faTshirt} className='!w-12 !h-12 rounded text-white ' />
                <p className='text-3xl font-semibold text-white'>Intimasia</p>
            </Link>
            <Link href='/' className='w-fit flex justify-center items-center p-5 gap-2 rounded bg-[#784afe] transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faBitcoin} className='!w-12 !h-12 rounded text-white ' />
                <p className='text-3xl font-semibold text-white'>Zedex Finance</p>
            </Link>
            <Link href='/' className='w-fit flex justify-center items-center p-5 gap-2 rounded bg-[#784afe] transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faBirthdayCake} className='!w-12 !h-12 rounded text-white ' />
                <p className='text-3xl font-semibold text-white'>Anjali's Bake Affair</p>
            </Link>
            <Link href='/' className='w-fit flex justify-center items-center p-5 gap-2 rounded bg-[#784afe] transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faChartLine} className='!w-12 !h-12 rounded text-white ' />
                <p className='text-3xl font-semibold text-white'>VR Techno Finance</p>
            </Link>
            <Link href='/' className='w-fit flex justify-center items-center p-5 gap-2 rounded bg-[#784afe] transition-all duration-300 ease-in-out hover:-translate-y-1 '>
                <FontAwesomeIcon icon={faWallet} className='!w-12 !h-12 rounded text-white ' />
                <p className='text-3xl font-semibold text-white'>The Money Trunk</p>
            </Link>

        </div>
    </div>
  )
}

export default TestimonialBottom