import React from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'


const Header = () => {

  return (
    <div className=' w-full relative bg-white text-black flex flex-col justify-center items-center'>
        <TopHeader />
        <BottomHeader />
    </div>
  )
}

export default Header