import Ellipse from '../assets/pngs/Ellipse.png'
import Logo from '../assets/svgs/Logo.svg'


const Footer = () => {
  return (
    <div className="px-25 mb-23 bg-white ">

      <div className="flex justify-center items-center min-h-[300px] bg-blue-500 bg-no-repeat mb-21"
      style={{
        backgroundImage: `url(${Ellipse})`,
        backgroundPosition: 'top right'}}>

        <div className="text-center max-w-m px-[15.125rem] py-18">
          <p className="mb-6 text-lg text-[#FFFFFF] font-normal text-[3rem] leading-[4.5rem] font-manrope ">
            An enterprise template to ramp up your company website
          </p>
          <form className='flex justify-center items-center mt-12 gap-6'>
            <input
              type="text"
              placeholder="Your email address"
              className="w-[23.125rem] px-8 py-3 rounded-lg border border-gray-300 text[#000000] bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="py-4 px-14 gap-[0.5rem] bg-[#65E4A3] border-2 border-[#65E4A3] rounded-[3.5rem]"
            >
              Start now
            </button>
          </form>
        </div>

      </div>

      <div className='flex justify-between pt-21 bg-white'>

      <div className='w-[35%] '>
        <a className='flex items-center gap-[0.704rem] text-[2.703rem] leading-[2.125rem] text-[#0A2640] font-manrope mb-10' href='#'>
          <img src={Logo} alt="logo" />
          <span className='text-[2.703rem] font-manrope'>Boldo</span>
        </a>
        <p className='font-normal w-[70%] text-[1rem] leading-[1.75rem] text-[#777777] font-open-sans mb-16'>
          Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
        </p>
        <p className='font-normal text-[1rem] leading-[1.75rem] text-[#777777] font-open-sans'>All rights reserved.</p>
      </div>

      <div className='flex justify-around w-[60%] pb-[7.313rem]'>
        <div className=''>
          <b className='font-bold text-[1.25rem] leading-[2rem] text-black font-open-sans'>Landings</b>
          <ul className='flex flex-col mt-8 gap-8 font-normal text-[1.25rem] leading-[2rem] text-[#777777] font-open-sans'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div>
          <b className='font-bold text-[1.25rem] leading-[2rem] text-black font-open-sans'>Company</b>
          <ul className='flex flex-col mt-8 gap-8 font-normal text-[1.25rem] leading-[2rem] text-[#777777] font-open-sans'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Career<span className='ml-2.5 py-[0.0625rem] px-[0.875rem]  gap-[0.625rem] bg-[#65E4A3] rounded-full'>Hiring!</span></a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div>
          <b className='font-bold text-[1.25rem] leading-[2rem] text-black font-open-sans'>Resources</b>
          <ul className='flex flex-col gap-8 mt-8 font-normal text-[1.25rem] leading-[2rem] text-[#777777] font-open-sans'>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
      </div>

    </div>

    </div>
  )
}

export default Footer