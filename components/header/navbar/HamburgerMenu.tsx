import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavbarShort from './NavbarShort';

const HamburgerMenu = () => {

  const [ navBarMenuOpen, setNavBarMenuOpen ] = useState (false);

  const toggleMenu = () => {
    setNavBarMenuOpen(!navBarMenuOpen);
    console.log("Menu Opened");
  }

  return (
    <div className=''>
      <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='w-10 h-20 scale-140'/>
      <div className={`absolute flex top-0 left-0 w-screen h-screen transition-all duration-300 ease-in-out ${navBarMenuOpen ? 'opacity-100 pointer-events-auto' : ' -z-40 opacity-0 pointer-events-none'} `}>
        <div onClick={toggleMenu} className='w-full h-screen bg-black opacity-50'>
        </div>
        <div className={`fixed flex w-full h-screen right-0 bg-white opacity-100 xsm:min-w-[350px] xsm:w-[40%] `}>
          <NavbarShort toggleMenu={toggleMenu} />
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu