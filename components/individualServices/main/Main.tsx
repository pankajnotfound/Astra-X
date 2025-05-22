import React from 'react'
import OurServices from './leftSection/OurServices'
import SendMessage from './leftSection/SendMessage'
import WhatWeOffer from './rightSection/WhatWeOffer'
import Steps from './rightSection/Steps'
import Benefits from './rightSection/Benefits'
import WhyUs from './rightSection/WhyUs'
import FAQ from './rightSection/FAQ'

type propsType = {
    info : {
        ServiceImage : string;
        ServiceDetailHeading : string;
        ServiceDetails : string;
    };
}

const Main = (props : propsType) => (
    <div className='w-full h-full flex flex-col justify-center items-start gap-10 p-3 md:p-10 lg:p-20 lg:flex-row'>
        <div className='w-full h-full flex flex-col gap-8 lg:max-w-[30%] xl:max-w-[400px] '>
            <OurServices />
            <SendMessage />
        </div>
        <div className='max-w-[850px] w-full h-full flex flex-col gap-20'>
            <WhatWeOffer info={props.info} />
            <Steps />
            <Benefits />
            <WhyUs />
            <FAQ />
        </div>
    </div>
)

export default Main