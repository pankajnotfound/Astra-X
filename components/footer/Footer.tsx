import React from 'react'
import FooterTopText from './FooterTopText'
import FooterTopNav from './FooterTopNav'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='w-full h-fit flex justify-center bottom-0 text-white font-semibold bg-[#784afe] px-5 pt-40 pb-10 sm:px-25 md:px-10 sxl:px-25 xl:px-15 '>
      <div className='w-full relative flex flex-col xl:max-w-350 gap-30'>
        <div className='w-full flex flex-col justify-between px-0 gap-20 md:px-20 lg:px-10 lg:flex-row '>
          <FooterTopText />
          <FooterTopNav />
        </div>
        <FooterBottom />
      </div>
    </div>
  )
}

export default Footer