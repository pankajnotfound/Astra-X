import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/' className='w-fit h-fit flex'>
        <Image src='/resources/logo.png' alt='Logo' width={200} height={200} className='' />
    </Link>
  )
}

export default Logo