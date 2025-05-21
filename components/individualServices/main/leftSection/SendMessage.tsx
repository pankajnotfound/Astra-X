import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SendMessage = () => {
  return (
    <form className='flex flex-col justify-center items-start gap-4 p-4 rounded-lg bg-gray-100'>
        <p className='text-2xl font-semibold'>Send Us Message</p>
        <input type="text" placeholder='Your Name*' className='w-full px-6 py-4 rounded outline-gray-200 outline-1 bg-white focus:outline-1 focus:outline-black' />
        <input type="text" placeholder='Email Address*' className='w-full px-6 py-4 rounded outline-gray-200 outline-1 bg-white focus:outline-1 focus:outline-black' />
        <input type="text" placeholder='Email' className='w-full px-6 py-4 rounded outline-gray-200 outline-1 bg-white focus:outline-1 focus:outline-black' />
        <textarea placeholder='Your Message' className='w-full min-h-40 px-6 py-4 rounded outline-gray-200 outline-1 bg-white focus:outline-1 focus:outline-black' />
        <div className=' w-full py-7 lg:py-5'>
            <button type='submit' className='bg-[#784afe] flex w-full justify-center items-center gap-2 text-center py-4 rounded-xl font-bold text-white hover:-translate-y-1 transition-all duration-400 ease-in-out'>
                SUBMIT
                <FontAwesomeIcon icon={faArrowRightLong} className='w-4' />
            </button>
        </div>
    </form>
  )
}

export default SendMessage