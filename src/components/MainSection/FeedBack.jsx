import { useState } from 'react';
import LeftArrow from '../../assets/pngs/LeftArrow.png'
import RightArrow from '../../assets/pngs/RightArrow.png'
import UserOne from '../../assets/pngs/UserOne.png'
import UserTwo from '../../assets/pngs/UserTwo.png'
import UserThree from '../../assets/pngs/UserThree.png'


const FeedBack = () => {

    const [hoveredEffect , setHoveredEffect] = useState(0);

  
    const handleArrowClick = (direction) => {
        setHoveredEffect((prevIndex) => {
            if (direction === 'left') {
                return prevIndex === 0 ? 2 : prevIndex - 1; // Loop to the previous item
            }
            return prevIndex === 2 ? 0 : prevIndex + 1; // Loop to the next item
        });
    };

  return (
    <div className='flex flex-col px-[9.375rem] py-24 bg-blue-500'>
        <div className=' flex justify-between mb-18'>
            <p className='font-normal text-[3rem]  mb-18 w-[60%] leading-[1.5] text-white font-monrope'>An enterprise template to ramp up your company website</p>
            <div className='flex gap-7 mt-auto'>
                <img className='w-18 h-18' src={LeftArrow} alt='Left Arrow ' onClick={() => handleArrowClick('left')}/>
                <img className='w-18 h-18' src={RightArrow} alt='Right Arrow' onClick={() => handleArrowClick('right')}/>
                


            </div>
        </div>
        <div className='flex justify-between   '>
            <div className={`flex flex-col px-10 w-[30%] py-10 bg-[#FFFFFF] rounded-lg transform transition-all duration-700 ${hoveredEffect === 0 ? 'scale-115' : ''}`}>
                <p className=' font-normal text-[1.5rem] leading-[2.25rem] pb-10 text-black font-open-sans'>“Buyer buzz partner network disruptive non-disclosure agreement business”</p>
                
                <div className='flex gap-4'>
                    <img src={UserOne} alt='use picture'/>
                    <div>
                        <p className='font-bold text-[1rem] leading-[2] text-[#0A2640] '>Albus Dumbledore</p>
                        <p className='font-normal text-[0.875rem] leading-[2] text-[#0A2640]'>Manager @ Howarts</p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col w-[30%] px-10 py-10 bg-[#FFFFFF] rounded-lg transform transition-all duration-700 ${hoveredEffect === 1 ? 'scale-125' : ''}`}>
                <p className='font-normal text-[1.5rem] pb-10 leading-[1.5] text-black font-open-sans'>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</p>
                
                <div className='flex gap-4'>
                    <img src={UserTwo} alt='use picture'/>
                    <div>
                        <p className='font-bold text-[1rem] leading-[2] text-[#0A2640] '>Severus Snape</p>
                        <p className='font-normal text-[0.875rem] leading-[2] text-[#0A2640]'>Manager @ Slytherin</p>
                    </div>
                </div>
            </div>
            <div                     className={`flex flex-col w-[30%] px-10 py-10 bg-[#FFFFFF] rounded-lg transform transition-all duration-700 ${hoveredEffect === 2 ? 'scale-115' : ''}`}
            >
                <p className=' font-normal text-[1.5rem] pb-10 leading-[1.5] text-black font-open-sans'>“Release facebook responsive web design business model canvas seed money monetization.”</p>
                
                <div className='flex gap-4'>
                    <img src={UserThree} alt='use picture'/>
                    <div>
                        <p className='font-bold text-[1rem] leading-[2] text-[#0A2640] '>Harry Potter</p>
                        <p className='font-normal text-[0.875rem] leading-[2] text-[#0A2640]'>Team Leader @ Gryffindor</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FeedBack