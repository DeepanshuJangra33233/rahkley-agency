import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="bg-project bg-no-repeat bg-cover bg-right relative">
      <div className="container mx-auto xl:max-w-[1140px]">
        <div className="flex items-center flex-col md:flex-row md:pt-0 pt-10">
          <div className="md:max-w-[400px] lg:max-w-[582px] md:pt-[147px] pb-6 sm:pb-10 md:pb-[120px] lg:pb-[170px] xl:pb-[220px] text-center md:text-start px-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-semibold font-clash-display-semibold xl:leading-[108px] text-neutralWhite stroke stroke-neutralWhite">
              Have a <span className="">project </span>in mind?
            </h2>
            <button
              className="text-neutralWhite mt-[28px] text-base font-semibold font-plus-jakarta opacity-80 py-3 px-6 border-white border-2 hover:bg-white
           hover:text-black duration-300"
            >
              Let’s Discuss
            </button>
          </div>
          <div className="max-w-full md:max-w-[410px] lg:max-w-[550px] xl:max-w-[600px] w-full bg-[#1C1A1C] md:absolute right-0 top-0 flex items-center justify-center">
            <Image
              className="max-w-[250px] sm:max-w-[324px] md:max-w-[297px] lg:max-w-[386px] xl:max-w-[434px] w-full"
              width={434.11}
              height={772}
              src="/assets/gif/basketball-gif.gif"
              alt="basketball spinning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
