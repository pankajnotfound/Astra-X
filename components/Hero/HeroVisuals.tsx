import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'


const HeroVisuals = () => {
  return (
    <div className='relative hidden justify-center lg::scale-90 lg:flex sxl:scale-100'>
        {/* Backgournd visuals */}
        <div className='overflow-hidden p-5'>
            <div className=' animate-[RotatingAnimation_10s_linear_infinite]'>
                <div className=' relative w-200 h-200 border-1 border-gray-200 rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon icon={faCircle} className='absolute top-[-12] text-black !w-6.5 !h-6.5 ' />
                    <div className=' relative w-140 h-140 border-1 border-gray-200 rounded-full flex justify-center rotate-285'>
                        <FontAwesomeIcon icon={faCircle} className='absolute top-[-12] text-[#784afe] !w-6.5 !h-6.5 ' />
                    </div>
                </div>
            </div>
        </div>
        
        {/* Foreground visuals */}
        <div className={`absolute place-self-center`}>
            <Image src='/resources/herovisualcenter.png' alt='' width={330} height={330} />
        </div>
        <div className={`absolute place-self-center top-10 right-[-40] lg:right-0 sxl:right-[-40]`}>
            <Image src='/resources/herovisualtopimage.png' alt='' width={300} height={300}/>
        </div>
        <div className={`absolute place-self-center bottom-20 left-[-40] lg:left-0 sxl:left-[-40]`}>
            <Image src='/resources/herovisualbottomimage.png' alt='' width={300} height={300}/>
        </div>
    </div>
  )
}

export default HeroVisuals