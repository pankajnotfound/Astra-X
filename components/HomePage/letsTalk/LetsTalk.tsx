import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faComments } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const LetsTalk = () => {
  return (
    <div className='w-full h-screen relative flex flex-col text-white overflow-hidden text-center gap-5 justify-center items-center bg-[url(/resources/projectsection.png)] bg-center bg-cover bg-no-repeat lg:h-[80vh] xl:h-[80vh] '>
        <div className=' absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/50 to-[#784afe] mix-blend-lighten'></div>
        <FontAwesomeIcon icon={faComments} className='z-10 !w-15 !h-15' />
        <p className='z-10 text-5xl font-bold' >Have a project in mind?</p>
        <p className='z-10 lg:max-w-150 '>Get your website up and running today!</p>
        <div className='z-10 py-10 lg:py-5'>
            <div className='bg-white text-black flex w-fit justify-center items-center gap-2 text-center px-6 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET IN TOUCH
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>        
    </div>
  )
}

export default LetsTalk