import React from 'react'
import HeaderSocials from './HeaderSocials'

const TopHeader = () => {
  return (
    <div className='w-full flex justify-center py-2 bg-[#eef7ff] md:p-0'>
      <div className='w-full xl:max-w-400'>
        <div className='flex justify-between items-center md:px-10 lg:px-30 '>
          <div className='w-full flex justify-center items-center gap-6 text-[0.9rem] xl:max-w-400 md:justify-start'>
              <p className='hover:text-[#784afe] cursor-pointer'>bussiness@thepixelmind.com</p>
              <p className='hover:text-[#784afe] cursor-pointer'>+(123) 456 789 00</p>
          </div>
          <HeaderSocials />
        </div>
      </div>
    </div>
  )
}

export default TopHeader