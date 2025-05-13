'use client';
import React, { useEffect, useState } from 'react'
import HeroText from './HeroText'
import HeroVisuals from './HeroVisuals'

const HeroMain = () => {

    const [heroImageVisible, setHeroImageVisible] = useState(false);
    const heroImagesAnimationThreshold = 120;

    useEffect(() => {
        const scrollValueUpdater = () => {
            const scrollValue = window.scrollY;
            const isHeroImageVisible = scrollValue > heroImagesAnimationThreshold;
            if(isHeroImageVisible){
                setHeroImageVisible(true);
            }  
            else{
                console.log(scrollValue);
                setHeroImageVisible(false);
            }
        };
        window.addEventListener('scroll', scrollValueUpdater);

        return () => {
            window.removeEventListener('scroll', scrollValueUpdater)
        };
    }, []);

  return (
    <div className='w-full h-fit flex justify-center px-20 py-10 gap-0'>
        <HeroText imageVisible = {heroImageVisible} />
        <HeroVisuals  />
    </div>
  )
}

export default HeroMain