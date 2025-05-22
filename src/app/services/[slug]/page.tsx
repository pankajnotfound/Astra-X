import React from 'react'
import Hero from '../../../../components/individualServices/hero/Hero'
import Main from '../../../../components/individualServices/main/Main'
import Services from '../../../../components/ServicesPage/allServices/Services'
import { notFound } from 'next/navigation'
import servicesData from '../../../../data/servicesData'


const page = async ({params,}:{params : Promise<{slug:string}>}) => {

  const param = await params;
  const id = param?.slug;

  if (id in servicesData ){
    const info = servicesData[id as keyof typeof servicesData] 
    console.log(info);

    return (
    <div className='flex flex-col justify-center items-center'>
        <Hero info={info} />
        <Main info={info} />
        <Services />
    </div>
  )
  }
  else {
    return notFound();
  }

  
}

export default page