import React from 'react'

const FooterTopNav = () => {
  return (
    <div className='flex flex-wrap gap-20 md:flex-nowrap sxl:gap-40 text-nowrap'>
        <div className='w-40 flex flex-col gap-6 md:w-auto'>
            <p className='text-2xl font-bold'>Company</p>
            <ul className='flex flex-col gap-4 opacity-70'>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>About</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Features</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Works</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Career</li>
            </ul>
        </div>
        <div className='w-40 flex flex-col gap-6 md:w-auto'>
            <p className='text-2xl font-bold'>Help</p>
            <ul className='flex flex-col gap-4 opacity-70'>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Customer Support</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Delivery Detail</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Term & Condition</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>
        <div className='w-40 flex flex-col gap-6 md:w-auto'>
            <p className='text-2xl font-bold'>Resources</p>
            <ul className='flex flex-col gap-4 opacity-70'>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Design Kit</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Development Tutorial</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>How To - Blog</li>
                <li className='transition-all duration-300 ease-in-out hover:translate-x-1 cursor-pointer'>Youtube Playlist</li>
            </ul>
        </div>
    </div>
  )
}

export default FooterTopNav