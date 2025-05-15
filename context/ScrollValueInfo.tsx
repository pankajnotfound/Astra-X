'use client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type propsType = {
  children : ReactNode;
}

type scrollContextType = {
  heroImageVisible: boolean;
  changeHeader: boolean;
  aboutUsImageVisible: boolean;
  aboutUsCardVisible: boolean;
}

const ScrollValueContext = createContext<scrollContextType>({
  heroImageVisible: false,
  changeHeader: false,
  aboutUsImageVisible: false,
  aboutUsCardVisible: false,
});

export const ScrollValueInfo = ({children}: propsType) => {

  const [heroImageVisible, setHeroImageVisible] = useState(false);
  const [aboutUsImageVisible, setaboutUsimageVisible] = useState(false);
  const [aboutUsCardVisible, setaboutUsCardVisible] = useState(false);

  const [changeHeader , setChangeHeader] = useState(false);
  const heroImagesAnimationThreshold = 120;
  const aboutUsImageAnimationThreshold = 440;
  const aboutUsCardAnimationThreshold = 800;

  useEffect(() => {
      const scrollValueUpdater = () => {
          const scrollValue = window.scrollY;
          const isHeroImageVisible = scrollValue > heroImagesAnimationThreshold;
          const isaboutUsimageVisible = scrollValue > aboutUsImageAnimationThreshold;
          const isaboutUsCardVisible = scrollValue > aboutUsCardAnimationThreshold;

          if(isHeroImageVisible){
              setHeroImageVisible(true);
              setChangeHeader(true);
          }  
          else{
              setHeroImageVisible(false);
              setChangeHeader(false);
          }

          if(isaboutUsimageVisible){
              setaboutUsimageVisible(true);
          }  
          else{
              setaboutUsimageVisible(false);
          }

          if(isaboutUsCardVisible){
              setaboutUsCardVisible(true);
          }  
          else{
              setaboutUsCardVisible(false);
          }


          console.log(scrollValue);

      };
      window.addEventListener('scroll', scrollValueUpdater);

      return () => {
          window.removeEventListener('scroll', scrollValueUpdater)
      };
  }, []);

  return (
    <ScrollValueContext.Provider value={{heroImageVisible, changeHeader, aboutUsImageVisible, aboutUsCardVisible}} >
      {children}
    </ScrollValueContext.Provider>
  )
}

export const useScrollValues = () => useContext(ScrollValueContext);