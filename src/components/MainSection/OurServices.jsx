import React from 'react'
import coolfeatuture from '../../assets/pngs/coolfeatuture.png'
import coolerfeatuture from '../../assets/pngs/coolerfeatuture.png'
import coolestfeatuture from '../../assets/pngs/coolestfeatuture.png'
import ForwardArrow from '../../assets/svgs/ForwardArrow.svg'
import incomeImage from '../../assets/pngs/incomeImage.png'
import TickBox from '../../assets/pngs/TickBox.png'
import agileImage from '../../assets/pngs/agileImage.png'
import {ReactComponent as LeafIcon } from '../../assets/svgs/leaf.svg'
import {ReactComponent as EyesIcon } from '../../assets/svgs/eyes.svg'
import {ReactComponent as SunshineIcon } from '../../assets/svgs/sunshine.svg'
// import LeafIcon from '../../assets/svgs/leaf.svg';
// import leaf from '../../assets/svgs/leaf.svg';
// import eyes from '../../assets/svgs/eyes.svg'
// import sunshine from '../../assets/svgs/sunshine.svg'

const OurServices = () => {
  return (
    <div className='px-[9.375rem] bg-[#FFFFFF] pt-[5.25rem] pb-30 '>
    <div className='text-center'>
      <h4 className='font-open-sans font-normal text-[1.25rem] leading-[1.6] text-[#777] '>Our Services</h4>
      <p className='font-normal text-[3rem] leading-[1.5] text-center text-black font-manrope'>Handshake infographic mass market crowdfunding iteration.</p>
    </div>

    <div className='flex justify-between pt-[4.75rem]'>

      <div className=' w-[30%]'>
        <>
        <img  className='w-full'  src={coolfeatuture} alt='animation image' />
        </>
        <div className='mt-6'>
          <h4 className='font-normal text-[1.5rem] leading-[1.5] text-black font-open-sans' >Cool feature title</h4>
          <p className='mt-3 font-normal text-[1.25rem] leading-[1.6] text-[#777] font-open-sans'>Learning curve network effects return on investment.</p>
          <>
          <p className=' flex pb-3 justify-between mt-[1.75rem] w-[55%] border-b border-black font-bold text-[1.25rem] leading-[1.8] text-[#0a2640] font-open-sans'>
            <a className='flex  gap-3 ' href=''>Explore page <img src={ForwardArrow}/></a>
          </p>
          </>
        </div>
      </div>

      <div className='w-[30%]'>
        <>
        <img  className='w-full' src={coolerfeatuture} alt='animation image'/>
        </>
        <div className='mt-6 '>
          <h4 className='font-normal text-[1.5rem] leading-[1.5] text-black font-open-sans'>Even cooler feature</h4>
          <p className='mt-3 font-normal text-[1.25rem] leading-[1.6] text-[#777] font-open-sans'>Learning curve network effects return on investment.</p>
          <>
          <p className=' flex pb-3 justify-between mt-[1.75rem] w-[55%] border-b border-black font-bold text-[1.25rem] leading-[1.8] text-[#0a2640] font-open-sans'>
            <a className='flex  gap-3 ' href=''>Explore page <img src={ForwardArrow}/></a>
          </p>
          </>
        </div>
      </div>

      <div className='w-[30%]'>
        <>
        <img className='w-full' src={coolestfeatuture} alt='animation image' />
        </>
        <div className='mt-6'>
          <h4 className='font-normal text-[1.5rem] leading-[1.5] text-black font-open-sans'>Even cooler feature</h4>
          <p className='mt-3 font-normal text-[1.25rem] leading-[1.6] text-[#777] font-open-sans'>Learning curve network effects return on investment.</p>
          <>
          <p className=' flex pb-3 justify-between mt-[1.75rem] w-[55%] border-b border-black font-bold text-[1.25rem] leading-[1.8] text-[#0a2640] font-open-sans'>
            <a className='flex  gap-3 ' href=''>Explore page <img src={ForwardArrow}/></a>
          </p>
          </>

        </div>
      </div>
      
    </div>

    <div className=' flex mt-[11.563rem] justify-between'>
      <div className='w-[45%]'>
        <img src={incomeImage}/>
      </div>
      <div className=' w-[40%] pt-[4.125rem] '>
        <p className='font-normal text-[2.25rem] leading-[1.56] text-black font-monrope'>We connect our customers with the best, and help them keep up-and stay open.</p>
        <div className='flex flex-col mt-10'>
            <div className='flex gap-[1.688rem] mb-[1.75rem] '><img className='w-8 h-8' src={TickBox}/> <p className='font-normal text-[1.25rem] leading-[1.6] text-black font-open-sans'>We connect our customers with the best.</p></div>
            <div className='flex gap-[1.688rem] mb-[1.75rem]'><img className='w-8 h-8'  src={TickBox}/> <p className='font-normal text-[1.25rem] leading-[1.6] text-black font-open-sans'>Advisor success customer launch party.</p></div>
            <div className='flex gap-[1.688rem] mb-[1.75rem]'><img className='w-8 h-8'  src={TickBox}/> <p className='font-normal text-[1.25rem] leading-[1.6] text-black font-open-sans'>Business-to-consumer long tail.</p></div>
        </div>

        <button className='mt-14 text-[#fff] cursor-pointer border-2 border-[#0a2640] rounded-[3.5rem] px-14 py-4 bg-[#0a2640]'>Start now</button>

      </div>
    </div>

    <div className='flex justify-between my-30'>
      <div className=' w-[45%] pt-[6.625rem]'>
        <p className='font-normal text-[2.25rem] mb-16 leading-[1.56] text-black font-monrope'>We connect our customers with the best, and help them keep up-and stay open.</p>
        
        <div className='flex items-center pl-5 py-4 gap-3 mb-6 hover:bg-[#0A2640] hover:text-white  rounded-sm group' >
          <LeafIcon className="text-black group-hover:text-white" />
          
          <p className='font-semibold text-[1rem] leading-[1.75]  text-#000  font-open-sans'>We connect our customers with the best.</p>
        </div>
        <div  className='flex items-center  pl-5 py-4 gap-3 mb-6 hover:bg-[#0A2640]  hover:text-white rounded-sm group'>
          <EyesIcon className="text-black group-hover:text-white" />
          
          <p className='font-semibold text-[1rem] leading-[1.75] text-#000 font-open-sans'>Advisor success customer launch party..</p>
        </div>
        <div  className='flex items-center pl-5 py-4 gap-3 mb-6 hover:bg-[#0A2640] hover:text-white rounded-sm group'>
          <SunshineIcon className="text-black group-hover:text-white" />
          
          <p className='font-semibold text-[1rem] leading-[1.75]  text-#000 font-open-sans'>Business-to-consumer long tail.</p>
        </div>
      </div>

      <div className='w-[45%]'>
        <img src={agileImage}/>

      </div>
    </div>
  </div>
  )
}

export default OurServices