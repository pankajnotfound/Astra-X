import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faComments } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const LetsTalk = () => {
  return (
    <div className='w-screen h-screen flex flex-col text-white overflow-hidden p-5 gap-5 justify-center items-center bg-[url(/resources/projectsection.png)] bg-center lg:h-[80vh] xl:h-[80vh] '>
        <div className=' hidden w-full h-full bg-linear-to-b from-white to-[#784afe] mix-blend-luminosity bg-cover bg-no-repeat'></div>
        <FontAwesomeIcon icon={faComments} className=' !w-15 !h-15' />
        <p className=' text-5xl font-bold' >Have a project in mind?</p>
        <p className=' lg:max-w-150 '>We offer a wide range of digital marketing services that cater to businesses of all sizes a forward-thinking and clever approach.</p>
        <div className=' py-10 lg:py-5'>
            <div className='bg-white text-black flex w-fit justify-center items-center gap-2 text-center px-6 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                GET IN TOUCH
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </div>
        </div>        
    </div>
  )
}

export default LetsTalk