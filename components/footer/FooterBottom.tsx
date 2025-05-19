import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faBehance, faYoutube, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterBottom = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
        <div className='w-full flex flex-col justify-between gap-5 items-center lg:w-[90%] bg-[#875cff] p-6 md:flex-row'>
            <ul className='flex gap-5 flex-wrap justify-center text-[0.9rem] font-bold sm:flex-nowrap'>
                <li>ABOUT</li>
                <li>SOLUTIONS</li>
                <li>PRICING</li>
                <li>RESOURCES</li>
            </ul>
            <div className='flex gap-3 '>
                <div className=' flex opacity-70 hover:opacity-100 cursor-pointer'>
                    <FontAwesomeIcon icon={faEnvelope} className='w-3' />
                </div>
                <div className=' flex opacity-70 hover:opacity-100 cursor-pointer'>
                    <FontAwesomeIcon icon={faLinkedin} className='w-3' />
                </div>
            </div>
        </div>
        <div className='flex flex-wrap text-wrap gap-1.5 justify-center'>
            <p className='opacity-60 font-normal'>© All Rights Reserved 2025 by The Pixel Mind.</p>
        </div>
    </div>
  )
}

export default FooterBottom