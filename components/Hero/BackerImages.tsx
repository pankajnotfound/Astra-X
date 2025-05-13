import Image from 'next/image'
import React from 'react'

type propsType = {
    imageVisible : boolean;
}

const BackerImages = (props : propsType) => {

    
  return (
    <div className='flex justify-center items-center w-fit h-fit gap-4'>
        <Image src='/resources/google.png' alt='Google' width={80} height={30} className={`${props.imageVisible ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-500`} />
        <Image src='/resources/yahoo.png' alt='Google' width={80} height={30} className={`${props.imageVisible ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-500 delay-200`} />
        <Image src='/resources/netflix.png' alt='Google' width={80} height={30} className={`${props.imageVisible ? 'opacity-100' : 'opacity-0'} transition-all ease-in-out duration-500 delay-400`} />
    </div>
  )
}

export default BackerImages