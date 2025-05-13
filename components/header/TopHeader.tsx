import React from 'react'
import HeaderSocials from './HeaderSocials'

const TopHeader = () => {
  return (
    <div className='flex justify-between items-center px-30 bg-[#eef7ff] '>
        <div className='flex justify-center items-center gap-6 text-[0.9rem] '>
            <p>info@astrax.com</p>
            <p>+(123) 456 789 00</p>
        </div>
        <HeaderSocials />
    </div>
  )
}

export default TopHeader