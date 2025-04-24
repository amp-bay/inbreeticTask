import React from 'react'
import DropDown from '../../assets/pngs/DropDown.png'
import OurblogImage from '../../assets/pngs/OurblogImage.png'
import CategoryOne from '../../assets/pngs/CategoryOne.png'
import CategoryTwo from '../../assets/pngs/CategoryTwo.png'
import CategoryThree from '../../assets/pngs/CategoryThree.png'
import UserOne from '../../assets/pngs/UserOne.png'
import UserTwo from '../../assets/pngs/UserTwo.png'
import UserThree from '../../assets/pngs/UserThree.png'

const OurBlogs = () => {
  return (
    <div className='px-[9.375rem] py-[7.75rem]'>
        <div className=' flex flex-col items-center'>
            <img className='rounded-3xl w-full' src={OurblogImage} alt='Our blog Image'/>
            <div className='flex justify-between mt-14  '>
                <>
                <p className='w-[40%] font-normal text-[2.25rem] leading-[3.5rem] text-black font-manrope'>We connect our customers with the best, and help them keep up-and stay open.</p>
                </>
                <ul className='flex flex-col w-[40%] gap-8 '>
                    <li className='flex  border-b-1 border-[#C4C4C4]  pb-4 justify-between text-[1.25rem] leading-[2rem] text-black font-open-sans'>We connect our customers with the best? <span><img src={DropDown} alt='DropDown button'/></span></li>
                    <li className='flex justify-between border-b-1 border-[#C4C4C4]  pb-4  text-[1.25rem] leading-[2rem] text-black font-open-sans'>Android research & development rockstar? <span><img src={DropDown} alt='DropDown button'/></span></li>
                </ul>
                
                
            </div>

        </div>
        <div className=' flex flex-col mt-[9.875rem]'>
            <div className='flex flex-col items-center mb-18'>
                <h4 className='font-normal text-[1.25rem] mb-3 text-center leading-[2rem] text-[#777777] font-open-sans'>Our Blog</h4>
                <p className='  w-[80%] font-normal text-[3rem] text-center leading-[4.5rem] text-black font-manrope'>Value proposition accelerator product management venture</p>

            </div>

            <div className='flex justify-between  '>
                <div className='max-h-[220px] w-[25%]'>
                    <img className='w-full mb-6' src={CategoryOne} alt='image'/>
                    <p className='mb-3'>Category<span className='pl-3 font-normal text-[1rem] leading-[1.75rem] text-[#777777] font-open-sans'>November 22, 2021</span></p>
                    <p className='mb-5 w-[90%]'>Pitch termsheet backing validation focus release.</p>
                    <div className='flex gap-3'>
                        <img className='w-8 h-8' src={UserOne}/>
                        <p className='font-normal text-[1rem] leading-[1.75rem] text-black font-open-sans'>Chandler Bing</p>
                    </div>
                </div>

                <div className='min-h-[220px] w-[25%]'>
                    <img className='w-full   mb-6' src={CategoryTwo} alt='image'/>
                    <p className='mb-3'>Category<span className='pl-3 font-normal text-[1rem] leading-[1.75rem] text-[#777777] font-open-sans'>November 22, 2021</span ></p>
                    <p className='mb-5 w-[90%]'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                    <div className='flex gap-3'>
                        <img className='w-8 h-8' src={UserTwo}/>
                        <p className='font-normal text-[1rem] leading-[1.75rem] text-black font-open-sans'>Rachel Green</p>
                    </div>
                </div>
                <div className='min-h-[220px] w-[25%]'>
                    <img className='w-full  mb-6' src={CategoryThree} alt='image'/>
                    <p className='mb3'>Category<span className='pl-3  font-normal text-[1rem] leading-[1.75rem] text-[#777777] font-open-sans'>November 22, 2021</span></p>
                    <p className='mb-5 w-[90%]'>Beta prototype sales iPad gen-z marketing network effects value proposition</p>
                    <div className='flex gap-3'>
                        <img className='w-8 h-8' src={UserThree}/>
                        <p className='font-normal text-[1rem] leading-[1.75rem] text-black font-open-sans'>Monica Geller</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[5.25rem]'>
                <button className='text-center cursor-pointer border border-[#0A2640] font-bold text-[1.25rem] leading-[1.75rem] text-[#0A2640] font-open-sans px-14 py-4 rounded-4xl'>Load more</button>   
            </div>

        </div>
    </div>
  )
}

export default OurBlogs