import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


const HeaderButton = () => {
  return (
    <div className='bg-[#784afe] flex w-40 justify-center gap-2 text-center py-4 rounded-xl font-bold text-white'>
        LET'S TALK
        <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
    </div>
  )
}

export default HeaderButton