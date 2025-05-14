'use client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type propsType = {
  children : ReactNode;
}

type scrollContextType = {
  heroImageVisible: boolean;
  changeHeader: boolean;
}

const ScrollValueContext = createContext<scrollContextType>({
  heroImageVisible: false,
  changeHeader: false,
});

export const ScrollValueInfo = ({children}: propsType) => {

  const [heroImageVisible, setHeroImageVisible] = useState(false);
  const [changeHeader , setChangeHeader] = useState(false);
  const heroImagesAnimationThreshold = 120;

  useEffect(() => {
      const scrollValueUpdater = () => {
          const scrollValue = window.scrollY;
          const isHeroImageVisible = scrollValue > heroImagesAnimationThreshold;
          if(isHeroImageVisible){
              setHeroImageVisible(true);
              setChangeHeader(true);
          }  
          else{
              console.log(scrollValue);
              setHeroImageVisible(false);
              setChangeHeader(false);
          }
      };
      window.addEventListener('scroll', scrollValueUpdater);

      return () => {
          window.removeEventListener('scroll', scrollValueUpdater)
      };
  }, []);

  return (
    <ScrollValueContext.Provider value={{heroImageVisible, changeHeader}} >
      {children}
    </ScrollValueContext.Provider>
  )
}

export const useScrollValues = () => useContext(ScrollValueContext);