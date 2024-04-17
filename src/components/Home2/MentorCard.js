"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MentorCard() {

  const Column2 = ({ imageName, text, text2,text3,ctc}) => (
    <>
           
      <div class="flex flex-col w-[350px] sm:w-fit    mb-4    m-0 text-gray-900   border-[2px] rounded-[20px] mx-0 md:mx-4 "> 
         <div className="flex "> <Image
            width={350}
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
              <div class=" text-[14px] text-[#4F4F4F] font-normal     justify-start flex  ">
                {text2}
              </div>
              <div class=" text-[12px] text-black font-normal    justify-start flex  ">
                {text3}
              </div>
              <div class=" text-[12px] text-black font-normal    justify-start flex  ">
                {ctc}
              </div>
               
                </div>
            </div>
          
            
    </>
  );

  return (
    <> 
     <div className="flex px-4  items-center sm:items-start sm:justify-start  justify-center text-[32px] font-serif font-bold py-6">Our Mentor</div>
       <div className="px-2 sm:px-4">
        <div className="flex my-4 overflow-x-auto scrollbar-hide ">
      
        {/* <div className="flex flex-row "> */}
          <section className="">
            <Column2
              imageName="deep.jpg"
              text="Deepanshu"
              text2="BPCL , KANERIKA , SMARTCOIN "
              text3="EX- Blaze AI"
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
