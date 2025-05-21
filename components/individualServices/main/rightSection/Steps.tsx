import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'

const Steps = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
        <div className='w-full flex gap-8'>
            <div className='w-full flex flex-col justify-center items-start'>
                <p className='text-2xl font-bold'>01. Content Creation</p>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
            </div>
            <div className='w-full'>
                <Image src='/resources/serviceStep.png' alt='' width={1000} height={1000} className='' />
            </div>
        </div>
        <div className='w-full flex gap-8'>
            <div className='w-full'>
                <Image src='/resources/serviceStep.png' alt='' width={1000} height={1000} className='' />
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
                <p className='text-2xl font-bold'>01. Content Creation</p>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
            </div>
        </div>
        <div className='w-full flex gap-8'>
            <div className='w-full flex flex-col justify-center items-start'>
                <p className='text-2xl font-bold'>01. Content Creation</p>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
            </div>
            <div className='w-full'>
                <Image src='/resources/serviceStep.png' alt='' width={1000} height={1000} className='' />
            </div>
        </div>
        <div className='w-full flex gap-8'>
            <div className='w-full'>
                <Image src='/resources/serviceStep.png' alt='' width={1000} height={1000} className='' />
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
                <p className='text-2xl font-bold'>01. Content Creation</p>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
                <div className='w-full flex gap-3 justify-center items-center p-2'>
                    <FontAwesomeIcon icon={faCheckCircle} className='!w-5 !h-5 text-[#784afe]'/>
                    <p className='text-gray-500'>We craft high-quality, engaging content that aligns with your brand's voice and values.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps