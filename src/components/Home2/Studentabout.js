import React from 'react';
import Image from 'next/image';
import Studentaboutcompo from './StudentaboutCompo';
import Link from 'next/link';
const Studentabout = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-2 py-4 mx-auto">
    <div className="flex flex-col w-full ">
      <h1 className="mb-4 md:text-[48px] text-[30px] lg:pr-[45vw] font-bold ">What our students say  <span>about us</span> </h1>
    </div>
    <div className='flex overflow-x-auto scrollbar-hide'>
        <Studentaboutcompo
            desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the  when an unknown printer took a galley"
            name = "Ritik"
            role = "Ui "
            />
            <Studentaboutcompo
            desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the  when an unknown printer took a galley"
            name = "Ritik"
            role = "Ui "
            />
            <Studentaboutcompo
            desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the  when an unknown printer took a galley"
            name = "Ritik"
            role = "Ui "
            />
            <Studentaboutcompo
            desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the  when an unknown printer took a galley"
            name = "Ritik"
            role = "Ui "
            />
            <Studentaboutcompo
            desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry s standard dummy text ever since the  when an unknown printer took a galley"
            name = "Ritik"
            role = "Ui "
            />
            </div>

            <div className="px-2 py-1 my-4 lg:py-6 flex justify-center text-black  rounded-[8px] ">
                <Link href={"/login"}>
                  <button className="px-6 py-3 bg-black text-white  rounded-[8px]">
                    
                  See All
                  </button>
                </Link>
              </div>
  </div>
</section>
    </>
  );
}

export default Studentabout;
