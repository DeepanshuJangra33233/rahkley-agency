import React from "react";
import { seoTitleList } from "./common/Helper";
import Image from "next/image";

const Seo = () => {
  return (
    <div className="min-h-screen bg-[#0d1010] relative flex items-center container mx-auto xl:max-w-[1140px] px-3 py-[50px]">
      <div className="w-full relative">
        <Image
          className="absolute top-1/2 -right-0 lg:right-0 -translate-y-1/2 max-w-[340px] lg:max-w-[430px] xl:max-w-[480px] w-full hidden md:block z-20"
          src="/assets/images/webp/giraffe_card.webp"
          width={511}
          height={514}
          alt="giraffe"
        />
        {seoTitleList.map((value, index) => (
          <div
            key={index}
            className="max-w-[650px] lg:max-w-[850px] xl:max-w-[940px] w-full seo_card relative bg-white bg-opacity-[0.1] hover:bg-opacity-0 p-2 sm:px-[30px] sm:py-[25px] lg:py-[43px] lg:ps-[60px] -mt-1 sm:-mt-2"
          >
            <p className="font-clash-display-semibold text-center md:text-start font-semibold text-lg relative z-30 xsm:text-xl md:text-2xl lg:text-3xl !leading-[50px] xl:text-4xxl bg-clip-text bg-headingWhiteGradient text-transparent">
              {value.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seo;
