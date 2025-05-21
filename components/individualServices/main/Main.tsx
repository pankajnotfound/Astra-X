import React from 'react'
import OurServices from './leftSection/OurServices'
import SendMessage from './leftSection/SendMessage'
import WhatWeOffer from './rightSection/WhatWeOffer'
import Steps from './rightSection/Steps'
import Benefits from './rightSection/Benefits'
import WhyUs from './rightSection/WhyUs'
import FAQ from './rightSection/FAQ'

const Main = () => (
    <div className='w-full h-full flex justify-center items-start gap-10 p-20'>
        <div className='w-fit h-full flex flex-col gap-8'>
            <OurServices />
            <SendMessage />
        </div>
        <div className='w-[850px] h-full flex flex-col gap-20'>
            <WhatWeOffer />
            <Steps />
            <Benefits />
            <WhyUs />
            <FAQ />
        </div>
    </div>
)

export default Main