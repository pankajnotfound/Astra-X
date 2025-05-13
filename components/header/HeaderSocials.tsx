import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
const HeaderSocials = () => {
  return (
    <div className='flex gap-0 '>
        <div className=' border-x border-gray-200 flex'>
            <FontAwesomeIcon icon={faFacebook} className='w-4 m-2.5 ' />
        </div>
        <div className=' border-x border-gray-200'>
            <FontAwesomeIcon icon={faXTwitter} className='w-4 m-2.5 ' />
        </div>
        <div className=' border-x border-gray-200'>
            <FontAwesomeIcon icon={faLinkedin} className='w-4 m-2.5 ' />
        </div>
        <div className=' border-x border-gray-200'>
            <FontAwesomeIcon icon={faBehance} className='w-4 m-2.5 ' />
        </div>
    </div>
  )
}

export default HeaderSocials