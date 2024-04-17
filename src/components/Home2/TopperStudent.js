"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopperStudent() {

  const Column2 = ({ imageName, text, text2,text3 }) => (
    <>
           
      <div class="flex flex-col w-[360px] sm:w-fit    mb-4    m-0 text-gray-900   border-[2px] rounded-[20px]  mx-4 "> 
         <div className="flex "> <Image
            width={360}
            height={277}
            src={`/images/${imageName}`}
            alt=" random imgee"
            className=" rounded-[20px]   min-w-[340px] w-full "
          />
          </div>
          <div className="px-2 pb-4">
           <div class="mt-1 pt-4  text-[22px]  font-bold   justify-start flex  ">
                {text}
              </div>
              <div class=" text-[12px] text-[#4F4F4F] font-serif    justify-start flex  ">
                {text2}
              </div>
               
               
                </div>
            </div>
          
            
    </>
  );

  return (
    <> 
     <div className="flex px-4  items-center sm:items-start sm:justify-start  justify-center text-[32px] font-serif font-bold py-6">Our Topper Students</div>
        <div className="flex my-4 overflow-x-auto scrollbar-hide ">
      
        {/* <div className="flex flex-row "> */}
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Aimee Calderon"
              text2="B.Tech from NIT Patna"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
          <section className="">
            <Column2
              imageName="man1.svg"
              text="Esther Howard"
              text2="Simple Reflex Agents"
              text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            />
          </section>
         
        </div>
        <div className="px-2 py-1 my-4 flex justify-center text-black  rounded-[8px] ">
                <Link href={"/login"}>
                  <button className="px-6 py-3 bg-black text-white  rounded-[8px]">
                    
                  See All
                  </button>
                </Link>
              </div>
       
     {/* </div> */}
    </>
  );
}
