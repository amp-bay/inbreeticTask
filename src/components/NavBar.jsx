import React from 'react'
import Logo from '../assets/svgs/Logo.svg'

const NavBar = () => {
  return (
    <div className='flex justify-between'>
        <div >
          <a className='flex  items-center text-[#FFFFFF] gap-[0.704rem]' href='#'><img src={Logo} alt="logo"/><span className='text-[2.703rem] font-manrope'>Boldo</span></a>
        </div>

        <div className='flex font-semibold items-center text-[1rem] leading-[1.75rem] text-white font-open-sans'>
          <ul className='flex gap-10'>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <button className='ml-10 px-10 py-2 cursor-pointer bg-[#FFFFFF] rounded-[1.5rem] text-[#0A2640] '>Log in</button>
        </div>
    </div>
  )
}

export default NavBar