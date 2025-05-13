import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='w-fit h-fit flex'>
        <Image src='/resources/logo.png' alt='Logo' width={50} height={50} className='' />
        <p className='text-3xl font-bold'>Astrax</p>
    </div>
  )
}

export default Logo