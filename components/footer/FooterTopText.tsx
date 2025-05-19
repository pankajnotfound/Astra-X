import React from 'react'
import Logo from '../header/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, } from '@fortawesome/free-solid-svg-icons'

const FooterTopText = () => {
  return (
    <div className='flex flex-col gap-7'>
        <Logo />
        <p className='w-auto lg:w-60'>Astrax embarks on a journey of learning & skill-building today.</p>
        <div className='w-auto flex gap-4 items-center pl-2 lg:w-70'>
            <FontAwesomeIcon icon={faLocationDot} className='!w-6 !h-6 opacity-40'/>
            <p>123 Main Street, Springfield, Illinois, 62701, USA</p>
        </div>
        <div className='flex gap-4 items-center pl-2'>
            <FontAwesomeIcon icon={faEnvelope } className='!w-6 !h-6 opacity-40 ' />
            <p>support@astrax.com</p>
        </div>
    </div>
  )
}

export default FooterTopText