import React from 'react'
import ValuesContent from './ValuesContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMoneyBill, faUsersLine, faUsersRays } from '@fortawesome/free-solid-svg-icons'
import ValuesStats from './ValuesStats'

const Values = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center overflow-hidden py-10 bg-linear-to-b from-[#eae2ff] to-white'>
        <div className='w-fit flex flex-col justify-center items-center pt-30  gap-4 text-center'>
            <p className='text-[#784afe]'>Our Values</p>
            <p className='text-5xl font-bold'>How AstraX helps</p>
            <ValuesContent />
        </div>
        <ValuesStats />
    </div>
    
  )
}

export default Values