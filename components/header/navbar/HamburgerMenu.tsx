import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HamburgerMenu = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faBars} className='w-10 h-20 scale-140'/>
    </div>
  )
}

export default HamburgerMenu