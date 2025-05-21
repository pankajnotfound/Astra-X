'use client';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const FAQ = () => {

    const [menuOpen, setMenuOpen] = useState(0);

    const handleClick = (value:number) => {
        if(menuOpen == 0 || menuOpen != value){
            setMenuOpen(value)
        }
        else{
            setMenuOpen(0)
        }
    }
    
  return (
    <div className='flex flex-col justify-center items-start gap-5 '>
        <p className='text-4xl font-bold'>Frequently Asked Question</p>
        <p className='text-gray-500'>Our solutions are crafted to simplify business processes, strengthen security, and deliver scalable infrastructure to foster growth. Whether you're aiming to optimize operations or ensure seamless scalability, we’ve got you covered.</p>
        <div className='w-full flex gap-5 p-3 border-1 border-gray-300 rounded-lg bg-linear-to-b from-[#eae2ff] to-white'>
            <div className={`${menuOpen == 1 ? 'hidden' : 'flex' }`}>
                <FontAwesomeIcon onClick={() => handleClick(1)} icon={faPlus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className={`${menuOpen == 1 ? 'flex' : 'hidden' }`}>
                <FontAwesomeIcon onClick={() => handleClick(1)} icon={faMinus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <p className='text-xl font-bold'>Why is University education important?</p>
                <p className={`text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen == 1 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0' }`}>We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
            </div>
        </div>
        <div className='w-full flex gap-5 p-3 border-1 border-gray-300 rounded-lg bg-linear-to-b from-[#eae2ff] to-white'>
            <div className={`${menuOpen == 2 ? 'hidden' : 'flex' }`}>
                <FontAwesomeIcon onClick={() => handleClick(2)} icon={faPlus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className={`${menuOpen == 2 ? 'flex' : 'hidden' }`}>
                <FontAwesomeIcon onClick={() => handleClick(2)} icon={faMinus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <p className='text-xl font-bold'>Why is University education important?</p>
                <p className={`text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen == 2 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0' }`}>We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
            </div>
        </div>
        <div className='w-full flex gap-5 p-3 border-1 border-gray-300 rounded-lg bg-linear-to-b from-[#eae2ff] to-white'>
            <div className={`${menuOpen == 3 ? 'hidden' : 'flex' }`}>
                <FontAwesomeIcon onClick={() => handleClick(3)} icon={faPlus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className={`${menuOpen == 3 ? 'flex' : 'hidden' }`}>
                <FontAwesomeIcon onClick={() => handleClick(3)} icon={faMinus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <p className='text-xl font-bold'>Why is University education important?</p>
                <p className={`text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen == 3 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0' }`}>We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
            </div>
        </div>
        <div className='w-full flex gap-5 p-3 border-1 border-gray-300 rounded-lg bg-linear-to-b from-[#eae2ff] to-white'>
            <div className={`${menuOpen == 4 ? 'hidden' : 'flex' }`}>
                <FontAwesomeIcon onClick={() => handleClick(4)} icon={faPlus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className={`${menuOpen == 4 ? 'flex' : 'hidden' }`}>
                <FontAwesomeIcon onClick={() => handleClick(4)} icon={faMinus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <p className='text-xl font-bold'>Why is University education important?</p>
                <p className={`text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen == 4 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0' }`}>We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
            </div>
        </div>
        <div className='w-full flex gap-5 p-3 border-1 border-gray-300 rounded-lg bg-linear-to-b from-[#eae2ff] to-white'>
            <div className={`${menuOpen == 5 ? 'hidden' : 'flex' }`}>
                <FontAwesomeIcon onClick={() => handleClick(5)} icon={faPlus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className={`${menuOpen == 5 ? 'flex' : 'hidden' }`}>
                <FontAwesomeIcon onClick={() => handleClick(5)} icon={faMinus} className={`!w-3 !h-3 p-2 `} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <p className='text-xl font-bold'>Why is University education important?</p>
                <p className={`text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen == 5 ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0' }`}>We regularly release updates to enhance the functionality and performance of our app. Rest assured, you'll always have access to the latest features and improvements.</p>
            </div>
        </div>
    </div>
  )
}

export default FAQ