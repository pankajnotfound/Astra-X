'use client';
import React, { useState } from 'react'
import Logo from './Logo'
import Navbar from './navbar/Navbar'
import HeaderButton from './HeaderButton'
import { useScrollValues } from '../../data/ScrollValueInfo'
import HamburgerMenu from './navbar/HamburgerMenu';


const BottomHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {changeHeader} = useScrollValues();

  return (
    <div className='w-full flex items-center justify-center'>
      <div className={`w-full flex justify-between items-center content-center p-7 ${changeHeader ? 'z-50 fixed top-0 !bg-white w-full shadow-black shadow-xl/10 ' : 'z-50'} sm:px-8 sm:py-5 xl:max-w-400 lg:hidden`}>
          <Logo />
          <div className='flex items-center gap-4'>
            <HeaderButton />
            <HamburgerMenu />
          </div>
      </div>
      <div className={`w-full hidden justify-around items-center content-center py-5 ${changeHeader ? 'z-50 fixed top-0 !bg-white w-full shadow-black shadow-xl/10 ' : 'z-50'} xl:max-w-400 lg:flex`}>
          <Logo />
          <Navbar />
          <HeaderButton />
      </div>
    </div>
    
  )
}

export default BottomHeader