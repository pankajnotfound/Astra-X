import React from 'react'
import NavbarElement from './NavbarElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-fit flex p-4 justify-center items-center gap-15 font-bold text-sm'>
        <Link href='/' className='hover:text-[#784afe] p-2 transition-all duration-300 ease-in-out'>
            HOME
        </Link>
        <Link href='/aboutus' className='hover:text-[#784afe] transition-all duration-300 ease-in-out'>
            ABOUT US
        </Link>
        <div className='relative group hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
            <div className='flex gap-1 items-center '>
                <p>SERVICES</p>
                <FontAwesomeIcon icon={faAngleDown} className='w-2.5 text-[#784afe]'/>
            </div>
            <div className="absolute left-0 top-full h-20 w-full pointer-events-auto group-hover:block hidden"></div>
            <div className='z-50 opacity-0 absolute min-w-75 top-17 bg-white flex flex-col pointer-events-none pt-3 gap-3 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-md group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                <NavbarElement image = '/resources/ideaicon.png' text = 'All Services' link='/services' />
                <NavbarElement image = '/resources/statistics.png' text = 'Web Development' link='/services/web-development' />
                <NavbarElement image = '/resources/connect.png' text = 'App Development' link='/services/app-development' />
                <NavbarElement image = '/resources/trophy.png' text = 'UI/UX Design' link='/services/uiux-design' />
                <NavbarElement image = '/resources/ideawindow.png' text = 'SEO Services' link='/services/seo-services' />
            </div>
        </div>
        <div className='relative group hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
            <div className='flex gap-1 items-center '>
                <p>PROJECTS</p>
                <FontAwesomeIcon icon={faAngleDown} className='w-2.5 text-[#784afe]'/>
            </div>
            <div className="absolute left-0 top-full h-20 w-full pointer-events-auto group-hover:block hidden"></div>
            <div className='z-50 opacity-0 absolute min-w-75 top-17 bg-white flex flex-col pointer-events-none pt-3 gap-3 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-md group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                <NavbarElement image = '/resources/blog.png' text = 'Blog' link='/' />
                <NavbarElement image = '/resources/blogdetail.png' text = 'Blog Details' link='/' />
            </div>
        </div>
        <div className='relative group hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
            <div className='flex gap-1 items-center '>
                <p>PAGES</p>
                <FontAwesomeIcon icon={faAngleDown} className='w-2.5 text-[#784afe]'/>
            </div>
            <div className="absolute left-0 top-full h-20 w-full pointer-events-auto group-hover:block hidden"></div>
            <div className='z-50 opacity-0 absolute min-w-75 top-17 bg-white flex flex-col pointer-events-none pt-3 gap-3 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-md group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 ease-in-out'>
                <NavbarElement image = '/resources/features.png' text = 'Features' link='/' />
                <NavbarElement image = '/resources/pricing.png' text = 'Pricing' link='/' />
                <NavbarElement image = '/resources/integration.png' text = 'Integrations' link='/' />
                <NavbarElement image = '/resources/career.png' text = 'Career' link='/' />
            </div>
        </div>
        <div className='hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
            CONTACT
        </div>
    </div>
  )
}

export default Navbar