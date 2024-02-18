import React from "react";
import { DubleQutos, FourStartReview } from "./common/Icons";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="min-h-screen flex items-center container mx-auto xl:max-w-[1140px] px-3 py-[50px] relative">
        <Image
          className="right-[-145px] top-2 absolute curved_knife_animation hidden xl:block"
          src="/assets/images/png/curved_right_knife.png"
          width={167.85}
          height={114.77}
          alt="curved knife"
        />
        <Image
          className="left-[-145px] bottom-10 absolute curved_knife_animation hidden xl:block"
          src="/assets/images/png/curved_left_knife.png"
          width={167.85}
          height={114.77}
          alt="curved knife"
        />
        <div className="flex items-center w-full justify-between flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 text-center lg:text-start">
            <p className="opacity-70 text-base font-normal font-plus-jakarta text-neutralWhite leading-6">
              04/ Why us
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mx-auto lg:ms-0 font-clash-display-semibold bg-headingWhiteGradient bg-clip-text text-transparent md:!leading-67 sm:max-w-[463px] mb-3 sm:mb-4">
              Why should you choose us?
            </h2>
            <p className="lg:max-w-[85%] xl:max-w-[440px] text-neutralWhite text-base font-normal opacity-80 font-plus-jakarta mb-5 sm:mb-[35px] mx-auto lg:ms-0">
              We reveal what interests customers in your brand and bring it
              under the spotlight so you can outperform your competitors.
              Thinking outside the box to develop revenue-generating campaigns
              for your business. In other words, we are the creative partner
              you’ve always dreamed about!
            </p>
            <button
              className="text-neutralWhite text-base font-semibold font-plus-jakarta opacity-80 py-3 px-6 border-white border-2 hover:bg-white
           hover:text-black duration-300"
            >
              View Testimonials
            </button>
          </div>
          <div className="w-full relative mt-9 lg:mt-0 lg:w-1/2 xl:w-[40%] bg-reviewCard bg-cover bg-no-repeat bg-center p-5 xsm:ps-[30px] xsm:pe-10 xsm:pt-[67px] xsm:pb-[22px] border border-[#666767] bg-[rgba(255,_253,_255,_0.12)] rounded-[20px] shadow-[0px_4px_37px_0px_rgba(255,_255,_255,_0.15)_inset]">
            <span className="absolute -top-8 left-3 lg:-left-7 hidden sm:block">
              <DubleQutos />
            </span>
            <div className="mb-1 sm:mb-[10px] flex justify-center lg:justify-start">
              <FourStartReview />
            </div>
            <p className="opacity-80 font-plus-jakarta text-base italic text-neutralWhite leading-[25px] font-normal text-center lg:text-start">
              Lorem ipsum dolor sit amet consectetur. Vestibulum tempor diam
              ante quisque at ut. Nullam porta adipiscing elit ac ridiculus.
              Quam justo fusce pharetra est purus faucibus tellus justo
              vehicula. Risus odio diam interdum ullamcorper aliquam mi nulla
              est posuere massa estibulum in tincidunt ullamcorper condimentum.{" "}
              <span className="block">
                Sed euismod amet arcu curabitur mauris nunc.
              </span>
            </p>
            <div className="flex items-center mt-5 sm:mt-7 md:mt-[42px] justify-center lg:justify-start">
              <Image
                className="w-full max-w-[65px] sm:max-w-[80px]"
                src="/assets/images/png/user_avatar.png"
                alt="avatar"
                width={80}
                height={80}
              />
              <div className="ms-[15px]">
                <p className="text-2xl font-semibold font-clash-display-semibold bg-headingWhiteGradient bg-clip-text text-transparent">
                  Jhon Doe
                </p>
                <p className="opacity-80 font-plus-jakarta text-neutralWhite max-w-[190px] text-base font-normal">
                  Marketing Manager, ASD Enterprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
