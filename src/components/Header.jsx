"use client";
import React, { useState } from "react";
import { Logo } from "./common/Icons";
import Link from "next/link";

const Header = () => {
  // Using state hook to manage isActive state
  const [isActive, setIsActive] = useState(false);

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsActive(!isActive); // Toggling isActive state
    document.body.classList.toggle("overflow-hidden"); // Toggling overflow class on body
  };

  return (
    <>
      <div className="container mx-auto xl:max-w-[1140px] px-3 pt-3 sm:pt-6">
        <div className="flex items-center justify-between">
          {/* Link to home page */}
          <Link href="/" className="max-w-[50px] sm:max-w-[61px]">
            <Logo /> {/* Rendering Logo component */}
          </Link>
          <div
            className={`flex flex-col sm:flex-row items-center duration-300 gap-6 lg:gap-16 absolute sm:static bg-black sm:bg-transparent w-full  top-0 min-h-screen sm:min-h-full justify-center sm:justify-end ${
              isActive ? "left-0" : "-left-full"
            }`}
          >
            <Link
              href="#about-us"
              className="text-base text-neutralWhite sm:text-black font-semibold font-clash-display-semibold after:content-[''] after:bg-white sm:after:bg-black after:absolute relative after:w-0 hover:after:w-full after:duration-300 after:h-[2px] after:left-0 after:bottom-[-1px]"
            >
              About Us
            </Link>
            <Link
              href="#blog"
              className="text-base text-neutralWhite sm:text-black font-semibold font-clash-display-semibold after:content-[''] after:bg-white sm:after:bg-black after:absolute relative after:w-0 hover:after:w-full after:duration-300 after:h-[2px] after:left-0 after:bottom-[-1px]"
            >
              Blog
            </Link>
            <button className="text-base bg-white sm:bg-black font-semibold py-3 px-6 rounded-[50px] text-black sm:text-neutralWhite font-clash-display-semibold leading-17 hover:text-neutralWhite sm:hover:text-black hover:bg-transparent border-2 sm:border-0 border-white sm:hover:bg-white duration-300">
              Contact Us
            </button>
          </div>
          {/* Navbar toggle button for smaller screens */}
          <div
            className={`sm:hidden flex flex-col gap-1 cursor-pointer navTrigger z-10 ${
              isActive ? "active" : ""
            }`}
            onClick={toggleNavbar}
          >
            {/* Navbar toggle lines */}
            <span
              className={`h-[3.1px] w-[25px] inline-block rounded-lg ${
                isActive ? "bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={`h-[3px] w-[25px] inline-block rounded-lg ${
                isActive ? "bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={`h-[3px] w-[25px] inline-block rounded-lg ${
                isActive ? "bg-white" : "bg-black"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
