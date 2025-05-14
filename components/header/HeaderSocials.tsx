import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
const HeaderSocials = () => {
  return (
    <div className='hidden gap-0 md:flex '>
        <div className=' border-x border-gray-200 flex hover:text-[#784afe] cursor-pointer'>
            <FontAwesomeIcon icon={faFacebook} className='w-4 m-2.5 ' />
        </div>
        <div className=' border-x border-gray-200 hover:text-[#784afe] cursor-pointer'>
            <FontAwesomeIcon icon={faXTwitter} className='w-4 m-2.5 ' />
        </div>
        <div className=' border-x border-gray-200 hover:text-[#784afe] cursor-pointer'>
            <FontAwesomeIcon icon={faLinkedin} className='w-4 m-2.5 ' />
        </div>
        <div className=' border-x border-gray-200 hover:text-[#784afe] cursor-pointer'>
            <FontAwesomeIcon icon={faBehance} className='w-4 m-2.5 ' />
        </div>
    </div>
  )
}

export default HeaderSocials