import React from 'react'
import Logo from './Logo'
import Navbar from './navbar/Navbar'
import HeaderButton from './HeaderButton'

const BottomHeader = () => {
  return (
    <div className='flex justify-around items-center py-6'>
        <Logo />
        <Navbar />
        <HeaderButton />
    </div>
  )
}

export default BottomHeader