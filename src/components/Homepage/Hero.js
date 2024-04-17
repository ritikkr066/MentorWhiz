"use client"
import React from 'react';
import Link from 'next/link';
import DropdownMenu from './DropDownMenu';
import PopularSearchComponent from './PopularSearch';

const Hero = () => {
	const handleSearch = (filters) => {
		// Handle search logic here using the filters
		console.log(filters);
	  };
  return (
    <>
       <div
        	style={{
					backgroundImage: `url("images/hero.svg")`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
				className="flex items-center  justify-start w-full h-[100vh] sm:h-[75vh] lg:h-full lg:justify-center ">
						<div className="flex flex-col  px-5 lg:px-[120px]  py-[120px]    w-full h-full">
							<h2 className="hero-text flex justify-center items-center  text-white text-[20px] lg:text-[55px] font-semibold">
                            Find Your Next Perfect Dream Home
							</h2>
							{/* <h2 className="text-white text-[18px] lg:text-[22px] font-medium">
								ANYWHERE ANYTIME
							</h2> */}
							<p className="flex justify-between  items-center px-[10vw] text-white text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							</p>
                            <div className='px-[1vw] md:px-[10vw] md:mx-6 py-1 my-3'><DropdownMenu onSearch={handleSearch}/></div>
							<div className='hidden md:block'><PopularSearchComponent/></div>
							<Link
								href="/products"
								className="text-base font-normal text-black py-auto font-poppins">
								<button className="flex flex-row items-center justify-center rounded-md py-2 px-4 bg-gradient-to-t from-[#FAAC06]  to-[#EB8105]">
									<p className="flex gap-1 font-medium captilize lg:uppercase">
										Explore <span className="hidden lg:flex">Now</span>
									</p>
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none">
											<g clipPath="url(#clip0_4893_5386)">
												<path
													d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"
													fill="black"
												/>
											</g>
											<defs>
												<clipPath id="clip0_4893_5386">
													<rect width="24" height="24" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
								</button>
							</Link>
						</div>
					</div> 
    </>
  );
}

export default Hero;
