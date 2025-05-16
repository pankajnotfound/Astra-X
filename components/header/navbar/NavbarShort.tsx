'use client';
import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faXTwitter, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';

type propsType = {
    toggleMenu : () => void;
}

const NavbarShort = (props : propsType) => {

    const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
    const [blogMenuOpen, setBlogMenuOpen] = useState(false);
    const [pagesMenuOpen, setPagesMenuOpen] = useState(false);
    const [whichMenuOpen, setWhichMenuOpen] = useState(0);

    useEffect(() => {
        if(whichMenuOpen==1){
            setBlogMenuOpen(false);
            setPagesMenuOpen(false);
        }
        if(whichMenuOpen==2){
            setServiceMenuOpen(false);
            setPagesMenuOpen(false);
        }
        if(whichMenuOpen==3){
            setServiceMenuOpen(false);
            setBlogMenuOpen(false);
        }

        return () => {
            
        };
    }, [whichMenuOpen]);

  return (
    <div className='w-full h-screen flex flex-col justify-between '>
        <div>
            <div className='w-full flex justify-between items-center p-5 border-b-1 border-gray-300'>
                <Logo />
                <FontAwesomeIcon onClick={props.toggleMenu} icon={faXmark} className='!w-6 !h-6' />
            </div>
            <div className='w-full p-5 font-semibold text-[1.05rem] border-b-1 border-gray-300 space-y-5'>
                <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>
                    Homepages
                </div>
                <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>
                    About Us
                </div>
                <div className='relative group flex flex-col hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
                    <div onClick={() => {setServiceMenuOpen(!serviceMenuOpen); setWhichMenuOpen(1)}} className={`flex gap-1 justify-between items-center transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-[#784afe] `}>
                        <p>Services</p>
                        <FontAwesomeIcon icon={faAngleRight} className='w-2.5 text-black'/>
                    </div>
                    <div className={`w-full h-0 origin-top transition-opacity duration-200 ease-in-out ${serviceMenuOpen ? ' p-2 scale-y-100 opacity-100 h-fit' : 'scale-y-0 opacity-0' }`}>
                        <div className='w-full flex flex-col font-normal text-gray-600 space-y-2 '>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Services</div>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Services Details</div>
                        </div>
                    </div>
                </div>
                <div className='relative group hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
                    <div onClick={() => {setBlogMenuOpen(!blogMenuOpen); setWhichMenuOpen(2)}} className={`flex gap-1 justify-between items-center transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-[#784afe]  `}>
                        <p>Blog</p>
                        <FontAwesomeIcon icon={faAngleRight} className='w-2.5 text-black'/>
                    </div>
                    <div className={`w-full h-0 origin-top transition-opacity duration-200 ease-in-out ${blogMenuOpen ? ' p-2 scale-y-100 opacity-100 h-fit' : 'scale-y-0 opacity-0' }`}>
                        <div className='w-full flex flex-col font-normal text-gray-600 space-y-2 '>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Blog</div>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Blog Details</div>
                        </div>
                    </div>
                </div>
                <div className='relative group hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer'>
                    <div onClick={() => {setPagesMenuOpen(!pagesMenuOpen); setWhichMenuOpen(3)}} className={`flex gap-1 justify-between items-center transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-[#784afe]  `}>
                        <p>Pages</p>
                        <FontAwesomeIcon icon={faAngleRight} className='w-2.5 text-black'/>
                    </div>
                    <div className={`w-full h-0 origin-top transition-opacity duration-200 ease-in-out ${pagesMenuOpen ? ' p-2 scale-y-100 opacity-100 h-fit' : 'scale-y-0 opacity-0' }`}>
                        <div className='w-full flex flex-col font-normal text-gray-600 space-y-2 '>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Features</div>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Pricing</div>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Integrations</div>
                            <div className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 hover:text-[#784afe]'>Career</div>
                        </div>
                    </div>
                </div>
                <div className='hover:text-[#784afe] transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-1 '>
                    Contact
                </div>
            </div>
        </div>
        <div className='w-full flex flex-col p-7 gap-5'>
            <div className='w-full flex flex-col  text-start'>
                <div className='w-full flex gap-1'>
                    <p className='text-gray-400'>Mail:</p>
                    <p className='hover:text-[#784afe] cursor-pointer'>info@astrax.com</p>
                </div>
                <div className='w-full flex gap-1'>
                    <p className='text-gray-400'>Phone:</p>
                    <p className='hover:text-[#784afe] cursor-pointer'>+123 456 789 00</p>
                </div>
            </div>
            <div>
                <div className='flex gap-0 '>
                    <div className=' bg-gray-200 flex text-gray-500 hover:text-[#784afe] cursor-pointer'>
                        <FontAwesomeIcon icon={faFacebook} className='w-4 m-3 ' />
                    </div>
                    <div className=' bg-gray-200 flex text-gray-500 hover:text-[#784afe] cursor-pointer'>
                        <FontAwesomeIcon icon={faXTwitter} className='w-4 m-3 ' />
                    </div>
                    <div className=' bg-gray-200 flex text-gray-500 hover:text-[#784afe] cursor-pointer'>
                        <FontAwesomeIcon icon={faLinkedin} className='w-4 m-3 ' />
                    </div>
                    <div className=' bg-gray-200 flex text-gray-500 hover:text-[#784afe] cursor-pointer'>
                        <FontAwesomeIcon icon={faBehance} className='w-4 m-3 ' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarShort