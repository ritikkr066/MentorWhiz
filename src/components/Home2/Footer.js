import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
       <div className='flex flex-col relative -bottom-20 md:px-[15vw] px-[2vw]'>
            <div className='bg-[#FFA217] flex md:flex-row flex-col p-2  md:p-6 '>
                <div className='flex flex-col w-full px-1 md:w-3/4'>
                    <div className='md:text-[27px] text-[24px] text-white font-bold'>Looking for a Mentor?</div>
                    <div className='py-0 text-white md:py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                </div>
                <div className='flex-col md:w-1/4'>
                <div className="flex justify-center px-2 py-1 text-black md:my-4 lg:py-6 ">
                <Link href={"/login"}>
                  <button className="px-4 py-3 text-black text-[12px] bg-white  ">
                    
                  Explore Properties
                  </button>
                </Link>
              </div>
                </div>
            </div>
        </div>
      <footer className="text-gray-600 bg-black ">
       
  <div className="container flex flex-col flex-wrap px-12 py-6 pt-32 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
      <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
       <Image src={"/images/logo.svg"} width={100} height={100} alt='logo'/>
      </a>
      <p className="py-1 mt-2 text-sm text-white">Nit Patna</p>
      <p className="py-1 mt-2 text-sm text-white">7599584744</p>
      <p className="py-1 mt-2 text-sm text-white">example@example.com</p>
      <p className='py-2'>
      <span className="inline-flex justify-center py-1 mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
        <a className="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      </p>
    </div>
    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-[16px] font-bold tracking-widest text-white title-font">Company</h2>
        <nav className="mb-10 list-none">
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">About</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Meet the team </a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Account Review</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Contact us</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Terms & Conditions</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Privacy Policy</a>
          </li>
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
      <h2 className="mb-3 text-[16px] font-bold tracking-widest text-white title-font">Services</h2>
      <nav className="mb-10 list-none">
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">oon 1 Coaching</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Company Review </a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Account Review</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">HR Consulting</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">SEO Optimisation</a>
          </li>
         
        </nav>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
      <h2 className="mb-3 text-[16px] font-bold tracking-widest text-white title-font">Helpful Link</h2>
      <nav className="mb-10 list-none">
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Contact</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Live Chat</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Wish List</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">FAQ</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Return Policy</a>
          </li>
          <li className='py-1'>
            <a className="my-1 font-normal text-[14px] text-white hover:text-blue-800">Accessibility</a>
          </li>
        </nav>
      </div>
      <div className="w-full px-1 lg:w-1/4 md:w-1/2">
      <h2 className="mb-3 text-[16px] font-bold tracking-widest text-white title-font">Newsletter</h2>
        <nav className="mb-10 list-none">
          <li className='flex justify-start'>
           <p className='flex justify-start text-[10px] py-2 text-white'>Subscribe to our weekly Newsletter and receive updates via email.</p>
          </li>
          <li>
          <div className="flex flex-row border-gray-400 placeholder:text-[#667086] placeholder:text-[16px] my-4  border-[0.5px] mt-2 rounded-[5px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-[30px] rounded-[5px] bg-white text-[16px] pl-4 "
                />
                {/* onChange={handleChange} */}
                {/* required */}
                <Image width={50} height={50} alt="=" src="/images/tick.svg" className="px-4" />
              </div>
          </li>
          <li>
           <p className='font-bold text-[14px] text-white '>We Accept</p>
          </li>
          <li className='py-2'>
           <Image src={"/images/payment.jpg"} width={500} height={500} className='w-full h-[40px]' alt='payment' />
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-[#282B38]">
    <div className="container flex flex-col flex-wrap justify-center px-5 py-4 mx-auto sm:flex-row">
      <p className="flex justify-center text-sm text-center text-white sm:text-left"> All Rights Reserved  @ company 2023
      </p>
      
    </div>
  </div>
</footer>
    </>
  );
}

export default Footer;
