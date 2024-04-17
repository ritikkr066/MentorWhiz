import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className="w-full h-fit">
        <div className="flex flex-col md:flex-row">
          {/* Left half */}

          <div className="flex flex-col items-start justify-start h-fit p-10 px-[10vw]  md:w-1/2">
            <div className="text-[40px] flex flex-col  font-bold text-center">
              <div className="flex justify-start ">Community</div>
              <div> of <span className="text-[#FFA217]">Mentors</span> &
              </div>
              <div className="text-[#A422BA] flex justify-start">Toppers</div>
            </div>
            <div>
              <div className="text-[#384250]">
                Crack your preparations with guidance from the best. Rethwrit
                brings to you a community ofAll Stages toppers!
              </div>
            </div>
            <div className="flex flex-row my-4">
              <div className="px-2 py-1 text-black  rounded-[16px] ">
                <Link href={"/login"}>
                  <button className="px-4 py-3 bg-black text-white  rounded-[16px]">
                    
                    Become Mentor
                  </button>
                </Link>
              </div>
              <div className="px-2 py-1 text-black  rounded-[16px] ">
                <Link href={"/login"}>
                  <button className="px-4 py-3 bg-gray-100 text-black  rounded-[16px]">
                    
                   Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right half */}
          <div className="justify-center hidden my-10 md:flex h-fit md:w-1/2">
            <Image
              width={400}
              height={400}
              className="grid justify-center items-center w-[60vh] h-[60vh]"
              src={"/images/Hero1.svg"}
              alt="Your Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
