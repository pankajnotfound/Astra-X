import HeroText from './HeroText'
import HeroVisuals from './HeroVisuals'

const HeroMain = () => {

  return (
    <div className='w-full h-fit flex justify-center px-5 py-31 gap-0 sm:px-20  lg:scale-80 md:px-0 lg:py-10 sxl:scale-100 '>
        <HeroText />
        <HeroVisuals  />
    </div>
  )
}

export default HeroMain