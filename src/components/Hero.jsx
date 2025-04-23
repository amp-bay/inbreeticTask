import React from 'react'
import NavBar from './NavBar'
import HeroOne from '../assets/pngs/HeroOne.png'
import HeroTwo from '../assets/pngs/HeroTwo.png'
import HeroThree from '../assets/pngs/HeroThree.png'
import WhiteLogo from '../assets/pngs/WhiteLogo.png'
import PrestoLog from '../assets/pngs/PrestoLog.png'
import Ellipse from '../assets/pngs/Ellipse.png'

// import Logo from '../assets/svgs/Logo.svg'

const Hero = () => {
  return (
    <div className="px-[6.25rem] pt-[3.5rem] bg-blue-500 bg-no-repeat"
    style={{
      backgroundImage: `url(${Ellipse})`,
      backgroundPosition: 'top right',
    }}
  >
        <NavBar/>
        <div className='flex justify-between pt-16 mb-14  '>
          <div className='w-[50%] my-[3.531rem]'>
            <p className='font-normal  font-manrope text-5xl leading-[4.5rem] text-white '>Save time by building  fast with Boldo Template </p>
            <p className='font-open-sans mt-4 font-normal text-[1rem] leading-[1.75rem] text-[#F1F1F1]'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
            <div className='font-open-sans flex gap-6 mt-10'>
              <button className='py-4 px-14 bg-[#65E4A3] cursor-pointer rounded-[3.5rem] text-[#0A2640]'>Buy template</button>
              <button className=' border  border-[#FFFFFF] cursor-pointer py-4 px-14 bg-transparent rounded-[3.5rem] text-[#FFFFFF]'>Explore</button>
            </div>
          </div>
          <div className=' flex flex-col  gap-[1.606rem] w-[40%]'>
            <div className='w-full' ><img className='w-full' src={HeroOne} alt='Hero Image'/></div>
            <div className='flex justify-between'>
              <img className='w-[40%]' src={HeroTwo} alt='Hero Image'/><img className='w-[50%]' src={HeroThree} alt='Hero Image'/>
            </div>
            
          </div>
        </div>
        <div className='  relative flex justify-between pb-16   '>
          <div className=" absolute w-full h-full left-0 top-0 bg-gradient-to-r from-[#0A2640] via-[#0A2640]/[.1] to-[#0A2640]"></div>
          <div className='font-manrope flex justify-between w-full'>
            <div className='flex gap-[0.669rem] justify-center items-center'><img  className='h-[2.625rem] w-[2.625rem] ' src={WhiteLogo} alt="logo"/><span className='text-[2.703rem] text-[#FFFFFF]'>Boldo</span></div>
            <div className='flex  gap-[0.669rem] justify-center items-center '><img className='h-[2.625rem] w-[2.625rem] ' src={PrestoLog} alt="logo"/><span className='text-[2.703rem] text-[#FFFFFF]'>Presto</span></div>
            <div className='flex  gap-[0.669rem] justify-center items-center'><img className='h-[2.625rem] w-[2.625rem] '  src={WhiteLogo} alt="logo"/><span className='text-[2.703rem] text-[#FFFFFF]'>Boldo</span></div>
            <div className='flex  gap-[0.669rem] justify-center items-center'><img className='h-[2.625rem] w-[2.625rem] ' src={PrestoLog} alt="logo"/><span className='text-[2.703rem] text-[#FFFFFF]'>Presto</span></div>
            <div className='flex  gap-[0.669rem] justify-center items-center'><img className='h-[2.625rem] w-[2.625rem] ' src={WhiteLogo} alt="logo"/><span className='text-[2.703rem] text-[#FFFFFF]'>Boldo</span></div>
            <div className='flex  gap-[0.669rem] justify-center items-center'><img className='h-[2.625rem] w-[2.625rem] ' src={PrestoLog} alt="logo"/><span className='text-[2.703rem] text-[#FFFFFF]'>Presto</span></div>
           
          </div>
          
        </div>
    </div>
  )
}

export default Hero