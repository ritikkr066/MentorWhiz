"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      href:"home"
    },
    {
      id: 2,
      link: "About us",
      href:"aboutus"
    },
    {
      id: 3,
      link: "Become Mentor",
      href:"mentor"
    },
    {
      id: 4,
      link: "Plan",
      href:"plan"
    },
    {
      id: 5,
      link: "Contact Us",
      href:"contactus"
    },
    {
      id: 6,
      link: "FAQs",
      href:"faqs"
    },
  ];

  return (
    <div className="  border-[1px] z-50 border-blue-300 border-x-0  border-t-0   flex items-center   justify-between w-full h-20  px-4 text-white   nav">
      <div className="">
        {/* <h1 className="ml-2 text-5xl font-signature"><a className="ease-in-out delay-150 link-underline hover:transition hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="ml-2 text-5xl font-signature ">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            {/* Logo */}
            <Image src={"images/logo.svg"} width={100} height={100} alt="logo"/>
          </a>
        </h1>
      </div>

      <ul className="items-end justify-end hidden md:flex ">
        {links.map(({ id, link,href }) => (
          <li
            key={id}
            className="px-4 text-black capitalize duration-200 cursor-pointer nav-links hover:scale-105 hover:text-white link-underline"
          >
            <Link href={href}>{link}</Link>
          </li>
        ))}
        
      </ul>
      <span className="flex items-end justify-end border-gray-200 "><LoginBtn/></span>
      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-0 right-0 flex flex-col items-center justify-center w-[3/4] h-screen text-black bg-white">
          {links.map(({ id, link,href }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer"
            >
              <Link onClick={() => setNav(!nav)} href={href}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
       {/* <div className="border-gray-200 "><LoginBtn/></div> */}
    </div>
  );
};

export default Navbar;