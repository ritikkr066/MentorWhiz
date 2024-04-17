import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap mx-auto lg:w-full">
      <Image alt="ecommerce" width={500} height={500}  className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={"/images/about.svg"}/>
      <div className="w-full flex flex-col mt-6 lg:w-1/2 lg:pl-10 lg:py-6 justify-center  md:px-[10vw] ">
      
        <h1 className="mb-1 text-3xl font-bold text-gray-900 ">About Us</h1>
       
        <p className="leading-relaxed w-[4/5]">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="px-2 py-1 my-4 text-black  rounded-[16px] ">
                <Link href={"/login"}>
                  <button className="px-4 py-3 bg-black text-white  rounded-[16px]">
                    
                   Learn More
                  </button>
                </Link>
              </div>
        
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default AboutUs;
